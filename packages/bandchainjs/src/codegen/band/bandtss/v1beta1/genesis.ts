//@ts-nocheck
import { Member, MemberAmino, MemberSDKType, CurrentGroup, CurrentGroupAmino, CurrentGroupSDKType } from "./bandtss";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the bandtss module's genesis state. */
export interface GenesisState {
  /** params defines all the paramiters of the module. */
  params: Params;
  /** members is an array containing members information. */
  members: Member[];
  /** current_group is the current group information. */
  currentGroup: CurrentGroup;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the bandtss module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the paramiters of the module. */
  params?: ParamsAmino;
  /** members is an array containing members information. */
  members?: MemberAmino[];
  /** current_group is the current group information. */
  current_group?: CurrentGroupAmino;
}
export interface GenesisStateAminoMsg {
  type: "/band.bandtss.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the bandtss module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  members: MemberSDKType[];
  current_group: CurrentGroupSDKType;
}
/** Params defines the set of module parameters. */
export interface Params {
  /**
   * reward_percentage is the percentage of block rewards allocated to active TSS members.
   * The reward proportion is calculated after being allocated to oracle rewards.
   */
  rewardPercentage: bigint;
  /** inactive_penalty_duration is the duration where a member cannot activate back after being set to inactive. */
  inactivePenaltyDuration: Duration;
  /** min_transition_duration is the minimum duration that the transition process waits before execution. */
  minTransitionDuration: Duration;
  /** max_transition_duration is the maximum duration that the transition process waits before execution. */
  maxTransitionDuration: Duration;
  /** fee_per_signer is the tokens that will be paid per signer. */
  feePerSigner: Coin[];
}
export interface ParamsProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the set of module parameters. */
export interface ParamsAmino {
  /**
   * reward_percentage is the percentage of block rewards allocated to active TSS members.
   * The reward proportion is calculated after being allocated to oracle rewards.
   */
  reward_percentage?: string;
  /** inactive_penalty_duration is the duration where a member cannot activate back after being set to inactive. */
  inactive_penalty_duration?: DurationAmino;
  /** min_transition_duration is the minimum duration that the transition process waits before execution. */
  min_transition_duration?: DurationAmino;
  /** max_transition_duration is the maximum duration that the transition process waits before execution. */
  max_transition_duration?: DurationAmino;
  /** fee_per_signer is the tokens that will be paid per signer. */
  fee_per_signer?: CoinAmino[];
}
export interface ParamsAminoMsg {
  type: "/band.bandtss.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the set of module parameters. */
export interface ParamsSDKType {
  reward_percentage: bigint;
  inactive_penalty_duration: DurationSDKType;
  min_transition_duration: DurationSDKType;
  max_transition_duration: DurationSDKType;
  fee_per_signer: CoinSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    members: [],
    currentGroup: CurrentGroup.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/band.bandtss.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentGroup !== undefined) {
      CurrentGroup.encode(message.currentGroup, writer.uint32(26).fork()).ldelim();
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
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        case 3:
          message.currentGroup = CurrentGroup.decode(reader, reader.uint32());
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
    message.members = object.members?.map(e => Member.fromPartial(e)) || [];
    message.currentGroup = object.currentGroup !== undefined && object.currentGroup !== null ? CurrentGroup.fromPartial(object.currentGroup) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.members = object.members?.map(e => Member.fromAmino(e)) || [];
    if (object.current_group !== undefined && object.current_group !== null) {
      message.currentGroup = CurrentGroup.fromAmino(object.current_group);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = message.members;
    }
    obj.current_group = message.currentGroup ? CurrentGroup.toAmino(message.currentGroup) : undefined;
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
      typeUrl: "/band.bandtss.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    rewardPercentage: BigInt(0),
    inactivePenaltyDuration: Duration.fromPartial({}),
    minTransitionDuration: Duration.fromPartial({}),
    maxTransitionDuration: Duration.fromPartial({}),
    feePerSigner: []
  };
}
export const Params = {
  typeUrl: "/band.bandtss.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardPercentage !== BigInt(0)) {
      writer.uint32(8).uint64(message.rewardPercentage);
    }
    if (message.inactivePenaltyDuration !== undefined) {
      Duration.encode(message.inactivePenaltyDuration, writer.uint32(18).fork()).ldelim();
    }
    if (message.minTransitionDuration !== undefined) {
      Duration.encode(message.minTransitionDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxTransitionDuration !== undefined) {
      Duration.encode(message.maxTransitionDuration, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.feePerSigner) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.rewardPercentage = reader.uint64();
          break;
        case 2:
          message.inactivePenaltyDuration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.minTransitionDuration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.maxTransitionDuration = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.feePerSigner.push(Coin.decode(reader, reader.uint32()));
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
    message.rewardPercentage = object.rewardPercentage !== undefined && object.rewardPercentage !== null ? BigInt(object.rewardPercentage.toString()) : BigInt(0);
    message.inactivePenaltyDuration = object.inactivePenaltyDuration !== undefined && object.inactivePenaltyDuration !== null ? Duration.fromPartial(object.inactivePenaltyDuration) : undefined;
    message.minTransitionDuration = object.minTransitionDuration !== undefined && object.minTransitionDuration !== null ? Duration.fromPartial(object.minTransitionDuration) : undefined;
    message.maxTransitionDuration = object.maxTransitionDuration !== undefined && object.maxTransitionDuration !== null ? Duration.fromPartial(object.maxTransitionDuration) : undefined;
    message.feePerSigner = object.feePerSigner?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.reward_percentage !== undefined && object.reward_percentage !== null) {
      message.rewardPercentage = BigInt(object.reward_percentage);
    }
    if (object.inactive_penalty_duration !== undefined && object.inactive_penalty_duration !== null) {
      message.inactivePenaltyDuration = Duration.fromAmino(object.inactive_penalty_duration);
    }
    if (object.min_transition_duration !== undefined && object.min_transition_duration !== null) {
      message.minTransitionDuration = Duration.fromAmino(object.min_transition_duration);
    }
    if (object.max_transition_duration !== undefined && object.max_transition_duration !== null) {
      message.maxTransitionDuration = Duration.fromAmino(object.max_transition_duration);
    }
    message.feePerSigner = object.fee_per_signer?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.reward_percentage = message.rewardPercentage !== BigInt(0) ? message.rewardPercentage?.toString() : undefined;
    obj.inactive_penalty_duration = message.inactivePenaltyDuration ? Duration.toAmino(message.inactivePenaltyDuration) : undefined;
    obj.min_transition_duration = message.minTransitionDuration ? Duration.toAmino(message.minTransitionDuration) : undefined;
    obj.max_transition_duration = message.maxTransitionDuration ? Duration.toAmino(message.maxTransitionDuration) : undefined;
    if (message.feePerSigner) {
      obj.fee_per_signer = message.feePerSigner.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_per_signer = message.feePerSigner;
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
      typeUrl: "/band.bandtss.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};