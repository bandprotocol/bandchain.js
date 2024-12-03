// package: cosmos.base.tendermint.v1beta1
// file: cosmos/base/tendermint/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as tendermint_p2p_types_pb from "../../../../tendermint/p2p/types_pb";
import * as tendermint_types_types_pb from "../../../../tendermint/types/types_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../../cosmos/base/query/v1beta1/pagination_pb";
import * as cosmos_base_tendermint_v1beta1_types_pb from "../../../../cosmos/base/tendermint/v1beta1/types_pb";
import * as cosmos_proto_cosmos_pb from "../../../../cosmos_proto/cosmos_pb";
import * as tendermint_types_block_pb from "../../../../tendermint/types/block_pb";
import * as amino_amino_pb from "../../../../amino/amino_pb";

export class GetValidatorSetByHeightRequest extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetValidatorSetByHeightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetValidatorSetByHeightRequest): GetValidatorSetByHeightRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetValidatorSetByHeightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetValidatorSetByHeightRequest;
  static deserializeBinaryFromReader(message: GetValidatorSetByHeightRequest, reader: jspb.BinaryReader): GetValidatorSetByHeightRequest;
}

export namespace GetValidatorSetByHeightRequest {
  export type AsObject = {
    height: number,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class GetValidatorSetByHeightResponse extends jspb.Message {
  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  clearValidatorsList(): void;
  getValidatorsList(): Array<Validator>;
  setValidatorsList(value: Array<Validator>): void;
  addValidators(value?: Validator, index?: number): Validator;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetValidatorSetByHeightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetValidatorSetByHeightResponse): GetValidatorSetByHeightResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetValidatorSetByHeightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetValidatorSetByHeightResponse;
  static deserializeBinaryFromReader(message: GetValidatorSetByHeightResponse, reader: jspb.BinaryReader): GetValidatorSetByHeightResponse;
}

export namespace GetValidatorSetByHeightResponse {
  export type AsObject = {
    blockHeight: number,
    validatorsList: Array<Validator.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class GetLatestValidatorSetRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestValidatorSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestValidatorSetRequest): GetLatestValidatorSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLatestValidatorSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestValidatorSetRequest;
  static deserializeBinaryFromReader(message: GetLatestValidatorSetRequest, reader: jspb.BinaryReader): GetLatestValidatorSetRequest;
}

export namespace GetLatestValidatorSetRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class GetLatestValidatorSetResponse extends jspb.Message {
  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  clearValidatorsList(): void;
  getValidatorsList(): Array<Validator>;
  setValidatorsList(value: Array<Validator>): void;
  addValidators(value?: Validator, index?: number): Validator;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestValidatorSetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestValidatorSetResponse): GetLatestValidatorSetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLatestValidatorSetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestValidatorSetResponse;
  static deserializeBinaryFromReader(message: GetLatestValidatorSetResponse, reader: jspb.BinaryReader): GetLatestValidatorSetResponse;
}

export namespace GetLatestValidatorSetResponse {
  export type AsObject = {
    blockHeight: number,
    validatorsList: Array<Validator.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class Validator extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  hasPubKey(): boolean;
  clearPubKey(): void;
  getPubKey(): google_protobuf_any_pb.Any | undefined;
  setPubKey(value?: google_protobuf_any_pb.Any): void;

  getVotingPower(): number;
  setVotingPower(value: number): void;

  getProposerPriority(): number;
  setProposerPriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Validator.AsObject;
  static toObject(includeInstance: boolean, msg: Validator): Validator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Validator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Validator;
  static deserializeBinaryFromReader(message: Validator, reader: jspb.BinaryReader): Validator;
}

export namespace Validator {
  export type AsObject = {
    address: string,
    pubKey?: google_protobuf_any_pb.Any.AsObject,
    votingPower: number,
    proposerPriority: number,
  }
}

export class GetBlockByHeightRequest extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockByHeightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockByHeightRequest): GetBlockByHeightRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockByHeightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockByHeightRequest;
  static deserializeBinaryFromReader(message: GetBlockByHeightRequest, reader: jspb.BinaryReader): GetBlockByHeightRequest;
}

export namespace GetBlockByHeightRequest {
  export type AsObject = {
    height: number,
  }
}

