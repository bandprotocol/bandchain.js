// package: ibc.applications.fee.v1
// file: ibc/applications/fee/v1/fee.proto

import * as jspb from "google-protobuf";
import * as amino_amino_pb from "../../../../amino/amino_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../../cosmos/base/v1beta1/coin_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as ibc_core_channel_v1_channel_pb from "../../../../ibc/core/channel/v1/channel_pb";
import * as cosmos_msg_v1_msg_pb from "../../../../cosmos/msg/v1/msg_pb";

export class Fee extends jspb.Message {
  clearRecvFeeList(): void;
  getRecvFeeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setRecvFeeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addRecvFee(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  clearAckFeeList(): void;
  getAckFeeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAckFeeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAckFee(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  clearTimeoutFeeList(): void;
  getTimeoutFeeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setTimeoutFeeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addTimeoutFee(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fee.AsObject;
  static toObject(includeInstance: boolean, msg: Fee): Fee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Fee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fee;
  static deserializeBinaryFromReader(message: Fee, reader: jspb.BinaryReader): Fee;
}

export namespace Fee {
  export type AsObject = {
    recvFeeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    ackFeeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    timeoutFeeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class PacketFee extends jspb.Message {
  hasFee(): boolean;
  clearFee(): void;
  getFee(): Fee | undefined;
  setFee(value?: Fee): void;

  getRefundAddress(): string;
  setRefundAddress(value: string): void;

  clearRelayersList(): void;
  getRelayersList(): Array<string>;
  setRelayersList(value: Array<string>): void;
  addRelayers(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacketFee.AsObject;
  static toObject(includeInstance: boolean, msg: PacketFee): PacketFee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PacketFee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacketFee;
  static deserializeBinaryFromReader(message: PacketFee, reader: jspb.BinaryReader): PacketFee;
}

export namespace PacketFee {
  export type AsObject = {
    fee?: Fee.AsObject,
    refundAddress: string,
    relayersList: Array<string>,
  }
}

export class PacketFees extends jspb.Message {
  clearPacketFeesList(): void;
  getPacketFeesList(): Array<PacketFee>;
  setPacketFeesList(value: Array<PacketFee>): void;
  addPacketFees(value?: PacketFee, index?: number): PacketFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacketFees.AsObject;
  static toObject(includeInstance: boolean, msg: PacketFees): PacketFees.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PacketFees, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacketFees;
  static deserializeBinaryFromReader(message: PacketFees, reader: jspb.BinaryReader): PacketFees;
}

export namespace PacketFees {
  export type AsObject = {
    packetFeesList: Array<PacketFee.AsObject>,
  }
}

export class IdentifiedPacketFees extends jspb.Message {
  hasPacketId(): boolean;
  clearPacketId(): void;
  getPacketId(): ibc_core_channel_v1_channel_pb.PacketId | undefined;
  setPacketId(value?: ibc_core_channel_v1_channel_pb.PacketId): void;

  clearPacketFeesList(): void;
  getPacketFeesList(): Array<PacketFee>;
  setPacketFeesList(value: Array<PacketFee>): void;
  addPacketFees(value?: PacketFee, index?: number): PacketFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifiedPacketFees.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifiedPacketFees): IdentifiedPacketFees.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentifiedPacketFees, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifiedPacketFees;
  static deserializeBinaryFromReader(message: IdentifiedPacketFees, reader: jspb.BinaryReader): IdentifiedPacketFees;
}

export namespace IdentifiedPacketFees {
  export type AsObject = {
    packetId?: ibc_core_channel_v1_channel_pb.PacketId.AsObject,
    packetFeesList: Array<PacketFee.AsObject>,
  }
}

