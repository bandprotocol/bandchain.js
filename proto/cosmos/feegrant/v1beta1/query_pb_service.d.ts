// package: cosmos.feegrant.v1beta1
// file: cosmos/feegrant/v1beta1/query.proto

import * as cosmos_feegrant_v1beta1_query_pb from "../../../cosmos/feegrant/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryAllowance = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_feegrant_v1beta1_query_pb.QueryAllowanceRequest;
  readonly responseType: typeof cosmos_feegrant_v1beta1_query_pb.QueryAllowanceResponse;
};

type QueryAllowances = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_feegrant_v1beta1_query_pb.QueryAllowancesRequest;
  readonly responseType: typeof cosmos_feegrant_v1beta1_query_pb.QueryAllowancesResponse;
};

type QueryAllowancesByGranter = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterRequest;
  readonly responseType: typeof cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Allowance: QueryAllowance;
  static readonly Allowances: QueryAllowances;
  static readonly AllowancesByGranter: QueryAllowancesByGranter;
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
  allowance(
    requestMessage: cosmos_feegrant_v1beta1_query_pb.QueryAllowanceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_feegrant_v1beta1_query_pb.QueryAllowanceResponse|null) => void
  ): UnaryResponse;
  allowance(
    requestMessage: cosmos_feegrant_v1beta1_query_pb.QueryAllowanceRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_feegrant_v1beta1_query_pb.QueryAllowanceResponse|null) => void
  ): UnaryResponse;
  allowances(
    requestMessage: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesResponse|null) => void
  ): UnaryResponse;
  allowances(
    requestMessage: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesResponse|null) => void
  ): UnaryResponse;
  allowancesByGranter(
    requestMessage: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterResponse|null) => void
  ): UnaryResponse;
  allowancesByGranter(
    requestMessage: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterResponse|null) => void
  ): UnaryResponse;
}

