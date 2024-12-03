// package: cosmos.circuit.v1
// file: cosmos/circuit/v1/tx.proto

import * as cosmos_circuit_v1_tx_pb from "../../../cosmos/circuit/v1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgAuthorizeCircuitBreaker = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_circuit_v1_tx_pb.MsgAuthorizeCircuitBreaker;
  readonly responseType: typeof cosmos_circuit_v1_tx_pb.MsgAuthorizeCircuitBreakerResponse;
};

type MsgTripCircuitBreaker = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_circuit_v1_tx_pb.MsgTripCircuitBreaker;
  readonly responseType: typeof cosmos_circuit_v1_tx_pb.MsgTripCircuitBreakerResponse;
};

type MsgResetCircuitBreaker = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_circuit_v1_tx_pb.MsgResetCircuitBreaker;
  readonly responseType: typeof cosmos_circuit_v1_tx_pb.MsgResetCircuitBreakerResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly AuthorizeCircuitBreaker: MsgAuthorizeCircuitBreaker;
  static readonly TripCircuitBreaker: MsgTripCircuitBreaker;
  static readonly ResetCircuitBreaker: MsgResetCircuitBreaker;
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

export class MsgClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  authorizeCircuitBreaker(
    requestMessage: cosmos_circuit_v1_tx_pb.MsgAuthorizeCircuitBreaker,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_circuit_v1_tx_pb.MsgAuthorizeCircuitBreakerResponse|null) => void
  ): UnaryResponse;
  authorizeCircuitBreaker(
    requestMessage: cosmos_circuit_v1_tx_pb.MsgAuthorizeCircuitBreaker,
    callback: (error: ServiceError|null, responseMessage: cosmos_circuit_v1_tx_pb.MsgAuthorizeCircuitBreakerResponse|null) => void
  ): UnaryResponse;
  tripCircuitBreaker(
    requestMessage: cosmos_circuit_v1_tx_pb.MsgTripCircuitBreaker,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_circuit_v1_tx_pb.MsgTripCircuitBreakerResponse|null) => void
  ): UnaryResponse;
  tripCircuitBreaker(
    requestMessage: cosmos_circuit_v1_tx_pb.MsgTripCircuitBreaker,
    callback: (error: ServiceError|null, responseMessage: cosmos_circuit_v1_tx_pb.MsgTripCircuitBreakerResponse|null) => void
  ): UnaryResponse;
  resetCircuitBreaker(
    requestMessage: cosmos_circuit_v1_tx_pb.MsgResetCircuitBreaker,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_circuit_v1_tx_pb.MsgResetCircuitBreakerResponse|null) => void
  ): UnaryResponse;
  resetCircuitBreaker(
    requestMessage: cosmos_circuit_v1_tx_pb.MsgResetCircuitBreaker,
    callback: (error: ServiceError|null, responseMessage: cosmos_circuit_v1_tx_pb.MsgResetCircuitBreakerResponse|null) => void
  ): UnaryResponse;
}

