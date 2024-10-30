//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Vault is used for tracking the status of the vaults. */
export interface Vault {
  /** key is the key of the vault. */
  key: string;
  /** is_active is the status of the vault */
  isActive: boolean;
}
export interface VaultProtoMsg {
  typeUrl: "/band.restake.v1beta1.Vault";
  value: Uint8Array;
}
/** Vault is used for tracking the status of the vaults. */
export interface VaultAmino {
  /** key is the key of the vault. */
  key?: string;
  /** is_active is the status of the vault */
  is_active?: boolean;
}
export interface VaultAminoMsg {
  type: "/band.restake.v1beta1.Vault";
  value: VaultAmino;
}
/** Vault is used for tracking the status of the vaults. */
export interface VaultSDKType {
  key: string;
  is_active: boolean;
}
/** Lock is used to store lock information of each user on each vault. */
export interface Lock {
  /** staker_address is the owner's address of the staker. */
  stakerAddress: string;
  /** key is the key of the vault that this lock is locked to. */
  key: string;
  /** power is the number of locked power. */
  power: string;
}
export interface LockProtoMsg {
  typeUrl: "/band.restake.v1beta1.Lock";
  value: Uint8Array;
}
/** Lock is used to store lock information of each user on each vault. */
export interface LockAmino {
  /** staker_address is the owner's address of the staker. */
  staker_address?: string;
  /** key is the key of the vault that this lock is locked to. */
  key?: string;
  /** power is the number of locked power. */
  power?: string;
}
export interface LockAminoMsg {
  type: "/band.restake.v1beta1.Lock";
  value: LockAmino;
}
/** Lock is used to store lock information of each user on each vault. */
export interface LockSDKType {
  staker_address: string;
  key: string;
  power: string;
}
/** Stake is used to store staked coins of an address. */
export interface Stake {
  /** staker_address is the address that this stake belongs to. */
  stakerAddress: string;
  /** coins are the coins that the address has staked. */
  coins: Coin[];
}
export interface StakeProtoMsg {
  typeUrl: "/band.restake.v1beta1.Stake";
  value: Uint8Array;
}
/** Stake is used to store staked coins of an address. */
export interface StakeAmino {
  /** staker_address is the address that this stake belongs to. */
  staker_address?: string;
  /** coins are the coins that the address has staked. */
  coins: CoinAmino[];
}
export interface StakeAminoMsg {
  type: "/band.restake.v1beta1.Stake";
  value: StakeAmino;
}
/** Stake is used to store staked coins of an address. */
export interface StakeSDKType {
  staker_address: string;
  coins: CoinSDKType[];
}
/**
 * LockResponse is used as response of the query to show the power
 * that is locked by the vault for the user.
 */
export interface LockResponse {
  /** key is the key of the vault that this lock belongs to. */
  key: string;
  /** power is the number of locked power. */
  power: string;
}
export interface LockResponseProtoMsg {
  typeUrl: "/band.restake.v1beta1.LockResponse";
  value: Uint8Array;
}
/**
 * LockResponse is used as response of the query to show the power
 * that is locked by the vault for the user.
 */
export interface LockResponseAmino {
  /** key is the key of the vault that this lock belongs to. */
  key?: string;
  /** power is the number of locked power. */
  power?: string;
}
export interface LockResponseAminoMsg {
  type: "/band.restake.v1beta1.LockResponse";
  value: LockResponseAmino;
}
/**
 * LockResponse is used as response of the query to show the power
 * that is locked by the vault for the user.
 */
