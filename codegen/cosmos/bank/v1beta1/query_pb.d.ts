// package: cosmos.bank.v1beta1
// file: cosmos/bank/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_bank_v1beta1_bank_pb from "../../../cosmos/bank/v1beta1/bank_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_query_v1_query_pb from "../../../cosmos/query/v1/query_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";

export class QueryBalanceRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getDenom(): string;
  setDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBalanceRequest): QueryBalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBalanceRequest;
  static deserializeBinaryFromReader(message: QueryBalanceRequest, reader: jspb.BinaryReader): QueryBalanceRequest;
}

export namespace QueryBalanceRequest {
  export type AsObject = {
    address: string,
    denom: string,
  }
}

export class QueryBalanceResponse extends jspb.Message {
  hasBalance(): boolean;
  clearBalance(): void;
  getBalance(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setBalance(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBalanceResponse): QueryBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBalanceResponse;
  static deserializeBinaryFromReader(message: QueryBalanceResponse, reader: jspb.BinaryReader): QueryBalanceResponse;
}

export namespace QueryBalanceResponse {
  export type AsObject = {
    balance?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class QueryAllBalancesRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllBalancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAllBalancesRequest): QueryAllBalancesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAllBalancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllBalancesRequest;
  static deserializeBinaryFromReader(message: QueryAllBalancesRequest, reader: jspb.BinaryReader): QueryAllBalancesRequest;
}

export namespace QueryAllBalancesRequest {
  export type AsObject = {
    address: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryAllBalancesResponse extends jspb.Message {
  clearBalancesList(): void;
  getBalancesList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setBalancesList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addBalances(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllBalancesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAllBalancesResponse): QueryAllBalancesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAllBalancesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllBalancesResponse;
  static deserializeBinaryFromReader(message: QueryAllBalancesResponse, reader: jspb.BinaryReader): QueryAllBalancesResponse;
}

export namespace QueryAllBalancesResponse {
  export type AsObject = {
    balancesList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QuerySpendableBalancesRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySpendableBalancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySpendableBalancesRequest): QuerySpendableBalancesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySpendableBalancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySpendableBalancesRequest;
  static deserializeBinaryFromReader(message: QuerySpendableBalancesRequest, reader: jspb.BinaryReader): QuerySpendableBalancesRequest;
}

export namespace QuerySpendableBalancesRequest {
  export type AsObject = {
    address: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QuerySpendableBalancesResponse extends jspb.Message {
  clearBalancesList(): void;
  getBalancesList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setBalancesList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addBalances(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySpendableBalancesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySpendableBalancesResponse): QuerySpendableBalancesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySpendableBalancesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySpendableBalancesResponse;
  static deserializeBinaryFromReader(message: QuerySpendableBalancesResponse, reader: jspb.BinaryReader): QuerySpendableBalancesResponse;
}

export namespace QuerySpendableBalancesResponse {
  export type AsObject = {
    balancesList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QuerySpendableBalanceByDenomRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getDenom(): string;
  setDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySpendableBalanceByDenomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySpendableBalanceByDenomRequest): QuerySpendableBalanceByDenomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySpendableBalanceByDenomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySpendableBalanceByDenomRequest;
  static deserializeBinaryFromReader(message: QuerySpendableBalanceByDenomRequest, reader: jspb.BinaryReader): QuerySpendableBalanceByDenomRequest;
}

export namespace QuerySpendableBalanceByDenomRequest {
  export type AsObject = {
    address: string,
    denom: string,
  }
}

export class QuerySpendableBalanceByDenomResponse extends jspb.Message {
  hasBalance(): boolean;
  clearBalance(): void;
  getBalance(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setBalance(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySpendableBalanceByDenomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySpendableBalanceByDenomResponse): QuerySpendableBalanceByDenomResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySpendableBalanceByDenomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySpendableBalanceByDenomResponse;
  static deserializeBinaryFromReader(message: QuerySpendableBalanceByDenomResponse, reader: jspb.BinaryReader): QuerySpendableBalanceByDenomResponse;
}

export namespace QuerySpendableBalanceByDenomResponse {
  export type AsObject = {
    balance?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class QueryTotalSupplyRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalSupplyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalSupplyRequest): QueryTotalSupplyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTotalSupplyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalSupplyRequest;
  static deserializeBinaryFromReader(message: QueryTotalSupplyRequest, reader: jspb.BinaryReader): QueryTotalSupplyRequest;
}

export namespace QueryTotalSupplyRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryTotalSupplyResponse extends jspb.Message {
  clearSupplyList(): void;
  getSupplyList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setSupplyList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addSupply(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalSupplyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalSupplyResponse): QueryTotalSupplyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTotalSupplyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalSupplyResponse;
  static deserializeBinaryFromReader(message: QueryTotalSupplyResponse, reader: jspb.BinaryReader): QueryTotalSupplyResponse;
}

export namespace QueryTotalSupplyResponse {
  export type AsObject = {
    supplyList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QuerySupplyOfRequest extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySupplyOfRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySupplyOfRequest): QuerySupplyOfRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySupplyOfRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySupplyOfRequest;
  static deserializeBinaryFromReader(message: QuerySupplyOfRequest, reader: jspb.BinaryReader): QuerySupplyOfRequest;
}

export namespace QuerySupplyOfRequest {
  export type AsObject = {
    denom: string,
  }
}

export class QuerySupplyOfResponse extends jspb.Message {
  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySupplyOfResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySupplyOfResponse): QuerySupplyOfResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySupplyOfResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySupplyOfResponse;
  static deserializeBinaryFromReader(message: QuerySupplyOfResponse, reader: jspb.BinaryReader): QuerySupplyOfResponse;
}

export namespace QuerySupplyOfResponse {
  export type AsObject = {
    amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
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
  getParams(): cosmos_bank_v1beta1_bank_pb.Params | undefined;
  setParams(value?: cosmos_bank_v1beta1_bank_pb.Params): void;

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
    params?: cosmos_bank_v1beta1_bank_pb.Params.AsObject,
  }
}

export class QueryDenomsMetadataRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomsMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomsMetadataRequest): QueryDenomsMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDenomsMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomsMetadataRequest;
  static deserializeBinaryFromReader(message: QueryDenomsMetadataRequest, reader: jspb.BinaryReader): QueryDenomsMetadataRequest;
}

export namespace QueryDenomsMetadataRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryDenomsMetadataResponse extends jspb.Message {
  clearMetadatasList(): void;
  getMetadatasList(): Array<cosmos_bank_v1beta1_bank_pb.Metadata>;
  setMetadatasList(value: Array<cosmos_bank_v1beta1_bank_pb.Metadata>): void;
  addMetadatas(value?: cosmos_bank_v1beta1_bank_pb.Metadata, index?: number): cosmos_bank_v1beta1_bank_pb.Metadata;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomsMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomsMetadataResponse): QueryDenomsMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDenomsMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomsMetadataResponse;
  static deserializeBinaryFromReader(message: QueryDenomsMetadataResponse, reader: jspb.BinaryReader): QueryDenomsMetadataResponse;
}

export namespace QueryDenomsMetadataResponse {
  export type AsObject = {
    metadatasList: Array<cosmos_bank_v1beta1_bank_pb.Metadata.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryDenomMetadataRequest extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomMetadataRequest): QueryDenomMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDenomMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomMetadataRequest;
  static deserializeBinaryFromReader(message: QueryDenomMetadataRequest, reader: jspb.BinaryReader): QueryDenomMetadataRequest;
}

export namespace QueryDenomMetadataRequest {
  export type AsObject = {
    denom: string,
  }
}

export class QueryDenomMetadataResponse extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): cosmos_bank_v1beta1_bank_pb.Metadata | undefined;
  setMetadata(value?: cosmos_bank_v1beta1_bank_pb.Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomMetadataResponse): QueryDenomMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDenomMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomMetadataResponse;
  static deserializeBinaryFromReader(message: QueryDenomMetadataResponse, reader: jspb.BinaryReader): QueryDenomMetadataResponse;
}

