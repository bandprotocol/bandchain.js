// package: cosmos.authz.v1beta1
// file: cosmos/authz/v1beta1/query.proto

import * as cosmos_authz_v1beta1_query_pb from "../../../cosmos/authz/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryGrants = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_authz_v1beta1_query_pb.QueryGrantsRequest;
  readonly responseType: typeof cosmos_authz_v1beta1_query_pb.QueryGrantsResponse;
};

type QueryGranterGrants = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_authz_v1beta1_query_pb.QueryGranterGrantsRequest;
  readonly responseType: typeof cosmos_authz_v1beta1_query_pb.QueryGranterGrantsResponse;
};

type QueryGranteeGrants = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsRequest;
  readonly responseType: typeof cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Grants: QueryGrants;
  static readonly GranterGrants: QueryGranterGrants;
  static readonly GranteeGrants: QueryGranteeGrants;
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
  grants(
    requestMessage: cosmos_authz_v1beta1_query_pb.QueryGrantsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_authz_v1beta1_query_pb.QueryGrantsResponse|null) => void
  ): UnaryResponse;
  grants(
    requestMessage: cosmos_authz_v1beta1_query_pb.QueryGrantsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_authz_v1beta1_query_pb.QueryGrantsResponse|null) => void
  ): UnaryResponse;
  granterGrants(
    requestMessage: cosmos_authz_v1beta1_query_pb.QueryGranterGrantsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_authz_v1beta1_query_pb.QueryGranterGrantsResponse|null) => void
  ): UnaryResponse;
  granterGrants(
    requestMessage: cosmos_authz_v1beta1_query_pb.QueryGranterGrantsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_authz_v1beta1_query_pb.QueryGranterGrantsResponse|null) => void
  ): UnaryResponse;
  granteeGrants(
    requestMessage: cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsResponse|null) => void
  ): UnaryResponse;
  granteeGrants(
    requestMessage: cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsResponse|null) => void
  ): UnaryResponse;
}

