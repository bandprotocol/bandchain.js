import { Client, Coin } from '../../src'
import { grpc } from '@improbable-eng/grpc-web'

import {
  QueryClient,
  ServiceError,
  UnaryResponse,
} from '../../proto/oracle/v1/query_pb_service'

import {
  QueryDataSourceRequest,
  QueryDataSourceResponse,
  QueryOracleScriptRequest,
  QueryOracleScriptResponse,
  QueryReportersRequest,
  QueryReportersResponse,
  QueryRequestPriceRequest,
  QueryRequestPriceResponse,
  QueryRequestSearchRequest,
  QueryRequestSearchResponse,
  QueryRequestResponse,
} from '../../proto/oracle/v1/query_pb'
import {
  DataSource,
  OracleScript,
  PriceResult,
  Request,
  RawRequest,
  Report,
  RawReport,
  Result,
} from '../../proto/oracle/v1/oracle_pb'
import { ServiceClient } from '../../proto/cosmos/base/tendermint/v1beta1/query_pb_service'

import {
  GetLatestBlockRequest,
  GetLatestBlockResponse,
} from '../../proto/cosmos/base/tendermint/v1beta1/query_pb'
import { BlockID, Header } from '../../proto/tendermint/types/types_pb'
import { Block } from '../../proto/tendermint/types/block_pb'

import { QueryClient as AuthQueryClient } from '../../proto/cosmos/auth/v1beta1/query_pb_service'
import { QueryClient as QueryAllBalances } from '../../proto/cosmos/bank/v1beta1/query_pb_service'

import {
  QueryAllBalancesRequest,
  QueryAllBalancesResponse,
} from '../../proto/cosmos/bank/v1beta1/query_pb'

import {
  QueryAccountRequest,
  QueryAccountResponse,
} from '../../proto/cosmos/auth/v1beta1/query_pb'

import { ServiceClient as TxServiceClient } from '../../proto/cosmos/tx/v1beta1/service_pb_service'
import {
  GetTxRequest,
  GetTxResponse,
} from '../../proto/cosmos/tx/v1beta1/service_pb'
import {
  Tx,
  TxBody,
  AuthInfo,
  SignerInfo,
} from '../../proto/cosmos/tx/v1beta1/tx_pb'
import { Any } from 'google-protobuf/google/protobuf/any_pb'
import { ABCIMessageLog } from '../../proto/cosmos/base/abci/v1beta1/abci_pb'
import { TxResponse } from '../../proto/cosmos/base/abci/v1beta1/abci_pb'
import { StringEvent } from '../../proto/cosmos/base/abci/v1beta1/abci_pb'
import { Attribute } from '../../proto/cosmos/base/abci/v1beta1/abci_pb'
import { SignMode } from '../../proto/cosmos/tx/signing/v1beta1/signing_pb'
import { ModeInfo, Fee } from '../../proto/cosmos/tx/v1beta1/tx_pb'

jest.mock('../../proto/oracle/v1/query_pb_service')
jest.mock('../../proto/cosmos/base/tendermint/v1beta1/query_pb_service')
jest.mock('../../proto/cosmos/auth/v1beta1/query_pb_service')
jest.mock('../../proto/cosmos/tx/v1beta1/service_pb_service')
jest.mock('../../proto/cosmos/bank/v1beta1/query_pb_service')

const STATIC_DATE = 1625578450000
Date.now = jest.fn(() => STATIC_DATE)

const MockedQueryClient = jest.mocked(QueryClient)
const MockedAuthQueryClient = jest.mocked(AuthQueryClient)
const MockedServiceClient = jest.mocked(ServiceClient)
const MockedTxService = jest.mocked(TxServiceClient)
const MockedQueryAllBalances = jest.mocked(QueryAllBalances)

const TEST_GRPC = 'http://localhost:8080'

beforeEach(() => {
  MockedQueryClient.mockClear()
  MockedServiceClient.mockClear()
  MockedAuthQueryClient.mockClear()
  MockedTxService.mockClear()
  MockedQueryAllBalances.mockClear()
})

describe('Client get data', () => {
  it('get data source by ID success', async () => {
    expect(MockedQueryClient).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedQueryClient).toHaveBeenCalledTimes(1)

    const mockedGRPCClient = jest.mocked(MockedQueryClient.mock.instances[0])
    type ExpectedDataSourceSignature = (
      requestMessage: QueryDataSourceRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: QueryDataSourceResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedDataSource = jest.mocked(
      mockedGRPCClient.dataSource as ExpectedDataSourceSignature,
    )

    mockedDataSource.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const dataSource = new DataSource()
        dataSource.setName('CoinGecko Cryptocurrency Price')
        dataSource.setDescription(
          'Retrieves current price of a cryptocurrency from https://www.coingecko.com',
        )
        dataSource.setOwner('band1m5lq9u533qaya4q3nfyl6ulzqkpkhge9q8tpzs')
        dataSource.setFilename(
          'c56de9061a78ac96748c83e8a22330accf6ee8ebb499c8525613149a70ec49d0',
        )

        const response = new QueryDataSourceResponse()
        response.setDataSource(dataSource)

        callback(null, response)
        return { cancel: function () {} }
      },
    )

    const expected = {
      owner: 'band1m5lq9u533qaya4q3nfyl6ulzqkpkhge9q8tpzs',
      name: 'CoinGecko Cryptocurrency Price',
      description:
        'Retrieves current price of a cryptocurrency from https://www.coingecko.com',
      filename:
        'c56de9061a78ac96748c83e8a22330accf6ee8ebb499c8525613149a70ec49d0',
      feeList: [],
      treasury: '',
    }
    const response = await client.getDataSource(1)
    expect(mockedDataSource).toHaveBeenCalledTimes(1)
    expect(response).toEqual(expected)
  })
})

describe('get oracle script by ID', () => {
  it('get oracle script by ID success', async () => {
    expect(MockedQueryClient).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedQueryClient).toHaveBeenCalledTimes(1)

    const mockedGRPCClient = jest.mocked(MockedQueryClient.mock.instances[0])
    type ExpectedOracleScriptSignature = (
      requestMessage: QueryOracleScriptRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: QueryOracleScriptResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedOracleScript = jest.mocked(
      mockedGRPCClient.oracleScript as ExpectedOracleScriptSignature,
    )

    mockedOracleScript.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const oracleScript = new OracleScript()
        oracleScript.setOwner('band17f6n25na5kume99j4qdfzlf7jnpu9u2neqqvt8')
        oracleScript.setName('OS 03')
        oracleScript.setDescription('TBD')
        oracleScript.setFilename(
          '2bf80fa07dc9585305818939853833f140fdb7e7bab824a628dc2ebc2094f482',
        )
        oracleScript.setSchema(
          '{base_symbol:string,quote_symbol:string,multiplier:u64}/{px:u64}',
        )
        oracleScript.setSourceCodeUrl(
          'https://ipfs.io/ipfs/QmcXZKevdv2QCAkzKF69YzSK6w7KziEugaVyyjuLF1RM6u',
        )

        const response = new QueryOracleScriptResponse()
        response.setOracleScript(oracleScript)

        callback(null, response)
        return { cancel: function () {} }
      },
    )

    const expected = {
      owner: 'band17f6n25na5kume99j4qdfzlf7jnpu9u2neqqvt8',
      name: 'OS 03',
      description: 'TBD',
      filename:
        '2bf80fa07dc9585305818939853833f140fdb7e7bab824a628dc2ebc2094f482',
      schema:
        '{base_symbol:string,quote_symbol:string,multiplier:u64}/{px:u64}',
      sourceCodeUrl:
        'https://ipfs.io/ipfs/QmcXZKevdv2QCAkzKF69YzSK6w7KziEugaVyyjuLF1RM6u',
    }

    const response = await client.getOracleScript(1)
    expect(mockedOracleScript).toHaveBeenCalledTimes(1)
    expect(response).toEqual(expected)
  })
})

