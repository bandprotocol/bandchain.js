//@ts-nocheck
import { Group, GroupAmino, GroupSDKType, Member, MemberAmino, MemberSDKType, DE, DEAmino, DESDKType } from "./tss";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the tss module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  /** groups is an array containing information about each group. */
  groups: Group[];
  /** members is an array containing information about each member of groups. */
  members: Member[];
  /** des is an array containing the des of all the addressres. */
  des: DEGenesis[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/band.tss.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the tss module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params?: ParamsAmino;
  /** groups is an array containing information about each group. */
  groups?: GroupAmino[];
  /** members is an array containing information about each member of groups. */
  members?: MemberAmino[];
  /** des is an array containing the des of all the addressres. */
  des?: DEGenesisAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/band.tss.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the tss module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  groups: GroupSDKType[];
  members: MemberSDKType[];
  des: DEGenesisSDKType[];
}
/** Params defines the set of module parameters. */
export interface Params {
  /** max_group_size is the maximum of the member capacity of the group. */
  maxGroupSize: bigint;
  /** max_de_size is the maximum of the de capacity of the member. */
  maxDeSize: bigint;
  /** creation_period is the number of blocks allowed to creating tss group. */
  creationPeriod: bigint;
  /** signing_period is the number of blocks allowed to sign. */
  signingPeriod: bigint;
  /** max_signing_attempt is the maximum number of signing retry process per signingID. */
  maxSigningAttempt: bigint;
  /** max_memo_length is the maximum length of the memo in the direct originator. */
  maxMemoLength: bigint;
  /** max_message_length is the maximum length of the message in the TextSignatureOrder. */
  maxMessageLength: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/band.tss.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the set of module parameters. */
export interface ParamsAmino {
  /** max_group_size is the maximum of the member capacity of the group. */
  max_group_size?: string;
  /** max_de_size is the maximum of the de capacity of the member. */
  max_de_size?: string;
  /** creation_period is the number of blocks allowed to creating tss group. */
  creation_period?: string;
  /** signing_period is the number of blocks allowed to sign. */
  signing_period?: string;
  /** max_signing_attempt is the maximum number of signing retry process per signingID. */
  max_signing_attempt?: string;
  /** max_memo_length is the maximum length of the memo in the direct originator. */
  max_memo_length?: string;
  /** max_message_length is the maximum length of the message in the TextSignatureOrder. */
  max_message_length?: string;
}
export interface ParamsAminoMsg {
  type: "/band.tss.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the set of module parameters. */
export interface ParamsSDKType {
  max_group_size: bigint;
  max_de_size: bigint;
  creation_period: bigint;
  signing_period: bigint;
  max_signing_attempt: bigint;
  max_memo_length: bigint;
  max_message_length: bigint;
}
/** DEGenesis defines an account address and de pair used in the tss module's genesis state. */
export interface DEGenesis {
  /** address is the address of the de holder. */
  address: string;
  /** de defines the difference de this balance holds. */
  de: DE;
}
export interface DEGenesisProtoMsg {
  typeUrl: "/band.tss.v1beta1.DEGenesis";
  value: Uint8Array;
}
/** DEGenesis defines an account address and de pair used in the tss module's genesis state. */
export interface DEGenesisAmino {
  /** address is the address of the de holder. */
  address?: string;
  /** de defines the difference de this balance holds. */
  de?: DEAmino;
}
export interface DEGenesisAminoMsg {
  type: "/band.tss.v1beta1.DEGenesis";
  value: DEGenesisAmino;
}
/** DEGenesis defines an account address and de pair used in the tss module's genesis state. */
export interface DEGenesisSDKType {
  address: string;
  de: DESDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    groups: [],
    members: [],
    des: []
  };
}
export const GenesisState = {
  typeUrl: "/band.tss.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.des) {
      DEGenesis.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.groups.push(Group.decode(reader, reader.uint32()));
          break;
        case 3:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        case 4:
          message.des.push(DEGenesis.decode(reader, reader.uint32()));
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
    message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
    message.members = object.members?.map(e => Member.fromPartial(e)) || [];
    message.des = object.des?.map(e => DEGenesis.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.groups = object.groups?.map(e => Group.fromAmino(e)) || [];
    message.members = object.members?.map(e => Member.fromAmino(e)) || [];
    message.des = object.des?.map(e => DEGenesis.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toAmino(e) : undefined);
    } else {
      obj.groups = message.groups;
    }
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = message.members;
    }
    if (message.des) {
      obj.des = message.des.map(e => e ? DEGenesis.toAmino(e) : undefined);
    } else {
      obj.des = message.des;
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
      typeUrl: "/band.tss.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    maxGroupSize: BigInt(0),
    maxDeSize: BigInt(0),
    creationPeriod: BigInt(0),
    signingPeriod: BigInt(0),
    maxSigningAttempt: BigInt(0),
    maxMemoLength: BigInt(0),
    maxMessageLength: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/band.tss.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxGroupSize !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxGroupSize);
    }
    if (message.maxDeSize !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxDeSize);
    }
    if (message.creationPeriod !== BigInt(0)) {
      writer.uint32(24).uint64(message.creationPeriod);
    }
    if (message.signingPeriod !== BigInt(0)) {
      writer.uint32(32).uint64(message.signingPeriod);
    }
    if (message.maxSigningAttempt !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxSigningAttempt);
    }
    if (message.maxMemoLength !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxMemoLength);
    }
    if (message.maxMessageLength !== BigInt(0)) {
      writer.uint32(56).uint64(message.maxMessageLength);
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
          message.maxGroupSize = reader.uint64();
          break;
        case 2:
          message.maxDeSize = reader.uint64();
          break;
        case 3:
          message.creationPeriod = reader.uint64();
          break;
        case 4:
          message.signingPeriod = reader.uint64();
          break;
        case 5:
          message.maxSigningAttempt = reader.uint64();
          break;
        case 6:
          message.maxMemoLength = reader.uint64();
          break;
        case 7:
          message.maxMessageLength = reader.uint64();
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
    message.maxGroupSize = object.maxGroupSize !== undefined && object.maxGroupSize !== null ? BigInt(object.maxGroupSize.toString()) : BigInt(0);
    message.maxDeSize = object.maxDeSize !== undefined && object.maxDeSize !== null ? BigInt(object.maxDeSize.toString()) : BigInt(0);
    message.creationPeriod = object.creationPeriod !== undefined && object.creationPeriod !== null ? BigInt(object.creationPeriod.toString()) : BigInt(0);
    message.signingPeriod = object.signingPeriod !== undefined && object.signingPeriod !== null ? BigInt(object.signingPeriod.toString()) : BigInt(0);
    message.maxSigningAttempt = object.maxSigningAttempt !== undefined && object.maxSigningAttempt !== null ? BigInt(object.maxSigningAttempt.toString()) : BigInt(0);
    message.maxMemoLength = object.maxMemoLength !== undefined && object.maxMemoLength !== null ? BigInt(object.maxMemoLength.toString()) : BigInt(0);
    message.maxMessageLength = object.maxMessageLength !== undefined && object.maxMessageLength !== null ? BigInt(object.maxMessageLength.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_group_size !== undefined && object.max_group_size !== null) {
      message.maxGroupSize = BigInt(object.max_group_size);
    }
    if (object.max_de_size !== undefined && object.max_de_size !== null) {
      message.maxDeSize = BigInt(object.max_de_size);
    }
    if (object.creation_period !== undefined && object.creation_period !== null) {
      message.creationPeriod = BigInt(object.creation_period);
    }
    if (object.signing_period !== undefined && object.signing_period !== null) {
      message.signingPeriod = BigInt(object.signing_period);
    }
    if (object.max_signing_attempt !== undefined && object.max_signing_attempt !== null) {
      message.maxSigningAttempt = BigInt(object.max_signing_attempt);
    }
    if (object.max_memo_length !== undefined && object.max_memo_length !== null) {
      message.maxMemoLength = BigInt(object.max_memo_length);
    }
    if (object.max_message_length !== undefined && object.max_message_length !== null) {
      message.maxMessageLength = BigInt(object.max_message_length);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_group_size = message.maxGroupSize !== BigInt(0) ? message.maxGroupSize?.toString() : undefined;
    obj.max_de_size = message.maxDeSize !== BigInt(0) ? message.maxDeSize?.toString() : undefined;
    obj.creation_period = message.creationPeriod !== BigInt(0) ? message.creationPeriod?.toString() : undefined;
    obj.signing_period = message.signingPeriod !== BigInt(0) ? message.signingPeriod?.toString() : undefined;
    obj.max_signing_attempt = message.maxSigningAttempt !== BigInt(0) ? message.maxSigningAttempt?.toString() : undefined;
    obj.max_memo_length = message.maxMemoLength !== BigInt(0) ? message.maxMemoLength?.toString() : undefined;
    obj.max_message_length = message.maxMessageLength !== BigInt(0) ? message.maxMessageLength?.toString() : undefined;
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
      typeUrl: "/band.tss.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseDEGenesis(): DEGenesis {
  return {
    address: "",
    de: DE.fromPartial({})
  };
}
export const DEGenesis = {
  typeUrl: "/band.tss.v1beta1.DEGenesis",
  encode(message: DEGenesis, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.de !== undefined) {
      DE.encode(message.de, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DEGenesis {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDEGenesis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.de = DE.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DEGenesis>): DEGenesis {
    const message = createBaseDEGenesis();
    message.address = object.address ?? "";
    message.de = object.de !== undefined && object.de !== null ? DE.fromPartial(object.de) : undefined;
    return message;
  },
  fromAmino(object: DEGenesisAmino): DEGenesis {
    const message = createBaseDEGenesis();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.de !== undefined && object.de !== null) {
      message.de = DE.fromAmino(object.de);
    }
    return message;
  },
  toAmino(message: DEGenesis): DEGenesisAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.de = message.de ? DE.toAmino(message.de) : undefined;
    return obj;
  },
  fromAminoMsg(object: DEGenesisAminoMsg): DEGenesis {
    return DEGenesis.fromAmino(object.value);
  },
  fromProtoMsg(message: DEGenesisProtoMsg): DEGenesis {
    return DEGenesis.decode(message.value);
  },
  toProto(message: DEGenesis): Uint8Array {
    return DEGenesis.encode(message).finish();
  },
  toProtoMsg(message: DEGenesis): DEGenesisProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.DEGenesis",
      value: DEGenesis.encode(message).finish()
    };
  }
};