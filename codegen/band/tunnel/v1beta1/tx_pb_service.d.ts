// package: band.tunnel.v1beta1
// file: band/tunnel/v1beta1/tx.proto

import * as band_tunnel_v1beta1_tx_pb from "../../../band/tunnel/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgCreateTunnel = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_tx_pb.MsgCreateTunnel;
  readonly responseType: typeof band_tunnel_v1beta1_tx_pb.MsgCreateTunnelResponse;
};

type MsgUpdateRoute = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_tx_pb.MsgUpdateRoute;
  readonly responseType: typeof band_tunnel_v1beta1_tx_pb.MsgUpdateRouteResponse;
};

type MsgUpdateSignalsAndInterval = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_tx_pb.MsgUpdateSignalsAndInterval;
  readonly responseType: typeof band_tunnel_v1beta1_tx_pb.MsgUpdateSignalsAndIntervalResponse;
};

type MsgWithdrawFeePayerFunds = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_tx_pb.MsgWithdrawFeePayerFunds;
  readonly responseType: typeof band_tunnel_v1beta1_tx_pb.MsgWithdrawFeePayerFundsResponse;
};

type MsgActivateTunnel = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_tx_pb.MsgActivateTunnel;
  readonly responseType: typeof band_tunnel_v1beta1_tx_pb.MsgActivateTunnelResponse;
};

type MsgDeactivateTunnel = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_tx_pb.MsgDeactivateTunnel;
  readonly responseType: typeof band_tunnel_v1beta1_tx_pb.MsgDeactivateTunnelResponse;
};

type MsgTriggerTunnel = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_tx_pb.MsgTriggerTunnel;
  readonly responseType: typeof band_tunnel_v1beta1_tx_pb.MsgTriggerTunnelResponse;
};

type MsgDepositToTunnel = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_tx_pb.MsgDepositToTunnel;
  readonly responseType: typeof band_tunnel_v1beta1_tx_pb.MsgDepositToTunnelResponse;
};

type MsgWithdrawFromTunnel = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_tx_pb.MsgWithdrawFromTunnel;
  readonly responseType: typeof band_tunnel_v1beta1_tx_pb.MsgWithdrawFromTunnelResponse;
};

type MsgUpdateParams = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_tx_pb.MsgUpdateParams;
  readonly responseType: typeof band_tunnel_v1beta1_tx_pb.MsgUpdateParamsResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly CreateTunnel: MsgCreateTunnel;
  static readonly UpdateRoute: MsgUpdateRoute;
  static readonly UpdateSignalsAndInterval: MsgUpdateSignalsAndInterval;
  static readonly WithdrawFeePayerFunds: MsgWithdrawFeePayerFunds;
  static readonly ActivateTunnel: MsgActivateTunnel;
  static readonly DeactivateTunnel: MsgDeactivateTunnel;
  static readonly TriggerTunnel: MsgTriggerTunnel;
  static readonly DepositToTunnel: MsgDepositToTunnel;
  static readonly WithdrawFromTunnel: MsgWithdrawFromTunnel;
  static readonly UpdateParams: MsgUpdateParams;
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
  createTunnel(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgCreateTunnel,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgCreateTunnelResponse|null) => void
  ): UnaryResponse;
  createTunnel(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgCreateTunnel,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgCreateTunnelResponse|null) => void
  ): UnaryResponse;
  updateRoute(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgUpdateRoute,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgUpdateRouteResponse|null) => void
  ): UnaryResponse;
  updateRoute(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgUpdateRoute,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgUpdateRouteResponse|null) => void
  ): UnaryResponse;
  updateSignalsAndInterval(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgUpdateSignalsAndInterval,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgUpdateSignalsAndIntervalResponse|null) => void
  ): UnaryResponse;
  updateSignalsAndInterval(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgUpdateSignalsAndInterval,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgUpdateSignalsAndIntervalResponse|null) => void
  ): UnaryResponse;
  withdrawFeePayerFunds(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgWithdrawFeePayerFunds,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgWithdrawFeePayerFundsResponse|null) => void
  ): UnaryResponse;
  withdrawFeePayerFunds(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgWithdrawFeePayerFunds,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgWithdrawFeePayerFundsResponse|null) => void
  ): UnaryResponse;
  activateTunnel(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgActivateTunnel,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgActivateTunnelResponse|null) => void
  ): UnaryResponse;
  activateTunnel(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgActivateTunnel,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgActivateTunnelResponse|null) => void
  ): UnaryResponse;
  deactivateTunnel(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgDeactivateTunnel,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgDeactivateTunnelResponse|null) => void
  ): UnaryResponse;
  deactivateTunnel(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgDeactivateTunnel,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgDeactivateTunnelResponse|null) => void
  ): UnaryResponse;
  triggerTunnel(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgTriggerTunnel,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgTriggerTunnelResponse|null) => void
  ): UnaryResponse;
  triggerTunnel(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgTriggerTunnel,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgTriggerTunnelResponse|null) => void
  ): UnaryResponse;
  depositToTunnel(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgDepositToTunnel,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgDepositToTunnelResponse|null) => void
  ): UnaryResponse;
  depositToTunnel(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgDepositToTunnel,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgDepositToTunnelResponse|null) => void
  ): UnaryResponse;
  withdrawFromTunnel(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgWithdrawFromTunnel,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgWithdrawFromTunnelResponse|null) => void
  ): UnaryResponse;
  withdrawFromTunnel(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgWithdrawFromTunnel,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgWithdrawFromTunnelResponse|null) => void
  ): UnaryResponse;
  updateParams(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgUpdateParams,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
  updateParams(
    requestMessage: band_tunnel_v1beta1_tx_pb.MsgUpdateParams,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
}

