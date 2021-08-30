// package: cosmos.tx.v1beta1
// file: cosmos/tx/v1beta1/service.proto

import * as cosmos_tx_v1beta1_service_pb from "../../../cosmos/tx/v1beta1/service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ServiceSimulate = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_tx_v1beta1_service_pb.SimulateRequest;
  readonly responseType: typeof cosmos_tx_v1beta1_service_pb.SimulateResponse;
};

type ServiceGetTx = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_tx_v1beta1_service_pb.GetTxRequest;
  readonly responseType: typeof cosmos_tx_v1beta1_service_pb.GetTxResponse;
};

type ServiceBroadcastTx = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_tx_v1beta1_service_pb.BroadcastTxRequest;
  readonly responseType: typeof cosmos_tx_v1beta1_service_pb.BroadcastTxResponse;
};

type ServiceGetTxsEvent = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_tx_v1beta1_service_pb.GetTxsEventRequest;
  readonly responseType: typeof cosmos_tx_v1beta1_service_pb.GetTxsEventResponse;
};

export class Service {
  static readonly serviceName: string;
  static readonly Simulate: ServiceSimulate;
  static readonly GetTx: ServiceGetTx;
  static readonly BroadcastTx: ServiceBroadcastTx;
  static readonly GetTxsEvent: ServiceGetTxsEvent;
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

export class ServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  simulate(
    requestMessage: cosmos_tx_v1beta1_service_pb.SimulateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.SimulateResponse|null) => void
  ): UnaryResponse;
  simulate(
    requestMessage: cosmos_tx_v1beta1_service_pb.SimulateRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.SimulateResponse|null) => void
  ): UnaryResponse;
  getTx(
    requestMessage: cosmos_tx_v1beta1_service_pb.GetTxRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.GetTxResponse|null) => void
  ): UnaryResponse;
  getTx(
    requestMessage: cosmos_tx_v1beta1_service_pb.GetTxRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.GetTxResponse|null) => void
  ): UnaryResponse;
  broadcastTx(
    requestMessage: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.BroadcastTxResponse|null) => void
  ): UnaryResponse;
  broadcastTx(
    requestMessage: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.BroadcastTxResponse|null) => void
  ): UnaryResponse;
  getTxsEvent(
    requestMessage: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.GetTxsEventResponse|null) => void
  ): UnaryResponse;
  getTxsEvent(
    requestMessage: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.GetTxsEventResponse|null) => void
  ): UnaryResponse;
}

