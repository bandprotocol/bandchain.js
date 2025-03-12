// package: cosmos.group.v1
// file: cosmos/group/v1/query.proto

import * as cosmos_group_v1_query_pb from "../../../cosmos/group/v1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryGroupInfo = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_query_pb.QueryGroupInfoRequest;
  readonly responseType: typeof cosmos_group_v1_query_pb.QueryGroupInfoResponse;
};

type QueryGroupPolicyInfo = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_query_pb.QueryGroupPolicyInfoRequest;
  readonly responseType: typeof cosmos_group_v1_query_pb.QueryGroupPolicyInfoResponse;
};

type QueryGroupMembers = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_query_pb.QueryGroupMembersRequest;
  readonly responseType: typeof cosmos_group_v1_query_pb.QueryGroupMembersResponse;
};

type QueryGroupsByAdmin = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_query_pb.QueryGroupsByAdminRequest;
  readonly responseType: typeof cosmos_group_v1_query_pb.QueryGroupsByAdminResponse;
};

type QueryGroupPoliciesByGroup = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupRequest;
  readonly responseType: typeof cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupResponse;
};

type QueryGroupPoliciesByAdmin = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminRequest;
  readonly responseType: typeof cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminResponse;
};

type QueryProposal = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_query_pb.QueryProposalRequest;
  readonly responseType: typeof cosmos_group_v1_query_pb.QueryProposalResponse;
};

type QueryProposalsByGroupPolicy = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyRequest;
  readonly responseType: typeof cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyResponse;
};

type QueryVoteByProposalVoter = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_query_pb.QueryVoteByProposalVoterRequest;
  readonly responseType: typeof cosmos_group_v1_query_pb.QueryVoteByProposalVoterResponse;
};

type QueryVotesByProposal = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_query_pb.QueryVotesByProposalRequest;
  readonly responseType: typeof cosmos_group_v1_query_pb.QueryVotesByProposalResponse;
};

type QueryVotesByVoter = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_query_pb.QueryVotesByVoterRequest;
  readonly responseType: typeof cosmos_group_v1_query_pb.QueryVotesByVoterResponse;
};

type QueryGroupsByMember = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_query_pb.QueryGroupsByMemberRequest;
  readonly responseType: typeof cosmos_group_v1_query_pb.QueryGroupsByMemberResponse;
};

type QueryTallyResult = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_group_v1_query_pb.QueryTallyResultRequest;
  readonly responseType: typeof cosmos_group_v1_query_pb.QueryTallyResultResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly GroupInfo: QueryGroupInfo;
  static readonly GroupPolicyInfo: QueryGroupPolicyInfo;
  static readonly GroupMembers: QueryGroupMembers;
  static readonly GroupsByAdmin: QueryGroupsByAdmin;
  static readonly GroupPoliciesByGroup: QueryGroupPoliciesByGroup;
  static readonly GroupPoliciesByAdmin: QueryGroupPoliciesByAdmin;
  static readonly Proposal: QueryProposal;
  static readonly ProposalsByGroupPolicy: QueryProposalsByGroupPolicy;
  static readonly VoteByProposalVoter: QueryVoteByProposalVoter;
  static readonly VotesByProposal: QueryVotesByProposal;
  static readonly VotesByVoter: QueryVotesByVoter;
  static readonly GroupsByMember: QueryGroupsByMember;
  static readonly TallyResult: QueryTallyResult;
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

