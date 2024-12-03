// package: ibc.applications.interchain_accounts.v1
// file: ibc/applications/interchain_accounts/v1/packet.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";

export class InterchainAccountPacketData extends jspb.Message {
  getType(): TypeMap[keyof TypeMap];
  setType(value: TypeMap[keyof TypeMap]): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getMemo(): string;
  setMemo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterchainAccountPacketData.AsObject;
  static toObject(includeInstance: boolean, msg: InterchainAccountPacketData): InterchainAccountPacketData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InterchainAccountPacketData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterchainAccountPacketData;
  static deserializeBinaryFromReader(message: InterchainAccountPacketData, reader: jspb.BinaryReader): InterchainAccountPacketData;
}

export namespace InterchainAccountPacketData {
  export type AsObject = {
    type: TypeMap[keyof TypeMap],
    data: Uint8Array | string,
    memo: string,
  }
}

export class CosmosTx extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<google_protobuf_any_pb.Any>;
  setMessagesList(value: Array<google_protobuf_any_pb.Any>): void;
  addMessages(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CosmosTx.AsObject;
  static toObject(includeInstance: boolean, msg: CosmosTx): CosmosTx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CosmosTx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CosmosTx;
  static deserializeBinaryFromReader(message: CosmosTx, reader: jspb.BinaryReader): CosmosTx;
}

export namespace CosmosTx {
  export type AsObject = {
    messagesList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

export interface TypeMap {
  TYPE_UNSPECIFIED: 0;
  TYPE_EXECUTE_TX: 1;
}

export const Type: TypeMap;

