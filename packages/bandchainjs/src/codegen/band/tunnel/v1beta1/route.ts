//@ts-nocheck
import { Encoder } from "../../feeds/v1beta1/encoder";
import { Price, PriceAmino, PriceSDKType } from "../../feeds/v1beta1/feeds";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** TSSRoute represents a route for tss packets and implements the RouteI interface. */
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
/** TSSRoute represents a route for tss packets and implements the RouteI interface. */
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
/** TSSRoute represents a route for tss packets and implements the RouteI interface. */
export interface TSSRouteSDKType {
  $typeUrl?: "/band.tunnel.v1beta1.TSSRoute";
  destination_chain_id: string;
  destination_contract_address: string;
  encoder: Encoder;
}
/** TSSPacketReceipt represents a receipt for a tss packet and implements the PacketReceiptI interface. */
export interface TSSPacketReceipt {
  $typeUrl?: "/band.tunnel.v1beta1.TSSPacketReceipt";
  /** signing_id is the signing ID */
  signingId: bigint;
}
export interface TSSPacketReceiptProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.TSSPacketReceipt";
  value: Uint8Array;
}
/** TSSPacketReceipt represents a receipt for a tss packet and implements the PacketReceiptI interface. */
export interface TSSPacketReceiptAmino {
  /** signing_id is the signing ID */
  signing_id?: string;
}
export interface TSSPacketReceiptAminoMsg {
  type: "/band.tunnel.v1beta1.TSSPacketReceipt";
  value: TSSPacketReceiptAmino;
}
/** TSSPacketReceipt represents a receipt for a tss packet and implements the PacketReceiptI interface. */
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
/** IBCHookRoute is the type for an IBC hook route */
export interface IBCHookRoute {
  $typeUrl?: "/band.tunnel.v1beta1.IBCHookRoute";
  /** channel_id is the IBC channel ID */
  channelId: string;
  /** destination_contract_address is the destination contract address */
  destinationContractAddress: string;
}
export interface IBCHookRouteProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.IBCHookRoute";
  value: Uint8Array;
}
/** IBCHookRoute is the type for an IBC hook route */
export interface IBCHookRouteAmino {
  /** channel_id is the IBC channel ID */
  channel_id?: string;
  /** destination_contract_address is the destination contract address */
  destination_contract_address?: string;
}
export interface IBCHookRouteAminoMsg {
  type: "/band.tunnel.v1beta1.IBCHookRoute";
  value: IBCHookRouteAmino;
}
/** IBCHookRoute is the type for an IBC hook route */
export interface IBCHookRouteSDKType {
  $typeUrl?: "/band.tunnel.v1beta1.IBCHookRoute";
  channel_id: string;
  destination_contract_address: string;
}
/** IBCHookPacketReceipt represents a receipt for a IBC hook packet and implements the PacketReceiptI interface. */
export interface IBCHookPacketReceipt {
  $typeUrl?: "/band.tunnel.v1beta1.IBCHookPacketReceipt";
  /** sequence is representing the sequence of the IBC packet. */
  sequence: bigint;
}
export interface IBCHookPacketReceiptProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.IBCHookPacketReceipt";
  value: Uint8Array;
}
/** IBCHookPacketReceipt represents a receipt for a IBC hook packet and implements the PacketReceiptI interface. */
export interface IBCHookPacketReceiptAmino {
  /** sequence is representing the sequence of the IBC packet. */
  sequence?: string;
}
export interface IBCHookPacketReceiptAminoMsg {
  type: "/band.tunnel.v1beta1.IBCHookPacketReceipt";
  value: IBCHookPacketReceiptAmino;
}
/** IBCHookPacketReceipt represents a receipt for a IBC hook packet and implements the PacketReceiptI interface. */
export interface IBCHookPacketReceiptSDKType {
  $typeUrl?: "/band.tunnel.v1beta1.IBCHookPacketReceipt";
  sequence: bigint;
}
/** IBCHookMemo is the type for a data packet that will be stringtify to be a memo of IBC hook packet */
export interface IBCHookMemo {
  /** wasm is the payload for calling destination contract */
  wasm: IBCHookMemo_Payload;
}
export interface IBCHookMemoProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.IBCHookMemo";
  value: Uint8Array;
}
/** IBCHookMemo is the type for a data packet that will be stringtify to be a memo of IBC hook packet */
export interface IBCHookMemoAmino {
  /** wasm is the payload for calling destination contract */
  wasm?: IBCHookMemo_PayloadAmino;
}
export interface IBCHookMemoAminoMsg {
  type: "/band.tunnel.v1beta1.IBCHookMemo";
  value: IBCHookMemoAmino;
}
/** IBCHookMemo is the type for a data packet that will be stringtify to be a memo of IBC hook packet */
export interface IBCHookMemoSDKType {
  wasm: IBCHookMemo_PayloadSDKType;
}
/** Payload defines target contract and detail of function call (msg). */
export interface IBCHookMemo_Payload {
  /** contract is destination contract address */
  contract: string;
  /** msg is the ibc hook message */
  msg: IBCHookMemo_Payload_Msg;
}
export interface IBCHookMemo_PayloadProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.Payload";
  value: Uint8Array;
}
/** Payload defines target contract and detail of function call (msg). */
export interface IBCHookMemo_PayloadAmino {
  /** contract is destination contract address */
  contract?: string;
  /** msg is the ibc hook message */
  msg?: IBCHookMemo_Payload_MsgAmino;
}
export interface IBCHookMemo_PayloadAminoMsg {
  type: "/band.tunnel.v1beta1.Payload";
  value: IBCHookMemo_PayloadAmino;
}
/** Payload defines target contract and detail of function call (msg). */
export interface IBCHookMemo_PayloadSDKType {
  contract: string;
  msg: IBCHookMemo_Payload_MsgSDKType;
}
/** Msg defines function name (`receive_packet`) and a type of function arguments. */
export interface IBCHookMemo_Payload_Msg {
  /** receive_packet is the function name on the destination contract */
  receivePacket: IBCHookMemo_Payload_Msg_ReceivePacket;
}
export interface IBCHookMemo_Payload_MsgProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.Msg";
  value: Uint8Array;
}
/** Msg defines function name (`receive_packet`) and a type of function arguments. */
export interface IBCHookMemo_Payload_MsgAmino {
  /** receive_packet is the function name on the destination contract */
  receive_packet?: IBCHookMemo_Payload_Msg_ReceivePacketAmino;
}
export interface IBCHookMemo_Payload_MsgAminoMsg {
  type: "/band.tunnel.v1beta1.Msg";
  value: IBCHookMemo_Payload_MsgAmino;
}
/** Msg defines function name (`receive_packet`) and a type of function arguments. */
export interface IBCHookMemo_Payload_MsgSDKType {
  receive_packet: IBCHookMemo_Payload_Msg_ReceivePacketSDKType;
}
/** ReceivePacket represents the arguments of `receive_packet` function */
export interface IBCHookMemo_Payload_Msg_ReceivePacket {
  /** packet represents the data packet */
  packet: TunnelPricesPacketData;
}
export interface IBCHookMemo_Payload_Msg_ReceivePacketProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.ReceivePacket";
  value: Uint8Array;
}
/** ReceivePacket represents the arguments of `receive_packet` function */
export interface IBCHookMemo_Payload_Msg_ReceivePacketAmino {
  /** packet represents the data packet */
  packet?: TunnelPricesPacketDataAmino;
}
export interface IBCHookMemo_Payload_Msg_ReceivePacketAminoMsg {
  type: "/band.tunnel.v1beta1.ReceivePacket";
  value: IBCHookMemo_Payload_Msg_ReceivePacketAmino;
}
/** ReceivePacket represents the arguments of `receive_packet` function */
export interface IBCHookMemo_Payload_Msg_ReceivePacketSDKType {
  packet: TunnelPricesPacketDataSDKType;
}
/** RouterRoute is the type for a Router route */
export interface RouterRoute {
  $typeUrl?: "/band.tunnel.v1beta1.RouterRoute";
  /** destination_chain_id is the destination chain ID */
  destinationChainId: string;
  /** destination_contract_address is the destination contract address */
  destinationContractAddress: string;
  /** destination_gas_limit is the destination gas limit */
  destinationGasLimit: bigint;
}
export interface RouterRouteProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.RouterRoute";
  value: Uint8Array;
}
/** RouterRoute is the type for a Router route */
export interface RouterRouteAmino {
  /** destination_chain_id is the destination chain ID */
  destination_chain_id?: string;
  /** destination_contract_address is the destination contract address */
  destination_contract_address?: string;
  /** destination_gas_limit is the destination gas limit */
  destination_gas_limit?: string;
}
export interface RouterRouteAminoMsg {
  type: "/band.tunnel.v1beta1.RouterRoute";
  value: RouterRouteAmino;
}
/** RouterRoute is the type for a Router route */
export interface RouterRouteSDKType {
  $typeUrl?: "/band.tunnel.v1beta1.RouterRoute";
  destination_chain_id: string;
  destination_contract_address: string;
  destination_gas_limit: bigint;
}
/** RouterPacketReceipt represents a receipt for a Router packet and implements the PacketReceiptI interface. */
export interface RouterPacketReceipt {
  $typeUrl?: "/band.tunnel.v1beta1.RouterPacketReceipt";
  /** sequence is representing the sequence of the IBC packet. */
  sequence: bigint;
}
export interface RouterPacketReceiptProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.RouterPacketReceipt";
  value: Uint8Array;
}
/** RouterPacketReceipt represents a receipt for a Router packet and implements the PacketReceiptI interface. */
export interface RouterPacketReceiptAmino {
  /** sequence is representing the sequence of the IBC packet. */
  sequence?: string;
}
export interface RouterPacketReceiptAminoMsg {
  type: "/band.tunnel.v1beta1.RouterPacketReceipt";
  value: RouterPacketReceiptAmino;
}
/** RouterPacketReceipt represents a receipt for a Router packet and implements the PacketReceiptI interface. */
export interface RouterPacketReceiptSDKType {
  $typeUrl?: "/band.tunnel.v1beta1.RouterPacketReceipt";
  sequence: bigint;
}
/** RouterMemo is the type for a data packet that will be stringtify to be a memo of IBC packet */
export interface RouterMemo {
  /** wasm is the payload for calling destination contract */
  wasm: RouterMemo_Payload;
}
export interface RouterMemoProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.RouterMemo";
  value: Uint8Array;
}
/** RouterMemo is the type for a data packet that will be stringtify to be a memo of IBC packet */
export interface RouterMemoAmino {
  /** wasm is the payload for calling destination contract */
  wasm?: RouterMemo_PayloadAmino;
}
export interface RouterMemoAminoMsg {
  type: "/band.tunnel.v1beta1.RouterMemo";
  value: RouterMemoAmino;
}
/** RouterMemo is the type for a data packet that will be stringtify to be a memo of IBC packet */
export interface RouterMemoSDKType {
  wasm: RouterMemo_PayloadSDKType;
}
/** Payload defines target contract and detail of function call (msg). */
export interface RouterMemo_Payload {
  /** contract is destination contract address */
  contract: string;
  /** msg is the Router message */
  msg: RouterMemo_Payload_Msg;
}
export interface RouterMemo_PayloadProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.Payload";
  value: Uint8Array;
}
/** Payload defines target contract and detail of function call (msg). */
export interface RouterMemo_PayloadAmino {
  /** contract is destination contract address */
  contract?: string;
  /** msg is the Router message */
  msg?: RouterMemo_Payload_MsgAmino;
}
export interface RouterMemo_PayloadAminoMsg {
  type: "/band.tunnel.v1beta1.Payload";
  value: RouterMemo_PayloadAmino;
}
/** Payload defines target contract and detail of function call (msg). */
export interface RouterMemo_PayloadSDKType {
  contract: string;
  msg: RouterMemo_Payload_MsgSDKType;
}
/** Msg defines function name (`receive_band_data`) and a type of function arguments. */
export interface RouterMemo_Payload_Msg {
  /** receive_band_data is the function name on the destination contract */
  receiveBandData: RouterMemo_Payload_Msg_ReceiveBandDataArgs;
}
export interface RouterMemo_Payload_MsgProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.Msg";
  value: Uint8Array;
}
/** Msg defines function name (`receive_band_data`) and a type of function arguments. */
export interface RouterMemo_Payload_MsgAmino {
  /** receive_band_data is the function name on the destination contract */
  receive_band_data?: RouterMemo_Payload_Msg_ReceiveBandDataArgsAmino;
}
export interface RouterMemo_Payload_MsgAminoMsg {
  type: "/band.tunnel.v1beta1.Msg";
  value: RouterMemo_Payload_MsgAmino;
}
/** Msg defines function name (`receive_band_data`) and a type of function arguments. */
export interface RouterMemo_Payload_MsgSDKType {
  receive_band_data: RouterMemo_Payload_Msg_ReceiveBandDataArgsSDKType;
}
/** ReceiveBandDataArgs represents the arguments of `receive_band_data` function */
export interface RouterMemo_Payload_Msg_ReceiveBandDataArgs {
  /** dest_chain_id is the destination chain ID */
  destChainId: string;
  /** dest_contract_address is the destination contract address */
  destContractAddress: string;
  /** gas_limit is the destination gas limit */
  gasLimit: bigint;
  /** payload is the payload of the packet */
  payload: string;
}
export interface RouterMemo_Payload_Msg_ReceiveBandDataArgsProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.ReceiveBandDataArgs";
  value: Uint8Array;
}
/** ReceiveBandDataArgs represents the arguments of `receive_band_data` function */
export interface RouterMemo_Payload_Msg_ReceiveBandDataArgsAmino {
  /** dest_chain_id is the destination chain ID */
  dest_chain_id?: string;
  /** dest_contract_address is the destination contract address */
  dest_contract_address?: string;
  /** gas_limit is the destination gas limit */
  gas_limit?: string;
  /** payload is the payload of the packet */
  payload?: string;
}
export interface RouterMemo_Payload_Msg_ReceiveBandDataArgsAminoMsg {
  type: "/band.tunnel.v1beta1.ReceiveBandDataArgs";
  value: RouterMemo_Payload_Msg_ReceiveBandDataArgsAmino;
}
/** ReceiveBandDataArgs represents the arguments of `receive_band_data` function */
export interface RouterMemo_Payload_Msg_ReceiveBandDataArgsSDKType {
  dest_chain_id: string;
  dest_contract_address: string;
  gas_limit: bigint;
  payload: string;
}
/** AxelarRoute represents a route for Axelar packets and implements the RouteI interface. */
export interface AxelarRoute {
  $typeUrl?: "/band.tunnel.v1beta1.AxelarRoute";
  /** destination_chain_id is the destination chain ID */
  destinationChainId: string;
  /** destination_contract_address is the destination contract address */
  destinationContractAddress: string;
  /** fee is the fee for each packet in the Axelar network. */
  fee: Coin;
}
export interface AxelarRouteProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.AxelarRoute";
  value: Uint8Array;
}
/** AxelarRoute represents a route for Axelar packets and implements the RouteI interface. */
export interface AxelarRouteAmino {
  /** destination_chain_id is the destination chain ID */
  destination_chain_id?: string;
  /** destination_contract_address is the destination contract address */
  destination_contract_address?: string;
  /** fee is the fee for each packet in the Axelar network. */
  fee?: CoinAmino;
}
export interface AxelarRouteAminoMsg {
  type: "/band.tunnel.v1beta1.AxelarRoute";
  value: AxelarRouteAmino;
}
/** AxelarRoute represents a route for Axelar packets and implements the RouteI interface. */
export interface AxelarRouteSDKType {
  $typeUrl?: "/band.tunnel.v1beta1.AxelarRoute";
  destination_chain_id: string;
  destination_contract_address: string;
  fee: CoinSDKType;
}
/** AxelarPacketReceipt represents a receipt for a Axelar packet and implements the PacketReceiptI interface. */
export interface AxelarPacketReceipt {
  $typeUrl?: "/band.tunnel.v1beta1.AxelarPacketReceipt";
  /** sequence is representing the sequence of the Axelar packet. */
  sequence: bigint;
}
export interface AxelarPacketReceiptProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.AxelarPacketReceipt";
  value: Uint8Array;
}
/** AxelarPacketReceipt represents a receipt for a Axelar packet and implements the PacketReceiptI interface. */
export interface AxelarPacketReceiptAmino {
  /** sequence is representing the sequence of the Axelar packet. */
  sequence?: string;
}
export interface AxelarPacketReceiptAminoMsg {
  type: "/band.tunnel.v1beta1.AxelarPacketReceipt";
  value: AxelarPacketReceiptAmino;
}
/** AxelarPacketReceipt represents a receipt for a Axelar packet and implements the PacketReceiptI interface. */
export interface AxelarPacketReceiptSDKType {
  $typeUrl?: "/band.tunnel.v1beta1.AxelarPacketReceipt";
  sequence: bigint;
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
function createBaseIBCHookRoute(): IBCHookRoute {
  return {
    $typeUrl: "/band.tunnel.v1beta1.IBCHookRoute",
    channelId: "",
    destinationContractAddress: ""
  };
}
export const IBCHookRoute = {
  typeUrl: "/band.tunnel.v1beta1.IBCHookRoute",
  encode(message: IBCHookRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.destinationContractAddress !== "") {
      writer.uint32(18).string(message.destinationContractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IBCHookRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCHookRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.destinationContractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IBCHookRoute>): IBCHookRoute {
    const message = createBaseIBCHookRoute();
    message.channelId = object.channelId ?? "";
    message.destinationContractAddress = object.destinationContractAddress ?? "";
    return message;
  },
  fromAmino(object: IBCHookRouteAmino): IBCHookRoute {
    const message = createBaseIBCHookRoute();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.destination_contract_address !== undefined && object.destination_contract_address !== null) {
      message.destinationContractAddress = object.destination_contract_address;
    }
    return message;
  },
  toAmino(message: IBCHookRoute): IBCHookRouteAmino {
    const obj: any = {};
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.destination_contract_address = message.destinationContractAddress === "" ? undefined : message.destinationContractAddress;
    return obj;
  },
  fromAminoMsg(object: IBCHookRouteAminoMsg): IBCHookRoute {
    return IBCHookRoute.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCHookRouteProtoMsg): IBCHookRoute {
    return IBCHookRoute.decode(message.value);
  },
  toProto(message: IBCHookRoute): Uint8Array {
    return IBCHookRoute.encode(message).finish();
  },
  toProtoMsg(message: IBCHookRoute): IBCHookRouteProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.IBCHookRoute",
      value: IBCHookRoute.encode(message).finish()
    };
  }
};
function createBaseIBCHookPacketReceipt(): IBCHookPacketReceipt {
  return {
    $typeUrl: "/band.tunnel.v1beta1.IBCHookPacketReceipt",
    sequence: BigInt(0)
  };
}
export const IBCHookPacketReceipt = {
  typeUrl: "/band.tunnel.v1beta1.IBCHookPacketReceipt",
  encode(message: IBCHookPacketReceipt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IBCHookPacketReceipt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCHookPacketReceipt();
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
  fromPartial(object: Partial<IBCHookPacketReceipt>): IBCHookPacketReceipt {
    const message = createBaseIBCHookPacketReceipt();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: IBCHookPacketReceiptAmino): IBCHookPacketReceipt {
    const message = createBaseIBCHookPacketReceipt();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: IBCHookPacketReceipt): IBCHookPacketReceiptAmino {
    const obj: any = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IBCHookPacketReceiptAminoMsg): IBCHookPacketReceipt {
    return IBCHookPacketReceipt.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCHookPacketReceiptProtoMsg): IBCHookPacketReceipt {
    return IBCHookPacketReceipt.decode(message.value);
  },
  toProto(message: IBCHookPacketReceipt): Uint8Array {
    return IBCHookPacketReceipt.encode(message).finish();
  },
  toProtoMsg(message: IBCHookPacketReceipt): IBCHookPacketReceiptProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.IBCHookPacketReceipt",
      value: IBCHookPacketReceipt.encode(message).finish()
    };
  }
};
function createBaseIBCHookMemo(): IBCHookMemo {
  return {
    wasm: IBCHookMemo_Payload.fromPartial({})
  };
}
export const IBCHookMemo = {
  typeUrl: "/band.tunnel.v1beta1.IBCHookMemo",
  encode(message: IBCHookMemo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wasm !== undefined) {
      IBCHookMemo_Payload.encode(message.wasm, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IBCHookMemo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCHookMemo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wasm = IBCHookMemo_Payload.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IBCHookMemo>): IBCHookMemo {
    const message = createBaseIBCHookMemo();
    message.wasm = object.wasm !== undefined && object.wasm !== null ? IBCHookMemo_Payload.fromPartial(object.wasm) : undefined;
    return message;
  },
  fromAmino(object: IBCHookMemoAmino): IBCHookMemo {
    const message = createBaseIBCHookMemo();
    if (object.wasm !== undefined && object.wasm !== null) {
      message.wasm = IBCHookMemo_Payload.fromAmino(object.wasm);
    }
    return message;
  },
  toAmino(message: IBCHookMemo): IBCHookMemoAmino {
    const obj: any = {};
    obj.wasm = message.wasm ? IBCHookMemo_Payload.toAmino(message.wasm) : undefined;
    return obj;
  },
  fromAminoMsg(object: IBCHookMemoAminoMsg): IBCHookMemo {
    return IBCHookMemo.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCHookMemoProtoMsg): IBCHookMemo {
    return IBCHookMemo.decode(message.value);
  },
  toProto(message: IBCHookMemo): Uint8Array {
    return IBCHookMemo.encode(message).finish();
  },
  toProtoMsg(message: IBCHookMemo): IBCHookMemoProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.IBCHookMemo",
      value: IBCHookMemo.encode(message).finish()
    };
  }
};
function createBaseIBCHookMemo_Payload(): IBCHookMemo_Payload {
  return {
    contract: "",
    msg: IBCHookMemo_Payload_Msg.fromPartial({})
  };
}
export const IBCHookMemo_Payload = {
  typeUrl: "/band.tunnel.v1beta1.Payload",
  encode(message: IBCHookMemo_Payload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.msg !== undefined) {
      IBCHookMemo_Payload_Msg.encode(message.msg, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IBCHookMemo_Payload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCHookMemo_Payload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.msg = IBCHookMemo_Payload_Msg.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IBCHookMemo_Payload>): IBCHookMemo_Payload {
    const message = createBaseIBCHookMemo_Payload();
    message.contract = object.contract ?? "";
    message.msg = object.msg !== undefined && object.msg !== null ? IBCHookMemo_Payload_Msg.fromPartial(object.msg) : undefined;
    return message;
  },
  fromAmino(object: IBCHookMemo_PayloadAmino): IBCHookMemo_Payload {
    const message = createBaseIBCHookMemo_Payload();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = IBCHookMemo_Payload_Msg.fromAmino(object.msg);
    }
    return message;
  },
  toAmino(message: IBCHookMemo_Payload): IBCHookMemo_PayloadAmino {
    const obj: any = {};
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.msg = message.msg ? IBCHookMemo_Payload_Msg.toAmino(message.msg) : undefined;
    return obj;
  },
  fromAminoMsg(object: IBCHookMemo_PayloadAminoMsg): IBCHookMemo_Payload {
    return IBCHookMemo_Payload.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCHookMemo_PayloadProtoMsg): IBCHookMemo_Payload {
    return IBCHookMemo_Payload.decode(message.value);
  },
  toProto(message: IBCHookMemo_Payload): Uint8Array {
    return IBCHookMemo_Payload.encode(message).finish();
  },
  toProtoMsg(message: IBCHookMemo_Payload): IBCHookMemo_PayloadProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.Payload",
      value: IBCHookMemo_Payload.encode(message).finish()
    };
  }
};
function createBaseIBCHookMemo_Payload_Msg(): IBCHookMemo_Payload_Msg {
  return {
    receivePacket: IBCHookMemo_Payload_Msg_ReceivePacket.fromPartial({})
  };
}
export const IBCHookMemo_Payload_Msg = {
  typeUrl: "/band.tunnel.v1beta1.Msg",
  encode(message: IBCHookMemo_Payload_Msg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receivePacket !== undefined) {
      IBCHookMemo_Payload_Msg_ReceivePacket.encode(message.receivePacket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IBCHookMemo_Payload_Msg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCHookMemo_Payload_Msg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receivePacket = IBCHookMemo_Payload_Msg_ReceivePacket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IBCHookMemo_Payload_Msg>): IBCHookMemo_Payload_Msg {
    const message = createBaseIBCHookMemo_Payload_Msg();
    message.receivePacket = object.receivePacket !== undefined && object.receivePacket !== null ? IBCHookMemo_Payload_Msg_ReceivePacket.fromPartial(object.receivePacket) : undefined;
    return message;
  },
  fromAmino(object: IBCHookMemo_Payload_MsgAmino): IBCHookMemo_Payload_Msg {
    const message = createBaseIBCHookMemo_Payload_Msg();
    if (object.receive_packet !== undefined && object.receive_packet !== null) {
      message.receivePacket = IBCHookMemo_Payload_Msg_ReceivePacket.fromAmino(object.receive_packet);
    }
    return message;
  },
  toAmino(message: IBCHookMemo_Payload_Msg): IBCHookMemo_Payload_MsgAmino {
    const obj: any = {};
    obj.receive_packet = message.receivePacket ? IBCHookMemo_Payload_Msg_ReceivePacket.toAmino(message.receivePacket) : undefined;
    return obj;
  },
  fromAminoMsg(object: IBCHookMemo_Payload_MsgAminoMsg): IBCHookMemo_Payload_Msg {
    return IBCHookMemo_Payload_Msg.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCHookMemo_Payload_MsgProtoMsg): IBCHookMemo_Payload_Msg {
    return IBCHookMemo_Payload_Msg.decode(message.value);
  },
  toProto(message: IBCHookMemo_Payload_Msg): Uint8Array {
    return IBCHookMemo_Payload_Msg.encode(message).finish();
  },
  toProtoMsg(message: IBCHookMemo_Payload_Msg): IBCHookMemo_Payload_MsgProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.Msg",
      value: IBCHookMemo_Payload_Msg.encode(message).finish()
    };
  }
};
function createBaseIBCHookMemo_Payload_Msg_ReceivePacket(): IBCHookMemo_Payload_Msg_ReceivePacket {
  return {
    packet: TunnelPricesPacketData.fromPartial({})
  };
}
export const IBCHookMemo_Payload_Msg_ReceivePacket = {
  typeUrl: "/band.tunnel.v1beta1.ReceivePacket",
  encode(message: IBCHookMemo_Payload_Msg_ReceivePacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      TunnelPricesPacketData.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IBCHookMemo_Payload_Msg_ReceivePacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCHookMemo_Payload_Msg_ReceivePacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = TunnelPricesPacketData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IBCHookMemo_Payload_Msg_ReceivePacket>): IBCHookMemo_Payload_Msg_ReceivePacket {
    const message = createBaseIBCHookMemo_Payload_Msg_ReceivePacket();
    message.packet = object.packet !== undefined && object.packet !== null ? TunnelPricesPacketData.fromPartial(object.packet) : undefined;
    return message;
  },
  fromAmino(object: IBCHookMemo_Payload_Msg_ReceivePacketAmino): IBCHookMemo_Payload_Msg_ReceivePacket {
    const message = createBaseIBCHookMemo_Payload_Msg_ReceivePacket();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = TunnelPricesPacketData.fromAmino(object.packet);
    }
    return message;
  },
  toAmino(message: IBCHookMemo_Payload_Msg_ReceivePacket): IBCHookMemo_Payload_Msg_ReceivePacketAmino {
    const obj: any = {};
    obj.packet = message.packet ? TunnelPricesPacketData.toAmino(message.packet) : undefined;
    return obj;
  },
  fromAminoMsg(object: IBCHookMemo_Payload_Msg_ReceivePacketAminoMsg): IBCHookMemo_Payload_Msg_ReceivePacket {
    return IBCHookMemo_Payload_Msg_ReceivePacket.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCHookMemo_Payload_Msg_ReceivePacketProtoMsg): IBCHookMemo_Payload_Msg_ReceivePacket {
    return IBCHookMemo_Payload_Msg_ReceivePacket.decode(message.value);
  },
  toProto(message: IBCHookMemo_Payload_Msg_ReceivePacket): Uint8Array {
    return IBCHookMemo_Payload_Msg_ReceivePacket.encode(message).finish();
  },
  toProtoMsg(message: IBCHookMemo_Payload_Msg_ReceivePacket): IBCHookMemo_Payload_Msg_ReceivePacketProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.ReceivePacket",
      value: IBCHookMemo_Payload_Msg_ReceivePacket.encode(message).finish()
    };
  }
};
function createBaseRouterRoute(): RouterRoute {
  return {
    $typeUrl: "/band.tunnel.v1beta1.RouterRoute",
    destinationChainId: "",
    destinationContractAddress: "",
    destinationGasLimit: BigInt(0)
  };
}
export const RouterRoute = {
  typeUrl: "/band.tunnel.v1beta1.RouterRoute",
  encode(message: RouterRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.destinationChainId !== "") {
      writer.uint32(10).string(message.destinationChainId);
    }
    if (message.destinationContractAddress !== "") {
      writer.uint32(18).string(message.destinationContractAddress);
    }
    if (message.destinationGasLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.destinationGasLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RouterRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouterRoute();
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
          message.destinationGasLimit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RouterRoute>): RouterRoute {
    const message = createBaseRouterRoute();
    message.destinationChainId = object.destinationChainId ?? "";
    message.destinationContractAddress = object.destinationContractAddress ?? "";
    message.destinationGasLimit = object.destinationGasLimit !== undefined && object.destinationGasLimit !== null ? BigInt(object.destinationGasLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RouterRouteAmino): RouterRoute {
    const message = createBaseRouterRoute();
    if (object.destination_chain_id !== undefined && object.destination_chain_id !== null) {
      message.destinationChainId = object.destination_chain_id;
    }
    if (object.destination_contract_address !== undefined && object.destination_contract_address !== null) {
      message.destinationContractAddress = object.destination_contract_address;
    }
    if (object.destination_gas_limit !== undefined && object.destination_gas_limit !== null) {
      message.destinationGasLimit = BigInt(object.destination_gas_limit);
    }
    return message;
  },
  toAmino(message: RouterRoute): RouterRouteAmino {
    const obj: any = {};
    obj.destination_chain_id = message.destinationChainId === "" ? undefined : message.destinationChainId;
    obj.destination_contract_address = message.destinationContractAddress === "" ? undefined : message.destinationContractAddress;
    obj.destination_gas_limit = message.destinationGasLimit !== BigInt(0) ? message.destinationGasLimit?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RouterRouteAminoMsg): RouterRoute {
    return RouterRoute.fromAmino(object.value);
  },
  fromProtoMsg(message: RouterRouteProtoMsg): RouterRoute {
    return RouterRoute.decode(message.value);
  },
  toProto(message: RouterRoute): Uint8Array {
    return RouterRoute.encode(message).finish();
  },
  toProtoMsg(message: RouterRoute): RouterRouteProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.RouterRoute",
      value: RouterRoute.encode(message).finish()
    };
  }
};
function createBaseRouterPacketReceipt(): RouterPacketReceipt {
  return {
    $typeUrl: "/band.tunnel.v1beta1.RouterPacketReceipt",
    sequence: BigInt(0)
  };
}
export const RouterPacketReceipt = {
  typeUrl: "/band.tunnel.v1beta1.RouterPacketReceipt",
  encode(message: RouterPacketReceipt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RouterPacketReceipt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouterPacketReceipt();
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
  fromPartial(object: Partial<RouterPacketReceipt>): RouterPacketReceipt {
    const message = createBaseRouterPacketReceipt();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RouterPacketReceiptAmino): RouterPacketReceipt {
    const message = createBaseRouterPacketReceipt();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: RouterPacketReceipt): RouterPacketReceiptAmino {
    const obj: any = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RouterPacketReceiptAminoMsg): RouterPacketReceipt {
    return RouterPacketReceipt.fromAmino(object.value);
  },
  fromProtoMsg(message: RouterPacketReceiptProtoMsg): RouterPacketReceipt {
    return RouterPacketReceipt.decode(message.value);
  },
  toProto(message: RouterPacketReceipt): Uint8Array {
    return RouterPacketReceipt.encode(message).finish();
  },
  toProtoMsg(message: RouterPacketReceipt): RouterPacketReceiptProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.RouterPacketReceipt",
      value: RouterPacketReceipt.encode(message).finish()
    };
  }
};
function createBaseRouterMemo(): RouterMemo {
  return {
    wasm: RouterMemo_Payload.fromPartial({})
  };
}
export const RouterMemo = {
  typeUrl: "/band.tunnel.v1beta1.RouterMemo",
  encode(message: RouterMemo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wasm !== undefined) {
      RouterMemo_Payload.encode(message.wasm, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RouterMemo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouterMemo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wasm = RouterMemo_Payload.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RouterMemo>): RouterMemo {
    const message = createBaseRouterMemo();
    message.wasm = object.wasm !== undefined && object.wasm !== null ? RouterMemo_Payload.fromPartial(object.wasm) : undefined;
    return message;
  },
  fromAmino(object: RouterMemoAmino): RouterMemo {
    const message = createBaseRouterMemo();
    if (object.wasm !== undefined && object.wasm !== null) {
      message.wasm = RouterMemo_Payload.fromAmino(object.wasm);
    }
    return message;
  },
  toAmino(message: RouterMemo): RouterMemoAmino {
    const obj: any = {};
    obj.wasm = message.wasm ? RouterMemo_Payload.toAmino(message.wasm) : undefined;
    return obj;
  },
  fromAminoMsg(object: RouterMemoAminoMsg): RouterMemo {
    return RouterMemo.fromAmino(object.value);
  },
  fromProtoMsg(message: RouterMemoProtoMsg): RouterMemo {
    return RouterMemo.decode(message.value);
  },
  toProto(message: RouterMemo): Uint8Array {
    return RouterMemo.encode(message).finish();
  },
  toProtoMsg(message: RouterMemo): RouterMemoProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.RouterMemo",
      value: RouterMemo.encode(message).finish()
    };
  }
};
function createBaseRouterMemo_Payload(): RouterMemo_Payload {
  return {
    contract: "",
    msg: RouterMemo_Payload_Msg.fromPartial({})
  };
}
export const RouterMemo_Payload = {
  typeUrl: "/band.tunnel.v1beta1.Payload",
  encode(message: RouterMemo_Payload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.msg !== undefined) {
      RouterMemo_Payload_Msg.encode(message.msg, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RouterMemo_Payload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouterMemo_Payload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.msg = RouterMemo_Payload_Msg.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RouterMemo_Payload>): RouterMemo_Payload {
    const message = createBaseRouterMemo_Payload();
    message.contract = object.contract ?? "";
    message.msg = object.msg !== undefined && object.msg !== null ? RouterMemo_Payload_Msg.fromPartial(object.msg) : undefined;
    return message;
  },
  fromAmino(object: RouterMemo_PayloadAmino): RouterMemo_Payload {
    const message = createBaseRouterMemo_Payload();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = RouterMemo_Payload_Msg.fromAmino(object.msg);
    }
    return message;
  },
  toAmino(message: RouterMemo_Payload): RouterMemo_PayloadAmino {
    const obj: any = {};
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.msg = message.msg ? RouterMemo_Payload_Msg.toAmino(message.msg) : undefined;
    return obj;
  },
  fromAminoMsg(object: RouterMemo_PayloadAminoMsg): RouterMemo_Payload {
    return RouterMemo_Payload.fromAmino(object.value);
  },
  fromProtoMsg(message: RouterMemo_PayloadProtoMsg): RouterMemo_Payload {
    return RouterMemo_Payload.decode(message.value);
  },
  toProto(message: RouterMemo_Payload): Uint8Array {
    return RouterMemo_Payload.encode(message).finish();
  },
  toProtoMsg(message: RouterMemo_Payload): RouterMemo_PayloadProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.Payload",
      value: RouterMemo_Payload.encode(message).finish()
    };
  }
};
function createBaseRouterMemo_Payload_Msg(): RouterMemo_Payload_Msg {
  return {
    receiveBandData: RouterMemo_Payload_Msg_ReceiveBandDataArgs.fromPartial({})
  };
}
export const RouterMemo_Payload_Msg = {
  typeUrl: "/band.tunnel.v1beta1.Msg",
  encode(message: RouterMemo_Payload_Msg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiveBandData !== undefined) {
      RouterMemo_Payload_Msg_ReceiveBandDataArgs.encode(message.receiveBandData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RouterMemo_Payload_Msg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouterMemo_Payload_Msg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiveBandData = RouterMemo_Payload_Msg_ReceiveBandDataArgs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RouterMemo_Payload_Msg>): RouterMemo_Payload_Msg {
    const message = createBaseRouterMemo_Payload_Msg();
    message.receiveBandData = object.receiveBandData !== undefined && object.receiveBandData !== null ? RouterMemo_Payload_Msg_ReceiveBandDataArgs.fromPartial(object.receiveBandData) : undefined;
    return message;
  },
  fromAmino(object: RouterMemo_Payload_MsgAmino): RouterMemo_Payload_Msg {
    const message = createBaseRouterMemo_Payload_Msg();
    if (object.receive_band_data !== undefined && object.receive_band_data !== null) {
      message.receiveBandData = RouterMemo_Payload_Msg_ReceiveBandDataArgs.fromAmino(object.receive_band_data);
    }
    return message;
  },
  toAmino(message: RouterMemo_Payload_Msg): RouterMemo_Payload_MsgAmino {
    const obj: any = {};
    obj.receive_band_data = message.receiveBandData ? RouterMemo_Payload_Msg_ReceiveBandDataArgs.toAmino(message.receiveBandData) : undefined;
    return obj;
  },
  fromAminoMsg(object: RouterMemo_Payload_MsgAminoMsg): RouterMemo_Payload_Msg {
    return RouterMemo_Payload_Msg.fromAmino(object.value);
  },
  fromProtoMsg(message: RouterMemo_Payload_MsgProtoMsg): RouterMemo_Payload_Msg {
    return RouterMemo_Payload_Msg.decode(message.value);
  },
  toProto(message: RouterMemo_Payload_Msg): Uint8Array {
    return RouterMemo_Payload_Msg.encode(message).finish();
  },
  toProtoMsg(message: RouterMemo_Payload_Msg): RouterMemo_Payload_MsgProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.Msg",
      value: RouterMemo_Payload_Msg.encode(message).finish()
    };
  }
};
function createBaseRouterMemo_Payload_Msg_ReceiveBandDataArgs(): RouterMemo_Payload_Msg_ReceiveBandDataArgs {
  return {
    destChainId: "",
    destContractAddress: "",
    gasLimit: BigInt(0),
    payload: ""
  };
}
export const RouterMemo_Payload_Msg_ReceiveBandDataArgs = {
  typeUrl: "/band.tunnel.v1beta1.ReceiveBandDataArgs",
  encode(message: RouterMemo_Payload_Msg_ReceiveBandDataArgs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.destChainId !== "") {
      writer.uint32(10).string(message.destChainId);
    }
    if (message.destContractAddress !== "") {
      writer.uint32(18).string(message.destContractAddress);
    }
    if (message.gasLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.gasLimit);
    }
    if (message.payload !== "") {
      writer.uint32(34).string(message.payload);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RouterMemo_Payload_Msg_ReceiveBandDataArgs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouterMemo_Payload_Msg_ReceiveBandDataArgs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destChainId = reader.string();
          break;
        case 2:
          message.destContractAddress = reader.string();
          break;
        case 3:
          message.gasLimit = reader.uint64();
          break;
        case 4:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RouterMemo_Payload_Msg_ReceiveBandDataArgs>): RouterMemo_Payload_Msg_ReceiveBandDataArgs {
    const message = createBaseRouterMemo_Payload_Msg_ReceiveBandDataArgs();
    message.destChainId = object.destChainId ?? "";
    message.destContractAddress = object.destContractAddress ?? "";
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
    message.payload = object.payload ?? "";
    return message;
  },
  fromAmino(object: RouterMemo_Payload_Msg_ReceiveBandDataArgsAmino): RouterMemo_Payload_Msg_ReceiveBandDataArgs {
    const message = createBaseRouterMemo_Payload_Msg_ReceiveBandDataArgs();
    if (object.dest_chain_id !== undefined && object.dest_chain_id !== null) {
      message.destChainId = object.dest_chain_id;
    }
    if (object.dest_contract_address !== undefined && object.dest_contract_address !== null) {
      message.destContractAddress = object.dest_contract_address;
    }
    if (object.gas_limit !== undefined && object.gas_limit !== null) {
      message.gasLimit = BigInt(object.gas_limit);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    }
    return message;
  },
  toAmino(message: RouterMemo_Payload_Msg_ReceiveBandDataArgs): RouterMemo_Payload_Msg_ReceiveBandDataArgsAmino {
    const obj: any = {};
    obj.dest_chain_id = message.destChainId === "" ? undefined : message.destChainId;
    obj.dest_contract_address = message.destContractAddress === "" ? undefined : message.destContractAddress;
    obj.gas_limit = message.gasLimit !== BigInt(0) ? message.gasLimit?.toString() : undefined;
    obj.payload = message.payload === "" ? undefined : message.payload;
    return obj;
  },
  fromAminoMsg(object: RouterMemo_Payload_Msg_ReceiveBandDataArgsAminoMsg): RouterMemo_Payload_Msg_ReceiveBandDataArgs {
    return RouterMemo_Payload_Msg_ReceiveBandDataArgs.fromAmino(object.value);
  },
  fromProtoMsg(message: RouterMemo_Payload_Msg_ReceiveBandDataArgsProtoMsg): RouterMemo_Payload_Msg_ReceiveBandDataArgs {
    return RouterMemo_Payload_Msg_ReceiveBandDataArgs.decode(message.value);
  },
  toProto(message: RouterMemo_Payload_Msg_ReceiveBandDataArgs): Uint8Array {
    return RouterMemo_Payload_Msg_ReceiveBandDataArgs.encode(message).finish();
  },
  toProtoMsg(message: RouterMemo_Payload_Msg_ReceiveBandDataArgs): RouterMemo_Payload_Msg_ReceiveBandDataArgsProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.ReceiveBandDataArgs",
      value: RouterMemo_Payload_Msg_ReceiveBandDataArgs.encode(message).finish()
    };
  }
};
function createBaseAxelarRoute(): AxelarRoute {
  return {
    $typeUrl: "/band.tunnel.v1beta1.AxelarRoute",
    destinationChainId: "",
    destinationContractAddress: "",
    fee: Coin.fromPartial({})
  };
}
export const AxelarRoute = {
  typeUrl: "/band.tunnel.v1beta1.AxelarRoute",
  encode(message: AxelarRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.destinationChainId !== "") {
      writer.uint32(10).string(message.destinationChainId);
    }
    if (message.destinationContractAddress !== "") {
      writer.uint32(18).string(message.destinationContractAddress);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AxelarRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAxelarRoute();
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
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AxelarRoute>): AxelarRoute {
    const message = createBaseAxelarRoute();
    message.destinationChainId = object.destinationChainId ?? "";
    message.destinationContractAddress = object.destinationContractAddress ?? "";
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: AxelarRouteAmino): AxelarRoute {
    const message = createBaseAxelarRoute();
    if (object.destination_chain_id !== undefined && object.destination_chain_id !== null) {
      message.destinationChainId = object.destination_chain_id;
    }
    if (object.destination_contract_address !== undefined && object.destination_contract_address !== null) {
      message.destinationContractAddress = object.destination_contract_address;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: AxelarRoute): AxelarRouteAmino {
    const obj: any = {};
    obj.destination_chain_id = message.destinationChainId === "" ? undefined : message.destinationChainId;
    obj.destination_contract_address = message.destinationContractAddress === "" ? undefined : message.destinationContractAddress;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: AxelarRouteAminoMsg): AxelarRoute {
    return AxelarRoute.fromAmino(object.value);
  },
  fromProtoMsg(message: AxelarRouteProtoMsg): AxelarRoute {
    return AxelarRoute.decode(message.value);
  },
  toProto(message: AxelarRoute): Uint8Array {
    return AxelarRoute.encode(message).finish();
  },
  toProtoMsg(message: AxelarRoute): AxelarRouteProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.AxelarRoute",
      value: AxelarRoute.encode(message).finish()
    };
  }
};
function createBaseAxelarPacketReceipt(): AxelarPacketReceipt {
  return {
    $typeUrl: "/band.tunnel.v1beta1.AxelarPacketReceipt",
    sequence: BigInt(0)
  };
}
export const AxelarPacketReceipt = {
  typeUrl: "/band.tunnel.v1beta1.AxelarPacketReceipt",
  encode(message: AxelarPacketReceipt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AxelarPacketReceipt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAxelarPacketReceipt();
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
  fromPartial(object: Partial<AxelarPacketReceipt>): AxelarPacketReceipt {
    const message = createBaseAxelarPacketReceipt();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AxelarPacketReceiptAmino): AxelarPacketReceipt {
    const message = createBaseAxelarPacketReceipt();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: AxelarPacketReceipt): AxelarPacketReceiptAmino {
    const obj: any = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AxelarPacketReceiptAminoMsg): AxelarPacketReceipt {
    return AxelarPacketReceipt.fromAmino(object.value);
  },
  fromProtoMsg(message: AxelarPacketReceiptProtoMsg): AxelarPacketReceipt {
    return AxelarPacketReceipt.decode(message.value);
  },
  toProto(message: AxelarPacketReceipt): Uint8Array {
    return AxelarPacketReceipt.encode(message).finish();
  },
  toProtoMsg(message: AxelarPacketReceipt): AxelarPacketReceiptProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.AxelarPacketReceipt",
      value: AxelarPacketReceipt.encode(message).finish()
    };
  }
};