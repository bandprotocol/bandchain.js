// package: cosmos.feegrant.v1beta1
// file: cosmos/feegrant/v1beta1/feegrant.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class BasicAllowance extends jspb.Message {
  clearSpendLimitList(): void;
  getSpendLimitList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setSpendLimitList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addSpendLimit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiration(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: BasicAllowance): BasicAllowance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicAllowance;
  static deserializeBinaryFromReader(message: BasicAllowance, reader: jspb.BinaryReader): BasicAllowance;
}

export namespace BasicAllowance {
  export type AsObject = {
    spendLimitList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    expiration?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PeriodicAllowance extends jspb.Message {
  hasBasic(): boolean;
  clearBasic(): void;
  getBasic(): BasicAllowance | undefined;
  setBasic(value?: BasicAllowance): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setPeriod(value?: google_protobuf_duration_pb.Duration): void;

  clearPeriodSpendLimitList(): void;
  getPeriodSpendLimitList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setPeriodSpendLimitList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addPeriodSpendLimit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  clearPeriodCanSpendList(): void;
  getPeriodCanSpendList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setPeriodCanSpendList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addPeriodCanSpend(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  hasPeriodReset(): boolean;
  clearPeriodReset(): void;
  getPeriodReset(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPeriodReset(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeriodicAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: PeriodicAllowance): PeriodicAllowance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeriodicAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeriodicAllowance;
  static deserializeBinaryFromReader(message: PeriodicAllowance, reader: jspb.BinaryReader): PeriodicAllowance;
}

export namespace PeriodicAllowance {
  export type AsObject = {
    basic?: BasicAllowance.AsObject,
    period?: google_protobuf_duration_pb.Duration.AsObject,
    periodSpendLimitList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    periodCanSpendList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    periodReset?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AllowedMsgAllowance extends jspb.Message {
  hasAllowance(): boolean;
  clearAllowance(): void;
  getAllowance(): google_protobuf_any_pb.Any | undefined;
  setAllowance(value?: google_protobuf_any_pb.Any): void;

  clearAllowedMessagesList(): void;
  getAllowedMessagesList(): Array<string>;
  setAllowedMessagesList(value: Array<string>): void;
  addAllowedMessages(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllowedMsgAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: AllowedMsgAllowance): AllowedMsgAllowance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllowedMsgAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllowedMsgAllowance;
  static deserializeBinaryFromReader(message: AllowedMsgAllowance, reader: jspb.BinaryReader): AllowedMsgAllowance;
}

export namespace AllowedMsgAllowance {
  export type AsObject = {
    allowance?: google_protobuf_any_pb.Any.AsObject,
    allowedMessagesList: Array<string>,
  }
}

export class Grant extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): void;

  getGrantee(): string;
  setGrantee(value: string): void;

  hasAllowance(): boolean;
  clearAllowance(): void;
  getAllowance(): google_protobuf_any_pb.Any | undefined;
  setAllowance(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Grant.AsObject;
  static toObject(includeInstance: boolean, msg: Grant): Grant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Grant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Grant;
  static deserializeBinaryFromReader(message: Grant, reader: jspb.BinaryReader): Grant;
}

export namespace Grant {
  export type AsObject = {
    granter: string,
    grantee: string,
    allowance?: google_protobuf_any_pb.Any.AsObject,
  }
}

