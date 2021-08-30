// package: cosmos.evidence.v1beta1
// file: cosmos/evidence/v1beta1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cosmos_evidence_v1beta1_query_pb from "../../../cosmos/evidence/v1beta1/query_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    evidence: IQueryService_IEvidence;
    allEvidence: IQueryService_IAllEvidence;
}

interface IQueryService_IEvidence extends grpc.MethodDefinition<cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest, cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse> {
    path: "/cosmos.evidence.v1beta1.Query/Evidence";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest>;
    requestDeserialize: grpc.deserialize<cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest>;
    responseSerialize: grpc.serialize<cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse>;
    responseDeserialize: grpc.deserialize<cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse>;
}
interface IQueryService_IAllEvidence extends grpc.MethodDefinition<cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest, cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse> {
    path: "/cosmos.evidence.v1beta1.Query/AllEvidence";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest>;
    requestDeserialize: grpc.deserialize<cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest>;
    responseSerialize: grpc.serialize<cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse>;
    responseDeserialize: grpc.deserialize<cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    evidence: grpc.handleUnaryCall<cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest, cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse>;
    allEvidence: grpc.handleUnaryCall<cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest, cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse>;
}

export interface IQueryClient {
    evidence(request: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse) => void): grpc.ClientUnaryCall;
    evidence(request: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse) => void): grpc.ClientUnaryCall;
    evidence(request: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse) => void): grpc.ClientUnaryCall;
    allEvidence(request: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse) => void): grpc.ClientUnaryCall;
    allEvidence(request: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse) => void): grpc.ClientUnaryCall;
    allEvidence(request: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public evidence(request: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse) => void): grpc.ClientUnaryCall;
    public evidence(request: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse) => void): grpc.ClientUnaryCall;
    public evidence(request: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse) => void): grpc.ClientUnaryCall;
    public allEvidence(request: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse) => void): grpc.ClientUnaryCall;
    public allEvidence(request: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse) => void): grpc.ClientUnaryCall;
    public allEvidence(request: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse) => void): grpc.ClientUnaryCall;
}
