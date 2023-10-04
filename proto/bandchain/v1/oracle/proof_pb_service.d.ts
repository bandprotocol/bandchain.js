// package: bandchain.v1.oracle
// file: bandchain/v1/oracle/proof.proto

import * as bandchain_v1_oracle_proof_pb from "../../../bandchain/v1/oracle/proof_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ServiceProof = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bandchain_v1_oracle_proof_pb.QueryProofRequest;
  readonly responseType: typeof bandchain_v1_oracle_proof_pb.QueryProofResponse;
};

type ServiceMultiProof = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bandchain_v1_oracle_proof_pb.QueryMultiProofRequest;
  readonly responseType: typeof bandchain_v1_oracle_proof_pb.QueryMultiProofResponse;
};

type ServiceRequestCountProof = {
  readonly methodName: string;
  readonly service: typeof Service;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bandchain_v1_oracle_proof_pb.QueryRequestCountProofRequest;
  readonly responseType: typeof bandchain_v1_oracle_proof_pb.QueryRequestCountProofResponse;
};

export class Service {
  static readonly serviceName: string;
  static readonly Proof: ServiceProof;
  static readonly MultiProof: ServiceMultiProof;
  static readonly RequestCountProof: ServiceRequestCountProof;
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

export class ServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  proof(
    requestMessage: bandchain_v1_oracle_proof_pb.QueryProofRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bandchain_v1_oracle_proof_pb.QueryProofResponse|null) => void
  ): UnaryResponse;
  proof(
    requestMessage: bandchain_v1_oracle_proof_pb.QueryProofRequest,
    callback: (error: ServiceError|null, responseMessage: bandchain_v1_oracle_proof_pb.QueryProofResponse|null) => void
  ): UnaryResponse;
  multiProof(
    requestMessage: bandchain_v1_oracle_proof_pb.QueryMultiProofRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bandchain_v1_oracle_proof_pb.QueryMultiProofResponse|null) => void
  ): UnaryResponse;
  multiProof(
    requestMessage: bandchain_v1_oracle_proof_pb.QueryMultiProofRequest,
    callback: (error: ServiceError|null, responseMessage: bandchain_v1_oracle_proof_pb.QueryMultiProofResponse|null) => void
  ): UnaryResponse;
  requestCountProof(
    requestMessage: bandchain_v1_oracle_proof_pb.QueryRequestCountProofRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bandchain_v1_oracle_proof_pb.QueryRequestCountProofResponse|null) => void
  ): UnaryResponse;
  requestCountProof(
    requestMessage: bandchain_v1_oracle_proof_pb.QueryRequestCountProofRequest,
    callback: (error: ServiceError|null, responseMessage: bandchain_v1_oracle_proof_pb.QueryRequestCountProofResponse|null) => void
  ): UnaryResponse;
}

