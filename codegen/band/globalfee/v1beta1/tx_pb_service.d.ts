// package: band.globalfee.v1beta1
// file: band/globalfee/v1beta1/tx.proto

import * as band_globalfee_v1beta1_tx_pb from "../../../band/globalfee/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgUpdateParams = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_globalfee_v1beta1_tx_pb.MsgUpdateParams;
  readonly responseType: typeof band_globalfee_v1beta1_tx_pb.MsgUpdateParamsResponse;
};

export class Msg {
  static readonly serviceName: string;
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
  updateParams(
    requestMessage: band_globalfee_v1beta1_tx_pb.MsgUpdateParams,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_globalfee_v1beta1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
  updateParams(
    requestMessage: band_globalfee_v1beta1_tx_pb.MsgUpdateParams,
    callback: (error: ServiceError|null, responseMessage: band_globalfee_v1beta1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
}

