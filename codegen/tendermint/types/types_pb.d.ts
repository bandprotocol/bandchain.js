// package: tendermint.types
// file: tendermint/types/types.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as tendermint_crypto_proof_pb from "../../tendermint/crypto/proof_pb";
import * as tendermint_version_types_pb from "../../tendermint/version/types_pb";
import * as tendermint_types_validator_pb from "../../tendermint/types/validator_pb";

export class PartSetHeader extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartSetHeader.AsObject;
  static toObject(includeInstance: boolean, msg: PartSetHeader): PartSetHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartSetHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartSetHeader;
  static deserializeBinaryFromReader(message: PartSetHeader, reader: jspb.BinaryReader): PartSetHeader;
}

export namespace PartSetHeader {
  export type AsObject = {
    total: number,
    hash: Uint8Array | string,
  }
}

export class Part extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getBytes(): Uint8Array | string;
  getBytes_asU8(): Uint8Array;
  getBytes_asB64(): string;
  setBytes(value: Uint8Array | string): void;

  hasProof(): boolean;
  clearProof(): void;
  getProof(): tendermint_crypto_proof_pb.Proof | undefined;
  setProof(value?: tendermint_crypto_proof_pb.Proof): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Part.AsObject;
  static toObject(includeInstance: boolean, msg: Part): Part.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Part, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Part;
  static deserializeBinaryFromReader(message: Part, reader: jspb.BinaryReader): Part;
}

export namespace Part {
  export type AsObject = {
    index: number,
    bytes: Uint8Array | string,
    proof?: tendermint_crypto_proof_pb.Proof.AsObject,
  }
}

export class BlockID extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  hasPartSetHeader(): boolean;
  clearPartSetHeader(): void;
  getPartSetHeader(): PartSetHeader | undefined;
  setPartSetHeader(value?: PartSetHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockID.AsObject;
  static toObject(includeInstance: boolean, msg: BlockID): BlockID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockID;
  static deserializeBinaryFromReader(message: BlockID, reader: jspb.BinaryReader): BlockID;
}

export namespace BlockID {
  export type AsObject = {
    hash: Uint8Array | string,
    partSetHeader?: PartSetHeader.AsObject,
  }
}

export class Header extends jspb.Message {
  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): tendermint_version_types_pb.Consensus | undefined;
  setVersion(value?: tendermint_version_types_pb.Consensus): void;

  getChainId(): string;
  setChainId(value: string): void;

  getHeight(): number;
  setHeight(value: number): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastBlockId(): boolean;
  clearLastBlockId(): void;
  getLastBlockId(): BlockID | undefined;
  setLastBlockId(value?: BlockID): void;

  getLastCommitHash(): Uint8Array | string;
  getLastCommitHash_asU8(): Uint8Array;
  getLastCommitHash_asB64(): string;
  setLastCommitHash(value: Uint8Array | string): void;

  getDataHash(): Uint8Array | string;
  getDataHash_asU8(): Uint8Array;
  getDataHash_asB64(): string;
  setDataHash(value: Uint8Array | string): void;

  getValidatorsHash(): Uint8Array | string;
  getValidatorsHash_asU8(): Uint8Array;
  getValidatorsHash_asB64(): string;
  setValidatorsHash(value: Uint8Array | string): void;

  getNextValidatorsHash(): Uint8Array | string;
  getNextValidatorsHash_asU8(): Uint8Array;
  getNextValidatorsHash_asB64(): string;
  setNextValidatorsHash(value: Uint8Array | string): void;

  getConsensusHash(): Uint8Array | string;
  getConsensusHash_asU8(): Uint8Array;
  getConsensusHash_asB64(): string;
  setConsensusHash(value: Uint8Array | string): void;

  getAppHash(): Uint8Array | string;
  getAppHash_asU8(): Uint8Array;
  getAppHash_asB64(): string;
  setAppHash(value: Uint8Array | string): void;

  getLastResultsHash(): Uint8Array | string;
  getLastResultsHash_asU8(): Uint8Array;
  getLastResultsHash_asB64(): string;
  setLastResultsHash(value: Uint8Array | string): void;

  getEvidenceHash(): Uint8Array | string;
  getEvidenceHash_asU8(): Uint8Array;
  getEvidenceHash_asB64(): string;
  setEvidenceHash(value: Uint8Array | string): void;

  getProposerAddress(): Uint8Array | string;
  getProposerAddress_asU8(): Uint8Array;
  getProposerAddress_asB64(): string;
  setProposerAddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Header.AsObject;
  static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Header;
  static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
}

