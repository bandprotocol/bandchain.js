// package: tss.v1beta1
// file: tss/v1beta1/tx.proto

import * as tss_v1beta1_tx_pb from "../../tss/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgCreateGroup = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tss_v1beta1_tx_pb.MsgCreateGroup;
  readonly responseType: typeof tss_v1beta1_tx_pb.MsgCreateGroupResponse;
};

type MsgReplaceGroup = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tss_v1beta1_tx_pb.MsgReplaceGroup;
  readonly responseType: typeof tss_v1beta1_tx_pb.MsgReplaceGroupResponse;
};

type MsgUpdateGroupFee = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tss_v1beta1_tx_pb.MsgUpdateGroupFee;
  readonly responseType: typeof tss_v1beta1_tx_pb.MsgUpdateGroupFeeResponse;
};

type MsgSubmitDKGRound1 = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tss_v1beta1_tx_pb.MsgSubmitDKGRound1;
  readonly responseType: typeof tss_v1beta1_tx_pb.MsgSubmitDKGRound1Response;
};

type MsgSubmitDKGRound2 = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tss_v1beta1_tx_pb.MsgSubmitDKGRound2;
  readonly responseType: typeof tss_v1beta1_tx_pb.MsgSubmitDKGRound2Response;
};

type MsgComplain = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tss_v1beta1_tx_pb.MsgComplain;
  readonly responseType: typeof tss_v1beta1_tx_pb.MsgComplainResponse;
};

type MsgConfirm = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tss_v1beta1_tx_pb.MsgConfirm;
  readonly responseType: typeof tss_v1beta1_tx_pb.MsgConfirmResponse;
};

type MsgSubmitDEs = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tss_v1beta1_tx_pb.MsgSubmitDEs;
  readonly responseType: typeof tss_v1beta1_tx_pb.MsgSubmitDEsResponse;
};

type MsgRequestSignature = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tss_v1beta1_tx_pb.MsgRequestSignature;
  readonly responseType: typeof tss_v1beta1_tx_pb.MsgRequestSignatureResponse;
};

type MsgSubmitSignature = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tss_v1beta1_tx_pb.MsgSubmitSignature;
  readonly responseType: typeof tss_v1beta1_tx_pb.MsgSubmitSignatureResponse;
};

type MsgActivate = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tss_v1beta1_tx_pb.MsgActivate;
  readonly responseType: typeof tss_v1beta1_tx_pb.MsgActivateResponse;
};

type MsgActive = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tss_v1beta1_tx_pb.MsgActive;
  readonly responseType: typeof tss_v1beta1_tx_pb.MsgActiveResponse;
};

