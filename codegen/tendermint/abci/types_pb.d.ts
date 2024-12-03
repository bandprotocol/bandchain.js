// package: tendermint.abci
// file: tendermint/abci/types.proto

import * as jspb from "google-protobuf";
import * as tendermint_crypto_proof_pb from "../../tendermint/crypto/proof_pb";
import * as tendermint_crypto_keys_pb from "../../tendermint/crypto/keys_pb";
import * as tendermint_types_params_pb from "../../tendermint/types/params_pb";
import * as tendermint_types_validator_pb from "../../tendermint/types/validator_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";

export class Request extends jspb.Message {
  hasEcho(): boolean;
  clearEcho(): void;
  getEcho(): RequestEcho | undefined;
  setEcho(value?: RequestEcho): void;

  hasFlush(): boolean;
  clearFlush(): void;
  getFlush(): RequestFlush | undefined;
  setFlush(value?: RequestFlush): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): RequestInfo | undefined;
  setInfo(value?: RequestInfo): void;

  hasInitChain(): boolean;
  clearInitChain(): void;
  getInitChain(): RequestInitChain | undefined;
  setInitChain(value?: RequestInitChain): void;

  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): RequestQuery | undefined;
  setQuery(value?: RequestQuery): void;

  hasCheckTx(): boolean;
  clearCheckTx(): void;
  getCheckTx(): RequestCheckTx | undefined;
  setCheckTx(value?: RequestCheckTx): void;

  hasCommit(): boolean;
  clearCommit(): void;
  getCommit(): RequestCommit | undefined;
  setCommit(value?: RequestCommit): void;

  hasListSnapshots(): boolean;
  clearListSnapshots(): void;
  getListSnapshots(): RequestListSnapshots | undefined;
  setListSnapshots(value?: RequestListSnapshots): void;

  hasOfferSnapshot(): boolean;
  clearOfferSnapshot(): void;
  getOfferSnapshot(): RequestOfferSnapshot | undefined;
  setOfferSnapshot(value?: RequestOfferSnapshot): void;

  hasLoadSnapshotChunk(): boolean;
  clearLoadSnapshotChunk(): void;
  getLoadSnapshotChunk(): RequestLoadSnapshotChunk | undefined;
  setLoadSnapshotChunk(value?: RequestLoadSnapshotChunk): void;

  hasApplySnapshotChunk(): boolean;
  clearApplySnapshotChunk(): void;
  getApplySnapshotChunk(): RequestApplySnapshotChunk | undefined;
  setApplySnapshotChunk(value?: RequestApplySnapshotChunk): void;

  hasPrepareProposal(): boolean;
  clearPrepareProposal(): void;
  getPrepareProposal(): RequestPrepareProposal | undefined;
  setPrepareProposal(value?: RequestPrepareProposal): void;

  hasProcessProposal(): boolean;
  clearProcessProposal(): void;
  getProcessProposal(): RequestProcessProposal | undefined;
  setProcessProposal(value?: RequestProcessProposal): void;

  hasExtendVote(): boolean;
  clearExtendVote(): void;
  getExtendVote(): RequestExtendVote | undefined;
  setExtendVote(value?: RequestExtendVote): void;

  hasVerifyVoteExtension(): boolean;
  clearVerifyVoteExtension(): void;
  getVerifyVoteExtension(): RequestVerifyVoteExtension | undefined;
  setVerifyVoteExtension(value?: RequestVerifyVoteExtension): void;

  hasFinalizeBlock(): boolean;
  clearFinalizeBlock(): void;
  getFinalizeBlock(): RequestFinalizeBlock | undefined;
  setFinalizeBlock(value?: RequestFinalizeBlock): void;

  getValueCase(): Request.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    echo?: RequestEcho.AsObject,
    flush?: RequestFlush.AsObject,
    info?: RequestInfo.AsObject,
    initChain?: RequestInitChain.AsObject,
    query?: RequestQuery.AsObject,
    checkTx?: RequestCheckTx.AsObject,
    commit?: RequestCommit.AsObject,
    listSnapshots?: RequestListSnapshots.AsObject,
    offerSnapshot?: RequestOfferSnapshot.AsObject,
    loadSnapshotChunk?: RequestLoadSnapshotChunk.AsObject,
    applySnapshotChunk?: RequestApplySnapshotChunk.AsObject,
    prepareProposal?: RequestPrepareProposal.AsObject,
    processProposal?: RequestProcessProposal.AsObject,
    extendVote?: RequestExtendVote.AsObject,
    verifyVoteExtension?: RequestVerifyVoteExtension.AsObject,
    finalizeBlock?: RequestFinalizeBlock.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    ECHO = 1,
    FLUSH = 2,
    INFO = 3,
    INIT_CHAIN = 5,
    QUERY = 6,
    CHECK_TX = 8,
    COMMIT = 11,
    LIST_SNAPSHOTS = 12,
    OFFER_SNAPSHOT = 13,
    LOAD_SNAPSHOT_CHUNK = 14,
    APPLY_SNAPSHOT_CHUNK = 15,
    PREPARE_PROPOSAL = 16,
    PROCESS_PROPOSAL = 17,
    EXTEND_VOTE = 18,
    VERIFY_VOTE_EXTENSION = 19,
    FINALIZE_BLOCK = 20,
  }
}

export class RequestEcho extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestEcho.AsObject;
  static toObject(includeInstance: boolean, msg: RequestEcho): RequestEcho.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestEcho, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestEcho;
  static deserializeBinaryFromReader(message: RequestEcho, reader: jspb.BinaryReader): RequestEcho;
}

export namespace RequestEcho {
  export type AsObject = {
    message: string,
  }
}

export class RequestFlush extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestFlush.AsObject;
  static toObject(includeInstance: boolean, msg: RequestFlush): RequestFlush.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestFlush, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestFlush;
  static deserializeBinaryFromReader(message: RequestFlush, reader: jspb.BinaryReader): RequestFlush;
}

export namespace RequestFlush {
  export type AsObject = {
  }
}

