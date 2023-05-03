import { Client } from '../../src'
import { grpc } from '@improbable-eng/grpc-web'

import { ServiceClient as TxServiceClient } from '../../proto/cosmos/tx/v1beta1/service_pb_service'
import {
  ServiceError,
  UnaryResponse,
} from '../../proto/oracle/v1/query_pb_service'

import {
  BroadcastTxRequest,
  BroadcastTxResponse,
} from '../../proto/cosmos/tx/v1beta1/service_pb'
import { TxResponse } from '../../proto/cosmos/base/abci/v1beta1/abci_pb'
import {
  ABCIMessageLog,
  StringEvent,
  Attribute,
} from '../../proto/cosmos/base/abci/v1beta1/abci_pb'

jest.mock('../../proto/cosmos/tx/v1beta1/service_pb_service')

const MockedTxService = jest.mocked(TxServiceClient)

const TEST_GRPC = 'http://localhost:8080'

const expectedSignatureFailed = {
  height: 0,
  txhash: 'C6FCF7AB773EFE9D616DBD0C2B09CAF552C8998CABBF17A394B5243CAA9381E0',
  codespace: 'sdk',
  code: 4,
  data: '',
  rawLog:
    'signature verification failed; please verify account number (104) and chain-id (band-laozi-testnet6): unauthorized',
  logsList: [],
  info: '',
  gasWanted: 2000000,
  gasUsed: 39362,
  timestamp: '',
}

beforeEach(() => {
  MockedTxService.mockClear()
})

describe('send transaction sync mode', () => {
  it('sync mode success', async () => {
    expect(MockedTxService).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedTxService).toHaveBeenCalledTimes(1)

    const mockedTxServices = jest.mocked(MockedTxService.mock.instances[0])
    type ExpectedDataSourceSignature = (
      requestMessage: BroadcastTxRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: BroadcastTxResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedBroadcasting = jest.mocked(
      mockedTxServices.broadcastTx as ExpectedDataSourceSignature,
      {
        shallow: true,
      },
    )
    mockedBroadcasting.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const response = new BroadcastTxResponse()
        const txResponse = new TxResponse()
        txResponse.setCode(0)
        txResponse.setTxhash(
          'B7ACAEE66D48CF24B0F752A1D0B25E055CE2B49F1BC7F7D77EEE80269C5176DF',
        )
        response.setTxResponse(txResponse)

        callback(null, response)
        return { cancel: function () {} }
      },
    )
    const expected = {
      height: 0,
      txhash:
        'B7ACAEE66D48CF24B0F752A1D0B25E055CE2B49F1BC7F7D77EEE80269C5176DF',
      codespace: '',
      code: 0,
      data: '',
      rawLog: '',
      logsList: [],
      info: '',
      gasWanted: 0,
      gasUsed: 0,
      tx: undefined,
      timestamp: '',
    }
    const response = await client.sendTxSyncMode('txBytes')
    expect(mockedBroadcasting).toHaveBeenCalledTimes(1)
    expect(response).toEqual(expected)
  })
  it('sync mode signature fail', async () => {
    expect(MockedTxService).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedTxService).toHaveBeenCalledTimes(1)

    const mockedTxServices = jest.mocked(MockedTxService.mock.instances[0])
    type ExpectedDataSourceSignature = (
      requestMessage: BroadcastTxRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: BroadcastTxResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedBroadcasting = jest.mocked(
      mockedTxServices.broadcastTx as ExpectedDataSourceSignature,
      {
        shallow: true,
      },
    )
    mockedBroadcasting.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const response = new BroadcastTxResponse()
        const txResponse = new TxResponse()
        txResponse.setHeight(0)
        txResponse.setCodespace('sdk')
        txResponse.setCode(4)
        txResponse.setTxhash(
          'C6FCF7AB773EFE9D616DBD0C2B09CAF552C8998CABBF17A394B5243CAA9381E0',
        )
        txResponse.setRawLog(
          'signature verification failed; please verify account number (104) and chain-id (band-laozi-testnet6): unauthorized',
        ),
          txResponse.setGasWanted(2000000)
        txResponse.setGasUsed(39362)
        response.setTxResponse(txResponse)

        callback(null, response)
        return { cancel: function () {} }
      },
    )
    expectedSignatureFailed
    const response = await client.sendTxAsyncMode('txBytesFail')
    expect(mockedBroadcasting).toHaveBeenCalledTimes(1)
    expect(response).toEqual(expectedSignatureFailed)
  })
})

