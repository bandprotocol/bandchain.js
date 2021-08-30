// package: cosmos.evidence.v1beta1
// file: cosmos/evidence/v1beta1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cosmos_evidence_v1beta1_tx_pb from "../../../cosmos/evidence/v1beta1/tx_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    submitEvidence: IMsgService_ISubmitEvidence;
}

interface IMsgService_ISubmitEvidence extends grpc.MethodDefinition<cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence, cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse> {
    path: "/cosmos.evidence.v1beta1.Msg/SubmitEvidence";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence>;
    requestDeserialize: grpc.deserialize<cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence>;
    responseSerialize: grpc.serialize<cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse>;
    responseDeserialize: grpc.deserialize<cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer {
    submitEvidence: grpc.handleUnaryCall<cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence, cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse>;
}

export interface IMsgClient {
    submitEvidence(request: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse) => void): grpc.ClientUnaryCall;
    submitEvidence(request: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse) => void): grpc.ClientUnaryCall;
    submitEvidence(request: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public submitEvidence(request: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse) => void): grpc.ClientUnaryCall;
    public submitEvidence(request: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse) => void): grpc.ClientUnaryCall;
    public submitEvidence(request: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse) => void): grpc.ClientUnaryCall;
}
