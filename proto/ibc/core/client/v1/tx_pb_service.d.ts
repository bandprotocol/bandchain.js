// package: ibc.core.client.v1
// file: ibc/core/client/v1/tx.proto

import * as ibc_core_client_v1_tx_pb from "../../../../ibc/core/client/v1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgCreateClient = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_client_v1_tx_pb.MsgCreateClient;
  readonly responseType: typeof ibc_core_client_v1_tx_pb.MsgCreateClientResponse;
};

type MsgUpdateClient = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_client_v1_tx_pb.MsgUpdateClient;
  readonly responseType: typeof ibc_core_client_v1_tx_pb.MsgUpdateClientResponse;
};

type MsgUpgradeClient = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_client_v1_tx_pb.MsgUpgradeClient;
  readonly responseType: typeof ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse;
};

type MsgSubmitMisbehaviour = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour;
  readonly responseType: typeof ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly CreateClient: MsgCreateClient;
  static readonly UpdateClient: MsgUpdateClient;
  static readonly UpgradeClient: MsgUpgradeClient;
  static readonly SubmitMisbehaviour: MsgSubmitMisbehaviour;
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
  createClient(
    requestMessage: ibc_core_client_v1_tx_pb.MsgCreateClient,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_tx_pb.MsgCreateClientResponse|null) => void
  ): UnaryResponse;
  createClient(
    requestMessage: ibc_core_client_v1_tx_pb.MsgCreateClient,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_tx_pb.MsgCreateClientResponse|null) => void
  ): UnaryResponse;
  updateClient(
    requestMessage: ibc_core_client_v1_tx_pb.MsgUpdateClient,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_tx_pb.MsgUpdateClientResponse|null) => void
  ): UnaryResponse;
  updateClient(
    requestMessage: ibc_core_client_v1_tx_pb.MsgUpdateClient,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_tx_pb.MsgUpdateClientResponse|null) => void
  ): UnaryResponse;
  upgradeClient(
    requestMessage: ibc_core_client_v1_tx_pb.MsgUpgradeClient,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse|null) => void
  ): UnaryResponse;
  upgradeClient(
    requestMessage: ibc_core_client_v1_tx_pb.MsgUpgradeClient,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse|null) => void
  ): UnaryResponse;
  submitMisbehaviour(
    requestMessage: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse|null) => void
  ): UnaryResponse;
  submitMisbehaviour(
    requestMessage: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour,
    callback: (error: ServiceError|null, responseMessage: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse|null) => void
  ): UnaryResponse;
}

