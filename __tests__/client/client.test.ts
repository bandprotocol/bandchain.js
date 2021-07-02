import { Client } from '../../src'
import { mocked } from 'ts-jest/utils'
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
} from '../../proto/oracle/v1/query_pb'
import {
  DataSource,
  OracleScript,
  ReportersPerValidator,
} from '../../proto/oracle/v1/oracle_pb'
import { ServiceClient } from '../../proto/cosmos/base/tendermint/v1beta1/query_pb_service'

import {
  GetLatestBlockRequest,
  GetLatestBlockResponse,
} from '../../proto/cosmos/base/tendermint/v1beta1/query_pb'
import { BlockID, Header } from '../../proto/tendermint/types/types_pb'
import { Block } from '../../proto/tendermint/types/block_pb'

import { QueryClient as AuthQueryClient } from '../../proto/cosmos/auth/v1beta1/query_pb_service'
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

const MockedQueryClient = mocked(QueryClient, true)
const MockedAuthQueryClient = mocked(AuthQueryClient, true)
const MockedServiceClient = mocked(ServiceClient, true)
const MockedTxService = mocked(TxServiceClient, true)

const TEST_GRPC = 'http://localhost:8080'

beforeEach(() => {
  MockedQueryClient.mockClear()
  MockedServiceClient.mockClear()
  MockedAuthQueryClient.mockClear()
  MockedTxService.mockClear()
})

