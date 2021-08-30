// package: cosmos.gov.v1beta1
// file: cosmos/gov/v1beta1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cosmos_gov_v1beta1_tx_pb from "../../../cosmos/gov/v1beta1/tx_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_gov_v1beta1_gov_pb from "../../../cosmos/gov/v1beta1/gov_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    submitProposal: IMsgService_ISubmitProposal;
    vote: IMsgService_IVote;
    deposit: IMsgService_IDeposit;
}

interface IMsgService_ISubmitProposal extends grpc.MethodDefinition<cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal, cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse> {
    path: "/cosmos.gov.v1beta1.Msg/SubmitProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal>;
    requestDeserialize: grpc.deserialize<cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal>;
    responseSerialize: grpc.serialize<cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse>;
    responseDeserialize: grpc.deserialize<cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse>;
}
interface IMsgService_IVote extends grpc.MethodDefinition<cosmos_gov_v1beta1_tx_pb.MsgVote, cosmos_gov_v1beta1_tx_pb.MsgVoteResponse> {
    path: "/cosmos.gov.v1beta1.Msg/Vote";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_gov_v1beta1_tx_pb.MsgVote>;
    requestDeserialize: grpc.deserialize<cosmos_gov_v1beta1_tx_pb.MsgVote>;
    responseSerialize: grpc.serialize<cosmos_gov_v1beta1_tx_pb.MsgVoteResponse>;
    responseDeserialize: grpc.deserialize<cosmos_gov_v1beta1_tx_pb.MsgVoteResponse>;
}
interface IMsgService_IDeposit extends grpc.MethodDefinition<cosmos_gov_v1beta1_tx_pb.MsgDeposit, cosmos_gov_v1beta1_tx_pb.MsgDepositResponse> {
    path: "/cosmos.gov.v1beta1.Msg/Deposit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_gov_v1beta1_tx_pb.MsgDeposit>;
    requestDeserialize: grpc.deserialize<cosmos_gov_v1beta1_tx_pb.MsgDeposit>;
    responseSerialize: grpc.serialize<cosmos_gov_v1beta1_tx_pb.MsgDepositResponse>;
    responseDeserialize: grpc.deserialize<cosmos_gov_v1beta1_tx_pb.MsgDepositResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer {
    submitProposal: grpc.handleUnaryCall<cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal, cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse>;
    vote: grpc.handleUnaryCall<cosmos_gov_v1beta1_tx_pb.MsgVote, cosmos_gov_v1beta1_tx_pb.MsgVoteResponse>;
    deposit: grpc.handleUnaryCall<cosmos_gov_v1beta1_tx_pb.MsgDeposit, cosmos_gov_v1beta1_tx_pb.MsgDepositResponse>;
}

export interface IMsgClient {
    submitProposal(request: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse) => void): grpc.ClientUnaryCall;
    submitProposal(request: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse) => void): grpc.ClientUnaryCall;
    submitProposal(request: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse) => void): grpc.ClientUnaryCall;
    vote(request: cosmos_gov_v1beta1_tx_pb.MsgVote, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgVoteResponse) => void): grpc.ClientUnaryCall;
    vote(request: cosmos_gov_v1beta1_tx_pb.MsgVote, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgVoteResponse) => void): grpc.ClientUnaryCall;
    vote(request: cosmos_gov_v1beta1_tx_pb.MsgVote, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgVoteResponse) => void): grpc.ClientUnaryCall;
    deposit(request: cosmos_gov_v1beta1_tx_pb.MsgDeposit, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgDepositResponse) => void): grpc.ClientUnaryCall;
    deposit(request: cosmos_gov_v1beta1_tx_pb.MsgDeposit, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgDepositResponse) => void): grpc.ClientUnaryCall;
    deposit(request: cosmos_gov_v1beta1_tx_pb.MsgDeposit, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgDepositResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public submitProposal(request: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse) => void): grpc.ClientUnaryCall;
    public submitProposal(request: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse) => void): grpc.ClientUnaryCall;
    public submitProposal(request: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposal, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgSubmitProposalResponse) => void): grpc.ClientUnaryCall;
    public vote(request: cosmos_gov_v1beta1_tx_pb.MsgVote, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgVoteResponse) => void): grpc.ClientUnaryCall;
    public vote(request: cosmos_gov_v1beta1_tx_pb.MsgVote, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgVoteResponse) => void): grpc.ClientUnaryCall;
    public vote(request: cosmos_gov_v1beta1_tx_pb.MsgVote, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgVoteResponse) => void): grpc.ClientUnaryCall;
    public deposit(request: cosmos_gov_v1beta1_tx_pb.MsgDeposit, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgDepositResponse) => void): grpc.ClientUnaryCall;
    public deposit(request: cosmos_gov_v1beta1_tx_pb.MsgDeposit, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgDepositResponse) => void): grpc.ClientUnaryCall;
    public deposit(request: cosmos_gov_v1beta1_tx_pb.MsgDeposit, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_gov_v1beta1_tx_pb.MsgDepositResponse) => void): grpc.ClientUnaryCall;
}
