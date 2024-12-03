// package: ibc.core.channel.v1
// file: ibc/core/channel/v1/upgrade.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as ibc_core_channel_v1_channel_pb from "../../../../ibc/core/channel/v1/channel_pb";

export class Upgrade extends jspb.Message {
  hasFields(): boolean;
  clearFields(): void;
  getFields(): UpgradeFields | undefined;
  setFields(value?: UpgradeFields): void;

  hasTimeout(): boolean;
  clearTimeout(): void;
  getTimeout(): ibc_core_channel_v1_channel_pb.Timeout | undefined;
  setTimeout(value?: ibc_core_channel_v1_channel_pb.Timeout): void;

  getNextSequenceSend(): number;
  setNextSequenceSend(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Upgrade.AsObject;
  static toObject(includeInstance: boolean, msg: Upgrade): Upgrade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Upgrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Upgrade;
  static deserializeBinaryFromReader(message: Upgrade, reader: jspb.BinaryReader): Upgrade;
}

export namespace Upgrade {
  export type AsObject = {
    fields?: UpgradeFields.AsObject,
    timeout?: ibc_core_channel_v1_channel_pb.Timeout.AsObject,
    nextSequenceSend: number,
  }
}

export class UpgradeFields extends jspb.Message {
  getOrdering(): ibc_core_channel_v1_channel_pb.OrderMap[keyof ibc_core_channel_v1_channel_pb.OrderMap];
  setOrdering(value: ibc_core_channel_v1_channel_pb.OrderMap[keyof ibc_core_channel_v1_channel_pb.OrderMap]): void;

  clearConnectionHopsList(): void;
  getConnectionHopsList(): Array<string>;
  setConnectionHopsList(value: Array<string>): void;
  addConnectionHops(value: string, index?: number): string;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpgradeFields.AsObject;
  static toObject(includeInstance: boolean, msg: UpgradeFields): UpgradeFields.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpgradeFields, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpgradeFields;
  static deserializeBinaryFromReader(message: UpgradeFields, reader: jspb.BinaryReader): UpgradeFields;
}

export namespace UpgradeFields {
  export type AsObject = {
    ordering: ibc_core_channel_v1_channel_pb.OrderMap[keyof ibc_core_channel_v1_channel_pb.OrderMap],
    connectionHopsList: Array<string>,
    version: string,
  }
}

export class ErrorReceipt extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorReceipt.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorReceipt): ErrorReceipt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorReceipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorReceipt;
  static deserializeBinaryFromReader(message: ErrorReceipt, reader: jspb.BinaryReader): ErrorReceipt;
}

export namespace ErrorReceipt {
  export type AsObject = {
    sequence: number,
    message: string,
  }
}

