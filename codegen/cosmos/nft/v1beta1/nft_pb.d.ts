// package: cosmos.nft.v1beta1
// file: cosmos/nft/v1beta1/nft.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class Class extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getUri(): string;
  setUri(value: string): void;

  getUriHash(): string;
  setUriHash(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Class.AsObject;
  static toObject(includeInstance: boolean, msg: Class): Class.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Class, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Class;
  static deserializeBinaryFromReader(message: Class, reader: jspb.BinaryReader): Class;
}

export namespace Class {
  export type AsObject = {
    id: string,
    name: string,
    symbol: string,
    description: string,
    uri: string,
    uriHash: string,
    data?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class NFT extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): void;

  getId(): string;
  setId(value: string): void;

  getUri(): string;
  setUri(value: string): void;

  getUriHash(): string;
  setUriHash(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NFT.AsObject;
  static toObject(includeInstance: boolean, msg: NFT): NFT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NFT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NFT;
  static deserializeBinaryFromReader(message: NFT, reader: jspb.BinaryReader): NFT;
}

export namespace NFT {
  export type AsObject = {
    classId: string,
    id: string,
    uri: string,
    uriHash: string,
    data?: google_protobuf_any_pb.Any.AsObject,
  }
}

