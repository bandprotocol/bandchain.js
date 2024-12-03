// package: cosmos.authz.v1beta1
// file: cosmos/authz/v1beta1/tx.proto

import * as cosmos_authz_v1beta1_tx_pb from "../../../cosmos/authz/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgGrant = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_authz_v1beta1_tx_pb.MsgGrant;
  readonly responseType: typeof cosmos_authz_v1beta1_tx_pb.MsgGrantResponse;
};

type MsgExec = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_authz_v1beta1_tx_pb.MsgExec;
  readonly responseType: typeof cosmos_authz_v1beta1_tx_pb.MsgExecResponse;
};

type MsgRevoke = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_authz_v1beta1_tx_pb.MsgRevoke;
  readonly responseType: typeof cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly Grant: MsgGrant;
  static readonly Exec: MsgExec;
  static readonly Revoke: MsgRevoke;
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
  grant(
    requestMessage: cosmos_authz_v1beta1_tx_pb.MsgGrant,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_authz_v1beta1_tx_pb.MsgGrantResponse|null) => void
  ): UnaryResponse;
  grant(
    requestMessage: cosmos_authz_v1beta1_tx_pb.MsgGrant,
    callback: (error: ServiceError|null, responseMessage: cosmos_authz_v1beta1_tx_pb.MsgGrantResponse|null) => void
  ): UnaryResponse;
  exec(
    requestMessage: cosmos_authz_v1beta1_tx_pb.MsgExec,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_authz_v1beta1_tx_pb.MsgExecResponse|null) => void
  ): UnaryResponse;
  exec(
    requestMessage: cosmos_authz_v1beta1_tx_pb.MsgExec,
    callback: (error: ServiceError|null, responseMessage: cosmos_authz_v1beta1_tx_pb.MsgExecResponse|null) => void
  ): UnaryResponse;
  revoke(
    requestMessage: cosmos_authz_v1beta1_tx_pb.MsgRevoke,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse|null) => void
  ): UnaryResponse;
  revoke(
    requestMessage: cosmos_authz_v1beta1_tx_pb.MsgRevoke,
    callback: (error: ServiceError|null, responseMessage: cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse|null) => void
  ): UnaryResponse;
}

