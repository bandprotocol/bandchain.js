// package: cosmos.params.v1beta1
// file: cosmos/params/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_params_v1beta1_params_pb from "../../../cosmos/params/v1beta1/params_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";

export class QueryParamsRequest extends jspb.Message {
  getSubspace(): string;
  setSubspace(value: string): void;

  getKey(): string;
  setKey(value: string): void;

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
    subspace: string,
    key: string,
  }
}

export class QueryParamsResponse extends jspb.Message {
  hasParam(): boolean;
  clearParam(): void;
  getParam(): cosmos_params_v1beta1_params_pb.ParamChange | undefined;
  setParam(value?: cosmos_params_v1beta1_params_pb.ParamChange): void;

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
    param?: cosmos_params_v1beta1_params_pb.ParamChange.AsObject,
  }
}

export class QuerySubspacesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySubspacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySubspacesRequest): QuerySubspacesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySubspacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySubspacesRequest;
  static deserializeBinaryFromReader(message: QuerySubspacesRequest, reader: jspb.BinaryReader): QuerySubspacesRequest;
}

export namespace QuerySubspacesRequest {
  export type AsObject = {
  }
}

export class QuerySubspacesResponse extends jspb.Message {
  clearSubspacesList(): void;
  getSubspacesList(): Array<Subspace>;
  setSubspacesList(value: Array<Subspace>): void;
  addSubspaces(value?: Subspace, index?: number): Subspace;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySubspacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySubspacesResponse): QuerySubspacesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySubspacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySubspacesResponse;
  static deserializeBinaryFromReader(message: QuerySubspacesResponse, reader: jspb.BinaryReader): QuerySubspacesResponse;
}

export namespace QuerySubspacesResponse {
  export type AsObject = {
    subspacesList: Array<Subspace.AsObject>,
  }
}

export class Subspace extends jspb.Message {
  getSubspace(): string;
  setSubspace(value: string): void;

  clearKeysList(): void;
  getKeysList(): Array<string>;
  setKeysList(value: Array<string>): void;
  addKeys(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subspace.AsObject;
  static toObject(includeInstance: boolean, msg: Subspace): Subspace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Subspace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subspace;
  static deserializeBinaryFromReader(message: Subspace, reader: jspb.BinaryReader): Subspace;
}

export namespace Subspace {
  export type AsObject = {
    subspace: string,
    keysList: Array<string>,
  }
}

