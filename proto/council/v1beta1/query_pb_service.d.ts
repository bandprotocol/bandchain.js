// package: council.v1beta1
// file: council/v1beta1/query.proto

import * as council_v1beta1_query_pb from "../../council/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof council_v1beta1_query_pb.QueryParamsRequest;
  readonly responseType: typeof council_v1beta1_query_pb.QueryParamsResponse;
};

type QueryCouncilInfo = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof council_v1beta1_query_pb.QueryCouncilInfoRequest;
  readonly responseType: typeof council_v1beta1_query_pb.QueryCouncilInfoResponse;
};

type QueryCouncilInfos = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof council_v1beta1_query_pb.QueryCouncilInfosRequest;
  readonly responseType: typeof council_v1beta1_query_pb.QueryCouncilInfosResponse;
};

type QueryProposal = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof council_v1beta1_query_pb.QueryProposalRequest;
  readonly responseType: typeof council_v1beta1_query_pb.QueryProposalResponse;
};

type QueryProposals = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof council_v1beta1_query_pb.QueryProposalsRequest;
  readonly responseType: typeof council_v1beta1_query_pb.QueryProposalsResponse;
};

type QueryVotes = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof council_v1beta1_query_pb.QueryVotesRequest;
  readonly responseType: typeof council_v1beta1_query_pb.QueryVotesResponse;
};

type QueryTallyResult = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof council_v1beta1_query_pb.QueryTallyResultRequest;
  readonly responseType: typeof council_v1beta1_query_pb.QueryTallyResultResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Params: QueryParams;
  static readonly CouncilInfo: QueryCouncilInfo;
  static readonly CouncilInfos: QueryCouncilInfos;
  static readonly Proposal: QueryProposal;
  static readonly Proposals: QueryProposals;
  static readonly Votes: QueryVotes;
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
  params(
    requestMessage: council_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: council_v1beta1_query_pb.QueryParamsRequest,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  councilInfo(
    requestMessage: council_v1beta1_query_pb.QueryCouncilInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_query_pb.QueryCouncilInfoResponse|null) => void
  ): UnaryResponse;
  councilInfo(
    requestMessage: council_v1beta1_query_pb.QueryCouncilInfoRequest,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_query_pb.QueryCouncilInfoResponse|null) => void
  ): UnaryResponse;
  councilInfos(
    requestMessage: council_v1beta1_query_pb.QueryCouncilInfosRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_query_pb.QueryCouncilInfosResponse|null) => void
  ): UnaryResponse;
  councilInfos(
    requestMessage: council_v1beta1_query_pb.QueryCouncilInfosRequest,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_query_pb.QueryCouncilInfosResponse|null) => void
  ): UnaryResponse;
  proposal(
    requestMessage: council_v1beta1_query_pb.QueryProposalRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_query_pb.QueryProposalResponse|null) => void
  ): UnaryResponse;
  proposal(
    requestMessage: council_v1beta1_query_pb.QueryProposalRequest,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_query_pb.QueryProposalResponse|null) => void
  ): UnaryResponse;
  proposals(
    requestMessage: council_v1beta1_query_pb.QueryProposalsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_query_pb.QueryProposalsResponse|null) => void
  ): UnaryResponse;
  proposals(
    requestMessage: council_v1beta1_query_pb.QueryProposalsRequest,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_query_pb.QueryProposalsResponse|null) => void
  ): UnaryResponse;
  votes(
    requestMessage: council_v1beta1_query_pb.QueryVotesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_query_pb.QueryVotesResponse|null) => void
  ): UnaryResponse;
  votes(
    requestMessage: council_v1beta1_query_pb.QueryVotesRequest,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_query_pb.QueryVotesResponse|null) => void
  ): UnaryResponse;
  tallyResult(
    requestMessage: council_v1beta1_query_pb.QueryTallyResultRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_query_pb.QueryTallyResultResponse|null) => void
  ): UnaryResponse;
  tallyResult(
    requestMessage: council_v1beta1_query_pb.QueryTallyResultRequest,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_query_pb.QueryTallyResultResponse|null) => void
  ): UnaryResponse;
}

