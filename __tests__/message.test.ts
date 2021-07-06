import { Coin } from '../proto/cosmos/base/v1beta1/coin_pb'
import { Any } from 'google-protobuf/google/protobuf/any_pb'

import {
  MsgRequestData,
  MsgSend,
  MsgDelegate,
} from '../src/message'

let coin = new Coin()
coin.setDenom('uband')
coin.setAmount('0')

describe('MsgRequest', () => {
  const senderAddr = 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c'
  const calldata = Buffer.from('000000034254430000000000000001', 'hex')
  const clientId = 'test'

  it('create successfully', () => {
    const msgRequest = new MsgRequestData(
      1,
      calldata,
      2,
      2,
      clientId,
      senderAddr,
      [coin],
      20000,
      20000,
    )

    const anyMsg = new Any()
    const name = 'oracle.v1.MsgRequestData'
    anyMsg.pack(msgRequest.serializeBinary(), name, '/')

    expect(msgRequest.toAny()).toEqual(anyMsg)

    expect(msgRequest.validate()).toBeTruthy()
  })

  it('create with error from validate()', () => {
    let msgs = []
    let errorText: string[] = []
    msgs.push(
      new MsgRequestData(
        -1,
        calldata,
        2,
        2,
        clientId,
        senderAddr,
        [coin],
        20000,
        20000,
      ),
    )
    msgs.push(
      new MsgRequestData(
        1.1,
        calldata,
        2,
        2,
        clientId,
        senderAddr,
        [coin],
        20000,
        20000,
      ),
    )
    msgs.push(
      new MsgRequestData(
        1,
        calldata,
        2.1,
        2,
        clientId,
        senderAddr,
        [coin],
        20000,
        20000,
      ),
    )
    msgs.push(
      new MsgRequestData(
        1,
        calldata,
        2,
        2.1,
        clientId,
        senderAddr,
        [coin],
        20000,
        20000,
      ),
    )
    msgs.push(
      new MsgRequestData(
        1,
        calldata,
        2,
        0,
        clientId,
        senderAddr,
        [coin],
        20000,
        20000,
      ),
    )
    errorText.push('oracleScriptID cannot less than zero')
    errorText.push('oracleScriptID is not an integer')
    errorText.push('askCount is not an integer')
    errorText.push('minCount is not an integer')
    errorText.push('invalid minCount, got: minCount: 0')

    msgs.forEach((msg, index) => {
      expect(() => {
        msg.validate()
      }).toThrowError(errorText[index])
    })
  })
})

describe('MsgSend', () => {
  it('create successfully', () => {
    const msgSend = new MsgSend(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      [coin],
    )
    const anyMsg = new Any()
    const name = 'cosmos.bank.v1beta1.MsgSend'
    anyMsg.pack(msgSend.serializeBinary(), name, '/')

    expect(msgSend.toAny()).toEqual(anyMsg)

    expect(msgSend.validate()).toBeTruthy()
  })

  it('error no coin', () => {
    const msgSend = new MsgSend(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      [],
    )
    expect(() => {
      msgSend.validate()
    }).toThrowError('Expect at least 1 coin')
  })
})

describe('MsgDelegate', () => {
  it('create successfully', () => {
    const msgDelegate = new MsgDelegate(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      'bandvaloper1j9vk75jjty02elhwqqjehaspfslaem8pr20qst',
      coin,
    )

    const anyMsg = new Any()
    const name = 'cosmos.staking.v1beta1.MsgDelegate'
    anyMsg.pack(msgDelegate.serializeBinary(), name, '/')

    expect(msgDelegate.toAny()).toEqual(anyMsg)

    expect(msgDelegate.validate()).toBeTruthy()
  })
})