describe('get latest block', () => {
  it('get latest block success', async () => {
    expect(MockedServiceClient).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedServiceClient).toHaveBeenCalledTimes(1)

    const mockedServiceClient = jest.mocked(
      MockedServiceClient.mock.instances[0],
    )
    type ExpectedLatestBlockSignature = (
      requestMessage: GetLatestBlockRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: GetLatestBlockResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedLatestBlock = jest.mocked(
      mockedServiceClient.getLatestBlock as ExpectedLatestBlockSignature,
    )

    mockedLatestBlock.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const response = new GetLatestBlockResponse()
        const blockId = new BlockID()
        blockId.setHash(
          '391E99908373F8590C928E0619956DA3D87EB654445DA4F25A185C9718561D53',
        )
        response.setBlockId(blockId)
        const block = new Block()
        const header = new Header()
        header.setChainId('bandchain')
        header.setHeight(1032007)
        header.setLastCommitHash(
          '17B2CE4ABA910E85847537F1323DB95C9F16C20C60E9B9BBB04C633C3125BD92',
        )
        header.setDataHash(
          'EFE5E3F549554FEE8EB9B393740C250D74580427A96A175ABB105806039CFFE2',
        )
        header.setValidatorsHash(
          'E3F0EA129867E1AB4D7D6A97C23771D4D89B9E4DFE0A5B11E03B681244E00151',
        )
        header.setNextValidatorsHash(
          'E3F0EA129867E1AB4D7D6A97C23771D4D89B9E4DFE0A5B11E03B681244E00151',
        )
        header.setConsensusHash(
          '0EAA6F4F4B8BD1CC222D93BBD391D07F074DE6BE5A52C6964875BB355B7D0B45',
        )
        header.setAppHash(
          '6E2B1ECE9D912D86C25182E8B7419583ABCE978BFC66DC2556BB0D06A8D528EF',
        )
        header.setLastResultsHash('')
        header.setEvidenceHash('')
        header.setProposerAddress('BDB6A0728C8DFE2124536F16F2BA428FE767A8F9')
        block.setHeader(header)
        response.setBlock(block)
        callback(null, response)
        return { cancel: function () {} }
      },
    )

    const expected = {
      blockId: {
        hash: '391E99908373F8590C928E0619956DA3D87EB654445DA4F25A185C9718561D53',
      },
      block: {
        header: {
          chainId: 'bandchain',
          height: 1032007,
          lastCommitHash:
            '17B2CE4ABA910E85847537F1323DB95C9F16C20C60E9B9BBB04C633C3125BD92',

          dataHash:
            'EFE5E3F549554FEE8EB9B393740C250D74580427A96A175ABB105806039CFFE2',

          validatorsHash:
            'E3F0EA129867E1AB4D7D6A97C23771D4D89B9E4DFE0A5B11E03B681244E00151',

          nextValidatorsHash:
            'E3F0EA129867E1AB4D7D6A97C23771D4D89B9E4DFE0A5B11E03B681244E00151',

          consensusHash:
            '0EAA6F4F4B8BD1CC222D93BBD391D07F074DE6BE5A52C6964875BB355B7D0B45',

          appHash:
            '6E2B1ECE9D912D86C25182E8B7419583ABCE978BFC66DC2556BB0D06A8D528EF',

          lastResultsHash: '',
          evidenceHash: '',
          proposerAddress: 'BDB6A0728C8DFE2124536F16F2BA428FE767A8F9',
        },
      },
    }
    const response = await client.getLatestBlock()
    expect(mockedLatestBlock).toHaveBeenCalledTimes(1)
    expect(response).toEqual(expected)
  })
})

describe('get reporters', () => {
  it('get reporters success', async () => {
    expect(MockedQueryClient).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedQueryClient).toHaveBeenCalledTimes(1)

    const mockedGRPCClient = jest.mocked(MockedQueryClient.mock.instances[0])
    type ExpectedReportersSignature = (
      requestMessage: QueryReportersRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: QueryReportersResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedReporters = jest.mocked(
      mockedGRPCClient.reporters as ExpectedReportersSignature,
    )

    mockedReporters.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const reporters = [
          'band17n5rmujk78nkgss7tjecg4nfzn6geg4cvaqt5h',
          'band1wc6r20m8qg7p3lze55kzen5uwssdvwr7wl5w4q',
          'band1wm0lw8wzt094xdyxx4ukx432q9vcwdl9zmwa4x',
          'band10ptt5622ezszsvrcum07ehng3merea9x5jetv2',
          'band10lyra24wxsme03pe47du6xfurtsqzs99mn5r94',
          'band1ek7hfydf3xgz3k6nnsy2zrg0xxuzkvhzrykrn5',
        ]
        const response = new QueryReportersResponse()
        response.setReporterList(reporters)

        callback(null, response)
        return { cancel: function () {} }
      },
    )

    const expected = [
      'band17n5rmujk78nkgss7tjecg4nfzn6geg4cvaqt5h',
      'band1wc6r20m8qg7p3lze55kzen5uwssdvwr7wl5w4q',
      'band1wm0lw8wzt094xdyxx4ukx432q9vcwdl9zmwa4x',
      'band10ptt5622ezszsvrcum07ehng3merea9x5jetv2',
      'band10lyra24wxsme03pe47du6xfurtsqzs99mn5r94',
      'band1ek7hfydf3xgz3k6nnsy2zrg0xxuzkvhzrykrn5',
    ]
    const response = await client.getReporters(
      'bandvaloper17n5rmujk78nkgss7tjecg4nfzn6geg4cqtyg3u',
    )
    expect(mockedReporters).toHaveBeenCalledTimes(1)
    expect(response).toEqual(expected)
  })
})

