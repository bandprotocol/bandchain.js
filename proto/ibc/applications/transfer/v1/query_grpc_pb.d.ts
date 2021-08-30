// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ibc_applications_transfer_v1_query_pb from "../../../../ibc/applications/transfer/v1/query_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../../cosmos/base/query/v1beta1/pagination_pb";
import * as ibc_applications_transfer_v1_transfer_pb from "../../../../ibc/applications/transfer/v1/transfer_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    denomTrace: IQueryService_IDenomTrace;
    denomTraces: IQueryService_IDenomTraces;
    params: IQueryService_IParams;
}

interface IQueryService_IDenomTrace extends grpc.MethodDefinition<ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest, ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse> {
    path: "/ibc.applications.transfer.v1.Query/DenomTrace";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest>;
    requestDeserialize: grpc.deserialize<ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest>;
    responseSerialize: grpc.serialize<ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse>;
    responseDeserialize: grpc.deserialize<ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse>;
}
interface IQueryService_IDenomTraces extends grpc.MethodDefinition<ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest, ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse> {
    path: "/ibc.applications.transfer.v1.Query/DenomTraces";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest>;
    requestDeserialize: grpc.deserialize<ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest>;
    responseSerialize: grpc.serialize<ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse>;
    responseDeserialize: grpc.deserialize<ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse>;
}
interface IQueryService_IParams extends grpc.MethodDefinition<ibc_applications_transfer_v1_query_pb.QueryParamsRequest, ibc_applications_transfer_v1_query_pb.QueryParamsResponse> {
    path: "/ibc.applications.transfer.v1.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_applications_transfer_v1_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<ibc_applications_transfer_v1_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<ibc_applications_transfer_v1_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<ibc_applications_transfer_v1_query_pb.QueryParamsResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    denomTrace: grpc.handleUnaryCall<ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest, ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse>;
    denomTraces: grpc.handleUnaryCall<ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest, ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse>;
    params: grpc.handleUnaryCall<ibc_applications_transfer_v1_query_pb.QueryParamsRequest, ibc_applications_transfer_v1_query_pb.QueryParamsResponse>;
}

export interface IQueryClient {
    denomTrace(request: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse) => void): grpc.ClientUnaryCall;
    denomTrace(request: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse) => void): grpc.ClientUnaryCall;
    denomTrace(request: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse) => void): grpc.ClientUnaryCall;
    denomTraces(request: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse) => void): grpc.ClientUnaryCall;
    denomTraces(request: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse) => void): grpc.ClientUnaryCall;
    denomTraces(request: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse) => void): grpc.ClientUnaryCall;
    params(request: ibc_applications_transfer_v1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: ibc_applications_transfer_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: ibc_applications_transfer_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public denomTrace(request: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse) => void): grpc.ClientUnaryCall;
    public denomTrace(request: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse) => void): grpc.ClientUnaryCall;
    public denomTrace(request: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse) => void): grpc.ClientUnaryCall;
    public denomTraces(request: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse) => void): grpc.ClientUnaryCall;
    public denomTraces(request: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse) => void): grpc.ClientUnaryCall;
    public denomTraces(request: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse) => void): grpc.ClientUnaryCall;
    public params(request: ibc_applications_transfer_v1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: ibc_applications_transfer_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: ibc_applications_transfer_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
}
