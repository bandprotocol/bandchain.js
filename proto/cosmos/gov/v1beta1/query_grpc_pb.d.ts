// package: cosmos.gov.v1beta1
// file: cosmos/gov/v1beta1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cosmos_gov_v1beta1_query_pb from "../../../cosmos/gov/v1beta1/query_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_gov_v1beta1_gov_pb from "../../../cosmos/gov/v1beta1/gov_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    proposal: IQueryService_IProposal;
    proposals: IQueryService_IProposals;
    vote: IQueryService_IVote;
    votes: IQueryService_IVotes;
    params: IQueryService_IParams;
    deposit: IQueryService_IDeposit;
    deposits: IQueryService_IDeposits;
    tallyResult: IQueryService_ITallyResult;
}

interface IQueryService_IProposal extends grpc.MethodDefinition<cosmos_gov_v1beta1_query_pb.QueryProposalRequest, cosmos_gov_v1beta1_query_pb.QueryProposalResponse> {
    path: "/cosmos.gov.v1beta1.Query/Proposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_gov_v1beta1_query_pb.QueryProposalRequest>;
    requestDeserialize: grpc.deserialize<cosmos_gov_v1beta1_query_pb.QueryProposalRequest>;
    responseSerialize: grpc.serialize<cosmos_gov_v1beta1_query_pb.QueryProposalResponse>;
    responseDeserialize: grpc.deserialize<cosmos_gov_v1beta1_query_pb.QueryProposalResponse>;
}
interface IQueryService_IProposals extends grpc.MethodDefinition<cosmos_gov_v1beta1_query_pb.QueryProposalsRequest, cosmos_gov_v1beta1_query_pb.QueryProposalsResponse> {
    path: "/cosmos.gov.v1beta1.Query/Proposals";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_gov_v1beta1_query_pb.QueryProposalsRequest>;
    requestDeserialize: grpc.deserialize<cosmos_gov_v1beta1_query_pb.QueryProposalsRequest>;
    responseSerialize: grpc.serialize<cosmos_gov_v1beta1_query_pb.QueryProposalsResponse>;
    responseDeserialize: grpc.deserialize<cosmos_gov_v1beta1_query_pb.QueryProposalsResponse>;
}
interface IQueryService_IVote extends grpc.MethodDefinition<cosmos_gov_v1beta1_query_pb.QueryVoteRequest, cosmos_gov_v1beta1_query_pb.QueryVoteResponse> {
    path: "/cosmos.gov.v1beta1.Query/Vote";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_gov_v1beta1_query_pb.QueryVoteRequest>;
    requestDeserialize: grpc.deserialize<cosmos_gov_v1beta1_query_pb.QueryVoteRequest>;
    responseSerialize: grpc.serialize<cosmos_gov_v1beta1_query_pb.QueryVoteResponse>;
    responseDeserialize: grpc.deserialize<cosmos_gov_v1beta1_query_pb.QueryVoteResponse>;
}
interface IQueryService_IVotes extends grpc.MethodDefinition<cosmos_gov_v1beta1_query_pb.QueryVotesRequest, cosmos_gov_v1beta1_query_pb.QueryVotesResponse> {
    path: "/cosmos.gov.v1beta1.Query/Votes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_gov_v1beta1_query_pb.QueryVotesRequest>;
    requestDeserialize: grpc.deserialize<cosmos_gov_v1beta1_query_pb.QueryVotesRequest>;
    responseSerialize: grpc.serialize<cosmos_gov_v1beta1_query_pb.QueryVotesResponse>;
    responseDeserialize: grpc.deserialize<cosmos_gov_v1beta1_query_pb.QueryVotesResponse>;
}
interface IQueryService_IParams extends grpc.MethodDefinition<cosmos_gov_v1beta1_query_pb.QueryParamsRequest, cosmos_gov_v1beta1_query_pb.QueryParamsResponse> {
    path: "/cosmos.gov.v1beta1.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_gov_v1beta1_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<cosmos_gov_v1beta1_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<cosmos_gov_v1beta1_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<cosmos_gov_v1beta1_query_pb.QueryParamsResponse>;
}
interface IQueryService_IDeposit extends grpc.MethodDefinition<cosmos_gov_v1beta1_query_pb.QueryDepositRequest, cosmos_gov_v1beta1_query_pb.QueryDepositResponse> {
    path: "/cosmos.gov.v1beta1.Query/Deposit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_gov_v1beta1_query_pb.QueryDepositRequest>;
    requestDeserialize: grpc.deserialize<cosmos_gov_v1beta1_query_pb.QueryDepositRequest>;
    responseSerialize: grpc.serialize<cosmos_gov_v1beta1_query_pb.QueryDepositResponse>;
    responseDeserialize: grpc.deserialize<cosmos_gov_v1beta1_query_pb.QueryDepositResponse>;
}
interface IQueryService_IDeposits extends grpc.MethodDefinition<cosmos_gov_v1beta1_query_pb.QueryDepositsRequest, cosmos_gov_v1beta1_query_pb.QueryDepositsResponse> {
    path: "/cosmos.gov.v1beta1.Query/Deposits";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_gov_v1beta1_query_pb.QueryDepositsRequest>;
    requestDeserialize: grpc.deserialize<cosmos_gov_v1beta1_query_pb.QueryDepositsRequest>;
    responseSerialize: grpc.serialize<cosmos_gov_v1beta1_query_pb.QueryDepositsResponse>;
    responseDeserialize: grpc.deserialize<cosmos_gov_v1beta1_query_pb.QueryDepositsResponse>;
}
interface IQueryService_ITallyResult extends grpc.MethodDefinition<cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest, cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse> {
    path: "/cosmos.gov.v1beta1.Query/TallyResult";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest>;
    requestDeserialize: grpc.deserialize<cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest>;
    responseSerialize: grpc.serialize<cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse>;
    responseDeserialize: grpc.deserialize<cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    proposal: grpc.handleUnaryCall<cosmos_gov_v1beta1_query_pb.QueryProposalRequest, cosmos_gov_v1beta1_query_pb.QueryProposalResponse>;
    proposals: grpc.handleUnaryCall<cosmos_gov_v1beta1_query_pb.QueryProposalsRequest, cosmos_gov_v1beta1_query_pb.QueryProposalsResponse>;
    vote: grpc.handleUnaryCall<cosmos_gov_v1beta1_query_pb.QueryVoteRequest, cosmos_gov_v1beta1_query_pb.QueryVoteResponse>;
    votes: grpc.handleUnaryCall<cosmos_gov_v1beta1_query_pb.QueryVotesRequest, cosmos_gov_v1beta1_query_pb.QueryVotesResponse>;
    params: grpc.handleUnaryCall<cosmos_gov_v1beta1_query_pb.QueryParamsRequest, cosmos_gov_v1beta1_query_pb.QueryParamsResponse>;
    deposit: grpc.handleUnaryCall<cosmos_gov_v1beta1_query_pb.QueryDepositRequest, cosmos_gov_v1beta1_query_pb.QueryDepositResponse>;
    deposits: grpc.handleUnaryCall<cosmos_gov_v1beta1_query_pb.QueryDepositsRequest, cosmos_gov_v1beta1_query_pb.QueryDepositsResponse>;
    tallyResult: grpc.handleUnaryCall<cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest, cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse>;
}