describe('get request id by transaction hash', () => {
  it('success, with report tx', async () => {
    expect(MockedTxService).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedTxService).toHaveBeenCalledTimes(1)
    const mockedTxServices = jest.mocked(MockedTxService.mock.instances[0])

    type ExpectedGetTxSignature = (
      requestMessage: GetTxRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: GetTxResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedTxRequest = jest.mocked(
      mockedTxServices.getTx as ExpectedGetTxSignature,
    )
    mockedTxRequest.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const response = new GetTxResponse()
        const tx = new Tx()
        const txBody = new TxBody()
        const anyMsgList = new Any()
        anyMsgList.setTypeUrl('/oracle.v1.MsgReportData')
        anyMsgList.setValue(
          'CKiHARKGAQgBGoEBMDQzYTYxNzkzNjBiZjhhZDljMTJlMmM0YzQ0YjU0NzM1MDE1OTQzZTMxMWIwMGFhN2U3ODc5YmJmZjI5ZjY2NGVkOTIwNDVhYjQ3NDYzNDI4YTI1OWFmZjEzNGRjMDU1YjlkOTc5MGRhN2UyMWJmZTg0NzY0NjYyNGNhNWRiMjMKGjJiYW5kdmFsb3BlcjFkOTZ1MHFsdmRwNnZ4M2o2cjMzbHVqcjkzZjdnZHl5NmVyYzgzOSIrYmFuZDFnMmh5N3FwNXJ0OGc0cjhwMzh3M3E1bWFtZ3VnZ2wycGp1d3Zrdw==',
        )
        txBody.setMessagesList([anyMsgList])
        txBody.setMemo('yoda:2.0.3/exec:lambda:2.0.0')
        txBody.setTimeoutHeight(0)

        const authInfo = new AuthInfo()
        const signerInfo = new SignerInfo()
        const anyPublicKey = new Any()
        anyPublicKey.setTypeUrl('/cosmos.crypto.secp256k1.PubKey')
        anyPublicKey.setValue(
          'CiEDMjXNir3uQ0slLlvp19D16YMl6myAW26009DGAh4dLiw=',
        )
        signerInfo.setPublicKey(anyPublicKey)
        const modeInfo = new ModeInfo()
        const modeSingle = new ModeInfo.Single()
        modeSingle.setMode(SignMode.SIGN_MODE_DIRECT)
        modeInfo.setSingle(modeSingle)
        signerInfo.setModeInfo(modeInfo)
        signerInfo.setSequence(3363)
        authInfo.setSignerInfosList([signerInfo])
        const fee = new Fee()
        fee.setGasLimit(76153)
        authInfo.setFee(fee)
        tx.setSignaturesList([
          'nAWQjUQ8B9PjfGhkW0OoUGzwIcFat7ODpJfCkmrpPGEjJAoAfo4FMe7p2+EeL4azogppzU0jc37hGKm8rMSqg==',
        ])
        const txResponse = new TxResponse()
        txResponse.setHeight(206077)
        txResponse.setTxhash(
          'FF88A361014A8CC2283961D632F2A00BB9CC8C168D8AE7F307F50E5D8A3945D2',
        )
        txResponse.setCodespace('')
        txResponse.setCode(0)
        txResponse.setData('0A080A067265706F7274')
        txResponse.setRawLog(
          '[{"events":[{"type":"message","attributes":[{"key":"action","value":"report"}]},{"type":"report","attributes":[{"key":"id","value":"17320"},{"key":"validator","value":"bandvaloper1d96u0qlvdp6vx3j6r33lujr93f7gdyy6erc839"}]}]}]',
        )
        const abciMessageLog1 = new ABCIMessageLog()
        abciMessageLog1.setMsgIndex(0)
        abciMessageLog1.setLog('')
        const stringEvent1 = new StringEvent()
        stringEvent1.setType('message')
        const attribute1 = new Attribute()
        attribute1.setKey('action')
        attribute1.setValue('report')
        stringEvent1.setAttributesList([attribute1])
        const stringEvent2 = new StringEvent()
        stringEvent2.setType('report')
        const attribute2 = new Attribute()
        attribute2.setKey('id')
        attribute2.setValue('17320')
        const attribute3 = new Attribute()
        attribute3.setKey('validator')
        attribute3.setValue(
          'bandvaloper1d96u0qlvdp6vx3j6r33lujr93f7gdyy6erc839',
        )
        stringEvent2.setAttributesList([attribute2, attribute3])
        abciMessageLog1.setEventsList([stringEvent1, stringEvent2])
        txResponse.setLogsList([abciMessageLog1])
        txResponse.setInfo('')
        txResponse.setGasWanted(76153)
        txResponse.setGasUsed(66833)
        const anyTx = new Any()
        anyTx.setTypeUrl('/cosmos.tx.v1beta1.Tx')
        anyTx.setValue(
          'CqwCCosCChgvb3JhY2xlLnYxLk1zZ1JlcG9ydERhdGES7gEIqIcBEoYBCAEagQEwNDNhNjE3OTM2MGJmOGFkOWMxMmUyYzRjNDRiNTQ3MzUwMTU5NDNlMzExYjAwYWE3ZTc4NzliYmZmMjlmNjY0ZWQ5MjA0NWFiNDc0NjM0MjhhMjU5YWZmMTM0ZGMwNTViOWQ5NzkwZGE3ZTIxYmZlODQ3NjQ2NjI0Y2E1ZGIyMwoaMmJhbmR2YWxvcGVyMWQ5NnUwcWx2ZHA2dngzajZyMzNsdWpyOTNmN2dkeXk2ZXJjODM5IitiYW5kMWcyaHk3cXA1cnQ4ZzRyOHAzOHczcTVtYW1ndWdnbDJwanV3dmt3Ehx5b2RhOjIuMC4zL2V4ZWM6bGFtYmRhOjIuMC4wElkKUQpGCh8vY29zbW9zLmNyeXB0by5zZWNwMjU2azEuUHViS2V5EiMKIQMyNc2Kve5DSyUuW+nX0PXpgyXqbIBbbrTT0MYCHh0uLBIECgIIARijGhIEEPnSBBpAnAWQjUQ8B9PjfGhkW0OoUGzwIcFat7ODpJfCkmrpPGEjJAoAfo+4FMe7p2+EeL4azogppzU0jc37hGKm8rMSqg==',
        )
        txResponse.setTx(anyTx)
        txResponse.setTimestamp('2021-06-29T05:01:48Z')
        response.setTxResponse(txResponse)

        callback(null, response)
        return { cancel: function () {} }
      },
    )

    const response = await client.getRequestIdByTxHash(
      '90ED70061C1A24B1141F81BADEDAB19570D0B9B255412BF5D680A9BC93539115',
    )
    // const value = [expected.txResponse.logsList[0].eventsList[1].attributesList[0].value]
    expect(mockedTxRequest).toHaveBeenCalledTimes(1)
    expect(response).toEqual([17320])
  })
  it('success, with request tx (multiple id)', async () => {
    expect(MockedTxService).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedTxService).toHaveBeenCalledTimes(1)
    const mockedTxServices = jest.mocked(MockedTxService.mock.instances[0])

    type ExpectedGetTxSignature = (
      requestMessage: GetTxRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: GetTxResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedTxRequest = jest.mocked(
      mockedTxServices.getTx as ExpectedGetTxSignature,
    )
    mockedTxRequest.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const response = new GetTxResponse()
        const tx = new Tx()
        const txBody = new TxBody()
        const anyMsgList = new Any()
        anyMsgList.setTypeUrl('/oracle.v1.MsgReportData')
        anyMsgList.setValue(
          'CKiHARKGAQgBGoEBMDQzYTYxNzkzNjBiZjhhZDljMTJlMmM0YzQ0YjU0NzM1MDE1OTQzZTMxMWIwMGFhN2U3ODc5YmJmZjI5ZjY2NGVkOTIwNDVhYjQ3NDYzNDI4YTI1OWFmZjEzNGRjMDU1YjlkOTc5MGRhN2UyMWJmZTg0NzY0NjYyNGNhNWRiMjMKGjJiYW5kdmFsb3BlcjFkOTZ1MHFsdmRwNnZ4M2o2cjMzbHVqcjkzZjdnZHl5NmVyYzgzOSIrYmFuZDFnMmh5N3FwNXJ0OGc0cjhwMzh3M3E1bWFtZ3VnZ2wycGp1d3Zrdw==',
        )
        txBody.setMessagesList([anyMsgList])
        txBody.setMemo('yoda:2.0.3/exec:lambda:2.0.0')
        txBody.setTimeoutHeight(0)

        const authInfo = new AuthInfo()
        const signerInfo = new SignerInfo()
        const anyPublicKey = new Any()
        anyPublicKey.setTypeUrl('/cosmos.crypto.secp256k1.PubKey')
        anyPublicKey.setValue(
          'CiEDMjXNir3uQ0slLlvp19D16YMl6myAW26009DGAh4dLiw=',
        )
        signerInfo.setPublicKey(anyPublicKey)
        const modeInfo = new ModeInfo()
        const modeSingle = new ModeInfo.Single()
        modeSingle.setMode(SignMode.SIGN_MODE_DIRECT)
        modeInfo.setSingle(modeSingle)
        signerInfo.setModeInfo(modeInfo)
        signerInfo.setSequence(3363)
        authInfo.setSignerInfosList([signerInfo])
        const fee = new Fee()
        fee.setGasLimit(76153)
        authInfo.setFee(fee)
        tx.setSignaturesList([
          'nAWQjUQ8B9PjfGhkW0OoUGzwIcFat7ODpJfCkmrpPGEjJAoAfo4FMe7p2+EeL4azogppzU0jc37hGKm8rMSqg==',
        ])

        const txResponse = new TxResponse()
        txResponse.setHeight(206077)
        txResponse.setTxhash(
          'FF88A361014A8CC2283961D632F2A00BB9CC8C168D8AE7F307F50E5D8A3945D2',
        )
        txResponse.setCodespace('')
        txResponse.setCode(0)
        txResponse.setData('0A080A067265706F7274')
        txResponse.setRawLog(
          "[{'events':[{'type':'message','attributes':[{'key':'action','value':'request'}]},{'type':'raw_request','attributes':[{'key':'data_source_id','value':'82'},{'key':'data_source_hash','value':'2252604858d2f0b67b8c5745d555e7a27b10a11fa32332c7da3a61d873f76d98'},{'key':'external_id','value':'1'},{'key':'calldata','value':'BDE15735EDFA21E8C4484866C865177D13E88C5BD0B016CB3F5835613189B263 631805938'},{'key':'fee'}]},{'type':'request','attributes':[{'key':'id','value':'37625'},{'key':'client_id','value':'from_pyband_mumu_0'},{'key':'oracle_script_id','value':'47'},{'key':'calldata','value':'00000040424445313537333545444641323145384334343834383636433836353137374431334538384335424430423031364342334635383335363133313839423236330000000025a897f2'},{'key':'ask_count','value':'12'},{'key':'min_count','value':'11'},{'key':'gas_used','value':'33112'},{'key':'total_fees'},{'key':'validator','value':'bandvaloper1p46uhvdk8vr829v747v85hst3mur2dzlhfemmz'},{'key':'validator','value':'bandvaloper1l2hchtyawk9tk43zzjrzr2lcd0zyxngcjdsshe'},{'key':'validator','value':'bandvaloper1t9vedyzsxewe6lhpf9vm47em2hly23xm6uqtec'},{'key':'validator','value':'bandvaloper19eu9g3gka6rxlevkjlvjq7s6c498tejnwxjwxx'},{'key':'validator','value':'bandvaloper1d96u0qlvdp6vx3j6r33lujr93f7gdyy6erc839'},{'key':'validator','value':'bandvaloper1a570h9e3rtvfhm030ta5hvel7e7e4lh4pgv8wj'},{'key':'validator','value':'bandvaloper1ldtwjzsplhxzhrg3k5hhr8v0qterv05vpdxp9f'},{'key':'validator','value':'bandvaloper1274qgg28xkz6f3upx05ftr9zepgmtfgts392dy'},{'key':'validator','value':'bandvaloper1e9sa38742tzhmandc4gkqve9zy8zc0yremaa3j'},{'key':'validator','value':'bandvaloper1qa4k43m4avza36kkal0vmsvccnpyyp6ltyp2l5'},{'key':'validator','value':'bandvaloper1zl5925n5u24njn9axpygz8lhjl5a8v4cpkzx5g'},{'key':'validator','value':'bandvaloper1t659auvvukjtfn2h3hfp7usw0dqg6auhkwa9fs'}]}]},{'msg_index':1,'events':[{'type':'message','attributes':[{'key':'action','value':'request'}]},{'type':'raw_request','attributes':[{'key':'data_source_id','value':'82'},{'key':'data_source_hash','value':'2252604858d2f0b67b8c5745d555e7a27b10a11fa32332c7da3a61d873f76d98'},{'key':'external_id','value':'1'},{'key':'calldata','value':'BDE15735EDFA21E8C4484866C865177D13E88C5BD0B016CB3F5835613189B263 625726585'},{'key':'fee'}]},{'type':'request','attributes':[{'key':'id','value':'37626'},{'key':'client_id','value':'from_pyband_mumu_1'},{'key':'oracle_script_id','value':'47'},{'key':'calldata','value':'000000404244453135373335454446413231453843343438343836364338363531373744313345383843354244304230313643423346353833353631333138394232363300000000254bd479'},{'key':'ask_count','value':'12'},{'key':'min_count','value':'11'},{'key':'gas_used','value':'33112'},{'key':'total_fees'},{'key':'validator','value':'bandvaloper19eu9g3gka6rxlevkjlvjq7s6c498tejnwxjwxx'},{'key':'validator','value':'bandvaloper1p46uhvdk8vr829v747v85hst3mur2dzlhfemmz'},{'key':'validator','value':'bandvaloper1t9vedyzsxewe6lhpf9vm47em2hly23xm6uqtec'},{'key':'validator','value':'bandvaloper1274qgg28xkz6f3upx05ftr9zepgmtfgts392dy'},{'key':'validator','value':'bandvaloper1e9sa38742tzhmandc4gkqve9zy8zc0yremaa3j'},{'key':'validator','value':'bandvaloper1zl5925n5u24njn9axpygz8lhjl5a8v4cpkzx5g'},{'key':'validator','value':'bandvaloper1qa4k43m4avza36kkal0vmsvccnpyyp6ltyp2l5'},{'key':'validator','value':'bandvaloper1a570h9e3rtvfhm030ta5hvel7e7e4lh4pgv8wj'},{'key':'validator','value':'bandvaloper1d96u0qlvdp6vx3j6r33lujr93f7gdyy6erc839'},{'key':'validator','value':'bandvaloper1l2hchtyawk9tk43zzjrzr2lcd0zyxngcjdsshe'},{'key':'validator','value':'bandvaloper1ldtwjzsplhxzhrg3k5hhr8v0qterv05vpdxp9f'},{'key':'validator','value':'bandvaloper1t659auvvukjtfn2h3hfp7usw0dqg6auhkwa9fs'}]}]},{'msg_index':2,'events':[{'type':'message','attributes':[{'key':'action','value':'request'}]},{'type':'raw_request','attributes':[{'key':'data_source_id','value':'82'},{'key':'data_source_hash','value':'2252604858d2f0b67b8c5745d555e7a27b10a11fa32332c7da3a61d873f76d98'},{'key':'external_id','value':'1'},{'key':'calldata','value':'BDE15735EDFA21E8C4484866C865177D13E88C5BD0B016CB3F5835613189B263 410494784'},{'key':'fee'}]},{'type':'request','attributes':[{'key':'id','value':'37627'},{'key':'client_id','value':'from_pyband_mumu_2'},{'key':'oracle_script_id','value':'47'},{'key':'calldata','value':'0000004042444531353733354544464132314538433434383438363643383635313737443133453838433542443042303136434233463538333536313331383942323633000000001877a740'},{'key':'ask_count','value':'12'},{'key':'min_count','value':'11'},{'key':'gas_used','value':'33112'},{'key':'total_fees'},{'key':'validator','value':'bandvaloper1zl5925n5u24njn9axpygz8lhjl5a8v4cpkzx5g'},{'key':'validator','value':'bandvaloper1p46uhvdk8vr829v747v85hst3mur2dzlhfemmz'},{'key':'validator','value':'bandvaloper1qa4k43m4avza36kkal0vmsvccnpyyp6ltyp2l5'},{'key':'validator','value':'bandvaloper19eu9g3gka6rxlevkjlvjq7s6c498tejnwxjwxx'},{'key':'validator','value':'bandvaloper1274qgg28xkz6f3upx05ftr9zepgmtfgts392dy'},{'key':'validator','value':'bandvaloper1e9sa38742tzhmandc4gkqve9zy8zc0yremaa3j'},{'key':'validator','value':'bandvaloper1ldtwjzsplhxzhrg3k5hhr8v0qterv05vpdxp9f'},{'key':'validator','value':'bandvaloper1t9vedyzsxewe6lhpf9vm47em2hly23xm6uqtec'},{'key':'validator','value':'bandvaloper1a570h9e3rtvfhm030ta5hvel7e7e4lh4pgv8wj'},{'key':'validator','value':'bandvaloper1d96u0qlvdp6vx3j6r33lujr93f7gdyy6erc839'},{'key':'validator','value':'bandvaloper1l2hchtyawk9tk43zzjrzr2lcd0zyxngcjdsshe'},{'key':'validator','value':'bandvaloper1t659auvvukjtfn2h3hfp7usw0dqg6auhkwa9fs'}]}]},{'msg_index':3,'events':[{'type':'message','attributes':[{'key':'action','value':'request'}]},{'type':'raw_request','attributes':[{'key':'data_source_id','value':'82'},{'key':'data_source_hash','value':'2252604858d2f0b67b8c5745d555e7a27b10a11fa32332c7da3a61d873f76d98'},{'key':'external_id','value':'1'},{'key':'calldata','value':'BDE15735EDFA21E8C4484866C865177D13E88C5BD0B016CB3F5835613189B263 97304188'},{'key':'fee'}]},{'type':'request','attributes':[{'key':'id','value':'37628'},{'key':'client_id','value':'from_pyband_mumu_3'},{'key':'oracle_script_id','value':'47'},{'key':'calldata','value':'00000040424445313537333545444641323145384334343834383636433836353137374431334538384335424430423031364342334635383335363133313839423236330000000005ccbe7c'},{'key':'ask_count','value':'12'},{'key':'min_count','value':'11'},{'key':'gas_used','value':'33063'},{'key':'total_fees'},{'key':'validator','value':'bandvaloper1p46uhvdk8vr829v747v85hst3mur2dzlhfemmz'},{'key':'validator','value':'bandvaloper1a570h9e3rtvfhm030ta5hvel7e7e4lh4pgv8wj'},{'key':'validator','value':'bandvaloper1qa4k43m4avza36kkal0vmsvccnpyyp6ltyp2l5'},{'key':'validator','value':'bandvaloper1274qgg28xkz6f3upx05ftr9zepgmtfgts392dy'},{'key':'validator','value':'bandvaloper1t9vedyzsxewe6lhpf9vm47em2hly23xm6uqtec'},{'key':'validator','value':'bandvaloper1zl5925n5u24njn9axpygz8lhjl5a8v4cpkzx5g'},{'key':'validator','value':'bandvaloper1ldtwjzsplhxzhrg3k5hhr8v0qterv05vpdxp9f'},{'key':'validator','value':'bandvaloper19eu9g3gka6rxlevkjlvjq7s6c498tejnwxjwxx'},{'key':'validator','value':'bandvaloper1l2hchtyawk9tk43zzjrzr2lcd0zyxngcjdsshe'},{'key':'validator','value':'bandvaloper1d96u0qlvdp6vx3j6r33lujr93f7gdyy6erc839'},{'key':'validator','value':'bandvaloper1e9sa38742tzhmandc4gkqve9zy8zc0yremaa3j'},{'key':'validator','value':'bandvaloper1t659auvvukjtfn2h3hfp7usw0dqg6auhkwa9fs'}]}]},{'msg_index':4,'events':[{'type':'message','attributes':[{'key':'action','value':'request'}]},{'type':'raw_request','attributes':[{'key':'data_source_id','value':'82'},{'key':'data_source_hash','value':'2252604858d2f0b67b8c5745d555e7a27b10a11fa32332c7da3a61d873f76d98'},{'key':'external_id','value':'1'},{'key':'calldata','value':'BDE15735EDFA21E8C4484866C865177D13E88C5BD0B016CB3F5835613189B263 539917272'},{'key':'fee'}]},{'type':'request','attributes':[{'key':'id','value':'37629'},{'key':'client_id','value':'from_pyband_mumu_4'},{'key':'oracle_script_id','value':'47'},{'key':'calldata','value':'000000404244453135373335454446413231453843343438343836364338363531373744313345383843354244304230313643423346353833353631333138394232363300000000202e7bd8'},{'key':'ask_count','value':'12'},{'key':'min_count','value':'11'},{'key':'gas_used','value':'33112'},{'key':'total_fees'},{'key':'validator','value':'bandvaloper19eu9g3gka6rxlevkjlvjq7s6c498tejnwxjwxx'},{'key':'validator','value':'bandvaloper1274qgg28xkz6f3upx05ftr9zepgmtfgts392dy'},{'key':'validator','value':'bandvaloper1ldtwjzsplhxzhrg3k5hhr8v0qterv05vpdxp9f'},{'key':'validator','value':'bandvaloper1p46uhvdk8vr829v747v85hst3mur2dzlhfemmz'},{'key':'validator','value':'bandvaloper1l2hchtyawk9tk43zzjrzr2lcd0zyxngcjdsshe'},{'key':'validator','value':'bandvaloper1e9sa38742tzhmandc4gkqve9zy8zc0yremaa3j'},{'key':'validator','value':'bandvaloper1zl5925n5u24njn9axpygz8lhjl5a8v4cpkzx5g'},{'key':'validator','value':'bandvaloper1t659auvvukjtfn2h3hfp7usw0dqg6auhkwa9fs'},{'key':'validator','value':'bandvaloper1t9vedyzsxewe6lhpf9vm47em2hly23xm6uqtec'},{'key':'validator','value':'bandvaloper1a570h9e3rtvfhm030ta5hvel7e7e4lh4pgv8wj'},{'key':'validator','value':'bandvaloper1d96u0qlvdp6vx3j6r33lujr93f7gdyy6erc839'},{'key':'validator','value':'bandvaloper1qa4k43m4avza36kkal0vmsvccnpyyp6ltyp2l5'}]}]}]",
        )

        const abciMessageLog1 = new ABCIMessageLog()
        abciMessageLog1.setMsgIndex(0)
        abciMessageLog1.setLog('')
        const stringEvent1 = new StringEvent()
        stringEvent1.setType('message')
        const attribute1 = new Attribute()
        attribute1.setKey('action')
        attribute1.setValue('request')
        stringEvent1.setAttributesList([attribute1])
        const stringEvent2 = new StringEvent()
        stringEvent2.setType('request')
        const attribute2 = new Attribute()
        attribute2.setKey('id')
        attribute2.setValue('17320')
        const attribute3 = new Attribute()
        attribute3.setKey('validator')
        attribute3.setValue(
          'bandvaloper1d96u0qlvdp6vx3j6r33lujr93f7gdyy6erc839',
        )
        stringEvent1.setAttributesList([attribute1])
        stringEvent2.setAttributesList([attribute2, attribute3])
        abciMessageLog1.setEventsList([stringEvent1, stringEvent2])

        const abciMessageLog2 = new ABCIMessageLog()
        abciMessageLog2.setMsgIndex(0)
        abciMessageLog2.setLog('')
        abciMessageLog2.setEventsList([stringEvent1, stringEvent2])

        txResponse.setLogsList([abciMessageLog1, abciMessageLog2])
        txResponse.setInfo('')
        txResponse.setGasWanted(76153)
        txResponse.setGasUsed(66833)
        const anyTx = new Any()
        anyTx.setTypeUrl('/cosmos.tx.v1beta1.Tx')
        anyTx.setValue(
          'CqwCCosCChgvb3JhY2xlLnYxLk1zZ1JlcG9ydERhdGES7gEIqIcBEoYBCAEagQEwNDNhNjE3OTM2MGJmOGFkOWMxMmUyYzRjNDRiNTQ3MzUwMTU5NDNlMzExYjAwYWE3ZTc4NzliYmZmMjlmNjY0ZWQ5MjA0NWFiNDc0NjM0MjhhMjU5YWZmMTM0ZGMwNTViOWQ5NzkwZGE3ZTIxYmZlODQ3NjQ2NjI0Y2E1ZGIyMwoaMmJhbmR2YWxvcGVyMWQ5NnUwcWx2ZHA2dngzajZyMzNsdWpyOTNmN2dkeXk2ZXJjODM5IitiYW5kMWcyaHk3cXA1cnQ4ZzRyOHAzOHczcTVtYW1ndWdnbDJwanV3dmt3Ehx5b2RhOjIuMC4zL2V4ZWM6bGFtYmRhOjIuMC4wElkKUQpGCh8vY29zbW9zLmNyeXB0by5zZWNwMjU2azEuUHViS2V5EiMKIQMyNc2Kve5DSyUuW+nX0PXpgyXqbIBbbrTT0MYCHh0uLBIECgIIARijGhIEEPnSBBpAnAWQjUQ8B9PjfGhkW0OoUGzwIcFat7ODpJfCkmrpPGEjJAoAfo+4FMe7p2+EeL4azogppzU0jc37hGKm8rMSqg==',
        )
        txResponse.setTx(anyTx)
        txResponse.setTimestamp('2021-06-29T05:01:48Z')
        response.setTxResponse(txResponse)

        callback(null, response)
        return { cancel: function () {} }
      },
    )

    const response = await client.getRequestIdByTxHash(
      '90ED70061C1A24B1141F81BADEDAB19570D0B9B255412BF5D680A9BC93539115',
    )
    expect(mockedTxRequest).toHaveBeenCalledTimes(1)
    expect(response).toEqual([17320, 17320])
  })
})

