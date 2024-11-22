// package: band.tss.v1beta1
// file: band/tss/v1beta1/tss.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Group extends jspb.Message {
  getId(): number;
  setId(value: number): void;

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

  getCreatedHeight(): number;
  setCreatedHeight(value: number): void;

  getModuleOwner(): string;
  setModuleOwner(value: string): void;

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
    id: number,
    size: number,
    threshold: number,
    pubKey: Uint8Array | string,
    status: GroupStatusMap[keyof GroupStatusMap],
    createdHeight: number,
    moduleOwner: string,
  }
}

export class GroupResult extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): Group | undefined;
  setGroup(value?: Group): void;

  getDkgContext(): Uint8Array | string;
  getDkgContext_asU8(): Uint8Array;
  getDkgContext_asB64(): string;
  setDkgContext(value: Uint8Array | string): void;

  clearMembersList(): void;
  getMembersList(): Array<Member>;
  setMembersList(value: Array<Member>): void;
  addMembers(value?: Member, index?: number): Member;

  clearRound1InfosList(): void;
  getRound1InfosList(): Array<Round1Info>;
  setRound1InfosList(value: Array<Round1Info>): void;
  addRound1Infos(value?: Round1Info, index?: number): Round1Info;

  clearRound2InfosList(): void;
  getRound2InfosList(): Array<Round2Info>;
  setRound2InfosList(value: Array<Round2Info>): void;
  addRound2Infos(value?: Round2Info, index?: number): Round2Info;

  clearComplaintsWithStatusList(): void;
  getComplaintsWithStatusList(): Array<ComplaintsWithStatus>;
  setComplaintsWithStatusList(value: Array<ComplaintsWithStatus>): void;
  addComplaintsWithStatus(value?: ComplaintsWithStatus, index?: number): ComplaintsWithStatus;

  clearConfirmsList(): void;
  getConfirmsList(): Array<Confirm>;
  setConfirmsList(value: Array<Confirm>): void;
  addConfirms(value?: Confirm, index?: number): Confirm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupResult.AsObject;
  static toObject(includeInstance: boolean, msg: GroupResult): GroupResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupResult;
  static deserializeBinaryFromReader(message: GroupResult, reader: jspb.BinaryReader): GroupResult;
}

