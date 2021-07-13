// package: cosmos.crisis.v1beta1
// file: cosmos/crisis/v1beta1/tx.proto

import * as cosmos_crisis_v1beta1_tx_pb from "../../../cosmos/crisis/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgVerifyInvariant = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant;
  readonly responseType: typeof cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly VerifyInvariant: MsgVerifyInvariant;
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
  verifyInvariant(
    requestMessage: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse|null) => void
  ): UnaryResponse;
  verifyInvariant(
    requestMessage: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant,
    callback: (error: ServiceError|null, responseMessage: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse|null) => void
  ): UnaryResponse;
}

