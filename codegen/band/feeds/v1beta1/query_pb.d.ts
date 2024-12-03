// package: band.feeds.v1beta1
// file: band/feeds/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as band_feeds_v1beta1_feeds_pb from "../../../band/feeds/v1beta1/feeds_pb";
import * as band_feeds_v1beta1_params_pb from "../../../band/feeds/v1beta1/params_pb";

export class QueryCurrentFeedsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCurrentFeedsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCurrentFeedsRequest): QueryCurrentFeedsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCurrentFeedsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCurrentFeedsRequest;
  static deserializeBinaryFromReader(message: QueryCurrentFeedsRequest, reader: jspb.BinaryReader): QueryCurrentFeedsRequest;
}

export namespace QueryCurrentFeedsRequest {
  export type AsObject = {
  }
}

export class QueryCurrentFeedsResponse extends jspb.Message {
  hasCurrentFeeds(): boolean;
  clearCurrentFeeds(): void;
  getCurrentFeeds(): band_feeds_v1beta1_feeds_pb.CurrentFeedWithDeviations | undefined;
  setCurrentFeeds(value?: band_feeds_v1beta1_feeds_pb.CurrentFeedWithDeviations): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCurrentFeedsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCurrentFeedsResponse): QueryCurrentFeedsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCurrentFeedsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCurrentFeedsResponse;
  static deserializeBinaryFromReader(message: QueryCurrentFeedsResponse, reader: jspb.BinaryReader): QueryCurrentFeedsResponse;
}

export namespace QueryCurrentFeedsResponse {
  export type AsObject = {
    currentFeeds?: band_feeds_v1beta1_feeds_pb.CurrentFeedWithDeviations.AsObject,
  }
}

export class QueryIsFeederRequest extends jspb.Message {
  getValidator(): string;
  setValidator(value: string): void;

  getFeeder(): string;
  setFeeder(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIsFeederRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIsFeederRequest): QueryIsFeederRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryIsFeederRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIsFeederRequest;
  static deserializeBinaryFromReader(message: QueryIsFeederRequest, reader: jspb.BinaryReader): QueryIsFeederRequest;
}

export namespace QueryIsFeederRequest {
  export type AsObject = {
    validator: string,
    feeder: string,
  }
}

export class QueryIsFeederResponse extends jspb.Message {
  getIsFeeder(): boolean;
  setIsFeeder(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIsFeederResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIsFeederResponse): QueryIsFeederResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryIsFeederResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIsFeederResponse;
  static deserializeBinaryFromReader(message: QueryIsFeederResponse, reader: jspb.BinaryReader): QueryIsFeederResponse;
}

export namespace QueryIsFeederResponse {
  export type AsObject = {
    isFeeder: boolean,
  }
}

export class QueryParamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsRequest): QueryParamsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
  static deserializeBinaryFromReader(message: QueryParamsRequest, reader: jspb.BinaryReader): QueryParamsRequest;
}

export namespace QueryParamsRequest {
  export type AsObject = {
  }
}

export class QueryParamsResponse extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): band_feeds_v1beta1_params_pb.Params | undefined;
  setParams(value?: band_feeds_v1beta1_params_pb.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsResponse): QueryParamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
  static deserializeBinaryFromReader(message: QueryParamsResponse, reader: jspb.BinaryReader): QueryParamsResponse;
}

export namespace QueryParamsResponse {
  export type AsObject = {
    params?: band_feeds_v1beta1_params_pb.Params.AsObject,
  }
}

export class QueryPriceRequest extends jspb.Message {
  getSignalId(): string;
  setSignalId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPriceRequest): QueryPriceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPriceRequest;
  static deserializeBinaryFromReader(message: QueryPriceRequest, reader: jspb.BinaryReader): QueryPriceRequest;
}

export namespace QueryPriceRequest {
  export type AsObject = {
    signalId: string,
  }
}

export class QueryPriceResponse extends jspb.Message {
  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): band_feeds_v1beta1_feeds_pb.Price | undefined;
  setPrice(value?: band_feeds_v1beta1_feeds_pb.Price): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPriceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPriceResponse): QueryPriceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPriceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPriceResponse;
  static deserializeBinaryFromReader(message: QueryPriceResponse, reader: jspb.BinaryReader): QueryPriceResponse;
}

export namespace QueryPriceResponse {
  export type AsObject = {
    price?: band_feeds_v1beta1_feeds_pb.Price.AsObject,
  }
}

