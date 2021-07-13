// package: cosmos.params.v1beta1
// file: cosmos/params/v1beta1/query.proto

import * as cosmos_params_v1beta1_query_pb from "../../../cosmos/params/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_params_v1beta1_query_pb.QueryParamsRequest;
  readonly responseType: typeof cosmos_params_v1beta1_query_pb.QueryParamsResponse;
};

export class Query {
  static readonly serviceName: string;
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
  params(
    requestMessage: cosmos_params_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_params_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: cosmos_params_v1beta1_query_pb.QueryParamsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_params_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
}

