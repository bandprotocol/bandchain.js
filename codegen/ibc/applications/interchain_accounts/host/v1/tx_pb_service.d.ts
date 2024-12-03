// package: ibc.applications.interchain_accounts.host.v1
// file: ibc/applications/interchain_accounts/host/v1/tx.proto

import * as ibc_applications_interchain_accounts_host_v1_tx_pb from "../../../../../ibc/applications/interchain_accounts/host/v1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgUpdateParams = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_interchain_accounts_host_v1_tx_pb.MsgUpdateParams;
  readonly responseType: typeof ibc_applications_interchain_accounts_host_v1_tx_pb.MsgUpdateParamsResponse;
};

type MsgModuleQuerySafe = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_interchain_accounts_host_v1_tx_pb.MsgModuleQuerySafe;
  readonly responseType: typeof ibc_applications_interchain_accounts_host_v1_tx_pb.MsgModuleQuerySafeResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly UpdateParams: MsgUpdateParams;
  static readonly ModuleQuerySafe: MsgModuleQuerySafe;
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
    requestMessage: ibc_applications_interchain_accounts_host_v1_tx_pb.MsgUpdateParams,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_interchain_accounts_host_v1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
  updateParams(
    requestMessage: ibc_applications_interchain_accounts_host_v1_tx_pb.MsgUpdateParams,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_interchain_accounts_host_v1_tx_pb.MsgUpdateParamsResponse|null) => void
  ): UnaryResponse;
  moduleQuerySafe(
    requestMessage: ibc_applications_interchain_accounts_host_v1_tx_pb.MsgModuleQuerySafe,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_interchain_accounts_host_v1_tx_pb.MsgModuleQuerySafeResponse|null) => void
  ): UnaryResponse;
  moduleQuerySafe(
    requestMessage: ibc_applications_interchain_accounts_host_v1_tx_pb.MsgModuleQuerySafe,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_interchain_accounts_host_v1_tx_pb.MsgModuleQuerySafeResponse|null) => void
  ): UnaryResponse;
}

