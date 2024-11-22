// package: cosmos.staking.module.v1
// file: cosmos/staking/module/v1/module.proto

import * as jspb from "google-protobuf";
import * as cosmos_app_v1alpha1_module_pb from "../../../../cosmos/app/v1alpha1/module_pb";

export class Module extends jspb.Message {
  clearHooksOrderList(): void;
  getHooksOrderList(): Array<string>;
  setHooksOrderList(value: Array<string>): void;
  addHooksOrder(value: string, index?: number): string;

  getAuthority(): string;
  setAuthority(value: string): void;

  getBech32PrefixValidator(): string;
  setBech32PrefixValidator(value: string): void;

  getBech32PrefixConsensus(): string;
  setBech32PrefixConsensus(value: string): void;

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
    hooksOrderList: Array<string>,
    authority: string,
    bech32PrefixValidator: string,
    bech32PrefixConsensus: string,
  }
}