export namespace Header {
  export type AsObject = {
    version?: tendermint_version_types_pb.Consensus.AsObject,
    chainId: string,
    height: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastBlockId?: BlockID.AsObject,
    lastCommitHash: Uint8Array | string,
    dataHash: Uint8Array | string,
    validatorsHash: Uint8Array | string,
    nextValidatorsHash: Uint8Array | string,
    consensusHash: Uint8Array | string,
    appHash: Uint8Array | string,
    lastResultsHash: Uint8Array | string,
    evidenceHash: Uint8Array | string,
    proposerAddress: Uint8Array | string,
  }
}

export class Data extends jspb.Message {
  clearTxsList(): void;
  getTxsList(): Array<Uint8Array | string>;
  getTxsList_asU8(): Array<Uint8Array>;
  getTxsList_asB64(): Array<string>;
  setTxsList(value: Array<Uint8Array | string>): void;
  addTxs(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Data.AsObject;
  static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Data;
  static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
}

export namespace Data {
  export type AsObject = {
    txsList: Array<Uint8Array | string>,
  }
}

export class Vote extends jspb.Message {
  getType(): SignedMsgTypeMap[keyof SignedMsgTypeMap];
  setType(value: SignedMsgTypeMap[keyof SignedMsgTypeMap]): void;

  getHeight(): number;
  setHeight(value: number): void;

  getRound(): number;
  setRound(value: number): void;

  hasBlockId(): boolean;
  clearBlockId(): void;
  getBlockId(): BlockID | undefined;
  setBlockId(value?: BlockID): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getValidatorAddress(): Uint8Array | string;
  getValidatorAddress_asU8(): Uint8Array;
  getValidatorAddress_asB64(): string;
  setValidatorAddress(value: Uint8Array | string): void;

  getValidatorIndex(): number;
  setValidatorIndex(value: number): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vote.AsObject;
  static toObject(includeInstance: boolean, msg: Vote): Vote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vote;
  static deserializeBinaryFromReader(message: Vote, reader: jspb.BinaryReader): Vote;
}

export namespace Vote {
  export type AsObject = {
    type: SignedMsgTypeMap[keyof SignedMsgTypeMap],
    height: number,
    round: number,
    blockId?: BlockID.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    validatorAddress: Uint8Array | string,
    validatorIndex: number,
    signature: Uint8Array | string,
  }
}

export class Commit extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  getRound(): number;
  setRound(value: number): void;

  hasBlockId(): boolean;
  clearBlockId(): void;
  getBlockId(): BlockID | undefined;
  setBlockId(value?: BlockID): void;

  clearSignaturesList(): void;
  getSignaturesList(): Array<CommitSig>;
  setSignaturesList(value: Array<CommitSig>): void;
  addSignatures(value?: CommitSig, index?: number): CommitSig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Commit.AsObject;
  static toObject(includeInstance: boolean, msg: Commit): Commit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Commit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Commit;
  static deserializeBinaryFromReader(message: Commit, reader: jspb.BinaryReader): Commit;
}

export namespace Commit {
  export type AsObject = {
    height: number,
    round: number,
    blockId?: BlockID.AsObject,
    signaturesList: Array<CommitSig.AsObject>,
  }
}

export class CommitSig extends jspb.Message {
  getBlockIdFlag(): BlockIDFlagMap[keyof BlockIDFlagMap];
  setBlockIdFlag(value: BlockIDFlagMap[keyof BlockIDFlagMap]): void;

  getValidatorAddress(): Uint8Array | string;
  getValidatorAddress_asU8(): Uint8Array;
  getValidatorAddress_asB64(): string;
  setValidatorAddress(value: Uint8Array | string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitSig.AsObject;
  static toObject(includeInstance: boolean, msg: CommitSig): CommitSig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommitSig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitSig;
  static deserializeBinaryFromReader(message: CommitSig, reader: jspb.BinaryReader): CommitSig;
}

export namespace CommitSig {
  export type AsObject = {
    blockIdFlag: BlockIDFlagMap[keyof BlockIDFlagMap],
    validatorAddress: Uint8Array | string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    signature: Uint8Array | string,
  }
}

export class Proposal extends jspb.Message {
  getType(): SignedMsgTypeMap[keyof SignedMsgTypeMap];
  setType(value: SignedMsgTypeMap[keyof SignedMsgTypeMap]): void;

  getHeight(): number;
  setHeight(value: number): void;

  getRound(): number;
  setRound(value: number): void;

