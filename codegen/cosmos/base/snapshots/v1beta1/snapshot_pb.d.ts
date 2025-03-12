// package: cosmos.base.snapshots.v1beta1
// file: cosmos/base/snapshots/v1beta1/snapshot.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";

export class Snapshot extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  getFormat(): number;
  setFormat(value: number): void;

  getChunks(): number;
  setChunks(value: number): void;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Snapshot.AsObject;
  static toObject(includeInstance: boolean, msg: Snapshot): Snapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Snapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Snapshot;
  static deserializeBinaryFromReader(message: Snapshot, reader: jspb.BinaryReader): Snapshot;
}

export namespace Snapshot {
  export type AsObject = {
    height: number,
    format: number,
    chunks: number,
    hash: Uint8Array | string,
    metadata?: Metadata.AsObject,
  }
}

export class Metadata extends jspb.Message {
  clearChunkHashesList(): void;
  getChunkHashesList(): Array<Uint8Array | string>;
  getChunkHashesList_asU8(): Array<Uint8Array>;
  getChunkHashesList_asB64(): Array<string>;
  setChunkHashesList(value: Array<Uint8Array | string>): void;
  addChunkHashes(value: Uint8Array | string, index?: number): Uint8Array | string;

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
    chunkHashesList: Array<Uint8Array | string>,
  }
}

export class SnapshotItem extends jspb.Message {
  hasStore(): boolean;
  clearStore(): void;
  getStore(): SnapshotStoreItem | undefined;
  setStore(value?: SnapshotStoreItem): void;

  hasIavl(): boolean;
  clearIavl(): void;
  getIavl(): SnapshotIAVLItem | undefined;
  setIavl(value?: SnapshotIAVLItem): void;

  hasExtension$(): boolean;
  clearExtension$(): void;
  getExtension$(): SnapshotExtensionMeta | undefined;
  setExtension$(value?: SnapshotExtensionMeta): void;

  hasExtensionPayload(): boolean;
  clearExtensionPayload(): void;
  getExtensionPayload(): SnapshotExtensionPayload | undefined;
  setExtensionPayload(value?: SnapshotExtensionPayload): void;

  hasKv(): boolean;
  clearKv(): void;
  getKv(): SnapshotKVItem | undefined;
  setKv(value?: SnapshotKVItem): void;

  hasSchema(): boolean;
  clearSchema(): void;
  getSchema(): SnapshotSchema | undefined;
  setSchema(value?: SnapshotSchema): void;

  getItemCase(): SnapshotItem.ItemCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotItem.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotItem): SnapshotItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnapshotItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotItem;
  static deserializeBinaryFromReader(message: SnapshotItem, reader: jspb.BinaryReader): SnapshotItem;
}

export namespace SnapshotItem {
  export type AsObject = {
    store?: SnapshotStoreItem.AsObject,
    iavl?: SnapshotIAVLItem.AsObject,
    extension?: SnapshotExtensionMeta.AsObject,
    extensionPayload?: SnapshotExtensionPayload.AsObject,
    kv?: SnapshotKVItem.AsObject,
    schema?: SnapshotSchema.AsObject,
  }

  export enum ItemCase {
    ITEM_NOT_SET = 0,
    STORE = 1,
    IAVL = 2,
    EXTENSION = 3,
    EXTENSION_PAYLOAD = 4,
    KV = 5,
    SCHEMA = 6,
  }
}

export class SnapshotStoreItem extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotStoreItem.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotStoreItem): SnapshotStoreItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnapshotStoreItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotStoreItem;
  static deserializeBinaryFromReader(message: SnapshotStoreItem, reader: jspb.BinaryReader): SnapshotStoreItem;
}

export namespace SnapshotStoreItem {
  export type AsObject = {
    name: string,
  }
}

export class SnapshotIAVLItem extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotIAVLItem.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotIAVLItem): SnapshotIAVLItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnapshotIAVLItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotIAVLItem;
  static deserializeBinaryFromReader(message: SnapshotIAVLItem, reader: jspb.BinaryReader): SnapshotIAVLItem;
}

export namespace SnapshotIAVLItem {
  export type AsObject = {
    key: Uint8Array | string,
    value: Uint8Array | string,
    version: number,
    height: number,
  }
}

export class SnapshotExtensionMeta extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFormat(): number;
  setFormat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotExtensionMeta.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotExtensionMeta): SnapshotExtensionMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnapshotExtensionMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotExtensionMeta;
  static deserializeBinaryFromReader(message: SnapshotExtensionMeta, reader: jspb.BinaryReader): SnapshotExtensionMeta;
}

export namespace SnapshotExtensionMeta {
  export type AsObject = {
    name: string,
    format: number,
  }
}

export class SnapshotExtensionPayload extends jspb.Message {
  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotExtensionPayload.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotExtensionPayload): SnapshotExtensionPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnapshotExtensionPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotExtensionPayload;
  static deserializeBinaryFromReader(message: SnapshotExtensionPayload, reader: jspb.BinaryReader): SnapshotExtensionPayload;
}

export namespace SnapshotExtensionPayload {
  export type AsObject = {
    payload: Uint8Array | string,
  }
}

export class SnapshotKVItem extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotKVItem.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotKVItem): SnapshotKVItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnapshotKVItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotKVItem;
  static deserializeBinaryFromReader(message: SnapshotKVItem, reader: jspb.BinaryReader): SnapshotKVItem;
}

export namespace SnapshotKVItem {
  export type AsObject = {
    key: Uint8Array | string,
    value: Uint8Array | string,
  }
}

export class SnapshotSchema extends jspb.Message {
  clearKeysList(): void;
  getKeysList(): Array<Uint8Array | string>;
  getKeysList_asU8(): Array<Uint8Array>;
  getKeysList_asB64(): Array<string>;
  setKeysList(value: Array<Uint8Array | string>): void;
  addKeys(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotSchema.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotSchema): SnapshotSchema.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnapshotSchema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotSchema;
  static deserializeBinaryFromReader(message: SnapshotSchema, reader: jspb.BinaryReader): SnapshotSchema;
}

export namespace SnapshotSchema {
  export type AsObject = {
    keysList: Array<Uint8Array | string>,
  }
}

