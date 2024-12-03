// package: band.restake.v1beta1
// file: band/restake/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as band_restake_v1beta1_types_pb from "../../../band/restake/v1beta1/types_pb";
import * as band_restake_v1beta1_genesis_pb from "../../../band/restake/v1beta1/genesis_pb";

export class QueryVaultsRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVaultsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVaultsRequest): QueryVaultsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVaultsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVaultsRequest;
  static deserializeBinaryFromReader(message: QueryVaultsRequest, reader: jspb.BinaryReader): QueryVaultsRequest;
}

export namespace QueryVaultsRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryVaultsResponse extends jspb.Message {
  clearVaultsList(): void;
  getVaultsList(): Array<band_restake_v1beta1_types_pb.Vault>;
  setVaultsList(value: Array<band_restake_v1beta1_types_pb.Vault>): void;
  addVaults(value?: band_restake_v1beta1_types_pb.Vault, index?: number): band_restake_v1beta1_types_pb.Vault;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVaultsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVaultsResponse): QueryVaultsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVaultsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVaultsResponse;
  static deserializeBinaryFromReader(message: QueryVaultsResponse, reader: jspb.BinaryReader): QueryVaultsResponse;
}

export namespace QueryVaultsResponse {
  export type AsObject = {
    vaultsList: Array<band_restake_v1beta1_types_pb.Vault.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryVaultRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVaultRequest): QueryVaultRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVaultRequest;
  static deserializeBinaryFromReader(message: QueryVaultRequest, reader: jspb.BinaryReader): QueryVaultRequest;
}

export namespace QueryVaultRequest {
  export type AsObject = {
    key: string,
  }
}

export class QueryVaultResponse extends jspb.Message {
  hasVault(): boolean;
  clearVault(): void;
  getVault(): band_restake_v1beta1_types_pb.Vault | undefined;
  setVault(value?: band_restake_v1beta1_types_pb.Vault): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVaultResponse): QueryVaultResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVaultResponse;
  static deserializeBinaryFromReader(message: QueryVaultResponse, reader: jspb.BinaryReader): QueryVaultResponse;
}

export namespace QueryVaultResponse {
  export type AsObject = {
    vault?: band_restake_v1beta1_types_pb.Vault.AsObject,
  }
}

export class QueryLocksRequest extends jspb.Message {
  getStakerAddress(): string;
  setStakerAddress(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLocksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLocksRequest): QueryLocksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLocksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLocksRequest;
  static deserializeBinaryFromReader(message: QueryLocksRequest, reader: jspb.BinaryReader): QueryLocksRequest;
}

export namespace QueryLocksRequest {
  export type AsObject = {
    stakerAddress: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryLocksResponse extends jspb.Message {
  clearLocksList(): void;
  getLocksList(): Array<band_restake_v1beta1_types_pb.LockResponse>;
  setLocksList(value: Array<band_restake_v1beta1_types_pb.LockResponse>): void;
  addLocks(value?: band_restake_v1beta1_types_pb.LockResponse, index?: number): band_restake_v1beta1_types_pb.LockResponse;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLocksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLocksResponse): QueryLocksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLocksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLocksResponse;
  static deserializeBinaryFromReader(message: QueryLocksResponse, reader: jspb.BinaryReader): QueryLocksResponse;
}

export namespace QueryLocksResponse {
  export type AsObject = {
    locksList: Array<band_restake_v1beta1_types_pb.LockResponse.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryLockRequest extends jspb.Message {
  getStakerAddress(): string;
  setStakerAddress(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLockRequest): QueryLockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLockRequest;
  static deserializeBinaryFromReader(message: QueryLockRequest, reader: jspb.BinaryReader): QueryLockRequest;
}

export namespace QueryLockRequest {
  export type AsObject = {
    stakerAddress: string,
    key: string,
  }
}

export class QueryLockResponse extends jspb.Message {
  hasLock(): boolean;
  clearLock(): void;
  getLock(): band_restake_v1beta1_types_pb.LockResponse | undefined;
  setLock(value?: band_restake_v1beta1_types_pb.LockResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLockResponse): QueryLockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLockResponse;
  static deserializeBinaryFromReader(message: QueryLockResponse, reader: jspb.BinaryReader): QueryLockResponse;
}

export namespace QueryLockResponse {
  export type AsObject = {
    lock?: band_restake_v1beta1_types_pb.LockResponse.AsObject,
  }
}

export class QueryStakeRequest extends jspb.Message {
  getStakerAddress(): string;
  setStakerAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryStakeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryStakeRequest): QueryStakeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryStakeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryStakeRequest;
  static deserializeBinaryFromReader(message: QueryStakeRequest, reader: jspb.BinaryReader): QueryStakeRequest;
}

export namespace QueryStakeRequest {
  export type AsObject = {
    stakerAddress: string,
  }
}

export class QueryStakeResponse extends jspb.Message {
  hasStake(): boolean;
  clearStake(): void;
  getStake(): band_restake_v1beta1_types_pb.Stake | undefined;
  setStake(value?: band_restake_v1beta1_types_pb.Stake): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryStakeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryStakeResponse): QueryStakeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryStakeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryStakeResponse;
  static deserializeBinaryFromReader(message: QueryStakeResponse, reader: jspb.BinaryReader): QueryStakeResponse;
}

export namespace QueryStakeResponse {
  export type AsObject = {
    stake?: band_restake_v1beta1_types_pb.Stake.AsObject,
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
  getParams(): band_restake_v1beta1_genesis_pb.Params | undefined;
  setParams(value?: band_restake_v1beta1_genesis_pb.Params): void;

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
    params?: band_restake_v1beta1_genesis_pb.Params.AsObject,
  }
}

