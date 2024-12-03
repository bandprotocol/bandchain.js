// package: cosmos.app.runtime.v1alpha1
// file: cosmos/app/runtime/v1alpha1/module.proto

import * as jspb from "google-protobuf";
import * as cosmos_app_v1alpha1_module_pb from "../../../../cosmos/app/v1alpha1/module_pb";

export class Module extends jspb.Message {
  getAppName(): string;
  setAppName(value: string): void;

  clearBeginBlockersList(): void;
  getBeginBlockersList(): Array<string>;
  setBeginBlockersList(value: Array<string>): void;
  addBeginBlockers(value: string, index?: number): string;

  clearEndBlockersList(): void;
  getEndBlockersList(): Array<string>;
  setEndBlockersList(value: Array<string>): void;
  addEndBlockers(value: string, index?: number): string;

  clearInitGenesisList(): void;
  getInitGenesisList(): Array<string>;
  setInitGenesisList(value: Array<string>): void;
  addInitGenesis(value: string, index?: number): string;

  clearExportGenesisList(): void;
  getExportGenesisList(): Array<string>;
  setExportGenesisList(value: Array<string>): void;
  addExportGenesis(value: string, index?: number): string;

  clearOverrideStoreKeysList(): void;
  getOverrideStoreKeysList(): Array<StoreKeyConfig>;
  setOverrideStoreKeysList(value: Array<StoreKeyConfig>): void;
  addOverrideStoreKeys(value?: StoreKeyConfig, index?: number): StoreKeyConfig;

  clearOrderMigrationsList(): void;
  getOrderMigrationsList(): Array<string>;
  setOrderMigrationsList(value: Array<string>): void;
  addOrderMigrations(value: string, index?: number): string;

  clearPrecommitersList(): void;
  getPrecommitersList(): Array<string>;
  setPrecommitersList(value: Array<string>): void;
  addPrecommiters(value: string, index?: number): string;

  clearPrepareCheckStatersList(): void;
  getPrepareCheckStatersList(): Array<string>;
  setPrepareCheckStatersList(value: Array<string>): void;
  addPrepareCheckStaters(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Module.AsObject;
  static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Module;
  static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
}

export namespace Module {
  export type AsObject = {
    appName: string,
    beginBlockersList: Array<string>,
    endBlockersList: Array<string>,
    initGenesisList: Array<string>,
    exportGenesisList: Array<string>,
    overrideStoreKeysList: Array<StoreKeyConfig.AsObject>,
    orderMigrationsList: Array<string>,
    precommitersList: Array<string>,
    prepareCheckStatersList: Array<string>,
  }
}

export class StoreKeyConfig extends jspb.Message {
  getModuleName(): string;
  setModuleName(value: string): void;

  getKvStoreKey(): string;
  setKvStoreKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreKeyConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StoreKeyConfig): StoreKeyConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreKeyConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreKeyConfig;
  static deserializeBinaryFromReader(message: StoreKeyConfig, reader: jspb.BinaryReader): StoreKeyConfig;
}

export namespace StoreKeyConfig {
  export type AsObject = {
    moduleName: string,
    kvStoreKey: string,
  }
}

