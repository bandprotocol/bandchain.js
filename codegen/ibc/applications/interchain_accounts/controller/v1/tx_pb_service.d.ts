// package: ibc.applications.interchain_accounts.controller.v1
// file: ibc/applications/interchain_accounts/controller/v1/tx.proto

import * as ibc_applications_interchain_accounts_controller_v1_tx_pb from "../../../../../ibc/applications/interchain_accounts/controller/v1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgRegisterInterchainAccount = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgRegisterInterchainAccount;
  readonly responseType: typeof ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgRegisterInterchainAccountResponse;
};

type MsgSendTx = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgSendTx;
  readonly responseType: typeof ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgSendTxResponse;
};

type MsgUpdateParams = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgUpdateParams;
  readonly responseType: typeof ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgUpdateParamsResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly RegisterInterchainAccount: MsgRegisterInterchainAccount;
  static readonly SendTx: MsgSendTx;
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
  registerInterchainAccount(
    requestMessage: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgRegisterInterchainAccount,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgRegisterInterchainAccountResponse|null) => void
  ): UnaryResponse;
  registerInterchainAccount(
    requestMessage: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgRegisterInterchainAccount,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgRegisterInterchainAccountResponse|null) => void
  ): UnaryResponse;
  sendTx(
    requestMessage: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgSendTx,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgSendTxResponse|null) => void
  ): UnaryResponse;
  sendTx(
    requestMessage: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgSendTx,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgSendTxResponse|null) => void
  ): UnaryResponse;
  updateParams(
    requestMessage: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgUpdateParams,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
  updateParams(
    requestMessage: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgUpdateParams,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_interchain_accounts_controller_v1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
}

