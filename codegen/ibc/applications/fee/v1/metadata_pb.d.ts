// package: ibc.applications.fee.v1
// file: ibc/applications/fee/v1/metadata.proto

import * as jspb from "google-protobuf";

export class Metadata extends jspb.Message {
  getFeeVersion(): string;
  setFeeVersion(value: string): void;

  getAppVersion(): string;
  setAppVersion(value: string): void;

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
    feeVersion: string,
    appVersion: string,
  }
}

