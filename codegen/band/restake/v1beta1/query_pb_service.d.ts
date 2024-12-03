// package: band.restake.v1beta1
// file: band/restake/v1beta1/query.proto

import * as band_restake_v1beta1_query_pb from "../../../band/restake/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryVaults = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_restake_v1beta1_query_pb.QueryVaultsRequest;
  readonly responseType: typeof band_restake_v1beta1_query_pb.QueryVaultsResponse;
};

type QueryVault = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_restake_v1beta1_query_pb.QueryVaultRequest;
  readonly responseType: typeof band_restake_v1beta1_query_pb.QueryVaultResponse;
};

type QueryLocks = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_restake_v1beta1_query_pb.QueryLocksRequest;
  readonly responseType: typeof band_restake_v1beta1_query_pb.QueryLocksResponse;
};

type QueryLock = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_restake_v1beta1_query_pb.QueryLockRequest;
  readonly responseType: typeof band_restake_v1beta1_query_pb.QueryLockResponse;
};

type QueryStake = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_restake_v1beta1_query_pb.QueryStakeRequest;
  readonly responseType: typeof band_restake_v1beta1_query_pb.QueryStakeResponse;
};

type QueryParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_restake_v1beta1_query_pb.QueryParamsRequest;
  readonly responseType: typeof band_restake_v1beta1_query_pb.QueryParamsResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Vaults: QueryVaults;
  static readonly Vault: QueryVault;
  static readonly Locks: QueryLocks;
  static readonly Lock: QueryLock;
  static readonly Stake: QueryStake;
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
  vaults(
    requestMessage: band_restake_v1beta1_query_pb.QueryVaultsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_query_pb.QueryVaultsResponse|null) => void
  ): UnaryResponse;
  vaults(
    requestMessage: band_restake_v1beta1_query_pb.QueryVaultsRequest,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_query_pb.QueryVaultsResponse|null) => void
  ): UnaryResponse;
  vault(
    requestMessage: band_restake_v1beta1_query_pb.QueryVaultRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_query_pb.QueryVaultResponse|null) => void
  ): UnaryResponse;
  vault(
    requestMessage: band_restake_v1beta1_query_pb.QueryVaultRequest,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_query_pb.QueryVaultResponse|null) => void
  ): UnaryResponse;
  locks(
    requestMessage: band_restake_v1beta1_query_pb.QueryLocksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_query_pb.QueryLocksResponse|null) => void
  ): UnaryResponse;
  locks(
    requestMessage: band_restake_v1beta1_query_pb.QueryLocksRequest,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_query_pb.QueryLocksResponse|null) => void
  ): UnaryResponse;
  lock(
    requestMessage: band_restake_v1beta1_query_pb.QueryLockRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_query_pb.QueryLockResponse|null) => void
  ): UnaryResponse;
  lock(
    requestMessage: band_restake_v1beta1_query_pb.QueryLockRequest,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_query_pb.QueryLockResponse|null) => void
  ): UnaryResponse;
  stake(
    requestMessage: band_restake_v1beta1_query_pb.QueryStakeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_query_pb.QueryStakeResponse|null) => void
  ): UnaryResponse;
  stake(
    requestMessage: band_restake_v1beta1_query_pb.QueryStakeRequest,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_query_pb.QueryStakeResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: band_restake_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: band_restake_v1beta1_query_pb.QueryParamsRequest,
    callback: (error: ServiceError|null, responseMessage: band_restake_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
}