export interface LockResponseSDKType {
  key: string;
  power: string;
}
function createBaseVault(): Vault {
  return {
    key: "",
    isActive: false
  };
}
export const Vault = {
  typeUrl: "/band.restake.v1beta1.Vault",
  encode(message: Vault, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.isActive === true) {
      writer.uint32(16).bool(message.isActive);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Vault {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.isActive = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Vault>): Vault {
    const message = createBaseVault();
    message.key = object.key ?? "";
    message.isActive = object.isActive ?? false;
    return message;
  },
  fromAmino(object: VaultAmino): Vault {
    const message = createBaseVault();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.is_active !== undefined && object.is_active !== null) {
      message.isActive = object.is_active;
    }
    return message;
  },
  toAmino(message: Vault): VaultAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.is_active = message.isActive === false ? undefined : message.isActive;
    return obj;
  },
  fromAminoMsg(object: VaultAminoMsg): Vault {
    return Vault.fromAmino(object.value);
  },
  fromProtoMsg(message: VaultProtoMsg): Vault {
    return Vault.decode(message.value);
  },
  toProto(message: Vault): Uint8Array {
    return Vault.encode(message).finish();
  },
  toProtoMsg(message: Vault): VaultProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.Vault",
      value: Vault.encode(message).finish()
    };
  }
};
function createBaseLock(): Lock {
  return {
    stakerAddress: "",
    key: "",
    power: ""
  };
}
export const Lock = {
  typeUrl: "/band.restake.v1beta1.Lock",
  encode(message: Lock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakerAddress !== "") {
      writer.uint32(10).string(message.stakerAddress);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.power !== "") {
      writer.uint32(26).string(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Lock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakerAddress = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.power = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Lock>): Lock {
    const message = createBaseLock();
    message.stakerAddress = object.stakerAddress ?? "";
    message.key = object.key ?? "";
    message.power = object.power ?? "";
    return message;
  },
  fromAmino(object: LockAmino): Lock {
    const message = createBaseLock();
    if (object.staker_address !== undefined && object.staker_address !== null) {
      message.stakerAddress = object.staker_address;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = object.power;
    }
    return message;
  },
  toAmino(message: Lock): LockAmino {
    const obj: any = {};
    obj.staker_address = message.stakerAddress === "" ? undefined : message.stakerAddress;
    obj.key = message.key === "" ? undefined : message.key;
    obj.power = message.power === "" ? undefined : message.power;
    return obj;
  },
  fromAminoMsg(object: LockAminoMsg): Lock {
    return Lock.fromAmino(object.value);
  },
  fromProtoMsg(message: LockProtoMsg): Lock {
    return Lock.decode(message.value);
  },
  toProto(message: Lock): Uint8Array {
    return Lock.encode(message).finish();
  },
  toProtoMsg(message: Lock): LockProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.Lock",
      value: Lock.encode(message).finish()
    };
  }
};
function createBaseStake(): Stake {
  return {
    stakerAddress: "",
    coins: []
  };
}
export const Stake = {
  typeUrl: "/band.restake.v1beta1.Stake",
  encode(message: Stake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakerAddress !== "") {
      writer.uint32(10).string(message.stakerAddress);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Stake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakerAddress = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Stake>): Stake {
    const message = createBaseStake();
    message.stakerAddress = object.stakerAddress ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: StakeAmino): Stake {
    const message = createBaseStake();
    if (object.staker_address !== undefined && object.staker_address !== null) {
      message.stakerAddress = object.staker_address;
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Stake): StakeAmino {
    const obj: any = {};
    obj.staker_address = message.stakerAddress === "" ? undefined : message.stakerAddress;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: StakeAminoMsg): Stake {
    return Stake.fromAmino(object.value);
  },
  fromProtoMsg(message: StakeProtoMsg): Stake {
    return Stake.decode(message.value);
  },
  toProto(message: Stake): Uint8Array {
    return Stake.encode(message).finish();
  },
  toProtoMsg(message: Stake): StakeProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.Stake",
      value: Stake.encode(message).finish()
    };
  }
};
function createBaseLockResponse(): LockResponse {
  return {
    key: "",
    power: ""
  };
}
export const LockResponse = {
  typeUrl: "/band.restake.v1beta1.LockResponse",
  encode(message: LockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.power !== "") {
      writer.uint32(18).string(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.power = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LockResponse>): LockResponse {
    const message = createBaseLockResponse();
    message.key = object.key ?? "";
    message.power = object.power ?? "";
    return message;
  },
  fromAmino(object: LockResponseAmino): LockResponse {
    const message = createBaseLockResponse();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = object.power;
    }
    return message;
  },
  toAmino(message: LockResponse): LockResponseAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.power = message.power === "" ? undefined : message.power;
    return obj;
  },
  fromAminoMsg(object: LockResponseAminoMsg): LockResponse {
    return LockResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: LockResponseProtoMsg): LockResponse {
    return LockResponse.decode(message.value);
  },
  toProto(message: LockResponse): Uint8Array {
    return LockResponse.encode(message).finish();
  },
  toProtoMsg(message: LockResponse): LockResponseProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.LockResponse",
      value: LockResponse.encode(message).finish()
    };
  }
};