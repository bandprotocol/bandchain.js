// package: band.restake.v1beta1
// file: band/restake/v1beta1/tx.proto

import * as band_restake_v1beta1_tx_pb from "../../../band/restake/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgStake = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_restake_v1beta1_tx_pb.MsgStake;
  readonly responseType: typeof band_restake_v1beta1_tx_pb.MsgStakeResponse;
};

type MsgUnstake = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_restake_v1beta1_tx_pb.MsgUnstake;
  readonly responseType: typeof band_restake_v1beta1_tx_pb.MsgUnstakeResponse;
};

type MsgUpdateParams = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_restake_v1beta1_tx_pb.MsgUpdateParams;
  readonly responseType: typeof band_restake_v1beta1_tx_pb.MsgUpdateParamsResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly Stake: MsgStake;
  static readonly Unstake: MsgUnstake;
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
  stake(
    requestMessage: band_restake_v1beta1_tx_pb.MsgStake,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_tx_pb.MsgStakeResponse|null) => void
  ): UnaryResponse;
  stake(
    requestMessage: band_restake_v1beta1_tx_pb.MsgStake,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_tx_pb.MsgStakeResponse|null) => void
  ): UnaryResponse;
  unstake(
    requestMessage: band_restake_v1beta1_tx_pb.MsgUnstake,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_tx_pb.MsgUnstakeResponse|null) => void
  ): UnaryResponse;
  unstake(
    requestMessage: band_restake_v1beta1_tx_pb.MsgUnstake,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_tx_pb.MsgUnstakeResponse|null) => void
  ): UnaryResponse;
  updateParams(
    requestMessage: band_restake_v1beta1_tx_pb.MsgUpdateParams,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
  updateParams(
    requestMessage: band_restake_v1beta1_tx_pb.MsgUpdateParams,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
}

