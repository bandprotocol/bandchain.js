// package: band.tunnel.v1beta1
// file: band/tunnel/v1beta1/tunnel.proto

import * as jspb from "google-protobuf";
import * as amino_amino_pb from "../../../amino/amino_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as band_feeds_v1beta1_encoder_pb from "../../../band/feeds/v1beta1/encoder_pb";
import * as band_feeds_v1beta1_feeds_pb from "../../../band/feeds/v1beta1/feeds_pb";

export class Tunnel extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getSequence(): number;
  setSequence(value: number): void;

  hasRoute(): boolean;
  clearRoute(): void;
  getRoute(): google_protobuf_any_pb.Any | undefined;
  setRoute(value?: google_protobuf_any_pb.Any): void;

  getFeePayer(): string;
  setFeePayer(value: string): void;

  clearSignalDeviationsList(): void;
  getSignalDeviationsList(): Array<SignalDeviation>;
  setSignalDeviationsList(value: Array<SignalDeviation>): void;
  addSignalDeviations(value?: SignalDeviation, index?: number): SignalDeviation;

  getInterval(): number;
  setInterval(value: number): void;

  clearTotalDepositList(): void;
  getTotalDepositList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setTotalDepositList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addTotalDeposit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  getCreator(): string;
  setCreator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tunnel.AsObject;
  static toObject(includeInstance: boolean, msg: Tunnel): Tunnel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tunnel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tunnel;
  static deserializeBinaryFromReader(message: Tunnel, reader: jspb.BinaryReader): Tunnel;
}

export namespace Tunnel {
  export type AsObject = {
    id: number,
    sequence: number,
    route?: google_protobuf_any_pb.Any.AsObject,
    feePayer: string,
    signalDeviationsList: Array<SignalDeviation.AsObject>,
    interval: number,
    totalDepositList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    isActive: boolean,
    createdAt: number,
    creator: string,
  }
}

export class LatestPrices extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  clearPricesList(): void;
  getPricesList(): Array<band_feeds_v1beta1_feeds_pb.Price>;
  setPricesList(value: Array<band_feeds_v1beta1_feeds_pb.Price>): void;
  addPrices(value?: band_feeds_v1beta1_feeds_pb.Price, index?: number): band_feeds_v1beta1_feeds_pb.Price;

  getLastInterval(): number;
  setLastInterval(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LatestPrices.AsObject;
  static toObject(includeInstance: boolean, msg: LatestPrices): LatestPrices.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LatestPrices, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LatestPrices;
  static deserializeBinaryFromReader(message: LatestPrices, reader: jspb.BinaryReader): LatestPrices;
}

export namespace LatestPrices {
  export type AsObject = {
    tunnelId: number,
    pricesList: Array<band_feeds_v1beta1_feeds_pb.Price.AsObject>,
    lastInterval: number,
  }
}

export class TotalFees extends jspb.Message {
  clearTotalBasePacketFeeList(): void;
  getTotalBasePacketFeeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setTotalBasePacketFeeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addTotalBasePacketFee(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TotalFees.AsObject;
  static toObject(includeInstance: boolean, msg: TotalFees): TotalFees.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TotalFees, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TotalFees;
  static deserializeBinaryFromReader(message: TotalFees, reader: jspb.BinaryReader): TotalFees;
}

export namespace TotalFees {
  export type AsObject = {
    totalBasePacketFeeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class Packet extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  getSequence(): number;
  setSequence(value: number): void;

  clearPricesList(): void;
  getPricesList(): Array<band_feeds_v1beta1_feeds_pb.Price>;
  setPricesList(value: Array<band_feeds_v1beta1_feeds_pb.Price>): void;
  addPrices(value?: band_feeds_v1beta1_feeds_pb.Price, index?: number): band_feeds_v1beta1_feeds_pb.Price;

  hasReceipt(): boolean;
  clearReceipt(): void;
  getReceipt(): google_protobuf_any_pb.Any | undefined;
  setReceipt(value?: google_protobuf_any_pb.Any): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Packet.AsObject;
  static toObject(includeInstance: boolean, msg: Packet): Packet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Packet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Packet;
  static deserializeBinaryFromReader(message: Packet, reader: jspb.BinaryReader): Packet;
}

export namespace Packet {
  export type AsObject = {
    tunnelId: number,
    sequence: number,
    pricesList: Array<band_feeds_v1beta1_feeds_pb.Price.AsObject>,
    receipt?: google_protobuf_any_pb.Any.AsObject,
    createdAt: number,
  }
}

export class Deposit extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  getDepositor(): string;
  setDepositor(value: string): void;

  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deposit.AsObject;
  static toObject(includeInstance: boolean, msg: Deposit): Deposit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Deposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deposit;
  static deserializeBinaryFromReader(message: Deposit, reader: jspb.BinaryReader): Deposit;
}

export namespace Deposit {
  export type AsObject = {
    tunnelId: number,
    depositor: string,
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class SignalDeviation extends jspb.Message {
  getSignalId(): string;
  setSignalId(value: string): void;

  getSoftDeviationBps(): number;
  setSoftDeviationBps(value: number): void;

  getHardDeviationBps(): number;
  setHardDeviationBps(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignalDeviation.AsObject;
  static toObject(includeInstance: boolean, msg: SignalDeviation): SignalDeviation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignalDeviation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignalDeviation;
  static deserializeBinaryFromReader(message: SignalDeviation, reader: jspb.BinaryReader): SignalDeviation;
}

export namespace SignalDeviation {
  export type AsObject = {
    signalId: string,
    softDeviationBps: number,
    hardDeviationBps: number,
  }
}

export class TunnelSignatureOrder extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): void;

  clearPricesList(): void;
  getPricesList(): Array<band_feeds_v1beta1_feeds_pb.Price>;
  setPricesList(value: Array<band_feeds_v1beta1_feeds_pb.Price>): void;
  addPrices(value?: band_feeds_v1beta1_feeds_pb.Price, index?: number): band_feeds_v1beta1_feeds_pb.Price;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  getEncoder(): band_feeds_v1beta1_encoder_pb.EncoderMap[keyof band_feeds_v1beta1_encoder_pb.EncoderMap];
  setEncoder(value: band_feeds_v1beta1_encoder_pb.EncoderMap[keyof band_feeds_v1beta1_encoder_pb.EncoderMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TunnelSignatureOrder.AsObject;
  static toObject(includeInstance: boolean, msg: TunnelSignatureOrder): TunnelSignatureOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TunnelSignatureOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TunnelSignatureOrder;
  static deserializeBinaryFromReader(message: TunnelSignatureOrder, reader: jspb.BinaryReader): TunnelSignatureOrder;
}

export namespace TunnelSignatureOrder {
  export type AsObject = {
    sequence: number,
    pricesList: Array<band_feeds_v1beta1_feeds_pb.Price.AsObject>,
    createdAt: number,
    encoder: band_feeds_v1beta1_encoder_pb.EncoderMap[keyof band_feeds_v1beta1_encoder_pb.EncoderMap],
  }
}

