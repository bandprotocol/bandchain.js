// package: cosmos.feegrant.v1beta1
// file: cosmos/feegrant/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";

export class MsgGrantAllowance extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): void;

  getGrantee(): string;
  setGrantee(value: string): void;

  hasAllowance(): boolean;
  clearAllowance(): void;
  getAllowance(): google_protobuf_any_pb.Any | undefined;
  setAllowance(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgGrantAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: MsgGrantAllowance): MsgGrantAllowance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgGrantAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgGrantAllowance;
  static deserializeBinaryFromReader(message: MsgGrantAllowance, reader: jspb.BinaryReader): MsgGrantAllowance;
}

export namespace MsgGrantAllowance {
  export type AsObject = {
    granter: string,
    grantee: string,
    allowance?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class MsgGrantAllowanceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgGrantAllowanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgGrantAllowanceResponse): MsgGrantAllowanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgGrantAllowanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgGrantAllowanceResponse;
  static deserializeBinaryFromReader(message: MsgGrantAllowanceResponse, reader: jspb.BinaryReader): MsgGrantAllowanceResponse;
}

export namespace MsgGrantAllowanceResponse {
  export type AsObject = {
  }
}

export class MsgRevokeAllowance extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): void;

  getGrantee(): string;
  setGrantee(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRevokeAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRevokeAllowance): MsgRevokeAllowance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRevokeAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRevokeAllowance;
  static deserializeBinaryFromReader(message: MsgRevokeAllowance, reader: jspb.BinaryReader): MsgRevokeAllowance;
}

export namespace MsgRevokeAllowance {
  export type AsObject = {
    granter: string,
    grantee: string,
  }
}

export class MsgRevokeAllowanceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRevokeAllowanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRevokeAllowanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRevokeAllowanceResponse;
  static deserializeBinaryFromReader(message: MsgRevokeAllowanceResponse, reader: jspb.BinaryReader): MsgRevokeAllowanceResponse;
}

export namespace MsgRevokeAllowanceResponse {
  export type AsObject = {
  }
}

