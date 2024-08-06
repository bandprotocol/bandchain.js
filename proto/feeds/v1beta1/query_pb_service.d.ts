// package: feeds.v1beta1
// file: feeds/v1beta1/query.proto

import * as feeds_v1beta1_query_pb from "../../feeds/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryPrices = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof feeds_v1beta1_query_pb.QueryPricesRequest;
  readonly responseType: typeof feeds_v1beta1_query_pb.QueryPricesResponse;
};

type QueryPrice = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof feeds_v1beta1_query_pb.QueryPriceRequest;
  readonly responseType: typeof feeds_v1beta1_query_pb.QueryPriceResponse;
};

type QueryValidatorPrices = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof feeds_v1beta1_query_pb.QueryValidatorPricesRequest;
  readonly responseType: typeof feeds_v1beta1_query_pb.QueryValidatorPricesResponse;
};

type QueryValidValidator = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof feeds_v1beta1_query_pb.QueryValidValidatorRequest;
  readonly responseType: typeof feeds_v1beta1_query_pb.QueryValidValidatorResponse;
};

type QuerySignalTotalPowers = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof feeds_v1beta1_query_pb.QuerySignalTotalPowersRequest;
  readonly responseType: typeof feeds_v1beta1_query_pb.QuerySignalTotalPowersResponse;
};

type QueryParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof feeds_v1beta1_query_pb.QueryParamsRequest;
  readonly responseType: typeof feeds_v1beta1_query_pb.QueryParamsResponse;
};

type QueryReferenceSourceConfig = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof feeds_v1beta1_query_pb.QueryReferenceSourceConfigRequest;
  readonly responseType: typeof feeds_v1beta1_query_pb.QueryReferenceSourceConfigResponse;
};

type QueryDelegatorSignals = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof feeds_v1beta1_query_pb.QueryDelegatorSignalsRequest;
  readonly responseType: typeof feeds_v1beta1_query_pb.QueryDelegatorSignalsResponse;
};

type QueryCurrentFeeds = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof feeds_v1beta1_query_pb.QueryCurrentFeedsRequest;
  readonly responseType: typeof feeds_v1beta1_query_pb.QueryCurrentFeedsResponse;
};

type QueryIsFeeder = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof feeds_v1beta1_query_pb.QueryIsFeederRequest;
  readonly responseType: typeof feeds_v1beta1_query_pb.QueryIsFeederResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Prices: QueryPrices;
  static readonly Price: QueryPrice;
  static readonly ValidatorPrices: QueryValidatorPrices;
  static readonly ValidValidator: QueryValidValidator;
  static readonly SignalTotalPowers: QuerySignalTotalPowers;
  static readonly Params: QueryParams;
  static readonly ReferenceSourceConfig: QueryReferenceSourceConfig;
  static readonly DelegatorSignals: QueryDelegatorSignals;
  static readonly CurrentFeeds: QueryCurrentFeeds;
  static readonly IsFeeder: QueryIsFeeder;
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
  prices(
    requestMessage: feeds_v1beta1_query_pb.QueryPricesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryPricesResponse|null) => void
  ): UnaryResponse;
  prices(
    requestMessage: feeds_v1beta1_query_pb.QueryPricesRequest,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryPricesResponse|null) => void
  ): UnaryResponse;
  price(
    requestMessage: feeds_v1beta1_query_pb.QueryPriceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryPriceResponse|null) => void
  ): UnaryResponse;
  price(
    requestMessage: feeds_v1beta1_query_pb.QueryPriceRequest,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryPriceResponse|null) => void
  ): UnaryResponse;
  validatorPrices(
    requestMessage: feeds_v1beta1_query_pb.QueryValidatorPricesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryValidatorPricesResponse|null) => void
  ): UnaryResponse;
  validatorPrices(
    requestMessage: feeds_v1beta1_query_pb.QueryValidatorPricesRequest,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryValidatorPricesResponse|null) => void
  ): UnaryResponse;
  validValidator(
    requestMessage: feeds_v1beta1_query_pb.QueryValidValidatorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryValidValidatorResponse|null) => void
  ): UnaryResponse;
  validValidator(
    requestMessage: feeds_v1beta1_query_pb.QueryValidValidatorRequest,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryValidValidatorResponse|null) => void
  ): UnaryResponse;
  signalTotalPowers(
    requestMessage: feeds_v1beta1_query_pb.QuerySignalTotalPowersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QuerySignalTotalPowersResponse|null) => void
  ): UnaryResponse;
  signalTotalPowers(
    requestMessage: feeds_v1beta1_query_pb.QuerySignalTotalPowersRequest,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QuerySignalTotalPowersResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: feeds_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: feeds_v1beta1_query_pb.QueryParamsRequest,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  referenceSourceConfig(
    requestMessage: feeds_v1beta1_query_pb.QueryReferenceSourceConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryReferenceSourceConfigResponse|null) => void
  ): UnaryResponse;
  referenceSourceConfig(
    requestMessage: feeds_v1beta1_query_pb.QueryReferenceSourceConfigRequest,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryReferenceSourceConfigResponse|null) => void
  ): UnaryResponse;
  delegatorSignals(
    requestMessage: feeds_v1beta1_query_pb.QueryDelegatorSignalsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryDelegatorSignalsResponse|null) => void
  ): UnaryResponse;
  delegatorSignals(
    requestMessage: feeds_v1beta1_query_pb.QueryDelegatorSignalsRequest,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryDelegatorSignalsResponse|null) => void
  ): UnaryResponse;
  currentFeeds(
    requestMessage: feeds_v1beta1_query_pb.QueryCurrentFeedsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryCurrentFeedsResponse|null) => void
  ): UnaryResponse;
  currentFeeds(
    requestMessage: feeds_v1beta1_query_pb.QueryCurrentFeedsRequest,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryCurrentFeedsResponse|null) => void
  ): UnaryResponse;
  isFeeder(
    requestMessage: feeds_v1beta1_query_pb.QueryIsFeederRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryIsFeederResponse|null) => void
  ): UnaryResponse;
  isFeeder(
    requestMessage: feeds_v1beta1_query_pb.QueryIsFeederRequest,
    callback: (error: ServiceError|null, responseMessage: feeds_v1beta1_query_pb.QueryIsFeederResponse|null) => void
  ): UnaryResponse;
}

