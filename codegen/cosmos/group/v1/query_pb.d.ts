// package: cosmos.group.v1
// file: cosmos/group/v1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_group_v1_types_pb from "../../../cosmos/group/v1/types_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";

export class QueryGroupInfoRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupInfoRequest): QueryGroupInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupInfoRequest;
  static deserializeBinaryFromReader(message: QueryGroupInfoRequest, reader: jspb.BinaryReader): QueryGroupInfoRequest;
}

export namespace QueryGroupInfoRequest {
  export type AsObject = {
    groupId: number,
  }
}

export class QueryGroupInfoResponse extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): cosmos_group_v1_types_pb.GroupInfo | undefined;
  setInfo(value?: cosmos_group_v1_types_pb.GroupInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupInfoResponse): QueryGroupInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupInfoResponse;
  static deserializeBinaryFromReader(message: QueryGroupInfoResponse, reader: jspb.BinaryReader): QueryGroupInfoResponse;
}

export namespace QueryGroupInfoResponse {
  export type AsObject = {
    info?: cosmos_group_v1_types_pb.GroupInfo.AsObject,
  }
}

export class QueryGroupPolicyInfoRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupPolicyInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupPolicyInfoRequest): QueryGroupPolicyInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupPolicyInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupPolicyInfoRequest;
  static deserializeBinaryFromReader(message: QueryGroupPolicyInfoRequest, reader: jspb.BinaryReader): QueryGroupPolicyInfoRequest;
}

export namespace QueryGroupPolicyInfoRequest {
  export type AsObject = {
    address: string,
  }
}

export class QueryGroupPolicyInfoResponse extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): cosmos_group_v1_types_pb.GroupPolicyInfo | undefined;
  setInfo(value?: cosmos_group_v1_types_pb.GroupPolicyInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupPolicyInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupPolicyInfoResponse): QueryGroupPolicyInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupPolicyInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupPolicyInfoResponse;
  static deserializeBinaryFromReader(message: QueryGroupPolicyInfoResponse, reader: jspb.BinaryReader): QueryGroupPolicyInfoResponse;
}

export namespace QueryGroupPolicyInfoResponse {
  export type AsObject = {
    info?: cosmos_group_v1_types_pb.GroupPolicyInfo.AsObject,
  }
}

export class QueryGroupMembersRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupMembersRequest): QueryGroupMembersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupMembersRequest;
  static deserializeBinaryFromReader(message: QueryGroupMembersRequest, reader: jspb.BinaryReader): QueryGroupMembersRequest;
}

export namespace QueryGroupMembersRequest {
  export type AsObject = {
    groupId: number,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryGroupMembersResponse extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<cosmos_group_v1_types_pb.GroupMember>;
  setMembersList(value: Array<cosmos_group_v1_types_pb.GroupMember>): void;
  addMembers(value?: cosmos_group_v1_types_pb.GroupMember, index?: number): cosmos_group_v1_types_pb.GroupMember;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupMembersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupMembersResponse): QueryGroupMembersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupMembersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupMembersResponse;
  static deserializeBinaryFromReader(message: QueryGroupMembersResponse, reader: jspb.BinaryReader): QueryGroupMembersResponse;
}

