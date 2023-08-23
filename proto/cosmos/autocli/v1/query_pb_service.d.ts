// package: cosmos.autocli.v1
// file: cosmos/autocli/v1/query.proto

import * as cosmos_autocli_v1_query_pb from "../../../cosmos/autocli/v1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryAppOptions = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_autocli_v1_query_pb.AppOptionsRequest;
  readonly responseType: typeof cosmos_autocli_v1_query_pb.AppOptionsResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly AppOptions: QueryAppOptions;
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
  appOptions(
    requestMessage: cosmos_autocli_v1_query_pb.AppOptionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_autocli_v1_query_pb.AppOptionsResponse|null) => void
  ): UnaryResponse;
  appOptions(
    requestMessage: cosmos_autocli_v1_query_pb.AppOptionsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_autocli_v1_query_pb.AppOptionsResponse|null) => void
  ): UnaryResponse;
}

