import { Any } from 'google-protobuf/google/protobuf/any_pb'

import { MAX_DATA_SIZE } from './constant'
import {
  NegativeIntegerError,
  ValueTooLargeError,
  NotIntegerError,
  InsufficientCoinError,
  ValueError,
} from './error'

import { MsgRequestData as MsgRequestDataProto } from '../proto/oracle/v1/tx_pb'
import { MsgSend as MsgSendProto } from '../proto/cosmos/bank/v1beta1/tx_pb'
import { MsgDelegate as MsgDelegateProto } from '../proto/cosmos/staking/v1beta1/tx_pb'
import { Coin } from '../proto/cosmos/base/v1beta1/coin_pb'

export class MsgRequestData extends MsgRequestDataProto {
  constructor(
    oracleScriptId: number,
    calldata: Buffer,
    askCount: number,
    minCount: number,
    clientId: string,
    sender: string,
    feeLimitList: Coin[] = [],
    prepareGas: number = 50000,
    executeGas: number = 300000,
  ) {
    super()
    this.setOracleScriptId(oracleScriptId)
    this.setCalldata(calldata)
    this.setAskCount(askCount)
    this.setMinCount(minCount)
    this.setClientId(clientId)
    this.setFeeLimitList(feeLimitList)
    this.setPrepareGas(prepareGas)
    this.setExecuteGas(executeGas)
    this.setSender(sender)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'oracle.v1.MsgRequestData'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  validate() {
    if (this.getOracleScriptId() <= 0)
      throw new NegativeIntegerError('oracleScriptId cannot be less than zero')
    if (!Number.isInteger(this.getOracleScriptId()))
      throw new ValueError('oracleScriptId is not an integer')
    if (!Number.isInteger(this.getAskCount()))
      throw new ValueError('askCount is not an integer')
    if (!Number.isInteger(this.getMinCount()))
      throw new ValueError('minCount is not an integer')
    if (this.getCalldata().length > MAX_DATA_SIZE)
      throw new ValueTooLargeError('Too large calldata')
    if (this.getMinCount() <= 0)
      throw new ValueError(
        `Invalid minCount, got: minCount: ${this.getMinCount()}`,
      )
    if (this.getAskCount() < this.getMinCount())
      throw new ValueError(
        `Invalid askCount got: minCount: ${this.getMinCount()}, askCount: ${this.getAskCount()}`,
      )
    this.getFeeLimitList().forEach((coin) => {
      if (Number(coin.getAmount()) && Number(coin.getAmount()) < 0) {
        throw new NegativeIntegerError('Fee limit cannot be less than zero')
      } else if (!Number(coin.getAmount())) {
        throw new NotIntegerError(
          'Invalid fee limit, fee limit should be a number',
        )
      }
    })
  }
}

export class MsgSend extends MsgSendProto {
  constructor(from: string, to: string, amountList: Coin[]) {
    super()
    this.setFromAddress(from)
    this.setToAddress(to)
    this.setAmountList(amountList)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'cosmos.bank.v1beta1.MsgSend'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  validate() {
    if (this.getAmountList().length === 0) {
      throw new InsufficientCoinError('Expect at least 1 coin')
    }
    if (this.getToAddress() === '' || this.getFromAddress() === '') {
      throw new ValueError('Address should not be an empty string')
    }
  }
}

export class MsgDelegate extends MsgDelegateProto {
  constructor(delegator: string, validator: string, amount: Coin) {
    super()
    this.setDelegatorAddress(delegator)
    this.setValidatorAddress(validator)
    this.setAmount(amount)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'cosmos.staking.v1beta1.MsgDelegate'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  validate() {
    if (this.getAmount() === undefined) {
      throw new InsufficientCoinError('Expect at least 1 coin')
    }
    if (this.getDelegatorAddress() === '' || this.getValidatorAddress() === '') {
      throw new ValueError('Address should not be an empty string')
    }
  }
}
