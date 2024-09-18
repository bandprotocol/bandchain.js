// package: feeds.v1beta1
// file: feeds/v1beta1/params.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as cosmos_proto_cosmos_pb from "../../cosmos_proto/cosmos_pb";

export class Params extends jspb.Message {
  getAdmin(): string;
  setAdmin(value: string): void;

  getAllowableBlockTimeDiscrepancy(): number;
  setAllowableBlockTimeDiscrepancy(value: number): void;

  getGracePeriod(): number;
  setGracePeriod(value: number): void;

  getMinInterval(): number;
  setMinInterval(value: number): void;

  getMaxInterval(): number;
  setMaxInterval(value: number): void;

  getPowerStepThreshold(): number;
  setPowerStepThreshold(value: number): void;

  getMaxCurrentFeeds(): number;
  setMaxCurrentFeeds(value: number): void;

  getCooldownTime(): number;
  setCooldownTime(value: number): void;

  getMinDeviationBasisPoint(): number;
  setMinDeviationBasisPoint(value: number): void;

  getMaxDeviationBasisPoint(): number;
  setMaxDeviationBasisPoint(value: number): void;

  getCurrentFeedsUpdateInterval(): number;
  setCurrentFeedsUpdateInterval(value: number): void;

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
    admin: string,
    allowableBlockTimeDiscrepancy: number,
    gracePeriod: number,
    minInterval: number,
    maxInterval: number,
    powerStepThreshold: number,
    maxCurrentFeeds: number,
    cooldownTime: number,
    minDeviationBasisPoint: number,
    maxDeviationBasisPoint: number,
    currentFeedsUpdateInterval: number,
  }
}

