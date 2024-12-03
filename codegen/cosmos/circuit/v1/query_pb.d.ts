// package: cosmos.circuit.v1
// file: cosmos/circuit/v1/query.proto

import * as jspb from "google-protobuf";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as cosmos_circuit_v1_types_pb from "../../../cosmos/circuit/v1/types_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_query_v1_query_pb from "../../../cosmos/query/v1/query_pb";

export class QueryAccountRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAccountRequest): QueryAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAccountRequest;
  static deserializeBinaryFromReader(message: QueryAccountRequest, reader: jspb.BinaryReader): QueryAccountRequest;
}

export namespace QueryAccountRequest {
  export type AsObject = {
    address: string,
  }
}

export class AccountResponse extends jspb.Message {
  hasPermission(): boolean;
  clearPermission(): void;
  getPermission(): cosmos_circuit_v1_types_pb.Permissions | undefined;
  setPermission(value?: cosmos_circuit_v1_types_pb.Permissions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountResponse): AccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountResponse;
  static deserializeBinaryFromReader(message: AccountResponse, reader: jspb.BinaryReader): AccountResponse;
}

export namespace AccountResponse {
  export type AsObject = {
    permission?: cosmos_circuit_v1_types_pb.Permissions.AsObject,
  }
}

export class QueryAccountsRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAccountsRequest): QueryAccountsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAccountsRequest;
  static deserializeBinaryFromReader(message: QueryAccountsRequest, reader: jspb.BinaryReader): QueryAccountsRequest;
}

export namespace QueryAccountsRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class AccountsResponse extends jspb.Message {
  clearAccountsList(): void;
  getAccountsList(): Array<cosmos_circuit_v1_types_pb.GenesisAccountPermissions>;
  setAccountsList(value: Array<cosmos_circuit_v1_types_pb.GenesisAccountPermissions>): void;
  addAccounts(value?: cosmos_circuit_v1_types_pb.GenesisAccountPermissions, index?: number): cosmos_circuit_v1_types_pb.GenesisAccountPermissions;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountsResponse): AccountsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountsResponse;
  static deserializeBinaryFromReader(message: AccountsResponse, reader: jspb.BinaryReader): AccountsResponse;
}

export namespace AccountsResponse {
  export type AsObject = {
    accountsList: Array<cosmos_circuit_v1_types_pb.GenesisAccountPermissions.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryDisabledListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDisabledListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDisabledListRequest): QueryDisabledListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDisabledListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDisabledListRequest;
  static deserializeBinaryFromReader(message: QueryDisabledListRequest, reader: jspb.BinaryReader): QueryDisabledListRequest;
}

export namespace QueryDisabledListRequest {
  export type AsObject = {
  }
}

export class DisabledListResponse extends jspb.Message {
  clearDisabledListList(): void;
  getDisabledListList(): Array<string>;
  setDisabledListList(value: Array<string>): void;
  addDisabledList(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisabledListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DisabledListResponse): DisabledListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisabledListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisabledListResponse;
  static deserializeBinaryFromReader(message: DisabledListResponse, reader: jspb.BinaryReader): DisabledListResponse;
}

export namespace DisabledListResponse {
  export type AsObject = {
    disabledListList: Array<string>,
  }
}

