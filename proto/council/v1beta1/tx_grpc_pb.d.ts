// package: council.v1beta1
// file: council/v1beta1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as council_v1beta1_tx_pb from "../../council/v1beta1/tx_pb";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_proto_cosmos_pb from "../../cosmos_proto/cosmos_pb";
import * as cosmos_params_v1beta1_params_pb from "../../cosmos/params/v1beta1/params_pb";
import * as council_v1beta1_types_pb from "../../council/v1beta1/types_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    submitProposal: IMsgService_ISubmitProposal;
    execLegacyContent: IMsgService_IExecLegacyContent;
    vote: IMsgService_IVote;
}

interface IMsgService_ISubmitProposal extends grpc.MethodDefinition<council_v1beta1_tx_pb.MsgSubmitProposal, council_v1beta1_tx_pb.MsgSubmitProposalResponse> {
    path: "/council.v1beta1.Msg/SubmitProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<council_v1beta1_tx_pb.MsgSubmitProposal>;
    requestDeserialize: grpc.deserialize<council_v1beta1_tx_pb.MsgSubmitProposal>;
    responseSerialize: grpc.serialize<council_v1beta1_tx_pb.MsgSubmitProposalResponse>;
    responseDeserialize: grpc.deserialize<council_v1beta1_tx_pb.MsgSubmitProposalResponse>;
}
interface IMsgService_IExecLegacyContent extends grpc.MethodDefinition<council_v1beta1_tx_pb.MsgExecLegacyContent, council_v1beta1_tx_pb.MsgExecLegacyContentResponse> {
    path: "/council.v1beta1.Msg/ExecLegacyContent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<council_v1beta1_tx_pb.MsgExecLegacyContent>;
    requestDeserialize: grpc.deserialize<council_v1beta1_tx_pb.MsgExecLegacyContent>;
    responseSerialize: grpc.serialize<council_v1beta1_tx_pb.MsgExecLegacyContentResponse>;
    responseDeserialize: grpc.deserialize<council_v1beta1_tx_pb.MsgExecLegacyContentResponse>;
}
interface IMsgService_IVote extends grpc.MethodDefinition<council_v1beta1_tx_pb.MsgVote, council_v1beta1_tx_pb.MsgVoteResponse> {
    path: "/council.v1beta1.Msg/Vote";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<council_v1beta1_tx_pb.MsgVote>;
    requestDeserialize: grpc.deserialize<council_v1beta1_tx_pb.MsgVote>;
    responseSerialize: grpc.serialize<council_v1beta1_tx_pb.MsgVoteResponse>;
    responseDeserialize: grpc.deserialize<council_v1beta1_tx_pb.MsgVoteResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
    submitProposal: grpc.handleUnaryCall<council_v1beta1_tx_pb.MsgSubmitProposal, council_v1beta1_tx_pb.MsgSubmitProposalResponse>;
    execLegacyContent: grpc.handleUnaryCall<council_v1beta1_tx_pb.MsgExecLegacyContent, council_v1beta1_tx_pb.MsgExecLegacyContentResponse>;
    vote: grpc.handleUnaryCall<council_v1beta1_tx_pb.MsgVote, council_v1beta1_tx_pb.MsgVoteResponse>;
}

export interface IMsgClient {
    submitProposal(request: council_v1beta1_tx_pb.MsgSubmitProposal, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgSubmitProposalResponse) => void): grpc.ClientUnaryCall;
    submitProposal(request: council_v1beta1_tx_pb.MsgSubmitProposal, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgSubmitProposalResponse) => void): grpc.ClientUnaryCall;
    submitProposal(request: council_v1beta1_tx_pb.MsgSubmitProposal, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgSubmitProposalResponse) => void): grpc.ClientUnaryCall;
    execLegacyContent(request: council_v1beta1_tx_pb.MsgExecLegacyContent, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgExecLegacyContentResponse) => void): grpc.ClientUnaryCall;
    execLegacyContent(request: council_v1beta1_tx_pb.MsgExecLegacyContent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgExecLegacyContentResponse) => void): grpc.ClientUnaryCall;
    execLegacyContent(request: council_v1beta1_tx_pb.MsgExecLegacyContent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgExecLegacyContentResponse) => void): grpc.ClientUnaryCall;
    vote(request: council_v1beta1_tx_pb.MsgVote, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgVoteResponse) => void): grpc.ClientUnaryCall;
    vote(request: council_v1beta1_tx_pb.MsgVote, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgVoteResponse) => void): grpc.ClientUnaryCall;
    vote(request: council_v1beta1_tx_pb.MsgVote, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgVoteResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public submitProposal(request: council_v1beta1_tx_pb.MsgSubmitProposal, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgSubmitProposalResponse) => void): grpc.ClientUnaryCall;
    public submitProposal(request: council_v1beta1_tx_pb.MsgSubmitProposal, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgSubmitProposalResponse) => void): grpc.ClientUnaryCall;
    public submitProposal(request: council_v1beta1_tx_pb.MsgSubmitProposal, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgSubmitProposalResponse) => void): grpc.ClientUnaryCall;
    public execLegacyContent(request: council_v1beta1_tx_pb.MsgExecLegacyContent, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgExecLegacyContentResponse) => void): grpc.ClientUnaryCall;
    public execLegacyContent(request: council_v1beta1_tx_pb.MsgExecLegacyContent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgExecLegacyContentResponse) => void): grpc.ClientUnaryCall;
    public execLegacyContent(request: council_v1beta1_tx_pb.MsgExecLegacyContent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgExecLegacyContentResponse) => void): grpc.ClientUnaryCall;
    public vote(request: council_v1beta1_tx_pb.MsgVote, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgVoteResponse) => void): grpc.ClientUnaryCall;
    public vote(request: council_v1beta1_tx_pb.MsgVote, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgVoteResponse) => void): grpc.ClientUnaryCall;
    public vote(request: council_v1beta1_tx_pb.MsgVote, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: council_v1beta1_tx_pb.MsgVoteResponse) => void): grpc.ClientUnaryCall;
}
