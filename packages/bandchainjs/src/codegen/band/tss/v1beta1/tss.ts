//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp } from "../../../helpers";
/** SigningStatus is an enumeration of the possible statuses of a signing. */
export enum SigningStatus {
  /** SIGNING_STATUS_UNSPECIFIED - SIGNING_STATUS_UNSPECIFIED is the status of a signing that has not been specified. */
  SIGNING_STATUS_UNSPECIFIED = 0,
  /** SIGNING_STATUS_WAITING - SIGNING_STATUS_WAITING is the status of a signing that is waiting to be signed in the protocol. */
  SIGNING_STATUS_WAITING = 1,
  /** SIGNING_STATUS_SUCCESS - SIGNING_STATUS_SUCCESS is the status of a signing that has success in the protocol. */
  SIGNING_STATUS_SUCCESS = 2,
  /** SIGNING_STATUS_FALLEN - SIGNING_STATUS_FALLEN is the status of a signing that has fallen out of the protocol. */
  SIGNING_STATUS_FALLEN = 3,
  UNRECOGNIZED = -1,
}
export const SigningStatusSDKType = SigningStatus;
export const SigningStatusAmino = SigningStatus;
export function signingStatusFromJSON(object: any): SigningStatus {
  switch (object) {
    case 0:
    case "SIGNING_STATUS_UNSPECIFIED":
      return SigningStatus.SIGNING_STATUS_UNSPECIFIED;
    case 1:
    case "SIGNING_STATUS_WAITING":
      return SigningStatus.SIGNING_STATUS_WAITING;
    case 2:
    case "SIGNING_STATUS_SUCCESS":
      return SigningStatus.SIGNING_STATUS_SUCCESS;
    case 3:
    case "SIGNING_STATUS_FALLEN":
      return SigningStatus.SIGNING_STATUS_FALLEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SigningStatus.UNRECOGNIZED;
  }
}
export function signingStatusToJSON(object: SigningStatus): string {
  switch (object) {
    case SigningStatus.SIGNING_STATUS_UNSPECIFIED:
      return "SIGNING_STATUS_UNSPECIFIED";
    case SigningStatus.SIGNING_STATUS_WAITING:
      return "SIGNING_STATUS_WAITING";
    case SigningStatus.SIGNING_STATUS_SUCCESS:
      return "SIGNING_STATUS_SUCCESS";
    case SigningStatus.SIGNING_STATUS_FALLEN:
      return "SIGNING_STATUS_FALLEN";
    case SigningStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** GroupStatus is an enumeration of the possible statuses of a group. */
export enum GroupStatus {
  /** GROUP_STATUS_UNSPECIFIED - GROUP_STATUS_UNSPECIFIED is the status of a group that has not been specified. */
  GROUP_STATUS_UNSPECIFIED = 0,
  /** GROUP_STATUS_ROUND_1 - GROUP_STATUS_ROUND_1 is the status of a group that is in the first round of the protocol. */
  GROUP_STATUS_ROUND_1 = 1,
  /** GROUP_STATUS_ROUND_2 - GROUP_STATUS_ROUND_2 is the status of a group that is in the second round of the protocol. */
  GROUP_STATUS_ROUND_2 = 2,
  /** GROUP_STATUS_ROUND_3 - GROUP_STATUS_ROUND_3 is the status of a group that is in the third round of the protocol. */
  GROUP_STATUS_ROUND_3 = 3,
  /** GROUP_STATUS_ACTIVE - GROUP_STATUS_ACTIVE is the status of a group that is actively participating in the protocol. */
  GROUP_STATUS_ACTIVE = 4,
  /** GROUP_STATUS_EXPIRED - GROUP_STATUS_EXPIRED is the status of a group that has expired in the protocol. */
  GROUP_STATUS_EXPIRED = 5,
  /** GROUP_STATUS_FALLEN - GROUP_STATUS_FALLEN is the status of a group that has fallen out of the protocol. */
  GROUP_STATUS_FALLEN = 6,
  UNRECOGNIZED = -1,
}
export const GroupStatusSDKType = GroupStatus;
export const GroupStatusAmino = GroupStatus;
export function groupStatusFromJSON(object: any): GroupStatus {
  switch (object) {
    case 0:
    case "GROUP_STATUS_UNSPECIFIED":
      return GroupStatus.GROUP_STATUS_UNSPECIFIED;
    case 1:
    case "GROUP_STATUS_ROUND_1":
      return GroupStatus.GROUP_STATUS_ROUND_1;
    case 2:
    case "GROUP_STATUS_ROUND_2":
      return GroupStatus.GROUP_STATUS_ROUND_2;
    case 3:
    case "GROUP_STATUS_ROUND_3":
      return GroupStatus.GROUP_STATUS_ROUND_3;
    case 4:
    case "GROUP_STATUS_ACTIVE":
      return GroupStatus.GROUP_STATUS_ACTIVE;
    case 5:
    case "GROUP_STATUS_EXPIRED":
      return GroupStatus.GROUP_STATUS_EXPIRED;
    case 6:
    case "GROUP_STATUS_FALLEN":
      return GroupStatus.GROUP_STATUS_FALLEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GroupStatus.UNRECOGNIZED;
  }
}
export function groupStatusToJSON(object: GroupStatus): string {
  switch (object) {
    case GroupStatus.GROUP_STATUS_UNSPECIFIED:
      return "GROUP_STATUS_UNSPECIFIED";
    case GroupStatus.GROUP_STATUS_ROUND_1:
      return "GROUP_STATUS_ROUND_1";
    case GroupStatus.GROUP_STATUS_ROUND_2:
      return "GROUP_STATUS_ROUND_2";
    case GroupStatus.GROUP_STATUS_ROUND_3:
      return "GROUP_STATUS_ROUND_3";
    case GroupStatus.GROUP_STATUS_ACTIVE:
      return "GROUP_STATUS_ACTIVE";
    case GroupStatus.GROUP_STATUS_EXPIRED:
      return "GROUP_STATUS_EXPIRED";
    case GroupStatus.GROUP_STATUS_FALLEN:
      return "GROUP_STATUS_FALLEN";
    case GroupStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ComplaintStatus represents the status of a complaint. */
export enum ComplaintStatus {
  /** COMPLAINT_STATUS_UNSPECIFIED - COMPLAINT_STATUS_UNSPECIFIED represents an undefined status of the complaint. */
  COMPLAINT_STATUS_UNSPECIFIED = 0,
  /** COMPLAINT_STATUS_SUCCESS - COMPLAINT_STATUS_SUCCESS represents a successful complaint. */
  COMPLAINT_STATUS_SUCCESS = 1,
  /** COMPLAINT_STATUS_FAILED - COMPLAINT_STATUS_FAILED represents a failed complaint. */
  COMPLAINT_STATUS_FAILED = 2,
  UNRECOGNIZED = -1,
}
export const ComplaintStatusSDKType = ComplaintStatus;
export const ComplaintStatusAmino = ComplaintStatus;
export function complaintStatusFromJSON(object: any): ComplaintStatus {
  switch (object) {
    case 0:
    case "COMPLAINT_STATUS_UNSPECIFIED":
      return ComplaintStatus.COMPLAINT_STATUS_UNSPECIFIED;
    case 1:
    case "COMPLAINT_STATUS_SUCCESS":
      return ComplaintStatus.COMPLAINT_STATUS_SUCCESS;
    case 2:
    case "COMPLAINT_STATUS_FAILED":
      return ComplaintStatus.COMPLAINT_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ComplaintStatus.UNRECOGNIZED;
  }
}
export function complaintStatusToJSON(object: ComplaintStatus): string {
  switch (object) {
    case ComplaintStatus.COMPLAINT_STATUS_UNSPECIFIED:
      return "COMPLAINT_STATUS_UNSPECIFIED";
    case ComplaintStatus.COMPLAINT_STATUS_SUCCESS:
      return "COMPLAINT_STATUS_SUCCESS";
    case ComplaintStatus.COMPLAINT_STATUS_FAILED:
      return "COMPLAINT_STATUS_FAILED";
    case ComplaintStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Group is a type representing a participant group in a Distributed Key Generation or signing process. */
export interface Group {
  /** id is the unique identifier of the group. */
  id: bigint;
  /** size is the number of members in the group. */
  size: bigint;
  /** threshold is the minimum number of members needed to generate a valid signature. */
  threshold: bigint;
  /** pub_key is the public key generated by the group after successful completion of the DKG process. */
  pubKey: Uint8Array;
  /** status represents the current stage of the group in the DKG or signing process. */
  status: GroupStatus;
  /** created_height is the block height when the group was created. */
  createdHeight: bigint;
  /** module_owner is the module that creates this group. */
  moduleOwner: string;
}
export interface GroupProtoMsg {
  typeUrl: "/band.tss.v1beta1.Group";
  value: Uint8Array;
}
/** Group is a type representing a participant group in a Distributed Key Generation or signing process. */
export interface GroupAmino {
  /** id is the unique identifier of the group. */
  id?: string;
  /** size is the number of members in the group. */
  size?: string;
  /** threshold is the minimum number of members needed to generate a valid signature. */
  threshold?: string;
  /** pub_key is the public key generated by the group after successful completion of the DKG process. */
  pub_key?: string;
  /** status represents the current stage of the group in the DKG or signing process. */
  status?: GroupStatus;
  /** created_height is the block height when the group was created. */
  created_height?: string;
  /** module_owner is the module that creates this group. */
  module_owner?: string;
}
export interface GroupAminoMsg {
  type: "/band.tss.v1beta1.Group";
  value: GroupAmino;
}
/** Group is a type representing a participant group in a Distributed Key Generation or signing process. */
export interface GroupSDKType {
  id: bigint;
  size: bigint;
  threshold: bigint;
  pub_key: Uint8Array;
  status: GroupStatus;
  created_height: bigint;
  module_owner: string;
}
/** GroupResult is a tss group result from querying tss group information. */
export interface GroupResult {
  /** group defines the group object containing group information. */
  group: Group;
  /** dkg_context defines the DKG context data. */
  dkgContext: Uint8Array;
  /** members is the list of members in the group. */
  members: Member[];
  /** round1_infos is the list of Round 1 information. */
  round1Infos: Round1Info[];
  /** round2_infos is the list of Round 2 information. */
  round2Infos: Round2Info[];
  /** complaints_with_status is the list of complaints with status. */
  complaintsWithStatus: ComplaintsWithStatus[];
  /** confirms is the list of confirms. */
  confirms: Confirm[];
}
export interface GroupResultProtoMsg {
  typeUrl: "/band.tss.v1beta1.GroupResult";
  value: Uint8Array;
}
/** GroupResult is a tss group result from querying tss group information. */
export interface GroupResultAmino {
  /** group defines the group object containing group information. */
  group?: GroupAmino;
  /** dkg_context defines the DKG context data. */
  dkg_context?: string;
  /** members is the list of members in the group. */
  members?: MemberAmino[];
  /** round1_infos is the list of Round 1 information. */
  round1_infos?: Round1InfoAmino[];
  /** round2_infos is the list of Round 2 information. */
  round2_infos?: Round2InfoAmino[];
  /** complaints_with_status is the list of complaints with status. */
  complaints_with_status?: ComplaintsWithStatusAmino[];
  /** confirms is the list of confirms. */
  confirms?: ConfirmAmino[];
}
export interface GroupResultAminoMsg {
  type: "/band.tss.v1beta1.GroupResult";
  value: GroupResultAmino;
}
/** GroupResult is a tss group result from querying tss group information. */
export interface GroupResultSDKType {
  group: GroupSDKType;
  dkg_context: Uint8Array;
  members: MemberSDKType[];
  round1_infos: Round1InfoSDKType[];
  round2_infos: Round2InfoSDKType[];
  complaints_with_status: ComplaintsWithStatusSDKType[];
  confirms: ConfirmSDKType[];
}
/** Round1Info contains all necessary information for handling round 1 of the DKG process. */
export interface Round1Info {
  /** member_id is the unique identifier of a group member. */
  memberId: bigint;
  /** coefficients_commits is a list of commitments to the coefficients of the member's secret polynomial. */
  coefficientCommits: Uint8Array[];
  /** one_time_pub_key is the one-time public key used by the member to encrypt secret shares. */
  oneTimePubKey: Uint8Array;
  /** a0_signature is the member's signature on the first coefficient of its secret polynomial. */
  a0Signature: Uint8Array;
  /** one_time_signature is the member's signature on its one-time public key. */
  oneTimeSignature: Uint8Array;
}
export interface Round1InfoProtoMsg {
  typeUrl: "/band.tss.v1beta1.Round1Info";
  value: Uint8Array;
}
/** Round1Info contains all necessary information for handling round 1 of the DKG process. */
export interface Round1InfoAmino {
  /** member_id is the unique identifier of a group member. */
  member_id?: string;
  /** coefficients_commits is a list of commitments to the coefficients of the member's secret polynomial. */
  coefficient_commits?: string[];
  /** one_time_pub_key is the one-time public key used by the member to encrypt secret shares. */
  one_time_pub_key?: string;
  /** a0_signature is the member's signature on the first coefficient of its secret polynomial. */
  a0_signature?: string;
  /** one_time_signature is the member's signature on its one-time public key. */
  one_time_signature?: string;
}
export interface Round1InfoAminoMsg {
  type: "/band.tss.v1beta1.Round1Info";
  value: Round1InfoAmino;
}
/** Round1Info contains all necessary information for handling round 1 of the DKG process. */
export interface Round1InfoSDKType {
  member_id: bigint;
  coefficient_commits: Uint8Array[];
  one_time_pub_key: Uint8Array;
  a0_signature: Uint8Array;
  one_time_signature: Uint8Array;
}
/** Round2Info contains all necessary information for handling round 2 of the DKG process. */
export interface Round2Info {
  /** member_id is the unique identifier of a group member. */
  memberId: bigint;
  /** encrypted_secret_shares is a list of secret shares encrypted under the public keys of other members. */
  encryptedSecretShares: Uint8Array[];
}
export interface Round2InfoProtoMsg {
  typeUrl: "/band.tss.v1beta1.Round2Info";
  value: Uint8Array;
}
/** Round2Info contains all necessary information for handling round 2 of the DKG process. */
export interface Round2InfoAmino {
  /** member_id is the unique identifier of a group member. */
  member_id?: string;
  /** encrypted_secret_shares is a list of secret shares encrypted under the public keys of other members. */
  encrypted_secret_shares?: string[];
}
export interface Round2InfoAminoMsg {
  type: "/band.tss.v1beta1.Round2Info";
  value: Round2InfoAmino;
}
/** Round2Info contains all necessary information for handling round 2 of the DKG process. */
export interface Round2InfoSDKType {
  member_id: bigint;
  encrypted_secret_shares: Uint8Array[];
}
/** DE contains the public parts of a member's decryption and encryption keys. */
export interface DE {
  /** pub_d is the public value of own commitment (D). */
  pubD: Uint8Array;
  /** pub_e is the public value of own commitment (E). */
  pubE: Uint8Array;
}
export interface DEProtoMsg {
  typeUrl: "/band.tss.v1beta1.DE";
  value: Uint8Array;
}
/** DE contains the public parts of a member's decryption and encryption keys. */
export interface DEAmino {
  /** pub_d is the public value of own commitment (D). */
  pub_d?: string;
  /** pub_e is the public value of own commitment (E). */
  pub_e?: string;
}
export interface DEAminoMsg {
  type: "/band.tss.v1beta1.DE";
  value: DEAmino;
}
/** DE contains the public parts of a member's decryption and encryption keys. */
export interface DESDKType {
  pub_d: Uint8Array;
  pub_e: Uint8Array;
}
/** DEQueue is a simple queue data structure contains index of existing DE objects of each member. */
export interface DEQueue {
  /** head is the current index of the first element in the queue. */
  head: bigint;
  /** tail is the current index of the last element in the queue. */
  tail: bigint;
}
export interface DEQueueProtoMsg {
  typeUrl: "/band.tss.v1beta1.DEQueue";
  value: Uint8Array;
}
/** DEQueue is a simple queue data structure contains index of existing DE objects of each member. */
export interface DEQueueAmino {
  /** head is the current index of the first element in the queue. */
  head?: string;
  /** tail is the current index of the last element in the queue. */
  tail?: string;
}
export interface DEQueueAminoMsg {
  type: "/band.tss.v1beta1.DEQueue";
  value: DEQueueAmino;
}
/** DEQueue is a simple queue data structure contains index of existing DE objects of each member. */
export interface DEQueueSDKType {
  head: bigint;
  tail: bigint;
}
/** Signing contains all necessary information for handling a signing request. */
export interface Signing {
  /** id is the unique identifier of the signing. */
  id: bigint;
  /** current_attempt is the latest round number that signing has been attempted. */
  currentAttempt: bigint;
  /** group_id is the unique identifier of the group. */
  groupId: bigint;
  /** group_pub_key is the public key of the group that sign this message. */
  groupPubKey: Uint8Array;
  /** message is the message to be signed. */
  message: Uint8Array;
  /** group_pub_nonce is the public nonce generated by the group for this signing process. */
  groupPubNonce: Uint8Array;
  /** signature is the group's signature on the message. */
  signature: Uint8Array;
  /** status represents the current stage of the signing in the signing process. */
  status: SigningStatus;
  /** created_height is the block height when the signing was created. */
  createdHeight: bigint;
  /** created_timestamp is the block timestamp when the signing was created. */
  createdTimestamp: Date;
}
export interface SigningProtoMsg {
  typeUrl: "/band.tss.v1beta1.Signing";
  value: Uint8Array;
}
/** Signing contains all necessary information for handling a signing request. */
export interface SigningAmino {
  /** id is the unique identifier of the signing. */
  id?: string;
  /** current_attempt is the latest round number that signing has been attempted. */
  current_attempt?: string;
  /** group_id is the unique identifier of the group. */
  group_id?: string;
  /** group_pub_key is the public key of the group that sign this message. */
  group_pub_key?: string;
  /** message is the message to be signed. */
  message?: string;
  /** group_pub_nonce is the public nonce generated by the group for this signing process. */
  group_pub_nonce?: string;
  /** signature is the group's signature on the message. */
  signature?: string;
  /** status represents the current stage of the signing in the signing process. */
  status?: SigningStatus;
  /** created_height is the block height when the signing was created. */
  created_height?: string;
  /** created_timestamp is the block timestamp when the signing was created. */
  created_timestamp?: string;
}
export interface SigningAminoMsg {
  type: "/band.tss.v1beta1.Signing";
  value: SigningAmino;
}
/** Signing contains all necessary information for handling a signing request. */
export interface SigningSDKType {
  id: bigint;
  current_attempt: bigint;
  group_id: bigint;
  group_pub_key: Uint8Array;
  message: Uint8Array;
  group_pub_nonce: Uint8Array;
  signature: Uint8Array;
  status: SigningStatus;
  created_height: bigint;
  created_timestamp: Date;
}
/**
 * SigningAttempt contains a member that has been assigned to and expiration block height of
 * the specific attempt.
 */
export interface SigningAttempt {
  /** signing_id is the unique identifier of the signing. */
  signingId: bigint;
  /** attempt is the number of round that this signing has been attempted. */
  attempt: bigint;
  /** expired_height is the block height when this signing attempt was expired. */
  expiredHeight: bigint;
  /** assigned_members is a list of members assigned to the signing process. */
  assignedMembers: AssignedMember[];
}
export interface SigningAttemptProtoMsg {
  typeUrl: "/band.tss.v1beta1.SigningAttempt";
  value: Uint8Array;
}
/**
 * SigningAttempt contains a member that has been assigned to and expiration block height of
 * the specific attempt.
 */
export interface SigningAttemptAmino {
  /** signing_id is the unique identifier of the signing. */
  signing_id?: string;
  /** attempt is the number of round that this signing has been attempted. */
  attempt?: string;
  /** expired_height is the block height when this signing attempt was expired. */
  expired_height?: string;
  /** assigned_members is a list of members assigned to the signing process. */
  assigned_members?: AssignedMemberAmino[];
}
export interface SigningAttemptAminoMsg {
  type: "/band.tss.v1beta1.SigningAttempt";
  value: SigningAttemptAmino;
}
/**
 * SigningAttempt contains a member that has been assigned to and expiration block height of
 * the specific attempt.
 */
export interface SigningAttemptSDKType {
  signing_id: bigint;
  attempt: bigint;
  expired_height: bigint;
  assigned_members: AssignedMemberSDKType[];
}
/** AssignedMember is a type representing a member that has been assigned to a signing process. */
export interface AssignedMember {
  /** member_id is the unique identifier of the member. */
  memberId: bigint;
  /** member is the human-readable name of the member. */
  address: string;
  /** pub_key is the public part of a member. */
  pubKey: Uint8Array;
  /** pub_d is the public part of a member's decryption key. */
  pubD: Uint8Array;
  /** pub_e is the public part of a member's encryption key. */
  pubE: Uint8Array;
  /** binding_factor is the binding factor of the member for the signing process. */
  bindingFactor: Uint8Array;
  /** pub_nonce is the public nonce of the member for the signing process. */
  pubNonce: Uint8Array;
}
export interface AssignedMemberProtoMsg {
  typeUrl: "/band.tss.v1beta1.AssignedMember";
  value: Uint8Array;
}
/** AssignedMember is a type representing a member that has been assigned to a signing process. */
export interface AssignedMemberAmino {
  /** member_id is the unique identifier of the member. */
  member_id?: string;
  /** member is the human-readable name of the member. */
  address?: string;
  /** pub_key is the public part of a member. */
  pub_key?: string;
  /** pub_d is the public part of a member's decryption key. */
  pub_d?: string;
  /** pub_e is the public part of a member's encryption key. */
  pub_e?: string;
  /** binding_factor is the binding factor of the member for the signing process. */
  binding_factor?: string;
  /** pub_nonce is the public nonce of the member for the signing process. */
  pub_nonce?: string;
}
export interface AssignedMemberAminoMsg {
  type: "/band.tss.v1beta1.AssignedMember";
  value: AssignedMemberAmino;
}
/** AssignedMember is a type representing a member that has been assigned to a signing process. */
export interface AssignedMemberSDKType {
  member_id: bigint;
  address: string;
  pub_key: Uint8Array;
  pub_d: Uint8Array;
  pub_e: Uint8Array;
  binding_factor: Uint8Array;
  pub_nonce: Uint8Array;
}
/** PendingSignings is a list of all signing processes that are currently pending. */
export interface PendingSignings {
  /** signing_ids is a list of identifiers for the signing processes. */
  signingIds: bigint[];
}
export interface PendingSigningsProtoMsg {
  typeUrl: "/band.tss.v1beta1.PendingSignings";
  value: Uint8Array;
}
/** PendingSignings is a list of all signing processes that are currently pending. */
export interface PendingSigningsAmino {
  /** signing_ids is a list of identifiers for the signing processes. */
  signing_ids?: string[];
}
export interface PendingSigningsAminoMsg {
  type: "/band.tss.v1beta1.PendingSignings";
  value: PendingSigningsAmino;
}
/** PendingSignings is a list of all signing processes that are currently pending. */
export interface PendingSigningsSDKType {
  signing_ids: bigint[];
}
/** Member is a type representing a member of the group. */
export interface Member {
  /** id is the unique identifier of a member. */
  id: bigint;
  /** group_id is the group id of this member. */
  groupId: bigint;
  /** address is the address of the member. */
  address: string;
  /** pub_key is the public key of the member. */
  pubKey: Uint8Array;
  /** is_malicious is a boolean flag indicating whether the member is considered malicious. */
  isMalicious: boolean;
  /** is_active is a boolean flag indicating whether the member is currently active in the protocol. */
  isActive: boolean;
}
export interface MemberProtoMsg {
  typeUrl: "/band.tss.v1beta1.Member";
  value: Uint8Array;
}
/** Member is a type representing a member of the group. */
export interface MemberAmino {
  /** id is the unique identifier of a member. */
  id?: string;
  /** group_id is the group id of this member. */
  group_id?: string;
  /** address is the address of the member. */
  address?: string;
  /** pub_key is the public key of the member. */
  pub_key?: string;
  /** is_malicious is a boolean flag indicating whether the member is considered malicious. */
  is_malicious?: boolean;
  /** is_active is a boolean flag indicating whether the member is currently active in the protocol. */
  is_active?: boolean;
}
export interface MemberAminoMsg {
  type: "/band.tss.v1beta1.Member";
  value: MemberAmino;
}
/** Member is a type representing a member of the group. */
export interface MemberSDKType {
  id: bigint;
  group_id: bigint;
  address: string;
  pub_key: Uint8Array;
  is_malicious: boolean;
  is_active: boolean;
}
/** Confirm is a message type used to confirm participation in the protocol. */
export interface Confirm {
  /** member_id is the unique identifier of a group member. */
  memberId: bigint;
  /** own_pub_key_sig is a signature over the member's own public key. */
  ownPubKeySig: Uint8Array;
}
export interface ConfirmProtoMsg {
  typeUrl: "/band.tss.v1beta1.Confirm";
  value: Uint8Array;
}
/** Confirm is a message type used to confirm participation in the protocol. */
export interface ConfirmAmino {
  /** member_id is the unique identifier of a group member. */
  member_id?: string;
  /** own_pub_key_sig is a signature over the member's own public key. */
  own_pub_key_sig?: string;
}
export interface ConfirmAminoMsg {
  type: "/band.tss.v1beta1.Confirm";
  value: ConfirmAmino;
}
/** Confirm is a message type used to confirm participation in the protocol. */
export interface ConfirmSDKType {
  member_id: bigint;
  own_pub_key_sig: Uint8Array;
}
/** Complaint is a message type used to issue a complaint against a member. */
export interface Complaint {
  /** complainant is the member issuing the complaint. */
  complainant: bigint;
  /** respondent is the member against whom the complaint is issued. */
  respondent: bigint;
  /** key_sym is a symmetric key between respondent's private key and respondent's public key. */
  keySym: Uint8Array;
  /** signature is the complaint signature that can do a symmetric key validation and complaint verification. */
  signature: Uint8Array;
}
export interface ComplaintProtoMsg {
  typeUrl: "/band.tss.v1beta1.Complaint";
  value: Uint8Array;
}
/** Complaint is a message type used to issue a complaint against a member. */
export interface ComplaintAmino {
  /** complainant is the member issuing the complaint. */
  complainant?: string;
  /** respondent is the member against whom the complaint is issued. */
  respondent?: string;
  /** key_sym is a symmetric key between respondent's private key and respondent's public key. */
  key_sym?: string;
  /** signature is the complaint signature that can do a symmetric key validation and complaint verification. */
  signature?: string;
}
export interface ComplaintAminoMsg {
  type: "/band.tss.v1beta1.Complaint";
  value: ComplaintAmino;
}
/** Complaint is a message type used to issue a complaint against a member. */
export interface ComplaintSDKType {
  complainant: bigint;
  respondent: bigint;
  key_sym: Uint8Array;
  signature: Uint8Array;
}
/** ComplaintWithStatus contains information about a complaint with its status. */
export interface ComplaintWithStatus {
  /** complaint is the information about the complaint. */
  complaint: Complaint;
  /** complaint_status is the status of the complaint. */
  complaintStatus: ComplaintStatus;
}
export interface ComplaintWithStatusProtoMsg {
  typeUrl: "/band.tss.v1beta1.ComplaintWithStatus";
  value: Uint8Array;
}
/** ComplaintWithStatus contains information about a complaint with its status. */
export interface ComplaintWithStatusAmino {
  /** complaint is the information about the complaint. */
  complaint?: ComplaintAmino;
  /** complaint_status is the status of the complaint. */
  complaint_status?: ComplaintStatus;
}
export interface ComplaintWithStatusAminoMsg {
  type: "/band.tss.v1beta1.ComplaintWithStatus";
  value: ComplaintWithStatusAmino;
}
/** ComplaintWithStatus contains information about a complaint with its status. */
export interface ComplaintWithStatusSDKType {
  complaint: ComplaintSDKType;
  complaint_status: ComplaintStatus;
}
/** ComplaintsWithStatus contains information about multiple complaints and their status from a single member. */
export interface ComplaintsWithStatus {
  /** member_id is the identifier of the member filing the complaints. */
  memberId: bigint;
  /** complaints_with_status is the list of complaints with their status from this member. */
  complaintsWithStatus: ComplaintWithStatus[];
}
export interface ComplaintsWithStatusProtoMsg {
  typeUrl: "/band.tss.v1beta1.ComplaintsWithStatus";
  value: Uint8Array;
}
/** ComplaintsWithStatus contains information about multiple complaints and their status from a single member. */
export interface ComplaintsWithStatusAmino {
  /** member_id is the identifier of the member filing the complaints. */
  member_id?: string;
  /** complaints_with_status is the list of complaints with their status from this member. */
  complaints_with_status?: ComplaintWithStatusAmino[];
}
export interface ComplaintsWithStatusAminoMsg {
  type: "/band.tss.v1beta1.ComplaintsWithStatus";
  value: ComplaintsWithStatusAmino;
}
/** ComplaintsWithStatus contains information about multiple complaints and their status from a single member. */
export interface ComplaintsWithStatusSDKType {
  member_id: bigint;
  complaints_with_status: ComplaintWithStatusSDKType[];
}
/** PendingProcessGroups is a list of groups that are waiting to be processed. */
export interface PendingProcessGroups {
  /** group_ids is a list of group IDs. */
  groupIds: bigint[];
}
export interface PendingProcessGroupsProtoMsg {
  typeUrl: "/band.tss.v1beta1.PendingProcessGroups";
  value: Uint8Array;
}
/** PendingProcessGroups is a list of groups that are waiting to be processed. */
export interface PendingProcessGroupsAmino {
  /** group_ids is a list of group IDs. */
  group_ids?: string[];
}
export interface PendingProcessGroupsAminoMsg {
  type: "/band.tss.v1beta1.PendingProcessGroups";
  value: PendingProcessGroupsAmino;
}
/** PendingProcessGroups is a list of groups that are waiting to be processed. */
export interface PendingProcessGroupsSDKType {
  group_ids: bigint[];
}
/** PendingProcessSignings is a list of signings that are waiting to be processed. */
export interface PendingProcessSignings {
  /** signing_ids is a list of signing IDs. */
  signingIds: bigint[];
}
export interface PendingProcessSigningsProtoMsg {
  typeUrl: "/band.tss.v1beta1.PendingProcessSignings";
  value: Uint8Array;
}
/** PendingProcessSignings is a list of signings that are waiting to be processed. */
export interface PendingProcessSigningsAmino {
  /** signing_ids is a list of signing IDs. */
  signing_ids?: string[];
}
export interface PendingProcessSigningsAminoMsg {
  type: "/band.tss.v1beta1.PendingProcessSignings";
  value: PendingProcessSigningsAmino;
}
/** PendingProcessSignings is a list of signings that are waiting to be processed. */
export interface PendingProcessSigningsSDKType {
  signing_ids: bigint[];
}
/** PartialSignature contains information about a member's partial signature. */
export interface PartialSignature {
  /** signing_id is the unique identifier of the signing. */
  signingId: bigint;
  /** signing_attempt is the number of attempts for this signing. */
  signingAttempt: bigint;
  /** member_id is the identifier of the member providing the partial signature. */
  memberId: bigint;
  /** signature is the partial signature provided by this member. */
  signature: Uint8Array;
}
export interface PartialSignatureProtoMsg {
  typeUrl: "/band.tss.v1beta1.PartialSignature";
  value: Uint8Array;
}
/** PartialSignature contains information about a member's partial signature. */
export interface PartialSignatureAmino {
  /** signing_id is the unique identifier of the signing. */
  signing_id?: string;
  /** signing_attempt is the number of attempts for this signing. */
  signing_attempt?: string;
  /** member_id is the identifier of the member providing the partial signature. */
  member_id?: string;
  /** signature is the partial signature provided by this member. */
  signature?: string;
}
export interface PartialSignatureAminoMsg {
  type: "/band.tss.v1beta1.PartialSignature";
  value: PartialSignatureAmino;
}
/** PartialSignature contains information about a member's partial signature. */
export interface PartialSignatureSDKType {
  signing_id: bigint;
  signing_attempt: bigint;
  member_id: bigint;
  signature: Uint8Array;
}
/** TextSignatureOrder defines a general text signature order. */
export interface TextSignatureOrder {
  $typeUrl?: "/band.tss.v1beta1.TextSignatureOrder";
  /** message is the data that needs to be signed. */
  message: Uint8Array;
}
export interface TextSignatureOrderProtoMsg {
  typeUrl: "/band.tss.v1beta1.TextSignatureOrder";
  value: Uint8Array;
}
/** TextSignatureOrder defines a general text signature order. */
export interface TextSignatureOrderAmino {
  /** message is the data that needs to be signed. */
  message?: string;
}
export interface TextSignatureOrderAminoMsg {
  type: "/band.tss.v1beta1.TextSignatureOrder";
  value: TextSignatureOrderAmino;
}
/** TextSignatureOrder defines a general text signature order. */
export interface TextSignatureOrderSDKType {
  $typeUrl?: "/band.tss.v1beta1.TextSignatureOrder";
  message: Uint8Array;
}
/** EVMSignature defines a signature in the EVM format. */
export interface EVMSignature {
  /** r_address is the address of the nonce for using in the contract. */
  rAddress: Uint8Array;
  /** signature is the signature part for using in the contract. */
  signature: Uint8Array;
}
export interface EVMSignatureProtoMsg {
  typeUrl: "/band.tss.v1beta1.EVMSignature";
  value: Uint8Array;
}
/** EVMSignature defines a signature in the EVM format. */
export interface EVMSignatureAmino {
  /** r_address is the address of the nonce for using in the contract. */
  r_address?: string;
  /** signature is the signature part for using in the contract. */
  signature?: string;
}
export interface EVMSignatureAminoMsg {
  type: "/band.tss.v1beta1.EVMSignature";
  value: EVMSignatureAmino;
}
/** EVMSignature defines a signature in the EVM format. */
export interface EVMSignatureSDKType {
  r_address: Uint8Array;
  signature: Uint8Array;
}
/** SigningResult is a tss signing result from querying tss signing information. */
export interface SigningResult {
  /** signing is the tss signing result. */
  signing: Signing;
  /** current_signing_attempt is the current attempt information of the signing. */
  currentSigningAttempt?: SigningAttempt;
  /** evm_signature is the signature in the format that can use directly in EVM. */
  evmSignature?: EVMSignature;
  /** received_partial_signatures is a list of received partial signatures. */
  receivedPartialSignatures: PartialSignature[];
}
export interface SigningResultProtoMsg {
  typeUrl: "/band.tss.v1beta1.SigningResult";
  value: Uint8Array;
}
/** SigningResult is a tss signing result from querying tss signing information. */
export interface SigningResultAmino {
  /** signing is the tss signing result. */
  signing?: SigningAmino;
  /** current_signing_attempt is the current attempt information of the signing. */
  current_signing_attempt?: SigningAttemptAmino;
  /** evm_signature is the signature in the format that can use directly in EVM. */
  evm_signature?: EVMSignatureAmino;
  /** received_partial_signatures is a list of received partial signatures. */
  received_partial_signatures?: PartialSignatureAmino[];
}
export interface SigningResultAminoMsg {
  type: "/band.tss.v1beta1.SigningResult";
  value: SigningResultAmino;
}
/** SigningResult is a tss signing result from querying tss signing information. */
export interface SigningResultSDKType {
  signing: SigningSDKType;
  current_signing_attempt?: SigningAttemptSDKType;
  evm_signature?: EVMSignatureSDKType;
  received_partial_signatures: PartialSignatureSDKType[];
}
/** SigningExpiration defines the expiration time of the signing. */
export interface SigningExpiration {
  /** signing_id is the id of the signing. */
  signingId: bigint;
  /** signing_attempt is the number of attempts of the signing. */
  signingAttempt: bigint;
}
export interface SigningExpirationProtoMsg {
  typeUrl: "/band.tss.v1beta1.SigningExpiration";
  value: Uint8Array;
}
/** SigningExpiration defines the expiration time of the signing. */
export interface SigningExpirationAmino {
  /** signing_id is the id of the signing. */
  signing_id?: string;
  /** signing_attempt is the number of attempts of the signing. */
  signing_attempt?: string;
}
export interface SigningExpirationAminoMsg {
  type: "/band.tss.v1beta1.SigningExpiration";
  value: SigningExpirationAmino;
}
/** SigningExpiration defines the expiration time of the signing. */
export interface SigningExpirationSDKType {
  signing_id: bigint;
  signing_attempt: bigint;
}
/** SigningExpirations is a list of signing expiration information that are waiting in the queue. */
export interface SigningExpirations {
  /** signing_expirations is a list of SigningExpiration object. */
  signingExpirations: SigningExpiration[];
}
export interface SigningExpirationsProtoMsg {
  typeUrl: "/band.tss.v1beta1.SigningExpirations";
  value: Uint8Array;
}
/** SigningExpirations is a list of signing expiration information that are waiting in the queue. */
export interface SigningExpirationsAmino {
  /** signing_expirations is a list of SigningExpiration object. */
  signing_expirations?: SigningExpirationAmino[];
}
export interface SigningExpirationsAminoMsg {
  type: "/band.tss.v1beta1.SigningExpirations";
  value: SigningExpirationsAmino;
}
/** SigningExpirations is a list of signing expiration information that are waiting in the queue. */
export interface SigningExpirationsSDKType {
  signing_expirations: SigningExpirationSDKType[];
}
function createBaseGroup(): Group {
  return {
    id: BigInt(0),
    size: BigInt(0),
    threshold: BigInt(0),
    pubKey: new Uint8Array(),
    status: 0,
    createdHeight: BigInt(0),
    moduleOwner: ""
  };
}
export const Group = {
  typeUrl: "/band.tss.v1beta1.Group",
  encode(message: Group, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.size !== BigInt(0)) {
      writer.uint32(16).uint64(message.size);
    }
    if (message.threshold !== BigInt(0)) {
      writer.uint32(24).uint64(message.threshold);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(34).bytes(message.pubKey);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.createdHeight !== BigInt(0)) {
      writer.uint32(48).uint64(message.createdHeight);
    }
    if (message.moduleOwner !== "") {
      writer.uint32(58).string(message.moduleOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Group {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.size = reader.uint64();
          break;
        case 3:
          message.threshold = reader.uint64();
          break;
        case 4:
          message.pubKey = reader.bytes();
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        case 6:
          message.createdHeight = reader.uint64();
          break;
        case 7:
          message.moduleOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Group>): Group {
    const message = createBaseGroup();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.size = object.size !== undefined && object.size !== null ? BigInt(object.size.toString()) : BigInt(0);
    message.threshold = object.threshold !== undefined && object.threshold !== null ? BigInt(object.threshold.toString()) : BigInt(0);
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.status = object.status ?? 0;
    message.createdHeight = object.createdHeight !== undefined && object.createdHeight !== null ? BigInt(object.createdHeight.toString()) : BigInt(0);
    message.moduleOwner = object.moduleOwner ?? "";
    return message;
  },
  fromAmino(object: GroupAmino): Group {
    const message = createBaseGroup();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.size !== undefined && object.size !== null) {
      message.size = BigInt(object.size);
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = BigInt(object.threshold);
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = bytesFromBase64(object.pub_key);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.created_height !== undefined && object.created_height !== null) {
      message.createdHeight = BigInt(object.created_height);
    }
    if (object.module_owner !== undefined && object.module_owner !== null) {
      message.moduleOwner = object.module_owner;
    }
    return message;
  },
  toAmino(message: Group): GroupAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.size = message.size !== BigInt(0) ? message.size?.toString() : undefined;
    obj.threshold = message.threshold !== BigInt(0) ? message.threshold?.toString() : undefined;
    obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.created_height = message.createdHeight !== BigInt(0) ? message.createdHeight?.toString() : undefined;
    obj.module_owner = message.moduleOwner === "" ? undefined : message.moduleOwner;
    return obj;
  },
  fromAminoMsg(object: GroupAminoMsg): Group {
    return Group.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupProtoMsg): Group {
    return Group.decode(message.value);
  },
  toProto(message: Group): Uint8Array {
    return Group.encode(message).finish();
  },
  toProtoMsg(message: Group): GroupProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.Group",
      value: Group.encode(message).finish()
    };
  }
};
function createBaseGroupResult(): GroupResult {
  return {
    group: Group.fromPartial({}),
    dkgContext: new Uint8Array(),
    members: [],
    round1Infos: [],
    round2Infos: [],
    complaintsWithStatus: [],
    confirms: []
  };
}
export const GroupResult = {
  typeUrl: "/band.tss.v1beta1.GroupResult",
  encode(message: GroupResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    if (message.dkgContext.length !== 0) {
      writer.uint32(18).bytes(message.dkgContext);
    }
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.round1Infos) {
      Round1Info.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.round2Infos) {
      Round2Info.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.complaintsWithStatus) {
      ComplaintsWithStatus.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.confirms) {
      Confirm.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GroupResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = Group.decode(reader, reader.uint32());
          break;
        case 2:
          message.dkgContext = reader.bytes();
          break;
        case 3:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        case 4:
          message.round1Infos.push(Round1Info.decode(reader, reader.uint32()));
          break;
        case 5:
          message.round2Infos.push(Round2Info.decode(reader, reader.uint32()));
          break;
        case 6:
          message.complaintsWithStatus.push(ComplaintsWithStatus.decode(reader, reader.uint32()));
          break;
        case 7:
          message.confirms.push(Confirm.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GroupResult>): GroupResult {
    const message = createBaseGroupResult();
    message.group = object.group !== undefined && object.group !== null ? Group.fromPartial(object.group) : undefined;
    message.dkgContext = object.dkgContext ?? new Uint8Array();
    message.members = object.members?.map(e => Member.fromPartial(e)) || [];
    message.round1Infos = object.round1Infos?.map(e => Round1Info.fromPartial(e)) || [];
    message.round2Infos = object.round2Infos?.map(e => Round2Info.fromPartial(e)) || [];
    message.complaintsWithStatus = object.complaintsWithStatus?.map(e => ComplaintsWithStatus.fromPartial(e)) || [];
    message.confirms = object.confirms?.map(e => Confirm.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GroupResultAmino): GroupResult {
    const message = createBaseGroupResult();
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromAmino(object.group);
    }
    if (object.dkg_context !== undefined && object.dkg_context !== null) {
      message.dkgContext = bytesFromBase64(object.dkg_context);
    }
    message.members = object.members?.map(e => Member.fromAmino(e)) || [];
    message.round1Infos = object.round1_infos?.map(e => Round1Info.fromAmino(e)) || [];
    message.round2Infos = object.round2_infos?.map(e => Round2Info.fromAmino(e)) || [];
    message.complaintsWithStatus = object.complaints_with_status?.map(e => ComplaintsWithStatus.fromAmino(e)) || [];
    message.confirms = object.confirms?.map(e => Confirm.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GroupResult): GroupResultAmino {
    const obj: any = {};
    obj.group = message.group ? Group.toAmino(message.group) : undefined;
    obj.dkg_context = message.dkgContext ? base64FromBytes(message.dkgContext) : undefined;
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = message.members;
    }
    if (message.round1Infos) {
      obj.round1_infos = message.round1Infos.map(e => e ? Round1Info.toAmino(e) : undefined);
    } else {
      obj.round1_infos = message.round1Infos;
    }
    if (message.round2Infos) {
      obj.round2_infos = message.round2Infos.map(e => e ? Round2Info.toAmino(e) : undefined);
    } else {
      obj.round2_infos = message.round2Infos;
    }
    if (message.complaintsWithStatus) {
      obj.complaints_with_status = message.complaintsWithStatus.map(e => e ? ComplaintsWithStatus.toAmino(e) : undefined);
    } else {
      obj.complaints_with_status = message.complaintsWithStatus;
    }
    if (message.confirms) {
      obj.confirms = message.confirms.map(e => e ? Confirm.toAmino(e) : undefined);
    } else {
      obj.confirms = message.confirms;
    }
    return obj;
  },
  fromAminoMsg(object: GroupResultAminoMsg): GroupResult {
    return GroupResult.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupResultProtoMsg): GroupResult {
    return GroupResult.decode(message.value);
  },
  toProto(message: GroupResult): Uint8Array {
    return GroupResult.encode(message).finish();
  },
  toProtoMsg(message: GroupResult): GroupResultProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.GroupResult",
      value: GroupResult.encode(message).finish()
    };
  }
};
function createBaseRound1Info(): Round1Info {
  return {
    memberId: BigInt(0),
    coefficientCommits: [],
    oneTimePubKey: new Uint8Array(),
    a0Signature: new Uint8Array(),
    oneTimeSignature: new Uint8Array()
  };
}
export const Round1Info = {
  typeUrl: "/band.tss.v1beta1.Round1Info",
  encode(message: Round1Info, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberId !== BigInt(0)) {
      writer.uint32(8).uint64(message.memberId);
    }
    for (const v of message.coefficientCommits) {
      writer.uint32(18).bytes(v!);
    }
    if (message.oneTimePubKey.length !== 0) {
      writer.uint32(26).bytes(message.oneTimePubKey);
    }
    if (message.a0Signature.length !== 0) {
      writer.uint32(34).bytes(message.a0Signature);
    }
    if (message.oneTimeSignature.length !== 0) {
      writer.uint32(42).bytes(message.oneTimeSignature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Round1Info {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRound1Info();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberId = reader.uint64();
          break;
        case 2:
          message.coefficientCommits.push(reader.bytes());
          break;
        case 3:
          message.oneTimePubKey = reader.bytes();
          break;
        case 4:
          message.a0Signature = reader.bytes();
          break;
        case 5:
          message.oneTimeSignature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Round1Info>): Round1Info {
    const message = createBaseRound1Info();
    message.memberId = object.memberId !== undefined && object.memberId !== null ? BigInt(object.memberId.toString()) : BigInt(0);
    message.coefficientCommits = object.coefficientCommits?.map(e => e) || [];
    message.oneTimePubKey = object.oneTimePubKey ?? new Uint8Array();
    message.a0Signature = object.a0Signature ?? new Uint8Array();
    message.oneTimeSignature = object.oneTimeSignature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: Round1InfoAmino): Round1Info {
    const message = createBaseRound1Info();
    if (object.member_id !== undefined && object.member_id !== null) {
      message.memberId = BigInt(object.member_id);
    }
    message.coefficientCommits = object.coefficient_commits?.map(e => bytesFromBase64(e)) || [];
    if (object.one_time_pub_key !== undefined && object.one_time_pub_key !== null) {
      message.oneTimePubKey = bytesFromBase64(object.one_time_pub_key);
    }
    if (object.a0_signature !== undefined && object.a0_signature !== null) {
      message.a0Signature = bytesFromBase64(object.a0_signature);
    }
    if (object.one_time_signature !== undefined && object.one_time_signature !== null) {
      message.oneTimeSignature = bytesFromBase64(object.one_time_signature);
    }
    return message;
  },
  toAmino(message: Round1Info): Round1InfoAmino {
    const obj: any = {};
    obj.member_id = message.memberId !== BigInt(0) ? message.memberId?.toString() : undefined;
    if (message.coefficientCommits) {
      obj.coefficient_commits = message.coefficientCommits.map(e => base64FromBytes(e));
    } else {
      obj.coefficient_commits = message.coefficientCommits;
    }
    obj.one_time_pub_key = message.oneTimePubKey ? base64FromBytes(message.oneTimePubKey) : undefined;
    obj.a0_signature = message.a0Signature ? base64FromBytes(message.a0Signature) : undefined;
    obj.one_time_signature = message.oneTimeSignature ? base64FromBytes(message.oneTimeSignature) : undefined;
    return obj;
  },
  fromAminoMsg(object: Round1InfoAminoMsg): Round1Info {
    return Round1Info.fromAmino(object.value);
  },
  fromProtoMsg(message: Round1InfoProtoMsg): Round1Info {
    return Round1Info.decode(message.value);
  },
  toProto(message: Round1Info): Uint8Array {
    return Round1Info.encode(message).finish();
  },
  toProtoMsg(message: Round1Info): Round1InfoProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.Round1Info",
      value: Round1Info.encode(message).finish()
    };
  }
};
function createBaseRound2Info(): Round2Info {
  return {
    memberId: BigInt(0),
    encryptedSecretShares: []
  };
}
export const Round2Info = {
  typeUrl: "/band.tss.v1beta1.Round2Info",
  encode(message: Round2Info, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberId !== BigInt(0)) {
      writer.uint32(8).uint64(message.memberId);
    }
    for (const v of message.encryptedSecretShares) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Round2Info {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRound2Info();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberId = reader.uint64();
          break;
        case 2:
          message.encryptedSecretShares.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Round2Info>): Round2Info {
    const message = createBaseRound2Info();
    message.memberId = object.memberId !== undefined && object.memberId !== null ? BigInt(object.memberId.toString()) : BigInt(0);
    message.encryptedSecretShares = object.encryptedSecretShares?.map(e => e) || [];
    return message;
  },
  fromAmino(object: Round2InfoAmino): Round2Info {
    const message = createBaseRound2Info();
    if (object.member_id !== undefined && object.member_id !== null) {
      message.memberId = BigInt(object.member_id);
    }
    message.encryptedSecretShares = object.encrypted_secret_shares?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: Round2Info): Round2InfoAmino {
    const obj: any = {};
    obj.member_id = message.memberId !== BigInt(0) ? message.memberId?.toString() : undefined;
    if (message.encryptedSecretShares) {
      obj.encrypted_secret_shares = message.encryptedSecretShares.map(e => base64FromBytes(e));
    } else {
      obj.encrypted_secret_shares = message.encryptedSecretShares;
    }
    return obj;
  },
  fromAminoMsg(object: Round2InfoAminoMsg): Round2Info {
    return Round2Info.fromAmino(object.value);
  },
  fromProtoMsg(message: Round2InfoProtoMsg): Round2Info {
    return Round2Info.decode(message.value);
  },
  toProto(message: Round2Info): Uint8Array {
    return Round2Info.encode(message).finish();
  },
  toProtoMsg(message: Round2Info): Round2InfoProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.Round2Info",
      value: Round2Info.encode(message).finish()
    };
  }
};
function createBaseDE(): DE {
  return {
    pubD: new Uint8Array(),
    pubE: new Uint8Array()
  };
}
export const DE = {
  typeUrl: "/band.tss.v1beta1.DE",
  encode(message: DE, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pubD.length !== 0) {
      writer.uint32(10).bytes(message.pubD);
    }
    if (message.pubE.length !== 0) {
      writer.uint32(18).bytes(message.pubE);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DE {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDE();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubD = reader.bytes();
          break;
        case 2:
          message.pubE = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DE>): DE {
    const message = createBaseDE();
    message.pubD = object.pubD ?? new Uint8Array();
    message.pubE = object.pubE ?? new Uint8Array();
    return message;
  },
  fromAmino(object: DEAmino): DE {
    const message = createBaseDE();
    if (object.pub_d !== undefined && object.pub_d !== null) {
      message.pubD = bytesFromBase64(object.pub_d);
    }
    if (object.pub_e !== undefined && object.pub_e !== null) {
      message.pubE = bytesFromBase64(object.pub_e);
    }
    return message;
  },
  toAmino(message: DE): DEAmino {
    const obj: any = {};
    obj.pub_d = message.pubD ? base64FromBytes(message.pubD) : undefined;
    obj.pub_e = message.pubE ? base64FromBytes(message.pubE) : undefined;
    return obj;
  },
  fromAminoMsg(object: DEAminoMsg): DE {
    return DE.fromAmino(object.value);
  },
  fromProtoMsg(message: DEProtoMsg): DE {
    return DE.decode(message.value);
  },
  toProto(message: DE): Uint8Array {
    return DE.encode(message).finish();
  },
  toProtoMsg(message: DE): DEProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.DE",
      value: DE.encode(message).finish()
    };
  }
};
function createBaseDEQueue(): DEQueue {
  return {
    head: BigInt(0),
    tail: BigInt(0)
  };
}
export const DEQueue = {
  typeUrl: "/band.tss.v1beta1.DEQueue",
  encode(message: DEQueue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.head !== BigInt(0)) {
      writer.uint32(8).uint64(message.head);
    }
    if (message.tail !== BigInt(0)) {
      writer.uint32(16).uint64(message.tail);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DEQueue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDEQueue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.head = reader.uint64();
          break;
        case 2:
          message.tail = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DEQueue>): DEQueue {
    const message = createBaseDEQueue();
    message.head = object.head !== undefined && object.head !== null ? BigInt(object.head.toString()) : BigInt(0);
    message.tail = object.tail !== undefined && object.tail !== null ? BigInt(object.tail.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DEQueueAmino): DEQueue {
    const message = createBaseDEQueue();
    if (object.head !== undefined && object.head !== null) {
      message.head = BigInt(object.head);
    }
    if (object.tail !== undefined && object.tail !== null) {
      message.tail = BigInt(object.tail);
    }
    return message;
  },
  toAmino(message: DEQueue): DEQueueAmino {
    const obj: any = {};
    obj.head = message.head !== BigInt(0) ? message.head?.toString() : undefined;
    obj.tail = message.tail !== BigInt(0) ? message.tail?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DEQueueAminoMsg): DEQueue {
    return DEQueue.fromAmino(object.value);
  },
  fromProtoMsg(message: DEQueueProtoMsg): DEQueue {
    return DEQueue.decode(message.value);
  },
  toProto(message: DEQueue): Uint8Array {
    return DEQueue.encode(message).finish();
  },
  toProtoMsg(message: DEQueue): DEQueueProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.DEQueue",
      value: DEQueue.encode(message).finish()
    };
  }
};
function createBaseSigning(): Signing {
  return {
    id: BigInt(0),
    currentAttempt: BigInt(0),
    groupId: BigInt(0),
    groupPubKey: new Uint8Array(),
    message: new Uint8Array(),
    groupPubNonce: new Uint8Array(),
    signature: new Uint8Array(),
    status: 0,
    createdHeight: BigInt(0),
    createdTimestamp: new Date()
  };
}
export const Signing = {
  typeUrl: "/band.tss.v1beta1.Signing",
  encode(message: Signing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.currentAttempt !== BigInt(0)) {
      writer.uint32(16).uint64(message.currentAttempt);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(24).uint64(message.groupId);
    }
    if (message.groupPubKey.length !== 0) {
      writer.uint32(34).bytes(message.groupPubKey);
    }
    if (message.message.length !== 0) {
      writer.uint32(42).bytes(message.message);
    }
    if (message.groupPubNonce.length !== 0) {
      writer.uint32(50).bytes(message.groupPubNonce);
    }
    if (message.signature.length !== 0) {
      writer.uint32(58).bytes(message.signature);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.createdHeight !== BigInt(0)) {
      writer.uint32(72).uint64(message.createdHeight);
    }
    if (message.createdTimestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.createdTimestamp), writer.uint32(82).fork()).ldelim();
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
          message.currentAttempt = reader.uint64();
          break;
        case 3:
          message.groupId = reader.uint64();
          break;
        case 4:
          message.groupPubKey = reader.bytes();
          break;
        case 5:
          message.message = reader.bytes();
          break;
        case 6:
          message.groupPubNonce = reader.bytes();
          break;
        case 7:
          message.signature = reader.bytes();
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        case 9:
          message.createdHeight = reader.uint64();
          break;
        case 10:
          message.createdTimestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
    message.currentAttempt = object.currentAttempt !== undefined && object.currentAttempt !== null ? BigInt(object.currentAttempt.toString()) : BigInt(0);
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.groupPubKey = object.groupPubKey ?? new Uint8Array();
    message.message = object.message ?? new Uint8Array();
    message.groupPubNonce = object.groupPubNonce ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    message.status = object.status ?? 0;
    message.createdHeight = object.createdHeight !== undefined && object.createdHeight !== null ? BigInt(object.createdHeight.toString()) : BigInt(0);
    message.createdTimestamp = object.createdTimestamp ?? undefined;
    return message;
  },
  fromAmino(object: SigningAmino): Signing {
    const message = createBaseSigning();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.current_attempt !== undefined && object.current_attempt !== null) {
      message.currentAttempt = BigInt(object.current_attempt);
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.group_pub_key !== undefined && object.group_pub_key !== null) {
      message.groupPubKey = bytesFromBase64(object.group_pub_key);
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = bytesFromBase64(object.message);
    }
    if (object.group_pub_nonce !== undefined && object.group_pub_nonce !== null) {
      message.groupPubNonce = bytesFromBase64(object.group_pub_nonce);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.created_height !== undefined && object.created_height !== null) {
      message.createdHeight = BigInt(object.created_height);
    }
    if (object.created_timestamp !== undefined && object.created_timestamp !== null) {
      message.createdTimestamp = fromTimestamp(Timestamp.fromAmino(object.created_timestamp));
    }
    return message;
  },
  toAmino(message: Signing): SigningAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.current_attempt = message.currentAttempt !== BigInt(0) ? message.currentAttempt?.toString() : undefined;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    obj.group_pub_key = message.groupPubKey ? base64FromBytes(message.groupPubKey) : undefined;
    obj.message = message.message ? base64FromBytes(message.message) : undefined;
    obj.group_pub_nonce = message.groupPubNonce ? base64FromBytes(message.groupPubNonce) : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.created_height = message.createdHeight !== BigInt(0) ? message.createdHeight?.toString() : undefined;
    obj.created_timestamp = message.createdTimestamp ? Timestamp.toAmino(toTimestamp(message.createdTimestamp)) : undefined;
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
      typeUrl: "/band.tss.v1beta1.Signing",
      value: Signing.encode(message).finish()
    };
  }
};
function createBaseSigningAttempt(): SigningAttempt {
  return {
    signingId: BigInt(0),
    attempt: BigInt(0),
    expiredHeight: BigInt(0),
    assignedMembers: []
  };
}
export const SigningAttempt = {
  typeUrl: "/band.tss.v1beta1.SigningAttempt",
  encode(message: SigningAttempt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signingId !== BigInt(0)) {
      writer.uint32(8).uint64(message.signingId);
    }
    if (message.attempt !== BigInt(0)) {
      writer.uint32(16).uint64(message.attempt);
    }
    if (message.expiredHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.expiredHeight);
    }
    for (const v of message.assignedMembers) {
      AssignedMember.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SigningAttempt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningAttempt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signingId = reader.uint64();
          break;
        case 2:
          message.attempt = reader.uint64();
          break;
        case 3:
          message.expiredHeight = reader.uint64();
          break;
        case 4:
          message.assignedMembers.push(AssignedMember.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SigningAttempt>): SigningAttempt {
    const message = createBaseSigningAttempt();
    message.signingId = object.signingId !== undefined && object.signingId !== null ? BigInt(object.signingId.toString()) : BigInt(0);
    message.attempt = object.attempt !== undefined && object.attempt !== null ? BigInt(object.attempt.toString()) : BigInt(0);
    message.expiredHeight = object.expiredHeight !== undefined && object.expiredHeight !== null ? BigInt(object.expiredHeight.toString()) : BigInt(0);
    message.assignedMembers = object.assignedMembers?.map(e => AssignedMember.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SigningAttemptAmino): SigningAttempt {
    const message = createBaseSigningAttempt();
    if (object.signing_id !== undefined && object.signing_id !== null) {
      message.signingId = BigInt(object.signing_id);
    }
    if (object.attempt !== undefined && object.attempt !== null) {
      message.attempt = BigInt(object.attempt);
    }
    if (object.expired_height !== undefined && object.expired_height !== null) {
      message.expiredHeight = BigInt(object.expired_height);
    }
    message.assignedMembers = object.assigned_members?.map(e => AssignedMember.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SigningAttempt): SigningAttemptAmino {
    const obj: any = {};
    obj.signing_id = message.signingId !== BigInt(0) ? message.signingId?.toString() : undefined;
    obj.attempt = message.attempt !== BigInt(0) ? message.attempt?.toString() : undefined;
    obj.expired_height = message.expiredHeight !== BigInt(0) ? message.expiredHeight?.toString() : undefined;
    if (message.assignedMembers) {
      obj.assigned_members = message.assignedMembers.map(e => e ? AssignedMember.toAmino(e) : undefined);
    } else {
      obj.assigned_members = message.assignedMembers;
    }
    return obj;
  },
  fromAminoMsg(object: SigningAttemptAminoMsg): SigningAttempt {
    return SigningAttempt.fromAmino(object.value);
  },
  fromProtoMsg(message: SigningAttemptProtoMsg): SigningAttempt {
    return SigningAttempt.decode(message.value);
  },
  toProto(message: SigningAttempt): Uint8Array {
    return SigningAttempt.encode(message).finish();
  },
  toProtoMsg(message: SigningAttempt): SigningAttemptProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.SigningAttempt",
      value: SigningAttempt.encode(message).finish()
    };
  }
};
function createBaseAssignedMember(): AssignedMember {
  return {
    memberId: BigInt(0),
    address: "",
    pubKey: new Uint8Array(),
    pubD: new Uint8Array(),
    pubE: new Uint8Array(),
    bindingFactor: new Uint8Array(),
    pubNonce: new Uint8Array()
  };
}
export const AssignedMember = {
  typeUrl: "/band.tss.v1beta1.AssignedMember",
  encode(message: AssignedMember, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberId !== BigInt(0)) {
      writer.uint32(8).uint64(message.memberId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(26).bytes(message.pubKey);
    }
    if (message.pubD.length !== 0) {
      writer.uint32(34).bytes(message.pubD);
    }
    if (message.pubE.length !== 0) {
      writer.uint32(42).bytes(message.pubE);
    }
    if (message.bindingFactor.length !== 0) {
      writer.uint32(50).bytes(message.bindingFactor);
    }
    if (message.pubNonce.length !== 0) {
      writer.uint32(58).bytes(message.pubNonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AssignedMember {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssignedMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.pubKey = reader.bytes();
          break;
        case 4:
          message.pubD = reader.bytes();
          break;
        case 5:
          message.pubE = reader.bytes();
          break;
        case 6:
          message.bindingFactor = reader.bytes();
          break;
        case 7:
          message.pubNonce = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AssignedMember>): AssignedMember {
    const message = createBaseAssignedMember();
    message.memberId = object.memberId !== undefined && object.memberId !== null ? BigInt(object.memberId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.pubD = object.pubD ?? new Uint8Array();
    message.pubE = object.pubE ?? new Uint8Array();
    message.bindingFactor = object.bindingFactor ?? new Uint8Array();
    message.pubNonce = object.pubNonce ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AssignedMemberAmino): AssignedMember {
    const message = createBaseAssignedMember();
    if (object.member_id !== undefined && object.member_id !== null) {
      message.memberId = BigInt(object.member_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = bytesFromBase64(object.pub_key);
    }
    if (object.pub_d !== undefined && object.pub_d !== null) {
      message.pubD = bytesFromBase64(object.pub_d);
    }
    if (object.pub_e !== undefined && object.pub_e !== null) {
      message.pubE = bytesFromBase64(object.pub_e);
    }
    if (object.binding_factor !== undefined && object.binding_factor !== null) {
      message.bindingFactor = bytesFromBase64(object.binding_factor);
    }
    if (object.pub_nonce !== undefined && object.pub_nonce !== null) {
      message.pubNonce = bytesFromBase64(object.pub_nonce);
    }
    return message;
  },
  toAmino(message: AssignedMember): AssignedMemberAmino {
    const obj: any = {};
    obj.member_id = message.memberId !== BigInt(0) ? message.memberId?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
    obj.pub_d = message.pubD ? base64FromBytes(message.pubD) : undefined;
    obj.pub_e = message.pubE ? base64FromBytes(message.pubE) : undefined;
    obj.binding_factor = message.bindingFactor ? base64FromBytes(message.bindingFactor) : undefined;
    obj.pub_nonce = message.pubNonce ? base64FromBytes(message.pubNonce) : undefined;
    return obj;
  },
  fromAminoMsg(object: AssignedMemberAminoMsg): AssignedMember {
    return AssignedMember.fromAmino(object.value);
  },
  fromProtoMsg(message: AssignedMemberProtoMsg): AssignedMember {
    return AssignedMember.decode(message.value);
  },
  toProto(message: AssignedMember): Uint8Array {
    return AssignedMember.encode(message).finish();
  },
  toProtoMsg(message: AssignedMember): AssignedMemberProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.AssignedMember",
      value: AssignedMember.encode(message).finish()
    };
  }
};
function createBasePendingSignings(): PendingSignings {
  return {
    signingIds: []
  };
}
export const PendingSignings = {
  typeUrl: "/band.tss.v1beta1.PendingSignings",
  encode(message: PendingSignings, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.signingIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingSignings {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingSignings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.signingIds.push(reader.uint64());
            }
          } else {
            message.signingIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PendingSignings>): PendingSignings {
    const message = createBasePendingSignings();
    message.signingIds = object.signingIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: PendingSigningsAmino): PendingSignings {
    const message = createBasePendingSignings();
    message.signingIds = object.signing_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: PendingSignings): PendingSigningsAmino {
    const obj: any = {};
    if (message.signingIds) {
      obj.signing_ids = message.signingIds.map(e => e.toString());
    } else {
      obj.signing_ids = message.signingIds;
    }
    return obj;
  },
  fromAminoMsg(object: PendingSigningsAminoMsg): PendingSignings {
    return PendingSignings.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingSigningsProtoMsg): PendingSignings {
    return PendingSignings.decode(message.value);
  },
  toProto(message: PendingSignings): Uint8Array {
    return PendingSignings.encode(message).finish();
  },
  toProtoMsg(message: PendingSignings): PendingSigningsProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.PendingSignings",
      value: PendingSignings.encode(message).finish()
    };
  }
};
function createBaseMember(): Member {
  return {
    id: BigInt(0),
    groupId: BigInt(0),
    address: "",
    pubKey: new Uint8Array(),
    isMalicious: false,
    isActive: false
  };
}
export const Member = {
  typeUrl: "/band.tss.v1beta1.Member",
  encode(message: Member, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(34).bytes(message.pubKey);
    }
    if (message.isMalicious === true) {
      writer.uint32(40).bool(message.isMalicious);
    }
    if (message.isActive === true) {
      writer.uint32(48).bool(message.isActive);
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
          message.id = reader.uint64();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.pubKey = reader.bytes();
          break;
        case 5:
          message.isMalicious = reader.bool();
          break;
        case 6:
          message.isActive = reader.bool();
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
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.isMalicious = object.isMalicious ?? false;
    message.isActive = object.isActive ?? false;
    return message;
  },
  fromAmino(object: MemberAmino): Member {
    const message = createBaseMember();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = bytesFromBase64(object.pub_key);
    }
    if (object.is_malicious !== undefined && object.is_malicious !== null) {
      message.isMalicious = object.is_malicious;
    }
    if (object.is_active !== undefined && object.is_active !== null) {
      message.isActive = object.is_active;
    }
    return message;
  },
  toAmino(message: Member): MemberAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
    obj.is_malicious = message.isMalicious === false ? undefined : message.isMalicious;
    obj.is_active = message.isActive === false ? undefined : message.isActive;
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
      typeUrl: "/band.tss.v1beta1.Member",
      value: Member.encode(message).finish()
    };
  }
};
function createBaseConfirm(): Confirm {
  return {
    memberId: BigInt(0),
    ownPubKeySig: new Uint8Array()
  };
}
export const Confirm = {
  typeUrl: "/band.tss.v1beta1.Confirm",
  encode(message: Confirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberId !== BigInt(0)) {
      writer.uint32(8).uint64(message.memberId);
    }
    if (message.ownPubKeySig.length !== 0) {
      writer.uint32(18).bytes(message.ownPubKeySig);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Confirm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberId = reader.uint64();
          break;
        case 2:
          message.ownPubKeySig = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Confirm>): Confirm {
    const message = createBaseConfirm();
    message.memberId = object.memberId !== undefined && object.memberId !== null ? BigInt(object.memberId.toString()) : BigInt(0);
    message.ownPubKeySig = object.ownPubKeySig ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ConfirmAmino): Confirm {
    const message = createBaseConfirm();
    if (object.member_id !== undefined && object.member_id !== null) {
      message.memberId = BigInt(object.member_id);
    }
    if (object.own_pub_key_sig !== undefined && object.own_pub_key_sig !== null) {
      message.ownPubKeySig = bytesFromBase64(object.own_pub_key_sig);
    }
    return message;
  },
  toAmino(message: Confirm): ConfirmAmino {
    const obj: any = {};
    obj.member_id = message.memberId !== BigInt(0) ? message.memberId?.toString() : undefined;
    obj.own_pub_key_sig = message.ownPubKeySig ? base64FromBytes(message.ownPubKeySig) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConfirmAminoMsg): Confirm {
    return Confirm.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmProtoMsg): Confirm {
    return Confirm.decode(message.value);
  },
  toProto(message: Confirm): Uint8Array {
    return Confirm.encode(message).finish();
  },
  toProtoMsg(message: Confirm): ConfirmProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.Confirm",
      value: Confirm.encode(message).finish()
    };
  }
};
function createBaseComplaint(): Complaint {
  return {
    complainant: BigInt(0),
    respondent: BigInt(0),
    keySym: new Uint8Array(),
    signature: new Uint8Array()
  };
}
export const Complaint = {
  typeUrl: "/band.tss.v1beta1.Complaint",
  encode(message: Complaint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.complainant !== BigInt(0)) {
      writer.uint32(8).uint64(message.complainant);
    }
    if (message.respondent !== BigInt(0)) {
      writer.uint32(16).uint64(message.respondent);
    }
    if (message.keySym.length !== 0) {
      writer.uint32(26).bytes(message.keySym);
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Complaint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComplaint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.complainant = reader.uint64();
          break;
        case 2:
          message.respondent = reader.uint64();
          break;
        case 3:
          message.keySym = reader.bytes();
          break;
        case 4:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Complaint>): Complaint {
    const message = createBaseComplaint();
    message.complainant = object.complainant !== undefined && object.complainant !== null ? BigInt(object.complainant.toString()) : BigInt(0);
    message.respondent = object.respondent !== undefined && object.respondent !== null ? BigInt(object.respondent.toString()) : BigInt(0);
    message.keySym = object.keySym ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ComplaintAmino): Complaint {
    const message = createBaseComplaint();
    if (object.complainant !== undefined && object.complainant !== null) {
      message.complainant = BigInt(object.complainant);
    }
    if (object.respondent !== undefined && object.respondent !== null) {
      message.respondent = BigInt(object.respondent);
    }
    if (object.key_sym !== undefined && object.key_sym !== null) {
      message.keySym = bytesFromBase64(object.key_sym);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    return message;
  },
  toAmino(message: Complaint): ComplaintAmino {
    const obj: any = {};
    obj.complainant = message.complainant !== BigInt(0) ? message.complainant?.toString() : undefined;
    obj.respondent = message.respondent !== BigInt(0) ? message.respondent?.toString() : undefined;
    obj.key_sym = message.keySym ? base64FromBytes(message.keySym) : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    return obj;
  },
  fromAminoMsg(object: ComplaintAminoMsg): Complaint {
    return Complaint.fromAmino(object.value);
  },
  fromProtoMsg(message: ComplaintProtoMsg): Complaint {
    return Complaint.decode(message.value);
  },
  toProto(message: Complaint): Uint8Array {
    return Complaint.encode(message).finish();
  },
  toProtoMsg(message: Complaint): ComplaintProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.Complaint",
      value: Complaint.encode(message).finish()
    };
  }
};
function createBaseComplaintWithStatus(): ComplaintWithStatus {
  return {
    complaint: Complaint.fromPartial({}),
    complaintStatus: 0
  };
}
export const ComplaintWithStatus = {
  typeUrl: "/band.tss.v1beta1.ComplaintWithStatus",
  encode(message: ComplaintWithStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.complaint !== undefined) {
      Complaint.encode(message.complaint, writer.uint32(10).fork()).ldelim();
    }
    if (message.complaintStatus !== 0) {
      writer.uint32(16).int32(message.complaintStatus);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ComplaintWithStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComplaintWithStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.complaint = Complaint.decode(reader, reader.uint32());
          break;
        case 2:
          message.complaintStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ComplaintWithStatus>): ComplaintWithStatus {
    const message = createBaseComplaintWithStatus();
    message.complaint = object.complaint !== undefined && object.complaint !== null ? Complaint.fromPartial(object.complaint) : undefined;
    message.complaintStatus = object.complaintStatus ?? 0;
    return message;
  },
  fromAmino(object: ComplaintWithStatusAmino): ComplaintWithStatus {
    const message = createBaseComplaintWithStatus();
    if (object.complaint !== undefined && object.complaint !== null) {
      message.complaint = Complaint.fromAmino(object.complaint);
    }
    if (object.complaint_status !== undefined && object.complaint_status !== null) {
      message.complaintStatus = object.complaint_status;
    }
    return message;
  },
  toAmino(message: ComplaintWithStatus): ComplaintWithStatusAmino {
    const obj: any = {};
    obj.complaint = message.complaint ? Complaint.toAmino(message.complaint) : undefined;
    obj.complaint_status = message.complaintStatus === 0 ? undefined : message.complaintStatus;
    return obj;
  },
  fromAminoMsg(object: ComplaintWithStatusAminoMsg): ComplaintWithStatus {
    return ComplaintWithStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: ComplaintWithStatusProtoMsg): ComplaintWithStatus {
    return ComplaintWithStatus.decode(message.value);
  },
  toProto(message: ComplaintWithStatus): Uint8Array {
    return ComplaintWithStatus.encode(message).finish();
  },
  toProtoMsg(message: ComplaintWithStatus): ComplaintWithStatusProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.ComplaintWithStatus",
      value: ComplaintWithStatus.encode(message).finish()
    };
  }
};
function createBaseComplaintsWithStatus(): ComplaintsWithStatus {
  return {
    memberId: BigInt(0),
    complaintsWithStatus: []
  };
}
export const ComplaintsWithStatus = {
  typeUrl: "/band.tss.v1beta1.ComplaintsWithStatus",
  encode(message: ComplaintsWithStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberId !== BigInt(0)) {
      writer.uint32(8).uint64(message.memberId);
    }
    for (const v of message.complaintsWithStatus) {
      ComplaintWithStatus.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ComplaintsWithStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComplaintsWithStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberId = reader.uint64();
          break;
        case 2:
          message.complaintsWithStatus.push(ComplaintWithStatus.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ComplaintsWithStatus>): ComplaintsWithStatus {
    const message = createBaseComplaintsWithStatus();
    message.memberId = object.memberId !== undefined && object.memberId !== null ? BigInt(object.memberId.toString()) : BigInt(0);
    message.complaintsWithStatus = object.complaintsWithStatus?.map(e => ComplaintWithStatus.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ComplaintsWithStatusAmino): ComplaintsWithStatus {
    const message = createBaseComplaintsWithStatus();
    if (object.member_id !== undefined && object.member_id !== null) {
      message.memberId = BigInt(object.member_id);
    }
    message.complaintsWithStatus = object.complaints_with_status?.map(e => ComplaintWithStatus.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ComplaintsWithStatus): ComplaintsWithStatusAmino {
    const obj: any = {};
    obj.member_id = message.memberId !== BigInt(0) ? message.memberId?.toString() : undefined;
    if (message.complaintsWithStatus) {
      obj.complaints_with_status = message.complaintsWithStatus.map(e => e ? ComplaintWithStatus.toAmino(e) : undefined);
    } else {
      obj.complaints_with_status = message.complaintsWithStatus;
    }
    return obj;
  },
  fromAminoMsg(object: ComplaintsWithStatusAminoMsg): ComplaintsWithStatus {
    return ComplaintsWithStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: ComplaintsWithStatusProtoMsg): ComplaintsWithStatus {
    return ComplaintsWithStatus.decode(message.value);
  },
  toProto(message: ComplaintsWithStatus): Uint8Array {
    return ComplaintsWithStatus.encode(message).finish();
  },
  toProtoMsg(message: ComplaintsWithStatus): ComplaintsWithStatusProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.ComplaintsWithStatus",
      value: ComplaintsWithStatus.encode(message).finish()
    };
  }
};
function createBasePendingProcessGroups(): PendingProcessGroups {
  return {
    groupIds: []
  };
}
export const PendingProcessGroups = {
  typeUrl: "/band.tss.v1beta1.PendingProcessGroups",
  encode(message: PendingProcessGroups, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.groupIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingProcessGroups {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingProcessGroups();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.groupIds.push(reader.uint64());
            }
          } else {
            message.groupIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PendingProcessGroups>): PendingProcessGroups {
    const message = createBasePendingProcessGroups();
    message.groupIds = object.groupIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: PendingProcessGroupsAmino): PendingProcessGroups {
    const message = createBasePendingProcessGroups();
    message.groupIds = object.group_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: PendingProcessGroups): PendingProcessGroupsAmino {
    const obj: any = {};
    if (message.groupIds) {
      obj.group_ids = message.groupIds.map(e => e.toString());
    } else {
      obj.group_ids = message.groupIds;
    }
    return obj;
  },
  fromAminoMsg(object: PendingProcessGroupsAminoMsg): PendingProcessGroups {
    return PendingProcessGroups.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingProcessGroupsProtoMsg): PendingProcessGroups {
    return PendingProcessGroups.decode(message.value);
  },
  toProto(message: PendingProcessGroups): Uint8Array {
    return PendingProcessGroups.encode(message).finish();
  },
  toProtoMsg(message: PendingProcessGroups): PendingProcessGroupsProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.PendingProcessGroups",
      value: PendingProcessGroups.encode(message).finish()
    };
  }
};
function createBasePendingProcessSignings(): PendingProcessSignings {
  return {
    signingIds: []
  };
}
export const PendingProcessSignings = {
  typeUrl: "/band.tss.v1beta1.PendingProcessSignings",
  encode(message: PendingProcessSignings, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.signingIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingProcessSignings {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingProcessSignings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.signingIds.push(reader.uint64());
            }
          } else {
            message.signingIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PendingProcessSignings>): PendingProcessSignings {
    const message = createBasePendingProcessSignings();
    message.signingIds = object.signingIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: PendingProcessSigningsAmino): PendingProcessSignings {
    const message = createBasePendingProcessSignings();
    message.signingIds = object.signing_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: PendingProcessSignings): PendingProcessSigningsAmino {
    const obj: any = {};
    if (message.signingIds) {
      obj.signing_ids = message.signingIds.map(e => e.toString());
    } else {
      obj.signing_ids = message.signingIds;
    }
    return obj;
  },
  fromAminoMsg(object: PendingProcessSigningsAminoMsg): PendingProcessSignings {
    return PendingProcessSignings.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingProcessSigningsProtoMsg): PendingProcessSignings {
    return PendingProcessSignings.decode(message.value);
  },
  toProto(message: PendingProcessSignings): Uint8Array {
    return PendingProcessSignings.encode(message).finish();
  },
  toProtoMsg(message: PendingProcessSignings): PendingProcessSigningsProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.PendingProcessSignings",
      value: PendingProcessSignings.encode(message).finish()
    };
  }
};
function createBasePartialSignature(): PartialSignature {
  return {
    signingId: BigInt(0),
    signingAttempt: BigInt(0),
    memberId: BigInt(0),
    signature: new Uint8Array()
  };
}
export const PartialSignature = {
  typeUrl: "/band.tss.v1beta1.PartialSignature",
  encode(message: PartialSignature, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signingId !== BigInt(0)) {
      writer.uint32(8).uint64(message.signingId);
    }
    if (message.signingAttempt !== BigInt(0)) {
      writer.uint32(16).uint64(message.signingAttempt);
    }
    if (message.memberId !== BigInt(0)) {
      writer.uint32(24).uint64(message.memberId);
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PartialSignature {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartialSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signingId = reader.uint64();
          break;
        case 2:
          message.signingAttempt = reader.uint64();
          break;
        case 3:
          message.memberId = reader.uint64();
          break;
        case 4:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PartialSignature>): PartialSignature {
    const message = createBasePartialSignature();
    message.signingId = object.signingId !== undefined && object.signingId !== null ? BigInt(object.signingId.toString()) : BigInt(0);
    message.signingAttempt = object.signingAttempt !== undefined && object.signingAttempt !== null ? BigInt(object.signingAttempt.toString()) : BigInt(0);
    message.memberId = object.memberId !== undefined && object.memberId !== null ? BigInt(object.memberId.toString()) : BigInt(0);
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PartialSignatureAmino): PartialSignature {
    const message = createBasePartialSignature();
    if (object.signing_id !== undefined && object.signing_id !== null) {
      message.signingId = BigInt(object.signing_id);
    }
    if (object.signing_attempt !== undefined && object.signing_attempt !== null) {
      message.signingAttempt = BigInt(object.signing_attempt);
    }
    if (object.member_id !== undefined && object.member_id !== null) {
      message.memberId = BigInt(object.member_id);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    return message;
  },
  toAmino(message: PartialSignature): PartialSignatureAmino {
    const obj: any = {};
    obj.signing_id = message.signingId !== BigInt(0) ? message.signingId?.toString() : undefined;
    obj.signing_attempt = message.signingAttempt !== BigInt(0) ? message.signingAttempt?.toString() : undefined;
    obj.member_id = message.memberId !== BigInt(0) ? message.memberId?.toString() : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    return obj;
  },
  fromAminoMsg(object: PartialSignatureAminoMsg): PartialSignature {
    return PartialSignature.fromAmino(object.value);
  },
  fromProtoMsg(message: PartialSignatureProtoMsg): PartialSignature {
    return PartialSignature.decode(message.value);
  },
  toProto(message: PartialSignature): Uint8Array {
    return PartialSignature.encode(message).finish();
  },
  toProtoMsg(message: PartialSignature): PartialSignatureProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.PartialSignature",
      value: PartialSignature.encode(message).finish()
    };
  }
};
function createBaseTextSignatureOrder(): TextSignatureOrder {
  return {
    $typeUrl: "/band.tss.v1beta1.TextSignatureOrder",
    message: new Uint8Array()
  };
}
export const TextSignatureOrder = {
  typeUrl: "/band.tss.v1beta1.TextSignatureOrder",
  encode(message: TextSignatureOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message.length !== 0) {
      writer.uint32(10).bytes(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TextSignatureOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextSignatureOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TextSignatureOrder>): TextSignatureOrder {
    const message = createBaseTextSignatureOrder();
    message.message = object.message ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TextSignatureOrderAmino): TextSignatureOrder {
    const message = createBaseTextSignatureOrder();
    if (object.message !== undefined && object.message !== null) {
      message.message = bytesFromBase64(object.message);
    }
    return message;
  },
  toAmino(message: TextSignatureOrder): TextSignatureOrderAmino {
    const obj: any = {};
    obj.message = message.message ? base64FromBytes(message.message) : undefined;
    return obj;
  },
  fromAminoMsg(object: TextSignatureOrderAminoMsg): TextSignatureOrder {
    return TextSignatureOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: TextSignatureOrderProtoMsg): TextSignatureOrder {
    return TextSignatureOrder.decode(message.value);
  },
  toProto(message: TextSignatureOrder): Uint8Array {
    return TextSignatureOrder.encode(message).finish();
  },
  toProtoMsg(message: TextSignatureOrder): TextSignatureOrderProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.TextSignatureOrder",
      value: TextSignatureOrder.encode(message).finish()
    };
  }
};
function createBaseEVMSignature(): EVMSignature {
  return {
    rAddress: new Uint8Array(),
    signature: new Uint8Array()
  };
}
export const EVMSignature = {
  typeUrl: "/band.tss.v1beta1.EVMSignature",
  encode(message: EVMSignature, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rAddress.length !== 0) {
      writer.uint32(10).bytes(message.rAddress);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EVMSignature {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEVMSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rAddress = reader.bytes();
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EVMSignature>): EVMSignature {
    const message = createBaseEVMSignature();
    message.rAddress = object.rAddress ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EVMSignatureAmino): EVMSignature {
    const message = createBaseEVMSignature();
    if (object.r_address !== undefined && object.r_address !== null) {
      message.rAddress = bytesFromBase64(object.r_address);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    return message;
  },
  toAmino(message: EVMSignature): EVMSignatureAmino {
    const obj: any = {};
    obj.r_address = message.rAddress ? base64FromBytes(message.rAddress) : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    return obj;
  },
  fromAminoMsg(object: EVMSignatureAminoMsg): EVMSignature {
    return EVMSignature.fromAmino(object.value);
  },
  fromProtoMsg(message: EVMSignatureProtoMsg): EVMSignature {
    return EVMSignature.decode(message.value);
  },
  toProto(message: EVMSignature): Uint8Array {
    return EVMSignature.encode(message).finish();
  },
  toProtoMsg(message: EVMSignature): EVMSignatureProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.EVMSignature",
      value: EVMSignature.encode(message).finish()
    };
  }
};
function createBaseSigningResult(): SigningResult {
  return {
    signing: Signing.fromPartial({}),
    currentSigningAttempt: undefined,
    evmSignature: undefined,
    receivedPartialSignatures: []
  };
}
export const SigningResult = {
  typeUrl: "/band.tss.v1beta1.SigningResult",
  encode(message: SigningResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signing !== undefined) {
      Signing.encode(message.signing, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentSigningAttempt !== undefined) {
      SigningAttempt.encode(message.currentSigningAttempt, writer.uint32(18).fork()).ldelim();
    }
    if (message.evmSignature !== undefined) {
      EVMSignature.encode(message.evmSignature, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.receivedPartialSignatures) {
      PartialSignature.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SigningResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signing = Signing.decode(reader, reader.uint32());
          break;
        case 2:
          message.currentSigningAttempt = SigningAttempt.decode(reader, reader.uint32());
          break;
        case 3:
          message.evmSignature = EVMSignature.decode(reader, reader.uint32());
          break;
        case 4:
          message.receivedPartialSignatures.push(PartialSignature.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SigningResult>): SigningResult {
    const message = createBaseSigningResult();
    message.signing = object.signing !== undefined && object.signing !== null ? Signing.fromPartial(object.signing) : undefined;
    message.currentSigningAttempt = object.currentSigningAttempt !== undefined && object.currentSigningAttempt !== null ? SigningAttempt.fromPartial(object.currentSigningAttempt) : undefined;
    message.evmSignature = object.evmSignature !== undefined && object.evmSignature !== null ? EVMSignature.fromPartial(object.evmSignature) : undefined;
    message.receivedPartialSignatures = object.receivedPartialSignatures?.map(e => PartialSignature.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SigningResultAmino): SigningResult {
    const message = createBaseSigningResult();
    if (object.signing !== undefined && object.signing !== null) {
      message.signing = Signing.fromAmino(object.signing);
    }
    if (object.current_signing_attempt !== undefined && object.current_signing_attempt !== null) {
      message.currentSigningAttempt = SigningAttempt.fromAmino(object.current_signing_attempt);
    }
    if (object.evm_signature !== undefined && object.evm_signature !== null) {
      message.evmSignature = EVMSignature.fromAmino(object.evm_signature);
    }
    message.receivedPartialSignatures = object.received_partial_signatures?.map(e => PartialSignature.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SigningResult): SigningResultAmino {
    const obj: any = {};
    obj.signing = message.signing ? Signing.toAmino(message.signing) : undefined;
    obj.current_signing_attempt = message.currentSigningAttempt ? SigningAttempt.toAmino(message.currentSigningAttempt) : undefined;
    obj.evm_signature = message.evmSignature ? EVMSignature.toAmino(message.evmSignature) : undefined;
    if (message.receivedPartialSignatures) {
      obj.received_partial_signatures = message.receivedPartialSignatures.map(e => e ? PartialSignature.toAmino(e) : undefined);
    } else {
      obj.received_partial_signatures = message.receivedPartialSignatures;
    }
    return obj;
  },
  fromAminoMsg(object: SigningResultAminoMsg): SigningResult {
    return SigningResult.fromAmino(object.value);
  },
  fromProtoMsg(message: SigningResultProtoMsg): SigningResult {
    return SigningResult.decode(message.value);
  },
  toProto(message: SigningResult): Uint8Array {
    return SigningResult.encode(message).finish();
  },
  toProtoMsg(message: SigningResult): SigningResultProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.SigningResult",
      value: SigningResult.encode(message).finish()
    };
  }
};
function createBaseSigningExpiration(): SigningExpiration {
  return {
    signingId: BigInt(0),
    signingAttempt: BigInt(0)
  };
}
export const SigningExpiration = {
  typeUrl: "/band.tss.v1beta1.SigningExpiration",
  encode(message: SigningExpiration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signingId !== BigInt(0)) {
      writer.uint32(8).uint64(message.signingId);
    }
    if (message.signingAttempt !== BigInt(0)) {
      writer.uint32(16).uint64(message.signingAttempt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SigningExpiration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningExpiration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signingId = reader.uint64();
          break;
        case 2:
          message.signingAttempt = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SigningExpiration>): SigningExpiration {
    const message = createBaseSigningExpiration();
    message.signingId = object.signingId !== undefined && object.signingId !== null ? BigInt(object.signingId.toString()) : BigInt(0);
    message.signingAttempt = object.signingAttempt !== undefined && object.signingAttempt !== null ? BigInt(object.signingAttempt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SigningExpirationAmino): SigningExpiration {
    const message = createBaseSigningExpiration();
    if (object.signing_id !== undefined && object.signing_id !== null) {
      message.signingId = BigInt(object.signing_id);
    }
    if (object.signing_attempt !== undefined && object.signing_attempt !== null) {
      message.signingAttempt = BigInt(object.signing_attempt);
    }
    return message;
  },
  toAmino(message: SigningExpiration): SigningExpirationAmino {
    const obj: any = {};
    obj.signing_id = message.signingId !== BigInt(0) ? message.signingId?.toString() : undefined;
    obj.signing_attempt = message.signingAttempt !== BigInt(0) ? message.signingAttempt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SigningExpirationAminoMsg): SigningExpiration {
    return SigningExpiration.fromAmino(object.value);
  },
  fromProtoMsg(message: SigningExpirationProtoMsg): SigningExpiration {
    return SigningExpiration.decode(message.value);
  },
  toProto(message: SigningExpiration): Uint8Array {
    return SigningExpiration.encode(message).finish();
  },
  toProtoMsg(message: SigningExpiration): SigningExpirationProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.SigningExpiration",
      value: SigningExpiration.encode(message).finish()
    };
  }
};
function createBaseSigningExpirations(): SigningExpirations {
  return {
    signingExpirations: []
  };
}
export const SigningExpirations = {
  typeUrl: "/band.tss.v1beta1.SigningExpirations",
  encode(message: SigningExpirations, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.signingExpirations) {
      SigningExpiration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SigningExpirations {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningExpirations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signingExpirations.push(SigningExpiration.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SigningExpirations>): SigningExpirations {
    const message = createBaseSigningExpirations();
    message.signingExpirations = object.signingExpirations?.map(e => SigningExpiration.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SigningExpirationsAmino): SigningExpirations {
    const message = createBaseSigningExpirations();
    message.signingExpirations = object.signing_expirations?.map(e => SigningExpiration.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SigningExpirations): SigningExpirationsAmino {
    const obj: any = {};
    if (message.signingExpirations) {
      obj.signing_expirations = message.signingExpirations.map(e => e ? SigningExpiration.toAmino(e) : undefined);
    } else {
      obj.signing_expirations = message.signingExpirations;
    }
    return obj;
  },
  fromAminoMsg(object: SigningExpirationsAminoMsg): SigningExpirations {
    return SigningExpirations.fromAmino(object.value);
  },
  fromProtoMsg(message: SigningExpirationsProtoMsg): SigningExpirations {
    return SigningExpirations.decode(message.value);
  },
  toProto(message: SigningExpirations): Uint8Array {
    return SigningExpirations.encode(message).finish();
  },
  toProtoMsg(message: SigningExpirations): SigningExpirationsProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.SigningExpirations",
      value: SigningExpirations.encode(message).finish()
    };
  }
};