import { MAX_DATA_SIZE } from './constant'
import {
  NegativeIntegerError,
  NotIntegerError,
  ValueTooLargeError,
  InsufficientCoinError,
  ValueError,
} from './error'
import { MsgRequestData as MsgRequestDataProto } from '../proto/oracle/v1/tx_pb'
import { MsgSend as MsgSendProto } from '../proto/cosmos/bank/v1beta1/tx_pb'
import { MsgDelegate as MsgDelegateProto } from '../proto/cosmos/staking/v1beta1/tx_pb'
import { Coin } from '../proto/cosmos/base/v1beta1/coin_pb'
import { Any } from 'google-protobuf/google/protobuf/any_pb'

export class MsgRequestData extends MsgRequestDataProto {
  constructor(
    oracleScriptID: number,
    calldata: Buffer,
    askCount: number,
    minCount: number,
    clientId: string,
    sender: string,
    fee: Coin[] = [],
    prepareGas: number = 50000,
    executeGas: number = 300000,  
  ) {
    super()
    this.setOracleScriptId(oracleScriptID)
    this.setCalldata(calldata)
    this.setAskCount(askCount)
    this.setMinCount(minCount)
    this.setClientId(clientId)
    this.setFeeLimitList(fee)
    this.setPrepareGas(prepareGas)
    this.setExecuteGas(executeGas)
    this.setSender(sender)
  }


  toAny() {
    if (this.validate()) {
      const anyMsg = new Any()
      const name = 'oracle.v1.MsgRequestData'
      anyMsg.pack(this.serializeBinary(), name, '/')
      return anyMsg  
    }
    return undefined
  }

  validate() {
    if (this.getOracleScriptId() <= 0)
      throw new NegativeIntegerError('oracleScriptID cannot less than zero')
    if (!Number.isInteger(this.getOracleScriptId()))
      throw new NotIntegerError('oracleScriptID is not an integer')
    if (this.getCalldata().length > MAX_DATA_SIZE)
      throw new ValueTooLargeError('too large calldata')
    if (!Number.isInteger(this.getAskCount()))
      throw new NotIntegerError('askCount is not an integer')
    if (!Number.isInteger(this.getMinCount()))
      throw new NotIntegerError('minCount is not an integer')
    if (this.getMinCount() <= 0)
      throw new ValueError(`invalid minCount, got: minCount: ${this.getMinCount()}`)
    if (this.getAskCount() < this.getMinCount())
      throw new ValueError(
        `invalid askCount got: minCount: ${this.getMinCount()}, askCount: ${this.getAskCount()}`,
      )
    return true
  }
}

export class MsgSend extends MsgSendProto {
  constructor(from: string, to: string, amount: Coin[]) {
    super()
    this.setFromAddress(from)
    this.setToAddress(to)
    this.setAmountList(amount)
  }

  toAny() {
    if (this.validate()) {
      const anyMsg = new Any()
      const name = 'cosmos.bank.v1beta1.MsgSend'
      anyMsg.pack(this.serializeBinary(), name, '/')
      return anyMsg  
    }
    return undefined
  }


  validate() {
    if (this.getAmountList().length == 0) {
      throw new InsufficientCoinError('Expect at least 1 coin')
    }
    return true
  }
}

export class MsgDelegate extends MsgDelegateProto {
  constructor(delegator: string, validator: string, amount: Coin) {
    super()
    this.setDelegatorAddress(delegator)
    this.setValidatorAddress(validator)
    this.setAmount(amount)
  }
 

  toAny() {
    if (this.validate()) {
      const anyMsg = new Any()
      const name = 'cosmos.staking.v1beta1.MsgDelegate'
      anyMsg.pack(this.serializeBinary(), name, '/')
      return anyMsg  
    }
    return undefined
  }


  validate() {
    if (this.getAmount() === undefined) {
      throw new InsufficientCoinError('Expect at least 1 coin')
    }
    return true
  }
}