export interface IQueryClient {
    proposal(request: cosmos_gov_v1beta1_query_pb.QueryProposalRequest, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryProposalResponse) => void): grpc.ClientUnaryCall;
    proposal(request: cosmos_gov_v1beta1_query_pb.QueryProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryProposalResponse) => void): grpc.ClientUnaryCall;
    proposal(request: cosmos_gov_v1beta1_query_pb.QueryProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryProposalResponse) => void): grpc.ClientUnaryCall;
    proposals(request: cosmos_gov_v1beta1_query_pb.QueryProposalsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryProposalsResponse) => void): grpc.ClientUnaryCall;
    proposals(request: cosmos_gov_v1beta1_query_pb.QueryProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryProposalsResponse) => void): grpc.ClientUnaryCall;
    proposals(request: cosmos_gov_v1beta1_query_pb.QueryProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryProposalsResponse) => void): grpc.ClientUnaryCall;
    vote(request: cosmos_gov_v1beta1_query_pb.QueryVoteRequest, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryVoteResponse) => void): grpc.ClientUnaryCall;
    vote(request: cosmos_gov_v1beta1_query_pb.QueryVoteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryVoteResponse) => void): grpc.ClientUnaryCall;
    vote(request: cosmos_gov_v1beta1_query_pb.QueryVoteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryVoteResponse) => void): grpc.ClientUnaryCall;
    votes(request: cosmos_gov_v1beta1_query_pb.QueryVotesRequest, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryVotesResponse) => void): grpc.ClientUnaryCall;
    votes(request: cosmos_gov_v1beta1_query_pb.QueryVotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryVotesResponse) => void): grpc.ClientUnaryCall;
    votes(request: cosmos_gov_v1beta1_query_pb.QueryVotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryVotesResponse) => void): grpc.ClientUnaryCall;
    params(request: cosmos_gov_v1beta1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: cosmos_gov_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: cosmos_gov_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    deposit(request: cosmos_gov_v1beta1_query_pb.QueryDepositRequest, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryDepositResponse) => void): grpc.ClientUnaryCall;
    deposit(request: cosmos_gov_v1beta1_query_pb.QueryDepositRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryDepositResponse) => void): grpc.ClientUnaryCall;
    deposit(request: cosmos_gov_v1beta1_query_pb.QueryDepositRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryDepositResponse) => void): grpc.ClientUnaryCall;
    deposits(request: cosmos_gov_v1beta1_query_pb.QueryDepositsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryDepositsResponse) => void): grpc.ClientUnaryCall;
    deposits(request: cosmos_gov_v1beta1_query_pb.QueryDepositsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryDepositsResponse) => void): grpc.ClientUnaryCall;
    deposits(request: cosmos_gov_v1beta1_query_pb.QueryDepositsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryDepositsResponse) => void): grpc.ClientUnaryCall;
    tallyResult(request: cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse) => void): grpc.ClientUnaryCall;
    tallyResult(request: cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse) => void): grpc.ClientUnaryCall;
    tallyResult(request: cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public proposal(request: cosmos_gov_v1beta1_query_pb.QueryProposalRequest, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryProposalResponse) => void): grpc.ClientUnaryCall;
    public proposal(request: cosmos_gov_v1beta1_query_pb.QueryProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryProposalResponse) => void): grpc.ClientUnaryCall;
    public proposal(request: cosmos_gov_v1beta1_query_pb.QueryProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryProposalResponse) => void): grpc.ClientUnaryCall;
    public proposals(request: cosmos_gov_v1beta1_query_pb.QueryProposalsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryProposalsResponse) => void): grpc.ClientUnaryCall;
    public proposals(request: cosmos_gov_v1beta1_query_pb.QueryProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryProposalsResponse) => void): grpc.ClientUnaryCall;
    public proposals(request: cosmos_gov_v1beta1_query_pb.QueryProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryProposalsResponse) => void): grpc.ClientUnaryCall;
    public vote(request: cosmos_gov_v1beta1_query_pb.QueryVoteRequest, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryVoteResponse) => void): grpc.ClientUnaryCall;
    public vote(request: cosmos_gov_v1beta1_query_pb.QueryVoteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryVoteResponse) => void): grpc.ClientUnaryCall;
    public vote(request: cosmos_gov_v1beta1_query_pb.QueryVoteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryVoteResponse) => void): grpc.ClientUnaryCall;
    public votes(request: cosmos_gov_v1beta1_query_pb.QueryVotesRequest, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryVotesResponse) => void): grpc.ClientUnaryCall;
    public votes(request: cosmos_gov_v1beta1_query_pb.QueryVotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryVotesResponse) => void): grpc.ClientUnaryCall;
    public votes(request: cosmos_gov_v1beta1_query_pb.QueryVotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryVotesResponse) => void): grpc.ClientUnaryCall;
    public params(request: cosmos_gov_v1beta1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: cosmos_gov_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: cosmos_gov_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public deposit(request: cosmos_gov_v1beta1_query_pb.QueryDepositRequest, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryDepositResponse) => void): grpc.ClientUnaryCall;
    public deposit(request: cosmos_gov_v1beta1_query_pb.QueryDepositRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryDepositResponse) => void): grpc.ClientUnaryCall;
    public deposit(request: cosmos_gov_v1beta1_query_pb.QueryDepositRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryDepositResponse) => void): grpc.ClientUnaryCall;
    public deposits(request: cosmos_gov_v1beta1_query_pb.QueryDepositsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryDepositsResponse) => void): grpc.ClientUnaryCall;
    public deposits(request: cosmos_gov_v1beta1_query_pb.QueryDepositsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryDepositsResponse) => void): grpc.ClientUnaryCall;
    public deposits(request: cosmos_gov_v1beta1_query_pb.QueryDepositsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryDepositsResponse) => void): grpc.ClientUnaryCall;
    public tallyResult(request: cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse) => void): grpc.ClientUnaryCall;
    public tallyResult(request: cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse) => void): grpc.ClientUnaryCall;
    public tallyResult(request: cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse) => void): grpc.ClientUnaryCall;
}
