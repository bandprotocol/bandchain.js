// package: cosmos.base.reflection.v1beta1
// file: cosmos/base/reflection/v1beta1/reflection.proto

import * as cosmos_base_reflection_v1beta1_reflection_pb from "../../../../cosmos/base/reflection/v1beta1/reflection_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ReflectionServiceListAllInterfaces = {
  readonly methodName: string;
  readonly service: typeof ReflectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest;
  readonly responseType: typeof cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse;
};

type ReflectionServiceListImplementations = {
  readonly methodName: string;
  readonly service: typeof ReflectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest;
  readonly responseType: typeof cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse;
};

export class ReflectionService {
  static readonly serviceName: string;
  static readonly ListAllInterfaces: ReflectionServiceListAllInterfaces;
  static readonly ListImplementations: ReflectionServiceListImplementations;
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

export class ReflectionServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listAllInterfaces(
    requestMessage: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse|null) => void
  ): UnaryResponse;
  listAllInterfaces(
    requestMessage: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse|null) => void
  ): UnaryResponse;
  listImplementations(
    requestMessage: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse|null) => void
  ): UnaryResponse;
  listImplementations(
    requestMessage: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse|null) => void
  ): UnaryResponse;
}

