// package: cosmos.feegrant.v1beta1
// file: cosmos/feegrant/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";

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

export class MsgPruneAllowances extends jspb.Message {
  getPruner(): string;
  setPruner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgPruneAllowances.AsObject;
  static toObject(includeInstance: boolean, msg: MsgPruneAllowances): MsgPruneAllowances.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgPruneAllowances, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgPruneAllowances;
  static deserializeBinaryFromReader(message: MsgPruneAllowances, reader: jspb.BinaryReader): MsgPruneAllowances;
}

export namespace MsgPruneAllowances {
  export type AsObject = {
    pruner: string,
  }
}

export class MsgPruneAllowancesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgPruneAllowancesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgPruneAllowancesResponse): MsgPruneAllowancesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgPruneAllowancesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgPruneAllowancesResponse;
  static deserializeBinaryFromReader(message: MsgPruneAllowancesResponse, reader: jspb.BinaryReader): MsgPruneAllowancesResponse;
}

export namespace MsgPruneAllowancesResponse {
  export type AsObject = {
  }
}

