// package: cosmos.base.reflection.v2alpha1
// file: cosmos/base/reflection/v2alpha1/reflection.proto

import * as cosmos_base_reflection_v2alpha1_reflection_pb from "../../../../cosmos/base/reflection/v2alpha1/reflection_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ReflectionServiceGetAuthnDescriptor = {
  readonly methodName: string;
  readonly service: typeof ReflectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorRequest;
  readonly responseType: typeof cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse;
};

type ReflectionServiceGetChainDescriptor = {
  readonly methodName: string;
  readonly service: typeof ReflectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorRequest;
  readonly responseType: typeof cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse;
};

type ReflectionServiceGetCodecDescriptor = {
  readonly methodName: string;
  readonly service: typeof ReflectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorRequest;
  readonly responseType: typeof cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse;
};

type ReflectionServiceGetConfigurationDescriptor = {
  readonly methodName: string;
  readonly service: typeof ReflectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorRequest;
  readonly responseType: typeof cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse;
};

type ReflectionServiceGetQueryServicesDescriptor = {
  readonly methodName: string;
  readonly service: typeof ReflectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorRequest;
  readonly responseType: typeof cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse;
};

type ReflectionServiceGetTxDescriptor = {
  readonly methodName: string;
  readonly service: typeof ReflectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorRequest;
  readonly responseType: typeof cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse;
};

export class ReflectionService {
  static readonly serviceName: string;
  static readonly GetAuthnDescriptor: ReflectionServiceGetAuthnDescriptor;
  static readonly GetChainDescriptor: ReflectionServiceGetChainDescriptor;
  static readonly GetCodecDescriptor: ReflectionServiceGetCodecDescriptor;
  static readonly GetConfigurationDescriptor: ReflectionServiceGetConfigurationDescriptor;
  static readonly GetQueryServicesDescriptor: ReflectionServiceGetQueryServicesDescriptor;
  static readonly GetTxDescriptor: ReflectionServiceGetTxDescriptor;
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
  getAuthnDescriptor(
    requestMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse|null) => void
  ): UnaryResponse;
  getAuthnDescriptor(
    requestMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse|null) => void
  ): UnaryResponse;
  getChainDescriptor(
    requestMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse|null) => void
  ): UnaryResponse;
  getChainDescriptor(
    requestMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse|null) => void
  ): UnaryResponse;
  getCodecDescriptor(
    requestMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse|null) => void
  ): UnaryResponse;
  getCodecDescriptor(
    requestMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse|null) => void
  ): UnaryResponse;
  getConfigurationDescriptor(
    requestMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse|null) => void
  ): UnaryResponse;
  getConfigurationDescriptor(
    requestMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse|null) => void
  ): UnaryResponse;
  getQueryServicesDescriptor(
    requestMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse|null) => void
  ): UnaryResponse;
  getQueryServicesDescriptor(
    requestMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse|null) => void
  ): UnaryResponse;
  getTxDescriptor(
    requestMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse|null) => void
  ): UnaryResponse;
  getTxDescriptor(
    requestMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse|null) => void
  ): UnaryResponse;
}

