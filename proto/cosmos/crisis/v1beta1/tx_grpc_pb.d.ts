// package: cosmos.crisis.v1beta1
// file: cosmos/crisis/v1beta1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cosmos_crisis_v1beta1_tx_pb from "../../../cosmos/crisis/v1beta1/tx_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    verifyInvariant: IMsgService_IVerifyInvariant;
}

interface IMsgService_IVerifyInvariant extends grpc.MethodDefinition<cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant, cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse> {
    path: "/cosmos.crisis.v1beta1.Msg/VerifyInvariant";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant>;
    requestDeserialize: grpc.deserialize<cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant>;
    responseSerialize: grpc.serialize<cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse>;
    responseDeserialize: grpc.deserialize<cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer {
    verifyInvariant: grpc.handleUnaryCall<cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant, cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse>;
}

export interface IMsgClient {
    verifyInvariant(request: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant, callback: (error: grpc.ServiceError | null, response: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse) => void): grpc.ClientUnaryCall;
    verifyInvariant(request: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse) => void): grpc.ClientUnaryCall;
    verifyInvariant(request: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public verifyInvariant(request: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant, callback: (error: grpc.ServiceError | null, response: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse) => void): grpc.ClientUnaryCall;
    public verifyInvariant(request: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse) => void): grpc.ClientUnaryCall;
    public verifyInvariant(request: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse) => void): grpc.ClientUnaryCall;
}
