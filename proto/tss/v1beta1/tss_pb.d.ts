// package: tss.v1beta1
// file: tss/v1beta1/tss.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_proto_cosmos_pb from "../../cosmos_proto/cosmos_pb";

export class Group extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getThreshold(): number;
  setThreshold(value: number): void;

  getPubKey(): Uint8Array | string;
  getPubKey_asU8(): Uint8Array;
  getPubKey_asB64(): string;
  setPubKey(value: Uint8Array | string): void;

  getStatus(): GroupStatusMap[keyof GroupStatusMap];
  setStatus(value: GroupStatusMap[keyof GroupStatusMap]): void;

  clearFeeList(): void;
  getFeeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setFeeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addFee(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getLatestReplacementId(): number;
  setLatestReplacementId(value: number): void;

  getCreatedHeight(): number;
  setCreatedHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    groupId: number,
    size: number,
    threshold: number,
    pubKey: Uint8Array | string,
    status: GroupStatusMap[keyof GroupStatusMap],
    feeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    latestReplacementId: number,
    createdHeight: number,
  }
}

export class Replacement extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getSigningId(): number;
  setSigningId(value: number): void;

  getFromGroupId(): number;
  setFromGroupId(value: number): void;

  getFromPubKey(): Uint8Array | string;
  getFromPubKey_asU8(): Uint8Array;
  getFromPubKey_asB64(): string;
  setFromPubKey(value: Uint8Array | string): void;

  getToGroupId(): number;
  setToGroupId(value: number): void;

  getToPubKey(): Uint8Array | string;
  getToPubKey_asU8(): Uint8Array;
  getToPubKey_asB64(): string;
  setToPubKey(value: Uint8Array | string): void;

  getStatus(): ReplacementStatusMap[keyof ReplacementStatusMap];
  setStatus(value: ReplacementStatusMap[keyof ReplacementStatusMap]): void;

  hasExecTime(): boolean;
  clearExecTime(): void;
  getExecTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExecTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Replacement.AsObject;
  static toObject(includeInstance: boolean, msg: Replacement): Replacement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Replacement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Replacement;
  static deserializeBinaryFromReader(message: Replacement, reader: jspb.BinaryReader): Replacement;
}

