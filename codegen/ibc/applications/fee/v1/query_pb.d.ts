// package: ibc.applications.fee.v1
// file: ibc/applications/fee/v1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../../cosmos/base/query/v1beta1/pagination_pb";
import * as ibc_applications_fee_v1_fee_pb from "../../../../ibc/applications/fee/v1/fee_pb";
import * as ibc_applications_fee_v1_genesis_pb from "../../../../ibc/applications/fee/v1/genesis_pb";
import * as ibc_core_channel_v1_channel_pb from "../../../../ibc/core/channel/v1/channel_pb";

export class QueryIncentivizedPacketsRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  getQueryHeight(): number;
  setQueryHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIncentivizedPacketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryIncentivizedPacketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIncentivizedPacketsRequest;
  static deserializeBinaryFromReader(message: QueryIncentivizedPacketsRequest, reader: jspb.BinaryReader): QueryIncentivizedPacketsRequest;
}

export namespace QueryIncentivizedPacketsRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    queryHeight: number,
  }
}

export class QueryIncentivizedPacketsResponse extends jspb.Message {
  clearIncentivizedPacketsList(): void;
  getIncentivizedPacketsList(): Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees>;
  setIncentivizedPacketsList(value: Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees>): void;
  addIncentivizedPackets(value?: ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees, index?: number): ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIncentivizedPacketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryIncentivizedPacketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIncentivizedPacketsResponse;
  static deserializeBinaryFromReader(message: QueryIncentivizedPacketsResponse, reader: jspb.BinaryReader): QueryIncentivizedPacketsResponse;
}

export namespace QueryIncentivizedPacketsResponse {
  export type AsObject = {
    incentivizedPacketsList: Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryIncentivizedPacketRequest extends jspb.Message {
  hasPacketId(): boolean;
  clearPacketId(): void;
  getPacketId(): ibc_core_channel_v1_channel_pb.PacketId | undefined;
  setPacketId(value?: ibc_core_channel_v1_channel_pb.PacketId): void;

  getQueryHeight(): number;
  setQueryHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIncentivizedPacketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryIncentivizedPacketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIncentivizedPacketRequest;
  static deserializeBinaryFromReader(message: QueryIncentivizedPacketRequest, reader: jspb.BinaryReader): QueryIncentivizedPacketRequest;
}

export namespace QueryIncentivizedPacketRequest {
  export type AsObject = {
    packetId?: ibc_core_channel_v1_channel_pb.PacketId.AsObject,
    queryHeight: number,
  }
}

export class QueryIncentivizedPacketResponse extends jspb.Message {
  hasIncentivizedPacket(): boolean;
  clearIncentivizedPacket(): void;
  getIncentivizedPacket(): ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees | undefined;
  setIncentivizedPacket(value?: ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIncentivizedPacketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryIncentivizedPacketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIncentivizedPacketResponse;
  static deserializeBinaryFromReader(message: QueryIncentivizedPacketResponse, reader: jspb.BinaryReader): QueryIncentivizedPacketResponse;
}

export namespace QueryIncentivizedPacketResponse {
  export type AsObject = {
    incentivizedPacket?: ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees.AsObject,
  }
}

export class QueryIncentivizedPacketsForChannelRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getQueryHeight(): number;
  setQueryHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIncentivizedPacketsForChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryIncentivizedPacketsForChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIncentivizedPacketsForChannelRequest;
  static deserializeBinaryFromReader(message: QueryIncentivizedPacketsForChannelRequest, reader: jspb.BinaryReader): QueryIncentivizedPacketsForChannelRequest;
}

export namespace QueryIncentivizedPacketsForChannelRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    portId: string,
    channelId: string,
    queryHeight: number,
  }
}

export class QueryIncentivizedPacketsForChannelResponse extends jspb.Message {
  clearIncentivizedPacketsList(): void;
  getIncentivizedPacketsList(): Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees>;
  setIncentivizedPacketsList(value: Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees>): void;
  addIncentivizedPackets(value?: ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees, index?: number): ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIncentivizedPacketsForChannelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryIncentivizedPacketsForChannelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIncentivizedPacketsForChannelResponse;
  static deserializeBinaryFromReader(message: QueryIncentivizedPacketsForChannelResponse, reader: jspb.BinaryReader): QueryIncentivizedPacketsForChannelResponse;
}