describe('get chain ID', () => {
  it('get chain ID success', async () => {
    expect(MockedServiceClient).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedServiceClient).toHaveBeenCalledTimes(1)

    const mockedServiceClient = jest.mocked(
      MockedServiceClient.mock.instances[0],
    )
    type ExpectedLatestBlockSignature = (
      requestMessage: GetLatestBlockRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: GetLatestBlockResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedLatestBlock = jest.mocked(
      mockedServiceClient.getLatestBlock as ExpectedLatestBlockSignature,
    )

    mockedLatestBlock.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const response = new GetLatestBlockResponse()
        const blockId = new BlockID()
        blockId.setHash(
          '391E99908373F8590C928E0619956DA3D87EB654445DA4F25A185C9718561D53',
        )
        response.setBlockId(blockId)
        const block = new Block()
        const header = new Header()
        header.setChainId('bandchain')
        header.setHeight(1032007)
        header.setLastCommitHash(
          '17B2CE4ABA910E85847537F1323DB95C9F16C20C60E9B9BBB04C633C3125BD92',
        )
        header.setDataHash(
          'EFE5E3F549554FEE8EB9B393740C250D74580427A96A175ABB105806039CFFE2',
        )
        header.setValidatorsHash(
          'E3F0EA129867E1AB4D7D6A97C23771D4D89B9E4DFE0A5B11E03B681244E00151',
        )
        header.setNextValidatorsHash(
          'E3F0EA129867E1AB4D7D6A97C23771D4D89B9E4DFE0A5B11E03B681244E00151',
        )
        header.setConsensusHash(
          '0EAA6F4F4B8BD1CC222D93BBD391D07F074DE6BE5A52C6964875BB355B7D0B45',
        )
        header.setAppHash(
          '6E2B1ECE9D912D86C25182E8B7419583ABCE978BFC66DC2556BB0D06A8D528EF',
        )
        header.setLastResultsHash('')
        header.setEvidenceHash('')
        header.setProposerAddress('BDB6A0728C8DFE2124536F16F2BA428FE767A8F9')
        block.setHeader(header)
        response.setBlock(block)
        callback(null, response)
        return { cancel: function () {} }
      },
    )

    const expected = {
      blockId: {
        hash: '391E99908373F8590C928E0619956DA3D87EB654445DA4F25A185C9718561D53',
      },
      block: {
        header: {
          chainId: 'bandchain',
          height: 1032007,
          lastCommitHash:
            '17B2CE4ABA910E85847537F1323DB95C9F16C20C60E9B9BBB04C633C3125BD92',

          dataHash:
            'EFE5E3F549554FEE8EB9B393740C250D74580427A96A175ABB105806039CFFE2',

          validatorsHash:
            'E3F0EA129867E1AB4D7D6A97C23771D4D89B9E4DFE0A5B11E03B681244E00151',

          nextValidatorsHash:
            'E3F0EA129867E1AB4D7D6A97C23771D4D89B9E4DFE0A5B11E03B681244E00151',

          consensusHash:
            '0EAA6F4F4B8BD1CC222D93BBD391D07F074DE6BE5A52C6964875BB355B7D0B45',

          appHash:
            '6E2B1ECE9D912D86C25182E8B7419583ABCE978BFC66DC2556BB0D06A8D528EF',

          lastResultsHash: '',
          evidenceHash: '',
          proposerAddress: 'BDB6A0728C8DFE2124536F16F2BA428FE767A8F9',
        },
      },
    }
    const response = await client.getChainId()
    expect(mockedLatestBlock).toHaveBeenCalledTimes(1)
    expect(response).toEqual(expected.block.header.chainId)
  })
})

