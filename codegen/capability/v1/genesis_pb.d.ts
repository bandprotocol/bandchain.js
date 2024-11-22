// package: capability.v1
// file: capability/v1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as capability_v1_capability_pb from "../../capability/v1/capability_pb";
import * as amino_amino_pb from "../../amino/amino_pb";

export class GenesisOwners extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  hasIndexOwners(): boolean;
  clearIndexOwners(): void;
  getIndexOwners(): capability_v1_capability_pb.CapabilityOwners | undefined;
  setIndexOwners(value?: capability_v1_capability_pb.CapabilityOwners): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisOwners.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisOwners): GenesisOwners.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenesisOwners, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisOwners;
  static deserializeBinaryFromReader(message: GenesisOwners, reader: jspb.BinaryReader): GenesisOwners;
}

export namespace GenesisOwners {
  export type AsObject = {
    index: number,
    indexOwners?: capability_v1_capability_pb.CapabilityOwners.AsObject,
  }
}

export class GenesisState extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  clearOwnersList(): void;
  getOwnersList(): Array<GenesisOwners>;
  setOwnersList(value: Array<GenesisOwners>): void;
  addOwners(value?: GenesisOwners, index?: number): GenesisOwners;

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
    index: number,
    ownersList: Array<GenesisOwners.AsObject>,
  }
}

