// package: ibc.applications.fee.v1
// file: ibc/applications/fee/v1/query.proto

import * as ibc_applications_fee_v1_query_pb from "../../../../ibc/applications/fee/v1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryIncentivizedPackets = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsRequest;
  readonly responseType: typeof ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsResponse;
};

type QueryIncentivizedPacket = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketRequest;
  readonly responseType: typeof ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketResponse;
};

type QueryIncentivizedPacketsForChannel = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelRequest;
  readonly responseType: typeof ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelResponse;
};

type QueryTotalRecvFees = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesRequest;
  readonly responseType: typeof ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesResponse;
};

type QueryTotalAckFees = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_fee_v1_query_pb.QueryTotalAckFeesRequest;
  readonly responseType: typeof ibc_applications_fee_v1_query_pb.QueryTotalAckFeesResponse;
};

type QueryTotalTimeoutFees = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesRequest;
  readonly responseType: typeof ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesResponse;
};

type QueryPayee = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_fee_v1_query_pb.QueryPayeeRequest;
  readonly responseType: typeof ibc_applications_fee_v1_query_pb.QueryPayeeResponse;
};

type QueryCounterpartyPayee = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_fee_v1_query_pb.QueryCounterpartyPayeeRequest;
  readonly responseType: typeof ibc_applications_fee_v1_query_pb.QueryCounterpartyPayeeResponse;
};

type QueryFeeEnabledChannels = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsRequest;
  readonly responseType: typeof ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsResponse;
};

type QueryFeeEnabledChannel = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelRequest;
  readonly responseType: typeof ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly IncentivizedPackets: QueryIncentivizedPackets;
  static readonly IncentivizedPacket: QueryIncentivizedPacket;
  static readonly IncentivizedPacketsForChannel: QueryIncentivizedPacketsForChannel;
  static readonly TotalRecvFees: QueryTotalRecvFees;
  static readonly TotalAckFees: QueryTotalAckFees;
  static readonly TotalTimeoutFees: QueryTotalTimeoutFees;
  static readonly Payee: QueryPayee;
  static readonly CounterpartyPayee: QueryCounterpartyPayee;
  static readonly FeeEnabledChannels: QueryFeeEnabledChannels;
  static readonly FeeEnabledChannel: QueryFeeEnabledChannel;
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
  incentivizedPackets(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsResponse|null) => void
  ): UnaryResponse;
  incentivizedPackets(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsResponse|null) => void
  ): UnaryResponse;
  incentivizedPacket(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketResponse|null) => void
  ): UnaryResponse;
  incentivizedPacket(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketResponse|null) => void
  ): UnaryResponse;
  incentivizedPacketsForChannel(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelResponse|null) => void
  ): UnaryResponse;
  incentivizedPacketsForChannel(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelResponse|null) => void
  ): UnaryResponse;
  totalRecvFees(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesResponse|null) => void
  ): UnaryResponse;
  totalRecvFees(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesResponse|null) => void
  ): UnaryResponse;
  totalAckFees(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryTotalAckFeesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryTotalAckFeesResponse|null) => void
  ): UnaryResponse;
  totalAckFees(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryTotalAckFeesRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryTotalAckFeesResponse|null) => void
  ): UnaryResponse;
  totalTimeoutFees(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesResponse|null) => void
  ): UnaryResponse;
  totalTimeoutFees(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesResponse|null) => void
  ): UnaryResponse;
  payee(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryPayeeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryPayeeResponse|null) => void
  ): UnaryResponse;
  payee(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryPayeeRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryPayeeResponse|null) => void
  ): UnaryResponse;
  counterpartyPayee(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryCounterpartyPayeeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryCounterpartyPayeeResponse|null) => void
  ): UnaryResponse;
  counterpartyPayee(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryCounterpartyPayeeRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryCounterpartyPayeeResponse|null) => void
  ): UnaryResponse;
  feeEnabledChannels(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsResponse|null) => void
  ): UnaryResponse;
  feeEnabledChannels(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsResponse|null) => void
  ): UnaryResponse;
  feeEnabledChannel(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelResponse|null) => void
  ): UnaryResponse;
  feeEnabledChannel(
    requestMessage: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelRequest,
    callback: (error: ServiceError|null, responseMessage: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelResponse|null) => void
  ): UnaryResponse;
}

