// package: cosmos.orm.v1alpha1
// file: cosmos/orm/v1alpha1/schema.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class ModuleSchemaDescriptor extends jspb.Message {
  clearSchemaFileList(): void;
  getSchemaFileList(): Array<ModuleSchemaDescriptor.FileEntry>;
  setSchemaFileList(value: Array<ModuleSchemaDescriptor.FileEntry>): void;
  addSchemaFile(value?: ModuleSchemaDescriptor.FileEntry, index?: number): ModuleSchemaDescriptor.FileEntry;

  getPrefix(): Uint8Array | string;
  getPrefix_asU8(): Uint8Array;
  getPrefix_asB64(): string;
  setPrefix(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleSchemaDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleSchemaDescriptor): ModuleSchemaDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModuleSchemaDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleSchemaDescriptor;
  static deserializeBinaryFromReader(message: ModuleSchemaDescriptor, reader: jspb.BinaryReader): ModuleSchemaDescriptor;
}

export namespace ModuleSchemaDescriptor {
  export type AsObject = {
    schemaFileList: Array<ModuleSchemaDescriptor.FileEntry.AsObject>,
    prefix: Uint8Array | string,
  }

  export class FileEntry extends jspb.Message {
    getId(): number;
    setId(value: number): void;

    getProtoFileName(): string;
    setProtoFileName(value: string): void;

    getStorageType(): StorageTypeMap[keyof StorageTypeMap];
    setStorageType(value: StorageTypeMap[keyof StorageTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileEntry.AsObject;
    static toObject(includeInstance: boolean, msg: FileEntry): FileEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileEntry;
    static deserializeBinaryFromReader(message: FileEntry, reader: jspb.BinaryReader): FileEntry;
  }

  export namespace FileEntry {
    export type AsObject = {
      id: number,
      protoFileName: string,
      storageType: StorageTypeMap[keyof StorageTypeMap],
    }
  }
}

  export const moduleSchema: jspb.ExtensionFieldInfo<ModuleSchemaDescriptor>;

export interface StorageTypeMap {
  STORAGE_TYPE_DEFAULT_UNSPECIFIED: 0;
  STORAGE_TYPE_MEMORY: 1;
  STORAGE_TYPE_TRANSIENT: 2;
  STORAGE_TYPE_INDEX: 3;
  STORAGE_TYPE_COMMITMENT: 4;
}

export const StorageType: StorageTypeMap;

