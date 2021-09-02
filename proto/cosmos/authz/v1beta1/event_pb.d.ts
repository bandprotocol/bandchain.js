// package: cosmos.authz.v1beta1
// file: cosmos/authz/v1beta1/event.proto

import * as jspb from "google-protobuf";

export class EventGrant extends jspb.Message {
  getMsgTypeUrl(): string;
  setMsgTypeUrl(value: string): void;

  getGranter(): string;
  setGranter(value: string): void;

  getGrantee(): string;
  setGrantee(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventGrant.AsObject;
  static toObject(includeInstance: boolean, msg: EventGrant): EventGrant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventGrant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventGrant;
  static deserializeBinaryFromReader(message: EventGrant, reader: jspb.BinaryReader): EventGrant;
}

export namespace EventGrant {
  export type AsObject = {
    msgTypeUrl: string,
    granter: string,
    grantee: string,
  }
}

export class EventRevoke extends jspb.Message {
  getMsgTypeUrl(): string;
  setMsgTypeUrl(value: string): void;

  getGranter(): string;
  setGranter(value: string): void;

  getGrantee(): string;
  setGrantee(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventRevoke.AsObject;
  static toObject(includeInstance: boolean, msg: EventRevoke): EventRevoke.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventRevoke, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventRevoke;
  static deserializeBinaryFromReader(message: EventRevoke, reader: jspb.BinaryReader): EventRevoke;
}

export namespace EventRevoke {
  export type AsObject = {
    msgTypeUrl: string,
    granter: string,
    grantee: string,
  }
}

