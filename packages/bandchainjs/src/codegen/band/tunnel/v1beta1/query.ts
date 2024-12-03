//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Tunnel, TunnelAmino, TunnelSDKType, Deposit, DepositAmino, DepositSDKType, Packet, PacketAmino, PacketSDKType, TotalFees, TotalFeesAmino, TotalFeesSDKType } from "./tunnel";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** TunnelStatusFilter defines a filter for tunnel status. */
export enum TunnelStatusFilter {
  /** TUNNEL_STATUS_FILTER_UNSPECIFIED - TUNNEL_STATUS_FILTER_UNSPECIFIED defines an unspecified status. */
  TUNNEL_STATUS_FILTER_UNSPECIFIED = 0,
  /** TUNNEL_STATUS_FILTER_ACTIVE - TUNNEL_STATUS_FILTER_ACTIVE defines an active tunnel. */
  TUNNEL_STATUS_FILTER_ACTIVE = 1,
  /** TUNNEL_STATUS_FILTER_INACTIVE - TUNNEL_STATUS_FILTER_INACTIVE defines an inactive tunnel. */
  TUNNEL_STATUS_FILTER_INACTIVE = 2,
  UNRECOGNIZED = -1,
}
export const TunnelStatusFilterSDKType = TunnelStatusFilter;
export const TunnelStatusFilterAmino = TunnelStatusFilter;
export function tunnelStatusFilterFromJSON(object: any): TunnelStatusFilter {
  switch (object) {
    case 0:
    case "TUNNEL_STATUS_FILTER_UNSPECIFIED":
      return TunnelStatusFilter.TUNNEL_STATUS_FILTER_UNSPECIFIED;
    case 1:
    case "TUNNEL_STATUS_FILTER_ACTIVE":
      return TunnelStatusFilter.TUNNEL_STATUS_FILTER_ACTIVE;
    case 2:
    case "TUNNEL_STATUS_FILTER_INACTIVE":
      return TunnelStatusFilter.TUNNEL_STATUS_FILTER_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TunnelStatusFilter.UNRECOGNIZED;
  }
}
export function tunnelStatusFilterToJSON(object: TunnelStatusFilter): string {
  switch (object) {
    case TunnelStatusFilter.TUNNEL_STATUS_FILTER_UNSPECIFIED:
      return "TUNNEL_STATUS_FILTER_UNSPECIFIED";
    case TunnelStatusFilter.TUNNEL_STATUS_FILTER_ACTIVE:
      return "TUNNEL_STATUS_FILTER_ACTIVE";
    case TunnelStatusFilter.TUNNEL_STATUS_FILTER_INACTIVE:
      return "TUNNEL_STATUS_FILTER_INACTIVE";
    case TunnelStatusFilter.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** QueryTunnelsRequest is the request type for the Query/Tunnels RPC method. */
export interface QueryTunnelsRequest {
  /** status_filter is a flag to filter tunnels by status. */
  statusFilter: TunnelStatusFilter;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryTunnelsRequestProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.QueryTunnelsRequest";
  value: Uint8Array;
}
/** QueryTunnelsRequest is the request type for the Query/Tunnels RPC method. */
export interface QueryTunnelsRequestAmino {
  /** status_filter is a flag to filter tunnels by status. */
  status_filter?: TunnelStatusFilter;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryTunnelsRequestAminoMsg {
  type: "/band.tunnel.v1beta1.QueryTunnelsRequest";
  value: QueryTunnelsRequestAmino;
}
/** QueryTunnelsRequest is the request type for the Query/Tunnels RPC method. */
export interface QueryTunnelsRequestSDKType {
  status_filter: TunnelStatusFilter;
  pagination?: PageRequestSDKType;
}
/** QueryTunnelsResponse is the response type for the Query/Tunnels RPC method. */
export interface QueryTunnelsResponse {
  /** Tunnels is a list of tunnels. */
  tunnels: Tunnel[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponse;
}
export interface QueryTunnelsResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.QueryTunnelsResponse";
  value: Uint8Array;
}
/** QueryTunnelsResponse is the response type for the Query/Tunnels RPC method. */
export interface QueryTunnelsResponseAmino {
  /** Tunnels is a list of tunnels. */
  tunnels?: TunnelAmino[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponseAmino;
}
export interface QueryTunnelsResponseAminoMsg {
  type: "/band.tunnel.v1beta1.QueryTunnelsResponse";
  value: QueryTunnelsResponseAmino;
}
/** QueryTunnelsResponse is the response type for the Query/Tunnels RPC method. */
export interface QueryTunnelsResponseSDKType {
  tunnels: TunnelSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryTunnelRequest is the request type for the Query/Tunnel RPC method. */
export interface QueryTunnelRequest {
  /** tunnel_id is the ID of the tunnel to query. */
  tunnelId: bigint;
}
export interface QueryTunnelRequestProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.QueryTunnelRequest";
  value: Uint8Array;
}
/** QueryTunnelRequest is the request type for the Query/Tunnel RPC method. */
export interface QueryTunnelRequestAmino {
  /** tunnel_id is the ID of the tunnel to query. */
  tunnel_id?: string;
}
export interface QueryTunnelRequestAminoMsg {
  type: "/band.tunnel.v1beta1.QueryTunnelRequest";
  value: QueryTunnelRequestAmino;
}
/** QueryTunnelRequest is the request type for the Query/Tunnel RPC method. */
export interface QueryTunnelRequestSDKType {
  tunnel_id: bigint;
}
/** QueryTunnelResponse is the response type for the Query/Tunnel RPC method. */
export interface QueryTunnelResponse {
  /** tunnel is the tunnel with the given ID. */
  tunnel: Tunnel;
}
export interface QueryTunnelResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.QueryTunnelResponse";
  value: Uint8Array;
}
/** QueryTunnelResponse is the response type for the Query/Tunnel RPC method. */
export interface QueryTunnelResponseAmino {
  /** tunnel is the tunnel with the given ID. */
  tunnel?: TunnelAmino;
}
export interface QueryTunnelResponseAminoMsg {
  type: "/band.tunnel.v1beta1.QueryTunnelResponse";
  value: QueryTunnelResponseAmino;
}
/** QueryTunnelResponse is the response type for the Query/Tunnel RPC method. */
export interface QueryTunnelResponseSDKType {
  tunnel: TunnelSDKType;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
  /** tunnel_id is the ID of the tunnel to query deposits. */
  tunnelId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDepositsRequestProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.QueryDepositsRequest";
  value: Uint8Array;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestAmino {
  /** tunnel_id is the ID of the tunnel to query deposits. */
  tunnel_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDepositsRequestAminoMsg {
  type: "/band.tunnel.v1beta1.QueryDepositsRequest";
  value: QueryDepositsRequestAmino;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
  tunnel_id: bigint;
  pagination?: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
  /** deposits is a list of deposits. */
  deposits: Deposit[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponse;
}
export interface QueryDepositsResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.QueryDepositsResponse";
  value: Uint8Array;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseAmino {
  /** deposits is a list of deposits. */
  deposits?: DepositAmino[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDepositsResponseAminoMsg {
  type: "/band.tunnel.v1beta1.QueryDepositsResponse";
  value: QueryDepositsResponseAmino;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
  deposits: DepositSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequest {
  /** tunnel_id is the ID of the tunnel to query. */
  tunnelId: bigint;
  /** depositor is the address of the depositor to query. */
  depositor: string;
}
export interface QueryDepositRequestProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.QueryDepositRequest";
  value: Uint8Array;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequestAmino {
  /** tunnel_id is the ID of the tunnel to query. */
  tunnel_id?: string;
  /** depositor is the address of the depositor to query. */
  depositor?: string;
}
export interface QueryDepositRequestAminoMsg {
  type: "/band.tunnel.v1beta1.QueryDepositRequest";
  value: QueryDepositRequestAmino;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequestSDKType {
  tunnel_id: bigint;
  depositor: string;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponse {
  /** deposit is the deposit with the given tunnel ID and depositor address. */
  deposit: Deposit;
}
export interface QueryDepositResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.QueryDepositResponse";
  value: Uint8Array;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponseAmino {
  /** deposit is the deposit with the given tunnel ID and depositor address. */
  deposit?: DepositAmino;
}
export interface QueryDepositResponseAminoMsg {
  type: "/band.tunnel.v1beta1.QueryDepositResponse";
  value: QueryDepositResponseAmino;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponseSDKType {
  deposit: DepositSDKType;
}
/** QueryPacketsRequest is the request type for the Query/Packets RPC method. */
export interface QueryPacketsRequest {
  /** tunnel_id is the ID of the tunnel to query packets. */
  tunnelId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryPacketsRequestProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.QueryPacketsRequest";
  value: Uint8Array;
}
/** QueryPacketsRequest is the request type for the Query/Packets RPC method. */
export interface QueryPacketsRequestAmino {
  /** tunnel_id is the ID of the tunnel to query packets. */
  tunnel_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryPacketsRequestAminoMsg {
  type: "/band.tunnel.v1beta1.QueryPacketsRequest";
  value: QueryPacketsRequestAmino;
}
/** QueryPacketsRequest is the request type for the Query/Packets RPC method. */
export interface QueryPacketsRequestSDKType {
  tunnel_id: bigint;
  pagination?: PageRequestSDKType;
}
/** QueryPacketsResponse is the response type for the Query/Packets RPC method. */
export interface QueryPacketsResponse {
  /** packets is a list of packets. */
  packets: Packet[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponse;
}
export interface QueryPacketsResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.QueryPacketsResponse";
  value: Uint8Array;
}
/** QueryPacketsResponse is the response type for the Query/Packets RPC method. */
export interface QueryPacketsResponseAmino {
  /** packets is a list of packets. */
  packets?: PacketAmino[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponseAmino;
}
export interface QueryPacketsResponseAminoMsg {
  type: "/band.tunnel.v1beta1.QueryPacketsResponse";
  value: QueryPacketsResponseAmino;
}
/** QueryPacketsResponse is the response type for the Query/Packets RPC method. */
export interface QueryPacketsResponseSDKType {
  packets: PacketSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryPacketRequest is the request type for the Query/Packet RPC method. */
export interface QueryPacketRequest {
  /** tunnel_id is the ID of the tunnel to query packets. */
  tunnelId: bigint;
  /** sequence is the sequence of the packet to query. */
  sequence: bigint;
}
export interface QueryPacketRequestProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.QueryPacketRequest";
  value: Uint8Array;
}
/** QueryPacketRequest is the request type for the Query/Packet RPC method. */
export interface QueryPacketRequestAmino {
  /** tunnel_id is the ID of the tunnel to query packets. */
  tunnel_id?: string;
  /** sequence is the sequence of the packet to query. */
  sequence?: string;
}
export interface QueryPacketRequestAminoMsg {
  type: "/band.tunnel.v1beta1.QueryPacketRequest";
  value: QueryPacketRequestAmino;
}
/** QueryPacketRequest is the request type for the Query/Packet RPC method. */
export interface QueryPacketRequestSDKType {
  tunnel_id: bigint;
  sequence: bigint;
}
/** QueryPacketResponse is the response type for the Query/Packet RPC method. */
export interface QueryPacketResponse {
  /** packet is the packet with the given tunnel ID and sequence. */
  packet?: Packet;
}
export interface QueryPacketResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.QueryPacketResponse";
  value: Uint8Array;
}
/** QueryPacketResponse is the response type for the Query/Packet RPC method. */
export interface QueryPacketResponseAmino {
  /** packet is the packet with the given tunnel ID and sequence. */
  packet?: PacketAmino;
}
export interface QueryPacketResponseAminoMsg {
  type: "/band.tunnel.v1beta1.QueryPacketResponse";
  value: QueryPacketResponseAmino;
}
/** QueryPacketResponse is the response type for the Query/Packet RPC method. */
export interface QueryPacketResponseSDKType {
  packet?: PacketSDKType;
}
/** QueryTotalFeesRequest is the request type for the Query/TotalFees RPC method. */
export interface QueryTotalFeesRequest {}
export interface QueryTotalFeesRequestProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.QueryTotalFeesRequest";
  value: Uint8Array;
}
/** QueryTotalFeesRequest is the request type for the Query/TotalFees RPC method. */
export interface QueryTotalFeesRequestAmino {}
export interface QueryTotalFeesRequestAminoMsg {
  type: "/band.tunnel.v1beta1.QueryTotalFeesRequest";
  value: QueryTotalFeesRequestAmino;
}
/** QueryTotalFeesRequest is the request type for the Query/TotalFees RPC method. */
export interface QueryTotalFeesRequestSDKType {}
/** QueryTotalFeesResponse is the response type for the Query/TotalFees RPC method. */
export interface QueryTotalFeesResponse {
  /** total_fees is the total fees collected by the tunnel. */
  totalFees: TotalFees;
}
export interface QueryTotalFeesResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.QueryTotalFeesResponse";
  value: Uint8Array;
}
/** QueryTotalFeesResponse is the response type for the Query/TotalFees RPC method. */
export interface QueryTotalFeesResponseAmino {
  /** total_fees is the total fees collected by the tunnel. */
  total_fees?: TotalFeesAmino;
}
export interface QueryTotalFeesResponseAminoMsg {
  type: "/band.tunnel.v1beta1.QueryTotalFeesResponse";
  value: QueryTotalFeesResponseAmino;
}
/** QueryTotalFeesResponse is the response type for the Query/TotalFees RPC method. */
export interface QueryTotalFeesResponseSDKType {
  total_fees: TotalFeesSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/band.tunnel.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params is the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params is the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/band.tunnel.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryTunnelsRequest(): QueryTunnelsRequest {
  return {
    statusFilter: 0,
    pagination: undefined
  };
}
export const QueryTunnelsRequest = {
  typeUrl: "/band.tunnel.v1beta1.QueryTunnelsRequest",
  encode(message: QueryTunnelsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.statusFilter !== 0) {
      writer.uint32(8).int32(message.statusFilter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTunnelsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTunnelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statusFilter = reader.int32() as any;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTunnelsRequest>): QueryTunnelsRequest {
    const message = createBaseQueryTunnelsRequest();
    message.statusFilter = object.statusFilter ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTunnelsRequestAmino): QueryTunnelsRequest {
    const message = createBaseQueryTunnelsRequest();
    if (object.status_filter !== undefined && object.status_filter !== null) {
      message.statusFilter = object.status_filter;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTunnelsRequest): QueryTunnelsRequestAmino {
    const obj: any = {};
    obj.status_filter = message.statusFilter === 0 ? undefined : message.statusFilter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTunnelsRequestAminoMsg): QueryTunnelsRequest {
    return QueryTunnelsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTunnelsRequestProtoMsg): QueryTunnelsRequest {
    return QueryTunnelsRequest.decode(message.value);
  },
  toProto(message: QueryTunnelsRequest): Uint8Array {
    return QueryTunnelsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTunnelsRequest): QueryTunnelsRequestProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.QueryTunnelsRequest",
      value: QueryTunnelsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTunnelsResponse(): QueryTunnelsResponse {
  return {
    tunnels: [],
    pagination: undefined
  };
}
export const QueryTunnelsResponse = {
  typeUrl: "/band.tunnel.v1beta1.QueryTunnelsResponse",
  encode(message: QueryTunnelsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tunnels) {
      Tunnel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTunnelsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTunnelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnels.push(Tunnel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTunnelsResponse>): QueryTunnelsResponse {
    const message = createBaseQueryTunnelsResponse();
    message.tunnels = object.tunnels?.map(e => Tunnel.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTunnelsResponseAmino): QueryTunnelsResponse {
    const message = createBaseQueryTunnelsResponse();
    message.tunnels = object.tunnels?.map(e => Tunnel.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTunnelsResponse): QueryTunnelsResponseAmino {
    const obj: any = {};
    if (message.tunnels) {
      obj.tunnels = message.tunnels.map(e => e ? Tunnel.toAmino(e) : undefined);
    } else {
      obj.tunnels = message.tunnels;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTunnelsResponseAminoMsg): QueryTunnelsResponse {
    return QueryTunnelsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTunnelsResponseProtoMsg): QueryTunnelsResponse {
    return QueryTunnelsResponse.decode(message.value);
  },
  toProto(message: QueryTunnelsResponse): Uint8Array {
    return QueryTunnelsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTunnelsResponse): QueryTunnelsResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.QueryTunnelsResponse",
      value: QueryTunnelsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTunnelRequest(): QueryTunnelRequest {
  return {
    tunnelId: BigInt(0)
  };
}
export const QueryTunnelRequest = {
  typeUrl: "/band.tunnel.v1beta1.QueryTunnelRequest",
  encode(message: QueryTunnelRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTunnelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTunnelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTunnelRequest>): QueryTunnelRequest {
    const message = createBaseQueryTunnelRequest();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTunnelRequestAmino): QueryTunnelRequest {
    const message = createBaseQueryTunnelRequest();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    return message;
  },
  toAmino(message: QueryTunnelRequest): QueryTunnelRequestAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTunnelRequestAminoMsg): QueryTunnelRequest {
    return QueryTunnelRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTunnelRequestProtoMsg): QueryTunnelRequest {
    return QueryTunnelRequest.decode(message.value);
  },
  toProto(message: QueryTunnelRequest): Uint8Array {
    return QueryTunnelRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTunnelRequest): QueryTunnelRequestProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.QueryTunnelRequest",
      value: QueryTunnelRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTunnelResponse(): QueryTunnelResponse {
  return {
    tunnel: Tunnel.fromPartial({})
  };
}
export const QueryTunnelResponse = {
  typeUrl: "/band.tunnel.v1beta1.QueryTunnelResponse",
  encode(message: QueryTunnelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnel !== undefined) {
      Tunnel.encode(message.tunnel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTunnelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTunnelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnel = Tunnel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTunnelResponse>): QueryTunnelResponse {
    const message = createBaseQueryTunnelResponse();
    message.tunnel = object.tunnel !== undefined && object.tunnel !== null ? Tunnel.fromPartial(object.tunnel) : undefined;
    return message;
  },
  fromAmino(object: QueryTunnelResponseAmino): QueryTunnelResponse {
    const message = createBaseQueryTunnelResponse();
    if (object.tunnel !== undefined && object.tunnel !== null) {
      message.tunnel = Tunnel.fromAmino(object.tunnel);
    }
    return message;
  },
  toAmino(message: QueryTunnelResponse): QueryTunnelResponseAmino {
    const obj: any = {};
    obj.tunnel = message.tunnel ? Tunnel.toAmino(message.tunnel) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTunnelResponseAminoMsg): QueryTunnelResponse {
    return QueryTunnelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTunnelResponseProtoMsg): QueryTunnelResponse {
    return QueryTunnelResponse.decode(message.value);
  },
  toProto(message: QueryTunnelResponse): Uint8Array {
    return QueryTunnelResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTunnelResponse): QueryTunnelResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.QueryTunnelResponse",
      value: QueryTunnelResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    tunnelId: BigInt(0),
    pagination: undefined
  };
}
export const QueryDepositsRequest = {
  typeUrl: "/band.tunnel.v1beta1.QueryDepositsRequest",
  encode(message: QueryDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.decode(message.value);
  },
  toProto(message: QueryDepositsRequest): Uint8Array {
    return QueryDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.QueryDepositsRequest",
      value: QueryDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
    pagination: undefined
  };
}
export const QueryDepositsResponse = {
  typeUrl: "/band.tunnel.v1beta1.QueryDepositsResponse",
  encode(message: QueryDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = message.deposits;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.decode(message.value);
  },
  toProto(message: QueryDepositsResponse): Uint8Array {
    return QueryDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.QueryDepositsResponse",
      value: QueryDepositsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositRequest(): QueryDepositRequest {
  return {
    tunnelId: BigInt(0),
    depositor: ""
  };
}
export const QueryDepositRequest = {
  typeUrl: "/band.tunnel.v1beta1.QueryDepositRequest",
  encode(message: QueryDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDepositRequest>): QueryDepositRequest {
    const message = createBaseQueryDepositRequest();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    return message;
  },
  fromAmino(object: QueryDepositRequestAmino): QueryDepositRequest {
    const message = createBaseQueryDepositRequest();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    return message;
  },
  toAmino(message: QueryDepositRequest): QueryDepositRequestAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    return obj;
  },
  fromAminoMsg(object: QueryDepositRequestAminoMsg): QueryDepositRequest {
    return QueryDepositRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositRequestProtoMsg): QueryDepositRequest {
    return QueryDepositRequest.decode(message.value);
  },
  toProto(message: QueryDepositRequest): Uint8Array {
    return QueryDepositRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositRequest): QueryDepositRequestProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.QueryDepositRequest",
      value: QueryDepositRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositResponse(): QueryDepositResponse {
  return {
    deposit: Deposit.fromPartial({})
  };
}
export const QueryDepositResponse = {
  typeUrl: "/band.tunnel.v1beta1.QueryDepositResponse",
  encode(message: QueryDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDepositResponse>): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositResponseAmino): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Deposit.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: QueryDepositResponse): QueryDepositResponseAmino {
    const obj: any = {};
    obj.deposit = message.deposit ? Deposit.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositResponseAminoMsg): QueryDepositResponse {
    return QueryDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositResponseProtoMsg): QueryDepositResponse {
    return QueryDepositResponse.decode(message.value);
  },
  toProto(message: QueryDepositResponse): Uint8Array {
    return QueryDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositResponse): QueryDepositResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.QueryDepositResponse",
      value: QueryDepositResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPacketsRequest(): QueryPacketsRequest {
  return {
    tunnelId: BigInt(0),
    pagination: undefined
  };
}
export const QueryPacketsRequest = {
  typeUrl: "/band.tunnel.v1beta1.QueryPacketsRequest",
  encode(message: QueryPacketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPacketsRequest>): QueryPacketsRequest {
    const message = createBaseQueryPacketsRequest();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketsRequestAmino): QueryPacketsRequest {
    const message = createBaseQueryPacketsRequest();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPacketsRequest): QueryPacketsRequestAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPacketsRequestAminoMsg): QueryPacketsRequest {
    return QueryPacketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPacketsRequestProtoMsg): QueryPacketsRequest {
    return QueryPacketsRequest.decode(message.value);
  },
  toProto(message: QueryPacketsRequest): Uint8Array {
    return QueryPacketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketsRequest): QueryPacketsRequestProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.QueryPacketsRequest",
      value: QueryPacketsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPacketsResponse(): QueryPacketsResponse {
  return {
    packets: [],
    pagination: undefined
  };
}
export const QueryPacketsResponse = {
  typeUrl: "/band.tunnel.v1beta1.QueryPacketsResponse",
  encode(message: QueryPacketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.packets) {
      Packet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packets.push(Packet.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPacketsResponse>): QueryPacketsResponse {
    const message = createBaseQueryPacketsResponse();
    message.packets = object.packets?.map(e => Packet.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketsResponseAmino): QueryPacketsResponse {
    const message = createBaseQueryPacketsResponse();
    message.packets = object.packets?.map(e => Packet.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPacketsResponse): QueryPacketsResponseAmino {
    const obj: any = {};
    if (message.packets) {
      obj.packets = message.packets.map(e => e ? Packet.toAmino(e) : undefined);
    } else {
      obj.packets = message.packets;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPacketsResponseAminoMsg): QueryPacketsResponse {
    return QueryPacketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPacketsResponseProtoMsg): QueryPacketsResponse {
    return QueryPacketsResponse.decode(message.value);
  },
  toProto(message: QueryPacketsResponse): Uint8Array {
    return QueryPacketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketsResponse): QueryPacketsResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.QueryPacketsResponse",
      value: QueryPacketsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPacketRequest(): QueryPacketRequest {
  return {
    tunnelId: BigInt(0),
    sequence: BigInt(0)
  };
}
export const QueryPacketRequest = {
  typeUrl: "/band.tunnel.v1beta1.QueryPacketRequest",
  encode(message: QueryPacketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.uint64();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPacketRequest>): QueryPacketRequest {
    const message = createBaseQueryPacketRequest();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPacketRequestAmino): QueryPacketRequest {
    const message = createBaseQueryPacketRequest();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: QueryPacketRequest): QueryPacketRequestAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPacketRequestAminoMsg): QueryPacketRequest {
    return QueryPacketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPacketRequestProtoMsg): QueryPacketRequest {
    return QueryPacketRequest.decode(message.value);
  },
  toProto(message: QueryPacketRequest): Uint8Array {
    return QueryPacketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketRequest): QueryPacketRequestProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.QueryPacketRequest",
      value: QueryPacketRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPacketResponse(): QueryPacketResponse {
  return {
    packet: undefined
  };
}
export const QueryPacketResponse = {
  typeUrl: "/band.tunnel.v1beta1.QueryPacketResponse",
  encode(message: QueryPacketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPacketResponse>): QueryPacketResponse {
    const message = createBaseQueryPacketResponse();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketResponseAmino): QueryPacketResponse {
    const message = createBaseQueryPacketResponse();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    return message;
  },
  toAmino(message: QueryPacketResponse): QueryPacketResponseAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPacketResponseAminoMsg): QueryPacketResponse {
    return QueryPacketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPacketResponseProtoMsg): QueryPacketResponse {
    return QueryPacketResponse.decode(message.value);
  },
  toProto(message: QueryPacketResponse): Uint8Array {
    return QueryPacketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketResponse): QueryPacketResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.QueryPacketResponse",
      value: QueryPacketResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalFeesRequest(): QueryTotalFeesRequest {
  return {};
}
export const QueryTotalFeesRequest = {
  typeUrl: "/band.tunnel.v1beta1.QueryTotalFeesRequest",
  encode(_: QueryTotalFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryTotalFeesRequest>): QueryTotalFeesRequest {
    const message = createBaseQueryTotalFeesRequest();
    return message;
  },
  fromAmino(_: QueryTotalFeesRequestAmino): QueryTotalFeesRequest {
    const message = createBaseQueryTotalFeesRequest();
    return message;
  },
  toAmino(_: QueryTotalFeesRequest): QueryTotalFeesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalFeesRequestAminoMsg): QueryTotalFeesRequest {
    return QueryTotalFeesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalFeesRequestProtoMsg): QueryTotalFeesRequest {
    return QueryTotalFeesRequest.decode(message.value);
  },
  toProto(message: QueryTotalFeesRequest): Uint8Array {
    return QueryTotalFeesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalFeesRequest): QueryTotalFeesRequestProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.QueryTotalFeesRequest",
      value: QueryTotalFeesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalFeesResponse(): QueryTotalFeesResponse {
  return {
    totalFees: TotalFees.fromPartial({})
  };
}
export const QueryTotalFeesResponse = {
  typeUrl: "/band.tunnel.v1beta1.QueryTotalFeesResponse",
  encode(message: QueryTotalFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalFees !== undefined) {
      TotalFees.encode(message.totalFees, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalFees = TotalFees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalFeesResponse>): QueryTotalFeesResponse {
    const message = createBaseQueryTotalFeesResponse();
    message.totalFees = object.totalFees !== undefined && object.totalFees !== null ? TotalFees.fromPartial(object.totalFees) : undefined;
    return message;
  },
  fromAmino(object: QueryTotalFeesResponseAmino): QueryTotalFeesResponse {
    const message = createBaseQueryTotalFeesResponse();
    if (object.total_fees !== undefined && object.total_fees !== null) {
      message.totalFees = TotalFees.fromAmino(object.total_fees);
    }
    return message;
  },
  toAmino(message: QueryTotalFeesResponse): QueryTotalFeesResponseAmino {
    const obj: any = {};
    obj.total_fees = message.totalFees ? TotalFees.toAmino(message.totalFees) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalFeesResponseAminoMsg): QueryTotalFeesResponse {
    return QueryTotalFeesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalFeesResponseProtoMsg): QueryTotalFeesResponse {
    return QueryTotalFeesResponse.decode(message.value);
  },
  toProto(message: QueryTotalFeesResponse): Uint8Array {
    return QueryTotalFeesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalFeesResponse): QueryTotalFeesResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.QueryTotalFeesResponse",
      value: QueryTotalFeesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/band.tunnel.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/band.tunnel.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};