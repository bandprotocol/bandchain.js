//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryTunnelsRequest, QueryTunnelsResponse, QueryTunnelRequest, QueryTunnelResponse, QueryDepositsRequest, QueryDepositsResponse, QueryDepositRequest, QueryDepositResponse, QueryPacketsRequest, QueryPacketsResponse, QueryPacketRequest, QueryPacketResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query service defines the gRPC querier service. */
export interface Query {
  /** Tunnels is a RPC method that returns all tunnels. */
  tunnels(request: QueryTunnelsRequest): Promise<QueryTunnelsResponse>;
  /** Tunnel is a RPC method that returns a tunnel by its ID. */
  tunnel(request: QueryTunnelRequest): Promise<QueryTunnelResponse>;
  /** Deposits queries all deposits of a single tunnel. */
  deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
  /** Deposit queries single deposit information based tunnelID, depositAddr. */
  deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>;
  /** Packets is a RPC method that returns all packets of a tunnel. */
  packets(request: QueryPacketsRequest): Promise<QueryPacketsResponse>;
  /** Packet is a RPC method that returns a packet by its tunnel ID and sequence. */
  packet(request: QueryPacketRequest): Promise<QueryPacketResponse>;
  /** Params is a RPC method that returns all parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.tunnels = this.tunnels.bind(this);
    this.tunnel = this.tunnel.bind(this);
    this.deposits = this.deposits.bind(this);
    this.deposit = this.deposit.bind(this);
    this.packets = this.packets.bind(this);
    this.packet = this.packet.bind(this);
    this.params = this.params.bind(this);
  }
  tunnels(request: QueryTunnelsRequest): Promise<QueryTunnelsResponse> {
    const data = QueryTunnelsRequest.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Query", "Tunnels", data);
    return promise.then(data => QueryTunnelsResponse.decode(new BinaryReader(data)));
  }
  tunnel(request: QueryTunnelRequest): Promise<QueryTunnelResponse> {
    const data = QueryTunnelRequest.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Query", "Tunnel", data);
    return promise.then(data => QueryTunnelResponse.decode(new BinaryReader(data)));
  }
  deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Query", "Deposits", data);
    return promise.then(data => QueryDepositsResponse.decode(new BinaryReader(data)));
  }
  deposit(request: QueryDepositRequest): Promise<QueryDepositResponse> {
    const data = QueryDepositRequest.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Query", "Deposit", data);
    return promise.then(data => QueryDepositResponse.decode(new BinaryReader(data)));
  }
  packets(request: QueryPacketsRequest): Promise<QueryPacketsResponse> {
    const data = QueryPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Query", "Packets", data);
    return promise.then(data => QueryPacketsResponse.decode(new BinaryReader(data)));
  }
  packet(request: QueryPacketRequest): Promise<QueryPacketResponse> {
    const data = QueryPacketRequest.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Query", "Packet", data);
    return promise.then(data => QueryPacketResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    tunnels(request: QueryTunnelsRequest): Promise<QueryTunnelsResponse> {
      return queryService.tunnels(request);
    },
    tunnel(request: QueryTunnelRequest): Promise<QueryTunnelResponse> {
      return queryService.tunnel(request);
    },
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
      return queryService.deposits(request);
    },
    deposit(request: QueryDepositRequest): Promise<QueryDepositResponse> {
      return queryService.deposit(request);
    },
    packets(request: QueryPacketsRequest): Promise<QueryPacketsResponse> {
      return queryService.packets(request);
    },
    packet(request: QueryPacketRequest): Promise<QueryPacketResponse> {
      return queryService.packet(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};