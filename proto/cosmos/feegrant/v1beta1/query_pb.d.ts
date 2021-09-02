// package: cosmos.feegrant.v1beta1
// file: cosmos/feegrant/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as cosmos_feegrant_v1beta1_feegrant_pb from "../../../cosmos/feegrant/v1beta1/feegrant_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class QueryAllowanceRequest extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): void;

  getGrantee(): string;
  setGrantee(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllowanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAllowanceRequest): QueryAllowanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAllowanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllowanceRequest;
  static deserializeBinaryFromReader(message: QueryAllowanceRequest, reader: jspb.BinaryReader): QueryAllowanceRequest;
}

export namespace QueryAllowanceRequest {
  export type AsObject = {
    granter: string,
    grantee: string,
  }
}

export class QueryAllowanceResponse extends jspb.Message {
  hasAllowance(): boolean;
  clearAllowance(): void;
  getAllowance(): cosmos_feegrant_v1beta1_feegrant_pb.Grant | undefined;
  setAllowance(value?: cosmos_feegrant_v1beta1_feegrant_pb.Grant): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllowanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAllowanceResponse): QueryAllowanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAllowanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllowanceResponse;
  static deserializeBinaryFromReader(message: QueryAllowanceResponse, reader: jspb.BinaryReader): QueryAllowanceResponse;
}

export namespace QueryAllowanceResponse {
  export type AsObject = {
    allowance?: cosmos_feegrant_v1beta1_feegrant_pb.Grant.AsObject,
  }
}

export class QueryAllowancesRequest extends jspb.Message {
  getGrantee(): string;
  setGrantee(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllowancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAllowancesRequest): QueryAllowancesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAllowancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllowancesRequest;
  static deserializeBinaryFromReader(message: QueryAllowancesRequest, reader: jspb.BinaryReader): QueryAllowancesRequest;
}

export namespace QueryAllowancesRequest {
  export type AsObject = {
    grantee: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryAllowancesResponse extends jspb.Message {
  clearAllowancesList(): void;
  getAllowancesList(): Array<cosmos_feegrant_v1beta1_feegrant_pb.Grant>;
  setAllowancesList(value: Array<cosmos_feegrant_v1beta1_feegrant_pb.Grant>): void;
  addAllowances(value?: cosmos_feegrant_v1beta1_feegrant_pb.Grant, index?: number): cosmos_feegrant_v1beta1_feegrant_pb.Grant;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllowancesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAllowancesResponse): QueryAllowancesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAllowancesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllowancesResponse;
  static deserializeBinaryFromReader(message: QueryAllowancesResponse, reader: jspb.BinaryReader): QueryAllowancesResponse;
}

export namespace QueryAllowancesResponse {
  export type AsObject = {
    allowancesList: Array<cosmos_feegrant_v1beta1_feegrant_pb.Grant.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

