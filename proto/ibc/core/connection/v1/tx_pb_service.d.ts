// package: ibc.core.connection.v1
// file: ibc/core/connection/v1/tx.proto

import * as ibc_core_connection_v1_tx_pb from "../../../../ibc/core/connection/v1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgConnectionOpenInit = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit;
  readonly responseType: typeof ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse;
};

type MsgConnectionOpenTry = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry;
  readonly responseType: typeof ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse;
};

type MsgConnectionOpenAck = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck;
  readonly responseType: typeof ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse;
};

type MsgConnectionOpenConfirm = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm;
  readonly responseType: typeof ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly ConnectionOpenInit: MsgConnectionOpenInit;
  static readonly ConnectionOpenTry: MsgConnectionOpenTry;
  static readonly ConnectionOpenAck: MsgConnectionOpenAck;
  static readonly ConnectionOpenConfirm: MsgConnectionOpenConfirm;
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
  connectionOpenInit(
    requestMessage: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse|null) => void
  ): UnaryResponse;
  connectionOpenInit(
    requestMessage: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse|null) => void
  ): UnaryResponse;
  connectionOpenTry(
    requestMessage: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse|null) => void
  ): UnaryResponse;
  connectionOpenTry(
    requestMessage: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse|null) => void
  ): UnaryResponse;
  connectionOpenAck(
    requestMessage: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse|null) => void
  ): UnaryResponse;
  connectionOpenAck(
    requestMessage: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse|null) => void
  ): UnaryResponse;
  connectionOpenConfirm(
    requestMessage: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse|null) => void
  ): UnaryResponse;
  connectionOpenConfirm(
    requestMessage: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm,
    callback: (error: ServiceError|null, responseMessage: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse|null) => void
  ): UnaryResponse;
}

