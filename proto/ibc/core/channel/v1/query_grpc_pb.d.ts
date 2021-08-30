// package: ibc.core.channel.v1
// file: ibc/core/channel/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ibc_core_channel_v1_query_pb from "../../../../ibc/core/channel/v1/query_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../../cosmos/base/query/v1beta1/pagination_pb";
import * as ibc_core_channel_v1_channel_pb from "../../../../ibc/core/channel/v1/channel_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    channel: IQueryService_IChannel;
    channels: IQueryService_IChannels;
    connectionChannels: IQueryService_IConnectionChannels;
    channelClientState: IQueryService_IChannelClientState;
    channelConsensusState: IQueryService_IChannelConsensusState;
    packetCommitment: IQueryService_IPacketCommitment;
    packetCommitments: IQueryService_IPacketCommitments;
    packetReceipt: IQueryService_IPacketReceipt;
    packetAcknowledgement: IQueryService_IPacketAcknowledgement;
    packetAcknowledgements: IQueryService_IPacketAcknowledgements;
    unreceivedPackets: IQueryService_IUnreceivedPackets;
    unreceivedAcks: IQueryService_IUnreceivedAcks;
    nextSequenceReceive: IQueryService_INextSequenceReceive;
}

interface IQueryService_IChannel extends grpc.MethodDefinition<ibc_core_channel_v1_query_pb.QueryChannelRequest, ibc_core_channel_v1_query_pb.QueryChannelResponse> {
    path: "/ibc.core.channel.v1.Query/Channel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryChannelRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryChannelRequest>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryChannelResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryChannelResponse>;
}
interface IQueryService_IChannels extends grpc.MethodDefinition<ibc_core_channel_v1_query_pb.QueryChannelsRequest, ibc_core_channel_v1_query_pb.QueryChannelsResponse> {
    path: "/ibc.core.channel.v1.Query/Channels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryChannelsRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryChannelsRequest>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryChannelsResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryChannelsResponse>;
}
interface IQueryService_IConnectionChannels extends grpc.MethodDefinition<ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest, ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse> {
    path: "/ibc.core.channel.v1.Query/ConnectionChannels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse>;
}
interface IQueryService_IChannelClientState extends grpc.MethodDefinition<ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest, ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse> {
    path: "/ibc.core.channel.v1.Query/ChannelClientState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse>;
}
interface IQueryService_IChannelConsensusState extends grpc.MethodDefinition<ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest, ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse> {
    path: "/ibc.core.channel.v1.Query/ChannelConsensusState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse>;
}
interface IQueryService_IPacketCommitment extends grpc.MethodDefinition<ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest, ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse> {
    path: "/ibc.core.channel.v1.Query/PacketCommitment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse>;
}
interface IQueryService_IPacketCommitments extends grpc.MethodDefinition<ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest, ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse> {
    path: "/ibc.core.channel.v1.Query/PacketCommitments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse>;
}
interface IQueryService_IPacketReceipt extends grpc.MethodDefinition<ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest, ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse> {
    path: "/ibc.core.channel.v1.Query/PacketReceipt";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse>;
}
interface IQueryService_IPacketAcknowledgement extends grpc.MethodDefinition<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest, ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse> {
    path: "/ibc.core.channel.v1.Query/PacketAcknowledgement";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse>;
}
interface IQueryService_IPacketAcknowledgements extends grpc.MethodDefinition<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest, ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse> {
    path: "/ibc.core.channel.v1.Query/PacketAcknowledgements";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse>;
}
interface IQueryService_IUnreceivedPackets extends grpc.MethodDefinition<ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest, ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse> {
    path: "/ibc.core.channel.v1.Query/UnreceivedPackets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse>;
}
interface IQueryService_IUnreceivedAcks extends grpc.MethodDefinition<ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest, ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse> {
    path: "/ibc.core.channel.v1.Query/UnreceivedAcks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse>;
}
interface IQueryService_INextSequenceReceive extends grpc.MethodDefinition<ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest, ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse> {
    path: "/ibc.core.channel.v1.Query/NextSequenceReceive";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest>;
    responseSerialize: grpc.serialize<ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    channel: grpc.handleUnaryCall<ibc_core_channel_v1_query_pb.QueryChannelRequest, ibc_core_channel_v1_query_pb.QueryChannelResponse>;
    channels: grpc.handleUnaryCall<ibc_core_channel_v1_query_pb.QueryChannelsRequest, ibc_core_channel_v1_query_pb.QueryChannelsResponse>;
    connectionChannels: grpc.handleUnaryCall<ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest, ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse>;
    channelClientState: grpc.handleUnaryCall<ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest, ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse>;
    channelConsensusState: grpc.handleUnaryCall<ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest, ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse>;
    packetCommitment: grpc.handleUnaryCall<ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest, ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse>;
    packetCommitments: grpc.handleUnaryCall<ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest, ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse>;
    packetReceipt: grpc.handleUnaryCall<ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest, ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse>;
    packetAcknowledgement: grpc.handleUnaryCall<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest, ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse>;
    packetAcknowledgements: grpc.handleUnaryCall<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest, ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse>;
    unreceivedPackets: grpc.handleUnaryCall<ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest, ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse>;
    unreceivedAcks: grpc.handleUnaryCall<ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest, ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse>;
    nextSequenceReceive: grpc.handleUnaryCall<ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest, ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse>;
}

