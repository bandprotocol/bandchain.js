// package: ibc.core.client.v1
// file: ibc/core/client/v1/query.proto

import * as jspb from "google-protobuf";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../../cosmos/base/query/v1beta1/pagination_pb";
import * as cosmos_query_v1_query_pb from "../../../../cosmos/query/v1/query_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";
import * as ibc_core_commitment_v1_commitment_pb from "../../../../ibc/core/commitment/v1/commitment_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";

export class QueryClientStateRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientStateRequest): QueryClientStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryClientStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientStateRequest;
  static deserializeBinaryFromReader(message: QueryClientStateRequest, reader: jspb.BinaryReader): QueryClientStateRequest;
}

export namespace QueryClientStateRequest {
  export type AsObject = {
    clientId: string,
  }
}

export class QueryClientStateResponse extends jspb.Message {
  hasClientState(): boolean;
  clearClientState(): void;
  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientStateResponse): QueryClientStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryClientStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientStateResponse;
  static deserializeBinaryFromReader(message: QueryClientStateResponse, reader: jspb.BinaryReader): QueryClientStateResponse;
}

export namespace QueryClientStateResponse {
  export type AsObject = {
    clientState?: google_protobuf_any_pb.Any.AsObject,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryClientStatesRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientStatesRequest): QueryClientStatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryClientStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientStatesRequest;
  static deserializeBinaryFromReader(message: QueryClientStatesRequest, reader: jspb.BinaryReader): QueryClientStatesRequest;
}

export namespace QueryClientStatesRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryClientStatesResponse extends jspb.Message {
  clearClientStatesList(): void;
  getClientStatesList(): Array<ibc_core_client_v1_client_pb.IdentifiedClientState>;
  setClientStatesList(value: Array<ibc_core_client_v1_client_pb.IdentifiedClientState>): void;
  addClientStates(value?: ibc_core_client_v1_client_pb.IdentifiedClientState, index?: number): ibc_core_client_v1_client_pb.IdentifiedClientState;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientStatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientStatesResponse): QueryClientStatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryClientStatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientStatesResponse;
  static deserializeBinaryFromReader(message: QueryClientStatesResponse, reader: jspb.BinaryReader): QueryClientStatesResponse;
}

export namespace QueryClientStatesResponse {
  export type AsObject = {
    clientStatesList: Array<ibc_core_client_v1_client_pb.IdentifiedClientState.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryConsensusStateRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  getRevisionNumber(): number;
  setRevisionNumber(value: number): void;

  getRevisionHeight(): number;
  setRevisionHeight(value: number): void;

  getLatestHeight(): boolean;
  setLatestHeight(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConsensusStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConsensusStateRequest): QueryConsensusStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryConsensusStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConsensusStateRequest;
  static deserializeBinaryFromReader(message: QueryConsensusStateRequest, reader: jspb.BinaryReader): QueryConsensusStateRequest;
}

export namespace QueryConsensusStateRequest {
  export type AsObject = {
    clientId: string,
    revisionNumber: number,
    revisionHeight: number,
    latestHeight: boolean,
  }
}

export class QueryConsensusStateResponse extends jspb.Message {
  hasConsensusState(): boolean;
  clearConsensusState(): void;
  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConsensusStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConsensusStateResponse): QueryConsensusStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryConsensusStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConsensusStateResponse;
  static deserializeBinaryFromReader(message: QueryConsensusStateResponse, reader: jspb.BinaryReader): QueryConsensusStateResponse;
}

export namespace QueryConsensusStateResponse {
  export type AsObject = {
    consensusState?: google_protobuf_any_pb.Any.AsObject,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryConsensusStatesRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConsensusStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConsensusStatesRequest): QueryConsensusStatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryConsensusStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConsensusStatesRequest;
  static deserializeBinaryFromReader(message: QueryConsensusStatesRequest, reader: jspb.BinaryReader): QueryConsensusStatesRequest;
}

