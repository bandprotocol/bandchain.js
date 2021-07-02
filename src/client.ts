import { NotIntegerError, NotFoundError } from './error'

import { grpc } from '@improbable-eng/grpc-web'
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport'

import { QueryClient } from '../proto/oracle/v1/query_pb_service'
import {
  QueryDataSourceRequest,
  QueryOracleScriptRequest,
  QueryRequestRequest,
  QueryRequestResponse,
  QueryReportersRequest,
} from '../proto/oracle/v1/query_pb'
import { DataSource, OracleScript } from '../proto/oracle/v1/oracle_pb'
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
            // throw new UnsuccessfulCallError('Address does not exist')
          }
          if (response.hasAccount()) {
            let accBaseAccount = response
              .getAccount()
              .unpack(
                BaseAccount.deserializeBinary,
                'cosmos.auth.v1beta1.BaseAccount',
              )
            resolve(accBaseAccount.toObject())
          }
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
            const tx = response.toObject().txResponse.logsList[0]
            for (let x = 0; x < tx.eventsList.length; x++) {
              if (tx.eventsList[x].type == 'report') {
                const eventList = tx.eventsList[x]
                for (let y = 0; y < eventList.attributesList.length; y++) {
                  if (eventList.attributesList[y].key == 'id')
                    resolve(eventList.attributesList[y].value)
                }
              }
            }
            reject(new NotFoundError('Request Id is not found'))
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

  // ! Functions below need to change to GRPC

  /*
  
  async getReferenceData(pairs: string[]): Promise<ReferenceData[]> {
    let symbolSet: Set<string> = new Set()
    pairs.forEach((pair: string) => {
      let symbols = pair.split('/')
      symbols.forEach((symbol: string) => {
        if (symbol === 'USD') return
        symbolSet.add(symbol)
      })
    })
    let symbolList: string[] = Array.from(symbolSet)
    let pricerParams: Params = {
      symbols: symbolList,
      min_count: 3,
      ask_count: 4,
    }
    let {price_results: priceData} = await this.get('/oracle/v1/request_prices', pricerParams)

    let symbolMap: any = {}
    symbolMap['USD'] = {
      symbol: 'USD',
      multiplier: '1000000000',
      px: '1000000000',
      request_id: 0,
      resolve_time: Math.floor(Date.now() / 1000).toString(),
    }
    priceData.map((price: any) => {
      symbolMap[price.symbol] = price
    })
    let data: ReferenceData[] = []
    pairs.forEach((pair) => {
      let [baseSymbol, quoteSymbol] = pair.split('/')

      data.push({
        pair,
        rate:
          (Number(symbolMap[baseSymbol].px) *
            Number(symbolMap[quoteSymbol].multiplier)) /
          (Number(symbolMap[quoteSymbol].px) *
            Number(symbolMap[baseSymbol].multiplier)),
        updatedAt: {
          base: Number(symbolMap[baseSymbol].resolve_time),
          quote: Number(symbolMap[quoteSymbol].resolve_time),
        },
        requestID: {
          base: Number(symbolMap[baseSymbol].request_id),
          quote: Number(symbolMap[quoteSymbol].request_id),
        },
      })
    })
    return data
  }

  */

  /*
  async getPriceSymbols(minCount: number, askCount: number): Promise<string[]> {
    if (!Number.isInteger(minCount))
      throw new NotIntegerError('minCount is not an integer')
    if (!Number.isInteger(askCount))
      throw new NotIntegerError('askCount is not an integer')
    let response = await this.getResult('/oracle/price_symbols', {
      min_count: minCount,
      ask_count: askCount,
    })
    return response
  }
  */

  /**
   * Get the latest request
   * @param oid Oracle script ID
   * @param calldata The input parameters associated with the request
   * @param minCount The minimum number of validators necessary for the request to proceed to the execution phase
   * @param askCount The number of validators that are requested to respond to this request
   * @returns  A Promise of RequestInfo.
   */
  /*
  async getLatestRequest(
    oid: number,
    calldata: Buffer,
    minCount: number,
    askCount: number,
  ): Promise<RequestInfo> {
    if (!Number.isInteger(oid))
      throw new NotIntegerError('oid is not an integer')
    if (!Number.isInteger(minCount))
      throw new NotIntegerError('minCount is not an integer')
    if (!Number.isInteger(askCount))
      throw new NotIntegerError('askCount is not an integer')

    const response = await this.getResult(`/oracle/request_search`, {
      oid: oid,
      calldata: calldata.toString('base64'),
      min_count: minCount,
      ask_count: askCount,
    })
    return {
      request: {
        oracleScriptID: parseInt(response.request.oracle_script_id),
        requestedValidators: response.request.requested_validators,
        minCount: parseInt(response.request.min_count),
        requestHeight: parseInt(response.request.request_height),
        clientID: response.request.client_id ? response.request.client_id : '',
        calldata: response.request.calldata
          ? Buffer.from(response.request.calldata, 'base64')
          : Buffer.from(''),
        rawRequests: response.request.raw_requests.map(
          (request: { [key: string]: any }) => {
            return {
              externalID: request.external_id
                ? parseInt(request.external_id)
                : 0,
              dataSourceID: parseInt(request.data_source_id),
              calldata: request.calldata
                ? Buffer.from(request.calldata, 'base64')
                : Buffer.from(''),
            }
          },
        ),
      },
      reports: response.reports?.map((report: { [key: string]: any }) => {
        return {
          validator: report.validator,
          inBeforeResolve: !!report.in_before_resolve,
          rawReports: report.raw_reports.map(
            (rawReport: { [key: string]: any }) => {
              return {
                externalID: rawReport.external_id
                  ? parseInt(rawReport.external_id)
                  : 0,
                data: rawReport.data
                  ? Buffer.from(rawReport.data, 'base64')
                  : Buffer.from(''),
              }
            },
          ),
        }
      }),
      result: response.result && {
        requestPacketData: {
          clientID: response.result.request_packet_data.client_id
            ? response.result.request_packet_data.client_id
            : '',
          askCount: parseInt(response.result.request_packet_data.ask_count),
          minCount: parseInt(response.result.request_packet_data.min_count),
          oracleScriptID: parseInt(
            response.result.request_packet_data.oracle_script_id,
          ),
          calldata: response.result.request_packet_data.calldata
            ? Buffer.from(
                response.result.request_packet_data.calldata,
                'base64',
              )
            : Buffer.from(''),
        },
        responsePacketData: {
          requestID: parseInt(response.result.response_packet_data.request_id),
          requestTime: parseInt(
            response.result.response_packet_data.request_time,
          ),
          resolveTime: parseInt(
            response.result.response_packet_data.resolve_time,
          ),
          resolveStatus: response.result.response_packet_data.resolve_status,
          ansCount: response.result.response_packet_data.ans_count
            ? parseInt(response.result.response_packet_data.ans_count)
            : 0,
          clientID: response.result.response_packet_data.client_id
            ? response.result.response_packet_data.client_id
            : '',
          result: response.result.response_packet_data.result
            ? Buffer.from(response.result.response_packet_data.result, 'base64')
            : Buffer.from(''),
        },
      },
    }
  }

  */

  /*
  async getRequestEVMProofByRequestID(requestID: number): Promise<EVMProof> {
    if (!Number.isInteger(requestID))
      throw new NotIntegerError('requestID is not an integer')
    const response = await this.getResult(`/oracle/proof/${requestID}`)
    return {
      jsonProof: response.jsonProof,
      evmProofBytes: Buffer.from(response.evmProofBytes, 'hex'),
    }
  }


  */
}
