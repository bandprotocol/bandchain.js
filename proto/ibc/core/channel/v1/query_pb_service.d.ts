// package: ibc.core.channel.v1
// file: ibc/core/channel/v1/query.proto

import * as ibc_core_channel_v1_query_pb from "../../../../ibc/core/channel/v1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryChannel = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_query_pb.QueryChannelRequest;
  readonly responseType: typeof ibc_core_channel_v1_query_pb.QueryChannelResponse;
};

type QueryChannels = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_query_pb.QueryChannelsRequest;
  readonly responseType: typeof ibc_core_channel_v1_query_pb.QueryChannelsResponse;
};

type QueryConnectionChannels = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest;
  readonly responseType: typeof ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse;
};

type QueryChannelClientState = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest;
  readonly responseType: typeof ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse;
};

type QueryChannelConsensusState = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest;
  readonly responseType: typeof ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse;
};

type QueryPacketCommitment = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest;
  readonly responseType: typeof ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse;
};

type QueryPacketCommitments = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest;
  readonly responseType: typeof ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse;
};

type QueryPacketReceipt = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest;
  readonly responseType: typeof ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse;
};

type QueryPacketAcknowledgement = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest;
  readonly responseType: typeof ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse;
};

type QueryPacketAcknowledgements = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest;
  readonly responseType: typeof ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse;
};

type QueryUnreceivedPackets = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest;
  readonly responseType: typeof ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse;
};

type QueryUnreceivedAcks = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest;
  readonly responseType: typeof ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse;
};

type QueryNextSequenceReceive = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest;
  readonly responseType: typeof ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Channel: QueryChannel;
  static readonly Channels: QueryChannels;
  static readonly ConnectionChannels: QueryConnectionChannels;
  static readonly ChannelClientState: QueryChannelClientState;
  static readonly ChannelConsensusState: QueryChannelConsensusState;
  static readonly PacketCommitment: QueryPacketCommitment;
  static readonly PacketCommitments: QueryPacketCommitments;
  static readonly PacketReceipt: QueryPacketReceipt;
  static readonly PacketAcknowledgement: QueryPacketAcknowledgement;
  static readonly PacketAcknowledgements: QueryPacketAcknowledgements;
  static readonly UnreceivedPackets: QueryUnreceivedPackets;
  static readonly UnreceivedAcks: QueryUnreceivedAcks;
  static readonly NextSequenceReceive: QueryNextSequenceReceive;
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

export class QueryClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  channel(
    requestMessage: ibc_core_channel_v1_query_pb.QueryChannelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryChannelResponse|null) => void
  ): UnaryResponse;
  channel(
    requestMessage: ibc_core_channel_v1_query_pb.QueryChannelRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryChannelResponse|null) => void
  ): UnaryResponse;
  channels(
    requestMessage: ibc_core_channel_v1_query_pb.QueryChannelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryChannelsResponse|null) => void
  ): UnaryResponse;
  channels(
    requestMessage: ibc_core_channel_v1_query_pb.QueryChannelsRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryChannelsResponse|null) => void
  ): UnaryResponse;
  connectionChannels(
    requestMessage: ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse|null) => void
  ): UnaryResponse;
  connectionChannels(
    requestMessage: ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse|null) => void
  ): UnaryResponse;
  channelClientState(
    requestMessage: ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse|null) => void
  ): UnaryResponse;
  channelClientState(
    requestMessage: ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse|null) => void
  ): UnaryResponse;
  channelConsensusState(
    requestMessage: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse|null) => void
  ): UnaryResponse;
  channelConsensusState(
    requestMessage: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse|null) => void
  ): UnaryResponse;
  packetCommitment(
    requestMessage: ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse|null) => void
  ): UnaryResponse;
  packetCommitment(
    requestMessage: ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse|null) => void
  ): UnaryResponse;
  packetCommitments(
    requestMessage: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse|null) => void
  ): UnaryResponse;
  packetCommitments(
    requestMessage: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse|null) => void
  ): UnaryResponse;
  packetReceipt(
    requestMessage: ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse|null) => void
  ): UnaryResponse;
  packetReceipt(
    requestMessage: ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse|null) => void
  ): UnaryResponse;
  packetAcknowledgement(
    requestMessage: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse|null) => void
  ): UnaryResponse;
  packetAcknowledgement(
    requestMessage: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse|null) => void
  ): UnaryResponse;
  packetAcknowledgements(
    requestMessage: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse|null) => void
  ): UnaryResponse;
  packetAcknowledgements(
    requestMessage: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse|null) => void
  ): UnaryResponse;
  unreceivedPackets(
    requestMessage: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse|null) => void
  ): UnaryResponse;
  unreceivedPackets(
    requestMessage: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse|null) => void
  ): UnaryResponse;
  unreceivedAcks(
    requestMessage: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse|null) => void
  ): UnaryResponse;
  unreceivedAcks(
    requestMessage: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse|null) => void
  ): UnaryResponse;
  nextSequenceReceive(
    requestMessage: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse|null) => void
  ): UnaryResponse;
  nextSequenceReceive(
    requestMessage: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse|null) => void
  ): UnaryResponse;
}

