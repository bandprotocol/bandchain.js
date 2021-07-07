import { NotIntegerError } from './error'

import { grpc } from '@improbable-eng/grpc-web'
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport'

import { QueryClient } from '../proto/oracle/v1/query_pb_service'
import {
  QueryDataSourceRequest,
  QueryOracleScriptRequest,
  QueryRequestRequest,
  QueryRequestResponse,
  QueryReportersRequest,
  QueryRequestPriceRequest,
  QueryRequestSearchRequest,
} from '../proto/oracle/v1/query_pb'
import {
  DataSource,
  OracleScript,
  PriceResult,
} from '../proto/oracle/v1/oracle_pb'
import { ServiceClient } from '../proto/cosmos/base/tendermint/v1beta1/query_pb_service'

import {
  GetLatestBlockRequest,
  GetLatestBlockResponse,
} from '../proto/cosmos/base/tendermint/v1beta1/query_pb'

import { QueryClient as AuthQueryClient } from '../proto/cosmos/auth/v1beta1/query_pb_service'
import { QueryAccountRequest } from '../proto/cosmos/auth/v1beta1/query_pb'

import { ServiceClient as TxServiceClient } from '../proto/cosmos/tx/v1beta1/service_pb_service'
import { GetTxRequest } from '../proto/cosmos/tx/v1beta1/service_pb'

import { BroadcastTxRequest } from '../proto/cosmos/tx/v1beta1/service_pb'

import { TxResponse } from '../proto/cosmos/base/abci/v1beta1/abci_pb'
import { BaseAccount } from '../proto/cosmos/auth/v1beta1/auth_pb'
import { ReferenceData } from 'data'

export default class Client {
  queryClient: QueryClient
  serviceClient: ServiceClient
  authQueryClient: AuthQueryClient
  txServiceClient: TxServiceClient
  constructor(grpcUrl: string) {
    this.queryClient = new QueryClient(grpcUrl, {
      transport: NodeHttpTransport(),
    })

    this.serviceClient = new ServiceClient(grpcUrl, {
      transport: NodeHttpTransport(),
    })

    this.authQueryClient = new AuthQueryClient(grpcUrl, {
      transport: NodeHttpTransport(),
    })

    this.txServiceClient = new TxServiceClient(grpcUrl, {
      transport: NodeHttpTransport(),
    })
  }

  async getDataSource(id: number): Promise<DataSource.AsObject> {
    if (!Number.isInteger(id)) throw new NotIntegerError('id is not an integer')

    const request = new QueryDataSourceRequest()
    request.setDataSourceId(id)
    return new Promise((resolve, reject) => {
      this.queryClient.dataSource(
        request,
        {} as grpc.Metadata,
        (err, response) => {
          if (err !== null) {
            reject(err)
            return
          }

          if (response !== null && response.hasDataSource()) {
            resolve(response.getDataSource().toObject())
          }
        },
      )
    })
  }

  async getOracleScript(id: number): Promise<OracleScript.AsObject> {
    if (!Number.isInteger(id)) throw new NotIntegerError('id is not an integer')

    const request = new QueryOracleScriptRequest()
    request.setOracleScriptId(id)
    return new Promise((resolve, reject) => {
      this.queryClient.oracleScript(
        request,
        {} as grpc.Metadata,
        (err, response) => {
          if (err !== null) {
            reject(err)
            return
          }

          if (response !== null && response.hasOracleScript()) {
            resolve(response.getOracleScript().toObject())
          }
        },
      )
    })
  }

  async getRequestById(id: number): Promise<QueryRequestResponse.AsObject> {
    if (!Number.isInteger(id)) throw new NotIntegerError('id is not an integer')

    const request = new QueryRequestRequest()
    request.setRequestId(id)
    return new Promise((resolve, reject) => {
      this.queryClient.request(
        request,
        {} as grpc.Metadata,
        (err, response) => {
          if (err !== null) {
            reject(err)
            return
          }

          if (response !== null) {
            resolve(response.toObject())
          }
        },
      )
    })
  }