export class GetBlockByHeightResponse extends jspb.Message {
  hasBlockId(): boolean;
  clearBlockId(): void;
  getBlockId(): tendermint_types_types_pb.BlockID | undefined;
  setBlockId(value?: tendermint_types_types_pb.BlockID): void;

  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): tendermint_types_block_pb.Block | undefined;
  setBlock(value?: tendermint_types_block_pb.Block): void;

  hasSdkBlock(): boolean;
  clearSdkBlock(): void;
  getSdkBlock(): cosmos_base_tendermint_v1beta1_types_pb.Block | undefined;
  setSdkBlock(value?: cosmos_base_tendermint_v1beta1_types_pb.Block): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockByHeightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockByHeightResponse): GetBlockByHeightResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockByHeightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockByHeightResponse;
  static deserializeBinaryFromReader(message: GetBlockByHeightResponse, reader: jspb.BinaryReader): GetBlockByHeightResponse;
}

export namespace GetBlockByHeightResponse {
  export type AsObject = {
    blockId?: tendermint_types_types_pb.BlockID.AsObject,
    block?: tendermint_types_block_pb.Block.AsObject,
    sdkBlock?: cosmos_base_tendermint_v1beta1_types_pb.Block.AsObject,
  }
}

export class GetLatestBlockRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestBlockRequest): GetLatestBlockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLatestBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestBlockRequest;
  static deserializeBinaryFromReader(message: GetLatestBlockRequest, reader: jspb.BinaryReader): GetLatestBlockRequest;
}

export namespace GetLatestBlockRequest {
  export type AsObject = {
  }
}

export class GetLatestBlockResponse extends jspb.Message {
  hasBlockId(): boolean;
  clearBlockId(): void;
  getBlockId(): tendermint_types_types_pb.BlockID | undefined;
  setBlockId(value?: tendermint_types_types_pb.BlockID): void;

  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): tendermint_types_block_pb.Block | undefined;
  setBlock(value?: tendermint_types_block_pb.Block): void;

  hasSdkBlock(): boolean;
  clearSdkBlock(): void;
  getSdkBlock(): cosmos_base_tendermint_v1beta1_types_pb.Block | undefined;
  setSdkBlock(value?: cosmos_base_tendermint_v1beta1_types_pb.Block): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestBlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestBlockResponse): GetLatestBlockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLatestBlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestBlockResponse;
  static deserializeBinaryFromReader(message: GetLatestBlockResponse, reader: jspb.BinaryReader): GetLatestBlockResponse;
}

export namespace GetLatestBlockResponse {
  export type AsObject = {
    blockId?: tendermint_types_types_pb.BlockID.AsObject,
    block?: tendermint_types_block_pb.Block.AsObject,
    sdkBlock?: cosmos_base_tendermint_v1beta1_types_pb.Block.AsObject,
  }
}

export class GetSyncingRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSyncingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSyncingRequest): GetSyncingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSyncingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSyncingRequest;
  static deserializeBinaryFromReader(message: GetSyncingRequest, reader: jspb.BinaryReader): GetSyncingRequest;
}

export namespace GetSyncingRequest {
  export type AsObject = {
  }
}

export class GetSyncingResponse extends jspb.Message {
  getSyncing(): boolean;
  setSyncing(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSyncingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSyncingResponse): GetSyncingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSyncingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSyncingResponse;
  static deserializeBinaryFromReader(message: GetSyncingResponse, reader: jspb.BinaryReader): GetSyncingResponse;
}

export namespace GetSyncingResponse {
  export type AsObject = {
    syncing: boolean,
  }
}

export class GetNodeInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeInfoRequest): GetNodeInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeInfoRequest;
  static deserializeBinaryFromReader(message: GetNodeInfoRequest, reader: jspb.BinaryReader): GetNodeInfoRequest;
}

export namespace GetNodeInfoRequest {
  export type AsObject = {
  }
}

export class GetNodeInfoResponse extends jspb.Message {
  hasDefaultNodeInfo(): boolean;
  clearDefaultNodeInfo(): void;
  getDefaultNodeInfo(): tendermint_p2p_types_pb.DefaultNodeInfo | undefined;
  setDefaultNodeInfo(value?: tendermint_p2p_types_pb.DefaultNodeInfo): void;

