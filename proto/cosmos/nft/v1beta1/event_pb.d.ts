// package: cosmos.nft.v1beta1
// file: cosmos/nft/v1beta1/event.proto

import * as jspb from "google-protobuf";

export class EventSend extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): void;

  getId(): string;
  setId(value: string): void;

  getSender(): string;
  setSender(value: string): void;

  getReceiver(): string;
  setReceiver(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSend.AsObject;
  static toObject(includeInstance: boolean, msg: EventSend): EventSend.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventSend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSend;
  static deserializeBinaryFromReader(message: EventSend, reader: jspb.BinaryReader): EventSend;
}

export namespace EventSend {
  export type AsObject = {
    classId: string,
    id: string,
    sender: string,
    receiver: string,
  }
}

export class EventMint extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): void;

  getId(): string;
  setId(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventMint.AsObject;
  static toObject(includeInstance: boolean, msg: EventMint): EventMint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventMint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventMint;
  static deserializeBinaryFromReader(message: EventMint, reader: jspb.BinaryReader): EventMint;
}

export namespace EventMint {
  export type AsObject = {
    classId: string,
    id: string,
    owner: string,
  }
}

export class EventBurn extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): void;

  getId(): string;
  setId(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventBurn.AsObject;
  static toObject(includeInstance: boolean, msg: EventBurn): EventBurn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventBurn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventBurn;
  static deserializeBinaryFromReader(message: EventBurn, reader: jspb.BinaryReader): EventBurn;
}

export namespace EventBurn {
  export type AsObject = {
    classId: string,
    id: string,
    owner: string,
  }
}

