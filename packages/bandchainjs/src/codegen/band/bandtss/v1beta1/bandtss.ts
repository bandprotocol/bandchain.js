//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** TransitionStatus is an enumeration of the possible statuses of a group transition process. */
export enum TransitionStatus {
  /** TRANSITION_STATUS_UNSPECIFIED - TRANSITION_STATUS_UNSPECIFIED is the status of a group transition that has not been specified. */
  TRANSITION_STATUS_UNSPECIFIED = 0,
  /**
   * TRANSITION_STATUS_CREATING_GROUP - TRANSITION_STATUS_CREATING_GROUP is the status of a group transition that a new group
   * is being created.
   */
  TRANSITION_STATUS_CREATING_GROUP = 1,
  /**
   * TRANSITION_STATUS_WAITING_SIGN - TRANSITION_STATUS_WAITING_SIGN is the status of a group transition that waits members in
   * a current group to sign the transition message.
   */
  TRANSITION_STATUS_WAITING_SIGN = 2,
  /**
   * TRANSITION_STATUS_WAITING_EXECUTION - TRANSITION_STATUS_WAITING_EXECUTION is the status of a group transition that
   * a transition process is completed, either from a forceTransition or having a current-group
   * signature on a transition message, but waits for the execution time.
   */
  TRANSITION_STATUS_WAITING_EXECUTION = 3,
  UNRECOGNIZED = -1,
}
export const TransitionStatusSDKType = TransitionStatus;
export const TransitionStatusAmino = TransitionStatus;
export function transitionStatusFromJSON(object: any): TransitionStatus {
  switch (object) {
    case 0:
    case "TRANSITION_STATUS_UNSPECIFIED":
      return TransitionStatus.TRANSITION_STATUS_UNSPECIFIED;
    case 1:
    case "TRANSITION_STATUS_CREATING_GROUP":
      return TransitionStatus.TRANSITION_STATUS_CREATING_GROUP;
    case 2:
    case "TRANSITION_STATUS_WAITING_SIGN":
      return TransitionStatus.TRANSITION_STATUS_WAITING_SIGN;
    case 3:
    case "TRANSITION_STATUS_WAITING_EXECUTION":
      return TransitionStatus.TRANSITION_STATUS_WAITING_EXECUTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransitionStatus.UNRECOGNIZED;
  }
}
export function transitionStatusToJSON(object: TransitionStatus): string {
  switch (object) {
    case TransitionStatus.TRANSITION_STATUS_UNSPECIFIED:
      return "TRANSITION_STATUS_UNSPECIFIED";
    case TransitionStatus.TRANSITION_STATUS_CREATING_GROUP:
      return "TRANSITION_STATUS_CREATING_GROUP";
    case TransitionStatus.TRANSITION_STATUS_WAITING_SIGN:
      return "TRANSITION_STATUS_WAITING_SIGN";
    case TransitionStatus.TRANSITION_STATUS_WAITING_EXECUTION:
      return "TRANSITION_STATUS_WAITING_EXECUTION";
    case TransitionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Member maintains member information for monitoring their liveness activity. */
export interface Member {
  /** address is the address of the member. */
  address: string;
  /** group_id is the group ID that the member belongs to. */
  groupId: bigint;
  /** is_active is a flag to indicate whether a member is active or not. */
  isActive: boolean;
  /** since is a block timestamp when a member status is changed (from active to inactive or vice versa). */
  since: Date;
}
export interface MemberProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.Member";
  value: Uint8Array;
}
/** Member maintains member information for monitoring their liveness activity. */
export interface MemberAmino {
  /** address is the address of the member. */
  address?: string;
  /** group_id is the group ID that the member belongs to. */
  group_id?: string;
  /** is_active is a flag to indicate whether a member is active or not. */
  is_active?: boolean;
  /** since is a block timestamp when a member status is changed (from active to inactive or vice versa). */
  since?: string;
}
export interface MemberAminoMsg {
  type: "/band.bandtss.v1beta1.Member";
  value: MemberAmino;
}
/** Member maintains member information for monitoring their liveness activity. */
export interface MemberSDKType {
  address: string;
  group_id: bigint;
  is_active: boolean;
  since: Date;
}
/** CurrentGroup is a bandtss current group information. */
export interface CurrentGroup {
  /** group_id is the ID of the current group. */
  groupId: bigint;
  /** active_time is the timestamp at which the group becomes the current group of the module. */
  activeTime: Date;
}
export interface CurrentGroupProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.CurrentGroup";
  value: Uint8Array;
}
/** CurrentGroup is a bandtss current group information. */
export interface CurrentGroupAmino {
  /** group_id is the ID of the current group. */
  group_id?: string;
  /** active_time is the timestamp at which the group becomes the current group of the module. */
  active_time?: string;
}
export interface CurrentGroupAminoMsg {
  type: "/band.bandtss.v1beta1.CurrentGroup";
  value: CurrentGroupAmino;
}
/** CurrentGroup is a bandtss current group information. */
export interface CurrentGroupSDKType {
  group_id: bigint;
  active_time: Date;
}
/** Signing is a bandtss signing information. */
export interface Signing {
  /** id is the unique identifier of the bandtss signing. */
  id: bigint;
  /** fee_per_signer is the tokens that will be paid per signer for this bandtss signing. */
  feePerSigner: Coin[];
  /** requester is the address who pays the bandtss signing. */
  requester: string;
  /** current_group_signing_id is a tss signing ID of a current group. */
  currentGroupSigningId: bigint;
  /** incoming_group_signing_id is a tss signing ID of an incoming group, if any. */
  incomingGroupSigningId: bigint;
}
export interface SigningProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.Signing";
  value: Uint8Array;
}
/** Signing is a bandtss signing information. */
export interface SigningAmino {
  /** id is the unique identifier of the bandtss signing. */
  id?: string;
  /** fee_per_signer is the tokens that will be paid per signer for this bandtss signing. */
  fee_per_signer?: CoinAmino[];
  /** requester is the address who pays the bandtss signing. */
  requester?: string;
  /** current_group_signing_id is a tss signing ID of a current group. */
  current_group_signing_id?: string;
  /** incoming_group_signing_id is a tss signing ID of an incoming group, if any. */
  incoming_group_signing_id?: string;
}
export interface SigningAminoMsg {
  type: "/band.bandtss.v1beta1.Signing";
  value: SigningAmino;
}
/** Signing is a bandtss signing information. */
export interface SigningSDKType {
  id: bigint;
  fee_per_signer: CoinSDKType[];
  requester: string;
  current_group_signing_id: bigint;
  incoming_group_signing_id: bigint;
}
/** GroupTransition defines the group transition information of the current group and incoming group. */
export interface GroupTransition {
  /** signing_id is a tss signing ID of group transition signing request. */
  signingId: bigint;
  /** current_group_id is the ID of the group that will be replaced. */
  currentGroupId: bigint;
  /** current_group_pub_key is the public key pair that used for sign & verify transition group msg. */
  currentGroupPubKey: Uint8Array;
  /** new_group_id is the ID of the new group that be a new key candidate. */
  incomingGroupId: bigint;
  /** incoming_group_pub_key is the public key of the group that will be the next key of this group */
  incomingGroupPubKey: Uint8Array;
  /** status is an enumeration of the possible statuses of a group transition process. */
  status: TransitionStatus;
  /** exec_time is the time when the transition will be executed. */
  execTime: Date;
  /**
   * is_force_transition is a flag to indicate whether the current group signs the transition message
   * before the transition is executed or not.
   */
  isForceTransition: boolean;
}
export interface GroupTransitionProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.GroupTransition";
  value: Uint8Array;
}
/** GroupTransition defines the group transition information of the current group and incoming group. */
export interface GroupTransitionAmino {
  /** signing_id is a tss signing ID of group transition signing request. */
  signing_id?: string;
  /** current_group_id is the ID of the group that will be replaced. */
  current_group_id?: string;
  /** current_group_pub_key is the public key pair that used for sign & verify transition group msg. */
  current_group_pub_key?: string;
  /** new_group_id is the ID of the new group that be a new key candidate. */
  incoming_group_id?: string;
  /** incoming_group_pub_key is the public key of the group that will be the next key of this group */
  incoming_group_pub_key?: string;
  /** status is an enumeration of the possible statuses of a group transition process. */
  status?: TransitionStatus;
  /** exec_time is the time when the transition will be executed. */
  exec_time?: string;
  /**
   * is_force_transition is a flag to indicate whether the current group signs the transition message
   * before the transition is executed or not.
   */
  is_force_transition?: boolean;
}
export interface GroupTransitionAminoMsg {
  type: "/band.bandtss.v1beta1.GroupTransition";
  value: GroupTransitionAmino;
}
/** GroupTransition defines the group transition information of the current group and incoming group. */
export interface GroupTransitionSDKType {
  signing_id: bigint;
  current_group_id: bigint;
  current_group_pub_key: Uint8Array;
  incoming_group_id: bigint;
  incoming_group_pub_key: Uint8Array;
  status: TransitionStatus;
  exec_time: Date;
  is_force_transition: boolean;
}
/** GroupTransitionSignatureOrder defines a general signature order for group transition. */
export interface GroupTransitionSignatureOrder {
  $typeUrl?: "/band.bandtss.v1beta1.GroupTransitionSignatureOrder";
  /** pub_key is the public key of new group that the current group needs to be signed. */
  pubKey: Uint8Array;
  /** transition_time is the timestamp at which the transition is executed and the public key is active. */
  transitionTime: Date;
}
export interface GroupTransitionSignatureOrderProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.GroupTransitionSignatureOrder";
  value: Uint8Array;
}
/** GroupTransitionSignatureOrder defines a general signature order for group transition. */
export interface GroupTransitionSignatureOrderAmino {
  /** pub_key is the public key of new group that the current group needs to be signed. */
  pub_key?: string;
  /** transition_time is the timestamp at which the transition is executed and the public key is active. */
  transition_time?: string;
}
export interface GroupTransitionSignatureOrderAminoMsg {
  type: "/band.bandtss.v1beta1.GroupTransitionSignatureOrder";
  value: GroupTransitionSignatureOrderAmino;
}
/** GroupTransitionSignatureOrder defines a general signature order for group transition. */
export interface GroupTransitionSignatureOrderSDKType {
  $typeUrl?: "/band.bandtss.v1beta1.GroupTransitionSignatureOrder";
  pub_key: Uint8Array;
  transition_time: Date;
}
function createBaseMember(): Member {
  return {
    address: "",
    groupId: BigInt(0),
    isActive: false,
    since: new Date()
  };
}
export const Member = {
  typeUrl: "/band.bandtss.v1beta1.Member",
  encode(message: Member, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.isActive === true) {
      writer.uint32(24).bool(message.isActive);
    }
    if (message.since !== undefined) {
      Timestamp.encode(toTimestamp(message.since), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Member {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.isActive = reader.bool();
          break;
        case 4:
          message.since = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Member>): Member {
    const message = createBaseMember();
    message.address = object.address ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.isActive = object.isActive ?? false;
    message.since = object.since ?? undefined;
    return message;
  },
  fromAmino(object: MemberAmino): Member {
    const message = createBaseMember();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.is_active !== undefined && object.is_active !== null) {
      message.isActive = object.is_active;
    }
    if (object.since !== undefined && object.since !== null) {
      message.since = fromTimestamp(Timestamp.fromAmino(object.since));
    }
    return message;
  },
  toAmino(message: Member): MemberAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    obj.is_active = message.isActive === false ? undefined : message.isActive;
    obj.since = message.since ? Timestamp.toAmino(toTimestamp(message.since)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MemberAminoMsg): Member {
    return Member.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberProtoMsg): Member {
    return Member.decode(message.value);
  },
  toProto(message: Member): Uint8Array {
    return Member.encode(message).finish();
  },
  toProtoMsg(message: Member): MemberProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.Member",
      value: Member.encode(message).finish()
    };
  }
};
function createBaseCurrentGroup(): CurrentGroup {
  return {
    groupId: BigInt(0),
    activeTime: new Date()
  };
}
export const CurrentGroup = {
  typeUrl: "/band.bandtss.v1beta1.CurrentGroup",
  encode(message: CurrentGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.activeTime !== undefined) {
      Timestamp.encode(toTimestamp(message.activeTime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CurrentGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.activeTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CurrentGroup>): CurrentGroup {
    const message = createBaseCurrentGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.activeTime = object.activeTime ?? undefined;
    return message;
  },
  fromAmino(object: CurrentGroupAmino): CurrentGroup {
    const message = createBaseCurrentGroup();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.active_time !== undefined && object.active_time !== null) {
      message.activeTime = fromTimestamp(Timestamp.fromAmino(object.active_time));
    }
    return message;
  },
  toAmino(message: CurrentGroup): CurrentGroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    obj.active_time = message.activeTime ? Timestamp.toAmino(toTimestamp(message.activeTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: CurrentGroupAminoMsg): CurrentGroup {
    return CurrentGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: CurrentGroupProtoMsg): CurrentGroup {
    return CurrentGroup.decode(message.value);
  },
  toProto(message: CurrentGroup): Uint8Array {
    return CurrentGroup.encode(message).finish();
  },
  toProtoMsg(message: CurrentGroup): CurrentGroupProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.CurrentGroup",
      value: CurrentGroup.encode(message).finish()
    };
  }
};
function createBaseSigning(): Signing {
  return {
    id: BigInt(0),
    feePerSigner: [],
    requester: "",
    currentGroupSigningId: BigInt(0),
    incomingGroupSigningId: BigInt(0)
  };
}
export const Signing = {
  typeUrl: "/band.bandtss.v1beta1.Signing",
  encode(message: Signing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.feePerSigner) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.requester !== "") {
      writer.uint32(26).string(message.requester);
    }
    if (message.currentGroupSigningId !== BigInt(0)) {
      writer.uint32(32).uint64(message.currentGroupSigningId);
    }
    if (message.incomingGroupSigningId !== BigInt(0)) {
      writer.uint32(40).uint64(message.incomingGroupSigningId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Signing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigning();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.feePerSigner.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.requester = reader.string();
          break;
        case 4:
          message.currentGroupSigningId = reader.uint64();
          break;
        case 5:
          message.incomingGroupSigningId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Signing>): Signing {
    const message = createBaseSigning();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.feePerSigner = object.feePerSigner?.map(e => Coin.fromPartial(e)) || [];
    message.requester = object.requester ?? "";
    message.currentGroupSigningId = object.currentGroupSigningId !== undefined && object.currentGroupSigningId !== null ? BigInt(object.currentGroupSigningId.toString()) : BigInt(0);
    message.incomingGroupSigningId = object.incomingGroupSigningId !== undefined && object.incomingGroupSigningId !== null ? BigInt(object.incomingGroupSigningId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SigningAmino): Signing {
    const message = createBaseSigning();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    message.feePerSigner = object.fee_per_signer?.map(e => Coin.fromAmino(e)) || [];
    if (object.requester !== undefined && object.requester !== null) {
      message.requester = object.requester;
    }
    if (object.current_group_signing_id !== undefined && object.current_group_signing_id !== null) {
      message.currentGroupSigningId = BigInt(object.current_group_signing_id);
    }
    if (object.incoming_group_signing_id !== undefined && object.incoming_group_signing_id !== null) {
      message.incomingGroupSigningId = BigInt(object.incoming_group_signing_id);
    }
    return message;
  },
  toAmino(message: Signing): SigningAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    if (message.feePerSigner) {
      obj.fee_per_signer = message.feePerSigner.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_per_signer = message.feePerSigner;
    }
    obj.requester = message.requester === "" ? undefined : message.requester;
    obj.current_group_signing_id = message.currentGroupSigningId !== BigInt(0) ? message.currentGroupSigningId?.toString() : undefined;
    obj.incoming_group_signing_id = message.incomingGroupSigningId !== BigInt(0) ? message.incomingGroupSigningId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SigningAminoMsg): Signing {
    return Signing.fromAmino(object.value);
  },
  fromProtoMsg(message: SigningProtoMsg): Signing {
    return Signing.decode(message.value);
  },
  toProto(message: Signing): Uint8Array {
    return Signing.encode(message).finish();
  },
  toProtoMsg(message: Signing): SigningProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.Signing",
      value: Signing.encode(message).finish()
    };
  }
};
function createBaseGroupTransition(): GroupTransition {
  return {
    signingId: BigInt(0),
    currentGroupId: BigInt(0),
    currentGroupPubKey: new Uint8Array(),
    incomingGroupId: BigInt(0),
    incomingGroupPubKey: new Uint8Array(),
    status: 0,
    execTime: new Date(),
    isForceTransition: false
  };
}
export const GroupTransition = {
  typeUrl: "/band.bandtss.v1beta1.GroupTransition",
  encode(message: GroupTransition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signingId !== BigInt(0)) {
      writer.uint32(8).uint64(message.signingId);
    }
    if (message.currentGroupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.currentGroupId);
    }
    if (message.currentGroupPubKey.length !== 0) {
      writer.uint32(26).bytes(message.currentGroupPubKey);
    }
    if (message.incomingGroupId !== BigInt(0)) {
      writer.uint32(32).uint64(message.incomingGroupId);
    }
    if (message.incomingGroupPubKey.length !== 0) {
      writer.uint32(42).bytes(message.incomingGroupPubKey);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.execTime !== undefined) {
      Timestamp.encode(toTimestamp(message.execTime), writer.uint32(58).fork()).ldelim();
    }
    if (message.isForceTransition === true) {
      writer.uint32(64).bool(message.isForceTransition);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GroupTransition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupTransition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signingId = reader.uint64();
          break;
        case 2:
          message.currentGroupId = reader.uint64();
          break;
        case 3:
          message.currentGroupPubKey = reader.bytes();
          break;
        case 4:
          message.incomingGroupId = reader.uint64();
          break;
        case 5:
          message.incomingGroupPubKey = reader.bytes();
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.execTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.isForceTransition = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GroupTransition>): GroupTransition {
    const message = createBaseGroupTransition();
    message.signingId = object.signingId !== undefined && object.signingId !== null ? BigInt(object.signingId.toString()) : BigInt(0);
    message.currentGroupId = object.currentGroupId !== undefined && object.currentGroupId !== null ? BigInt(object.currentGroupId.toString()) : BigInt(0);
    message.currentGroupPubKey = object.currentGroupPubKey ?? new Uint8Array();
    message.incomingGroupId = object.incomingGroupId !== undefined && object.incomingGroupId !== null ? BigInt(object.incomingGroupId.toString()) : BigInt(0);
    message.incomingGroupPubKey = object.incomingGroupPubKey ?? new Uint8Array();
    message.status = object.status ?? 0;
    message.execTime = object.execTime ?? undefined;
    message.isForceTransition = object.isForceTransition ?? false;
    return message;
  },
  fromAmino(object: GroupTransitionAmino): GroupTransition {
    const message = createBaseGroupTransition();
    if (object.signing_id !== undefined && object.signing_id !== null) {
      message.signingId = BigInt(object.signing_id);
    }
    if (object.current_group_id !== undefined && object.current_group_id !== null) {
      message.currentGroupId = BigInt(object.current_group_id);
    }
    if (object.current_group_pub_key !== undefined && object.current_group_pub_key !== null) {
      message.currentGroupPubKey = bytesFromBase64(object.current_group_pub_key);
    }
    if (object.incoming_group_id !== undefined && object.incoming_group_id !== null) {
      message.incomingGroupId = BigInt(object.incoming_group_id);
    }
    if (object.incoming_group_pub_key !== undefined && object.incoming_group_pub_key !== null) {
      message.incomingGroupPubKey = bytesFromBase64(object.incoming_group_pub_key);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.exec_time !== undefined && object.exec_time !== null) {
      message.execTime = fromTimestamp(Timestamp.fromAmino(object.exec_time));
    }
    if (object.is_force_transition !== undefined && object.is_force_transition !== null) {
      message.isForceTransition = object.is_force_transition;
    }
    return message;
  },
  toAmino(message: GroupTransition): GroupTransitionAmino {
    const obj: any = {};
    obj.signing_id = message.signingId !== BigInt(0) ? message.signingId?.toString() : undefined;
    obj.current_group_id = message.currentGroupId !== BigInt(0) ? message.currentGroupId?.toString() : undefined;
    obj.current_group_pub_key = message.currentGroupPubKey ? base64FromBytes(message.currentGroupPubKey) : undefined;
    obj.incoming_group_id = message.incomingGroupId !== BigInt(0) ? message.incomingGroupId?.toString() : undefined;
    obj.incoming_group_pub_key = message.incomingGroupPubKey ? base64FromBytes(message.incomingGroupPubKey) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.exec_time = message.execTime ? Timestamp.toAmino(toTimestamp(message.execTime)) : undefined;
    obj.is_force_transition = message.isForceTransition === false ? undefined : message.isForceTransition;
    return obj;
  },
  fromAminoMsg(object: GroupTransitionAminoMsg): GroupTransition {
    return GroupTransition.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupTransitionProtoMsg): GroupTransition {
    return GroupTransition.decode(message.value);
  },
  toProto(message: GroupTransition): Uint8Array {
    return GroupTransition.encode(message).finish();
  },
  toProtoMsg(message: GroupTransition): GroupTransitionProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.GroupTransition",
      value: GroupTransition.encode(message).finish()
    };
  }
};
function createBaseGroupTransitionSignatureOrder(): GroupTransitionSignatureOrder {
  return {
    $typeUrl: "/band.bandtss.v1beta1.GroupTransitionSignatureOrder",
    pubKey: new Uint8Array(),
    transitionTime: new Date()
  };
}
export const GroupTransitionSignatureOrder = {
  typeUrl: "/band.bandtss.v1beta1.GroupTransitionSignatureOrder",
  encode(message: GroupTransitionSignatureOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pubKey.length !== 0) {
      writer.uint32(10).bytes(message.pubKey);
    }
    if (message.transitionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.transitionTime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GroupTransitionSignatureOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupTransitionSignatureOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.bytes();
          break;
        case 2:
          message.transitionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GroupTransitionSignatureOrder>): GroupTransitionSignatureOrder {
    const message = createBaseGroupTransitionSignatureOrder();
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.transitionTime = object.transitionTime ?? undefined;
    return message;
  },
  fromAmino(object: GroupTransitionSignatureOrderAmino): GroupTransitionSignatureOrder {
    const message = createBaseGroupTransitionSignatureOrder();
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = bytesFromBase64(object.pub_key);
    }
    if (object.transition_time !== undefined && object.transition_time !== null) {
      message.transitionTime = fromTimestamp(Timestamp.fromAmino(object.transition_time));
    }
    return message;
  },
  toAmino(message: GroupTransitionSignatureOrder): GroupTransitionSignatureOrderAmino {
    const obj: any = {};
    obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
    obj.transition_time = message.transitionTime ? Timestamp.toAmino(toTimestamp(message.transitionTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: GroupTransitionSignatureOrderAminoMsg): GroupTransitionSignatureOrder {
    return GroupTransitionSignatureOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupTransitionSignatureOrderProtoMsg): GroupTransitionSignatureOrder {
    return GroupTransitionSignatureOrder.decode(message.value);
  },
  toProto(message: GroupTransitionSignatureOrder): Uint8Array {
    return GroupTransitionSignatureOrder.encode(message).finish();
  },
  toProtoMsg(message: GroupTransitionSignatureOrder): GroupTransitionSignatureOrderProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.GroupTransitionSignatureOrder",
      value: GroupTransitionSignatureOrder.encode(message).finish()
    };
  }
};