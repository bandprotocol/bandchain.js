// package: council.v1beta1
// file: council/v1beta1/types.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as cosmos_proto_cosmos_pb from "../../cosmos_proto/cosmos_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../cosmos/base/v1beta1/coin_pb";

export class Params extends jspb.Message {
  hasVotingPeriod(): boolean;
  clearVotingPeriod(): void;
  getVotingPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setVotingPeriod(value?: google_protobuf_duration_pb.Duration): void;

  hasWaitingVetoPeriod(): boolean;
  clearWaitingVetoPeriod(): void;
  getWaitingVetoPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setWaitingVetoPeriod(value?: google_protobuf_duration_pb.Duration): void;

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
    votingPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    waitingVetoPeriod?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class Member extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getWeight(): string;
  setWeight(value: string): void;

  getMetadata(): string;
  setMetadata(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Member.AsObject;
  static toObject(includeInstance: boolean, msg: Member): Member.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Member, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Member;
  static deserializeBinaryFromReader(message: Member, reader: jspb.BinaryReader): Member;
}

export namespace Member {
  export type AsObject = {
    address: string,
    weight: string,
    metadata: string,
  }
}

export class CouncilInfo extends jspb.Message {
  getCouncilType(): CouncilTypeMap[keyof CouncilTypeMap];
  setCouncilType(value: CouncilTypeMap[keyof CouncilTypeMap]): void;

  getAddress(): string;
  setAddress(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  clearMembersList(): void;
  getMembersList(): Array<Member>;
  setMembersList(value: Array<Member>): void;
  addMembers(value?: Member, index?: number): Member;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPercentageThreshold(): string;
  setPercentageThreshold(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CouncilInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CouncilInfo): CouncilInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CouncilInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CouncilInfo;
  static deserializeBinaryFromReader(message: CouncilInfo, reader: jspb.BinaryReader): CouncilInfo;
}

export namespace CouncilInfo {
  export type AsObject = {
    councilType: CouncilTypeMap[keyof CouncilTypeMap],
    address: string,
    version: number,
    membersList: Array<Member.AsObject>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    percentageThreshold: string,
  }
}

export class Proposal extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCouncil(): CouncilTypeMap[keyof CouncilTypeMap];
  setCouncil(value: CouncilTypeMap[keyof CouncilTypeMap]): void;

  getTitle(): string;
  setTitle(value: string): void;

  getMetadata(): string;
  setMetadata(value: string): void;

  getProposer(): string;
  setProposer(value: string): void;

  hasSubmitTime(): boolean;
  clearSubmitTime(): void;
  getSubmitTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSubmitTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): ProposalStatusMap[keyof ProposalStatusMap];
  setStatus(value: ProposalStatusMap[keyof ProposalStatusMap]): void;

  hasFinalTallyResult(): boolean;
  clearFinalTallyResult(): void;
  getFinalTallyResult(): TallyResult | undefined;
  setFinalTallyResult(value?: TallyResult): void;

  hasVotingPeriodEnd(): boolean;
  clearVotingPeriodEnd(): void;
  getVotingPeriodEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVotingPeriodEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getVetoProposalId(): number;
  setVetoProposalId(value: number): void;

  hasVetoPeriodEnd(): boolean;
  clearVetoPeriodEnd(): void;
  getVetoPeriodEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVetoPeriodEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearMessagesList(): void;
  getMessagesList(): Array<google_protobuf_any_pb.Any>;
  setMessagesList(value: Array<google_protobuf_any_pb.Any>): void;
  addMessages(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

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
    council: CouncilTypeMap[keyof CouncilTypeMap],
    title: string,
    metadata: string,
    proposer: string,
    submitTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: ProposalStatusMap[keyof ProposalStatusMap],
    finalTallyResult?: TallyResult.AsObject,
    votingPeriodEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    vetoProposalId: number,
    vetoPeriodEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    messagesList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

export class TallyResult extends jspb.Message {
  getYesCount(): string;
  setYesCount(value: string): void;

  getNoCount(): string;
  setNoCount(value: string): void;

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
    noCount: string,
  }
}

export class Vote extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  getVoter(): string;
  setVoter(value: string): void;

  getOption(): VoteOptionMap[keyof VoteOptionMap];
  setOption(value: VoteOptionMap[keyof VoteOptionMap]): void;

  hasSubmitTime(): boolean;
  clearSubmitTime(): void;
  getSubmitTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSubmitTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
    option: VoteOptionMap[keyof VoteOptionMap],
    submitTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class VetoProposal extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VetoProposal.AsObject;
  static toObject(includeInstance: boolean, msg: VetoProposal): VetoProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VetoProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VetoProposal;
  static deserializeBinaryFromReader(message: VetoProposal, reader: jspb.BinaryReader): VetoProposal;
}

export namespace VetoProposal {
  export type AsObject = {
    proposalId: number,
    description: string,
  }
}

export interface CouncilTypeMap {
  COUNCIL_TYPE_UNSPECIFIED: 0;
  COUNCIL_TYPE_BAND_DAO: 1;
  COUNCIL_TYPE_GRANT: 2;
  COUNCIL_TYPE_TECH: 3;
}

export const CouncilType: CouncilTypeMap;

export interface ProposalStatusMap {
  PROPOSAL_STATUS_UNSPECIFIED: 0;
  PROPOSAL_STATUS_SUBMITTED: 1;
  PROPOSAL_STATUS_WAITING_VETO: 2;
  PROPOSAL_STATUS_IN_VETO: 3;
  PROPOSAL_STATUS_REJECTED_BY_COUNCIL: 4;
  PROPOSAL_STATUS_REJECTED_BY_VETO: 5;
  PROPOSAL_STATUS_EXECUTED: 6;
  PROPOSAL_STATUS_EXECUTION_FAILED: 7;
  PROPOSAL_STATUS_TALLYING_FAILED: 8;
}

export const ProposalStatus: ProposalStatusMap;

export interface VoteOptionMap {
  VOTE_OPTION_UNSPECIFIED: 0;
  VOTE_OPTION_YES: 1;
  VOTE_OPTION_NO: 2;
}

export const VoteOption: VoteOptionMap;

