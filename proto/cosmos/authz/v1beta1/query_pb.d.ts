// package: cosmos.authz.v1beta1
// file: cosmos/authz/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as cosmos_authz_v1beta1_authz_pb from "../../../cosmos/authz/v1beta1/authz_pb";

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

