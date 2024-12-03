// package: ibc.applications.fee.v1
// file: ibc/applications/fee/v1/tx.proto

import * as ibc_applications_fee_v1_tx_pb from "../../../../ibc/applications/fee/v1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgRegisterPayee = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_fee_v1_tx_pb.MsgRegisterPayee;
  readonly responseType: typeof ibc_applications_fee_v1_tx_pb.MsgRegisterPayeeResponse;
};

type MsgRegisterCounterpartyPayee = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyPayee;
  readonly responseType: typeof ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyPayeeResponse;
};

type MsgPayPacketFee = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_fee_v1_tx_pb.MsgPayPacketFee;
  readonly responseType: typeof ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeResponse;
};

type MsgPayPacketFeeAsync = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsync;
  readonly responseType: typeof ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsyncResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly RegisterPayee: MsgRegisterPayee;
  static readonly RegisterCounterpartyPayee: MsgRegisterCounterpartyPayee;
  static readonly PayPacketFee: MsgPayPacketFee;
  static readonly PayPacketFeeAsync: MsgPayPacketFeeAsync;
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
  registerPayee(
    requestMessage: ibc_applications_fee_v1_tx_pb.MsgRegisterPayee,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_tx_pb.MsgRegisterPayeeResponse|null) => void
  ): UnaryResponse;
  registerPayee(
    requestMessage: ibc_applications_fee_v1_tx_pb.MsgRegisterPayee,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_tx_pb.MsgRegisterPayeeResponse|null) => void
  ): UnaryResponse;
  registerCounterpartyPayee(
    requestMessage: ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyPayee,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyPayeeResponse|null) => void
  ): UnaryResponse;
  registerCounterpartyPayee(
    requestMessage: ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyPayee,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyPayeeResponse|null) => void
  ): UnaryResponse;
  payPacketFee(
    requestMessage: ibc_applications_fee_v1_tx_pb.MsgPayPacketFee,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeResponse|null) => void
  ): UnaryResponse;
  payPacketFee(
    requestMessage: ibc_applications_fee_v1_tx_pb.MsgPayPacketFee,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeResponse|null) => void
  ): UnaryResponse;
  payPacketFeeAsync(
    requestMessage: ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsync,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsyncResponse|null) => void
  ): UnaryResponse;
  payPacketFeeAsync(
    requestMessage: ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsync,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsyncResponse|null) => void
  ): UnaryResponse;
}