  async getReporters(validator: string): Promise<string[]> {
    const request = new QueryReportersRequest()
    request.setValidatorAddress(validator)
    return new Promise((resolve, reject) => {
      this.queryClient.reporters(
        request,
        {} as grpc.Metadata,
        (err, response) => {
          if (err !== null) {
            reject(err)
            return
          }

          if (response !== null && response) {
            resolve(response.getReporterList())
          }
        },
      )
    })
  }

  async getLatestBlock(): Promise<GetLatestBlockResponse.AsObject> {
    const request = new GetLatestBlockRequest()
    return new Promise((resolve, reject) => {
      this.serviceClient.getLatestBlock(
        request,
        {} as grpc.Metadata,
        (err, response) => {
          if (err !== null) {
            reject(err)
            return
          }

          if (response !== null && response) {
            resolve(response.toObject())
          }
        },
      )
    })
  }

  async getAccount(address: string): Promise<BaseAccount.AsObject> {
    const request = new QueryAccountRequest()
    request.setAddress(address)
    return new Promise((resolve, reject) => {
      this.authQueryClient.account(
        request,
        {} as grpc.Metadata,
        (err, response) => {
          if (err !== null || response === null) {
            reject(err)
            return
          }
          if (response.hasAccount()) {
            let accBaseAccount = response
              .getAccount()
              .unpack(
                BaseAccount.deserializeBinary,
                'cosmos.auth.v1beta1.BaseAccount',
              )
            if (accBaseAccount.getAddress) {
              resolve(accBaseAccount.toObject())
            }
          }
          resolve(undefined)
        },
      )
    })
  }

  async getRequestIdByTxHash(txHash: string): Promise<any> {
    const request = new GetTxRequest()
    request.setHash(txHash)
    return new Promise((resolve, reject) => {
      this.txServiceClient.getTx(
        request,
        {} as grpc.Metadata,
        (err, response) => {
          if (err !== null) {
            reject(err)
            return
          }
          if (
            response !== null &&
            response.hasTxResponse() &&
            response.toObject().txResponse.logsList
          ) {
            let reqIdList = []
            for (
              let z = 0;
              z < response.toObject().txResponse.logsList.length;
              z++
            ) {
              let tx = response.toObject().txResponse.logsList[z]
              for (let x = 0; x < tx.eventsList.length; x++) {
                if (
                  tx.eventsList[x].type == 'report' ||
                  tx.eventsList[x].type == 'request'
                ) {
                  const eventList = tx.eventsList[x]
                  for (let y = 0; y < eventList.attributesList.length; y++) {
                    if (eventList.attributesList[y].key == 'id')
                      reqIdList.push(eventList.attributesList[y].value)
                  }
                }
              }
            }
            resolve(reqIdList)
          }
        },
      )
    })
  }

  async getChainId(): Promise<string> {
    const latestBlock = await this.getLatestBlock()
    return latestBlock.block.header.chainId
  }

  async sendTxSyncMode(
    txBytes: Uint8Array | string,
  ): Promise<TxResponse.AsObject> {
    const request = new BroadcastTxRequest()
    request.setTxBytes(txBytes)
    request.setMode(2)
    return new Promise((resolve, reject) => {
      this.txServiceClient.broadcastTx(
        request,
        {} as grpc.Metadata,
        (err, response) => {
          if (err !== null) {
            reject(err)
            return
          }
          if (response !== null && response.hasTxResponse()) {
            resolve(response.getTxResponse().toObject())
          }
        },
      )
    })
  }

  async sendTxAsyncMode(
    txBytes: Uint8Array | string,
  ): Promise<TxResponse.AsObject> {
    const request = new BroadcastTxRequest()
    request.setTxBytes(txBytes)
    request.setMode(3)
    return new Promise((resolve, reject) => {
      this.txServiceClient.broadcastTx(
        request,
        {} as grpc.Metadata,
        (err, response) => {
          if (err !== null) {
            reject(err)
            return
          }
          if (response !== null && response.hasTxResponse()) {
            resolve(response.getTxResponse().toObject())
          }
        },
      )
    })
  }

