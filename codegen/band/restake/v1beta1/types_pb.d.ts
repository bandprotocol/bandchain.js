// package: band.restake.v1beta1
// file: band/restake/v1beta1/types.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class Vault extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vault.AsObject;
  static toObject(includeInstance: boolean, msg: Vault): Vault.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vault, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vault;
  static deserializeBinaryFromReader(message: Vault, reader: jspb.BinaryReader): Vault;
}

export namespace Vault {
  export type AsObject = {
    key: string,
    isActive: boolean,
  }
}

export class Lock extends jspb.Message {
  getStakerAddress(): string;
  setStakerAddress(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getPower(): string;
  setPower(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Lock.AsObject;
  static toObject(includeInstance: boolean, msg: Lock): Lock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Lock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Lock;
  static deserializeBinaryFromReader(message: Lock, reader: jspb.BinaryReader): Lock;
}

export namespace Lock {
  export type AsObject = {
    stakerAddress: string,
    key: string,
    power: string,
  }
}

export class Stake extends jspb.Message {
  getStakerAddress(): string;
  setStakerAddress(value: string): void;

  clearCoinsList(): void;
  getCoinsList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setCoinsList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addCoins(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stake.AsObject;
  static toObject(includeInstance: boolean, msg: Stake): Stake.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Stake, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stake;
  static deserializeBinaryFromReader(message: Stake, reader: jspb.BinaryReader): Stake;
}

export namespace Stake {
  export type AsObject = {
    stakerAddress: string,
    coinsList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class LockResponse extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getPower(): string;
  setPower(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LockResponse): LockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LockResponse;
  static deserializeBinaryFromReader(message: LockResponse, reader: jspb.BinaryReader): LockResponse;
}

export namespace LockResponse {
  export type AsObject = {
    key: string,
    power: string,
  }
}

