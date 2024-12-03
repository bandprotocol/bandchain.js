// package: band.base.oracle.v1
// file: band/base/oracle/v1/proof.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as band_oracle_v1_oracle_pb from "../../../../band/oracle/v1/oracle_pb";

export class ProofRequest extends jspb.Message {
  getRequestId(): number;
  setRequestId(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProofRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProofRequest): ProofRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProofRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProofRequest;
  static deserializeBinaryFromReader(message: ProofRequest, reader: jspb.BinaryReader): ProofRequest;
}

export namespace ProofRequest {
  export type AsObject = {
    requestId: number,
    height: number,
  }
}

export class ProofResponse extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): SingleProofResult | undefined;
  setResult(value?: SingleProofResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProofResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProofResponse): ProofResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProofResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProofResponse;
  static deserializeBinaryFromReader(message: ProofResponse, reader: jspb.BinaryReader): ProofResponse;
}

export namespace ProofResponse {
  export type AsObject = {
    height: number,
    result?: SingleProofResult.AsObject,
  }
}

export class MultiProofRequest extends jspb.Message {
  clearRequestIdsList(): void;
  getRequestIdsList(): Array<number>;
  setRequestIdsList(value: Array<number>): void;
  addRequestIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiProofRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MultiProofRequest): MultiProofRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiProofRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiProofRequest;
  static deserializeBinaryFromReader(message: MultiProofRequest, reader: jspb.BinaryReader): MultiProofRequest;
}

export namespace MultiProofRequest {
  export type AsObject = {
    requestIdsList: Array<number>,
  }
}

export class MultiProofResponse extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): MultiProofResult | undefined;
  setResult(value?: MultiProofResult): void;

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
    height: number,
    result?: MultiProofResult.AsObject,
  }
}

export class RequestCountProofRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCountProofRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCountProofRequest): RequestCountProofRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestCountProofRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCountProofRequest;
  static deserializeBinaryFromReader(message: RequestCountProofRequest, reader: jspb.BinaryReader): RequestCountProofRequest;
}

export namespace RequestCountProofRequest {
  export type AsObject = {
  }
}

export class RequestCountProofResponse extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): CountProofResult | undefined;
  setResult(value?: CountProofResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCountProofResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCountProofResponse): RequestCountProofResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestCountProofResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCountProofResponse;
  static deserializeBinaryFromReader(message: RequestCountProofResponse, reader: jspb.BinaryReader): RequestCountProofResponse;
}

export namespace RequestCountProofResponse {
  export type AsObject = {
    height: number,
    result?: CountProofResult.AsObject,
  }
}

export class SingleProofResult extends jspb.Message {
  hasProof(): boolean;
  clearProof(): void;
  getProof(): SingleProof | undefined;
  setProof(value?: SingleProof): void;

  getEvmProofBytes(): Uint8Array | string;
  getEvmProofBytes_asU8(): Uint8Array;
  getEvmProofBytes_asB64(): string;
  setEvmProofBytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleProofResult.AsObject;
  static toObject(includeInstance: boolean, msg: SingleProofResult): SingleProofResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SingleProofResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleProofResult;
  static deserializeBinaryFromReader(message: SingleProofResult, reader: jspb.BinaryReader): SingleProofResult;
}

export namespace SingleProofResult {
  export type AsObject = {
    proof?: SingleProof.AsObject,
    evmProofBytes: Uint8Array | string,
  }
}

export class MultiProofResult extends jspb.Message {
  hasProof(): boolean;
  clearProof(): void;
  getProof(): MultiProof | undefined;
  setProof(value?: MultiProof): void;

  getEvmProofBytes(): Uint8Array | string;
  getEvmProofBytes_asU8(): Uint8Array;
  getEvmProofBytes_asB64(): string;
  setEvmProofBytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiProofResult.AsObject;
  static toObject(includeInstance: boolean, msg: MultiProofResult): MultiProofResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiProofResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiProofResult;
  static deserializeBinaryFromReader(message: MultiProofResult, reader: jspb.BinaryReader): MultiProofResult;
}

export namespace MultiProofResult {
  export type AsObject = {
    proof?: MultiProof.AsObject,
    evmProofBytes: Uint8Array | string,
  }
}

export class CountProofResult extends jspb.Message {
  hasProof(): boolean;
  clearProof(): void;
  getProof(): CountProof | undefined;
  setProof(value?: CountProof): void;

  getEvmProofBytes(): Uint8Array | string;
  getEvmProofBytes_asU8(): Uint8Array;
  getEvmProofBytes_asB64(): string;
  setEvmProofBytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountProofResult.AsObject;
  static toObject(includeInstance: boolean, msg: CountProofResult): CountProofResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CountProofResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountProofResult;
  static deserializeBinaryFromReader(message: CountProofResult, reader: jspb.BinaryReader): CountProofResult;
}

export namespace CountProofResult {
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
  getResult(): band_oracle_v1_oracle_pb.Result | undefined;
  setResult(value?: band_oracle_v1_oracle_pb.Result): void;

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
    result?: band_oracle_v1_oracle_pb.Result.AsObject,
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

  getParamsToRestakeStoresMerkleHash(): Uint8Array | string;
  getParamsToRestakeStoresMerkleHash_asU8(): Uint8Array;
  getParamsToRestakeStoresMerkleHash_asB64(): string;
  setParamsToRestakeStoresMerkleHash(value: Uint8Array | string): void;

  getRollingseedToTransferStoresMerkleHash(): Uint8Array | string;
  getRollingseedToTransferStoresMerkleHash_asU8(): Uint8Array;
  getRollingseedToTransferStoresMerkleHash_asB64(): string;
  setRollingseedToTransferStoresMerkleHash(value: Uint8Array | string): void;

  getTssToUpgradeStoresMerkleHash(): Uint8Array | string;
  getTssToUpgradeStoresMerkleHash_asU8(): Uint8Array;
  getTssToUpgradeStoresMerkleHash_asB64(): string;
  setTssToUpgradeStoresMerkleHash(value: Uint8Array | string): void;

  getAuthToIcahostStoresMerkleHash(): Uint8Array | string;
  getAuthToIcahostStoresMerkleHash_asU8(): Uint8Array;
  getAuthToIcahostStoresMerkleHash_asB64(): string;
  setAuthToIcahostStoresMerkleHash(value: Uint8Array | string): void;

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
    paramsToRestakeStoresMerkleHash: Uint8Array | string,
    rollingseedToTransferStoresMerkleHash: Uint8Array | string,
    tssToUpgradeStoresMerkleHash: Uint8Array | string,
    authToIcahostStoresMerkleHash: Uint8Array | string,
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

