// package: ibc.lightclients.wasm.v1
// file: ibc/lightclients/wasm/v1/query.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../../cosmos/base/query/v1beta1/pagination_pb";

export class QueryChecksumsRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChecksumsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryChecksumsRequest): QueryChecksumsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryChecksumsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryChecksumsRequest;
  static deserializeBinaryFromReader(message: QueryChecksumsRequest, reader: jspb.BinaryReader): QueryChecksumsRequest;
}

export namespace QueryChecksumsRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryChecksumsResponse extends jspb.Message {
  clearChecksumsList(): void;
  getChecksumsList(): Array<string>;
  setChecksumsList(value: Array<string>): void;
  addChecksums(value: string, index?: number): string;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChecksumsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryChecksumsResponse): QueryChecksumsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryChecksumsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryChecksumsResponse;
  static deserializeBinaryFromReader(message: QueryChecksumsResponse, reader: jspb.BinaryReader): QueryChecksumsResponse;
}

export namespace QueryChecksumsResponse {
  export type AsObject = {
    checksumsList: Array<string>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryCodeRequest extends jspb.Message {
  getChecksum(): string;
  setChecksum(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCodeRequest): QueryCodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCodeRequest;
  static deserializeBinaryFromReader(message: QueryCodeRequest, reader: jspb.BinaryReader): QueryCodeRequest;
}

export namespace QueryCodeRequest {
  export type AsObject = {
    checksum: string,
  }
}

export class QueryCodeResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCodeResponse): QueryCodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCodeResponse;
  static deserializeBinaryFromReader(message: QueryCodeResponse, reader: jspb.BinaryReader): QueryCodeResponse;
}

export namespace QueryCodeResponse {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

