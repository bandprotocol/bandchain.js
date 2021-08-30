// package: ibc.core.connection.v1
// file: ibc/core/connection/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ibc_core_connection_v1_query_pb from "../../../../ibc/core/connection/v1/query_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../../cosmos/base/query/v1beta1/pagination_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";
import * as ibc_core_connection_v1_connection_pb from "../../../../ibc/core/connection/v1/connection_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    connection: IQueryService_IConnection;
    connections: IQueryService_IConnections;
    clientConnections: IQueryService_IClientConnections;
    connectionClientState: IQueryService_IConnectionClientState;
    connectionConsensusState: IQueryService_IConnectionConsensusState;
}

interface IQueryService_IConnection extends grpc.MethodDefinition<ibc_core_connection_v1_query_pb.QueryConnectionRequest, ibc_core_connection_v1_query_pb.QueryConnectionResponse> {
    path: "/ibc.core.connection.v1.Query/Connection";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_connection_v1_query_pb.QueryConnectionRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_connection_v1_query_pb.QueryConnectionRequest>;
    responseSerialize: grpc.serialize<ibc_core_connection_v1_query_pb.QueryConnectionResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_connection_v1_query_pb.QueryConnectionResponse>;
}
interface IQueryService_IConnections extends grpc.MethodDefinition<ibc_core_connection_v1_query_pb.QueryConnectionsRequest, ibc_core_connection_v1_query_pb.QueryConnectionsResponse> {
    path: "/ibc.core.connection.v1.Query/Connections";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_connection_v1_query_pb.QueryConnectionsRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_connection_v1_query_pb.QueryConnectionsRequest>;
    responseSerialize: grpc.serialize<ibc_core_connection_v1_query_pb.QueryConnectionsResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_connection_v1_query_pb.QueryConnectionsResponse>;
}
interface IQueryService_IClientConnections extends grpc.MethodDefinition<ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest, ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse> {
    path: "/ibc.core.connection.v1.Query/ClientConnections";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest>;
    responseSerialize: grpc.serialize<ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse>;
}
interface IQueryService_IConnectionClientState extends grpc.MethodDefinition<ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest, ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse> {
    path: "/ibc.core.connection.v1.Query/ConnectionClientState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest>;
    responseSerialize: grpc.serialize<ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse>;
}
interface IQueryService_IConnectionConsensusState extends grpc.MethodDefinition<ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest, ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse> {
    path: "/ibc.core.connection.v1.Query/ConnectionConsensusState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest>;
    responseSerialize: grpc.serialize<ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    connection: grpc.handleUnaryCall<ibc_core_connection_v1_query_pb.QueryConnectionRequest, ibc_core_connection_v1_query_pb.QueryConnectionResponse>;
    connections: grpc.handleUnaryCall<ibc_core_connection_v1_query_pb.QueryConnectionsRequest, ibc_core_connection_v1_query_pb.QueryConnectionsResponse>;
    clientConnections: grpc.handleUnaryCall<ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest, ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse>;
    connectionClientState: grpc.handleUnaryCall<ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest, ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse>;
    connectionConsensusState: grpc.handleUnaryCall<ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest, ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse>;
}

export interface IQueryClient {
    connection(request: ibc_core_connection_v1_query_pb.QueryConnectionRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionResponse) => void): grpc.ClientUnaryCall;
    connection(request: ibc_core_connection_v1_query_pb.QueryConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionResponse) => void): grpc.ClientUnaryCall;
    connection(request: ibc_core_connection_v1_query_pb.QueryConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionResponse) => void): grpc.ClientUnaryCall;
    connections(request: ibc_core_connection_v1_query_pb.QueryConnectionsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionsResponse) => void): grpc.ClientUnaryCall;
    connections(request: ibc_core_connection_v1_query_pb.QueryConnectionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionsResponse) => void): grpc.ClientUnaryCall;
    connections(request: ibc_core_connection_v1_query_pb.QueryConnectionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionsResponse) => void): grpc.ClientUnaryCall;
    clientConnections(request: ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse) => void): grpc.ClientUnaryCall;
    clientConnections(request: ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse) => void): grpc.ClientUnaryCall;
    clientConnections(request: ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse) => void): grpc.ClientUnaryCall;
    connectionClientState(request: ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse) => void): grpc.ClientUnaryCall;
    connectionClientState(request: ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse) => void): grpc.ClientUnaryCall;
    connectionClientState(request: ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse) => void): grpc.ClientUnaryCall;
    connectionConsensusState(request: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse) => void): grpc.ClientUnaryCall;
    connectionConsensusState(request: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse) => void): grpc.ClientUnaryCall;
    connectionConsensusState(request: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public connection(request: ibc_core_connection_v1_query_pb.QueryConnectionRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionResponse) => void): grpc.ClientUnaryCall;
    public connection(request: ibc_core_connection_v1_query_pb.QueryConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionResponse) => void): grpc.ClientUnaryCall;
    public connection(request: ibc_core_connection_v1_query_pb.QueryConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionResponse) => void): grpc.ClientUnaryCall;
    public connections(request: ibc_core_connection_v1_query_pb.QueryConnectionsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionsResponse) => void): grpc.ClientUnaryCall;
    public connections(request: ibc_core_connection_v1_query_pb.QueryConnectionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionsResponse) => void): grpc.ClientUnaryCall;
    public connections(request: ibc_core_connection_v1_query_pb.QueryConnectionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionsResponse) => void): grpc.ClientUnaryCall;
    public clientConnections(request: ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse) => void): grpc.ClientUnaryCall;
    public clientConnections(request: ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse) => void): grpc.ClientUnaryCall;
    public clientConnections(request: ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse) => void): grpc.ClientUnaryCall;
    public connectionClientState(request: ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse) => void): grpc.ClientUnaryCall;
    public connectionClientState(request: ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse) => void): grpc.ClientUnaryCall;
    public connectionClientState(request: ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse) => void): grpc.ClientUnaryCall;
    public connectionConsensusState(request: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse) => void): grpc.ClientUnaryCall;
    public connectionConsensusState(request: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse) => void): grpc.ClientUnaryCall;
    public connectionConsensusState(request: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse) => void): grpc.ClientUnaryCall;
}
