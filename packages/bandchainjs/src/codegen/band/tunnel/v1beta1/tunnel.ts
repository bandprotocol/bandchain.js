//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Encoder, Price, PriceAmino, PriceSDKType } from "../../feeds/v1beta1/feeds";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** TSSRoute is the type for a TSS route */
export interface TSSRoute {
  $typeUrl?: "/band.tunnel.v1beta1.TSSRoute";
  /** destination_chain_id is the destination chain ID */
  destinationChainId: string;
  /** destination_contract_address is the destination contract address */
  destinationContractAddress: string;
}
export interface TSSRouteProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.TSSRoute";
  value: Uint8Array;
}
/** TSSRoute is the type for a TSS route */
export interface TSSRouteAmino {
  /** destination_chain_id is the destination chain ID */
  destination_chain_id?: string;
  /** destination_contract_address is the destination contract address */
  destination_contract_address?: string;
}
export interface TSSRouteAminoMsg {
  type: "/band.tunnel.v1beta1.TSSRoute";
  value: TSSRouteAmino;
}
/** TSSRoute is the type for a TSS route */
export interface TSSRouteSDKType {
  $typeUrl?: "/band.tunnel.v1beta1.TSSRoute";
  destination_chain_id: string;
  destination_contract_address: string;
}
/** SignalDeviation is the type for a signal with soft and hard deviation */
export interface SignalDeviation {
  /** signal_id is the signal ID */
  signalId: string;
  /** soft_deviation_bps is the soft deviation in basis points */
  softDeviationBps: bigint;
  /** hard_deviation_bps is the hard deviation in basis points */
  hardDeviationBps: bigint;
}
export interface SignalDeviationProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.SignalDeviation";
  value: Uint8Array;
}
/** SignalDeviation is the type for a signal with soft and hard deviation */
export interface SignalDeviationAmino {
  /** signal_id is the signal ID */
  signal_id?: string;
  /** soft_deviation_bps is the soft deviation in basis points */
  soft_deviation_bps?: string;
  /** hard_deviation_bps is the hard deviation in basis points */
  hard_deviation_bps?: string;
}
export interface SignalDeviationAminoMsg {
  type: "/band.tunnel.v1beta1.SignalDeviation";
  value: SignalDeviationAmino;
}
/** SignalDeviation is the type for a signal with soft and hard deviation */
export interface SignalDeviationSDKType {
  signal_id: string;
  soft_deviation_bps: bigint;
  hard_deviation_bps: bigint;
}
/** Deposit defines an amount deposited by an account address to the tunnel. */
export interface Deposit {
  /** tunnel_id defines the unique id of the tunnel. */
  tunnelId: bigint;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** amount to be deposited by depositor. */
  amount: Coin[];
}
export interface DepositProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.Deposit";
  value: Uint8Array;
}
/** Deposit defines an amount deposited by an account address to the tunnel. */
export interface DepositAmino {
  /** tunnel_id defines the unique id of the tunnel. */
  tunnel_id?: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor?: string;
  /** amount to be deposited by depositor. */
  amount: CoinAmino[];
}
export interface DepositAminoMsg {
  type: "/band.tunnel.v1beta1.Deposit";
  value: DepositAmino;
}
/** Deposit defines an amount deposited by an account address to the tunnel. */
export interface DepositSDKType {
  tunnel_id: bigint;
  depositor: string;
  amount: CoinSDKType[];
}
/** Tunnel is the type for a tunnel */
export interface Tunnel {
  /** id is the tunnel ID */
  id: bigint;
  /** sequence is representing the sequence of the tunnel packet. */
  sequence: bigint;
  /** route is the route for delivering the signal prices */
  route?: TSSRoute | Any | undefined;
  /** encoder is the mode of encoding price signal data. */
  encoder: Encoder;
  /** fee_payer is the address of the fee payer */
  feePayer: string;
  /** signal_deviations is the list of signal deviations */
  signalDeviations: SignalDeviation[];
  /** interval is the interval for delivering the signal prices */
  interval: bigint;
  /** total_deposit is the total deposit on the tunnel. */
  totalDeposit: Coin[];
  /** is_active is the flag to indicate if the tunnel is active */
  isActive: boolean;
  /** created_at is the timestamp when the tunnel is created */
  createdAt: bigint;
  /** creator is the address of the creator */
  creator: string;
}
export interface TunnelProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.Tunnel";
  value: Uint8Array;
}
export type TunnelEncoded = Omit<Tunnel, "route"> & {
  /** route is the route for delivering the signal prices */route?: TSSRouteProtoMsg | AnyProtoMsg | undefined;
};
/** Tunnel is the type for a tunnel */
export interface TunnelAmino {
  /** id is the tunnel ID */
  id?: string;
  /** sequence is representing the sequence of the tunnel packet. */
  sequence?: string;
  /** route is the route for delivering the signal prices */
  route?: AnyAmino;
  /** encoder is the mode of encoding price signal data. */
  encoder?: Encoder;
  /** fee_payer is the address of the fee payer */
  fee_payer?: string;
  /** signal_deviations is the list of signal deviations */
  signal_deviations?: SignalDeviationAmino[];
  /** interval is the interval for delivering the signal prices */
  interval?: string;
  /** total_deposit is the total deposit on the tunnel. */
  total_deposit: CoinAmino[];
  /** is_active is the flag to indicate if the tunnel is active */
  is_active?: boolean;
  /** created_at is the timestamp when the tunnel is created */
  created_at?: string;
  /** creator is the address of the creator */
  creator?: string;
}
export interface TunnelAminoMsg {
  type: "/band.tunnel.v1beta1.Tunnel";
  value: TunnelAmino;
}
/** Tunnel is the type for a tunnel */
export interface TunnelSDKType {
  id: bigint;
  sequence: bigint;
  route?: TSSRouteSDKType | AnySDKType | undefined;
  encoder: Encoder;
  fee_payer: string;
  signal_deviations: SignalDeviationSDKType[];
  interval: bigint;
  total_deposit: CoinSDKType[];
  is_active: boolean;
  created_at: bigint;
  creator: string;
}
/** LatestPrices is the type for prices that tunnel produces */
export interface LatestPrices {
  /** tunnel_id is the tunnel ID */
  tunnelId: bigint;
  /** prices is the list of prices information from feeds module. */
  prices: Price[];
  /** last_interval is the last interval when the signal prices are produced by interval trigger */
  lastInterval: bigint;
}
export interface LatestPricesProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.LatestPrices";
  value: Uint8Array;
}
/** LatestPrices is the type for prices that tunnel produces */
export interface LatestPricesAmino {
  /** tunnel_id is the tunnel ID */
  tunnel_id?: string;
  /** prices is the list of prices information from feeds module. */
  prices?: PriceAmino[];
  /** last_interval is the last interval when the signal prices are produced by interval trigger */
  last_interval?: string;
}
export interface LatestPricesAminoMsg {
  type: "/band.tunnel.v1beta1.LatestPrices";
  value: LatestPricesAmino;
}
/** LatestPrices is the type for prices that tunnel produces */
export interface LatestPricesSDKType {
  tunnel_id: bigint;
  prices: PriceSDKType[];
  last_interval: bigint;
}
/** TotalFees is the type for the total fees collected by the tunnel */
export interface TotalFees {
  /** total_packet_fee is the total packet fee collected */
  totalPacketFee: Coin[];
}
export interface TotalFeesProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.TotalFees";
  value: Uint8Array;
}
/** TotalFees is the type for the total fees collected by the tunnel */
export interface TotalFeesAmino {
  /** total_packet_fee is the total packet fee collected */
  total_packet_fee?: CoinAmino[];
}
export interface TotalFeesAminoMsg {
  type: "/band.tunnel.v1beta1.TotalFees";
  value: TotalFeesAmino;
}
/** TotalFees is the type for the total fees collected by the tunnel */
export interface TotalFeesSDKType {
  total_packet_fee: CoinSDKType[];
}
/** Packet is the packet that tunnel produces */
export interface Packet {
  /** tunnel_id is the tunnel ID */
  tunnelId: bigint;
  /** sequence is representing the sequence of the tunnel packet. */
  sequence: bigint;
  /** prices is the list of prices information from feeds module. */
  prices: Price[];
  /** packet_content is the content of the packet that implements PacketContentI */
  packetContent?: TSSPacketContent | Any | undefined;
  /** base_fee is the base fee of the packet */
  baseFee: Coin[];
  /** route_fee is the route fee of the packet */
  routeFee: Coin[];
  /** created_at is the timestamp when the packet is created */
  createdAt: bigint;
}
export interface PacketProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.Packet";
  value: Uint8Array;
}
export type PacketEncoded = Omit<Packet, "packetContent"> & {
  /** packet_content is the content of the packet that implements PacketContentI */packetContent?: TSSPacketContentProtoMsg | AnyProtoMsg | undefined;
};
/** Packet is the packet that tunnel produces */
export interface PacketAmino {
  /** tunnel_id is the tunnel ID */
  tunnel_id?: string;
  /** sequence is representing the sequence of the tunnel packet. */
  sequence?: string;
  /** prices is the list of prices information from feeds module. */
  prices?: PriceAmino[];
  /** packet_content is the content of the packet that implements PacketContentI */
  packet_content?: AnyAmino;
  /** base_fee is the base fee of the packet */
  base_fee?: CoinAmino[];
  /** route_fee is the route fee of the packet */
  route_fee?: CoinAmino[];
  /** created_at is the timestamp when the packet is created */
  created_at?: string;
}
export interface PacketAminoMsg {
  type: "/band.tunnel.v1beta1.Packet";
  value: PacketAmino;
}
/** Packet is the packet that tunnel produces */
export interface PacketSDKType {
  tunnel_id: bigint;
  sequence: bigint;
  prices: PriceSDKType[];
  packet_content?: TSSPacketContentSDKType | AnySDKType | undefined;
  base_fee: CoinSDKType[];
  route_fee: CoinSDKType[];
  created_at: bigint;
}
/** TSSPacketContent is the packet content for TSS */
export interface TSSPacketContent {
  $typeUrl?: "/band.tunnel.v1beta1.TSSPacketContent";
  /** signing_id is the signing ID */
  signingId: bigint;
  /** destination_chain_id is the destination chain ID */
  destinationChainId: string;
  /** destination_contract_address is the destination contract address */
  destinationContractAddress: string;
}
export interface TSSPacketContentProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.TSSPacketContent";
  value: Uint8Array;
}
/** TSSPacketContent is the packet content for TSS */
export interface TSSPacketContentAmino {
  /** signing_id is the signing ID */
  signing_id?: string;
  /** destination_chain_id is the destination chain ID */
  destination_chain_id?: string;
  /** destination_contract_address is the destination contract address */
  destination_contract_address?: string;
}
export interface TSSPacketContentAminoMsg {
  type: "/band.tunnel.v1beta1.TSSPacketContent";
  value: TSSPacketContentAmino;
}
/** TSSPacketContent is the packet content for TSS */
export interface TSSPacketContentSDKType {
  $typeUrl?: "/band.tunnel.v1beta1.TSSPacketContent";
  signing_id: bigint;
  destination_chain_id: string;
  destination_contract_address: string;
}
/** TunnelSignatureOrder defines a general signature order for sending signature to tss group. */
export interface TunnelSignatureOrder {
  /** packet is the prices that a tunnel produces from the selected signals. */
  packet: Packet;
  /** destination_chain_id is the destination chain ID */
  destinationChainId: string;
  /** destination_contract_address is the destination contract address */
  destinationContractAddress: string;
  /** encoder is the mode of encoding price signal data. */
  encoder: Encoder;
}
export interface TunnelSignatureOrderProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.TunnelSignatureOrder";
  value: Uint8Array;
}
/** TunnelSignatureOrder defines a general signature order for sending signature to tss group. */
export interface TunnelSignatureOrderAmino {
  /** packet is the prices that a tunnel produces from the selected signals. */
  packet?: PacketAmino;
  /** destination_chain_id is the destination chain ID */
  destination_chain_id?: string;
  /** destination_contract_address is the destination contract address */
  destination_contract_address?: string;
  /** encoder is the mode of encoding price signal data. */
  encoder?: Encoder;
}
export interface TunnelSignatureOrderAminoMsg {
  type: "/band.tunnel.v1beta1.TunnelSignatureOrder";
  value: TunnelSignatureOrderAmino;
}
/** TunnelSignatureOrder defines a general signature order for sending signature to tss group. */
export interface TunnelSignatureOrderSDKType {
  packet: PacketSDKType;
  destination_chain_id: string;
  destination_contract_address: string;
  encoder: Encoder;
}
function createBaseTSSRoute(): TSSRoute {
  return {
    $typeUrl: "/band.tunnel.v1beta1.TSSRoute",
    destinationChainId: "",
    destinationContractAddress: ""
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
    return message;
  },
  toAmino(message: TSSRoute): TSSRouteAmino {
    const obj: any = {};
    obj.destination_chain_id = message.destinationChainId === "" ? undefined : message.destinationChainId;
    obj.destination_contract_address = message.destinationContractAddress === "" ? undefined : message.destinationContractAddress;
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
function createBaseSignalDeviation(): SignalDeviation {
  return {
    signalId: "",
    softDeviationBps: BigInt(0),
    hardDeviationBps: BigInt(0)
  };
}
export const SignalDeviation = {
  typeUrl: "/band.tunnel.v1beta1.SignalDeviation",
  encode(message: SignalDeviation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signalId !== "") {
      writer.uint32(10).string(message.signalId);
    }
    if (message.softDeviationBps !== BigInt(0)) {
      writer.uint32(16).uint64(message.softDeviationBps);
    }
    if (message.hardDeviationBps !== BigInt(0)) {
      writer.uint32(24).uint64(message.hardDeviationBps);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignalDeviation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignalDeviation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signalId = reader.string();
          break;
        case 2:
          message.softDeviationBps = reader.uint64();
          break;
        case 3:
          message.hardDeviationBps = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SignalDeviation>): SignalDeviation {
    const message = createBaseSignalDeviation();
    message.signalId = object.signalId ?? "";
    message.softDeviationBps = object.softDeviationBps !== undefined && object.softDeviationBps !== null ? BigInt(object.softDeviationBps.toString()) : BigInt(0);
    message.hardDeviationBps = object.hardDeviationBps !== undefined && object.hardDeviationBps !== null ? BigInt(object.hardDeviationBps.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SignalDeviationAmino): SignalDeviation {
    const message = createBaseSignalDeviation();
    if (object.signal_id !== undefined && object.signal_id !== null) {
      message.signalId = object.signal_id;
    }
    if (object.soft_deviation_bps !== undefined && object.soft_deviation_bps !== null) {
      message.softDeviationBps = BigInt(object.soft_deviation_bps);
    }
    if (object.hard_deviation_bps !== undefined && object.hard_deviation_bps !== null) {
      message.hardDeviationBps = BigInt(object.hard_deviation_bps);
    }
    return message;
  },
  toAmino(message: SignalDeviation): SignalDeviationAmino {
    const obj: any = {};
    obj.signal_id = message.signalId === "" ? undefined : message.signalId;
    obj.soft_deviation_bps = message.softDeviationBps !== BigInt(0) ? message.softDeviationBps?.toString() : undefined;
    obj.hard_deviation_bps = message.hardDeviationBps !== BigInt(0) ? message.hardDeviationBps?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SignalDeviationAminoMsg): SignalDeviation {
    return SignalDeviation.fromAmino(object.value);
  },
  fromProtoMsg(message: SignalDeviationProtoMsg): SignalDeviation {
    return SignalDeviation.decode(message.value);
  },
  toProto(message: SignalDeviation): Uint8Array {
    return SignalDeviation.encode(message).finish();
  },
  toProtoMsg(message: SignalDeviation): SignalDeviationProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.SignalDeviation",
      value: SignalDeviation.encode(message).finish()
    };
  }
};
function createBaseDeposit(): Deposit {
  return {
    tunnelId: BigInt(0),
    depositor: "",
    amount: []
  };
}
export const Deposit = {
  typeUrl: "/band.tunnel.v1beta1.Deposit",
  encode(message: Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DepositAmino): Deposit {
    const message = createBaseDeposit();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Deposit): DepositAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: DepositAminoMsg): Deposit {
    return Deposit.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositProtoMsg): Deposit {
    return Deposit.decode(message.value);
  },
  toProto(message: Deposit): Uint8Array {
    return Deposit.encode(message).finish();
  },
  toProtoMsg(message: Deposit): DepositProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};
