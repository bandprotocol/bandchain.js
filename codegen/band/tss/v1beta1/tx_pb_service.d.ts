// package: band.tss.v1beta1
// file: band/tss/v1beta1/tx.proto

import * as band_tss_v1beta1_tx_pb from "../../../band/tss/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgSubmitDKGRound1 = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_tx_pb.MsgSubmitDKGRound1;
  readonly responseType: typeof band_tss_v1beta1_tx_pb.MsgSubmitDKGRound1Response;
};

type MsgSubmitDKGRound2 = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_tx_pb.MsgSubmitDKGRound2;
  readonly responseType: typeof band_tss_v1beta1_tx_pb.MsgSubmitDKGRound2Response;
};

type MsgComplain = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_tx_pb.MsgComplain;
  readonly responseType: typeof band_tss_v1beta1_tx_pb.MsgComplainResponse;
};

type MsgConfirm = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_tx_pb.MsgConfirm;
  readonly responseType: typeof band_tss_v1beta1_tx_pb.MsgConfirmResponse;
};

type MsgSubmitDEs = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_tx_pb.MsgSubmitDEs;
  readonly responseType: typeof band_tss_v1beta1_tx_pb.MsgSubmitDEsResponse;
};

type MsgResetDE = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_tx_pb.MsgResetDE;
  readonly responseType: typeof band_tss_v1beta1_tx_pb.MsgResetDEResponse;
};

type MsgSubmitSignature = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_tx_pb.MsgSubmitSignature;
  readonly responseType: typeof band_tss_v1beta1_tx_pb.MsgSubmitSignatureResponse;
};

type MsgUpdateParams = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tss_v1beta1_tx_pb.MsgUpdateParams;
  readonly responseType: typeof band_tss_v1beta1_tx_pb.MsgUpdateParamsResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly SubmitDKGRound1: MsgSubmitDKGRound1;
  static readonly SubmitDKGRound2: MsgSubmitDKGRound2;
  static readonly Complain: MsgComplain;
  static readonly Confirm: MsgConfirm;
  static readonly SubmitDEs: MsgSubmitDEs;
  static readonly ResetDE: MsgResetDE;
  static readonly SubmitSignature: MsgSubmitSignature;
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
  submitDKGRound1(
    requestMessage: band_tss_v1beta1_tx_pb.MsgSubmitDKGRound1,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_tx_pb.MsgSubmitDKGRound1Response|null) => void
  ): UnaryResponse;
  submitDKGRound1(
    requestMessage: band_tss_v1beta1_tx_pb.MsgSubmitDKGRound1,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_tx_pb.MsgSubmitDKGRound1Response|null) => void
  ): UnaryResponse;
  submitDKGRound2(
    requestMessage: band_tss_v1beta1_tx_pb.MsgSubmitDKGRound2,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_tx_pb.MsgSubmitDKGRound2Response|null) => void
  ): UnaryResponse;
  submitDKGRound2(
    requestMessage: band_tss_v1beta1_tx_pb.MsgSubmitDKGRound2,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_tx_pb.MsgSubmitDKGRound2Response|null) => void
  ): UnaryResponse;
  complain(
    requestMessage: band_tss_v1beta1_tx_pb.MsgComplain,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_tx_pb.MsgComplainResponse|null) => void
  ): UnaryResponse;
  complain(
    requestMessage: band_tss_v1beta1_tx_pb.MsgComplain,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_tx_pb.MsgComplainResponse|null) => void
  ): UnaryResponse;
  confirm(
    requestMessage: band_tss_v1beta1_tx_pb.MsgConfirm,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_tx_pb.MsgConfirmResponse|null) => void
  ): UnaryResponse;
  confirm(
    requestMessage: band_tss_v1beta1_tx_pb.MsgConfirm,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_tx_pb.MsgConfirmResponse|null) => void
  ): UnaryResponse;
  submitDEs(
    requestMessage: band_tss_v1beta1_tx_pb.MsgSubmitDEs,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_tx_pb.MsgSubmitDEsResponse|null) => void
  ): UnaryResponse;
  submitDEs(
    requestMessage: band_tss_v1beta1_tx_pb.MsgSubmitDEs,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_tx_pb.MsgSubmitDEsResponse|null) => void
  ): UnaryResponse;
  resetDE(
    requestMessage: band_tss_v1beta1_tx_pb.MsgResetDE,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_tx_pb.MsgResetDEResponse|null) => void
  ): UnaryResponse;
  resetDE(
    requestMessage: band_tss_v1beta1_tx_pb.MsgResetDE,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_tx_pb.MsgResetDEResponse|null) => void
  ): UnaryResponse;
  submitSignature(
    requestMessage: band_tss_v1beta1_tx_pb.MsgSubmitSignature,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_tx_pb.MsgSubmitSignatureResponse|null) => void
  ): UnaryResponse;
  submitSignature(
    requestMessage: band_tss_v1beta1_tx_pb.MsgSubmitSignature,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_tx_pb.MsgSubmitSignatureResponse|null) => void
  ): UnaryResponse;
  updateParams(
    requestMessage: band_tss_v1beta1_tx_pb.MsgUpdateParams,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
  updateParams(
    requestMessage: band_tss_v1beta1_tx_pb.MsgUpdateParams,
    callback: (error: ServiceError|null, responseMessage: band_tss_v1beta1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
}

