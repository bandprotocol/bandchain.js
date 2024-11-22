// package: ibc.applications.interchain_accounts.controller.v1
// file: ibc/applications/interchain_accounts/controller/v1/query.proto

import * as jspb from "google-protobuf";
import * as ibc_applications_interchain_accounts_controller_v1_controller_pb from "../../../../../ibc/applications/interchain_accounts/controller/v1/controller_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class QueryInterchainAccountRequest extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): void;

  getConnectionId(): string;
  setConnectionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryInterchainAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryInterchainAccountRequest): QueryInterchainAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryInterchainAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryInterchainAccountRequest;
  static deserializeBinaryFromReader(message: QueryInterchainAccountRequest, reader: jspb.BinaryReader): QueryInterchainAccountRequest;
}

export namespace QueryInterchainAccountRequest {
  export type AsObject = {
    owner: string,
    connectionId: string,
  }
}

export class QueryInterchainAccountResponse extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryInterchainAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryInterchainAccountResponse): QueryInterchainAccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryInterchainAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryInterchainAccountResponse;
  static deserializeBinaryFromReader(message: QueryInterchainAccountResponse, reader: jspb.BinaryReader): QueryInterchainAccountResponse;
}

export namespace QueryInterchainAccountResponse {
  export type AsObject = {
    address: string,
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
  getParams(): ibc_applications_interchain_accounts_controller_v1_controller_pb.Params | undefined;
  setParams(value?: ibc_applications_interchain_accounts_controller_v1_controller_pb.Params): void;

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
    params?: ibc_applications_interchain_accounts_controller_v1_controller_pb.Params.AsObject,
  }
}

