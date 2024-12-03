// package: band.tss.v1beta1
// file: band/tss/v1beta1/query.proto

import * as band_tss_v1beta1_query_pb from "../../../band/tss/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryCounts = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_query_pb.QueryCountsRequest;
  readonly responseType: typeof band_tss_v1beta1_query_pb.QueryCountsResponse;
};

type QueryGroups = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_query_pb.QueryGroupsRequest;
  readonly responseType: typeof band_tss_v1beta1_query_pb.QueryGroupsResponse;
};

type QueryGroup = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_query_pb.QueryGroupRequest;
  readonly responseType: typeof band_tss_v1beta1_query_pb.QueryGroupResponse;
};

type QueryMembers = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_query_pb.QueryMembersRequest;
  readonly responseType: typeof band_tss_v1beta1_query_pb.QueryMembersResponse;
};

type QueryIsGrantee = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_query_pb.QueryIsGranteeRequest;
  readonly responseType: typeof band_tss_v1beta1_query_pb.QueryIsGranteeResponse;
};

type QueryDE = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_query_pb.QueryDERequest;
  readonly responseType: typeof band_tss_v1beta1_query_pb.QueryDEResponse;
};

type QueryPendingGroups = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_query_pb.QueryPendingGroupsRequest;
  readonly responseType: typeof band_tss_v1beta1_query_pb.QueryPendingGroupsResponse;
};

type QueryPendingSignings = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_query_pb.QueryPendingSigningsRequest;
  readonly responseType: typeof band_tss_v1beta1_query_pb.QueryPendingSigningsResponse;
};

type QuerySigning = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_query_pb.QuerySigningRequest;
  readonly responseType: typeof band_tss_v1beta1_query_pb.QuerySigningResponse;
};

type QuerySignings = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_query_pb.QuerySigningsRequest;
  readonly responseType: typeof band_tss_v1beta1_query_pb.QuerySigningsResponse;
};

type QueryParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_query_pb.QueryParamsRequest;
  readonly responseType: typeof band_tss_v1beta1_query_pb.QueryParamsResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Counts: QueryCounts;
  static readonly Groups: QueryGroups;
  static readonly Group: QueryGroup;
  static readonly Members: QueryMembers;
  static readonly IsGrantee: QueryIsGrantee;
  static readonly DE: QueryDE;
  static readonly PendingGroups: QueryPendingGroups;
  static readonly PendingSignings: QueryPendingSignings;
  static readonly Signing: QuerySigning;
  static readonly Signings: QuerySignings;
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
    requestMessage: band_tss_v1beta1_query_pb.QueryCountsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryCountsResponse|null) => void
  ): UnaryResponse;
  counts(
    requestMessage: band_tss_v1beta1_query_pb.QueryCountsRequest,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryCountsResponse|null) => void
  ): UnaryResponse;
  groups(
    requestMessage: band_tss_v1beta1_query_pb.QueryGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryGroupsResponse|null) => void
  ): UnaryResponse;
  groups(
    requestMessage: band_tss_v1beta1_query_pb.QueryGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryGroupsResponse|null) => void
  ): UnaryResponse;
  group(
    requestMessage: band_tss_v1beta1_query_pb.QueryGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryGroupResponse|null) => void
  ): UnaryResponse;
  group(
    requestMessage: band_tss_v1beta1_query_pb.QueryGroupRequest,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryGroupResponse|null) => void
  ): UnaryResponse;
  members(
    requestMessage: band_tss_v1beta1_query_pb.QueryMembersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryMembersResponse|null) => void
  ): UnaryResponse;
  members(
    requestMessage: band_tss_v1beta1_query_pb.QueryMembersRequest,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryMembersResponse|null) => void
  ): UnaryResponse;
  isGrantee(
    requestMessage: band_tss_v1beta1_query_pb.QueryIsGranteeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryIsGranteeResponse|null) => void
  ): UnaryResponse;
  isGrantee(
    requestMessage: band_tss_v1beta1_query_pb.QueryIsGranteeRequest,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryIsGranteeResponse|null) => void
  ): UnaryResponse;
  dE(
    requestMessage: band_tss_v1beta1_query_pb.QueryDERequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryDEResponse|null) => void
  ): UnaryResponse;
  dE(
    requestMessage: band_tss_v1beta1_query_pb.QueryDERequest,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryDEResponse|null) => void
  ): UnaryResponse;
  pendingGroups(
    requestMessage: band_tss_v1beta1_query_pb.QueryPendingGroupsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryPendingGroupsResponse|null) => void
  ): UnaryResponse;
  pendingGroups(
    requestMessage: band_tss_v1beta1_query_pb.QueryPendingGroupsRequest,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryPendingGroupsResponse|null) => void
  ): UnaryResponse;
  pendingSignings(
    requestMessage: band_tss_v1beta1_query_pb.QueryPendingSigningsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryPendingSigningsResponse|null) => void
  ): UnaryResponse;
  pendingSignings(
    requestMessage: band_tss_v1beta1_query_pb.QueryPendingSigningsRequest,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryPendingSigningsResponse|null) => void
  ): UnaryResponse;
  signing(
    requestMessage: band_tss_v1beta1_query_pb.QuerySigningRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QuerySigningResponse|null) => void
  ): UnaryResponse;
  signing(
    requestMessage: band_tss_v1beta1_query_pb.QuerySigningRequest,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QuerySigningResponse|null) => void
  ): UnaryResponse;
  signings(
    requestMessage: band_tss_v1beta1_query_pb.QuerySigningsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QuerySigningsResponse|null) => void
  ): UnaryResponse;
  signings(
    requestMessage: band_tss_v1beta1_query_pb.QuerySigningsRequest,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QuerySigningsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: band_tss_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: band_tss_v1beta1_query_pb.QueryParamsRequest,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
}

