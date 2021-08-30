// package: cosmos.upgrade.v1beta1
// file: cosmos/upgrade/v1beta1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cosmos_upgrade_v1beta1_query_pb from "../../../cosmos/upgrade/v1beta1/query_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as cosmos_upgrade_v1beta1_upgrade_pb from "../../../cosmos/upgrade/v1beta1/upgrade_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    currentPlan: IQueryService_ICurrentPlan;
    appliedPlan: IQueryService_IAppliedPlan;
    upgradedConsensusState: IQueryService_IUpgradedConsensusState;
}

interface IQueryService_ICurrentPlan extends grpc.MethodDefinition<cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest, cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse> {
    path: "/cosmos.upgrade.v1beta1.Query/CurrentPlan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest>;
    requestDeserialize: grpc.deserialize<cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest>;
    responseSerialize: grpc.serialize<cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse>;
    responseDeserialize: grpc.deserialize<cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse>;
}
interface IQueryService_IAppliedPlan extends grpc.MethodDefinition<cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest, cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse> {
    path: "/cosmos.upgrade.v1beta1.Query/AppliedPlan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest>;
    requestDeserialize: grpc.deserialize<cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest>;
    responseSerialize: grpc.serialize<cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse>;
    responseDeserialize: grpc.deserialize<cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse>;
}
interface IQueryService_IUpgradedConsensusState extends grpc.MethodDefinition<cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest, cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse> {
    path: "/cosmos.upgrade.v1beta1.Query/UpgradedConsensusState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest>;
    requestDeserialize: grpc.deserialize<cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest>;
    responseSerialize: grpc.serialize<cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse>;
    responseDeserialize: grpc.deserialize<cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    currentPlan: grpc.handleUnaryCall<cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest, cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse>;
    appliedPlan: grpc.handleUnaryCall<cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest, cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse>;
    upgradedConsensusState: grpc.handleUnaryCall<cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest, cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse>;
}

export interface IQueryClient {
    currentPlan(request: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse) => void): grpc.ClientUnaryCall;
    currentPlan(request: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse) => void): grpc.ClientUnaryCall;
    currentPlan(request: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse) => void): grpc.ClientUnaryCall;
    appliedPlan(request: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse) => void): grpc.ClientUnaryCall;
    appliedPlan(request: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse) => void): grpc.ClientUnaryCall;
    appliedPlan(request: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse) => void): grpc.ClientUnaryCall;
    upgradedConsensusState(request: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse) => void): grpc.ClientUnaryCall;
    upgradedConsensusState(request: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse) => void): grpc.ClientUnaryCall;
    upgradedConsensusState(request: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public currentPlan(request: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse) => void): grpc.ClientUnaryCall;
    public currentPlan(request: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse) => void): grpc.ClientUnaryCall;
    public currentPlan(request: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse) => void): grpc.ClientUnaryCall;
    public appliedPlan(request: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse) => void): grpc.ClientUnaryCall;
    public appliedPlan(request: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse) => void): grpc.ClientUnaryCall;
    public appliedPlan(request: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse) => void): grpc.ClientUnaryCall;
    public upgradedConsensusState(request: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse) => void): grpc.ClientUnaryCall;
    public upgradedConsensusState(request: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse) => void): grpc.ClientUnaryCall;
    public upgradedConsensusState(request: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse) => void): grpc.ClientUnaryCall;
}
