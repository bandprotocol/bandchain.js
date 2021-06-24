// package: cosmos.base.tendermint.v1beta1
// file: cosmos/base/tendermint/v1beta1/query.proto

import * as cosmos_base_tendermint_v1beta1_query_pb from "../../../../cosmos/base/tendermint/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ServiceGetNodeInfo = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest;
  readonly responseType: typeof cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse;
};

type ServiceGetSyncing = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest;
  readonly responseType: typeof cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse;
};

type ServiceGetLatestBlock = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest;
  readonly responseType: typeof cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse;
};

type ServiceGetBlockByHeight = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest;
  readonly responseType: typeof cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse;
};

type ServiceGetLatestValidatorSet = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest;
  readonly responseType: typeof cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse;
};

type ServiceGetValidatorSetByHeight = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest;
  readonly responseType: typeof cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse;
};

export class Service {
  static readonly serviceName: string;
  static readonly GetNodeInfo: ServiceGetNodeInfo;
  static readonly GetSyncing: ServiceGetSyncing;
  static readonly GetLatestBlock: ServiceGetLatestBlock;
  static readonly GetBlockByHeight: ServiceGetBlockByHeight;
  static readonly GetLatestValidatorSet: ServiceGetLatestValidatorSet;
  static readonly GetValidatorSetByHeight: ServiceGetValidatorSetByHeight;
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
  getNodeInfo(
    requestMessage: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse|null) => void
  ): UnaryResponse;
  getNodeInfo(
    requestMessage: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse|null) => void
  ): UnaryResponse;
  getSyncing(
    requestMessage: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse|null) => void
  ): UnaryResponse;
  getSyncing(
    requestMessage: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse|null) => void
  ): UnaryResponse;
  getLatestBlock(
    requestMessage: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse|null) => void
  ): UnaryResponse;
  getLatestBlock(
    requestMessage: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse|null) => void
  ): UnaryResponse;
  getBlockByHeight(
    requestMessage: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse|null) => void
  ): UnaryResponse;
  getBlockByHeight(
    requestMessage: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse|null) => void
  ): UnaryResponse;
  getLatestValidatorSet(
    requestMessage: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse|null) => void
  ): UnaryResponse;
  getLatestValidatorSet(
    requestMessage: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse|null) => void
  ): UnaryResponse;
  getValidatorSetByHeight(
    requestMessage: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse|null) => void
  ): UnaryResponse;
  getValidatorSetByHeight(
    requestMessage: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse|null) => void
  ): UnaryResponse;
}

