//@ts-nocheck
import { SignalDeviation, SignalDeviationAmino, SignalDeviationSDKType } from "./tunnel";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Encoder } from "../../feeds/v1beta1/feeds";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgCreateTunnel is the transaction message to create a new tunnel. */
export interface MsgCreateTunnel {
  /** signal_deviations is the list of signal deviations. */
  signalDeviations: SignalDeviation[];
  /** interval is the interval for delivering the signal prices. */
  interval: bigint;
  /** route is the route for delivering the signal prices */
  route?: Any | undefined;
  /** encoder is the mode of encoding price signal data. */
  encoder: Encoder;
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
  /** route is the route for delivering the signal prices */route?: AnyProtoMsg | undefined;
};
/** MsgCreateTunnel is the transaction message to create a new tunnel. */
export interface MsgCreateTunnelAmino {
  /** signal_deviations is the list of signal deviations. */
  signal_deviations?: SignalDeviationAmino[];
  /** interval is the interval for delivering the signal prices. */
  interval?: string;
  /** route is the route for delivering the signal prices */
  route?: AnyAmino;
  /** encoder is the mode of encoding price signal data. */
  encoder?: Encoder;
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
  route?: AnySDKType | undefined;
  encoder: Encoder;
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
/**
 * MsgUpdateAndResetTunnel is the transaction message to update a tunnel information
 * and reset the interval.
 */
export interface MsgUpdateAndResetTunnel {
  /** tunnel_id is the ID of the tunnel to edit. */
  tunnelId: bigint;
  /** signal_deviations is the list of signal deviations. */
  signalDeviations: SignalDeviation[];
  /** interval is the interval for delivering the signal prices. */
  interval: bigint;
  /** creator is the address of the creator. */
  creator: string;
}
export interface MsgUpdateAndResetTunnelProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgUpdateAndResetTunnel";
  value: Uint8Array;
}
/**
 * MsgUpdateAndResetTunnel is the transaction message to update a tunnel information
 * and reset the interval.
 */
export interface MsgUpdateAndResetTunnelAmino {
  /** tunnel_id is the ID of the tunnel to edit. */
  tunnel_id?: string;
  /** signal_deviations is the list of signal deviations. */
  signal_deviations?: SignalDeviationAmino[];
  /** interval is the interval for delivering the signal prices. */
  interval?: string;
  /** creator is the address of the creator. */
  creator?: string;
}
export interface MsgUpdateAndResetTunnelAminoMsg {
  type: "tunnel/MsgUpdateAndResetTunnel";
  value: MsgUpdateAndResetTunnelAmino;
}
/**
 * MsgUpdateAndResetTunnel is the transaction message to update a tunnel information
 * and reset the interval.
 */
