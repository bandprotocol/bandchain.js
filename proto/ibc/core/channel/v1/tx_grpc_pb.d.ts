// package: ibc.core.channel.v1
// file: ibc/core/channel/v1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ibc_core_channel_v1_tx_pb from "../../../../ibc/core/channel/v1/tx_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";
import * as ibc_core_channel_v1_channel_pb from "../../../../ibc/core/channel/v1/channel_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    channelOpenInit: IMsgService_IChannelOpenInit;
    channelOpenTry: IMsgService_IChannelOpenTry;
    channelOpenAck: IMsgService_IChannelOpenAck;
    channelOpenConfirm: IMsgService_IChannelOpenConfirm;
    channelCloseInit: IMsgService_IChannelCloseInit;
    channelCloseConfirm: IMsgService_IChannelCloseConfirm;
    recvPacket: IMsgService_IRecvPacket;
    timeout: IMsgService_ITimeout;
    timeoutOnClose: IMsgService_ITimeoutOnClose;
    acknowledgement: IMsgService_IAcknowledgement;
}

interface IMsgService_IChannelOpenInit extends grpc.MethodDefinition<ibc_core_channel_v1_tx_pb.MsgChannelOpenInit, ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse> {
    path: "/ibc.core.channel.v1.Msg/ChannelOpenInit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgChannelOpenInit>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgChannelOpenInit>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse>;
}
interface IMsgService_IChannelOpenTry extends grpc.MethodDefinition<ibc_core_channel_v1_tx_pb.MsgChannelOpenTry, ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse> {
    path: "/ibc.core.channel.v1.Msg/ChannelOpenTry";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgChannelOpenTry>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgChannelOpenTry>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse>;
}
interface IMsgService_IChannelOpenAck extends grpc.MethodDefinition<ibc_core_channel_v1_tx_pb.MsgChannelOpenAck, ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse> {
    path: "/ibc.core.channel.v1.Msg/ChannelOpenAck";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgChannelOpenAck>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgChannelOpenAck>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse>;
}
interface IMsgService_IChannelOpenConfirm extends grpc.MethodDefinition<ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm, ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse> {
    path: "/ibc.core.channel.v1.Msg/ChannelOpenConfirm";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse>;
}
interface IMsgService_IChannelCloseInit extends grpc.MethodDefinition<ibc_core_channel_v1_tx_pb.MsgChannelCloseInit, ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse> {
    path: "/ibc.core.channel.v1.Msg/ChannelCloseInit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgChannelCloseInit>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgChannelCloseInit>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse>;
}
interface IMsgService_IChannelCloseConfirm extends grpc.MethodDefinition<ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm, ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse> {
    path: "/ibc.core.channel.v1.Msg/ChannelCloseConfirm";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse>;
}
interface IMsgService_IRecvPacket extends grpc.MethodDefinition<ibc_core_channel_v1_tx_pb.MsgRecvPacket, ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse> {
    path: "/ibc.core.channel.v1.Msg/RecvPacket";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgRecvPacket>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgRecvPacket>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse>;
}
interface IMsgService_ITimeout extends grpc.MethodDefinition<ibc_core_channel_v1_tx_pb.MsgTimeout, ibc_core_channel_v1_tx_pb.MsgTimeoutResponse> {
    path: "/ibc.core.channel.v1.Msg/Timeout";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgTimeout>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgTimeout>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgTimeoutResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgTimeoutResponse>;
}
interface IMsgService_ITimeoutOnClose extends grpc.MethodDefinition<ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose, ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse> {
    path: "/ibc.core.channel.v1.Msg/TimeoutOnClose";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse>;
}
interface IMsgService_IAcknowledgement extends grpc.MethodDefinition<ibc_core_channel_v1_tx_pb.MsgAcknowledgement, ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse> {
    path: "/ibc.core.channel.v1.Msg/Acknowledgement";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgAcknowledgement>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgAcknowledgement>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer {
    channelOpenInit: grpc.handleUnaryCall<ibc_core_channel_v1_tx_pb.MsgChannelOpenInit, ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse>;
    channelOpenTry: grpc.handleUnaryCall<ibc_core_channel_v1_tx_pb.MsgChannelOpenTry, ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse>;
    channelOpenAck: grpc.handleUnaryCall<ibc_core_channel_v1_tx_pb.MsgChannelOpenAck, ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse>;
    channelOpenConfirm: grpc.handleUnaryCall<ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm, ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse>;
    channelCloseInit: grpc.handleUnaryCall<ibc_core_channel_v1_tx_pb.MsgChannelCloseInit, ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse>;
    channelCloseConfirm: grpc.handleUnaryCall<ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm, ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse>;
    recvPacket: grpc.handleUnaryCall<ibc_core_channel_v1_tx_pb.MsgRecvPacket, ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse>;
    timeout: grpc.handleUnaryCall<ibc_core_channel_v1_tx_pb.MsgTimeout, ibc_core_channel_v1_tx_pb.MsgTimeoutResponse>;
    timeoutOnClose: grpc.handleUnaryCall<ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose, ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse>;
    acknowledgement: grpc.handleUnaryCall<ibc_core_channel_v1_tx_pb.MsgAcknowledgement, ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse>;
}

export interface IMsgClient {
    channelOpenInit(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse) => void): grpc.ClientUnaryCall;
    channelOpenInit(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse) => void): grpc.ClientUnaryCall;
    channelOpenInit(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse) => void): grpc.ClientUnaryCall;
    channelOpenTry(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse) => void): grpc.ClientUnaryCall;
    channelOpenTry(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse) => void): grpc.ClientUnaryCall;
    channelOpenTry(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse) => void): grpc.ClientUnaryCall;
    channelOpenAck(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse) => void): grpc.ClientUnaryCall;
    channelOpenAck(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse) => void): grpc.ClientUnaryCall;
    channelOpenAck(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse) => void): grpc.ClientUnaryCall;
    channelOpenConfirm(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse) => void): grpc.ClientUnaryCall;
    channelOpenConfirm(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse) => void): grpc.ClientUnaryCall;
    channelOpenConfirm(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse) => void): grpc.ClientUnaryCall;
    channelCloseInit(request: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse) => void): grpc.ClientUnaryCall;
    channelCloseInit(request: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse) => void): grpc.ClientUnaryCall;
    channelCloseInit(request: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse) => void): grpc.ClientUnaryCall;
    channelCloseConfirm(request: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse) => void): grpc.ClientUnaryCall;
    channelCloseConfirm(request: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse) => void): grpc.ClientUnaryCall;
    channelCloseConfirm(request: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse) => void): grpc.ClientUnaryCall;
    recvPacket(request: ibc_core_channel_v1_tx_pb.MsgRecvPacket, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse) => void): grpc.ClientUnaryCall;
    recvPacket(request: ibc_core_channel_v1_tx_pb.MsgRecvPacket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse) => void): grpc.ClientUnaryCall;
    recvPacket(request: ibc_core_channel_v1_tx_pb.MsgRecvPacket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse) => void): grpc.ClientUnaryCall;
    timeout(request: ibc_core_channel_v1_tx_pb.MsgTimeout, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgTimeoutResponse) => void): grpc.ClientUnaryCall;
    timeout(request: ibc_core_channel_v1_tx_pb.MsgTimeout, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgTimeoutResponse) => void): grpc.ClientUnaryCall;
    timeout(request: ibc_core_channel_v1_tx_pb.MsgTimeout, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgTimeoutResponse) => void): grpc.ClientUnaryCall;
    timeoutOnClose(request: ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse) => void): grpc.ClientUnaryCall;
    timeoutOnClose(request: ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse) => void): grpc.ClientUnaryCall;
    timeoutOnClose(request: ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse) => void): grpc.ClientUnaryCall;
    acknowledgement(request: ibc_core_channel_v1_tx_pb.MsgAcknowledgement, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse) => void): grpc.ClientUnaryCall;
    acknowledgement(request: ibc_core_channel_v1_tx_pb.MsgAcknowledgement, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse) => void): grpc.ClientUnaryCall;
    acknowledgement(request: ibc_core_channel_v1_tx_pb.MsgAcknowledgement, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public channelOpenInit(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse) => void): grpc.ClientUnaryCall;
    public channelOpenInit(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse) => void): grpc.ClientUnaryCall;
    public channelOpenInit(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse) => void): grpc.ClientUnaryCall;
    public channelOpenTry(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse) => void): grpc.ClientUnaryCall;
    public channelOpenTry(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse) => void): grpc.ClientUnaryCall;
    public channelOpenTry(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse) => void): grpc.ClientUnaryCall;
    public channelOpenAck(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse) => void): grpc.ClientUnaryCall;
    public channelOpenAck(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse) => void): grpc.ClientUnaryCall;
    public channelOpenAck(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse) => void): grpc.ClientUnaryCall;
    public channelOpenConfirm(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse) => void): grpc.ClientUnaryCall;
    public channelOpenConfirm(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse) => void): grpc.ClientUnaryCall;
    public channelOpenConfirm(request: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse) => void): grpc.ClientUnaryCall;
    public channelCloseInit(request: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse) => void): grpc.ClientUnaryCall;
    public channelCloseInit(request: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse) => void): grpc.ClientUnaryCall;
    public channelCloseInit(request: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse) => void): grpc.ClientUnaryCall;
    public channelCloseConfirm(request: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse) => void): grpc.ClientUnaryCall;
    public channelCloseConfirm(request: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse) => void): grpc.ClientUnaryCall;
    public channelCloseConfirm(request: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse) => void): grpc.ClientUnaryCall;
    public recvPacket(request: ibc_core_channel_v1_tx_pb.MsgRecvPacket, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse) => void): grpc.ClientUnaryCall;
    public recvPacket(request: ibc_core_channel_v1_tx_pb.MsgRecvPacket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse) => void): grpc.ClientUnaryCall;
    public recvPacket(request: ibc_core_channel_v1_tx_pb.MsgRecvPacket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse) => void): grpc.ClientUnaryCall;
    public timeout(request: ibc_core_channel_v1_tx_pb.MsgTimeout, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgTimeoutResponse) => void): grpc.ClientUnaryCall;
    public timeout(request: ibc_core_channel_v1_tx_pb.MsgTimeout, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgTimeoutResponse) => void): grpc.ClientUnaryCall;
    public timeout(request: ibc_core_channel_v1_tx_pb.MsgTimeout, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgTimeoutResponse) => void): grpc.ClientUnaryCall;
    public timeoutOnClose(request: ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse) => void): grpc.ClientUnaryCall;
    public timeoutOnClose(request: ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse) => void): grpc.ClientUnaryCall;
    public timeoutOnClose(request: ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse) => void): grpc.ClientUnaryCall;
    public acknowledgement(request: ibc_core_channel_v1_tx_pb.MsgAcknowledgement, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse) => void): grpc.ClientUnaryCall;
    public acknowledgement(request: ibc_core_channel_v1_tx_pb.MsgAcknowledgement, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse) => void): grpc.ClientUnaryCall;
    public acknowledgement(request: ibc_core_channel_v1_tx_pb.MsgAcknowledgement, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse) => void): grpc.ClientUnaryCall;
}
