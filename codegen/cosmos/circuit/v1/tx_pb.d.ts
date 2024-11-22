// package: cosmos.circuit.v1
// file: cosmos/circuit/v1/tx.proto

import * as jspb from "google-protobuf";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as cosmos_circuit_v1_types_pb from "../../../cosmos/circuit/v1/types_pb";

export class MsgAuthorizeCircuitBreaker extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): void;

  getGrantee(): string;
  setGrantee(value: string): void;

  hasPermissions(): boolean;
  clearPermissions(): void;
  getPermissions(): cosmos_circuit_v1_types_pb.Permissions | undefined;
  setPermissions(value?: cosmos_circuit_v1_types_pb.Permissions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgAuthorizeCircuitBreaker.AsObject;
  static toObject(includeInstance: boolean, msg: MsgAuthorizeCircuitBreaker): MsgAuthorizeCircuitBreaker.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgAuthorizeCircuitBreaker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgAuthorizeCircuitBreaker;
  static deserializeBinaryFromReader(message: MsgAuthorizeCircuitBreaker, reader: jspb.BinaryReader): MsgAuthorizeCircuitBreaker;
}

export namespace MsgAuthorizeCircuitBreaker {
  export type AsObject = {
    granter: string,
    grantee: string,
    permissions?: cosmos_circuit_v1_types_pb.Permissions.AsObject,
  }
}

export class MsgAuthorizeCircuitBreakerResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgAuthorizeCircuitBreakerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgAuthorizeCircuitBreakerResponse): MsgAuthorizeCircuitBreakerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgAuthorizeCircuitBreakerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgAuthorizeCircuitBreakerResponse;
  static deserializeBinaryFromReader(message: MsgAuthorizeCircuitBreakerResponse, reader: jspb.BinaryReader): MsgAuthorizeCircuitBreakerResponse;
}

export namespace MsgAuthorizeCircuitBreakerResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class MsgTripCircuitBreaker extends jspb.Message {
  getAuthority(): string;
  setAuthority(value: string): void;

  clearMsgTypeUrlsList(): void;
  getMsgTypeUrlsList(): Array<string>;
  setMsgTypeUrlsList(value: Array<string>): void;
  addMsgTypeUrls(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTripCircuitBreaker.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTripCircuitBreaker): MsgTripCircuitBreaker.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgTripCircuitBreaker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTripCircuitBreaker;
  static deserializeBinaryFromReader(message: MsgTripCircuitBreaker, reader: jspb.BinaryReader): MsgTripCircuitBreaker;
}

export namespace MsgTripCircuitBreaker {
  export type AsObject = {
    authority: string,
    msgTypeUrlsList: Array<string>,
  }
}

export class MsgTripCircuitBreakerResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTripCircuitBreakerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTripCircuitBreakerResponse): MsgTripCircuitBreakerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgTripCircuitBreakerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTripCircuitBreakerResponse;
  static deserializeBinaryFromReader(message: MsgTripCircuitBreakerResponse, reader: jspb.BinaryReader): MsgTripCircuitBreakerResponse;
}

export namespace MsgTripCircuitBreakerResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class MsgResetCircuitBreaker extends jspb.Message {
  getAuthority(): string;
  setAuthority(value: string): void;

  clearMsgTypeUrlsList(): void;
  getMsgTypeUrlsList(): Array<string>;
  setMsgTypeUrlsList(value: Array<string>): void;
  addMsgTypeUrls(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgResetCircuitBreaker.AsObject;
  static toObject(includeInstance: boolean, msg: MsgResetCircuitBreaker): MsgResetCircuitBreaker.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgResetCircuitBreaker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgResetCircuitBreaker;
  static deserializeBinaryFromReader(message: MsgResetCircuitBreaker, reader: jspb.BinaryReader): MsgResetCircuitBreaker;
}

export namespace MsgResetCircuitBreaker {
  export type AsObject = {
    authority: string,
    msgTypeUrlsList: Array<string>,
  }
}

export class MsgResetCircuitBreakerResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgResetCircuitBreakerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgResetCircuitBreakerResponse): MsgResetCircuitBreakerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgResetCircuitBreakerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgResetCircuitBreakerResponse;
  static deserializeBinaryFromReader(message: MsgResetCircuitBreakerResponse, reader: jspb.BinaryReader): MsgResetCircuitBreakerResponse;
}

export namespace MsgResetCircuitBreakerResponse {
  export type AsObject = {
    success: boolean,
  }
}

