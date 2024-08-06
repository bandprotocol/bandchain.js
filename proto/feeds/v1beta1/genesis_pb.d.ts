// package: feeds.v1beta1
// file: feeds/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as feeds_v1beta1_params_pb from "../../feeds/v1beta1/params_pb";
import * as feeds_v1beta1_feeds_pb from "../../feeds/v1beta1/feeds_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): feeds_v1beta1_params_pb.Params | undefined;
  setParams(value?: feeds_v1beta1_params_pb.Params): void;

  clearDelegatorSignalsList(): void;
  getDelegatorSignalsList(): Array<feeds_v1beta1_feeds_pb.DelegatorSignals>;
  setDelegatorSignalsList(value: Array<feeds_v1beta1_feeds_pb.DelegatorSignals>): void;
  addDelegatorSignals(value?: feeds_v1beta1_feeds_pb.DelegatorSignals, index?: number): feeds_v1beta1_feeds_pb.DelegatorSignals;

  hasReferenceSourceConfig(): boolean;
  clearReferenceSourceConfig(): void;
  getReferenceSourceConfig(): feeds_v1beta1_feeds_pb.ReferenceSourceConfig | undefined;
  setReferenceSourceConfig(value?: feeds_v1beta1_feeds_pb.ReferenceSourceConfig): void;

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
    params?: feeds_v1beta1_params_pb.Params.AsObject,
    delegatorSignalsList: Array<feeds_v1beta1_feeds_pb.DelegatorSignals.AsObject>,
    referenceSourceConfig?: feeds_v1beta1_feeds_pb.ReferenceSourceConfig.AsObject,
  }
}

