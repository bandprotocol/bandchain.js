// package: cosmos.staking.v1beta1
// file: cosmos/staking/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_staking_v1beta1_staking_pb from "../../../cosmos/staking/v1beta1/staking_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";

export class MsgCreateValidator extends jspb.Message {
  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): cosmos_staking_v1beta1_staking_pb.Description | undefined;
  setDescription(value?: cosmos_staking_v1beta1_staking_pb.Description): void;

  hasCommission(): boolean;
  clearCommission(): void;
  getCommission(): cosmos_staking_v1beta1_staking_pb.CommissionRates | undefined;
  setCommission(value?: cosmos_staking_v1beta1_staking_pb.CommissionRates): void;

  getMinSelfDelegation(): string;
  setMinSelfDelegation(value: string): void;

  getDelegatorAddress(): string;
  setDelegatorAddress(value: string): void;

  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  hasPubkey(): boolean;
  clearPubkey(): void;
  getPubkey(): google_protobuf_any_pb.Any | undefined;
  setPubkey(value?: google_protobuf_any_pb.Any): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setValue(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateValidator.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateValidator): MsgCreateValidator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateValidator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateValidator;
  static deserializeBinaryFromReader(message: MsgCreateValidator, reader: jspb.BinaryReader): MsgCreateValidator;
}

export namespace MsgCreateValidator {
  export type AsObject = {
    description?: cosmos_staking_v1beta1_staking_pb.Description.AsObject,
    commission?: cosmos_staking_v1beta1_staking_pb.CommissionRates.AsObject,
    minSelfDelegation: string,
    delegatorAddress: string,
    validatorAddress: string,
    pubkey?: google_protobuf_any_pb.Any.AsObject,
    value?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class MsgCreateValidatorResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateValidatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateValidatorResponse): MsgCreateValidatorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateValidatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateValidatorResponse;
  static deserializeBinaryFromReader(message: MsgCreateValidatorResponse, reader: jspb.BinaryReader): MsgCreateValidatorResponse;
}

export namespace MsgCreateValidatorResponse {
  export type AsObject = {
  }
}

export class MsgEditValidator extends jspb.Message {
  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): cosmos_staking_v1beta1_staking_pb.Description | undefined;
  setDescription(value?: cosmos_staking_v1beta1_staking_pb.Description): void;

  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  getCommissionRate(): string;
  setCommissionRate(value: string): void;

  getMinSelfDelegation(): string;
  setMinSelfDelegation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgEditValidator.AsObject;
  static toObject(includeInstance: boolean, msg: MsgEditValidator): MsgEditValidator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgEditValidator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgEditValidator;
  static deserializeBinaryFromReader(message: MsgEditValidator, reader: jspb.BinaryReader): MsgEditValidator;
}

export namespace MsgEditValidator {
  export type AsObject = {
    description?: cosmos_staking_v1beta1_staking_pb.Description.AsObject,
    validatorAddress: string,
    commissionRate: string,
    minSelfDelegation: string,
  }
}

export class MsgEditValidatorResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgEditValidatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgEditValidatorResponse): MsgEditValidatorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgEditValidatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgEditValidatorResponse;
  static deserializeBinaryFromReader(message: MsgEditValidatorResponse, reader: jspb.BinaryReader): MsgEditValidatorResponse;
}

export namespace MsgEditValidatorResponse {
  export type AsObject = {
  }
}

export class MsgDelegate extends jspb.Message {
  getDelegatorAddress(): string;
  setDelegatorAddress(value: string): void;

  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDelegate.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDelegate): MsgDelegate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgDelegate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDelegate;
  static deserializeBinaryFromReader(message: MsgDelegate, reader: jspb.BinaryReader): MsgDelegate;
}

export namespace MsgDelegate {
  export type AsObject = {
    delegatorAddress: string,
    validatorAddress: string,
    amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class MsgDelegateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDelegateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDelegateResponse): MsgDelegateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgDelegateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDelegateResponse;
  static deserializeBinaryFromReader(message: MsgDelegateResponse, reader: jspb.BinaryReader): MsgDelegateResponse;
}

