// package: band.tunnel.v1beta1
// file: band/tunnel/v1beta1/params.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class Params extends jspb.Message {
  clearMinDepositList(): void;
  getMinDepositList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setMinDepositList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addMinDeposit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getMinInterval(): number;
  setMinInterval(value: number): void;

  getMaxInterval(): number;
  setMaxInterval(value: number): void;

  getMinDeviationBps(): number;
  setMinDeviationBps(value: number): void;

  getMaxDeviationBps(): number;
  setMaxDeviationBps(value: number): void;

  getMaxSignals(): number;
  setMaxSignals(value: number): void;

  clearBasePacketFeeList(): void;
  getBasePacketFeeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setBasePacketFeeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addBasePacketFee(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    minDepositList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    minInterval: number,
    maxInterval: number,
    minDeviationBps: number,
    maxDeviationBps: number,
    maxSignals: number,
    basePacketFeeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

