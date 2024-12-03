// package: band.tunnel.v1beta1
// file: band/tunnel/v1beta1/route.proto

import * as jspb from "google-protobuf";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as band_feeds_v1beta1_encoder_pb from "../../../band/feeds/v1beta1/encoder_pb";
import * as band_feeds_v1beta1_feeds_pb from "../../../band/feeds/v1beta1/feeds_pb";

export class TSSRoute extends jspb.Message {
  getDestinationChainId(): string;
  setDestinationChainId(value: string): void;

  getDestinationContractAddress(): string;
  setDestinationContractAddress(value: string): void;

  getEncoder(): band_feeds_v1beta1_encoder_pb.EncoderMap[keyof band_feeds_v1beta1_encoder_pb.EncoderMap];
  setEncoder(value: band_feeds_v1beta1_encoder_pb.EncoderMap[keyof band_feeds_v1beta1_encoder_pb.EncoderMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TSSRoute.AsObject;
  static toObject(includeInstance: boolean, msg: TSSRoute): TSSRoute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TSSRoute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TSSRoute;
  static deserializeBinaryFromReader(message: TSSRoute, reader: jspb.BinaryReader): TSSRoute;
}

export namespace TSSRoute {
  export type AsObject = {
    destinationChainId: string,
    destinationContractAddress: string,
    encoder: band_feeds_v1beta1_encoder_pb.EncoderMap[keyof band_feeds_v1beta1_encoder_pb.EncoderMap],
  }
}

export class TSSPacketReceipt extends jspb.Message {
  getSigningId(): number;
  setSigningId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TSSPacketReceipt.AsObject;
  static toObject(includeInstance: boolean, msg: TSSPacketReceipt): TSSPacketReceipt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TSSPacketReceipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TSSPacketReceipt;
  static deserializeBinaryFromReader(message: TSSPacketReceipt, reader: jspb.BinaryReader): TSSPacketReceipt;
}

export namespace TSSPacketReceipt {
  export type AsObject = {
    signingId: number,
  }
}

export class IBCRoute extends jspb.Message {
  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IBCRoute.AsObject;
  static toObject(includeInstance: boolean, msg: IBCRoute): IBCRoute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IBCRoute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IBCRoute;
  static deserializeBinaryFromReader(message: IBCRoute, reader: jspb.BinaryReader): IBCRoute;
}

export namespace IBCRoute {
  export type AsObject = {
    channelId: string,
  }
}

export class IBCPacketReceipt extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IBCPacketReceipt.AsObject;
  static toObject(includeInstance: boolean, msg: IBCPacketReceipt): IBCPacketReceipt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IBCPacketReceipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IBCPacketReceipt;
  static deserializeBinaryFromReader(message: IBCPacketReceipt, reader: jspb.BinaryReader): IBCPacketReceipt;
}

export namespace IBCPacketReceipt {
  export type AsObject = {
    sequence: number,
  }
}

export class TunnelPricesPacketData extends jspb.Message {
  getTunnelId(): number;
  setTunnelId(value: number): void;

  getSequence(): number;
  setSequence(value: number): void;

  clearPricesList(): void;
  getPricesList(): Array<band_feeds_v1beta1_feeds_pb.Price>;
  setPricesList(value: Array<band_feeds_v1beta1_feeds_pb.Price>): void;
  addPrices(value?: band_feeds_v1beta1_feeds_pb.Price, index?: number): band_feeds_v1beta1_feeds_pb.Price;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TunnelPricesPacketData.AsObject;
  static toObject(includeInstance: boolean, msg: TunnelPricesPacketData): TunnelPricesPacketData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TunnelPricesPacketData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TunnelPricesPacketData;
  static deserializeBinaryFromReader(message: TunnelPricesPacketData, reader: jspb.BinaryReader): TunnelPricesPacketData;
}

export namespace TunnelPricesPacketData {
  export type AsObject = {
    tunnelId: number,
    sequence: number,
    pricesList: Array<band_feeds_v1beta1_feeds_pb.Price.AsObject>,
    createdAt: number,
  }
}