export namespace Replacement {
  export type AsObject = {
    id: number,
    signingId: number,
    fromGroupId: number,
    fromPubKey: Uint8Array | string,
    toGroupId: number,
    toPubKey: Uint8Array | string,
    status: ReplacementStatusMap[keyof ReplacementStatusMap],
    execTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Round1Info extends jspb.Message {
  getMemberId(): number;
  setMemberId(value: number): void;

  clearCoefficientCommitsList(): void;
  getCoefficientCommitsList(): Array<Uint8Array | string>;
  getCoefficientCommitsList_asU8(): Array<Uint8Array>;
  getCoefficientCommitsList_asB64(): Array<string>;
  setCoefficientCommitsList(value: Array<Uint8Array | string>): void;
  addCoefficientCommits(value: Uint8Array | string, index?: number): Uint8Array | string;

  getOneTimePubKey(): Uint8Array | string;
  getOneTimePubKey_asU8(): Uint8Array;
  getOneTimePubKey_asB64(): string;
  setOneTimePubKey(value: Uint8Array | string): void;

  getA0Signature(): Uint8Array | string;
  getA0Signature_asU8(): Uint8Array;
  getA0Signature_asB64(): string;
  setA0Signature(value: Uint8Array | string): void;

  getOneTimeSignature(): Uint8Array | string;
  getOneTimeSignature_asU8(): Uint8Array;
  getOneTimeSignature_asB64(): string;
  setOneTimeSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Round1Info.AsObject;
  static toObject(includeInstance: boolean, msg: Round1Info): Round1Info.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Round1Info, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Round1Info;
  static deserializeBinaryFromReader(message: Round1Info, reader: jspb.BinaryReader): Round1Info;
}

export namespace Round1Info {
  export type AsObject = {
    memberId: number,
    coefficientCommitsList: Array<Uint8Array | string>,
    oneTimePubKey: Uint8Array | string,
    a0Signature: Uint8Array | string,
    oneTimeSignature: Uint8Array | string,
  }
}

export class Round2Info extends jspb.Message {
  getMemberId(): number;
  setMemberId(value: number): void;

  clearEncryptedSecretSharesList(): void;
  getEncryptedSecretSharesList(): Array<Uint8Array | string>;
  getEncryptedSecretSharesList_asU8(): Array<Uint8Array>;
  getEncryptedSecretSharesList_asB64(): Array<string>;
  setEncryptedSecretSharesList(value: Array<Uint8Array | string>): void;
  addEncryptedSecretShares(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Round2Info.AsObject;
  static toObject(includeInstance: boolean, msg: Round2Info): Round2Info.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Round2Info, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Round2Info;
  static deserializeBinaryFromReader(message: Round2Info, reader: jspb.BinaryReader): Round2Info;
}

export namespace Round2Info {
  export type AsObject = {
    memberId: number,
    encryptedSecretSharesList: Array<Uint8Array | string>,
  }
}

export class DE extends jspb.Message {
  getPubD(): Uint8Array | string;
  getPubD_asU8(): Uint8Array;
  getPubD_asB64(): string;
  setPubD(value: Uint8Array | string): void;

  getPubE(): Uint8Array | string;
  getPubE_asU8(): Uint8Array;
  getPubE_asB64(): string;
  setPubE(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DE.AsObject;
  static toObject(includeInstance: boolean, msg: DE): DE.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DE;
  static deserializeBinaryFromReader(message: DE, reader: jspb.BinaryReader): DE;
}

export namespace DE {
  export type AsObject = {
    pubD: Uint8Array | string,
    pubE: Uint8Array | string,
  }
}

export class DEQueue extends jspb.Message {
  getHead(): number;
  setHead(value: number): void;

  getTail(): number;
  setTail(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DEQueue.AsObject;
  static toObject(includeInstance: boolean, msg: DEQueue): DEQueue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DEQueue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DEQueue;
  static deserializeBinaryFromReader(message: DEQueue, reader: jspb.BinaryReader): DEQueue;
}

export namespace DEQueue {
  export type AsObject = {
    head: number,
    tail: number,
  }
}

export class Signing extends jspb.Message {
  getSigningId(): number;
  setSigningId(value: number): void;

  getGroupId(): number;
  setGroupId(value: number): void;

  getGroupPubKey(): Uint8Array | string;
  getGroupPubKey_asU8(): Uint8Array;
  getGroupPubKey_asB64(): string;
  setGroupPubKey(value: Uint8Array | string): void;

  clearAssignedMembersList(): void;
  getAssignedMembersList(): Array<AssignedMember>;
  setAssignedMembersList(value: Array<AssignedMember>): void;
  addAssignedMembers(value?: AssignedMember, index?: number): AssignedMember;

  getMessage(): Uint8Array | string;
  getMessage_asU8(): Uint8Array;
  getMessage_asB64(): string;
  setMessage(value: Uint8Array | string): void;

  getGroupPubNonce(): Uint8Array | string;
  getGroupPubNonce_asU8(): Uint8Array;
  getGroupPubNonce_asB64(): string;
  setGroupPubNonce(value: Uint8Array | string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  clearFeeList(): void;
  getFeeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setFeeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addFee(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getStatus(): SigningStatusMap[keyof SigningStatusMap];
  setStatus(value: SigningStatusMap[keyof SigningStatusMap]): void;

  getCreatedHeight(): number;
  setCreatedHeight(value: number): void;

  getRequester(): string;
  setRequester(value: string): void;

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
    signingId: number,
    groupId: number,
    groupPubKey: Uint8Array | string,
    assignedMembersList: Array<AssignedMember.AsObject>,
    message: Uint8Array | string,
    groupPubNonce: Uint8Array | string,
    signature: Uint8Array | string,
    feeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    status: SigningStatusMap[keyof SigningStatusMap],
    createdHeight: number,
    requester: string,
  }
}

export class AssignedMember extends jspb.Message {
  getMemberId(): number;
  setMemberId(value: number): void;

  getAddress(): string;
  setAddress(value: string): void;

  getPubKey(): Uint8Array | string;
  getPubKey_asU8(): Uint8Array;
  getPubKey_asB64(): string;
  setPubKey(value: Uint8Array | string): void;

  getPubD(): Uint8Array | string;
  getPubD_asU8(): Uint8Array;
  getPubD_asB64(): string;
  setPubD(value: Uint8Array | string): void;

  getPubE(): Uint8Array | string;
  getPubE_asU8(): Uint8Array;
  getPubE_asB64(): string;
  setPubE(value: Uint8Array | string): void;

  getBindingFactor(): Uint8Array | string;
  getBindingFactor_asU8(): Uint8Array;
  getBindingFactor_asB64(): string;
  setBindingFactor(value: Uint8Array | string): void;

  getPubNonce(): Uint8Array | string;
  getPubNonce_asU8(): Uint8Array;
  getPubNonce_asB64(): string;
  setPubNonce(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignedMember.AsObject;
  static toObject(includeInstance: boolean, msg: AssignedMember): AssignedMember.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignedMember, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignedMember;
  static deserializeBinaryFromReader(message: AssignedMember, reader: jspb.BinaryReader): AssignedMember;
}

export namespace AssignedMember {
  export type AsObject = {
    memberId: number,
    address: string,
    pubKey: Uint8Array | string,
    pubD: Uint8Array | string,
    pubE: Uint8Array | string,
    bindingFactor: Uint8Array | string,
    pubNonce: Uint8Array | string,
  }
}

export class PendingSignings extends jspb.Message {
  clearSigningIdsList(): void;
  getSigningIdsList(): Array<number>;
  setSigningIdsList(value: Array<number>): void;
  addSigningIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PendingSignings.AsObject;
  static toObject(includeInstance: boolean, msg: PendingSignings): PendingSignings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PendingSignings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PendingSignings;
  static deserializeBinaryFromReader(message: PendingSignings, reader: jspb.BinaryReader): PendingSignings;
}

export namespace PendingSignings {
  export type AsObject = {
    signingIdsList: Array<number>,
  }
}

export class Member extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getAddress(): string;
  setAddress(value: string): void;

  getPubKey(): Uint8Array | string;
  getPubKey_asU8(): Uint8Array;
  getPubKey_asB64(): string;
  setPubKey(value: Uint8Array | string): void;

  getIsMalicious(): boolean;
  setIsMalicious(value: boolean): void;

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
    id: number,
    address: string,
    pubKey: Uint8Array | string,
    isMalicious: boolean,
  }
}

export class Status extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getStatus(): MemberStatusMap[keyof MemberStatusMap];
  setStatus(value: MemberStatusMap[keyof MemberStatusMap]): void;

  hasSince(): boolean;
  clearSince(): void;
  getSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSince(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastActive(): boolean;
  clearLastActive(): void;
  getLastActive(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastActive(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    address: string,
    status: MemberStatusMap[keyof MemberStatusMap],
    since?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastActive?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Confirm extends jspb.Message {
  getMemberId(): number;
  setMemberId(value: number): void;

  getOwnPubKeySig(): Uint8Array | string;
  getOwnPubKeySig_asU8(): Uint8Array;
  getOwnPubKeySig_asB64(): string;
  setOwnPubKeySig(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Confirm.AsObject;
  static toObject(includeInstance: boolean, msg: Confirm): Confirm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Confirm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Confirm;
  static deserializeBinaryFromReader(message: Confirm, reader: jspb.BinaryReader): Confirm;
}

export namespace Confirm {
  export type AsObject = {
    memberId: number,
    ownPubKeySig: Uint8Array | string,
  }
}

export class Complaint extends jspb.Message {
  getComplainant(): number;
  setComplainant(value: number): void;

  getRespondent(): number;
  setRespondent(value: number): void;

  getKeySym(): Uint8Array | string;
  getKeySym_asU8(): Uint8Array;
  getKeySym_asB64(): string;
  setKeySym(value: Uint8Array | string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Complaint.AsObject;
  static toObject(includeInstance: boolean, msg: Complaint): Complaint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Complaint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Complaint;
  static deserializeBinaryFromReader(message: Complaint, reader: jspb.BinaryReader): Complaint;
}

export namespace Complaint {
  export type AsObject = {
    complainant: number,
    respondent: number,
    keySym: Uint8Array | string,
    signature: Uint8Array | string,
  }
}

export class ComplaintWithStatus extends jspb.Message {
  hasComplaint(): boolean;
  clearComplaint(): void;
  getComplaint(): Complaint | undefined;
  setComplaint(value?: Complaint): void;

  getComplaintStatus(): ComplaintStatusMap[keyof ComplaintStatusMap];
  setComplaintStatus(value: ComplaintStatusMap[keyof ComplaintStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplaintWithStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ComplaintWithStatus): ComplaintWithStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplaintWithStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplaintWithStatus;
  static deserializeBinaryFromReader(message: ComplaintWithStatus, reader: jspb.BinaryReader): ComplaintWithStatus;
}

export namespace ComplaintWithStatus {
  export type AsObject = {
    complaint?: Complaint.AsObject,
    complaintStatus: ComplaintStatusMap[keyof ComplaintStatusMap],
  }
}

export class ComplaintsWithStatus extends jspb.Message {
  getMemberId(): number;
  setMemberId(value: number): void;

  clearComplaintsWithStatusList(): void;
  getComplaintsWithStatusList(): Array<ComplaintWithStatus>;
  setComplaintsWithStatusList(value: Array<ComplaintWithStatus>): void;
  addComplaintsWithStatus(value?: ComplaintWithStatus, index?: number): ComplaintWithStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplaintsWithStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ComplaintsWithStatus): ComplaintsWithStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplaintsWithStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplaintsWithStatus;
  static deserializeBinaryFromReader(message: ComplaintsWithStatus, reader: jspb.BinaryReader): ComplaintsWithStatus;
}

export namespace ComplaintsWithStatus {
  export type AsObject = {
    memberId: number,
    complaintsWithStatusList: Array<ComplaintWithStatus.AsObject>,
  }
}

export class PendingProcessGroups extends jspb.Message {
  clearGroupIdsList(): void;
  getGroupIdsList(): Array<number>;
  setGroupIdsList(value: Array<number>): void;
  addGroupIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PendingProcessGroups.AsObject;
  static toObject(includeInstance: boolean, msg: PendingProcessGroups): PendingProcessGroups.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PendingProcessGroups, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PendingProcessGroups;
  static deserializeBinaryFromReader(message: PendingProcessGroups, reader: jspb.BinaryReader): PendingProcessGroups;
}

export namespace PendingProcessGroups {
  export type AsObject = {
    groupIdsList: Array<number>,
  }
}

export class PendingProcessSignings extends jspb.Message {
  clearSigningIdsList(): void;
  getSigningIdsList(): Array<number>;
  setSigningIdsList(value: Array<number>): void;
  addSigningIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PendingProcessSignings.AsObject;
  static toObject(includeInstance: boolean, msg: PendingProcessSignings): PendingProcessSignings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PendingProcessSignings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PendingProcessSignings;
  static deserializeBinaryFromReader(message: PendingProcessSignings, reader: jspb.BinaryReader): PendingProcessSignings;
}

export namespace PendingProcessSignings {
  export type AsObject = {
    signingIdsList: Array<number>,
  }
}

export class PartialSignature extends jspb.Message {
  getMemberId(): number;
  setMemberId(value: number): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartialSignature.AsObject;
  static toObject(includeInstance: boolean, msg: PartialSignature): PartialSignature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartialSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartialSignature;
  static deserializeBinaryFromReader(message: PartialSignature, reader: jspb.BinaryReader): PartialSignature;
}

export namespace PartialSignature {
  export type AsObject = {
    memberId: number,
    signature: Uint8Array | string,
  }
}

export class TextRequestingSignature extends jspb.Message {
  getMessage(): Uint8Array | string;
  getMessage_asU8(): Uint8Array;
  getMessage_asB64(): string;
  setMessage(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextRequestingSignature.AsObject;
  static toObject(includeInstance: boolean, msg: TextRequestingSignature): TextRequestingSignature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextRequestingSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextRequestingSignature;
  static deserializeBinaryFromReader(message: TextRequestingSignature, reader: jspb.BinaryReader): TextRequestingSignature;
}

export namespace TextRequestingSignature {
  export type AsObject = {
    message: Uint8Array | string,
  }
}

export class EVMSignature extends jspb.Message {
  getRAddress(): Uint8Array | string;
  getRAddress_asU8(): Uint8Array;
  getRAddress_asB64(): string;
  setRAddress(value: Uint8Array | string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EVMSignature.AsObject;
  static toObject(includeInstance: boolean, msg: EVMSignature): EVMSignature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EVMSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EVMSignature;
  static deserializeBinaryFromReader(message: EVMSignature, reader: jspb.BinaryReader): EVMSignature;
}

export namespace EVMSignature {
  export type AsObject = {
    rAddress: Uint8Array | string,
    signature: Uint8Array | string,
  }
}

export interface ReplacementStatusMap {
  REPLACEMENT_STATUS_UNSPECIFIED: 0;
  REPLACEMENT_STATUS_WAITING: 1;
  REPLACEMENT_STATUS_SUCCESS: 2;
  REPLACEMENT_STATUS_FALLEN: 3;
}

export const ReplacementStatus: ReplacementStatusMap;

export interface SigningStatusMap {
  SIGNING_STATUS_UNSPECIFIED: 0;
  SIGNING_STATUS_WAITING: 1;
  SIGNING_STATUS_SUCCESS: 2;
  SIGNING_STATUS_EXPIRED: 3;
  SIGNING_STATUS_FALLEN: 4;
}

export const SigningStatus: SigningStatusMap;

export interface MemberStatusMap {
  MEMBER_STATUS_UNSPECIFIED: 0;
  MEMBER_STATUS_ACTIVE: 1;
  MEMBER_STATUS_INACTIVE: 2;
  MEMBER_STATUS_JAIL: 3;
}

export const MemberStatus: MemberStatusMap;

export interface GroupStatusMap {
  GROUP_STATUS_UNSPECIFIED: 0;
  GROUP_STATUS_ROUND_1: 1;
  GROUP_STATUS_ROUND_2: 2;
  GROUP_STATUS_ROUND_3: 3;
  GROUP_STATUS_ACTIVE: 4;
  GROUP_STATUS_EXPIRED: 5;
  GROUP_STATUS_FALLEN: 6;
}

export const GroupStatus: GroupStatusMap;

export interface ComplaintStatusMap {
  COMPLAINT_STATUS_UNSPECIFIED: 0;
  COMPLAINT_STATUS_SUCCESS: 1;
  COMPLAINT_STATUS_FAILED: 2;
}

export const ComplaintStatus: ComplaintStatusMap;

export interface PrefixMsgTypeMap {
  PREFIX_UNSPECIFIED_MSG: 0;
  PREFIX_TEXT_MSG: 1;
  PREFIX_REPLACE_GROUP_MSG: 2;
  PREFIX_ORACLE_MSG: 3;
}

export const PrefixMsgType: PrefixMsgTypeMap;

