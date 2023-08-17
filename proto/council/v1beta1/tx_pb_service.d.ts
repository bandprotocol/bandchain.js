// package: council.v1beta1
// file: council/v1beta1/tx.proto

import * as council_v1beta1_tx_pb from "../../council/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgSubmitProposal = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof council_v1beta1_tx_pb.MsgSubmitProposal;
  readonly responseType: typeof council_v1beta1_tx_pb.MsgSubmitProposalResponse;
};

type MsgExecLegacyContent = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof council_v1beta1_tx_pb.MsgExecLegacyContent;
  readonly responseType: typeof council_v1beta1_tx_pb.MsgExecLegacyContentResponse;
};

type MsgVote = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof council_v1beta1_tx_pb.MsgVote;
  readonly responseType: typeof council_v1beta1_tx_pb.MsgVoteResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly SubmitProposal: MsgSubmitProposal;
  static readonly ExecLegacyContent: MsgExecLegacyContent;
  static readonly Vote: MsgVote;
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
  submitProposal(
    requestMessage: council_v1beta1_tx_pb.MsgSubmitProposal,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_tx_pb.MsgSubmitProposalResponse|null) => void
  ): UnaryResponse;
  submitProposal(
    requestMessage: council_v1beta1_tx_pb.MsgSubmitProposal,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_tx_pb.MsgSubmitProposalResponse|null) => void
  ): UnaryResponse;
  execLegacyContent(
    requestMessage: council_v1beta1_tx_pb.MsgExecLegacyContent,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_tx_pb.MsgExecLegacyContentResponse|null) => void
  ): UnaryResponse;
  execLegacyContent(
    requestMessage: council_v1beta1_tx_pb.MsgExecLegacyContent,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_tx_pb.MsgExecLegacyContentResponse|null) => void
  ): UnaryResponse;
  vote(
    requestMessage: council_v1beta1_tx_pb.MsgVote,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_tx_pb.MsgVoteResponse|null) => void
  ): UnaryResponse;
  vote(
    requestMessage: council_v1beta1_tx_pb.MsgVote,
    callback: (error: ServiceError|null, responseMessage: council_v1beta1_tx_pb.MsgVoteResponse|null) => void
  ): UnaryResponse;
}

