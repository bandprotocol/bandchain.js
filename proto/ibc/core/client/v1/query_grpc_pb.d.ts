// package: ibc.core.client.v1
// file: ibc/core/client/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ibc_core_client_v1_query_pb from "../../../../ibc/core/client/v1/query_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../../cosmos/base/query/v1beta1/pagination_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    clientState: IQueryService_IClientState;
    clientStates: IQueryService_IClientStates;
    consensusState: IQueryService_IConsensusState;
    consensusStates: IQueryService_IConsensusStates;
    clientParams: IQueryService_IClientParams;
}

interface IQueryService_IClientState extends grpc.MethodDefinition<ibc_core_client_v1_query_pb.QueryClientStateRequest, ibc_core_client_v1_query_pb.QueryClientStateResponse> {
    path: "/ibc.core.client.v1.Query/ClientState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryClientStateRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryClientStateRequest>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryClientStateResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryClientStateResponse>;
}
interface IQueryService_IClientStates extends grpc.MethodDefinition<ibc_core_client_v1_query_pb.QueryClientStatesRequest, ibc_core_client_v1_query_pb.QueryClientStatesResponse> {
    path: "/ibc.core.client.v1.Query/ClientStates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryClientStatesRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryClientStatesRequest>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryClientStatesResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryClientStatesResponse>;
}
interface IQueryService_IConsensusState extends grpc.MethodDefinition<ibc_core_client_v1_query_pb.QueryConsensusStateRequest, ibc_core_client_v1_query_pb.QueryConsensusStateResponse> {
    path: "/ibc.core.client.v1.Query/ConsensusState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryConsensusStateRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryConsensusStateRequest>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryConsensusStateResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryConsensusStateResponse>;
}
interface IQueryService_IConsensusStates extends grpc.MethodDefinition<ibc_core_client_v1_query_pb.QueryConsensusStatesRequest, ibc_core_client_v1_query_pb.QueryConsensusStatesResponse> {
    path: "/ibc.core.client.v1.Query/ConsensusStates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryConsensusStatesRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryConsensusStatesRequest>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryConsensusStatesResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryConsensusStatesResponse>;
}
interface IQueryService_IClientParams extends grpc.MethodDefinition<ibc_core_client_v1_query_pb.QueryClientParamsRequest, ibc_core_client_v1_query_pb.QueryClientParamsResponse> {
    path: "/ibc.core.client.v1.Query/ClientParams";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryClientParamsRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryClientParamsRequest>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryClientParamsResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryClientParamsResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    clientState: grpc.handleUnaryCall<ibc_core_client_v1_query_pb.QueryClientStateRequest, ibc_core_client_v1_query_pb.QueryClientStateResponse>;
    clientStates: grpc.handleUnaryCall<ibc_core_client_v1_query_pb.QueryClientStatesRequest, ibc_core_client_v1_query_pb.QueryClientStatesResponse>;
    consensusState: grpc.handleUnaryCall<ibc_core_client_v1_query_pb.QueryConsensusStateRequest, ibc_core_client_v1_query_pb.QueryConsensusStateResponse>;
    consensusStates: grpc.handleUnaryCall<ibc_core_client_v1_query_pb.QueryConsensusStatesRequest, ibc_core_client_v1_query_pb.QueryConsensusStatesResponse>;
    clientParams: grpc.handleUnaryCall<ibc_core_client_v1_query_pb.QueryClientParamsRequest, ibc_core_client_v1_query_pb.QueryClientParamsResponse>;
}

export interface IQueryClient {
    clientState(request: ibc_core_client_v1_query_pb.QueryClientStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStateResponse) => void): grpc.ClientUnaryCall;
    clientState(request: ibc_core_client_v1_query_pb.QueryClientStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStateResponse) => void): grpc.ClientUnaryCall;
    clientState(request: ibc_core_client_v1_query_pb.QueryClientStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStateResponse) => void): grpc.ClientUnaryCall;
    clientStates(request: ibc_core_client_v1_query_pb.QueryClientStatesRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatesResponse) => void): grpc.ClientUnaryCall;
    clientStates(request: ibc_core_client_v1_query_pb.QueryClientStatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatesResponse) => void): grpc.ClientUnaryCall;
    clientStates(request: ibc_core_client_v1_query_pb.QueryClientStatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatesResponse) => void): grpc.ClientUnaryCall;
    consensusState(request: ibc_core_client_v1_query_pb.QueryConsensusStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateResponse) => void): grpc.ClientUnaryCall;
    consensusState(request: ibc_core_client_v1_query_pb.QueryConsensusStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateResponse) => void): grpc.ClientUnaryCall;
    consensusState(request: ibc_core_client_v1_query_pb.QueryConsensusStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateResponse) => void): grpc.ClientUnaryCall;
    consensusStates(request: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse) => void): grpc.ClientUnaryCall;
    consensusStates(request: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse) => void): grpc.ClientUnaryCall;
    consensusStates(request: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse) => void): grpc.ClientUnaryCall;
    clientParams(request: ibc_core_client_v1_query_pb.QueryClientParamsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientParamsResponse) => void): grpc.ClientUnaryCall;
    clientParams(request: ibc_core_client_v1_query_pb.QueryClientParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientParamsResponse) => void): grpc.ClientUnaryCall;
    clientParams(request: ibc_core_client_v1_query_pb.QueryClientParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientParamsResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public clientState(request: ibc_core_client_v1_query_pb.QueryClientStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStateResponse) => void): grpc.ClientUnaryCall;
    public clientState(request: ibc_core_client_v1_query_pb.QueryClientStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStateResponse) => void): grpc.ClientUnaryCall;
    public clientState(request: ibc_core_client_v1_query_pb.QueryClientStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStateResponse) => void): grpc.ClientUnaryCall;
    public clientStates(request: ibc_core_client_v1_query_pb.QueryClientStatesRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatesResponse) => void): grpc.ClientUnaryCall;
    public clientStates(request: ibc_core_client_v1_query_pb.QueryClientStatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatesResponse) => void): grpc.ClientUnaryCall;
    public clientStates(request: ibc_core_client_v1_query_pb.QueryClientStatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatesResponse) => void): grpc.ClientUnaryCall;
    public consensusState(request: ibc_core_client_v1_query_pb.QueryConsensusStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateResponse) => void): grpc.ClientUnaryCall;
    public consensusState(request: ibc_core_client_v1_query_pb.QueryConsensusStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateResponse) => void): grpc.ClientUnaryCall;
    public consensusState(request: ibc_core_client_v1_query_pb.QueryConsensusStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateResponse) => void): grpc.ClientUnaryCall;
    public consensusStates(request: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse) => void): grpc.ClientUnaryCall;
    public consensusStates(request: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse) => void): grpc.ClientUnaryCall;
    public consensusStates(request: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse) => void): grpc.ClientUnaryCall;
    public clientParams(request: ibc_core_client_v1_query_pb.QueryClientParamsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientParamsResponse) => void): grpc.ClientUnaryCall;
    public clientParams(request: ibc_core_client_v1_query_pb.QueryClientParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientParamsResponse) => void): grpc.ClientUnaryCall;
    public clientParams(request: ibc_core_client_v1_query_pb.QueryClientParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientParamsResponse) => void): grpc.ClientUnaryCall;
}
