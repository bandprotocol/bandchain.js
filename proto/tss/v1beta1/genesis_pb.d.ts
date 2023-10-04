// package: tss.v1beta1
// file: tss/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as tss_v1beta1_tss_pb from "../../tss/v1beta1/tss_pb";
import * as cosmos_proto_cosmos_pb from "../../cosmos_proto/cosmos_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): Params | undefined;
  setParams(value?: Params): void;

  getGroupCount(): number;
  setGroupCount(value: number): void;

  clearGroupsList(): void;
  getGroupsList(): Array<tss_v1beta1_tss_pb.Group>;
  setGroupsList(value: Array<tss_v1beta1_tss_pb.Group>): void;
  addGroups(value?: tss_v1beta1_tss_pb.Group, index?: number): tss_v1beta1_tss_pb.Group;

  getSigningCount(): number;
  setSigningCount(value: number): void;

  clearSigningsList(): void;
  getSigningsList(): Array<tss_v1beta1_tss_pb.Signing>;
  setSigningsList(value: Array<tss_v1beta1_tss_pb.Signing>): void;
  addSignings(value?: tss_v1beta1_tss_pb.Signing, index?: number): tss_v1beta1_tss_pb.Signing;

  getReplacementCount(): number;
  setReplacementCount(value: number): void;

  clearReplacementsList(): void;
  getReplacementsList(): Array<tss_v1beta1_tss_pb.Replacement>;
  setReplacementsList(value: Array<tss_v1beta1_tss_pb.Replacement>): void;
  addReplacements(value?: tss_v1beta1_tss_pb.Replacement, index?: number): tss_v1beta1_tss_pb.Replacement;

  clearDeQueuesGenesisList(): void;
  getDeQueuesGenesisList(): Array<DEQueueGenesis>;
  setDeQueuesGenesisList(value: Array<DEQueueGenesis>): void;
  addDeQueuesGenesis(value?: DEQueueGenesis, index?: number): DEQueueGenesis;

  clearDesGenesisList(): void;
  getDesGenesisList(): Array<DEGenesis>;
  setDesGenesisList(value: Array<DEGenesis>): void;
  addDesGenesis(value?: DEGenesis, index?: number): DEGenesis;

  clearStatusesList(): void;
  getStatusesList(): Array<tss_v1beta1_tss_pb.Status>;
  setStatusesList(value: Array<tss_v1beta1_tss_pb.Status>): void;
  addStatuses(value?: tss_v1beta1_tss_pb.Status, index?: number): tss_v1beta1_tss_pb.Status;

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
    groupCount: number,
    groupsList: Array<tss_v1beta1_tss_pb.Group.AsObject>,
    signingCount: number,
    signingsList: Array<tss_v1beta1_tss_pb.Signing.AsObject>,
    replacementCount: number,
    replacementsList: Array<tss_v1beta1_tss_pb.Replacement.AsObject>,
    deQueuesGenesisList: Array<DEQueueGenesis.AsObject>,
    desGenesisList: Array<DEGenesis.AsObject>,
    statusesList: Array<tss_v1beta1_tss_pb.Status.AsObject>,
  }
}

export class Params extends jspb.Message {
  getMaxGroupSize(): number;
  setMaxGroupSize(value: number): void;

  getMaxDESize(): number;
  setMaxDESize(value: number): void;

  getCreatingPeriod(): number;
  setCreatingPeriod(value: number): void;

  getSigningPeriod(): number;
  setSigningPeriod(value: number): void;

  hasActiveDuration(): boolean;
  clearActiveDuration(): void;
  getActiveDuration(): google_protobuf_duration_pb.Duration | undefined;
  setActiveDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasInactivePenaltyDuration(): boolean;
  clearInactivePenaltyDuration(): void;
  getInactivePenaltyDuration(): google_protobuf_duration_pb.Duration | undefined;
  setInactivePenaltyDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasJailPenaltyDuration(): boolean;
  clearJailPenaltyDuration(): void;
  getJailPenaltyDuration(): google_protobuf_duration_pb.Duration | undefined;
  setJailPenaltyDuration(value?: google_protobuf_duration_pb.Duration): void;

  getRewardPercentage(): number;
  setRewardPercentage(value: number): void;

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
    maxGroupSize: number,
    maxDESize: number,
    creatingPeriod: number,
    signingPeriod: number,
    activeDuration?: google_protobuf_duration_pb.Duration.AsObject,
    inactivePenaltyDuration?: google_protobuf_duration_pb.Duration.AsObject,
    jailPenaltyDuration?: google_protobuf_duration_pb.Duration.AsObject,
    rewardPercentage: number,
  }
}

export class DEQueueGenesis extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  hasDeQueue(): boolean;
  clearDeQueue(): void;
  getDeQueue(): tss_v1beta1_tss_pb.DEQueue | undefined;
  setDeQueue(value?: tss_v1beta1_tss_pb.DEQueue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DEQueueGenesis.AsObject;
  static toObject(includeInstance: boolean, msg: DEQueueGenesis): DEQueueGenesis.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DEQueueGenesis, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DEQueueGenesis;
  static deserializeBinaryFromReader(message: DEQueueGenesis, reader: jspb.BinaryReader): DEQueueGenesis;
}

export namespace DEQueueGenesis {
  export type AsObject = {
    address: string,
    deQueue?: tss_v1beta1_tss_pb.DEQueue.AsObject,
  }
}

export class DEGenesis extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getIndex(): number;
  setIndex(value: number): void;

  hasDe(): boolean;
  clearDe(): void;
  getDe(): tss_v1beta1_tss_pb.DE | undefined;
  setDe(value?: tss_v1beta1_tss_pb.DE): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DEGenesis.AsObject;
  static toObject(includeInstance: boolean, msg: DEGenesis): DEGenesis.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DEGenesis, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DEGenesis;
  static deserializeBinaryFromReader(message: DEGenesis, reader: jspb.BinaryReader): DEGenesis;
}

export namespace DEGenesis {
  export type AsObject = {
    address: string,
    index: number,
    de?: tss_v1beta1_tss_pb.DE.AsObject,
  }
}

