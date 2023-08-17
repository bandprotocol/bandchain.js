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

type ServiceGetBlockWithTxs = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_tx_v1beta1_service_pb.GetBlockWithTxsRequest;
  readonly responseType: typeof cosmos_tx_v1beta1_service_pb.GetBlockWithTxsResponse;
};

type ServiceTxDecode = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_tx_v1beta1_service_pb.TxDecodeRequest;
  readonly responseType: typeof cosmos_tx_v1beta1_service_pb.TxDecodeResponse;
};

type ServiceTxEncode = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_tx_v1beta1_service_pb.TxEncodeRequest;
  readonly responseType: typeof cosmos_tx_v1beta1_service_pb.TxEncodeResponse;
};

type ServiceTxEncodeAmino = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_tx_v1beta1_service_pb.TxEncodeAminoRequest;
  readonly responseType: typeof cosmos_tx_v1beta1_service_pb.TxEncodeAminoResponse;
};

type ServiceTxDecodeAmino = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_tx_v1beta1_service_pb.TxDecodeAminoRequest;
  readonly responseType: typeof cosmos_tx_v1beta1_service_pb.TxDecodeAminoResponse;
};

export class Service {
  static readonly serviceName: string;
  static readonly Simulate: ServiceSimulate;
  static readonly GetTx: ServiceGetTx;
  static readonly BroadcastTx: ServiceBroadcastTx;
  static readonly GetTxsEvent: ServiceGetTxsEvent;
  static readonly GetBlockWithTxs: ServiceGetBlockWithTxs;
  static readonly TxDecode: ServiceTxDecode;
  static readonly TxEncode: ServiceTxEncode;
  static readonly TxEncodeAmino: ServiceTxEncodeAmino;
  static readonly TxDecodeAmino: ServiceTxDecodeAmino;
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
  getBlockWithTxs(
    requestMessage: cosmos_tx_v1beta1_service_pb.GetBlockWithTxsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.GetBlockWithTxsResponse|null) => void
  ): UnaryResponse;
  getBlockWithTxs(
    requestMessage: cosmos_tx_v1beta1_service_pb.GetBlockWithTxsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.GetBlockWithTxsResponse|null) => void
  ): UnaryResponse;
  txDecode(
    requestMessage: cosmos_tx_v1beta1_service_pb.TxDecodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.TxDecodeResponse|null) => void
  ): UnaryResponse;
  txDecode(
    requestMessage: cosmos_tx_v1beta1_service_pb.TxDecodeRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.TxDecodeResponse|null) => void
  ): UnaryResponse;
  txEncode(
    requestMessage: cosmos_tx_v1beta1_service_pb.TxEncodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.TxEncodeResponse|null) => void
  ): UnaryResponse;
  txEncode(
    requestMessage: cosmos_tx_v1beta1_service_pb.TxEncodeRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.TxEncodeResponse|null) => void
  ): UnaryResponse;
  txEncodeAmino(
    requestMessage: cosmos_tx_v1beta1_service_pb.TxEncodeAminoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.TxEncodeAminoResponse|null) => void
  ): UnaryResponse;
  txEncodeAmino(
    requestMessage: cosmos_tx_v1beta1_service_pb.TxEncodeAminoRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.TxEncodeAminoResponse|null) => void
  ): UnaryResponse;
  txDecodeAmino(
    requestMessage: cosmos_tx_v1beta1_service_pb.TxDecodeAminoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.TxDecodeAminoResponse|null) => void
  ): UnaryResponse;
  txDecodeAmino(
    requestMessage: cosmos_tx_v1beta1_service_pb.TxDecodeAminoRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_tx_v1beta1_service_pb.TxDecodeAminoResponse|null) => void
  ): UnaryResponse;
}