describe('get account', () => {
  it('get account success', async () => {
    expect(MockedAuthQueryClient).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedAuthQueryClient).toHaveBeenCalledTimes(1)

    const mockedAuthQueryClient = jest.mocked(
      MockedAuthQueryClient.mock.instances[0],
    )
    type ExpectedAccountSignature = (
      requestMessage: QueryAccountRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: QueryAccountResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedAccount = jest.mocked(
      mockedAuthQueryClient.account as ExpectedAccountSignature,
    )
    mockedAccount.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const response = new QueryAccountResponse()
        const responseAny = new Any()
        responseAny.setTypeUrl('/cosmos.auth.v1beta1.BaseAccount')
        responseAny.setValue(
          'CitiYW5kMThlNTVkOXh5cmd5ZzN0azcyem1nN3M5MnV1OHNkOTVqemdqNzNhEkYKHy9jb3Ntb3MuY3J5cHRvLnNlY3AyNTZrMS5QdWJLZXkSIwohA34LssDx+mbLpJWchWA9HjHB5b4Q42L0uy97A8YtF8sXGFkgtks=',
        )
        response.setAccount(responseAny)

        callback(null, response)
        return { cancel: function () {} }
      },
    )

    const expected = {
      address: 'band18e55d9xyrgyg3tk72zmg7s92uu8sd95jzgj73a',
      pubKey: {
        typeUrl: '/cosmos.crypto.secp256k1.PubKey',
        value: 'CiEDfguywPH6ZsuklZyFYD0eMcHlvhDjYvS7L3sDxi0Xyxc=',
      },
      accountNumber: 89,
      sequence: 9654,
    }

    const response = await client.getAccount(
      'band1jrhuqrymzt4mnvgw8cvy3s9zhx3jj0dq30qpte',
    )
    expect(mockedAccount).toHaveBeenCalledTimes(1)
    expect(response).toEqual(expected)
  })
})

