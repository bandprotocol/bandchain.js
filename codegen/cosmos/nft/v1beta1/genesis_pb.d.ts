// package: cosmos.nft.v1beta1
// file: cosmos/nft/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as cosmos_nft_v1beta1_nft_pb from "../../../cosmos/nft/v1beta1/nft_pb";

export class GenesisState extends jspb.Message {
  clearClassesList(): void;
  getClassesList(): Array<cosmos_nft_v1beta1_nft_pb.Class>;
  setClassesList(value: Array<cosmos_nft_v1beta1_nft_pb.Class>): void;
  addClasses(value?: cosmos_nft_v1beta1_nft_pb.Class, index?: number): cosmos_nft_v1beta1_nft_pb.Class;

  clearEntriesList(): void;
  getEntriesList(): Array<Entry>;
  setEntriesList(value: Array<Entry>): void;
  addEntries(value?: Entry, index?: number): Entry;

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
    classesList: Array<cosmos_nft_v1beta1_nft_pb.Class.AsObject>,
    entriesList: Array<Entry.AsObject>,
  }
}

export class Entry extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): void;

  clearNftsList(): void;
  getNftsList(): Array<cosmos_nft_v1beta1_nft_pb.NFT>;
  setNftsList(value: Array<cosmos_nft_v1beta1_nft_pb.NFT>): void;
  addNfts(value?: cosmos_nft_v1beta1_nft_pb.NFT, index?: number): cosmos_nft_v1beta1_nft_pb.NFT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entry.AsObject;
  static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entry;
  static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
}

export namespace Entry {
  export type AsObject = {
    owner: string,
    nftsList: Array<cosmos_nft_v1beta1_nft_pb.NFT.AsObject>,
  }
}

