// package: bandchain.v1.oracle
// file: bandchain/v1/oracle/proof.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as oracle_v1_oracle_pb from "../../../oracle/v1/oracle_pb";

export class QueryProofRequest extends jspb.Message {
  getRequestId(): number;
  setRequestId(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryProofRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryProofRequest): QueryProofRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryProofRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryProofRequest;
  static deserializeBinaryFromReader(message: QueryProofRequest, reader: jspb.BinaryReader): QueryProofRequest;
}

export namespace QueryProofRequest {
  export type AsObject = {
    requestId: number,
    height: number,
  }
}

export class QueryProofResponse extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): SingleProofResponse | undefined;
  setResult(value?: SingleProofResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryProofResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryProofResponse): QueryProofResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryProofResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryProofResponse;
  static deserializeBinaryFromReader(message: QueryProofResponse, reader: jspb.BinaryReader): QueryProofResponse;
}

export namespace QueryProofResponse {
  export type AsObject = {
    height: number,
    result?: SingleProofResponse.AsObject,
  }
}

export class QueryMultiProofRequest extends jspb.Message {
  clearRequestIdsList(): void;
  getRequestIdsList(): Array<number>;
  setRequestIdsList(value: Array<number>): void;
  addRequestIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryMultiProofRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryMultiProofRequest): QueryMultiProofRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryMultiProofRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryMultiProofRequest;
  static deserializeBinaryFromReader(message: QueryMultiProofRequest, reader: jspb.BinaryReader): QueryMultiProofRequest;
}

export namespace QueryMultiProofRequest {
  export type AsObject = {
    requestIdsList: Array<number>,
  }
}

export class QueryMultiProofResponse extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): MultiProofResponse | undefined;
  setResult(value?: MultiProofResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryMultiProofResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryMultiProofResponse): QueryMultiProofResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryMultiProofResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryMultiProofResponse;
  static deserializeBinaryFromReader(message: QueryMultiProofResponse, reader: jspb.BinaryReader): QueryMultiProofResponse;
}

export namespace QueryMultiProofResponse {
  export type AsObject = {
    height: number,
    result?: MultiProofResponse.AsObject,
  }
}

export class QueryRequestCountProofRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequestCountProofRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequestCountProofRequest): QueryRequestCountProofRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRequestCountProofRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequestCountProofRequest;
  static deserializeBinaryFromReader(message: QueryRequestCountProofRequest, reader: jspb.BinaryReader): QueryRequestCountProofRequest;
}

export namespace QueryRequestCountProofRequest {
  export type AsObject = {
  }
}

export class QueryRequestCountProofResponse extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): CountProofResponse | undefined;
  setResult(value?: CountProofResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequestCountProofResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequestCountProofResponse): QueryRequestCountProofResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRequestCountProofResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequestCountProofResponse;
  static deserializeBinaryFromReader(message: QueryRequestCountProofResponse, reader: jspb.BinaryReader): QueryRequestCountProofResponse;
}

export namespace QueryRequestCountProofResponse {
  export type AsObject = {
    height: number,
    result?: CountProofResponse.AsObject,
  }
}

export class SingleProofResponse extends jspb.Message {
  hasProof(): boolean;
  clearProof(): void;
  getProof(): SingleProof | undefined;
  setProof(value?: SingleProof): void;

  getEvmProofBytes(): Uint8Array | string;
  getEvmProofBytes_asU8(): Uint8Array;
  getEvmProofBytes_asB64(): string;
  setEvmProofBytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleProofResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SingleProofResponse): SingleProofResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SingleProofResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleProofResponse;
  static deserializeBinaryFromReader(message: SingleProofResponse, reader: jspb.BinaryReader): SingleProofResponse;
}

export namespace SingleProofResponse {
  export type AsObject = {
    proof?: SingleProof.AsObject,
    evmProofBytes: Uint8Array | string,
  }
}

