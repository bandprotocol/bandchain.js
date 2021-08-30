// package: cosmos.slashing.v1beta1
// file: cosmos/slashing/v1beta1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cosmos_slashing_v1beta1_query_pb from "../../../cosmos/slashing/v1beta1/query_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_slashing_v1beta1_slashing_pb from "../../../cosmos/slashing/v1beta1/slashing_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    params: IQueryService_IParams;
    signingInfo: IQueryService_ISigningInfo;
    signingInfos: IQueryService_ISigningInfos;
}

interface IQueryService_IParams extends grpc.MethodDefinition<cosmos_slashing_v1beta1_query_pb.QueryParamsRequest, cosmos_slashing_v1beta1_query_pb.QueryParamsResponse> {
    path: "/cosmos.slashing.v1beta1.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_slashing_v1beta1_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<cosmos_slashing_v1beta1_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<cosmos_slashing_v1beta1_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<cosmos_slashing_v1beta1_query_pb.QueryParamsResponse>;
}
interface IQueryService_ISigningInfo extends grpc.MethodDefinition<cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest, cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse> {
    path: "/cosmos.slashing.v1beta1.Query/SigningInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest>;
    requestDeserialize: grpc.deserialize<cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest>;
    responseSerialize: grpc.serialize<cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse>;
    responseDeserialize: grpc.deserialize<cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse>;
}
interface IQueryService_ISigningInfos extends grpc.MethodDefinition<cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest, cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse> {
    path: "/cosmos.slashing.v1beta1.Query/SigningInfos";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest>;
    requestDeserialize: grpc.deserialize<cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest>;
    responseSerialize: grpc.serialize<cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse>;
    responseDeserialize: grpc.deserialize<cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    params: grpc.handleUnaryCall<cosmos_slashing_v1beta1_query_pb.QueryParamsRequest, cosmos_slashing_v1beta1_query_pb.QueryParamsResponse>;
    signingInfo: grpc.handleUnaryCall<cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest, cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse>;
    signingInfos: grpc.handleUnaryCall<cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest, cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse>;
}

export interface IQueryClient {
    params(request: cosmos_slashing_v1beta1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: cosmos_slashing_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: cosmos_slashing_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    signingInfo(request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse) => void): grpc.ClientUnaryCall;
    signingInfo(request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse) => void): grpc.ClientUnaryCall;
    signingInfo(request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse) => void): grpc.ClientUnaryCall;
    signingInfos(request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse) => void): grpc.ClientUnaryCall;
    signingInfos(request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse) => void): grpc.ClientUnaryCall;
    signingInfos(request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public params(request: cosmos_slashing_v1beta1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: cosmos_slashing_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: cosmos_slashing_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public signingInfo(request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse) => void): grpc.ClientUnaryCall;
    public signingInfo(request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse) => void): grpc.ClientUnaryCall;
    public signingInfo(request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse) => void): grpc.ClientUnaryCall;
    public signingInfos(request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse) => void): grpc.ClientUnaryCall;
    public signingInfos(request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse) => void): grpc.ClientUnaryCall;
    public signingInfos(request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse) => void): grpc.ClientUnaryCall;
}
