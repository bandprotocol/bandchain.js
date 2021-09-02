// package: cosmos.gov.v1beta1
// file: cosmos/gov/v1beta1/tx.proto

import * as cosmos_gov_v1beta1_tx_pb from "../../../cosmos/gov/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgSubmitProposal = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal;
  readonly responseType: typeof cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse;
};

type MsgVote = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_gov_v1beta1_tx_pb.MsgVote;
  readonly responseType: typeof cosmos_gov_v1beta1_tx_pb.MsgVoteResponse;
};

type MsgVoteWeighted = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_gov_v1beta1_tx_pb.MsgVoteWeighted;
  readonly responseType: typeof cosmos_gov_v1beta1_tx_pb.MsgVoteWeightedResponse;
};

type MsgDeposit = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_gov_v1beta1_tx_pb.MsgDeposit;
  readonly responseType: typeof cosmos_gov_v1beta1_tx_pb.MsgDepositResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly SubmitProposal: MsgSubmitProposal;
  static readonly Vote: MsgVote;
  static readonly VoteWeighted: MsgVoteWeighted;
  static readonly Deposit: MsgDeposit;
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
    requestMessage: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse|null) => void
  ): UnaryResponse;
  submitProposal(
    requestMessage: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse|null) => void
  ): UnaryResponse;
  vote(
    requestMessage: cosmos_gov_v1beta1_tx_pb.MsgVote,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_tx_pb.MsgVoteResponse|null) => void
  ): UnaryResponse;
  vote(
    requestMessage: cosmos_gov_v1beta1_tx_pb.MsgVote,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_tx_pb.MsgVoteResponse|null) => void
  ): UnaryResponse;
  voteWeighted(
    requestMessage: cosmos_gov_v1beta1_tx_pb.MsgVoteWeighted,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_tx_pb.MsgVoteWeightedResponse|null) => void
  ): UnaryResponse;
  voteWeighted(
    requestMessage: cosmos_gov_v1beta1_tx_pb.MsgVoteWeighted,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_tx_pb.MsgVoteWeightedResponse|null) => void
  ): UnaryResponse;
  deposit(
    requestMessage: cosmos_gov_v1beta1_tx_pb.MsgDeposit,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_tx_pb.MsgDepositResponse|null) => void
  ): UnaryResponse;
  deposit(
    requestMessage: cosmos_gov_v1beta1_tx_pb.MsgDeposit,
    callback: (error: ServiceError|null, responseMessage: cosmos_gov_v1beta1_tx_pb.MsgDepositResponse|null) => void
  ): UnaryResponse;
}

