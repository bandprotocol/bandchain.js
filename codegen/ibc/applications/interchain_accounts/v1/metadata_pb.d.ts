// package: ibc.applications.interchain_accounts.v1
// file: ibc/applications/interchain_accounts/v1/metadata.proto

import * as jspb from "google-protobuf";

export class Metadata extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  getControllerConnectionId(): string;
  setControllerConnectionId(value: string): void;

  getHostConnectionId(): string;
  setHostConnectionId(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getEncoding(): string;
  setEncoding(value: string): void;

  getTxType(): string;
  setTxType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    version: string,
    controllerConnectionId: string,
    hostConnectionId: string,
    address: string,
    encoding: string,
    txType: string,
  }
}

