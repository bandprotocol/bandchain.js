// package: cosmos.authz.v1beta1
// file: cosmos/authz/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as cosmos_base_abci_v1beta1_abci_pb from "../../../cosmos/base/abci/v1beta1/abci_pb";
import * as cosmos_authz_v1beta1_authz_pb from "../../../cosmos/authz/v1beta1/authz_pb";

export class MsgGrant extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): void;

  getGrantee(): string;
  setGrantee(value: string): void;

  hasGrant(): boolean;
  clearGrant(): void;
  getGrant(): cosmos_authz_v1beta1_authz_pb.Grant | undefined;
  setGrant(value?: cosmos_authz_v1beta1_authz_pb.Grant): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgGrant.AsObject;
  static toObject(includeInstance: boolean, msg: MsgGrant): MsgGrant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgGrant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgGrant;
  static deserializeBinaryFromReader(message: MsgGrant, reader: jspb.BinaryReader): MsgGrant;
}

export namespace MsgGrant {
  export type AsObject = {
    granter: string,
    grantee: string,
    grant?: cosmos_authz_v1beta1_authz_pb.Grant.AsObject,
  }
}

export class MsgExecResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<Uint8Array | string>;
  getResultsList_asU8(): Array<Uint8Array>;
  getResultsList_asB64(): Array<string>;
  setResultsList(value: Array<Uint8Array | string>): void;
  addResults(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgExecResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgExecResponse): MsgExecResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgExecResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgExecResponse;
  static deserializeBinaryFromReader(message: MsgExecResponse, reader: jspb.BinaryReader): MsgExecResponse;
}

export namespace MsgExecResponse {
  export type AsObject = {
    resultsList: Array<Uint8Array | string>,
  }
}

export class MsgExec extends jspb.Message {
  getGrantee(): string;
  setGrantee(value: string): void;

  clearMsgsList(): void;
  getMsgsList(): Array<google_protobuf_any_pb.Any>;
  setMsgsList(value: Array<google_protobuf_any_pb.Any>): void;
  addMsgs(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgExec.AsObject;
  static toObject(includeInstance: boolean, msg: MsgExec): MsgExec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgExec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgExec;
  static deserializeBinaryFromReader(message: MsgExec, reader: jspb.BinaryReader): MsgExec;
}

export namespace MsgExec {
  export type AsObject = {
    grantee: string,
    msgsList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

export class MsgGrantResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgGrantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgGrantResponse): MsgGrantResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgGrantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgGrantResponse;
  static deserializeBinaryFromReader(message: MsgGrantResponse, reader: jspb.BinaryReader): MsgGrantResponse;
}

export namespace MsgGrantResponse {
  export type AsObject = {
  }
}

export class MsgRevoke extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): void;

  getGrantee(): string;
  setGrantee(value: string): void;

  getMsgTypeUrl(): string;
  setMsgTypeUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRevoke.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRevoke): MsgRevoke.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRevoke, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRevoke;
  static deserializeBinaryFromReader(message: MsgRevoke, reader: jspb.BinaryReader): MsgRevoke;
}

export namespace MsgRevoke {
  export type AsObject = {
    granter: string,
    grantee: string,
    msgTypeUrl: string,
  }
}

export class MsgRevokeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRevokeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRevokeResponse): MsgRevokeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRevokeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRevokeResponse;
  static deserializeBinaryFromReader(message: MsgRevokeResponse, reader: jspb.BinaryReader): MsgRevokeResponse;
}

export namespace MsgRevokeResponse {
  export type AsObject = {
  }
}

