// package: cosmos.feegrant.v1beta1
// file: cosmos/feegrant/v1beta1/tx.proto

import * as cosmos_feegrant_v1beta1_tx_pb from "../../../cosmos/feegrant/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgGrantAllowance = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowance;
  readonly responseType: typeof cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse;
};

type MsgRevokeAllowance = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowance;
  readonly responseType: typeof cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly GrantAllowance: MsgGrantAllowance;
  static readonly RevokeAllowance: MsgRevokeAllowance;
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
  grantAllowance(
    requestMessage: cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowance,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse|null) => void
  ): UnaryResponse;
  grantAllowance(
    requestMessage: cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowance,
    callback: (error: ServiceError|null, responseMessage: cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse|null) => void
  ): UnaryResponse;
  revokeAllowance(
    requestMessage: cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowance,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse|null) => void
  ): UnaryResponse;
  revokeAllowance(
    requestMessage: cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowance,
    callback: (error: ServiceError|null, responseMessage: cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse|null) => void
  ): UnaryResponse;
}

