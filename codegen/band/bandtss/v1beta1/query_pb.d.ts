// package: band.bandtss.v1beta1
// file: band/bandtss/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as band_tss_v1beta1_tss_pb from "../../../band/tss/v1beta1/tss_pb";
import * as band_bandtss_v1beta1_bandtss_pb from "../../../band/bandtss/v1beta1/bandtss_pb";
import * as band_bandtss_v1beta1_genesis_pb from "../../../band/bandtss/v1beta1/genesis_pb";

export class QueryCountsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCountsRequest): QueryCountsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCountsRequest;
  static deserializeBinaryFromReader(message: QueryCountsRequest, reader: jspb.BinaryReader): QueryCountsRequest;
}

export namespace QueryCountsRequest {
  export type AsObject = {
  }
}

export class QueryCountsResponse extends jspb.Message {
  getSigningCount(): number;
  setSigningCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCountsResponse): QueryCountsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCountsResponse;
  static deserializeBinaryFromReader(message: QueryCountsResponse, reader: jspb.BinaryReader): QueryCountsResponse;
}

export namespace QueryCountsResponse {
  export type AsObject = {
    signingCount: number,
  }
}

export class QueryMembersRequest extends jspb.Message {
  getStatus(): MemberStatusFilterMap[keyof MemberStatusFilterMap];
  setStatus(value: MemberStatusFilterMap[keyof MemberStatusFilterMap]): void;

  getIsIncomingGroup(): boolean;
  setIsIncomingGroup(value: boolean): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryMembersRequest): QueryMembersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryMembersRequest;
  static deserializeBinaryFromReader(message: QueryMembersRequest, reader: jspb.BinaryReader): QueryMembersRequest;
}

export namespace QueryMembersRequest {
  export type AsObject = {
    status: MemberStatusFilterMap[keyof MemberStatusFilterMap],
    isIncomingGroup: boolean,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryMembersResponse extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<band_bandtss_v1beta1_bandtss_pb.Member>;
  setMembersList(value: Array<band_bandtss_v1beta1_bandtss_pb.Member>): void;
  addMembers(value?: band_bandtss_v1beta1_bandtss_pb.Member, index?: number): band_bandtss_v1beta1_bandtss_pb.Member;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryMembersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryMembersResponse): QueryMembersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryMembersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryMembersResponse;
  static deserializeBinaryFromReader(message: QueryMembersResponse, reader: jspb.BinaryReader): QueryMembersResponse;
}

export namespace QueryMembersResponse {
  export type AsObject = {
    membersList: Array<band_bandtss_v1beta1_bandtss_pb.Member.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryMemberRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryMemberRequest): QueryMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryMemberRequest;
  static deserializeBinaryFromReader(message: QueryMemberRequest, reader: jspb.BinaryReader): QueryMemberRequest;
}

export namespace QueryMemberRequest {
  export type AsObject = {
    address: string,
  }
}

export class QueryMemberResponse extends jspb.Message {
  hasCurrentGroupMember(): boolean;
  clearCurrentGroupMember(): void;
  getCurrentGroupMember(): band_bandtss_v1beta1_bandtss_pb.Member | undefined;
  setCurrentGroupMember(value?: band_bandtss_v1beta1_bandtss_pb.Member): void;

  hasIncomingGroupMember(): boolean;
  clearIncomingGroupMember(): void;
  getIncomingGroupMember(): band_bandtss_v1beta1_bandtss_pb.Member | undefined;
  setIncomingGroupMember(value?: band_bandtss_v1beta1_bandtss_pb.Member): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryMemberResponse): QueryMemberResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryMemberResponse;
  static deserializeBinaryFromReader(message: QueryMemberResponse, reader: jspb.BinaryReader): QueryMemberResponse;
}

export namespace QueryMemberResponse {
  export type AsObject = {
    currentGroupMember?: band_bandtss_v1beta1_bandtss_pb.Member.AsObject,
    incomingGroupMember?: band_bandtss_v1beta1_bandtss_pb.Member.AsObject,
  }
}

export class QueryCurrentGroupRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCurrentGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCurrentGroupRequest): QueryCurrentGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCurrentGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCurrentGroupRequest;
  static deserializeBinaryFromReader(message: QueryCurrentGroupRequest, reader: jspb.BinaryReader): QueryCurrentGroupRequest;
}

export namespace QueryCurrentGroupRequest {
  export type AsObject = {
  }
}

export class QueryCurrentGroupResponse extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getThreshold(): number;
  setThreshold(value: number): void;

  getPubKey(): Uint8Array | string;
  getPubKey_asU8(): Uint8Array;
  getPubKey_asB64(): string;
  setPubKey(value: Uint8Array | string): void;

  getStatus(): band_tss_v1beta1_tss_pb.GroupStatusMap[keyof band_tss_v1beta1_tss_pb.GroupStatusMap];
  setStatus(value: band_tss_v1beta1_tss_pb.GroupStatusMap[keyof band_tss_v1beta1_tss_pb.GroupStatusMap]): void;

  hasActiveTime(): boolean;
  clearActiveTime(): void;
  getActiveTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setActiveTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCurrentGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCurrentGroupResponse): QueryCurrentGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCurrentGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCurrentGroupResponse;
  static deserializeBinaryFromReader(message: QueryCurrentGroupResponse, reader: jspb.BinaryReader): QueryCurrentGroupResponse;
}