function createBaseTunnel(): Tunnel {
  return {
    id: BigInt(0),
    sequence: BigInt(0),
    route: undefined,
    encoder: 0,
    feePayer: "",
    signalDeviations: [],
    interval: BigInt(0),
    totalDeposit: [],
    isActive: false,
    createdAt: BigInt(0),
    creator: ""
  };
}
export const Tunnel = {
  typeUrl: "/band.tunnel.v1beta1.Tunnel",
  encode(message: Tunnel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.route !== undefined) {
      Any.encode(message.route as Any, writer.uint32(26).fork()).ldelim();
    }
    if (message.encoder !== 0) {
      writer.uint32(32).int32(message.encoder);
    }
    if (message.feePayer !== "") {
      writer.uint32(42).string(message.feePayer);
    }
    for (const v of message.signalDeviations) {
      SignalDeviation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.interval !== BigInt(0)) {
      writer.uint32(56).uint64(message.interval);
    }
    for (const v of message.totalDeposit) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.isActive === true) {
      writer.uint32(72).bool(message.isActive);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(80).int64(message.createdAt);
    }
    if (message.creator !== "") {
      writer.uint32(90).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Tunnel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTunnel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        case 3:
          message.route = RouteI_InterfaceDecoder(reader) as Any;
          break;
        case 4:
          message.encoder = reader.int32() as any;
          break;
        case 5:
          message.feePayer = reader.string();
          break;
        case 6:
          message.signalDeviations.push(SignalDeviation.decode(reader, reader.uint32()));
          break;
        case 7:
          message.interval = reader.uint64();
          break;
        case 8:
          message.totalDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.isActive = reader.bool();
          break;
        case 10:
          message.createdAt = reader.int64();
          break;
        case 11:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Tunnel>): Tunnel {
    const message = createBaseTunnel();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.route = object.route !== undefined && object.route !== null ? Any.fromPartial(object.route) : undefined;
    message.encoder = object.encoder ?? 0;
    message.feePayer = object.feePayer ?? "";
    message.signalDeviations = object.signalDeviations?.map(e => SignalDeviation.fromPartial(e)) || [];
    message.interval = object.interval !== undefined && object.interval !== null ? BigInt(object.interval.toString()) : BigInt(0);
    message.totalDeposit = object.totalDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.isActive = object.isActive ?? false;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: TunnelAmino): Tunnel {
    const message = createBaseTunnel();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.route !== undefined && object.route !== null) {
      message.route = RouteI_FromAmino(object.route);
    }
    if (object.encoder !== undefined && object.encoder !== null) {
      message.encoder = object.encoder;
    }
    if (object.fee_payer !== undefined && object.fee_payer !== null) {
      message.feePayer = object.fee_payer;
    }
    message.signalDeviations = object.signal_deviations?.map(e => SignalDeviation.fromAmino(e)) || [];
    if (object.interval !== undefined && object.interval !== null) {
      message.interval = BigInt(object.interval);
    }
    message.totalDeposit = object.total_deposit?.map(e => Coin.fromAmino(e)) || [];
    if (object.is_active !== undefined && object.is_active !== null) {
      message.isActive = object.is_active;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: Tunnel): TunnelAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    obj.route = message.route ? RouteI_ToAmino(message.route as Any) : undefined;
    obj.encoder = message.encoder === 0 ? undefined : message.encoder;
    obj.fee_payer = message.feePayer === "" ? undefined : message.feePayer;
    if (message.signalDeviations) {
      obj.signal_deviations = message.signalDeviations.map(e => e ? SignalDeviation.toAmino(e) : undefined);
    } else {
      obj.signal_deviations = message.signalDeviations;
    }
    obj.interval = message.interval !== BigInt(0) ? message.interval?.toString() : undefined;
    if (message.totalDeposit) {
      obj.total_deposit = message.totalDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_deposit = message.totalDeposit;
    }
    obj.is_active = message.isActive === false ? undefined : message.isActive;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: TunnelAminoMsg): Tunnel {
    return Tunnel.fromAmino(object.value);
  },
  fromProtoMsg(message: TunnelProtoMsg): Tunnel {
    return Tunnel.decode(message.value);
  },
  toProto(message: Tunnel): Uint8Array {
    return Tunnel.encode(message).finish();
  },
  toProtoMsg(message: Tunnel): TunnelProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.Tunnel",
      value: Tunnel.encode(message).finish()
    };
  }
};
function createBaseLatestPrices(): LatestPrices {
  return {
    tunnelId: BigInt(0),
    prices: [],
    lastInterval: BigInt(0)
  };
}
export const LatestPrices = {
  typeUrl: "/band.tunnel.v1beta1.LatestPrices",
  encode(message: LatestPrices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    for (const v of message.prices) {
      Price.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastInterval !== BigInt(0)) {
      writer.uint32(24).int64(message.lastInterval);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LatestPrices {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLatestPrices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.uint64();
          break;
        case 2:
          message.prices.push(Price.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lastInterval = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LatestPrices>): LatestPrices {
    const message = createBaseLatestPrices();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.prices = object.prices?.map(e => Price.fromPartial(e)) || [];
    message.lastInterval = object.lastInterval !== undefined && object.lastInterval !== null ? BigInt(object.lastInterval.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LatestPricesAmino): LatestPrices {
    const message = createBaseLatestPrices();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    message.prices = object.prices?.map(e => Price.fromAmino(e)) || [];
    if (object.last_interval !== undefined && object.last_interval !== null) {
      message.lastInterval = BigInt(object.last_interval);
    }
    return message;
  },
  toAmino(message: LatestPrices): LatestPricesAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? Price.toAmino(e) : undefined);
    } else {
      obj.prices = message.prices;
    }
    obj.last_interval = message.lastInterval !== BigInt(0) ? message.lastInterval?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LatestPricesAminoMsg): LatestPrices {
    return LatestPrices.fromAmino(object.value);
  },
  fromProtoMsg(message: LatestPricesProtoMsg): LatestPrices {
    return LatestPrices.decode(message.value);
  },
  toProto(message: LatestPrices): Uint8Array {
    return LatestPrices.encode(message).finish();
  },
  toProtoMsg(message: LatestPrices): LatestPricesProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.LatestPrices",
      value: LatestPrices.encode(message).finish()
    };
  }
};
function createBaseTotalFees(): TotalFees {
  return {
    totalPacketFee: []
  };
}
export const TotalFees = {
  typeUrl: "/band.tunnel.v1beta1.TotalFees",
  encode(message: TotalFees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.totalPacketFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalFees {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalPacketFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TotalFees>): TotalFees {
    const message = createBaseTotalFees();
    message.totalPacketFee = object.totalPacketFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TotalFeesAmino): TotalFees {
    const message = createBaseTotalFees();
    message.totalPacketFee = object.total_packet_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TotalFees): TotalFeesAmino {
    const obj: any = {};
    if (message.totalPacketFee) {
      obj.total_packet_fee = message.totalPacketFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_packet_fee = message.totalPacketFee;
    }
    return obj;
  },
  fromAminoMsg(object: TotalFeesAminoMsg): TotalFees {
    return TotalFees.fromAmino(object.value);
  },
  fromProtoMsg(message: TotalFeesProtoMsg): TotalFees {
    return TotalFees.decode(message.value);
  },
  toProto(message: TotalFees): Uint8Array {
    return TotalFees.encode(message).finish();
  },
  toProtoMsg(message: TotalFees): TotalFeesProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.TotalFees",
      value: TotalFees.encode(message).finish()
    };
  }
};
function createBasePacket(): Packet {
  return {
    tunnelId: BigInt(0),
    sequence: BigInt(0),
    prices: [],
    packetContent: undefined,
    baseFee: [],
    routeFee: [],
    createdAt: BigInt(0)
  };
}
export const Packet = {
  typeUrl: "/band.tunnel.v1beta1.Packet",
  encode(message: Packet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    for (const v of message.prices) {
      Price.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.packetContent !== undefined) {
      Any.encode(message.packetContent as Any, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.baseFee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.routeFee) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(56).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Packet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacket();
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
          message.packetContent = PacketContentI_InterfaceDecoder(reader) as Any;
          break;
        case 5:
          message.baseFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.routeFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.createdAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Packet>): Packet {
    const message = createBasePacket();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.prices = object.prices?.map(e => Price.fromPartial(e)) || [];
    message.packetContent = object.packetContent !== undefined && object.packetContent !== null ? Any.fromPartial(object.packetContent) : undefined;
    message.baseFee = object.baseFee?.map(e => Coin.fromPartial(e)) || [];
    message.routeFee = object.routeFee?.map(e => Coin.fromPartial(e)) || [];
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PacketAmino): Packet {
    const message = createBasePacket();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    message.prices = object.prices?.map(e => Price.fromAmino(e)) || [];
    if (object.packet_content !== undefined && object.packet_content !== null) {
      message.packetContent = PacketContentI_FromAmino(object.packet_content);
    }
    message.baseFee = object.base_fee?.map(e => Coin.fromAmino(e)) || [];
    message.routeFee = object.route_fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    return message;
  },
  toAmino(message: Packet): PacketAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? Price.toAmino(e) : undefined);
    } else {
      obj.prices = message.prices;
    }
    obj.packet_content = message.packetContent ? PacketContentI_ToAmino(message.packetContent as Any) : undefined;
    if (message.baseFee) {
      obj.base_fee = message.baseFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.base_fee = message.baseFee;
    }
    if (message.routeFee) {
      obj.route_fee = message.routeFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.route_fee = message.routeFee;
    }
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketAminoMsg): Packet {
    return Packet.fromAmino(object.value);
  },
  fromProtoMsg(message: PacketProtoMsg): Packet {
    return Packet.decode(message.value);
  },
  toProto(message: Packet): Uint8Array {
    return Packet.encode(message).finish();
  },
  toProtoMsg(message: Packet): PacketProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.Packet",
      value: Packet.encode(message).finish()
    };
  }
};
function createBaseTSSPacketContent(): TSSPacketContent {
  return {
    $typeUrl: "/band.tunnel.v1beta1.TSSPacketContent",
    signingId: BigInt(0),
    destinationChainId: "",
    destinationContractAddress: ""
  };
}
export const TSSPacketContent = {
  typeUrl: "/band.tunnel.v1beta1.TSSPacketContent",
  encode(message: TSSPacketContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signingId !== BigInt(0)) {
      writer.uint32(8).uint64(message.signingId);
    }
    if (message.destinationChainId !== "") {
      writer.uint32(18).string(message.destinationChainId);
    }
    if (message.destinationContractAddress !== "") {
      writer.uint32(26).string(message.destinationContractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TSSPacketContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTSSPacketContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signingId = reader.uint64();
          break;
        case 2:
          message.destinationChainId = reader.string();
          break;
        case 3:
          message.destinationContractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TSSPacketContent>): TSSPacketContent {
    const message = createBaseTSSPacketContent();
    message.signingId = object.signingId !== undefined && object.signingId !== null ? BigInt(object.signingId.toString()) : BigInt(0);
    message.destinationChainId = object.destinationChainId ?? "";
    message.destinationContractAddress = object.destinationContractAddress ?? "";
    return message;
  },
  fromAmino(object: TSSPacketContentAmino): TSSPacketContent {
    const message = createBaseTSSPacketContent();
    if (object.signing_id !== undefined && object.signing_id !== null) {
      message.signingId = BigInt(object.signing_id);
    }
    if (object.destination_chain_id !== undefined && object.destination_chain_id !== null) {
      message.destinationChainId = object.destination_chain_id;
    }
    if (object.destination_contract_address !== undefined && object.destination_contract_address !== null) {
      message.destinationContractAddress = object.destination_contract_address;
    }
    return message;
  },
  toAmino(message: TSSPacketContent): TSSPacketContentAmino {
    const obj: any = {};
    obj.signing_id = message.signingId !== BigInt(0) ? message.signingId?.toString() : undefined;
    obj.destination_chain_id = message.destinationChainId === "" ? undefined : message.destinationChainId;
    obj.destination_contract_address = message.destinationContractAddress === "" ? undefined : message.destinationContractAddress;
    return obj;
  },
  fromAminoMsg(object: TSSPacketContentAminoMsg): TSSPacketContent {
    return TSSPacketContent.fromAmino(object.value);
  },
  fromProtoMsg(message: TSSPacketContentProtoMsg): TSSPacketContent {
    return TSSPacketContent.decode(message.value);
  },
  toProto(message: TSSPacketContent): Uint8Array {
    return TSSPacketContent.encode(message).finish();
  },
  toProtoMsg(message: TSSPacketContent): TSSPacketContentProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.TSSPacketContent",
      value: TSSPacketContent.encode(message).finish()
    };
  }
};
function createBaseTunnelSignatureOrder(): TunnelSignatureOrder {
  return {
    packet: Packet.fromPartial({}),
    destinationChainId: "",
    destinationContractAddress: "",
    encoder: 0
  };
}
export const TunnelSignatureOrder = {
  typeUrl: "/band.tunnel.v1beta1.TunnelSignatureOrder",
  encode(message: TunnelSignatureOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.destinationChainId !== "") {
      writer.uint32(18).string(message.destinationChainId);
    }
    if (message.destinationContractAddress !== "") {
      writer.uint32(26).string(message.destinationContractAddress);
    }
    if (message.encoder !== 0) {
      writer.uint32(32).int32(message.encoder);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TunnelSignatureOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTunnelSignatureOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.destinationChainId = reader.string();
          break;
        case 3:
          message.destinationContractAddress = reader.string();
          break;
        case 4:
          message.encoder = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TunnelSignatureOrder>): TunnelSignatureOrder {
    const message = createBaseTunnelSignatureOrder();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.destinationChainId = object.destinationChainId ?? "";
    message.destinationContractAddress = object.destinationContractAddress ?? "";
    message.encoder = object.encoder ?? 0;
    return message;
  },
  fromAmino(object: TunnelSignatureOrderAmino): TunnelSignatureOrder {
    const message = createBaseTunnelSignatureOrder();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
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
  toAmino(message: TunnelSignatureOrder): TunnelSignatureOrderAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.destination_chain_id = message.destinationChainId === "" ? undefined : message.destinationChainId;
    obj.destination_contract_address = message.destinationContractAddress === "" ? undefined : message.destinationContractAddress;
    obj.encoder = message.encoder === 0 ? undefined : message.encoder;
    return obj;
  },
  fromAminoMsg(object: TunnelSignatureOrderAminoMsg): TunnelSignatureOrder {
    return TunnelSignatureOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: TunnelSignatureOrderProtoMsg): TunnelSignatureOrder {
    return TunnelSignatureOrder.decode(message.value);
  },
  toProto(message: TunnelSignatureOrder): Uint8Array {
    return TunnelSignatureOrder.encode(message).finish();
  },
  toProtoMsg(message: TunnelSignatureOrder): TunnelSignatureOrderProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.TunnelSignatureOrder",
      value: TunnelSignatureOrder.encode(message).finish()
    };
  }
};
export const RouteI_InterfaceDecoder = (input: BinaryReader | Uint8Array): TSSRoute | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/band.tunnel.v1beta1.TSSRoute":
      return TSSRoute.decode(data.value);
    default:
      return data;
  }
};
export const RouteI_FromAmino = (content: AnyAmino): Any => {
  switch (content.type) {
    case "/band.tunnel.v1beta1.TSSRoute":
      return Any.fromPartial({
        typeUrl: "/band.tunnel.v1beta1.TSSRoute",
        value: TSSRoute.encode(TSSRoute.fromPartial(TSSRoute.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const RouteI_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/band.tunnel.v1beta1.TSSRoute":
      return {
        type: "/band.tunnel.v1beta1.TSSRoute",
        value: TSSRoute.toAmino(TSSRoute.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};
export const PacketContentI_InterfaceDecoder = (input: BinaryReader | Uint8Array): TSSPacketContent | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/band.tunnel.v1beta1.TSSPacketContent":
      return TSSPacketContent.decode(data.value);
    default:
      return data;
  }
};
export const PacketContentI_FromAmino = (content: AnyAmino): Any => {
  switch (content.type) {
    case "/band.tunnel.v1beta1.TSSPacketContent":
      return Any.fromPartial({
        typeUrl: "/band.tunnel.v1beta1.TSSPacketContent",
        value: TSSPacketContent.encode(TSSPacketContent.fromPartial(TSSPacketContent.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const PacketContentI_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/band.tunnel.v1beta1.TSSPacketContent":
      return {
        type: "/band.tunnel.v1beta1.TSSPacketContent",
        value: TSSPacketContent.toAmino(TSSPacketContent.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};