// package: cosmos.store.streaming.abci
// file: cosmos/store/streaming/abci/grpc.proto

import * as cosmos_store_streaming_abci_grpc_pb from "../../../../cosmos/store/streaming/abci/grpc_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ABCIListenerServiceListenFinalizeBlock = {
  readonly methodName: string;
  readonly service: typeof ABCIListenerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_store_streaming_abci_grpc_pb.ListenFinalizeBlockRequest;
  readonly responseType: typeof cosmos_store_streaming_abci_grpc_pb.ListenFinalizeBlockResponse;
};

type ABCIListenerServiceListenCommit = {
  readonly methodName: string;
  readonly service: typeof ABCIListenerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_store_streaming_abci_grpc_pb.ListenCommitRequest;
  readonly responseType: typeof cosmos_store_streaming_abci_grpc_pb.ListenCommitResponse;
};

export class ABCIListenerService {
  static readonly serviceName: string;
  static readonly ListenFinalizeBlock: ABCIListenerServiceListenFinalizeBlock;
  static readonly ListenCommit: ABCIListenerServiceListenCommit;
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

export class ABCIListenerServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listenFinalizeBlock(
    requestMessage: cosmos_store_streaming_abci_grpc_pb.ListenFinalizeBlockRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_store_streaming_abci_grpc_pb.ListenFinalizeBlockResponse|null) => void
  ): UnaryResponse;
  listenFinalizeBlock(
    requestMessage: cosmos_store_streaming_abci_grpc_pb.ListenFinalizeBlockRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_store_streaming_abci_grpc_pb.ListenFinalizeBlockResponse|null) => void
  ): UnaryResponse;
  listenCommit(
    requestMessage: cosmos_store_streaming_abci_grpc_pb.ListenCommitRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_store_streaming_abci_grpc_pb.ListenCommitResponse|null) => void
  ): UnaryResponse;
  listenCommit(
    requestMessage: cosmos_store_streaming_abci_grpc_pb.ListenCommitRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_store_streaming_abci_grpc_pb.ListenCommitResponse|null) => void
  ): UnaryResponse;
}