  getPolRound(): number;
  setPolRound(value: number): void;

  hasBlockId(): boolean;
  clearBlockId(): void;
  getBlockId(): BlockID | undefined;
  setBlockId(value?: BlockID): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proposal.AsObject;
  static toObject(includeInstance: boolean, msg: Proposal): Proposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Proposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proposal;
  static deserializeBinaryFromReader(message: Proposal, reader: jspb.BinaryReader): Proposal;
}

export namespace Proposal {
  export type AsObject = {
    type: SignedMsgTypeMap[keyof SignedMsgTypeMap],
    height: number,
    round: number,
    polRound: number,
    blockId?: BlockID.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    signature: Uint8Array | string,
  }
}

export class SignedHeader extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasCommit(): boolean;
  clearCommit(): void;
  getCommit(): Commit | undefined;
  setCommit(value?: Commit): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignedHeader.AsObject;
  static toObject(includeInstance: boolean, msg: SignedHeader): SignedHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignedHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignedHeader;
  static deserializeBinaryFromReader(message: SignedHeader, reader: jspb.BinaryReader): SignedHeader;
}

export namespace SignedHeader {
  export type AsObject = {
    header?: Header.AsObject,
    commit?: Commit.AsObject,
  }
}

export class LightBlock extends jspb.Message {
  hasSignedHeader(): boolean;
  clearSignedHeader(): void;
  getSignedHeader(): SignedHeader | undefined;
  setSignedHeader(value?: SignedHeader): void;

  hasValidatorSet(): boolean;
  clearValidatorSet(): void;
  getValidatorSet(): tendermint_types_validator_pb.ValidatorSet | undefined;
  setValidatorSet(value?: tendermint_types_validator_pb.ValidatorSet): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LightBlock.AsObject;
  static toObject(includeInstance: boolean, msg: LightBlock): LightBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LightBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LightBlock;
  static deserializeBinaryFromReader(message: LightBlock, reader: jspb.BinaryReader): LightBlock;
}

export namespace LightBlock {
  export type AsObject = {
    signedHeader?: SignedHeader.AsObject,
    validatorSet?: tendermint_types_validator_pb.ValidatorSet.AsObject,
  }
}

export class BlockMeta extends jspb.Message {
  hasBlockId(): boolean;
  clearBlockId(): void;
  getBlockId(): BlockID | undefined;
  setBlockId(value?: BlockID): void;

  getBlockSize(): number;
  setBlockSize(value: number): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getNumTxs(): number;
  setNumTxs(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockMeta.AsObject;
  static toObject(includeInstance: boolean, msg: BlockMeta): BlockMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockMeta;
  static deserializeBinaryFromReader(message: BlockMeta, reader: jspb.BinaryReader): BlockMeta;
}

export namespace BlockMeta {
  export type AsObject = {
    blockId?: BlockID.AsObject,
    blockSize: number,
    header?: Header.AsObject,
    numTxs: number,
  }
}

export class TxProof extends jspb.Message {
  getRootHash(): Uint8Array | string;
  getRootHash_asU8(): Uint8Array;
  getRootHash_asB64(): string;
  setRootHash(value: Uint8Array | string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  hasProof(): boolean;
  clearProof(): void;
  getProof(): tendermint_crypto_proof_pb.Proof | undefined;
  setProof(value?: tendermint_crypto_proof_pb.Proof): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxProof.AsObject;
  static toObject(includeInstance: boolean, msg: TxProof): TxProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxProof;
  static deserializeBinaryFromReader(message: TxProof, reader: jspb.BinaryReader): TxProof;
}

export namespace TxProof {
  export type AsObject = {
    rootHash: Uint8Array | string,
    data: Uint8Array | string,
    proof?: tendermint_crypto_proof_pb.Proof.AsObject,
  }
}

export interface BlockIDFlagMap {
  BLOCK_ID_FLAG_UNKNOWN: 0;
  BLOCK_ID_FLAG_ABSENT: 1;
  BLOCK_ID_FLAG_COMMIT: 2;
  BLOCK_ID_FLAG_NIL: 3;
}

export const BlockIDFlag: BlockIDFlagMap;

export interface SignedMsgTypeMap {
  SIGNED_MSG_TYPE_UNKNOWN: 0;
  SIGNED_MSG_TYPE_PREVOTE: 1;
  SIGNED_MSG_TYPE_PRECOMMIT: 2;
  SIGNED_MSG_TYPE_PROPOSAL: 32;
}

export const SignedMsgType: SignedMsgTypeMap;

