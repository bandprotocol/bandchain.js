// package: cosmos.upgrade.v1beta1
// file: cosmos/upgrade/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_upgrade_v1beta1_upgrade_pb from "../../../cosmos/upgrade/v1beta1/upgrade_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";

export class MsgSoftwareUpgrade extends jspb.Message {
  getAuthority(): string;
  setAuthority(value: string): void;

  hasPlan(): boolean;
  clearPlan(): void;
  getPlan(): cosmos_upgrade_v1beta1_upgrade_pb.Plan | undefined;
  setPlan(value?: cosmos_upgrade_v1beta1_upgrade_pb.Plan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSoftwareUpgrade.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSoftwareUpgrade): MsgSoftwareUpgrade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSoftwareUpgrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSoftwareUpgrade;
  static deserializeBinaryFromReader(message: MsgSoftwareUpgrade, reader: jspb.BinaryReader): MsgSoftwareUpgrade;
}

export namespace MsgSoftwareUpgrade {
  export type AsObject = {
    authority: string,
    plan?: cosmos_upgrade_v1beta1_upgrade_pb.Plan.AsObject,
  }
}

export class MsgSoftwareUpgradeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSoftwareUpgradeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSoftwareUpgradeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSoftwareUpgradeResponse;
  static deserializeBinaryFromReader(message: MsgSoftwareUpgradeResponse, reader: jspb.BinaryReader): MsgSoftwareUpgradeResponse;
}

export namespace MsgSoftwareUpgradeResponse {
  export type AsObject = {
  }
}

export class MsgCancelUpgrade extends jspb.Message {
  getAuthority(): string;
  setAuthority(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCancelUpgrade.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCancelUpgrade): MsgCancelUpgrade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCancelUpgrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCancelUpgrade;
  static deserializeBinaryFromReader(message: MsgCancelUpgrade, reader: jspb.BinaryReader): MsgCancelUpgrade;
}

export namespace MsgCancelUpgrade {
  export type AsObject = {
    authority: string,
  }
}

export class MsgCancelUpgradeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCancelUpgradeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCancelUpgradeResponse): MsgCancelUpgradeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCancelUpgradeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCancelUpgradeResponse;
  static deserializeBinaryFromReader(message: MsgCancelUpgradeResponse, reader: jspb.BinaryReader): MsgCancelUpgradeResponse;
}

export namespace MsgCancelUpgradeResponse {
  export type AsObject = {
  }
}

