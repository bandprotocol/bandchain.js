// package: ibc.core.channel.v1
// file: ibc/core/channel/v1/tx.proto

import * as ibc_core_channel_v1_tx_pb from "../../../../ibc/core/channel/v1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgChannelOpenInit = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgChannelOpenInit;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse;
};

type MsgChannelOpenTry = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgChannelOpenTry;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse;
};

type MsgChannelOpenAck = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgChannelOpenAck;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse;
};

type MsgChannelOpenConfirm = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse;
};

type MsgChannelCloseInit = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgChannelCloseInit;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse;
};

type MsgChannelCloseConfirm = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse;
};

type MsgRecvPacket = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgRecvPacket;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse;
};

type MsgTimeout = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgTimeout;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgTimeoutResponse;
};

type MsgTimeoutOnClose = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse;
};

type MsgAcknowledgement = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgAcknowledgement;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly ChannelOpenInit: MsgChannelOpenInit;
  static readonly ChannelOpenTry: MsgChannelOpenTry;
  static readonly ChannelOpenAck: MsgChannelOpenAck;
  static readonly ChannelOpenConfirm: MsgChannelOpenConfirm;
  static readonly ChannelCloseInit: MsgChannelCloseInit;
  static readonly ChannelCloseConfirm: MsgChannelCloseConfirm;
  static readonly RecvPacket: MsgRecvPacket;
  static readonly Timeout: MsgTimeout;
  static readonly TimeoutOnClose: MsgTimeoutOnClose;
  static readonly Acknowledgement: MsgAcknowledgement;
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
  channelOpenInit(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse|null) => void
  ): UnaryResponse;
  channelOpenInit(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse|null) => void
  ): UnaryResponse;
  channelOpenTry(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse|null) => void
  ): UnaryResponse;
  channelOpenTry(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse|null) => void
  ): UnaryResponse;
  channelOpenAck(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse|null) => void
  ): UnaryResponse;
  channelOpenAck(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse|null) => void
  ): UnaryResponse;
  channelOpenConfirm(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse|null) => void
  ): UnaryResponse;
  channelOpenConfirm(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse|null) => void
  ): UnaryResponse;
  channelCloseInit(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse|null) => void
  ): UnaryResponse;
  channelCloseInit(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse|null) => void
  ): UnaryResponse;
  channelCloseConfirm(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse|null) => void
  ): UnaryResponse;
  channelCloseConfirm(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse|null) => void
  ): UnaryResponse;
  recvPacket(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgRecvPacket,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse|null) => void
  ): UnaryResponse;
  recvPacket(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgRecvPacket,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse|null) => void
  ): UnaryResponse;
  timeout(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgTimeout,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgTimeoutResponse|null) => void
  ): UnaryResponse;
  timeout(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgTimeout,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgTimeoutResponse|null) => void
  ): UnaryResponse;
  timeoutOnClose(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse|null) => void
  ): UnaryResponse;
  timeoutOnClose(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse|null) => void
  ): UnaryResponse;
  acknowledgement(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgAcknowledgement,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse|null) => void
  ): UnaryResponse;
  acknowledgement(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgAcknowledgement,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse|null) => void
  ): UnaryResponse;
}