export namespace MsgDelegateResponse {
  export type AsObject = {
  }
}

export class MsgBeginRedelegate extends jspb.Message {
  getDelegatorAddress(): string;
  setDelegatorAddress(value: string): void;

  getValidatorSrcAddress(): string;
  setValidatorSrcAddress(value: string): void;

  getValidatorDstAddress(): string;
  setValidatorDstAddress(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgBeginRedelegate.AsObject;
  static toObject(includeInstance: boolean, msg: MsgBeginRedelegate): MsgBeginRedelegate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgBeginRedelegate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgBeginRedelegate;
  static deserializeBinaryFromReader(message: MsgBeginRedelegate, reader: jspb.BinaryReader): MsgBeginRedelegate;
}

export namespace MsgBeginRedelegate {
  export type AsObject = {
    delegatorAddress: string,
    validatorSrcAddress: string,
    validatorDstAddress: string,
    amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class MsgBeginRedelegateResponse extends jspb.Message {
  hasCompletionTime(): boolean;
  clearCompletionTime(): void;
  getCompletionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletionTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgBeginRedelegateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgBeginRedelegateResponse): MsgBeginRedelegateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgBeginRedelegateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgBeginRedelegateResponse;
  static deserializeBinaryFromReader(message: MsgBeginRedelegateResponse, reader: jspb.BinaryReader): MsgBeginRedelegateResponse;
}

export namespace MsgBeginRedelegateResponse {
  export type AsObject = {
    completionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class MsgUndelegate extends jspb.Message {
  getDelegatorAddress(): string;
  setDelegatorAddress(value: string): void;

  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUndelegate.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUndelegate): MsgUndelegate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUndelegate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUndelegate;
  static deserializeBinaryFromReader(message: MsgUndelegate, reader: jspb.BinaryReader): MsgUndelegate;
}

export namespace MsgUndelegate {
  export type AsObject = {
    delegatorAddress: string,
    validatorAddress: string,
    amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class MsgUndelegateResponse extends jspb.Message {
  hasCompletionTime(): boolean;
  clearCompletionTime(): void;
  getCompletionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletionTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUndelegateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUndelegateResponse): MsgUndelegateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUndelegateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUndelegateResponse;
  static deserializeBinaryFromReader(message: MsgUndelegateResponse, reader: jspb.BinaryReader): MsgUndelegateResponse;
}

export namespace MsgUndelegateResponse {
  export type AsObject = {
    completionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class MsgCancelUnbondingDelegation extends jspb.Message {
  getDelegatorAddress(): string;
  setDelegatorAddress(value: string): void;

  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  getCreationHeight(): number;
  setCreationHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCancelUnbondingDelegation.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCancelUnbondingDelegation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCancelUnbondingDelegation;
  static deserializeBinaryFromReader(message: MsgCancelUnbondingDelegation, reader: jspb.BinaryReader): MsgCancelUnbondingDelegation;
}

export namespace MsgCancelUnbondingDelegation {
  export type AsObject = {
    delegatorAddress: string,
    validatorAddress: string,
    amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
    creationHeight: number,
  }
}

export class MsgCancelUnbondingDelegationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCancelUnbondingDelegationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCancelUnbondingDelegationResponse): MsgCancelUnbondingDelegationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCancelUnbondingDelegationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCancelUnbondingDelegationResponse;
  static deserializeBinaryFromReader(message: MsgCancelUnbondingDelegationResponse, reader: jspb.BinaryReader): MsgCancelUnbondingDelegationResponse;
}

export namespace MsgCancelUnbondingDelegationResponse {
  export type AsObject = {
  }
}

export class MsgUpdateParams extends jspb.Message {
  getAuthority(): string;
  setAuthority(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): cosmos_staking_v1beta1_staking_pb.Params | undefined;
  setParams(value?: cosmos_staking_v1beta1_staking_pb.Params): void;

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
    params?: cosmos_staking_v1beta1_staking_pb.Params.AsObject,
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