export class RequestInfo extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  getBlockVersion(): number;
  setBlockVersion(value: number): void;

  getP2pVersion(): number;
  setP2pVersion(value: number): void;

  getAbciVersion(): string;
  setAbciVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RequestInfo): RequestInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestInfo;
  static deserializeBinaryFromReader(message: RequestInfo, reader: jspb.BinaryReader): RequestInfo;
}

export namespace RequestInfo {
  export type AsObject = {
    version: string,
    blockVersion: number,
    p2pVersion: number,
    abciVersion: string,
  }
}

export class RequestInitChain extends jspb.Message {
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getChainId(): string;
  setChainId(value: string): void;

  hasConsensusParams(): boolean;
  clearConsensusParams(): void;
  getConsensusParams(): tendermint_types_params_pb.ConsensusParams | undefined;
  setConsensusParams(value?: tendermint_types_params_pb.ConsensusParams): void;

  clearValidatorsList(): void;
  getValidatorsList(): Array<ValidatorUpdate>;
  setValidatorsList(value: Array<ValidatorUpdate>): void;
  addValidators(value?: ValidatorUpdate, index?: number): ValidatorUpdate;

  getAppStateBytes(): Uint8Array | string;
  getAppStateBytes_asU8(): Uint8Array;
  getAppStateBytes_asB64(): string;
  setAppStateBytes(value: Uint8Array | string): void;

  getInitialHeight(): number;
  setInitialHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestInitChain.AsObject;
  static toObject(includeInstance: boolean, msg: RequestInitChain): RequestInitChain.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestInitChain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestInitChain;
  static deserializeBinaryFromReader(message: RequestInitChain, reader: jspb.BinaryReader): RequestInitChain;
}

export namespace RequestInitChain {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    chainId: string,
    consensusParams?: tendermint_types_params_pb.ConsensusParams.AsObject,
    validatorsList: Array<ValidatorUpdate.AsObject>,
    appStateBytes: Uint8Array | string,
    initialHeight: number,
  }
}

export class RequestQuery extends jspb.Message {
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
  toObject(includeInstance?: boolean): RequestQuery.AsObject;
  static toObject(includeInstance: boolean, msg: RequestQuery): RequestQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestQuery;
  static deserializeBinaryFromReader(message: RequestQuery, reader: jspb.BinaryReader): RequestQuery;
}

export namespace RequestQuery {
  export type AsObject = {
    data: Uint8Array | string,
    path: string,
    height: number,
    prove: boolean,
  }
}

export class RequestCheckTx extends jspb.Message {
  getTx(): Uint8Array | string;
  getTx_asU8(): Uint8Array;
  getTx_asB64(): string;
  setTx(value: Uint8Array | string): void;

  getType(): CheckTxTypeMap[keyof CheckTxTypeMap];
  setType(value: CheckTxTypeMap[keyof CheckTxTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCheckTx.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCheckTx): RequestCheckTx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestCheckTx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCheckTx;
  static deserializeBinaryFromReader(message: RequestCheckTx, reader: jspb.BinaryReader): RequestCheckTx;
}

export namespace RequestCheckTx {
  export type AsObject = {
    tx: Uint8Array | string,
    type: CheckTxTypeMap[keyof CheckTxTypeMap],
  }
}

export class RequestCommit extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCommit.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCommit): RequestCommit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestCommit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCommit;
  static deserializeBinaryFromReader(message: RequestCommit, reader: jspb.BinaryReader): RequestCommit;
}

export namespace RequestCommit {
  export type AsObject = {
  }
}

export class RequestListSnapshots extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestListSnapshots.AsObject;
  static toObject(includeInstance: boolean, msg: RequestListSnapshots): RequestListSnapshots.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestListSnapshots, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestListSnapshots;
  static deserializeBinaryFromReader(message: RequestListSnapshots, reader: jspb.BinaryReader): RequestListSnapshots;
}

export namespace RequestListSnapshots {
  export type AsObject = {
  }
}

export class RequestOfferSnapshot extends jspb.Message {
  hasSnapshot(): boolean;
  clearSnapshot(): void;
  getSnapshot(): Snapshot | undefined;
  setSnapshot(value?: Snapshot): void;

  getAppHash(): Uint8Array | string;
  getAppHash_asU8(): Uint8Array;
  getAppHash_asB64(): string;
  setAppHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestOfferSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: RequestOfferSnapshot): RequestOfferSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestOfferSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestOfferSnapshot;
  static deserializeBinaryFromReader(message: RequestOfferSnapshot, reader: jspb.BinaryReader): RequestOfferSnapshot;
}

export namespace RequestOfferSnapshot {
  export type AsObject = {
    snapshot?: Snapshot.AsObject,
    appHash: Uint8Array | string,
  }
}

export class RequestLoadSnapshotChunk extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  getFormat(): number;
  setFormat(value: number): void;

  getChunk(): number;
  setChunk(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestLoadSnapshotChunk.AsObject;
  static toObject(includeInstance: boolean, msg: RequestLoadSnapshotChunk): RequestLoadSnapshotChunk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestLoadSnapshotChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestLoadSnapshotChunk;
  static deserializeBinaryFromReader(message: RequestLoadSnapshotChunk, reader: jspb.BinaryReader): RequestLoadSnapshotChunk;
}

export namespace RequestLoadSnapshotChunk {
  export type AsObject = {
    height: number,
    format: number,
    chunk: number,
  }
}

export class RequestApplySnapshotChunk extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  getSender(): string;
  setSender(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestApplySnapshotChunk.AsObject;
  static toObject(includeInstance: boolean, msg: RequestApplySnapshotChunk): RequestApplySnapshotChunk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestApplySnapshotChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestApplySnapshotChunk;
  static deserializeBinaryFromReader(message: RequestApplySnapshotChunk, reader: jspb.BinaryReader): RequestApplySnapshotChunk;
}

export namespace RequestApplySnapshotChunk {
  export type AsObject = {
    index: number,
    chunk: Uint8Array | string,
    sender: string,
  }
}

export class RequestPrepareProposal extends jspb.Message {
  getMaxTxBytes(): number;
  setMaxTxBytes(value: number): void;

