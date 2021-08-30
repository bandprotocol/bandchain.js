// package: ibc.core.connection.v1
// file: ibc/core/connection/v1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ibc_core_connection_v1_tx_pb from "../../../../ibc/core/connection/v1/tx_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";
import * as ibc_core_connection_v1_connection_pb from "../../../../ibc/core/connection/v1/connection_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    connectionOpenInit: IMsgService_IConnectionOpenInit;
    connectionOpenTry: IMsgService_IConnectionOpenTry;
    connectionOpenAck: IMsgService_IConnectionOpenAck;
    connectionOpenConfirm: IMsgService_IConnectionOpenConfirm;
}

interface IMsgService_IConnectionOpenInit extends grpc.MethodDefinition<ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit, ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse> {
    path: "/ibc.core.connection.v1.Msg/ConnectionOpenInit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit>;
    requestDeserialize: grpc.deserialize<ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit>;
    responseSerialize: grpc.serialize<ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse>;
}
interface IMsgService_IConnectionOpenTry extends grpc.MethodDefinition<ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry, ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse> {
    path: "/ibc.core.connection.v1.Msg/ConnectionOpenTry";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry>;
    requestDeserialize: grpc.deserialize<ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry>;
    responseSerialize: grpc.serialize<ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse>;
}
interface IMsgService_IConnectionOpenAck extends grpc.MethodDefinition<ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck, ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse> {
    path: "/ibc.core.connection.v1.Msg/ConnectionOpenAck";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck>;
    requestDeserialize: grpc.deserialize<ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck>;
    responseSerialize: grpc.serialize<ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse>;
}
interface IMsgService_IConnectionOpenConfirm extends grpc.MethodDefinition<ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm, ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse> {
    path: "/ibc.core.connection.v1.Msg/ConnectionOpenConfirm";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm>;
    requestDeserialize: grpc.deserialize<ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm>;
    responseSerialize: grpc.serialize<ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer {
    connectionOpenInit: grpc.handleUnaryCall<ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit, ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse>;
    connectionOpenTry: grpc.handleUnaryCall<ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry, ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse>;
    connectionOpenAck: grpc.handleUnaryCall<ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck, ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse>;
    connectionOpenConfirm: grpc.handleUnaryCall<ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm, ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse>;
}

export interface IMsgClient {
    connectionOpenInit(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse) => void): grpc.ClientUnaryCall;
    connectionOpenInit(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse) => void): grpc.ClientUnaryCall;
    connectionOpenInit(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse) => void): grpc.ClientUnaryCall;
    connectionOpenTry(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse) => void): grpc.ClientUnaryCall;
    connectionOpenTry(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse) => void): grpc.ClientUnaryCall;
    connectionOpenTry(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse) => void): grpc.ClientUnaryCall;
    connectionOpenAck(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse) => void): grpc.ClientUnaryCall;
    connectionOpenAck(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse) => void): grpc.ClientUnaryCall;
    connectionOpenAck(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse) => void): grpc.ClientUnaryCall;
    connectionOpenConfirm(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse) => void): grpc.ClientUnaryCall;
    connectionOpenConfirm(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse) => void): grpc.ClientUnaryCall;
    connectionOpenConfirm(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public connectionOpenInit(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse) => void): grpc.ClientUnaryCall;
    public connectionOpenInit(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse) => void): grpc.ClientUnaryCall;
    public connectionOpenInit(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse) => void): grpc.ClientUnaryCall;
    public connectionOpenTry(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse) => void): grpc.ClientUnaryCall;
    public connectionOpenTry(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse) => void): grpc.ClientUnaryCall;
    public connectionOpenTry(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse) => void): grpc.ClientUnaryCall;
    public connectionOpenAck(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse) => void): grpc.ClientUnaryCall;
    public connectionOpenAck(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse) => void): grpc.ClientUnaryCall;
    public connectionOpenAck(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse) => void): grpc.ClientUnaryCall;
    public connectionOpenConfirm(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse) => void): grpc.ClientUnaryCall;
    public connectionOpenConfirm(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse) => void): grpc.ClientUnaryCall;
    public connectionOpenConfirm(request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse) => void): grpc.ClientUnaryCall;
}
