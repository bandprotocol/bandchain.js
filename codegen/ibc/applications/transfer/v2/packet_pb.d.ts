// package: ibc.applications.transfer.v2
// file: ibc/applications/transfer/v2/packet.proto

import * as jspb from "google-protobuf";

export class FungibleTokenPacketData extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getSender(): string;
  setSender(value: string): void;

  getReceiver(): string;
  setReceiver(value: string): void;

  getMemo(): string;
  setMemo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FungibleTokenPacketData.AsObject;
  static toObject(includeInstance: boolean, msg: FungibleTokenPacketData): FungibleTokenPacketData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FungibleTokenPacketData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FungibleTokenPacketData;
  static deserializeBinaryFromReader(message: FungibleTokenPacketData, reader: jspb.BinaryReader): FungibleTokenPacketData;
}

export namespace FungibleTokenPacketData {
  export type AsObject = {
    denom: string,
    amount: string,
    sender: string,
    receiver: string,
    memo: string,
  }
}

