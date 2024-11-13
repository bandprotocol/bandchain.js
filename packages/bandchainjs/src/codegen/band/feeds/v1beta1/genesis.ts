//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Vote, VoteAmino, VoteSDKType, ReferenceSourceConfig, ReferenceSourceConfigAmino, ReferenceSourceConfigSDKType } from "./feeds";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState is a structure that defines the feeds module's genesis state. */
export interface GenesisState {
  /** params is all parameters of the module. */
  params: Params;
  /** votes is a list of voter signals. */
  votes: Vote[];
  /** reference_source_config is the information about reference price config. */
  referenceSourceConfig: ReferenceSourceConfig;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/band.feeds.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState is a structure that defines the feeds module's genesis state. */
export interface GenesisStateAmino {
  /** params is all parameters of the module. */
  params?: ParamsAmino;
  /** votes is a list of voter signals. */
  votes?: VoteAmino[];
  /** reference_source_config is the information about reference price config. */
  reference_source_config?: ReferenceSourceConfigAmino;
}
export interface GenesisStateAminoMsg {
  type: "/band.feeds.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState is a structure that defines the feeds module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  votes: VoteSDKType[];
  reference_source_config: ReferenceSourceConfigSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    votes: [],
    referenceSourceConfig: ReferenceSourceConfig.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/band.feeds.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.referenceSourceConfig !== undefined) {
      ReferenceSourceConfig.encode(message.referenceSourceConfig, writer.uint32(26).fork()).ldelim();
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
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 3:
          message.referenceSourceConfig = ReferenceSourceConfig.decode(reader, reader.uint32());
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
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.referenceSourceConfig = object.referenceSourceConfig !== undefined && object.referenceSourceConfig !== null ? ReferenceSourceConfig.fromPartial(object.referenceSourceConfig) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    if (object.reference_source_config !== undefined && object.reference_source_config !== null) {
      message.referenceSourceConfig = ReferenceSourceConfig.fromAmino(object.reference_source_config);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    obj.reference_source_config = message.referenceSourceConfig ? ReferenceSourceConfig.toAmino(message.referenceSourceConfig) : undefined;
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
      typeUrl: "/band.feeds.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};