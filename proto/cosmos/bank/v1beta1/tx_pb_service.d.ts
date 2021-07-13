// package: cosmos.bank.v1beta1
// file: cosmos/bank/v1beta1/tx.proto

import * as cosmos_bank_v1beta1_tx_pb from "../../../cosmos/bank/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgSend = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_bank_v1beta1_tx_pb.MsgSend;
  readonly responseType: typeof cosmos_bank_v1beta1_tx_pb.MsgSendResponse;
};

type MsgMultiSend = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_bank_v1beta1_tx_pb.MsgMultiSend;
  readonly responseType: typeof cosmos_bank_v1beta1_tx_pb.MsgMultiSendResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly Send: MsgSend;
  static readonly MultiSend: MsgMultiSend;
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
  send(
    requestMessage: cosmos_bank_v1beta1_tx_pb.MsgSend,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_bank_v1beta1_tx_pb.MsgSendResponse|null) => void
  ): UnaryResponse;
  send(
    requestMessage: cosmos_bank_v1beta1_tx_pb.MsgSend,
    callback: (error: ServiceError|null, responseMessage: cosmos_bank_v1beta1_tx_pb.MsgSendResponse|null) => void
  ): UnaryResponse;
  multiSend(
    requestMessage: cosmos_bank_v1beta1_tx_pb.MsgMultiSend,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_bank_v1beta1_tx_pb.MsgMultiSendResponse|null) => void
  ): UnaryResponse;
  multiSend(
    requestMessage: cosmos_bank_v1beta1_tx_pb.MsgMultiSend,
    callback: (error: ServiceError|null, responseMessage: cosmos_bank_v1beta1_tx_pb.MsgMultiSendResponse|null) => void
  ): UnaryResponse;
}

