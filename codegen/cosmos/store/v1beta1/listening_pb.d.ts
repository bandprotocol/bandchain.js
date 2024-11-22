// package: cosmos.store.v1beta1
// file: cosmos/store/v1beta1/listening.proto

import * as jspb from "google-protobuf";
import * as tendermint_abci_types_pb from "../../../tendermint/abci/types_pb";

export class StoreKVPair extends jspb.Message {
  getStoreKey(): string;
  setStoreKey(value: string): void;

  getDelete(): boolean;
  setDelete(value: boolean): void;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreKVPair.AsObject;
  static toObject(includeInstance: boolean, msg: StoreKVPair): StoreKVPair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreKVPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreKVPair;
  static deserializeBinaryFromReader(message: StoreKVPair, reader: jspb.BinaryReader): StoreKVPair;
}

export namespace StoreKVPair {
  export type AsObject = {
    storeKey: string,
    pb_delete: boolean,
    key: Uint8Array | string,
    value: Uint8Array | string,
  }
}

export class BlockMetadata extends jspb.Message {
  hasResponseCommit(): boolean;
  clearResponseCommit(): void;
  getResponseCommit(): tendermint_abci_types_pb.ResponseCommit | undefined;
  setResponseCommit(value?: tendermint_abci_types_pb.ResponseCommit): void;

  hasRequestFinalizeBlock(): boolean;
  clearRequestFinalizeBlock(): void;
  getRequestFinalizeBlock(): tendermint_abci_types_pb.RequestFinalizeBlock | undefined;
  setRequestFinalizeBlock(value?: tendermint_abci_types_pb.RequestFinalizeBlock): void;

  hasResponseFinalizeBlock(): boolean;
  clearResponseFinalizeBlock(): void;
  getResponseFinalizeBlock(): tendermint_abci_types_pb.ResponseFinalizeBlock | undefined;
  setResponseFinalizeBlock(value?: tendermint_abci_types_pb.ResponseFinalizeBlock): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: BlockMetadata): BlockMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockMetadata;
  static deserializeBinaryFromReader(message: BlockMetadata, reader: jspb.BinaryReader): BlockMetadata;
}

export namespace BlockMetadata {
  export type AsObject = {
    responseCommit?: tendermint_abci_types_pb.ResponseCommit.AsObject,
    requestFinalizeBlock?: tendermint_abci_types_pb.RequestFinalizeBlock.AsObject,
    responseFinalizeBlock?: tendermint_abci_types_pb.ResponseFinalizeBlock.AsObject,
  }
}

