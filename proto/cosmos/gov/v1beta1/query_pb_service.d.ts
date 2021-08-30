// package: cosmos.gov.v1beta1
// file: cosmos/gov/v1beta1/query.proto

import * as cosmos_gov_v1beta1_query_pb from "../../../cosmos/gov/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryProposal = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_gov_v1beta1_query_pb.QueryProposalRequest;
  readonly responseType: typeof cosmos_gov_v1beta1_query_pb.QueryProposalResponse;
};

type QueryProposals = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_gov_v1beta1_query_pb.QueryProposalsRequest;
  readonly responseType: typeof cosmos_gov_v1beta1_query_pb.QueryProposalsResponse;
};

type QueryVote = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_gov_v1beta1_query_pb.QueryVoteRequest;
  readonly responseType: typeof cosmos_gov_v1beta1_query_pb.QueryVoteResponse;
};

type QueryVotes = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_gov_v1beta1_query_pb.QueryVotesRequest;
  readonly responseType: typeof cosmos_gov_v1beta1_query_pb.QueryVotesResponse;
};

type QueryParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_gov_v1beta1_query_pb.QueryParamsRequest;
  readonly responseType: typeof cosmos_gov_v1beta1_query_pb.QueryParamsResponse;
};

type QueryDeposit = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_gov_v1beta1_query_pb.QueryDepositRequest;
  readonly responseType: typeof cosmos_gov_v1beta1_query_pb.QueryDepositResponse;
};

type QueryDeposits = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_gov_v1beta1_query_pb.QueryDepositsRequest;
  readonly responseType: typeof cosmos_gov_v1beta1_query_pb.QueryDepositsResponse;
};

type QueryTallyResult = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest;
  readonly responseType: typeof cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Proposal: QueryProposal;
  static readonly Proposals: QueryProposals;
  static readonly Vote: QueryVote;
  static readonly Votes: QueryVotes;
  static readonly Params: QueryParams;
  static readonly Deposit: QueryDeposit;
  static readonly Deposits: QueryDeposits;
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
  proposal(
    requestMessage: cosmos_gov_v1beta1_query_pb.QueryProposalRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_query_pb.QueryProposalResponse|null) => void
  ): UnaryResponse;
  proposal(
    requestMessage: cosmos_gov_v1beta1_query_pb.QueryProposalRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_query_pb.QueryProposalResponse|null) => void
  ): UnaryResponse;
  proposals(
    requestMessage: cosmos_gov_v1beta1_query_pb.QueryProposalsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_query_pb.QueryProposalsResponse|null) => void
  ): UnaryResponse;
  proposals(
    requestMessage: cosmos_gov_v1beta1_query_pb.QueryProposalsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_query_pb.QueryProposalsResponse|null) => void
  ): UnaryResponse;
  vote(
    requestMessage: cosmos_gov_v1beta1_query_pb.QueryVoteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_query_pb.QueryVoteResponse|null) => void
  ): UnaryResponse;
  vote(
    requestMessage: cosmos_gov_v1beta1_query_pb.QueryVoteRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_query_pb.QueryVoteResponse|null) => void
  ): UnaryResponse;
  votes(
    requestMessage: cosmos_gov_v1beta1_query_pb.QueryVotesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_query_pb.QueryVotesResponse|null) => void
  ): UnaryResponse;
  votes(
    requestMessage: cosmos_gov_v1beta1_query_pb.QueryVotesRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_query_pb.QueryVotesResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: cosmos_gov_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: cosmos_gov_v1beta1_query_pb.QueryParamsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  deposit(
    requestMessage: cosmos_gov_v1beta1_query_pb.QueryDepositRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_query_pb.QueryDepositResponse|null) => void
  ): UnaryResponse;
  deposit(
    requestMessage: cosmos_gov_v1beta1_query_pb.QueryDepositRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_query_pb.QueryDepositResponse|null) => void
  ): UnaryResponse;
  deposits(
    requestMessage: cosmos_gov_v1beta1_query_pb.QueryDepositsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_query_pb.QueryDepositsResponse|null) => void
  ): UnaryResponse;
  deposits(
    requestMessage: cosmos_gov_v1beta1_query_pb.QueryDepositsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_query_pb.QueryDepositsResponse|null) => void
  ): UnaryResponse;
  tallyResult(
    requestMessage: cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse|null) => void
  ): UnaryResponse;
  tallyResult(
    requestMessage: cosmos_gov_v1beta1_query_pb.QueryTallyResultRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_query_pb.QueryTallyResultResponse|null) => void
  ): UnaryResponse;
}

