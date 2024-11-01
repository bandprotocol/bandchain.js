//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryCountsRequest, QueryCountsResponseSDKType, QueryDataRequest, QueryDataResponseSDKType, QueryDataSourceRequest, QueryDataSourceResponseSDKType, QueryOracleScriptRequest, QueryOracleScriptResponseSDKType, QueryRequestRequest, QueryRequestResponseSDKType, QueryPendingRequestsRequest, QueryPendingRequestsResponseSDKType, QueryValidatorRequest, QueryValidatorResponseSDKType, QueryIsReporterRequest, QueryIsReporterResponseSDKType, QueryReportersRequest, QueryReportersResponseSDKType, QueryActiveValidatorsRequest, QueryActiveValidatorsResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryRequestSearchRequest, QueryRequestSearchResponseSDKType, QueryRequestPriceRequest, QueryRequestPriceResponseSDKType, QueryRequestVerificationRequest, QueryRequestVerificationResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Counts queries the number of existing data sources, oracle scripts, and
   requests. */
  async counts(_params: QueryCountsRequest = {}): Promise<QueryCountsResponseSDKType> {
    const endpoint = `oracle/v1/counts`;
    return await this.req.get<QueryCountsResponseSDKType>(endpoint);
  }
  /* Data queries content of the data source or oracle script for given SHA256
   file hash. */
  async data(params: QueryDataRequest): Promise<QueryDataResponseSDKType> {
    const endpoint = `oracle/v1/data/${params.dataHash}`;
    return await this.req.get<QueryDataResponseSDKType>(endpoint);
  }
  /* DataSource queries data source summary info for given data source id. */
  async dataSource(params: QueryDataSourceRequest): Promise<QueryDataSourceResponseSDKType> {
    const endpoint = `oracle/v1/data_sources/${params.dataSourceId}`;
    return await this.req.get<QueryDataSourceResponseSDKType>(endpoint);
  }
  /* OracleScript queries oracle script summary info for given oracle script id. */
  async oracleScript(params: QueryOracleScriptRequest): Promise<QueryOracleScriptResponseSDKType> {
    const endpoint = `oracle/v1/oracle_scripts/${params.oracleScriptId}`;
    return await this.req.get<QueryOracleScriptResponseSDKType>(endpoint);
  }
  /* Request queries request info for given request id. */
  async request(params: QueryRequestRequest): Promise<QueryRequestResponseSDKType> {
    const endpoint = `oracle/v1/requests/${params.requestId}`;
    return await this.req.get<QueryRequestResponseSDKType>(endpoint);
  }
  /* PendingRequests queries list of pending request IDs assigned to given
   validator. */
  async pendingRequests(params: QueryPendingRequestsRequest): Promise<QueryPendingRequestsResponseSDKType> {
    const endpoint = `oracle/v1/pending_requests/${params.validatorAddress}`;
    return await this.req.get<QueryPendingRequestsResponseSDKType>(endpoint);
  }
  /* Validator queries properties of given validator address. */
  async validator(params: QueryValidatorRequest): Promise<QueryValidatorResponseSDKType> {
    const endpoint = `oracle/v1/validators/${params.validatorAddress}`;
    return await this.req.get<QueryValidatorResponseSDKType>(endpoint);
  }
  /* IsReporter queries grant of account on this validator. */
  async isReporter(params: QueryIsReporterRequest): Promise<QueryIsReporterResponseSDKType> {
    const endpoint = `oracle/v1/reporter/${params.validatorAddress}/${params.reporterAddress}`;
    return await this.req.get<QueryIsReporterResponseSDKType>(endpoint);
  }
  /* Reporters queries all reporters associated with given validator address. */
  async reporters(params: QueryReportersRequest): Promise<QueryReportersResponseSDKType> {
    const endpoint = `oracle/v1/reporters/${params.validatorAddress}`;
    return await this.req.get<QueryReportersResponseSDKType>(endpoint);
  }
  /* ActiveValidators queries all active oracle validators. */
  async activeValidators(_params: QueryActiveValidatorsRequest = {}): Promise<QueryActiveValidatorsResponseSDKType> {
    const endpoint = `oracle/v1/active_validators`;
    return await this.req.get<QueryActiveValidatorsResponseSDKType>(endpoint);
  }
  /* Params queries parameters used for runnning bandchain network. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `oracle/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* RequestSearch queries the latest request that match search criteria. */
  async requestSearch(params: QueryRequestSearchRequest): Promise<QueryRequestSearchResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.oracleScriptId !== "undefined") {
      options.params.oracle_script_id = params.oracleScriptId;
    }
    if (typeof params?.calldata !== "undefined") {
      options.params.calldata = params.calldata;
    }
    if (typeof params?.askCount !== "undefined") {
      options.params.ask_count = params.askCount;
    }
    if (typeof params?.minCount !== "undefined") {
      options.params.min_count = params.minCount;
    }
    const endpoint = `oracle/v1/request_search`;
    return await this.req.get<QueryRequestSearchResponseSDKType>(endpoint, options);
  }
  /* RequestPrice queries the latest price on standard price reference oracle
   script. */
  async requestPrice(params: QueryRequestPriceRequest): Promise<QueryRequestPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.symbols !== "undefined") {
      options.params.symbols = params.symbols;
    }
    if (typeof params?.askCount !== "undefined") {
      options.params.ask_count = params.askCount;
    }
    if (typeof params?.minCount !== "undefined") {
      options.params.min_count = params.minCount;
    }
    const endpoint = `oracle/v1/request_prices`;
    return await this.req.get<QueryRequestPriceResponseSDKType>(endpoint, options);
  }
  /* RequestVerification verifies a request to make sure that
   all information that will be used to report the data is valid */
  async requestVerification(params: QueryRequestVerificationRequest): Promise<QueryRequestVerificationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.chainId !== "undefined") {
      options.params.chain_id = params.chainId;
    }
    if (typeof params?.validator !== "undefined") {
      options.params.validator = params.validator;
    }
    if (typeof params?.requestId !== "undefined") {
      options.params.request_id = params.requestId;
    }
    if (typeof params?.externalId !== "undefined") {
      options.params.external_id = params.externalId;
    }
    if (typeof params?.dataSourceId !== "undefined") {
      options.params.data_source_id = params.dataSourceId;
    }
    if (typeof params?.reporter !== "undefined") {
      options.params.reporter = params.reporter;
    }
    if (typeof params?.signature !== "undefined") {
      options.params.signature = params.signature;
    }
    if (typeof params?.maxDelay !== "undefined") {
      options.params.max_delay = params.maxDelay;
    }
    const endpoint = `oracle/v1/verify_request`;
    return await this.req.get<QueryRequestVerificationResponseSDKType>(endpoint, options);
  }
}