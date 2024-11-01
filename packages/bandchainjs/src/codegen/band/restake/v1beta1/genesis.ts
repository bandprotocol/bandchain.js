//@ts-nocheck
import { Vault, VaultAmino, VaultSDKType, Lock, LockAmino, LockSDKType, Stake, StakeAmino, StakeSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState represents the initial state of the blockchain. */
export interface GenesisState {
  /** params is all parameters of the module. */
  params: Params;
  /** vaults is a list of vaults in the module. */
  vaults: Vault[];
  /** locks is a list of locks in the module. */
  locks: Lock[];
  /** stakes is a list of stakes in the module. */
  stakes: Stake[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/band.restake.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState represents the initial state of the blockchain. */
export interface GenesisStateAmino {
  /** params is all parameters of the module. */
  params?: ParamsAmino;
  /** vaults is a list of vaults in the module. */
  vaults?: VaultAmino[];
  /** locks is a list of locks in the module. */
  locks?: LockAmino[];
  /** stakes is a list of stakes in the module. */
  stakes?: StakeAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/band.restake.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState represents the initial state of the blockchain. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  vaults: VaultSDKType[];
  locks: LockSDKType[];
  stakes: StakeSDKType[];
}
/** Params is the data structure that keeps the parameters. */
export interface Params {
  /** allowed_denoms is a list of denoms that the module allows to stake to get power. */
  allowedDenoms: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/band.restake.v1beta1.Params";
  value: Uint8Array;
}
/** Params is the data structure that keeps the parameters. */
export interface ParamsAmino {
  /** allowed_denoms is a list of denoms that the module allows to stake to get power. */
  allowed_denoms?: string[];
}
export interface ParamsAminoMsg {
  type: "/band.restake.v1beta1.Params";
  value: ParamsAmino;
}
/** Params is the data structure that keeps the parameters. */
export interface ParamsSDKType {
  allowed_denoms: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    vaults: [],
    locks: [],
    stakes: []
  };
}
export const GenesisState = {
  typeUrl: "/band.restake.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.vaults) {
      Vault.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.locks) {
      Lock.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.stakes) {
      Stake.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.vaults.push(Vault.decode(reader, reader.uint32()));
          break;
        case 3:
          message.locks.push(Lock.decode(reader, reader.uint32()));
          break;
        case 4:
          message.stakes.push(Stake.decode(reader, reader.uint32()));
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.vaults = object.vaults?.map(e => Vault.fromPartial(e)) || [];
    message.locks = object.locks?.map(e => Lock.fromPartial(e)) || [];
    message.stakes = object.stakes?.map(e => Stake.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.vaults = object.vaults?.map(e => Vault.fromAmino(e)) || [];
    message.locks = object.locks?.map(e => Lock.fromAmino(e)) || [];
    message.stakes = object.stakes?.map(e => Stake.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.vaults) {
      obj.vaults = message.vaults.map(e => e ? Vault.toAmino(e) : undefined);
    } else {
      obj.vaults = message.vaults;
    }
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? Lock.toAmino(e) : undefined);
    } else {
      obj.locks = message.locks;
    }
    if (message.stakes) {
      obj.stakes = message.stakes.map(e => e ? Stake.toAmino(e) : undefined);
    } else {
      obj.stakes = message.stakes;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    allowedDenoms: []
  };
}
export const Params = {
  typeUrl: "/band.restake.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedDenoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedDenoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.allowedDenoms = object.allowedDenoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.allowedDenoms = object.allowed_denoms?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.allowedDenoms) {
      obj.allowed_denoms = message.allowedDenoms.map(e => e);
    } else {
      obj.allowed_denoms = message.allowedDenoms;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};