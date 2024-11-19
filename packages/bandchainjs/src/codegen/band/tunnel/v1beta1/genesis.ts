//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Tunnel, TunnelAmino, TunnelSDKType, Deposit, DepositAmino, DepositSDKType, TotalFees, TotalFeesAmino, TotalFeesSDKType } from "./tunnel";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState represents the initial state of the blockchain. */
export interface GenesisState {
  /** params is all parameters of the module. */
  params: Params;
  /** tunnel_count is the number of tunnels. */
  tunnelCount: bigint;
  /** tunnels is the list of tunnels. */
  tunnels: Tunnel[];
  /** deposits is the list of deposits. */
  deposits: Deposit[];
  /** total_fees is the type for the total fees collected by the tunnel */
  totalFees: TotalFees;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState represents the initial state of the blockchain. */
export interface GenesisStateAmino {
  /** params is all parameters of the module. */
  params?: ParamsAmino;
  /** tunnel_count is the number of tunnels. */
  tunnel_count?: string;
  /** tunnels is the list of tunnels. */
  tunnels?: TunnelAmino[];
  /** deposits is the list of deposits. */
  deposits?: DepositAmino[];
  /** total_fees is the type for the total fees collected by the tunnel */
  total_fees?: TotalFeesAmino;
}
export interface GenesisStateAminoMsg {
  type: "/band.tunnel.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState represents the initial state of the blockchain. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  tunnel_count: bigint;
  tunnels: TunnelSDKType[];
  deposits: DepositSDKType[];
  total_fees: TotalFeesSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    tunnelCount: BigInt(0),
    tunnels: [],
    deposits: [],
    totalFees: TotalFees.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/band.tunnel.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.tunnelCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.tunnelCount);
    }
    for (const v of message.tunnels) {
      Tunnel.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.totalFees !== undefined) {
      TotalFees.encode(message.totalFees, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tunnelCount = reader.uint64();
          break;
        case 3:
          message.tunnels.push(Tunnel.decode(reader, reader.uint32()));
          break;
        case 4:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 5:
          message.totalFees = TotalFees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tunnelCount = object.tunnelCount !== undefined && object.tunnelCount !== null ? BigInt(object.tunnelCount.toString()) : BigInt(0);
    message.tunnels = object.tunnels?.map(e => Tunnel.fromPartial(e)) || [];
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.totalFees = object.totalFees !== undefined && object.totalFees !== null ? TotalFees.fromPartial(object.totalFees) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.tunnel_count !== undefined && object.tunnel_count !== null) {
      message.tunnelCount = BigInt(object.tunnel_count);
    }
    message.tunnels = object.tunnels?.map(e => Tunnel.fromAmino(e)) || [];
    message.deposits = object.deposits?.map(e => Deposit.fromAmino(e)) || [];
    if (object.total_fees !== undefined && object.total_fees !== null) {
      message.totalFees = TotalFees.fromAmino(object.total_fees);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.tunnel_count = message.tunnelCount !== BigInt(0) ? message.tunnelCount?.toString() : undefined;
    if (message.tunnels) {
      obj.tunnels = message.tunnels.map(e => e ? Tunnel.toAmino(e) : undefined);
    } else {
      obj.tunnels = message.tunnels;
    }
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = message.deposits;
    }
    obj.total_fees = message.totalFees ? TotalFees.toAmino(message.totalFees) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};