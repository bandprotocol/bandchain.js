// package: ibc.lightclients.wasm.v1
// file: ibc/lightclients/wasm/v1/query.proto

import * as ibc_lightclients_wasm_v1_query_pb from "../../../../ibc/lightclients/wasm/v1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryChecksums = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_lightclients_wasm_v1_query_pb.QueryChecksumsRequest;
  readonly responseType: typeof ibc_lightclients_wasm_v1_query_pb.QueryChecksumsResponse;
};

type QueryCode = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_lightclients_wasm_v1_query_pb.QueryCodeRequest;
  readonly responseType: typeof ibc_lightclients_wasm_v1_query_pb.QueryCodeResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Checksums: QueryChecksums;
  static readonly Code: QueryCode;
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

export class QueryClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  checksums(
    requestMessage: ibc_lightclients_wasm_v1_query_pb.QueryChecksumsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_lightclients_wasm_v1_query_pb.QueryChecksumsResponse|null) => void
  ): UnaryResponse;
  checksums(
    requestMessage: ibc_lightclients_wasm_v1_query_pb.QueryChecksumsRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_lightclients_wasm_v1_query_pb.QueryChecksumsResponse|null) => void
  ): UnaryResponse;
  code(
    requestMessage: ibc_lightclients_wasm_v1_query_pb.QueryCodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_lightclients_wasm_v1_query_pb.QueryCodeResponse|null) => void
  ): UnaryResponse;
  code(
    requestMessage: ibc_lightclients_wasm_v1_query_pb.QueryCodeRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_lightclients_wasm_v1_query_pb.QueryCodeResponse|null) => void
  ): UnaryResponse;
}