describe('get reference data', () => {
  it('reference data success', async () => {
    expect(MockedQueryClient).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedQueryClient).toHaveBeenCalledTimes(1)
    const mockedQueryClient = jest.mocked(MockedQueryClient.mock.instances[0])

    type ExpectedGetReferenceData = (
      requestMessage: QueryRequestPriceRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: QueryRequestPriceResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockGetReferenceData = jest.mocked(
      mockedQueryClient.requestPrice as ExpectedGetReferenceData,
    )
    mockGetReferenceData.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const priceData1 = new PriceResult()
        priceData1.setSymbol('ETH')
        priceData1.setMultiplier(1000000)
        priceData1.setPx(3000000)
        priceData1.setRequestId(60536)
        priceData1.setResolveTime(1625537833)

        const priceData2 = new PriceResult()
        priceData2.setSymbol('BTC')
        priceData2.setMultiplier(1000000)
        priceData2.setPx(2000000)
        priceData2.setRequestId(60537)
        priceData2.setResolveTime(1625537834)

        const response = new QueryRequestPriceResponse()
        response.setPriceResultsList([priceData1, priceData2])

        callback(null, response)
        return { cancel: function () {} }
      },
    )
    const expected = [
      {
        pair: 'ETH/USD',
        rate: 3,
        updatedAt: {
          base: 1625537833,
          quote: STATIC_DATE / 1000,
        },
        requestId: {
          base: 60536,
          quote: 0,
        },
      },
      {
        pair: 'ETH/BTC',
        rate: 1.5,
        updatedAt: {
          base: 1625537833,
          quote: 1625537834,
        },
        requestId: {
          base: 60536,
          quote: 60537,
        },
      },
    ]
    const response = await client.getReferenceData(['ETH/USD', 'ETH/BTC'], 3, 4)
    expect(mockGetReferenceData).toHaveBeenCalledTimes(1)
    expect(response).toEqual(expected)
  })
})

