// package: cosmos.reflection.v1
// file: cosmos/reflection/v1/reflection.proto

import * as cosmos_reflection_v1_reflection_pb from "../../../cosmos/reflection/v1/reflection_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ReflectionServiceFileDescriptors = {
  readonly methodName: string;
  readonly service: typeof ReflectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_reflection_v1_reflection_pb.FileDescriptorsRequest;
  readonly responseType: typeof cosmos_reflection_v1_reflection_pb.FileDescriptorsResponse;
};

export class ReflectionService {
  static readonly serviceName: string;
  static readonly FileDescriptors: ReflectionServiceFileDescriptors;
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
  fileDescriptors(
    requestMessage: cosmos_reflection_v1_reflection_pb.FileDescriptorsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_reflection_v1_reflection_pb.FileDescriptorsResponse|null) => void
  ): UnaryResponse;
  fileDescriptors(
    requestMessage: cosmos_reflection_v1_reflection_pb.FileDescriptorsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_reflection_v1_reflection_pb.FileDescriptorsResponse|null) => void
  ): UnaryResponse;
}

