// package: cosmos.upgrade.v1beta1
// file: cosmos/upgrade/v1beta1/query.proto

import * as cosmos_upgrade_v1beta1_query_pb from "../../../cosmos/upgrade/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryCurrentPlan = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest;
  readonly responseType: typeof cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse;
};

type QueryAppliedPlan = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest;
  readonly responseType: typeof cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse;
};

type QueryUpgradedConsensusState = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest;
  readonly responseType: typeof cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse;
};

type QueryModuleVersions = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsRequest;
  readonly responseType: typeof cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly CurrentPlan: QueryCurrentPlan;
  static readonly AppliedPlan: QueryAppliedPlan;
  static readonly UpgradedConsensusState: QueryUpgradedConsensusState;
  static readonly ModuleVersions: QueryModuleVersions;
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
  currentPlan(
    requestMessage: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse|null) => void
  ): UnaryResponse;
  currentPlan(
    requestMessage: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse|null) => void
  ): UnaryResponse;
  appliedPlan(
    requestMessage: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse|null) => void
  ): UnaryResponse;
  appliedPlan(
    requestMessage: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse|null) => void
  ): UnaryResponse;
  upgradedConsensusState(
    requestMessage: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse|null) => void
  ): UnaryResponse;
  upgradedConsensusState(
    requestMessage: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse|null) => void
  ): UnaryResponse;
  moduleVersions(
    requestMessage: cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsResponse|null) => void
  ): UnaryResponse;
  moduleVersions(
    requestMessage: cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsResponse|null) => void
  ): UnaryResponse;
}