  clearTxsList(): void;
  getTxsList(): Array<Uint8Array | string>;
  getTxsList_asU8(): Array<Uint8Array>;
  getTxsList_asB64(): Array<string>;
  setTxsList(value: Array<Uint8Array | string>): void;
  addTxs(value: Uint8Array | string, index?: number): Uint8Array | string;

  hasLocalLastCommit(): boolean;
  clearLocalLastCommit(): void;
  getLocalLastCommit(): ExtendedCommitInfo | undefined;
  setLocalLastCommit(value?: ExtendedCommitInfo): void;

  clearMisbehaviorList(): void;
  getMisbehaviorList(): Array<Misbehavior>;
  setMisbehaviorList(value: Array<Misbehavior>): void;
  addMisbehavior(value?: Misbehavior, index?: number): Misbehavior;

  getHeight(): number;
  setHeight(value: number): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNextValidatorsHash(): Uint8Array | string;
  getNextValidatorsHash_asU8(): Uint8Array;
  getNextValidatorsHash_asB64(): string;
  setNextValidatorsHash(value: Uint8Array | string): void;

  getProposerAddress(): Uint8Array | string;
  getProposerAddress_asU8(): Uint8Array;
  getProposerAddress_asB64(): string;
  setProposerAddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPrepareProposal.AsObject;
  static toObject(includeInstance: boolean, msg: RequestPrepareProposal): RequestPrepareProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestPrepareProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestPrepareProposal;
  static deserializeBinaryFromReader(message: RequestPrepareProposal, reader: jspb.BinaryReader): RequestPrepareProposal;
}

export namespace RequestPrepareProposal {
  export type AsObject = {
    maxTxBytes: number,
    txsList: Array<Uint8Array | string>,
    localLastCommit?: ExtendedCommitInfo.AsObject,
    misbehaviorList: Array<Misbehavior.AsObject>,
    height: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    nextValidatorsHash: Uint8Array | string,
    proposerAddress: Uint8Array | string,
  }
}

export class RequestProcessProposal extends jspb.Message {
  clearTxsList(): void;
  getTxsList(): Array<Uint8Array | string>;
  getTxsList_asU8(): Array<Uint8Array>;
  getTxsList_asB64(): Array<string>;
  setTxsList(value: Array<Uint8Array | string>): void;
  addTxs(value: Uint8Array | string, index?: number): Uint8Array | string;

  hasProposedLastCommit(): boolean;
  clearProposedLastCommit(): void;
  getProposedLastCommit(): CommitInfo | undefined;
  setProposedLastCommit(value?: CommitInfo): void;

  clearMisbehaviorList(): void;
  getMisbehaviorList(): Array<Misbehavior>;
  setMisbehaviorList(value: Array<Misbehavior>): void;
  addMisbehavior(value?: Misbehavior, index?: number): Misbehavior;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getHeight(): number;
  setHeight(value: number): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNextValidatorsHash(): Uint8Array | string;
  getNextValidatorsHash_asU8(): Uint8Array;
  getNextValidatorsHash_asB64(): string;
  setNextValidatorsHash(value: Uint8Array | string): void;

  getProposerAddress(): Uint8Array | string;
  getProposerAddress_asU8(): Uint8Array;
  getProposerAddress_asB64(): string;
  setProposerAddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestProcessProposal.AsObject;
  static toObject(includeInstance: boolean, msg: RequestProcessProposal): RequestProcessProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestProcessProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestProcessProposal;
  static deserializeBinaryFromReader(message: RequestProcessProposal, reader: jspb.BinaryReader): RequestProcessProposal;
}

export namespace RequestProcessProposal {
  export type AsObject = {
    txsList: Array<Uint8Array | string>,
    proposedLastCommit?: CommitInfo.AsObject,
    misbehaviorList: Array<Misbehavior.AsObject>,
    hash: Uint8Array | string,
    height: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    nextValidatorsHash: Uint8Array | string,
    proposerAddress: Uint8Array | string,
  }
}

export class RequestExtendVote extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getHeight(): number;
  setHeight(value: number): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearTxsList(): void;
  getTxsList(): Array<Uint8Array | string>;
  getTxsList_asU8(): Array<Uint8Array>;
  getTxsList_asB64(): Array<string>;
  setTxsList(value: Array<Uint8Array | string>): void;
  addTxs(value: Uint8Array | string, index?: number): Uint8Array | string;

  hasProposedLastCommit(): boolean;
  clearProposedLastCommit(): void;
  getProposedLastCommit(): CommitInfo | undefined;
  setProposedLastCommit(value?: CommitInfo): void;

  clearMisbehaviorList(): void;
  getMisbehaviorList(): Array<Misbehavior>;
  setMisbehaviorList(value: Array<Misbehavior>): void;
  addMisbehavior(value?: Misbehavior, index?: number): Misbehavior;

  getNextValidatorsHash(): Uint8Array | string;
  getNextValidatorsHash_asU8(): Uint8Array;
  getNextValidatorsHash_asB64(): string;
  setNextValidatorsHash(value: Uint8Array | string): void;

  getProposerAddress(): Uint8Array | string;
  getProposerAddress_asU8(): Uint8Array;
  getProposerAddress_asB64(): string;
  setProposerAddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestExtendVote.AsObject;
  static toObject(includeInstance: boolean, msg: RequestExtendVote): RequestExtendVote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestExtendVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestExtendVote;
  static deserializeBinaryFromReader(message: RequestExtendVote, reader: jspb.BinaryReader): RequestExtendVote;
}

export namespace RequestExtendVote {
  export type AsObject = {
    hash: Uint8Array | string,
    height: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    txsList: Array<Uint8Array | string>,
    proposedLastCommit?: CommitInfo.AsObject,
    misbehaviorList: Array<Misbehavior.AsObject>,
    nextValidatorsHash: Uint8Array | string,
    proposerAddress: Uint8Array | string,
  }
}

