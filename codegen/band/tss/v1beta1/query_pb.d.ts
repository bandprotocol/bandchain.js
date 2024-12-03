// package: band.tss.v1beta1
// file: band/tss/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as band_tss_v1beta1_tss_pb from "../../../band/tss/v1beta1/tss_pb";
import * as band_tss_v1beta1_genesis_pb from "../../../band/tss/v1beta1/genesis_pb";

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
  hasGroupResult(): boolean;
  clearGroupResult(): void;
  getGroupResult(): band_tss_v1beta1_tss_pb.GroupResult | undefined;
  setGroupResult(value?: band_tss_v1beta1_tss_pb.GroupResult): void;

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
    groupResult?: band_tss_v1beta1_tss_pb.GroupResult.AsObject,
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
  getGroupsList(): Array<band_tss_v1beta1_tss_pb.GroupResult>;
  setGroupsList(value: Array<band_tss_v1beta1_tss_pb.GroupResult>): void;
  addGroups(value?: band_tss_v1beta1_tss_pb.GroupResult, index?: number): band_tss_v1beta1_tss_pb.GroupResult;

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
    groupsList: Array<band_tss_v1beta1_tss_pb.GroupResult.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
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
  getMembersList(): Array<band_tss_v1beta1_tss_pb.Member>;
  setMembersList(value: Array<band_tss_v1beta1_tss_pb.Member>): void;
  addMembers(value?: band_tss_v1beta1_tss_pb.Member, index?: number): band_tss_v1beta1_tss_pb.Member;

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
    membersList: Array<band_tss_v1beta1_tss_pb.Member.AsObject>,
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
  getDesList(): Array<band_tss_v1beta1_tss_pb.DE>;
  setDesList(value: Array<band_tss_v1beta1_tss_pb.DE>): void;
  addDes(value?: band_tss_v1beta1_tss_pb.DE, index?: number): band_tss_v1beta1_tss_pb.DE;

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
    desList: Array<band_tss_v1beta1_tss_pb.DE.AsObject>,
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
  hasSigningResult(): boolean;
  clearSigningResult(): void;
  getSigningResult(): band_tss_v1beta1_tss_pb.SigningResult | undefined;
  setSigningResult(value?: band_tss_v1beta1_tss_pb.SigningResult): void;

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
    signingResult?: band_tss_v1beta1_tss_pb.SigningResult.AsObject,
  }
}

export class QuerySigningsRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySigningsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySigningsRequest): QuerySigningsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySigningsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySigningsRequest;
  static deserializeBinaryFromReader(message: QuerySigningsRequest, reader: jspb.BinaryReader): QuerySigningsRequest;
}

export namespace QuerySigningsRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QuerySigningsResponse extends jspb.Message {
  clearSigningResultsList(): void;
  getSigningResultsList(): Array<band_tss_v1beta1_tss_pb.SigningResult>;
  setSigningResultsList(value: Array<band_tss_v1beta1_tss_pb.SigningResult>): void;
  addSigningResults(value?: band_tss_v1beta1_tss_pb.SigningResult, index?: number): band_tss_v1beta1_tss_pb.SigningResult;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySigningsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySigningsResponse): QuerySigningsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySigningsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySigningsResponse;
  static deserializeBinaryFromReader(message: QuerySigningsResponse, reader: jspb.BinaryReader): QuerySigningsResponse;
}

export namespace QuerySigningsResponse {
  export type AsObject = {
    signingResultsList: Array<band_tss_v1beta1_tss_pb.SigningResult.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
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
  getParams(): band_tss_v1beta1_genesis_pb.Params | undefined;
  setParams(value?: band_tss_v1beta1_genesis_pb.Params): void;

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
    params?: band_tss_v1beta1_genesis_pb.Params.AsObject,
  }
}

