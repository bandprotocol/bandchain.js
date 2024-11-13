//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { CurrentFeedWithDeviations, CurrentFeedWithDeviationsAmino, CurrentFeedWithDeviationsSDKType, Price, PriceAmino, PriceSDKType, ReferenceSourceConfig, ReferenceSourceConfigAmino, ReferenceSourceConfigSDKType, Signal, SignalAmino, SignalSDKType, ValidatorPrice, ValidatorPriceAmino, ValidatorPriceSDKType } from "./feeds";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryCurrentFeedsRequest is the request type for the Query/CurrentFeeds RPC method. */
export interface QueryCurrentFeedsRequest {}
export interface QueryCurrentFeedsRequestProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryCurrentFeedsRequest";
  value: Uint8Array;
}
/** QueryCurrentFeedsRequest is the request type for the Query/CurrentFeeds RPC method. */
export interface QueryCurrentFeedsRequestAmino {}
export interface QueryCurrentFeedsRequestAminoMsg {
  type: "/band.feeds.v1beta1.QueryCurrentFeedsRequest";
  value: QueryCurrentFeedsRequestAmino;
}
/** QueryCurrentFeedsRequest is the request type for the Query/CurrentFeeds RPC method. */
export interface QueryCurrentFeedsRequestSDKType {}
/** QueryCurrentFeedsResponse is the response type for the Query/CurrentFeeds RPC method. */
export interface QueryCurrentFeedsResponse {
  /** current_feeds is a list of currently supported feed-with-deviations, and its last update time and block. */
  currentFeeds: CurrentFeedWithDeviations;
}
export interface QueryCurrentFeedsResponseProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryCurrentFeedsResponse";
  value: Uint8Array;
}
/** QueryCurrentFeedsResponse is the response type for the Query/CurrentFeeds RPC method. */
export interface QueryCurrentFeedsResponseAmino {
  /** current_feeds is a list of currently supported feed-with-deviations, and its last update time and block. */
  current_feeds?: CurrentFeedWithDeviationsAmino;
}
export interface QueryCurrentFeedsResponseAminoMsg {
  type: "/band.feeds.v1beta1.QueryCurrentFeedsResponse";
  value: QueryCurrentFeedsResponseAmino;
}
/** QueryCurrentFeedsResponse is the response type for the Query/CurrentFeeds RPC method. */
export interface QueryCurrentFeedsResponseSDKType {
  current_feeds: CurrentFeedWithDeviationsSDKType;
}
/** QueryIsFeederRequest is the request type for the Query/IsFeeder RPC method. */
export interface QueryIsFeederRequest {
  /** validator is a validator address. */
  validator: string;
  /** feeder is a candidate account. */
  feeder: string;
}
export interface QueryIsFeederRequestProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryIsFeederRequest";
  value: Uint8Array;
}
/** QueryIsFeederRequest is the request type for the Query/IsFeeder RPC method. */
export interface QueryIsFeederRequestAmino {
  /** validator is a validator address. */
  validator?: string;
  /** feeder is a candidate account. */
  feeder?: string;
}
export interface QueryIsFeederRequestAminoMsg {
  type: "/band.feeds.v1beta1.QueryIsFeederRequest";
  value: QueryIsFeederRequestAmino;
}
/** QueryIsFeederRequest is the request type for the Query/IsFeeder RPC method. */
export interface QueryIsFeederRequestSDKType {
  validator: string;
  feeder: string;
}
/** QueryIsFeederResponse is the response type for the Query/IsFeeder RPC method. */
export interface QueryIsFeederResponse {
  /** is_feeder is true if this account has been granted by validator. */
  isFeeder: boolean;
}
export interface QueryIsFeederResponseProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryIsFeederResponse";
  value: Uint8Array;
}
/** QueryIsFeederResponse is the response type for the Query/IsFeeder RPC method. */
export interface QueryIsFeederResponseAmino {
  /** is_feeder is true if this account has been granted by validator. */
  is_feeder?: boolean;
}
export interface QueryIsFeederResponseAminoMsg {
  type: "/band.feeds.v1beta1.QueryIsFeederResponse";
  value: QueryIsFeederResponseAmino;
}
/** QueryIsFeederResponse is the response type for the Query/IsFeeder RPC method. */
export interface QueryIsFeederResponseSDKType {
  is_feeder: boolean;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/band.feeds.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params is the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params is the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/band.feeds.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryPriceRequest is the request type for the Query/Price RPC method. */
export interface QueryPriceRequest {
  /** signal_id is the signal id to query the price for. */
  signalId: string;
}
export interface QueryPriceRequestProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryPriceRequest";
  value: Uint8Array;
}
/** QueryPriceRequest is the request type for the Query/Price RPC method. */
export interface QueryPriceRequestAmino {
  /** signal_id is the signal id to query the price for. */
  signal_id?: string;
}
export interface QueryPriceRequestAminoMsg {
  type: "/band.feeds.v1beta1.QueryPriceRequest";
  value: QueryPriceRequestAmino;
}
/** QueryPriceRequest is the request type for the Query/Price RPC method. */
export interface QueryPriceRequestSDKType {
  signal_id: string;
}
/** QueryPriceResponse is the response type for the Query/Price RPC method. */
export interface QueryPriceResponse {
  /** price is the aggregated price of the signal id. */
  price: Price;
}
export interface QueryPriceResponseProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryPriceResponse";
  value: Uint8Array;
}
/** QueryPriceResponse is the response type for the Query/Price RPC method. */
export interface QueryPriceResponseAmino {
  /** price is the aggregated price of the signal id. */
  price?: PriceAmino;
}
export interface QueryPriceResponseAminoMsg {
  type: "/band.feeds.v1beta1.QueryPriceResponse";
  value: QueryPriceResponseAmino;
}
/** QueryPriceResponse is the response type for the Query/Price RPC method. */
export interface QueryPriceResponseSDKType {
  price: PriceSDKType;
}
/** QueryPricesRequest is the request type for the Query/Prices RPC method. */
export interface QueryPricesRequest {
  /** signal_ids is a list of signal ids to query prices for. */
  signalIds: string[];
}
export interface QueryPricesRequestProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryPricesRequest";
  value: Uint8Array;
}
/** QueryPricesRequest is the request type for the Query/Prices RPC method. */
export interface QueryPricesRequestAmino {
  /** signal_ids is a list of signal ids to query prices for. */
  signal_ids?: string[];
}
export interface QueryPricesRequestAminoMsg {
  type: "/band.feeds.v1beta1.QueryPricesRequest";
  value: QueryPricesRequestAmino;
}
/** QueryPricesRequest is the request type for the Query/Prices RPC method. */
export interface QueryPricesRequestSDKType {
  signal_ids: string[];
}
/** QueryPricesResponse is the response type for the Query/Prices RPC method. */
export interface QueryPricesResponse {
  /** prices is a list of prices. */
  prices: Price[];
}
export interface QueryPricesResponseProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryPricesResponse";
  value: Uint8Array;
}
/** QueryPricesResponse is the response type for the Query/Prices RPC method. */
export interface QueryPricesResponseAmino {
  /** prices is a list of prices. */
  prices?: PriceAmino[];
}
export interface QueryPricesResponseAminoMsg {
  type: "/band.feeds.v1beta1.QueryPricesResponse";
  value: QueryPricesResponseAmino;
}
/** QueryPricesResponse is the response type for the Query/Prices RPC method. */
export interface QueryPricesResponseSDKType {
  prices: PriceSDKType[];
}
/** QueryAllPricesRequest is the request type for the Query/AllPrices RPC method. */
export interface QueryAllPricesRequest {
  /** pagination is the pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAllPricesRequestProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryAllPricesRequest";
  value: Uint8Array;
}
/** QueryAllPricesRequest is the request type for the Query/AllPrices RPC method. */
export interface QueryAllPricesRequestAmino {
  /** pagination is the pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAllPricesRequestAminoMsg {
  type: "/band.feeds.v1beta1.QueryAllPricesRequest";
  value: QueryAllPricesRequestAmino;
}
/** QueryAllPricesRequest is the request type for the Query/AllPrices RPC method. */
export interface QueryAllPricesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryAllPricesResponse is the response type for the Query/AllPrices RPC method. */
export interface QueryAllPricesResponse {
  /** prices is a list of prices. */
  prices: Price[];
  /** pagination is the pagination information in the response. */
  pagination?: PageResponse;
}
export interface QueryAllPricesResponseProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryAllPricesResponse";
  value: Uint8Array;
}
/** QueryAllPricesResponse is the response type for the Query/AllPrices RPC method. */
export interface QueryAllPricesResponseAmino {
  /** prices is a list of prices. */
  prices?: PriceAmino[];
  /** pagination is the pagination information in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAllPricesResponseAminoMsg {
  type: "/band.feeds.v1beta1.QueryAllPricesResponse";
  value: QueryAllPricesResponseAmino;
}
/** QueryAllPricesResponse is the response type for the Query/AllPrices RPC method. */
export interface QueryAllPricesResponseSDKType {
  prices: PriceSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryReferenceSourceConfigRequest is the request type for the Query/ReferenceSourceConfig RPC method. */
export interface QueryReferenceSourceConfigRequest {}
export interface QueryReferenceSourceConfigRequestProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryReferenceSourceConfigRequest";
  value: Uint8Array;
}
/** QueryReferenceSourceConfigRequest is the request type for the Query/ReferenceSourceConfig RPC method. */
export interface QueryReferenceSourceConfigRequestAmino {}
export interface QueryReferenceSourceConfigRequestAminoMsg {
  type: "/band.feeds.v1beta1.QueryReferenceSourceConfigRequest";
  value: QueryReferenceSourceConfigRequestAmino;
}
/** QueryReferenceSourceConfigRequest is the request type for the Query/ReferenceSourceConfig RPC method. */
export interface QueryReferenceSourceConfigRequestSDKType {}
/** QueryReferenceSourceConfigResponse is the response type for the Query/ReferenceSourceConfig RPC method. */
export interface QueryReferenceSourceConfigResponse {
  /** reference_source_config is the information about the reference price source. */
  referenceSourceConfig: ReferenceSourceConfig;
}
export interface QueryReferenceSourceConfigResponseProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryReferenceSourceConfigResponse";
  value: Uint8Array;
}
/** QueryReferenceSourceConfigResponse is the response type for the Query/ReferenceSourceConfig RPC method. */
export interface QueryReferenceSourceConfigResponseAmino {
  /** reference_source_config is the information about the reference price source. */
  reference_source_config?: ReferenceSourceConfigAmino;
}
export interface QueryReferenceSourceConfigResponseAminoMsg {
  type: "/band.feeds.v1beta1.QueryReferenceSourceConfigResponse";
  value: QueryReferenceSourceConfigResponseAmino;
}
/** QueryReferenceSourceConfigResponse is the response type for the Query/ReferenceSourceConfig RPC method. */
export interface QueryReferenceSourceConfigResponseSDKType {
  reference_source_config: ReferenceSourceConfigSDKType;
}
/** QuerySignalTotalPowersRequest is the request type for the Query/SignalTotalPowers RPC method. */
export interface QuerySignalTotalPowersRequest {
  /** signal_ids is a list of signal ids to query. */
  signalIds: string[];
  /** pagination is the pagination for the request. */
  pagination?: PageRequest;
}
export interface QuerySignalTotalPowersRequestProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QuerySignalTotalPowersRequest";
  value: Uint8Array;
}
/** QuerySignalTotalPowersRequest is the request type for the Query/SignalTotalPowers RPC method. */
export interface QuerySignalTotalPowersRequestAmino {
  /** signal_ids is a list of signal ids to query. */
  signal_ids?: string[];
  /** pagination is the pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QuerySignalTotalPowersRequestAminoMsg {
  type: "/band.feeds.v1beta1.QuerySignalTotalPowersRequest";
  value: QuerySignalTotalPowersRequestAmino;
}
/** QuerySignalTotalPowersRequest is the request type for the Query/SignalTotalPowers RPC method. */
export interface QuerySignalTotalPowersRequestSDKType {
  signal_ids: string[];
  pagination?: PageRequestSDKType;
}
/** QuerySignalTotalPowersResponse is the response type for the Query/SignalTotalPowers RPC method. */
export interface QuerySignalTotalPowersResponse {
  /** signal_total_powers is a list of signal-total-powers. */
  signalTotalPowers: Signal[];
  /** pagination is the pagination information in the response. */
  pagination?: PageResponse;
}
export interface QuerySignalTotalPowersResponseProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QuerySignalTotalPowersResponse";
  value: Uint8Array;
}
/** QuerySignalTotalPowersResponse is the response type for the Query/SignalTotalPowers RPC method. */
export interface QuerySignalTotalPowersResponseAmino {
  /** signal_total_powers is a list of signal-total-powers. */
  signal_total_powers?: SignalAmino[];
  /** pagination is the pagination information in the response. */
  pagination?: PageResponseAmino;
}
export interface QuerySignalTotalPowersResponseAminoMsg {
  type: "/band.feeds.v1beta1.QuerySignalTotalPowersResponse";
  value: QuerySignalTotalPowersResponseAmino;
}
/** QuerySignalTotalPowersResponse is the response type for the Query/SignalTotalPowers RPC method. */
export interface QuerySignalTotalPowersResponseSDKType {
  signal_total_powers: SignalSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryValidValidatorRequest is the request type for the Query/ValidValidator RPC method. */
export interface QueryValidValidatorRequest {
  /** validator is the validator address to query the flag. */
  validator: string;
}
export interface QueryValidValidatorRequestProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryValidValidatorRequest";
  value: Uint8Array;
}
/** QueryValidValidatorRequest is the request type for the Query/ValidValidator RPC method. */
export interface QueryValidValidatorRequestAmino {
  /** validator is the validator address to query the flag. */
  validator?: string;
}
export interface QueryValidValidatorRequestAminoMsg {
  type: "/band.feeds.v1beta1.QueryValidValidatorRequest";
  value: QueryValidValidatorRequestAmino;
}
/** QueryValidValidatorRequest is the request type for the Query/ValidValidator RPC method. */
export interface QueryValidValidatorRequestSDKType {
  validator: string;
}
/** QueryValidValidatorResponse is the response type for the Query/ValidValidator RPC method. */
export interface QueryValidValidatorResponse {
  /** valid is a valid flag. */
  valid: boolean;
}
export interface QueryValidValidatorResponseProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryValidValidatorResponse";
  value: Uint8Array;
}
/** QueryValidValidatorResponse is the response type for the Query/ValidValidator RPC method. */
export interface QueryValidValidatorResponseAmino {
  /** valid is a valid flag. */
  valid?: boolean;
}
export interface QueryValidValidatorResponseAminoMsg {
  type: "/band.feeds.v1beta1.QueryValidValidatorResponse";
  value: QueryValidValidatorResponseAmino;
}
/** QueryValidValidatorResponse is the response type for the Query/ValidValidator RPC method. */
export interface QueryValidValidatorResponseSDKType {
  valid: boolean;
}
/** QueryValidatorPricesRequest is the request type for the Query/ValidatorPrices RPC method. */
export interface QueryValidatorPricesRequest {
  /** validator is the validator address to query prices for. */
  validator: string;
  /** signal_ids is the list of signal ids to query the price for. */
  signalIds: string[];
}
export interface QueryValidatorPricesRequestProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryValidatorPricesRequest";
  value: Uint8Array;
}
/** QueryValidatorPricesRequest is the request type for the Query/ValidatorPrices RPC method. */
export interface QueryValidatorPricesRequestAmino {
  /** validator is the validator address to query prices for. */
  validator?: string;
  /** signal_ids is the list of signal ids to query the price for. */
  signal_ids?: string[];
}
export interface QueryValidatorPricesRequestAminoMsg {
  type: "/band.feeds.v1beta1.QueryValidatorPricesRequest";
  value: QueryValidatorPricesRequestAmino;
}
/** QueryValidatorPricesRequest is the request type for the Query/ValidatorPrices RPC method. */
export interface QueryValidatorPricesRequestSDKType {
  validator: string;
  signal_ids: string[];
}
/** QueryValidatorPricesResponse is the response type for the Query/ValidatorPrices RPC method. */
export interface QueryValidatorPricesResponse {
  /** validator_prices is a list of prices submitted by the validator. */
  validatorPrices: ValidatorPrice[];
}
export interface QueryValidatorPricesResponseProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryValidatorPricesResponse";
  value: Uint8Array;
}
/** QueryValidatorPricesResponse is the response type for the Query/ValidatorPrices RPC method. */
export interface QueryValidatorPricesResponseAmino {
  /** validator_prices is a list of prices submitted by the validator. */
  validator_prices?: ValidatorPriceAmino[];
}
export interface QueryValidatorPricesResponseAminoMsg {
  type: "/band.feeds.v1beta1.QueryValidatorPricesResponse";
  value: QueryValidatorPricesResponseAmino;
}
/** QueryValidatorPricesResponse is the response type for the Query/ValidatorPrices RPC method. */
export interface QueryValidatorPricesResponseSDKType {
  validator_prices: ValidatorPriceSDKType[];
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequest {
  /** voter is the voter address to query signal for. */
  voter: string;
}
export interface QueryVoteRequestProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryVoteRequest";
  value: Uint8Array;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequestAmino {
  /** voter is the voter address to query signal for. */
  voter?: string;
}
export interface QueryVoteRequestAminoMsg {
  type: "/band.feeds.v1beta1.QueryVoteRequest";
  value: QueryVoteRequestAmino;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequestSDKType {
  voter: string;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponse {
  /** signals is a list of signals submitted by the voter. */
  signals: Signal[];
}
export interface QueryVoteResponseProtoMsg {
  typeUrl: "/band.feeds.v1beta1.QueryVoteResponse";
  value: Uint8Array;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponseAmino {
  /** signals is a list of signals submitted by the voter. */
  signals?: SignalAmino[];
}
export interface QueryVoteResponseAminoMsg {
  type: "/band.feeds.v1beta1.QueryVoteResponse";
  value: QueryVoteResponseAmino;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponseSDKType {
  signals: SignalSDKType[];
}
function createBaseQueryCurrentFeedsRequest(): QueryCurrentFeedsRequest {
  return {};
}
export const QueryCurrentFeedsRequest = {
  typeUrl: "/band.feeds.v1beta1.QueryCurrentFeedsRequest",
  encode(_: QueryCurrentFeedsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentFeedsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentFeedsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryCurrentFeedsRequest>): QueryCurrentFeedsRequest {
    const message = createBaseQueryCurrentFeedsRequest();
    return message;
  },
  fromAmino(_: QueryCurrentFeedsRequestAmino): QueryCurrentFeedsRequest {
    const message = createBaseQueryCurrentFeedsRequest();
    return message;
  },
  toAmino(_: QueryCurrentFeedsRequest): QueryCurrentFeedsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCurrentFeedsRequestAminoMsg): QueryCurrentFeedsRequest {
    return QueryCurrentFeedsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentFeedsRequestProtoMsg): QueryCurrentFeedsRequest {
    return QueryCurrentFeedsRequest.decode(message.value);
  },
  toProto(message: QueryCurrentFeedsRequest): Uint8Array {
    return QueryCurrentFeedsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentFeedsRequest): QueryCurrentFeedsRequestProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryCurrentFeedsRequest",
      value: QueryCurrentFeedsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentFeedsResponse(): QueryCurrentFeedsResponse {
  return {
    currentFeeds: CurrentFeedWithDeviations.fromPartial({})
  };
}
export const QueryCurrentFeedsResponse = {
  typeUrl: "/band.feeds.v1beta1.QueryCurrentFeedsResponse",
  encode(message: QueryCurrentFeedsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currentFeeds !== undefined) {
      CurrentFeedWithDeviations.encode(message.currentFeeds, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentFeedsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentFeedsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentFeeds = CurrentFeedWithDeviations.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCurrentFeedsResponse>): QueryCurrentFeedsResponse {
    const message = createBaseQueryCurrentFeedsResponse();
    message.currentFeeds = object.currentFeeds !== undefined && object.currentFeeds !== null ? CurrentFeedWithDeviations.fromPartial(object.currentFeeds) : undefined;
    return message;
  },
  fromAmino(object: QueryCurrentFeedsResponseAmino): QueryCurrentFeedsResponse {
    const message = createBaseQueryCurrentFeedsResponse();
    if (object.current_feeds !== undefined && object.current_feeds !== null) {
      message.currentFeeds = CurrentFeedWithDeviations.fromAmino(object.current_feeds);
    }
    return message;
  },
  toAmino(message: QueryCurrentFeedsResponse): QueryCurrentFeedsResponseAmino {
    const obj: any = {};
    obj.current_feeds = message.currentFeeds ? CurrentFeedWithDeviations.toAmino(message.currentFeeds) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentFeedsResponseAminoMsg): QueryCurrentFeedsResponse {
    return QueryCurrentFeedsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentFeedsResponseProtoMsg): QueryCurrentFeedsResponse {
    return QueryCurrentFeedsResponse.decode(message.value);
  },
  toProto(message: QueryCurrentFeedsResponse): Uint8Array {
    return QueryCurrentFeedsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentFeedsResponse): QueryCurrentFeedsResponseProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryCurrentFeedsResponse",
      value: QueryCurrentFeedsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIsFeederRequest(): QueryIsFeederRequest {
  return {
    validator: "",
    feeder: ""
  };
}
export const QueryIsFeederRequest = {
  typeUrl: "/band.feeds.v1beta1.QueryIsFeederRequest",
  encode(message: QueryIsFeederRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsFeederRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsFeederRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.feeder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryIsFeederRequest>): QueryIsFeederRequest {
    const message = createBaseQueryIsFeederRequest();
    message.validator = object.validator ?? "";
    message.feeder = object.feeder ?? "";
    return message;
  },
  fromAmino(object: QueryIsFeederRequestAmino): QueryIsFeederRequest {
    const message = createBaseQueryIsFeederRequest();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    }
    return message;
  },
  toAmino(message: QueryIsFeederRequest): QueryIsFeederRequestAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.feeder = message.feeder === "" ? undefined : message.feeder;
    return obj;
  },
  fromAminoMsg(object: QueryIsFeederRequestAminoMsg): QueryIsFeederRequest {
    return QueryIsFeederRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsFeederRequestProtoMsg): QueryIsFeederRequest {
    return QueryIsFeederRequest.decode(message.value);
  },
  toProto(message: QueryIsFeederRequest): Uint8Array {
    return QueryIsFeederRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIsFeederRequest): QueryIsFeederRequestProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryIsFeederRequest",
      value: QueryIsFeederRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIsFeederResponse(): QueryIsFeederResponse {
  return {
    isFeeder: false
  };
}
export const QueryIsFeederResponse = {
  typeUrl: "/band.feeds.v1beta1.QueryIsFeederResponse",
  encode(message: QueryIsFeederResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isFeeder === true) {
      writer.uint32(8).bool(message.isFeeder);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsFeederResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsFeederResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isFeeder = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryIsFeederResponse>): QueryIsFeederResponse {
    const message = createBaseQueryIsFeederResponse();
    message.isFeeder = object.isFeeder ?? false;
    return message;
  },
  fromAmino(object: QueryIsFeederResponseAmino): QueryIsFeederResponse {
    const message = createBaseQueryIsFeederResponse();
    if (object.is_feeder !== undefined && object.is_feeder !== null) {
      message.isFeeder = object.is_feeder;
    }
    return message;
  },
  toAmino(message: QueryIsFeederResponse): QueryIsFeederResponseAmino {
    const obj: any = {};
    obj.is_feeder = message.isFeeder === false ? undefined : message.isFeeder;
    return obj;
  },
  fromAminoMsg(object: QueryIsFeederResponseAminoMsg): QueryIsFeederResponse {
    return QueryIsFeederResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsFeederResponseProtoMsg): QueryIsFeederResponse {
    return QueryIsFeederResponse.decode(message.value);
  },
  toProto(message: QueryIsFeederResponse): Uint8Array {
    return QueryIsFeederResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIsFeederResponse): QueryIsFeederResponseProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryIsFeederResponse",
      value: QueryIsFeederResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/band.feeds.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/band.feeds.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPriceRequest(): QueryPriceRequest {
  return {
    signalId: ""
  };
}
export const QueryPriceRequest = {
  typeUrl: "/band.feeds.v1beta1.QueryPriceRequest",
  encode(message: QueryPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signalId !== "") {
      writer.uint32(10).string(message.signalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signalId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPriceRequest>): QueryPriceRequest {
    const message = createBaseQueryPriceRequest();
    message.signalId = object.signalId ?? "";
    return message;
  },
  fromAmino(object: QueryPriceRequestAmino): QueryPriceRequest {
    const message = createBaseQueryPriceRequest();
    if (object.signal_id !== undefined && object.signal_id !== null) {
      message.signalId = object.signal_id;
    }
    return message;
  },
  toAmino(message: QueryPriceRequest): QueryPriceRequestAmino {
    const obj: any = {};
    obj.signal_id = message.signalId === "" ? undefined : message.signalId;
    return obj;
  },
  fromAminoMsg(object: QueryPriceRequestAminoMsg): QueryPriceRequest {
    return QueryPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceRequestProtoMsg): QueryPriceRequest {
    return QueryPriceRequest.decode(message.value);
  },
  toProto(message: QueryPriceRequest): Uint8Array {
    return QueryPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceRequest): QueryPriceRequestProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryPriceRequest",
      value: QueryPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPriceResponse(): QueryPriceResponse {
  return {
    price: Price.fromPartial({})
  };
}
export const QueryPriceResponse = {
  typeUrl: "/band.feeds.v1beta1.QueryPriceResponse",
  encode(message: QueryPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== undefined) {
      Price.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Price.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPriceResponse>): QueryPriceResponse {
    const message = createBaseQueryPriceResponse();
    message.price = object.price !== undefined && object.price !== null ? Price.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object: QueryPriceResponseAmino): QueryPriceResponse {
    const message = createBaseQueryPriceResponse();
    if (object.price !== undefined && object.price !== null) {
      message.price = Price.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: QueryPriceResponse): QueryPriceResponseAmino {
    const obj: any = {};
    obj.price = message.price ? Price.toAmino(message.price) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPriceResponseAminoMsg): QueryPriceResponse {
    return QueryPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceResponseProtoMsg): QueryPriceResponse {
    return QueryPriceResponse.decode(message.value);
  },
  toProto(message: QueryPriceResponse): Uint8Array {
    return QueryPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceResponse): QueryPriceResponseProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryPriceResponse",
      value: QueryPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPricesRequest(): QueryPricesRequest {
  return {
    signalIds: []
  };
}
export const QueryPricesRequest = {
  typeUrl: "/band.feeds.v1beta1.QueryPricesRequest",
  encode(message: QueryPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.signalIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPricesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signalIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPricesRequest>): QueryPricesRequest {
    const message = createBaseQueryPricesRequest();
    message.signalIds = object.signalIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryPricesRequestAmino): QueryPricesRequest {
    const message = createBaseQueryPricesRequest();
    message.signalIds = object.signal_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryPricesRequest): QueryPricesRequestAmino {
    const obj: any = {};
    if (message.signalIds) {
      obj.signal_ids = message.signalIds.map(e => e);
    } else {
      obj.signal_ids = message.signalIds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPricesRequestAminoMsg): QueryPricesRequest {
    return QueryPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPricesRequestProtoMsg): QueryPricesRequest {
    return QueryPricesRequest.decode(message.value);
  },
  toProto(message: QueryPricesRequest): Uint8Array {
    return QueryPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPricesRequest): QueryPricesRequestProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryPricesRequest",
      value: QueryPricesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPricesResponse(): QueryPricesResponse {
  return {
    prices: []
  };
}
export const QueryPricesResponse = {
  typeUrl: "/band.feeds.v1beta1.QueryPricesResponse",
  encode(message: QueryPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.prices) {
      Price.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(Price.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPricesResponse>): QueryPricesResponse {
    const message = createBaseQueryPricesResponse();
    message.prices = object.prices?.map(e => Price.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPricesResponseAmino): QueryPricesResponse {
    const message = createBaseQueryPricesResponse();
    message.prices = object.prices?.map(e => Price.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPricesResponse): QueryPricesResponseAmino {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? Price.toAmino(e) : undefined);
    } else {
      obj.prices = message.prices;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPricesResponseAminoMsg): QueryPricesResponse {
    return QueryPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPricesResponseProtoMsg): QueryPricesResponse {
    return QueryPricesResponse.decode(message.value);
  },
  toProto(message: QueryPricesResponse): Uint8Array {
    return QueryPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPricesResponse): QueryPricesResponseProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryPricesResponse",
      value: QueryPricesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPricesRequest(): QueryAllPricesRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPricesRequest = {
  typeUrl: "/band.feeds.v1beta1.QueryAllPricesRequest",
  encode(message: QueryAllPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPricesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllPricesRequest>): QueryAllPricesRequest {
    const message = createBaseQueryAllPricesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPricesRequestAmino): QueryAllPricesRequest {
    const message = createBaseQueryAllPricesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPricesRequest): QueryAllPricesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPricesRequestAminoMsg): QueryAllPricesRequest {
    return QueryAllPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPricesRequestProtoMsg): QueryAllPricesRequest {
    return QueryAllPricesRequest.decode(message.value);
  },
  toProto(message: QueryAllPricesRequest): Uint8Array {
    return QueryAllPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPricesRequest): QueryAllPricesRequestProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryAllPricesRequest",
      value: QueryAllPricesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPricesResponse(): QueryAllPricesResponse {
  return {
    prices: [],
    pagination: undefined
  };
}
export const QueryAllPricesResponse = {
  typeUrl: "/band.feeds.v1beta1.QueryAllPricesResponse",
  encode(message: QueryAllPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.prices) {
      Price.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(Price.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllPricesResponse>): QueryAllPricesResponse {
    const message = createBaseQueryAllPricesResponse();
    message.prices = object.prices?.map(e => Price.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPricesResponseAmino): QueryAllPricesResponse {
    const message = createBaseQueryAllPricesResponse();
    message.prices = object.prices?.map(e => Price.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPricesResponse): QueryAllPricesResponseAmino {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? Price.toAmino(e) : undefined);
    } else {
      obj.prices = message.prices;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPricesResponseAminoMsg): QueryAllPricesResponse {
    return QueryAllPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPricesResponseProtoMsg): QueryAllPricesResponse {
    return QueryAllPricesResponse.decode(message.value);
  },
  toProto(message: QueryAllPricesResponse): Uint8Array {
    return QueryAllPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPricesResponse): QueryAllPricesResponseProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryAllPricesResponse",
      value: QueryAllPricesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryReferenceSourceConfigRequest(): QueryReferenceSourceConfigRequest {
  return {};
}
export const QueryReferenceSourceConfigRequest = {
  typeUrl: "/band.feeds.v1beta1.QueryReferenceSourceConfigRequest",
  encode(_: QueryReferenceSourceConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReferenceSourceConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReferenceSourceConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryReferenceSourceConfigRequest>): QueryReferenceSourceConfigRequest {
    const message = createBaseQueryReferenceSourceConfigRequest();
    return message;
  },
  fromAmino(_: QueryReferenceSourceConfigRequestAmino): QueryReferenceSourceConfigRequest {
    const message = createBaseQueryReferenceSourceConfigRequest();
    return message;
  },
  toAmino(_: QueryReferenceSourceConfigRequest): QueryReferenceSourceConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryReferenceSourceConfigRequestAminoMsg): QueryReferenceSourceConfigRequest {
    return QueryReferenceSourceConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReferenceSourceConfigRequestProtoMsg): QueryReferenceSourceConfigRequest {
    return QueryReferenceSourceConfigRequest.decode(message.value);
  },
  toProto(message: QueryReferenceSourceConfigRequest): Uint8Array {
    return QueryReferenceSourceConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReferenceSourceConfigRequest): QueryReferenceSourceConfigRequestProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryReferenceSourceConfigRequest",
      value: QueryReferenceSourceConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryReferenceSourceConfigResponse(): QueryReferenceSourceConfigResponse {
  return {
    referenceSourceConfig: ReferenceSourceConfig.fromPartial({})
  };
}
export const QueryReferenceSourceConfigResponse = {
  typeUrl: "/band.feeds.v1beta1.QueryReferenceSourceConfigResponse",
  encode(message: QueryReferenceSourceConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.referenceSourceConfig !== undefined) {
      ReferenceSourceConfig.encode(message.referenceSourceConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReferenceSourceConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReferenceSourceConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.referenceSourceConfig = ReferenceSourceConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryReferenceSourceConfigResponse>): QueryReferenceSourceConfigResponse {
    const message = createBaseQueryReferenceSourceConfigResponse();
    message.referenceSourceConfig = object.referenceSourceConfig !== undefined && object.referenceSourceConfig !== null ? ReferenceSourceConfig.fromPartial(object.referenceSourceConfig) : undefined;
    return message;
  },
  fromAmino(object: QueryReferenceSourceConfigResponseAmino): QueryReferenceSourceConfigResponse {
    const message = createBaseQueryReferenceSourceConfigResponse();
    if (object.reference_source_config !== undefined && object.reference_source_config !== null) {
      message.referenceSourceConfig = ReferenceSourceConfig.fromAmino(object.reference_source_config);
    }
    return message;
  },
  toAmino(message: QueryReferenceSourceConfigResponse): QueryReferenceSourceConfigResponseAmino {
    const obj: any = {};
    obj.reference_source_config = message.referenceSourceConfig ? ReferenceSourceConfig.toAmino(message.referenceSourceConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReferenceSourceConfigResponseAminoMsg): QueryReferenceSourceConfigResponse {
    return QueryReferenceSourceConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReferenceSourceConfigResponseProtoMsg): QueryReferenceSourceConfigResponse {
    return QueryReferenceSourceConfigResponse.decode(message.value);
  },
  toProto(message: QueryReferenceSourceConfigResponse): Uint8Array {
    return QueryReferenceSourceConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReferenceSourceConfigResponse): QueryReferenceSourceConfigResponseProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryReferenceSourceConfigResponse",
      value: QueryReferenceSourceConfigResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySignalTotalPowersRequest(): QuerySignalTotalPowersRequest {
  return {
    signalIds: [],
    pagination: undefined
  };
}
export const QuerySignalTotalPowersRequest = {
  typeUrl: "/band.feeds.v1beta1.QuerySignalTotalPowersRequest",
  encode(message: QuerySignalTotalPowersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.signalIds) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySignalTotalPowersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySignalTotalPowersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signalIds.push(reader.string());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySignalTotalPowersRequest>): QuerySignalTotalPowersRequest {
    const message = createBaseQuerySignalTotalPowersRequest();
    message.signalIds = object.signalIds?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySignalTotalPowersRequestAmino): QuerySignalTotalPowersRequest {
    const message = createBaseQuerySignalTotalPowersRequest();
    message.signalIds = object.signal_ids?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySignalTotalPowersRequest): QuerySignalTotalPowersRequestAmino {
    const obj: any = {};
    if (message.signalIds) {
      obj.signal_ids = message.signalIds.map(e => e);
    } else {
      obj.signal_ids = message.signalIds;
    }
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySignalTotalPowersRequestAminoMsg): QuerySignalTotalPowersRequest {
    return QuerySignalTotalPowersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySignalTotalPowersRequestProtoMsg): QuerySignalTotalPowersRequest {
    return QuerySignalTotalPowersRequest.decode(message.value);
  },
  toProto(message: QuerySignalTotalPowersRequest): Uint8Array {
    return QuerySignalTotalPowersRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySignalTotalPowersRequest): QuerySignalTotalPowersRequestProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QuerySignalTotalPowersRequest",
      value: QuerySignalTotalPowersRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySignalTotalPowersResponse(): QuerySignalTotalPowersResponse {
  return {
    signalTotalPowers: [],
    pagination: undefined
  };
}
export const QuerySignalTotalPowersResponse = {
  typeUrl: "/band.feeds.v1beta1.QuerySignalTotalPowersResponse",
  encode(message: QuerySignalTotalPowersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.signalTotalPowers) {
      Signal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySignalTotalPowersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySignalTotalPowersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signalTotalPowers.push(Signal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySignalTotalPowersResponse>): QuerySignalTotalPowersResponse {
    const message = createBaseQuerySignalTotalPowersResponse();
    message.signalTotalPowers = object.signalTotalPowers?.map(e => Signal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySignalTotalPowersResponseAmino): QuerySignalTotalPowersResponse {
    const message = createBaseQuerySignalTotalPowersResponse();
    message.signalTotalPowers = object.signal_total_powers?.map(e => Signal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySignalTotalPowersResponse): QuerySignalTotalPowersResponseAmino {
    const obj: any = {};
    if (message.signalTotalPowers) {
      obj.signal_total_powers = message.signalTotalPowers.map(e => e ? Signal.toAmino(e) : undefined);
    } else {
      obj.signal_total_powers = message.signalTotalPowers;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySignalTotalPowersResponseAminoMsg): QuerySignalTotalPowersResponse {
    return QuerySignalTotalPowersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySignalTotalPowersResponseProtoMsg): QuerySignalTotalPowersResponse {
    return QuerySignalTotalPowersResponse.decode(message.value);
  },
  toProto(message: QuerySignalTotalPowersResponse): Uint8Array {
    return QuerySignalTotalPowersResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySignalTotalPowersResponse): QuerySignalTotalPowersResponseProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QuerySignalTotalPowersResponse",
      value: QuerySignalTotalPowersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidValidatorRequest(): QueryValidValidatorRequest {
  return {
    validator: ""
  };
}
export const QueryValidValidatorRequest = {
  typeUrl: "/band.feeds.v1beta1.QueryValidValidatorRequest",
  encode(message: QueryValidValidatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidValidatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidValidatorRequest>): QueryValidValidatorRequest {
    const message = createBaseQueryValidValidatorRequest();
    message.validator = object.validator ?? "";
    return message;
  },
  fromAmino(object: QueryValidValidatorRequestAmino): QueryValidValidatorRequest {
    const message = createBaseQueryValidValidatorRequest();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    return message;
  },
  toAmino(message: QueryValidValidatorRequest): QueryValidValidatorRequestAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    return obj;
  },
  fromAminoMsg(object: QueryValidValidatorRequestAminoMsg): QueryValidValidatorRequest {
    return QueryValidValidatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidValidatorRequestProtoMsg): QueryValidValidatorRequest {
    return QueryValidValidatorRequest.decode(message.value);
  },
  toProto(message: QueryValidValidatorRequest): Uint8Array {
    return QueryValidValidatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidValidatorRequest): QueryValidValidatorRequestProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryValidValidatorRequest",
      value: QueryValidValidatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidValidatorResponse(): QueryValidValidatorResponse {
  return {
    valid: false
  };
}
export const QueryValidValidatorResponse = {
  typeUrl: "/band.feeds.v1beta1.QueryValidValidatorResponse",
  encode(message: QueryValidValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valid === true) {
      writer.uint32(8).bool(message.valid);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidValidatorResponse>): QueryValidValidatorResponse {
    const message = createBaseQueryValidValidatorResponse();
    message.valid = object.valid ?? false;
    return message;
  },
  fromAmino(object: QueryValidValidatorResponseAmino): QueryValidValidatorResponse {
    const message = createBaseQueryValidValidatorResponse();
    if (object.valid !== undefined && object.valid !== null) {
      message.valid = object.valid;
    }
    return message;
  },
  toAmino(message: QueryValidValidatorResponse): QueryValidValidatorResponseAmino {
    const obj: any = {};
    obj.valid = message.valid === false ? undefined : message.valid;
    return obj;
  },
  fromAminoMsg(object: QueryValidValidatorResponseAminoMsg): QueryValidValidatorResponse {
    return QueryValidValidatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidValidatorResponseProtoMsg): QueryValidValidatorResponse {
    return QueryValidValidatorResponse.decode(message.value);
  },
  toProto(message: QueryValidValidatorResponse): Uint8Array {
    return QueryValidValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidValidatorResponse): QueryValidValidatorResponseProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryValidValidatorResponse",
      value: QueryValidValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorPricesRequest(): QueryValidatorPricesRequest {
  return {
    validator: "",
    signalIds: []
  };
}
export const QueryValidatorPricesRequest = {
  typeUrl: "/band.feeds.v1beta1.QueryValidatorPricesRequest",
  encode(message: QueryValidatorPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    for (const v of message.signalIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorPricesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorPricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.signalIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorPricesRequest>): QueryValidatorPricesRequest {
    const message = createBaseQueryValidatorPricesRequest();
    message.validator = object.validator ?? "";
    message.signalIds = object.signalIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryValidatorPricesRequestAmino): QueryValidatorPricesRequest {
    const message = createBaseQueryValidatorPricesRequest();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    message.signalIds = object.signal_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryValidatorPricesRequest): QueryValidatorPricesRequestAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    if (message.signalIds) {
      obj.signal_ids = message.signalIds.map(e => e);
    } else {
      obj.signal_ids = message.signalIds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryValidatorPricesRequestAminoMsg): QueryValidatorPricesRequest {
    return QueryValidatorPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorPricesRequestProtoMsg): QueryValidatorPricesRequest {
    return QueryValidatorPricesRequest.decode(message.value);
  },
  toProto(message: QueryValidatorPricesRequest): Uint8Array {
    return QueryValidatorPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorPricesRequest): QueryValidatorPricesRequestProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryValidatorPricesRequest",
      value: QueryValidatorPricesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorPricesResponse(): QueryValidatorPricesResponse {
  return {
    validatorPrices: []
  };
}
export const QueryValidatorPricesResponse = {
  typeUrl: "/band.feeds.v1beta1.QueryValidatorPricesResponse",
  encode(message: QueryValidatorPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validatorPrices) {
      ValidatorPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorPrices.push(ValidatorPrice.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorPricesResponse>): QueryValidatorPricesResponse {
    const message = createBaseQueryValidatorPricesResponse();
    message.validatorPrices = object.validatorPrices?.map(e => ValidatorPrice.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryValidatorPricesResponseAmino): QueryValidatorPricesResponse {
    const message = createBaseQueryValidatorPricesResponse();
    message.validatorPrices = object.validator_prices?.map(e => ValidatorPrice.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryValidatorPricesResponse): QueryValidatorPricesResponseAmino {
    const obj: any = {};
    if (message.validatorPrices) {
      obj.validator_prices = message.validatorPrices.map(e => e ? ValidatorPrice.toAmino(e) : undefined);
    } else {
      obj.validator_prices = message.validatorPrices;
    }
    return obj;
  },
  fromAminoMsg(object: QueryValidatorPricesResponseAminoMsg): QueryValidatorPricesResponse {
    return QueryValidatorPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorPricesResponseProtoMsg): QueryValidatorPricesResponse {
    return QueryValidatorPricesResponse.decode(message.value);
  },
  toProto(message: QueryValidatorPricesResponse): Uint8Array {
    return QueryValidatorPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorPricesResponse): QueryValidatorPricesResponseProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryValidatorPricesResponse",
      value: QueryValidatorPricesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVoteRequest(): QueryVoteRequest {
  return {
    voter: ""
  };
}
export const QueryVoteRequest = {
  typeUrl: "/band.feeds.v1beta1.QueryVoteRequest",
  encode(message: QueryVoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVoteRequest>): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    message.voter = object.voter ?? "";
    return message;
  },
  fromAmino(object: QueryVoteRequestAmino): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    return message;
  },
  toAmino(message: QueryVoteRequest): QueryVoteRequestAmino {
    const obj: any = {};
    obj.voter = message.voter === "" ? undefined : message.voter;
    return obj;
  },
  fromAminoMsg(object: QueryVoteRequestAminoMsg): QueryVoteRequest {
    return QueryVoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteRequestProtoMsg): QueryVoteRequest {
    return QueryVoteRequest.decode(message.value);
  },
  toProto(message: QueryVoteRequest): Uint8Array {
    return QueryVoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteRequest): QueryVoteRequestProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryVoteRequest",
      value: QueryVoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVoteResponse(): QueryVoteResponse {
  return {
    signals: []
  };
}
export const QueryVoteResponse = {
  typeUrl: "/band.feeds.v1beta1.QueryVoteResponse",
  encode(message: QueryVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.signals) {
      Signal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signals.push(Signal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVoteResponse>): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    message.signals = object.signals?.map(e => Signal.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryVoteResponseAmino): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    message.signals = object.signals?.map(e => Signal.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryVoteResponse): QueryVoteResponseAmino {
    const obj: any = {};
    if (message.signals) {
      obj.signals = message.signals.map(e => e ? Signal.toAmino(e) : undefined);
    } else {
      obj.signals = message.signals;
    }
    return obj;
  },
  fromAminoMsg(object: QueryVoteResponseAminoMsg): QueryVoteResponse {
    return QueryVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteResponseProtoMsg): QueryVoteResponse {
    return QueryVoteResponse.decode(message.value);
  },
  toProto(message: QueryVoteResponse): Uint8Array {
    return QueryVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteResponse): QueryVoteResponseProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.QueryVoteResponse",
      value: QueryVoteResponse.encode(message).finish()
    };
  }
};