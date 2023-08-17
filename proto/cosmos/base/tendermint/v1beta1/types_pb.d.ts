// package: cosmos.base.tendermint.v1beta1
// file: cosmos/base/tendermint/v1beta1/types.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as tendermint_types_types_pb from "../../../../tendermint/types/types_pb";
import * as tendermint_types_evidence_pb from "../../../../tendermint/types/evidence_pb";
import * as tendermint_version_types_pb from "../../../../tendermint/version/types_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as amino_amino_pb from "../../../../amino/amino_pb";

export class Block extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasData(): boolean;
  clearData(): void;
  getData(): tendermint_types_types_pb.Data | undefined;
  setData(value?: tendermint_types_types_pb.Data): void;

  hasEvidence(): boolean;
  clearEvidence(): void;
  getEvidence(): tendermint_types_evidence_pb.EvidenceList | undefined;
  setEvidence(value?: tendermint_types_evidence_pb.EvidenceList): void;

  hasLastCommit(): boolean;
  clearLastCommit(): void;
  getLastCommit(): tendermint_types_types_pb.Commit | undefined;
  setLastCommit(value?: tendermint_types_types_pb.Commit): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    header?: Header.AsObject,
    data?: tendermint_types_types_pb.Data.AsObject,
    evidence?: tendermint_types_evidence_pb.EvidenceList.AsObject,
    lastCommit?: tendermint_types_types_pb.Commit.AsObject,
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
  getLastBlockId(): tendermint_types_types_pb.BlockID | undefined;
  setLastBlockId(value?: tendermint_types_types_pb.BlockID): void;

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

  getProposerAddress(): string;
  setProposerAddress(value: string): void;

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
    lastBlockId?: tendermint_types_types_pb.BlockID.AsObject,
    lastCommitHash: Uint8Array | string,
    dataHash: Uint8Array | string,
    validatorsHash: Uint8Array | string,
    nextValidatorsHash: Uint8Array | string,
    consensusHash: Uint8Array | string,
    appHash: Uint8Array | string,
    lastResultsHash: Uint8Array | string,
    evidenceHash: Uint8Array | string,
    proposerAddress: string,
  }
}

