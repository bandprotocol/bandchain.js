// package: band.tss.v1beta1
// file: band/tss/v1beta1/originator.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";

export class DirectOriginator extends jspb.Message {
  getSourceChainId(): string;
  setSourceChainId(value: string): void;

  getRequester(): string;
  setRequester(value: string): void;

  getMemo(): string;
  setMemo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectOriginator.AsObject;
  static toObject(includeInstance: boolean, msg: DirectOriginator): DirectOriginator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DirectOriginator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectOriginator;
  static deserializeBinaryFromReader(message: DirectOriginator, reader: jspb.BinaryReader): DirectOriginator;
}

export namespace DirectOriginator {
  export type AsObject = {
    sourceChainId: string,
    requester: string,
    memo: string,
  }
}

export class TunnelOriginator extends jspb.Message {
  getSourceChainId(): string;
  setSourceChainId(value: string): void;

  getTunnelId(): number;
  setTunnelId(value: number): void;

  getContractAddress(): string;
  setContractAddress(value: string): void;

  getTargetChainId(): string;
  setTargetChainId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TunnelOriginator.AsObject;
  static toObject(includeInstance: boolean, msg: TunnelOriginator): TunnelOriginator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TunnelOriginator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TunnelOriginator;
  static deserializeBinaryFromReader(message: TunnelOriginator, reader: jspb.BinaryReader): TunnelOriginator;
}

export namespace TunnelOriginator {
  export type AsObject = {
    sourceChainId: string,
    tunnelId: number,
    contractAddress: string,
    targetChainId: string,
  }
}

