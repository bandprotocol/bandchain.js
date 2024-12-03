// package: cosmos.staking.v1beta1
// file: cosmos/staking/v1beta1/query.proto

import * as cosmos_staking_v1beta1_query_pb from "../../../cosmos/staking/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryValidators = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_query_pb.QueryValidatorsRequest;
  readonly responseType: typeof cosmos_staking_v1beta1_query_pb.QueryValidatorsResponse;
};

type QueryValidator = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_query_pb.QueryValidatorRequest;
  readonly responseType: typeof cosmos_staking_v1beta1_query_pb.QueryValidatorResponse;
};

type QueryValidatorDelegations = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsRequest;
  readonly responseType: typeof cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsResponse;
};

type QueryValidatorUnbondingDelegations = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsRequest;
  readonly responseType: typeof cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsResponse;
};

type QueryDelegation = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_query_pb.QueryDelegationRequest;
  readonly responseType: typeof cosmos_staking_v1beta1_query_pb.QueryDelegationResponse;
};

type QueryUnbondingDelegation = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationRequest;
  readonly responseType: typeof cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationResponse;
};

type QueryDelegatorDelegations = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsRequest;
  readonly responseType: typeof cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsResponse;
};

type QueryDelegatorUnbondingDelegations = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsRequest;
  readonly responseType: typeof cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsResponse;
};

type QueryRedelegations = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_query_pb.QueryRedelegationsRequest;
  readonly responseType: typeof cosmos_staking_v1beta1_query_pb.QueryRedelegationsResponse;
};

type QueryDelegatorValidators = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsRequest;
  readonly responseType: typeof cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsResponse;
};

type QueryDelegatorValidator = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorRequest;
  readonly responseType: typeof cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorResponse;
};

type QueryHistoricalInfo = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoRequest;
  readonly responseType: typeof cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoResponse;
};

type QueryPool = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_query_pb.QueryPoolRequest;
  readonly responseType: typeof cosmos_staking_v1beta1_query_pb.QueryPoolResponse;
};

type QueryParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_staking_v1beta1_query_pb.QueryParamsRequest;
  readonly responseType: typeof cosmos_staking_v1beta1_query_pb.QueryParamsResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Validators: QueryValidators;
  static readonly Validator: QueryValidator;
  static readonly ValidatorDelegations: QueryValidatorDelegations;
  static readonly ValidatorUnbondingDelegations: QueryValidatorUnbondingDelegations;
  static readonly Delegation: QueryDelegation;
  static readonly UnbondingDelegation: QueryUnbondingDelegation;
  static readonly DelegatorDelegations: QueryDelegatorDelegations;
  static readonly DelegatorUnbondingDelegations: QueryDelegatorUnbondingDelegations;
  static readonly Redelegations: QueryRedelegations;
  static readonly DelegatorValidators: QueryDelegatorValidators;
  static readonly DelegatorValidator: QueryDelegatorValidator;
  static readonly HistoricalInfo: QueryHistoricalInfo;
  static readonly Pool: QueryPool;
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
  validators(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryValidatorsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryValidatorsResponse|null) => void
  ): UnaryResponse;
  validators(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryValidatorsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryValidatorsResponse|null) => void
  ): UnaryResponse;
  validator(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryValidatorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryValidatorResponse|null) => void
  ): UnaryResponse;
  validator(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryValidatorRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryValidatorResponse|null) => void
  ): UnaryResponse;
  validatorDelegations(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsResponse|null) => void
  ): UnaryResponse;
  validatorDelegations(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsResponse|null) => void
  ): UnaryResponse;
  validatorUnbondingDelegations(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsResponse|null) => void
  ): UnaryResponse;
  validatorUnbondingDelegations(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsResponse|null) => void
  ): UnaryResponse;
  delegation(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryDelegationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryDelegationResponse|null) => void
  ): UnaryResponse;
  delegation(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryDelegationRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryDelegationResponse|null) => void
  ): UnaryResponse;
  unbondingDelegation(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationResponse|null) => void
  ): UnaryResponse;
  unbondingDelegation(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationResponse|null) => void
  ): UnaryResponse;
  delegatorDelegations(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsResponse|null) => void
  ): UnaryResponse;
  delegatorDelegations(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsResponse|null) => void
  ): UnaryResponse;
  delegatorUnbondingDelegations(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsResponse|null) => void
  ): UnaryResponse;
  delegatorUnbondingDelegations(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsResponse|null) => void
  ): UnaryResponse;
  redelegations(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryRedelegationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryRedelegationsResponse|null) => void
  ): UnaryResponse;
  redelegations(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryRedelegationsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryRedelegationsResponse|null) => void
  ): UnaryResponse;
  delegatorValidators(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsResponse|null) => void
  ): UnaryResponse;
  delegatorValidators(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsResponse|null) => void
  ): UnaryResponse;
  delegatorValidator(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorResponse|null) => void
  ): UnaryResponse;
  delegatorValidator(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorResponse|null) => void
  ): UnaryResponse;
  historicalInfo(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoResponse|null) => void
  ): UnaryResponse;
  historicalInfo(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoResponse|null) => void
  ): UnaryResponse;
  pool(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryPoolRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryPoolResponse|null) => void
  ): UnaryResponse;
  pool(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryPoolRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryPoolResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: cosmos_staking_v1beta1_query_pb.QueryParamsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_staking_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
}

