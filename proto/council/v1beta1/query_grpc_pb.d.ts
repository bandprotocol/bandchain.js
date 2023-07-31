// package: council.v1beta1
// file: council/v1beta1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as council_v1beta1_query_pb from "../../council/v1beta1/query_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../cosmos/base/query/v1beta1/pagination_pb";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as council_v1beta1_types_pb from "../../council/v1beta1/types_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    params: IQueryService_IParams;
    councilInfo: IQueryService_ICouncilInfo;
    councilInfos: IQueryService_ICouncilInfos;
    proposal: IQueryService_IProposal;
    proposals: IQueryService_IProposals;
    votes: IQueryService_IVotes;
    tallyResult: IQueryService_ITallyResult;
}

interface IQueryService_IParams extends grpc.MethodDefinition<council_v1beta1_query_pb.QueryParamsRequest, council_v1beta1_query_pb.QueryParamsResponse> {
    path: "/council.v1beta1.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<council_v1beta1_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<council_v1beta1_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<council_v1beta1_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<council_v1beta1_query_pb.QueryParamsResponse>;
}
interface IQueryService_ICouncilInfo extends grpc.MethodDefinition<council_v1beta1_query_pb.QueryCouncilInfoRequest, council_v1beta1_query_pb.QueryCouncilInfoResponse> {
    path: "/council.v1beta1.Query/CouncilInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<council_v1beta1_query_pb.QueryCouncilInfoRequest>;
    requestDeserialize: grpc.deserialize<council_v1beta1_query_pb.QueryCouncilInfoRequest>;
    responseSerialize: grpc.serialize<council_v1beta1_query_pb.QueryCouncilInfoResponse>;
    responseDeserialize: grpc.deserialize<council_v1beta1_query_pb.QueryCouncilInfoResponse>;
}
interface IQueryService_ICouncilInfos extends grpc.MethodDefinition<council_v1beta1_query_pb.QueryCouncilInfosRequest, council_v1beta1_query_pb.QueryCouncilInfosResponse> {
    path: "/council.v1beta1.Query/CouncilInfos";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<council_v1beta1_query_pb.QueryCouncilInfosRequest>;
    requestDeserialize: grpc.deserialize<council_v1beta1_query_pb.QueryCouncilInfosRequest>;
    responseSerialize: grpc.serialize<council_v1beta1_query_pb.QueryCouncilInfosResponse>;
    responseDeserialize: grpc.deserialize<council_v1beta1_query_pb.QueryCouncilInfosResponse>;
}
interface IQueryService_IProposal extends grpc.MethodDefinition<council_v1beta1_query_pb.QueryProposalRequest, council_v1beta1_query_pb.QueryProposalResponse> {
    path: "/council.v1beta1.Query/Proposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<council_v1beta1_query_pb.QueryProposalRequest>;
    requestDeserialize: grpc.deserialize<council_v1beta1_query_pb.QueryProposalRequest>;
    responseSerialize: grpc.serialize<council_v1beta1_query_pb.QueryProposalResponse>;
    responseDeserialize: grpc.deserialize<council_v1beta1_query_pb.QueryProposalResponse>;
}
interface IQueryService_IProposals extends grpc.MethodDefinition<council_v1beta1_query_pb.QueryProposalsRequest, council_v1beta1_query_pb.QueryProposalsResponse> {
    path: "/council.v1beta1.Query/Proposals";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<council_v1beta1_query_pb.QueryProposalsRequest>;
    requestDeserialize: grpc.deserialize<council_v1beta1_query_pb.QueryProposalsRequest>;
    responseSerialize: grpc.serialize<council_v1beta1_query_pb.QueryProposalsResponse>;
    responseDeserialize: grpc.deserialize<council_v1beta1_query_pb.QueryProposalsResponse>;
}
interface IQueryService_IVotes extends grpc.MethodDefinition<council_v1beta1_query_pb.QueryVotesRequest, council_v1beta1_query_pb.QueryVotesResponse> {
    path: "/council.v1beta1.Query/Votes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<council_v1beta1_query_pb.QueryVotesRequest>;
    requestDeserialize: grpc.deserialize<council_v1beta1_query_pb.QueryVotesRequest>;
    responseSerialize: grpc.serialize<council_v1beta1_query_pb.QueryVotesResponse>;
    responseDeserialize: grpc.deserialize<council_v1beta1_query_pb.QueryVotesResponse>;
}
interface IQueryService_ITallyResult extends grpc.MethodDefinition<council_v1beta1_query_pb.QueryTallyResultRequest, council_v1beta1_query_pb.QueryTallyResultResponse> {
    path: "/council.v1beta1.Query/TallyResult";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<council_v1beta1_query_pb.QueryTallyResultRequest>;
    requestDeserialize: grpc.deserialize<council_v1beta1_query_pb.QueryTallyResultRequest>;
    responseSerialize: grpc.serialize<council_v1beta1_query_pb.QueryTallyResultResponse>;
    responseDeserialize: grpc.deserialize<council_v1beta1_query_pb.QueryTallyResultResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
    params: grpc.handleUnaryCall<council_v1beta1_query_pb.QueryParamsRequest, council_v1beta1_query_pb.QueryParamsResponse>;
    councilInfo: grpc.handleUnaryCall<council_v1beta1_query_pb.QueryCouncilInfoRequest, council_v1beta1_query_pb.QueryCouncilInfoResponse>;
    councilInfos: grpc.handleUnaryCall<council_v1beta1_query_pb.QueryCouncilInfosRequest, council_v1beta1_query_pb.QueryCouncilInfosResponse>;
    proposal: grpc.handleUnaryCall<council_v1beta1_query_pb.QueryProposalRequest, council_v1beta1_query_pb.QueryProposalResponse>;
    proposals: grpc.handleUnaryCall<council_v1beta1_query_pb.QueryProposalsRequest, council_v1beta1_query_pb.QueryProposalsResponse>;
    votes: grpc.handleUnaryCall<council_v1beta1_query_pb.QueryVotesRequest, council_v1beta1_query_pb.QueryVotesResponse>;
    tallyResult: grpc.handleUnaryCall<council_v1beta1_query_pb.QueryTallyResultRequest, council_v1beta1_query_pb.QueryTallyResultResponse>;
}

