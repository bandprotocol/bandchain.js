// package: tendermint.abci
// file: tendermint/abci/types.proto

import * as tendermint_abci_types_pb from "../../tendermint/abci/types_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ABCIEcho = {
  readonly methodName: string;
  readonly service: typeof ABCI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestEcho;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseEcho;
};

type ABCIFlush = {
  readonly methodName: string;
  readonly service: typeof ABCI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestFlush;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseFlush;
};

type ABCIInfo = {
  readonly methodName: string;
  readonly service: typeof ABCI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestInfo;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseInfo;
};

type ABCICheckTx = {
  readonly methodName: string;
  readonly service: typeof ABCI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestCheckTx;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseCheckTx;
};

type ABCIQuery = {
  readonly methodName: string;
  readonly service: typeof ABCI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestQuery;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseQuery;
};

type ABCICommit = {
  readonly methodName: string;
  readonly service: typeof ABCI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestCommit;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseCommit;
};

type ABCIInitChain = {
  readonly methodName: string;
  readonly service: typeof ABCI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestInitChain;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseInitChain;
};

type ABCIListSnapshots = {
  readonly methodName: string;
  readonly service: typeof ABCI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestListSnapshots;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseListSnapshots;
};

type ABCIOfferSnapshot = {
  readonly methodName: string;
  readonly service: typeof ABCI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestOfferSnapshot;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseOfferSnapshot;
};

type ABCILoadSnapshotChunk = {
  readonly methodName: string;
  readonly service: typeof ABCI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestLoadSnapshotChunk;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseLoadSnapshotChunk;
};

type ABCIApplySnapshotChunk = {
  readonly methodName: string;
  readonly service: typeof ABCI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestApplySnapshotChunk;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseApplySnapshotChunk;
};

type ABCIPrepareProposal = {
  readonly methodName: string;
  readonly service: typeof ABCI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestPrepareProposal;
  readonly responseType: typeof tendermint_abci_types_pb.ResponsePrepareProposal;
};

type ABCIProcessProposal = {
  readonly methodName: string;
  readonly service: typeof ABCI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestProcessProposal;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseProcessProposal;
};

type ABCIExtendVote = {
  readonly methodName: string;
  readonly service: typeof ABCI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestExtendVote;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseExtendVote;
};

type ABCIVerifyVoteExtension = {
  readonly methodName: string;
  readonly service: typeof ABCI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestVerifyVoteExtension;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseVerifyVoteExtension;
};

type ABCIFinalizeBlock = {
  readonly methodName: string;
  readonly service: typeof ABCI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tendermint_abci_types_pb.RequestFinalizeBlock;
  readonly responseType: typeof tendermint_abci_types_pb.ResponseFinalizeBlock;
};

export class ABCI {
  static readonly serviceName: string;
  static readonly Echo: ABCIEcho;
  static readonly Flush: ABCIFlush;
  static readonly Info: ABCIInfo;
  static readonly CheckTx: ABCICheckTx;
  static readonly Query: ABCIQuery;
  static readonly Commit: ABCICommit;
  static readonly InitChain: ABCIInitChain;
  static readonly ListSnapshots: ABCIListSnapshots;
  static readonly OfferSnapshot: ABCIOfferSnapshot;
  static readonly LoadSnapshotChunk: ABCILoadSnapshotChunk;
  static readonly ApplySnapshotChunk: ABCIApplySnapshotChunk;
  static readonly PrepareProposal: ABCIPrepareProposal;
  static readonly ProcessProposal: ABCIProcessProposal;
  static readonly ExtendVote: ABCIExtendVote;
  static readonly VerifyVoteExtension: ABCIVerifyVoteExtension;
  static readonly FinalizeBlock: ABCIFinalizeBlock;
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

export class ABCIClient {
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
  prepareProposal(
    requestMessage: tendermint_abci_types_pb.RequestPrepareProposal,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponsePrepareProposal|null) => void
  ): UnaryResponse;
  prepareProposal(
    requestMessage: tendermint_abci_types_pb.RequestPrepareProposal,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponsePrepareProposal|null) => void
  ): UnaryResponse;
  processProposal(
    requestMessage: tendermint_abci_types_pb.RequestProcessProposal,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseProcessProposal|null) => void
  ): UnaryResponse;
  processProposal(
    requestMessage: tendermint_abci_types_pb.RequestProcessProposal,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseProcessProposal|null) => void
  ): UnaryResponse;
  extendVote(
    requestMessage: tendermint_abci_types_pb.RequestExtendVote,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseExtendVote|null) => void
  ): UnaryResponse;
  extendVote(
    requestMessage: tendermint_abci_types_pb.RequestExtendVote,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseExtendVote|null) => void
  ): UnaryResponse;
  verifyVoteExtension(
    requestMessage: tendermint_abci_types_pb.RequestVerifyVoteExtension,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseVerifyVoteExtension|null) => void
  ): UnaryResponse;
  verifyVoteExtension(
    requestMessage: tendermint_abci_types_pb.RequestVerifyVoteExtension,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseVerifyVoteExtension|null) => void
  ): UnaryResponse;
  finalizeBlock(
    requestMessage: tendermint_abci_types_pb.RequestFinalizeBlock,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseFinalizeBlock|null) => void
  ): UnaryResponse;
  finalizeBlock(
    requestMessage: tendermint_abci_types_pb.RequestFinalizeBlock,
    callback: (error: ServiceError|null, responseMessage: tendermint_abci_types_pb.ResponseFinalizeBlock|null) => void
  ): UnaryResponse;
}

