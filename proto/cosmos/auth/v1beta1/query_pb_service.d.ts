// package: cosmos.auth.v1beta1
// file: cosmos/auth/v1beta1/query.proto

import * as cosmos_auth_v1beta1_query_pb from "../../../cosmos/auth/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryAccounts = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_auth_v1beta1_query_pb.QueryAccountsRequest;
  readonly responseType: typeof cosmos_auth_v1beta1_query_pb.QueryAccountsResponse;
};

type QueryAccount = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_auth_v1beta1_query_pb.QueryAccountRequest;
  readonly responseType: typeof cosmos_auth_v1beta1_query_pb.QueryAccountResponse;
};

type QueryParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_auth_v1beta1_query_pb.QueryParamsRequest;
  readonly responseType: typeof cosmos_auth_v1beta1_query_pb.QueryParamsResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Accounts: QueryAccounts;
  static readonly Account: QueryAccount;
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
  accounts(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryAccountsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryAccountsResponse|null) => void
  ): UnaryResponse;
  accounts(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryAccountsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryAccountsResponse|null) => void
  ): UnaryResponse;
  account(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryAccountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryAccountResponse|null) => void
  ): UnaryResponse;
  account(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryAccountRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryAccountResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryParamsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
}

