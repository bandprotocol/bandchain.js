// package: cosmos.group.v1
// file: cosmos/group/v1/tx.proto

import * as cosmos_group_v1_tx_pb from "../../../cosmos/group/v1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgCreateGroup = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_tx_pb.MsgCreateGroup;
  readonly responseType: typeof cosmos_group_v1_tx_pb.MsgCreateGroupResponse;
};

type MsgUpdateGroupMembers = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_tx_pb.MsgUpdateGroupMembers;
  readonly responseType: typeof cosmos_group_v1_tx_pb.MsgUpdateGroupMembersResponse;
};

type MsgUpdateGroupAdmin = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_tx_pb.MsgUpdateGroupAdmin;
  readonly responseType: typeof cosmos_group_v1_tx_pb.MsgUpdateGroupAdminResponse;
};

type MsgUpdateGroupMetadata = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_tx_pb.MsgUpdateGroupMetadata;
  readonly responseType: typeof cosmos_group_v1_tx_pb.MsgUpdateGroupMetadataResponse;
};

type MsgCreateGroupPolicy = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_tx_pb.MsgCreateGroupPolicy;
  readonly responseType: typeof cosmos_group_v1_tx_pb.MsgCreateGroupPolicyResponse;
};

type MsgCreateGroupWithPolicy = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicy;
  readonly responseType: typeof cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicyResponse;
};

type MsgUpdateGroupPolicyAdmin = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdmin;
  readonly responseType: typeof cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdminResponse;
};

type MsgUpdateGroupPolicyDecisionPolicy = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicy;
  readonly responseType: typeof cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicyResponse;
};

type MsgUpdateGroupPolicyMetadata = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadata;
  readonly responseType: typeof cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadataResponse;
};

type MsgSubmitProposal = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_tx_pb.MsgSubmitProposal;
  readonly responseType: typeof cosmos_group_v1_tx_pb.MsgSubmitProposalResponse;
};

type MsgWithdrawProposal = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_tx_pb.MsgWithdrawProposal;
  readonly responseType: typeof cosmos_group_v1_tx_pb.MsgWithdrawProposalResponse;
};

type MsgVote = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_tx_pb.MsgVote;
  readonly responseType: typeof cosmos_group_v1_tx_pb.MsgVoteResponse;
};

type MsgExec = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_tx_pb.MsgExec;
  readonly responseType: typeof cosmos_group_v1_tx_pb.MsgExecResponse;
};

