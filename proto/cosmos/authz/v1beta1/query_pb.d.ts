// package: cosmos.authz.v1beta1
// file: cosmos/authz/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as cosmos_authz_v1beta1_authz_pb from "../../../cosmos/authz/v1beta1/authz_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";

export class QueryGrantsRequest extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): void;

  getGrantee(): string;
  setGrantee(value: string): void;

  getMsgTypeUrl(): string;
  setMsgTypeUrl(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGrantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGrantsRequest): QueryGrantsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGrantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGrantsRequest;
  static deserializeBinaryFromReader(message: QueryGrantsRequest, reader: jspb.BinaryReader): QueryGrantsRequest;
}

export namespace QueryGrantsRequest {
  export type AsObject = {
    granter: string,
    grantee: string,
    msgTypeUrl: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryGrantsResponse extends jspb.Message {
  clearGrantsList(): void;
  getGrantsList(): Array<cosmos_authz_v1beta1_authz_pb.Grant>;
  setGrantsList(value: Array<cosmos_authz_v1beta1_authz_pb.Grant>): void;
  addGrants(value?: cosmos_authz_v1beta1_authz_pb.Grant, index?: number): cosmos_authz_v1beta1_authz_pb.Grant;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGrantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGrantsResponse): QueryGrantsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGrantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGrantsResponse;
  static deserializeBinaryFromReader(message: QueryGrantsResponse, reader: jspb.BinaryReader): QueryGrantsResponse;
}

export namespace QueryGrantsResponse {
  export type AsObject = {
    grantsList: Array<cosmos_authz_v1beta1_authz_pb.Grant.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryGranterGrantsRequest extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGranterGrantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGranterGrantsRequest): QueryGranterGrantsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGranterGrantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGranterGrantsRequest;
  static deserializeBinaryFromReader(message: QueryGranterGrantsRequest, reader: jspb.BinaryReader): QueryGranterGrantsRequest;
}

export namespace QueryGranterGrantsRequest {
  export type AsObject = {
    granter: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryGranterGrantsResponse extends jspb.Message {
  clearGrantsList(): void;
  getGrantsList(): Array<cosmos_authz_v1beta1_authz_pb.GrantAuthorization>;
  setGrantsList(value: Array<cosmos_authz_v1beta1_authz_pb.GrantAuthorization>): void;
  addGrants(value?: cosmos_authz_v1beta1_authz_pb.GrantAuthorization, index?: number): cosmos_authz_v1beta1_authz_pb.GrantAuthorization;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGranterGrantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGranterGrantsResponse): QueryGranterGrantsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGranterGrantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGranterGrantsResponse;
  static deserializeBinaryFromReader(message: QueryGranterGrantsResponse, reader: jspb.BinaryReader): QueryGranterGrantsResponse;
}

export namespace QueryGranterGrantsResponse {
  export type AsObject = {
    grantsList: Array<cosmos_authz_v1beta1_authz_pb.GrantAuthorization.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryGranteeGrantsRequest extends jspb.Message {
  getGrantee(): string;
  setGrantee(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGranteeGrantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGranteeGrantsRequest): QueryGranteeGrantsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGranteeGrantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGranteeGrantsRequest;
  static deserializeBinaryFromReader(message: QueryGranteeGrantsRequest, reader: jspb.BinaryReader): QueryGranteeGrantsRequest;
}

export namespace QueryGranteeGrantsRequest {
  export type AsObject = {
    grantee: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryGranteeGrantsResponse extends jspb.Message {
  clearGrantsList(): void;
  getGrantsList(): Array<cosmos_authz_v1beta1_authz_pb.GrantAuthorization>;
  setGrantsList(value: Array<cosmos_authz_v1beta1_authz_pb.GrantAuthorization>): void;
  addGrants(value?: cosmos_authz_v1beta1_authz_pb.GrantAuthorization, index?: number): cosmos_authz_v1beta1_authz_pb.GrantAuthorization;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGranteeGrantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGranteeGrantsResponse): QueryGranteeGrantsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGranteeGrantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGranteeGrantsResponse;
  static deserializeBinaryFromReader(message: QueryGranteeGrantsResponse, reader: jspb.BinaryReader): QueryGranteeGrantsResponse;
}

export namespace QueryGranteeGrantsResponse {
  export type AsObject = {
    grantsList: Array<cosmos_authz_v1beta1_authz_pb.GrantAuthorization.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

