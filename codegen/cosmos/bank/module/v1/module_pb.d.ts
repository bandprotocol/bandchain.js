// package: cosmos.bank.module.v1
// file: cosmos/bank/module/v1/module.proto

import * as jspb from "google-protobuf";
import * as cosmos_app_v1alpha1_module_pb from "../../../../cosmos/app/v1alpha1/module_pb";

export class Module extends jspb.Message {
  clearBlockedModuleAccountsOverrideList(): void;
  getBlockedModuleAccountsOverrideList(): Array<string>;
  setBlockedModuleAccountsOverrideList(value: Array<string>): void;
  addBlockedModuleAccountsOverride(value: string, index?: number): string;

  getAuthority(): string;
  setAuthority(value: string): void;

  clearRestrictionsOrderList(): void;
  getRestrictionsOrderList(): Array<string>;
  setRestrictionsOrderList(value: Array<string>): void;
  addRestrictionsOrder(value: string, index?: number): string;

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
    blockedModuleAccountsOverrideList: Array<string>,
    authority: string,
    restrictionsOrderList: Array<string>,
  }
}