  async sendTxBlockMode(
    txBytes: Uint8Array | string,
  ): Promise<TxResponse.AsObject> {
    const request = new BroadcastTxRequest()
    request.setTxBytes(txBytes)
    request.setMode(1)
    return new Promise((resolve, reject) => {
      this.txServiceClient.broadcastTx(
        request,
        {} as grpc.Metadata,
        (err, response) => {
          if (err !== null) {
            reject(err)
            return
          }
          if (response !== null && response.hasTxResponse()) {
            resolve(response.getTxResponse().toObject())
          }
        },
      )
    })
  }

  async getReferenceData(
    pairs: string[],
    minCount: number,
    askCount: number,
  ): Promise<ReferenceData[]> {
    const request = new QueryRequestPriceRequest()
    let symbolSet: Set<string> = new Set()
    pairs.forEach((pair) => {
      let symbols = pair.split('/')
      symbols.forEach((symbol) => {
        if (symbol === 'USD') return
        symbolSet.add(symbol)
      })
    })
    request.setSymbolsList(Array.from(symbolSet))
    request.setAskCount(askCount)
    request.setMinCount(minCount)
    return new Promise((resolve, reject) => {
      this.queryClient.requestPrice(
        request,
        {} as grpc.Metadata,
        (err, response) => {
          if (err !== null) {
            reject(err)
            return
          }
          if (response !== null) {
            const finalResult: ReferenceData[] = []
            const symbolMap: { [k: string]: PriceResult.AsObject } = {}
            symbolMap['USD'] = {
              symbol: 'USD',
              multiplier: 1000000000,
              px: 1000000000,
              requestId: 0,
              resolveTime: Math.floor(Date.now() / 1000),
            }
            response.toObject().priceResultsList.forEach((priceResult) => {
              symbolMap[priceResult.symbol] = priceResult
            })

            pairs.forEach((pair) => {
              let [baseSymbol, quoteSymbol] = pair.split('/')

              finalResult.push({
                pair,
                rate:
                  (Number(symbolMap[baseSymbol].px) *
                    Number(symbolMap[quoteSymbol].multiplier)) /
                  (Number(symbolMap[quoteSymbol].px) *
                    Number(symbolMap[baseSymbol].multiplier)),
                updatedAt: {
                  base: Number(symbolMap[baseSymbol].resolveTime),
                  quote: Number(symbolMap[quoteSymbol].resolveTime),
                },
                requestId: {
                  base: Number(symbolMap[baseSymbol].requestId),
                  quote: Number(symbolMap[quoteSymbol].requestId),
                },
              })
            })
            resolve(finalResult)
          }
        },
      )
    })
  }

  async getLatestRequest(
    oid: number,
    calldata: string,
    minCount: number,
    askCount: number,
  ): Promise<QueryRequestResponse.AsObject> {
    if (!Number.isInteger(oid))
      throw new NotIntegerError('oid is not an integer')
    if (!Number.isInteger(minCount))
      throw new NotIntegerError('minCount is not an integer')
    if (!Number.isInteger(askCount))
      throw new NotIntegerError('askCount is not an integer')
    const request = new QueryRequestSearchRequest()
    request.setOracleScriptId(oid)
    request.setCalldata(calldata)
    request.setAskCount(askCount)
    request.setMinCount(minCount)
    return new Promise((resolve, reject) => {
      this.queryClient.requestSearch(
        request,
        {} as grpc.Metadata,
        (err, response) => {
          if (err !== null) {
            reject(err)
            return
          }
          if (response !== null && response.hasRequest()) {
            resolve(response.getRequest().toObject())
          }
        },
      )
    })
  }

  // ! Functions below need to change to GRPC
  // async getPriceSymbols(minCount: number, askCount: number): Promise<string[]> {}
  // async getRequestEVMProofByRequestID(requestID: number): Promise<EVMProof> {}
}
