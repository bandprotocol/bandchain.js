// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../../cosmos/base/query/v1beta1/pagination_pb";
import * as ibc_applications_transfer_v1_transfer_pb from "../../../../ibc/applications/transfer/v1/transfer_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class QueryDenomTraceRequest extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomTraceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomTraceRequest): QueryDenomTraceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDenomTraceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomTraceRequest;
  static deserializeBinaryFromReader(message: QueryDenomTraceRequest, reader: jspb.BinaryReader): QueryDenomTraceRequest;
}

export namespace QueryDenomTraceRequest {
  export type AsObject = {
    hash: string,
  }
}

export class QueryDenomTraceResponse extends jspb.Message {
  hasDenomTrace(): boolean;
  clearDenomTrace(): void;
  getDenomTrace(): ibc_applications_transfer_v1_transfer_pb.DenomTrace | undefined;
  setDenomTrace(value?: ibc_applications_transfer_v1_transfer_pb.DenomTrace): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomTraceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomTraceResponse): QueryDenomTraceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDenomTraceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomTraceResponse;
  static deserializeBinaryFromReader(message: QueryDenomTraceResponse, reader: jspb.BinaryReader): QueryDenomTraceResponse;
}

export namespace QueryDenomTraceResponse {
  export type AsObject = {
    denomTrace?: ibc_applications_transfer_v1_transfer_pb.DenomTrace.AsObject,
  }
}

export class QueryDenomTracesRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomTracesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomTracesRequest): QueryDenomTracesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDenomTracesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomTracesRequest;
  static deserializeBinaryFromReader(message: QueryDenomTracesRequest, reader: jspb.BinaryReader): QueryDenomTracesRequest;
}

export namespace QueryDenomTracesRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryDenomTracesResponse extends jspb.Message {
  clearDenomTracesList(): void;
  getDenomTracesList(): Array<ibc_applications_transfer_v1_transfer_pb.DenomTrace>;
  setDenomTracesList(value: Array<ibc_applications_transfer_v1_transfer_pb.DenomTrace>): void;
  addDenomTraces(value?: ibc_applications_transfer_v1_transfer_pb.DenomTrace, index?: number): ibc_applications_transfer_v1_transfer_pb.DenomTrace;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomTracesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomTracesResponse): QueryDenomTracesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDenomTracesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomTracesResponse;
  static deserializeBinaryFromReader(message: QueryDenomTracesResponse, reader: jspb.BinaryReader): QueryDenomTracesResponse;
}

export namespace QueryDenomTracesResponse {
  export type AsObject = {
    denomTracesList: Array<ibc_applications_transfer_v1_transfer_pb.DenomTrace.AsObject>,
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
  getParams(): ibc_applications_transfer_v1_transfer_pb.Params | undefined;
  setParams(value?: ibc_applications_transfer_v1_transfer_pb.Params): void;

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
    params?: ibc_applications_transfer_v1_transfer_pb.Params.AsObject,
  }
}

export class QueryDenomHashRequest extends jspb.Message {
  getTrace(): string;
  setTrace(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomHashRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomHashRequest): QueryDenomHashRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDenomHashRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomHashRequest;
  static deserializeBinaryFromReader(message: QueryDenomHashRequest, reader: jspb.BinaryReader): QueryDenomHashRequest;
}

export namespace QueryDenomHashRequest {
  export type AsObject = {
    trace: string,
  }
}

export class QueryDenomHashResponse extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomHashResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomHashResponse): QueryDenomHashResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDenomHashResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomHashResponse;
  static deserializeBinaryFromReader(message: QueryDenomHashResponse, reader: jspb.BinaryReader): QueryDenomHashResponse;
}

export namespace QueryDenomHashResponse {
  export type AsObject = {
    hash: string,
  }
}

export class QueryEscrowAddressRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryEscrowAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryEscrowAddressRequest): QueryEscrowAddressRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryEscrowAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryEscrowAddressRequest;
  static deserializeBinaryFromReader(message: QueryEscrowAddressRequest, reader: jspb.BinaryReader): QueryEscrowAddressRequest;
}

export namespace QueryEscrowAddressRequest {
  export type AsObject = {
    portId: string,
    channelId: string,
  }
}

export class QueryEscrowAddressResponse extends jspb.Message {
  getEscrowAddress(): string;
  setEscrowAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryEscrowAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryEscrowAddressResponse): QueryEscrowAddressResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryEscrowAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryEscrowAddressResponse;
  static deserializeBinaryFromReader(message: QueryEscrowAddressResponse, reader: jspb.BinaryReader): QueryEscrowAddressResponse;
}

export namespace QueryEscrowAddressResponse {
  export type AsObject = {
    escrowAddress: string,
  }
}

export class QueryTotalEscrowForDenomRequest extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalEscrowForDenomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalEscrowForDenomRequest): QueryTotalEscrowForDenomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTotalEscrowForDenomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalEscrowForDenomRequest;
  static deserializeBinaryFromReader(message: QueryTotalEscrowForDenomRequest, reader: jspb.BinaryReader): QueryTotalEscrowForDenomRequest;
}

export namespace QueryTotalEscrowForDenomRequest {
  export type AsObject = {
    denom: string,
  }
}

export class QueryTotalEscrowForDenomResponse extends jspb.Message {
  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalEscrowForDenomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalEscrowForDenomResponse): QueryTotalEscrowForDenomResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTotalEscrowForDenomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalEscrowForDenomResponse;
  static deserializeBinaryFromReader(message: QueryTotalEscrowForDenomResponse, reader: jspb.BinaryReader): QueryTotalEscrowForDenomResponse;
}

export namespace QueryTotalEscrowForDenomResponse {
  export type AsObject = {
    amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

