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

type MsgChannelUpgradeInit = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgChannelUpgradeInit;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgChannelUpgradeInitResponse;
};

type MsgChannelUpgradeTry = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgChannelUpgradeTry;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgChannelUpgradeTryResponse;
};

type MsgChannelUpgradeAck = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgChannelUpgradeAck;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgChannelUpgradeAckResponse;
};

type MsgChannelUpgradeConfirm = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgChannelUpgradeConfirm;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgChannelUpgradeConfirmResponse;
};

type MsgChannelUpgradeOpen = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgChannelUpgradeOpen;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgChannelUpgradeOpenResponse;
};

type MsgChannelUpgradeTimeout = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgChannelUpgradeTimeout;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgChannelUpgradeTimeoutResponse;
};

type MsgChannelUpgradeCancel = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgChannelUpgradeCancel;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgChannelUpgradeCancelResponse;
};

type MsgUpdateChannelParams = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgUpdateParams;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgUpdateParamsResponse;
};

type MsgPruneAcknowledgements = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_tx_pb.MsgPruneAcknowledgements;
  readonly responseType: typeof ibc_core_channel_v1_tx_pb.MsgPruneAcknowledgementsResponse;
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
  static readonly ChannelUpgradeInit: MsgChannelUpgradeInit;
  static readonly ChannelUpgradeTry: MsgChannelUpgradeTry;
  static readonly ChannelUpgradeAck: MsgChannelUpgradeAck;
  static readonly ChannelUpgradeConfirm: MsgChannelUpgradeConfirm;
  static readonly ChannelUpgradeOpen: MsgChannelUpgradeOpen;
  static readonly ChannelUpgradeTimeout: MsgChannelUpgradeTimeout;
  static readonly ChannelUpgradeCancel: MsgChannelUpgradeCancel;
  static readonly UpdateChannelParams: MsgUpdateChannelParams;
  static readonly PruneAcknowledgements: MsgPruneAcknowledgements;
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
  channelUpgradeInit(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeInit,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeInitResponse|null) => void
  ): UnaryResponse;
  channelUpgradeInit(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeInit,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeInitResponse|null) => void
  ): UnaryResponse;
  channelUpgradeTry(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeTry,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeTryResponse|null) => void
  ): UnaryResponse;
  channelUpgradeTry(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeTry,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeTryResponse|null) => void
  ): UnaryResponse;
  channelUpgradeAck(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeAck,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeAckResponse|null) => void
  ): UnaryResponse;
  channelUpgradeAck(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeAck,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeAckResponse|null) => void
  ): UnaryResponse;
  channelUpgradeConfirm(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeConfirm,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeConfirmResponse|null) => void
  ): UnaryResponse;
  channelUpgradeConfirm(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeConfirm,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeConfirmResponse|null) => void
  ): UnaryResponse;
  channelUpgradeOpen(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeOpen,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeOpenResponse|null) => void
  ): UnaryResponse;
  channelUpgradeOpen(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeOpen,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeOpenResponse|null) => void
  ): UnaryResponse;
  channelUpgradeTimeout(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeTimeout,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeTimeoutResponse|null) => void
  ): UnaryResponse;
  channelUpgradeTimeout(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeTimeout,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeTimeoutResponse|null) => void
  ): UnaryResponse;
  channelUpgradeCancel(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeCancel,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeCancelResponse|null) => void
  ): UnaryResponse;
  channelUpgradeCancel(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeCancel,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgChannelUpgradeCancelResponse|null) => void
  ): UnaryResponse;
  updateChannelParams(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgUpdateParams,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
  updateChannelParams(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgUpdateParams,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
  pruneAcknowledgements(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgPruneAcknowledgements,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgPruneAcknowledgementsResponse|null) => void
  ): UnaryResponse;
  pruneAcknowledgements(
    requestMessage: ibc_core_channel_v1_tx_pb.MsgPruneAcknowledgements,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_tx_pb.MsgPruneAcknowledgementsResponse|null) => void
  ): UnaryResponse;
}

