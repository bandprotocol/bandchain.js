// package: ibc.lightclients.solomachine.v3
// file: ibc/lightclients/solomachine/v3/solomachine.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class ClientState extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): void;

  getIsFrozen(): boolean;
  setIsFrozen(value: boolean): void;

  hasConsensusState(): boolean;
  clearConsensusState(): void;
  getConsensusState(): ConsensusState | undefined;
  setConsensusState(value?: ConsensusState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientState.AsObject;
  static toObject(includeInstance: boolean, msg: ClientState): ClientState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientState;
  static deserializeBinaryFromReader(message: ClientState, reader: jspb.BinaryReader): ClientState;
}

export namespace ClientState {
  export type AsObject = {
    sequence: number,
    isFrozen: boolean,
    consensusState?: ConsensusState.AsObject,
  }
}

export class ConsensusState extends jspb.Message {
  hasPublicKey(): boolean;
  clearPublicKey(): void;
  getPublicKey(): google_protobuf_any_pb.Any | undefined;
  setPublicKey(value?: google_protobuf_any_pb.Any): void;

  getDiversifier(): string;
  setDiversifier(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusState.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusState): ConsensusState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsensusState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusState;
  static deserializeBinaryFromReader(message: ConsensusState, reader: jspb.BinaryReader): ConsensusState;
}

export namespace ConsensusState {
  export type AsObject = {
    publicKey?: google_protobuf_any_pb.Any.AsObject,
    diversifier: string,
    timestamp: number,
  }
}

export class Header extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  hasNewPublicKey(): boolean;
  clearNewPublicKey(): void;
  getNewPublicKey(): google_protobuf_any_pb.Any | undefined;
  setNewPublicKey(value?: google_protobuf_any_pb.Any): void;

  getNewDiversifier(): string;
  setNewDiversifier(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Header.AsObject;
  static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Header;
  static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
}

export namespace Header {
  export type AsObject = {
    timestamp: number,
    signature: Uint8Array | string,
    newPublicKey?: google_protobuf_any_pb.Any.AsObject,
    newDiversifier: string,
  }
}

export class Misbehaviour extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): void;

  hasSignatureOne(): boolean;
  clearSignatureOne(): void;
  getSignatureOne(): SignatureAndData | undefined;
  setSignatureOne(value?: SignatureAndData): void;

  hasSignatureTwo(): boolean;
  clearSignatureTwo(): void;
  getSignatureTwo(): SignatureAndData | undefined;
  setSignatureTwo(value?: SignatureAndData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Misbehaviour.AsObject;
  static toObject(includeInstance: boolean, msg: Misbehaviour): Misbehaviour.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Misbehaviour, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Misbehaviour;
  static deserializeBinaryFromReader(message: Misbehaviour, reader: jspb.BinaryReader): Misbehaviour;
}

export namespace Misbehaviour {
  export type AsObject = {
    sequence: number,
    signatureOne?: SignatureAndData.AsObject,
    signatureTwo?: SignatureAndData.AsObject,
  }
}

export class SignatureAndData extends jspb.Message {
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureAndData.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureAndData): SignatureAndData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignatureAndData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureAndData;
  static deserializeBinaryFromReader(message: SignatureAndData, reader: jspb.BinaryReader): SignatureAndData;
}

export namespace SignatureAndData {
  export type AsObject = {
    signature: Uint8Array | string,
    path: Uint8Array | string,
    data: Uint8Array | string,
    timestamp: number,
  }
}

export class TimestampedSignatureData extends jspb.Message {
  getSignatureData(): Uint8Array | string;
  getSignatureData_asU8(): Uint8Array;
  getSignatureData_asB64(): string;
  setSignatureData(value: Uint8Array | string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimestampedSignatureData.AsObject;
  static toObject(includeInstance: boolean, msg: TimestampedSignatureData): TimestampedSignatureData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimestampedSignatureData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimestampedSignatureData;
  static deserializeBinaryFromReader(message: TimestampedSignatureData, reader: jspb.BinaryReader): TimestampedSignatureData;
}

export namespace TimestampedSignatureData {
  export type AsObject = {
    signatureData: Uint8Array | string,
    timestamp: number,
  }
}

export class SignBytes extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getDiversifier(): string;
  setDiversifier(value: string): void;

  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignBytes.AsObject;
  static toObject(includeInstance: boolean, msg: SignBytes): SignBytes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignBytes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignBytes;
  static deserializeBinaryFromReader(message: SignBytes, reader: jspb.BinaryReader): SignBytes;
}

export namespace SignBytes {
  export type AsObject = {
    sequence: number,
    timestamp: number,
    diversifier: string,
    path: Uint8Array | string,
    data: Uint8Array | string,
  }
}

export class HeaderData extends jspb.Message {
  hasNewPubKey(): boolean;
  clearNewPubKey(): void;
  getNewPubKey(): google_protobuf_any_pb.Any | undefined;
  setNewPubKey(value?: google_protobuf_any_pb.Any): void;

  getNewDiversifier(): string;
  setNewDiversifier(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeaderData.AsObject;
  static toObject(includeInstance: boolean, msg: HeaderData): HeaderData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeaderData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeaderData;
  static deserializeBinaryFromReader(message: HeaderData, reader: jspb.BinaryReader): HeaderData;
}

export namespace HeaderData {
  export type AsObject = {
    newPubKey?: google_protobuf_any_pb.Any.AsObject,
    newDiversifier: string,
  }
}

