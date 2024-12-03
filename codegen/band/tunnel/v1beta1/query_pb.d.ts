// package: band.tunnel.v1beta1
// file: band/tunnel/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as band_tunnel_v1beta1_params_pb from "../../../band/tunnel/v1beta1/params_pb";
import * as band_tunnel_v1beta1_tunnel_pb from "../../../band/tunnel/v1beta1/tunnel_pb";

export class QueryTunnelsRequest extends jspb.Message {
  getStatusFilter(): TunnelStatusFilterMap[keyof TunnelStatusFilterMap];
  setStatusFilter(value: TunnelStatusFilterMap[keyof TunnelStatusFilterMap]): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTunnelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTunnelsRequest): QueryTunnelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTunnelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTunnelsRequest;
  static deserializeBinaryFromReader(message: QueryTunnelsRequest, reader: jspb.BinaryReader): QueryTunnelsRequest;
}

export namespace QueryTunnelsRequest {
  export type AsObject = {
    statusFilter: TunnelStatusFilterMap[keyof TunnelStatusFilterMap],
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryTunnelsResponse extends jspb.Message {
  clearTunnelsList(): void;
  getTunnelsList(): Array<band_tunnel_v1beta1_tunnel_pb.Tunnel>;
  setTunnelsList(value: Array<band_tunnel_v1beta1_tunnel_pb.Tunnel>): void;
  addTunnels(value?: band_tunnel_v1beta1_tunnel_pb.Tunnel, index?: number): band_tunnel_v1beta1_tunnel_pb.Tunnel;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTunnelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTunnelsResponse): QueryTunnelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTunnelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTunnelsResponse;
  static deserializeBinaryFromReader(message: QueryTunnelsResponse, reader: jspb.BinaryReader): QueryTunnelsResponse;
}

export namespace QueryTunnelsResponse {
  export type AsObject = {
    tunnelsList: Array<band_tunnel_v1beta1_tunnel_pb.Tunnel.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryTunnelRequest extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTunnelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTunnelRequest): QueryTunnelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTunnelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTunnelRequest;
  static deserializeBinaryFromReader(message: QueryTunnelRequest, reader: jspb.BinaryReader): QueryTunnelRequest;
}

export namespace QueryTunnelRequest {
  export type AsObject = {
    tunnelId: number,
  }
}

export class QueryTunnelResponse extends jspb.Message {
  hasTunnel(): boolean;
  clearTunnel(): void;
  getTunnel(): band_tunnel_v1beta1_tunnel_pb.Tunnel | undefined;
  setTunnel(value?: band_tunnel_v1beta1_tunnel_pb.Tunnel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTunnelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTunnelResponse): QueryTunnelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTunnelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTunnelResponse;
  static deserializeBinaryFromReader(message: QueryTunnelResponse, reader: jspb.BinaryReader): QueryTunnelResponse;
}

export namespace QueryTunnelResponse {
  export type AsObject = {
    tunnel?: band_tunnel_v1beta1_tunnel_pb.Tunnel.AsObject,
  }
}

export class QueryDepositsRequest extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDepositsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDepositsRequest): QueryDepositsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDepositsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDepositsRequest;
  static deserializeBinaryFromReader(message: QueryDepositsRequest, reader: jspb.BinaryReader): QueryDepositsRequest;
}

export namespace QueryDepositsRequest {
  export type AsObject = {
    tunnelId: number,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryDepositsResponse extends jspb.Message {
  clearDepositsList(): void;
  getDepositsList(): Array<band_tunnel_v1beta1_tunnel_pb.Deposit>;
  setDepositsList(value: Array<band_tunnel_v1beta1_tunnel_pb.Deposit>): void;
  addDeposits(value?: band_tunnel_v1beta1_tunnel_pb.Deposit, index?: number): band_tunnel_v1beta1_tunnel_pb.Deposit;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDepositsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDepositsResponse): QueryDepositsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDepositsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDepositsResponse;
  static deserializeBinaryFromReader(message: QueryDepositsResponse, reader: jspb.BinaryReader): QueryDepositsResponse;
}

export namespace QueryDepositsResponse {
  export type AsObject = {
    depositsList: Array<band_tunnel_v1beta1_tunnel_pb.Deposit.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryDepositRequest extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  getDepositor(): string;
  setDepositor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDepositRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDepositRequest): QueryDepositRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDepositRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDepositRequest;
  static deserializeBinaryFromReader(message: QueryDepositRequest, reader: jspb.BinaryReader): QueryDepositRequest;
}

export namespace QueryDepositRequest {
  export type AsObject = {
    tunnelId: number,
    depositor: string,
  }
}

export class QueryDepositResponse extends jspb.Message {
  hasDeposit(): boolean;
  clearDeposit(): void;
  getDeposit(): band_tunnel_v1beta1_tunnel_pb.Deposit | undefined;
  setDeposit(value?: band_tunnel_v1beta1_tunnel_pb.Deposit): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDepositResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDepositResponse): QueryDepositResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDepositResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDepositResponse;
  static deserializeBinaryFromReader(message: QueryDepositResponse, reader: jspb.BinaryReader): QueryDepositResponse;
}

