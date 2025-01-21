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

export class MsgUpdateRoute extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  hasRoute(): boolean;
  clearRoute(): void;
  getRoute(): google_protobuf_any_pb.Any | undefined;
  setRoute(value?: google_protobuf_any_pb.Any): void;

  getCreator(): string;
  setCreator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateRoute.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateRoute): MsgUpdateRoute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateRoute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateRoute;
  static deserializeBinaryFromReader(message: MsgUpdateRoute, reader: jspb.BinaryReader): MsgUpdateRoute;
}

export namespace MsgUpdateRoute {
  export type AsObject = {
    tunnelId: number,
    route?: google_protobuf_any_pb.Any.AsObject,
    creator: string,
  }
}

export class MsgUpdateRouteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateRouteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateRouteResponse): MsgUpdateRouteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateRouteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateRouteResponse;
  static deserializeBinaryFromReader(message: MsgUpdateRouteResponse, reader: jspb.BinaryReader): MsgUpdateRouteResponse;
}

export namespace MsgUpdateRouteResponse {
  export type AsObject = {
  }
}

export class MsgUpdateSignalsAndInterval extends jspb.Message {
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
  toObject(includeInstance?: boolean): MsgUpdateSignalsAndInterval.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateSignalsAndInterval): MsgUpdateSignalsAndInterval.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateSignalsAndInterval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateSignalsAndInterval;
  static deserializeBinaryFromReader(message: MsgUpdateSignalsAndInterval, reader: jspb.BinaryReader): MsgUpdateSignalsAndInterval;
}

export namespace MsgUpdateSignalsAndInterval {
  export type AsObject = {
    tunnelId: number,
    signalDeviationsList: Array<band_tunnel_v1beta1_tunnel_pb.SignalDeviation.AsObject>,
    interval: number,
    creator: string,
  }
}

export class MsgUpdateSignalsAndIntervalResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateSignalsAndIntervalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateSignalsAndIntervalResponse): MsgUpdateSignalsAndIntervalResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateSignalsAndIntervalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateSignalsAndIntervalResponse;
  static deserializeBinaryFromReader(message: MsgUpdateSignalsAndIntervalResponse, reader: jspb.BinaryReader): MsgUpdateSignalsAndIntervalResponse;
}

export namespace MsgUpdateSignalsAndIntervalResponse {
  export type AsObject = {
  }
}

export class MsgWithdrawFeePayerFunds extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getCreator(): string;
  setCreator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgWithdrawFeePayerFunds.AsObject;
  static toObject(includeInstance: boolean, msg: MsgWithdrawFeePayerFunds): MsgWithdrawFeePayerFunds.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgWithdrawFeePayerFunds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgWithdrawFeePayerFunds;
  static deserializeBinaryFromReader(message: MsgWithdrawFeePayerFunds, reader: jspb.BinaryReader): MsgWithdrawFeePayerFunds;
}

export namespace MsgWithdrawFeePayerFunds {
  export type AsObject = {
    tunnelId: number,
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    creator: string,
  }
}

export class MsgWithdrawFeePayerFundsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgWithdrawFeePayerFundsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgWithdrawFeePayerFundsResponse): MsgWithdrawFeePayerFundsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgWithdrawFeePayerFundsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgWithdrawFeePayerFundsResponse;
  static deserializeBinaryFromReader(message: MsgWithdrawFeePayerFundsResponse, reader: jspb.BinaryReader): MsgWithdrawFeePayerFundsResponse;
}

export namespace MsgWithdrawFeePayerFundsResponse {
  export type AsObject = {
  }
}

export class MsgActivateTunnel extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  getCreator(): string;
  setCreator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgActivateTunnel.AsObject;
  static toObject(includeInstance: boolean, msg: MsgActivateTunnel): MsgActivateTunnel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgActivateTunnel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgActivateTunnel;
  static deserializeBinaryFromReader(message: MsgActivateTunnel, reader: jspb.BinaryReader): MsgActivateTunnel;
}

export namespace MsgActivateTunnel {
  export type AsObject = {
    tunnelId: number,
    creator: string,
  }
}

export class MsgActivateTunnelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgActivateTunnelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgActivateTunnelResponse): MsgActivateTunnelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgActivateTunnelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgActivateTunnelResponse;
  static deserializeBinaryFromReader(message: MsgActivateTunnelResponse, reader: jspb.BinaryReader): MsgActivateTunnelResponse;
}

export namespace MsgActivateTunnelResponse {
  export type AsObject = {
  }
}

export class MsgDeactivateTunnel extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  getCreator(): string;
  setCreator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDeactivateTunnel.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDeactivateTunnel): MsgDeactivateTunnel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgDeactivateTunnel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDeactivateTunnel;
  static deserializeBinaryFromReader(message: MsgDeactivateTunnel, reader: jspb.BinaryReader): MsgDeactivateTunnel;
}

export namespace MsgDeactivateTunnel {
  export type AsObject = {
    tunnelId: number,
    creator: string,
  }
}

export class MsgDeactivateTunnelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDeactivateTunnelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDeactivateTunnelResponse): MsgDeactivateTunnelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgDeactivateTunnelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDeactivateTunnelResponse;
  static deserializeBinaryFromReader(message: MsgDeactivateTunnelResponse, reader: jspb.BinaryReader): MsgDeactivateTunnelResponse;
}

export namespace MsgDeactivateTunnelResponse {
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

