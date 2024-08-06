// package: feeds.v1beta1
// file: feeds/v1beta1/tx.proto

import * as feeds_v1beta1_tx_pb from "../../feeds/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgSubmitSignals = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof feeds_v1beta1_tx_pb.MsgSubmitSignals;
  readonly responseType: typeof feeds_v1beta1_tx_pb.MsgSubmitSignalsResponse;
};

type MsgSubmitSignalPrices = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof feeds_v1beta1_tx_pb.MsgSubmitSignalPrices;
  readonly responseType: typeof feeds_v1beta1_tx_pb.MsgSubmitSignalPricesResponse;
};

type MsgUpdateReferenceSourceConfig = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof feeds_v1beta1_tx_pb.MsgUpdateReferenceSourceConfig;
  readonly responseType: typeof feeds_v1beta1_tx_pb.MsgUpdateReferenceSourceConfigResponse;
};

type MsgUpdateParams = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof feeds_v1beta1_tx_pb.MsgUpdateParams;
  readonly responseType: typeof feeds_v1beta1_tx_pb.MsgUpdateParamsResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly SubmitSignals: MsgSubmitSignals;
  static readonly SubmitSignalPrices: MsgSubmitSignalPrices;
  static readonly UpdateReferenceSourceConfig: MsgUpdateReferenceSourceConfig;
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
  submitSignals(
    requestMessage: feeds_v1beta1_tx_pb.MsgSubmitSignals,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_tx_pb.MsgSubmitSignalsResponse|null) => void
  ): UnaryResponse;
  submitSignals(
    requestMessage: feeds_v1beta1_tx_pb.MsgSubmitSignals,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_tx_pb.MsgSubmitSignalsResponse|null) => void
  ): UnaryResponse;
  submitSignalPrices(
    requestMessage: feeds_v1beta1_tx_pb.MsgSubmitSignalPrices,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_tx_pb.MsgSubmitSignalPricesResponse|null) => void
  ): UnaryResponse;
  submitSignalPrices(
    requestMessage: feeds_v1beta1_tx_pb.MsgSubmitSignalPrices,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_tx_pb.MsgSubmitSignalPricesResponse|null) => void
  ): UnaryResponse;
  updateReferenceSourceConfig(
    requestMessage: feeds_v1beta1_tx_pb.MsgUpdateReferenceSourceConfig,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_tx_pb.MsgUpdateReferenceSourceConfigResponse|null) => void
  ): UnaryResponse;
  updateReferenceSourceConfig(
    requestMessage: feeds_v1beta1_tx_pb.MsgUpdateReferenceSourceConfig,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_tx_pb.MsgUpdateReferenceSourceConfigResponse|null) => void
  ): UnaryResponse;
  updateParams(
    requestMessage: feeds_v1beta1_tx_pb.MsgUpdateParams,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
  updateParams(
    requestMessage: feeds_v1beta1_tx_pb.MsgUpdateParams,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
}

