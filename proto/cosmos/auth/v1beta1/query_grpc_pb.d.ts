// package: cosmos.auth.v1beta1
// file: cosmos/auth/v1beta1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cosmos_auth_v1beta1_query_pb from "../../../cosmos/auth/v1beta1/query_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as cosmos_auth_v1beta1_auth_pb from "../../../cosmos/auth/v1beta1/auth_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    account: IQueryService_IAccount;
    params: IQueryService_IParams;
}

interface IQueryService_IAccount extends grpc.MethodDefinition<cosmos_auth_v1beta1_query_pb.QueryAccountRequest, cosmos_auth_v1beta1_query_pb.QueryAccountResponse> {
    path: "/cosmos.auth.v1beta1.Query/Account";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_auth_v1beta1_query_pb.QueryAccountRequest>;
    requestDeserialize: grpc.deserialize<cosmos_auth_v1beta1_query_pb.QueryAccountRequest>;
    responseSerialize: grpc.serialize<cosmos_auth_v1beta1_query_pb.QueryAccountResponse>;
    responseDeserialize: grpc.deserialize<cosmos_auth_v1beta1_query_pb.QueryAccountResponse>;
}
interface IQueryService_IParams extends grpc.MethodDefinition<cosmos_auth_v1beta1_query_pb.QueryParamsRequest, cosmos_auth_v1beta1_query_pb.QueryParamsResponse> {
    path: "/cosmos.auth.v1beta1.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_auth_v1beta1_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<cosmos_auth_v1beta1_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<cosmos_auth_v1beta1_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<cosmos_auth_v1beta1_query_pb.QueryParamsResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    account: grpc.handleUnaryCall<cosmos_auth_v1beta1_query_pb.QueryAccountRequest, cosmos_auth_v1beta1_query_pb.QueryAccountResponse>;
    params: grpc.handleUnaryCall<cosmos_auth_v1beta1_query_pb.QueryParamsRequest, cosmos_auth_v1beta1_query_pb.QueryParamsResponse>;
}

export interface IQueryClient {
    account(request: cosmos_auth_v1beta1_query_pb.QueryAccountRequest, callback: (error: grpc.ServiceError | null, response: cosmos_auth_v1beta1_query_pb.QueryAccountResponse) => void): grpc.ClientUnaryCall;
    account(request: cosmos_auth_v1beta1_query_pb.QueryAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_auth_v1beta1_query_pb.QueryAccountResponse) => void): grpc.ClientUnaryCall;
    account(request: cosmos_auth_v1beta1_query_pb.QueryAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_auth_v1beta1_query_pb.QueryAccountResponse) => void): grpc.ClientUnaryCall;
    params(request: cosmos_auth_v1beta1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_auth_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: cosmos_auth_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_auth_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: cosmos_auth_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_auth_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public account(request: cosmos_auth_v1beta1_query_pb.QueryAccountRequest, callback: (error: grpc.ServiceError | null, response: cosmos_auth_v1beta1_query_pb.QueryAccountResponse) => void): grpc.ClientUnaryCall;
    public account(request: cosmos_auth_v1beta1_query_pb.QueryAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_auth_v1beta1_query_pb.QueryAccountResponse) => void): grpc.ClientUnaryCall;
    public account(request: cosmos_auth_v1beta1_query_pb.QueryAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_auth_v1beta1_query_pb.QueryAccountResponse) => void): grpc.ClientUnaryCall;
    public params(request: cosmos_auth_v1beta1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_auth_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: cosmos_auth_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_auth_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: cosmos_auth_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_auth_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
}