export namespace QueryConsensusStatesRequest {
  export type AsObject = {
    clientId: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryConsensusStatesResponse extends jspb.Message {
  clearConsensusStatesList(): void;
  getConsensusStatesList(): Array<ibc_core_client_v1_client_pb.ConsensusStateWithHeight>;
  setConsensusStatesList(value: Array<ibc_core_client_v1_client_pb.ConsensusStateWithHeight>): void;
  addConsensusStates(value?: ibc_core_client_v1_client_pb.ConsensusStateWithHeight, index?: number): ibc_core_client_v1_client_pb.ConsensusStateWithHeight;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConsensusStatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConsensusStatesResponse): QueryConsensusStatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryConsensusStatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConsensusStatesResponse;
  static deserializeBinaryFromReader(message: QueryConsensusStatesResponse, reader: jspb.BinaryReader): QueryConsensusStatesResponse;
}

export namespace QueryConsensusStatesResponse {
  export type AsObject = {
    consensusStatesList: Array<ibc_core_client_v1_client_pb.ConsensusStateWithHeight.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryConsensusStateHeightsRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConsensusStateHeightsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConsensusStateHeightsRequest): QueryConsensusStateHeightsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryConsensusStateHeightsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConsensusStateHeightsRequest;
  static deserializeBinaryFromReader(message: QueryConsensusStateHeightsRequest, reader: jspb.BinaryReader): QueryConsensusStateHeightsRequest;
}

export namespace QueryConsensusStateHeightsRequest {
  export type AsObject = {
    clientId: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryConsensusStateHeightsResponse extends jspb.Message {
  clearConsensusStateHeightsList(): void;
  getConsensusStateHeightsList(): Array<ibc_core_client_v1_client_pb.Height>;
  setConsensusStateHeightsList(value: Array<ibc_core_client_v1_client_pb.Height>): void;
  addConsensusStateHeights(value?: ibc_core_client_v1_client_pb.Height, index?: number): ibc_core_client_v1_client_pb.Height;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConsensusStateHeightsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConsensusStateHeightsResponse): QueryConsensusStateHeightsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryConsensusStateHeightsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConsensusStateHeightsResponse;
  static deserializeBinaryFromReader(message: QueryConsensusStateHeightsResponse, reader: jspb.BinaryReader): QueryConsensusStateHeightsResponse;
}

export namespace QueryConsensusStateHeightsResponse {
  export type AsObject = {
    consensusStateHeightsList: Array<ibc_core_client_v1_client_pb.Height.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryClientStatusRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientStatusRequest): QueryClientStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryClientStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientStatusRequest;
  static deserializeBinaryFromReader(message: QueryClientStatusRequest, reader: jspb.BinaryReader): QueryClientStatusRequest;
}

export namespace QueryClientStatusRequest {
  export type AsObject = {
    clientId: string,
  }
}

export class QueryClientStatusResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientStatusResponse): QueryClientStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryClientStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientStatusResponse;
  static deserializeBinaryFromReader(message: QueryClientStatusResponse, reader: jspb.BinaryReader): QueryClientStatusResponse;
}

export namespace QueryClientStatusResponse {
  export type AsObject = {
    status: string,
  }
}

export class QueryClientParamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientParamsRequest): QueryClientParamsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryClientParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientParamsRequest;
  static deserializeBinaryFromReader(message: QueryClientParamsRequest, reader: jspb.BinaryReader): QueryClientParamsRequest;
}

export namespace QueryClientParamsRequest {
  export type AsObject = {
  }
}

export class QueryClientParamsResponse extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): ibc_core_client_v1_client_pb.Params | undefined;
  setParams(value?: ibc_core_client_v1_client_pb.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientParamsResponse): QueryClientParamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryClientParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientParamsResponse;
  static deserializeBinaryFromReader(message: QueryClientParamsResponse, reader: jspb.BinaryReader): QueryClientParamsResponse;
}

