// package: band.tss.v1beta1
// file: band/tss/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as band_tss_v1beta1_tss_pb from "../../../band/tss/v1beta1/tss_pb";
import * as band_tss_v1beta1_genesis_pb from "../../../band/tss/v1beta1/genesis_pb";

export class MsgSubmitDKGRound1 extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  hasRound1Info(): boolean;
  clearRound1Info(): void;
  getRound1Info(): band_tss_v1beta1_tss_pb.Round1Info | undefined;
  setRound1Info(value?: band_tss_v1beta1_tss_pb.Round1Info): void;

  getSender(): string;
  setSender(value: string): void;

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
    round1Info?: band_tss_v1beta1_tss_pb.Round1Info.AsObject,
    sender: string,
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
  getRound2Info(): band_tss_v1beta1_tss_pb.Round2Info | undefined;
  setRound2Info(value?: band_tss_v1beta1_tss_pb.Round2Info): void;

  getSender(): string;
  setSender(value: string): void;

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
    round2Info?: band_tss_v1beta1_tss_pb.Round2Info.AsObject,
    sender: string,
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
  getComplaintsList(): Array<band_tss_v1beta1_tss_pb.Complaint>;
  setComplaintsList(value: Array<band_tss_v1beta1_tss_pb.Complaint>): void;
  addComplaints(value?: band_tss_v1beta1_tss_pb.Complaint, index?: number): band_tss_v1beta1_tss_pb.Complaint;

  getSender(): string;
  setSender(value: string): void;

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
    complaintsList: Array<band_tss_v1beta1_tss_pb.Complaint.AsObject>,
    sender: string,
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

  getSender(): string;
  setSender(value: string): void;

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
    sender: string,
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
  getDesList(): Array<band_tss_v1beta1_tss_pb.DE>;
  setDesList(value: Array<band_tss_v1beta1_tss_pb.DE>): void;
  addDes(value?: band_tss_v1beta1_tss_pb.DE, index?: number): band_tss_v1beta1_tss_pb.DE;

  getSender(): string;
  setSender(value: string): void;

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
    desList: Array<band_tss_v1beta1_tss_pb.DE.AsObject>,
    sender: string,
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

export class MsgResetDE extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgResetDE.AsObject;
  static toObject(includeInstance: boolean, msg: MsgResetDE): MsgResetDE.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgResetDE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgResetDE;
  static deserializeBinaryFromReader(message: MsgResetDE, reader: jspb.BinaryReader): MsgResetDE;
}

export namespace MsgResetDE {
  export type AsObject = {
    sender: string,
  }
}

export class MsgResetDEResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgResetDEResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgResetDEResponse): MsgResetDEResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgResetDEResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgResetDEResponse;
  static deserializeBinaryFromReader(message: MsgResetDEResponse, reader: jspb.BinaryReader): MsgResetDEResponse;
}

export namespace MsgResetDEResponse {
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

  getSigner(): string;
  setSigner(value: string): void;

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
    signer: string,
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

export class MsgUpdateParams extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): band_tss_v1beta1_genesis_pb.Params | undefined;
  setParams(value?: band_tss_v1beta1_genesis_pb.Params): void;

  getAuthority(): string;
  setAuthority(value: string): void;

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
    params?: band_tss_v1beta1_genesis_pb.Params.AsObject,
    authority: string,
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

