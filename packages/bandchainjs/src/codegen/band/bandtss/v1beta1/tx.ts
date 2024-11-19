//@ts-nocheck
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { GroupTransitionSignatureOrder, GroupTransitionSignatureOrderProtoMsg, GroupTransitionSignatureOrderSDKType } from "./bandtss";
import { TextSignatureOrder, TextSignatureOrderProtoMsg, TextSignatureOrderSDKType } from "../../tss/v1beta1/tss";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
/** MsgRequestSignature is a request message used for initiating the signing process. */
export interface MsgRequestSignature {
  /** content is the signature order of this request signature message. */
  content?: GroupTransitionSignatureOrder | TextSignatureOrder | Any | undefined;
  /** memo is the additional note of the message. */
  memo: string;
  /** fee_limit is the maximum tokens that will be paid for this request. */
  feeLimit: Coin[];
  /** sender is the requester of the signing process. */
  sender: string;
}
export interface MsgRequestSignatureProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.MsgRequestSignature";
  value: Uint8Array;
}
export type MsgRequestSignatureEncoded = Omit<MsgRequestSignature, "content"> & {
  /** content is the signature order of this request signature message. */content?: GroupTransitionSignatureOrderProtoMsg | TextSignatureOrderProtoMsg | AnyProtoMsg | undefined;
};
/** MsgRequestSignature is a request message used for initiating the signing process. */
export interface MsgRequestSignatureAmino {
  /** content is the signature order of this request signature message. */
  content?: AnyAmino;
  /** memo is the additional note of the message. */
  memo?: string;
  /** fee_limit is the maximum tokens that will be paid for this request. */
  fee_limit?: CoinAmino[];
  /** sender is the requester of the signing process. */
  sender?: string;
}
export interface MsgRequestSignatureAminoMsg {
  type: "bandtss/MsgRequestSignature";
  value: MsgRequestSignatureAmino;
}
/** MsgRequestSignature is a request message used for initiating the signing process. */
export interface MsgRequestSignatureSDKType {
  content?: GroupTransitionSignatureOrderSDKType | TextSignatureOrderSDKType | AnySDKType | undefined;
  memo: string;
  fee_limit: CoinSDKType[];
  sender: string;
}
/** MsgRequestSignatureResponse is response data for MsgRequestSignature message */
export interface MsgRequestSignatureResponse {}
export interface MsgRequestSignatureResponseProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.MsgRequestSignatureResponse";
  value: Uint8Array;
}
/** MsgRequestSignatureResponse is response data for MsgRequestSignature message */
export interface MsgRequestSignatureResponseAmino {}
export interface MsgRequestSignatureResponseAminoMsg {
  type: "/band.bandtss.v1beta1.MsgRequestSignatureResponse";
  value: MsgRequestSignatureResponseAmino;
}
/** MsgRequestSignatureResponse is response data for MsgRequestSignature message */
export interface MsgRequestSignatureResponseSDKType {}
/** MsgActivate is a message used to activate the status of the sender. */
export interface MsgActivate {
  /** address is the signer of this message, who must be a member of the group. */
  sender: string;
  /** group_id is the group id of the member. */
  groupId: bigint;
}
export interface MsgActivateProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.MsgActivate";
  value: Uint8Array;
}
/** MsgActivate is a message used to activate the status of the sender. */
export interface MsgActivateAmino {
  /** address is the signer of this message, who must be a member of the group. */
  sender?: string;
  /** group_id is the group id of the member. */
  group_id?: string;
}
export interface MsgActivateAminoMsg {
  type: "bandtss/MsgActivate";
  value: MsgActivateAmino;
}
/** MsgActivate is a message used to activate the status of the sender. */
export interface MsgActivateSDKType {
  sender: string;
  group_id: bigint;
}
/** MsgActivateResponse is response data for MsgActivate message */
export interface MsgActivateResponse {}
export interface MsgActivateResponseProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.MsgActivateResponse";
  value: Uint8Array;
}
/** MsgActivateResponse is response data for MsgActivate message */
export interface MsgActivateResponseAmino {}
export interface MsgActivateResponseAminoMsg {
  type: "/band.bandtss.v1beta1.MsgActivateResponse";
  value: MsgActivateResponseAmino;
}
/** MsgActivateResponse is response data for MsgActivate message */
export interface MsgActivateResponseSDKType {}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** params defines the x/tss parameters to update. */
  params: Params;
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /** params defines the x/tss parameters to update. */
  params?: ParamsAmino;
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
}
export interface MsgUpdateParamsAminoMsg {
  type: "bandtss/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  params: ParamsSDKType;
  authority: string;
}
/** MsgUpdateParamsResponse defines the response structure for executing a MsgUpdateParams message. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the response structure for executing a MsgUpdateParams message. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/band.bandtss.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the response structure for executing a MsgUpdateParams message. */
export interface MsgUpdateParamsResponseSDKType {}
/** MsgTransitionGroup is the Msg/TransitionGroup request type. */
export interface MsgTransitionGroup {
  /** members is a list of members in this group. */
  members: string[];
  /** threshold is a minimum number of members required to produce a signature. */
  threshold: bigint;
  /** exec_time is the time that will be substituted in place of the group. */
  execTime: Date;
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
}
export interface MsgTransitionGroupProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.MsgTransitionGroup";
  value: Uint8Array;
}
/** MsgTransitionGroup is the Msg/TransitionGroup request type. */
export interface MsgTransitionGroupAmino {
  /** members is a list of members in this group. */
  members?: string[];
  /** threshold is a minimum number of members required to produce a signature. */
  threshold?: string;
  /** exec_time is the time that will be substituted in place of the group. */
  exec_time?: string;
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
}
export interface MsgTransitionGroupAminoMsg {
  type: "bandtss/MsgTransitionGroup";
  value: MsgTransitionGroupAmino;
}
/** MsgTransitionGroup is the Msg/TransitionGroup request type. */
export interface MsgTransitionGroupSDKType {
  members: string[];
  threshold: bigint;
  exec_time: Date;
  authority: string;
}
/** MsgTransitionGroupResponse is the Msg/TransitionGroup response type. */
export interface MsgTransitionGroupResponse {}
export interface MsgTransitionGroupResponseProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.MsgTransitionGroupResponse";
  value: Uint8Array;
}
/** MsgTransitionGroupResponse is the Msg/TransitionGroup response type. */
export interface MsgTransitionGroupResponseAmino {}
export interface MsgTransitionGroupResponseAminoMsg {
  type: "/band.bandtss.v1beta1.MsgTransitionGroupResponse";
  value: MsgTransitionGroupResponseAmino;
}
/** MsgTransitionGroupResponse is the Msg/TransitionGroup response type. */
export interface MsgTransitionGroupResponseSDKType {}
/** MsgForceTransitionGroup is the Msg/ForceTransitionGroup request type. */
export interface MsgForceTransitionGroup {
  /** incoming_group_id is the ID of the group that the module want to transition to. */
  incomingGroupId: bigint;
  /** exec_time is the time that will be substituted in place of the group. */
  execTime: Date;
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
}
export interface MsgForceTransitionGroupProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.MsgForceTransitionGroup";
  value: Uint8Array;
}
/** MsgForceTransitionGroup is the Msg/ForceTransitionGroup request type. */
export interface MsgForceTransitionGroupAmino {
  /** incoming_group_id is the ID of the group that the module want to transition to. */
  incoming_group_id?: string;
  /** exec_time is the time that will be substituted in place of the group. */
  exec_time?: string;
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
}
export interface MsgForceTransitionGroupAminoMsg {
  type: "bandtss/ForceTransitionGroup";
  value: MsgForceTransitionGroupAmino;
}
/** MsgForceTransitionGroup is the Msg/ForceTransitionGroup request type. */
export interface MsgForceTransitionGroupSDKType {
  incoming_group_id: bigint;
  exec_time: Date;
  authority: string;
}
/** MsgForceTransitionGroupResponse is the Msg/ForceTransitionGroup response type. */
export interface MsgForceTransitionGroupResponse {}
export interface MsgForceTransitionGroupResponseProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.MsgForceTransitionGroupResponse";
  value: Uint8Array;
}
/** MsgForceTransitionGroupResponse is the Msg/ForceTransitionGroup response type. */
export interface MsgForceTransitionGroupResponseAmino {}
export interface MsgForceTransitionGroupResponseAminoMsg {
  type: "/band.bandtss.v1beta1.MsgForceTransitionGroupResponse";
  value: MsgForceTransitionGroupResponseAmino;
}
/** MsgForceTransitionGroupResponse is the Msg/ForceTransitionGroup response type. */
export interface MsgForceTransitionGroupResponseSDKType {}
function createBaseMsgRequestSignature(): MsgRequestSignature {
  return {
    content: undefined,
    memo: "",
    feeLimit: [],
    sender: ""
  };
}
export const MsgRequestSignature = {
  typeUrl: "/band.bandtss.v1beta1.MsgRequestSignature",
  encode(message: MsgRequestSignature, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== undefined) {
      Any.encode(message.content as Any, writer.uint32(10).fork()).ldelim();
    }
    if (message.memo !== "") {
      writer.uint32(18).string(message.memo);
    }
    for (const v of message.feeLimit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestSignature {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = Content_InterfaceDecoder(reader) as Any;
          break;
        case 2:
          message.memo = reader.string();
          break;
        case 3:
          message.feeLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRequestSignature>): MsgRequestSignature {
    const message = createBaseMsgRequestSignature();
    message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
    message.memo = object.memo ?? "";
    message.feeLimit = object.feeLimit?.map(e => Coin.fromPartial(e)) || [];
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgRequestSignatureAmino): MsgRequestSignature {
    const message = createBaseMsgRequestSignature();
    if (object.content !== undefined && object.content !== null) {
      message.content = Content_FromAmino(object.content);
    }
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = object.memo;
    }
    message.feeLimit = object.fee_limit?.map(e => Coin.fromAmino(e)) || [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgRequestSignature): MsgRequestSignatureAmino {
    const obj: any = {};
    obj.content = message.content ? Content_ToAmino(message.content as Any) : undefined;
    obj.memo = message.memo === "" ? undefined : message.memo;
    if (message.feeLimit) {
      obj.fee_limit = message.feeLimit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_limit = message.feeLimit;
    }
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgRequestSignatureAminoMsg): MsgRequestSignature {
    return MsgRequestSignature.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRequestSignature): MsgRequestSignatureAminoMsg {
    return {
      type: "bandtss/MsgRequestSignature",
      value: MsgRequestSignature.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRequestSignatureProtoMsg): MsgRequestSignature {
    return MsgRequestSignature.decode(message.value);
  },
  toProto(message: MsgRequestSignature): Uint8Array {
    return MsgRequestSignature.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestSignature): MsgRequestSignatureProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.MsgRequestSignature",
      value: MsgRequestSignature.encode(message).finish()
    };
  }
};
function createBaseMsgRequestSignatureResponse(): MsgRequestSignatureResponse {
  return {};
}
export const MsgRequestSignatureResponse = {
  typeUrl: "/band.bandtss.v1beta1.MsgRequestSignatureResponse",
  encode(_: MsgRequestSignatureResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestSignatureResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestSignatureResponse();
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
  fromPartial(_: Partial<MsgRequestSignatureResponse>): MsgRequestSignatureResponse {
    const message = createBaseMsgRequestSignatureResponse();
    return message;
  },
  fromAmino(_: MsgRequestSignatureResponseAmino): MsgRequestSignatureResponse {
    const message = createBaseMsgRequestSignatureResponse();
    return message;
  },
  toAmino(_: MsgRequestSignatureResponse): MsgRequestSignatureResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRequestSignatureResponseAminoMsg): MsgRequestSignatureResponse {
    return MsgRequestSignatureResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestSignatureResponseProtoMsg): MsgRequestSignatureResponse {
    return MsgRequestSignatureResponse.decode(message.value);
  },
  toProto(message: MsgRequestSignatureResponse): Uint8Array {
    return MsgRequestSignatureResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestSignatureResponse): MsgRequestSignatureResponseProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.MsgRequestSignatureResponse",
      value: MsgRequestSignatureResponse.encode(message).finish()
    };
  }
};
function createBaseMsgActivate(): MsgActivate {
  return {
    sender: "",
    groupId: BigInt(0)
  };
}
export const MsgActivate = {
  typeUrl: "/band.bandtss.v1beta1.MsgActivate",
  encode(message: MsgActivate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgActivate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgActivate>): MsgActivate {
    const message = createBaseMsgActivate();
    message.sender = object.sender ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgActivateAmino): MsgActivate {
    const message = createBaseMsgActivate();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message: MsgActivate): MsgActivateAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgActivateAminoMsg): MsgActivate {
    return MsgActivate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgActivate): MsgActivateAminoMsg {
    return {
      type: "bandtss/MsgActivate",
      value: MsgActivate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgActivateProtoMsg): MsgActivate {
    return MsgActivate.decode(message.value);
  },
  toProto(message: MsgActivate): Uint8Array {
    return MsgActivate.encode(message).finish();
  },
  toProtoMsg(message: MsgActivate): MsgActivateProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.MsgActivate",
      value: MsgActivate.encode(message).finish()
    };
  }
};
function createBaseMsgActivateResponse(): MsgActivateResponse {
  return {};
}
export const MsgActivateResponse = {
  typeUrl: "/band.bandtss.v1beta1.MsgActivateResponse",
  encode(_: MsgActivateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgActivateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateResponse();
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
  fromPartial(_: Partial<MsgActivateResponse>): MsgActivateResponse {
    const message = createBaseMsgActivateResponse();
    return message;
  },
  fromAmino(_: MsgActivateResponseAmino): MsgActivateResponse {
    const message = createBaseMsgActivateResponse();
    return message;
  },
  toAmino(_: MsgActivateResponse): MsgActivateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgActivateResponseAminoMsg): MsgActivateResponse {
    return MsgActivateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgActivateResponseProtoMsg): MsgActivateResponse {
    return MsgActivateResponse.decode(message.value);
  },
  toProto(message: MsgActivateResponse): Uint8Array {
    return MsgActivateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateResponse): MsgActivateResponseProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.MsgActivateResponse",
      value: MsgActivateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    params: Params.fromPartial({}),
    authority: ""
  };
}
export const MsgUpdateParams = {
  typeUrl: "/band.bandtss.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.authority = reader.string();
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "bandtss/MsgUpdateParams",
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
      typeUrl: "/band.bandtss.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/band.bandtss.v1beta1.MsgUpdateParamsResponse",
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
      typeUrl: "/band.bandtss.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransitionGroup(): MsgTransitionGroup {
  return {
    members: [],
    threshold: BigInt(0),
    execTime: new Date(),
    authority: ""
  };
}
export const MsgTransitionGroup = {
  typeUrl: "/band.bandtss.v1beta1.MsgTransitionGroup",
  encode(message: MsgTransitionGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.members) {
      writer.uint32(10).string(v!);
    }
    if (message.threshold !== BigInt(0)) {
      writer.uint32(16).uint64(message.threshold);
    }
    if (message.execTime !== undefined) {
      Timestamp.encode(toTimestamp(message.execTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(34).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransitionGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransitionGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(reader.string());
          break;
        case 2:
          message.threshold = reader.uint64();
          break;
        case 3:
          message.execTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTransitionGroup>): MsgTransitionGroup {
    const message = createBaseMsgTransitionGroup();
    message.members = object.members?.map(e => e) || [];
    message.threshold = object.threshold !== undefined && object.threshold !== null ? BigInt(object.threshold.toString()) : BigInt(0);
    message.execTime = object.execTime ?? undefined;
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgTransitionGroupAmino): MsgTransitionGroup {
    const message = createBaseMsgTransitionGroup();
    message.members = object.members?.map(e => e) || [];
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = BigInt(object.threshold);
    }
    if (object.exec_time !== undefined && object.exec_time !== null) {
      message.execTime = fromTimestamp(Timestamp.fromAmino(object.exec_time));
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgTransitionGroup): MsgTransitionGroupAmino {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map(e => e);
    } else {
      obj.members = message.members;
    }
    obj.threshold = message.threshold !== BigInt(0) ? message.threshold?.toString() : undefined;
    obj.exec_time = message.execTime ? Timestamp.toAmino(toTimestamp(message.execTime)) : undefined;
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgTransitionGroupAminoMsg): MsgTransitionGroup {
    return MsgTransitionGroup.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransitionGroup): MsgTransitionGroupAminoMsg {
    return {
      type: "bandtss/MsgTransitionGroup",
      value: MsgTransitionGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransitionGroupProtoMsg): MsgTransitionGroup {
    return MsgTransitionGroup.decode(message.value);
  },
  toProto(message: MsgTransitionGroup): Uint8Array {
    return MsgTransitionGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgTransitionGroup): MsgTransitionGroupProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.MsgTransitionGroup",
      value: MsgTransitionGroup.encode(message).finish()
    };
  }
};
function createBaseMsgTransitionGroupResponse(): MsgTransitionGroupResponse {
  return {};
}
export const MsgTransitionGroupResponse = {
  typeUrl: "/band.bandtss.v1beta1.MsgTransitionGroupResponse",
  encode(_: MsgTransitionGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransitionGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransitionGroupResponse();
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
  fromPartial(_: Partial<MsgTransitionGroupResponse>): MsgTransitionGroupResponse {
    const message = createBaseMsgTransitionGroupResponse();
    return message;
  },
  fromAmino(_: MsgTransitionGroupResponseAmino): MsgTransitionGroupResponse {
    const message = createBaseMsgTransitionGroupResponse();
    return message;
  },
  toAmino(_: MsgTransitionGroupResponse): MsgTransitionGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransitionGroupResponseAminoMsg): MsgTransitionGroupResponse {
    return MsgTransitionGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransitionGroupResponseProtoMsg): MsgTransitionGroupResponse {
    return MsgTransitionGroupResponse.decode(message.value);
  },
  toProto(message: MsgTransitionGroupResponse): Uint8Array {
    return MsgTransitionGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransitionGroupResponse): MsgTransitionGroupResponseProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.MsgTransitionGroupResponse",
      value: MsgTransitionGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgForceTransitionGroup(): MsgForceTransitionGroup {
  return {
    incomingGroupId: BigInt(0),
    execTime: new Date(),
    authority: ""
  };
}
export const MsgForceTransitionGroup = {
  typeUrl: "/band.bandtss.v1beta1.MsgForceTransitionGroup",
  encode(message: MsgForceTransitionGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.incomingGroupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.incomingGroupId);
    }
    if (message.execTime !== undefined) {
      Timestamp.encode(toTimestamp(message.execTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(26).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceTransitionGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceTransitionGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incomingGroupId = reader.uint64();
          break;
        case 2:
          message.execTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgForceTransitionGroup>): MsgForceTransitionGroup {
    const message = createBaseMsgForceTransitionGroup();
    message.incomingGroupId = object.incomingGroupId !== undefined && object.incomingGroupId !== null ? BigInt(object.incomingGroupId.toString()) : BigInt(0);
    message.execTime = object.execTime ?? undefined;
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgForceTransitionGroupAmino): MsgForceTransitionGroup {
    const message = createBaseMsgForceTransitionGroup();
    if (object.incoming_group_id !== undefined && object.incoming_group_id !== null) {
      message.incomingGroupId = BigInt(object.incoming_group_id);
    }
    if (object.exec_time !== undefined && object.exec_time !== null) {
      message.execTime = fromTimestamp(Timestamp.fromAmino(object.exec_time));
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgForceTransitionGroup): MsgForceTransitionGroupAmino {
    const obj: any = {};
    obj.incoming_group_id = message.incomingGroupId !== BigInt(0) ? message.incomingGroupId?.toString() : undefined;
    obj.exec_time = message.execTime ? Timestamp.toAmino(toTimestamp(message.execTime)) : undefined;
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgForceTransitionGroupAminoMsg): MsgForceTransitionGroup {
    return MsgForceTransitionGroup.fromAmino(object.value);
  },
  toAminoMsg(message: MsgForceTransitionGroup): MsgForceTransitionGroupAminoMsg {
    return {
      type: "bandtss/ForceTransitionGroup",
      value: MsgForceTransitionGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgForceTransitionGroupProtoMsg): MsgForceTransitionGroup {
    return MsgForceTransitionGroup.decode(message.value);
  },
  toProto(message: MsgForceTransitionGroup): Uint8Array {
    return MsgForceTransitionGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgForceTransitionGroup): MsgForceTransitionGroupProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.MsgForceTransitionGroup",
      value: MsgForceTransitionGroup.encode(message).finish()
    };
  }
};
function createBaseMsgForceTransitionGroupResponse(): MsgForceTransitionGroupResponse {
  return {};
}
export const MsgForceTransitionGroupResponse = {
  typeUrl: "/band.bandtss.v1beta1.MsgForceTransitionGroupResponse",
  encode(_: MsgForceTransitionGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceTransitionGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceTransitionGroupResponse();
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
  fromPartial(_: Partial<MsgForceTransitionGroupResponse>): MsgForceTransitionGroupResponse {
    const message = createBaseMsgForceTransitionGroupResponse();
    return message;
  },
  fromAmino(_: MsgForceTransitionGroupResponseAmino): MsgForceTransitionGroupResponse {
    const message = createBaseMsgForceTransitionGroupResponse();
    return message;
  },
  toAmino(_: MsgForceTransitionGroupResponse): MsgForceTransitionGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgForceTransitionGroupResponseAminoMsg): MsgForceTransitionGroupResponse {
    return MsgForceTransitionGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgForceTransitionGroupResponseProtoMsg): MsgForceTransitionGroupResponse {
    return MsgForceTransitionGroupResponse.decode(message.value);
  },
  toProto(message: MsgForceTransitionGroupResponse): Uint8Array {
    return MsgForceTransitionGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgForceTransitionGroupResponse): MsgForceTransitionGroupResponseProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.MsgForceTransitionGroupResponse",
      value: MsgForceTransitionGroupResponse.encode(message).finish()
    };
  }
};
export const Content_InterfaceDecoder = (input: BinaryReader | Uint8Array): GroupTransitionSignatureOrder | TextSignatureOrder | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/band.bandtss.v1beta1.GroupTransitionSignatureOrder":
      return GroupTransitionSignatureOrder.decode(data.value);
    case "/band.tss.v1beta1.TextSignatureOrder":
      return TextSignatureOrder.decode(data.value);
    default:
      return data;
  }
};
export const Content_FromAmino = (content: AnyAmino): Any => {
  switch (content.type) {
    case "/band.bandtss.v1beta1.GroupTransitionSignatureOrder":
      return Any.fromPartial({
        typeUrl: "/band.bandtss.v1beta1.GroupTransitionSignatureOrder",
        value: GroupTransitionSignatureOrder.encode(GroupTransitionSignatureOrder.fromPartial(GroupTransitionSignatureOrder.fromAmino(content.value))).finish()
      });
    case "/band.tss.v1beta1.TextSignatureOrder":
      return Any.fromPartial({
        typeUrl: "/band.tss.v1beta1.TextSignatureOrder",
        value: TextSignatureOrder.encode(TextSignatureOrder.fromPartial(TextSignatureOrder.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Content_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/band.bandtss.v1beta1.GroupTransitionSignatureOrder":
      return {
        type: "/band.bandtss.v1beta1.GroupTransitionSignatureOrder",
        value: GroupTransitionSignatureOrder.toAmino(GroupTransitionSignatureOrder.decode(content.value, undefined))
      };
    case "/band.tss.v1beta1.TextSignatureOrder":
      return {
        type: "/band.tss.v1beta1.TextSignatureOrder",
        value: TextSignatureOrder.toAmino(TextSignatureOrder.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};