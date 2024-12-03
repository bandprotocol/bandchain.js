// package: band.tunnel.v1beta1
// file: band/tunnel/v1beta1/query.proto

import * as band_tunnel_v1beta1_query_pb from "../../../band/tunnel/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryTunnels = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_query_pb.QueryTunnelsRequest;
  readonly responseType: typeof band_tunnel_v1beta1_query_pb.QueryTunnelsResponse;
};

type QueryTunnel = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_query_pb.QueryTunnelRequest;
  readonly responseType: typeof band_tunnel_v1beta1_query_pb.QueryTunnelResponse;
};

type QueryDeposits = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_query_pb.QueryDepositsRequest;
  readonly responseType: typeof band_tunnel_v1beta1_query_pb.QueryDepositsResponse;
};

type QueryDeposit = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_query_pb.QueryDepositRequest;
  readonly responseType: typeof band_tunnel_v1beta1_query_pb.QueryDepositResponse;
};

type QueryPackets = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_query_pb.QueryPacketsRequest;
  readonly responseType: typeof band_tunnel_v1beta1_query_pb.QueryPacketsResponse;
};

type QueryPacket = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_query_pb.QueryPacketRequest;
  readonly responseType: typeof band_tunnel_v1beta1_query_pb.QueryPacketResponse;
};

type QueryTotalFees = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_query_pb.QueryTotalFeesRequest;
  readonly responseType: typeof band_tunnel_v1beta1_query_pb.QueryTotalFeesResponse;
};

type QueryParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof band_tunnel_v1beta1_query_pb.QueryParamsRequest;
  readonly responseType: typeof band_tunnel_v1beta1_query_pb.QueryParamsResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Tunnels: QueryTunnels;
  static readonly Tunnel: QueryTunnel;
  static readonly Deposits: QueryDeposits;
  static readonly Deposit: QueryDeposit;
  static readonly Packets: QueryPackets;
  static readonly Packet: QueryPacket;
  static readonly TotalFees: QueryTotalFees;
  static readonly Params: QueryParams;
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
  tunnels(
    requestMessage: band_tunnel_v1beta1_query_pb.QueryTunnelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_query_pb.QueryTunnelsResponse|null) => void
  ): UnaryResponse;
  tunnels(
    requestMessage: band_tunnel_v1beta1_query_pb.QueryTunnelsRequest,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_query_pb.QueryTunnelsResponse|null) => void
  ): UnaryResponse;
  tunnel(
    requestMessage: band_tunnel_v1beta1_query_pb.QueryTunnelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_query_pb.QueryTunnelResponse|null) => void
  ): UnaryResponse;
  tunnel(
    requestMessage: band_tunnel_v1beta1_query_pb.QueryTunnelRequest,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_query_pb.QueryTunnelResponse|null) => void
  ): UnaryResponse;
  deposits(
    requestMessage: band_tunnel_v1beta1_query_pb.QueryDepositsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_query_pb.QueryDepositsResponse|null) => void
  ): UnaryResponse;
  deposits(
    requestMessage: band_tunnel_v1beta1_query_pb.QueryDepositsRequest,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_query_pb.QueryDepositsResponse|null) => void
  ): UnaryResponse;
  deposit(
    requestMessage: band_tunnel_v1beta1_query_pb.QueryDepositRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_query_pb.QueryDepositResponse|null) => void
  ): UnaryResponse;
  deposit(
    requestMessage: band_tunnel_v1beta1_query_pb.QueryDepositRequest,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_query_pb.QueryDepositResponse|null) => void
  ): UnaryResponse;
  packets(
    requestMessage: band_tunnel_v1beta1_query_pb.QueryPacketsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_query_pb.QueryPacketsResponse|null) => void
  ): UnaryResponse;
  packets(
    requestMessage: band_tunnel_v1beta1_query_pb.QueryPacketsRequest,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_query_pb.QueryPacketsResponse|null) => void
  ): UnaryResponse;
  packet(
    requestMessage: band_tunnel_v1beta1_query_pb.QueryPacketRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_query_pb.QueryPacketResponse|null) => void
  ): UnaryResponse;
  packet(
    requestMessage: band_tunnel_v1beta1_query_pb.QueryPacketRequest,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_query_pb.QueryPacketResponse|null) => void
  ): UnaryResponse;
  totalFees(
    requestMessage: band_tunnel_v1beta1_query_pb.QueryTotalFeesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_query_pb.QueryTotalFeesResponse|null) => void
  ): UnaryResponse;
  totalFees(
    requestMessage: band_tunnel_v1beta1_query_pb.QueryTotalFeesRequest,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_query_pb.QueryTotalFeesResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: band_tunnel_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: band_tunnel_v1beta1_query_pb.QueryParamsRequest,
    callback: (error: ServiceError|null, responseMessage: band_tunnel_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
}

