// package: cosmos.mint.v1beta1
// file: cosmos/mint/v1beta1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cosmos_mint_v1beta1_query_pb from "../../../cosmos/mint/v1beta1/query_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_mint_v1beta1_mint_pb from "../../../cosmos/mint/v1beta1/mint_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    params: IQueryService_IParams;
    inflation: IQueryService_IInflation;
    annualProvisions: IQueryService_IAnnualProvisions;
}

interface IQueryService_IParams extends grpc.MethodDefinition<cosmos_mint_v1beta1_query_pb.QueryParamsRequest, cosmos_mint_v1beta1_query_pb.QueryParamsResponse> {
    path: "/cosmos.mint.v1beta1.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_mint_v1beta1_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<cosmos_mint_v1beta1_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<cosmos_mint_v1beta1_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<cosmos_mint_v1beta1_query_pb.QueryParamsResponse>;
}
interface IQueryService_IInflation extends grpc.MethodDefinition<cosmos_mint_v1beta1_query_pb.QueryInflationRequest, cosmos_mint_v1beta1_query_pb.QueryInflationResponse> {
    path: "/cosmos.mint.v1beta1.Query/Inflation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_mint_v1beta1_query_pb.QueryInflationRequest>;
    requestDeserialize: grpc.deserialize<cosmos_mint_v1beta1_query_pb.QueryInflationRequest>;
    responseSerialize: grpc.serialize<cosmos_mint_v1beta1_query_pb.QueryInflationResponse>;
    responseDeserialize: grpc.deserialize<cosmos_mint_v1beta1_query_pb.QueryInflationResponse>;
}
interface IQueryService_IAnnualProvisions extends grpc.MethodDefinition<cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest, cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse> {
    path: "/cosmos.mint.v1beta1.Query/AnnualProvisions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest>;
    requestDeserialize: grpc.deserialize<cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest>;
    responseSerialize: grpc.serialize<cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse>;
    responseDeserialize: grpc.deserialize<cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    params: grpc.handleUnaryCall<cosmos_mint_v1beta1_query_pb.QueryParamsRequest, cosmos_mint_v1beta1_query_pb.QueryParamsResponse>;
    inflation: grpc.handleUnaryCall<cosmos_mint_v1beta1_query_pb.QueryInflationRequest, cosmos_mint_v1beta1_query_pb.QueryInflationResponse>;
    annualProvisions: grpc.handleUnaryCall<cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest, cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse>;
}

export interface IQueryClient {
    params(request: cosmos_mint_v1beta1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: cosmos_mint_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: cosmos_mint_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    inflation(request: cosmos_mint_v1beta1_query_pb.QueryInflationRequest, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryInflationResponse) => void): grpc.ClientUnaryCall;
    inflation(request: cosmos_mint_v1beta1_query_pb.QueryInflationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryInflationResponse) => void): grpc.ClientUnaryCall;
    inflation(request: cosmos_mint_v1beta1_query_pb.QueryInflationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryInflationResponse) => void): grpc.ClientUnaryCall;
    annualProvisions(request: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse) => void): grpc.ClientUnaryCall;
    annualProvisions(request: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse) => void): grpc.ClientUnaryCall;
    annualProvisions(request: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public params(request: cosmos_mint_v1beta1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: cosmos_mint_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: cosmos_mint_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public inflation(request: cosmos_mint_v1beta1_query_pb.QueryInflationRequest, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryInflationResponse) => void): grpc.ClientUnaryCall;
    public inflation(request: cosmos_mint_v1beta1_query_pb.QueryInflationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryInflationResponse) => void): grpc.ClientUnaryCall;
    public inflation(request: cosmos_mint_v1beta1_query_pb.QueryInflationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryInflationResponse) => void): grpc.ClientUnaryCall;
    public annualProvisions(request: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse) => void): grpc.ClientUnaryCall;
    public annualProvisions(request: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse) => void): grpc.ClientUnaryCall;
    public annualProvisions(request: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse) => void): grpc.ClientUnaryCall;
}