export namespace QueryClientParamsResponse {
  export type AsObject = {
    params?: ibc_core_client_v1_client_pb.Params.AsObject,
  }
}

export class QueryUpgradedClientStateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUpgradedClientStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUpgradedClientStateRequest): QueryUpgradedClientStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryUpgradedClientStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUpgradedClientStateRequest;
  static deserializeBinaryFromReader(message: QueryUpgradedClientStateRequest, reader: jspb.BinaryReader): QueryUpgradedClientStateRequest;
}

export namespace QueryUpgradedClientStateRequest {
  export type AsObject = {
  }
}

export class QueryUpgradedClientStateResponse extends jspb.Message {
  hasUpgradedClientState(): boolean;
  clearUpgradedClientState(): void;
  getUpgradedClientState(): google_protobuf_any_pb.Any | undefined;
  setUpgradedClientState(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUpgradedClientStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUpgradedClientStateResponse): QueryUpgradedClientStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryUpgradedClientStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUpgradedClientStateResponse;
  static deserializeBinaryFromReader(message: QueryUpgradedClientStateResponse, reader: jspb.BinaryReader): QueryUpgradedClientStateResponse;
}

export namespace QueryUpgradedClientStateResponse {
  export type AsObject = {
    upgradedClientState?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class QueryUpgradedConsensusStateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUpgradedConsensusStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryUpgradedConsensusStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUpgradedConsensusStateRequest;
  static deserializeBinaryFromReader(message: QueryUpgradedConsensusStateRequest, reader: jspb.BinaryReader): QueryUpgradedConsensusStateRequest;
}

export namespace QueryUpgradedConsensusStateRequest {
  export type AsObject = {
  }
}

export class QueryUpgradedConsensusStateResponse extends jspb.Message {
  hasUpgradedConsensusState(): boolean;
  clearUpgradedConsensusState(): void;
  getUpgradedConsensusState(): google_protobuf_any_pb.Any | undefined;
  setUpgradedConsensusState(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUpgradedConsensusStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryUpgradedConsensusStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUpgradedConsensusStateResponse;
  static deserializeBinaryFromReader(message: QueryUpgradedConsensusStateResponse, reader: jspb.BinaryReader): QueryUpgradedConsensusStateResponse;
}

export namespace QueryUpgradedConsensusStateResponse {
  export type AsObject = {
    upgradedConsensusState?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class QueryVerifyMembershipRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  hasMerklePath(): boolean;
  clearMerklePath(): void;
  getMerklePath(): ibc_core_commitment_v1_commitment_pb.MerklePath | undefined;
  setMerklePath(value?: ibc_core_commitment_v1_commitment_pb.MerklePath): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getTimeDelay(): number;
  setTimeDelay(value: number): void;

  getBlockDelay(): number;
  setBlockDelay(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVerifyMembershipRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVerifyMembershipRequest): QueryVerifyMembershipRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVerifyMembershipRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVerifyMembershipRequest;
  static deserializeBinaryFromReader(message: QueryVerifyMembershipRequest, reader: jspb.BinaryReader): QueryVerifyMembershipRequest;
}

export namespace QueryVerifyMembershipRequest {
  export type AsObject = {
    clientId: string,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    merklePath?: ibc_core_commitment_v1_commitment_pb.MerklePath.AsObject,
    value: Uint8Array | string,
    timeDelay: number,
    blockDelay: number,
  }
}

export class QueryVerifyMembershipResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVerifyMembershipResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVerifyMembershipResponse): QueryVerifyMembershipResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVerifyMembershipResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVerifyMembershipResponse;
  static deserializeBinaryFromReader(message: QueryVerifyMembershipResponse, reader: jspb.BinaryReader): QueryVerifyMembershipResponse;
}

export namespace QueryVerifyMembershipResponse {
  export type AsObject = {
    success: boolean,
  }
}