export class MultiProofResponse extends jspb.Message {
  hasProof(): boolean;
  clearProof(): void;
  getProof(): MultiProof | undefined;
  setProof(value?: MultiProof): void;

  getEvmProofBytes(): Uint8Array | string;
  getEvmProofBytes_asU8(): Uint8Array;
  getEvmProofBytes_asB64(): string;
  setEvmProofBytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiProofResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MultiProofResponse): MultiProofResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiProofResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiProofResponse;
  static deserializeBinaryFromReader(message: MultiProofResponse, reader: jspb.BinaryReader): MultiProofResponse;
}

export namespace MultiProofResponse {
  export type AsObject = {
    proof?: MultiProof.AsObject,
    evmProofBytes: Uint8Array | string,
  }
}

export class CountProofResponse extends jspb.Message {
  hasProof(): boolean;
  clearProof(): void;
  getProof(): CountProof | undefined;
  setProof(value?: CountProof): void;

  getEvmProofBytes(): Uint8Array | string;
  getEvmProofBytes_asU8(): Uint8Array;
  getEvmProofBytes_asB64(): string;
  setEvmProofBytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountProofResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountProofResponse): CountProofResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CountProofResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountProofResponse;
  static deserializeBinaryFromReader(message: CountProofResponse, reader: jspb.BinaryReader): CountProofResponse;
}

export namespace CountProofResponse {
  export type AsObject = {
    proof?: CountProof.AsObject,
    evmProofBytes: Uint8Array | string,
  }
}

export class SingleProof extends jspb.Message {
  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  hasOracleDataProof(): boolean;
  clearOracleDataProof(): void;
  getOracleDataProof(): OracleDataProof | undefined;
  setOracleDataProof(value?: OracleDataProof): void;

  hasBlockRelayProof(): boolean;
  clearBlockRelayProof(): void;
  getBlockRelayProof(): BlockRelayProof | undefined;
  setBlockRelayProof(value?: BlockRelayProof): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleProof.AsObject;
  static toObject(includeInstance: boolean, msg: SingleProof): SingleProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SingleProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleProof;
  static deserializeBinaryFromReader(message: SingleProof, reader: jspb.BinaryReader): SingleProof;
}

export namespace SingleProof {
  export type AsObject = {
    blockHeight: number,
    oracleDataProof?: OracleDataProof.AsObject,
    blockRelayProof?: BlockRelayProof.AsObject,
  }
}

export class MultiProof extends jspb.Message {
  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  clearOracleDataMultiProofList(): void;
  getOracleDataMultiProofList(): Array<OracleDataProof>;
  setOracleDataMultiProofList(value: Array<OracleDataProof>): void;
  addOracleDataMultiProof(value?: OracleDataProof, index?: number): OracleDataProof;

  hasBlockRelayProof(): boolean;
  clearBlockRelayProof(): void;
  getBlockRelayProof(): BlockRelayProof | undefined;
  setBlockRelayProof(value?: BlockRelayProof): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiProof.AsObject;
  static toObject(includeInstance: boolean, msg: MultiProof): MultiProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiProof;
  static deserializeBinaryFromReader(message: MultiProof, reader: jspb.BinaryReader): MultiProof;
}

export namespace MultiProof {
  export type AsObject = {
    blockHeight: number,
    oracleDataMultiProofList: Array<OracleDataProof.AsObject>,
    blockRelayProof?: BlockRelayProof.AsObject,
  }
}

export class CountProof extends jspb.Message {
  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  hasCountProof(): boolean;
  clearCountProof(): void;
  getCountProof(): RequestsCountProof | undefined;
  setCountProof(value?: RequestsCountProof): void;

  hasBlockRelayProof(): boolean;
  clearBlockRelayProof(): void;
  getBlockRelayProof(): BlockRelayProof | undefined;
  setBlockRelayProof(value?: BlockRelayProof): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountProof.AsObject;
  static toObject(includeInstance: boolean, msg: CountProof): CountProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CountProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountProof;
  static deserializeBinaryFromReader(message: CountProof, reader: jspb.BinaryReader): CountProof;
}

