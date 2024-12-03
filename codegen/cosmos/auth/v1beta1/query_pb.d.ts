// package: cosmos.auth.v1beta1
// file: cosmos/auth/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_auth_v1beta1_auth_pb from "../../../cosmos/auth/v1beta1/auth_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_query_v1_query_pb from "../../../cosmos/query/v1/query_pb";

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

export class QueryAccountsResponse extends jspb.Message {
  clearAccountsList(): void;
  getAccountsList(): Array<google_protobuf_any_pb.Any>;
  setAccountsList(value: Array<google_protobuf_any_pb.Any>): void;
  addAccounts(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAccountsResponse): QueryAccountsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAccountsResponse;
  static deserializeBinaryFromReader(message: QueryAccountsResponse, reader: jspb.BinaryReader): QueryAccountsResponse;
}

export namespace QueryAccountsResponse {
  export type AsObject = {
    accountsList: Array<google_protobuf_any_pb.Any.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

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

export class QueryAccountResponse extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): google_protobuf_any_pb.Any | undefined;
  setAccount(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAccountResponse): QueryAccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAccountResponse;
  static deserializeBinaryFromReader(message: QueryAccountResponse, reader: jspb.BinaryReader): QueryAccountResponse;
}

export namespace QueryAccountResponse {
  export type AsObject = {
    account?: google_protobuf_any_pb.Any.AsObject,
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
  getParams(): cosmos_auth_v1beta1_auth_pb.Params | undefined;
  setParams(value?: cosmos_auth_v1beta1_auth_pb.Params): void;

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
    params?: cosmos_auth_v1beta1_auth_pb.Params.AsObject,
  }
}

export class QueryModuleAccountsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryModuleAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryModuleAccountsRequest): QueryModuleAccountsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryModuleAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryModuleAccountsRequest;
  static deserializeBinaryFromReader(message: QueryModuleAccountsRequest, reader: jspb.BinaryReader): QueryModuleAccountsRequest;
}

export namespace QueryModuleAccountsRequest {
  export type AsObject = {
  }
}

export class QueryModuleAccountsResponse extends jspb.Message {
  clearAccountsList(): void;
  getAccountsList(): Array<google_protobuf_any_pb.Any>;
  setAccountsList(value: Array<google_protobuf_any_pb.Any>): void;
  addAccounts(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryModuleAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryModuleAccountsResponse): QueryModuleAccountsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryModuleAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryModuleAccountsResponse;
  static deserializeBinaryFromReader(message: QueryModuleAccountsResponse, reader: jspb.BinaryReader): QueryModuleAccountsResponse;
}

export namespace QueryModuleAccountsResponse {
  export type AsObject = {
    accountsList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

export class QueryModuleAccountByNameRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryModuleAccountByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryModuleAccountByNameRequest): QueryModuleAccountByNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryModuleAccountByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryModuleAccountByNameRequest;
  static deserializeBinaryFromReader(message: QueryModuleAccountByNameRequest, reader: jspb.BinaryReader): QueryModuleAccountByNameRequest;
}

export namespace QueryModuleAccountByNameRequest {
  export type AsObject = {
    name: string,
  }
}

export class QueryModuleAccountByNameResponse extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): google_protobuf_any_pb.Any | undefined;
  setAccount(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryModuleAccountByNameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryModuleAccountByNameResponse): QueryModuleAccountByNameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryModuleAccountByNameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryModuleAccountByNameResponse;
  static deserializeBinaryFromReader(message: QueryModuleAccountByNameResponse, reader: jspb.BinaryReader): QueryModuleAccountByNameResponse;
}

export namespace QueryModuleAccountByNameResponse {
  export type AsObject = {
    account?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class Bech32PrefixRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bech32PrefixRequest.AsObject;
  static toObject(includeInstance: boolean, msg: Bech32PrefixRequest): Bech32PrefixRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bech32PrefixRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bech32PrefixRequest;
  static deserializeBinaryFromReader(message: Bech32PrefixRequest, reader: jspb.BinaryReader): Bech32PrefixRequest;
}

export namespace Bech32PrefixRequest {
  export type AsObject = {
  }
}

export class Bech32PrefixResponse extends jspb.Message {
  getBech32Prefix(): string;
  setBech32Prefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bech32PrefixResponse.AsObject;
  static toObject(includeInstance: boolean, msg: Bech32PrefixResponse): Bech32PrefixResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bech32PrefixResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bech32PrefixResponse;
  static deserializeBinaryFromReader(message: Bech32PrefixResponse, reader: jspb.BinaryReader): Bech32PrefixResponse;
}

export namespace Bech32PrefixResponse {
  export type AsObject = {
    bech32Prefix: string,
  }
}

export class AddressBytesToStringRequest extends jspb.Message {
  getAddressBytes(): Uint8Array | string;
  getAddressBytes_asU8(): Uint8Array;
  getAddressBytes_asB64(): string;
  setAddressBytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressBytesToStringRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddressBytesToStringRequest): AddressBytesToStringRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressBytesToStringRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressBytesToStringRequest;
  static deserializeBinaryFromReader(message: AddressBytesToStringRequest, reader: jspb.BinaryReader): AddressBytesToStringRequest;
}

