// package: tss.v1beta1
// file: tss/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../cosmos/base/query/v1beta1/pagination_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as tss_v1beta1_tss_pb from "../../tss/v1beta1/tss_pb";

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
  getGroupCount(): number;
  setGroupCount(value: number): void;

  getSigningCount(): number;
  setSigningCount(value: number): void;

  getReplacementCount(): number;
  setReplacementCount(value: number): void;

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
    groupCount: number,
    signingCount: number,
    replacementCount: number,
  }
}

export class QueryGroupRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupRequest): QueryGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupRequest;
  static deserializeBinaryFromReader(message: QueryGroupRequest, reader: jspb.BinaryReader): QueryGroupRequest;
}

export namespace QueryGroupRequest {
  export type AsObject = {
    groupId: number,
  }
}

export class QueryGroupResponse extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): tss_v1beta1_tss_pb.Group | undefined;
  setGroup(value?: tss_v1beta1_tss_pb.Group): void;

  getDkgContext(): Uint8Array | string;
  getDkgContext_asU8(): Uint8Array;
  getDkgContext_asB64(): string;
  setDkgContext(value: Uint8Array | string): void;

  clearMembersList(): void;
  getMembersList(): Array<tss_v1beta1_tss_pb.Member>;
  setMembersList(value: Array<tss_v1beta1_tss_pb.Member>): void;
  addMembers(value?: tss_v1beta1_tss_pb.Member, index?: number): tss_v1beta1_tss_pb.Member;

  clearStatusesList(): void;
  getStatusesList(): Array<tss_v1beta1_tss_pb.Status>;
  setStatusesList(value: Array<tss_v1beta1_tss_pb.Status>): void;
  addStatuses(value?: tss_v1beta1_tss_pb.Status, index?: number): tss_v1beta1_tss_pb.Status;

  clearRound1InfosList(): void;
  getRound1InfosList(): Array<tss_v1beta1_tss_pb.Round1Info>;
  setRound1InfosList(value: Array<tss_v1beta1_tss_pb.Round1Info>): void;
  addRound1Infos(value?: tss_v1beta1_tss_pb.Round1Info, index?: number): tss_v1beta1_tss_pb.Round1Info;

  clearRound2InfosList(): void;
  getRound2InfosList(): Array<tss_v1beta1_tss_pb.Round2Info>;
  setRound2InfosList(value: Array<tss_v1beta1_tss_pb.Round2Info>): void;
  addRound2Infos(value?: tss_v1beta1_tss_pb.Round2Info, index?: number): tss_v1beta1_tss_pb.Round2Info;

  clearComplaintsWithStatusList(): void;
  getComplaintsWithStatusList(): Array<tss_v1beta1_tss_pb.ComplaintsWithStatus>;
  setComplaintsWithStatusList(value: Array<tss_v1beta1_tss_pb.ComplaintsWithStatus>): void;
  addComplaintsWithStatus(value?: tss_v1beta1_tss_pb.ComplaintsWithStatus, index?: number): tss_v1beta1_tss_pb.ComplaintsWithStatus;

  clearConfirmsList(): void;
  getConfirmsList(): Array<tss_v1beta1_tss_pb.Confirm>;
  setConfirmsList(value: Array<tss_v1beta1_tss_pb.Confirm>): void;
  addConfirms(value?: tss_v1beta1_tss_pb.Confirm, index?: number): tss_v1beta1_tss_pb.Confirm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupResponse): QueryGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupResponse;
  static deserializeBinaryFromReader(message: QueryGroupResponse, reader: jspb.BinaryReader): QueryGroupResponse;
}

export namespace QueryGroupResponse {
  export type AsObject = {
    group?: tss_v1beta1_tss_pb.Group.AsObject,
    dkgContext: Uint8Array | string,
    membersList: Array<tss_v1beta1_tss_pb.Member.AsObject>,
    statusesList: Array<tss_v1beta1_tss_pb.Status.AsObject>,
    round1InfosList: Array<tss_v1beta1_tss_pb.Round1Info.AsObject>,
    round2InfosList: Array<tss_v1beta1_tss_pb.Round2Info.AsObject>,
    complaintsWithStatusList: Array<tss_v1beta1_tss_pb.ComplaintsWithStatus.AsObject>,
    confirmsList: Array<tss_v1beta1_tss_pb.Confirm.AsObject>,
  }
}

export class QueryMembersRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

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
    groupId: number,
  }
}

export class QueryMembersResponse extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<tss_v1beta1_tss_pb.Member>;
  setMembersList(value: Array<tss_v1beta1_tss_pb.Member>): void;
  addMembers(value?: tss_v1beta1_tss_pb.Member, index?: number): tss_v1beta1_tss_pb.Member;

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
    membersList: Array<tss_v1beta1_tss_pb.Member.AsObject>,
  }
}

export class QueryIsGranteeRequest extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): void;

  getGrantee(): string;
  setGrantee(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIsGranteeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIsGranteeRequest): QueryIsGranteeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryIsGranteeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIsGranteeRequest;
  static deserializeBinaryFromReader(message: QueryIsGranteeRequest, reader: jspb.BinaryReader): QueryIsGranteeRequest;
}

