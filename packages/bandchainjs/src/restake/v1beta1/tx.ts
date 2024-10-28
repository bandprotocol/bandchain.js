//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgStake is the request message type for staking coins. */
export interface MsgStake {
  /** staker_address is the address that will stake the coins. */
  stakerAddress: string;
  /** coins is the coins that will be staked. */
  coins: Coin[];
}
export interface MsgStakeProtoMsg {
  typeUrl: "/restake.v1beta1.MsgStake";
  value: Uint8Array;
}
/** MsgStake is the request message type for staking coins. */
export interface MsgStakeAmino {
  /** staker_address is the address that will stake the coins. */
  staker_address?: string;
  /** coins is the coins that will be staked. */
  coins: CoinAmino[];
}
export interface MsgStakeAminoMsg {
  type: "restake/MsgStake";
  value: MsgStakeAmino;
}
/** MsgStake is the request message type for staking coins. */
export interface MsgStakeSDKType {
  staker_address: string;
  coins: CoinSDKType[];
}
/** MsgStakeResponse is the response message type for staking coins. */
export interface MsgStakeResponse {}
export interface MsgStakeResponseProtoMsg {
  typeUrl: "/restake.v1beta1.MsgStakeResponse";
  value: Uint8Array;
}
/** MsgStakeResponse is the response message type for staking coins. */
export interface MsgStakeResponseAmino {}
export interface MsgStakeResponseAminoMsg {
  type: "/restake.v1beta1.MsgStakeResponse";
  value: MsgStakeResponseAmino;
}
/** MsgStakeResponse is the response message type for staking coins. */
export interface MsgStakeResponseSDKType {}
/** MsgUnstake is the request message type for unstaking coins. */
export interface MsgUnstake {
  /** staker_address is the address that will unstake the coins. */
  stakerAddress: string;
  /** coins is the coins that will be unstaked. */
  coins: Coin[];
}
export interface MsgUnstakeProtoMsg {
  typeUrl: "/restake.v1beta1.MsgUnstake";
  value: Uint8Array;
}
/** MsgUnstake is the request message type for unstaking coins. */
export interface MsgUnstakeAmino {
  /** staker_address is the address that will unstake the coins. */
  staker_address?: string;
  /** coins is the coins that will be unstaked. */
  coins: CoinAmino[];
}
export interface MsgUnstakeAminoMsg {
  type: "restake/MsgUnstake";
  value: MsgUnstakeAmino;
}
/** MsgUnstake is the request message type for unstaking coins. */
export interface MsgUnstakeSDKType {
  staker_address: string;
  coins: CoinSDKType[];
}
/** MsgUnstakeResponse is the response message type for unstaking coins. */
export interface MsgUnstakeResponse {}
export interface MsgUnstakeResponseProtoMsg {
  typeUrl: "/restake.v1beta1.MsgUnstakeResponse";
  value: Uint8Array;
}
/** MsgUnstakeResponse is the response message type for unstaking coins. */
export interface MsgUnstakeResponseAmino {}
export interface MsgUnstakeResponseAminoMsg {
  type: "/restake.v1beta1.MsgUnstakeResponse";
  value: MsgUnstakeResponseAmino;
}
/** MsgUnstakeResponse is the response message type for unstaking coins. */
export interface MsgUnstakeResponseSDKType {}
/** MsgUpdateParams is the transaction message to update parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** params is parameters to update. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/restake.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the transaction message to update parameters. */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /** params is parameters to update. */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "restake/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the transaction message to update parameters. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/** MsgUpdateParamsResponse is the response type for the Msg/UpdateParams RPC method. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/restake.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse is the response type for the Msg/UpdateParams RPC method. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/restake.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse is the response type for the Msg/UpdateParams RPC method. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgStake(): MsgStake {
  return {
    stakerAddress: "",
    coins: []
  };
}
export const MsgStake = {
  typeUrl: "/restake.v1beta1.MsgStake",
  encode(message: MsgStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakerAddress !== "") {
      writer.uint32(10).string(message.stakerAddress);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStake();
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
  fromPartial(object: Partial<MsgStake>): MsgStake {
    const message = createBaseMsgStake();
    message.stakerAddress = object.stakerAddress ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgStakeAmino): MsgStake {
    const message = createBaseMsgStake();
    if (object.staker_address !== undefined && object.staker_address !== null) {
      message.stakerAddress = object.staker_address;
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgStake): MsgStakeAmino {
    const obj: any = {};
    obj.staker_address = message.stakerAddress === "" ? undefined : message.stakerAddress;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgStakeAminoMsg): MsgStake {
    return MsgStake.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStake): MsgStakeAminoMsg {
    return {
      type: "restake/MsgStake",
      value: MsgStake.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStakeProtoMsg): MsgStake {
    return MsgStake.decode(message.value);
  },
  toProto(message: MsgStake): Uint8Array {
    return MsgStake.encode(message).finish();
  },
  toProtoMsg(message: MsgStake): MsgStakeProtoMsg {
    return {
      typeUrl: "/restake.v1beta1.MsgStake",
      value: MsgStake.encode(message).finish()
    };
  }
};
function createBaseMsgStakeResponse(): MsgStakeResponse {
  return {};
}
export const MsgStakeResponse = {
  typeUrl: "/restake.v1beta1.MsgStakeResponse",
  encode(_: MsgStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgStakeResponse>): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    return message;
  },
  fromAmino(_: MsgStakeResponseAmino): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    return message;
  },
  toAmino(_: MsgStakeResponse): MsgStakeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgStakeResponseAminoMsg): MsgStakeResponse {
    return MsgStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeResponseProtoMsg): MsgStakeResponse {
    return MsgStakeResponse.decode(message.value);
  },
  toProto(message: MsgStakeResponse): Uint8Array {
    return MsgStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeResponse): MsgStakeResponseProtoMsg {
    return {
      typeUrl: "/restake.v1beta1.MsgStakeResponse",
      value: MsgStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnstake(): MsgUnstake {
  return {
    stakerAddress: "",
    coins: []
  };
}
export const MsgUnstake = {
  typeUrl: "/restake.v1beta1.MsgUnstake",
  encode(message: MsgUnstake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakerAddress !== "") {
      writer.uint32(10).string(message.stakerAddress);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstake();
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
  fromPartial(object: Partial<MsgUnstake>): MsgUnstake {
    const message = createBaseMsgUnstake();
    message.stakerAddress = object.stakerAddress ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUnstakeAmino): MsgUnstake {
    const message = createBaseMsgUnstake();
    if (object.staker_address !== undefined && object.staker_address !== null) {
      message.stakerAddress = object.staker_address;
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUnstake): MsgUnstakeAmino {
    const obj: any = {};
    obj.staker_address = message.stakerAddress === "" ? undefined : message.stakerAddress;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeAminoMsg): MsgUnstake {
    return MsgUnstake.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnstake): MsgUnstakeAminoMsg {
    return {
      type: "restake/MsgUnstake",
      value: MsgUnstake.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnstakeProtoMsg): MsgUnstake {
    return MsgUnstake.decode(message.value);
  },
  toProto(message: MsgUnstake): Uint8Array {
    return MsgUnstake.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstake): MsgUnstakeProtoMsg {
    return {
      typeUrl: "/restake.v1beta1.MsgUnstake",
      value: MsgUnstake.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeResponse(): MsgUnstakeResponse {
  return {};
}
export const MsgUnstakeResponse = {
  typeUrl: "/restake.v1beta1.MsgUnstakeResponse",
  encode(_: MsgUnstakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUnstakeResponse>): MsgUnstakeResponse {
    const message = createBaseMsgUnstakeResponse();
    return message;
  },
  fromAmino(_: MsgUnstakeResponseAmino): MsgUnstakeResponse {
    const message = createBaseMsgUnstakeResponse();
    return message;
  },
  toAmino(_: MsgUnstakeResponse): MsgUnstakeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeResponseAminoMsg): MsgUnstakeResponse {
    return MsgUnstakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeResponseProtoMsg): MsgUnstakeResponse {
    return MsgUnstakeResponse.decode(message.value);
  },
  toProto(message: MsgUnstakeResponse): Uint8Array {
    return MsgUnstakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeResponse): MsgUnstakeResponseProtoMsg {
    return {
      typeUrl: "/restake.v1beta1.MsgUnstakeResponse",
      value: MsgUnstakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/restake.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "restake/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/restake.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/restake.v1beta1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/restake.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};