describe('send transaction async mode', () => {
  it('asyn mode success', async () => {
    expect(MockedTxService).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedTxService).toHaveBeenCalledTimes(1)

    const mockedTxServices = jest.mocked(MockedTxService.mock.instances[0])
    type ExpectedDataSourceSignature = (
      requestMessage: BroadcastTxRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: BroadcastTxResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedBroadcasting = jest.mocked(
      mockedTxServices.broadcastTx as ExpectedDataSourceSignature,
      {
        shallow: true,
      },
    )
    mockedBroadcasting.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const response = new BroadcastTxResponse()
        const txResponse = new TxResponse()
        txResponse.setCode(0)
        txResponse.setTxhash(
          'B7ACAEE66D48CF24B0F752A1D0B25E055CE2B49F1BC7F7D77EEE80269C5176DF',
        )
        response.setTxResponse(txResponse)

        callback(null, response)
        return { cancel: function () {} }
      },
    )
    const expected = {
      height: 0,
      txhash:
        'B7ACAEE66D48CF24B0F752A1D0B25E055CE2B49F1BC7F7D77EEE80269C5176DF',
      codespace: '',
      code: 0,
      data: '',
      rawLog: '',
      logsList: [],
      info: '',
      gasWanted: 0,
      gasUsed: 0,
      tx: undefined,
      timestamp: '',
    }
    const response = await client.sendTxAsyncMode('txBytes')
    expect(mockedBroadcasting).toHaveBeenCalledTimes(1)
    expect(response).toEqual(expected)
  })
})
describe('send transaction block mode', () => {
  it('block mode success', async () => {
    expect(MockedTxService).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedTxService).toHaveBeenCalledTimes(1)

    const mockedTxServices = jest.mocked(MockedTxService.mock.instances[0])
    type ExpectedDataSourceSignature = (
      requestMessage: BroadcastTxRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: BroadcastTxResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedBroadcasting = jest.mocked(
      mockedTxServices.broadcastTx as ExpectedDataSourceSignature,
      {
        shallow: true,
      },
    )
    mockedBroadcasting.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const response = new BroadcastTxResponse()
        const txResponse = new TxResponse()
        txResponse.setHeight(272796)
        txResponse.setTxhash(
          'E894BB773470ADB28D8FA61BF5300A23D6BA04D2F28A6AF2E7DA5AB4122FA3E0',
        )
        txResponse.setCodespace('')
        txResponse.setCode(0)
        txResponse.setData('0A090A0772657175657374')
        txResponse.setRawLog(
          '[{"events":[{"type":"message","attributes":[{"key":"action","value":"request"}]},{"type":"raw_request","attributes":[{"key":"data_source_id","value":"61"},{"key":"data_source_hash","value":"07be7bd61667327aae10b7a13a542c7dfba31b8f4c52b0b60bf9c7b11b1a72ef"},{"key":"external_id","value":"6"},{"key":"calldata","value":"ETH"},{"key":"fee"},{"key":"data_source_id","value":"57"},{"key":"data_source_hash","value":"61b369daa5c0918020a52165f6c7662d5b9c1eee915025cb3d2b9947a26e48c7"},{"key":"external_id","value":"0"},{"key":"calldata","value":"ETH"},{"key":"fee"},{"key":"data_source_id","value":"62"},{"key":"data_source_hash","value":"107048da9dbf7960c79fb20e0585e080bb9be07d42a1ce09c5479bbada8d0289"},{"key":"external_id","value":"3"},{"key":"calldata","value":"ETH"},{"key":"fee"},{"key":"data_source_id","value":"60"},{"key":"data_source_hash","value":"2e588de76a58338125022bc42b460072300aebbcc4acaf55f91755c1c1799bac"},{"key":"external_id","value":"5"},{"key":"calldata","value":"huobipro ETH"},{"key":"fee"},{"key":"data_source_id","value":"59"},{"key":"data_source_hash","value":"5c011454981c473af3bf6ef93c76b36bfb6cc0ce5310a70a1ba569de3fc0c15d"},{"key":"external_id","value":"2"},{"key":"calldata","value":"ETH"},{"key":"fee"},{"key":"data_source_id","value":"60"},{"key":"data_source_hash","value":"2e588de76a58338125022bc42b460072300aebbcc4acaf55f91755c1c1799bac"},{"key":"external_id","value":"4"},{"key":"calldata","value":"binance ETH"},{"key":"fee"},{"key":"data_source_id","value":"60"},{"key":"data_source_hash","value":"2e588de76a58338125022bc42b460072300aebbcc4acaf55f91755c1c1799bac"},{"key":"external_id","value":"9"},{"key":"calldata","value":"bittrex ETH"},{"key":"fee"},{"key":"data_source_id","value":"60"},{"key":"data_source_hash","value":"2e588de76a58338125022bc42b460072300aebbcc4acaf55f91755c1c1799bac"},{"key":"external_id","value":"7"},{"key":"calldata","value":"kraken ETH"},{"key":"fee"},{"key":"data_source_id","value":"60"},{"key":"data_source_hash","value":"2e588de76a58338125022bc42b460072300aebbcc4acaf55f91755c1c1799bac"},{"key":"external_id","value":"8"},{"key":"calldata","value":"bitfinex ETH"},{"key":"fee"},{"key":"data_source_id","value":"58"},{"key":"data_source_hash","value":"7e6759fade717a06fb643392bfde837bfc3437da2ded54feed706e6cd35de461"},{"key":"external_id","value":"1"},{"key":"calldata","value":"ETH"},{"key":"fee"}]},{"type":"request","attributes":[{"key":"id","value":"37643"},{"key":"client_id","value":"Blue"},{"key":"oracle_script_id","value":"37"},{"key":"calldata","value":"00000001000000034554480000000000000064"},{"key":"ask_count","value":"4"},{"key":"min_count","value":"3"},{"key":"gas_used","value":"71512"},{"key":"total_fees"},{"key":"validator","value":"bandvaloper19eu9g3gka6rxlevkjlvjq7s6c498tejnwxjwxx"},{"key":"validator","value":"bandvaloper1p46uhvdk8vr829v747v85hst3mur2dzlhfemmz"},{"key":"validator","value":"bandvaloper1a570h9e3rtvfhm030ta5hvel7e7e4lh4pgv8wj"},{"key":"validator","value":"bandvaloper1274qgg28xkz6f3upx05ftr9zepgmtfgts392dy"}]}]}]',
        )
        const ABCIMsgLog = new ABCIMessageLog()
        ABCIMsgLog.setMsgIndex(0)
        ABCIMsgLog.setLog('')
        const eventList1 = new StringEvent()
        eventList1.setType('message')
        const attribute1 = new Attribute()
        attribute1.setKey('action')
        attribute1.setValue('request')
        eventList1.setAttributesList([attribute1])
        const eventList2 = new StringEvent()
        eventList2.setType('raw_request')
        const attribute2 = new Attribute()
        attribute2.setKey('data_source_id')
        attribute2.setValue('61')
        const attribute3 = new Attribute()
        attribute3.setKey('data_source_hash')
        attribute3.setValue(
          '07be7bd61667327aae10b7a13a542c7dfba31b8f4c52b0b60bf9c7b11b1a72ef',
        )
        const attribute4 = new Attribute()
        attribute4.setKey('external_id')
        attribute4.setValue('6')
        const attribute5 = new Attribute()
        attribute5.setKey('calldata')
        attribute5.setValue('ETH')
        const attribute6 = new Attribute()
        attribute6.setKey('fee')
        attribute6.setValue('')
        eventList2.setAttributesList([
          attribute2,
          attribute3,
          attribute4,
          attribute5,
          attribute6,
        ])

        const eventList3 = new StringEvent()
        eventList3.setType('request')
        const attribute7 = new Attribute()
        attribute7.setKey('id')
        attribute7.setValue('37643')
        const attribute8 = new Attribute()
        attribute8.setKey('client_id')
        attribute8.setValue('Blue')
        const attribute9 = new Attribute()
        attribute9.setKey('oracle_script_id')
        attribute9.setValue('37')
        const attribute10 = new Attribute()
        attribute10.setKey('calldata')
        attribute10.setValue('00000001000000034554480000000000000064')
        const attribute11 = new Attribute()
        attribute11.setKey('ask_count')
        attribute11.setValue('4')
        const attribute12 = new Attribute()
        attribute12.setKey('min_count')
        attribute12.setValue('3')
        const attribute13 = new Attribute()
        attribute13.setKey('gas_used')
        attribute13.setValue('71512')
        const attribute14 = new Attribute()
        attribute14.setKey('total_fees')
        attribute14.setValue('')
        const attribute15 = new Attribute()
        attribute15.setKey('validator')
        attribute15.setValue(
          'bandvaloper19eu9g3gka6rxlevkjlvjq7s6c498tejnwxjwxx',
        )
        const attribute16 = new Attribute()
        attribute16.setKey('validator')
        attribute16.setValue(
          'bandvaloper1p46uhvdk8vr829v747v85hst3mur2dzlhfemmz',
        )
        const attribute17 = new Attribute()
        attribute17.setKey('validator')
        attribute17.setValue(
          'bandvaloper1a570h9e3rtvfhm030ta5hvel7e7e4lh4pgv8wj',
        )
        const attribute18 = new Attribute()
        attribute18.setKey('validator')
        attribute18.setValue(
          'bandvaloper1274qgg28xkz6f3upx05ftr9zepgmtfgts392dy',
        )
        eventList3.setAttributesList([
          attribute7,
          attribute8,
          attribute9,
          attribute10,
          attribute11,
          attribute12,
          attribute13,
          attribute14,
          attribute15,
          attribute16,
          attribute17,
          attribute18,
        ])
        ABCIMsgLog.setEventsList([eventList1, eventList2, eventList3])
        txResponse.setInfo('')
        txResponse.setGasWanted(2000000)
        txResponse.setGasUsed(406535)
        txResponse.setTimestamp('')
        txResponse.setLogsList([ABCIMsgLog])
        response.setTxResponse(txResponse)

        callback(null, response)
        return { cancel: function () {} }
      },
    )
    const expected = {
      height: 272796,
      txhash:
        'E894BB773470ADB28D8FA61BF5300A23D6BA04D2F28A6AF2E7DA5AB4122FA3E0',
      codespace: '',
      code: 0,
      data: '0A090A0772657175657374',
      rawLog:
        '[{"events":[{"type":"message","attributes":[{"key":"action","value":"request"}]},{"type":"raw_request","attributes":[{"key":"data_source_id","value":"61"},{"key":"data_source_hash","value":"07be7bd61667327aae10b7a13a542c7dfba31b8f4c52b0b60bf9c7b11b1a72ef"},{"key":"external_id","value":"6"},{"key":"calldata","value":"ETH"},{"key":"fee"},{"key":"data_source_id","value":"57"},{"key":"data_source_hash","value":"61b369daa5c0918020a52165f6c7662d5b9c1eee915025cb3d2b9947a26e48c7"},{"key":"external_id","value":"0"},{"key":"calldata","value":"ETH"},{"key":"fee"},{"key":"data_source_id","value":"62"},{"key":"data_source_hash","value":"107048da9dbf7960c79fb20e0585e080bb9be07d42a1ce09c5479bbada8d0289"},{"key":"external_id","value":"3"},{"key":"calldata","value":"ETH"},{"key":"fee"},{"key":"data_source_id","value":"60"},{"key":"data_source_hash","value":"2e588de76a58338125022bc42b460072300aebbcc4acaf55f91755c1c1799bac"},{"key":"external_id","value":"5"},{"key":"calldata","value":"huobipro ETH"},{"key":"fee"},{"key":"data_source_id","value":"59"},{"key":"data_source_hash","value":"5c011454981c473af3bf6ef93c76b36bfb6cc0ce5310a70a1ba569de3fc0c15d"},{"key":"external_id","value":"2"},{"key":"calldata","value":"ETH"},{"key":"fee"},{"key":"data_source_id","value":"60"},{"key":"data_source_hash","value":"2e588de76a58338125022bc42b460072300aebbcc4acaf55f91755c1c1799bac"},{"key":"external_id","value":"4"},{"key":"calldata","value":"binance ETH"},{"key":"fee"},{"key":"data_source_id","value":"60"},{"key":"data_source_hash","value":"2e588de76a58338125022bc42b460072300aebbcc4acaf55f91755c1c1799bac"},{"key":"external_id","value":"9"},{"key":"calldata","value":"bittrex ETH"},{"key":"fee"},{"key":"data_source_id","value":"60"},{"key":"data_source_hash","value":"2e588de76a58338125022bc42b460072300aebbcc4acaf55f91755c1c1799bac"},{"key":"external_id","value":"7"},{"key":"calldata","value":"kraken ETH"},{"key":"fee"},{"key":"data_source_id","value":"60"},{"key":"data_source_hash","value":"2e588de76a58338125022bc42b460072300aebbcc4acaf55f91755c1c1799bac"},{"key":"external_id","value":"8"},{"key":"calldata","value":"bitfinex ETH"},{"key":"fee"},{"key":"data_source_id","value":"58"},{"key":"data_source_hash","value":"7e6759fade717a06fb643392bfde837bfc3437da2ded54feed706e6cd35de461"},{"key":"external_id","value":"1"},{"key":"calldata","value":"ETH"},{"key":"fee"}]},{"type":"request","attributes":[{"key":"id","value":"37643"},{"key":"client_id","value":"Blue"},{"key":"oracle_script_id","value":"37"},{"key":"calldata","value":"00000001000000034554480000000000000064"},{"key":"ask_count","value":"4"},{"key":"min_count","value":"3"},{"key":"gas_used","value":"71512"},{"key":"total_fees"},{"key":"validator","value":"bandvaloper19eu9g3gka6rxlevkjlvjq7s6c498tejnwxjwxx"},{"key":"validator","value":"bandvaloper1p46uhvdk8vr829v747v85hst3mur2dzlhfemmz"},{"key":"validator","value":"bandvaloper1a570h9e3rtvfhm030ta5hvel7e7e4lh4pgv8wj"},{"key":"validator","value":"bandvaloper1274qgg28xkz6f3upx05ftr9zepgmtfgts392dy"}]}]}]',
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
                  value: 'request',
                },
              ],
            },
            {
              type: 'raw_request',
              attributesList: [
                {
                  key: 'data_source_id',
                  value: '61',
                },
                {
                  key: 'data_source_hash',
                  value:
                    '07be7bd61667327aae10b7a13a542c7dfba31b8f4c52b0b60bf9c7b11b1a72ef',
                },
                {
                  key: 'external_id',
                  value: '6',
                },
                {
                  key: 'calldata',
                  value: 'ETH',
                },
                {
                  key: 'fee',
                  value: '',
                },
              ],
            },
            {
              type: 'request',
              attributesList: [
                {
                  key: 'id',
                  value: '37643',
                },
                {
                  key: 'client_id',
                  value: 'Blue',
                },
                {
                  key: 'oracle_script_id',
                  value: '37',
                },
                {
                  key: 'calldata',
                  value: '00000001000000034554480000000000000064',
                },
                {
                  key: 'ask_count',
                  value: '4',
                },
                {
                  key: 'min_count',
                  value: '3',
                },
                {
                  key: 'gas_used',
                  value: '71512',
                },
                {
                  key: 'total_fees',
                  value: '',
                },
                {
                  key: 'validator',
                  value: 'bandvaloper19eu9g3gka6rxlevkjlvjq7s6c498tejnwxjwxx',
                },
                {
                  key: 'validator',
                  value: 'bandvaloper1p46uhvdk8vr829v747v85hst3mur2dzlhfemmz',
                },
                {
                  key: 'validator',
                  value: 'bandvaloper1a570h9e3rtvfhm030ta5hvel7e7e4lh4pgv8wj',
                },
                {
                  key: 'validator',
                  value: 'bandvaloper1274qgg28xkz6f3upx05ftr9zepgmtfgts392dy',
                },
              ],
            },
          ],
        },
      ],
      info: '',
      gasWanted: 2000000,
      gasUsed: 406535,
      timestamp: '',
    }
    const response = await client.sendTxBlockMode('txBytes')
    expect(mockedBroadcasting).toHaveBeenCalledTimes(1)
    expect(response).toEqual(expected)
  })
  it('block mode signature fail', async () => {
    expect(MockedTxService).not.toHaveBeenCalled()
    const client = new Client(TEST_GRPC)
    expect(MockedTxService).toHaveBeenCalledTimes(1)

    const mockedTxServices = jest.mocked(MockedTxService.mock.instances[0])
    type ExpectedDataSourceSignature = (
      requestMessage: BroadcastTxRequest,
      metadata: grpc.Metadata,
      callback: (
        error: ServiceError | null,
        responseMessage: BroadcastTxResponse | null,
      ) => void,
    ) => UnaryResponse
    const mockedBroadcasting = jest.mocked(
      mockedTxServices.broadcastTx as ExpectedDataSourceSignature,
      {
        shallow: true,
      },
    )
    mockedBroadcasting.mockImplementationOnce(
      (_req, _metadata, callback): UnaryResponse => {
        const response = new BroadcastTxResponse()
        const txResponse = new TxResponse()
        txResponse.setHeight(0)
        txResponse.setCodespace('sdk')
        txResponse.setCode(4)
        txResponse.setTxhash(
          'C6FCF7AB773EFE9D616DBD0C2B09CAF552C8998CABBF17A394B5243CAA9381E0',
        )
        txResponse.setRawLog(
          'signature verification failed; please verify account number (104) and chain-id (band-laozi-testnet6): unauthorized',
        ),
          txResponse.setGasWanted(2000000)
        txResponse.setGasUsed(39362)
        response.setTxResponse(txResponse)

        callback(null, response)
        return { cancel: function () {} }
      },
    )
    expectedSignatureFailed
    const response = await client.sendTxBlockMode('txBytesFail')
    expect(mockedBroadcasting).toHaveBeenCalledTimes(1)
    expect(response).toEqual(expectedSignatureFailed)
  })
})
