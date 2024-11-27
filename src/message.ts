import { Any } from 'google-protobuf/google/protobuf/any_pb'

import { MAX_DATA_SIZE } from './constant'
import {
  InsufficientCoinError,
  NegativeIntegerError,
  NotIntegerError,
  ValueError,
  ValueTooLargeError,
} from './error'

import { MsgSend as MsgSendProto } from '../codegen/cosmos/bank/v1beta1/tx_pb'
import { Coin } from '../codegen/cosmos/base/v1beta1/coin_pb'
import { MsgWithdrawDelegatorReward as MsgWithdrawDelegatorRewardProto } from '../codegen/cosmos/distribution/v1beta1/tx_pb'
import {
  Deposit as MsgDepositProto,
  Vote as MsgVoteProto,
  VoteOption,
  VoteOptionMap,
} from '../codegen/cosmos/gov/v1beta1/gov_pb'

import {
  MsgVote as MsgVoteGroupProto,
  ExecMap as GroupExecMap,
} from '../codegen/cosmos/group/v1/tx_pb'

import {
  VoteOption as VoteOptionGroup,
  VoteOptionMap as VoteOptionGroupMap,
} from '../codegen/cosmos/group/v1/types_pb'

import {
  MsgBeginRedelegate as MsgBeginRedelegateProto,
  MsgDelegate as MsgDelegateProto,
  MsgUndelegate as MsgUndelegateProto,
} from '../codegen/cosmos/staking/v1beta1/tx_pb'

import { MsgTransfer as MsgTransferProto } from '../codegen/ibc/applications/transfer/v1/tx_pb'
import {
  MsgCreateDataSource as MsgCreateDataSourceProto,
  MsgCreateOracleScript as MsgCreateOracleScriptProto,
  MsgEditDataSource as MsgEditDataSourceProto,
  MsgEditOracleScript as MsgEditOracleScriptProto,
  MsgRequestData as MsgRequestDataProto,
} from '../codegen/band/oracle/v1/tx_pb'

import { Message as JSPBMesage } from 'google-protobuf'
import { MsgSubmitProposal as MsgSubmitProposalProto } from '../codegen/cosmos/gov/v1beta1/tx_pb'

import { Proposal } from 'proposal'
import {
  MsgVote as MsgVoteSignalProto,
  MsgSubmitSignalPrices as MsgSubmitSignalPricesProto,
  MsgUpdateReferenceSourceConfig as MsgUpdateReferenceSourceConfigProto,
  MsgUpdateParams as MsgUpdateParamsProto,
} from '../codegen/band/feeds/v1beta1/tx_pb'
import {
  ReferenceSourceConfig,
  Signal,
  SignalPrice,
} from '../codegen/band/feeds/v1beta1/feeds_pb'
import { Params } from '../codegen/band/feeds/v1beta1/params_pb'
import { bech32 } from 'bech32'

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