export namespace AddressBytesToStringRequest {
  export type AsObject = {
    addressBytes: Uint8Array | string,
  }
}

export class AddressBytesToStringResponse extends jspb.Message {
  getAddressString(): string;
  setAddressString(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressBytesToStringResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddressBytesToStringResponse): AddressBytesToStringResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressBytesToStringResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressBytesToStringResponse;
  static deserializeBinaryFromReader(message: AddressBytesToStringResponse, reader: jspb.BinaryReader): AddressBytesToStringResponse;
}

export namespace AddressBytesToStringResponse {
  export type AsObject = {
    addressString: string,
  }
}

export class AddressStringToBytesRequest extends jspb.Message {
  getAddressString(): string;
  setAddressString(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressStringToBytesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddressStringToBytesRequest): AddressStringToBytesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressStringToBytesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressStringToBytesRequest;
  static deserializeBinaryFromReader(message: AddressStringToBytesRequest, reader: jspb.BinaryReader): AddressStringToBytesRequest;
}

export namespace AddressStringToBytesRequest {
  export type AsObject = {
    addressString: string,
  }
}

export class AddressStringToBytesResponse extends jspb.Message {
  getAddressBytes(): Uint8Array | string;
  getAddressBytes_asU8(): Uint8Array;
  getAddressBytes_asB64(): string;
  setAddressBytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressStringToBytesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddressStringToBytesResponse): AddressStringToBytesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressStringToBytesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressStringToBytesResponse;
  static deserializeBinaryFromReader(message: AddressStringToBytesResponse, reader: jspb.BinaryReader): AddressStringToBytesResponse;
}

export namespace AddressStringToBytesResponse {
  export type AsObject = {
    addressBytes: Uint8Array | string,
  }
}

export class QueryAccountAddressByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getAccountId(): number;
  setAccountId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAccountAddressByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAccountAddressByIDRequest): QueryAccountAddressByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAccountAddressByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAccountAddressByIDRequest;
  static deserializeBinaryFromReader(message: QueryAccountAddressByIDRequest, reader: jspb.BinaryReader): QueryAccountAddressByIDRequest;
}

export namespace QueryAccountAddressByIDRequest {
  export type AsObject = {
    id: number,
    accountId: number,
  }
}

export class QueryAccountAddressByIDResponse extends jspb.Message {
  getAccountAddress(): string;
  setAccountAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAccountAddressByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAccountAddressByIDResponse): QueryAccountAddressByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAccountAddressByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAccountAddressByIDResponse;
  static deserializeBinaryFromReader(message: QueryAccountAddressByIDResponse, reader: jspb.BinaryReader): QueryAccountAddressByIDResponse;
}

export namespace QueryAccountAddressByIDResponse {
  export type AsObject = {
    accountAddress: string,
  }
}

export class QueryAccountInfoRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAccountInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAccountInfoRequest): QueryAccountInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAccountInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAccountInfoRequest;
  static deserializeBinaryFromReader(message: QueryAccountInfoRequest, reader: jspb.BinaryReader): QueryAccountInfoRequest;
}

export namespace QueryAccountInfoRequest {
  export type AsObject = {
    address: string,
  }
}

export class QueryAccountInfoResponse extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): cosmos_auth_v1beta1_auth_pb.BaseAccount | undefined;
  setInfo(value?: cosmos_auth_v1beta1_auth_pb.BaseAccount): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAccountInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAccountInfoResponse): QueryAccountInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAccountInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAccountInfoResponse;
  static deserializeBinaryFromReader(message: QueryAccountInfoResponse, reader: jspb.BinaryReader): QueryAccountInfoResponse;
}

export namespace QueryAccountInfoResponse {
  export type AsObject = {
    info?: cosmos_auth_v1beta1_auth_pb.BaseAccount.AsObject,
  }
}

