// package: cosmos.orm.query.v1alpha1
// file: cosmos/orm/query/v1alpha1/query.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../../cosmos/base/query/v1beta1/pagination_pb";

export class GetRequest extends jspb.Message {
  getMessageName(): string;
  setMessageName(value: string): void;

  getIndex(): string;
  setIndex(value: string): void;

  clearValuesList(): void;
  getValuesList(): Array<IndexValue>;
  setValuesList(value: Array<IndexValue>): void;
  addValues(value?: IndexValue, index?: number): IndexValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    messageName: string,
    index: string,
    valuesList: Array<IndexValue.AsObject>,
  }
}

export class GetResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): google_protobuf_any_pb.Any | undefined;
  setResult(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    result?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class ListRequest extends jspb.Message {
  getMessageName(): string;
  setMessageName(value: string): void;

  getIndex(): string;
  setIndex(value: string): void;

  hasPrefix(): boolean;
  clearPrefix(): void;
  getPrefix(): ListRequest.Prefix | undefined;
  setPrefix(value?: ListRequest.Prefix): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): ListRequest.Range | undefined;
  setRange(value?: ListRequest.Range): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  getQueryCase(): ListRequest.QueryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    messageName: string,
    index: string,
    prefix?: ListRequest.Prefix.AsObject,
    range?: ListRequest.Range.AsObject,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }

  export class Prefix extends jspb.Message {
    clearValuesList(): void;
    getValuesList(): Array<IndexValue>;
    setValuesList(value: Array<IndexValue>): void;
    addValues(value?: IndexValue, index?: number): IndexValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Prefix.AsObject;
    static toObject(includeInstance: boolean, msg: Prefix): Prefix.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Prefix, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Prefix;
    static deserializeBinaryFromReader(message: Prefix, reader: jspb.BinaryReader): Prefix;
  }

  export namespace Prefix {
    export type AsObject = {
      valuesList: Array<IndexValue.AsObject>,
    }
  }

  export class Range extends jspb.Message {
    clearStartList(): void;
    getStartList(): Array<IndexValue>;
    setStartList(value: Array<IndexValue>): void;
    addStart(value?: IndexValue, index?: number): IndexValue;

    clearEndList(): void;
    getEndList(): Array<IndexValue>;
    setEndList(value: Array<IndexValue>): void;
    addEnd(value?: IndexValue, index?: number): IndexValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Range.AsObject;
    static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Range;
    static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
  }

  export namespace Range {
    export type AsObject = {
      startList: Array<IndexValue.AsObject>,
      endList: Array<IndexValue.AsObject>,
    }
  }

  export enum QueryCase {
    QUERY_NOT_SET = 0,
    PREFIX = 3,
    RANGE = 4,
  }
}

export class ListResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<google_protobuf_any_pb.Any>;
  setResultsList(value: Array<google_protobuf_any_pb.Any>): void;
  addResults(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    resultsList: Array<google_protobuf_any_pb.Any.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class IndexValue extends jspb.Message {
  hasUint(): boolean;
  clearUint(): void;
  getUint(): number;
  setUint(value: number): void;

  hasInt(): boolean;
  clearInt(): void;
  getInt(): number;
  setInt(value: number): void;

  hasStr(): boolean;
  clearStr(): void;
  getStr(): string;
  setStr(value: string): void;

  hasBytes(): boolean;
  clearBytes(): void;
  getBytes(): Uint8Array | string;
  getBytes_asU8(): Uint8Array;
  getBytes_asB64(): string;
  setBytes(value: Uint8Array | string): void;

  hasEnum(): boolean;
  clearEnum(): void;
  getEnum(): string;
  setEnum(value: string): void;

  hasBool(): boolean;
  clearBool(): void;
  getBool(): boolean;
  setBool(value: boolean): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDuration(value?: google_protobuf_duration_pb.Duration): void;

  getValueCase(): IndexValue.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexValue.AsObject;
  static toObject(includeInstance: boolean, msg: IndexValue): IndexValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexValue;
  static deserializeBinaryFromReader(message: IndexValue, reader: jspb.BinaryReader): IndexValue;
}

export namespace IndexValue {
  export type AsObject = {
    uint: number,
    pb_int: number,
    str: string,
    bytes: Uint8Array | string,
    pb_enum: string,
    bool: boolean,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    duration?: google_protobuf_duration_pb.Duration.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    UINT = 1,
    INT = 2,
    STR = 3,
    BYTES = 4,
    ENUM = 5,
    BOOL = 6,
    TIMESTAMP = 7,
    DURATION = 8,
  }
}