export class RequestVerifyVoteExtension extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getValidatorAddress(): Uint8Array | string;
  getValidatorAddress_asU8(): Uint8Array;
  getValidatorAddress_asB64(): string;
  setValidatorAddress(value: Uint8Array | string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getVoteExtension(): Uint8Array | string;
  getVoteExtension_asU8(): Uint8Array;
  getVoteExtension_asB64(): string;
  setVoteExtension(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestVerifyVoteExtension.AsObject;
  static toObject(includeInstance: boolean, msg: RequestVerifyVoteExtension): RequestVerifyVoteExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestVerifyVoteExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestVerifyVoteExtension;
  static deserializeBinaryFromReader(message: RequestVerifyVoteExtension, reader: jspb.BinaryReader): RequestVerifyVoteExtension;
}

export namespace RequestVerifyVoteExtension {
  export type AsObject = {
    hash: Uint8Array | string,
    validatorAddress: Uint8Array | string,
    height: number,
    voteExtension: Uint8Array | string,
  }
}

export class RequestFinalizeBlock extends jspb.Message {
  clearTxsList(): void;
  getTxsList(): Array<Uint8Array | string>;
  getTxsList_asU8(): Array<Uint8Array>;
  getTxsList_asB64(): Array<string>;
  setTxsList(value: Array<Uint8Array | string>): void;
  addTxs(value: Uint8Array | string, index?: number): Uint8Array | string;

  hasDecidedLastCommit(): boolean;
  clearDecidedLastCommit(): void;
  getDecidedLastCommit(): CommitInfo | undefined;
  setDecidedLastCommit(value?: CommitInfo): void;

  clearMisbehaviorList(): void;
  getMisbehaviorList(): Array<Misbehavior>;
  setMisbehaviorList(value: Array<Misbehavior>): void;
  addMisbehavior(value?: Misbehavior, index?: number): Misbehavior;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getHeight(): number;
  setHeight(value: number): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNextValidatorsHash(): Uint8Array | string;
  getNextValidatorsHash_asU8(): Uint8Array;
  getNextValidatorsHash_asB64(): string;
  setNextValidatorsHash(value: Uint8Array | string): void;

  getProposerAddress(): Uint8Array | string;
  getProposerAddress_asU8(): Uint8Array;
  getProposerAddress_asB64(): string;
  setProposerAddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestFinalizeBlock.AsObject;
  static toObject(includeInstance: boolean, msg: RequestFinalizeBlock): RequestFinalizeBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestFinalizeBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestFinalizeBlock;
  static deserializeBinaryFromReader(message: RequestFinalizeBlock, reader: jspb.BinaryReader): RequestFinalizeBlock;
}

export namespace RequestFinalizeBlock {
  export type AsObject = {
    txsList: Array<Uint8Array | string>,
    decidedLastCommit?: CommitInfo.AsObject,
    misbehaviorList: Array<Misbehavior.AsObject>,
    hash: Uint8Array | string,
    height: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    nextValidatorsHash: Uint8Array | string,
    proposerAddress: Uint8Array | string,
  }
}

export class Response extends jspb.Message {
  hasException(): boolean;
  clearException(): void;
  getException(): ResponseException | undefined;
  setException(value?: ResponseException): void;

  hasEcho(): boolean;
  clearEcho(): void;
  getEcho(): ResponseEcho | undefined;
  setEcho(value?: ResponseEcho): void;

  hasFlush(): boolean;
  clearFlush(): void;
  getFlush(): ResponseFlush | undefined;
  setFlush(value?: ResponseFlush): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): ResponseInfo | undefined;
  setInfo(value?: ResponseInfo): void;

  hasInitChain(): boolean;
  clearInitChain(): void;
  getInitChain(): ResponseInitChain | undefined;
  setInitChain(value?: ResponseInitChain): void;

  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): ResponseQuery | undefined;
  setQuery(value?: ResponseQuery): void;

  hasCheckTx(): boolean;
  clearCheckTx(): void;
  getCheckTx(): ResponseCheckTx | undefined;
  setCheckTx(value?: ResponseCheckTx): void;

  hasCommit(): boolean;
  clearCommit(): void;
  getCommit(): ResponseCommit | undefined;
  setCommit(value?: ResponseCommit): void;

  hasListSnapshots(): boolean;
  clearListSnapshots(): void;
  getListSnapshots(): ResponseListSnapshots | undefined;
  setListSnapshots(value?: ResponseListSnapshots): void;

  hasOfferSnapshot(): boolean;
  clearOfferSnapshot(): void;
  getOfferSnapshot(): ResponseOfferSnapshot | undefined;
  setOfferSnapshot(value?: ResponseOfferSnapshot): void;

  hasLoadSnapshotChunk(): boolean;
  clearLoadSnapshotChunk(): void;
  getLoadSnapshotChunk(): ResponseLoadSnapshotChunk | undefined;
  setLoadSnapshotChunk(value?: ResponseLoadSnapshotChunk): void;

  hasApplySnapshotChunk(): boolean;
  clearApplySnapshotChunk(): void;
  getApplySnapshotChunk(): ResponseApplySnapshotChunk | undefined;
  setApplySnapshotChunk(value?: ResponseApplySnapshotChunk): void;

  hasPrepareProposal(): boolean;
  clearPrepareProposal(): void;
  getPrepareProposal(): ResponsePrepareProposal | undefined;
  setPrepareProposal(value?: ResponsePrepareProposal): void;

  hasProcessProposal(): boolean;
  clearProcessProposal(): void;
  getProcessProposal(): ResponseProcessProposal | undefined;
  setProcessProposal(value?: ResponseProcessProposal): void;

  hasExtendVote(): boolean;
  clearExtendVote(): void;
  getExtendVote(): ResponseExtendVote | undefined;
  setExtendVote(value?: ResponseExtendVote): void;

  hasVerifyVoteExtension(): boolean;
  clearVerifyVoteExtension(): void;
  getVerifyVoteExtension(): ResponseVerifyVoteExtension | undefined;
  setVerifyVoteExtension(value?: ResponseVerifyVoteExtension): void;

  hasFinalizeBlock(): boolean;
  clearFinalizeBlock(): void;
  getFinalizeBlock(): ResponseFinalizeBlock | undefined;
  setFinalizeBlock(value?: ResponseFinalizeBlock): void;

  getValueCase(): Response.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    exception?: ResponseException.AsObject,
    echo?: ResponseEcho.AsObject,
    flush?: ResponseFlush.AsObject,
    info?: ResponseInfo.AsObject,
    initChain?: ResponseInitChain.AsObject,
    query?: ResponseQuery.AsObject,
    checkTx?: ResponseCheckTx.AsObject,
    commit?: ResponseCommit.AsObject,
    listSnapshots?: ResponseListSnapshots.AsObject,
    offerSnapshot?: ResponseOfferSnapshot.AsObject,
    loadSnapshotChunk?: ResponseLoadSnapshotChunk.AsObject,
    applySnapshotChunk?: ResponseApplySnapshotChunk.AsObject,
    prepareProposal?: ResponsePrepareProposal.AsObject,
    processProposal?: ResponseProcessProposal.AsObject,
    extendVote?: ResponseExtendVote.AsObject,
    verifyVoteExtension?: ResponseVerifyVoteExtension.AsObject,
    finalizeBlock?: ResponseFinalizeBlock.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    EXCEPTION = 1,
    ECHO = 2,
    FLUSH = 3,
    INFO = 4,
    INIT_CHAIN = 6,
    QUERY = 7,
    CHECK_TX = 9,
    COMMIT = 12,
    LIST_SNAPSHOTS = 13,
    OFFER_SNAPSHOT = 14,
    LOAD_SNAPSHOT_CHUNK = 15,
    APPLY_SNAPSHOT_CHUNK = 16,
    PREPARE_PROPOSAL = 17,
    PROCESS_PROPOSAL = 18,
    EXTEND_VOTE = 19,
    VERIFY_VOTE_EXTENSION = 20,
    FINALIZE_BLOCK = 21,
  }
}

