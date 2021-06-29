import { MAX_DATA_SIZE } from './constant'
import {
  NegativeIntegerError,
  NotIntegerError,
  ValueTooLargeError,
  InsufficientCoinError,
  ValueError,
} from './error'
import { MsgRequestData } from '../proto/oracle/v1/tx_pb'
import {MsgSend} from '../proto/cosmos/bank/v1beta1/tx_pb'
import {MsgDelegate} from '../proto/cosmos/staking/v1beta1/tx_pb'
import {Coin} from '../proto/cosmos/base/v1beta1/coin_pb'
import {Any} from 'google-protobuf/google/protobuf/any_pb'

export class CreateMsgRequest extends MsgRequestData {
  constructor(
    oracleScriptID: number,
    calldata: Buffer,
    askCount: number,
    minCount: number,
    clientId: string,
    fee: Coin[],
    prepareGas: number,
    executeGas: number,  
    sender: string,
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
      let anyMsg = new Any()
      let name = 'oracle.v1.MsgRequestData'
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

export class CreateMsgSend extends MsgSend {
  constructor(from: string, to: string, amount: Coin[]) {
    super()
    this.setFromAddress(from)
    this.setToAddress(to)
    this.setAmountList(amount)
  }

  toAny() {
    if (this.validate()) {
      let anyMsg = new Any()
      let name = 'cosmos.bank.v1beta1.MsgSend'
      anyMsg.pack(this.serializeBinary(), name, '/')
      return anyMsg  
    }
    return undefined
  }


  validate() {
    if (this.getAmountList.length == 0) {
      throw new InsufficientCoinError('Expect at least 1 coin')
    }
    return true
  }
}

export class CreateMsgDelegate extends MsgDelegate {
  constructor(delegator: string, validator: string, amount: Coin) {
    super()
    this.setDelegatorAddress(delegator)
    this.setValidatorAddress(validator)
    this.setAmount(amount)
  }
 

  toAny() {
    if (this.validate()) {
      let anyMsg = new Any()
      let name = 'cosmos.staking.v1beta1.MsgDelegate'
      anyMsg.pack(this.serializeBinary(), name, '/')
      return anyMsg  
    }
    return undefined
  }


  validate() {
    // this.amount.validate()

    return true
  }
}
