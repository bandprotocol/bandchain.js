// package: tendermint.abci
// file: tendermint/abci/types.proto

import * as tendermint_abci_types_pb from "../../tendermint/abci/types_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ABCIApplicationEcho = {
  readonly methodName: string;
  readonly service: typeof ABCIApplication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestEcho;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseEcho;
};

type ABCIApplicationFlush = {
  readonly methodName: string;
  readonly service: typeof ABCIApplication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestFlush;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseFlush;
};

type ABCIApplicationInfo = {
  readonly methodName: string;
  readonly service: typeof ABCIApplication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestInfo;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseInfo;
};

type ABCIApplicationSetOption = {
  readonly methodName: string;
  readonly service: typeof ABCIApplication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestSetOption;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseSetOption;
};

type ABCIApplicationDeliverTx = {
  readonly methodName: string;
  readonly service: typeof ABCIApplication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestDeliverTx;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseDeliverTx;
};

type ABCIApplicationCheckTx = {
  readonly methodName: string;
  readonly service: typeof ABCIApplication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestCheckTx;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseCheckTx;
};

type ABCIApplicationQuery = {
  readonly methodName: string;
  readonly service: typeof ABCIApplication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestQuery;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseQuery;
};

type ABCIApplicationCommit = {
  readonly methodName: string;
  readonly service: typeof ABCIApplication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestCommit;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseCommit;
};

type ABCIApplicationInitChain = {
  readonly methodName: string;
  readonly service: typeof ABCIApplication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestInitChain;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseInitChain;
};

type ABCIApplicationBeginBlock = {
  readonly methodName: string;
  readonly service: typeof ABCIApplication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestBeginBlock;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseBeginBlock;
};

type ABCIApplicationEndBlock = {
  readonly methodName: string;
  readonly service: typeof ABCIApplication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestEndBlock;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseEndBlock;
};

type ABCIApplicationListSnapshots = {
  readonly methodName: string;
  readonly service: typeof ABCIApplication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestListSnapshots;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseListSnapshots;
};

type ABCIApplicationOfferSnapshot = {
  readonly methodName: string;
  readonly service: typeof ABCIApplication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestOfferSnapshot;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseOfferSnapshot;
};

type ABCIApplicationLoadSnapshotChunk = {
  readonly methodName: string;
  readonly service: typeof ABCIApplication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestLoadSnapshotChunk;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseLoadSnapshotChunk;
};

type ABCIApplicationApplySnapshotChunk = {
  readonly methodName: string;
  readonly service: typeof ABCIApplication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestApplySnapshotChunk;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseApplySnapshotChunk;
};

