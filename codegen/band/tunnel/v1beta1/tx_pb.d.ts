// package: band.tunnel.v1beta1
// file: band/tunnel/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";
import * as band_tunnel_v1beta1_params_pb from "../../../band/tunnel/v1beta1/params_pb";
import * as band_tunnel_v1beta1_tunnel_pb from "../../../band/tunnel/v1beta1/tunnel_pb";

export class MsgCreateTunnel extends jspb.Message {
  clearSignalDeviationsList(): void;
  getSignalDeviationsList(): Array<band_tunnel_v1beta1_tunnel_pb.SignalDeviation>;
  setSignalDeviationsList(value: Array<band_tunnel_v1beta1_tunnel_pb.SignalDeviation>): void;
  addSignalDeviations(value?: band_tunnel_v1beta1_tunnel_pb.SignalDeviation, index?: number): band_tunnel_v1beta1_tunnel_pb.SignalDeviation;

  getInterval(): number;
  setInterval(value: number): void;

  hasRoute(): boolean;
  clearRoute(): void;
  getRoute(): google_protobuf_any_pb.Any | undefined;
  setRoute(value?: google_protobuf_any_pb.Any): void;

  clearInitialDepositList(): void;
  getInitialDepositList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setInitialDepositList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addInitialDeposit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getCreator(): string;
  setCreator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateTunnel.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateTunnel): MsgCreateTunnel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateTunnel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateTunnel;
  static deserializeBinaryFromReader(message: MsgCreateTunnel, reader: jspb.BinaryReader): MsgCreateTunnel;
}

export namespace MsgCreateTunnel {
  export type AsObject = {
    signalDeviationsList: Array<band_tunnel_v1beta1_tunnel_pb.SignalDeviation.AsObject>,
    interval: number,
    route?: google_protobuf_any_pb.Any.AsObject,
    initialDepositList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    creator: string,
  }
}

export class MsgCreateTunnelResponse extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateTunnelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateTunnelResponse): MsgCreateTunnelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateTunnelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateTunnelResponse;
  static deserializeBinaryFromReader(message: MsgCreateTunnelResponse, reader: jspb.BinaryReader): MsgCreateTunnelResponse;
}

export namespace MsgCreateTunnelResponse {
  export type AsObject = {
    tunnelId: number,
  }
}

export class MsgUpdateAndResetTunnel extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  clearSignalDeviationsList(): void;
  getSignalDeviationsList(): Array<band_tunnel_v1beta1_tunnel_pb.SignalDeviation>;
  setSignalDeviationsList(value: Array<band_tunnel_v1beta1_tunnel_pb.SignalDeviation>): void;
  addSignalDeviations(value?: band_tunnel_v1beta1_tunnel_pb.SignalDeviation, index?: number): band_tunnel_v1beta1_tunnel_pb.SignalDeviation;

  getInterval(): number;
  setInterval(value: number): void;

  getCreator(): string;
  setCreator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateAndResetTunnel.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateAndResetTunnel): MsgUpdateAndResetTunnel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateAndResetTunnel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateAndResetTunnel;
  static deserializeBinaryFromReader(message: MsgUpdateAndResetTunnel, reader: jspb.BinaryReader): MsgUpdateAndResetTunnel;
}

export namespace MsgUpdateAndResetTunnel {
  export type AsObject = {
    tunnelId: number,
    signalDeviationsList: Array<band_tunnel_v1beta1_tunnel_pb.SignalDeviation.AsObject>,
    interval: number,
    creator: string,
  }
}

export class MsgUpdateAndResetTunnelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateAndResetTunnelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateAndResetTunnelResponse): MsgUpdateAndResetTunnelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateAndResetTunnelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateAndResetTunnelResponse;
  static deserializeBinaryFromReader(message: MsgUpdateAndResetTunnelResponse, reader: jspb.BinaryReader): MsgUpdateAndResetTunnelResponse;
}

export namespace MsgUpdateAndResetTunnelResponse {
  export type AsObject = {
  }
}

export class MsgActivate extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  getCreator(): string;
  setCreator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgActivate.AsObject;
  static toObject(includeInstance: boolean, msg: MsgActivate): MsgActivate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgActivate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgActivate;
  static deserializeBinaryFromReader(message: MsgActivate, reader: jspb.BinaryReader): MsgActivate;
}

export namespace MsgActivate {
  export type AsObject = {
    tunnelId: number,
    creator: string,
  }
}

export class MsgActivateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgActivateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgActivateResponse): MsgActivateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgActivateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgActivateResponse;
  static deserializeBinaryFromReader(message: MsgActivateResponse, reader: jspb.BinaryReader): MsgActivateResponse;
}

