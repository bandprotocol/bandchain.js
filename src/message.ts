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
import {
  MsgDelegate as MsgDelegateProto,
  MsgUndelegate as MsgUndelegateProto,
  MsgBeginRedelegate as MsgBeginRedelegateProto,
} from '../proto/cosmos/staking/v1beta1/tx_pb'
import { MsgWithdrawDelegatorReward as MsgWithdrawDelegatorRewardProto } from '../proto/cosmos/distribution/v1beta1/tx_pb'
import {
  Vote as MsgVoteProto,
  VoteOption,
  VoteOptionMap,
} from '../proto/cosmos/gov/v1beta1/gov_pb'
import { Coin } from '../proto/cosmos/base/v1beta1/coin_pb'

import { Message as JSPBMesage } from 'google-protobuf'

export interface BaseMsg extends JSPBMesage {
  toJSON(): object
  toAny(): Any
}

export class MsgRequestData extends MsgRequestDataProto implements BaseMsg {
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

  toJSON(): object {
    return {
      type: 'oracle/Request',
      value: {
        ask_count: this.getAskCount().toString(),
        calldata: this.getCalldata_asB64(),
        oracle_script_id: this.getOracleScriptId().toString(),
        min_count: this.getMinCount().toString(),
        client_id: this.getClientId(),
        sender: this.getSender(),
        fee_limit: this.getFeeLimitList().map((coin) => coin.toObject()),
        prepare_gas: this.getPrepareGas().toString(),
        execute_gas: this.getExecuteGas().toString(),
      },
    }
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

export class MsgSend extends MsgSendProto implements BaseMsg {
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

  toJSON(): object {
    return {
      type: 'cosmos-sdk/MsgSend',
      value: {
        from_address: this.getFromAddress(),
        to_address: this.getToAddress(),
        amount: this.getAmountList().map((coin) => coin.toObject()),
      },
    }
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

export class MsgDelegate extends MsgDelegateProto implements BaseMsg {
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

  toJSON(): object {
    return {
      type: 'cosmos-sdk/MsgDelegate',
      value: {
        delegator_address: this.getDelegatorAddress(),
        validator_address: this.getValidatorAddress(),
        amount: this.getAmount().toObject(),
      },
    }
  }

  validate() {
    if (this.getAmount() === undefined) {
      throw new InsufficientCoinError('Expect at least 1 coin')
    }
    if (
      this.getDelegatorAddress() === '' ||
      this.getValidatorAddress() === ''
    ) {
      throw new ValueError('Address should not be an empty string')
    }
  }
}

export class MsgUndelegate extends MsgUndelegateProto implements BaseMsg {
  constructor(delegator: string, validator: string, amount: Coin) {
    super()
    this.setDelegatorAddress(delegator)
    this.setValidatorAddress(validator)
    this.setAmount(amount)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'cosmos.staking.v1beta1.MsgUndelegate'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  toJSON(): object {
    return {
      type: 'cosmos-sdk/MsgUndelegate',
      value: {
        delegator_address: this.getDelegatorAddress(),
        validator_address: this.getValidatorAddress(),
        amount: this.getAmount().toObject(),
      },
    }
  }

  validate() {
    if (this.getAmount() === undefined) {
      throw new InsufficientCoinError('Expect at least 1 coin')
    }
    if (
      this.getDelegatorAddress() === '' ||
      this.getValidatorAddress() === ''
    ) {
      throw new ValueError('Address should not be an empty string')
    }
  }
}

export class MsgBeginRedelegate
  extends MsgBeginRedelegateProto
  implements BaseMsg
{
  constructor(
    delegator: string,
    srcValidator: string,
    dstValidator: string,
    amount: Coin,
  ) {
    super()
    this.setDelegatorAddress(delegator)
    this.setValidatorSrcAddress(srcValidator)
    this.setValidatorDstAddress(dstValidator)
    this.setAmount(amount)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'cosmos.staking.v1beta1.MsgBeginRedelegate'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  toJSON(): object {
    return {
      type: 'cosmos-sdk/MsgBeginRedelegate',
      value: {
        delegator_address: this.getDelegatorAddress(),
        validator_src_address: this.getValidatorSrcAddress(),
        validator_dst_address: this.getValidatorDstAddress(),
        amount: this.getAmount().toObject(),
      },
    }
  }

  validate() {
    if (this.getAmount() === undefined) {
      throw new InsufficientCoinError('Expect at least 1 coin')
    }
    if (
      this.getDelegatorAddress() === '' ||
      this.getValidatorSrcAddress() === '' ||
      this.getValidatorDstAddress() === ''
    ) {
      throw new ValueError('Address should not be an empty string')
    }
  }
}

export class MsgWithdrawDelegatorReward
  extends MsgWithdrawDelegatorRewardProto
  implements BaseMsg
{
  constructor(delegator: string, validator: string) {
    super()
    this.setDelegatorAddress(delegator)
    this.setValidatorAddress(validator)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  toJSON(): object {
    return {
      type: 'cosmos-sdk/MsgWithdrawDelegationReward',
      value: {
        delegator_address: this.getDelegatorAddress(),
        validator_address: this.getValidatorAddress(),
      },
    }
  }

  validate() {
    if (
      this.getDelegatorAddress() === '' ||
      this.getValidatorAddress() === ''
    ) {
      throw new ValueError('Address should not be an empty string')
    }
  }
}

export class MsgVote extends MsgVoteProto implements BaseMsg {
  constructor(
    proposalId: number,
    voter: string,
    option: VoteOptionMap[keyof VoteOptionMap],
  ) {
    super()
    this.setProposalId(proposalId)
    this.setVoter(voter)
    this.setOption(option)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'cosmos.gov.v1beta1.MsgVote'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  toJSON(): object {
    return {
      type: 'cosmos-sdk/MsgVote',
      value: {
        proposal_id: this.getProposalId().toString(),
        voter: this.getVoter(),
        option: this.getOption(),
      },
    }
  }

  validate() {
    if (this.getProposalId() <= 0) {
      throw new NegativeIntegerError('proposalId cannot be less than zero')
    }
    if (this.getVoter() === '') {
      throw new ValueError('Address should not be an empty string')
    }
    if (this.getOption() === VoteOption.VOTE_OPTION_UNSPECIFIED) {
      throw new ValueError('VoteOption should not be VOTE_OPTION_UNSPECIFIED')
    }
  }
}