export class ABCIApplication {
  static readonly serviceName: string;
  static readonly Echo: ABCIApplicationEcho;
  static readonly Flush: ABCIApplicationFlush;
  static readonly Info: ABCIApplicationInfo;
  static readonly SetOption: ABCIApplicationSetOption;
  static readonly DeliverTx: ABCIApplicationDeliverTx;
  static readonly CheckTx: ABCIApplicationCheckTx;
  static readonly Query: ABCIApplicationQuery;
  static readonly Commit: ABCIApplicationCommit;
  static readonly InitChain: ABCIApplicationInitChain;
  static readonly BeginBlock: ABCIApplicationBeginBlock;
  static readonly EndBlock: ABCIApplicationEndBlock;
  static readonly ListSnapshots: ABCIApplicationListSnapshots;
  static readonly OfferSnapshot: ABCIApplicationOfferSnapshot;
  static readonly LoadSnapshotChunk: ABCIApplicationLoadSnapshotChunk;
  static readonly ApplySnapshotChunk: ABCIApplicationApplySnapshotChunk;
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

export class ABCIApplicationClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  echo(
    requestMessage: tendermint_abci_types_pb.RequestEcho,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseEcho|null) => void
  ): UnaryResponse;
  echo(
    requestMessage: tendermint_abci_types_pb.RequestEcho,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseEcho|null) => void
  ): UnaryResponse;
  flush(
    requestMessage: tendermint_abci_types_pb.RequestFlush,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseFlush|null) => void
  ): UnaryResponse;
  flush(
    requestMessage: tendermint_abci_types_pb.RequestFlush,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseFlush|null) => void
  ): UnaryResponse;
  info(
    requestMessage: tendermint_abci_types_pb.RequestInfo,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseInfo|null) => void
  ): UnaryResponse;
  info(
    requestMessage: tendermint_abci_types_pb.RequestInfo,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseInfo|null) => void
  ): UnaryResponse;
  setOption(
    requestMessage: tendermint_abci_types_pb.RequestSetOption,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseSetOption|null) => void
  ): UnaryResponse;
  setOption(
    requestMessage: tendermint_abci_types_pb.RequestSetOption,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseSetOption|null) => void
  ): UnaryResponse;
  deliverTx(
    requestMessage: tendermint_abci_types_pb.RequestDeliverTx,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseDeliverTx|null) => void
  ): UnaryResponse;
  deliverTx(
    requestMessage: tendermint_abci_types_pb.RequestDeliverTx,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseDeliverTx|null) => void
  ): UnaryResponse;
  checkTx(
    requestMessage: tendermint_abci_types_pb.RequestCheckTx,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseCheckTx|null) => void
  ): UnaryResponse;
  checkTx(
    requestMessage: tendermint_abci_types_pb.RequestCheckTx,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseCheckTx|null) => void
  ): UnaryResponse;
  query(
    requestMessage: tendermint_abci_types_pb.RequestQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseQuery|null) => void
  ): UnaryResponse;
  query(
    requestMessage: tendermint_abci_types_pb.RequestQuery,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseQuery|null) => void
  ): UnaryResponse;
  commit(
    requestMessage: tendermint_abci_types_pb.RequestCommit,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseCommit|null) => void
  ): UnaryResponse;
  commit(
    requestMessage: tendermint_abci_types_pb.RequestCommit,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseCommit|null) => void
  ): UnaryResponse;
  initChain(
    requestMessage: tendermint_abci_types_pb.RequestInitChain,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseInitChain|null) => void
  ): UnaryResponse;
  initChain(
    requestMessage: tendermint_abci_types_pb.RequestInitChain,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseInitChain|null) => void
  ): UnaryResponse;
  beginBlock(
    requestMessage: tendermint_abci_types_pb.RequestBeginBlock,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseBeginBlock|null) => void
  ): UnaryResponse;
  beginBlock(
    requestMessage: tendermint_abci_types_pb.RequestBeginBlock,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseBeginBlock|null) => void
  ): UnaryResponse;
  endBlock(
    requestMessage: tendermint_abci_types_pb.RequestEndBlock,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseEndBlock|null) => void
  ): UnaryResponse;
  endBlock(
    requestMessage: tendermint_abci_types_pb.RequestEndBlock,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseEndBlock|null) => void
  ): UnaryResponse;
  listSnapshots(
    requestMessage: tendermint_abci_types_pb.RequestListSnapshots,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseListSnapshots|null) => void
  ): UnaryResponse;
  listSnapshots(
    requestMessage: tendermint_abci_types_pb.RequestListSnapshots,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseListSnapshots|null) => void
  ): UnaryResponse;
  offerSnapshot(
    requestMessage: tendermint_abci_types_pb.RequestOfferSnapshot,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseOfferSnapshot|null) => void
  ): UnaryResponse;
  offerSnapshot(
    requestMessage: tendermint_abci_types_pb.RequestOfferSnapshot,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseOfferSnapshot|null) => void
  ): UnaryResponse;
  loadSnapshotChunk(
    requestMessage: tendermint_abci_types_pb.RequestLoadSnapshotChunk,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseLoadSnapshotChunk|null) => void
  ): UnaryResponse;
  loadSnapshotChunk(
    requestMessage: tendermint_abci_types_pb.RequestLoadSnapshotChunk,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseLoadSnapshotChunk|null) => void
  ): UnaryResponse;
  applySnapshotChunk(
    requestMessage: tendermint_abci_types_pb.RequestApplySnapshotChunk,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseApplySnapshotChunk|null) => void
  ): UnaryResponse;
  applySnapshotChunk(
    requestMessage: tendermint_abci_types_pb.RequestApplySnapshotChunk,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseApplySnapshotChunk|null) => void
  ): UnaryResponse;
}

