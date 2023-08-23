// package: cosmos.orm.v1
// file: cosmos/orm/v1/orm.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class TableDescriptor extends jspb.Message {
  hasPrimaryKey(): boolean;
  clearPrimaryKey(): void;
  getPrimaryKey(): PrimaryKeyDescriptor | undefined;
  setPrimaryKey(value?: PrimaryKeyDescriptor): void;

  clearIndexList(): void;
  getIndexList(): Array<SecondaryIndexDescriptor>;
  setIndexList(value: Array<SecondaryIndexDescriptor>): void;
  addIndex(value?: SecondaryIndexDescriptor, index?: number): SecondaryIndexDescriptor;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: TableDescriptor): TableDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TableDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableDescriptor;
  static deserializeBinaryFromReader(message: TableDescriptor, reader: jspb.BinaryReader): TableDescriptor;
}

export namespace TableDescriptor {
  export type AsObject = {
    primaryKey?: PrimaryKeyDescriptor.AsObject,
    indexList: Array<SecondaryIndexDescriptor.AsObject>,
    id: number,
  }
}

export class PrimaryKeyDescriptor extends jspb.Message {
  getFields(): string;
  setFields(value: string): void;

  getAutoIncrement(): boolean;
  setAutoIncrement(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrimaryKeyDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: PrimaryKeyDescriptor): PrimaryKeyDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrimaryKeyDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrimaryKeyDescriptor;
  static deserializeBinaryFromReader(message: PrimaryKeyDescriptor, reader: jspb.BinaryReader): PrimaryKeyDescriptor;
}

export namespace PrimaryKeyDescriptor {
  export type AsObject = {
    fields: string,
    autoIncrement: boolean,
  }
}

export class SecondaryIndexDescriptor extends jspb.Message {
  getFields(): string;
  setFields(value: string): void;

  getId(): number;
  setId(value: number): void;

  getUnique(): boolean;
  setUnique(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecondaryIndexDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: SecondaryIndexDescriptor): SecondaryIndexDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecondaryIndexDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecondaryIndexDescriptor;
  static deserializeBinaryFromReader(message: SecondaryIndexDescriptor, reader: jspb.BinaryReader): SecondaryIndexDescriptor;
}

export namespace SecondaryIndexDescriptor {
  export type AsObject = {
    fields: string,
    id: number,
    unique: boolean,
  }
}

export class SingletonDescriptor extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingletonDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: SingletonDescriptor): SingletonDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SingletonDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingletonDescriptor;
  static deserializeBinaryFromReader(message: SingletonDescriptor, reader: jspb.BinaryReader): SingletonDescriptor;
}

export namespace SingletonDescriptor {
  export type AsObject = {
    id: number,
  }
}

  export const table: jspb.ExtensionFieldInfo<TableDescriptor>;

  export const singleton: jspb.ExtensionFieldInfo<SingletonDescriptor>;

