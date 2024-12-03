// package: band.feeds.v1beta1
// file: band/feeds/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as band_feeds_v1beta1_params_pb from "../../../band/feeds/v1beta1/params_pb";
import * as band_feeds_v1beta1_feeds_pb from "../../../band/feeds/v1beta1/feeds_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): band_feeds_v1beta1_params_pb.Params | undefined;
  setParams(value?: band_feeds_v1beta1_params_pb.Params): void;

  clearVotesList(): void;
  getVotesList(): Array<band_feeds_v1beta1_feeds_pb.Vote>;
  setVotesList(value: Array<band_feeds_v1beta1_feeds_pb.Vote>): void;
  addVotes(value?: band_feeds_v1beta1_feeds_pb.Vote, index?: number): band_feeds_v1beta1_feeds_pb.Vote;

  hasReferenceSourceConfig(): boolean;
  clearReferenceSourceConfig(): void;
  getReferenceSourceConfig(): band_feeds_v1beta1_feeds_pb.ReferenceSourceConfig | undefined;
  setReferenceSourceConfig(value?: band_feeds_v1beta1_feeds_pb.ReferenceSourceConfig): void;

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
    params?: band_feeds_v1beta1_params_pb.Params.AsObject,
    votesList: Array<band_feeds_v1beta1_feeds_pb.Vote.AsObject>,
    referenceSourceConfig?: band_feeds_v1beta1_feeds_pb.ReferenceSourceConfig.AsObject,
  }
}

