// package: cosmos.slashing.v1beta1
// file: cosmos/slashing/v1beta1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cosmos_slashing_v1beta1_tx_pb from "../../../cosmos/slashing/v1beta1/tx_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    unjail: IMsgService_IUnjail;
}

interface IMsgService_IUnjail extends grpc.MethodDefinition<cosmos_slashing_v1beta1_tx_pb.MsgUnjail, cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse> {
    path: "/cosmos.slashing.v1beta1.Msg/Unjail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_slashing_v1beta1_tx_pb.MsgUnjail>;
    requestDeserialize: grpc.deserialize<cosmos_slashing_v1beta1_tx_pb.MsgUnjail>;
    responseSerialize: grpc.serialize<cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse>;
    responseDeserialize: grpc.deserialize<cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer {
    unjail: grpc.handleUnaryCall<cosmos_slashing_v1beta1_tx_pb.MsgUnjail, cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse>;
}

export interface IMsgClient {
    unjail(request: cosmos_slashing_v1beta1_tx_pb.MsgUnjail, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse) => void): grpc.ClientUnaryCall;
    unjail(request: cosmos_slashing_v1beta1_tx_pb.MsgUnjail, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse) => void): grpc.ClientUnaryCall;
    unjail(request: cosmos_slashing_v1beta1_tx_pb.MsgUnjail, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public unjail(request: cosmos_slashing_v1beta1_tx_pb.MsgUnjail, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse) => void): grpc.ClientUnaryCall;
    public unjail(request: cosmos_slashing_v1beta1_tx_pb.MsgUnjail, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse) => void): grpc.ClientUnaryCall;
    public unjail(request: cosmos_slashing_v1beta1_tx_pb.MsgUnjail, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse) => void): grpc.ClientUnaryCall;
}