export class ResponseException extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseException.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseException): ResponseException.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseException, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseException;
  static deserializeBinaryFromReader(message: ResponseException, reader: jspb.BinaryReader): ResponseException;
}

export namespace ResponseException {
  export type AsObject = {
    error: string,
  }
}

export class ResponseEcho extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseEcho.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseEcho): ResponseEcho.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseEcho, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseEcho;
  static deserializeBinaryFromReader(message: ResponseEcho, reader: jspb.BinaryReader): ResponseEcho;
}

export namespace ResponseEcho {
  export type AsObject = {
    message: string,
  }
}

export class ResponseFlush extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseFlush.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseFlush): ResponseFlush.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseFlush, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseFlush;
  static deserializeBinaryFromReader(message: ResponseFlush, reader: jspb.BinaryReader): ResponseFlush;
}

export namespace ResponseFlush {
  export type AsObject = {
  }
}

export class ResponseInfo extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getAppVersion(): number;
  setAppVersion(value: number): void;

  getLastBlockHeight(): number;
  setLastBlockHeight(value: number): void;

  getLastBlockAppHash(): Uint8Array | string;
  getLastBlockAppHash_asU8(): Uint8Array;
  getLastBlockAppHash_asB64(): string;
  setLastBlockAppHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseInfo): ResponseInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseInfo;
  static deserializeBinaryFromReader(message: ResponseInfo, reader: jspb.BinaryReader): ResponseInfo;
}

export namespace ResponseInfo {
  export type AsObject = {
    data: string,
    version: string,
    appVersion: number,
    lastBlockHeight: number,
    lastBlockAppHash: Uint8Array | string,
  }
}

export class ResponseInitChain extends jspb.Message {
  hasConsensusParams(): boolean;
  clearConsensusParams(): void;
  getConsensusParams(): tendermint_types_params_pb.ConsensusParams | undefined;
  setConsensusParams(value?: tendermint_types_params_pb.ConsensusParams): void;

  clearValidatorsList(): void;
  getValidatorsList(): Array<ValidatorUpdate>;
  setValidatorsList(value: Array<ValidatorUpdate>): void;
  addValidators(value?: ValidatorUpdate, index?: number): ValidatorUpdate;

  getAppHash(): Uint8Array | string;
  getAppHash_asU8(): Uint8Array;
  getAppHash_asB64(): string;
  setAppHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseInitChain.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseInitChain): ResponseInitChain.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseInitChain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseInitChain;
  static deserializeBinaryFromReader(message: ResponseInitChain, reader: jspb.BinaryReader): ResponseInitChain;
}

export namespace ResponseInitChain {
  export type AsObject = {
    consensusParams?: tendermint_types_params_pb.ConsensusParams.AsObject,
    validatorsList: Array<ValidatorUpdate.AsObject>,
    appHash: Uint8Array | string,
  }
}

export class ResponseQuery extends jspb.Message {
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
  getProofOps(): tendermint_crypto_proof_pb.ProofOps | undefined;
  setProofOps(value?: tendermint_crypto_proof_pb.ProofOps): void;

  getHeight(): number;
  setHeight(value: number): void;

  getCodespace(): string;
  setCodespace(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseQuery): ResponseQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseQuery;
  static deserializeBinaryFromReader(message: ResponseQuery, reader: jspb.BinaryReader): ResponseQuery;
}

export namespace ResponseQuery {
  export type AsObject = {
    code: number,
    log: string,
    info: string,
    index: number,
    key: Uint8Array | string,
    value: Uint8Array | string,
    proofOps?: tendermint_crypto_proof_pb.ProofOps.AsObject,
    height: number,
    codespace: string,
  }
}

export class ResponseCheckTx extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getLog(): string;
  setLog(value: string): void;

  getInfo(): string;
  setInfo(value: string): void;

  getGasWanted(): number;
  setGasWanted(value: number): void;

  getGasUsed(): number;
  setGasUsed(value: number): void;

  clearEventsList(): void;
  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): void;
  addEvents(value?: Event, index?: number): Event;

  getCodespace(): string;
  setCodespace(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseCheckTx.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseCheckTx): ResponseCheckTx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseCheckTx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseCheckTx;
  static deserializeBinaryFromReader(message: ResponseCheckTx, reader: jspb.BinaryReader): ResponseCheckTx;
}

export namespace ResponseCheckTx {
  export type AsObject = {
    code: number,
    data: Uint8Array | string,
    log: string,
    info: string,
    gasWanted: number,
    gasUsed: number,
    eventsList: Array<Event.AsObject>,
    codespace: string,
  }
}