export interface IQueryClient {
    params(request: council_v1beta1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: council_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: council_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    councilInfo(request: council_v1beta1_query_pb.QueryCouncilInfoRequest, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryCouncilInfoResponse) => void): grpc.ClientUnaryCall;
    councilInfo(request: council_v1beta1_query_pb.QueryCouncilInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryCouncilInfoResponse) => void): grpc.ClientUnaryCall;
    councilInfo(request: council_v1beta1_query_pb.QueryCouncilInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryCouncilInfoResponse) => void): grpc.ClientUnaryCall;
    councilInfos(request: council_v1beta1_query_pb.QueryCouncilInfosRequest, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryCouncilInfosResponse) => void): grpc.ClientUnaryCall;
    councilInfos(request: council_v1beta1_query_pb.QueryCouncilInfosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryCouncilInfosResponse) => void): grpc.ClientUnaryCall;
    councilInfos(request: council_v1beta1_query_pb.QueryCouncilInfosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryCouncilInfosResponse) => void): grpc.ClientUnaryCall;
    proposal(request: council_v1beta1_query_pb.QueryProposalRequest, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryProposalResponse) => void): grpc.ClientUnaryCall;
    proposal(request: council_v1beta1_query_pb.QueryProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryProposalResponse) => void): grpc.ClientUnaryCall;
    proposal(request: council_v1beta1_query_pb.QueryProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryProposalResponse) => void): grpc.ClientUnaryCall;
    proposals(request: council_v1beta1_query_pb.QueryProposalsRequest, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryProposalsResponse) => void): grpc.ClientUnaryCall;
    proposals(request: council_v1beta1_query_pb.QueryProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryProposalsResponse) => void): grpc.ClientUnaryCall;
    proposals(request: council_v1beta1_query_pb.QueryProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryProposalsResponse) => void): grpc.ClientUnaryCall;
    votes(request: council_v1beta1_query_pb.QueryVotesRequest, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryVotesResponse) => void): grpc.ClientUnaryCall;
    votes(request: council_v1beta1_query_pb.QueryVotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryVotesResponse) => void): grpc.ClientUnaryCall;
    votes(request: council_v1beta1_query_pb.QueryVotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryVotesResponse) => void): grpc.ClientUnaryCall;
    tallyResult(request: council_v1beta1_query_pb.QueryTallyResultRequest, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryTallyResultResponse) => void): grpc.ClientUnaryCall;
    tallyResult(request: council_v1beta1_query_pb.QueryTallyResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryTallyResultResponse) => void): grpc.ClientUnaryCall;
    tallyResult(request: council_v1beta1_query_pb.QueryTallyResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryTallyResultResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public params(request: council_v1beta1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: council_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: council_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public councilInfo(request: council_v1beta1_query_pb.QueryCouncilInfoRequest, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryCouncilInfoResponse) => void): grpc.ClientUnaryCall;
    public councilInfo(request: council_v1beta1_query_pb.QueryCouncilInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryCouncilInfoResponse) => void): grpc.ClientUnaryCall;
    public councilInfo(request: council_v1beta1_query_pb.QueryCouncilInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryCouncilInfoResponse) => void): grpc.ClientUnaryCall;
    public councilInfos(request: council_v1beta1_query_pb.QueryCouncilInfosRequest, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryCouncilInfosResponse) => void): grpc.ClientUnaryCall;
    public councilInfos(request: council_v1beta1_query_pb.QueryCouncilInfosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryCouncilInfosResponse) => void): grpc.ClientUnaryCall;
    public councilInfos(request: council_v1beta1_query_pb.QueryCouncilInfosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryCouncilInfosResponse) => void): grpc.ClientUnaryCall;
    public proposal(request: council_v1beta1_query_pb.QueryProposalRequest, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryProposalResponse) => void): grpc.ClientUnaryCall;
    public proposal(request: council_v1beta1_query_pb.QueryProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryProposalResponse) => void): grpc.ClientUnaryCall;
    public proposal(request: council_v1beta1_query_pb.QueryProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryProposalResponse) => void): grpc.ClientUnaryCall;
    public proposals(request: council_v1beta1_query_pb.QueryProposalsRequest, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryProposalsResponse) => void): grpc.ClientUnaryCall;
    public proposals(request: council_v1beta1_query_pb.QueryProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryProposalsResponse) => void): grpc.ClientUnaryCall;
    public proposals(request: council_v1beta1_query_pb.QueryProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryProposalsResponse) => void): grpc.ClientUnaryCall;
    public votes(request: council_v1beta1_query_pb.QueryVotesRequest, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryVotesResponse) => void): grpc.ClientUnaryCall;
    public votes(request: council_v1beta1_query_pb.QueryVotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryVotesResponse) => void): grpc.ClientUnaryCall;
    public votes(request: council_v1beta1_query_pb.QueryVotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryVotesResponse) => void): grpc.ClientUnaryCall;
    public tallyResult(request: council_v1beta1_query_pb.QueryTallyResultRequest, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryTallyResultResponse) => void): grpc.ClientUnaryCall;
    public tallyResult(request: council_v1beta1_query_pb.QueryTallyResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryTallyResultResponse) => void): grpc.ClientUnaryCall;
    public tallyResult(request: council_v1beta1_query_pb.QueryTallyResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_query_pb.QueryTallyResultResponse) => void): grpc.ClientUnaryCall;
}
