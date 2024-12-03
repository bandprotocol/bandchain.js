// package: cosmos.circuit.v1
// file: cosmos/circuit/v1/query.proto

import * as cosmos_circuit_v1_query_pb from "../../../cosmos/circuit/v1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryAccount = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_circuit_v1_query_pb.QueryAccountRequest;
  readonly responseType: typeof cosmos_circuit_v1_query_pb.AccountResponse;
};

type QueryAccounts = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_circuit_v1_query_pb.QueryAccountsRequest;
  readonly responseType: typeof cosmos_circuit_v1_query_pb.AccountsResponse;
};

type QueryDisabledList = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_circuit_v1_query_pb.QueryDisabledListRequest;
  readonly responseType: typeof cosmos_circuit_v1_query_pb.DisabledListResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Account: QueryAccount;
  static readonly Accounts: QueryAccounts;
  static readonly DisabledList: QueryDisabledList;
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
  account(
    requestMessage: cosmos_circuit_v1_query_pb.QueryAccountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_circuit_v1_query_pb.AccountResponse|null) => void
  ): UnaryResponse;
  account(
    requestMessage: cosmos_circuit_v1_query_pb.QueryAccountRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_circuit_v1_query_pb.AccountResponse|null) => void
  ): UnaryResponse;
  accounts(
    requestMessage: cosmos_circuit_v1_query_pb.QueryAccountsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_circuit_v1_query_pb.AccountsResponse|null) => void
  ): UnaryResponse;
  accounts(
    requestMessage: cosmos_circuit_v1_query_pb.QueryAccountsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_circuit_v1_query_pb.AccountsResponse|null) => void
  ): UnaryResponse;
  disabledList(
    requestMessage: cosmos_circuit_v1_query_pb.QueryDisabledListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_circuit_v1_query_pb.DisabledListResponse|null) => void
  ): UnaryResponse;
  disabledList(
    requestMessage: cosmos_circuit_v1_query_pb.QueryDisabledListRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_circuit_v1_query_pb.DisabledListResponse|null) => void
  ): UnaryResponse;
}

