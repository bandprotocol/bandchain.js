// package: band.tss.v1beta1
// file: band/tss/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as band_tss_v1beta1_tss_pb from "../../../band/tss/v1beta1/tss_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): Params | undefined;
  setParams(value?: Params): void;

  clearGroupsList(): void;
  getGroupsList(): Array<band_tss_v1beta1_tss_pb.Group>;
  setGroupsList(value: Array<band_tss_v1beta1_tss_pb.Group>): void;
  addGroups(value?: band_tss_v1beta1_tss_pb.Group, index?: number): band_tss_v1beta1_tss_pb.Group;

  clearMembersList(): void;
  getMembersList(): Array<band_tss_v1beta1_tss_pb.Member>;
  setMembersList(value: Array<band_tss_v1beta1_tss_pb.Member>): void;
  addMembers(value?: band_tss_v1beta1_tss_pb.Member, index?: number): band_tss_v1beta1_tss_pb.Member;

  clearDesList(): void;
  getDesList(): Array<DEGenesis>;
  setDesList(value: Array<DEGenesis>): void;
  addDes(value?: DEGenesis, index?: number): DEGenesis;

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
    groupsList: Array<band_tss_v1beta1_tss_pb.Group.AsObject>,
    membersList: Array<band_tss_v1beta1_tss_pb.Member.AsObject>,
    desList: Array<DEGenesis.AsObject>,
  }
}

export class Params extends jspb.Message {
  getMaxGroupSize(): number;
  setMaxGroupSize(value: number): void;

  getMaxDeSize(): number;
  setMaxDeSize(value: number): void;

  getCreationPeriod(): number;
  setCreationPeriod(value: number): void;

  getSigningPeriod(): number;
  setSigningPeriod(value: number): void;

  getMaxSigningAttempt(): number;
  setMaxSigningAttempt(value: number): void;

  getMaxMemoLength(): number;
  setMaxMemoLength(value: number): void;

  getMaxMessageLength(): number;
  setMaxMessageLength(value: number): void;

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
    maxDeSize: number,
    creationPeriod: number,
    signingPeriod: number,
    maxSigningAttempt: number,
    maxMemoLength: number,
    maxMessageLength: number,
  }
}

export class DEGenesis extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  hasDe(): boolean;
  clearDe(): void;
  getDe(): band_tss_v1beta1_tss_pb.DE | undefined;
  setDe(value?: band_tss_v1beta1_tss_pb.DE): void;

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
    de?: band_tss_v1beta1_tss_pb.DE.AsObject,
  }
}

