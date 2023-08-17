// package: cosmos.autocli.v1
// file: cosmos/autocli/v1/options.proto

import * as jspb from "google-protobuf";

export class ModuleOptions extends jspb.Message {
  hasTx(): boolean;
  clearTx(): void;
  getTx(): ServiceCommandDescriptor | undefined;
  setTx(value?: ServiceCommandDescriptor): void;

  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): ServiceCommandDescriptor | undefined;
  setQuery(value?: ServiceCommandDescriptor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleOptions): ModuleOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModuleOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleOptions;
  static deserializeBinaryFromReader(message: ModuleOptions, reader: jspb.BinaryReader): ModuleOptions;
}

export namespace ModuleOptions {
  export type AsObject = {
    tx?: ServiceCommandDescriptor.AsObject,
    query?: ServiceCommandDescriptor.AsObject,
  }
}

export class ServiceCommandDescriptor extends jspb.Message {
  getService(): string;
  setService(value: string): void;

  clearRpcCommandOptionsList(): void;
  getRpcCommandOptionsList(): Array<RpcCommandOptions>;
  setRpcCommandOptionsList(value: Array<RpcCommandOptions>): void;
  addRpcCommandOptions(value?: RpcCommandOptions, index?: number): RpcCommandOptions;

  getSubCommandsMap(): jspb.Map<string, ServiceCommandDescriptor>;
  clearSubCommandsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceCommandDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceCommandDescriptor): ServiceCommandDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceCommandDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceCommandDescriptor;
  static deserializeBinaryFromReader(message: ServiceCommandDescriptor, reader: jspb.BinaryReader): ServiceCommandDescriptor;
}

export namespace ServiceCommandDescriptor {
  export type AsObject = {
    service: string,
    rpcCommandOptionsList: Array<RpcCommandOptions.AsObject>,
    subCommandsMap: Array<[string, ServiceCommandDescriptor.AsObject]>,
  }
}

export class RpcCommandOptions extends jspb.Message {
  getRpcMethod(): string;
  setRpcMethod(value: string): void;

  getUse(): string;
  setUse(value: string): void;

  getLong(): string;
  setLong(value: string): void;

  getShort(): string;
  setShort(value: string): void;

  getExample(): string;
  setExample(value: string): void;

  clearAliasList(): void;
  getAliasList(): Array<string>;
  setAliasList(value: Array<string>): void;
  addAlias(value: string, index?: number): string;

  clearSuggestForList(): void;
  getSuggestForList(): Array<string>;
  setSuggestForList(value: Array<string>): void;
  addSuggestFor(value: string, index?: number): string;

  getDeprecated(): string;
  setDeprecated(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getFlagOptionsMap(): jspb.Map<string, FlagOptions>;
  clearFlagOptionsMap(): void;
  clearPositionalArgsList(): void;
  getPositionalArgsList(): Array<PositionalArgDescriptor>;
  setPositionalArgsList(value: Array<PositionalArgDescriptor>): void;
  addPositionalArgs(value?: PositionalArgDescriptor, index?: number): PositionalArgDescriptor;

  getSkip(): boolean;
  setSkip(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RpcCommandOptions.AsObject;
  static toObject(includeInstance: boolean, msg: RpcCommandOptions): RpcCommandOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RpcCommandOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RpcCommandOptions;
  static deserializeBinaryFromReader(message: RpcCommandOptions, reader: jspb.BinaryReader): RpcCommandOptions;
}

export namespace RpcCommandOptions {
  export type AsObject = {
    rpcMethod: string,
    use: string,
    pb_long: string,
    pb_short: string,
    example: string,
    aliasList: Array<string>,
    suggestForList: Array<string>,
    deprecated: string,
    version: string,
    flagOptionsMap: Array<[string, FlagOptions.AsObject]>,
    positionalArgsList: Array<PositionalArgDescriptor.AsObject>,
    skip: boolean,
  }
}

export class FlagOptions extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getShorthand(): string;
  setShorthand(value: string): void;

  getUsage(): string;
  setUsage(value: string): void;

  getDefaultValue(): string;
  setDefaultValue(value: string): void;

  getNoOptDefaultValue(): string;
  setNoOptDefaultValue(value: string): void;

  getDeprecated(): string;
  setDeprecated(value: string): void;

  getShorthandDeprecated(): string;
  setShorthandDeprecated(value: string): void;

  getHidden(): boolean;
  setHidden(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlagOptions.AsObject;
  static toObject(includeInstance: boolean, msg: FlagOptions): FlagOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlagOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlagOptions;
  static deserializeBinaryFromReader(message: FlagOptions, reader: jspb.BinaryReader): FlagOptions;
}

export namespace FlagOptions {
  export type AsObject = {
    name: string,
    shorthand: string,
    usage: string,
    defaultValue: string,
    noOptDefaultValue: string,
    deprecated: string,
    shorthandDeprecated: string,
    hidden: boolean,
  }
}

export class PositionalArgDescriptor extends jspb.Message {
  getProtoField(): string;
  setProtoField(value: string): void;

  getVarargs(): boolean;
  setVarargs(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionalArgDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: PositionalArgDescriptor): PositionalArgDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionalArgDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionalArgDescriptor;
  static deserializeBinaryFromReader(message: PositionalArgDescriptor, reader: jspb.BinaryReader): PositionalArgDescriptor;
}

export namespace PositionalArgDescriptor {
  export type AsObject = {
    protoField: string,
    varargs: boolean,
  }
}