type MsgLeaveGroup = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_tx_pb.MsgLeaveGroup;
  readonly responseType: typeof cosmos_group_v1_tx_pb.MsgLeaveGroupResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly CreateGroup: MsgCreateGroup;
  static readonly UpdateGroupMembers: MsgUpdateGroupMembers;
  static readonly UpdateGroupAdmin: MsgUpdateGroupAdmin;
  static readonly UpdateGroupMetadata: MsgUpdateGroupMetadata;
  static readonly CreateGroupPolicy: MsgCreateGroupPolicy;
  static readonly CreateGroupWithPolicy: MsgCreateGroupWithPolicy;
  static readonly UpdateGroupPolicyAdmin: MsgUpdateGroupPolicyAdmin;
  static readonly UpdateGroupPolicyDecisionPolicy: MsgUpdateGroupPolicyDecisionPolicy;
  static readonly UpdateGroupPolicyMetadata: MsgUpdateGroupPolicyMetadata;
  static readonly SubmitProposal: MsgSubmitProposal;
  static readonly WithdrawProposal: MsgWithdrawProposal;
  static readonly Vote: MsgVote;
  static readonly Exec: MsgExec;
  static readonly LeaveGroup: MsgLeaveGroup;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class MsgClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createGroup(
    requestMessage: cosmos_group_v1_tx_pb.MsgCreateGroup,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgCreateGroupResponse|null) => void
  ): UnaryResponse;
  createGroup(
    requestMessage: cosmos_group_v1_tx_pb.MsgCreateGroup,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgCreateGroupResponse|null) => void
  ): UnaryResponse;
  updateGroupMembers(
    requestMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupMembers,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupMembersResponse|null) => void
  ): UnaryResponse;
  updateGroupMembers(
    requestMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupMembers,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupMembersResponse|null) => void
  ): UnaryResponse;
  updateGroupAdmin(
    requestMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupAdmin,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupAdminResponse|null) => void
  ): UnaryResponse;
  updateGroupAdmin(
    requestMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupAdmin,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupAdminResponse|null) => void
  ): UnaryResponse;
  updateGroupMetadata(
    requestMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupMetadata,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupMetadataResponse|null) => void
  ): UnaryResponse;
  updateGroupMetadata(
    requestMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupMetadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupMetadataResponse|null) => void
  ): UnaryResponse;
  createGroupPolicy(
    requestMessage: cosmos_group_v1_tx_pb.MsgCreateGroupPolicy,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgCreateGroupPolicyResponse|null) => void
  ): UnaryResponse;
  createGroupPolicy(
    requestMessage: cosmos_group_v1_tx_pb.MsgCreateGroupPolicy,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgCreateGroupPolicyResponse|null) => void
  ): UnaryResponse;
  createGroupWithPolicy(
    requestMessage: cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicy,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicyResponse|null) => void
  ): UnaryResponse;
  createGroupWithPolicy(
    requestMessage: cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicy,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicyResponse|null) => void
  ): UnaryResponse;
  updateGroupPolicyAdmin(
    requestMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdmin,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdminResponse|null) => void
  ): UnaryResponse;
  updateGroupPolicyAdmin(
    requestMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdmin,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdminResponse|null) => void
  ): UnaryResponse;
  updateGroupPolicyDecisionPolicy(
    requestMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicy,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicyResponse|null) => void
  ): UnaryResponse;
  updateGroupPolicyDecisionPolicy(
    requestMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicy,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicyResponse|null) => void
  ): UnaryResponse;
  updateGroupPolicyMetadata(
    requestMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadata,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadataResponse|null) => void
  ): UnaryResponse;
  updateGroupPolicyMetadata(
    requestMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadataResponse|null) => void
  ): UnaryResponse;
  submitProposal(
    requestMessage: cosmos_group_v1_tx_pb.MsgSubmitProposal,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgSubmitProposalResponse|null) => void
  ): UnaryResponse;
  submitProposal(
    requestMessage: cosmos_group_v1_tx_pb.MsgSubmitProposal,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgSubmitProposalResponse|null) => void
  ): UnaryResponse;
  withdrawProposal(
    requestMessage: cosmos_group_v1_tx_pb.MsgWithdrawProposal,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgWithdrawProposalResponse|null) => void
  ): UnaryResponse;
  withdrawProposal(
    requestMessage: cosmos_group_v1_tx_pb.MsgWithdrawProposal,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgWithdrawProposalResponse|null) => void
  ): UnaryResponse;
  vote(
    requestMessage: cosmos_group_v1_tx_pb.MsgVote,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgVoteResponse|null) => void
  ): UnaryResponse;
  vote(
    requestMessage: cosmos_group_v1_tx_pb.MsgVote,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgVoteResponse|null) => void
  ): UnaryResponse;
  exec(
    requestMessage: cosmos_group_v1_tx_pb.MsgExec,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgExecResponse|null) => void
  ): UnaryResponse;
  exec(
    requestMessage: cosmos_group_v1_tx_pb.MsgExec,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgExecResponse|null) => void
  ): UnaryResponse;
  leaveGroup(
    requestMessage: cosmos_group_v1_tx_pb.MsgLeaveGroup,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgLeaveGroupResponse|null) => void
  ): UnaryResponse;
  leaveGroup(
    requestMessage: cosmos_group_v1_tx_pb.MsgLeaveGroup,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_tx_pb.MsgLeaveGroupResponse|null) => void
  ): UnaryResponse;
}

