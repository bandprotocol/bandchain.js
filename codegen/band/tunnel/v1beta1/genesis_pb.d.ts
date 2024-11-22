// package: band.tunnel.v1beta1
// file: band/tunnel/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as band_tunnel_v1beta1_params_pb from "../../../band/tunnel/v1beta1/params_pb";
import * as band_tunnel_v1beta1_tunnel_pb from "../../../band/tunnel/v1beta1/tunnel_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): band_tunnel_v1beta1_params_pb.Params | undefined;
  setParams(value?: band_tunnel_v1beta1_params_pb.Params): void;

  getTunnelCount(): number;
  setTunnelCount(value: number): void;

  clearTunnelsList(): void;
  getTunnelsList(): Array<band_tunnel_v1beta1_tunnel_pb.Tunnel>;
  setTunnelsList(value: Array<band_tunnel_v1beta1_tunnel_pb.Tunnel>): void;
  addTunnels(value?: band_tunnel_v1beta1_tunnel_pb.Tunnel, index?: number): band_tunnel_v1beta1_tunnel_pb.Tunnel;

  clearDepositsList(): void;
  getDepositsList(): Array<band_tunnel_v1beta1_tunnel_pb.Deposit>;
  setDepositsList(value: Array<band_tunnel_v1beta1_tunnel_pb.Deposit>): void;
  addDeposits(value?: band_tunnel_v1beta1_tunnel_pb.Deposit, index?: number): band_tunnel_v1beta1_tunnel_pb.Deposit;

  hasTotalFees(): boolean;
  clearTotalFees(): void;
  getTotalFees(): band_tunnel_v1beta1_tunnel_pb.TotalFees | undefined;
  setTotalFees(value?: band_tunnel_v1beta1_tunnel_pb.TotalFees): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    params?: band_tunnel_v1beta1_params_pb.Params.AsObject,
    tunnelCount: number,
    tunnelsList: Array<band_tunnel_v1beta1_tunnel_pb.Tunnel.AsObject>,
    depositsList: Array<band_tunnel_v1beta1_tunnel_pb.Deposit.AsObject>,
    totalFees?: band_tunnel_v1beta1_tunnel_pb.TotalFees.AsObject,
  }
}

