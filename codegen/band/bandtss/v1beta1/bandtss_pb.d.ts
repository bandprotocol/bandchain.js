// package: band.bandtss.v1beta1
// file: band/bandtss/v1beta1/bandtss.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";

export class Member extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getGroupId(): number;
  setGroupId(value: number): void;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  hasSince(): boolean;
  clearSince(): void;
  getSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSince(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Member.AsObject;
  static toObject(includeInstance: boolean, msg: Member): Member.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Member, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Member;
  static deserializeBinaryFromReader(message: Member, reader: jspb.BinaryReader): Member;
}

export namespace Member {
  export type AsObject = {
    address: string,
    groupId: number,
    isActive: boolean,
    since?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CurrentGroup extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  hasActiveTime(): boolean;
  clearActiveTime(): void;
  getActiveTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setActiveTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentGroup.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentGroup): CurrentGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrentGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentGroup;
  static deserializeBinaryFromReader(message: CurrentGroup, reader: jspb.BinaryReader): CurrentGroup;
}

export namespace CurrentGroup {
  export type AsObject = {
    groupId: number,
    activeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Signing extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  clearFeePerSignerList(): void;
  getFeePerSignerList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setFeePerSignerList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addFeePerSigner(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getRequester(): string;
  setRequester(value: string): void;

  getCurrentGroupSigningId(): number;
  setCurrentGroupSigningId(value: number): void;

  getIncomingGroupSigningId(): number;
  setIncomingGroupSigningId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signing.AsObject;
  static toObject(includeInstance: boolean, msg: Signing): Signing.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Signing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signing;
  static deserializeBinaryFromReader(message: Signing, reader: jspb.BinaryReader): Signing;
}

export namespace Signing {
  export type AsObject = {
    id: number,
    feePerSignerList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    requester: string,
    currentGroupSigningId: number,
    incomingGroupSigningId: number,
  }
}

export class GroupTransition extends jspb.Message {
  getSigningId(): number;
  setSigningId(value: number): void;

  getCurrentGroupId(): number;
  setCurrentGroupId(value: number): void;

  getCurrentGroupPubKey(): Uint8Array | string;
  getCurrentGroupPubKey_asU8(): Uint8Array;
  getCurrentGroupPubKey_asB64(): string;
  setCurrentGroupPubKey(value: Uint8Array | string): void;

  getIncomingGroupId(): number;
  setIncomingGroupId(value: number): void;

  getIncomingGroupPubKey(): Uint8Array | string;
  getIncomingGroupPubKey_asU8(): Uint8Array;
  getIncomingGroupPubKey_asB64(): string;
  setIncomingGroupPubKey(value: Uint8Array | string): void;

  getStatus(): TransitionStatusMap[keyof TransitionStatusMap];
  setStatus(value: TransitionStatusMap[keyof TransitionStatusMap]): void;

  hasExecTime(): boolean;
  clearExecTime(): void;
  getExecTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExecTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsForceTransition(): boolean;
  setIsForceTransition(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupTransition.AsObject;
  static toObject(includeInstance: boolean, msg: GroupTransition): GroupTransition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupTransition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupTransition;
  static deserializeBinaryFromReader(message: GroupTransition, reader: jspb.BinaryReader): GroupTransition;
}

export namespace GroupTransition {
  export type AsObject = {
    signingId: number,
    currentGroupId: number,
    currentGroupPubKey: Uint8Array | string,
    incomingGroupId: number,
    incomingGroupPubKey: Uint8Array | string,
    status: TransitionStatusMap[keyof TransitionStatusMap],
    execTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isForceTransition: boolean,
  }
}

export class GroupTransitionSignatureOrder extends jspb.Message {
  getPubKey(): Uint8Array | string;
  getPubKey_asU8(): Uint8Array;
  getPubKey_asB64(): string;
  setPubKey(value: Uint8Array | string): void;

  hasTransitionTime(): boolean;
  clearTransitionTime(): void;
  getTransitionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTransitionTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupTransitionSignatureOrder.AsObject;
  static toObject(includeInstance: boolean, msg: GroupTransitionSignatureOrder): GroupTransitionSignatureOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupTransitionSignatureOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupTransitionSignatureOrder;
  static deserializeBinaryFromReader(message: GroupTransitionSignatureOrder, reader: jspb.BinaryReader): GroupTransitionSignatureOrder;
}

export namespace GroupTransitionSignatureOrder {
  export type AsObject = {
    pubKey: Uint8Array | string,
    transitionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface TransitionStatusMap {
  TRANSITION_STATUS_UNSPECIFIED: 0;
  TRANSITION_STATUS_CREATING_GROUP: 1;
  TRANSITION_STATUS_WAITING_SIGN: 2;
  TRANSITION_STATUS_WAITING_EXECUTION: 3;
}

export const TransitionStatus: TransitionStatusMap;

