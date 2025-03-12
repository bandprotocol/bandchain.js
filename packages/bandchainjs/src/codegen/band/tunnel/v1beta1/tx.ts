//@ts-nocheck
import { SignalDeviation, SignalDeviationAmino, SignalDeviationSDKType } from "./tunnel";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { TSSRoute, TSSRouteProtoMsg, TSSRouteSDKType, IBCRoute, IBCRouteProtoMsg, IBCRouteSDKType } from "./route";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgCreateTunnel is the transaction message to create a new tunnel. */
export interface MsgCreateTunnel {
  /** signal_deviations is the list of signal deviations. */
  signalDeviations: SignalDeviation[];
  /** interval is the interval for delivering the signal prices in seconds. */
  interval: bigint;
  /** route is the route for delivering the signal prices */
  route?: TSSRoute | IBCRoute | Any | undefined;
  /** initial_deposit is the deposit value that must be paid at tunnel creation. */
  initialDeposit: Coin[];
  /** creator is the address of the creator. */
  creator: string;
}
export interface MsgCreateTunnelProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgCreateTunnel";
  value: Uint8Array;
}
export type MsgCreateTunnelEncoded = Omit<MsgCreateTunnel, "route"> & {
  /** route is the route for delivering the signal prices */route?: TSSRouteProtoMsg | IBCRouteProtoMsg | AnyProtoMsg | undefined;
};
/** MsgCreateTunnel is the transaction message to create a new tunnel. */
export interface MsgCreateTunnelAmino {
  /** signal_deviations is the list of signal deviations. */
  signal_deviations?: SignalDeviationAmino[];
  /** interval is the interval for delivering the signal prices in seconds. */
  interval?: string;
  /** route is the route for delivering the signal prices */
  route?: AnyAmino;
  /** initial_deposit is the deposit value that must be paid at tunnel creation. */
  initial_deposit: CoinAmino[];
  /** creator is the address of the creator. */
  creator?: string;
}
export interface MsgCreateTunnelAminoMsg {
  type: "tunnel/MsgCreateTunnel";
  value: MsgCreateTunnelAmino;
}
/** MsgCreateTunnel is the transaction message to create a new tunnel. */
export interface MsgCreateTunnelSDKType {
  signal_deviations: SignalDeviationSDKType[];
  interval: bigint;
  route?: TSSRouteSDKType | IBCRouteSDKType | AnySDKType | undefined;
  initial_deposit: CoinSDKType[];
  creator: string;
}
/** MsgCreateTunnelResponse is the response type for the Msg/CreateTunnel RPC method. */
export interface MsgCreateTunnelResponse {
  tunnelId: bigint;
}
export interface MsgCreateTunnelResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgCreateTunnelResponse";
  value: Uint8Array;
}
/** MsgCreateTunnelResponse is the response type for the Msg/CreateTunnel RPC method. */
export interface MsgCreateTunnelResponseAmino {
  tunnel_id?: string;
}
export interface MsgCreateTunnelResponseAminoMsg {
  type: "/band.tunnel.v1beta1.MsgCreateTunnelResponse";
  value: MsgCreateTunnelResponseAmino;
}
/** MsgCreateTunnelResponse is the response type for the Msg/CreateTunnel RPC method. */
export interface MsgCreateTunnelResponseSDKType {
  tunnel_id: bigint;
}
/** MsgUpdateRoute is the transaction message to update a route information of the tunnel. */
export interface MsgUpdateRoute {
  /** tunnel_id is the ID of the tunnel to edit. */
  tunnelId: bigint;
  /** route is the route for delivering the signal prices */
  route?: TSSRoute | IBCRoute | Any | undefined;
  /** creator is the address of the creator. */
  creator: string;
}
export interface MsgUpdateRouteProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgUpdateRoute";
  value: Uint8Array;
}
export type MsgUpdateRouteEncoded = Omit<MsgUpdateRoute, "route"> & {
  /** route is the route for delivering the signal prices */route?: TSSRouteProtoMsg | IBCRouteProtoMsg | AnyProtoMsg | undefined;
};
/** MsgUpdateRoute is the transaction message to update a route information of the tunnel. */
export interface MsgUpdateRouteAmino {
  /** tunnel_id is the ID of the tunnel to edit. */
  tunnel_id?: string;
  /** route is the route for delivering the signal prices */
  route?: AnyAmino;
  /** creator is the address of the creator. */
  creator?: string;
}
export interface MsgUpdateRouteAminoMsg {
  type: "tunnel/MsgUpdateRoute";
  value: MsgUpdateRouteAmino;
}
/** MsgUpdateRoute is the transaction message to update a route information of the tunnel. */
export interface MsgUpdateRouteSDKType {
  tunnel_id: bigint;
  route?: TSSRouteSDKType | IBCRouteSDKType | AnySDKType | undefined;
  creator: string;
}
/** MsgUpdateRouteResponse is the response type for the Msg/UpdateRoute RPC method. */
export interface MsgUpdateRouteResponse {}
export interface MsgUpdateRouteResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgUpdateRouteResponse";
  value: Uint8Array;
}
/** MsgUpdateRouteResponse is the response type for the Msg/UpdateRoute RPC method. */
export interface MsgUpdateRouteResponseAmino {}
export interface MsgUpdateRouteResponseAminoMsg {
  type: "/band.tunnel.v1beta1.MsgUpdateRouteResponse";
  value: MsgUpdateRouteResponseAmino;
}
/** MsgUpdateRouteResponse is the response type for the Msg/UpdateRoute RPC method. */
export interface MsgUpdateRouteResponseSDKType {}
/** MsgUpdateSignalsAndInterval is the transaction message to update signals and interval of the tunnel. */
export interface MsgUpdateSignalsAndInterval {
  /** tunnel_id is the ID of the tunnel to edit. */
  tunnelId: bigint;
  /** signal_deviations is the list of signal deviations. */
  signalDeviations: SignalDeviation[];
  /** interval is the interval for delivering the signal prices. */
  interval: bigint;
  /** creator is the address of the creator. */
  creator: string;
}
export interface MsgUpdateSignalsAndIntervalProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgUpdateSignalsAndInterval";
  value: Uint8Array;
}
/** MsgUpdateSignalsAndInterval is the transaction message to update signals and interval of the tunnel. */
export interface MsgUpdateSignalsAndIntervalAmino {
  /** tunnel_id is the ID of the tunnel to edit. */
  tunnel_id?: string;
  /** signal_deviations is the list of signal deviations. */
  signal_deviations?: SignalDeviationAmino[];
  /** interval is the interval for delivering the signal prices. */
  interval?: string;
  /** creator is the address of the creator. */
  creator?: string;
}
export interface MsgUpdateSignalsAndIntervalAminoMsg {
  type: "tunnel/MsgUpdateSignalsAndInterval";
  value: MsgUpdateSignalsAndIntervalAmino;
}
/** MsgUpdateSignalsAndInterval is the transaction message to update signals and interval of the tunnel. */
export interface MsgUpdateSignalsAndIntervalSDKType {
  tunnel_id: bigint;
  signal_deviations: SignalDeviationSDKType[];
  interval: bigint;
  creator: string;
}
/** MsgUpdateSignalsAndIntervalResponse is the response type for the Msg/UpdateSignalsAndInterval RPC method. */
export interface MsgUpdateSignalsAndIntervalResponse {}
export interface MsgUpdateSignalsAndIntervalResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgUpdateSignalsAndIntervalResponse";
  value: Uint8Array;
}
/** MsgUpdateSignalsAndIntervalResponse is the response type for the Msg/UpdateSignalsAndInterval RPC method. */
export interface MsgUpdateSignalsAndIntervalResponseAmino {}
export interface MsgUpdateSignalsAndIntervalResponseAminoMsg {
  type: "/band.tunnel.v1beta1.MsgUpdateSignalsAndIntervalResponse";
  value: MsgUpdateSignalsAndIntervalResponseAmino;
}
/** MsgUpdateSignalsAndIntervalResponse is the response type for the Msg/UpdateSignalsAndInterval RPC method. */
export interface MsgUpdateSignalsAndIntervalResponseSDKType {}
/** MsgWithdrawFeePayerFunds is the transaction message to withdraw fee payer funds to creator. */
export interface MsgWithdrawFeePayerFunds {
  /** tunnel_id is the ID of the tunnel to withdraw fee payer coins. */
  tunnelId: bigint;
  /** amount is the coins to withdraw. */
  amount: Coin[];
  /** creator is the address of the creator. */
  creator: string;
}
export interface MsgWithdrawFeePayerFundsProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFeePayerFunds";
  value: Uint8Array;
}
/** MsgWithdrawFeePayerFunds is the transaction message to withdraw fee payer funds to creator. */
export interface MsgWithdrawFeePayerFundsAmino {
  /** tunnel_id is the ID of the tunnel to withdraw fee payer coins. */
  tunnel_id?: string;
  /** amount is the coins to withdraw. */
  amount: CoinAmino[];
  /** creator is the address of the creator. */
  creator?: string;
}
export interface MsgWithdrawFeePayerFundsAminoMsg {
  type: "tunnel/MsgWithdrawFeePayerFunds";
  value: MsgWithdrawFeePayerFundsAmino;
}
/** MsgWithdrawFeePayerFunds is the transaction message to withdraw fee payer funds to creator. */
export interface MsgWithdrawFeePayerFundsSDKType {
  tunnel_id: bigint;
  amount: CoinSDKType[];
  creator: string;
}
/** MsgWithdrawFeePayerFundsResponse is the response type for the Msg/WithdrawFeePayerFunds RPC method. */
export interface MsgWithdrawFeePayerFundsResponse {}
export interface MsgWithdrawFeePayerFundsResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFeePayerFundsResponse";
  value: Uint8Array;
}
/** MsgWithdrawFeePayerFundsResponse is the response type for the Msg/WithdrawFeePayerFunds RPC method. */
export interface MsgWithdrawFeePayerFundsResponseAmino {}
export interface MsgWithdrawFeePayerFundsResponseAminoMsg {
  type: "/band.tunnel.v1beta1.MsgWithdrawFeePayerFundsResponse";
  value: MsgWithdrawFeePayerFundsResponseAmino;
}
/** MsgWithdrawFeePayerFundsResponse is the response type for the Msg/WithdrawFeePayerFunds RPC method. */
export interface MsgWithdrawFeePayerFundsResponseSDKType {}
/** MsgActivateTunnel is the transaction message to activate a tunnel. */
export interface MsgActivateTunnel {
  /** tunnel_id is the ID of the tunnel to activate. */
  tunnelId: bigint;
  /** creator is the address of the creator. */
  creator: string;
}
export interface MsgActivateTunnelProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgActivateTunnel";
  value: Uint8Array;
}
/** MsgActivateTunnel is the transaction message to activate a tunnel. */
export interface MsgActivateTunnelAmino {
  /** tunnel_id is the ID of the tunnel to activate. */
  tunnel_id?: string;
  /** creator is the address of the creator. */
  creator?: string;
}
export interface MsgActivateTunnelAminoMsg {
  type: "tunnel/MsgActivateTunnel";
  value: MsgActivateTunnelAmino;
}
/** MsgActivateTunnel is the transaction message to activate a tunnel. */
export interface MsgActivateTunnelSDKType {
  tunnel_id: bigint;
  creator: string;
}
/** MsgActivateTunnelResponse is the response type for the Msg/Activate RPC method. */
export interface MsgActivateTunnelResponse {}
export interface MsgActivateTunnelResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgActivateTunnelResponse";
  value: Uint8Array;
}
/** MsgActivateTunnelResponse is the response type for the Msg/Activate RPC method. */
export interface MsgActivateTunnelResponseAmino {}
export interface MsgActivateTunnelResponseAminoMsg {
  type: "/band.tunnel.v1beta1.MsgActivateTunnelResponse";
  value: MsgActivateTunnelResponseAmino;
}
/** MsgActivateTunnelResponse is the response type for the Msg/Activate RPC method. */
export interface MsgActivateTunnelResponseSDKType {}
/** MsgDeactivateTunnel is the transaction message to deactivate a tunnel. */
export interface MsgDeactivateTunnel {
  /** tunnel_id is the ID of the tunnel to deactivate. */
  tunnelId: bigint;
  /** creator is the address of the creator. */
  creator: string;
}
export interface MsgDeactivateTunnelProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgDeactivateTunnel";
  value: Uint8Array;
}
/** MsgDeactivateTunnel is the transaction message to deactivate a tunnel. */
export interface MsgDeactivateTunnelAmino {
  /** tunnel_id is the ID of the tunnel to deactivate. */
  tunnel_id?: string;
  /** creator is the address of the creator. */
  creator?: string;
}
export interface MsgDeactivateTunnelAminoMsg {
  type: "tunnel/MsgDeactivateTunnel";
  value: MsgDeactivateTunnelAmino;
}
/** MsgDeactivateTunnel is the transaction message to deactivate a tunnel. */
export interface MsgDeactivateTunnelSDKType {
  tunnel_id: bigint;
  creator: string;
}
/** MsgDeactivateTunnelResponse is the response type for the Msg/Deactivate RPC method. */
export interface MsgDeactivateTunnelResponse {}
export interface MsgDeactivateTunnelResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgDeactivateTunnelResponse";
  value: Uint8Array;
}
/** MsgDeactivateTunnelResponse is the response type for the Msg/Deactivate RPC method. */
export interface MsgDeactivateTunnelResponseAmino {}
export interface MsgDeactivateTunnelResponseAminoMsg {
  type: "/band.tunnel.v1beta1.MsgDeactivateTunnelResponse";
  value: MsgDeactivateTunnelResponseAmino;
}
/** MsgDeactivateTunnelResponse is the response type for the Msg/Deactivate RPC method. */
export interface MsgDeactivateTunnelResponseSDKType {}
/** MsgTriggerTunnel is the transaction message to manually trigger a tunnel. */
export interface MsgTriggerTunnel {
  /** tunnel_id is the ID of the tunnel to manually trigger. */
  tunnelId: bigint;
  /** creator is the address of the creator. */
  creator: string;
}
export interface MsgTriggerTunnelProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgTriggerTunnel";
  value: Uint8Array;
}
/** MsgTriggerTunnel is the transaction message to manually trigger a tunnel. */
export interface MsgTriggerTunnelAmino {
  /** tunnel_id is the ID of the tunnel to manually trigger. */
  tunnel_id?: string;
  /** creator is the address of the creator. */
  creator?: string;
}
export interface MsgTriggerTunnelAminoMsg {
  type: "tunnel/MsgTriggerTunnel";
  value: MsgTriggerTunnelAmino;
}
/** MsgTriggerTunnel is the transaction message to manually trigger a tunnel. */
export interface MsgTriggerTunnelSDKType {
  tunnel_id: bigint;
  creator: string;
}
/** MsgTriggerTunnelResponse is the response type for the Msg/TriggerTunnel RPC method. */
export interface MsgTriggerTunnelResponse {}
export interface MsgTriggerTunnelResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgTriggerTunnelResponse";
  value: Uint8Array;
}
/** MsgTriggerTunnelResponse is the response type for the Msg/TriggerTunnel RPC method. */
export interface MsgTriggerTunnelResponseAmino {}
export interface MsgTriggerTunnelResponseAminoMsg {
  type: "/band.tunnel.v1beta1.MsgTriggerTunnelResponse";
  value: MsgTriggerTunnelResponseAmino;
}
/** MsgTriggerTunnelResponse is the response type for the Msg/TriggerTunnel RPC method. */
export interface MsgTriggerTunnelResponseSDKType {}
/** MsgDepositToTunnel defines a message to deposit to an existing tunnel. */
export interface MsgDepositToTunnel {
  /** tunnel_id defines the unique id of the tunnel. */
  tunnelId: bigint;
  /** amount to be deposited by depositor. */
  amount: Coin[];
  /** depositor defines the deposit addresses from the tunnel. */
  depositor: string;
}
export interface MsgDepositToTunnelProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgDepositToTunnel";
  value: Uint8Array;
}
/** MsgDepositToTunnel defines a message to deposit to an existing tunnel. */
export interface MsgDepositToTunnelAmino {
  /** tunnel_id defines the unique id of the tunnel. */
  tunnel_id?: string;
  /** amount to be deposited by depositor. */
  amount: CoinAmino[];
  /** depositor defines the deposit addresses from the tunnel. */
  depositor?: string;
}
export interface MsgDepositToTunnelAminoMsg {
  type: "tunnel/MsgDepositToTunnel";
  value: MsgDepositToTunnelAmino;
}
/** MsgDepositToTunnel defines a message to deposit to an existing tunnel. */
export interface MsgDepositToTunnelSDKType {
  tunnel_id: bigint;
  amount: CoinSDKType[];
  depositor: string;
}
/** MsgDepositToTunnelResponse defines the Msg/DepositToTunnel response type. */
export interface MsgDepositToTunnelResponse {}
export interface MsgDepositToTunnelResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgDepositToTunnelResponse";
  value: Uint8Array;
}
/** MsgDepositToTunnelResponse defines the Msg/DepositToTunnel response type. */
export interface MsgDepositToTunnelResponseAmino {}
export interface MsgDepositToTunnelResponseAminoMsg {
  type: "/band.tunnel.v1beta1.MsgDepositToTunnelResponse";
  value: MsgDepositToTunnelResponseAmino;
}
/** MsgDepositToTunnelResponse defines the Msg/DepositToTunnel response type. */
export interface MsgDepositToTunnelResponseSDKType {}
/** MsgWithdrawFromTunnel is the transaction message to withdraw a deposit from an existing tunnel. */
export interface MsgWithdrawFromTunnel {
  /** tunnel_id defines the unique id of the tunnel. */
  tunnelId: bigint;
  /** amount to be withdrawn by withdrawer. */
  amount: Coin[];
  /** withdrawer defines the withdraw addresses from the tunnel. */
  withdrawer: string;
}
export interface MsgWithdrawFromTunnelProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFromTunnel";
  value: Uint8Array;
}
/** MsgWithdrawFromTunnel is the transaction message to withdraw a deposit from an existing tunnel. */
export interface MsgWithdrawFromTunnelAmino {
  /** tunnel_id defines the unique id of the tunnel. */
  tunnel_id?: string;
  /** amount to be withdrawn by withdrawer. */
  amount: CoinAmino[];
  /** withdrawer defines the withdraw addresses from the tunnel. */
  withdrawer?: string;
}
export interface MsgWithdrawFromTunnelAminoMsg {
  type: "tunnel/MsgWithdrawFromTunnel";
  value: MsgWithdrawFromTunnelAmino;
}
/** MsgWithdrawFromTunnel is the transaction message to withdraw a deposit from an existing tunnel. */
export interface MsgWithdrawFromTunnelSDKType {
  tunnel_id: bigint;
  amount: CoinSDKType[];
  withdrawer: string;
}
/** MsgWithdrawFromTunnelResponse defines the Msg/WithdrawFromTunnel response type. */
export interface MsgWithdrawFromTunnelResponse {}
export interface MsgWithdrawFromTunnelResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFromTunnelResponse";
  value: Uint8Array;
}
/** MsgWithdrawFromTunnelResponse defines the Msg/WithdrawFromTunnel response type. */
export interface MsgWithdrawFromTunnelResponseAmino {}
export interface MsgWithdrawFromTunnelResponseAminoMsg {
  type: "/band.tunnel.v1beta1.MsgWithdrawFromTunnelResponse";
  value: MsgWithdrawFromTunnelResponseAmino;
}
/** MsgWithdrawFromTunnelResponse defines the Msg/WithdrawFromTunnel response type. */
export interface MsgWithdrawFromTunnelResponseSDKType {}
/** MsgUpdateParams is the transaction message to update parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** params is the x/tunnel parameters to update. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the transaction message to update parameters. */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /** params is the x/tunnel parameters to update. */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "tunnel/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the transaction message to update parameters. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/** MsgUpdateParamsResponse is the response type for the Msg/UpdateParams RPC method. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse is the response type for the Msg/UpdateParams RPC method. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/band.tunnel.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse is the response type for the Msg/UpdateParams RPC method. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgCreateTunnel(): MsgCreateTunnel {
  return {
    signalDeviations: [],
    interval: BigInt(0),
    route: undefined,
    initialDeposit: [],
    creator: ""
  };
}
export const MsgCreateTunnel = {
  typeUrl: "/band.tunnel.v1beta1.MsgCreateTunnel",
  encode(message: MsgCreateTunnel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.signalDeviations) {
      SignalDeviation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.interval !== BigInt(0)) {
      writer.uint32(16).uint64(message.interval);
    }
    if (message.route !== undefined) {
      Any.encode(message.route as Any, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.initialDeposit) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTunnel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTunnel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signalDeviations.push(SignalDeviation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.interval = reader.uint64();
          break;
        case 3:
          message.route = RouteI_InterfaceDecoder(reader) as Any;
          break;
        case 4:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateTunnel>): MsgCreateTunnel {
    const message = createBaseMsgCreateTunnel();
    message.signalDeviations = object.signalDeviations?.map(e => SignalDeviation.fromPartial(e)) || [];
    message.interval = object.interval !== undefined && object.interval !== null ? BigInt(object.interval.toString()) : BigInt(0);
    message.route = object.route !== undefined && object.route !== null ? Any.fromPartial(object.route) : undefined;
    message.initialDeposit = object.initialDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgCreateTunnelAmino): MsgCreateTunnel {
    const message = createBaseMsgCreateTunnel();
    message.signalDeviations = object.signal_deviations?.map(e => SignalDeviation.fromAmino(e)) || [];
    if (object.interval !== undefined && object.interval !== null) {
      message.interval = BigInt(object.interval);
    }
    if (object.route !== undefined && object.route !== null) {
      message.route = RouteI_FromAmino(object.route);
    }
    message.initialDeposit = object.initial_deposit?.map(e => Coin.fromAmino(e)) || [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgCreateTunnel): MsgCreateTunnelAmino {
    const obj: any = {};
    if (message.signalDeviations) {
      obj.signal_deviations = message.signalDeviations.map(e => e ? SignalDeviation.toAmino(e) : undefined);
    } else {
      obj.signal_deviations = message.signalDeviations;
    }
    obj.interval = message.interval !== BigInt(0) ? message.interval?.toString() : undefined;
    obj.route = message.route ? RouteI_ToAmino(message.route as Any) : undefined;
    if (message.initialDeposit) {
      obj.initial_deposit = message.initialDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.initial_deposit = message.initialDeposit;
    }
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTunnelAminoMsg): MsgCreateTunnel {
    return MsgCreateTunnel.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateTunnel): MsgCreateTunnelAminoMsg {
    return {
      type: "tunnel/MsgCreateTunnel",
      value: MsgCreateTunnel.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateTunnelProtoMsg): MsgCreateTunnel {
    return MsgCreateTunnel.decode(message.value);
  },
  toProto(message: MsgCreateTunnel): Uint8Array {
    return MsgCreateTunnel.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTunnel): MsgCreateTunnelProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgCreateTunnel",
      value: MsgCreateTunnel.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTunnelResponse(): MsgCreateTunnelResponse {
  return {
    tunnelId: BigInt(0)
  };
}
export const MsgCreateTunnelResponse = {
  typeUrl: "/band.tunnel.v1beta1.MsgCreateTunnelResponse",
  encode(message: MsgCreateTunnelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTunnelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTunnelResponse();
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
  fromPartial(object: Partial<MsgCreateTunnelResponse>): MsgCreateTunnelResponse {
    const message = createBaseMsgCreateTunnelResponse();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateTunnelResponseAmino): MsgCreateTunnelResponse {
    const message = createBaseMsgCreateTunnelResponse();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    return message;
  },
  toAmino(message: MsgCreateTunnelResponse): MsgCreateTunnelResponseAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTunnelResponseAminoMsg): MsgCreateTunnelResponse {
    return MsgCreateTunnelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTunnelResponseProtoMsg): MsgCreateTunnelResponse {
    return MsgCreateTunnelResponse.decode(message.value);
  },
  toProto(message: MsgCreateTunnelResponse): Uint8Array {
    return MsgCreateTunnelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTunnelResponse): MsgCreateTunnelResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgCreateTunnelResponse",
      value: MsgCreateTunnelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRoute(): MsgUpdateRoute {
  return {
    tunnelId: BigInt(0),
    route: undefined,
    creator: ""
  };
}
export const MsgUpdateRoute = {
  typeUrl: "/band.tunnel.v1beta1.MsgUpdateRoute",
  encode(message: MsgUpdateRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    if (message.route !== undefined) {
      Any.encode(message.route as Any, writer.uint32(18).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.uint64();
          break;
        case 2:
          message.route = RouteI_InterfaceDecoder(reader) as Any;
          break;
        case 3:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateRoute>): MsgUpdateRoute {
    const message = createBaseMsgUpdateRoute();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.route = object.route !== undefined && object.route !== null ? Any.fromPartial(object.route) : undefined;
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateRouteAmino): MsgUpdateRoute {
    const message = createBaseMsgUpdateRoute();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    if (object.route !== undefined && object.route !== null) {
      message.route = RouteI_FromAmino(object.route);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgUpdateRoute): MsgUpdateRouteAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    obj.route = message.route ? RouteI_ToAmino(message.route as Any) : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRouteAminoMsg): MsgUpdateRoute {
    return MsgUpdateRoute.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateRoute): MsgUpdateRouteAminoMsg {
    return {
      type: "tunnel/MsgUpdateRoute",
      value: MsgUpdateRoute.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateRouteProtoMsg): MsgUpdateRoute {
    return MsgUpdateRoute.decode(message.value);
  },
  toProto(message: MsgUpdateRoute): Uint8Array {
    return MsgUpdateRoute.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRoute): MsgUpdateRouteProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgUpdateRoute",
      value: MsgUpdateRoute.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRouteResponse(): MsgUpdateRouteResponse {
  return {};
}
export const MsgUpdateRouteResponse = {
  typeUrl: "/band.tunnel.v1beta1.MsgUpdateRouteResponse",
  encode(_: MsgUpdateRouteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateRouteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRouteResponse();
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
  fromPartial(_: Partial<MsgUpdateRouteResponse>): MsgUpdateRouteResponse {
    const message = createBaseMsgUpdateRouteResponse();
    return message;
  },
  fromAmino(_: MsgUpdateRouteResponseAmino): MsgUpdateRouteResponse {
    const message = createBaseMsgUpdateRouteResponse();
    return message;
  },
  toAmino(_: MsgUpdateRouteResponse): MsgUpdateRouteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRouteResponseAminoMsg): MsgUpdateRouteResponse {
    return MsgUpdateRouteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRouteResponseProtoMsg): MsgUpdateRouteResponse {
    return MsgUpdateRouteResponse.decode(message.value);
  },
  toProto(message: MsgUpdateRouteResponse): Uint8Array {
    return MsgUpdateRouteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRouteResponse): MsgUpdateRouteResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgUpdateRouteResponse",
      value: MsgUpdateRouteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSignalsAndInterval(): MsgUpdateSignalsAndInterval {
  return {
    tunnelId: BigInt(0),
    signalDeviations: [],
    interval: BigInt(0),
    creator: ""
  };
}
export const MsgUpdateSignalsAndInterval = {
  typeUrl: "/band.tunnel.v1beta1.MsgUpdateSignalsAndInterval",
  encode(message: MsgUpdateSignalsAndInterval, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    for (const v of message.signalDeviations) {
      SignalDeviation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.interval !== BigInt(0)) {
      writer.uint32(24).uint64(message.interval);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSignalsAndInterval {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSignalsAndInterval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.uint64();
          break;
        case 2:
          message.signalDeviations.push(SignalDeviation.decode(reader, reader.uint32()));
          break;
        case 3:
          message.interval = reader.uint64();
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateSignalsAndInterval>): MsgUpdateSignalsAndInterval {
    const message = createBaseMsgUpdateSignalsAndInterval();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.signalDeviations = object.signalDeviations?.map(e => SignalDeviation.fromPartial(e)) || [];
    message.interval = object.interval !== undefined && object.interval !== null ? BigInt(object.interval.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateSignalsAndIntervalAmino): MsgUpdateSignalsAndInterval {
    const message = createBaseMsgUpdateSignalsAndInterval();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    message.signalDeviations = object.signal_deviations?.map(e => SignalDeviation.fromAmino(e)) || [];
    if (object.interval !== undefined && object.interval !== null) {
      message.interval = BigInt(object.interval);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgUpdateSignalsAndInterval): MsgUpdateSignalsAndIntervalAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    if (message.signalDeviations) {
      obj.signal_deviations = message.signalDeviations.map(e => e ? SignalDeviation.toAmino(e) : undefined);
    } else {
      obj.signal_deviations = message.signalDeviations;
    }
    obj.interval = message.interval !== BigInt(0) ? message.interval?.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSignalsAndIntervalAminoMsg): MsgUpdateSignalsAndInterval {
    return MsgUpdateSignalsAndInterval.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateSignalsAndInterval): MsgUpdateSignalsAndIntervalAminoMsg {
    return {
      type: "tunnel/MsgUpdateSignalsAndInterval",
      value: MsgUpdateSignalsAndInterval.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateSignalsAndIntervalProtoMsg): MsgUpdateSignalsAndInterval {
    return MsgUpdateSignalsAndInterval.decode(message.value);
  },
  toProto(message: MsgUpdateSignalsAndInterval): Uint8Array {
    return MsgUpdateSignalsAndInterval.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSignalsAndInterval): MsgUpdateSignalsAndIntervalProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgUpdateSignalsAndInterval",
      value: MsgUpdateSignalsAndInterval.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSignalsAndIntervalResponse(): MsgUpdateSignalsAndIntervalResponse {
  return {};
}
export const MsgUpdateSignalsAndIntervalResponse = {
  typeUrl: "/band.tunnel.v1beta1.MsgUpdateSignalsAndIntervalResponse",
  encode(_: MsgUpdateSignalsAndIntervalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSignalsAndIntervalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSignalsAndIntervalResponse();
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
  fromPartial(_: Partial<MsgUpdateSignalsAndIntervalResponse>): MsgUpdateSignalsAndIntervalResponse {
    const message = createBaseMsgUpdateSignalsAndIntervalResponse();
    return message;
  },
  fromAmino(_: MsgUpdateSignalsAndIntervalResponseAmino): MsgUpdateSignalsAndIntervalResponse {
    const message = createBaseMsgUpdateSignalsAndIntervalResponse();
    return message;
  },
  toAmino(_: MsgUpdateSignalsAndIntervalResponse): MsgUpdateSignalsAndIntervalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSignalsAndIntervalResponseAminoMsg): MsgUpdateSignalsAndIntervalResponse {
    return MsgUpdateSignalsAndIntervalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSignalsAndIntervalResponseProtoMsg): MsgUpdateSignalsAndIntervalResponse {
    return MsgUpdateSignalsAndIntervalResponse.decode(message.value);
  },
  toProto(message: MsgUpdateSignalsAndIntervalResponse): Uint8Array {
    return MsgUpdateSignalsAndIntervalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSignalsAndIntervalResponse): MsgUpdateSignalsAndIntervalResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgUpdateSignalsAndIntervalResponse",
      value: MsgUpdateSignalsAndIntervalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawFeePayerFunds(): MsgWithdrawFeePayerFunds {
  return {
    tunnelId: BigInt(0),
    amount: [],
    creator: ""
  };
}
export const MsgWithdrawFeePayerFunds = {
  typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFeePayerFunds",
  encode(message: MsgWithdrawFeePayerFunds, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawFeePayerFunds {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFeePayerFunds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.uint64();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawFeePayerFunds>): MsgWithdrawFeePayerFunds {
    const message = createBaseMsgWithdrawFeePayerFunds();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawFeePayerFundsAmino): MsgWithdrawFeePayerFunds {
    const message = createBaseMsgWithdrawFeePayerFunds();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgWithdrawFeePayerFunds): MsgWithdrawFeePayerFundsAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawFeePayerFundsAminoMsg): MsgWithdrawFeePayerFunds {
    return MsgWithdrawFeePayerFunds.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawFeePayerFunds): MsgWithdrawFeePayerFundsAminoMsg {
    return {
      type: "tunnel/MsgWithdrawFeePayerFunds",
      value: MsgWithdrawFeePayerFunds.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawFeePayerFundsProtoMsg): MsgWithdrawFeePayerFunds {
    return MsgWithdrawFeePayerFunds.decode(message.value);
  },
  toProto(message: MsgWithdrawFeePayerFunds): Uint8Array {
    return MsgWithdrawFeePayerFunds.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawFeePayerFunds): MsgWithdrawFeePayerFundsProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFeePayerFunds",
      value: MsgWithdrawFeePayerFunds.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawFeePayerFundsResponse(): MsgWithdrawFeePayerFundsResponse {
  return {};
}
export const MsgWithdrawFeePayerFundsResponse = {
  typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFeePayerFundsResponse",
  encode(_: MsgWithdrawFeePayerFundsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawFeePayerFundsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFeePayerFundsResponse();
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
  fromPartial(_: Partial<MsgWithdrawFeePayerFundsResponse>): MsgWithdrawFeePayerFundsResponse {
    const message = createBaseMsgWithdrawFeePayerFundsResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawFeePayerFundsResponseAmino): MsgWithdrawFeePayerFundsResponse {
    const message = createBaseMsgWithdrawFeePayerFundsResponse();
    return message;
  },
  toAmino(_: MsgWithdrawFeePayerFundsResponse): MsgWithdrawFeePayerFundsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawFeePayerFundsResponseAminoMsg): MsgWithdrawFeePayerFundsResponse {
    return MsgWithdrawFeePayerFundsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawFeePayerFundsResponseProtoMsg): MsgWithdrawFeePayerFundsResponse {
    return MsgWithdrawFeePayerFundsResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawFeePayerFundsResponse): Uint8Array {
    return MsgWithdrawFeePayerFundsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawFeePayerFundsResponse): MsgWithdrawFeePayerFundsResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFeePayerFundsResponse",
      value: MsgWithdrawFeePayerFundsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgActivateTunnel(): MsgActivateTunnel {
  return {
    tunnelId: BigInt(0),
    creator: ""
  };
}
export const MsgActivateTunnel = {
  typeUrl: "/band.tunnel.v1beta1.MsgActivateTunnel",
  encode(message: MsgActivateTunnel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgActivateTunnel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateTunnel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgActivateTunnel>): MsgActivateTunnel {
    const message = createBaseMsgActivateTunnel();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgActivateTunnelAmino): MsgActivateTunnel {
    const message = createBaseMsgActivateTunnel();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgActivateTunnel): MsgActivateTunnelAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgActivateTunnelAminoMsg): MsgActivateTunnel {
    return MsgActivateTunnel.fromAmino(object.value);
  },
  toAminoMsg(message: MsgActivateTunnel): MsgActivateTunnelAminoMsg {
    return {
      type: "tunnel/MsgActivateTunnel",
      value: MsgActivateTunnel.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgActivateTunnelProtoMsg): MsgActivateTunnel {
    return MsgActivateTunnel.decode(message.value);
  },
  toProto(message: MsgActivateTunnel): Uint8Array {
    return MsgActivateTunnel.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateTunnel): MsgActivateTunnelProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgActivateTunnel",
      value: MsgActivateTunnel.encode(message).finish()
    };
  }
};
function createBaseMsgActivateTunnelResponse(): MsgActivateTunnelResponse {
  return {};
}
export const MsgActivateTunnelResponse = {
  typeUrl: "/band.tunnel.v1beta1.MsgActivateTunnelResponse",
  encode(_: MsgActivateTunnelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgActivateTunnelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateTunnelResponse();
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
  fromPartial(_: Partial<MsgActivateTunnelResponse>): MsgActivateTunnelResponse {
    const message = createBaseMsgActivateTunnelResponse();
    return message;
  },
  fromAmino(_: MsgActivateTunnelResponseAmino): MsgActivateTunnelResponse {
    const message = createBaseMsgActivateTunnelResponse();
    return message;
  },
  toAmino(_: MsgActivateTunnelResponse): MsgActivateTunnelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgActivateTunnelResponseAminoMsg): MsgActivateTunnelResponse {
    return MsgActivateTunnelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgActivateTunnelResponseProtoMsg): MsgActivateTunnelResponse {
    return MsgActivateTunnelResponse.decode(message.value);
  },
  toProto(message: MsgActivateTunnelResponse): Uint8Array {
    return MsgActivateTunnelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateTunnelResponse): MsgActivateTunnelResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgActivateTunnelResponse",
      value: MsgActivateTunnelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeactivateTunnel(): MsgDeactivateTunnel {
  return {
    tunnelId: BigInt(0),
    creator: ""
  };
}
export const MsgDeactivateTunnel = {
  typeUrl: "/band.tunnel.v1beta1.MsgDeactivateTunnel",
  encode(message: MsgDeactivateTunnel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeactivateTunnel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateTunnel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeactivateTunnel>): MsgDeactivateTunnel {
    const message = createBaseMsgDeactivateTunnel();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgDeactivateTunnelAmino): MsgDeactivateTunnel {
    const message = createBaseMsgDeactivateTunnel();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgDeactivateTunnel): MsgDeactivateTunnelAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgDeactivateTunnelAminoMsg): MsgDeactivateTunnel {
    return MsgDeactivateTunnel.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeactivateTunnel): MsgDeactivateTunnelAminoMsg {
    return {
      type: "tunnel/MsgDeactivateTunnel",
      value: MsgDeactivateTunnel.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeactivateTunnelProtoMsg): MsgDeactivateTunnel {
    return MsgDeactivateTunnel.decode(message.value);
  },
  toProto(message: MsgDeactivateTunnel): Uint8Array {
    return MsgDeactivateTunnel.encode(message).finish();
  },
  toProtoMsg(message: MsgDeactivateTunnel): MsgDeactivateTunnelProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgDeactivateTunnel",
      value: MsgDeactivateTunnel.encode(message).finish()
    };
  }
};
function createBaseMsgDeactivateTunnelResponse(): MsgDeactivateTunnelResponse {
  return {};
}
export const MsgDeactivateTunnelResponse = {
  typeUrl: "/band.tunnel.v1beta1.MsgDeactivateTunnelResponse",
  encode(_: MsgDeactivateTunnelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeactivateTunnelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateTunnelResponse();
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
  fromPartial(_: Partial<MsgDeactivateTunnelResponse>): MsgDeactivateTunnelResponse {
    const message = createBaseMsgDeactivateTunnelResponse();
    return message;
  },
  fromAmino(_: MsgDeactivateTunnelResponseAmino): MsgDeactivateTunnelResponse {
    const message = createBaseMsgDeactivateTunnelResponse();
    return message;
  },
  toAmino(_: MsgDeactivateTunnelResponse): MsgDeactivateTunnelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeactivateTunnelResponseAminoMsg): MsgDeactivateTunnelResponse {
    return MsgDeactivateTunnelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeactivateTunnelResponseProtoMsg): MsgDeactivateTunnelResponse {
    return MsgDeactivateTunnelResponse.decode(message.value);
  },
  toProto(message: MsgDeactivateTunnelResponse): Uint8Array {
    return MsgDeactivateTunnelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeactivateTunnelResponse): MsgDeactivateTunnelResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgDeactivateTunnelResponse",
      value: MsgDeactivateTunnelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTriggerTunnel(): MsgTriggerTunnel {
  return {
    tunnelId: BigInt(0),
    creator: ""
  };
}
export const MsgTriggerTunnel = {
  typeUrl: "/band.tunnel.v1beta1.MsgTriggerTunnel",
  encode(message: MsgTriggerTunnel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTriggerTunnel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTriggerTunnel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTriggerTunnel>): MsgTriggerTunnel {
    const message = createBaseMsgTriggerTunnel();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgTriggerTunnelAmino): MsgTriggerTunnel {
    const message = createBaseMsgTriggerTunnel();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgTriggerTunnel): MsgTriggerTunnelAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgTriggerTunnelAminoMsg): MsgTriggerTunnel {
    return MsgTriggerTunnel.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTriggerTunnel): MsgTriggerTunnelAminoMsg {
    return {
      type: "tunnel/MsgTriggerTunnel",
      value: MsgTriggerTunnel.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTriggerTunnelProtoMsg): MsgTriggerTunnel {
    return MsgTriggerTunnel.decode(message.value);
  },
  toProto(message: MsgTriggerTunnel): Uint8Array {
    return MsgTriggerTunnel.encode(message).finish();
  },
  toProtoMsg(message: MsgTriggerTunnel): MsgTriggerTunnelProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgTriggerTunnel",
      value: MsgTriggerTunnel.encode(message).finish()
    };
  }
};
function createBaseMsgTriggerTunnelResponse(): MsgTriggerTunnelResponse {
  return {};
}
export const MsgTriggerTunnelResponse = {
  typeUrl: "/band.tunnel.v1beta1.MsgTriggerTunnelResponse",
  encode(_: MsgTriggerTunnelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTriggerTunnelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTriggerTunnelResponse();
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
  fromPartial(_: Partial<MsgTriggerTunnelResponse>): MsgTriggerTunnelResponse {
    const message = createBaseMsgTriggerTunnelResponse();
    return message;
  },
  fromAmino(_: MsgTriggerTunnelResponseAmino): MsgTriggerTunnelResponse {
    const message = createBaseMsgTriggerTunnelResponse();
    return message;
  },
  toAmino(_: MsgTriggerTunnelResponse): MsgTriggerTunnelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTriggerTunnelResponseAminoMsg): MsgTriggerTunnelResponse {
    return MsgTriggerTunnelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTriggerTunnelResponseProtoMsg): MsgTriggerTunnelResponse {
    return MsgTriggerTunnelResponse.decode(message.value);
  },
  toProto(message: MsgTriggerTunnelResponse): Uint8Array {
    return MsgTriggerTunnelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTriggerTunnelResponse): MsgTriggerTunnelResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgTriggerTunnelResponse",
      value: MsgTriggerTunnelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDepositToTunnel(): MsgDepositToTunnel {
  return {
    tunnelId: BigInt(0),
    amount: [],
    depositor: ""
  };
}
export const MsgDepositToTunnel = {
  typeUrl: "/band.tunnel.v1beta1.MsgDepositToTunnel",
  encode(message: MsgDepositToTunnel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositToTunnel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositToTunnel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.uint64();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDepositToTunnel>): MsgDepositToTunnel {
    const message = createBaseMsgDepositToTunnel();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.depositor = object.depositor ?? "";
    return message;
  },
  fromAmino(object: MsgDepositToTunnelAmino): MsgDepositToTunnel {
    const message = createBaseMsgDepositToTunnel();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    return message;
  },
  toAmino(message: MsgDepositToTunnel): MsgDepositToTunnelAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    return obj;
  },
  fromAminoMsg(object: MsgDepositToTunnelAminoMsg): MsgDepositToTunnel {
    return MsgDepositToTunnel.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDepositToTunnel): MsgDepositToTunnelAminoMsg {
    return {
      type: "tunnel/MsgDepositToTunnel",
      value: MsgDepositToTunnel.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDepositToTunnelProtoMsg): MsgDepositToTunnel {
    return MsgDepositToTunnel.decode(message.value);
  },
  toProto(message: MsgDepositToTunnel): Uint8Array {
    return MsgDepositToTunnel.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositToTunnel): MsgDepositToTunnelProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgDepositToTunnel",
      value: MsgDepositToTunnel.encode(message).finish()
    };
  }
};
function createBaseMsgDepositToTunnelResponse(): MsgDepositToTunnelResponse {
  return {};
}
export const MsgDepositToTunnelResponse = {
  typeUrl: "/band.tunnel.v1beta1.MsgDepositToTunnelResponse",
  encode(_: MsgDepositToTunnelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositToTunnelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositToTunnelResponse();
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
  fromPartial(_: Partial<MsgDepositToTunnelResponse>): MsgDepositToTunnelResponse {
    const message = createBaseMsgDepositToTunnelResponse();
    return message;
  },
  fromAmino(_: MsgDepositToTunnelResponseAmino): MsgDepositToTunnelResponse {
    const message = createBaseMsgDepositToTunnelResponse();
    return message;
  },
  toAmino(_: MsgDepositToTunnelResponse): MsgDepositToTunnelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositToTunnelResponseAminoMsg): MsgDepositToTunnelResponse {
    return MsgDepositToTunnelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositToTunnelResponseProtoMsg): MsgDepositToTunnelResponse {
    return MsgDepositToTunnelResponse.decode(message.value);
  },
  toProto(message: MsgDepositToTunnelResponse): Uint8Array {
    return MsgDepositToTunnelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositToTunnelResponse): MsgDepositToTunnelResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgDepositToTunnelResponse",
      value: MsgDepositToTunnelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawFromTunnel(): MsgWithdrawFromTunnel {
  return {
    tunnelId: BigInt(0),
    amount: [],
    withdrawer: ""
  };
}
export const MsgWithdrawFromTunnel = {
  typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFromTunnel",
  encode(message: MsgWithdrawFromTunnel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.withdrawer !== "") {
      writer.uint32(26).string(message.withdrawer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawFromTunnel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFromTunnel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnelId = reader.uint64();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.withdrawer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawFromTunnel>): MsgWithdrawFromTunnel {
    const message = createBaseMsgWithdrawFromTunnel();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.withdrawer = object.withdrawer ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawFromTunnelAmino): MsgWithdrawFromTunnel {
    const message = createBaseMsgWithdrawFromTunnel();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.withdrawer !== undefined && object.withdrawer !== null) {
      message.withdrawer = object.withdrawer;
    }
    return message;
  },
  toAmino(message: MsgWithdrawFromTunnel): MsgWithdrawFromTunnelAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.withdrawer = message.withdrawer === "" ? undefined : message.withdrawer;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawFromTunnelAminoMsg): MsgWithdrawFromTunnel {
    return MsgWithdrawFromTunnel.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawFromTunnel): MsgWithdrawFromTunnelAminoMsg {
    return {
      type: "tunnel/MsgWithdrawFromTunnel",
      value: MsgWithdrawFromTunnel.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawFromTunnelProtoMsg): MsgWithdrawFromTunnel {
    return MsgWithdrawFromTunnel.decode(message.value);
  },
  toProto(message: MsgWithdrawFromTunnel): Uint8Array {
    return MsgWithdrawFromTunnel.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawFromTunnel): MsgWithdrawFromTunnelProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFromTunnel",
      value: MsgWithdrawFromTunnel.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawFromTunnelResponse(): MsgWithdrawFromTunnelResponse {
  return {};
}
export const MsgWithdrawFromTunnelResponse = {
  typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFromTunnelResponse",
  encode(_: MsgWithdrawFromTunnelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawFromTunnelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFromTunnelResponse();
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
  fromPartial(_: Partial<MsgWithdrawFromTunnelResponse>): MsgWithdrawFromTunnelResponse {
    const message = createBaseMsgWithdrawFromTunnelResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawFromTunnelResponseAmino): MsgWithdrawFromTunnelResponse {
    const message = createBaseMsgWithdrawFromTunnelResponse();
    return message;
  },
  toAmino(_: MsgWithdrawFromTunnelResponse): MsgWithdrawFromTunnelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawFromTunnelResponseAminoMsg): MsgWithdrawFromTunnelResponse {
    return MsgWithdrawFromTunnelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawFromTunnelResponseProtoMsg): MsgWithdrawFromTunnelResponse {
    return MsgWithdrawFromTunnelResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawFromTunnelResponse): Uint8Array {
    return MsgWithdrawFromTunnelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawFromTunnelResponse): MsgWithdrawFromTunnelResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFromTunnelResponse",
      value: MsgWithdrawFromTunnelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/band.tunnel.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "tunnel/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/band.tunnel.v1beta1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
export const RouteI_InterfaceDecoder = (input: BinaryReader | Uint8Array): TSSRoute | IBCRoute | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/band.tunnel.v1beta1.TSSRoute":
      return TSSRoute.decode(data.value);
    case "/band.tunnel.v1beta1.IBCRoute":
      return IBCRoute.decode(data.value);
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
    case "/band.tunnel.v1beta1.IBCRoute":
      return Any.fromPartial({
        typeUrl: "/band.tunnel.v1beta1.IBCRoute",
        value: IBCRoute.encode(IBCRoute.fromPartial(IBCRoute.fromAmino(content.value))).finish()
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
    case "/band.tunnel.v1beta1.IBCRoute":
      return {
        type: "/band.tunnel.v1beta1.IBCRoute",
        value: IBCRoute.toAmino(IBCRoute.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};