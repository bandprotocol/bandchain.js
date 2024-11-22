// package: cosmos.group.v1
// file: cosmos/group/v1/genesis.proto

import * as jspb from "google-protobuf";
import * as cosmos_group_v1_types_pb from "../../../cosmos/group/v1/types_pb";

export class GenesisState extends jspb.Message {
  getGroupSeq(): number;
  setGroupSeq(value: number): void;

  clearGroupsList(): void;
  getGroupsList(): Array<cosmos_group_v1_types_pb.GroupInfo>;
  setGroupsList(value: Array<cosmos_group_v1_types_pb.GroupInfo>): void;
  addGroups(value?: cosmos_group_v1_types_pb.GroupInfo, index?: number): cosmos_group_v1_types_pb.GroupInfo;

  clearGroupMembersList(): void;
  getGroupMembersList(): Array<cosmos_group_v1_types_pb.GroupMember>;
  setGroupMembersList(value: Array<cosmos_group_v1_types_pb.GroupMember>): void;
  addGroupMembers(value?: cosmos_group_v1_types_pb.GroupMember, index?: number): cosmos_group_v1_types_pb.GroupMember;

  getGroupPolicySeq(): number;
  setGroupPolicySeq(value: number): void;

  clearGroupPoliciesList(): void;
  getGroupPoliciesList(): Array<cosmos_group_v1_types_pb.GroupPolicyInfo>;
  setGroupPoliciesList(value: Array<cosmos_group_v1_types_pb.GroupPolicyInfo>): void;
  addGroupPolicies(value?: cosmos_group_v1_types_pb.GroupPolicyInfo, index?: number): cosmos_group_v1_types_pb.GroupPolicyInfo;

  getProposalSeq(): number;
  setProposalSeq(value: number): void;

  clearProposalsList(): void;
  getProposalsList(): Array<cosmos_group_v1_types_pb.Proposal>;
  setProposalsList(value: Array<cosmos_group_v1_types_pb.Proposal>): void;
  addProposals(value?: cosmos_group_v1_types_pb.Proposal, index?: number): cosmos_group_v1_types_pb.Proposal;

  clearVotesList(): void;
  getVotesList(): Array<cosmos_group_v1_types_pb.Vote>;
  setVotesList(value: Array<cosmos_group_v1_types_pb.Vote>): void;
  addVotes(value?: cosmos_group_v1_types_pb.Vote, index?: number): cosmos_group_v1_types_pb.Vote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    groupSeq: number,
    groupsList: Array<cosmos_group_v1_types_pb.GroupInfo.AsObject>,
    groupMembersList: Array<cosmos_group_v1_types_pb.GroupMember.AsObject>,
    groupPolicySeq: number,
    groupPoliciesList: Array<cosmos_group_v1_types_pb.GroupPolicyInfo.AsObject>,
    proposalSeq: number,
    proposalsList: Array<cosmos_group_v1_types_pb.Proposal.AsObject>,
    votesList: Array<cosmos_group_v1_types_pb.Vote.AsObject>,
  }
}