export namespace QueryIncentivizedPacketsForChannelResponse {
  export type AsObject = {
    incentivizedPacketsList: Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryTotalRecvFeesRequest extends jspb.Message {
  hasPacketId(): boolean;
  clearPacketId(): void;
  getPacketId(): ibc_core_channel_v1_channel_pb.PacketId | undefined;
  setPacketId(value?: ibc_core_channel_v1_channel_pb.PacketId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalRecvFeesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTotalRecvFeesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalRecvFeesRequest;
  static deserializeBinaryFromReader(message: QueryTotalRecvFeesRequest, reader: jspb.BinaryReader): QueryTotalRecvFeesRequest;
}

export namespace QueryTotalRecvFeesRequest {
  export type AsObject = {
    packetId?: ibc_core_channel_v1_channel_pb.PacketId.AsObject,
  }
}

export class QueryTotalRecvFeesResponse extends jspb.Message {
  clearRecvFeesList(): void;
  getRecvFeesList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setRecvFeesList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addRecvFees(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalRecvFeesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTotalRecvFeesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalRecvFeesResponse;
  static deserializeBinaryFromReader(message: QueryTotalRecvFeesResponse, reader: jspb.BinaryReader): QueryTotalRecvFeesResponse;
}

export namespace QueryTotalRecvFeesResponse {
  export type AsObject = {
    recvFeesList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class QueryTotalAckFeesRequest extends jspb.Message {
  hasPacketId(): boolean;
  clearPacketId(): void;
  getPacketId(): ibc_core_channel_v1_channel_pb.PacketId | undefined;
  setPacketId(value?: ibc_core_channel_v1_channel_pb.PacketId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalAckFeesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalAckFeesRequest): QueryTotalAckFeesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTotalAckFeesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalAckFeesRequest;
  static deserializeBinaryFromReader(message: QueryTotalAckFeesRequest, reader: jspb.BinaryReader): QueryTotalAckFeesRequest;
}

export namespace QueryTotalAckFeesRequest {
  export type AsObject = {
    packetId?: ibc_core_channel_v1_channel_pb.PacketId.AsObject,
  }
}

export class QueryTotalAckFeesResponse extends jspb.Message {
  clearAckFeesList(): void;
  getAckFeesList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAckFeesList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAckFees(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalAckFeesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalAckFeesResponse): QueryTotalAckFeesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTotalAckFeesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalAckFeesResponse;
  static deserializeBinaryFromReader(message: QueryTotalAckFeesResponse, reader: jspb.BinaryReader): QueryTotalAckFeesResponse;
}

export namespace QueryTotalAckFeesResponse {
  export type AsObject = {
    ackFeesList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class QueryTotalTimeoutFeesRequest extends jspb.Message {
  hasPacketId(): boolean;
  clearPacketId(): void;
  getPacketId(): ibc_core_channel_v1_channel_pb.PacketId | undefined;
  setPacketId(value?: ibc_core_channel_v1_channel_pb.PacketId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalTimeoutFeesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTotalTimeoutFeesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalTimeoutFeesRequest;
  static deserializeBinaryFromReader(message: QueryTotalTimeoutFeesRequest, reader: jspb.BinaryReader): QueryTotalTimeoutFeesRequest;
}

export namespace QueryTotalTimeoutFeesRequest {
  export type AsObject = {
    packetId?: ibc_core_channel_v1_channel_pb.PacketId.AsObject,
  }
}

export class QueryTotalTimeoutFeesResponse extends jspb.Message {
  clearTimeoutFeesList(): void;
  getTimeoutFeesList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setTimeoutFeesList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addTimeoutFees(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalTimeoutFeesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTotalTimeoutFeesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalTimeoutFeesResponse;
  static deserializeBinaryFromReader(message: QueryTotalTimeoutFeesResponse, reader: jspb.BinaryReader): QueryTotalTimeoutFeesResponse;
}

export namespace QueryTotalTimeoutFeesResponse {
  export type AsObject = {
    timeoutFeesList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class QueryPayeeRequest extends jspb.Message {
  getChannelId(): string;
  setChannelId(value: string): void;

  getRelayer(): string;
  setRelayer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPayeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPayeeRequest): QueryPayeeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPayeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPayeeRequest;
  static deserializeBinaryFromReader(message: QueryPayeeRequest, reader: jspb.BinaryReader): QueryPayeeRequest;
}

export namespace QueryPayeeRequest {
  export type AsObject = {
    channelId: string,
    relayer: string,
  }
}

export class QueryPayeeResponse extends jspb.Message {
  getPayeeAddress(): string;
  setPayeeAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPayeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPayeeResponse): QueryPayeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPayeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPayeeResponse;
  static deserializeBinaryFromReader(message: QueryPayeeResponse, reader: jspb.BinaryReader): QueryPayeeResponse;
}

export namespace QueryPayeeResponse {
  export type AsObject = {
    payeeAddress: string,
  }
}

export class QueryCounterpartyPayeeRequest extends jspb.Message {
  getChannelId(): string;
  setChannelId(value: string): void;

  getRelayer(): string;
  setRelayer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCounterpartyPayeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCounterpartyPayeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCounterpartyPayeeRequest;
  static deserializeBinaryFromReader(message: QueryCounterpartyPayeeRequest, reader: jspb.BinaryReader): QueryCounterpartyPayeeRequest;
}

export namespace QueryCounterpartyPayeeRequest {
  export type AsObject = {
    channelId: string,
    relayer: string,
  }
}

export class QueryCounterpartyPayeeResponse extends jspb.Message {
  getCounterpartyPayee(): string;
  setCounterpartyPayee(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCounterpartyPayeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCounterpartyPayeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCounterpartyPayeeResponse;
  static deserializeBinaryFromReader(message: QueryCounterpartyPayeeResponse, reader: jspb.BinaryReader): QueryCounterpartyPayeeResponse;
}

export namespace QueryCounterpartyPayeeResponse {
  export type AsObject = {
    counterpartyPayee: string,
  }
}

export class QueryFeeEnabledChannelsRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  getQueryHeight(): number;
  setQueryHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryFeeEnabledChannelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryFeeEnabledChannelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryFeeEnabledChannelsRequest;
  static deserializeBinaryFromReader(message: QueryFeeEnabledChannelsRequest, reader: jspb.BinaryReader): QueryFeeEnabledChannelsRequest;
}

export namespace QueryFeeEnabledChannelsRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    queryHeight: number,
  }
}

export class QueryFeeEnabledChannelsResponse extends jspb.Message {
  clearFeeEnabledChannelsList(): void;
  getFeeEnabledChannelsList(): Array<ibc_applications_fee_v1_genesis_pb.FeeEnabledChannel>;
  setFeeEnabledChannelsList(value: Array<ibc_applications_fee_v1_genesis_pb.FeeEnabledChannel>): void;
  addFeeEnabledChannels(value?: ibc_applications_fee_v1_genesis_pb.FeeEnabledChannel, index?: number): ibc_applications_fee_v1_genesis_pb.FeeEnabledChannel;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryFeeEnabledChannelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryFeeEnabledChannelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryFeeEnabledChannelsResponse;
  static deserializeBinaryFromReader(message: QueryFeeEnabledChannelsResponse, reader: jspb.BinaryReader): QueryFeeEnabledChannelsResponse;
}

export namespace QueryFeeEnabledChannelsResponse {
  export type AsObject = {
    feeEnabledChannelsList: Array<ibc_applications_fee_v1_genesis_pb.FeeEnabledChannel.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryFeeEnabledChannelRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryFeeEnabledChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryFeeEnabledChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryFeeEnabledChannelRequest;
  static deserializeBinaryFromReader(message: QueryFeeEnabledChannelRequest, reader: jspb.BinaryReader): QueryFeeEnabledChannelRequest;
}

export namespace QueryFeeEnabledChannelRequest {
  export type AsObject = {
    portId: string,
    channelId: string,
  }
}

export class QueryFeeEnabledChannelResponse extends jspb.Message {
  getFeeEnabled(): boolean;
  setFeeEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryFeeEnabledChannelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryFeeEnabledChannelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryFeeEnabledChannelResponse;
  static deserializeBinaryFromReader(message: QueryFeeEnabledChannelResponse, reader: jspb.BinaryReader): QueryFeeEnabledChannelResponse;
}

export namespace QueryFeeEnabledChannelResponse {
  export type AsObject = {
    feeEnabled: boolean,
  }
}

