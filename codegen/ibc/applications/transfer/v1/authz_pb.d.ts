// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/authz.proto

import * as jspb from "google-protobuf";
import * as cosmos_proto_cosmos_pb from "../../../../cosmos_proto/cosmos_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../../cosmos/base/v1beta1/coin_pb";

export class Allocation extends jspb.Message {
  getSourcePort(): string;
  setSourcePort(value: string): void;

  getSourceChannel(): string;
  setSourceChannel(value: string): void;

  clearSpendLimitList(): void;
  getSpendLimitList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setSpendLimitList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addSpendLimit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  clearAllowListList(): void;
  getAllowListList(): Array<string>;
  setAllowListList(value: Array<string>): void;
  addAllowList(value: string, index?: number): string;

  clearAllowedPacketDataList(): void;
  getAllowedPacketDataList(): Array<string>;
  setAllowedPacketDataList(value: Array<string>): void;
  addAllowedPacketData(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Allocation.AsObject;
  static toObject(includeInstance: boolean, msg: Allocation): Allocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Allocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Allocation;
  static deserializeBinaryFromReader(message: Allocation, reader: jspb.BinaryReader): Allocation;
}

export namespace Allocation {
  export type AsObject = {
    sourcePort: string,
    sourceChannel: string,
    spendLimitList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    allowListList: Array<string>,
    allowedPacketDataList: Array<string>,
  }
}

export class TransferAuthorization extends jspb.Message {
  clearAllocationsList(): void;
  getAllocationsList(): Array<Allocation>;
  setAllocationsList(value: Array<Allocation>): void;
  addAllocations(value?: Allocation, index?: number): Allocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferAuthorization.AsObject;
  static toObject(includeInstance: boolean, msg: TransferAuthorization): TransferAuthorization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferAuthorization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferAuthorization;
  static deserializeBinaryFromReader(message: TransferAuthorization, reader: jspb.BinaryReader): TransferAuthorization;
}

export namespace TransferAuthorization {
  export type AsObject = {
    allocationsList: Array<Allocation.AsObject>,
  }
}

