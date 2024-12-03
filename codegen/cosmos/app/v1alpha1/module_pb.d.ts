// package: cosmos.app.v1alpha1
// file: cosmos/app/v1alpha1/module.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class ModuleDescriptor extends jspb.Message {
  getGoImport(): string;
  setGoImport(value: string): void;

  clearUsePackageList(): void;
  getUsePackageList(): Array<PackageReference>;
  setUsePackageList(value: Array<PackageReference>): void;
  addUsePackage(value?: PackageReference, index?: number): PackageReference;

  clearCanMigrateFromList(): void;
  getCanMigrateFromList(): Array<MigrateFromInfo>;
  setCanMigrateFromList(value: Array<MigrateFromInfo>): void;
  addCanMigrateFrom(value?: MigrateFromInfo, index?: number): MigrateFromInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleDescriptor): ModuleDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModuleDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleDescriptor;
  static deserializeBinaryFromReader(message: ModuleDescriptor, reader: jspb.BinaryReader): ModuleDescriptor;
}

export namespace ModuleDescriptor {
  export type AsObject = {
    goImport: string,
    usePackageList: Array<PackageReference.AsObject>,
    canMigrateFromList: Array<MigrateFromInfo.AsObject>,
  }
}

export class PackageReference extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getRevision(): number;
  setRevision(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackageReference.AsObject;
  static toObject(includeInstance: boolean, msg: PackageReference): PackageReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PackageReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackageReference;
  static deserializeBinaryFromReader(message: PackageReference, reader: jspb.BinaryReader): PackageReference;
}

export namespace PackageReference {
  export type AsObject = {
    name: string,
    revision: number,
  }
}

export class MigrateFromInfo extends jspb.Message {
  getModule(): string;
  setModule(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MigrateFromInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MigrateFromInfo): MigrateFromInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MigrateFromInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MigrateFromInfo;
  static deserializeBinaryFromReader(message: MigrateFromInfo, reader: jspb.BinaryReader): MigrateFromInfo;
}

export namespace MigrateFromInfo {
  export type AsObject = {
    module: string,
  }
}

  export const module: jspb.ExtensionFieldInfo<ModuleDescriptor>;

