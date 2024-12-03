// package: band.restake.v1beta1
// file: band/restake/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as band_restake_v1beta1_types_pb from "../../../band/restake/v1beta1/types_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): Params | undefined;
  setParams(value?: Params): void;

  clearVaultsList(): void;
  getVaultsList(): Array<band_restake_v1beta1_types_pb.Vault>;
  setVaultsList(value: Array<band_restake_v1beta1_types_pb.Vault>): void;
  addVaults(value?: band_restake_v1beta1_types_pb.Vault, index?: number): band_restake_v1beta1_types_pb.Vault;

  clearLocksList(): void;
  getLocksList(): Array<band_restake_v1beta1_types_pb.Lock>;
  setLocksList(value: Array<band_restake_v1beta1_types_pb.Lock>): void;
  addLocks(value?: band_restake_v1beta1_types_pb.Lock, index?: number): band_restake_v1beta1_types_pb.Lock;

  clearStakesList(): void;
  getStakesList(): Array<band_restake_v1beta1_types_pb.Stake>;
  setStakesList(value: Array<band_restake_v1beta1_types_pb.Stake>): void;
  addStakes(value?: band_restake_v1beta1_types_pb.Stake, index?: number): band_restake_v1beta1_types_pb.Stake;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    params?: Params.AsObject,
    vaultsList: Array<band_restake_v1beta1_types_pb.Vault.AsObject>,
    locksList: Array<band_restake_v1beta1_types_pb.Lock.AsObject>,
    stakesList: Array<band_restake_v1beta1_types_pb.Stake.AsObject>,
  }
}

export class Params extends jspb.Message {
  clearAllowedDenomsList(): void;
  getAllowedDenomsList(): Array<string>;
  setAllowedDenomsList(value: Array<string>): void;
  addAllowedDenoms(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    allowedDenomsList: Array<string>,
  }
}