type MsgUpdateParams = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof tss_v1beta1_tx_pb.MsgUpdateParams;
  readonly responseType: typeof tss_v1beta1_tx_pb.MsgUpdateParamsResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly CreateGroup: MsgCreateGroup;
  static readonly ReplaceGroup: MsgReplaceGroup;
  static readonly UpdateGroupFee: MsgUpdateGroupFee;
  static readonly SubmitDKGRound1: MsgSubmitDKGRound1;
  static readonly SubmitDKGRound2: MsgSubmitDKGRound2;
  static readonly Complain: MsgComplain;
  static readonly Confirm: MsgConfirm;
  static readonly SubmitDEs: MsgSubmitDEs;
  static readonly RequestSignature: MsgRequestSignature;
  static readonly SubmitSignature: MsgSubmitSignature;
  static readonly Activate: MsgActivate;
  static readonly Active: MsgActive;
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
  createGroup(
    requestMessage: tss_v1beta1_tx_pb.MsgCreateGroup,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgCreateGroupResponse|null) => void
  ): UnaryResponse;
  createGroup(
    requestMessage: tss_v1beta1_tx_pb.MsgCreateGroup,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgCreateGroupResponse|null) => void
  ): UnaryResponse;
  replaceGroup(
    requestMessage: tss_v1beta1_tx_pb.MsgReplaceGroup,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgReplaceGroupResponse|null) => void
  ): UnaryResponse;
  replaceGroup(
    requestMessage: tss_v1beta1_tx_pb.MsgReplaceGroup,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgReplaceGroupResponse|null) => void
  ): UnaryResponse;
  updateGroupFee(
    requestMessage: tss_v1beta1_tx_pb.MsgUpdateGroupFee,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgUpdateGroupFeeResponse|null) => void
  ): UnaryResponse;
  updateGroupFee(
    requestMessage: tss_v1beta1_tx_pb.MsgUpdateGroupFee,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgUpdateGroupFeeResponse|null) => void
  ): UnaryResponse;
  submitDKGRound1(
    requestMessage: tss_v1beta1_tx_pb.MsgSubmitDKGRound1,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgSubmitDKGRound1Response|null) => void
  ): UnaryResponse;
  submitDKGRound1(
    requestMessage: tss_v1beta1_tx_pb.MsgSubmitDKGRound1,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgSubmitDKGRound1Response|null) => void
  ): UnaryResponse;
  submitDKGRound2(
    requestMessage: tss_v1beta1_tx_pb.MsgSubmitDKGRound2,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgSubmitDKGRound2Response|null) => void
  ): UnaryResponse;
  submitDKGRound2(
    requestMessage: tss_v1beta1_tx_pb.MsgSubmitDKGRound2,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgSubmitDKGRound2Response|null) => void
  ): UnaryResponse;
  complain(
    requestMessage: tss_v1beta1_tx_pb.MsgComplain,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgComplainResponse|null) => void
  ): UnaryResponse;
  complain(
    requestMessage: tss_v1beta1_tx_pb.MsgComplain,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgComplainResponse|null) => void
  ): UnaryResponse;
  confirm(
    requestMessage: tss_v1beta1_tx_pb.MsgConfirm,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgConfirmResponse|null) => void
  ): UnaryResponse;
  confirm(
    requestMessage: tss_v1beta1_tx_pb.MsgConfirm,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgConfirmResponse|null) => void
  ): UnaryResponse;
  submitDEs(
    requestMessage: tss_v1beta1_tx_pb.MsgSubmitDEs,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgSubmitDEsResponse|null) => void
  ): UnaryResponse;
  submitDEs(
    requestMessage: tss_v1beta1_tx_pb.MsgSubmitDEs,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgSubmitDEsResponse|null) => void
  ): UnaryResponse;
  requestSignature(
    requestMessage: tss_v1beta1_tx_pb.MsgRequestSignature,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgRequestSignatureResponse|null) => void
  ): UnaryResponse;
  requestSignature(
    requestMessage: tss_v1beta1_tx_pb.MsgRequestSignature,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgRequestSignatureResponse|null) => void
  ): UnaryResponse;
  submitSignature(
    requestMessage: tss_v1beta1_tx_pb.MsgSubmitSignature,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgSubmitSignatureResponse|null) => void
  ): UnaryResponse;
  submitSignature(
    requestMessage: tss_v1beta1_tx_pb.MsgSubmitSignature,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgSubmitSignatureResponse|null) => void
  ): UnaryResponse;
  activate(
    requestMessage: tss_v1beta1_tx_pb.MsgActivate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgActivateResponse|null) => void
  ): UnaryResponse;
  activate(
    requestMessage: tss_v1beta1_tx_pb.MsgActivate,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgActivateResponse|null) => void
  ): UnaryResponse;
  active(
    requestMessage: tss_v1beta1_tx_pb.MsgActive,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgActiveResponse|null) => void
  ): UnaryResponse;
  active(
    requestMessage: tss_v1beta1_tx_pb.MsgActive,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgActiveResponse|null) => void
  ): UnaryResponse;
  updateParams(
    requestMessage: tss_v1beta1_tx_pb.MsgUpdateParams,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
  updateParams(
    requestMessage: tss_v1beta1_tx_pb.MsgUpdateParams,
    callback: (error: ServiceError|null, responseMessage: tss_v1beta1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
}

