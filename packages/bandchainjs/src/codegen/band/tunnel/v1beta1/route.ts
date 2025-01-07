//@ts-nocheck
import { Encoder } from "../../feeds/v1beta1/encoder";
import { Price, PriceAmino, PriceSDKType } from "../../feeds/v1beta1/feeds";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** TSSRoute represents a route for TSS packets and implements the RouteI interface. */
export interface TSSRoute {
  $typeUrl?: "/band.tunnel.v1beta1.TSSRoute";
  /** destination_chain_id is the destination chain ID */
  destinationChainId: string;
  /** destination_contract_address is the destination contract address */
  destinationContractAddress: string;
  /** encoder is the mode of encoding packet data. */
  encoder: Encoder;
}
export interface TSSRouteProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.TSSRoute";
  value: Uint8Array;
}
/** TSSRoute represents a route for TSS packets and implements the RouteI interface. */
export interface TSSRouteAmino {
  /** destination_chain_id is the destination chain ID */
  destination_chain_id?: string;
  /** destination_contract_address is the destination contract address */
  destination_contract_address?: string;
  /** encoder is the mode of encoding packet data. */
  encoder?: Encoder;
}
export interface TSSRouteAminoMsg {
  type: "/band.tunnel.v1beta1.TSSRoute";
  value: TSSRouteAmino;
}
/** TSSRoute represents a route for TSS packets and implements the RouteI interface. */
export interface TSSRouteSDKType {
  $typeUrl?: "/band.tunnel.v1beta1.TSSRoute";
  destination_chain_id: string;
  destination_contract_address: string;
  encoder: Encoder;
}
/** TSSPacketReceipt represents a receipt for a TSS packet and implements the PacketReceiptI interface. */
export interface TSSPacketReceipt {
  $typeUrl?: "/band.tunnel.v1beta1.TSSPacketReceipt";
  /** signing_id is the signing ID */
  signingId: bigint;
}
export interface TSSPacketReceiptProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.TSSPacketReceipt";
  value: Uint8Array;
}
/** TSSPacketReceipt represents a receipt for a TSS packet and implements the PacketReceiptI interface. */
export interface TSSPacketReceiptAmino {
  /** signing_id is the signing ID */
  signing_id?: string;
}
export interface TSSPacketReceiptAminoMsg {
  type: "/band.tunnel.v1beta1.TSSPacketReceipt";
  value: TSSPacketReceiptAmino;
}
/** TSSPacketReceipt represents a receipt for a TSS packet and implements the PacketReceiptI interface. */
export interface TSSPacketReceiptSDKType {
  $typeUrl?: "/band.tunnel.v1beta1.TSSPacketReceipt";
  signing_id: bigint;
}
/** IBCRoute represents a route for IBC packets and implements the RouteI interface. */
export interface IBCRoute {
  $typeUrl?: "/band.tunnel.v1beta1.IBCRoute";
  /** channel_id is the IBC channel ID */
  channelId: string;
}
export interface IBCRouteProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.IBCRoute";
  value: Uint8Array;
}
/** IBCRoute represents a route for IBC packets and implements the RouteI interface. */
export interface IBCRouteAmino {
  /** channel_id is the IBC channel ID */
  channel_id?: string;
}
export interface IBCRouteAminoMsg {
  type: "/band.tunnel.v1beta1.IBCRoute";
  value: IBCRouteAmino;
}
/** IBCRoute represents a route for IBC packets and implements the RouteI interface. */
export interface IBCRouteSDKType {
  $typeUrl?: "/band.tunnel.v1beta1.IBCRoute";
  channel_id: string;
}
/** IBCPacketReceipt represents a receipt for a IBC packet and implements the PacketReceiptI interface. */
export interface IBCPacketReceipt {
  $typeUrl?: "/band.tunnel.v1beta1.IBCPacketReceipt";
  /** sequence is representing the sequence of the IBC packet. */
  sequence: bigint;
}
export interface IBCPacketReceiptProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.IBCPacketReceipt";
  value: Uint8Array;
}
/** IBCPacketReceipt represents a receipt for a IBC packet and implements the PacketReceiptI interface. */
export interface IBCPacketReceiptAmino {
  /** sequence is representing the sequence of the IBC packet. */
  sequence?: string;
}
export interface IBCPacketReceiptAminoMsg {
  type: "/band.tunnel.v1beta1.IBCPacketReceipt";
  value: IBCPacketReceiptAmino;
}
/** IBCPacketReceipt represents a receipt for a IBC packet and implements the PacketReceiptI interface. */
export interface IBCPacketReceiptSDKType {
  $typeUrl?: "/band.tunnel.v1beta1.IBCPacketReceipt";
  sequence: bigint;
}
/** TunnelPricesPacketData represents the IBC packet payload for the tunnel packet. */
export interface TunnelPricesPacketData {
  /** tunnel_id is the tunnel ID */
  tunnelId: bigint;
  /** sequence is representing the sequence of the tunnel packet. */
  sequence: bigint;
  /** prices is the list of prices information from feeds module. */
  prices: Price[];
  /** created_at is the timestamp when the packet is created */
  createdAt: bigint;
}
export interface TunnelPricesPacketDataProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.TunnelPricesPacketData";
  value: Uint8Array;
}
/** TunnelPricesPacketData represents the IBC packet payload for the tunnel packet. */
export interface TunnelPricesPacketDataAmino {
  /** tunnel_id is the tunnel ID */
  tunnel_id?: string;
  /** sequence is representing the sequence of the tunnel packet. */
  sequence?: string;
  /** prices is the list of prices information from feeds module. */
  prices?: PriceAmino[];
  /** created_at is the timestamp when the packet is created */
  created_at?: string;
}
export interface TunnelPricesPacketDataAminoMsg {
  type: "/band.tunnel.v1beta1.TunnelPricesPacketData";
  value: TunnelPricesPacketDataAmino;
}
/** TunnelPricesPacketData represents the IBC packet payload for the tunnel packet. */
export interface TunnelPricesPacketDataSDKType {
  tunnel_id: bigint;
  sequence: bigint;
  prices: PriceSDKType[];
  created_at: bigint;
}
function createBaseTSSRoute(): TSSRoute {
  return {
    $typeUrl: "/band.tunnel.v1beta1.TSSRoute",
    destinationChainId: "",
    destinationContractAddress: "",
    encoder: 0
  };
}
export const TSSRoute = {
  typeUrl: "/band.tunnel.v1beta1.TSSRoute",
  encode(message: TSSRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.destinationChainId !== "") {
      writer.uint32(10).string(message.destinationChainId);
    }
    if (message.destinationContractAddress !== "") {
      writer.uint32(18).string(message.destinationContractAddress);
    }
    if (message.encoder !== 0) {
      writer.uint32(24).int32(message.encoder);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TSSRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTSSRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destinationChainId = reader.string();
          break;
        case 2:
          message.destinationContractAddress = reader.string();
          break;
        case 3:
          message.encoder = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TSSRoute>): TSSRoute {
    const message = createBaseTSSRoute();
    message.destinationChainId = object.destinationChainId ?? "";
    message.destinationContractAddress = object.destinationContractAddress ?? "";
    message.encoder = object.encoder ?? 0;
    return message;
  },
  fromAmino(object: TSSRouteAmino): TSSRoute {
    const message = createBaseTSSRoute();
    if (object.destination_chain_id !== undefined && object.destination_chain_id !== null) {
      message.destinationChainId = object.destination_chain_id;
    }
    if (object.destination_contract_address !== undefined && object.destination_contract_address !== null) {
      message.destinationContractAddress = object.destination_contract_address;
    }
    if (object.encoder !== undefined && object.encoder !== null) {
      message.encoder = object.encoder;
    }
    return message;
  },
  toAmino(message: TSSRoute): TSSRouteAmino {
    const obj: any = {};
    obj.destination_chain_id = message.destinationChainId === "" ? undefined : message.destinationChainId;
    obj.destination_contract_address = message.destinationContractAddress === "" ? undefined : message.destinationContractAddress;
    obj.encoder = message.encoder === 0 ? undefined : message.encoder;
    return obj;
  },
  fromAminoMsg(object: TSSRouteAminoMsg): TSSRoute {
    return TSSRoute.fromAmino(object.value);
  },
  fromProtoMsg(message: TSSRouteProtoMsg): TSSRoute {
    return TSSRoute.decode(message.value);
  },
  toProto(message: TSSRoute): Uint8Array {
    return TSSRoute.encode(message).finish();
  },
  toProtoMsg(message: TSSRoute): TSSRouteProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.TSSRoute",
      value: TSSRoute.encode(message).finish()
    };
  }
};
function createBaseTSSPacketReceipt(): TSSPacketReceipt {
  return {
    $typeUrl: "/band.tunnel.v1beta1.TSSPacketReceipt",
    signingId: BigInt(0)
  };
}
export const TSSPacketReceipt = {
  typeUrl: "/band.tunnel.v1beta1.TSSPacketReceipt",
  encode(message: TSSPacketReceipt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signingId !== BigInt(0)) {
      writer.uint32(8).uint64(message.signingId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TSSPacketReceipt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTSSPacketReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signingId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TSSPacketReceipt>): TSSPacketReceipt {
    const message = createBaseTSSPacketReceipt();
    message.signingId = object.signingId !== undefined && object.signingId !== null ? BigInt(object.signingId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TSSPacketReceiptAmino): TSSPacketReceipt {
    const message = createBaseTSSPacketReceipt();
    if (object.signing_id !== undefined && object.signing_id !== null) {
      message.signingId = BigInt(object.signing_id);
    }
    return message;
  },
  toAmino(message: TSSPacketReceipt): TSSPacketReceiptAmino {
    const obj: any = {};
    obj.signing_id = message.signingId !== BigInt(0) ? message.signingId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TSSPacketReceiptAminoMsg): TSSPacketReceipt {
    return TSSPacketReceipt.fromAmino(object.value);
  },
  fromProtoMsg(message: TSSPacketReceiptProtoMsg): TSSPacketReceipt {
    return TSSPacketReceipt.decode(message.value);
  },
  toProto(message: TSSPacketReceipt): Uint8Array {
    return TSSPacketReceipt.encode(message).finish();
  },
  toProtoMsg(message: TSSPacketReceipt): TSSPacketReceiptProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.TSSPacketReceipt",
      value: TSSPacketReceipt.encode(message).finish()
    };
  }
};
function createBaseIBCRoute(): IBCRoute {
  return {
    $typeUrl: "/band.tunnel.v1beta1.IBCRoute",
    channelId: ""
  };
}
export const IBCRoute = {
  typeUrl: "/band.tunnel.v1beta1.IBCRoute",
  encode(message: IBCRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IBCRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IBCRoute>): IBCRoute {
    const message = createBaseIBCRoute();
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: IBCRouteAmino): IBCRoute {
    const message = createBaseIBCRoute();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: IBCRoute): IBCRouteAmino {
    const obj: any = {};
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: IBCRouteAminoMsg): IBCRoute {
    return IBCRoute.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCRouteProtoMsg): IBCRoute {
    return IBCRoute.decode(message.value);
  },
  toProto(message: IBCRoute): Uint8Array {
    return IBCRoute.encode(message).finish();
  },
  toProtoMsg(message: IBCRoute): IBCRouteProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.IBCRoute",
      value: IBCRoute.encode(message).finish()
    };
  }
};
function createBaseIBCPacketReceipt(): IBCPacketReceipt {
  return {
    $typeUrl: "/band.tunnel.v1beta1.IBCPacketReceipt",
    sequence: BigInt(0)
  };
}
export const IBCPacketReceipt = {
  typeUrl: "/band.tunnel.v1beta1.IBCPacketReceipt",
  encode(message: IBCPacketReceipt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IBCPacketReceipt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCPacketReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IBCPacketReceipt>): IBCPacketReceipt {
    const message = createBaseIBCPacketReceipt();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: IBCPacketReceiptAmino): IBCPacketReceipt {
    const message = createBaseIBCPacketReceipt();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: IBCPacketReceipt): IBCPacketReceiptAmino {
    const obj: any = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IBCPacketReceiptAminoMsg): IBCPacketReceipt {
    return IBCPacketReceipt.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCPacketReceiptProtoMsg): IBCPacketReceipt {
    return IBCPacketReceipt.decode(message.value);
  },
  toProto(message: IBCPacketReceipt): Uint8Array {
    return IBCPacketReceipt.encode(message).finish();
  },
  toProtoMsg(message: IBCPacketReceipt): IBCPacketReceiptProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.IBCPacketReceipt",
      value: IBCPacketReceipt.encode(message).finish()
    };
  }
};
function createBaseTunnelPricesPacketData(): TunnelPricesPacketData {
  return {
    tunnelId: BigInt(0),
    sequence: BigInt(0),
    prices: [],
    createdAt: BigInt(0)
  };
}
export const TunnelPricesPacketData = {
  typeUrl: "/band.tunnel.v1beta1.TunnelPricesPacketData",
  encode(message: TunnelPricesPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    for (const v of message.prices) {
      Price.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TunnelPricesPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTunnelPricesPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.uint64();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        case 3:
          message.prices.push(Price.decode(reader, reader.uint32()));
          break;
        case 4:
          message.createdAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TunnelPricesPacketData>): TunnelPricesPacketData {
    const message = createBaseTunnelPricesPacketData();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.prices = object.prices?.map(e => Price.fromPartial(e)) || [];
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TunnelPricesPacketDataAmino): TunnelPricesPacketData {
    const message = createBaseTunnelPricesPacketData();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    message.prices = object.prices?.map(e => Price.fromAmino(e)) || [];
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    return message;
  },
  toAmino(message: TunnelPricesPacketData): TunnelPricesPacketDataAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? Price.toAmino(e) : undefined);
    } else {
      obj.prices = message.prices;
    }
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TunnelPricesPacketDataAminoMsg): TunnelPricesPacketData {
    return TunnelPricesPacketData.fromAmino(object.value);
  },
  fromProtoMsg(message: TunnelPricesPacketDataProtoMsg): TunnelPricesPacketData {
    return TunnelPricesPacketData.decode(message.value);
  },
  toProto(message: TunnelPricesPacketData): Uint8Array {
    return TunnelPricesPacketData.encode(message).finish();
  },
  toProtoMsg(message: TunnelPricesPacketData): TunnelPricesPacketDataProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.TunnelPricesPacketData",
      value: TunnelPricesPacketData.encode(message).finish()
    };
  }
};