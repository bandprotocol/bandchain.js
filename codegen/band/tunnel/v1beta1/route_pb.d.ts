// package: band.tunnel.v1beta1
// file: band/tunnel/v1beta1/route.proto

import * as jspb from "google-protobuf";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class TSSRoute extends jspb.Message {
  getDestinationChainId(): string;
  setDestinationChainId(value: string): void;

  getDestinationContractAddress(): string;
  setDestinationContractAddress(value: string): void;

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