export namespace QueryDenomMetadataResponse {
  export type AsObject = {
    metadata?: cosmos_bank_v1beta1_bank_pb.Metadata.AsObject,
  }
}

export class QueryDenomOwnersRequest extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomOwnersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomOwnersRequest): QueryDenomOwnersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDenomOwnersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomOwnersRequest;
  static deserializeBinaryFromReader(message: QueryDenomOwnersRequest, reader: jspb.BinaryReader): QueryDenomOwnersRequest;
}

export namespace QueryDenomOwnersRequest {
  export type AsObject = {
    denom: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class DenomOwner extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  hasBalance(): boolean;
  clearBalance(): void;
  getBalance(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setBalance(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DenomOwner.AsObject;
  static toObject(includeInstance: boolean, msg: DenomOwner): DenomOwner.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DenomOwner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DenomOwner;
  static deserializeBinaryFromReader(message: DenomOwner, reader: jspb.BinaryReader): DenomOwner;
}

export namespace DenomOwner {
  export type AsObject = {
    address: string,
    balance?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class QueryDenomOwnersResponse extends jspb.Message {
  clearDenomOwnersList(): void;
  getDenomOwnersList(): Array<DenomOwner>;
  setDenomOwnersList(value: Array<DenomOwner>): void;
  addDenomOwners(value?: DenomOwner, index?: number): DenomOwner;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomOwnersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomOwnersResponse): QueryDenomOwnersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDenomOwnersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomOwnersResponse;
  static deserializeBinaryFromReader(message: QueryDenomOwnersResponse, reader: jspb.BinaryReader): QueryDenomOwnersResponse;
}

export namespace QueryDenomOwnersResponse {
  export type AsObject = {
    denomOwnersList: Array<DenomOwner.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QuerySendEnabledRequest extends jspb.Message {
  clearDenomsList(): void;
  getDenomsList(): Array<string>;
  setDenomsList(value: Array<string>): void;
  addDenoms(value: string, index?: number): string;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySendEnabledRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySendEnabledRequest): QuerySendEnabledRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySendEnabledRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySendEnabledRequest;
  static deserializeBinaryFromReader(message: QuerySendEnabledRequest, reader: jspb.BinaryReader): QuerySendEnabledRequest;
}

export namespace QuerySendEnabledRequest {
  export type AsObject = {
    denomsList: Array<string>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QuerySendEnabledResponse extends jspb.Message {
  clearSendEnabledList(): void;
  getSendEnabledList(): Array<cosmos_bank_v1beta1_bank_pb.SendEnabled>;
  setSendEnabledList(value: Array<cosmos_bank_v1beta1_bank_pb.SendEnabled>): void;
  addSendEnabled(value?: cosmos_bank_v1beta1_bank_pb.SendEnabled, index?: number): cosmos_bank_v1beta1_bank_pb.SendEnabled;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySendEnabledResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySendEnabledResponse): QuerySendEnabledResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySendEnabledResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySendEnabledResponse;
  static deserializeBinaryFromReader(message: QuerySendEnabledResponse, reader: jspb.BinaryReader): QuerySendEnabledResponse;
}

export namespace QuerySendEnabledResponse {
  export type AsObject = {
    sendEnabledList: Array<cosmos_bank_v1beta1_bank_pb.SendEnabled.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

