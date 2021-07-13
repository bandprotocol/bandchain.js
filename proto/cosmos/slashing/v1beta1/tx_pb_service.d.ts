// package: cosmos.slashing.v1beta1
// file: cosmos/slashing/v1beta1/tx.proto

import * as cosmos_slashing_v1beta1_tx_pb from "../../../cosmos/slashing/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgUnjail = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_slashing_v1beta1_tx_pb.MsgUnjail;
  readonly responseType: typeof cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly Unjail: MsgUnjail;
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
  unjail(
    requestMessage: cosmos_slashing_v1beta1_tx_pb.MsgUnjail,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse|null) => void
  ): UnaryResponse;
  unjail(
    requestMessage: cosmos_slashing_v1beta1_tx_pb.MsgUnjail,
    callback: (error: ServiceError|null, responseMessage: cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse|null) => void
  ): UnaryResponse;
}

