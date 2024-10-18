// package: bandchain.v1.node
// file: bandchain/v1/node/query.proto

import * as bandchain_v1_node_query_pb from '../../../bandchain/v1/node/query_pb'
import { grpc } from '@improbable-eng/grpc-web'

type ServiceChainID = {
  readonly methodName: string
  readonly service: typeof Service
  readonly requestStream: false
  readonly responseStream: false
  readonly requestType: typeof bandchain_v1_node_query_pb.ChainIDRequest
  readonly responseType: typeof bandchain_v1_node_query_pb.ChainIDResponse
}

type ServiceEVMValidators = {
  readonly methodName: string
  readonly service: typeof Service
  readonly requestStream: false
  readonly responseStream: false
  readonly requestType: typeof bandchain_v1_node_query_pb.EVMValidatorsRequest
  readonly responseType: typeof bandchain_v1_node_query_pb.EVMValidatorsResponse
}

export class Service {
  static readonly serviceName: string
  static readonly ChainID: ServiceChainID
  static readonly EVMValidators: ServiceEVMValidators
}

export type ServiceError = {
  message: string
  code: number
  metadata: grpc.Metadata
}
export type Status = { details: string; code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void
}
interface ResponseStream<T> {
  cancel(): void
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>
  end(): void
  cancel(): void
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>
  end(): void
  cancel(): void
  on(
    type: 'data',
    handler: (message: ResT) => void,
  ): BidirectionalStream<ReqT, ResT>
  on(
    type: 'end',
    handler: (status?: Status) => void,
  ): BidirectionalStream<ReqT, ResT>
  on(
    type: 'status',
    handler: (status: Status) => void,
  ): BidirectionalStream<ReqT, ResT>
}

export class ServiceClient {
  readonly serviceHost: string

  constructor(serviceHost: string, options?: grpc.RpcOptions)
  chainID(
    requestMessage: bandchain_v1_node_query_pb.ChainIDRequest,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: bandchain_v1_node_query_pb.ChainIDResponse | null,
    ) => void,
  ): UnaryResponse
  chainID(
    requestMessage: bandchain_v1_node_query_pb.ChainIDRequest,
    callback: (
      error: ServiceError | null,
      responseMessage: bandchain_v1_node_query_pb.ChainIDResponse | null,
    ) => void,
  ): UnaryResponse
  eVMValidators(
    requestMessage: bandchain_v1_node_query_pb.EVMValidatorsRequest,
    metadata: grpc.Metadata,
    callback: (
      error: ServiceError | null,
      responseMessage: bandchain_v1_node_query_pb.EVMValidatorsResponse | null,
    ) => void,
  ): UnaryResponse
  eVMValidators(
    requestMessage: bandchain_v1_node_query_pb.EVMValidatorsRequest,
    callback: (
      error: ServiceError | null,
      responseMessage: bandchain_v1_node_query_pb.EVMValidatorsResponse | null,
    ) => void,
  ): UnaryResponse
}