export namespace CountProof {
  export type AsObject = {
    blockHeight: number,
    countProof?: RequestsCountProof.AsObject,
    blockRelayProof?: BlockRelayProof.AsObject,
  }
}

export class OracleDataProof extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): oracle_v1_oracle_pb.Result | undefined;
  setResult(value?: oracle_v1_oracle_pb.Result): void;

  getVersion(): number;
  setVersion(value: number): void;

  clearMerklePathsList(): void;
  getMerklePathsList(): Array<IAVLMerklePath>;
  setMerklePathsList(value: Array<IAVLMerklePath>): void;
  addMerklePaths(value?: IAVLMerklePath, index?: number): IAVLMerklePath;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleDataProof.AsObject;
  static toObject(includeInstance: boolean, msg: OracleDataProof): OracleDataProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OracleDataProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleDataProof;
  static deserializeBinaryFromReader(message: OracleDataProof, reader: jspb.BinaryReader): OracleDataProof;
}

export namespace OracleDataProof {
  export type AsObject = {
    result?: oracle_v1_oracle_pb.Result.AsObject,
    version: number,
    merklePathsList: Array<IAVLMerklePath.AsObject>,
  }
}

export class IAVLMerklePath extends jspb.Message {
  getIsDataOnRight(): boolean;
  setIsDataOnRight(value: boolean): void;

  getSubtreeHeight(): number;
  setSubtreeHeight(value: number): void;

  getSubtreeSize(): number;
  setSubtreeSize(value: number): void;

  getSubtreeVersion(): number;
  setSubtreeVersion(value: number): void;

  getSiblingHash(): Uint8Array | string;
  getSiblingHash_asU8(): Uint8Array;
  getSiblingHash_asB64(): string;
  setSiblingHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IAVLMerklePath.AsObject;
  static toObject(includeInstance: boolean, msg: IAVLMerklePath): IAVLMerklePath.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IAVLMerklePath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IAVLMerklePath;
  static deserializeBinaryFromReader(message: IAVLMerklePath, reader: jspb.BinaryReader): IAVLMerklePath;
}

export namespace IAVLMerklePath {
  export type AsObject = {
    isDataOnRight: boolean,
    subtreeHeight: number,
    subtreeSize: number,
    subtreeVersion: number,
    siblingHash: Uint8Array | string,
  }
}

export class BlockRelayProof extends jspb.Message {
  hasMultiStoreProof(): boolean;
  clearMultiStoreProof(): void;
  getMultiStoreProof(): MultiStoreProof | undefined;
  setMultiStoreProof(value?: MultiStoreProof): void;

  hasBlockHeaderMerkleParts(): boolean;
  clearBlockHeaderMerkleParts(): void;
  getBlockHeaderMerkleParts(): BlockHeaderMerkleParts | undefined;
  setBlockHeaderMerkleParts(value?: BlockHeaderMerkleParts): void;

  hasCommonEncodedVotePart(): boolean;
  clearCommonEncodedVotePart(): void;
  getCommonEncodedVotePart(): CommonEncodedVotePart | undefined;
  setCommonEncodedVotePart(value?: CommonEncodedVotePart): void;

  clearSignaturesList(): void;
  getSignaturesList(): Array<TMSignature>;
  setSignaturesList(value: Array<TMSignature>): void;
  addSignatures(value?: TMSignature, index?: number): TMSignature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockRelayProof.AsObject;
  static toObject(includeInstance: boolean, msg: BlockRelayProof): BlockRelayProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockRelayProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockRelayProof;
  static deserializeBinaryFromReader(message: BlockRelayProof, reader: jspb.BinaryReader): BlockRelayProof;
}

