// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/query.proto

import * as ibc_applications_transfer_v1_query_pb from "../../../../ibc/applications/transfer/v1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryDenomTrace = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest;
  readonly responseType: typeof ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse;
};

type QueryDenomTraces = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest;
  readonly responseType: typeof ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse;
};

type QueryParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_transfer_v1_query_pb.QueryParamsRequest;
  readonly responseType: typeof ibc_applications_transfer_v1_query_pb.QueryParamsResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly DenomTrace: QueryDenomTrace;
  static readonly DenomTraces: QueryDenomTraces;
  static readonly Params: QueryParams;
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
  denomTrace(
    requestMessage: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse|null) => void
  ): UnaryResponse;
  denomTrace(
    requestMessage: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse|null) => void
  ): UnaryResponse;
  denomTraces(
    requestMessage: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse|null) => void
  ): UnaryResponse;
  denomTraces(
    requestMessage: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: ibc_applications_transfer_v1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_transfer_v1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: ibc_applications_transfer_v1_query_pb.QueryParamsRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_transfer_v1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
}