export namespace GroupResult {
  export type AsObject = {
    group?: Group.AsObject,
    dkgContext: Uint8Array | string,
    membersList: Array<Member.AsObject>,
    round1InfosList: Array<Round1Info.AsObject>,
    round2InfosList: Array<Round2Info.AsObject>,
    complaintsWithStatusList: Array<ComplaintsWithStatus.AsObject>,
    confirmsList: Array<Confirm.AsObject>,
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
  getId(): number;
  setId(value: number): void;

  getCurrentAttempt(): number;
  setCurrentAttempt(value: number): void;

  getGroupId(): number;
  setGroupId(value: number): void;

  getGroupPubKey(): Uint8Array | string;
  getGroupPubKey_asU8(): Uint8Array;
  getGroupPubKey_asB64(): string;
  setGroupPubKey(value: Uint8Array | string): void;

  getOriginator(): Uint8Array | string;
  getOriginator_asU8(): Uint8Array;
  getOriginator_asB64(): string;
  setOriginator(value: Uint8Array | string): void;

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

  getStatus(): SigningStatusMap[keyof SigningStatusMap];
  setStatus(value: SigningStatusMap[keyof SigningStatusMap]): void;

  getCreatedHeight(): number;
  setCreatedHeight(value: number): void;

  hasCreatedTimestamp(): boolean;
  clearCreatedTimestamp(): void;
  getCreatedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
    currentAttempt: number,
    groupId: number,
    groupPubKey: Uint8Array | string,
    originator: Uint8Array | string,
    message: Uint8Array | string,
    groupPubNonce: Uint8Array | string,
    signature: Uint8Array | string,
    status: SigningStatusMap[keyof SigningStatusMap],
    createdHeight: number,
    createdTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SigningAttempt extends jspb.Message {
  getSigningId(): number;
  setSigningId(value: number): void;

  getAttempt(): number;
  setAttempt(value: number): void;

  getExpiredHeight(): number;
  setExpiredHeight(value: number): void;

  clearAssignedMembersList(): void;
  getAssignedMembersList(): Array<AssignedMember>;
  setAssignedMembersList(value: Array<AssignedMember>): void;
  addAssignedMembers(value?: AssignedMember, index?: number): AssignedMember;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SigningAttempt.AsObject;
  static toObject(includeInstance: boolean, msg: SigningAttempt): SigningAttempt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SigningAttempt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SigningAttempt;
  static deserializeBinaryFromReader(message: SigningAttempt, reader: jspb.BinaryReader): SigningAttempt;
}

export namespace SigningAttempt {
  export type AsObject = {
    signingId: number,
    attempt: number,
    expiredHeight: number,
    assignedMembersList: Array<AssignedMember.AsObject>,
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

  getGroupId(): number;
  setGroupId(value: number): void;

  getAddress(): string;
  setAddress(value: string): void;

  getPubKey(): Uint8Array | string;
  getPubKey_asU8(): Uint8Array;
  getPubKey_asB64(): string;
  setPubKey(value: Uint8Array | string): void;

  getIsMalicious(): boolean;
  setIsMalicious(value: boolean): void;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

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
    groupId: number,
    address: string,
    pubKey: Uint8Array | string,
    isMalicious: boolean,
    isActive: boolean,
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
  getSigningId(): number;
  setSigningId(value: number): void;

  getSigningAttempt(): number;
  setSigningAttempt(value: number): void;

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
    signingId: number,
    signingAttempt: number,
    memberId: number,
    signature: Uint8Array | string,
  }
}

export class TextSignatureOrder extends jspb.Message {
  getMessage(): Uint8Array | string;
  getMessage_asU8(): Uint8Array;
  getMessage_asB64(): string;
  setMessage(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextSignatureOrder.AsObject;
  static toObject(includeInstance: boolean, msg: TextSignatureOrder): TextSignatureOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextSignatureOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextSignatureOrder;
  static deserializeBinaryFromReader(message: TextSignatureOrder, reader: jspb.BinaryReader): TextSignatureOrder;
}

export namespace TextSignatureOrder {
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

export class SigningResult extends jspb.Message {
  hasSigning(): boolean;
  clearSigning(): void;
  getSigning(): Signing | undefined;
  setSigning(value?: Signing): void;

  hasCurrentSigningAttempt(): boolean;
  clearCurrentSigningAttempt(): void;
  getCurrentSigningAttempt(): SigningAttempt | undefined;
  setCurrentSigningAttempt(value?: SigningAttempt): void;

  hasEvmSignature(): boolean;
  clearEvmSignature(): void;
  getEvmSignature(): EVMSignature | undefined;
  setEvmSignature(value?: EVMSignature): void;

  clearReceivedPartialSignaturesList(): void;
  getReceivedPartialSignaturesList(): Array<PartialSignature>;
  setReceivedPartialSignaturesList(value: Array<PartialSignature>): void;
  addReceivedPartialSignatures(value?: PartialSignature, index?: number): PartialSignature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SigningResult.AsObject;
  static toObject(includeInstance: boolean, msg: SigningResult): SigningResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SigningResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SigningResult;
  static deserializeBinaryFromReader(message: SigningResult, reader: jspb.BinaryReader): SigningResult;
}

export namespace SigningResult {
  export type AsObject = {
    signing?: Signing.AsObject,
    currentSigningAttempt?: SigningAttempt.AsObject,
    evmSignature?: EVMSignature.AsObject,
    receivedPartialSignaturesList: Array<PartialSignature.AsObject>,
  }
}

export class SigningExpiration extends jspb.Message {
  getSigningId(): number;
  setSigningId(value: number): void;

  getSigningAttempt(): number;
  setSigningAttempt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SigningExpiration.AsObject;
  static toObject(includeInstance: boolean, msg: SigningExpiration): SigningExpiration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SigningExpiration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SigningExpiration;
  static deserializeBinaryFromReader(message: SigningExpiration, reader: jspb.BinaryReader): SigningExpiration;
}

export namespace SigningExpiration {
  export type AsObject = {
    signingId: number,
    signingAttempt: number,
  }
}

export class SigningExpirations extends jspb.Message {
  clearSigningExpirationsList(): void;
  getSigningExpirationsList(): Array<SigningExpiration>;
  setSigningExpirationsList(value: Array<SigningExpiration>): void;
  addSigningExpirations(value?: SigningExpiration, index?: number): SigningExpiration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SigningExpirations.AsObject;
  static toObject(includeInstance: boolean, msg: SigningExpirations): SigningExpirations.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SigningExpirations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SigningExpirations;
  static deserializeBinaryFromReader(message: SigningExpirations, reader: jspb.BinaryReader): SigningExpirations;
}

export namespace SigningExpirations {
  export type AsObject = {
    signingExpirationsList: Array<SigningExpiration.AsObject>,
  }
}

export interface SigningStatusMap {
  SIGNING_STATUS_UNSPECIFIED: 0;
  SIGNING_STATUS_WAITING: 1;
  SIGNING_STATUS_SUCCESS: 2;
  SIGNING_STATUS_FALLEN: 3;
}

export const SigningStatus: SigningStatusMap;

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