describe('Client get data', () => {
  it('get data source by ID', async () => {
    expect(MockedQueryClient).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedQueryClient).toHaveBeenCalledTimes(1)

    const mockedGRPCClient = mocked(MockedQueryClient.mock.instances[0], true)
    type ExpectedDataSourceSignature = (
      requestMessage: QueryDataSourceRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: QueryDataSourceResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedDataSource = mocked(
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
  it('success', async () => {
    expect(MockedQueryClient).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedQueryClient).toHaveBeenCalledTimes(1)

    const mockedGRPCClient = mocked(MockedQueryClient.mock.instances[0], true)
    type ExpectedOracleScriptSignature = (
      requestMessage: QueryOracleScriptRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: QueryOracleScriptResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedOracleScript = mocked(
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
  it('success', async () => {
    expect(MockedServiceClient).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedServiceClient).toHaveBeenCalledTimes(1)

    const mockedServiceClient = mocked(
      MockedServiceClient.mock.instances[0],
      true,
    )
    type ExpectedLatestBlockSignature = (
      requestMessage: GetLatestBlockRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: GetLatestBlockResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedLatestBlock = mocked(
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
  it('success', async () => {
    expect(MockedQueryClient).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedQueryClient).toHaveBeenCalledTimes(1)

    const mockedGRPCClient = mocked(MockedQueryClient.mock.instances[0], true)
    type ExpectedReportersSignature = (
      requestMessage: QueryReportersRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: QueryReportersResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedReporters = mocked(
      mockedGRPCClient.reporters as ExpectedReportersSignature,
    )

    mockedReporters.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const reporters = new ReportersPerValidator()
        reporters.setValidator(
          'bandvaloper1trx2cm6vm9v63grg9uhmk7sy233zve4q25rgre',
        )
        reporters.setReportersList([
          'band1yyv5jkqaukq0ajqn7vhkyhpff7h6e99ja7gvwg',
          'band19nf0sqnjycnvpexlxs6hjz9qrhhlhsu9pdty0r',
          'band1fndxcmg0h5vhr8cph7gryryqfn9yqp90lysjtm',
          'band10ec0p96j60duce5qagju5axuja0rj8luqrzl0k',
          'band15pm9scujgkpwpy2xa2j53tvs9ylunjn0g73a9s',
          'band1cehe3sxk7f4rmvwdf6lxh3zexen7fn02zyltwy',
        ])
        const response = new QueryReportersResponse()
        response.setReporterList(reporters.getReportersList())

        callback(null, response)
        return { cancel: function () {} }
      },
    )

    const expected = [
      'band1yyv5jkqaukq0ajqn7vhkyhpff7h6e99ja7gvwg',
      'band19nf0sqnjycnvpexlxs6hjz9qrhhlhsu9pdty0r',
      'band1fndxcmg0h5vhr8cph7gryryqfn9yqp90lysjtm',
      'band10ec0p96j60duce5qagju5axuja0rj8luqrzl0k',
      'band15pm9scujgkpwpy2xa2j53tvs9ylunjn0g73a9s',
      'band1cehe3sxk7f4rmvwdf6lxh3zexen7fn02zyltwy',
    ]
    const response = await client.getReporters(
      'bandvaloper1trx2cm6vm9v63grg9uhmk7sy233zve4q25rgre',
    )
    expect(mockedReporters).toHaveBeenCalledTimes(1)
    expect(response).toEqual(expected)
  })
})

describe('get request id by transaction hash', () => {
  it('success, with request tx', async () => {
    expect(MockedTxService).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedTxService).toHaveBeenCalledTimes(1)
    const mockedTxServices = mocked(MockedTxService.mock.instances[0], true)

    type ExpectedGetTxSignature = (
      requestMessage: GetTxRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: GetTxResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedTxRequest = mocked(
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
        const abciMessageLog = new ABCIMessageLog()
        abciMessageLog.setMsgIndex(0)
        abciMessageLog.setLog('')
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
        abciMessageLog.setEventsList([stringEvent1, stringEvent2])
        txResponse.setLogsList([abciMessageLog])
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
    const expected = {
      tx: {
        body: {
          messagesList: [
            {
              typeUrl: '/oracle.v1.MsgReportData',
              value:
                'CKiHARKGAQgBGoEBMDQzYTYxNzkzNjBiZjhhZDljMTJlMmM0YzQ0YjU0NzM1MDE1OTQzZTMxMWIwMGFhN2U3ODc5YmJmZjI5ZjY2NGVkOTIwNDVhYjQ3NDYzNDI4YTI1OWFmZjEzNGRjMDU1YjlkOTc5MGRhN2UyMWJmZTg0NzY0NjYyNGNhNWRiMjMKGjJiYW5kdmFsb3BlcjFkOTZ1MHFsdmRwNnZ4M2o2cjMzbHVqcjkzZjdnZHl5NmVyYzgzOSIrYmFuZDFnMmh5N3FwNXJ0OGc0cjhwMzh3M3E1bWFtZ3VnZ2wycGp1d3Zrdw==',
            },
          ],
          memo: 'yoda:2.0.3/exec:lambda:2.0.0',
          timeoutHeight: 0,
          extensionOptionsList: [],
          nonCriticalExtensionOptionsList: [],
        },
        authInfo: {
          signerInfosList: [
            {
              publicKey: {
                typeUrl: '/cosmos.crypto.secp256k1.PubKey',
                value: 'CiEDMjXNir3uQ0slLlvp19D16YMl6myAW26009DGAh4dLiw=',
              },
              modeInfo: {
                single: {
                  mode: 1,
                },
              },
              sequence: 3363,
            },
          ],
          fee: {
            amountList: [],
            gasLimit: 76153,
            payer: '',
            granter: '',
          },
        },
        signaturesList: [
          'nAWQjUQ8B9PjfGhkW0OoUGzwIcFat7ODpJfCkmrpPGEjJAoAfo4FMe7p2+EeL4azogppzU0jc37hGKm8rMSqg==',
        ],
      },
      txResponse: {
        height: 206077,
        txhash:
          'FF88A361014A8CC2283961D632F2A00BB9CC8C168D8AE7F307F50E5D8A3945D2',
        codespace: '',
        code: 0,
        data: '0A080A067265706F7274',
        rawLog:
          '[{"events":[{"type":"message","attributes":[{"key":"action","value":"report"}]},{"type":"report","attributes":[{"key":"id","value":"17320"},{"key":"validator","value":"bandvaloper1d96u0qlvdp6vx3j6r33lujr93f7gdyy6erc839"}]}]}]',
        logsList: [
          {
            msgIndex: 0,
            log: '',
            eventsList: [
              {
                type: 'message',
                attributesList: [
                  {
                    key: 'action',
                    value: 'report',
                  },
                ],
              },
              {
                type: 'report',
                attributesList: [
                  {
                    key: 'id',
                    value: '17320',
                  },
                  {
                    key: 'validator',
                    value: 'bandvaloper1d96u0qlvdp6vx3j6r33lujr93f7gdyy6erc839',
                  },
                ],
              },
            ],
          },
        ],
        info: '',
        gasWanted: 76153,
        gasUsed: 66833,
        tx: {
          typeUrl: '/cosmos.tx.v1beta1.Tx',
          value:
            'CqwCCosCChgvb3JhY2xlLnYxLk1zZ1JlcG9ydERhdGES7gEIqIcBEoYBCAEagQEwNDNhNjE3OTM2MGJmOGFkOWMxMmUyYzRjNDRiNTQ3MzUwMTU5NDNlMzExYjAwYWE3ZTc4NzliYmZmMjlmNjY0ZWQ5MjA0NWFiNDc0NjM0MjhhMjU5YWZmMTM0ZGMwNTViOWQ5NzkwZGE3ZTIxYmZlODQ3NjQ2NjI0Y2E1ZGIyMwoaMmJhbmR2YWxvcGVyMWQ5NnUwcWx2ZHA2dngzajZyMzNsdWpyOTNmN2dkeXk2ZXJjODM5IitiYW5kMWcyaHk3cXA1cnQ4ZzRyOHAzOHczcTVtYW1ndWdnbDJwanV3dmt3Ehx5b2RhOjIuMC4zL2V4ZWM6bGFtYmRhOjIuMC4wElkKUQpGCh8vY29zbW9zLmNyeXB0by5zZWNwMjU2azEuUHViS2V5EiMKIQMyNc2Kve5DSyUuW+nX0PXpgyXqbIBbbrTT0MYCHh0uLBIECgIIARijGhIEEPnSBBpAnAWQjUQ8B9PjfGhkW0OoUGzwIcFat7ODpJfCkmrpPGEjJAoAfo+4FMe7p2+EeL4azogppzU0jc37hGKm8rMSqg==',
        },
        timestamp: '2021-06-29T05:01:48Z',
      },
    }
    const response = await client.getRequestIdByTxHash(
      '90ED70061C1A24B1141F81BADEDAB19570D0B9B255412BF5D680A9BC93539115',
    )
    expect(mockedTxRequest).toHaveBeenCalledTimes(1)
    expect(response).toEqual(
      expected.txResponse.logsList[0].eventsList[1].attributesList[0].value,
    )
  })
  // ! Not sure about the response whether it is in the correct format
  it('test with no request msgs tx', async () => {
    expect(MockedTxService).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedTxService).toHaveBeenCalledTimes(1)
    const mockedTxServices = mocked(MockedTxService.mock.instances[0], true)

    type ExpectedGetTxSignature = (
      requestMessage: GetTxRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: GetTxResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedTxRequest = mocked(
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
        const abciMessageLog = new ABCIMessageLog()
        abciMessageLog.setMsgIndex(0)
        abciMessageLog.setLog('')
        const stringEvent1 = new StringEvent()
        stringEvent1.setType('message')
        const attribute1 = new Attribute()
        attribute1.setKey('action')
        attribute1.setValue('report')
        stringEvent1.setAttributesList([attribute1])

        abciMessageLog.setEventsList([stringEvent1])
        txResponse.setLogsList([abciMessageLog])
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

    const action = async () => {
      await client.getRequestIdByTxHash(
        '90ED70061C1A24B1141F81BADEDAB19570D0B9B255412BF5D680A9BC93539115',
      )
    }

    expect(action()).rejects.toThrow()
  })
})

describe('get chain ID', () => {
  it('success', async () => {
    expect(MockedServiceClient).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedServiceClient).toHaveBeenCalledTimes(1)

    const mockedServiceClient = mocked(
      MockedServiceClient.mock.instances[0],
      true,
    )
    type ExpectedLatestBlockSignature = (
      requestMessage: GetLatestBlockRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: GetLatestBlockResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedLatestBlock = mocked(
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
  it('success', async () => {
    expect(MockedAuthQueryClient).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedAuthQueryClient).toHaveBeenCalledTimes(1)

    const mockedAuthQueryClient = mocked(
      MockedAuthQueryClient.mock.instances[0],
      true,
    )
    type ExpectedAccountSignature = (
      requestMessage: QueryAccountRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: QueryAccountResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedAccount = mocked(
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

  it('account none', () => {
    expect(MockedAuthQueryClient).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedAuthQueryClient).toHaveBeenCalledTimes(1)

    const mockedAuthQueryClient = mocked(
      MockedAuthQueryClient.mock.instances[0],
      true,
    )
    type ExpectedAccountSignature = (
      requestMessage: QueryAccountRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: QueryAccountResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedAccount = mocked(
      mockedAuthQueryClient.account as ExpectedAccountSignature,
    )
    mockedAccount.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const response = new QueryAccountResponse()

        callback(null, response)
        return { cancel: function () {} }
      },
    )

    const action = async () => {
      await client.getAccount('band1jrhuqrymzt4mnvgw8cvy3s9zhx3jj0dq30qpte')
    }

    expect(action()).rejects.toThrow()
  })
})