export namespace BlockRelayProof {
  export type AsObject = {
    multiStoreProof?: MultiStoreProof.AsObject,
    blockHeaderMerkleParts?: BlockHeaderMerkleParts.AsObject,
    commonEncodedVotePart?: CommonEncodedVotePart.AsObject,
    signaturesList: Array<TMSignature.AsObject>,
  }
}

export class MultiStoreProof extends jspb.Message {
  getOracleIavlStateHash(): Uint8Array | string;
  getOracleIavlStateHash_asU8(): Uint8Array;
  getOracleIavlStateHash_asB64(): string;
  setOracleIavlStateHash(value: Uint8Array | string): void;

  getMintStoreMerkleHash(): Uint8Array | string;
  getMintStoreMerkleHash_asU8(): Uint8Array;
  getMintStoreMerkleHash_asB64(): string;
  setMintStoreMerkleHash(value: Uint8Array | string): void;

  getParamsToSlashingStoresMerkleHash(): Uint8Array | string;
  getParamsToSlashingStoresMerkleHash_asU8(): Uint8Array;
  getParamsToSlashingStoresMerkleHash_asB64(): string;
  setParamsToSlashingStoresMerkleHash(value: Uint8Array | string): void;

  getGovToIcahostStoresMerkleHash(): Uint8Array | string;
  getGovToIcahostStoresMerkleHash_asU8(): Uint8Array;
  getGovToIcahostStoresMerkleHash_asB64(): string;
  setGovToIcahostStoresMerkleHash(value: Uint8Array | string): void;

  getAuthToFeegrantStoresMerkleHash(): Uint8Array | string;
  getAuthToFeegrantStoresMerkleHash_asU8(): Uint8Array;
  getAuthToFeegrantStoresMerkleHash_asB64(): string;
  setAuthToFeegrantStoresMerkleHash(value: Uint8Array | string): void;

  getStakingToUpgradeStoresMerkleHash(): Uint8Array | string;
  getStakingToUpgradeStoresMerkleHash_asU8(): Uint8Array;
  getStakingToUpgradeStoresMerkleHash_asB64(): string;
  setStakingToUpgradeStoresMerkleHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiStoreProof.AsObject;
  static toObject(includeInstance: boolean, msg: MultiStoreProof): MultiStoreProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiStoreProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiStoreProof;
  static deserializeBinaryFromReader(message: MultiStoreProof, reader: jspb.BinaryReader): MultiStoreProof;
}

export namespace MultiStoreProof {
  export type AsObject = {
    oracleIavlStateHash: Uint8Array | string,
    mintStoreMerkleHash: Uint8Array | string,
    paramsToSlashingStoresMerkleHash: Uint8Array | string,
    govToIcahostStoresMerkleHash: Uint8Array | string,
    authToFeegrantStoresMerkleHash: Uint8Array | string,
    stakingToUpgradeStoresMerkleHash: Uint8Array | string,
  }
}

