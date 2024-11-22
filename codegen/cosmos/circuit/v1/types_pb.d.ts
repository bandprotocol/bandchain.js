// package: cosmos.circuit.v1
// file: cosmos/circuit/v1/types.proto

import * as jspb from "google-protobuf";

export class Permissions extends jspb.Message {
  getLevel(): Permissions.LevelMap[keyof Permissions.LevelMap];
  setLevel(value: Permissions.LevelMap[keyof Permissions.LevelMap]): void;

  clearLimitTypeUrlsList(): void;
  getLimitTypeUrlsList(): Array<string>;
  setLimitTypeUrlsList(value: Array<string>): void;
  addLimitTypeUrls(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permissions.AsObject;
  static toObject(includeInstance: boolean, msg: Permissions): Permissions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Permissions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permissions;
  static deserializeBinaryFromReader(message: Permissions, reader: jspb.BinaryReader): Permissions;
}

export namespace Permissions {
  export type AsObject = {
    level: Permissions.LevelMap[keyof Permissions.LevelMap],
    limitTypeUrlsList: Array<string>,
  }

  export interface LevelMap {
    LEVEL_NONE_UNSPECIFIED: 0;
    LEVEL_SOME_MSGS: 1;
    LEVEL_ALL_MSGS: 2;
    LEVEL_SUPER_ADMIN: 3;
  }

  export const Level: LevelMap;
}

export class GenesisAccountPermissions extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  hasPermissions(): boolean;
  clearPermissions(): void;
  getPermissions(): Permissions | undefined;
  setPermissions(value?: Permissions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisAccountPermissions.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisAccountPermissions): GenesisAccountPermissions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenesisAccountPermissions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisAccountPermissions;
  static deserializeBinaryFromReader(message: GenesisAccountPermissions, reader: jspb.BinaryReader): GenesisAccountPermissions;
}

export namespace GenesisAccountPermissions {
  export type AsObject = {
    address: string,
    permissions?: Permissions.AsObject,
  }
}

export class GenesisState extends jspb.Message {
  clearAccountPermissionsList(): void;
  getAccountPermissionsList(): Array<GenesisAccountPermissions>;
  setAccountPermissionsList(value: Array<GenesisAccountPermissions>): void;
  addAccountPermissions(value?: GenesisAccountPermissions, index?: number): GenesisAccountPermissions;

  clearDisabledTypeUrlsList(): void;
  getDisabledTypeUrlsList(): Array<string>;
  setDisabledTypeUrlsList(value: Array<string>): void;
  addDisabledTypeUrls(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    accountPermissionsList: Array<GenesisAccountPermissions.AsObject>,
    disabledTypeUrlsList: Array<string>,
  }
}

