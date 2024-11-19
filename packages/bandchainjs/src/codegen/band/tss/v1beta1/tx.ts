//@ts-nocheck
import { Round1Info, Round1InfoAmino, Round1InfoSDKType, Round2Info, Round2InfoAmino, Round2InfoSDKType, Complaint, ComplaintAmino, ComplaintSDKType, DE, DEAmino, DESDKType } from "./tss";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/** MsgSubmitDKGRound1 is the Msg/MsgSubmitDKGRound1 request type. */
export interface MsgSubmitDKGRound1 {
  /** group_id is ID of the group. */
  groupId: bigint;
  /** round1_info is all data that require to handle round 1. */
  round1Info: Round1Info;
  /**
   * sender is the user address that submits the group creation information;
   * must be a member of this group.
   */
  sender: string;
}
export interface MsgSubmitDKGRound1ProtoMsg {
  typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound1";
  value: Uint8Array;
}
/** MsgSubmitDKGRound1 is the Msg/MsgSubmitDKGRound1 request type. */
export interface MsgSubmitDKGRound1Amino {
  /** group_id is ID of the group. */
  group_id?: string;
  /** round1_info is all data that require to handle round 1. */
  round1_info?: Round1InfoAmino;
  /**
   * sender is the user address that submits the group creation information;
   * must be a member of this group.
   */
  sender?: string;
}
export interface MsgSubmitDKGRound1AminoMsg {
  type: "tss/MsgSubmitDKGRound1";
  value: MsgSubmitDKGRound1Amino;
}
/** MsgSubmitDKGRound1 is the Msg/MsgSubmitDKGRound1 request type. */
export interface MsgSubmitDKGRound1SDKType {
  group_id: bigint;
  round1_info: Round1InfoSDKType;
  sender: string;
}
/** MsgSubmitDKGRound1Response is the Msg/SubmitDKGRound1 response type. */
export interface MsgSubmitDKGRound1Response {}
export interface MsgSubmitDKGRound1ResponseProtoMsg {
  typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound1Response";
  value: Uint8Array;
}
/** MsgSubmitDKGRound1Response is the Msg/SubmitDKGRound1 response type. */
export interface MsgSubmitDKGRound1ResponseAmino {}
export interface MsgSubmitDKGRound1ResponseAminoMsg {
  type: "/band.tss.v1beta1.MsgSubmitDKGRound1Response";
  value: MsgSubmitDKGRound1ResponseAmino;
}
/** MsgSubmitDKGRound1Response is the Msg/SubmitDKGRound1 response type. */
export interface MsgSubmitDKGRound1ResponseSDKType {}
/** MsgSubmitDKGRound2 is the Msg/SubmitDKGRound2 request type. */
export interface MsgSubmitDKGRound2 {
  /** group_id is ID of the group. */
  groupId: bigint;
  /** round2_info is all data that is required to handle round 2. */
  round2Info: Round2Info;
  /**
   * sender is the user address that submits the group creation information;
   * must be a member of this group.
   */
  sender: string;
}
export interface MsgSubmitDKGRound2ProtoMsg {
  typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound2";
  value: Uint8Array;
}
/** MsgSubmitDKGRound2 is the Msg/SubmitDKGRound2 request type. */
export interface MsgSubmitDKGRound2Amino {
  /** group_id is ID of the group. */
  group_id?: string;
  /** round2_info is all data that is required to handle round 2. */
  round2_info?: Round2InfoAmino;
  /**
   * sender is the user address that submits the group creation information;
   * must be a member of this group.
   */
  sender?: string;
}
export interface MsgSubmitDKGRound2AminoMsg {
  type: "tss/MsgSubmitDKGRound2";
  value: MsgSubmitDKGRound2Amino;
}
/** MsgSubmitDKGRound2 is the Msg/SubmitDKGRound2 request type. */
export interface MsgSubmitDKGRound2SDKType {
  group_id: bigint;
  round2_info: Round2InfoSDKType;
  sender: string;
}
/** MsgSubmitDKGRound2Response is response data for MsgSubmitDKGRound2 message */
export interface MsgSubmitDKGRound2Response {}
export interface MsgSubmitDKGRound2ResponseProtoMsg {
  typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound2Response";
  value: Uint8Array;
}
/** MsgSubmitDKGRound2Response is response data for MsgSubmitDKGRound2 message */
export interface MsgSubmitDKGRound2ResponseAmino {}
export interface MsgSubmitDKGRound2ResponseAminoMsg {
  type: "/band.tss.v1beta1.MsgSubmitDKGRound2Response";
  value: MsgSubmitDKGRound2ResponseAmino;
}
/** MsgSubmitDKGRound2Response is response data for MsgSubmitDKGRound2 message */
export interface MsgSubmitDKGRound2ResponseSDKType {}
/** MsgComplain is a message used to complain about malicious actors in the group. */
export interface MsgComplain {
  /** group_id is ID of the group. */
  groupId: bigint;
  /** complaints is a list of complaints. */
  complaints: Complaint[];
  /**
   * sender is the user address that submits the group creation information;
   * must be a member of this group.
   */
  sender: string;
}
export interface MsgComplainProtoMsg {
  typeUrl: "/band.tss.v1beta1.MsgComplain";
  value: Uint8Array;
}
/** MsgComplain is a message used to complain about malicious actors in the group. */
export interface MsgComplainAmino {
  /** group_id is ID of the group. */
  group_id?: string;
  /** complaints is a list of complaints. */
  complaints?: ComplaintAmino[];
  /**
   * sender is the user address that submits the group creation information;
   * must be a member of this group.
   */
  sender?: string;
}
export interface MsgComplainAminoMsg {
  type: "tss/MsgComplaint";
  value: MsgComplainAmino;
}
/** MsgComplain is a message used to complain about malicious actors in the group. */
export interface MsgComplainSDKType {
  group_id: bigint;
  complaints: ComplaintSDKType[];
  sender: string;
}
/** MsgComplainResponse is response data for MsgComplain message */
export interface MsgComplainResponse {}
export interface MsgComplainResponseProtoMsg {
  typeUrl: "/band.tss.v1beta1.MsgComplainResponse";
  value: Uint8Array;
}
/** MsgComplainResponse is response data for MsgComplain message */
export interface MsgComplainResponseAmino {}
export interface MsgComplainResponseAminoMsg {
  type: "/band.tss.v1beta1.MsgComplainResponse";
  value: MsgComplainResponseAmino;
}
/** MsgComplainResponse is response data for MsgComplain message */
export interface MsgComplainResponseSDKType {}
/** MsgConfirm is a message used to confirm own public key. */
export interface MsgConfirm {
  /** group_id is ID of the group. */
  groupId: bigint;
  /** member_id is ID of the sender. */
  memberId: bigint;
  /**
   * own_pub_key_sig is a signature of the member_i on its own PubKey to confirm
   * that the address is able to derive the PubKey.
   */
  ownPubKeySig: Uint8Array;
  /**
   * sender is the user address that submits the group creation information;
   * must be a member of this group.
   */
  sender: string;
}
export interface MsgConfirmProtoMsg {
  typeUrl: "/band.tss.v1beta1.MsgConfirm";
  value: Uint8Array;
}
/** MsgConfirm is a message used to confirm own public key. */
export interface MsgConfirmAmino {
  /** group_id is ID of the group. */
  group_id?: string;
  /** member_id is ID of the sender. */
  member_id?: string;
  /**
   * own_pub_key_sig is a signature of the member_i on its own PubKey to confirm
   * that the address is able to derive the PubKey.
   */
  own_pub_key_sig?: string;
  /**
   * sender is the user address that submits the group creation information;
   * must be a member of this group.
   */
  sender?: string;
}
export interface MsgConfirmAminoMsg {
  type: "tss/MsgConfirm";
  value: MsgConfirmAmino;
}
/** MsgConfirm is a message used to confirm own public key. */
export interface MsgConfirmSDKType {
  group_id: bigint;
  member_id: bigint;
  own_pub_key_sig: Uint8Array;
  sender: string;
}
/** MsgConfirmResponse is response data for MsgConfirm message */
export interface MsgConfirmResponse {}
export interface MsgConfirmResponseProtoMsg {
  typeUrl: "/band.tss.v1beta1.MsgConfirmResponse";
  value: Uint8Array;
}
/** MsgConfirmResponse is response data for MsgConfirm message */
export interface MsgConfirmResponseAmino {}
export interface MsgConfirmResponseAminoMsg {
  type: "/band.tss.v1beta1.MsgConfirmResponse";
  value: MsgConfirmResponseAmino;
}
/** MsgConfirmResponse is response data for MsgConfirm message */
export interface MsgConfirmResponseSDKType {}
/** MsgSubmitDEs is a message used to submit a list of DEs. */
export interface MsgSubmitDEs {
  /** des is a list of DE objects. */
  des: DE[];
  /** sender is the user address that submits DE objects. */
  sender: string;
}
export interface MsgSubmitDEsProtoMsg {
  typeUrl: "/band.tss.v1beta1.MsgSubmitDEs";
  value: Uint8Array;
}
/** MsgSubmitDEs is a message used to submit a list of DEs. */
export interface MsgSubmitDEsAmino {
  /** des is a list of DE objects. */
  des?: DEAmino[];
  /** sender is the user address that submits DE objects. */
  sender?: string;
}
export interface MsgSubmitDEsAminoMsg {
  type: "tss/MsgSubmitDEs";
  value: MsgSubmitDEsAmino;
}
/** MsgSubmitDEs is a message used to submit a list of DEs. */
export interface MsgSubmitDEsSDKType {
  des: DESDKType[];
  sender: string;
}
/** MsgSubmitDEsResponse is response data for MsgSubmitDEs message */
export interface MsgSubmitDEsResponse {}
export interface MsgSubmitDEsResponseProtoMsg {
  typeUrl: "/band.tss.v1beta1.MsgSubmitDEsResponse";
  value: Uint8Array;
}
/** MsgSubmitDEsResponse is response data for MsgSubmitDEs message */
export interface MsgSubmitDEsResponseAmino {}
export interface MsgSubmitDEsResponseAminoMsg {
  type: "/band.tss.v1beta1.MsgSubmitDEsResponse";
  value: MsgSubmitDEsResponseAmino;
}
/** MsgSubmitDEsResponse is response data for MsgSubmitDEs message */
export interface MsgSubmitDEsResponseSDKType {}
/** MsgSubmitSignature is a message used to submitting signature data. */
export interface MsgSubmitSignature {
  /** signing_id is the unique identifier of the signing process. */
  signingId: bigint;
  /** member_id is the unique identifier of the signer in the group. */
  memberId: bigint;
  /** signature is the signature produced by the signer. */
  signature: Uint8Array;
  /** signer is the address who signs a message; must be a member of the group. */
  signer: string;
}
export interface MsgSubmitSignatureProtoMsg {
  typeUrl: "/band.tss.v1beta1.MsgSubmitSignature";
  value: Uint8Array;
}
/** MsgSubmitSignature is a message used to submitting signature data. */
export interface MsgSubmitSignatureAmino {
  /** signing_id is the unique identifier of the signing process. */
  signing_id?: string;
  /** member_id is the unique identifier of the signer in the group. */
  member_id?: string;
  /** signature is the signature produced by the signer. */
  signature?: string;
  /** signer is the address who signs a message; must be a member of the group. */
  signer?: string;
}
export interface MsgSubmitSignatureAminoMsg {
  type: "tss/MsgSubmitSignature";
  value: MsgSubmitSignatureAmino;
}
/** MsgSubmitSignature is a message used to submitting signature data. */
export interface MsgSubmitSignatureSDKType {
  signing_id: bigint;
  member_id: bigint;
  signature: Uint8Array;
  signer: string;
}
/** MsgSubmitSignatureResponse is response data for MsgSubmitSignature message */
export interface MsgSubmitSignatureResponse {}
export interface MsgSubmitSignatureResponseProtoMsg {
  typeUrl: "/band.tss.v1beta1.MsgSubmitSignatureResponse";
  value: Uint8Array;
}
/** MsgSubmitSignatureResponse is response data for MsgSubmitSignature message */
export interface MsgSubmitSignatureResponseAmino {}
export interface MsgSubmitSignatureResponseAminoMsg {
  type: "/band.tss.v1beta1.MsgSubmitSignatureResponse";
  value: MsgSubmitSignatureResponseAmino;
}
/** MsgSubmitSignatureResponse is response data for MsgSubmitSignature message */
export interface MsgSubmitSignatureResponseSDKType {}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** params defines the x/tss parameters to update. */
  params: Params;
  /** authority is the address of the governance account. */
  authority: string;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/band.tss.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /** params defines the x/tss parameters to update. */
  params?: ParamsAmino;
  /** authority is the address of the governance account. */
  authority?: string;
}
export interface MsgUpdateParamsAminoMsg {
  type: "tss/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  params: ParamsSDKType;
  authority: string;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/band.tss.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/band.tss.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgSubmitDKGRound1(): MsgSubmitDKGRound1 {
  return {
    groupId: BigInt(0),
    round1Info: Round1Info.fromPartial({}),
    sender: ""
  };
}
export const MsgSubmitDKGRound1 = {
  typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound1",
  encode(message: MsgSubmitDKGRound1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.round1Info !== undefined) {
      Round1Info.encode(message.round1Info, writer.uint32(18).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitDKGRound1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitDKGRound1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.round1Info = Round1Info.decode(reader, reader.uint32());
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitDKGRound1>): MsgSubmitDKGRound1 {
    const message = createBaseMsgSubmitDKGRound1();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.round1Info = object.round1Info !== undefined && object.round1Info !== null ? Round1Info.fromPartial(object.round1Info) : undefined;
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitDKGRound1Amino): MsgSubmitDKGRound1 {
    const message = createBaseMsgSubmitDKGRound1();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.round1_info !== undefined && object.round1_info !== null) {
      message.round1Info = Round1Info.fromAmino(object.round1_info);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgSubmitDKGRound1): MsgSubmitDKGRound1Amino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    obj.round1_info = message.round1Info ? Round1Info.toAmino(message.round1Info) : undefined;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitDKGRound1AminoMsg): MsgSubmitDKGRound1 {
    return MsgSubmitDKGRound1.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitDKGRound1): MsgSubmitDKGRound1AminoMsg {
    return {
      type: "tss/MsgSubmitDKGRound1",
      value: MsgSubmitDKGRound1.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitDKGRound1ProtoMsg): MsgSubmitDKGRound1 {
    return MsgSubmitDKGRound1.decode(message.value);
  },
  toProto(message: MsgSubmitDKGRound1): Uint8Array {
    return MsgSubmitDKGRound1.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitDKGRound1): MsgSubmitDKGRound1ProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound1",
      value: MsgSubmitDKGRound1.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitDKGRound1Response(): MsgSubmitDKGRound1Response {
  return {};
}
export const MsgSubmitDKGRound1Response = {
  typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound1Response",
  encode(_: MsgSubmitDKGRound1Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitDKGRound1Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitDKGRound1Response();
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
  fromPartial(_: Partial<MsgSubmitDKGRound1Response>): MsgSubmitDKGRound1Response {
    const message = createBaseMsgSubmitDKGRound1Response();
    return message;
  },
  fromAmino(_: MsgSubmitDKGRound1ResponseAmino): MsgSubmitDKGRound1Response {
    const message = createBaseMsgSubmitDKGRound1Response();
    return message;
  },
  toAmino(_: MsgSubmitDKGRound1Response): MsgSubmitDKGRound1ResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitDKGRound1ResponseAminoMsg): MsgSubmitDKGRound1Response {
    return MsgSubmitDKGRound1Response.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitDKGRound1ResponseProtoMsg): MsgSubmitDKGRound1Response {
    return MsgSubmitDKGRound1Response.decode(message.value);
  },
  toProto(message: MsgSubmitDKGRound1Response): Uint8Array {
    return MsgSubmitDKGRound1Response.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitDKGRound1Response): MsgSubmitDKGRound1ResponseProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound1Response",
      value: MsgSubmitDKGRound1Response.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitDKGRound2(): MsgSubmitDKGRound2 {
  return {
    groupId: BigInt(0),
    round2Info: Round2Info.fromPartial({}),
    sender: ""
  };
}
export const MsgSubmitDKGRound2 = {
  typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound2",
  encode(message: MsgSubmitDKGRound2, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.round2Info !== undefined) {
      Round2Info.encode(message.round2Info, writer.uint32(18).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitDKGRound2 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitDKGRound2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.round2Info = Round2Info.decode(reader, reader.uint32());
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitDKGRound2>): MsgSubmitDKGRound2 {
    const message = createBaseMsgSubmitDKGRound2();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.round2Info = object.round2Info !== undefined && object.round2Info !== null ? Round2Info.fromPartial(object.round2Info) : undefined;
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitDKGRound2Amino): MsgSubmitDKGRound2 {
    const message = createBaseMsgSubmitDKGRound2();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.round2_info !== undefined && object.round2_info !== null) {
      message.round2Info = Round2Info.fromAmino(object.round2_info);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgSubmitDKGRound2): MsgSubmitDKGRound2Amino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    obj.round2_info = message.round2Info ? Round2Info.toAmino(message.round2Info) : undefined;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitDKGRound2AminoMsg): MsgSubmitDKGRound2 {
    return MsgSubmitDKGRound2.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitDKGRound2): MsgSubmitDKGRound2AminoMsg {
    return {
      type: "tss/MsgSubmitDKGRound2",
      value: MsgSubmitDKGRound2.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitDKGRound2ProtoMsg): MsgSubmitDKGRound2 {
    return MsgSubmitDKGRound2.decode(message.value);
  },
  toProto(message: MsgSubmitDKGRound2): Uint8Array {
    return MsgSubmitDKGRound2.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitDKGRound2): MsgSubmitDKGRound2ProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound2",
      value: MsgSubmitDKGRound2.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitDKGRound2Response(): MsgSubmitDKGRound2Response {
  return {};
}
export const MsgSubmitDKGRound2Response = {
  typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound2Response",
  encode(_: MsgSubmitDKGRound2Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitDKGRound2Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitDKGRound2Response();
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
  fromPartial(_: Partial<MsgSubmitDKGRound2Response>): MsgSubmitDKGRound2Response {
    const message = createBaseMsgSubmitDKGRound2Response();
    return message;
  },
  fromAmino(_: MsgSubmitDKGRound2ResponseAmino): MsgSubmitDKGRound2Response {
    const message = createBaseMsgSubmitDKGRound2Response();
    return message;
  },
  toAmino(_: MsgSubmitDKGRound2Response): MsgSubmitDKGRound2ResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitDKGRound2ResponseAminoMsg): MsgSubmitDKGRound2Response {
    return MsgSubmitDKGRound2Response.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitDKGRound2ResponseProtoMsg): MsgSubmitDKGRound2Response {
    return MsgSubmitDKGRound2Response.decode(message.value);
  },
  toProto(message: MsgSubmitDKGRound2Response): Uint8Array {
    return MsgSubmitDKGRound2Response.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitDKGRound2Response): MsgSubmitDKGRound2ResponseProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound2Response",
      value: MsgSubmitDKGRound2Response.encode(message).finish()
    };
  }
};
function createBaseMsgComplain(): MsgComplain {
  return {
    groupId: BigInt(0),
    complaints: [],
    sender: ""
  };
}
export const MsgComplain = {
  typeUrl: "/band.tss.v1beta1.MsgComplain",
  encode(message: MsgComplain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    for (const v of message.complaints) {
      Complaint.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgComplain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgComplain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.complaints.push(Complaint.decode(reader, reader.uint32()));
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgComplain>): MsgComplain {
    const message = createBaseMsgComplain();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.complaints = object.complaints?.map(e => Complaint.fromPartial(e)) || [];
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgComplainAmino): MsgComplain {
    const message = createBaseMsgComplain();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    message.complaints = object.complaints?.map(e => Complaint.fromAmino(e)) || [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgComplain): MsgComplainAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    if (message.complaints) {
      obj.complaints = message.complaints.map(e => e ? Complaint.toAmino(e) : undefined);
    } else {
      obj.complaints = message.complaints;
    }
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgComplainAminoMsg): MsgComplain {
    return MsgComplain.fromAmino(object.value);
  },
  toAminoMsg(message: MsgComplain): MsgComplainAminoMsg {
    return {
      type: "tss/MsgComplaint",
      value: MsgComplain.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgComplainProtoMsg): MsgComplain {
    return MsgComplain.decode(message.value);
  },
  toProto(message: MsgComplain): Uint8Array {
    return MsgComplain.encode(message).finish();
  },
  toProtoMsg(message: MsgComplain): MsgComplainProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.MsgComplain",
      value: MsgComplain.encode(message).finish()
    };
  }
};
function createBaseMsgComplainResponse(): MsgComplainResponse {
  return {};
}
export const MsgComplainResponse = {
  typeUrl: "/band.tss.v1beta1.MsgComplainResponse",
  encode(_: MsgComplainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgComplainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgComplainResponse();
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
  fromPartial(_: Partial<MsgComplainResponse>): MsgComplainResponse {
    const message = createBaseMsgComplainResponse();
    return message;
  },
  fromAmino(_: MsgComplainResponseAmino): MsgComplainResponse {
    const message = createBaseMsgComplainResponse();
    return message;
  },
  toAmino(_: MsgComplainResponse): MsgComplainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgComplainResponseAminoMsg): MsgComplainResponse {
    return MsgComplainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgComplainResponseProtoMsg): MsgComplainResponse {
    return MsgComplainResponse.decode(message.value);
  },
  toProto(message: MsgComplainResponse): Uint8Array {
    return MsgComplainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgComplainResponse): MsgComplainResponseProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.MsgComplainResponse",
      value: MsgComplainResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfirm(): MsgConfirm {
  return {
    groupId: BigInt(0),
    memberId: BigInt(0),
    ownPubKeySig: new Uint8Array(),
    sender: ""
  };
}
export const MsgConfirm = {
  typeUrl: "/band.tss.v1beta1.MsgConfirm",
  encode(message: MsgConfirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.memberId !== BigInt(0)) {
      writer.uint32(16).uint64(message.memberId);
    }
    if (message.ownPubKeySig.length !== 0) {
      writer.uint32(26).bytes(message.ownPubKeySig);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.memberId = reader.uint64();
          break;
        case 3:
          message.ownPubKeySig = reader.bytes();
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
  fromPartial(object: Partial<MsgConfirm>): MsgConfirm {
    const message = createBaseMsgConfirm();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.memberId = object.memberId !== undefined && object.memberId !== null ? BigInt(object.memberId.toString()) : BigInt(0);
    message.ownPubKeySig = object.ownPubKeySig ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgConfirmAmino): MsgConfirm {
    const message = createBaseMsgConfirm();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.member_id !== undefined && object.member_id !== null) {
      message.memberId = BigInt(object.member_id);
    }
    if (object.own_pub_key_sig !== undefined && object.own_pub_key_sig !== null) {
      message.ownPubKeySig = bytesFromBase64(object.own_pub_key_sig);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgConfirm): MsgConfirmAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    obj.member_id = message.memberId !== BigInt(0) ? message.memberId?.toString() : undefined;
    obj.own_pub_key_sig = message.ownPubKeySig ? base64FromBytes(message.ownPubKeySig) : undefined;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgConfirmAminoMsg): MsgConfirm {
    return MsgConfirm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConfirm): MsgConfirmAminoMsg {
    return {
      type: "tss/MsgConfirm",
      value: MsgConfirm.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConfirmProtoMsg): MsgConfirm {
    return MsgConfirm.decode(message.value);
  },
  toProto(message: MsgConfirm): Uint8Array {
    return MsgConfirm.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirm): MsgConfirmProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.MsgConfirm",
      value: MsgConfirm.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmResponse(): MsgConfirmResponse {
  return {};
}
export const MsgConfirmResponse = {
  typeUrl: "/band.tss.v1beta1.MsgConfirmResponse",
  encode(_: MsgConfirmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmResponse();
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
  fromPartial(_: Partial<MsgConfirmResponse>): MsgConfirmResponse {
    const message = createBaseMsgConfirmResponse();
    return message;
  },
  fromAmino(_: MsgConfirmResponseAmino): MsgConfirmResponse {
    const message = createBaseMsgConfirmResponse();
    return message;
  },
  toAmino(_: MsgConfirmResponse): MsgConfirmResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConfirmResponseAminoMsg): MsgConfirmResponse {
    return MsgConfirmResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmResponseProtoMsg): MsgConfirmResponse {
    return MsgConfirmResponse.decode(message.value);
  },
  toProto(message: MsgConfirmResponse): Uint8Array {
    return MsgConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmResponse): MsgConfirmResponseProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.MsgConfirmResponse",
      value: MsgConfirmResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitDEs(): MsgSubmitDEs {
  return {
    des: [],
    sender: ""
  };
}
export const MsgSubmitDEs = {
  typeUrl: "/band.tss.v1beta1.MsgSubmitDEs",
  encode(message: MsgSubmitDEs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.des) {
      DE.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitDEs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitDEs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.des.push(DE.decode(reader, reader.uint32()));
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitDEs>): MsgSubmitDEs {
    const message = createBaseMsgSubmitDEs();
    message.des = object.des?.map(e => DE.fromPartial(e)) || [];
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitDEsAmino): MsgSubmitDEs {
    const message = createBaseMsgSubmitDEs();
    message.des = object.des?.map(e => DE.fromAmino(e)) || [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgSubmitDEs): MsgSubmitDEsAmino {
    const obj: any = {};
    if (message.des) {
      obj.des = message.des.map(e => e ? DE.toAmino(e) : undefined);
    } else {
      obj.des = message.des;
    }
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitDEsAminoMsg): MsgSubmitDEs {
    return MsgSubmitDEs.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitDEs): MsgSubmitDEsAminoMsg {
    return {
      type: "tss/MsgSubmitDEs",
      value: MsgSubmitDEs.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitDEsProtoMsg): MsgSubmitDEs {
    return MsgSubmitDEs.decode(message.value);
  },
  toProto(message: MsgSubmitDEs): Uint8Array {
    return MsgSubmitDEs.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitDEs): MsgSubmitDEsProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.MsgSubmitDEs",
      value: MsgSubmitDEs.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitDEsResponse(): MsgSubmitDEsResponse {
  return {};
}
export const MsgSubmitDEsResponse = {
  typeUrl: "/band.tss.v1beta1.MsgSubmitDEsResponse",
  encode(_: MsgSubmitDEsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitDEsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitDEsResponse();
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
  fromPartial(_: Partial<MsgSubmitDEsResponse>): MsgSubmitDEsResponse {
    const message = createBaseMsgSubmitDEsResponse();
    return message;
  },
  fromAmino(_: MsgSubmitDEsResponseAmino): MsgSubmitDEsResponse {
    const message = createBaseMsgSubmitDEsResponse();
    return message;
  },
  toAmino(_: MsgSubmitDEsResponse): MsgSubmitDEsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitDEsResponseAminoMsg): MsgSubmitDEsResponse {
    return MsgSubmitDEsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitDEsResponseProtoMsg): MsgSubmitDEsResponse {
    return MsgSubmitDEsResponse.decode(message.value);
  },
  toProto(message: MsgSubmitDEsResponse): Uint8Array {
    return MsgSubmitDEsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitDEsResponse): MsgSubmitDEsResponseProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.MsgSubmitDEsResponse",
      value: MsgSubmitDEsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitSignature(): MsgSubmitSignature {
  return {
    signingId: BigInt(0),
    memberId: BigInt(0),
    signature: new Uint8Array(),
    signer: ""
  };
}
export const MsgSubmitSignature = {
  typeUrl: "/band.tss.v1beta1.MsgSubmitSignature",
  encode(message: MsgSubmitSignature, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signingId !== BigInt(0)) {
      writer.uint32(8).uint64(message.signingId);
    }
    if (message.memberId !== BigInt(0)) {
      writer.uint32(16).uint64(message.memberId);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitSignature {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signingId = reader.uint64();
          break;
        case 2:
          message.memberId = reader.uint64();
          break;
        case 3:
          message.signature = reader.bytes();
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitSignature>): MsgSubmitSignature {
    const message = createBaseMsgSubmitSignature();
    message.signingId = object.signingId !== undefined && object.signingId !== null ? BigInt(object.signingId.toString()) : BigInt(0);
    message.memberId = object.memberId !== undefined && object.memberId !== null ? BigInt(object.memberId.toString()) : BigInt(0);
    message.signature = object.signature ?? new Uint8Array();
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitSignatureAmino): MsgSubmitSignature {
    const message = createBaseMsgSubmitSignature();
    if (object.signing_id !== undefined && object.signing_id !== null) {
      message.signingId = BigInt(object.signing_id);
    }
    if (object.member_id !== undefined && object.member_id !== null) {
      message.memberId = BigInt(object.member_id);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgSubmitSignature): MsgSubmitSignatureAmino {
    const obj: any = {};
    obj.signing_id = message.signingId !== BigInt(0) ? message.signingId?.toString() : undefined;
    obj.member_id = message.memberId !== BigInt(0) ? message.memberId?.toString() : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitSignatureAminoMsg): MsgSubmitSignature {
    return MsgSubmitSignature.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitSignature): MsgSubmitSignatureAminoMsg {
    return {
      type: "tss/MsgSubmitSignature",
      value: MsgSubmitSignature.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitSignatureProtoMsg): MsgSubmitSignature {
    return MsgSubmitSignature.decode(message.value);
  },
  toProto(message: MsgSubmitSignature): Uint8Array {
    return MsgSubmitSignature.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitSignature): MsgSubmitSignatureProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.MsgSubmitSignature",
      value: MsgSubmitSignature.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitSignatureResponse(): MsgSubmitSignatureResponse {
  return {};
}
export const MsgSubmitSignatureResponse = {
  typeUrl: "/band.tss.v1beta1.MsgSubmitSignatureResponse",
  encode(_: MsgSubmitSignatureResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitSignatureResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitSignatureResponse();
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
  fromPartial(_: Partial<MsgSubmitSignatureResponse>): MsgSubmitSignatureResponse {
    const message = createBaseMsgSubmitSignatureResponse();
    return message;
  },
  fromAmino(_: MsgSubmitSignatureResponseAmino): MsgSubmitSignatureResponse {
    const message = createBaseMsgSubmitSignatureResponse();
    return message;
  },
  toAmino(_: MsgSubmitSignatureResponse): MsgSubmitSignatureResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitSignatureResponseAminoMsg): MsgSubmitSignatureResponse {
    return MsgSubmitSignatureResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitSignatureResponseProtoMsg): MsgSubmitSignatureResponse {
    return MsgSubmitSignatureResponse.decode(message.value);
  },
  toProto(message: MsgSubmitSignatureResponse): Uint8Array {
    return MsgSubmitSignatureResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitSignatureResponse): MsgSubmitSignatureResponseProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.MsgSubmitSignatureResponse",
      value: MsgSubmitSignatureResponse.encode(message).finish()
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
  typeUrl: "/band.tss.v1beta1.MsgUpdateParams",
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
      type: "tss/MsgUpdateParams",
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
      typeUrl: "/band.tss.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/band.tss.v1beta1.MsgUpdateParamsResponse",
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
      typeUrl: "/band.tss.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};