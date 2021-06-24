// package: cosmos.staking.v1beta1
// file: cosmos/staking/v1beta1/tx.proto

import * as cosmos_staking_v1beta1_tx_pb from "../../../cosmos/staking/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgCreateValidator = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_tx_pb.MsgCreateValidator;
  readonly responseType: typeof cosmos_staking_v1beta1_tx_pb.MsgCreateValidatorResponse;
};

type MsgEditValidator = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_tx_pb.MsgEditValidator;
  readonly responseType: typeof cosmos_staking_v1beta1_tx_pb.MsgEditValidatorResponse;
};

type MsgDelegate = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_tx_pb.MsgDelegate;
  readonly responseType: typeof cosmos_staking_v1beta1_tx_pb.MsgDelegateResponse;
};

type MsgBeginRedelegate = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegate;
  readonly responseType: typeof cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegateResponse;
};

type MsgUndelegate = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_tx_pb.MsgUndelegate;
  readonly responseType: typeof cosmos_staking_v1beta1_tx_pb.MsgUndelegateResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly CreateValidator: MsgCreateValidator;
  static readonly EditValidator: MsgEditValidator;
  static readonly Delegate: MsgDelegate;
  static readonly BeginRedelegate: MsgBeginRedelegate;
  static readonly Undelegate: MsgUndelegate;
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
  createValidator(
    requestMessage: cosmos_staking_v1beta1_tx_pb.MsgCreateValidator,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_tx_pb.MsgCreateValidatorResponse|null) => void
  ): UnaryResponse;
  createValidator(
    requestMessage: cosmos_staking_v1beta1_tx_pb.MsgCreateValidator,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_tx_pb.MsgCreateValidatorResponse|null) => void
  ): UnaryResponse;
  editValidator(
    requestMessage: cosmos_staking_v1beta1_tx_pb.MsgEditValidator,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_tx_pb.MsgEditValidatorResponse|null) => void
  ): UnaryResponse;
  editValidator(
    requestMessage: cosmos_staking_v1beta1_tx_pb.MsgEditValidator,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_tx_pb.MsgEditValidatorResponse|null) => void
  ): UnaryResponse;
  delegate(
    requestMessage: cosmos_staking_v1beta1_tx_pb.MsgDelegate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_tx_pb.MsgDelegateResponse|null) => void
  ): UnaryResponse;
  delegate(
    requestMessage: cosmos_staking_v1beta1_tx_pb.MsgDelegate,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_tx_pb.MsgDelegateResponse|null) => void
  ): UnaryResponse;
  beginRedelegate(
    requestMessage: cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegateResponse|null) => void
  ): UnaryResponse;
  beginRedelegate(
    requestMessage: cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegate,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegateResponse|null) => void
  ): UnaryResponse;
  undelegate(
    requestMessage: cosmos_staking_v1beta1_tx_pb.MsgUndelegate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_tx_pb.MsgUndelegateResponse|null) => void
  ): UnaryResponse;
  undelegate(
    requestMessage: cosmos_staking_v1beta1_tx_pb.MsgUndelegate,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_tx_pb.MsgUndelegateResponse|null) => void
  ): UnaryResponse;
}

