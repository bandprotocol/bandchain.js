// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/tx.proto

import * as ibc_applications_transfer_v1_tx_pb from "../../../../ibc/applications/transfer/v1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgTransfer = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_transfer_v1_tx_pb.MsgTransfer;
  readonly responseType: typeof ibc_applications_transfer_v1_tx_pb.MsgTransferResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly Transfer: MsgTransfer;
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
  transfer(
    requestMessage: ibc_applications_transfer_v1_tx_pb.MsgTransfer,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse|null) => void
  ): UnaryResponse;
  transfer(
    requestMessage: ibc_applications_transfer_v1_tx_pb.MsgTransfer,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse|null) => void
  ): UnaryResponse;
}

