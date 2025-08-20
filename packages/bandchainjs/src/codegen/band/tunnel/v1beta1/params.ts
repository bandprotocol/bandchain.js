//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params is the data structure that keeps the parameters of the module. */
export interface Params {
  /** min_deposit is the minimum deposit required to create a tunnel. */
  minDeposit: Coin[];
  /** min_interval is the minimum interval in seconds. */
  minInterval: bigint;
  /** max_interval is the maximum interval in seconds. */
  maxInterval: bigint;
  /** min_deviation_bps is the minimum deviation in basis points. */
  minDeviationBps: bigint;
  /** max_deviation_bps is the maximum deviation in basis points. */
  maxDeviationBps: bigint;
  /** max_signals defines the maximum number of signals allowed per tunnel. */
  maxSignals: bigint;
  /** base_packet_fee is the base fee for each packet. */
  basePacketFee: Coin[];
  /** router_ibc_channel specifies the IBC channel used by the tunnel to communicate with the Router chain. */
  routerIbcChannel: string;
  /**
   * router_integration_contract specifies the address of the Router integration contract on the Router chain
   * that the tunnel module will interact with.
   */
  routerIntegrationContract: string;
  /** axelar_ibc_channel specifies the IBC channel used by the tunnel to communicate with the axelar chain. */
  axelarIbcChannel: string;
  /** axelar_gmp_account is the account address on axelar chain that processes and verifies Axelar GMP transactions. */
  axelarGmpAccount: string;
  /** axelar_fee_recipient is the account address on axelar chain that receive fee from tunnel. */
  axelarFeeRecipient: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.Params";
  value: Uint8Array;
}
/** Params is the data structure that keeps the parameters of the module. */
export interface ParamsAmino {
  /** min_deposit is the minimum deposit required to create a tunnel. */
  min_deposit?: CoinAmino[];
  /** min_interval is the minimum interval in seconds. */
  min_interval?: string;
  /** max_interval is the maximum interval in seconds. */
  max_interval?: string;
  /** min_deviation_bps is the minimum deviation in basis points. */
  min_deviation_bps?: string;
  /** max_deviation_bps is the maximum deviation in basis points. */
  max_deviation_bps?: string;
  /** max_signals defines the maximum number of signals allowed per tunnel. */
  max_signals?: string;
  /** base_packet_fee is the base fee for each packet. */
  base_packet_fee?: CoinAmino[];
  /** router_ibc_channel specifies the IBC channel used by the tunnel to communicate with the Router chain. */
  router_ibc_channel?: string;
  /**
   * router_integration_contract specifies the address of the Router integration contract on the Router chain
   * that the tunnel module will interact with.
   */
  router_integration_contract?: string;
  /** axelar_ibc_channel specifies the IBC channel used by the tunnel to communicate with the axelar chain. */
  axelar_ibc_channel?: string;
  /** axelar_gmp_account is the account address on axelar chain that processes and verifies Axelar GMP transactions. */
  axelar_gmp_account?: string;
  /** axelar_fee_recipient is the account address on axelar chain that receive fee from tunnel. */
  axelar_fee_recipient?: string;
}
export interface ParamsAminoMsg {
  type: "/band.tunnel.v1beta1.Params";
  value: ParamsAmino;
}
/** Params is the data structure that keeps the parameters of the module. */
export interface ParamsSDKType {
  min_deposit: CoinSDKType[];
  min_interval: bigint;
  max_interval: bigint;
  min_deviation_bps: bigint;
  max_deviation_bps: bigint;
  max_signals: bigint;
  base_packet_fee: CoinSDKType[];
  router_ibc_channel: string;
  router_integration_contract: string;
  axelar_ibc_channel: string;
  axelar_gmp_account: string;
  axelar_fee_recipient: string;
}
function createBaseParams(): Params {
  return {
    minDeposit: [],
    minInterval: BigInt(0),
    maxInterval: BigInt(0),
    minDeviationBps: BigInt(0),
    maxDeviationBps: BigInt(0),
    maxSignals: BigInt(0),
    basePacketFee: [],
    routerIbcChannel: "",
    routerIntegrationContract: "",
    axelarIbcChannel: "",
    axelarGmpAccount: "",
    axelarFeeRecipient: ""
  };
}
export const Params = {
  typeUrl: "/band.tunnel.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.minInterval !== BigInt(0)) {
      writer.uint32(16).uint64(message.minInterval);
    }
    if (message.maxInterval !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxInterval);
    }
    if (message.minDeviationBps !== BigInt(0)) {
      writer.uint32(32).uint64(message.minDeviationBps);
    }
    if (message.maxDeviationBps !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxDeviationBps);
    }
    if (message.maxSignals !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxSignals);
    }
    for (const v of message.basePacketFee) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.routerIbcChannel !== "") {
      writer.uint32(66).string(message.routerIbcChannel);
    }
    if (message.routerIntegrationContract !== "") {
      writer.uint32(74).string(message.routerIntegrationContract);
    }
    if (message.axelarIbcChannel !== "") {
      writer.uint32(82).string(message.axelarIbcChannel);
    }
    if (message.axelarGmpAccount !== "") {
      writer.uint32(90).string(message.axelarGmpAccount);
    }
    if (message.axelarFeeRecipient !== "") {
      writer.uint32(98).string(message.axelarFeeRecipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.minInterval = reader.uint64();
          break;
        case 3:
          message.maxInterval = reader.uint64();
          break;
        case 4:
          message.minDeviationBps = reader.uint64();
          break;
        case 5:
          message.maxDeviationBps = reader.uint64();
          break;
        case 6:
          message.maxSignals = reader.uint64();
          break;
        case 7:
          message.basePacketFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.routerIbcChannel = reader.string();
          break;
        case 9:
          message.routerIntegrationContract = reader.string();
          break;
        case 10:
          message.axelarIbcChannel = reader.string();
          break;
        case 11:
          message.axelarGmpAccount = reader.string();
          break;
        case 12:
          message.axelarFeeRecipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minDeposit = object.minDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.minInterval = object.minInterval !== undefined && object.minInterval !== null ? BigInt(object.minInterval.toString()) : BigInt(0);
    message.maxInterval = object.maxInterval !== undefined && object.maxInterval !== null ? BigInt(object.maxInterval.toString()) : BigInt(0);
    message.minDeviationBps = object.minDeviationBps !== undefined && object.minDeviationBps !== null ? BigInt(object.minDeviationBps.toString()) : BigInt(0);
    message.maxDeviationBps = object.maxDeviationBps !== undefined && object.maxDeviationBps !== null ? BigInt(object.maxDeviationBps.toString()) : BigInt(0);
    message.maxSignals = object.maxSignals !== undefined && object.maxSignals !== null ? BigInt(object.maxSignals.toString()) : BigInt(0);
    message.basePacketFee = object.basePacketFee?.map(e => Coin.fromPartial(e)) || [];
    message.routerIbcChannel = object.routerIbcChannel ?? "";
    message.routerIntegrationContract = object.routerIntegrationContract ?? "";
    message.axelarIbcChannel = object.axelarIbcChannel ?? "";
    message.axelarGmpAccount = object.axelarGmpAccount ?? "";
    message.axelarFeeRecipient = object.axelarFeeRecipient ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.minDeposit = object.min_deposit?.map(e => Coin.fromAmino(e)) || [];
    if (object.min_interval !== undefined && object.min_interval !== null) {
      message.minInterval = BigInt(object.min_interval);
    }
    if (object.max_interval !== undefined && object.max_interval !== null) {
      message.maxInterval = BigInt(object.max_interval);
    }
    if (object.min_deviation_bps !== undefined && object.min_deviation_bps !== null) {
      message.minDeviationBps = BigInt(object.min_deviation_bps);
    }
    if (object.max_deviation_bps !== undefined && object.max_deviation_bps !== null) {
      message.maxDeviationBps = BigInt(object.max_deviation_bps);
    }
    if (object.max_signals !== undefined && object.max_signals !== null) {
      message.maxSignals = BigInt(object.max_signals);
    }
    message.basePacketFee = object.base_packet_fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.router_ibc_channel !== undefined && object.router_ibc_channel !== null) {
      message.routerIbcChannel = object.router_ibc_channel;
    }
    if (object.router_integration_contract !== undefined && object.router_integration_contract !== null) {
      message.routerIntegrationContract = object.router_integration_contract;
    }
    if (object.axelar_ibc_channel !== undefined && object.axelar_ibc_channel !== null) {
      message.axelarIbcChannel = object.axelar_ibc_channel;
    }
    if (object.axelar_gmp_account !== undefined && object.axelar_gmp_account !== null) {
      message.axelarGmpAccount = object.axelar_gmp_account;
    }
    if (object.axelar_fee_recipient !== undefined && object.axelar_fee_recipient !== null) {
      message.axelarFeeRecipient = object.axelar_fee_recipient;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.minDeposit) {
      obj.min_deposit = message.minDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_deposit = message.minDeposit;
    }
    obj.min_interval = message.minInterval !== BigInt(0) ? message.minInterval?.toString() : undefined;
    obj.max_interval = message.maxInterval !== BigInt(0) ? message.maxInterval?.toString() : undefined;
    obj.min_deviation_bps = message.minDeviationBps !== BigInt(0) ? message.minDeviationBps?.toString() : undefined;
    obj.max_deviation_bps = message.maxDeviationBps !== BigInt(0) ? message.maxDeviationBps?.toString() : undefined;
    obj.max_signals = message.maxSignals !== BigInt(0) ? message.maxSignals?.toString() : undefined;
    if (message.basePacketFee) {
      obj.base_packet_fee = message.basePacketFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.base_packet_fee = message.basePacketFee;
    }
    obj.router_ibc_channel = message.routerIbcChannel === "" ? undefined : message.routerIbcChannel;
    obj.router_integration_contract = message.routerIntegrationContract === "" ? undefined : message.routerIntegrationContract;
    obj.axelar_ibc_channel = message.axelarIbcChannel === "" ? undefined : message.axelarIbcChannel;
    obj.axelar_gmp_account = message.axelarGmpAccount === "" ? undefined : message.axelarGmpAccount;
    obj.axelar_fee_recipient = message.axelarFeeRecipient === "" ? undefined : message.axelarFeeRecipient;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};