// package: cosmos.evidence.v1beta1
// file: cosmos/evidence/v1beta1/query.proto

import * as cosmos_evidence_v1beta1_query_pb from "../../../cosmos/evidence/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryEvidence = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest;
  readonly responseType: typeof cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse;
};

type QueryAllEvidence = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest;
  readonly responseType: typeof cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Evidence: QueryEvidence;
  static readonly AllEvidence: QueryAllEvidence;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class QueryClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  evidence(
    requestMessage: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse|null) => void
  ): UnaryResponse;
  evidence(
    requestMessage: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse|null) => void
  ): UnaryResponse;
  allEvidence(
    requestMessage: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse|null) => void
  ): UnaryResponse;
  allEvidence(
    requestMessage: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse|null) => void
  ): UnaryResponse;
}

