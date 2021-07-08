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
import { Any } from 'google-protobuf/google/protobuf/any_pb'

export class MsgRequestData extends MsgRequestDataProto {
  constructor(
    oracleScriptId: number,
    calldata: Buffer,
    askCount: number,
    minCount: number,
    clientId: string,
    feeLimit: Coin[] = [],
    sender: string,
    prepareGas: number = 50000,
    executeGas: number = 300000,  
  ) {
    super()
    this.setOracleScriptId(oracleScriptId)
    this.setCalldata(calldata)
    this.setAskCount(askCount)
    this.setMinCount(minCount)
    this.setClientId(clientId)
    this.setFeeLimitList(feeLimit)
    this.setPrepareGas(prepareGas)
    this.setExecuteGas(executeGas)
    this.setSender(sender)
  }


  toAny(): Any | undefined {
    if (this.validate()) {
      const anyMsg = new Any()
      const name = 'oracle.v1.MsgRequestData'
      anyMsg.pack(this.serializeBinary(), name, '/')
      return anyMsg  
    }
    return undefined
  }

  validate(): boolean{
    if (this.getOracleScriptId() <= 0 )
      throw new NegativeIntegerError('oracleScriptId cannot be less than zero')
    if (this.getCalldata().length > MAX_DATA_SIZE)
      throw new ValueTooLargeError('Too large calldata')
    if (this.getMinCount() <= 0)
      throw new ValueError(`Invalid minCount, got: minCount: ${this.getMinCount()}`)
    if (this.getAskCount() < this.getMinCount())
      throw new ValueError(
        `Invalid askCount got: minCount: ${this.getMinCount()}, askCount: ${this.getAskCount()}`,
      )
    console.log(this.getFeeLimitList())
    this.getFeeLimitList().forEach((coin)=> {
      console.log(coin)
      console.log(coin.getAmount())
      if (Number(coin.getAmount()) && Number(coin.getAmount()) < 0) {        
        throw new NegativeIntegerError('Fee limit cannot be less than zero')
      } else if (!Number(coin.getAmount())) {
        throw new NotIntegerError('Invalid fee limit, fee limit should be a number')
      } 
    })
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

  toAny(): Any | undefined {
    if (this.validate()) {
      const anyMsg = new Any()
      const name = 'cosmos.bank.v1beta1.MsgSend'
      anyMsg.pack(this.serializeBinary(), name, '/')
      return anyMsg  
    }
    return undefined
  }


  validate(): boolean{
    if (this.getAmountList().length == 0) {
      throw new InsufficientCoinError('Expect at least 1 coin')
    }
    if (this.getToAddress() === '' || this.getFromAddress() === '') {
      throw new ValueError('Address should not be an empty string')
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
 

  toAny(): Any | undefined {
    if (this.validate()) {
      const anyMsg = new Any()
      const name = 'cosmos.staking.v1beta1.MsgDelegate'
      anyMsg.pack(this.serializeBinary(), name, '/')
      return anyMsg  
    }
    return undefined
  }


  validate(): boolean{
    if (this.getAmount() === undefined) {
      throw new InsufficientCoinError('Expect at least 1 coin')
    }
    if (this.getDelegatorAddress() !== '' || this.getValidatorAddress() !== '') {
      throw new ValueError('Address should not be an empty string')
    }
    return true
  }
}
