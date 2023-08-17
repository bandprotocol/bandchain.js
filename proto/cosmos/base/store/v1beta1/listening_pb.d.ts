// package: cosmos.base.store.v1beta1
// file: cosmos/base/store/v1beta1/listening.proto

import * as jspb from "google-protobuf";
import * as tendermint_abci_types_pb from "../../../../tendermint/abci/types_pb";

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
  hasRequestBeginBlock(): boolean;
  clearRequestBeginBlock(): void;
  getRequestBeginBlock(): tendermint_abci_types_pb.RequestBeginBlock | undefined;
  setRequestBeginBlock(value?: tendermint_abci_types_pb.RequestBeginBlock): void;

  hasResponseBeginBlock(): boolean;
  clearResponseBeginBlock(): void;
  getResponseBeginBlock(): tendermint_abci_types_pb.ResponseBeginBlock | undefined;
  setResponseBeginBlock(value?: tendermint_abci_types_pb.ResponseBeginBlock): void;

  clearDeliverTxsList(): void;
  getDeliverTxsList(): Array<BlockMetadata.DeliverTx>;
  setDeliverTxsList(value: Array<BlockMetadata.DeliverTx>): void;
  addDeliverTxs(value?: BlockMetadata.DeliverTx, index?: number): BlockMetadata.DeliverTx;

  hasRequestEndBlock(): boolean;
  clearRequestEndBlock(): void;
  getRequestEndBlock(): tendermint_abci_types_pb.RequestEndBlock | undefined;
  setRequestEndBlock(value?: tendermint_abci_types_pb.RequestEndBlock): void;

  hasResponseEndBlock(): boolean;
  clearResponseEndBlock(): void;
  getResponseEndBlock(): tendermint_abci_types_pb.ResponseEndBlock | undefined;
  setResponseEndBlock(value?: tendermint_abci_types_pb.ResponseEndBlock): void;

  hasResponseCommit(): boolean;
  clearResponseCommit(): void;
  getResponseCommit(): tendermint_abci_types_pb.ResponseCommit | undefined;
  setResponseCommit(value?: tendermint_abci_types_pb.ResponseCommit): void;

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
    requestBeginBlock?: tendermint_abci_types_pb.RequestBeginBlock.AsObject,
    responseBeginBlock?: tendermint_abci_types_pb.ResponseBeginBlock.AsObject,
    deliverTxsList: Array<BlockMetadata.DeliverTx.AsObject>,
    requestEndBlock?: tendermint_abci_types_pb.RequestEndBlock.AsObject,
    responseEndBlock?: tendermint_abci_types_pb.ResponseEndBlock.AsObject,
    responseCommit?: tendermint_abci_types_pb.ResponseCommit.AsObject,
  }

  export class DeliverTx extends jspb.Message {
    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): tendermint_abci_types_pb.RequestDeliverTx | undefined;
    setRequest(value?: tendermint_abci_types_pb.RequestDeliverTx): void;

    hasResponse(): boolean;
    clearResponse(): void;
    getResponse(): tendermint_abci_types_pb.ResponseDeliverTx | undefined;
    setResponse(value?: tendermint_abci_types_pb.ResponseDeliverTx): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeliverTx.AsObject;
    static toObject(includeInstance: boolean, msg: DeliverTx): DeliverTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeliverTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeliverTx;
    static deserializeBinaryFromReader(message: DeliverTx, reader: jspb.BinaryReader): DeliverTx;
  }

  export namespace DeliverTx {
    export type AsObject = {
      request?: tendermint_abci_types_pb.RequestDeliverTx.AsObject,
      response?: tendermint_abci_types_pb.ResponseDeliverTx.AsObject,
    }
  }
}

