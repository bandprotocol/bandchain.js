// package: cosmos.base.node.v1beta1
// file: cosmos/base/node/v1beta1/query.proto

import * as cosmos_base_node_v1beta1_query_pb from "../../../../cosmos/base/node/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ServiceConfig = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_base_node_v1beta1_query_pb.ConfigRequest;
  readonly responseType: typeof cosmos_base_node_v1beta1_query_pb.ConfigResponse;
};

export class Service {
  static readonly serviceName: string;
  static readonly Config: ServiceConfig;
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

export class ServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  config(
    requestMessage: cosmos_base_node_v1beta1_query_pb.ConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_node_v1beta1_query_pb.ConfigResponse|null) => void
  ): UnaryResponse;
  config(
    requestMessage: cosmos_base_node_v1beta1_query_pb.ConfigRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_node_v1beta1_query_pb.ConfigResponse|null) => void
  ): UnaryResponse;
}

