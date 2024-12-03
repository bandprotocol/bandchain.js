// package: cosmos.store.streaming.abci
// file: cosmos/store/streaming/abci/grpc.proto

import * as jspb from "google-protobuf";
import * as tendermint_abci_types_pb from "../../../../tendermint/abci/types_pb";
import * as cosmos_store_v1beta1_listening_pb from "../../../../cosmos/store/v1beta1/listening_pb";

export class ListenFinalizeBlockRequest extends jspb.Message {
  hasReq(): boolean;
  clearReq(): void;
  getReq(): tendermint_abci_types_pb.RequestFinalizeBlock | undefined;
  setReq(value?: tendermint_abci_types_pb.RequestFinalizeBlock): void;

  hasRes(): boolean;
  clearRes(): void;
  getRes(): tendermint_abci_types_pb.ResponseFinalizeBlock | undefined;
  setRes(value?: tendermint_abci_types_pb.ResponseFinalizeBlock): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenFinalizeBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListenFinalizeBlockRequest): ListenFinalizeBlockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListenFinalizeBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenFinalizeBlockRequest;
  static deserializeBinaryFromReader(message: ListenFinalizeBlockRequest, reader: jspb.BinaryReader): ListenFinalizeBlockRequest;
}

export namespace ListenFinalizeBlockRequest {
  export type AsObject = {
    req?: tendermint_abci_types_pb.RequestFinalizeBlock.AsObject,
    res?: tendermint_abci_types_pb.ResponseFinalizeBlock.AsObject,
  }
}

export class ListenFinalizeBlockResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenFinalizeBlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListenFinalizeBlockResponse): ListenFinalizeBlockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListenFinalizeBlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenFinalizeBlockResponse;
  static deserializeBinaryFromReader(message: ListenFinalizeBlockResponse, reader: jspb.BinaryReader): ListenFinalizeBlockResponse;
}

export namespace ListenFinalizeBlockResponse {
  export type AsObject = {
  }
}

export class ListenCommitRequest extends jspb.Message {
  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  hasRes(): boolean;
  clearRes(): void;
  getRes(): tendermint_abci_types_pb.ResponseCommit | undefined;
  setRes(value?: tendermint_abci_types_pb.ResponseCommit): void;

  clearChangeSetList(): void;
  getChangeSetList(): Array<cosmos_store_v1beta1_listening_pb.StoreKVPair>;
  setChangeSetList(value: Array<cosmos_store_v1beta1_listening_pb.StoreKVPair>): void;
  addChangeSet(value?: cosmos_store_v1beta1_listening_pb.StoreKVPair, index?: number): cosmos_store_v1beta1_listening_pb.StoreKVPair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenCommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListenCommitRequest): ListenCommitRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListenCommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenCommitRequest;
  static deserializeBinaryFromReader(message: ListenCommitRequest, reader: jspb.BinaryReader): ListenCommitRequest;
}

export namespace ListenCommitRequest {
  export type AsObject = {
    blockHeight: number,
    res?: tendermint_abci_types_pb.ResponseCommit.AsObject,
    changeSetList: Array<cosmos_store_v1beta1_listening_pb.StoreKVPair.AsObject>,
  }
}

export class ListenCommitResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenCommitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListenCommitResponse): ListenCommitResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListenCommitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenCommitResponse;
  static deserializeBinaryFromReader(message: ListenCommitResponse, reader: jspb.BinaryReader): ListenCommitResponse;
}

export namespace ListenCommitResponse {
  export type AsObject = {
  }
}