export class ResponseCommit extends jspb.Message {
  getRetainHeight(): number;
  setRetainHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseCommit.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseCommit): ResponseCommit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseCommit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseCommit;
  static deserializeBinaryFromReader(message: ResponseCommit, reader: jspb.BinaryReader): ResponseCommit;
}

export namespace ResponseCommit {
  export type AsObject = {
    retainHeight: number,
  }
}

export class ResponseListSnapshots extends jspb.Message {
  clearSnapshotsList(): void;
  getSnapshotsList(): Array<Snapshot>;
  setSnapshotsList(value: Array<Snapshot>): void;
  addSnapshots(value?: Snapshot, index?: number): Snapshot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseListSnapshots.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseListSnapshots): ResponseListSnapshots.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseListSnapshots, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseListSnapshots;
  static deserializeBinaryFromReader(message: ResponseListSnapshots, reader: jspb.BinaryReader): ResponseListSnapshots;
}

export namespace ResponseListSnapshots {
  export type AsObject = {
    snapshotsList: Array<Snapshot.AsObject>,
  }
}

export class ResponseOfferSnapshot extends jspb.Message {
  getResult(): ResponseOfferSnapshot.ResultMap[keyof ResponseOfferSnapshot.ResultMap];
  setResult(value: ResponseOfferSnapshot.ResultMap[keyof ResponseOfferSnapshot.ResultMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseOfferSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseOfferSnapshot): ResponseOfferSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseOfferSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseOfferSnapshot;
  static deserializeBinaryFromReader(message: ResponseOfferSnapshot, reader: jspb.BinaryReader): ResponseOfferSnapshot;
}

export namespace ResponseOfferSnapshot {
  export type AsObject = {
    result: ResponseOfferSnapshot.ResultMap[keyof ResponseOfferSnapshot.ResultMap],
  }

  export interface ResultMap {
    UNKNOWN: 0;
    ACCEPT: 1;
    ABORT: 2;
    REJECT: 3;
    REJECT_FORMAT: 4;
    REJECT_SENDER: 5;
  }

  export const Result: ResultMap;
}

export class ResponseLoadSnapshotChunk extends jspb.Message {
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseLoadSnapshotChunk.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseLoadSnapshotChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseLoadSnapshotChunk;
  static deserializeBinaryFromReader(message: ResponseLoadSnapshotChunk, reader: jspb.BinaryReader): ResponseLoadSnapshotChunk;
}

export namespace ResponseLoadSnapshotChunk {
  export type AsObject = {
    chunk: Uint8Array | string,
  }
}

export class ResponseApplySnapshotChunk extends jspb.Message {
  getResult(): ResponseApplySnapshotChunk.ResultMap[keyof ResponseApplySnapshotChunk.ResultMap];
  setResult(value: ResponseApplySnapshotChunk.ResultMap[keyof ResponseApplySnapshotChunk.ResultMap]): void;

  clearRefetchChunksList(): void;
  getRefetchChunksList(): Array<number>;
  setRefetchChunksList(value: Array<number>): void;
  addRefetchChunks(value: number, index?: number): number;

  clearRejectSendersList(): void;
  getRejectSendersList(): Array<string>;
  setRejectSendersList(value: Array<string>): void;
  addRejectSenders(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseApplySnapshotChunk.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseApplySnapshotChunk): ResponseApplySnapshotChunk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseApplySnapshotChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseApplySnapshotChunk;
  static deserializeBinaryFromReader(message: ResponseApplySnapshotChunk, reader: jspb.BinaryReader): ResponseApplySnapshotChunk;
}

export namespace ResponseApplySnapshotChunk {
  export type AsObject = {
    result: ResponseApplySnapshotChunk.ResultMap[keyof ResponseApplySnapshotChunk.ResultMap],
    refetchChunksList: Array<number>,
    rejectSendersList: Array<string>,
  }

  export interface ResultMap {
    UNKNOWN: 0;
    ACCEPT: 1;
    ABORT: 2;
    RETRY: 3;
    RETRY_SNAPSHOT: 4;
    REJECT_SNAPSHOT: 5;
  }

  export const Result: ResultMap;
}

export class ResponsePrepareProposal extends jspb.Message {
  clearTxsList(): void;
  getTxsList(): Array<Uint8Array | string>;
  getTxsList_asU8(): Array<Uint8Array>;
  getTxsList_asB64(): Array<string>;
  setTxsList(value: Array<Uint8Array | string>): void;
  addTxs(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponsePrepareProposal.AsObject;
  static toObject(includeInstance: boolean, msg: ResponsePrepareProposal): ResponsePrepareProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponsePrepareProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponsePrepareProposal;
  static deserializeBinaryFromReader(message: ResponsePrepareProposal, reader: jspb.BinaryReader): ResponsePrepareProposal;
}

export namespace ResponsePrepareProposal {
  export type AsObject = {
    txsList: Array<Uint8Array | string>,
  }
}

export class ResponseProcessProposal extends jspb.Message {
  getStatus(): ResponseProcessProposal.ProposalStatusMap[keyof ResponseProcessProposal.ProposalStatusMap];
  setStatus(value: ResponseProcessProposal.ProposalStatusMap[keyof ResponseProcessProposal.ProposalStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseProcessProposal.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseProcessProposal): ResponseProcessProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseProcessProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseProcessProposal;
  static deserializeBinaryFromReader(message: ResponseProcessProposal, reader: jspb.BinaryReader): ResponseProcessProposal;
}

export namespace ResponseProcessProposal {
  export type AsObject = {
    status: ResponseProcessProposal.ProposalStatusMap[keyof ResponseProcessProposal.ProposalStatusMap],
  }

  export interface ProposalStatusMap {
    UNKNOWN: 0;
    ACCEPT: 1;
    REJECT: 2;
  }