  hasApplicationVersion(): boolean;
  clearApplicationVersion(): void;
  getApplicationVersion(): VersionInfo | undefined;
  setApplicationVersion(value?: VersionInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeInfoResponse): GetNodeInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeInfoResponse;
  static deserializeBinaryFromReader(message: GetNodeInfoResponse, reader: jspb.BinaryReader): GetNodeInfoResponse;
}

export namespace GetNodeInfoResponse {
  export type AsObject = {
    defaultNodeInfo?: tendermint_p2p_types_pb.DefaultNodeInfo.AsObject,
    applicationVersion?: VersionInfo.AsObject,
  }
}

export class VersionInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAppName(): string;
  setAppName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getGitCommit(): string;
  setGitCommit(value: string): void;

  getBuildTags(): string;
  setBuildTags(value: string): void;

  getGoVersion(): string;
  setGoVersion(value: string): void;

  clearBuildDepsList(): void;
  getBuildDepsList(): Array<Module>;
  setBuildDepsList(value: Array<Module>): void;
  addBuildDeps(value?: Module, index?: number): Module;

  getCosmosSdkVersion(): string;
  setCosmosSdkVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VersionInfo): VersionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionInfo;
  static deserializeBinaryFromReader(message: VersionInfo, reader: jspb.BinaryReader): VersionInfo;
}

export namespace VersionInfo {
  export type AsObject = {
    name: string,
    appName: string,
    version: string,
    gitCommit: string,
    buildTags: string,
    goVersion: string,
    buildDepsList: Array<Module.AsObject>,
    cosmosSdkVersion: string,
  }
}

export class Module extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getSum(): string;
  setSum(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Module.AsObject;
  static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Module;
  static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
}

export namespace Module {
  export type AsObject = {
    path: string,
    version: string,
    sum: string,
  }
}

export class ABCIQueryRequest extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getPath(): string;
  setPath(value: string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getProve(): boolean;
  setProve(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ABCIQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ABCIQueryRequest): ABCIQueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ABCIQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ABCIQueryRequest;
  static deserializeBinaryFromReader(message: ABCIQueryRequest, reader: jspb.BinaryReader): ABCIQueryRequest;
}

export namespace ABCIQueryRequest {
  export type AsObject = {
    data: Uint8Array | string,
    path: string,
    height: number,
    prove: boolean,
  }
}

export class ABCIQueryResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getLog(): string;
  setLog(value: string): void;

  getInfo(): string;
  setInfo(value: string): void;

  getIndex(): number;
  setIndex(value: number): void;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  hasProofOps(): boolean;
  clearProofOps(): void;
  getProofOps(): ProofOps | undefined;
  setProofOps(value?: ProofOps): void;

  getHeight(): number;
  setHeight(value: number): void;

  getCodespace(): string;
  setCodespace(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ABCIQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ABCIQueryResponse): ABCIQueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ABCIQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ABCIQueryResponse;
  static deserializeBinaryFromReader(message: ABCIQueryResponse, reader: jspb.BinaryReader): ABCIQueryResponse;
}

export namespace ABCIQueryResponse {
  export type AsObject = {
    code: number,
    log: string,
    info: string,
    index: number,
    key: Uint8Array | string,
    value: Uint8Array | string,
    proofOps?: ProofOps.AsObject,
    height: number,
    codespace: string,
  }
}

export class ProofOp extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProofOp.AsObject;
  static toObject(includeInstance: boolean, msg: ProofOp): ProofOp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProofOp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProofOp;
  static deserializeBinaryFromReader(message: ProofOp, reader: jspb.BinaryReader): ProofOp;
}

export namespace ProofOp {
  export type AsObject = {
    type: string,
    key: Uint8Array | string,
    data: Uint8Array | string,
  }
}

export class ProofOps extends jspb.Message {
  clearOpsList(): void;
  getOpsList(): Array<ProofOp>;
  setOpsList(value: Array<ProofOp>): void;
  addOps(value?: ProofOp, index?: number): ProofOp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProofOps.AsObject;
  static toObject(includeInstance: boolean, msg: ProofOps): ProofOps.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProofOps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProofOps;
  static deserializeBinaryFromReader(message: ProofOps, reader: jspb.BinaryReader): ProofOps;
}

export namespace ProofOps {
  export type AsObject = {
    opsList: Array<ProofOp.AsObject>,
  }
}

