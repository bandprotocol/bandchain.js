// package: tss.v1beta1
// file: tss/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as amino_amino_pb from "../../amino/amino_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_proto_cosmos_pb from "../../cosmos_proto/cosmos_pb";
import * as cosmos_msg_v1_msg_pb from "../../cosmos/msg/v1/msg_pb";
import * as tss_v1beta1_tss_pb from "../../tss/v1beta1/tss_pb";
import * as tss_v1beta1_genesis_pb from "../../tss/v1beta1/genesis_pb";

export class MsgCreateGroup extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<string>;
  setMembersList(value: Array<string>): void;
  addMembers(value: string, index?: number): string;

  getThreshold(): number;
  setThreshold(value: number): void;

  clearFeeList(): void;
  getFeeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setFeeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addFee(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getAuthority(): string;
  setAuthority(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateGroup.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateGroup): MsgCreateGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateGroup;
  static deserializeBinaryFromReader(message: MsgCreateGroup, reader: jspb.BinaryReader): MsgCreateGroup;
}

export namespace MsgCreateGroup {
  export type AsObject = {
    membersList: Array<string>,
    threshold: number,
    feeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    authority: string,
  }
}

export class MsgCreateGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateGroupResponse): MsgCreateGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateGroupResponse;
  static deserializeBinaryFromReader(message: MsgCreateGroupResponse, reader: jspb.BinaryReader): MsgCreateGroupResponse;
}

export namespace MsgCreateGroupResponse {
  export type AsObject = {
  }
}

export class MsgReplaceGroup extends jspb.Message {
  getFromGroupId(): number;
  setFromGroupId(value: number): void;

  getToGroupId(): number;
  setToGroupId(value: number): void;

  hasExecTime(): boolean;
  clearExecTime(): void;
  getExecTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExecTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAuthority(): string;
  setAuthority(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgReplaceGroup.AsObject;
  static toObject(includeInstance: boolean, msg: MsgReplaceGroup): MsgReplaceGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgReplaceGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgReplaceGroup;
  static deserializeBinaryFromReader(message: MsgReplaceGroup, reader: jspb.BinaryReader): MsgReplaceGroup;
}

export namespace MsgReplaceGroup {
  export type AsObject = {
    fromGroupId: number,
    toGroupId: number,
    execTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    authority: string,
  }
}

export class MsgReplaceGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgReplaceGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgReplaceGroupResponse): MsgReplaceGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgReplaceGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgReplaceGroupResponse;
  static deserializeBinaryFromReader(message: MsgReplaceGroupResponse, reader: jspb.BinaryReader): MsgReplaceGroupResponse;
}

export namespace MsgReplaceGroupResponse {
  export type AsObject = {
  }
}

export class MsgUpdateGroupFee extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  clearFeeList(): void;
  getFeeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setFeeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addFee(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getAuthority(): string;
  setAuthority(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateGroupFee.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateGroupFee): MsgUpdateGroupFee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateGroupFee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateGroupFee;
  static deserializeBinaryFromReader(message: MsgUpdateGroupFee, reader: jspb.BinaryReader): MsgUpdateGroupFee;
}

export namespace MsgUpdateGroupFee {
  export type AsObject = {
    groupId: number,
    feeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    authority: string,
  }
}

export class MsgUpdateGroupFeeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateGroupFeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateGroupFeeResponse): MsgUpdateGroupFeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateGroupFeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateGroupFeeResponse;
  static deserializeBinaryFromReader(message: MsgUpdateGroupFeeResponse, reader: jspb.BinaryReader): MsgUpdateGroupFeeResponse;
}

export namespace MsgUpdateGroupFeeResponse {
  export type AsObject = {
  }
}

export class MsgSubmitDKGRound1 extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  hasRound1Info(): boolean;
  clearRound1Info(): void;
  getRound1Info(): tss_v1beta1_tss_pb.Round1Info | undefined;
  setRound1Info(value?: tss_v1beta1_tss_pb.Round1Info): void;

  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitDKGRound1.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitDKGRound1): MsgSubmitDKGRound1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubmitDKGRound1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitDKGRound1;
  static deserializeBinaryFromReader(message: MsgSubmitDKGRound1, reader: jspb.BinaryReader): MsgSubmitDKGRound1;
}

export namespace MsgSubmitDKGRound1 {
  export type AsObject = {
    groupId: number,
    round1Info?: tss_v1beta1_tss_pb.Round1Info.AsObject,
    address: string,
  }
}