  export const ProposalStatus: ProposalStatusMap;
}

export class ResponseExtendVote extends jspb.Message {
  getVoteExtension(): Uint8Array | string;
  getVoteExtension_asU8(): Uint8Array;
  getVoteExtension_asB64(): string;
  setVoteExtension(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseExtendVote.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseExtendVote): ResponseExtendVote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseExtendVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseExtendVote;
  static deserializeBinaryFromReader(message: ResponseExtendVote, reader: jspb.BinaryReader): ResponseExtendVote;
}

export namespace ResponseExtendVote {
  export type AsObject = {
    voteExtension: Uint8Array | string,
  }
}

export class ResponseVerifyVoteExtension extends jspb.Message {
  getStatus(): ResponseVerifyVoteExtension.VerifyStatusMap[keyof ResponseVerifyVoteExtension.VerifyStatusMap];
  setStatus(value: ResponseVerifyVoteExtension.VerifyStatusMap[keyof ResponseVerifyVoteExtension.VerifyStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseVerifyVoteExtension.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseVerifyVoteExtension): ResponseVerifyVoteExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseVerifyVoteExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseVerifyVoteExtension;
  static deserializeBinaryFromReader(message: ResponseVerifyVoteExtension, reader: jspb.BinaryReader): ResponseVerifyVoteExtension;
}

export namespace ResponseVerifyVoteExtension {
  export type AsObject = {
    status: ResponseVerifyVoteExtension.VerifyStatusMap[keyof ResponseVerifyVoteExtension.VerifyStatusMap],
  }

  export interface VerifyStatusMap {
    UNKNOWN: 0;
    ACCEPT: 1;
    REJECT: 2;
  }

  export const VerifyStatus: VerifyStatusMap;
}

export class ResponseFinalizeBlock extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): void;
  addEvents(value?: Event, index?: number): Event;

  clearTxResultsList(): void;
  getTxResultsList(): Array<ExecTxResult>;
  setTxResultsList(value: Array<ExecTxResult>): void;
  addTxResults(value?: ExecTxResult, index?: number): ExecTxResult;

  clearValidatorUpdatesList(): void;
  getValidatorUpdatesList(): Array<ValidatorUpdate>;
  setValidatorUpdatesList(value: Array<ValidatorUpdate>): void;
  addValidatorUpdates(value?: ValidatorUpdate, index?: number): ValidatorUpdate;

  hasConsensusParamUpdates(): boolean;
  clearConsensusParamUpdates(): void;
  getConsensusParamUpdates(): tendermint_types_params_pb.ConsensusParams | undefined;
  setConsensusParamUpdates(value?: tendermint_types_params_pb.ConsensusParams): void;

  getAppHash(): Uint8Array | string;
  getAppHash_asU8(): Uint8Array;
  getAppHash_asB64(): string;
  setAppHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseFinalizeBlock.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseFinalizeBlock): ResponseFinalizeBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseFinalizeBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseFinalizeBlock;
  static deserializeBinaryFromReader(message: ResponseFinalizeBlock, reader: jspb.BinaryReader): ResponseFinalizeBlock;
}

export namespace ResponseFinalizeBlock {
  export type AsObject = {
    eventsList: Array<Event.AsObject>,
    txResultsList: Array<ExecTxResult.AsObject>,
    validatorUpdatesList: Array<ValidatorUpdate.AsObject>,
    consensusParamUpdates?: tendermint_types_params_pb.ConsensusParams.AsObject,
    appHash: Uint8Array | string,
  }
}

export class CommitInfo extends jspb.Message {
  getRound(): number;
  setRound(value: number): void;

  clearVotesList(): void;
  getVotesList(): Array<VoteInfo>;
  setVotesList(value: Array<VoteInfo>): void;
  addVotes(value?: VoteInfo, index?: number): VoteInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CommitInfo): CommitInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommitInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitInfo;
  static deserializeBinaryFromReader(message: CommitInfo, reader: jspb.BinaryReader): CommitInfo;
}

export namespace CommitInfo {
  export type AsObject = {
    round: number,
    votesList: Array<VoteInfo.AsObject>,
  }
}

export class ExtendedCommitInfo extends jspb.Message {
  getRound(): number;
  setRound(value: number): void;

  clearVotesList(): void;
  getVotesList(): Array<ExtendedVoteInfo>;
  setVotesList(value: Array<ExtendedVoteInfo>): void;
  addVotes(value?: ExtendedVoteInfo, index?: number): ExtendedVoteInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtendedCommitInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExtendedCommitInfo): ExtendedCommitInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExtendedCommitInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtendedCommitInfo;
  static deserializeBinaryFromReader(message: ExtendedCommitInfo, reader: jspb.BinaryReader): ExtendedCommitInfo;
}

export namespace ExtendedCommitInfo {
  export type AsObject = {
    round: number,
    votesList: Array<ExtendedVoteInfo.AsObject>,
  }
}

export class Event extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  clearAttributesList(): void;
  getAttributesList(): Array<EventAttribute>;
  setAttributesList(value: Array<EventAttribute>): void;
  addAttributes(value?: EventAttribute, index?: number): EventAttribute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    type: string,
    attributesList: Array<EventAttribute.AsObject>,
  }
}

export class EventAttribute extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getIndex(): boolean;
  setIndex(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: EventAttribute): EventAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventAttribute;
  static deserializeBinaryFromReader(message: EventAttribute, reader: jspb.BinaryReader): EventAttribute;
}

export namespace EventAttribute {
  export type AsObject = {
    key: string,
    value: string,
    index: boolean,
  }
}

export class ExecTxResult extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getLog(): string;
  setLog(value: string): void;

  getInfo(): string;
  setInfo(value: string): void;

  getGasWanted(): number;
  setGasWanted(value: number): void;

  getGasUsed(): number;
  setGasUsed(value: number): void;

  clearEventsList(): void;
  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): void;
  addEvents(value?: Event, index?: number): Event;

  getCodespace(): string;
  setCodespace(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecTxResult.AsObject;
  static toObject(includeInstance: boolean, msg: ExecTxResult): ExecTxResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecTxResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecTxResult;
  static deserializeBinaryFromReader(message: ExecTxResult, reader: jspb.BinaryReader): ExecTxResult;
}

export namespace ExecTxResult {
  export type AsObject = {
    code: number,
    data: Uint8Array | string,
    log: string,
    info: string,
    gasWanted: number,
    gasUsed: number,
    eventsList: Array<Event.AsObject>,
    codespace: string,
  }
}

