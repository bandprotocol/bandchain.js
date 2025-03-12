// package: cosmos.gov.v1
// file: cosmos/gov/v1/gov.proto

import * as jspb from "google-protobuf";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";

export class WeightedVoteOption extends jspb.Message {
  getOption(): VoteOptionMap[keyof VoteOptionMap];
  setOption(value: VoteOptionMap[keyof VoteOptionMap]): void;

  getWeight(): string;
  setWeight(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeightedVoteOption.AsObject;
  static toObject(includeInstance: boolean, msg: WeightedVoteOption): WeightedVoteOption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeightedVoteOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeightedVoteOption;
  static deserializeBinaryFromReader(message: WeightedVoteOption, reader: jspb.BinaryReader): WeightedVoteOption;
}

export namespace WeightedVoteOption {
  export type AsObject = {
    option: VoteOptionMap[keyof VoteOptionMap],
    weight: string,
  }
}

export class Deposit extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  getDepositor(): string;
  setDepositor(value: string): void;

  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deposit.AsObject;
  static toObject(includeInstance: boolean, msg: Deposit): Deposit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Deposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deposit;
  static deserializeBinaryFromReader(message: Deposit, reader: jspb.BinaryReader): Deposit;
}

export namespace Deposit {
  export type AsObject = {
    proposalId: number,
    depositor: string,
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class Proposal extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  clearMessagesList(): void;
  getMessagesList(): Array<google_protobuf_any_pb.Any>;
  setMessagesList(value: Array<google_protobuf_any_pb.Any>): void;
  addMessages(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  getStatus(): ProposalStatusMap[keyof ProposalStatusMap];
  setStatus(value: ProposalStatusMap[keyof ProposalStatusMap]): void;

  hasFinalTallyResult(): boolean;
  clearFinalTallyResult(): void;
  getFinalTallyResult(): TallyResult | undefined;
  setFinalTallyResult(value?: TallyResult): void;

  hasSubmitTime(): boolean;
  clearSubmitTime(): void;
  getSubmitTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSubmitTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDepositEndTime(): boolean;
  clearDepositEndTime(): void;
  getDepositEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDepositEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearTotalDepositList(): void;
  getTotalDepositList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setTotalDepositList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addTotalDeposit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  hasVotingStartTime(): boolean;
  clearVotingStartTime(): void;
  getVotingStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVotingStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasVotingEndTime(): boolean;
  clearVotingEndTime(): void;
  getVotingEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVotingEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMetadata(): string;
  setMetadata(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getSummary(): string;
  setSummary(value: string): void;

  getProposer(): string;
  setProposer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proposal.AsObject;
  static toObject(includeInstance: boolean, msg: Proposal): Proposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Proposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proposal;
  static deserializeBinaryFromReader(message: Proposal, reader: jspb.BinaryReader): Proposal;
}

export namespace Proposal {
  export type AsObject = {
    id: number,
    messagesList: Array<google_protobuf_any_pb.Any.AsObject>,
    status: ProposalStatusMap[keyof ProposalStatusMap],
    finalTallyResult?: TallyResult.AsObject,
    submitTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    depositEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    totalDepositList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    votingStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    votingEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metadata: string,
    title: string,
    summary: string,
    proposer: string,
  }
}

export class TallyResult extends jspb.Message {
  getYesCount(): string;
  setYesCount(value: string): void;

  getAbstainCount(): string;
  setAbstainCount(value: string): void;

  getNoCount(): string;
  setNoCount(value: string): void;

  getNoWithVetoCount(): string;
  setNoWithVetoCount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TallyResult.AsObject;
  static toObject(includeInstance: boolean, msg: TallyResult): TallyResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TallyResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TallyResult;
  static deserializeBinaryFromReader(message: TallyResult, reader: jspb.BinaryReader): TallyResult;
}

export namespace TallyResult {
  export type AsObject = {
    yesCount: string,
    abstainCount: string,
    noCount: string,
    noWithVetoCount: string,
  }
}

export class Vote extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  getVoter(): string;
  setVoter(value: string): void;

  clearOptionsList(): void;
  getOptionsList(): Array<WeightedVoteOption>;
  setOptionsList(value: Array<WeightedVoteOption>): void;
  addOptions(value?: WeightedVoteOption, index?: number): WeightedVoteOption;

  getMetadata(): string;
  setMetadata(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vote.AsObject;
  static toObject(includeInstance: boolean, msg: Vote): Vote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vote;
  static deserializeBinaryFromReader(message: Vote, reader: jspb.BinaryReader): Vote;
}

export namespace Vote {
  export type AsObject = {
    proposalId: number,
    voter: string,
    optionsList: Array<WeightedVoteOption.AsObject>,
    metadata: string,
  }
}

export class DepositParams extends jspb.Message {
  clearMinDepositList(): void;
  getMinDepositList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setMinDepositList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addMinDeposit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  hasMaxDepositPeriod(): boolean;
  clearMaxDepositPeriod(): void;
  getMaxDepositPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setMaxDepositPeriod(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositParams.AsObject;
  static toObject(includeInstance: boolean, msg: DepositParams): DepositParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DepositParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositParams;
  static deserializeBinaryFromReader(message: DepositParams, reader: jspb.BinaryReader): DepositParams;
}

export namespace DepositParams {
  export type AsObject = {
    minDepositList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    maxDepositPeriod?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class VotingParams extends jspb.Message {
  hasVotingPeriod(): boolean;
  clearVotingPeriod(): void;
  getVotingPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setVotingPeriod(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VotingParams.AsObject;
  static toObject(includeInstance: boolean, msg: VotingParams): VotingParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VotingParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VotingParams;
  static deserializeBinaryFromReader(message: VotingParams, reader: jspb.BinaryReader): VotingParams;
}

export namespace VotingParams {
  export type AsObject = {
    votingPeriod?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class TallyParams extends jspb.Message {
  getQuorum(): string;
  setQuorum(value: string): void;

  getThreshold(): string;
  setThreshold(value: string): void;

  getVetoThreshold(): string;
  setVetoThreshold(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TallyParams.AsObject;
  static toObject(includeInstance: boolean, msg: TallyParams): TallyParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TallyParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TallyParams;
  static deserializeBinaryFromReader(message: TallyParams, reader: jspb.BinaryReader): TallyParams;
}

export namespace TallyParams {
  export type AsObject = {
    quorum: string,
    threshold: string,
    vetoThreshold: string,
  }
}

export class Params extends jspb.Message {
  clearMinDepositList(): void;
  getMinDepositList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setMinDepositList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addMinDeposit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  hasMaxDepositPeriod(): boolean;
  clearMaxDepositPeriod(): void;
  getMaxDepositPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setMaxDepositPeriod(value?: google_protobuf_duration_pb.Duration): void;

  hasVotingPeriod(): boolean;
  clearVotingPeriod(): void;
  getVotingPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setVotingPeriod(value?: google_protobuf_duration_pb.Duration): void;

  getQuorum(): string;
  setQuorum(value: string): void;

  getThreshold(): string;
  setThreshold(value: string): void;

  getVetoThreshold(): string;
  setVetoThreshold(value: string): void;

  getMinInitialDepositRatio(): string;
  setMinInitialDepositRatio(value: string): void;

  getBurnVoteQuorum(): boolean;
  setBurnVoteQuorum(value: boolean): void;

  getBurnProposalDepositPrevote(): boolean;
  setBurnProposalDepositPrevote(value: boolean): void;

  getBurnVoteVeto(): boolean;
  setBurnVoteVeto(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    minDepositList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    maxDepositPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    votingPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    quorum: string,
    threshold: string,
    vetoThreshold: string,
    minInitialDepositRatio: string,
    burnVoteQuorum: boolean,
    burnProposalDepositPrevote: boolean,
    burnVoteVeto: boolean,
  }
}

export interface VoteOptionMap {
  VOTE_OPTION_UNSPECIFIED: 0;
  VOTE_OPTION_YES: 1;
  VOTE_OPTION_ABSTAIN: 2;
  VOTE_OPTION_NO: 3;
  VOTE_OPTION_NO_WITH_VETO: 4;
}

export const VoteOption: VoteOptionMap;

export interface ProposalStatusMap {
  PROPOSAL_STATUS_UNSPECIFIED: 0;
  PROPOSAL_STATUS_DEPOSIT_PERIOD: 1;
  PROPOSAL_STATUS_VOTING_PERIOD: 2;
  PROPOSAL_STATUS_PASSED: 3;
  PROPOSAL_STATUS_REJECTED: 4;
  PROPOSAL_STATUS_FAILED: 5;
}

export const ProposalStatus: ProposalStatusMap;