export class QueryPricesRequest extends jspb.Message {
  clearSignalIdsList(): void;
  getSignalIdsList(): Array<string>;
  setSignalIdsList(value: Array<string>): void;
  addSignalIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPricesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPricesRequest): QueryPricesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPricesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPricesRequest;
  static deserializeBinaryFromReader(message: QueryPricesRequest, reader: jspb.BinaryReader): QueryPricesRequest;
}

export namespace QueryPricesRequest {
  export type AsObject = {
    signalIdsList: Array<string>,
  }
}

export class QueryPricesResponse extends jspb.Message {
  clearPricesList(): void;
  getPricesList(): Array<band_feeds_v1beta1_feeds_pb.Price>;
  setPricesList(value: Array<band_feeds_v1beta1_feeds_pb.Price>): void;
  addPrices(value?: band_feeds_v1beta1_feeds_pb.Price, index?: number): band_feeds_v1beta1_feeds_pb.Price;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPricesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPricesResponse): QueryPricesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPricesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPricesResponse;
  static deserializeBinaryFromReader(message: QueryPricesResponse, reader: jspb.BinaryReader): QueryPricesResponse;
}

export namespace QueryPricesResponse {
  export type AsObject = {
    pricesList: Array<band_feeds_v1beta1_feeds_pb.Price.AsObject>,
  }
}

export class QueryAllPricesRequest extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllPricesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAllPricesRequest): QueryAllPricesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAllPricesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllPricesRequest;
  static deserializeBinaryFromReader(message: QueryAllPricesRequest, reader: jspb.BinaryReader): QueryAllPricesRequest;
}

export namespace QueryAllPricesRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryAllPricesResponse extends jspb.Message {
  clearPricesList(): void;
  getPricesList(): Array<band_feeds_v1beta1_feeds_pb.Price>;
  setPricesList(value: Array<band_feeds_v1beta1_feeds_pb.Price>): void;
  addPrices(value?: band_feeds_v1beta1_feeds_pb.Price, index?: number): band_feeds_v1beta1_feeds_pb.Price;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllPricesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAllPricesResponse): QueryAllPricesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAllPricesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllPricesResponse;
  static deserializeBinaryFromReader(message: QueryAllPricesResponse, reader: jspb.BinaryReader): QueryAllPricesResponse;
}

export namespace QueryAllPricesResponse {
  export type AsObject = {
    pricesList: Array<band_feeds_v1beta1_feeds_pb.Price.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryReferenceSourceConfigRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryReferenceSourceConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryReferenceSourceConfigRequest): QueryReferenceSourceConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryReferenceSourceConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryReferenceSourceConfigRequest;
  static deserializeBinaryFromReader(message: QueryReferenceSourceConfigRequest, reader: jspb.BinaryReader): QueryReferenceSourceConfigRequest;
}

export namespace QueryReferenceSourceConfigRequest {
  export type AsObject = {
  }
}

export class QueryReferenceSourceConfigResponse extends jspb.Message {
  hasReferenceSourceConfig(): boolean;
  clearReferenceSourceConfig(): void;
  getReferenceSourceConfig(): band_feeds_v1beta1_feeds_pb.ReferenceSourceConfig | undefined;
  setReferenceSourceConfig(value?: band_feeds_v1beta1_feeds_pb.ReferenceSourceConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryReferenceSourceConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryReferenceSourceConfigResponse): QueryReferenceSourceConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryReferenceSourceConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryReferenceSourceConfigResponse;
  static deserializeBinaryFromReader(message: QueryReferenceSourceConfigResponse, reader: jspb.BinaryReader): QueryReferenceSourceConfigResponse;
}

export namespace QueryReferenceSourceConfigResponse {
  export type AsObject = {
    referenceSourceConfig?: band_feeds_v1beta1_feeds_pb.ReferenceSourceConfig.AsObject,
  }
}

export class QuerySignalTotalPowersRequest extends jspb.Message {
  clearSignalIdsList(): void;
  getSignalIdsList(): Array<string>;
  setSignalIdsList(value: Array<string>): void;
  addSignalIds(value: string, index?: number): string;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySignalTotalPowersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySignalTotalPowersRequest): QuerySignalTotalPowersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySignalTotalPowersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySignalTotalPowersRequest;
  static deserializeBinaryFromReader(message: QuerySignalTotalPowersRequest, reader: jspb.BinaryReader): QuerySignalTotalPowersRequest;
}