export namespace QueryIsGranteeRequest {
  export type AsObject = {
    granter: string,
    grantee: string,
  }
}

export class QueryIsGranteeResponse extends jspb.Message {
  getIsGrantee(): boolean;
  setIsGrantee(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIsGranteeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIsGranteeResponse): QueryIsGranteeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryIsGranteeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIsGranteeResponse;
  static deserializeBinaryFromReader(message: QueryIsGranteeResponse, reader: jspb.BinaryReader): QueryIsGranteeResponse;
}

export namespace QueryIsGranteeResponse {
  export type AsObject = {
    isGrantee: boolean,
  }
}

export class QueryDERequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDERequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDERequest): QueryDERequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDERequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDERequest;
  static deserializeBinaryFromReader(message: QueryDERequest, reader: jspb.BinaryReader): QueryDERequest;
}

export namespace QueryDERequest {
  export type AsObject = {
    address: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryDEResponse extends jspb.Message {
  clearDesList(): void;
  getDesList(): Array<tss_v1beta1_tss_pb.DE>;
  setDesList(value: Array<tss_v1beta1_tss_pb.DE>): void;
  addDes(value?: tss_v1beta1_tss_pb.DE, index?: number): tss_v1beta1_tss_pb.DE;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDEResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDEResponse): QueryDEResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDEResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDEResponse;
  static deserializeBinaryFromReader(message: QueryDEResponse, reader: jspb.BinaryReader): QueryDEResponse;
}

export namespace QueryDEResponse {
  export type AsObject = {
    desList: Array<tss_v1beta1_tss_pb.DE.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryPendingGroupsRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPendingGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPendingGroupsRequest): QueryPendingGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPendingGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPendingGroupsRequest;
  static deserializeBinaryFromReader(message: QueryPendingGroupsRequest, reader: jspb.BinaryReader): QueryPendingGroupsRequest;
}

export namespace QueryPendingGroupsRequest {
  export type AsObject = {
    address: string,
  }
}

export class QueryPendingGroupsResponse extends jspb.Message {
  clearPendingGroupsList(): void;
  getPendingGroupsList(): Array<number>;
  setPendingGroupsList(value: Array<number>): void;
  addPendingGroups(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPendingGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPendingGroupsResponse): QueryPendingGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPendingGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPendingGroupsResponse;
  static deserializeBinaryFromReader(message: QueryPendingGroupsResponse, reader: jspb.BinaryReader): QueryPendingGroupsResponse;
}

export namespace QueryPendingGroupsResponse {
  export type AsObject = {
    pendingGroupsList: Array<number>,
  }
}

export class QueryPendingSigningsRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPendingSigningsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPendingSigningsRequest): QueryPendingSigningsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPendingSigningsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPendingSigningsRequest;
  static deserializeBinaryFromReader(message: QueryPendingSigningsRequest, reader: jspb.BinaryReader): QueryPendingSigningsRequest;
}

export namespace QueryPendingSigningsRequest {
  export type AsObject = {
    address: string,
  }
}

export class QueryPendingSigningsResponse extends jspb.Message {
  clearPendingSigningsList(): void;
  getPendingSigningsList(): Array<number>;
  setPendingSigningsList(value: Array<number>): void;
  addPendingSignings(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPendingSigningsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPendingSigningsResponse): QueryPendingSigningsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPendingSigningsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPendingSigningsResponse;
  static deserializeBinaryFromReader(message: QueryPendingSigningsResponse, reader: jspb.BinaryReader): QueryPendingSigningsResponse;
}

export namespace QueryPendingSigningsResponse {
  export type AsObject = {
    pendingSigningsList: Array<number>,
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
  hasSigning(): boolean;
  clearSigning(): void;
  getSigning(): tss_v1beta1_tss_pb.Signing | undefined;
  setSigning(value?: tss_v1beta1_tss_pb.Signing): void;

  hasEvmSignature(): boolean;
  clearEvmSignature(): void;
  getEvmSignature(): tss_v1beta1_tss_pb.EVMSignature | undefined;
  setEvmSignature(value?: tss_v1beta1_tss_pb.EVMSignature): void;

  clearReceivedPartialSignaturesList(): void;
  getReceivedPartialSignaturesList(): Array<tss_v1beta1_tss_pb.PartialSignature>;
  setReceivedPartialSignaturesList(value: Array<tss_v1beta1_tss_pb.PartialSignature>): void;
  addReceivedPartialSignatures(value?: tss_v1beta1_tss_pb.PartialSignature, index?: number): tss_v1beta1_tss_pb.PartialSignature;

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
    signing?: tss_v1beta1_tss_pb.Signing.AsObject,
    evmSignature?: tss_v1beta1_tss_pb.EVMSignature.AsObject,
    receivedPartialSignaturesList: Array<tss_v1beta1_tss_pb.PartialSignature.AsObject>,
  }
}