export class QueryClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  groupInfo(
    requestMessage: cosmos_group_v1_query_pb.QueryGroupInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryGroupInfoResponse|null) => void
  ): UnaryResponse;
  groupInfo(
    requestMessage: cosmos_group_v1_query_pb.QueryGroupInfoRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryGroupInfoResponse|null) => void
  ): UnaryResponse;
  groupPolicyInfo(
    requestMessage: cosmos_group_v1_query_pb.QueryGroupPolicyInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryGroupPolicyInfoResponse|null) => void
  ): UnaryResponse;
  groupPolicyInfo(
    requestMessage: cosmos_group_v1_query_pb.QueryGroupPolicyInfoRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryGroupPolicyInfoResponse|null) => void
  ): UnaryResponse;
  groupMembers(
    requestMessage: cosmos_group_v1_query_pb.QueryGroupMembersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryGroupMembersResponse|null) => void
  ): UnaryResponse;
  groupMembers(
    requestMessage: cosmos_group_v1_query_pb.QueryGroupMembersRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryGroupMembersResponse|null) => void
  ): UnaryResponse;
  groupsByAdmin(
    requestMessage: cosmos_group_v1_query_pb.QueryGroupsByAdminRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryGroupsByAdminResponse|null) => void
  ): UnaryResponse;
  groupsByAdmin(
    requestMessage: cosmos_group_v1_query_pb.QueryGroupsByAdminRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryGroupsByAdminResponse|null) => void
  ): UnaryResponse;
  groupPoliciesByGroup(
    requestMessage: cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupResponse|null) => void
  ): UnaryResponse;
  groupPoliciesByGroup(
    requestMessage: cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupResponse|null) => void
  ): UnaryResponse;
  groupPoliciesByAdmin(
    requestMessage: cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminResponse|null) => void
  ): UnaryResponse;
  groupPoliciesByAdmin(
    requestMessage: cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminResponse|null) => void
  ): UnaryResponse;
  proposal(
    requestMessage: cosmos_group_v1_query_pb.QueryProposalRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryProposalResponse|null) => void
  ): UnaryResponse;
  proposal(
    requestMessage: cosmos_group_v1_query_pb.QueryProposalRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryProposalResponse|null) => void
  ): UnaryResponse;
  proposalsByGroupPolicy(
    requestMessage: cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyResponse|null) => void
  ): UnaryResponse;
  proposalsByGroupPolicy(
    requestMessage: cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyResponse|null) => void
  ): UnaryResponse;
  voteByProposalVoter(
    requestMessage: cosmos_group_v1_query_pb.QueryVoteByProposalVoterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryVoteByProposalVoterResponse|null) => void
  ): UnaryResponse;
  voteByProposalVoter(
    requestMessage: cosmos_group_v1_query_pb.QueryVoteByProposalVoterRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryVoteByProposalVoterResponse|null) => void
  ): UnaryResponse;
  votesByProposal(
    requestMessage: cosmos_group_v1_query_pb.QueryVotesByProposalRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryVotesByProposalResponse|null) => void
  ): UnaryResponse;
  votesByProposal(
    requestMessage: cosmos_group_v1_query_pb.QueryVotesByProposalRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryVotesByProposalResponse|null) => void
  ): UnaryResponse;
  votesByVoter(
    requestMessage: cosmos_group_v1_query_pb.QueryVotesByVoterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryVotesByVoterResponse|null) => void
  ): UnaryResponse;
  votesByVoter(
    requestMessage: cosmos_group_v1_query_pb.QueryVotesByVoterRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryVotesByVoterResponse|null) => void
  ): UnaryResponse;
  groupsByMember(
    requestMessage: cosmos_group_v1_query_pb.QueryGroupsByMemberRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryGroupsByMemberResponse|null) => void
  ): UnaryResponse;
  groupsByMember(
    requestMessage: cosmos_group_v1_query_pb.QueryGroupsByMemberRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryGroupsByMemberResponse|null) => void
  ): UnaryResponse;
  tallyResult(
    requestMessage: cosmos_group_v1_query_pb.QueryTallyResultRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryTallyResultResponse|null) => void
  ): UnaryResponse;
  tallyResult(
    requestMessage: cosmos_group_v1_query_pb.QueryTallyResultRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_group_v1_query_pb.QueryTallyResultResponse|null) => void
  ): UnaryResponse;
}

