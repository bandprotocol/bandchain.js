// package: cosmos.nft.v1beta1
// file: cosmos/nft/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_nft_v1beta1_nft_pb from "../../../cosmos/nft/v1beta1/nft_pb";

export class QueryBalanceRequest extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBalanceRequest): QueryBalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBalanceRequest;
  static deserializeBinaryFromReader(message: QueryBalanceRequest, reader: jspb.BinaryReader): QueryBalanceRequest;
}

export namespace QueryBalanceRequest {
  export type AsObject = {
    classId: string,
    owner: string,
  }
}

export class QueryBalanceResponse extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBalanceResponse): QueryBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBalanceResponse;
  static deserializeBinaryFromReader(message: QueryBalanceResponse, reader: jspb.BinaryReader): QueryBalanceResponse;
}

export namespace QueryBalanceResponse {
  export type AsObject = {
    amount: number,
  }
}

export class QueryOwnerRequest extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOwnerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOwnerRequest): QueryOwnerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryOwnerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOwnerRequest;
  static deserializeBinaryFromReader(message: QueryOwnerRequest, reader: jspb.BinaryReader): QueryOwnerRequest;
}

export namespace QueryOwnerRequest {
  export type AsObject = {
    classId: string,
    id: string,
  }
}

export class QueryOwnerResponse extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOwnerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOwnerResponse): QueryOwnerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryOwnerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOwnerResponse;
  static deserializeBinaryFromReader(message: QueryOwnerResponse, reader: jspb.BinaryReader): QueryOwnerResponse;
}

export namespace QueryOwnerResponse {
  export type AsObject = {
    owner: string,
  }
}

export class QuerySupplyRequest extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySupplyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySupplyRequest): QuerySupplyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySupplyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySupplyRequest;
  static deserializeBinaryFromReader(message: QuerySupplyRequest, reader: jspb.BinaryReader): QuerySupplyRequest;
}

export namespace QuerySupplyRequest {
  export type AsObject = {
    classId: string,
  }
}

export class QuerySupplyResponse extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySupplyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySupplyResponse): QuerySupplyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySupplyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySupplyResponse;
  static deserializeBinaryFromReader(message: QuerySupplyResponse, reader: jspb.BinaryReader): QuerySupplyResponse;
}

export namespace QuerySupplyResponse {
  export type AsObject = {
    amount: number,
  }
}

export class QueryNFTsRequest extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryNFTsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryNFTsRequest): QueryNFTsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryNFTsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryNFTsRequest;
  static deserializeBinaryFromReader(message: QueryNFTsRequest, reader: jspb.BinaryReader): QueryNFTsRequest;
}

export namespace QueryNFTsRequest {
  export type AsObject = {
    classId: string,
    owner: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryNFTsResponse extends jspb.Message {
  clearNftsList(): void;
  getNftsList(): Array<cosmos_nft_v1beta1_nft_pb.NFT>;
  setNftsList(value: Array<cosmos_nft_v1beta1_nft_pb.NFT>): void;
  addNfts(value?: cosmos_nft_v1beta1_nft_pb.NFT, index?: number): cosmos_nft_v1beta1_nft_pb.NFT;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryNFTsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryNFTsResponse): QueryNFTsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryNFTsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryNFTsResponse;
  static deserializeBinaryFromReader(message: QueryNFTsResponse, reader: jspb.BinaryReader): QueryNFTsResponse;
}

export namespace QueryNFTsResponse {
  export type AsObject = {
    nftsList: Array<cosmos_nft_v1beta1_nft_pb.NFT.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryNFTRequest extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryNFTRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryNFTRequest): QueryNFTRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryNFTRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryNFTRequest;
  static deserializeBinaryFromReader(message: QueryNFTRequest, reader: jspb.BinaryReader): QueryNFTRequest;
}

export namespace QueryNFTRequest {
  export type AsObject = {
    classId: string,
    id: string,
  }
}

export class QueryNFTResponse extends jspb.Message {
  hasNft(): boolean;
  clearNft(): void;
  getNft(): cosmos_nft_v1beta1_nft_pb.NFT | undefined;
  setNft(value?: cosmos_nft_v1beta1_nft_pb.NFT): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryNFTResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryNFTResponse): QueryNFTResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryNFTResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryNFTResponse;
  static deserializeBinaryFromReader(message: QueryNFTResponse, reader: jspb.BinaryReader): QueryNFTResponse;
}

export namespace QueryNFTResponse {
  export type AsObject = {
    nft?: cosmos_nft_v1beta1_nft_pb.NFT.AsObject,
  }
}

export class QueryClassRequest extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClassRequest): QueryClassRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClassRequest;
  static deserializeBinaryFromReader(message: QueryClassRequest, reader: jspb.BinaryReader): QueryClassRequest;
}

export namespace QueryClassRequest {
  export type AsObject = {
    classId: string,
  }
}

export class QueryClassResponse extends jspb.Message {
  hasClass(): boolean;
  clearClass(): void;
  getClass(): cosmos_nft_v1beta1_nft_pb.Class | undefined;
  setClass(value?: cosmos_nft_v1beta1_nft_pb.Class): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClassResponse): QueryClassResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClassResponse;
  static deserializeBinaryFromReader(message: QueryClassResponse, reader: jspb.BinaryReader): QueryClassResponse;
}

export namespace QueryClassResponse {
  export type AsObject = {
    pb_class?: cosmos_nft_v1beta1_nft_pb.Class.AsObject,
  }
}

export class QueryClassesRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClassesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClassesRequest): QueryClassesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryClassesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClassesRequest;
  static deserializeBinaryFromReader(message: QueryClassesRequest, reader: jspb.BinaryReader): QueryClassesRequest;
}

export namespace QueryClassesRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryClassesResponse extends jspb.Message {
  clearClassesList(): void;
  getClassesList(): Array<cosmos_nft_v1beta1_nft_pb.Class>;
  setClassesList(value: Array<cosmos_nft_v1beta1_nft_pb.Class>): void;
  addClasses(value?: cosmos_nft_v1beta1_nft_pb.Class, index?: number): cosmos_nft_v1beta1_nft_pb.Class;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClassesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClassesResponse): QueryClassesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryClassesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClassesResponse;
  static deserializeBinaryFromReader(message: QueryClassesResponse, reader: jspb.BinaryReader): QueryClassesResponse;
}

export namespace QueryClassesResponse {
  export type AsObject = {
    classesList: Array<cosmos_nft_v1beta1_nft_pb.Class.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

