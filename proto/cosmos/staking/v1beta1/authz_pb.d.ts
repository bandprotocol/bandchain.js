// package: cosmos.staking.v1beta1
// file: cosmos/staking/v1beta1/authz.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class StakeAuthorization extends jspb.Message {
  hasMaxTokens(): boolean;
  clearMaxTokens(): void;
  getMaxTokens(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setMaxTokens(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  hasAllowList(): boolean;
  clearAllowList(): void;
  getAllowList(): StakeAuthorization.Validators | undefined;
  setAllowList(value?: StakeAuthorization.Validators): void;

  hasDenyList(): boolean;
  clearDenyList(): void;
  getDenyList(): StakeAuthorization.Validators | undefined;
  setDenyList(value?: StakeAuthorization.Validators): void;

  getAuthorizationType(): AuthorizationTypeMap[keyof AuthorizationTypeMap];
  setAuthorizationType(value: AuthorizationTypeMap[keyof AuthorizationTypeMap]): void;

  getValidatorsCase(): StakeAuthorization.ValidatorsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakeAuthorization.AsObject;
  static toObject(includeInstance: boolean, msg: StakeAuthorization): StakeAuthorization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StakeAuthorization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakeAuthorization;
  static deserializeBinaryFromReader(message: StakeAuthorization, reader: jspb.BinaryReader): StakeAuthorization;
}

export namespace StakeAuthorization {
  export type AsObject = {
    maxTokens?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
    allowList?: StakeAuthorization.Validators.AsObject,
    denyList?: StakeAuthorization.Validators.AsObject,
    authorizationType: AuthorizationTypeMap[keyof AuthorizationTypeMap],
  }

  export class Validators extends jspb.Message {
    clearAddressList(): void;
    getAddressList(): Array<string>;
    setAddressList(value: Array<string>): void;
    addAddress(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Validators.AsObject;
    static toObject(includeInstance: boolean, msg: Validators): Validators.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Validators, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Validators;
    static deserializeBinaryFromReader(message: Validators, reader: jspb.BinaryReader): Validators;
  }

  export namespace Validators {
    export type AsObject = {
      addressList: Array<string>,
    }
  }

  export enum ValidatorsCase {
    VALIDATORS_NOT_SET = 0,
    ALLOW_LIST = 2,
    DENY_LIST = 3,
  }
}

export interface AuthorizationTypeMap {
  AUTHORIZATION_TYPE_UNSPECIFIED: 0;
  AUTHORIZATION_TYPE_DELEGATE: 1;
  AUTHORIZATION_TYPE_UNDELEGATE: 2;
  AUTHORIZATION_TYPE_REDELEGATE: 3;
}

export const AuthorizationType: AuthorizationTypeMap;

