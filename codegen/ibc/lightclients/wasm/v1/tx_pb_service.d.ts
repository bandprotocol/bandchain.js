// package: ibc.lightclients.wasm.v1
// file: ibc/lightclients/wasm/v1/tx.proto

import * as ibc_lightclients_wasm_v1_tx_pb from "../../../../ibc/lightclients/wasm/v1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgStoreCode = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_lightclients_wasm_v1_tx_pb.MsgStoreCode;
  readonly responseType: typeof ibc_lightclients_wasm_v1_tx_pb.MsgStoreCodeResponse;
};

type MsgRemoveChecksum = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_lightclients_wasm_v1_tx_pb.MsgRemoveChecksum;
  readonly responseType: typeof ibc_lightclients_wasm_v1_tx_pb.MsgRemoveChecksumResponse;
};

type MsgMigrateContract = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_lightclients_wasm_v1_tx_pb.MsgMigrateContract;
  readonly responseType: typeof ibc_lightclients_wasm_v1_tx_pb.MsgMigrateContractResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly StoreCode: MsgStoreCode;
  static readonly RemoveChecksum: MsgRemoveChecksum;
  static readonly MigrateContract: MsgMigrateContract;
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
  storeCode(
    requestMessage: ibc_lightclients_wasm_v1_tx_pb.MsgStoreCode,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_lightclients_wasm_v1_tx_pb.MsgStoreCodeResponse|null) => void
  ): UnaryResponse;
  storeCode(
    requestMessage: ibc_lightclients_wasm_v1_tx_pb.MsgStoreCode,
    callback: (error: ServiceError|null, responseMessage: ibc_lightclients_wasm_v1_tx_pb.MsgStoreCodeResponse|null) => void
  ): UnaryResponse;
  removeChecksum(
    requestMessage: ibc_lightclients_wasm_v1_tx_pb.MsgRemoveChecksum,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_lightclients_wasm_v1_tx_pb.MsgRemoveChecksumResponse|null) => void
  ): UnaryResponse;
  removeChecksum(
    requestMessage: ibc_lightclients_wasm_v1_tx_pb.MsgRemoveChecksum,
    callback: (error: ServiceError|null, responseMessage: ibc_lightclients_wasm_v1_tx_pb.MsgRemoveChecksumResponse|null) => void
  ): UnaryResponse;
  migrateContract(
    requestMessage: ibc_lightclients_wasm_v1_tx_pb.MsgMigrateContract,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_lightclients_wasm_v1_tx_pb.MsgMigrateContractResponse|null) => void
  ): UnaryResponse;
  migrateContract(
    requestMessage: ibc_lightclients_wasm_v1_tx_pb.MsgMigrateContract,
    callback: (error: ServiceError|null, responseMessage: ibc_lightclients_wasm_v1_tx_pb.MsgMigrateContractResponse|null) => void
  ): UnaryResponse;
}