export namespace QueryCurrentGroupResponse {
  export type AsObject = {
    groupId: number,
    size: number,
    threshold: number,
    pubKey: Uint8Array | string,
    status: band_tss_v1beta1_tss_pb.GroupStatusMap[keyof band_tss_v1beta1_tss_pb.GroupStatusMap],
    activeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class QueryIncomingGroupRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIncomingGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIncomingGroupRequest): QueryIncomingGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryIncomingGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIncomingGroupRequest;
  static deserializeBinaryFromReader(message: QueryIncomingGroupRequest, reader: jspb.BinaryReader): QueryIncomingGroupRequest;
}

export namespace QueryIncomingGroupRequest {
  export type AsObject = {
  }
}

export class QueryIncomingGroupResponse extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getThreshold(): number;
  setThreshold(value: number): void;

  getPubKey(): Uint8Array | string;
  getPubKey_asU8(): Uint8Array;
  getPubKey_asB64(): string;
  setPubKey(value: Uint8Array | string): void;

  getStatus(): band_tss_v1beta1_tss_pb.GroupStatusMap[keyof band_tss_v1beta1_tss_pb.GroupStatusMap];
  setStatus(value: band_tss_v1beta1_tss_pb.GroupStatusMap[keyof band_tss_v1beta1_tss_pb.GroupStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIncomingGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIncomingGroupResponse): QueryIncomingGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryIncomingGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIncomingGroupResponse;
  static deserializeBinaryFromReader(message: QueryIncomingGroupResponse, reader: jspb.BinaryReader): QueryIncomingGroupResponse;
}

export namespace QueryIncomingGroupResponse {
  export type AsObject = {
    groupId: number,
    size: number,
    threshold: number,
    pubKey: Uint8Array | string,
    status: band_tss_v1beta1_tss_pb.GroupStatusMap[keyof band_tss_v1beta1_tss_pb.GroupStatusMap],
  }
}

export class QuerySigningRequest extends jspb.Message {
  getSigningId(): number;
  setSigningId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySigningRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySigningRequest): QuerySigningRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySigningRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySigningRequest;
  static deserializeBinaryFromReader(message: QuerySigningRequest, reader: jspb.BinaryReader): QuerySigningRequest;
}

export namespace QuerySigningRequest {
  export type AsObject = {
    signingId: number,
  }
}

export class QuerySigningResponse extends jspb.Message {
  clearFeePerSignerList(): void;
  getFeePerSignerList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setFeePerSignerList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addFeePerSigner(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getRequester(): string;
  setRequester(value: string): void;

  hasCurrentGroupSigningResult(): boolean;
  clearCurrentGroupSigningResult(): void;
  getCurrentGroupSigningResult(): band_tss_v1beta1_tss_pb.SigningResult | undefined;
  setCurrentGroupSigningResult(value?: band_tss_v1beta1_tss_pb.SigningResult): void;

  hasIncomingGroupSigningResult(): boolean;
  clearIncomingGroupSigningResult(): void;
  getIncomingGroupSigningResult(): band_tss_v1beta1_tss_pb.SigningResult | undefined;
  setIncomingGroupSigningResult(value?: band_tss_v1beta1_tss_pb.SigningResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySigningResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySigningResponse): QuerySigningResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySigningResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySigningResponse;
  static deserializeBinaryFromReader(message: QuerySigningResponse, reader: jspb.BinaryReader): QuerySigningResponse;
}

export namespace QuerySigningResponse {
  export type AsObject = {
    feePerSignerList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    requester: string,
    currentGroupSigningResult?: band_tss_v1beta1_tss_pb.SigningResult.AsObject,
    incomingGroupSigningResult?: band_tss_v1beta1_tss_pb.SigningResult.AsObject,
  }
}

export class QueryGroupTransitionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupTransitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupTransitionRequest): QueryGroupTransitionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupTransitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupTransitionRequest;
  static deserializeBinaryFromReader(message: QueryGroupTransitionRequest, reader: jspb.BinaryReader): QueryGroupTransitionRequest;
}

export namespace QueryGroupTransitionRequest {
  export type AsObject = {
  }
}

export class QueryGroupTransitionResponse extends jspb.Message {
  hasGroupTransition(): boolean;
  clearGroupTransition(): void;
  getGroupTransition(): band_bandtss_v1beta1_bandtss_pb.GroupTransition | undefined;
  setGroupTransition(value?: band_bandtss_v1beta1_bandtss_pb.GroupTransition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupTransitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupTransitionResponse): QueryGroupTransitionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupTransitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupTransitionResponse;
  static deserializeBinaryFromReader(message: QueryGroupTransitionResponse, reader: jspb.BinaryReader): QueryGroupTransitionResponse;
}

export namespace QueryGroupTransitionResponse {
  export type AsObject = {
    groupTransition?: band_bandtss_v1beta1_bandtss_pb.GroupTransition.AsObject,
  }
}

export class QueryParamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsRequest): QueryParamsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
  static deserializeBinaryFromReader(message: QueryParamsRequest, reader: jspb.BinaryReader): QueryParamsRequest;
}

export namespace QueryParamsRequest {
  export type AsObject = {
  }
}

export class QueryParamsResponse extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): band_bandtss_v1beta1_genesis_pb.Params | undefined;
  setParams(value?: band_bandtss_v1beta1_genesis_pb.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsResponse): QueryParamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
  static deserializeBinaryFromReader(message: QueryParamsResponse, reader: jspb.BinaryReader): QueryParamsResponse;
}

export namespace QueryParamsResponse {
  export type AsObject = {
    params?: band_bandtss_v1beta1_genesis_pb.Params.AsObject,
  }
}

export interface MemberStatusFilterMap {
  MEMBER_STATUS_FILTER_UNSPECIFIED: 0;
  MEMBER_STATUS_FILTER_ACTIVE: 1;
  MEMBER_STATUS_FILTER_INACTIVE: 2;
}

export const MemberStatusFilter: MemberStatusFilterMap;

