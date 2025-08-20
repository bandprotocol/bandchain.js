//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryCountsRequest, QueryCountsResponse, QueryDataRequest, QueryDataResponse, QueryDataSourceRequest, QueryDataSourceResponse, QueryOracleScriptRequest, QueryOracleScriptResponse, QueryRequestRequest, QueryRequestResponse, QueryPendingRequestsRequest, QueryPendingRequestsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryIsReporterRequest, QueryIsReporterResponse, QueryReportersRequest, QueryReportersResponse, QueryActiveValidatorsRequest, QueryActiveValidatorsResponse, QueryParamsRequest, QueryParamsResponse, QueryRequestSearchRequest, QueryRequestSearchResponse, QueryRequestPriceRequest, QueryRequestPriceResponse, QueryRequestVerificationRequest, QueryRequestVerificationResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Counts queries the number of existing data sources, oracle scripts, and
   * requests.
   */
  counts(request?: QueryCountsRequest): Promise<QueryCountsResponse>;
  /**
   * Data queries content of the data source or oracle script for given SHA256
   * file hash.
   */
  data(request: QueryDataRequest): Promise<QueryDataResponse>;
  /** DataSource queries data source summary info for given data source id. */
  dataSource(request: QueryDataSourceRequest): Promise<QueryDataSourceResponse>;
  /** OracleScript queries oracle script summary info for given oracle script id. */
  oracleScript(request: QueryOracleScriptRequest): Promise<QueryOracleScriptResponse>;
  /** Request queries request info for given request id. */
  request(request: QueryRequestRequest): Promise<QueryRequestResponse>;
  /**
   * PendingRequests queries list of pending request IDs assigned to given
   * validator.
   */
  pendingRequests(request: QueryPendingRequestsRequest): Promise<QueryPendingRequestsResponse>;
  /** Validator queries properties of given validator address. */
  validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
  /** IsReporter queries grant of account on this validator. */
  isReporter(request: QueryIsReporterRequest): Promise<QueryIsReporterResponse>;
  /** Reporters queries all reporters associated with given validator address. */
  reporters(request: QueryReportersRequest): Promise<QueryReportersResponse>;
  /** ActiveValidators queries all active oracle validators. */
  activeValidators(request?: QueryActiveValidatorsRequest): Promise<QueryActiveValidatorsResponse>;
  /** Params queries parameters used for running BandChain network. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** RequestSearch queries the latest request that match search criteria. */
  requestSearch(request: QueryRequestSearchRequest): Promise<QueryRequestSearchResponse>;
  /**
   * RequestPrice queries the latest price on standard price reference oracle
   * script.
   */
  requestPrice(request: QueryRequestPriceRequest): Promise<QueryRequestPriceResponse>;
  /**
   * RequestVerification verifies a request to make sure that
   * all information that will be used to report the data is valid
   */
  requestVerification(request: QueryRequestVerificationRequest): Promise<QueryRequestVerificationResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.counts = this.counts.bind(this);
    this.data = this.data.bind(this);
    this.dataSource = this.dataSource.bind(this);
    this.oracleScript = this.oracleScript.bind(this);
    this.request = this.request.bind(this);
    this.pendingRequests = this.pendingRequests.bind(this);
    this.validator = this.validator.bind(this);
    this.isReporter = this.isReporter.bind(this);
    this.reporters = this.reporters.bind(this);
    this.activeValidators = this.activeValidators.bind(this);
    this.params = this.params.bind(this);
    this.requestSearch = this.requestSearch.bind(this);
    this.requestPrice = this.requestPrice.bind(this);
    this.requestVerification = this.requestVerification.bind(this);
  }
  counts(request: QueryCountsRequest = {}): Promise<QueryCountsResponse> {
    const data = QueryCountsRequest.encode(request).finish();
    const promise = this.rpc.request("band.oracle.v1.Query", "Counts", data);
    return promise.then(data => QueryCountsResponse.decode(new BinaryReader(data)));
  }
  data(request: QueryDataRequest): Promise<QueryDataResponse> {
    const data = QueryDataRequest.encode(request).finish();
    const promise = this.rpc.request("band.oracle.v1.Query", "Data", data);
    return promise.then(data => QueryDataResponse.decode(new BinaryReader(data)));
  }
  dataSource(request: QueryDataSourceRequest): Promise<QueryDataSourceResponse> {
    const data = QueryDataSourceRequest.encode(request).finish();
    const promise = this.rpc.request("band.oracle.v1.Query", "DataSource", data);
    return promise.then(data => QueryDataSourceResponse.decode(new BinaryReader(data)));
  }
  oracleScript(request: QueryOracleScriptRequest): Promise<QueryOracleScriptResponse> {
    const data = QueryOracleScriptRequest.encode(request).finish();
    const promise = this.rpc.request("band.oracle.v1.Query", "OracleScript", data);
    return promise.then(data => QueryOracleScriptResponse.decode(new BinaryReader(data)));
  }
  request(request: QueryRequestRequest): Promise<QueryRequestResponse> {
    const data = QueryRequestRequest.encode(request).finish();
    const promise = this.rpc.request("band.oracle.v1.Query", "Request", data);
    return promise.then(data => QueryRequestResponse.decode(new BinaryReader(data)));
  }
  pendingRequests(request: QueryPendingRequestsRequest): Promise<QueryPendingRequestsResponse> {
    const data = QueryPendingRequestsRequest.encode(request).finish();
    const promise = this.rpc.request("band.oracle.v1.Query", "PendingRequests", data);
    return promise.then(data => QueryPendingRequestsResponse.decode(new BinaryReader(data)));
  }
  validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse> {
    const data = QueryValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("band.oracle.v1.Query", "Validator", data);
    return promise.then(data => QueryValidatorResponse.decode(new BinaryReader(data)));
  }
  isReporter(request: QueryIsReporterRequest): Promise<QueryIsReporterResponse> {
    const data = QueryIsReporterRequest.encode(request).finish();
    const promise = this.rpc.request("band.oracle.v1.Query", "IsReporter", data);
    return promise.then(data => QueryIsReporterResponse.decode(new BinaryReader(data)));
  }
  reporters(request: QueryReportersRequest): Promise<QueryReportersResponse> {
    const data = QueryReportersRequest.encode(request).finish();
    const promise = this.rpc.request("band.oracle.v1.Query", "Reporters", data);
    return promise.then(data => QueryReportersResponse.decode(new BinaryReader(data)));
  }
  activeValidators(request: QueryActiveValidatorsRequest = {}): Promise<QueryActiveValidatorsResponse> {
    const data = QueryActiveValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("band.oracle.v1.Query", "ActiveValidators", data);
    return promise.then(data => QueryActiveValidatorsResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("band.oracle.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  requestSearch(request: QueryRequestSearchRequest): Promise<QueryRequestSearchResponse> {
    const data = QueryRequestSearchRequest.encode(request).finish();
    const promise = this.rpc.request("band.oracle.v1.Query", "RequestSearch", data);
    return promise.then(data => QueryRequestSearchResponse.decode(new BinaryReader(data)));
  }
  requestPrice(request: QueryRequestPriceRequest): Promise<QueryRequestPriceResponse> {
    const data = QueryRequestPriceRequest.encode(request).finish();
    const promise = this.rpc.request("band.oracle.v1.Query", "RequestPrice", data);
    return promise.then(data => QueryRequestPriceResponse.decode(new BinaryReader(data)));
  }
  requestVerification(request: QueryRequestVerificationRequest): Promise<QueryRequestVerificationResponse> {
    const data = QueryRequestVerificationRequest.encode(request).finish();
    const promise = this.rpc.request("band.oracle.v1.Query", "RequestVerification", data);
    return promise.then(data => QueryRequestVerificationResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    counts(request?: QueryCountsRequest): Promise<QueryCountsResponse> {
      return queryService.counts(request);
    },
    data(request: QueryDataRequest): Promise<QueryDataResponse> {
      return queryService.data(request);
    },
    dataSource(request: QueryDataSourceRequest): Promise<QueryDataSourceResponse> {
      return queryService.dataSource(request);
    },
    oracleScript(request: QueryOracleScriptRequest): Promise<QueryOracleScriptResponse> {
      return queryService.oracleScript(request);
    },
    request(request: QueryRequestRequest): Promise<QueryRequestResponse> {
      return queryService.request(request);
    },
    pendingRequests(request: QueryPendingRequestsRequest): Promise<QueryPendingRequestsResponse> {
      return queryService.pendingRequests(request);
    },
    validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse> {
      return queryService.validator(request);
    },
    isReporter(request: QueryIsReporterRequest): Promise<QueryIsReporterResponse> {
      return queryService.isReporter(request);
    },
    reporters(request: QueryReportersRequest): Promise<QueryReportersResponse> {
      return queryService.reporters(request);
    },
    activeValidators(request?: QueryActiveValidatorsRequest): Promise<QueryActiveValidatorsResponse> {
      return queryService.activeValidators(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    requestSearch(request: QueryRequestSearchRequest): Promise<QueryRequestSearchResponse> {
      return queryService.requestSearch(request);
    },
    requestPrice(request: QueryRequestPriceRequest): Promise<QueryRequestPriceResponse> {
      return queryService.requestPrice(request);
    },
    requestVerification(request: QueryRequestVerificationRequest): Promise<QueryRequestVerificationResponse> {
      return queryService.requestVerification(request);
    }
  };
};