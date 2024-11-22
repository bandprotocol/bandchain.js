// package: band.bandtss.v1beta1
// file: band/bandtss/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as band_bandtss_v1beta1_genesis_pb from "../../../band/bandtss/v1beta1/genesis_pb";

export class MsgRequestSignature extends jspb.Message {
  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_any_pb.Any | undefined;
  setContent(value?: google_protobuf_any_pb.Any): void;

  getMemo(): string;
  setMemo(value: string): void;

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
    content?: google_protobuf_any_pb.Any.AsObject,
    memo: string,
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

export class MsgActivate extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getGroupId(): number;
  setGroupId(value: number): void;

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
    sender: string,
    groupId: number,
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

export class MsgUpdateParams extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): band_bandtss_v1beta1_genesis_pb.Params | undefined;
  setParams(value?: band_bandtss_v1beta1_genesis_pb.Params): void;

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
    params?: band_bandtss_v1beta1_genesis_pb.Params.AsObject,
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

export class MsgTransitionGroup extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<string>;
  setMembersList(value: Array<string>): void;
  addMembers(value: string, index?: number): string;

  getThreshold(): number;
  setThreshold(value: number): void;

  hasExecTime(): boolean;
  clearExecTime(): void;
  getExecTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExecTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAuthority(): string;
  setAuthority(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTransitionGroup.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTransitionGroup): MsgTransitionGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgTransitionGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTransitionGroup;
  static deserializeBinaryFromReader(message: MsgTransitionGroup, reader: jspb.BinaryReader): MsgTransitionGroup;
}

export namespace MsgTransitionGroup {
  export type AsObject = {
    membersList: Array<string>,
    threshold: number,
    execTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    authority: string,
  }
}

export class MsgTransitionGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTransitionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTransitionGroupResponse): MsgTransitionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgTransitionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTransitionGroupResponse;
  static deserializeBinaryFromReader(message: MsgTransitionGroupResponse, reader: jspb.BinaryReader): MsgTransitionGroupResponse;
}

export namespace MsgTransitionGroupResponse {
  export type AsObject = {
  }
}

export class MsgForceTransitionGroup extends jspb.Message {
  getIncomingGroupId(): number;
  setIncomingGroupId(value: number): void;

  hasExecTime(): boolean;
  clearExecTime(): void;
  getExecTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExecTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAuthority(): string;
  setAuthority(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgForceTransitionGroup.AsObject;
  static toObject(includeInstance: boolean, msg: MsgForceTransitionGroup): MsgForceTransitionGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgForceTransitionGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgForceTransitionGroup;
  static deserializeBinaryFromReader(message: MsgForceTransitionGroup, reader: jspb.BinaryReader): MsgForceTransitionGroup;
}

export namespace MsgForceTransitionGroup {
  export type AsObject = {
    incomingGroupId: number,
    execTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    authority: string,
  }
}

export class MsgForceTransitionGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgForceTransitionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgForceTransitionGroupResponse): MsgForceTransitionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgForceTransitionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgForceTransitionGroupResponse;
  static deserializeBinaryFromReader(message: MsgForceTransitionGroupResponse, reader: jspb.BinaryReader): MsgForceTransitionGroupResponse;
}

export namespace MsgForceTransitionGroupResponse {
  export type AsObject = {
  }
}

