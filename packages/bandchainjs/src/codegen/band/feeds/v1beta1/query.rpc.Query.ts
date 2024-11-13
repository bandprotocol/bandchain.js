//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryCurrentFeedsRequest, QueryCurrentFeedsResponse, QueryIsFeederRequest, QueryIsFeederResponse, QueryParamsRequest, QueryParamsResponse, QueryPriceRequest, QueryPriceResponse, QueryPricesRequest, QueryPricesResponse, QueryAllPricesRequest, QueryAllPricesResponse, QueryReferenceSourceConfigRequest, QueryReferenceSourceConfigResponse, QuerySignalTotalPowersRequest, QuerySignalTotalPowersResponse, QueryValidValidatorRequest, QueryValidValidatorResponse, QueryValidatorPricesRequest, QueryValidatorPricesResponse, QueryVoteRequest, QueryVoteResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** CurrentFeeds is an RPC method that returns a list of current supported feeds. */
  currentFeeds(request?: QueryCurrentFeedsRequest): Promise<QueryCurrentFeedsResponse>;
  /** IsFeeder is an RPC method that returns whether an account is a feeder for a specified validator. */
  isFeeder(request: QueryIsFeederRequest): Promise<QueryIsFeederResponse>;
  /** Params is an RPC method that returns all parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Price is an RPC method that returns price by signal id. */
  price(request: QueryPriceRequest): Promise<QueryPriceResponse>;
  /** Prices is an RPC method that prices by signal ids. */
  prices(request: QueryPricesRequest): Promise<QueryPricesResponse>;
  /** AllPrices is an RPC method that returns all prices. */
  allPrices(request?: QueryAllPricesRequest): Promise<QueryAllPricesResponse>;
  /** ReferenceSourceConfig is an RPC method that returns information on the reference price source. */
  referenceSourceConfig(request?: QueryReferenceSourceConfigRequest): Promise<QueryReferenceSourceConfigResponse>;
  /**
   * SignalTotalPowers is an RPC method that returns all signal-total-powers or specified signal-total-power by signal
   * id.
   */
  signalTotalPowers(request: QuerySignalTotalPowersRequest): Promise<QuerySignalTotalPowersResponse>;
  /** ValidValidator is an RPC method that returns a flag to show if the validator is required to send prices. */
  validValidator(request: QueryValidValidatorRequest): Promise<QueryValidValidatorResponse>;
  /** ValidatorPrices is an RPC method that returns prices of a validator. */
  validatorPrices(request: QueryValidatorPricesRequest): Promise<QueryValidatorPricesResponse>;
  /** Vote is an RPC method that returns signals of a voter. */
  vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
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
  currentFeeds(request: QueryCurrentFeedsRequest = {}): Promise<QueryCurrentFeedsResponse> {
    const data = QueryCurrentFeedsRequest.encode(request).finish();
    const promise = this.rpc.request("band.feeds.v1beta1.Query", "CurrentFeeds", data);
    return promise.then(data => QueryCurrentFeedsResponse.decode(new BinaryReader(data)));
  }
  isFeeder(request: QueryIsFeederRequest): Promise<QueryIsFeederResponse> {
    const data = QueryIsFeederRequest.encode(request).finish();
    const promise = this.rpc.request("band.feeds.v1beta1.Query", "IsFeeder", data);
    return promise.then(data => QueryIsFeederResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("band.feeds.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  price(request: QueryPriceRequest): Promise<QueryPriceResponse> {
    const data = QueryPriceRequest.encode(request).finish();
    const promise = this.rpc.request("band.feeds.v1beta1.Query", "Price", data);
    return promise.then(data => QueryPriceResponse.decode(new BinaryReader(data)));
  }
  prices(request: QueryPricesRequest): Promise<QueryPricesResponse> {
    const data = QueryPricesRequest.encode(request).finish();
    const promise = this.rpc.request("band.feeds.v1beta1.Query", "Prices", data);
    return promise.then(data => QueryPricesResponse.decode(new BinaryReader(data)));
  }
  allPrices(request: QueryAllPricesRequest = {
    pagination: undefined
  }): Promise<QueryAllPricesResponse> {
    const data = QueryAllPricesRequest.encode(request).finish();
    const promise = this.rpc.request("band.feeds.v1beta1.Query", "AllPrices", data);
    return promise.then(data => QueryAllPricesResponse.decode(new BinaryReader(data)));
  }
  referenceSourceConfig(request: QueryReferenceSourceConfigRequest = {}): Promise<QueryReferenceSourceConfigResponse> {
    const data = QueryReferenceSourceConfigRequest.encode(request).finish();
    const promise = this.rpc.request("band.feeds.v1beta1.Query", "ReferenceSourceConfig", data);
    return promise.then(data => QueryReferenceSourceConfigResponse.decode(new BinaryReader(data)));
  }
  signalTotalPowers(request: QuerySignalTotalPowersRequest): Promise<QuerySignalTotalPowersResponse> {
    const data = QuerySignalTotalPowersRequest.encode(request).finish();
    const promise = this.rpc.request("band.feeds.v1beta1.Query", "SignalTotalPowers", data);
    return promise.then(data => QuerySignalTotalPowersResponse.decode(new BinaryReader(data)));
  }
  validValidator(request: QueryValidValidatorRequest): Promise<QueryValidValidatorResponse> {
    const data = QueryValidValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("band.feeds.v1beta1.Query", "ValidValidator", data);
    return promise.then(data => QueryValidValidatorResponse.decode(new BinaryReader(data)));
  }
  validatorPrices(request: QueryValidatorPricesRequest): Promise<QueryValidatorPricesResponse> {
    const data = QueryValidatorPricesRequest.encode(request).finish();
    const promise = this.rpc.request("band.feeds.v1beta1.Query", "ValidatorPrices", data);
    return promise.then(data => QueryValidatorPricesResponse.decode(new BinaryReader(data)));
  }
  vote(request: QueryVoteRequest): Promise<QueryVoteResponse> {
    const data = QueryVoteRequest.encode(request).finish();
    const promise = this.rpc.request("band.feeds.v1beta1.Query", "Vote", data);
    return promise.then(data => QueryVoteResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    currentFeeds(request?: QueryCurrentFeedsRequest): Promise<QueryCurrentFeedsResponse> {
      return queryService.currentFeeds(request);
    },
    isFeeder(request: QueryIsFeederRequest): Promise<QueryIsFeederResponse> {
      return queryService.isFeeder(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    price(request: QueryPriceRequest): Promise<QueryPriceResponse> {
      return queryService.price(request);
    },
    prices(request: QueryPricesRequest): Promise<QueryPricesResponse> {
      return queryService.prices(request);
    },
    allPrices(request?: QueryAllPricesRequest): Promise<QueryAllPricesResponse> {
      return queryService.allPrices(request);
    },
    referenceSourceConfig(request?: QueryReferenceSourceConfigRequest): Promise<QueryReferenceSourceConfigResponse> {
      return queryService.referenceSourceConfig(request);
    },
    signalTotalPowers(request: QuerySignalTotalPowersRequest): Promise<QuerySignalTotalPowersResponse> {
      return queryService.signalTotalPowers(request);
    },
    validValidator(request: QueryValidValidatorRequest): Promise<QueryValidValidatorResponse> {
      return queryService.validValidator(request);
    },
    validatorPrices(request: QueryValidatorPricesRequest): Promise<QueryValidatorPricesResponse> {
      return queryService.validatorPrices(request);
    },
    vote(request: QueryVoteRequest): Promise<QueryVoteResponse> {
      return queryService.vote(request);
    }
  };
};