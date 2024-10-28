//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Level is the permission level. */
export enum Permissions_Level {
  /**
   * LEVEL_NONE_UNSPECIFIED - LEVEL_NONE_UNSPECIFIED indicates that the account will have no circuit
   * breaker permissions.
   */
  LEVEL_NONE_UNSPECIFIED = 0,
  /**
   * LEVEL_SOME_MSGS - LEVEL_SOME_MSGS indicates that the account will have permission to
   * trip or reset the circuit breaker for some Msg type URLs. If this level
   * is chosen, a non-empty list of Msg type URLs must be provided in
   * limit_type_urls.
   */
  LEVEL_SOME_MSGS = 1,
  /**
   * LEVEL_ALL_MSGS - LEVEL_ALL_MSGS indicates that the account can trip or reset the circuit
   * breaker for Msg's of all type URLs.
   */
  LEVEL_ALL_MSGS = 2,
  /**
   * LEVEL_SUPER_ADMIN - LEVEL_SUPER_ADMIN indicates that the account can take all circuit breaker
   * actions and can grant permissions to other accounts.
   */
  LEVEL_SUPER_ADMIN = 3,
  UNRECOGNIZED = -1,
}
export const Permissions_LevelSDKType = Permissions_Level;
export const Permissions_LevelAmino = Permissions_Level;
export function permissions_LevelFromJSON(object: any): Permissions_Level {
  switch (object) {
    case 0:
    case "LEVEL_NONE_UNSPECIFIED":
      return Permissions_Level.LEVEL_NONE_UNSPECIFIED;
    case 1:
    case "LEVEL_SOME_MSGS":
      return Permissions_Level.LEVEL_SOME_MSGS;
    case 2:
    case "LEVEL_ALL_MSGS":
      return Permissions_Level.LEVEL_ALL_MSGS;
    case 3:
    case "LEVEL_SUPER_ADMIN":
      return Permissions_Level.LEVEL_SUPER_ADMIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Permissions_Level.UNRECOGNIZED;
  }
}
export function permissions_LevelToJSON(object: Permissions_Level): string {
  switch (object) {
    case Permissions_Level.LEVEL_NONE_UNSPECIFIED:
      return "LEVEL_NONE_UNSPECIFIED";
    case Permissions_Level.LEVEL_SOME_MSGS:
      return "LEVEL_SOME_MSGS";
    case Permissions_Level.LEVEL_ALL_MSGS:
      return "LEVEL_ALL_MSGS";
    case Permissions_Level.LEVEL_SUPER_ADMIN:
      return "LEVEL_SUPER_ADMIN";
    case Permissions_Level.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Permissions are the permissions that an account has to trip
 * or reset the circuit breaker.
 */
export interface Permissions {
  /** level is the level of permissions granted to this account. */
  level: Permissions_Level;
  /**
   * limit_type_urls is used with LEVEL_SOME_MSGS to limit the lists of Msg type
   * URLs that the account can trip. It is an error to use limit_type_urls with
   * a level other than LEVEL_SOME_MSGS.
   */
  limitTypeUrls: string[];
}
export interface PermissionsProtoMsg {
  typeUrl: "/cosmos.circuit.v1.Permissions";
  value: Uint8Array;
}
/**
 * Permissions are the permissions that an account has to trip
 * or reset the circuit breaker.
 */
export interface PermissionsAmino {
  /** level is the level of permissions granted to this account. */
  level?: Permissions_Level;
  /**
   * limit_type_urls is used with LEVEL_SOME_MSGS to limit the lists of Msg type
   * URLs that the account can trip. It is an error to use limit_type_urls with
   * a level other than LEVEL_SOME_MSGS.
   */
  limit_type_urls?: string[];
}
export interface PermissionsAminoMsg {
  type: "cosmos-sdk/Permissions";
  value: PermissionsAmino;
}
/**
 * Permissions are the permissions that an account has to trip
 * or reset the circuit breaker.
 */
export interface PermissionsSDKType {
  level: Permissions_Level;
  limit_type_urls: string[];
}
/** GenesisAccountPermissions is the account permissions for the circuit breaker in genesis */
export interface GenesisAccountPermissions {
  address: string;
  permissions?: Permissions;
}
export interface GenesisAccountPermissionsProtoMsg {
  typeUrl: "/cosmos.circuit.v1.GenesisAccountPermissions";
  value: Uint8Array;
}
/** GenesisAccountPermissions is the account permissions for the circuit breaker in genesis */
export interface GenesisAccountPermissionsAmino {
  address?: string;
  permissions?: PermissionsAmino;
}
export interface GenesisAccountPermissionsAminoMsg {
  type: "cosmos-sdk/GenesisAccountPermissions";
  value: GenesisAccountPermissionsAmino;
}
/** GenesisAccountPermissions is the account permissions for the circuit breaker in genesis */
export interface GenesisAccountPermissionsSDKType {
  address: string;
  permissions?: PermissionsSDKType;
}
/** GenesisState is the state that must be provided at genesis. */
export interface GenesisState {
  accountPermissions: GenesisAccountPermissions[];
  disabledTypeUrls: string[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.circuit.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState is the state that must be provided at genesis. */
export interface GenesisStateAmino {
  account_permissions?: GenesisAccountPermissionsAmino[];
  disabled_type_urls?: string[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState is the state that must be provided at genesis. */
export interface GenesisStateSDKType {
  account_permissions: GenesisAccountPermissionsSDKType[];
  disabled_type_urls: string[];
}
function createBasePermissions(): Permissions {
  return {
    level: 0,
    limitTypeUrls: []
  };
}
export const Permissions = {
  typeUrl: "/cosmos.circuit.v1.Permissions",
  encode(message: Permissions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.level !== 0) {
      writer.uint32(8).int32(message.level);
    }
    for (const v of message.limitTypeUrls) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Permissions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.level = reader.int32() as any;
          break;
        case 2:
          message.limitTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Permissions>): Permissions {
    const message = createBasePermissions();
    message.level = object.level ?? 0;
    message.limitTypeUrls = object.limitTypeUrls?.map(e => e) || [];
    return message;
  },
  fromAmino(object: PermissionsAmino): Permissions {
    const message = createBasePermissions();
    if (object.level !== undefined && object.level !== null) {
      message.level = object.level;
    }
    message.limitTypeUrls = object.limit_type_urls?.map(e => e) || [];
    return message;
  },
  toAmino(message: Permissions): PermissionsAmino {
    const obj: any = {};
    obj.level = message.level === 0 ? undefined : message.level;
    if (message.limitTypeUrls) {
      obj.limit_type_urls = message.limitTypeUrls.map(e => e);
    } else {
      obj.limit_type_urls = message.limitTypeUrls;
    }
    return obj;
  },
  fromAminoMsg(object: PermissionsAminoMsg): Permissions {
    return Permissions.fromAmino(object.value);
  },
  toAminoMsg(message: Permissions): PermissionsAminoMsg {
    return {
      type: "cosmos-sdk/Permissions",
      value: Permissions.toAmino(message)
    };
  },
  fromProtoMsg(message: PermissionsProtoMsg): Permissions {
    return Permissions.decode(message.value);
  },
  toProto(message: Permissions): Uint8Array {
    return Permissions.encode(message).finish();
  },
  toProtoMsg(message: Permissions): PermissionsProtoMsg {
    return {
      typeUrl: "/cosmos.circuit.v1.Permissions",
      value: Permissions.encode(message).finish()
    };
  }
};
function createBaseGenesisAccountPermissions(): GenesisAccountPermissions {
  return {
    address: "",
    permissions: undefined
  };
}
export const GenesisAccountPermissions = {
  typeUrl: "/cosmos.circuit.v1.GenesisAccountPermissions",
  encode(message: GenesisAccountPermissions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.permissions !== undefined) {
      Permissions.encode(message.permissions, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisAccountPermissions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisAccountPermissions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.permissions = Permissions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisAccountPermissions>): GenesisAccountPermissions {
    const message = createBaseGenesisAccountPermissions();
    message.address = object.address ?? "";
    message.permissions = object.permissions !== undefined && object.permissions !== null ? Permissions.fromPartial(object.permissions) : undefined;
    return message;
  },
  fromAmino(object: GenesisAccountPermissionsAmino): GenesisAccountPermissions {
    const message = createBaseGenesisAccountPermissions();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.permissions !== undefined && object.permissions !== null) {
      message.permissions = Permissions.fromAmino(object.permissions);
    }
    return message;
  },
  toAmino(message: GenesisAccountPermissions): GenesisAccountPermissionsAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.permissions = message.permissions ? Permissions.toAmino(message.permissions) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisAccountPermissionsAminoMsg): GenesisAccountPermissions {
    return GenesisAccountPermissions.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisAccountPermissions): GenesisAccountPermissionsAminoMsg {
    return {
      type: "cosmos-sdk/GenesisAccountPermissions",
      value: GenesisAccountPermissions.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisAccountPermissionsProtoMsg): GenesisAccountPermissions {
    return GenesisAccountPermissions.decode(message.value);
  },
  toProto(message: GenesisAccountPermissions): Uint8Array {
    return GenesisAccountPermissions.encode(message).finish();
  },
  toProtoMsg(message: GenesisAccountPermissions): GenesisAccountPermissionsProtoMsg {
    return {
      typeUrl: "/cosmos.circuit.v1.GenesisAccountPermissions",
      value: GenesisAccountPermissions.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    accountPermissions: [],
    disabledTypeUrls: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.circuit.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accountPermissions) {
      GenesisAccountPermissions.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.disabledTypeUrls) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountPermissions.push(GenesisAccountPermissions.decode(reader, reader.uint32()));
          break;
        case 2:
          message.disabledTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.accountPermissions = object.accountPermissions?.map(e => GenesisAccountPermissions.fromPartial(e)) || [];
    message.disabledTypeUrls = object.disabledTypeUrls?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.accountPermissions = object.account_permissions?.map(e => GenesisAccountPermissions.fromAmino(e)) || [];
    message.disabledTypeUrls = object.disabled_type_urls?.map(e => e) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.accountPermissions) {
      obj.account_permissions = message.accountPermissions.map(e => e ? GenesisAccountPermissions.toAmino(e) : undefined);
    } else {
      obj.account_permissions = message.accountPermissions;
    }
    if (message.disabledTypeUrls) {
      obj.disabled_type_urls = message.disabledTypeUrls.map(e => e);
    } else {
      obj.disabled_type_urls = message.disabledTypeUrls;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.circuit.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};