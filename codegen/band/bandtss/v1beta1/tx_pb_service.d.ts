// package: band.bandtss.v1beta1
// file: band/bandtss/v1beta1/tx.proto

import * as band_bandtss_v1beta1_tx_pb from "../../../band/bandtss/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgRequestSignature = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_bandtss_v1beta1_tx_pb.MsgRequestSignature;
  readonly responseType: typeof band_bandtss_v1beta1_tx_pb.MsgRequestSignatureResponse;
};

type MsgActivate = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_bandtss_v1beta1_tx_pb.MsgActivate;
  readonly responseType: typeof band_bandtss_v1beta1_tx_pb.MsgActivateResponse;
};

type MsgUpdateParams = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_bandtss_v1beta1_tx_pb.MsgUpdateParams;
  readonly responseType: typeof band_bandtss_v1beta1_tx_pb.MsgUpdateParamsResponse;
};

type MsgTransitionGroup = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_bandtss_v1beta1_tx_pb.MsgTransitionGroup;
  readonly responseType: typeof band_bandtss_v1beta1_tx_pb.MsgTransitionGroupResponse;
};

type MsgForceTransitionGroup = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_bandtss_v1beta1_tx_pb.MsgForceTransitionGroup;
  readonly responseType: typeof band_bandtss_v1beta1_tx_pb.MsgForceTransitionGroupResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly RequestSignature: MsgRequestSignature;
  static readonly Activate: MsgActivate;
  static readonly UpdateParams: MsgUpdateParams;
  static readonly TransitionGroup: MsgTransitionGroup;
  static readonly ForceTransitionGroup: MsgForceTransitionGroup;
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
  requestSignature(
    requestMessage: band_bandtss_v1beta1_tx_pb.MsgRequestSignature,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_tx_pb.MsgRequestSignatureResponse|null) => void
  ): UnaryResponse;
  requestSignature(
    requestMessage: band_bandtss_v1beta1_tx_pb.MsgRequestSignature,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_tx_pb.MsgRequestSignatureResponse|null) => void
  ): UnaryResponse;
  activate(
    requestMessage: band_bandtss_v1beta1_tx_pb.MsgActivate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_tx_pb.MsgActivateResponse|null) => void
  ): UnaryResponse;
  activate(
    requestMessage: band_bandtss_v1beta1_tx_pb.MsgActivate,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_tx_pb.MsgActivateResponse|null) => void
  ): UnaryResponse;
  updateParams(
    requestMessage: band_bandtss_v1beta1_tx_pb.MsgUpdateParams,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
  updateParams(
    requestMessage: band_bandtss_v1beta1_tx_pb.MsgUpdateParams,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
  transitionGroup(
    requestMessage: band_bandtss_v1beta1_tx_pb.MsgTransitionGroup,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_tx_pb.MsgTransitionGroupResponse|null) => void
  ): UnaryResponse;
  transitionGroup(
    requestMessage: band_bandtss_v1beta1_tx_pb.MsgTransitionGroup,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_tx_pb.MsgTransitionGroupResponse|null) => void
  ): UnaryResponse;
  forceTransitionGroup(
    requestMessage: band_bandtss_v1beta1_tx_pb.MsgForceTransitionGroup,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_tx_pb.MsgForceTransitionGroupResponse|null) => void
  ): UnaryResponse;
  forceTransitionGroup(
    requestMessage: band_bandtss_v1beta1_tx_pb.MsgForceTransitionGroup,
    callback: (error: ServiceError|null, responseMessage: band_bandtss_v1beta1_tx_pb.MsgForceTransitionGroupResponse|null) => void
  ): UnaryResponse;
}