export class MsgSubmitDKGRound1Response extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitDKGRound1Response.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitDKGRound1Response): MsgSubmitDKGRound1Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubmitDKGRound1Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitDKGRound1Response;
  static deserializeBinaryFromReader(message: MsgSubmitDKGRound1Response, reader: jspb.BinaryReader): MsgSubmitDKGRound1Response;
}

export namespace MsgSubmitDKGRound1Response {
  export type AsObject = {
  }
}

export class MsgSubmitDKGRound2 extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  hasRound2Info(): boolean;
  clearRound2Info(): void;
  getRound2Info(): tss_v1beta1_tss_pb.Round2Info | undefined;
  setRound2Info(value?: tss_v1beta1_tss_pb.Round2Info): void;

  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitDKGRound2.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitDKGRound2): MsgSubmitDKGRound2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubmitDKGRound2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitDKGRound2;
  static deserializeBinaryFromReader(message: MsgSubmitDKGRound2, reader: jspb.BinaryReader): MsgSubmitDKGRound2;
}

export namespace MsgSubmitDKGRound2 {
  export type AsObject = {
    groupId: number,
    round2Info?: tss_v1beta1_tss_pb.Round2Info.AsObject,
    address: string,
  }
}

export class MsgSubmitDKGRound2Response extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitDKGRound2Response.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitDKGRound2Response): MsgSubmitDKGRound2Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubmitDKGRound2Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitDKGRound2Response;
  static deserializeBinaryFromReader(message: MsgSubmitDKGRound2Response, reader: jspb.BinaryReader): MsgSubmitDKGRound2Response;
}

export namespace MsgSubmitDKGRound2Response {
  export type AsObject = {
  }
}

export class MsgComplain extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  clearComplaintsList(): void;
  getComplaintsList(): Array<tss_v1beta1_tss_pb.Complaint>;
  setComplaintsList(value: Array<tss_v1beta1_tss_pb.Complaint>): void;
  addComplaints(value?: tss_v1beta1_tss_pb.Complaint, index?: number): tss_v1beta1_tss_pb.Complaint;

  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgComplain.AsObject;
  static toObject(includeInstance: boolean, msg: MsgComplain): MsgComplain.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgComplain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgComplain;
  static deserializeBinaryFromReader(message: MsgComplain, reader: jspb.BinaryReader): MsgComplain;
}

export namespace MsgComplain {
  export type AsObject = {
    groupId: number,
    complaintsList: Array<tss_v1beta1_tss_pb.Complaint.AsObject>,
    address: string,
  }
}

export class MsgComplainResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgComplainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgComplainResponse): MsgComplainResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgComplainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgComplainResponse;
  static deserializeBinaryFromReader(message: MsgComplainResponse, reader: jspb.BinaryReader): MsgComplainResponse;
}

export namespace MsgComplainResponse {
  export type AsObject = {
  }
}

export class MsgConfirm extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  getMemberId(): number;
  setMemberId(value: number): void;

  getOwnPubKeySig(): Uint8Array | string;
  getOwnPubKeySig_asU8(): Uint8Array;
  getOwnPubKeySig_asB64(): string;
  setOwnPubKeySig(value: Uint8Array | string): void;

  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConfirm.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConfirm): MsgConfirm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgConfirm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConfirm;
  static deserializeBinaryFromReader(message: MsgConfirm, reader: jspb.BinaryReader): MsgConfirm;
}

export namespace MsgConfirm {
  export type AsObject = {
    groupId: number,
    memberId: number,
    ownPubKeySig: Uint8Array | string,
    address: string,
  }
}

export class MsgConfirmResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConfirmResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConfirmResponse): MsgConfirmResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgConfirmResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConfirmResponse;
  static deserializeBinaryFromReader(message: MsgConfirmResponse, reader: jspb.BinaryReader): MsgConfirmResponse;
}

export namespace MsgConfirmResponse {
  export type AsObject = {
  }
}

export class MsgSubmitDEs extends jspb.Message {
  clearDesList(): void;
  getDesList(): Array<tss_v1beta1_tss_pb.DE>;
  setDesList(value: Array<tss_v1beta1_tss_pb.DE>): void;
  addDes(value?: tss_v1beta1_tss_pb.DE, index?: number): tss_v1beta1_tss_pb.DE;

  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitDEs.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitDEs): MsgSubmitDEs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubmitDEs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitDEs;
  static deserializeBinaryFromReader(message: MsgSubmitDEs, reader: jspb.BinaryReader): MsgSubmitDEs;
}

export namespace MsgSubmitDEs {
  export type AsObject = {
    desList: Array<tss_v1beta1_tss_pb.DE.AsObject>,
    address: string,
  }
}

