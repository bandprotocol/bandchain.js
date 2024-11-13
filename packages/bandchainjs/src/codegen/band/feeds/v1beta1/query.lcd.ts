//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryCurrentFeedsRequest, QueryCurrentFeedsResponseSDKType, QueryIsFeederRequest, QueryIsFeederResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryPriceRequest, QueryPriceResponseSDKType, QueryPricesRequest, QueryPricesResponseSDKType, QueryAllPricesRequest, QueryAllPricesResponseSDKType, QueryReferenceSourceConfigRequest, QueryReferenceSourceConfigResponseSDKType, QuerySignalTotalPowersRequest, QuerySignalTotalPowersResponseSDKType, QueryValidValidatorRequest, QueryValidValidatorResponseSDKType, QueryValidatorPricesRequest, QueryValidatorPricesResponseSDKType, QueryVoteRequest, QueryVoteResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.currentFeeds = this.currentFeeds.bind(this);
    this.isFeeder = this.isFeeder.bind(this);
    this.params = this.params.bind(this);
    this.price = this.price.bind(this);
    this.prices = this.prices.bind(this);
    this.allPrices = this.allPrices.bind(this);
    this.referenceSourceConfig = this.referenceSourceConfig.bind(this);
    this.signalTotalPowers = this.signalTotalPowers.bind(this);
    this.validValidator = this.validValidator.bind(this);
    this.validatorPrices = this.validatorPrices.bind(this);
    this.vote = this.vote.bind(this);
  }
  /* CurrentFeeds is an RPC method that returns a list of current supported feeds. */
  async currentFeeds(_params: QueryCurrentFeedsRequest = {}): Promise<QueryCurrentFeedsResponseSDKType> {
    const endpoint = `feeds/v1beta1/current-feeds`;
    return await this.req.get<QueryCurrentFeedsResponseSDKType>(endpoint);
  }
  /* IsFeeder is an RPC method that returns whether an account is a feeder for a specified validator. */
  async isFeeder(params: QueryIsFeederRequest): Promise<QueryIsFeederResponseSDKType> {
    const endpoint = `feeds/v1beta1/feeder/${params.validator}/${params.feeder}`;
    return await this.req.get<QueryIsFeederResponseSDKType>(endpoint);
  }
  /* Params is an RPC method that returns all parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `feeds/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Price is an RPC method that returns price by signal id. */
  async price(params: QueryPriceRequest): Promise<QueryPriceResponseSDKType> {
    const endpoint = `feeds/v1beta1/prices/${params.signalId}`;
    return await this.req.get<QueryPriceResponseSDKType>(endpoint);
  }
  /* Prices is an RPC method that prices by signal ids. */
  async prices(params: QueryPricesRequest): Promise<QueryPricesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.signalIds !== "undefined") {
      options.params.signal_ids = params.signalIds;
    }
    const endpoint = `feeds/v1beta1/prices`;
    return await this.req.get<QueryPricesResponseSDKType>(endpoint, options);
  }
  /* AllPrices is an RPC method that returns all prices. */
  async allPrices(params: QueryAllPricesRequest = {
    pagination: undefined
  }): Promise<QueryAllPricesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `feeds/v1beta1/all-prices`;
    return await this.req.get<QueryAllPricesResponseSDKType>(endpoint, options);
  }
  /* ReferenceSourceConfig is an RPC method that returns information on the reference price source. */
  async referenceSourceConfig(_params: QueryReferenceSourceConfigRequest = {}): Promise<QueryReferenceSourceConfigResponseSDKType> {
    const endpoint = `feeds/v1beta1/reference-source-config`;
    return await this.req.get<QueryReferenceSourceConfigResponseSDKType>(endpoint);
  }
  /* SignalTotalPowers is an RPC method that returns all signal-total-powers or specified signal-total-power by signal
   id. */
  async signalTotalPowers(params: QuerySignalTotalPowersRequest): Promise<QuerySignalTotalPowersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.signalIds !== "undefined") {
      options.params.signal_ids = params.signalIds;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `feeds/v1beta1/signal-total-powers`;
    return await this.req.get<QuerySignalTotalPowersResponseSDKType>(endpoint, options);
  }
  /* ValidValidator is an RPC method that returns a flag to show if the validator is required to send prices. */
  async validValidator(params: QueryValidValidatorRequest): Promise<QueryValidValidatorResponseSDKType> {
    const endpoint = `feeds/v1beta1/validators/${params.validator}/valid`;
    return await this.req.get<QueryValidValidatorResponseSDKType>(endpoint);
  }
  /* ValidatorPrices is an RPC method that returns prices of a validator. */
  async validatorPrices(params: QueryValidatorPricesRequest): Promise<QueryValidatorPricesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.signalIds !== "undefined") {
      options.params.signal_ids = params.signalIds;
    }
    const endpoint = `feeds/v1beta1/validators/${params.validator}/prices`;
    return await this.req.get<QueryValidatorPricesResponseSDKType>(endpoint, options);
  }
  /* Vote is an RPC method that returns signals of a voter. */
  async vote(params: QueryVoteRequest): Promise<QueryVoteResponseSDKType> {
    const endpoint = `feeds/v1beta1/voters/${params.voter}/vote`;
    return await this.req.get<QueryVoteResponseSDKType>(endpoint);
  }
}