// package: cosmos.crypto.keyring.v1
// file: cosmos/crypto/keyring/v1/record.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as cosmos_crypto_hd_v1_hd_pb from "../../../../cosmos/crypto/hd/v1/hd_pb";

export class Record extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasPubKey(): boolean;
  clearPubKey(): void;
  getPubKey(): google_protobuf_any_pb.Any | undefined;
  setPubKey(value?: google_protobuf_any_pb.Any): void;

  hasLocal(): boolean;
  clearLocal(): void;
  getLocal(): Record.Local | undefined;
  setLocal(value?: Record.Local): void;

  hasLedger(): boolean;
  clearLedger(): void;
  getLedger(): Record.Ledger | undefined;
  setLedger(value?: Record.Ledger): void;

  hasMulti(): boolean;
  clearMulti(): void;
  getMulti(): Record.Multi | undefined;
  setMulti(value?: Record.Multi): void;

  hasOffline(): boolean;
  clearOffline(): void;
  getOffline(): Record.Offline | undefined;
  setOffline(value?: Record.Offline): void;

  getItemCase(): Record.ItemCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Record.AsObject;
  static toObject(includeInstance: boolean, msg: Record): Record.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Record, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Record;
  static deserializeBinaryFromReader(message: Record, reader: jspb.BinaryReader): Record;
}

export namespace Record {
  export type AsObject = {
    name: string,
    pubKey?: google_protobuf_any_pb.Any.AsObject,
    local?: Record.Local.AsObject,
    ledger?: Record.Ledger.AsObject,
    multi?: Record.Multi.AsObject,
    offline?: Record.Offline.AsObject,
  }

  export class Local extends jspb.Message {
    hasPrivKey(): boolean;
    clearPrivKey(): void;
    getPrivKey(): google_protobuf_any_pb.Any | undefined;
    setPrivKey(value?: google_protobuf_any_pb.Any): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Local.AsObject;
    static toObject(includeInstance: boolean, msg: Local): Local.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Local, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Local;
    static deserializeBinaryFromReader(message: Local, reader: jspb.BinaryReader): Local;
  }

  export namespace Local {
    export type AsObject = {
      privKey?: google_protobuf_any_pb.Any.AsObject,
    }
  }

  export class Ledger extends jspb.Message {
    hasPath(): boolean;
    clearPath(): void;
    getPath(): cosmos_crypto_hd_v1_hd_pb.BIP44Params | undefined;
    setPath(value?: cosmos_crypto_hd_v1_hd_pb.BIP44Params): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ledger.AsObject;
    static toObject(includeInstance: boolean, msg: Ledger): Ledger.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ledger, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ledger;
    static deserializeBinaryFromReader(message: Ledger, reader: jspb.BinaryReader): Ledger;
  }

  export namespace Ledger {
    export type AsObject = {
      path?: cosmos_crypto_hd_v1_hd_pb.BIP44Params.AsObject,
    }
  }

  export class Multi extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Multi.AsObject;
    static toObject(includeInstance: boolean, msg: Multi): Multi.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Multi, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Multi;
    static deserializeBinaryFromReader(message: Multi, reader: jspb.BinaryReader): Multi;
  }

  export namespace Multi {
    export type AsObject = {
    }
  }

  export class Offline extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Offline.AsObject;
    static toObject(includeInstance: boolean, msg: Offline): Offline.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Offline, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Offline;
    static deserializeBinaryFromReader(message: Offline, reader: jspb.BinaryReader): Offline;
  }

  export namespace Offline {
    export type AsObject = {
    }
  }

  export enum ItemCase {
    ITEM_NOT_SET = 0,
    LOCAL = 3,
    LEDGER = 4,
    MULTI = 5,
    OFFLINE = 6,
  }
}