export class QueryStatusesRequest extends jspb.Message {
  getStatus(): tss_v1beta1_tss_pb.MemberStatusMap[keyof tss_v1beta1_tss_pb.MemberStatusMap];
  setStatus(value: tss_v1beta1_tss_pb.MemberStatusMap[keyof tss_v1beta1_tss_pb.MemberStatusMap]): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryStatusesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryStatusesRequest): QueryStatusesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryStatusesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryStatusesRequest;
  static deserializeBinaryFromReader(message: QueryStatusesRequest, reader: jspb.BinaryReader): QueryStatusesRequest;
}

export namespace QueryStatusesRequest {
  export type AsObject = {
    status: tss_v1beta1_tss_pb.MemberStatusMap[keyof tss_v1beta1_tss_pb.MemberStatusMap],
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryStatusesResponse extends jspb.Message {
  clearStatusesList(): void;
  getStatusesList(): Array<tss_v1beta1_tss_pb.Status>;
  setStatusesList(value: Array<tss_v1beta1_tss_pb.Status>): void;
  addStatuses(value?: tss_v1beta1_tss_pb.Status, index?: number): tss_v1beta1_tss_pb.Status;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryStatusesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryStatusesResponse): QueryStatusesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryStatusesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryStatusesResponse;
  static deserializeBinaryFromReader(message: QueryStatusesResponse, reader: jspb.BinaryReader): QueryStatusesResponse;
}

export namespace QueryStatusesResponse {
  export type AsObject = {
    statusesList: Array<tss_v1beta1_tss_pb.Status.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryStatusRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryStatusRequest): QueryStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryStatusRequest;
  static deserializeBinaryFromReader(message: QueryStatusRequest, reader: jspb.BinaryReader): QueryStatusRequest;
}

export namespace QueryStatusRequest {
  export type AsObject = {
    address: string,
  }
}

export class QueryStatusResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): tss_v1beta1_tss_pb.Status | undefined;
  setStatus(value?: tss_v1beta1_tss_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryStatusResponse): QueryStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryStatusResponse;
  static deserializeBinaryFromReader(message: QueryStatusResponse, reader: jspb.BinaryReader): QueryStatusResponse;
}

export namespace QueryStatusResponse {
  export type AsObject = {
    status?: tss_v1beta1_tss_pb.Status.AsObject,
  }
}

export class QueryReplacementsRequest extends jspb.Message {
  getStatus(): tss_v1beta1_tss_pb.ReplacementStatusMap[keyof tss_v1beta1_tss_pb.ReplacementStatusMap];
  setStatus(value: tss_v1beta1_tss_pb.ReplacementStatusMap[keyof tss_v1beta1_tss_pb.ReplacementStatusMap]): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryReplacementsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryReplacementsRequest): QueryReplacementsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryReplacementsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryReplacementsRequest;
  static deserializeBinaryFromReader(message: QueryReplacementsRequest, reader: jspb.BinaryReader): QueryReplacementsRequest;
}

export namespace QueryReplacementsRequest {
  export type AsObject = {
    status: tss_v1beta1_tss_pb.ReplacementStatusMap[keyof tss_v1beta1_tss_pb.ReplacementStatusMap],
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryReplacementsResponse extends jspb.Message {
  clearReplacementsList(): void;
  getReplacementsList(): Array<tss_v1beta1_tss_pb.Replacement>;
  setReplacementsList(value: Array<tss_v1beta1_tss_pb.Replacement>): void;
  addReplacements(value?: tss_v1beta1_tss_pb.Replacement, index?: number): tss_v1beta1_tss_pb.Replacement;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryReplacementsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryReplacementsResponse): QueryReplacementsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryReplacementsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryReplacementsResponse;
  static deserializeBinaryFromReader(message: QueryReplacementsResponse, reader: jspb.BinaryReader): QueryReplacementsResponse;
}

export namespace QueryReplacementsResponse {
  export type AsObject = {
    replacementsList: Array<tss_v1beta1_tss_pb.Replacement.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryReplacementRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryReplacementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryReplacementRequest): QueryReplacementRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryReplacementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryReplacementRequest;
  static deserializeBinaryFromReader(message: QueryReplacementRequest, reader: jspb.BinaryReader): QueryReplacementRequest;
}

export namespace QueryReplacementRequest {
  export type AsObject = {
    id: number,
  }
}

export class QueryReplacementResponse extends jspb.Message {
  hasReplacement(): boolean;
  clearReplacement(): void;
  getReplacement(): tss_v1beta1_tss_pb.Replacement | undefined;
  setReplacement(value?: tss_v1beta1_tss_pb.Replacement): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryReplacementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryReplacementResponse): QueryReplacementResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryReplacementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryReplacementResponse;
  static deserializeBinaryFromReader(message: QueryReplacementResponse, reader: jspb.BinaryReader): QueryReplacementResponse;
}

export namespace QueryReplacementResponse {
  export type AsObject = {
    replacement?: tss_v1beta1_tss_pb.Replacement.AsObject,
  }
}

