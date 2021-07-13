// package: cosmos.distribution.v1beta1
// file: cosmos/distribution/v1beta1/query.proto

import * as cosmos_distribution_v1beta1_query_pb from "../../../cosmos/distribution/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_distribution_v1beta1_query_pb.QueryParamsRequest;
  readonly responseType: typeof cosmos_distribution_v1beta1_query_pb.QueryParamsResponse;
};

type QueryValidatorOutstandingRewards = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest;
  readonly responseType: typeof cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse;
};

type QueryValidatorCommission = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest;
  readonly responseType: typeof cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse;
};

type QueryValidatorSlashes = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest;
  readonly responseType: typeof cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse;
};

type QueryDelegationRewards = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest;
  readonly responseType: typeof cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse;
};

type QueryDelegationTotalRewards = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest;
  readonly responseType: typeof cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse;
};

type QueryDelegatorValidators = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest;
  readonly responseType: typeof cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse;
};

type QueryDelegatorWithdrawAddress = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest;
  readonly responseType: typeof cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse;
};

type QueryCommunityPool = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest;
  readonly responseType: typeof cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Params: QueryParams;
  static readonly ValidatorOutstandingRewards: QueryValidatorOutstandingRewards;
  static readonly ValidatorCommission: QueryValidatorCommission;
  static readonly ValidatorSlashes: QueryValidatorSlashes;
  static readonly DelegationRewards: QueryDelegationRewards;
  static readonly DelegationTotalRewards: QueryDelegationTotalRewards;
  static readonly DelegatorValidators: QueryDelegatorValidators;
  static readonly DelegatorWithdrawAddress: QueryDelegatorWithdrawAddress;
  static readonly CommunityPool: QueryCommunityPool;
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
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryParamsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  validatorOutstandingRewards(
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse|null) => void
  ): UnaryResponse;
  validatorOutstandingRewards(
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse|null) => void
  ): UnaryResponse;
  validatorCommission(
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse|null) => void
  ): UnaryResponse;
  validatorCommission(
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse|null) => void
  ): UnaryResponse;
  validatorSlashes(
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse|null) => void
  ): UnaryResponse;
  validatorSlashes(
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse|null) => void
  ): UnaryResponse;
  delegationRewards(
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse|null) => void
  ): UnaryResponse;
  delegationRewards(
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse|null) => void
  ): UnaryResponse;
  delegationTotalRewards(
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse|null) => void
  ): UnaryResponse;
  delegationTotalRewards(
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse|null) => void
  ): UnaryResponse;
  delegatorValidators(
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse|null) => void
  ): UnaryResponse;
  delegatorValidators(
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse|null) => void
  ): UnaryResponse;
  delegatorWithdrawAddress(
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse|null) => void
  ): UnaryResponse;
  delegatorWithdrawAddress(
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse|null) => void
  ): UnaryResponse;
  communityPool(
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse|null) => void
  ): UnaryResponse;
  communityPool(
    requestMessage: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse|null) => void
  ): UnaryResponse;
}