export namespace QueryDepositResponse {
  export type AsObject = {
    deposit?: band_tunnel_v1beta1_tunnel_pb.Deposit.AsObject,
  }
}

export class QueryPacketsRequest extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPacketsRequest): QueryPacketsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPacketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketsRequest;
  static deserializeBinaryFromReader(message: QueryPacketsRequest, reader: jspb.BinaryReader): QueryPacketsRequest;
}

export namespace QueryPacketsRequest {
  export type AsObject = {
    tunnelId: number,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryPacketsResponse extends jspb.Message {
  clearPacketsList(): void;
  getPacketsList(): Array<band_tunnel_v1beta1_tunnel_pb.Packet>;
  setPacketsList(value: Array<band_tunnel_v1beta1_tunnel_pb.Packet>): void;
  addPackets(value?: band_tunnel_v1beta1_tunnel_pb.Packet, index?: number): band_tunnel_v1beta1_tunnel_pb.Packet;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPacketsResponse): QueryPacketsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPacketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketsResponse;
  static deserializeBinaryFromReader(message: QueryPacketsResponse, reader: jspb.BinaryReader): QueryPacketsResponse;
}

export namespace QueryPacketsResponse {
  export type AsObject = {
    packetsList: Array<band_tunnel_v1beta1_tunnel_pb.Packet.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryPacketRequest extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  getSequence(): number;
  setSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPacketRequest): QueryPacketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPacketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketRequest;
  static deserializeBinaryFromReader(message: QueryPacketRequest, reader: jspb.BinaryReader): QueryPacketRequest;
}

export namespace QueryPacketRequest {
  export type AsObject = {
    tunnelId: number,
    sequence: number,
  }
}

export class QueryPacketResponse extends jspb.Message {
  hasPacket(): boolean;
  clearPacket(): void;
  getPacket(): band_tunnel_v1beta1_tunnel_pb.Packet | undefined;
  setPacket(value?: band_tunnel_v1beta1_tunnel_pb.Packet): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPacketResponse): QueryPacketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPacketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketResponse;
  static deserializeBinaryFromReader(message: QueryPacketResponse, reader: jspb.BinaryReader): QueryPacketResponse;
}

export namespace QueryPacketResponse {
  export type AsObject = {
    packet?: band_tunnel_v1beta1_tunnel_pb.Packet.AsObject,
  }
}

export class QueryTotalFeesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalFeesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalFeesRequest): QueryTotalFeesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTotalFeesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalFeesRequest;
  static deserializeBinaryFromReader(message: QueryTotalFeesRequest, reader: jspb.BinaryReader): QueryTotalFeesRequest;
}

export namespace QueryTotalFeesRequest {
  export type AsObject = {
  }
}

export class QueryTotalFeesResponse extends jspb.Message {
  hasTotalFees(): boolean;
  clearTotalFees(): void;
  getTotalFees(): band_tunnel_v1beta1_tunnel_pb.TotalFees | undefined;
  setTotalFees(value?: band_tunnel_v1beta1_tunnel_pb.TotalFees): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalFeesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalFeesResponse): QueryTotalFeesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTotalFeesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalFeesResponse;
  static deserializeBinaryFromReader(message: QueryTotalFeesResponse, reader: jspb.BinaryReader): QueryTotalFeesResponse;
}

export namespace QueryTotalFeesResponse {
  export type AsObject = {
    totalFees?: band_tunnel_v1beta1_tunnel_pb.TotalFees.AsObject,
  }
}

export class QueryParamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsRequest): QueryParamsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
  static deserializeBinaryFromReader(message: QueryParamsRequest, reader: jspb.BinaryReader): QueryParamsRequest;
}

export namespace QueryParamsRequest {
  export type AsObject = {
  }
}

export class QueryParamsResponse extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): band_tunnel_v1beta1_params_pb.Params | undefined;
  setParams(value?: band_tunnel_v1beta1_params_pb.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsResponse): QueryParamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
  static deserializeBinaryFromReader(message: QueryParamsResponse, reader: jspb.BinaryReader): QueryParamsResponse;
}

export namespace QueryParamsResponse {
  export type AsObject = {
    params?: band_tunnel_v1beta1_params_pb.Params.AsObject,
  }
}

export interface TunnelStatusFilterMap {
  TUNNEL_STATUS_FILTER_UNSPECIFIED: 0;
  TUNNEL_STATUS_FILTER_ACTIVE: 1;
  TUNNEL_STATUS_FILTER_INACTIVE: 2;
}

export const TunnelStatusFilter: TunnelStatusFilterMap;

