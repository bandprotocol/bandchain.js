//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryTunnelsRequest, QueryTunnelsResponseSDKType, QueryTunnelRequest, QueryTunnelResponseSDKType, QueryDepositsRequest, QueryDepositsResponseSDKType, QueryDepositRequest, QueryDepositResponseSDKType, QueryPacketsRequest, QueryPacketsResponseSDKType, QueryPacketRequest, QueryPacketResponseSDKType, QueryTotalFeesRequest, QueryTotalFeesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.tunnels = this.tunnels.bind(this);
    this.tunnel = this.tunnel.bind(this);
    this.deposits = this.deposits.bind(this);
    this.deposit = this.deposit.bind(this);
    this.packets = this.packets.bind(this);
    this.packet = this.packet.bind(this);
    this.totalFees = this.totalFees.bind(this);
    this.params = this.params.bind(this);
  }
  /* Tunnels is a RPC method that returns all tunnels. */
  async tunnels(params: QueryTunnelsRequest): Promise<QueryTunnelsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.statusFilter !== "undefined") {
      options.params.status_filter = params.statusFilter;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `tunnel/v1beta1/tunnels`;
    return await this.req.get<QueryTunnelsResponseSDKType>(endpoint, options);
  }
  /* Tunnel is a RPC method that returns a tunnel by its ID. */
  async tunnel(params: QueryTunnelRequest): Promise<QueryTunnelResponseSDKType> {
    const endpoint = `tunnel/v1beta1/tunnels/${params.tunnelId}`;
    return await this.req.get<QueryTunnelResponseSDKType>(endpoint);
  }
  /* Deposits queries all deposits of a single tunnel. */
  async deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `tunnel/v1beta1/tunnels/${params.tunnelId}/deposits`;
    return await this.req.get<QueryDepositsResponseSDKType>(endpoint, options);
  }
  /* Deposit queries single deposit information based tunnelID, depositAddr. */
  async deposit(params: QueryDepositRequest): Promise<QueryDepositResponseSDKType> {
    const endpoint = `tunnel/v1beta1/tunnels/${params.tunnelId}/deposits/${params.depositor}`;
    return await this.req.get<QueryDepositResponseSDKType>(endpoint);
  }
  /* Packets is a RPC method that returns all packets of a tunnel. */
  async packets(params: QueryPacketsRequest): Promise<QueryPacketsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `tunnel/v1beta1/tunnels/${params.tunnelId}/packets`;
    return await this.req.get<QueryPacketsResponseSDKType>(endpoint, options);
  }
  /* Packet is a RPC method that returns a packet by its tunnel ID and sequence. */
  async packet(params: QueryPacketRequest): Promise<QueryPacketResponseSDKType> {
    const endpoint = `tunnel/v1beta1/tunnels/${params.tunnelId}/packets/${params.sequence}`;
    return await this.req.get<QueryPacketResponseSDKType>(endpoint);
  }
  /* TotalFees is a RPC method that returns the total fees collected by the tunnel */
  async totalFees(_params: QueryTotalFeesRequest = {}): Promise<QueryTotalFeesResponseSDKType> {
    const endpoint = `tunnel/v1beta1/total_fees`;
    return await this.req.get<QueryTotalFeesResponseSDKType>(endpoint);
  }
  /* Params is a RPC method that returns all parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `tunnel/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}