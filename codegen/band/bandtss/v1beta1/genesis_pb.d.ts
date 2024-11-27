// package: band.bandtss.v1beta1
// file: band/bandtss/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as band_bandtss_v1beta1_bandtss_pb from "../../../band/bandtss/v1beta1/bandtss_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): Params | undefined;
  setParams(value?: Params): void;

  clearMembersList(): void;
  getMembersList(): Array<band_bandtss_v1beta1_bandtss_pb.Member>;
  setMembersList(value: Array<band_bandtss_v1beta1_bandtss_pb.Member>): void;
  addMembers(value?: band_bandtss_v1beta1_bandtss_pb.Member, index?: number): band_bandtss_v1beta1_bandtss_pb.Member;

  hasCurrentGroup(): boolean;
  clearCurrentGroup(): void;
  getCurrentGroup(): band_bandtss_v1beta1_bandtss_pb.CurrentGroup | undefined;
  setCurrentGroup(value?: band_bandtss_v1beta1_bandtss_pb.CurrentGroup): void;

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
    membersList: Array<band_bandtss_v1beta1_bandtss_pb.Member.AsObject>,
    currentGroup?: band_bandtss_v1beta1_bandtss_pb.CurrentGroup.AsObject,
  }
}

export class Params extends jspb.Message {
  getRewardPercentage(): number;
  setRewardPercentage(value: number): void;

  hasInactivePenaltyDuration(): boolean;
  clearInactivePenaltyDuration(): void;
  getInactivePenaltyDuration(): google_protobuf_duration_pb.Duration | undefined;
  setInactivePenaltyDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasMinTransitionDuration(): boolean;
  clearMinTransitionDuration(): void;
  getMinTransitionDuration(): google_protobuf_duration_pb.Duration | undefined;
  setMinTransitionDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasMaxTransitionDuration(): boolean;
  clearMaxTransitionDuration(): void;
  getMaxTransitionDuration(): google_protobuf_duration_pb.Duration | undefined;
  setMaxTransitionDuration(value?: google_protobuf_duration_pb.Duration): void;

  clearFeePerSignerList(): void;
  getFeePerSignerList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setFeePerSignerList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addFeePerSigner(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

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
    rewardPercentage: number,
    inactivePenaltyDuration?: google_protobuf_duration_pb.Duration.AsObject,
    minTransitionDuration?: google_protobuf_duration_pb.Duration.AsObject,
    maxTransitionDuration?: google_protobuf_duration_pb.Duration.AsObject,
    feePerSignerList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

