// package: cosmos.app.v1alpha1
// file: cosmos/app/v1alpha1/query.proto

import * as cosmos_app_v1alpha1_query_pb from "../../../cosmos/app/v1alpha1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryConfig = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_app_v1alpha1_query_pb.QueryConfigRequest;
  readonly responseType: typeof cosmos_app_v1alpha1_query_pb.QueryConfigResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Config: QueryConfig;
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
  config(
    requestMessage: cosmos_app_v1alpha1_query_pb.QueryConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_app_v1alpha1_query_pb.QueryConfigResponse|null) => void
  ): UnaryResponse;
  config(
    requestMessage: cosmos_app_v1alpha1_query_pb.QueryConfigRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_app_v1alpha1_query_pb.QueryConfigResponse|null) => void
  ): UnaryResponse;
}

