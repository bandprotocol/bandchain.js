// package: oracle.v1
// file: oracle/v1/query.proto

import * as oracle_v1_query_pb from "../../oracle/v1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryCounts = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_query_pb.QueryCountsRequest;
  readonly responseType: typeof oracle_v1_query_pb.QueryCountsResponse;
};

type QueryData = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_query_pb.QueryDataRequest;
  readonly responseType: typeof oracle_v1_query_pb.QueryDataResponse;
};

type QueryDataSource = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_query_pb.QueryDataSourceRequest;
  readonly responseType: typeof oracle_v1_query_pb.QueryDataSourceResponse;
};

type QueryOracleScript = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_query_pb.QueryOracleScriptRequest;
  readonly responseType: typeof oracle_v1_query_pb.QueryOracleScriptResponse;
};

type QueryRequest = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_query_pb.QueryRequestRequest;
  readonly responseType: typeof oracle_v1_query_pb.QueryRequestResponse;
};

type QueryPendingRequests = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_query_pb.QueryPendingRequestsRequest;
  readonly responseType: typeof oracle_v1_query_pb.QueryPendingRequestsResponse;
};

type QueryValidator = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_query_pb.QueryValidatorRequest;
  readonly responseType: typeof oracle_v1_query_pb.QueryValidatorResponse;
};

type QueryIsReporter = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_query_pb.QueryIsReporterRequest;
  readonly responseType: typeof oracle_v1_query_pb.QueryIsReporterResponse;
};

type QueryReporters = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_query_pb.QueryReportersRequest;
  readonly responseType: typeof oracle_v1_query_pb.QueryReportersResponse;
};

type QueryActiveValidators = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_query_pb.QueryActiveValidatorsRequest;
  readonly responseType: typeof oracle_v1_query_pb.QueryActiveValidatorsResponse;
};

type QueryParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_query_pb.QueryParamsRequest;
  readonly responseType: typeof oracle_v1_query_pb.QueryParamsResponse;
};

type QueryRequestSearch = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_query_pb.QueryRequestSearchRequest;
  readonly responseType: typeof oracle_v1_query_pb.QueryRequestSearchResponse;
};

type QueryRequestPrice = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_query_pb.QueryRequestPriceRequest;
  readonly responseType: typeof oracle_v1_query_pb.QueryRequestPriceResponse;
};

type QueryRequestVerification = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_query_pb.QueryRequestVerificationRequest;
  readonly responseType: typeof oracle_v1_query_pb.QueryRequestVerificationResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Counts: QueryCounts;
  static readonly Data: QueryData;
  static readonly DataSource: QueryDataSource;
  static readonly OracleScript: QueryOracleScript;
  static readonly Request: QueryRequest;
  static readonly PendingRequests: QueryPendingRequests;
  static readonly Validator: QueryValidator;
  static readonly IsReporter: QueryIsReporter;
  static readonly Reporters: QueryReporters;
  static readonly ActiveValidators: QueryActiveValidators;
  static readonly Params: QueryParams;
  static readonly RequestSearch: QueryRequestSearch;
  static readonly RequestPrice: QueryRequestPrice;
  static readonly RequestVerification: QueryRequestVerification;
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
  counts(
    requestMessage: oracle_v1_query_pb.QueryCountsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryCountsResponse|null) => void
  ): UnaryResponse;
  counts(
    requestMessage: oracle_v1_query_pb.QueryCountsRequest,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryCountsResponse|null) => void
  ): UnaryResponse;
  data(
    requestMessage: oracle_v1_query_pb.QueryDataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryDataResponse|null) => void
  ): UnaryResponse;
  data(
    requestMessage: oracle_v1_query_pb.QueryDataRequest,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryDataResponse|null) => void
  ): UnaryResponse;
  dataSource(
    requestMessage: oracle_v1_query_pb.QueryDataSourceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryDataSourceResponse|null) => void
  ): UnaryResponse;
  dataSource(
    requestMessage: oracle_v1_query_pb.QueryDataSourceRequest,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryDataSourceResponse|null) => void
  ): UnaryResponse;
  oracleScript(
    requestMessage: oracle_v1_query_pb.QueryOracleScriptRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryOracleScriptResponse|null) => void
  ): UnaryResponse;
  oracleScript(
    requestMessage: oracle_v1_query_pb.QueryOracleScriptRequest,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryOracleScriptResponse|null) => void
  ): UnaryResponse;
  request(
    requestMessage: oracle_v1_query_pb.QueryRequestRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryRequestResponse|null) => void
  ): UnaryResponse;
  request(
    requestMessage: oracle_v1_query_pb.QueryRequestRequest,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryRequestResponse|null) => void
  ): UnaryResponse;
  pendingRequests(
    requestMessage: oracle_v1_query_pb.QueryPendingRequestsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryPendingRequestsResponse|null) => void
  ): UnaryResponse;
  pendingRequests(
    requestMessage: oracle_v1_query_pb.QueryPendingRequestsRequest,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryPendingRequestsResponse|null) => void
  ): UnaryResponse;
  validator(
    requestMessage: oracle_v1_query_pb.QueryValidatorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryValidatorResponse|null) => void
  ): UnaryResponse;
  validator(
    requestMessage: oracle_v1_query_pb.QueryValidatorRequest,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryValidatorResponse|null) => void
  ): UnaryResponse;
  isReporter(
    requestMessage: oracle_v1_query_pb.QueryIsReporterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryIsReporterResponse|null) => void
  ): UnaryResponse;
  isReporter(
    requestMessage: oracle_v1_query_pb.QueryIsReporterRequest,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryIsReporterResponse|null) => void
  ): UnaryResponse;
  reporters(
    requestMessage: oracle_v1_query_pb.QueryReportersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryReportersResponse|null) => void
  ): UnaryResponse;
  reporters(
    requestMessage: oracle_v1_query_pb.QueryReportersRequest,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryReportersResponse|null) => void
  ): UnaryResponse;
  activeValidators(
    requestMessage: oracle_v1_query_pb.QueryActiveValidatorsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryActiveValidatorsResponse|null) => void
  ): UnaryResponse;
  activeValidators(
    requestMessage: oracle_v1_query_pb.QueryActiveValidatorsRequest,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryActiveValidatorsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: oracle_v1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: oracle_v1_query_pb.QueryParamsRequest,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  requestSearch(
    requestMessage: oracle_v1_query_pb.QueryRequestSearchRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryRequestSearchResponse|null) => void
  ): UnaryResponse;
  requestSearch(
    requestMessage: oracle_v1_query_pb.QueryRequestSearchRequest,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryRequestSearchResponse|null) => void
  ): UnaryResponse;
  requestPrice(
    requestMessage: oracle_v1_query_pb.QueryRequestPriceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryRequestPriceResponse|null) => void
  ): UnaryResponse;
  requestPrice(
    requestMessage: oracle_v1_query_pb.QueryRequestPriceRequest,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryRequestPriceResponse|null) => void
  ): UnaryResponse;
  requestVerification(
    requestMessage: oracle_v1_query_pb.QueryRequestVerificationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryRequestVerificationResponse|null) => void
  ): UnaryResponse;
  requestVerification(
    requestMessage: oracle_v1_query_pb.QueryRequestVerificationRequest,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_query_pb.QueryRequestVerificationResponse|null) => void
  ): UnaryResponse;
}

