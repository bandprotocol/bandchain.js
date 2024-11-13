//@ts-nocheck
import { Signal, SignalAmino, SignalSDKType, SignalPrice, SignalPriceAmino, SignalPriceSDKType, ReferenceSourceConfig, ReferenceSourceConfigAmino, ReferenceSourceConfigSDKType } from "./feeds";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgVote is the transaction message to vote signals. */
export interface MsgVote {
  /** voter is the address of the voter that wants to vote signals. */
  voter: string;
  /** signals is a list of submitted signals. */
  signals: Signal[];
}
export interface MsgVoteProtoMsg {
  typeUrl: "/band.feeds.v1beta1.MsgVote";
  value: Uint8Array;
}
/** MsgVote is the transaction message to vote signals. */
export interface MsgVoteAmino {
  /** voter is the address of the voter that wants to vote signals. */
  voter?: string;
  /** signals is a list of submitted signals. */
  signals?: SignalAmino[];
}
export interface MsgVoteAminoMsg {
  type: "feeds/MsgVote";
  value: MsgVoteAmino;
}
/** MsgVote is the transaction message to vote signals. */
export interface MsgVoteSDKType {
  voter: string;
  signals: SignalSDKType[];
}
/** MsgVoteResponse is the response type for the Msg/Vote RPC method. */
export interface MsgVoteResponse {}
export interface MsgVoteResponseProtoMsg {
  typeUrl: "/band.feeds.v1beta1.MsgVoteResponse";
  value: Uint8Array;
}
/** MsgVoteResponse is the response type for the Msg/Vote RPC method. */
export interface MsgVoteResponseAmino {}
export interface MsgVoteResponseAminoMsg {
  type: "/band.feeds.v1beta1.MsgVoteResponse";
  value: MsgVoteResponseAmino;
}
/** MsgVoteResponse is the response type for the Msg/Vote RPC method. */
export interface MsgVoteResponseSDKType {}
/** MsgSubmitSignalPrices is the transaction message to submit multiple signal prices. */
export interface MsgSubmitSignalPrices {
  /** validator is the address of the validator that is performing the operation. */
  validator: string;
  /** timestamp is the timestamp used as reference for the data. */
  timestamp: bigint;
  /** signal_prices is a list of signal prices to submit. */
  signalPrices: SignalPrice[];
}
export interface MsgSubmitSignalPricesProtoMsg {
  typeUrl: "/band.feeds.v1beta1.MsgSubmitSignalPrices";
  value: Uint8Array;
}
/** MsgSubmitSignalPrices is the transaction message to submit multiple signal prices. */
export interface MsgSubmitSignalPricesAmino {
  /** validator is the address of the validator that is performing the operation. */
  validator?: string;
  /** timestamp is the timestamp used as reference for the data. */
  timestamp?: string;
  /** signal_prices is a list of signal prices to submit. */
  signal_prices?: SignalPriceAmino[];
}
export interface MsgSubmitSignalPricesAminoMsg {
  type: "feeds/MsgSubmitSignalPrices";
  value: MsgSubmitSignalPricesAmino;
}
/** MsgSubmitSignalPrices is the transaction message to submit multiple signal prices. */
export interface MsgSubmitSignalPricesSDKType {
  validator: string;
  timestamp: bigint;
  signal_prices: SignalPriceSDKType[];
}
/** MsgSubmitSignalPricesResponse is the response type for the Msg/SubmitSignalPrices RPC method. */
export interface MsgSubmitSignalPricesResponse {}
export interface MsgSubmitSignalPricesResponseProtoMsg {
  typeUrl: "/band.feeds.v1beta1.MsgSubmitSignalPricesResponse";
  value: Uint8Array;
}
/** MsgSubmitSignalPricesResponse is the response type for the Msg/SubmitSignalPrices RPC method. */
export interface MsgSubmitSignalPricesResponseAmino {}
export interface MsgSubmitSignalPricesResponseAminoMsg {
  type: "/band.feeds.v1beta1.MsgSubmitSignalPricesResponse";
  value: MsgSubmitSignalPricesResponseAmino;
}
/** MsgSubmitSignalPricesResponse is the response type for the Msg/SubmitSignalPrices RPC method. */
export interface MsgSubmitSignalPricesResponseSDKType {}
/** MsgUpdateReferenceSourceConfig is the transaction message to update reference price source's configuration. */
export interface MsgUpdateReferenceSourceConfig {
  /** admin is the address of the admin that is performing the operation. */
  admin: string;
  /** reference_source_config is the information of reference price source. */
  referenceSourceConfig: ReferenceSourceConfig;
}
export interface MsgUpdateReferenceSourceConfigProtoMsg {
  typeUrl: "/band.feeds.v1beta1.MsgUpdateReferenceSourceConfig";
  value: Uint8Array;
}
/** MsgUpdateReferenceSourceConfig is the transaction message to update reference price source's configuration. */
export interface MsgUpdateReferenceSourceConfigAmino {
  /** admin is the address of the admin that is performing the operation. */
  admin?: string;
  /** reference_source_config is the information of reference price source. */
  reference_source_config?: ReferenceSourceConfigAmino;
}
export interface MsgUpdateReferenceSourceConfigAminoMsg {
  type: "feeds/MsgUpdateReferenceSourceConfig";
  value: MsgUpdateReferenceSourceConfigAmino;
}
/** MsgUpdateReferenceSourceConfig is the transaction message to update reference price source's configuration. */
export interface MsgUpdateReferenceSourceConfigSDKType {
  admin: string;
  reference_source_config: ReferenceSourceConfigSDKType;
}
/** MsgUpdateReferenceSourceConfigResponse is the response type for the Msg/UpdateReferenceSourceConfig RPC method. */
export interface MsgUpdateReferenceSourceConfigResponse {}
export interface MsgUpdateReferenceSourceConfigResponseProtoMsg {
  typeUrl: "/band.feeds.v1beta1.MsgUpdateReferenceSourceConfigResponse";
  value: Uint8Array;
}
/** MsgUpdateReferenceSourceConfigResponse is the response type for the Msg/UpdateReferenceSourceConfig RPC method. */
export interface MsgUpdateReferenceSourceConfigResponseAmino {}
export interface MsgUpdateReferenceSourceConfigResponseAminoMsg {
  type: "/band.feeds.v1beta1.MsgUpdateReferenceSourceConfigResponse";
  value: MsgUpdateReferenceSourceConfigResponseAmino;
}
/** MsgUpdateReferenceSourceConfigResponse is the response type for the Msg/UpdateReferenceSourceConfig RPC method. */
export interface MsgUpdateReferenceSourceConfigResponseSDKType {}
/** MsgUpdateParams is the transaction message to update parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** params is the x/feeds parameters to update. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/band.feeds.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the transaction message to update parameters. */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /** params is the x/feeds parameters to update. */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "feeds/MsgUpdateParams";
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
  typeUrl: "/band.feeds.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse is the response type for the Msg/UpdateParams RPC method. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/band.feeds.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse is the response type for the Msg/UpdateParams RPC method. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgVote(): MsgVote {
  return {
    voter: "",
    signals: []
  };
}
export const MsgVote = {
  typeUrl: "/band.feeds.v1beta1.MsgVote",
  encode(message: MsgVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    for (const v of message.signals) {
      Signal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.signals.push(Signal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    message.voter = object.voter ?? "";
    message.signals = object.signals?.map(e => Signal.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgVoteAmino): MsgVote {
    const message = createBaseMsgVote();
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    message.signals = object.signals?.map(e => Signal.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgVote): MsgVoteAmino {
    const obj: any = {};
    obj.voter = message.voter === "" ? undefined : message.voter;
    if (message.signals) {
      obj.signals = message.signals.map(e => e ? Signal.toAmino(e) : undefined);
    } else {
      obj.signals = message.signals;
    }
    return obj;
  },
  fromAminoMsg(object: MsgVoteAminoMsg): MsgVote {
    return MsgVote.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVote): MsgVoteAminoMsg {
    return {
      type: "feeds/MsgVote",
      value: MsgVote.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteProtoMsg): MsgVote {
    return MsgVote.decode(message.value);
  },
  toProto(message: MsgVote): Uint8Array {
    return MsgVote.encode(message).finish();
  },
  toProtoMsg(message: MsgVote): MsgVoteProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.MsgVote",
      value: MsgVote.encode(message).finish()
    };
  }
};
function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}
export const MsgVoteResponse = {
  typeUrl: "/band.feeds.v1beta1.MsgVoteResponse",
  encode(_: MsgVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
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
  fromPartial(_: Partial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  toAmino(_: MsgVoteResponse): MsgVoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteResponseAminoMsg): MsgVoteResponse {
    return MsgVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVoteResponseProtoMsg): MsgVoteResponse {
    return MsgVoteResponse.decode(message.value);
  },
  toProto(message: MsgVoteResponse): Uint8Array {
    return MsgVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteResponse): MsgVoteResponseProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.MsgVoteResponse",
      value: MsgVoteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitSignalPrices(): MsgSubmitSignalPrices {
  return {
    validator: "",
    timestamp: BigInt(0),
    signalPrices: []
  };
}
export const MsgSubmitSignalPrices = {
  typeUrl: "/band.feeds.v1beta1.MsgSubmitSignalPrices",
  encode(message: MsgSubmitSignalPrices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).int64(message.timestamp);
    }
    for (const v of message.signalPrices) {
      SignalPrice.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitSignalPrices {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitSignalPrices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.timestamp = reader.int64();
          break;
        case 3:
          message.signalPrices.push(SignalPrice.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitSignalPrices>): MsgSubmitSignalPrices {
    const message = createBaseMsgSubmitSignalPrices();
    message.validator = object.validator ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.signalPrices = object.signalPrices?.map(e => SignalPrice.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSubmitSignalPricesAmino): MsgSubmitSignalPrices {
    const message = createBaseMsgSubmitSignalPrices();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    message.signalPrices = object.signal_prices?.map(e => SignalPrice.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSubmitSignalPrices): MsgSubmitSignalPricesAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp?.toString() : undefined;
    if (message.signalPrices) {
      obj.signal_prices = message.signalPrices.map(e => e ? SignalPrice.toAmino(e) : undefined);
    } else {
      obj.signal_prices = message.signalPrices;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSubmitSignalPricesAminoMsg): MsgSubmitSignalPrices {
    return MsgSubmitSignalPrices.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitSignalPrices): MsgSubmitSignalPricesAminoMsg {
    return {
      type: "feeds/MsgSubmitSignalPrices",
      value: MsgSubmitSignalPrices.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitSignalPricesProtoMsg): MsgSubmitSignalPrices {
    return MsgSubmitSignalPrices.decode(message.value);
  },
  toProto(message: MsgSubmitSignalPrices): Uint8Array {
    return MsgSubmitSignalPrices.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitSignalPrices): MsgSubmitSignalPricesProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.MsgSubmitSignalPrices",
      value: MsgSubmitSignalPrices.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitSignalPricesResponse(): MsgSubmitSignalPricesResponse {
  return {};
}
export const MsgSubmitSignalPricesResponse = {
  typeUrl: "/band.feeds.v1beta1.MsgSubmitSignalPricesResponse",
  encode(_: MsgSubmitSignalPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitSignalPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitSignalPricesResponse();
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
  fromPartial(_: Partial<MsgSubmitSignalPricesResponse>): MsgSubmitSignalPricesResponse {
    const message = createBaseMsgSubmitSignalPricesResponse();
    return message;
  },
  fromAmino(_: MsgSubmitSignalPricesResponseAmino): MsgSubmitSignalPricesResponse {
    const message = createBaseMsgSubmitSignalPricesResponse();
    return message;
  },
  toAmino(_: MsgSubmitSignalPricesResponse): MsgSubmitSignalPricesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitSignalPricesResponseAminoMsg): MsgSubmitSignalPricesResponse {
    return MsgSubmitSignalPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitSignalPricesResponseProtoMsg): MsgSubmitSignalPricesResponse {
    return MsgSubmitSignalPricesResponse.decode(message.value);
  },
  toProto(message: MsgSubmitSignalPricesResponse): Uint8Array {
    return MsgSubmitSignalPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitSignalPricesResponse): MsgSubmitSignalPricesResponseProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.MsgSubmitSignalPricesResponse",
      value: MsgSubmitSignalPricesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateReferenceSourceConfig(): MsgUpdateReferenceSourceConfig {
  return {
    admin: "",
    referenceSourceConfig: ReferenceSourceConfig.fromPartial({})
  };
}
export const MsgUpdateReferenceSourceConfig = {
  typeUrl: "/band.feeds.v1beta1.MsgUpdateReferenceSourceConfig",
  encode(message: MsgUpdateReferenceSourceConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.referenceSourceConfig !== undefined) {
      ReferenceSourceConfig.encode(message.referenceSourceConfig, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateReferenceSourceConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateReferenceSourceConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.referenceSourceConfig = ReferenceSourceConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateReferenceSourceConfig>): MsgUpdateReferenceSourceConfig {
    const message = createBaseMsgUpdateReferenceSourceConfig();
    message.admin = object.admin ?? "";
    message.referenceSourceConfig = object.referenceSourceConfig !== undefined && object.referenceSourceConfig !== null ? ReferenceSourceConfig.fromPartial(object.referenceSourceConfig) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateReferenceSourceConfigAmino): MsgUpdateReferenceSourceConfig {
    const message = createBaseMsgUpdateReferenceSourceConfig();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.reference_source_config !== undefined && object.reference_source_config !== null) {
      message.referenceSourceConfig = ReferenceSourceConfig.fromAmino(object.reference_source_config);
    }
    return message;
  },
  toAmino(message: MsgUpdateReferenceSourceConfig): MsgUpdateReferenceSourceConfigAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.reference_source_config = message.referenceSourceConfig ? ReferenceSourceConfig.toAmino(message.referenceSourceConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateReferenceSourceConfigAminoMsg): MsgUpdateReferenceSourceConfig {
    return MsgUpdateReferenceSourceConfig.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateReferenceSourceConfig): MsgUpdateReferenceSourceConfigAminoMsg {
    return {
      type: "feeds/MsgUpdateReferenceSourceConfig",
      value: MsgUpdateReferenceSourceConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateReferenceSourceConfigProtoMsg): MsgUpdateReferenceSourceConfig {
    return MsgUpdateReferenceSourceConfig.decode(message.value);
  },
  toProto(message: MsgUpdateReferenceSourceConfig): Uint8Array {
    return MsgUpdateReferenceSourceConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateReferenceSourceConfig): MsgUpdateReferenceSourceConfigProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.MsgUpdateReferenceSourceConfig",
      value: MsgUpdateReferenceSourceConfig.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateReferenceSourceConfigResponse(): MsgUpdateReferenceSourceConfigResponse {
  return {};
}
export const MsgUpdateReferenceSourceConfigResponse = {
  typeUrl: "/band.feeds.v1beta1.MsgUpdateReferenceSourceConfigResponse",
  encode(_: MsgUpdateReferenceSourceConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateReferenceSourceConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateReferenceSourceConfigResponse();
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
  fromPartial(_: Partial<MsgUpdateReferenceSourceConfigResponse>): MsgUpdateReferenceSourceConfigResponse {
    const message = createBaseMsgUpdateReferenceSourceConfigResponse();
    return message;
  },
  fromAmino(_: MsgUpdateReferenceSourceConfigResponseAmino): MsgUpdateReferenceSourceConfigResponse {
    const message = createBaseMsgUpdateReferenceSourceConfigResponse();
    return message;
  },
  toAmino(_: MsgUpdateReferenceSourceConfigResponse): MsgUpdateReferenceSourceConfigResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateReferenceSourceConfigResponseAminoMsg): MsgUpdateReferenceSourceConfigResponse {
    return MsgUpdateReferenceSourceConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateReferenceSourceConfigResponseProtoMsg): MsgUpdateReferenceSourceConfigResponse {
    return MsgUpdateReferenceSourceConfigResponse.decode(message.value);
  },
  toProto(message: MsgUpdateReferenceSourceConfigResponse): Uint8Array {
    return MsgUpdateReferenceSourceConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateReferenceSourceConfigResponse): MsgUpdateReferenceSourceConfigResponseProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.MsgUpdateReferenceSourceConfigResponse",
      value: MsgUpdateReferenceSourceConfigResponse.encode(message).finish()
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
  typeUrl: "/band.feeds.v1beta1.MsgUpdateParams",
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
      type: "feeds/MsgUpdateParams",
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
      typeUrl: "/band.feeds.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/band.feeds.v1beta1.MsgUpdateParamsResponse",
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
      typeUrl: "/band.feeds.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};