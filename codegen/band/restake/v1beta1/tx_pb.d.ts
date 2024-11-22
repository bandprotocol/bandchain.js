// package: band.restake.v1beta1
// file: band/restake/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as amino_amino_pb from "../../../amino/amino_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as band_restake_v1beta1_genesis_pb from "../../../band/restake/v1beta1/genesis_pb";

export class MsgStake extends jspb.Message {
  getStakerAddress(): string;
  setStakerAddress(value: string): void;

  clearCoinsList(): void;
  getCoinsList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setCoinsList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addCoins(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgStake.AsObject;
  static toObject(includeInstance: boolean, msg: MsgStake): MsgStake.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgStake, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgStake;
  static deserializeBinaryFromReader(message: MsgStake, reader: jspb.BinaryReader): MsgStake;
}

export namespace MsgStake {
  export type AsObject = {
    stakerAddress: string,
    coinsList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class MsgStakeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgStakeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgStakeResponse): MsgStakeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgStakeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgStakeResponse;
  static deserializeBinaryFromReader(message: MsgStakeResponse, reader: jspb.BinaryReader): MsgStakeResponse;
}

export namespace MsgStakeResponse {
  export type AsObject = {
  }
}

export class MsgUnstake extends jspb.Message {
  getStakerAddress(): string;
  setStakerAddress(value: string): void;

  clearCoinsList(): void;
  getCoinsList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setCoinsList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addCoins(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUnstake.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUnstake): MsgUnstake.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUnstake, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUnstake;
  static deserializeBinaryFromReader(message: MsgUnstake, reader: jspb.BinaryReader): MsgUnstake;
}

export namespace MsgUnstake {
  export type AsObject = {
    stakerAddress: string,
    coinsList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class MsgUnstakeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUnstakeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUnstakeResponse): MsgUnstakeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUnstakeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUnstakeResponse;
  static deserializeBinaryFromReader(message: MsgUnstakeResponse, reader: jspb.BinaryReader): MsgUnstakeResponse;
}

export namespace MsgUnstakeResponse {
  export type AsObject = {
  }
}

export class MsgUpdateParams extends jspb.Message {
  getAuthority(): string;
  setAuthority(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): band_restake_v1beta1_genesis_pb.Params | undefined;
  setParams(value?: band_restake_v1beta1_genesis_pb.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateParams.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateParams): MsgUpdateParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateParams;
  static deserializeBinaryFromReader(message: MsgUpdateParams, reader: jspb.BinaryReader): MsgUpdateParams;
}

export namespace MsgUpdateParams {
  export type AsObject = {
    authority: string,
    params?: band_restake_v1beta1_genesis_pb.Params.AsObject,
  }
}

export class MsgUpdateParamsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateParamsResponse): MsgUpdateParamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateParamsResponse;
  static deserializeBinaryFromReader(message: MsgUpdateParamsResponse, reader: jspb.BinaryReader): MsgUpdateParamsResponse;
}

export namespace MsgUpdateParamsResponse {
  export type AsObject = {
  }
}

