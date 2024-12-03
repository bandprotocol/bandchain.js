// package: cosmos.distribution.v1beta1
// file: cosmos/distribution/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";
import * as cosmos_distribution_v1beta1_distribution_pb from "../../../cosmos/distribution/v1beta1/distribution_pb";

export class MsgSetWithdrawAddress extends jspb.Message {
  getDelegatorAddress(): string;
  setDelegatorAddress(value: string): void;

  getWithdrawAddress(): string;
  setWithdrawAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSetWithdrawAddress.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSetWithdrawAddress): MsgSetWithdrawAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSetWithdrawAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSetWithdrawAddress;
  static deserializeBinaryFromReader(message: MsgSetWithdrawAddress, reader: jspb.BinaryReader): MsgSetWithdrawAddress;
}

export namespace MsgSetWithdrawAddress {
  export type AsObject = {
    delegatorAddress: string,
    withdrawAddress: string,
  }
}

export class MsgSetWithdrawAddressResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSetWithdrawAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSetWithdrawAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSetWithdrawAddressResponse;
  static deserializeBinaryFromReader(message: MsgSetWithdrawAddressResponse, reader: jspb.BinaryReader): MsgSetWithdrawAddressResponse;
}

export namespace MsgSetWithdrawAddressResponse {
  export type AsObject = {
  }
}

export class MsgWithdrawDelegatorReward extends jspb.Message {
  getDelegatorAddress(): string;
  setDelegatorAddress(value: string): void;

  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgWithdrawDelegatorReward.AsObject;
  static toObject(includeInstance: boolean, msg: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorReward.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgWithdrawDelegatorReward, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgWithdrawDelegatorReward;
  static deserializeBinaryFromReader(message: MsgWithdrawDelegatorReward, reader: jspb.BinaryReader): MsgWithdrawDelegatorReward;
}

export namespace MsgWithdrawDelegatorReward {
  export type AsObject = {
    delegatorAddress: string,
    validatorAddress: string,
  }
}

export class MsgWithdrawDelegatorRewardResponse extends jspb.Message {
  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgWithdrawDelegatorRewardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgWithdrawDelegatorRewardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgWithdrawDelegatorRewardResponse;
  static deserializeBinaryFromReader(message: MsgWithdrawDelegatorRewardResponse, reader: jspb.BinaryReader): MsgWithdrawDelegatorRewardResponse;
}

export namespace MsgWithdrawDelegatorRewardResponse {
  export type AsObject = {
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class MsgWithdrawValidatorCommission extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgWithdrawValidatorCommission.AsObject;
  static toObject(includeInstance: boolean, msg: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgWithdrawValidatorCommission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgWithdrawValidatorCommission;
  static deserializeBinaryFromReader(message: MsgWithdrawValidatorCommission, reader: jspb.BinaryReader): MsgWithdrawValidatorCommission;
}

export namespace MsgWithdrawValidatorCommission {
  export type AsObject = {
    validatorAddress: string,
  }
}

export class MsgWithdrawValidatorCommissionResponse extends jspb.Message {
  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgWithdrawValidatorCommissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgWithdrawValidatorCommissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgWithdrawValidatorCommissionResponse;
  static deserializeBinaryFromReader(message: MsgWithdrawValidatorCommissionResponse, reader: jspb.BinaryReader): MsgWithdrawValidatorCommissionResponse;
}

export namespace MsgWithdrawValidatorCommissionResponse {
  export type AsObject = {
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class MsgFundCommunityPool extends jspb.Message {
  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getDepositor(): string;
  setDepositor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgFundCommunityPool.AsObject;
  static toObject(includeInstance: boolean, msg: MsgFundCommunityPool): MsgFundCommunityPool.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgFundCommunityPool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgFundCommunityPool;
  static deserializeBinaryFromReader(message: MsgFundCommunityPool, reader: jspb.BinaryReader): MsgFundCommunityPool;
}

export namespace MsgFundCommunityPool {
  export type AsObject = {
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    depositor: string,
  }
}

export class MsgFundCommunityPoolResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgFundCommunityPoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgFundCommunityPoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgFundCommunityPoolResponse;
  static deserializeBinaryFromReader(message: MsgFundCommunityPoolResponse, reader: jspb.BinaryReader): MsgFundCommunityPoolResponse;
}

export namespace MsgFundCommunityPoolResponse {
  export type AsObject = {
  }
}

export class MsgUpdateParams extends jspb.Message {
  getAuthority(): string;
  setAuthority(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): cosmos_distribution_v1beta1_distribution_pb.Params | undefined;
  setParams(value?: cosmos_distribution_v1beta1_distribution_pb.Params): void;

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
    params?: cosmos_distribution_v1beta1_distribution_pb.Params.AsObject,
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

export class MsgCommunityPoolSpend extends jspb.Message {
  getAuthority(): string;
  setAuthority(value: string): void;

  getRecipient(): string;
  setRecipient(value: string): void;

  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCommunityPoolSpend.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCommunityPoolSpend): MsgCommunityPoolSpend.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCommunityPoolSpend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCommunityPoolSpend;
  static deserializeBinaryFromReader(message: MsgCommunityPoolSpend, reader: jspb.BinaryReader): MsgCommunityPoolSpend;
}

export namespace MsgCommunityPoolSpend {
  export type AsObject = {
    authority: string,
    recipient: string,
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class MsgCommunityPoolSpendResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCommunityPoolSpendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCommunityPoolSpendResponse): MsgCommunityPoolSpendResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCommunityPoolSpendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCommunityPoolSpendResponse;
  static deserializeBinaryFromReader(message: MsgCommunityPoolSpendResponse, reader: jspb.BinaryReader): MsgCommunityPoolSpendResponse;
}

export namespace MsgCommunityPoolSpendResponse {
  export type AsObject = {
  }
}

export class MsgDepositValidatorRewardsPool extends jspb.Message {
  getDepositor(): string;
  setDepositor(value: string): void;

  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDepositValidatorRewardsPool.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDepositValidatorRewardsPool): MsgDepositValidatorRewardsPool.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgDepositValidatorRewardsPool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDepositValidatorRewardsPool;
  static deserializeBinaryFromReader(message: MsgDepositValidatorRewardsPool, reader: jspb.BinaryReader): MsgDepositValidatorRewardsPool;
}

export namespace MsgDepositValidatorRewardsPool {
  export type AsObject = {
    depositor: string,
    validatorAddress: string,
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class MsgDepositValidatorRewardsPoolResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDepositValidatorRewardsPoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDepositValidatorRewardsPoolResponse): MsgDepositValidatorRewardsPoolResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgDepositValidatorRewardsPoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDepositValidatorRewardsPoolResponse;
  static deserializeBinaryFromReader(message: MsgDepositValidatorRewardsPoolResponse, reader: jspb.BinaryReader): MsgDepositValidatorRewardsPoolResponse;
}

export namespace MsgDepositValidatorRewardsPoolResponse {
  export type AsObject = {
  }
}