describe('get latest request', () => {
  it('latest request success', async () => {
    expect(MockedQueryClient).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedQueryClient).toHaveBeenCalledTimes(1)
    const mockedQueryClient = jest.mocked(MockedQueryClient.mock.instances[0])

    type ExpectedLatestRequest = (
      requestMessage: QueryRequestSearchRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: QueryRequestSearchResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockGetLatestRequest = jest.mocked(
      mockedQueryClient.requestSearch as ExpectedLatestRequest,
    )
    mockGetLatestRequest.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const request = new Request()
        request.setOracleScriptId(43)
        request.setCalldata('AAAAAgAAAARCVENCAAAABEJFVEgAAAAAO5rKAA==')
        request.setRequestedValidatorsList([
          'bandvaloper1d96u0qlvdp6vx3j6r33lujr93f7gdyy6erc839',
          'bandvaloper1a570h9e3rtvfhm030ta5hvel7e7e4lh4pgv8wj',
          'bandvaloper1zl5925n5u24njn9axpygz8lhjl5a8v4cpkzx5g',
          'bandvaloper17n5rmujk78nkgss7tjecg4nfzn6geg4cqtyg3u',
          'bandvaloper1e9sa38742tzhmandc4gkqve9zy8zc0yremaa3j',
          'bandvaloper1l2hchtyawk9tk43zzjrzr2lcd0zyxngcjdsshe',
        ])
        request.setMinCount(3)
        request.setRequestHeight(431790)
        request.setRequestTime(1625547173)
        request.setClientId('linear')

        const rawReq1 = new RawRequest()
        rawReq1.setExternalId(0)
        rawReq1.setDataSourceId(74)
        rawReq1.setCalldata(
          'aHR0cHM6Ly91cy1ycGMuYmFuZGNoYWluLm9yZy9vcmFjbGUvcmVxdWVzdF9wcmljZXMgQlRDIEVUSA==',
        )
        const rawReq2 = new RawRequest()
        rawReq2.setExternalId(0)
        rawReq2.setDataSourceId(74)
        rawReq2.setCalldata(
          'aHR0cHM6Ly91cy1ycGMuYmFuZGNoYWluLm9yZy9vcmFjbGUvcmVxdWVzdF9wcmljZXMgQlRDIEVUSA==',
        )

        request.setRawRequestsList([rawReq1, rawReq2])
        request.setExecuteGas(1000000)

        const report1 = new Report()
        report1.setValidator(
          'bandvaloper1zl5925n5u24njn9axpygz8lhjl5a8v4cpkzx5g',
        )
        report1.setInBeforeResolve(true)
        const rawRep1 = new RawReport()
        rawReq1.setExternalId(0)
        rawRep1.setExitCode(0)
        rawRep1.setData('MzQ2NzQuNTQgMjMxMy45OQo=')
        const rawRep2 = new RawReport()
        rawReq2.setExternalId(0)
        rawRep2.setExitCode(0)
        rawRep2.setData('MzQ2NzQuNTQgMjMxMy45OQo=')
        report1.setRawReportsList([rawRep1, rawRep2])

        const report2 = new Report()
        report2.setValidator(
          'bandvaloper1d96u0qlvdp6vx3j6r33lujr93f7gdyy6erc839',
        )
        report2.setInBeforeResolve(true)
        report2.setRawReportsList([rawRep1, rawRep2])

        const result = new Result()
        result.setClientId('linear')
        result.setOracleScriptId(43)
        result.setCalldata('AAAAAgAAAARCVENCAAAABEJFVEgAAAAAO5rKAA==')
        result.setAskCount(6)
        result.setMinCount(3)
        result.setRequestId(64783)
        result.setAnsCount(6)
        result.setRequestTime(1625547173)
        result.setResolveTime(1625547179)
        result.setResolveStatus(1)
        result.setResult('AAAAAgAAH4lLo7MAAAACGsSNTYA==')

        const reqResponse = new QueryRequestResponse()
        reqResponse.setRequest(request)
        reqResponse.setReportsList([report1, report2])
        reqResponse.setResult(result)

        const response = new QueryRequestSearchResponse()
        response.setRequest(reqResponse)

        callback(null, response)
        return { cancel: function () {} }
      },
    )

    const expected = {
      request: {
        oracleScriptId: 43,
        calldata: 'AAAAAgAAAARCVENCAAAABEJFVEgAAAAAO5rKAA==',
        requestedValidatorsList: [
          'bandvaloper1d96u0qlvdp6vx3j6r33lujr93f7gdyy6erc839',
          'bandvaloper1a570h9e3rtvfhm030ta5hvel7e7e4lh4pgv8wj',
          'bandvaloper1zl5925n5u24njn9axpygz8lhjl5a8v4cpkzx5g',
          'bandvaloper17n5rmujk78nkgss7tjecg4nfzn6geg4cqtyg3u',
          'bandvaloper1e9sa38742tzhmandc4gkqve9zy8zc0yremaa3j',
          'bandvaloper1l2hchtyawk9tk43zzjrzr2lcd0zyxngcjdsshe',
        ],
        minCount: 3,
        requestHeight: 431790,
        requestTime: 1625547173,
        clientId: 'linear',
        rawRequestsList: [
          {
            externalId: 0,
            dataSourceId: 74,
            calldata:
              'aHR0cHM6Ly91cy1ycGMuYmFuZGNoYWluLm9yZy9vcmFjbGUvcmVxdWVzdF9wcmljZXMgQlRDIEVUSA==',
          },
          {
            externalId: 0,
            dataSourceId: 74,
            calldata:
              'aHR0cHM6Ly91cy1ycGMuYmFuZGNoYWluLm9yZy9vcmFjbGUvcmVxdWVzdF9wcmljZXMgQlRDIEVUSA==',
          },
        ],
        executeGas: 1000000,
        ibcChannel: undefined,
      },
      reportsList: [
        {
          validator: 'bandvaloper1zl5925n5u24njn9axpygz8lhjl5a8v4cpkzx5g',
          inBeforeResolve: true,
          rawReportsList: [
            {
              externalId: 0,
              exitCode: 0,
              data: 'MzQ2NzQuNTQgMjMxMy45OQo=',
            },
            {
              externalId: 0,
              exitCode: 0,
              data: 'MzQ2NzQuNTQgMjMxMy45OQo=',
            },
          ],
        },
        {
          validator: 'bandvaloper1d96u0qlvdp6vx3j6r33lujr93f7gdyy6erc839',
          inBeforeResolve: true,
          rawReportsList: [
            {
              externalId: 0,
              exitCode: 0,
              data: 'MzQ2NzQuNTQgMjMxMy45OQo=',
            },
            {
              externalId: 0,
              exitCode: 0,
              data: 'MzQ2NzQuNTQgMjMxMy45OQo=',
            },
          ],
        },
      ],
      result: {
        clientId: 'linear',
        oracleScriptId: 43,
        calldata: 'AAAAAgAAAARCVENCAAAABEJFVEgAAAAAO5rKAA==',
        askCount: 6,
        minCount: 3,
        requestId: 64783,
        ansCount: 6,
        requestTime: 1625547173,
        resolveTime: 1625547179,
        resolveStatus: 1,
        result: 'AAAAAgAAH4lLo7MAAAACGsSNTYA==',
      },
    }
    const response = await client.getLatestRequest(
      43,
      '0000000200000004425443420000000442455448000000003b9aca00',
      3,
      6,
    )
    expect(mockGetLatestRequest).toHaveBeenCalledTimes(1)
    expect(response).toEqual(expected)
  })
})

describe('get all balances', () => {
  it('get all balances success', async () => {
    expect(MockedQueryAllBalances).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedQueryAllBalances).toHaveBeenCalledTimes(1)

    const mockedQueyAllBalances = jest.mocked(
      MockedQueryAllBalances.mock.instances[0],
    )
    type ExpectedAddressSignature = (
      requestMessage: QueryAllBalancesRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: QueryAllBalancesResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedAddress = jest.mocked(
      mockedQueyAllBalances.allBalances as ExpectedAddressSignature,
    )
    mockedAddress.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const response = new QueryAllBalancesResponse()
        const responseCoin = new Coin()
        responseCoin.setDenom('uband')
        responseCoin.setAmount('401150982')
        response.setBalancesList([responseCoin])

        callback(null, response)
        return { cancel: function () {} }
      },
    )

    const expected = [
      {
        denom: 'uband',
        amount: '401150982',
      },
    ]

    const response = await client.getAllBalances(
      'band1jrhuqrymzt4mnvgw8cvy3s9zhx3jj0dq30qpte',
    )
    expect(mockedAddress).toHaveBeenCalledTimes(1)
    expect(response).toEqual(expected)
  })
})