export interface MsgUpdateAndResetTunnelSDKType {
  tunnel_id: bigint;
  signal_deviations: SignalDeviationSDKType[];
  interval: bigint;
  creator: string;
}
/** MsgUpdateAndResetTunnelResponse is the response type for the Msg/UpdateAndResetTunnel RPC method. */
export interface MsgUpdateAndResetTunnelResponse {}
export interface MsgUpdateAndResetTunnelResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgUpdateAndResetTunnelResponse";
  value: Uint8Array;
}
/** MsgUpdateAndResetTunnelResponse is the response type for the Msg/UpdateAndResetTunnel RPC method. */
export interface MsgUpdateAndResetTunnelResponseAmino {}
export interface MsgUpdateAndResetTunnelResponseAminoMsg {
  type: "/band.tunnel.v1beta1.MsgUpdateAndResetTunnelResponse";
  value: MsgUpdateAndResetTunnelResponseAmino;
}
/** MsgUpdateAndResetTunnelResponse is the response type for the Msg/UpdateAndResetTunnel RPC method. */
export interface MsgUpdateAndResetTunnelResponseSDKType {}
/** Activate is the transaction message to activate a tunnel. */
export interface MsgActivate {
  /** tunnel_id is the ID of the tunnel to activate. */
  tunnelId: bigint;
  /** creator is the address of the creator. */
  creator: string;
}
export interface MsgActivateProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgActivate";
  value: Uint8Array;
}
/** Activate is the transaction message to activate a tunnel. */
export interface MsgActivateAmino {
  /** tunnel_id is the ID of the tunnel to activate. */
  tunnel_id?: string;
  /** creator is the address of the creator. */
  creator?: string;
}
export interface MsgActivateAminoMsg {
  type: "tunnel/MsgActivate";
  value: MsgActivateAmino;
}
/** Activate is the transaction message to activate a tunnel. */
export interface MsgActivateSDKType {
  tunnel_id: bigint;
  creator: string;
}
/** MsgActivateResponse is the response type for the Msg/Activate RPC method. */
export interface MsgActivateResponse {}
export interface MsgActivateResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgActivateResponse";
  value: Uint8Array;
}
/** MsgActivateResponse is the response type for the Msg/Activate RPC method. */
export interface MsgActivateResponseAmino {}
export interface MsgActivateResponseAminoMsg {
  type: "/band.tunnel.v1beta1.MsgActivateResponse";
  value: MsgActivateResponseAmino;
}
/** MsgActivateResponse is the response type for the Msg/Activate RPC method. */
export interface MsgActivateResponseSDKType {}
/** MsgDeactivate is the transaction message to deactivate a tunnel. */
export interface MsgDeactivate {
  /** tunnel_id is the ID of the tunnel to deactivate. */
  tunnelId: bigint;
  /** creator is the address of the creator. */
  creator: string;
}
export interface MsgDeactivateProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgDeactivate";
  value: Uint8Array;
}
/** MsgDeactivate is the transaction message to deactivate a tunnel. */
export interface MsgDeactivateAmino {
  /** tunnel_id is the ID of the tunnel to deactivate. */
  tunnel_id?: string;
  /** creator is the address of the creator. */
  creator?: string;
}
export interface MsgDeactivateAminoMsg {
  type: "tunnel/MsgDeactivate";
  value: MsgDeactivateAmino;
}
/** MsgDeactivate is the transaction message to deactivate a tunnel. */
export interface MsgDeactivateSDKType {
  tunnel_id: bigint;
  creator: string;
}
/** MsgDeactivateTunnelResponse is the response type for the Msg/Deactivate RPC method. */
export interface MsgDeactivateResponse {}
export interface MsgDeactivateResponseProtoMsg {
  typeUrl: "/band.tunnel.v1beta1.MsgDeactivateResponse";
  value: Uint8Array;
}
/** MsgDeactivateTunnelResponse is the response type for the Msg/Deactivate RPC method. */
export interface MsgDeactivateResponseAmino {}
export interface MsgDeactivateResponseAminoMsg {
  type: "/band.tunnel.v1beta1.MsgDeactivateResponse";
  value: MsgDeactivateResponseAmino;
}
/** MsgDeactivateTunnelResponse is the response type for the Msg/Deactivate RPC method. */
export interface MsgDeactivateResponseSDKType {}
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
  tunnel_id: string;
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
  tunnel_id: string;
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
    encoder: 0,
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
    if (message.encoder !== 0) {
      writer.uint32(32).int32(message.encoder);
    }
    for (const v of message.initialDeposit) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
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
          message.route = Route_InterfaceDecoder(reader) as Any;
          break;
        case 4:
          message.encoder = reader.int32() as any;
          break;
        case 5:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
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
    message.encoder = object.encoder ?? 0;
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
      message.route = Route_FromAmino(object.route);
    }
    if (object.encoder !== undefined && object.encoder !== null) {
      message.encoder = object.encoder;
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
    obj.route = message.route ? Route_ToAmino(message.route as Any) : undefined;
    obj.encoder = message.encoder === 0 ? undefined : message.encoder;
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
function createBaseMsgUpdateAndResetTunnel(): MsgUpdateAndResetTunnel {
  return {
    tunnelId: BigInt(0),
    signalDeviations: [],
    interval: BigInt(0),
    creator: ""
  };
}
export const MsgUpdateAndResetTunnel = {
  typeUrl: "/band.tunnel.v1beta1.MsgUpdateAndResetTunnel",
  encode(message: MsgUpdateAndResetTunnel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAndResetTunnel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAndResetTunnel();
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
  fromPartial(object: Partial<MsgUpdateAndResetTunnel>): MsgUpdateAndResetTunnel {
    const message = createBaseMsgUpdateAndResetTunnel();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.signalDeviations = object.signalDeviations?.map(e => SignalDeviation.fromPartial(e)) || [];
    message.interval = object.interval !== undefined && object.interval !== null ? BigInt(object.interval.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateAndResetTunnelAmino): MsgUpdateAndResetTunnel {
    const message = createBaseMsgUpdateAndResetTunnel();
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
  toAmino(message: MsgUpdateAndResetTunnel): MsgUpdateAndResetTunnelAmino {
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
  fromAminoMsg(object: MsgUpdateAndResetTunnelAminoMsg): MsgUpdateAndResetTunnel {
    return MsgUpdateAndResetTunnel.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateAndResetTunnel): MsgUpdateAndResetTunnelAminoMsg {
    return {
      type: "tunnel/MsgUpdateAndResetTunnel",
      value: MsgUpdateAndResetTunnel.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateAndResetTunnelProtoMsg): MsgUpdateAndResetTunnel {
    return MsgUpdateAndResetTunnel.decode(message.value);
  },
  toProto(message: MsgUpdateAndResetTunnel): Uint8Array {
    return MsgUpdateAndResetTunnel.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAndResetTunnel): MsgUpdateAndResetTunnelProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgUpdateAndResetTunnel",
      value: MsgUpdateAndResetTunnel.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAndResetTunnelResponse(): MsgUpdateAndResetTunnelResponse {
  return {};
}
export const MsgUpdateAndResetTunnelResponse = {
  typeUrl: "/band.tunnel.v1beta1.MsgUpdateAndResetTunnelResponse",
  encode(_: MsgUpdateAndResetTunnelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAndResetTunnelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAndResetTunnelResponse();
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
  fromPartial(_: Partial<MsgUpdateAndResetTunnelResponse>): MsgUpdateAndResetTunnelResponse {
    const message = createBaseMsgUpdateAndResetTunnelResponse();
    return message;
  },
  fromAmino(_: MsgUpdateAndResetTunnelResponseAmino): MsgUpdateAndResetTunnelResponse {
    const message = createBaseMsgUpdateAndResetTunnelResponse();
    return message;
  },
  toAmino(_: MsgUpdateAndResetTunnelResponse): MsgUpdateAndResetTunnelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAndResetTunnelResponseAminoMsg): MsgUpdateAndResetTunnelResponse {
    return MsgUpdateAndResetTunnelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAndResetTunnelResponseProtoMsg): MsgUpdateAndResetTunnelResponse {
    return MsgUpdateAndResetTunnelResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAndResetTunnelResponse): Uint8Array {
    return MsgUpdateAndResetTunnelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAndResetTunnelResponse): MsgUpdateAndResetTunnelResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgUpdateAndResetTunnelResponse",
      value: MsgUpdateAndResetTunnelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgActivate(): MsgActivate {
  return {
    tunnelId: BigInt(0),
    creator: ""
  };
}
export const MsgActivate = {
  typeUrl: "/band.tunnel.v1beta1.MsgActivate",
  encode(message: MsgActivate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgActivate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivate();
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
  fromPartial(object: Partial<MsgActivate>): MsgActivate {
    const message = createBaseMsgActivate();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgActivateAmino): MsgActivate {
    const message = createBaseMsgActivate();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgActivate): MsgActivateAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgActivateAminoMsg): MsgActivate {
    return MsgActivate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgActivate): MsgActivateAminoMsg {
    return {
      type: "tunnel/MsgActivate",
      value: MsgActivate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgActivateProtoMsg): MsgActivate {
    return MsgActivate.decode(message.value);
  },
  toProto(message: MsgActivate): Uint8Array {
    return MsgActivate.encode(message).finish();
  },
  toProtoMsg(message: MsgActivate): MsgActivateProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgActivate",
      value: MsgActivate.encode(message).finish()
    };
  }
};
function createBaseMsgActivateResponse(): MsgActivateResponse {
  return {};
}
export const MsgActivateResponse = {
  typeUrl: "/band.tunnel.v1beta1.MsgActivateResponse",
  encode(_: MsgActivateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgActivateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateResponse();
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
  fromPartial(_: Partial<MsgActivateResponse>): MsgActivateResponse {
    const message = createBaseMsgActivateResponse();
    return message;
  },
  fromAmino(_: MsgActivateResponseAmino): MsgActivateResponse {
    const message = createBaseMsgActivateResponse();
    return message;
  },
  toAmino(_: MsgActivateResponse): MsgActivateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgActivateResponseAminoMsg): MsgActivateResponse {
    return MsgActivateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgActivateResponseProtoMsg): MsgActivateResponse {
    return MsgActivateResponse.decode(message.value);
  },
  toProto(message: MsgActivateResponse): Uint8Array {
    return MsgActivateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateResponse): MsgActivateResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgActivateResponse",
      value: MsgActivateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeactivate(): MsgDeactivate {
  return {
    tunnelId: BigInt(0),
    creator: ""
  };
}
export const MsgDeactivate = {
  typeUrl: "/band.tunnel.v1beta1.MsgDeactivate",
  encode(message: MsgDeactivate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tunnelId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeactivate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivate();
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
  fromPartial(object: Partial<MsgDeactivate>): MsgDeactivate {
    const message = createBaseMsgDeactivate();
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgDeactivateAmino): MsgDeactivate {
    const message = createBaseMsgDeactivate();
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgDeactivate): MsgDeactivateAmino {
    const obj: any = {};
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgDeactivateAminoMsg): MsgDeactivate {
    return MsgDeactivate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeactivate): MsgDeactivateAminoMsg {
    return {
      type: "tunnel/MsgDeactivate",
      value: MsgDeactivate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeactivateProtoMsg): MsgDeactivate {
    return MsgDeactivate.decode(message.value);
  },
  toProto(message: MsgDeactivate): Uint8Array {
    return MsgDeactivate.encode(message).finish();
  },
  toProtoMsg(message: MsgDeactivate): MsgDeactivateProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgDeactivate",
      value: MsgDeactivate.encode(message).finish()
    };
  }
};
function createBaseMsgDeactivateResponse(): MsgDeactivateResponse {
  return {};
}
export const MsgDeactivateResponse = {
  typeUrl: "/band.tunnel.v1beta1.MsgDeactivateResponse",
  encode(_: MsgDeactivateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeactivateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateResponse();
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
  fromPartial(_: Partial<MsgDeactivateResponse>): MsgDeactivateResponse {
    const message = createBaseMsgDeactivateResponse();
    return message;
  },
  fromAmino(_: MsgDeactivateResponseAmino): MsgDeactivateResponse {
    const message = createBaseMsgDeactivateResponse();
    return message;
  },
  toAmino(_: MsgDeactivateResponse): MsgDeactivateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeactivateResponseAminoMsg): MsgDeactivateResponse {
    return MsgDeactivateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeactivateResponseProtoMsg): MsgDeactivateResponse {
    return MsgDeactivateResponse.decode(message.value);
  },
  toProto(message: MsgDeactivateResponse): Uint8Array {
    return MsgDeactivateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeactivateResponse): MsgDeactivateResponseProtoMsg {
    return {
      typeUrl: "/band.tunnel.v1beta1.MsgDeactivateResponse",
      value: MsgDeactivateResponse.encode(message).finish()
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
    obj.tunnel_id = message.tunnelId ? message.tunnelId?.toString() : "0";
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
    obj.tunnel_id = message.tunnelId ? message.tunnelId?.toString() : "0";
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
export const Route_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Route_FromAmino = (content: AnyAmino): Any => {
  return Any.fromAmino(content);
};
export const Route_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};