export class TxResult extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  getIndex(): number;
  setIndex(value: number): void;

  getTx(): Uint8Array | string;
  getTx_asU8(): Uint8Array;
  getTx_asB64(): string;
  setTx(value: Uint8Array | string): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): ExecTxResult | undefined;
  setResult(value?: ExecTxResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxResult.AsObject;
  static toObject(includeInstance: boolean, msg: TxResult): TxResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxResult;
  static deserializeBinaryFromReader(message: TxResult, reader: jspb.BinaryReader): TxResult;
}

export namespace TxResult {
  export type AsObject = {
    height: number,
    index: number,
    tx: Uint8Array | string,
    result?: ExecTxResult.AsObject,
  }
}

export class Validator extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  getPower(): number;
  setPower(value: number): void;

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
    address: Uint8Array | string,
    power: number,
  }
}

export class ValidatorUpdate extends jspb.Message {
  hasPubKey(): boolean;
  clearPubKey(): void;
  getPubKey(): tendermint_crypto_keys_pb.PublicKey | undefined;
  setPubKey(value?: tendermint_crypto_keys_pb.PublicKey): void;

  getPower(): number;
  setPower(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorUpdate): ValidatorUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidatorUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorUpdate;
  static deserializeBinaryFromReader(message: ValidatorUpdate, reader: jspb.BinaryReader): ValidatorUpdate;
}

export namespace ValidatorUpdate {
  export type AsObject = {
    pubKey?: tendermint_crypto_keys_pb.PublicKey.AsObject,
    power: number,
  }
}

export class VoteInfo extends jspb.Message {
  hasValidator(): boolean;
  clearValidator(): void;
  getValidator(): Validator | undefined;
  setValidator(value?: Validator): void;

  getBlockIdFlag(): tendermint_types_validator_pb.BlockIDFlagMap[keyof tendermint_types_validator_pb.BlockIDFlagMap];
  setBlockIdFlag(value: tendermint_types_validator_pb.BlockIDFlagMap[keyof tendermint_types_validator_pb.BlockIDFlagMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoteInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VoteInfo): VoteInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoteInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoteInfo;
  static deserializeBinaryFromReader(message: VoteInfo, reader: jspb.BinaryReader): VoteInfo;
}

export namespace VoteInfo {
  export type AsObject = {
    validator?: Validator.AsObject,
    blockIdFlag: tendermint_types_validator_pb.BlockIDFlagMap[keyof tendermint_types_validator_pb.BlockIDFlagMap],
  }
}

export class ExtendedVoteInfo extends jspb.Message {
  hasValidator(): boolean;
  clearValidator(): void;
  getValidator(): Validator | undefined;
  setValidator(value?: Validator): void;

  getVoteExtension(): Uint8Array | string;
  getVoteExtension_asU8(): Uint8Array;
  getVoteExtension_asB64(): string;
  setVoteExtension(value: Uint8Array | string): void;

  getExtensionSignature(): Uint8Array | string;
  getExtensionSignature_asU8(): Uint8Array;
  getExtensionSignature_asB64(): string;
  setExtensionSignature(value: Uint8Array | string): void;

  getBlockIdFlag(): tendermint_types_validator_pb.BlockIDFlagMap[keyof tendermint_types_validator_pb.BlockIDFlagMap];
  setBlockIdFlag(value: tendermint_types_validator_pb.BlockIDFlagMap[keyof tendermint_types_validator_pb.BlockIDFlagMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtendedVoteInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExtendedVoteInfo): ExtendedVoteInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExtendedVoteInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtendedVoteInfo;
  static deserializeBinaryFromReader(message: ExtendedVoteInfo, reader: jspb.BinaryReader): ExtendedVoteInfo;
}

export namespace ExtendedVoteInfo {
  export type AsObject = {
    validator?: Validator.AsObject,
    voteExtension: Uint8Array | string,
    extensionSignature: Uint8Array | string,
    blockIdFlag: tendermint_types_validator_pb.BlockIDFlagMap[keyof tendermint_types_validator_pb.BlockIDFlagMap],
  }
}

export class Misbehavior extends jspb.Message {
  getType(): MisbehaviorTypeMap[keyof MisbehaviorTypeMap];
  setType(value: MisbehaviorTypeMap[keyof MisbehaviorTypeMap]): void;

  hasValidator(): boolean;
  clearValidator(): void;
  getValidator(): Validator | undefined;
  setValidator(value?: Validator): void;

  getHeight(): number;
  setHeight(value: number): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTotalVotingPower(): number;
  setTotalVotingPower(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Misbehavior.AsObject;
  static toObject(includeInstance: boolean, msg: Misbehavior): Misbehavior.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Misbehavior, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Misbehavior;
  static deserializeBinaryFromReader(message: Misbehavior, reader: jspb.BinaryReader): Misbehavior;
}

export namespace Misbehavior {
  export type AsObject = {
    type: MisbehaviorTypeMap[keyof MisbehaviorTypeMap],
    validator?: Validator.AsObject,
    height: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    totalVotingPower: number,
  }
}

export class Snapshot extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  getFormat(): number;
  setFormat(value: number): void;

  getChunks(): number;
  setChunks(value: number): void;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getMetadata(): Uint8Array | string;
  getMetadata_asU8(): Uint8Array;
  getMetadata_asB64(): string;
  setMetadata(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Snapshot.AsObject;
  static toObject(includeInstance: boolean, msg: Snapshot): Snapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Snapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Snapshot;
  static deserializeBinaryFromReader(message: Snapshot, reader: jspb.BinaryReader): Snapshot;
}

export namespace Snapshot {
  export type AsObject = {
    height: number,
    format: number,
    chunks: number,
    hash: Uint8Array | string,
    metadata: Uint8Array | string,
  }
}

export interface CheckTxTypeMap {
  NEW: 0;
  RECHECK: 1;
}

export const CheckTxType: CheckTxTypeMap;

export interface MisbehaviorTypeMap {
  UNKNOWN: 0;
  DUPLICATE_VOTE: 1;
  LIGHT_CLIENT_ATTACK: 2;
}

export const MisbehaviorType: MisbehaviorTypeMap;

