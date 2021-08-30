// package: ibc.core.client.v1
// file: ibc/core/client/v1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ibc_core_client_v1_tx_pb from "../../../../ibc/core/client/v1/tx_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createClient: IMsgService_ICreateClient;
    updateClient: IMsgService_IUpdateClient;
    upgradeClient: IMsgService_IUpgradeClient;
    submitMisbehaviour: IMsgService_ISubmitMisbehaviour;
}

interface IMsgService_ICreateClient extends grpc.MethodDefinition<ibc_core_client_v1_tx_pb.MsgCreateClient, ibc_core_client_v1_tx_pb.MsgCreateClientResponse> {
    path: "/ibc.core.client.v1.Msg/CreateClient";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_tx_pb.MsgCreateClient>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_tx_pb.MsgCreateClient>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_tx_pb.MsgCreateClientResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_tx_pb.MsgCreateClientResponse>;
}
interface IMsgService_IUpdateClient extends grpc.MethodDefinition<ibc_core_client_v1_tx_pb.MsgUpdateClient, ibc_core_client_v1_tx_pb.MsgUpdateClientResponse> {
    path: "/ibc.core.client.v1.Msg/UpdateClient";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_tx_pb.MsgUpdateClient>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_tx_pb.MsgUpdateClient>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_tx_pb.MsgUpdateClientResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_tx_pb.MsgUpdateClientResponse>;
}
interface IMsgService_IUpgradeClient extends grpc.MethodDefinition<ibc_core_client_v1_tx_pb.MsgUpgradeClient, ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse> {
    path: "/ibc.core.client.v1.Msg/UpgradeClient";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_tx_pb.MsgUpgradeClient>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_tx_pb.MsgUpgradeClient>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse>;
}
interface IMsgService_ISubmitMisbehaviour extends grpc.MethodDefinition<ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour, ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse> {
    path: "/ibc.core.client.v1.Msg/SubmitMisbehaviour";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer {
    createClient: grpc.handleUnaryCall<ibc_core_client_v1_tx_pb.MsgCreateClient, ibc_core_client_v1_tx_pb.MsgCreateClientResponse>;
    updateClient: grpc.handleUnaryCall<ibc_core_client_v1_tx_pb.MsgUpdateClient, ibc_core_client_v1_tx_pb.MsgUpdateClientResponse>;
    upgradeClient: grpc.handleUnaryCall<ibc_core_client_v1_tx_pb.MsgUpgradeClient, ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse>;
    submitMisbehaviour: grpc.handleUnaryCall<ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour, ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse>;
}

export interface IMsgClient {
    createClient(request: ibc_core_client_v1_tx_pb.MsgCreateClient, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgCreateClientResponse) => void): grpc.ClientUnaryCall;
    createClient(request: ibc_core_client_v1_tx_pb.MsgCreateClient, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgCreateClientResponse) => void): grpc.ClientUnaryCall;
    createClient(request: ibc_core_client_v1_tx_pb.MsgCreateClient, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgCreateClientResponse) => void): grpc.ClientUnaryCall;
    updateClient(request: ibc_core_client_v1_tx_pb.MsgUpdateClient, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgUpdateClientResponse) => void): grpc.ClientUnaryCall;
    updateClient(request: ibc_core_client_v1_tx_pb.MsgUpdateClient, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgUpdateClientResponse) => void): grpc.ClientUnaryCall;
    updateClient(request: ibc_core_client_v1_tx_pb.MsgUpdateClient, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgUpdateClientResponse) => void): grpc.ClientUnaryCall;
    upgradeClient(request: ibc_core_client_v1_tx_pb.MsgUpgradeClient, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse) => void): grpc.ClientUnaryCall;
    upgradeClient(request: ibc_core_client_v1_tx_pb.MsgUpgradeClient, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse) => void): grpc.ClientUnaryCall;
    upgradeClient(request: ibc_core_client_v1_tx_pb.MsgUpgradeClient, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse) => void): grpc.ClientUnaryCall;
    submitMisbehaviour(request: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse) => void): grpc.ClientUnaryCall;
    submitMisbehaviour(request: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse) => void): grpc.ClientUnaryCall;
    submitMisbehaviour(request: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createClient(request: ibc_core_client_v1_tx_pb.MsgCreateClient, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgCreateClientResponse) => void): grpc.ClientUnaryCall;
    public createClient(request: ibc_core_client_v1_tx_pb.MsgCreateClient, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgCreateClientResponse) => void): grpc.ClientUnaryCall;
    public createClient(request: ibc_core_client_v1_tx_pb.MsgCreateClient, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgCreateClientResponse) => void): grpc.ClientUnaryCall;
    public updateClient(request: ibc_core_client_v1_tx_pb.MsgUpdateClient, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgUpdateClientResponse) => void): grpc.ClientUnaryCall;
    public updateClient(request: ibc_core_client_v1_tx_pb.MsgUpdateClient, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgUpdateClientResponse) => void): grpc.ClientUnaryCall;
    public updateClient(request: ibc_core_client_v1_tx_pb.MsgUpdateClient, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgUpdateClientResponse) => void): grpc.ClientUnaryCall;
    public upgradeClient(request: ibc_core_client_v1_tx_pb.MsgUpgradeClient, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse) => void): grpc.ClientUnaryCall;
    public upgradeClient(request: ibc_core_client_v1_tx_pb.MsgUpgradeClient, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse) => void): grpc.ClientUnaryCall;
    public upgradeClient(request: ibc_core_client_v1_tx_pb.MsgUpgradeClient, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse) => void): grpc.ClientUnaryCall;
    public submitMisbehaviour(request: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse) => void): grpc.ClientUnaryCall;
    public submitMisbehaviour(request: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse) => void): grpc.ClientUnaryCall;
    public submitMisbehaviour(request: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse) => void): grpc.ClientUnaryCall;
}
