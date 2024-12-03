// package: band.feeds.v1beta1
// file: band/feeds/v1beta1/query.proto

import * as band_feeds_v1beta1_query_pb from "../../../band/feeds/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryCurrentFeeds = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_feeds_v1beta1_query_pb.QueryCurrentFeedsRequest;
  readonly responseType: typeof band_feeds_v1beta1_query_pb.QueryCurrentFeedsResponse;
};

type QueryIsFeeder = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_feeds_v1beta1_query_pb.QueryIsFeederRequest;
  readonly responseType: typeof band_feeds_v1beta1_query_pb.QueryIsFeederResponse;
};

type QueryParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_feeds_v1beta1_query_pb.QueryParamsRequest;
  readonly responseType: typeof band_feeds_v1beta1_query_pb.QueryParamsResponse;
};

type QueryPrice = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_feeds_v1beta1_query_pb.QueryPriceRequest;
  readonly responseType: typeof band_feeds_v1beta1_query_pb.QueryPriceResponse;
};

type QueryPrices = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_feeds_v1beta1_query_pb.QueryPricesRequest;
  readonly responseType: typeof band_feeds_v1beta1_query_pb.QueryPricesResponse;
};

type QueryAllPrices = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_feeds_v1beta1_query_pb.QueryAllPricesRequest;
  readonly responseType: typeof band_feeds_v1beta1_query_pb.QueryAllPricesResponse;
};

type QueryReferenceSourceConfig = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_feeds_v1beta1_query_pb.QueryReferenceSourceConfigRequest;
  readonly responseType: typeof band_feeds_v1beta1_query_pb.QueryReferenceSourceConfigResponse;
};

type QuerySignalTotalPowers = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_feeds_v1beta1_query_pb.QuerySignalTotalPowersRequest;
  readonly responseType: typeof band_feeds_v1beta1_query_pb.QuerySignalTotalPowersResponse;
};

type QueryValidValidator = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_feeds_v1beta1_query_pb.QueryValidValidatorRequest;
  readonly responseType: typeof band_feeds_v1beta1_query_pb.QueryValidValidatorResponse;
};

type QueryValidatorPrices = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_feeds_v1beta1_query_pb.QueryValidatorPricesRequest;
  readonly responseType: typeof band_feeds_v1beta1_query_pb.QueryValidatorPricesResponse;
};

type QueryVote = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_feeds_v1beta1_query_pb.QueryVoteRequest;
  readonly responseType: typeof band_feeds_v1beta1_query_pb.QueryVoteResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly CurrentFeeds: QueryCurrentFeeds;
  static readonly IsFeeder: QueryIsFeeder;
  static readonly Params: QueryParams;
  static readonly Price: QueryPrice;
  static readonly Prices: QueryPrices;
  static readonly AllPrices: QueryAllPrices;
  static readonly ReferenceSourceConfig: QueryReferenceSourceConfig;
  static readonly SignalTotalPowers: QuerySignalTotalPowers;
  static readonly ValidValidator: QueryValidValidator;
  static readonly ValidatorPrices: QueryValidatorPrices;
  static readonly Vote: QueryVote;
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
  currentFeeds(
    requestMessage: band_feeds_v1beta1_query_pb.QueryCurrentFeedsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryCurrentFeedsResponse|null) => void
  ): UnaryResponse;
  currentFeeds(
    requestMessage: band_feeds_v1beta1_query_pb.QueryCurrentFeedsRequest,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryCurrentFeedsResponse|null) => void
  ): UnaryResponse;
  isFeeder(
    requestMessage: band_feeds_v1beta1_query_pb.QueryIsFeederRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryIsFeederResponse|null) => void
  ): UnaryResponse;
  isFeeder(
    requestMessage: band_feeds_v1beta1_query_pb.QueryIsFeederRequest,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryIsFeederResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: band_feeds_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: band_feeds_v1beta1_query_pb.QueryParamsRequest,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  price(
    requestMessage: band_feeds_v1beta1_query_pb.QueryPriceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryPriceResponse|null) => void
  ): UnaryResponse;
  price(
    requestMessage: band_feeds_v1beta1_query_pb.QueryPriceRequest,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryPriceResponse|null) => void
  ): UnaryResponse;
  prices(
    requestMessage: band_feeds_v1beta1_query_pb.QueryPricesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryPricesResponse|null) => void
  ): UnaryResponse;
  prices(
    requestMessage: band_feeds_v1beta1_query_pb.QueryPricesRequest,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryPricesResponse|null) => void
  ): UnaryResponse;
  allPrices(
    requestMessage: band_feeds_v1beta1_query_pb.QueryAllPricesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryAllPricesResponse|null) => void
  ): UnaryResponse;
  allPrices(
    requestMessage: band_feeds_v1beta1_query_pb.QueryAllPricesRequest,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryAllPricesResponse|null) => void
  ): UnaryResponse;
  referenceSourceConfig(
    requestMessage: band_feeds_v1beta1_query_pb.QueryReferenceSourceConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryReferenceSourceConfigResponse|null) => void
  ): UnaryResponse;
  referenceSourceConfig(
    requestMessage: band_feeds_v1beta1_query_pb.QueryReferenceSourceConfigRequest,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryReferenceSourceConfigResponse|null) => void
  ): UnaryResponse;
  signalTotalPowers(
    requestMessage: band_feeds_v1beta1_query_pb.QuerySignalTotalPowersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QuerySignalTotalPowersResponse|null) => void
  ): UnaryResponse;
  signalTotalPowers(
    requestMessage: band_feeds_v1beta1_query_pb.QuerySignalTotalPowersRequest,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QuerySignalTotalPowersResponse|null) => void
  ): UnaryResponse;
  validValidator(
    requestMessage: band_feeds_v1beta1_query_pb.QueryValidValidatorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryValidValidatorResponse|null) => void
  ): UnaryResponse;
  validValidator(
    requestMessage: band_feeds_v1beta1_query_pb.QueryValidValidatorRequest,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryValidValidatorResponse|null) => void
  ): UnaryResponse;
  validatorPrices(
    requestMessage: band_feeds_v1beta1_query_pb.QueryValidatorPricesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryValidatorPricesResponse|null) => void
  ): UnaryResponse;
  validatorPrices(
    requestMessage: band_feeds_v1beta1_query_pb.QueryValidatorPricesRequest,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryValidatorPricesResponse|null) => void
  ): UnaryResponse;
  vote(
    requestMessage: band_feeds_v1beta1_query_pb.QueryVoteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryVoteResponse|null) => void
  ): UnaryResponse;
  vote(
    requestMessage: band_feeds_v1beta1_query_pb.QueryVoteRequest,
    callback: (error: ServiceError|null, responseMessage: band_feeds_v1beta1_query_pb.QueryVoteResponse|null) => void
  ): UnaryResponse;
}

