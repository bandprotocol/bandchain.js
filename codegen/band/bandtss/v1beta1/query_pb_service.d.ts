// package: band.bandtss.v1beta1
// file: band/bandtss/v1beta1/query.proto

import * as band_bandtss_v1beta1_query_pb from "../../../band/bandtss/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryCounts = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_bandtss_v1beta1_query_pb.QueryCountsRequest;
  readonly responseType: typeof band_bandtss_v1beta1_query_pb.QueryCountsResponse;
};

type QueryMembers = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_bandtss_v1beta1_query_pb.QueryMembersRequest;
  readonly responseType: typeof band_bandtss_v1beta1_query_pb.QueryMembersResponse;
};

type QueryMember = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_bandtss_v1beta1_query_pb.QueryMemberRequest;
  readonly responseType: typeof band_bandtss_v1beta1_query_pb.QueryMemberResponse;
};

type QueryCurrentGroup = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_bandtss_v1beta1_query_pb.QueryCurrentGroupRequest;
  readonly responseType: typeof band_bandtss_v1beta1_query_pb.QueryCurrentGroupResponse;
};

type QueryIncomingGroup = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_bandtss_v1beta1_query_pb.QueryIncomingGroupRequest;
  readonly responseType: typeof band_bandtss_v1beta1_query_pb.QueryIncomingGroupResponse;
};

type QuerySigning = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_bandtss_v1beta1_query_pb.QuerySigningRequest;
  readonly responseType: typeof band_bandtss_v1beta1_query_pb.QuerySigningResponse;
};

type QueryGroupTransition = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_bandtss_v1beta1_query_pb.QueryGroupTransitionRequest;
  readonly responseType: typeof band_bandtss_v1beta1_query_pb.QueryGroupTransitionResponse;
};

type QueryParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_bandtss_v1beta1_query_pb.QueryParamsRequest;
  readonly responseType: typeof band_bandtss_v1beta1_query_pb.QueryParamsResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Counts: QueryCounts;
  static readonly Members: QueryMembers;
  static readonly Member: QueryMember;
  static readonly CurrentGroup: QueryCurrentGroup;
  static readonly IncomingGroup: QueryIncomingGroup;
  static readonly Signing: QuerySigning;
  static readonly GroupTransition: QueryGroupTransition;
  static readonly Params: QueryParams;
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
  counts(
    requestMessage: band_bandtss_v1beta1_query_pb.QueryCountsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_query_pb.QueryCountsResponse|null) => void
  ): UnaryResponse;
  counts(
    requestMessage: band_bandtss_v1beta1_query_pb.QueryCountsRequest,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_query_pb.QueryCountsResponse|null) => void
  ): UnaryResponse;
  members(
    requestMessage: band_bandtss_v1beta1_query_pb.QueryMembersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_query_pb.QueryMembersResponse|null) => void
  ): UnaryResponse;
  members(
    requestMessage: band_bandtss_v1beta1_query_pb.QueryMembersRequest,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_query_pb.QueryMembersResponse|null) => void
  ): UnaryResponse;
  member(
    requestMessage: band_bandtss_v1beta1_query_pb.QueryMemberRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_query_pb.QueryMemberResponse|null) => void
  ): UnaryResponse;
  member(
    requestMessage: band_bandtss_v1beta1_query_pb.QueryMemberRequest,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_query_pb.QueryMemberResponse|null) => void
  ): UnaryResponse;
  currentGroup(
    requestMessage: band_bandtss_v1beta1_query_pb.QueryCurrentGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_query_pb.QueryCurrentGroupResponse|null) => void
  ): UnaryResponse;
  currentGroup(
    requestMessage: band_bandtss_v1beta1_query_pb.QueryCurrentGroupRequest,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_query_pb.QueryCurrentGroupResponse|null) => void
  ): UnaryResponse;
  incomingGroup(
    requestMessage: band_bandtss_v1beta1_query_pb.QueryIncomingGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_query_pb.QueryIncomingGroupResponse|null) => void
  ): UnaryResponse;
  incomingGroup(
    requestMessage: band_bandtss_v1beta1_query_pb.QueryIncomingGroupRequest,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_query_pb.QueryIncomingGroupResponse|null) => void
  ): UnaryResponse;
  signing(
    requestMessage: band_bandtss_v1beta1_query_pb.QuerySigningRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_query_pb.QuerySigningResponse|null) => void
  ): UnaryResponse;
  signing(
    requestMessage: band_bandtss_v1beta1_query_pb.QuerySigningRequest,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_query_pb.QuerySigningResponse|null) => void
  ): UnaryResponse;
  groupTransition(
    requestMessage: band_bandtss_v1beta1_query_pb.QueryGroupTransitionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_query_pb.QueryGroupTransitionResponse|null) => void
  ): UnaryResponse;
  groupTransition(
    requestMessage: band_bandtss_v1beta1_query_pb.QueryGroupTransitionRequest,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_query_pb.QueryGroupTransitionResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: band_bandtss_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: band_bandtss_v1beta1_query_pb.QueryParamsRequest,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
}

