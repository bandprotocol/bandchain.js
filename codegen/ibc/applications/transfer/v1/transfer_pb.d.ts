// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/transfer.proto

import * as jspb from "google-protobuf";

export class DenomTrace extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getBaseDenom(): string;
  setBaseDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DenomTrace.AsObject;
  static toObject(includeInstance: boolean, msg: DenomTrace): DenomTrace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DenomTrace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DenomTrace;
  static deserializeBinaryFromReader(message: DenomTrace, reader: jspb.BinaryReader): DenomTrace;
}

export namespace DenomTrace {
  export type AsObject = {
    path: string,
    baseDenom: string,
  }
}

export class Params extends jspb.Message {
  getSendEnabled(): boolean;
  setSendEnabled(value: boolean): void;

  getReceiveEnabled(): boolean;
  setReceiveEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    sendEnabled: boolean,
    receiveEnabled: boolean,
  }
}