export namespace QuerySignalTotalPowersRequest {
  export type AsObject = {
    signalIdsList: Array<string>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QuerySignalTotalPowersResponse extends jspb.Message {
  clearSignalTotalPowersList(): void;
  getSignalTotalPowersList(): Array<band_feeds_v1beta1_feeds_pb.Signal>;
  setSignalTotalPowersList(value: Array<band_feeds_v1beta1_feeds_pb.Signal>): void;
  addSignalTotalPowers(value?: band_feeds_v1beta1_feeds_pb.Signal, index?: number): band_feeds_v1beta1_feeds_pb.Signal;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySignalTotalPowersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySignalTotalPowersResponse): QuerySignalTotalPowersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySignalTotalPowersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySignalTotalPowersResponse;
  static deserializeBinaryFromReader(message: QuerySignalTotalPowersResponse, reader: jspb.BinaryReader): QuerySignalTotalPowersResponse;
}

export namespace QuerySignalTotalPowersResponse {
  export type AsObject = {
    signalTotalPowersList: Array<band_feeds_v1beta1_feeds_pb.Signal.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryValidValidatorRequest extends jspb.Message {
  getValidator(): string;
  setValidator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValidValidatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValidValidatorRequest): QueryValidValidatorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryValidValidatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValidValidatorRequest;
  static deserializeBinaryFromReader(message: QueryValidValidatorRequest, reader: jspb.BinaryReader): QueryValidValidatorRequest;
}

export namespace QueryValidValidatorRequest {
  export type AsObject = {
    validator: string,
  }
}

export class QueryValidValidatorResponse extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValidValidatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValidValidatorResponse): QueryValidValidatorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryValidValidatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValidValidatorResponse;
  static deserializeBinaryFromReader(message: QueryValidValidatorResponse, reader: jspb.BinaryReader): QueryValidValidatorResponse;
}

export namespace QueryValidValidatorResponse {
  export type AsObject = {
    valid: boolean,
  }
}

export class QueryValidatorPricesRequest extends jspb.Message {
  getValidator(): string;
  setValidator(value: string): void;

  clearSignalIdsList(): void;
  getSignalIdsList(): Array<string>;
  setSignalIdsList(value: Array<string>): void;
  addSignalIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValidatorPricesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValidatorPricesRequest): QueryValidatorPricesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryValidatorPricesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValidatorPricesRequest;
  static deserializeBinaryFromReader(message: QueryValidatorPricesRequest, reader: jspb.BinaryReader): QueryValidatorPricesRequest;
}

export namespace QueryValidatorPricesRequest {
  export type AsObject = {
    validator: string,
    signalIdsList: Array<string>,
  }
}

export class QueryValidatorPricesResponse extends jspb.Message {
  clearValidatorPricesList(): void;
  getValidatorPricesList(): Array<band_feeds_v1beta1_feeds_pb.ValidatorPrice>;
  setValidatorPricesList(value: Array<band_feeds_v1beta1_feeds_pb.ValidatorPrice>): void;
  addValidatorPrices(value?: band_feeds_v1beta1_feeds_pb.ValidatorPrice, index?: number): band_feeds_v1beta1_feeds_pb.ValidatorPrice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValidatorPricesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValidatorPricesResponse): QueryValidatorPricesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryValidatorPricesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValidatorPricesResponse;
  static deserializeBinaryFromReader(message: QueryValidatorPricesResponse, reader: jspb.BinaryReader): QueryValidatorPricesResponse;
}

export namespace QueryValidatorPricesResponse {
  export type AsObject = {
    validatorPricesList: Array<band_feeds_v1beta1_feeds_pb.ValidatorPrice.AsObject>,
  }
}

export class QueryVoteRequest extends jspb.Message {
  getVoter(): string;
  setVoter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVoteRequest): QueryVoteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVoteRequest;
  static deserializeBinaryFromReader(message: QueryVoteRequest, reader: jspb.BinaryReader): QueryVoteRequest;
}

export namespace QueryVoteRequest {
  export type AsObject = {
    voter: string,
  }
}

export class QueryVoteResponse extends jspb.Message {
  clearSignalsList(): void;
  getSignalsList(): Array<band_feeds_v1beta1_feeds_pb.Signal>;
  setSignalsList(value: Array<band_feeds_v1beta1_feeds_pb.Signal>): void;
  addSignals(value?: band_feeds_v1beta1_feeds_pb.Signal, index?: number): band_feeds_v1beta1_feeds_pb.Signal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryVoteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryVoteResponse): QueryVoteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryVoteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryVoteResponse;
  static deserializeBinaryFromReader(message: QueryVoteResponse, reader: jspb.BinaryReader): QueryVoteResponse;
}

export namespace QueryVoteResponse {
  export type AsObject = {
    signalsList: Array<band_feeds_v1beta1_feeds_pb.Signal.AsObject>,
  }
}

