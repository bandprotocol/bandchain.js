// package: ibc.core.connection.v1
// file: ibc/core/connection/v1/query.proto

import * as ibc_core_connection_v1_query_pb from "../../../../ibc/core/connection/v1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryConnection = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_connection_v1_query_pb.QueryConnectionRequest;
  readonly responseType: typeof ibc_core_connection_v1_query_pb.QueryConnectionResponse;
};

type QueryConnections = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_connection_v1_query_pb.QueryConnectionsRequest;
  readonly responseType: typeof ibc_core_connection_v1_query_pb.QueryConnectionsResponse;
};

type QueryClientConnections = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest;
  readonly responseType: typeof ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse;
};

type QueryConnectionClientState = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest;
  readonly responseType: typeof ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse;
};

type QueryConnectionConsensusState = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest;
  readonly responseType: typeof ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Connection: QueryConnection;
  static readonly Connections: QueryConnections;
  static readonly ClientConnections: QueryClientConnections;
  static readonly ConnectionClientState: QueryConnectionClientState;
  static readonly ConnectionConsensusState: QueryConnectionConsensusState;
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
  connection(
    requestMessage: ibc_core_connection_v1_query_pb.QueryConnectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_query_pb.QueryConnectionResponse|null) => void
  ): UnaryResponse;
  connection(
    requestMessage: ibc_core_connection_v1_query_pb.QueryConnectionRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_query_pb.QueryConnectionResponse|null) => void
  ): UnaryResponse;
  connections(
    requestMessage: ibc_core_connection_v1_query_pb.QueryConnectionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_query_pb.QueryConnectionsResponse|null) => void
  ): UnaryResponse;
  connections(
    requestMessage: ibc_core_connection_v1_query_pb.QueryConnectionsRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_query_pb.QueryConnectionsResponse|null) => void
  ): UnaryResponse;
  clientConnections(
    requestMessage: ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse|null) => void
  ): UnaryResponse;
  clientConnections(
    requestMessage: ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse|null) => void
  ): UnaryResponse;
  connectionClientState(
    requestMessage: ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse|null) => void
  ): UnaryResponse;
  connectionClientState(
    requestMessage: ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse|null) => void
  ): UnaryResponse;
  connectionConsensusState(
    requestMessage: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse|null) => void
  ): UnaryResponse;
  connectionConsensusState(
    requestMessage: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse|null) => void
  ): UnaryResponse;
}