export interface IQueryClient {
    channel(request: ibc_core_channel_v1_query_pb.QueryChannelRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelResponse) => void): grpc.ClientUnaryCall;
    channel(request: ibc_core_channel_v1_query_pb.QueryChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelResponse) => void): grpc.ClientUnaryCall;
    channel(request: ibc_core_channel_v1_query_pb.QueryChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelResponse) => void): grpc.ClientUnaryCall;
    channels(request: ibc_core_channel_v1_query_pb.QueryChannelsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelsResponse) => void): grpc.ClientUnaryCall;
    channels(request: ibc_core_channel_v1_query_pb.QueryChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelsResponse) => void): grpc.ClientUnaryCall;
    channels(request: ibc_core_channel_v1_query_pb.QueryChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelsResponse) => void): grpc.ClientUnaryCall;
    connectionChannels(request: ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse) => void): grpc.ClientUnaryCall;
    connectionChannels(request: ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse) => void): grpc.ClientUnaryCall;
    connectionChannels(request: ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse) => void): grpc.ClientUnaryCall;
    channelClientState(request: ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse) => void): grpc.ClientUnaryCall;
    channelClientState(request: ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse) => void): grpc.ClientUnaryCall;
    channelClientState(request: ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse) => void): grpc.ClientUnaryCall;
    channelConsensusState(request: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse) => void): grpc.ClientUnaryCall;
    channelConsensusState(request: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse) => void): grpc.ClientUnaryCall;
    channelConsensusState(request: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse) => void): grpc.ClientUnaryCall;
    packetCommitment(request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse) => void): grpc.ClientUnaryCall;
    packetCommitment(request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse) => void): grpc.ClientUnaryCall;
    packetCommitment(request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse) => void): grpc.ClientUnaryCall;
    packetCommitments(request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse) => void): grpc.ClientUnaryCall;
    packetCommitments(request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse) => void): grpc.ClientUnaryCall;
    packetCommitments(request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse) => void): grpc.ClientUnaryCall;
    packetReceipt(request: ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse) => void): grpc.ClientUnaryCall;
    packetReceipt(request: ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse) => void): grpc.ClientUnaryCall;
    packetReceipt(request: ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse) => void): grpc.ClientUnaryCall;
    packetAcknowledgement(request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse) => void): grpc.ClientUnaryCall;
    packetAcknowledgement(request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse) => void): grpc.ClientUnaryCall;
    packetAcknowledgement(request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse) => void): grpc.ClientUnaryCall;
    packetAcknowledgements(request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse) => void): grpc.ClientUnaryCall;
    packetAcknowledgements(request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse) => void): grpc.ClientUnaryCall;
    packetAcknowledgements(request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse) => void): grpc.ClientUnaryCall;
    unreceivedPackets(request: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse) => void): grpc.ClientUnaryCall;
    unreceivedPackets(request: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse) => void): grpc.ClientUnaryCall;
    unreceivedPackets(request: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse) => void): grpc.ClientUnaryCall;
    unreceivedAcks(request: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse) => void): grpc.ClientUnaryCall;
    unreceivedAcks(request: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse) => void): grpc.ClientUnaryCall;
    unreceivedAcks(request: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse) => void): grpc.ClientUnaryCall;
    nextSequenceReceive(request: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse) => void): grpc.ClientUnaryCall;
    nextSequenceReceive(request: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse) => void): grpc.ClientUnaryCall;
    nextSequenceReceive(request: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public channel(request: ibc_core_channel_v1_query_pb.QueryChannelRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelResponse) => void): grpc.ClientUnaryCall;
    public channel(request: ibc_core_channel_v1_query_pb.QueryChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelResponse) => void): grpc.ClientUnaryCall;
    public channel(request: ibc_core_channel_v1_query_pb.QueryChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelResponse) => void): grpc.ClientUnaryCall;
    public channels(request: ibc_core_channel_v1_query_pb.QueryChannelsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelsResponse) => void): grpc.ClientUnaryCall;
    public channels(request: ibc_core_channel_v1_query_pb.QueryChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelsResponse) => void): grpc.ClientUnaryCall;
    public channels(request: ibc_core_channel_v1_query_pb.QueryChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelsResponse) => void): grpc.ClientUnaryCall;
    public connectionChannels(request: ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse) => void): grpc.ClientUnaryCall;
    public connectionChannels(request: ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse) => void): grpc.ClientUnaryCall;
    public connectionChannels(request: ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse) => void): grpc.ClientUnaryCall;
    public channelClientState(request: ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse) => void): grpc.ClientUnaryCall;
    public channelClientState(request: ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse) => void): grpc.ClientUnaryCall;
    public channelClientState(request: ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse) => void): grpc.ClientUnaryCall;
    public channelConsensusState(request: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse) => void): grpc.ClientUnaryCall;
    public channelConsensusState(request: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse) => void): grpc.ClientUnaryCall;
    public channelConsensusState(request: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse) => void): grpc.ClientUnaryCall;
    public packetCommitment(request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse) => void): grpc.ClientUnaryCall;
    public packetCommitment(request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse) => void): grpc.ClientUnaryCall;
    public packetCommitment(request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse) => void): grpc.ClientUnaryCall;
    public packetCommitments(request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse) => void): grpc.ClientUnaryCall;
    public packetCommitments(request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse) => void): grpc.ClientUnaryCall;
    public packetCommitments(request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse) => void): grpc.ClientUnaryCall;
    public packetReceipt(request: ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse) => void): grpc.ClientUnaryCall;
    public packetReceipt(request: ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse) => void): grpc.ClientUnaryCall;
    public packetReceipt(request: ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse) => void): grpc.ClientUnaryCall;
    public packetAcknowledgement(request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse) => void): grpc.ClientUnaryCall;
    public packetAcknowledgement(request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse) => void): grpc.ClientUnaryCall;
    public packetAcknowledgement(request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse) => void): grpc.ClientUnaryCall;
    public packetAcknowledgements(request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse) => void): grpc.ClientUnaryCall;
    public packetAcknowledgements(request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse) => void): grpc.ClientUnaryCall;
    public packetAcknowledgements(request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse) => void): grpc.ClientUnaryCall;
    public unreceivedPackets(request: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse) => void): grpc.ClientUnaryCall;
    public unreceivedPackets(request: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse) => void): grpc.ClientUnaryCall;
    public unreceivedPackets(request: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse) => void): grpc.ClientUnaryCall;
    public unreceivedAcks(request: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse) => void): grpc.ClientUnaryCall;
    public unreceivedAcks(request: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse) => void): grpc.ClientUnaryCall;
    public unreceivedAcks(request: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse) => void): grpc.ClientUnaryCall;
    public nextSequenceReceive(request: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse) => void): grpc.ClientUnaryCall;
    public nextSequenceReceive(request: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse) => void): grpc.ClientUnaryCall;
    public nextSequenceReceive(request: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse) => void): grpc.ClientUnaryCall;
}