export namespace MsgActivateResponse {
  export type AsObject = {
  }
}

export class MsgDeactivate extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  getCreator(): string;
  setCreator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDeactivate.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDeactivate): MsgDeactivate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgDeactivate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDeactivate;
  static deserializeBinaryFromReader(message: MsgDeactivate, reader: jspb.BinaryReader): MsgDeactivate;
}

export namespace MsgDeactivate {
  export type AsObject = {
    tunnelId: number,
    creator: string,
  }
}

export class MsgDeactivateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDeactivateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDeactivateResponse): MsgDeactivateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgDeactivateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDeactivateResponse;
  static deserializeBinaryFromReader(message: MsgDeactivateResponse, reader: jspb.BinaryReader): MsgDeactivateResponse;
}

export namespace MsgDeactivateResponse {
  export type AsObject = {
  }
}

export class MsgTriggerTunnel extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  getCreator(): string;
  setCreator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTriggerTunnel.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTriggerTunnel): MsgTriggerTunnel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgTriggerTunnel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTriggerTunnel;
  static deserializeBinaryFromReader(message: MsgTriggerTunnel, reader: jspb.BinaryReader): MsgTriggerTunnel;
}

export namespace MsgTriggerTunnel {
  export type AsObject = {
    tunnelId: number,
    creator: string,
  }
}

export class MsgTriggerTunnelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTriggerTunnelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTriggerTunnelResponse): MsgTriggerTunnelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgTriggerTunnelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTriggerTunnelResponse;
  static deserializeBinaryFromReader(message: MsgTriggerTunnelResponse, reader: jspb.BinaryReader): MsgTriggerTunnelResponse;
}

export namespace MsgTriggerTunnelResponse {
  export type AsObject = {
  }
}

export class MsgDepositToTunnel extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getDepositor(): string;
  setDepositor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDepositToTunnel.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDepositToTunnel): MsgDepositToTunnel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgDepositToTunnel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDepositToTunnel;
  static deserializeBinaryFromReader(message: MsgDepositToTunnel, reader: jspb.BinaryReader): MsgDepositToTunnel;
}

export namespace MsgDepositToTunnel {
  export type AsObject = {
    tunnelId: number,
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    depositor: string,
  }
}

export class MsgDepositToTunnelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDepositToTunnelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDepositToTunnelResponse): MsgDepositToTunnelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgDepositToTunnelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDepositToTunnelResponse;
  static deserializeBinaryFromReader(message: MsgDepositToTunnelResponse, reader: jspb.BinaryReader): MsgDepositToTunnelResponse;
}

export namespace MsgDepositToTunnelResponse {
  export type AsObject = {
  }
}

export class MsgWithdrawFromTunnel extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getWithdrawer(): string;
  setWithdrawer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgWithdrawFromTunnel.AsObject;
  static toObject(includeInstance: boolean, msg: MsgWithdrawFromTunnel): MsgWithdrawFromTunnel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgWithdrawFromTunnel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgWithdrawFromTunnel;
  static deserializeBinaryFromReader(message: MsgWithdrawFromTunnel, reader: jspb.BinaryReader): MsgWithdrawFromTunnel;
}

export namespace MsgWithdrawFromTunnel {
  export type AsObject = {
    tunnelId: number,
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    withdrawer: string,
  }
}

export class MsgWithdrawFromTunnelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgWithdrawFromTunnelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgWithdrawFromTunnelResponse): MsgWithdrawFromTunnelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgWithdrawFromTunnelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgWithdrawFromTunnelResponse;
  static deserializeBinaryFromReader(message: MsgWithdrawFromTunnelResponse, reader: jspb.BinaryReader): MsgWithdrawFromTunnelResponse;
}

export namespace MsgWithdrawFromTunnelResponse {
  export type AsObject = {
  }
}

export class MsgUpdateParams extends jspb.Message {
  getAuthority(): string;
  setAuthority(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): band_tunnel_v1beta1_params_pb.Params | undefined;
  setParams(value?: band_tunnel_v1beta1_params_pb.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateParams.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateParams): MsgUpdateParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateParams;
  static deserializeBinaryFromReader(message: MsgUpdateParams, reader: jspb.BinaryReader): MsgUpdateParams;
}

export namespace MsgUpdateParams {
  export type AsObject = {
    authority: string,
    params?: band_tunnel_v1beta1_params_pb.Params.AsObject,
  }
}

export class MsgUpdateParamsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateParamsResponse): MsgUpdateParamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateParamsResponse;
  static deserializeBinaryFromReader(message: MsgUpdateParamsResponse, reader: jspb.BinaryReader): MsgUpdateParamsResponse;
}

export namespace MsgUpdateParamsResponse {
  export type AsObject = {
  }
}