export class BlockHeaderMerkleParts extends jspb.Message {
  getVersionAndChainIdHash(): Uint8Array | string;
  getVersionAndChainIdHash_asU8(): Uint8Array;
  getVersionAndChainIdHash_asB64(): string;
  setVersionAndChainIdHash(value: Uint8Array | string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getTimeSecond(): number;
  setTimeSecond(value: number): void;

  getTimeNanoSecond(): number;
  setTimeNanoSecond(value: number): void;

  getLastBlockIdAndOther(): Uint8Array | string;
  getLastBlockIdAndOther_asU8(): Uint8Array;
  getLastBlockIdAndOther_asB64(): string;
  setLastBlockIdAndOther(value: Uint8Array | string): void;

  getNextValidatorHashAndConsensusHash(): Uint8Array | string;
  getNextValidatorHashAndConsensusHash_asU8(): Uint8Array;
  getNextValidatorHashAndConsensusHash_asB64(): string;
  setNextValidatorHashAndConsensusHash(value: Uint8Array | string): void;

  getLastResultsHash(): Uint8Array | string;
  getLastResultsHash_asU8(): Uint8Array;
  getLastResultsHash_asB64(): string;
  setLastResultsHash(value: Uint8Array | string): void;

  getEvidenceAndProposerHash(): Uint8Array | string;
  getEvidenceAndProposerHash_asU8(): Uint8Array;
  getEvidenceAndProposerHash_asB64(): string;
  setEvidenceAndProposerHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockHeaderMerkleParts.AsObject;
  static toObject(includeInstance: boolean, msg: BlockHeaderMerkleParts): BlockHeaderMerkleParts.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockHeaderMerkleParts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockHeaderMerkleParts;
  static deserializeBinaryFromReader(message: BlockHeaderMerkleParts, reader: jspb.BinaryReader): BlockHeaderMerkleParts;
}

export namespace BlockHeaderMerkleParts {
  export type AsObject = {
    versionAndChainIdHash: Uint8Array | string,
    height: number,
    timeSecond: number,
    timeNanoSecond: number,
    lastBlockIdAndOther: Uint8Array | string,
    nextValidatorHashAndConsensusHash: Uint8Array | string,
    lastResultsHash: Uint8Array | string,
    evidenceAndProposerHash: Uint8Array | string,
  }
}

export class CommonEncodedVotePart extends jspb.Message {
  getSignedDataPrefix(): Uint8Array | string;
  getSignedDataPrefix_asU8(): Uint8Array;
  getSignedDataPrefix_asB64(): string;
  setSignedDataPrefix(value: Uint8Array | string): void;

  getSignedDataSuffix(): Uint8Array | string;
  getSignedDataSuffix_asU8(): Uint8Array;
  getSignedDataSuffix_asB64(): string;
  setSignedDataSuffix(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonEncodedVotePart.AsObject;
  static toObject(includeInstance: boolean, msg: CommonEncodedVotePart): CommonEncodedVotePart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommonEncodedVotePart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonEncodedVotePart;
  static deserializeBinaryFromReader(message: CommonEncodedVotePart, reader: jspb.BinaryReader): CommonEncodedVotePart;
}

export namespace CommonEncodedVotePart {
  export type AsObject = {
    signedDataPrefix: Uint8Array | string,
    signedDataSuffix: Uint8Array | string,
  }
}

export class TMSignature extends jspb.Message {
  getR(): Uint8Array | string;
  getR_asU8(): Uint8Array;
  getR_asB64(): string;
  setR(value: Uint8Array | string): void;

  getS(): Uint8Array | string;
  getS_asU8(): Uint8Array;
  getS_asB64(): string;
  setS(value: Uint8Array | string): void;

  getV(): number;
  setV(value: number): void;

  getEncodedTimestamp(): Uint8Array | string;
  getEncodedTimestamp_asU8(): Uint8Array;
  getEncodedTimestamp_asB64(): string;
  setEncodedTimestamp(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TMSignature.AsObject;
  static toObject(includeInstance: boolean, msg: TMSignature): TMSignature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TMSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TMSignature;
  static deserializeBinaryFromReader(message: TMSignature, reader: jspb.BinaryReader): TMSignature;
}

export namespace TMSignature {
  export type AsObject = {
    r: Uint8Array | string,
    s: Uint8Array | string,
    v: number,
    encodedTimestamp: Uint8Array | string,
  }
}

export class RequestsCountProof extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  clearMerklePathsList(): void;
  getMerklePathsList(): Array<IAVLMerklePath>;
  setMerklePathsList(value: Array<IAVLMerklePath>): void;
  addMerklePaths(value?: IAVLMerklePath, index?: number): IAVLMerklePath;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestsCountProof.AsObject;
  static toObject(includeInstance: boolean, msg: RequestsCountProof): RequestsCountProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestsCountProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestsCountProof;
  static deserializeBinaryFromReader(message: RequestsCountProof, reader: jspb.BinaryReader): RequestsCountProof;
}

export namespace RequestsCountProof {
  export type AsObject = {
    count: number,
    version: number,
    merklePathsList: Array<IAVLMerklePath.AsObject>,
  }
}