export namespace QueryGroupMembersResponse {
  export type AsObject = {
    membersList: Array<cosmos_group_v1_types_pb.GroupMember.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryGroupsByAdminRequest extends jspb.Message {
  getAdmin(): string;
  setAdmin(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupsByAdminRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupsByAdminRequest): QueryGroupsByAdminRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupsByAdminRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupsByAdminRequest;
  static deserializeBinaryFromReader(message: QueryGroupsByAdminRequest, reader: jspb.BinaryReader): QueryGroupsByAdminRequest;
}

export namespace QueryGroupsByAdminRequest {
  export type AsObject = {
    admin: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryGroupsByAdminResponse extends jspb.Message {
  clearGroupsList(): void;
  getGroupsList(): Array<cosmos_group_v1_types_pb.GroupInfo>;
  setGroupsList(value: Array<cosmos_group_v1_types_pb.GroupInfo>): void;
  addGroups(value?: cosmos_group_v1_types_pb.GroupInfo, index?: number): cosmos_group_v1_types_pb.GroupInfo;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupsByAdminResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupsByAdminResponse): QueryGroupsByAdminResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupsByAdminResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupsByAdminResponse;
  static deserializeBinaryFromReader(message: QueryGroupsByAdminResponse, reader: jspb.BinaryReader): QueryGroupsByAdminResponse;
}

export namespace QueryGroupsByAdminResponse {
  export type AsObject = {
    groupsList: Array<cosmos_group_v1_types_pb.GroupInfo.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryGroupPoliciesByGroupRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupPoliciesByGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupPoliciesByGroupRequest): QueryGroupPoliciesByGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupPoliciesByGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupPoliciesByGroupRequest;
  static deserializeBinaryFromReader(message: QueryGroupPoliciesByGroupRequest, reader: jspb.BinaryReader): QueryGroupPoliciesByGroupRequest;
}

export namespace QueryGroupPoliciesByGroupRequest {
  export type AsObject = {
    groupId: number,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryGroupPoliciesByGroupResponse extends jspb.Message {
  clearGroupPoliciesList(): void;
  getGroupPoliciesList(): Array<cosmos_group_v1_types_pb.GroupPolicyInfo>;
  setGroupPoliciesList(value: Array<cosmos_group_v1_types_pb.GroupPolicyInfo>): void;
  addGroupPolicies(value?: cosmos_group_v1_types_pb.GroupPolicyInfo, index?: number): cosmos_group_v1_types_pb.GroupPolicyInfo;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupPoliciesByGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupPoliciesByGroupResponse): QueryGroupPoliciesByGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupPoliciesByGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupPoliciesByGroupResponse;
  static deserializeBinaryFromReader(message: QueryGroupPoliciesByGroupResponse, reader: jspb.BinaryReader): QueryGroupPoliciesByGroupResponse;
}

export namespace QueryGroupPoliciesByGroupResponse {
  export type AsObject = {
    groupPoliciesList: Array<cosmos_group_v1_types_pb.GroupPolicyInfo.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryGroupPoliciesByAdminRequest extends jspb.Message {
  getAdmin(): string;
  setAdmin(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupPoliciesByAdminRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupPoliciesByAdminRequest): QueryGroupPoliciesByAdminRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupPoliciesByAdminRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupPoliciesByAdminRequest;
  static deserializeBinaryFromReader(message: QueryGroupPoliciesByAdminRequest, reader: jspb.BinaryReader): QueryGroupPoliciesByAdminRequest;
}

export namespace QueryGroupPoliciesByAdminRequest {
  export type AsObject = {
    admin: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryGroupPoliciesByAdminResponse extends jspb.Message {
  clearGroupPoliciesList(): void;
  getGroupPoliciesList(): Array<cosmos_group_v1_types_pb.GroupPolicyInfo>;
  setGroupPoliciesList(value: Array<cosmos_group_v1_types_pb.GroupPolicyInfo>): void;
  addGroupPolicies(value?: cosmos_group_v1_types_pb.GroupPolicyInfo, index?: number): cosmos_group_v1_types_pb.GroupPolicyInfo;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupPoliciesByAdminResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupPoliciesByAdminResponse): QueryGroupPoliciesByAdminResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupPoliciesByAdminResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupPoliciesByAdminResponse;
  static deserializeBinaryFromReader(message: QueryGroupPoliciesByAdminResponse, reader: jspb.BinaryReader): QueryGroupPoliciesByAdminResponse;
}

export namespace QueryGroupPoliciesByAdminResponse {
  export type AsObject = {
    groupPoliciesList: Array<cosmos_group_v1_types_pb.GroupPolicyInfo.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryProposalRequest extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryProposalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryProposalRequest): QueryProposalRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryProposalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryProposalRequest;
  static deserializeBinaryFromReader(message: QueryProposalRequest, reader: jspb.BinaryReader): QueryProposalRequest;
}

export namespace QueryProposalRequest {
  export type AsObject = {
    proposalId: number,
  }
}

export class QueryProposalResponse extends jspb.Message {
  hasProposal(): boolean;
  clearProposal(): void;
  getProposal(): cosmos_group_v1_types_pb.Proposal | undefined;
  setProposal(value?: cosmos_group_v1_types_pb.Proposal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryProposalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryProposalResponse): QueryProposalResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryProposalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryProposalResponse;
  static deserializeBinaryFromReader(message: QueryProposalResponse, reader: jspb.BinaryReader): QueryProposalResponse;
}

export namespace QueryProposalResponse {
  export type AsObject = {
    proposal?: cosmos_group_v1_types_pb.Proposal.AsObject,
  }
}

export class QueryProposalsByGroupPolicyRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryProposalsByGroupPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryProposalsByGroupPolicyRequest): QueryProposalsByGroupPolicyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryProposalsByGroupPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryProposalsByGroupPolicyRequest;
  static deserializeBinaryFromReader(message: QueryProposalsByGroupPolicyRequest, reader: jspb.BinaryReader): QueryProposalsByGroupPolicyRequest;
}

export namespace QueryProposalsByGroupPolicyRequest {
  export type AsObject = {
    address: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryProposalsByGroupPolicyResponse extends jspb.Message {
  clearProposalsList(): void;
  getProposalsList(): Array<cosmos_group_v1_types_pb.Proposal>;
  setProposalsList(value: Array<cosmos_group_v1_types_pb.Proposal>): void;
  addProposals(value?: cosmos_group_v1_types_pb.Proposal, index?: number): cosmos_group_v1_types_pb.Proposal;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryProposalsByGroupPolicyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryProposalsByGroupPolicyResponse): QueryProposalsByGroupPolicyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryProposalsByGroupPolicyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryProposalsByGroupPolicyResponse;
  static deserializeBinaryFromReader(message: QueryProposalsByGroupPolicyResponse, reader: jspb.BinaryReader): QueryProposalsByGroupPolicyResponse;
}

export namespace QueryProposalsByGroupPolicyResponse {
  export type AsObject = {
    proposalsList: Array<cosmos_group_v1_types_pb.Proposal.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryVoteByProposalVoterRequest extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  getVoter(): string;
  setVoter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVoteByProposalVoterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVoteByProposalVoterRequest): QueryVoteByProposalVoterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVoteByProposalVoterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVoteByProposalVoterRequest;
  static deserializeBinaryFromReader(message: QueryVoteByProposalVoterRequest, reader: jspb.BinaryReader): QueryVoteByProposalVoterRequest;
}

export namespace QueryVoteByProposalVoterRequest {
  export type AsObject = {
    proposalId: number,
    voter: string,
  }
}

export class QueryVoteByProposalVoterResponse extends jspb.Message {
  hasVote(): boolean;
  clearVote(): void;
  getVote(): cosmos_group_v1_types_pb.Vote | undefined;
  setVote(value?: cosmos_group_v1_types_pb.Vote): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVoteByProposalVoterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVoteByProposalVoterResponse): QueryVoteByProposalVoterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVoteByProposalVoterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVoteByProposalVoterResponse;
  static deserializeBinaryFromReader(message: QueryVoteByProposalVoterResponse, reader: jspb.BinaryReader): QueryVoteByProposalVoterResponse;
}

export namespace QueryVoteByProposalVoterResponse {
  export type AsObject = {
    vote?: cosmos_group_v1_types_pb.Vote.AsObject,
  }
}

export class QueryVotesByProposalRequest extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVotesByProposalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVotesByProposalRequest): QueryVotesByProposalRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVotesByProposalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVotesByProposalRequest;
  static deserializeBinaryFromReader(message: QueryVotesByProposalRequest, reader: jspb.BinaryReader): QueryVotesByProposalRequest;
}

export namespace QueryVotesByProposalRequest {
  export type AsObject = {
    proposalId: number,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryVotesByProposalResponse extends jspb.Message {
  clearVotesList(): void;
  getVotesList(): Array<cosmos_group_v1_types_pb.Vote>;
  setVotesList(value: Array<cosmos_group_v1_types_pb.Vote>): void;
  addVotes(value?: cosmos_group_v1_types_pb.Vote, index?: number): cosmos_group_v1_types_pb.Vote;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVotesByProposalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVotesByProposalResponse): QueryVotesByProposalResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVotesByProposalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVotesByProposalResponse;
  static deserializeBinaryFromReader(message: QueryVotesByProposalResponse, reader: jspb.BinaryReader): QueryVotesByProposalResponse;
}

export namespace QueryVotesByProposalResponse {
  export type AsObject = {
    votesList: Array<cosmos_group_v1_types_pb.Vote.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryVotesByVoterRequest extends jspb.Message {
  getVoter(): string;
  setVoter(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVotesByVoterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVotesByVoterRequest): QueryVotesByVoterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVotesByVoterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVotesByVoterRequest;
  static deserializeBinaryFromReader(message: QueryVotesByVoterRequest, reader: jspb.BinaryReader): QueryVotesByVoterRequest;
}

export namespace QueryVotesByVoterRequest {
  export type AsObject = {
    voter: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryVotesByVoterResponse extends jspb.Message {
  clearVotesList(): void;
  getVotesList(): Array<cosmos_group_v1_types_pb.Vote>;
  setVotesList(value: Array<cosmos_group_v1_types_pb.Vote>): void;
  addVotes(value?: cosmos_group_v1_types_pb.Vote, index?: number): cosmos_group_v1_types_pb.Vote;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVotesByVoterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVotesByVoterResponse): QueryVotesByVoterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVotesByVoterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVotesByVoterResponse;
  static deserializeBinaryFromReader(message: QueryVotesByVoterResponse, reader: jspb.BinaryReader): QueryVotesByVoterResponse;
}

export namespace QueryVotesByVoterResponse {
  export type AsObject = {
    votesList: Array<cosmos_group_v1_types_pb.Vote.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryGroupsByMemberRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupsByMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupsByMemberRequest): QueryGroupsByMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupsByMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupsByMemberRequest;
  static deserializeBinaryFromReader(message: QueryGroupsByMemberRequest, reader: jspb.BinaryReader): QueryGroupsByMemberRequest;
}

export namespace QueryGroupsByMemberRequest {
  export type AsObject = {
    address: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryGroupsByMemberResponse extends jspb.Message {
  clearGroupsList(): void;
  getGroupsList(): Array<cosmos_group_v1_types_pb.GroupInfo>;
  setGroupsList(value: Array<cosmos_group_v1_types_pb.GroupInfo>): void;
  addGroups(value?: cosmos_group_v1_types_pb.GroupInfo, index?: number): cosmos_group_v1_types_pb.GroupInfo;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupsByMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupsByMemberResponse): QueryGroupsByMemberResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupsByMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupsByMemberResponse;
  static deserializeBinaryFromReader(message: QueryGroupsByMemberResponse, reader: jspb.BinaryReader): QueryGroupsByMemberResponse;
}

export namespace QueryGroupsByMemberResponse {
  export type AsObject = {
    groupsList: Array<cosmos_group_v1_types_pb.GroupInfo.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryTallyResultRequest extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTallyResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTallyResultRequest): QueryTallyResultRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTallyResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTallyResultRequest;
  static deserializeBinaryFromReader(message: QueryTallyResultRequest, reader: jspb.BinaryReader): QueryTallyResultRequest;
}

export namespace QueryTallyResultRequest {
  export type AsObject = {
    proposalId: number,
  }
}

export class QueryTallyResultResponse extends jspb.Message {
  hasTally(): boolean;
  clearTally(): void;
  getTally(): cosmos_group_v1_types_pb.TallyResult | undefined;
  setTally(value?: cosmos_group_v1_types_pb.TallyResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTallyResultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTallyResultResponse): QueryTallyResultResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTallyResultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTallyResultResponse;
  static deserializeBinaryFromReader(message: QueryTallyResultResponse, reader: jspb.BinaryReader): QueryTallyResultResponse;
}

export namespace QueryTallyResultResponse {
  export type AsObject = {
    tally?: cosmos_group_v1_types_pb.TallyResult.AsObject,
  }
}

export class QueryGroupsRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupsRequest): QueryGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupsRequest;
  static deserializeBinaryFromReader(message: QueryGroupsRequest, reader: jspb.BinaryReader): QueryGroupsRequest;
}

export namespace QueryGroupsRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryGroupsResponse extends jspb.Message {
  clearGroupsList(): void;
  getGroupsList(): Array<cosmos_group_v1_types_pb.GroupInfo>;
  setGroupsList(value: Array<cosmos_group_v1_types_pb.GroupInfo>): void;
  addGroups(value?: cosmos_group_v1_types_pb.GroupInfo, index?: number): cosmos_group_v1_types_pb.GroupInfo;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupsResponse): QueryGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupsResponse;
  static deserializeBinaryFromReader(message: QueryGroupsResponse, reader: jspb.BinaryReader): QueryGroupsResponse;
}

export namespace QueryGroupsResponse {
  export type AsObject = {
    groupsList: Array<cosmos_group_v1_types_pb.GroupInfo.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

