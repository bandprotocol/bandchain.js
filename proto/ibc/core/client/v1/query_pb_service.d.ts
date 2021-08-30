// package: ibc.core.client.v1
// file: ibc/core/client/v1/query.proto

import * as ibc_core_client_v1_query_pb from "../../../../ibc/core/client/v1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryClientState = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_client_v1_query_pb.QueryClientStateRequest;
  readonly responseType: typeof ibc_core_client_v1_query_pb.QueryClientStateResponse;
};

type QueryClientStates = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_client_v1_query_pb.QueryClientStatesRequest;
  readonly responseType: typeof ibc_core_client_v1_query_pb.QueryClientStatesResponse;
};

type QueryConsensusState = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_client_v1_query_pb.QueryConsensusStateRequest;
  readonly responseType: typeof ibc_core_client_v1_query_pb.QueryConsensusStateResponse;
};

type QueryConsensusStates = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_client_v1_query_pb.QueryConsensusStatesRequest;
  readonly responseType: typeof ibc_core_client_v1_query_pb.QueryConsensusStatesResponse;
};

type QueryClientStatus = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_client_v1_query_pb.QueryClientStatusRequest;
  readonly responseType: typeof ibc_core_client_v1_query_pb.QueryClientStatusResponse;
};

type QueryClientParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_client_v1_query_pb.QueryClientParamsRequest;
  readonly responseType: typeof ibc_core_client_v1_query_pb.QueryClientParamsResponse;
};

type QueryUpgradedClientState = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest;
  readonly responseType: typeof ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse;
};

type QueryUpgradedConsensusState = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest;
  readonly responseType: typeof ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly ClientState: QueryClientState;
  static readonly ClientStates: QueryClientStates;
  static readonly ConsensusState: QueryConsensusState;
  static readonly ConsensusStates: QueryConsensusStates;
  static readonly ClientStatus: QueryClientStatus;
  static readonly ClientParams: QueryClientParams;
  static readonly UpgradedClientState: QueryUpgradedClientState;
  static readonly UpgradedConsensusState: QueryUpgradedConsensusState;
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
  clientState(
    requestMessage: ibc_core_client_v1_query_pb.QueryClientStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_query_pb.QueryClientStateResponse|null) => void
  ): UnaryResponse;
  clientState(
    requestMessage: ibc_core_client_v1_query_pb.QueryClientStateRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_query_pb.QueryClientStateResponse|null) => void
  ): UnaryResponse;
  clientStates(
    requestMessage: ibc_core_client_v1_query_pb.QueryClientStatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_query_pb.QueryClientStatesResponse|null) => void
  ): UnaryResponse;
  clientStates(
    requestMessage: ibc_core_client_v1_query_pb.QueryClientStatesRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_query_pb.QueryClientStatesResponse|null) => void
  ): UnaryResponse;
  consensusState(
    requestMessage: ibc_core_client_v1_query_pb.QueryConsensusStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_query_pb.QueryConsensusStateResponse|null) => void
  ): UnaryResponse;
  consensusState(
    requestMessage: ibc_core_client_v1_query_pb.QueryConsensusStateRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_query_pb.QueryConsensusStateResponse|null) => void
  ): UnaryResponse;
  consensusStates(
    requestMessage: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse|null) => void
  ): UnaryResponse;
  consensusStates(
    requestMessage: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse|null) => void
  ): UnaryResponse;
  clientStatus(
    requestMessage: ibc_core_client_v1_query_pb.QueryClientStatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_query_pb.QueryClientStatusResponse|null) => void
  ): UnaryResponse;
  clientStatus(
    requestMessage: ibc_core_client_v1_query_pb.QueryClientStatusRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_query_pb.QueryClientStatusResponse|null) => void
  ): UnaryResponse;
  clientParams(
    requestMessage: ibc_core_client_v1_query_pb.QueryClientParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_query_pb.QueryClientParamsResponse|null) => void
  ): UnaryResponse;
  clientParams(
    requestMessage: ibc_core_client_v1_query_pb.QueryClientParamsRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_query_pb.QueryClientParamsResponse|null) => void
  ): UnaryResponse;
  upgradedClientState(
    requestMessage: ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse|null) => void
  ): UnaryResponse;
  upgradedClientState(
    requestMessage: ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse|null) => void
  ): UnaryResponse;
  upgradedConsensusState(
    requestMessage: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse|null) => void
  ): UnaryResponse;
  upgradedConsensusState(
    requestMessage: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse|null) => void
  ): UnaryResponse;
}

