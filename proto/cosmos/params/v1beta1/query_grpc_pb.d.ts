// package: cosmos.params.v1beta1
// file: cosmos/params/v1beta1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cosmos_params_v1beta1_query_pb from "../../../cosmos/params/v1beta1/query_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_params_v1beta1_params_pb from "../../../cosmos/params/v1beta1/params_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    params: IQueryService_IParams;
}

interface IQueryService_IParams extends grpc.MethodDefinition<cosmos_params_v1beta1_query_pb.QueryParamsRequest, cosmos_params_v1beta1_query_pb.QueryParamsResponse> {
    path: "/cosmos.params.v1beta1.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_params_v1beta1_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<cosmos_params_v1beta1_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<cosmos_params_v1beta1_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<cosmos_params_v1beta1_query_pb.QueryParamsResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    params: grpc.handleUnaryCall<cosmos_params_v1beta1_query_pb.QueryParamsRequest, cosmos_params_v1beta1_query_pb.QueryParamsResponse>;
}

export interface IQueryClient {
    params(request: cosmos_params_v1beta1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_params_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: cosmos_params_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_params_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: cosmos_params_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_params_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public params(request: cosmos_params_v1beta1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_params_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: cosmos_params_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_params_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: cosmos_params_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_params_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
}