export class MsgSubmitDEsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitDEsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitDEsResponse): MsgSubmitDEsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubmitDEsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitDEsResponse;
  static deserializeBinaryFromReader(message: MsgSubmitDEsResponse, reader: jspb.BinaryReader): MsgSubmitDEsResponse;
}

export namespace MsgSubmitDEsResponse {
  export type AsObject = {
  }
}

export class MsgRequestSignature extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_any_pb.Any | undefined;
  setContent(value?: google_protobuf_any_pb.Any): void;

  clearFeeLimitList(): void;
  getFeeLimitList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setFeeLimitList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addFeeLimit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getSender(): string;
  setSender(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRequestSignature.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRequestSignature): MsgRequestSignature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRequestSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRequestSignature;
  static deserializeBinaryFromReader(message: MsgRequestSignature, reader: jspb.BinaryReader): MsgRequestSignature;
}

export namespace MsgRequestSignature {
  export type AsObject = {
    groupId: number,
    content?: google_protobuf_any_pb.Any.AsObject,
    feeLimitList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    sender: string,
  }
}

export class MsgRequestSignatureResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRequestSignatureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRequestSignatureResponse): MsgRequestSignatureResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRequestSignatureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRequestSignatureResponse;
  static deserializeBinaryFromReader(message: MsgRequestSignatureResponse, reader: jspb.BinaryReader): MsgRequestSignatureResponse;
}

export namespace MsgRequestSignatureResponse {
  export type AsObject = {
  }
}

export class MsgSubmitSignature extends jspb.Message {
  getSigningId(): number;
  setSigningId(value: number): void;

  getMemberId(): number;
  setMemberId(value: number): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitSignature.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitSignature): MsgSubmitSignature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubmitSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitSignature;
  static deserializeBinaryFromReader(message: MsgSubmitSignature, reader: jspb.BinaryReader): MsgSubmitSignature;
}

export namespace MsgSubmitSignature {
  export type AsObject = {
    signingId: number,
    memberId: number,
    signature: Uint8Array | string,
    address: string,
  }
}

export class MsgSubmitSignatureResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitSignatureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitSignatureResponse): MsgSubmitSignatureResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubmitSignatureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitSignatureResponse;
  static deserializeBinaryFromReader(message: MsgSubmitSignatureResponse, reader: jspb.BinaryReader): MsgSubmitSignatureResponse;
}

export namespace MsgSubmitSignatureResponse {
  export type AsObject = {
  }
}

export class MsgActivate extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgActivate.AsObject;
  static toObject(includeInstance: boolean, msg: MsgActivate): MsgActivate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgActivate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgActivate;
  static deserializeBinaryFromReader(message: MsgActivate, reader: jspb.BinaryReader): MsgActivate;
}

export namespace MsgActivate {
  export type AsObject = {
    address: string,
  }
}

export class MsgActivateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgActivateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgActivateResponse): MsgActivateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgActivateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgActivateResponse;
  static deserializeBinaryFromReader(message: MsgActivateResponse, reader: jspb.BinaryReader): MsgActivateResponse;
}

export namespace MsgActivateResponse {
  export type AsObject = {
  }
}

export class MsgActive extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgActive.AsObject;
  static toObject(includeInstance: boolean, msg: MsgActive): MsgActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgActive;
  static deserializeBinaryFromReader(message: MsgActive, reader: jspb.BinaryReader): MsgActive;
}

export namespace MsgActive {
  export type AsObject = {
    address: string,
  }
}

export class MsgActiveResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgActiveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgActiveResponse): MsgActiveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgActiveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgActiveResponse;
  static deserializeBinaryFromReader(message: MsgActiveResponse, reader: jspb.BinaryReader): MsgActiveResponse;
}

export namespace MsgActiveResponse {
  export type AsObject = {
  }
}

export class MsgUpdateParams extends jspb.Message {
  getAuthority(): string;
  setAuthority(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): tss_v1beta1_genesis_pb.Params | undefined;
  setParams(value?: tss_v1beta1_genesis_pb.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateParams.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateParams): MsgUpdateParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateParams;
  static deserializeBinaryFromReader(message: MsgUpdateParams, reader: jspb.BinaryReader): MsgUpdateParams;
}

export namespace MsgUpdateParams {
  export type AsObject = {
    authority: string,
    params?: tss_v1beta1_genesis_pb.Params.AsObject,
  }
}

export class MsgUpdateParamsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateParamsResponse): MsgUpdateParamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateParamsResponse;
  static deserializeBinaryFromReader(message: MsgUpdateParamsResponse, reader: jspb.BinaryReader): MsgUpdateParamsResponse;
}

export namespace MsgUpdateParamsResponse {
  export type AsObject = {
  }
}