export class MsgTransfer extends MsgTransferProto implements BaseMsg {
  constructor(
    sourcePort: string,
    sourceChannel: string,
    sender: string,
    receiver: string,
    token: Coin,
    timeoutTimestamp: number,
  ) {
    super()
    this.setSourcePort(sourcePort)
    this.setSourceChannel(sourceChannel)
    this.setSender(sender)
    this.setReceiver(receiver)
    this.setToken(token)
    this.setTimeoutTimestamp(timeoutTimestamp)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'ibc.applications.transfer.v1.MsgTransfer'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  toJSON(): object {
    return {
      type: 'cosmos-sdk/MsgTransfer',
      value: {
        source_port: this.getSourcePort(),
        source_channel: this.getSourceChannel(),
        sender: this.getSender(),
        receiver: this.getReceiver(),
        token: this.getToken().toObject(),
        timeout_height: {}, // TODO: make it adjustable later
        timeout_timestamp: this.getTimeoutTimestamp().toString(),
      },
    }
  }

  validate() {
    if (this.getSourcePort() === '') {
      throw new ValueError('sourcePort should not be an empty string')
    }
    if (this.getSourceChannel() === '') {
      throw new ValueError('sourceChannel should not be an empty string')
    }
    if (this.getSender() === '') {
      throw new ValueError('sender should not be an empty string')
    }
    if (this.getReceiver() === '') {
      throw new ValueError('receiver should not be an empty string')
    }
  }
}

export class MsgCreateDataSource
  extends MsgCreateDataSourceProto
  implements BaseMsg
{
  constructor(
    name: string,
    executable: Buffer | string,
    treasury: string,
    owner: string,
    sender: string,
    feeList: Coin[] = [],
    description?: string,
  ) {
    super()
    this.setName(name)
    this.setDescription(description)
    this.setExecutable(executable)
    this.setTreasury(treasury)
    this.setOwner(owner)
    this.setFeeList(feeList)
    this.setSender(sender)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'oracle.v1.MsgCreateDataSource'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  toJSON(): object {
    return {
      type: 'oracle/CreateDataSource',
      value: {
        name: this.getName().toString(),
        description: this.getDescription().toString(),
        executable: this.getExecutable_asB64(),
        fee: this.getFeeList().map((coin) => coin.toObject()),
        treasury: this.getTreasury().toString(),
        owner: this.getOwner().toString(),
        sender: this.getSender().toString(),
      },
    }
  }

  validate() {
    if (this.getName() === '')
      throw new ValueError('name should not be an empty string')
    if (this.getSender() === '')
      throw new ValueError('sender should not be an empty string')
    if (this.getOwner() === '')
      throw new ValueError('owner should not be an empty string')
    if (this.getTreasury() === '')
      throw new ValueError('treasury should not be an empty string')
    if (this.getExecutable().length == 0)
      throw new ValueError('got an empty source file')
    this.getFeeList().map((coin) => {
      if (Number(coin.getAmount()) && Number(coin.getAmount()) < 0) {
        throw new NegativeIntegerError('Fee cannot be less than zero')
      } else if (!Number(coin.getAmount())) {
        throw new NotIntegerError('Invalid fee, fee list should be a number')
      }
    })
  }
}

export class MsgEditDataSource
  extends MsgEditDataSourceProto
  implements BaseMsg
{
  constructor(
    dataSourceId: number,
    treasury: string,
    owner: string,
    sender: string,
    feeList: Coin[] = [],
    name: string = '[do-not-modify]',
    description: string = '[do-not-modify]',
    executable: Buffer | string = Buffer.from('[do-not-modify]'),
  ) {
    super()
    this.setDataSourceId(dataSourceId)
    this.setName(name)
    this.setDescription(description)
    this.setTreasury(treasury)
    this.setOwner(owner)
    this.setFeeList(feeList)
    this.setSender(sender)
    this.setExecutable(executable)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'oracle.v1.MsgEditDataSource'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  toJSON(): object {
    return {
      type: 'oracle/EditDataSource',
      value: {
        data_source_id: this.getDataSourceId().toString(),
        name: this.getName().toString(),
        description: this.getDescription().toString(),
        fee: this.getFeeList().map((coin) => coin.toObject()),
        treasury: this.getTreasury(),
        owner: this.getOwner(),
        sender: this.getSender(),
        executable: this.getExecutable_asB64(),
      },
    }
  }

  validate() {
    if (!this.getDataSourceId())
      throw new ValueError('dataSourceId cannot be null')
    if (this.getSender() === '')
      throw new ValueError('sender should not be an empty string')
    if (this.getOwner() === '')
      throw new ValueError('owner should not be an empty string')
    if (this.getTreasury() === '')
      throw new ValueError('treasury should not be an empty string')
    this.getFeeList().map((coin) => {
      if (Number(coin.getAmount()) && Number(coin.getAmount()) < 0) {
        throw new NegativeIntegerError('Fee cannot be less than zero')
      } else if (!Number(coin.getAmount())) {
        throw new NotIntegerError('Invalid fee, fee list should be a number')
      }
    })
  }
}

export class MsgCreateOracleScript
  extends MsgCreateOracleScriptProto
  implements BaseMsg
{
  constructor(
    name: string,
    code: Buffer,
    owner: string,
    sender: string,
    description?: string,
    schema?: string,
    sourceCodeUrl?: string,
  ) {
    super()
    this.setName(name)
    this.setDescription(description)
    this.setSchema(schema)
    this.setSourceCodeUrl(sourceCodeUrl)
    this.setCode(code)
    this.setOwner(owner)
    this.setSender(sender)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'oracle.v1.MsgCreateOracleScript'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  toJSON(): object {
    return {
      type: 'oracle/CreateOracleScript',
      value: {
        name: this.getName().toString(),
        description: this.getDescription().toString(),
        schema: this.getSchema().toString(),
        source_code_url: this.getSourceCodeUrl().toString(),
        code: this.getCode_asB64(),
        owner: this.getOwner().toString(),
        sender: this.getSender().toString(),
      },
    }
  }

  validate() {
    if (this.getName() === '')
      throw new ValueError('name should not be an empty string')
    if (this.getSender() === '')
      throw new ValueError('sender should not be an empty string')
    if (this.getOwner() === '')
      throw new ValueError('owner should not be an empty string')
    if (this.getCode().toString().length === 0)
      throw new ValueError('code should not be an empty string')
  }
}

export class MsgEditOracleScript
  extends MsgEditOracleScriptProto
  implements BaseMsg
{
  constructor(
    oracleScriptId: number,
    owner: string,
    sender: string,
    name: string = '[do-not-modify]',
    description: string = '[do-not-modify]',
    schema: string = '[do-not-modify]',
    sourceCodeUrl: string = '[do-not-modify]',
    code: Buffer | string = Buffer.from('[do-not-modify]'),
  ) {
    super()
    this.setOracleScriptId(oracleScriptId)
    this.setOwner(owner)
    this.setSender(sender)
    this.setName(name)
    this.setDescription(description)
    this.setSchema(schema)
    this.setSourceCodeUrl(sourceCodeUrl)
    this.setCode(code)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'oracle.v1.MsgEditOracleScript'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  toJSON(): object {
    return {
      type: 'oracle/EditOracleScript',
      value: {
        oracle_script_id: this.getOracleScriptId().toString(),
        owner: this.getOwner().toString(),
        sender: this.getSender().toString(),
        name: this.getName().toString(),
        description: this.getDescription().toString(),
        schema: this.getSchema().toString(),
        source_code_url: this.getSourceCodeUrl().toString(),
        code: this.getCode_asB64(),
      },
    }
  }

  validate() {
    if (this.getSender() === '')
      throw new ValueError('sender should not be an empty string')
    if (this.getOwner() === '')
      throw new ValueError('owner should not be an empty string')
  }
}

export class MsgSubmitProposal
  extends MsgSubmitProposalProto
  implements BaseMsg
{
  constructor(
    initialDepositList: Coin[],
    proposer: string,
    public content?: Proposal.Content,
  ) {
    super()
    this.setInitialDepositList(initialDepositList)
    this.setProposer(proposer)

    if (content) {
      this.setContent(content.toAny())
    }
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'cosmos.gov.v1beta1.MsgSubmitProposal'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  toJSON(): object {
    const { content } = this
    return {
      type: 'cosmos-sdk/MsgSubmitProposal',
      value: {
        proposer: this.getProposer().toString(),
        initial_deposit: this.getInitialDepositList().map((coin) =>
          coin.toObject(),
        ),
        content: content.toJSON(),
      },
    }
  }

  validate() {
    if (this.getInitialDepositList().length === 0) {
      throw new InsufficientCoinError('Expect at least 1 coin')
    }
    if (this.getProposer() === '') {
      throw new ValueError('proposer should not be an empty string')
    }
    if (this.hasContent()) {
      if (this.getContent().getTypeUrl() === '') {
        throw new ValueError('typeUrl should not be an empty string')
      }
      if (this.getContent().getValue_asU8().length === 0) {
        throw new ValueError('value should not be an empty string')
      }
    }
  }
}

export class MsgDeposit extends MsgDepositProto implements BaseMsg {
  constructor(proposalId: number, depositor: string, amountList: Coin[]) {
    super()
    this.setProposalId(proposalId)
    this.setDepositor(depositor)
    this.setAmountList(amountList)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'cosmos.gov.v1beta1.MsgDeposit'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  toJSON(): object {
    return {
      type: 'cosmos-sdk/MsgDeposit',
      value: {
        proposal_id: this.getProposalId().toString(),
        depositor: this.getDepositor(),
        amount: this.getAmountList().map((coin) => coin.toObject()),
      },
    }
  }

  validate() {
    if (this.getProposalId() <= 0) {
      throw new NegativeIntegerError('proposalId cannot be less than zero')
    }
    if (this.getAmountList().length === 0) {
      throw new InsufficientCoinError('Expect at least 1 coin')
    }
    if (this.getDepositor() === '') {
      throw new ValueError('depositor should not be an empty string')
    }
  }
}

export class MsgVoteGroup extends MsgVoteGroupProto implements BaseMsg {
  constructor(
    proposalId: number,
    voter: string,
    option: VoteOptionGroupMap[keyof VoteOptionGroupMap],
    metadata: string,
    exec: GroupExecMap[keyof GroupExecMap],
  ) {
    super()
    this.setProposalId(proposalId)
    this.setVoter(voter)
    this.setOption(option)
    this.setMetadata(metadata)
    this.setExec(exec)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'cosmos.group.v1.MsgVote'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  toJSON(): object {
    return {
      type: 'cosmos-sdk/group/MsgVote',
      value: {
        proposal_id: this.getProposalId().toString(),
        voter: this.getVoter(),
        option: this.getOption(),
        metadata: this.getMetadata(),
        exec: this.getExec(),
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
    if (this.getOption() === VoteOptionGroup.VOTE_OPTION_UNSPECIFIED) {
      throw new ValueError('VoteOption should not be VOTE_OPTION_UNSPECIFIED')
    }
    if (this.getMetadata() === '') {
      throw new ValueError('metadata should not be an empty string')
    }
  }
}

export class MsgVoteSignal extends MsgVoteSignalProto implements BaseMsg {
  constructor(voter: string, signals: Signal[]) {
    super()
    this.setVoter(voter)
    this.setSignalsList(signals)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'band.feeds.v1beta1.MsgVote'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  toJSON(): object {
    return {
      type: 'feeds/MsgVote',
      value: {
        voter: this.getVoter(),
        signals: this.getSignalsList(),
      },
    }
  }

  validate() {
    if (this.getVoter() === '') {
      throw new ValueError('Voter address should not be an empty string')
    }
  }
}

export class MsgSubmitSignalPrices
  extends MsgSubmitSignalPricesProto
  implements BaseMsg
{
  constructor(validator: string, timestamp: number, pricesList: SignalPrice[]) {
    super()
    this.setValidator(validator)
    this.setTimestamp(timestamp)
    this.setSignalPricesList(pricesList)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'band.feeds.v1beta1.MsgSubmitSignalPrices'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  toJSON(): object {
    return {
      type: 'feeds/MsgSubmitSignalPrices',
      value: {
        validator: this.getValidator(),
        timestamp: this.getTimestamp(),
        signalPricesList: this.getSignalPricesList(),
      },
    }
  }

  validate() {
    if (this.getValidator() === '') {
      throw new ValueError('Validator address should not be an empty string')
    }

    const { prefix } = bech32.decode(this.getValidator())

    if (prefix != 'bandvaloper') {
      throw new ValueError(
        `invalid Bech32 prefix; expected bandvaloper, got ${prefix}`,
      )
    }
  }
}

export class MsgUpdateReferenceSourceConfig
  extends MsgUpdateReferenceSourceConfigProto
  implements BaseMsg
{
  constructor(admin: string, referenceSourceConfig: ReferenceSourceConfig) {
    super()
    this.setAdmin(admin)
    this.setReferenceSourceConfig(referenceSourceConfig)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'feeds.v1beta1.MsgUpdateReferenceSourceConfig'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  toJSON(): object {
    return {
      type: 'feeds.v1beta1.MsgUpdateReferenceSourceConfig',
      value: {
        admin: this.getAdmin(),
        referenceSourceConfig: this.getReferenceSourceConfig(),
      },
    }
  }

  validate() {
    if (this.getAdmin() === '') {
      throw new ValueError('Authority address should not be an empty string')
    }
  }
}

export class MsgUpdateParams extends MsgUpdateParamsProto implements BaseMsg {
  constructor(authority: string, params: Params) {
    super()
    this.setAuthority(authority)
    this.setParams(params)
  }

  toAny(): Any {
    this.validate()

    const anyMsg = new Any()
    const name = 'feeds.v1beta1.MsgUpdateParams'
    anyMsg.pack(this.serializeBinary(), name, '/')
    return anyMsg
  }

  toJSON(): object {
    return {
      type: 'feeds.v1beta1.MsgUpdateParams',
      value: {
        authority: this.getAuthority(),
        params: this.getParams(),
      },
    }
  }

  validate() {
    if (this.getAuthority() === '') {
      throw new ValueError('Admin address should not be an empty string')
    }
  }
}
