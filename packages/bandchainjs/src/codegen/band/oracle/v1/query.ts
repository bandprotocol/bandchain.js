//@ts-nocheck
import { DataSource, DataSourceAmino, DataSourceSDKType, OracleScript, OracleScriptAmino, OracleScriptSDKType, Request, RequestAmino, RequestSDKType, Report, ReportAmino, ReportSDKType, Result, ResultAmino, ResultSDKType, Params, ParamsAmino, ParamsSDKType, ValidatorStatus, ValidatorStatusAmino, ValidatorStatusSDKType, ActiveValidator, ActiveValidatorAmino, ActiveValidatorSDKType, PriceResult, PriceResultAmino, PriceResultSDKType } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/** QueryCountsRequest is request type for the Query/Count RPC method. */
export interface QueryCountsRequest {}
export interface QueryCountsRequestProtoMsg {
  typeUrl: "/band.oracle.v1.QueryCountsRequest";
  value: Uint8Array;
}
/** QueryCountsRequest is request type for the Query/Count RPC method. */
export interface QueryCountsRequestAmino {}
export interface QueryCountsRequestAminoMsg {
  type: "/band.oracle.v1.QueryCountsRequest";
  value: QueryCountsRequestAmino;
}
/** QueryCountsRequest is request type for the Query/Count RPC method. */
export interface QueryCountsRequestSDKType {}
/** QueryCountsResponse is response type for the Query/Count RPC method. */
export interface QueryCountsResponse {
  /** DataSourceCount is total number of data sources available on the chain */
  dataSourceCount: bigint;
  /** OracleScriptCount is total number of oracle scripts available on the chain */
  oracleScriptCount: bigint;
  /** RequestCount is total number of requests submitted to the chain */
  requestCount: bigint;
}
export interface QueryCountsResponseProtoMsg {
  typeUrl: "/band.oracle.v1.QueryCountsResponse";
  value: Uint8Array;
}
/** QueryCountsResponse is response type for the Query/Count RPC method. */
export interface QueryCountsResponseAmino {
  /** DataSourceCount is total number of data sources available on the chain */
  data_source_count?: string;
  /** OracleScriptCount is total number of oracle scripts available on the chain */
  oracle_script_count?: string;
  /** RequestCount is total number of requests submitted to the chain */
  request_count?: string;
}
export interface QueryCountsResponseAminoMsg {
  type: "/band.oracle.v1.QueryCountsResponse";
  value: QueryCountsResponseAmino;
}
/** QueryCountsResponse is response type for the Query/Count RPC method. */
export interface QueryCountsResponseSDKType {
  data_source_count: bigint;
  oracle_script_count: bigint;
  request_count: bigint;
}
/** QueryDataRequest is request type for the Query/Data RPC method. */
export interface QueryDataRequest {
  /**
   * DataHash is SHA256 hash of the file's content, which can be data source or
   * oracle script
   */
  dataHash: string;
}
export interface QueryDataRequestProtoMsg {
  typeUrl: "/band.oracle.v1.QueryDataRequest";
  value: Uint8Array;
}
/** QueryDataRequest is request type for the Query/Data RPC method. */
export interface QueryDataRequestAmino {
  /**
   * DataHash is SHA256 hash of the file's content, which can be data source or
   * oracle script
   */
  data_hash?: string;
}
export interface QueryDataRequestAminoMsg {
  type: "/band.oracle.v1.QueryDataRequest";
  value: QueryDataRequestAmino;
}
/** QueryDataRequest is request type for the Query/Data RPC method. */
export interface QueryDataRequestSDKType {
  data_hash: string;
}
/** QueryDataResponse is response type for the Query/Data RPC method. */
export interface QueryDataResponse {
  /** Data is file's content, which can be data source or oracle script */
  data: Uint8Array;
}
export interface QueryDataResponseProtoMsg {
  typeUrl: "/band.oracle.v1.QueryDataResponse";
  value: Uint8Array;
}
/** QueryDataResponse is response type for the Query/Data RPC method. */
export interface QueryDataResponseAmino {
  /** Data is file's content, which can be data source or oracle script */
  data?: string;
}
export interface QueryDataResponseAminoMsg {
  type: "/band.oracle.v1.QueryDataResponse";
  value: QueryDataResponseAmino;
}
/** QueryDataResponse is response type for the Query/Data RPC method. */
export interface QueryDataResponseSDKType {
  data: Uint8Array;
}
/** QueryDataSourceRequest is request type for the Query/DataSource RPC method. */
export interface QueryDataSourceRequest {
  /** DataSourceID is ID of a data source script */
  dataSourceId: bigint;
}
export interface QueryDataSourceRequestProtoMsg {
  typeUrl: "/band.oracle.v1.QueryDataSourceRequest";
  value: Uint8Array;
}
/** QueryDataSourceRequest is request type for the Query/DataSource RPC method. */
export interface QueryDataSourceRequestAmino {
  /** DataSourceID is ID of a data source script */
  data_source_id?: string;
}
export interface QueryDataSourceRequestAminoMsg {
  type: "/band.oracle.v1.QueryDataSourceRequest";
  value: QueryDataSourceRequestAmino;
}
/** QueryDataSourceRequest is request type for the Query/DataSource RPC method. */
export interface QueryDataSourceRequestSDKType {
  data_source_id: bigint;
}
/** QueryDataSourceResponse is response type for the Query/DataSource RPC method. */
export interface QueryDataSourceResponse {
  /** DataSource is summary information of a data source */
  dataSource?: DataSource;
}
export interface QueryDataSourceResponseProtoMsg {
  typeUrl: "/band.oracle.v1.QueryDataSourceResponse";
  value: Uint8Array;
}
/** QueryDataSourceResponse is response type for the Query/DataSource RPC method. */
export interface QueryDataSourceResponseAmino {
  /** DataSource is summary information of a data source */
  data_source?: DataSourceAmino;
}
export interface QueryDataSourceResponseAminoMsg {
  type: "/band.oracle.v1.QueryDataSourceResponse";
  value: QueryDataSourceResponseAmino;
}
/** QueryDataSourceResponse is response type for the Query/DataSource RPC method. */
export interface QueryDataSourceResponseSDKType {
  data_source?: DataSourceSDKType;
}
/**
 * QueryOracleScriptRequest is request type for the Query/OracleScript RPC
 * method.
 */
export interface QueryOracleScriptRequest {
  /** OracleScriptID is ID of an oracle script */
  oracleScriptId: bigint;
}
export interface QueryOracleScriptRequestProtoMsg {
  typeUrl: "/band.oracle.v1.QueryOracleScriptRequest";
  value: Uint8Array;
}
/**
 * QueryOracleScriptRequest is request type for the Query/OracleScript RPC
 * method.
 */
export interface QueryOracleScriptRequestAmino {
  /** OracleScriptID is ID of an oracle script */
  oracle_script_id?: string;
}
export interface QueryOracleScriptRequestAminoMsg {
  type: "/band.oracle.v1.QueryOracleScriptRequest";
  value: QueryOracleScriptRequestAmino;
}
/**
 * QueryOracleScriptRequest is request type for the Query/OracleScript RPC
 * method.
 */
export interface QueryOracleScriptRequestSDKType {
  oracle_script_id: bigint;
}
/**
 * QueryOracleScriptResponse is response type for the Query/OracleScript RPC
 * method.
 */
export interface QueryOracleScriptResponse {
  /** OracleScript is summary information of an oracle script */
  oracleScript?: OracleScript;
}
export interface QueryOracleScriptResponseProtoMsg {
  typeUrl: "/band.oracle.v1.QueryOracleScriptResponse";
  value: Uint8Array;
}
/**
 * QueryOracleScriptResponse is response type for the Query/OracleScript RPC
 * method.
 */
export interface QueryOracleScriptResponseAmino {
  /** OracleScript is summary information of an oracle script */
  oracle_script?: OracleScriptAmino;
}
export interface QueryOracleScriptResponseAminoMsg {
  type: "/band.oracle.v1.QueryOracleScriptResponse";
  value: QueryOracleScriptResponseAmino;
}
/**
 * QueryOracleScriptResponse is response type for the Query/OracleScript RPC
 * method.
 */
export interface QueryOracleScriptResponseSDKType {
  oracle_script?: OracleScriptSDKType;
}
/** QueryRequestRequest is request type for the Query/Request RPC method. */
export interface QueryRequestRequest {
  /** RequestID is ID of an oracle request */
  requestId: bigint;
}
export interface QueryRequestRequestProtoMsg {
  typeUrl: "/band.oracle.v1.QueryRequestRequest";
  value: Uint8Array;
}
/** QueryRequestRequest is request type for the Query/Request RPC method. */
export interface QueryRequestRequestAmino {
  /** RequestID is ID of an oracle request */
  request_id?: string;
}
export interface QueryRequestRequestAminoMsg {
  type: "/band.oracle.v1.QueryRequestRequest";
  value: QueryRequestRequestAmino;
}
/** QueryRequestRequest is request type for the Query/Request RPC method. */
export interface QueryRequestRequestSDKType {
  request_id: bigint;
}
/** QueryRequestResponse is response type for the Query/Request RPC method. */
export interface QueryRequestResponse {
  /** Request is an oracle request */
  request?: Request;
  /**
   * Reports is list of result data as raw reports that are fulfilled by
   * assigned validators
   */
  reports: Report[];
  /** Result is a final form of result data */
  result?: Result;
}
export interface QueryRequestResponseProtoMsg {
  typeUrl: "/band.oracle.v1.QueryRequestResponse";
  value: Uint8Array;
}
/** QueryRequestResponse is response type for the Query/Request RPC method. */
export interface QueryRequestResponseAmino {
  /** Request is an oracle request */
  request?: RequestAmino;
  /**
   * Reports is list of result data as raw reports that are fulfilled by
   * assigned validators
   */
  reports?: ReportAmino[];
  /** Result is a final form of result data */
  result?: ResultAmino;
}
export interface QueryRequestResponseAminoMsg {
  type: "/band.oracle.v1.QueryRequestResponse";
  value: QueryRequestResponseAmino;
}
/** QueryRequestResponse is response type for the Query/Request RPC method. */
export interface QueryRequestResponseSDKType {
  request?: RequestSDKType;
  reports: ReportSDKType[];
  result?: ResultSDKType;
}
/**
 * QueryPendingRequestRequest is request type for the Query/PendingRequests RPC
 * method.
 */
export interface QueryPendingRequestsRequest {
  /** ValidatorAddress is address of a validator */
  validatorAddress: string;
}
export interface QueryPendingRequestsRequestProtoMsg {
  typeUrl: "/band.oracle.v1.QueryPendingRequestsRequest";
  value: Uint8Array;
}
/**
 * QueryPendingRequestRequest is request type for the Query/PendingRequests RPC
 * method.
 */
export interface QueryPendingRequestsRequestAmino {
  /** ValidatorAddress is address of a validator */
  validator_address?: string;
}
export interface QueryPendingRequestsRequestAminoMsg {
  type: "/band.oracle.v1.QueryPendingRequestsRequest";
  value: QueryPendingRequestsRequestAmino;
}
/**
 * QueryPendingRequestRequest is request type for the Query/PendingRequests RPC
 * method.
 */
export interface QueryPendingRequestsRequestSDKType {
  validator_address: string;
}
/**
 * QueryPendingRequestResponse is response type for the Query/PendingRequests
 * RPC method.
 */
export interface QueryPendingRequestsResponse {
  /** RequestIDs is a list of pending request IDs assigned to the given validator */
  requestIds: bigint[];
}
export interface QueryPendingRequestsResponseProtoMsg {
  typeUrl: "/band.oracle.v1.QueryPendingRequestsResponse";
  value: Uint8Array;
}
/**
 * QueryPendingRequestResponse is response type for the Query/PendingRequests
 * RPC method.
 */
export interface QueryPendingRequestsResponseAmino {
  /** RequestIDs is a list of pending request IDs assigned to the given validator */
  request_ids?: string[];
}
export interface QueryPendingRequestsResponseAminoMsg {
  type: "/band.oracle.v1.QueryPendingRequestsResponse";
  value: QueryPendingRequestsResponseAmino;
}
/**
 * QueryPendingRequestResponse is response type for the Query/PendingRequests
 * RPC method.
 */
export interface QueryPendingRequestsResponseSDKType {
  request_ids: bigint[];
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/band.oracle.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/band.oracle.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** pagination defines an optional pagination for the request. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/band.oracle.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** pagination defines an optional pagination for the request. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/band.oracle.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryValidatorRequest is request type for the Query/Validator RPC method. */
export interface QueryValidatorRequest {
  /** ValidatorAddress is address of a validator */
  validatorAddress: string;
}
export interface QueryValidatorRequestProtoMsg {
  typeUrl: "/band.oracle.v1.QueryValidatorRequest";
  value: Uint8Array;
}
/** QueryValidatorRequest is request type for the Query/Validator RPC method. */
export interface QueryValidatorRequestAmino {
  /** ValidatorAddress is address of a validator */
  validator_address?: string;
}
export interface QueryValidatorRequestAminoMsg {
  type: "/band.oracle.v1.QueryValidatorRequest";
  value: QueryValidatorRequestAmino;
}
/** QueryValidatorRequest is request type for the Query/Validator RPC method. */
export interface QueryValidatorRequestSDKType {
  validator_address: string;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method. */
export interface QueryValidatorResponse {
  /** Status is status of a validator e.g. active/inactive */
  status?: ValidatorStatus;
}
export interface QueryValidatorResponseProtoMsg {
  typeUrl: "/band.oracle.v1.QueryValidatorResponse";
  value: Uint8Array;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method. */
export interface QueryValidatorResponseAmino {
  /** Status is status of a validator e.g. active/inactive */
  status?: ValidatorStatusAmino;
}
export interface QueryValidatorResponseAminoMsg {
  type: "/band.oracle.v1.QueryValidatorResponse";
  value: QueryValidatorResponseAmino;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method. */
export interface QueryValidatorResponseSDKType {
  status?: ValidatorStatusSDKType;
}
/** QueryIsReporterRequest is request type for the Query/Reporter RPC method. */
export interface QueryIsReporterRequest {
  /** ValidatorAddress is a validator address */
  validatorAddress: string;
  /** ReporterAddress is a candidate account */
  reporterAddress: string;
}
export interface QueryIsReporterRequestProtoMsg {
  typeUrl: "/band.oracle.v1.QueryIsReporterRequest";
  value: Uint8Array;
}
/** QueryIsReporterRequest is request type for the Query/Reporter RPC method. */
export interface QueryIsReporterRequestAmino {
  /** ValidatorAddress is a validator address */
  validator_address?: string;
  /** ReporterAddress is a candidate account */
  reporter_address?: string;
}
export interface QueryIsReporterRequestAminoMsg {
  type: "/band.oracle.v1.QueryIsReporterRequest";
  value: QueryIsReporterRequestAmino;
}
/** QueryIsReporterRequest is request type for the Query/Reporter RPC method. */
export interface QueryIsReporterRequestSDKType {
  validator_address: string;
  reporter_address: string;
}
/** QueryIsReporterResponse is response type for the Query/Reporter RPC method. */
export interface QueryIsReporterResponse {
  /** IsReporter is true if this account has been granted by validator */
  isReporter: boolean;
}
export interface QueryIsReporterResponseProtoMsg {
  typeUrl: "/band.oracle.v1.QueryIsReporterResponse";
  value: Uint8Array;
}
/** QueryIsReporterResponse is response type for the Query/Reporter RPC method. */
export interface QueryIsReporterResponseAmino {
  /** IsReporter is true if this account has been granted by validator */
  is_reporter?: boolean;
}
export interface QueryIsReporterResponseAminoMsg {
  type: "/band.oracle.v1.QueryIsReporterResponse";
  value: QueryIsReporterResponseAmino;
}
/** QueryIsReporterResponse is response type for the Query/Reporter RPC method. */
export interface QueryIsReporterResponseSDKType {
  is_reporter: boolean;
}
/** QueryReportersRequest is request type for the Query/Reporters RPC method. */
export interface QueryReportersRequest {
  /** ValidatorAddress is a validator address */
  validatorAddress: string;
}
export interface QueryReportersRequestProtoMsg {
  typeUrl: "/band.oracle.v1.QueryReportersRequest";
  value: Uint8Array;
}
/** QueryReportersRequest is request type for the Query/Reporters RPC method. */
export interface QueryReportersRequestAmino {
  /** ValidatorAddress is a validator address */
  validator_address?: string;
}
export interface QueryReportersRequestAminoMsg {
  type: "/band.oracle.v1.QueryReportersRequest";
  value: QueryReportersRequestAmino;
}
/** QueryReportersRequest is request type for the Query/Reporters RPC method. */
export interface QueryReportersRequestSDKType {
  validator_address: string;
}
/** QueryReportersResponse is response type for the Query/Reporters RPC method. */
export interface QueryReportersResponse {
  /** Reporter is a list of account addresses of reporters */
  reporter: string[];
}
export interface QueryReportersResponseProtoMsg {
  typeUrl: "/band.oracle.v1.QueryReportersResponse";
  value: Uint8Array;
}
/** QueryReportersResponse is response type for the Query/Reporters RPC method. */
export interface QueryReportersResponseAmino {
  /** Reporter is a list of account addresses of reporters */
  reporter?: string[];
}
export interface QueryReportersResponseAminoMsg {
  type: "/band.oracle.v1.QueryReportersResponse";
  value: QueryReportersResponseAmino;
}
/** QueryReportersResponse is response type for the Query/Reporters RPC method. */
export interface QueryReportersResponseSDKType {
  reporter: string[];
}
/**
 * QueryActiveValidatorsRequest is request type for the Query/ActiveValidators
 * RPC method.
 */
export interface QueryActiveValidatorsRequest {}
export interface QueryActiveValidatorsRequestProtoMsg {
  typeUrl: "/band.oracle.v1.QueryActiveValidatorsRequest";
  value: Uint8Array;
}
/**
 * QueryActiveValidatorsRequest is request type for the Query/ActiveValidators
 * RPC method.
 */
export interface QueryActiveValidatorsRequestAmino {}
export interface QueryActiveValidatorsRequestAminoMsg {
  type: "/band.oracle.v1.QueryActiveValidatorsRequest";
  value: QueryActiveValidatorsRequestAmino;
}
/**
 * QueryActiveValidatorsRequest is request type for the Query/ActiveValidators
 * RPC method.
 */
export interface QueryActiveValidatorsRequestSDKType {}
/**
 * QueryActiveValidatorsResponse is response type for the Query/ActiveValidators
 * RPC method.
 */
export interface QueryActiveValidatorsResponse {
  /** Validators is a list of active validators */
  validators: ActiveValidator[];
}
export interface QueryActiveValidatorsResponseProtoMsg {
  typeUrl: "/band.oracle.v1.QueryActiveValidatorsResponse";
  value: Uint8Array;
}
/**
 * QueryActiveValidatorsResponse is response type for the Query/ActiveValidators
 * RPC method.
 */
export interface QueryActiveValidatorsResponseAmino {
  /** Validators is a list of active validators */
  validators?: ActiveValidatorAmino[];
}
export interface QueryActiveValidatorsResponseAminoMsg {
  type: "/band.oracle.v1.QueryActiveValidatorsResponse";
  value: QueryActiveValidatorsResponseAmino;
}
/**
 * QueryActiveValidatorsResponse is response type for the Query/ActiveValidators
 * RPC method.
 */
export interface QueryActiveValidatorsResponseSDKType {
  validators: ActiveValidatorSDKType[];
}
/**
 * QueryRequestSearchRequest is request type for the Query/RequestSearch RPC
 * method.
 */
export interface QueryRequestSearchRequest {
  /** OracleScriptID is ID of an oracle script */
  oracleScriptId: bigint;
  /**
   * Calldata is OBI-encoded data in hex format as argument params for the
   * oracle script
   */
  calldata: string;
  /** AskCount is number of validators allowed for fulfilling the request */
  askCount: bigint;
  /** MinCount is number of validators required for fulfilling the request */
  minCount: bigint;
}
export interface QueryRequestSearchRequestProtoMsg {
  typeUrl: "/band.oracle.v1.QueryRequestSearchRequest";
  value: Uint8Array;
}
/**
 * QueryRequestSearchRequest is request type for the Query/RequestSearch RPC
 * method.
 */
export interface QueryRequestSearchRequestAmino {
  /** OracleScriptID is ID of an oracle script */
  oracle_script_id?: string;
  /**
   * Calldata is OBI-encoded data in hex format as argument params for the
   * oracle script
   */
  calldata?: string;
  /** AskCount is number of validators allowed for fulfilling the request */
  ask_count?: string;
  /** MinCount is number of validators required for fulfilling the request */
  min_count?: string;
}
export interface QueryRequestSearchRequestAminoMsg {
  type: "/band.oracle.v1.QueryRequestSearchRequest";
  value: QueryRequestSearchRequestAmino;
}
/**
 * QueryRequestSearchRequest is request type for the Query/RequestSearch RPC
 * method.
 */
export interface QueryRequestSearchRequestSDKType {
  oracle_script_id: bigint;
  calldata: string;
  ask_count: bigint;
  min_count: bigint;
}
/**
 * QueryRequestSearchResponse is response type for the Query/RequestSearch RPC
 * method.
 */
export interface QueryRequestSearchResponse {
  /** Request is details of an oracle request */
  request?: QueryRequestResponse;
}
export interface QueryRequestSearchResponseProtoMsg {
  typeUrl: "/band.oracle.v1.QueryRequestSearchResponse";
  value: Uint8Array;
}
/**
 * QueryRequestSearchResponse is response type for the Query/RequestSearch RPC
 * method.
 */
export interface QueryRequestSearchResponseAmino {
  /** Request is details of an oracle request */
  request?: QueryRequestResponseAmino;
}
export interface QueryRequestSearchResponseAminoMsg {
  type: "/band.oracle.v1.QueryRequestSearchResponse";
  value: QueryRequestSearchResponseAmino;
}
/**
 * QueryRequestSearchResponse is response type for the Query/RequestSearch RPC
 * method.
 */
export interface QueryRequestSearchResponseSDKType {
  request?: QueryRequestResponseSDKType;
}
/**
 * QueryRequestPriceRequest is request type for the Query/RequestPrice RPC
 * method.
 */
export interface QueryRequestPriceRequest {
  /** Symbol is unit of data indicating what the data is */
  symbols: string[];
  /** AskCount is number of validators allowed for fulfilling the request */
  askCount: bigint;
  /** MinCount is number of validators required for fulfilling the request */
  minCount: bigint;
}
export interface QueryRequestPriceRequestProtoMsg {
  typeUrl: "/band.oracle.v1.QueryRequestPriceRequest";
  value: Uint8Array;
}
/**
 * QueryRequestPriceRequest is request type for the Query/RequestPrice RPC
 * method.
 */
export interface QueryRequestPriceRequestAmino {
  /** Symbol is unit of data indicating what the data is */
  symbols?: string[];
  /** AskCount is number of validators allowed for fulfilling the request */
  ask_count?: string;
  /** MinCount is number of validators required for fulfilling the request */
  min_count?: string;
}
export interface QueryRequestPriceRequestAminoMsg {
  type: "/band.oracle.v1.QueryRequestPriceRequest";
  value: QueryRequestPriceRequestAmino;
}
/**
 * QueryRequestPriceRequest is request type for the Query/RequestPrice RPC
 * method.
 */
export interface QueryRequestPriceRequestSDKType {
  symbols: string[];
  ask_count: bigint;
  min_count: bigint;
}
/**
 * QueryRequestPriceResponse is response type for the Query/RequestPrice RPC
 * method.
 */
export interface QueryRequestPriceResponse {
  /** PriceResult is a list of price results for given symbols */
  priceResults: PriceResult[];
}
export interface QueryRequestPriceResponseProtoMsg {
  typeUrl: "/band.oracle.v1.QueryRequestPriceResponse";
  value: Uint8Array;
}
/**
 * QueryRequestPriceResponse is response type for the Query/RequestPrice RPC
 * method.
 */
export interface QueryRequestPriceResponseAmino {
  /** PriceResult is a list of price results for given symbols */
  price_results?: PriceResultAmino[];
}
export interface QueryRequestPriceResponseAminoMsg {
  type: "/band.oracle.v1.QueryRequestPriceResponse";
  value: QueryRequestPriceResponseAmino;
}
/**
 * QueryRequestPriceResponse is response type for the Query/RequestPrice RPC
 * method.
 */
export interface QueryRequestPriceResponseSDKType {
  price_results: PriceResultSDKType[];
}
/**
 * QueryRequestVerificationRequest is request type for the
 * Query/RequestVerification RPC
 */
export interface QueryRequestVerificationRequest {
  /**
   * ChainID is the chain ID to identify which chain ID is used for the
   * verification
   */
  chainId: string;
  /** Validator is a validator address */
  validator: string;
  /** RequestID is oracle request ID */
  requestId: bigint;
  /** ExternalID is an oracle's external ID */
  externalId: bigint;
  /** DataSourceID is the ID of data source */
  dataSourceId: bigint;
  /**
   * Reporter is an bech32-encoded public key of the reporter authorized by the
   * validator
   */
  reporter: string;
  /**
   * Signature is a signature signed by the reporter using reporter's private
   * key
   */
  signature: Uint8Array;
  /**
   * MaxDelay is a max number of RequestID delay acceptable in case of node
   * delay
   */
  maxDelay: bigint;
}
export interface QueryRequestVerificationRequestProtoMsg {
  typeUrl: "/band.oracle.v1.QueryRequestVerificationRequest";
  value: Uint8Array;
}
/**
 * QueryRequestVerificationRequest is request type for the
 * Query/RequestVerification RPC
 */
export interface QueryRequestVerificationRequestAmino {
  /**
   * ChainID is the chain ID to identify which chain ID is used for the
   * verification
   */
  chain_id?: string;
  /** Validator is a validator address */
  validator?: string;
  /** RequestID is oracle request ID */
  request_id?: string;
  /** ExternalID is an oracle's external ID */
  external_id?: string;
  /** DataSourceID is the ID of data source */
  data_source_id?: string;
  /**
   * Reporter is an bech32-encoded public key of the reporter authorized by the
   * validator
   */
  reporter?: string;
  /**
   * Signature is a signature signed by the reporter using reporter's private
   * key
   */
  signature?: string;
  /**
   * MaxDelay is a max number of RequestID delay acceptable in case of node
   * delay
   */
  max_delay?: string;
}
export interface QueryRequestVerificationRequestAminoMsg {
  type: "/band.oracle.v1.QueryRequestVerificationRequest";
  value: QueryRequestVerificationRequestAmino;
}
/**
 * QueryRequestVerificationRequest is request type for the
 * Query/RequestVerification RPC
 */
export interface QueryRequestVerificationRequestSDKType {
  chain_id: string;
  validator: string;
  request_id: bigint;
  external_id: bigint;
  data_source_id: bigint;
  reporter: string;
  signature: Uint8Array;
  max_delay: bigint;
}
/**
 * QueryRequestVerificationResponse is response type for the
 * Query/RequestVerification RPC
 */
export interface QueryRequestVerificationResponse {
  /** ChainID is the targeted chain ID */
  chainId: string;
  /** Validator is the targeted validator address */
  validator: string;
  /** RequestID is the ID of targeted request */
  requestId: bigint;
  /** ExternalID is the ID of targeted oracle's external data source */
  externalId: bigint;
  /**
   * DataSourceID is the ID of a data source that relates to the targeted
   * external ID
   */
  dataSourceId: bigint;
  /**
   * IsDelay is a flag to tell that this request is not exist yet but in
   * MaxDelay range
   */
  isDelay: boolean;
}
export interface QueryRequestVerificationResponseProtoMsg {
  typeUrl: "/band.oracle.v1.QueryRequestVerificationResponse";
  value: Uint8Array;
}
/**
 * QueryRequestVerificationResponse is response type for the
 * Query/RequestVerification RPC
 */
export interface QueryRequestVerificationResponseAmino {
  /** ChainID is the targeted chain ID */
  chain_id?: string;
  /** Validator is the targeted validator address */
  validator?: string;
  /** RequestID is the ID of targeted request */
  request_id?: string;
  /** ExternalID is the ID of targeted oracle's external data source */
  external_id?: string;
  /**
   * DataSourceID is the ID of a data source that relates to the targeted
   * external ID
   */
  data_source_id?: string;
  /**
   * IsDelay is a flag to tell that this request is not exist yet but in
   * MaxDelay range
   */
  is_delay?: boolean;
}
export interface QueryRequestVerificationResponseAminoMsg {
  type: "/band.oracle.v1.QueryRequestVerificationResponse";
  value: QueryRequestVerificationResponseAmino;
}
/**
 * QueryRequestVerificationResponse is response type for the
 * Query/RequestVerification RPC
 */
export interface QueryRequestVerificationResponseSDKType {
  chain_id: string;
  validator: string;
  request_id: bigint;
  external_id: bigint;
  data_source_id: bigint;
  is_delay: boolean;
}
function createBaseQueryCountsRequest(): QueryCountsRequest {
  return {};
}
export const QueryCountsRequest = {
  typeUrl: "/band.oracle.v1.QueryCountsRequest",
  encode(_: QueryCountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCountsRequest();
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
  fromPartial(_: Partial<QueryCountsRequest>): QueryCountsRequest {
    const message = createBaseQueryCountsRequest();
    return message;
  },
  fromAmino(_: QueryCountsRequestAmino): QueryCountsRequest {
    const message = createBaseQueryCountsRequest();
    return message;
  },
  toAmino(_: QueryCountsRequest): QueryCountsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCountsRequestAminoMsg): QueryCountsRequest {
    return QueryCountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCountsRequestProtoMsg): QueryCountsRequest {
    return QueryCountsRequest.decode(message.value);
  },
  toProto(message: QueryCountsRequest): Uint8Array {
    return QueryCountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCountsRequest): QueryCountsRequestProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryCountsRequest",
      value: QueryCountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCountsResponse(): QueryCountsResponse {
  return {
    dataSourceCount: BigInt(0),
    oracleScriptCount: BigInt(0),
    requestCount: BigInt(0)
  };
}
export const QueryCountsResponse = {
  typeUrl: "/band.oracle.v1.QueryCountsResponse",
  encode(message: QueryCountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dataSourceCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.dataSourceCount);
    }
    if (message.oracleScriptCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.oracleScriptCount);
    }
    if (message.requestCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.requestCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataSourceCount = reader.uint64();
          break;
        case 2:
          message.oracleScriptCount = reader.uint64();
          break;
        case 3:
          message.requestCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCountsResponse>): QueryCountsResponse {
    const message = createBaseQueryCountsResponse();
    message.dataSourceCount = object.dataSourceCount !== undefined && object.dataSourceCount !== null ? BigInt(object.dataSourceCount.toString()) : BigInt(0);
    message.oracleScriptCount = object.oracleScriptCount !== undefined && object.oracleScriptCount !== null ? BigInt(object.oracleScriptCount.toString()) : BigInt(0);
    message.requestCount = object.requestCount !== undefined && object.requestCount !== null ? BigInt(object.requestCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCountsResponseAmino): QueryCountsResponse {
    const message = createBaseQueryCountsResponse();
    if (object.data_source_count !== undefined && object.data_source_count !== null) {
      message.dataSourceCount = BigInt(object.data_source_count);
    }
    if (object.oracle_script_count !== undefined && object.oracle_script_count !== null) {
      message.oracleScriptCount = BigInt(object.oracle_script_count);
    }
    if (object.request_count !== undefined && object.request_count !== null) {
      message.requestCount = BigInt(object.request_count);
    }
    return message;
  },
  toAmino(message: QueryCountsResponse): QueryCountsResponseAmino {
    const obj: any = {};
    obj.data_source_count = message.dataSourceCount !== BigInt(0) ? message.dataSourceCount?.toString() : undefined;
    obj.oracle_script_count = message.oracleScriptCount !== BigInt(0) ? message.oracleScriptCount?.toString() : undefined;
    obj.request_count = message.requestCount !== BigInt(0) ? message.requestCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCountsResponseAminoMsg): QueryCountsResponse {
    return QueryCountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCountsResponseProtoMsg): QueryCountsResponse {
    return QueryCountsResponse.decode(message.value);
  },
  toProto(message: QueryCountsResponse): Uint8Array {
    return QueryCountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCountsResponse): QueryCountsResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryCountsResponse",
      value: QueryCountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDataRequest(): QueryDataRequest {
  return {
    dataHash: ""
  };
}
export const QueryDataRequest = {
  typeUrl: "/band.oracle.v1.QueryDataRequest",
  encode(message: QueryDataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dataHash !== "") {
      writer.uint32(10).string(message.dataHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDataRequest>): QueryDataRequest {
    const message = createBaseQueryDataRequest();
    message.dataHash = object.dataHash ?? "";
    return message;
  },
  fromAmino(object: QueryDataRequestAmino): QueryDataRequest {
    const message = createBaseQueryDataRequest();
    if (object.data_hash !== undefined && object.data_hash !== null) {
      message.dataHash = object.data_hash;
    }
    return message;
  },
  toAmino(message: QueryDataRequest): QueryDataRequestAmino {
    const obj: any = {};
    obj.data_hash = message.dataHash === "" ? undefined : message.dataHash;
    return obj;
  },
  fromAminoMsg(object: QueryDataRequestAminoMsg): QueryDataRequest {
    return QueryDataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDataRequestProtoMsg): QueryDataRequest {
    return QueryDataRequest.decode(message.value);
  },
  toProto(message: QueryDataRequest): Uint8Array {
    return QueryDataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDataRequest): QueryDataRequestProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryDataRequest",
      value: QueryDataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDataResponse(): QueryDataResponse {
  return {
    data: new Uint8Array()
  };
}
export const QueryDataResponse = {
  typeUrl: "/band.oracle.v1.QueryDataResponse",
  encode(message: QueryDataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDataResponse>): QueryDataResponse {
    const message = createBaseQueryDataResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryDataResponseAmino): QueryDataResponse {
    const message = createBaseQueryDataResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryDataResponse): QueryDataResponseAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDataResponseAminoMsg): QueryDataResponse {
    return QueryDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDataResponseProtoMsg): QueryDataResponse {
    return QueryDataResponse.decode(message.value);
  },
  toProto(message: QueryDataResponse): Uint8Array {
    return QueryDataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDataResponse): QueryDataResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryDataResponse",
      value: QueryDataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDataSourceRequest(): QueryDataSourceRequest {
  return {
    dataSourceId: BigInt(0)
  };
}
export const QueryDataSourceRequest = {
  typeUrl: "/band.oracle.v1.QueryDataSourceRequest",
  encode(message: QueryDataSourceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dataSourceId !== BigInt(0)) {
      writer.uint32(8).uint64(message.dataSourceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDataSourceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDataSourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataSourceId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDataSourceRequest>): QueryDataSourceRequest {
    const message = createBaseQueryDataSourceRequest();
    message.dataSourceId = object.dataSourceId !== undefined && object.dataSourceId !== null ? BigInt(object.dataSourceId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryDataSourceRequestAmino): QueryDataSourceRequest {
    const message = createBaseQueryDataSourceRequest();
    if (object.data_source_id !== undefined && object.data_source_id !== null) {
      message.dataSourceId = BigInt(object.data_source_id);
    }
    return message;
  },
  toAmino(message: QueryDataSourceRequest): QueryDataSourceRequestAmino {
    const obj: any = {};
    obj.data_source_id = message.dataSourceId !== BigInt(0) ? message.dataSourceId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDataSourceRequestAminoMsg): QueryDataSourceRequest {
    return QueryDataSourceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDataSourceRequestProtoMsg): QueryDataSourceRequest {
    return QueryDataSourceRequest.decode(message.value);
  },
  toProto(message: QueryDataSourceRequest): Uint8Array {
    return QueryDataSourceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDataSourceRequest): QueryDataSourceRequestProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryDataSourceRequest",
      value: QueryDataSourceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDataSourceResponse(): QueryDataSourceResponse {
  return {
    dataSource: undefined
  };
}
export const QueryDataSourceResponse = {
  typeUrl: "/band.oracle.v1.QueryDataSourceResponse",
  encode(message: QueryDataSourceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dataSource !== undefined) {
      DataSource.encode(message.dataSource, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDataSourceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDataSourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataSource = DataSource.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDataSourceResponse>): QueryDataSourceResponse {
    const message = createBaseQueryDataSourceResponse();
    message.dataSource = object.dataSource !== undefined && object.dataSource !== null ? DataSource.fromPartial(object.dataSource) : undefined;
    return message;
  },
  fromAmino(object: QueryDataSourceResponseAmino): QueryDataSourceResponse {
    const message = createBaseQueryDataSourceResponse();
    if (object.data_source !== undefined && object.data_source !== null) {
      message.dataSource = DataSource.fromAmino(object.data_source);
    }
    return message;
  },
  toAmino(message: QueryDataSourceResponse): QueryDataSourceResponseAmino {
    const obj: any = {};
    obj.data_source = message.dataSource ? DataSource.toAmino(message.dataSource) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDataSourceResponseAminoMsg): QueryDataSourceResponse {
    return QueryDataSourceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDataSourceResponseProtoMsg): QueryDataSourceResponse {
    return QueryDataSourceResponse.decode(message.value);
  },
  toProto(message: QueryDataSourceResponse): Uint8Array {
    return QueryDataSourceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDataSourceResponse): QueryDataSourceResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryDataSourceResponse",
      value: QueryDataSourceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOracleScriptRequest(): QueryOracleScriptRequest {
  return {
    oracleScriptId: BigInt(0)
  };
}
export const QueryOracleScriptRequest = {
  typeUrl: "/band.oracle.v1.QueryOracleScriptRequest",
  encode(message: QueryOracleScriptRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracleScriptId !== BigInt(0)) {
      writer.uint32(8).uint64(message.oracleScriptId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleScriptRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleScriptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleScriptId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOracleScriptRequest>): QueryOracleScriptRequest {
    const message = createBaseQueryOracleScriptRequest();
    message.oracleScriptId = object.oracleScriptId !== undefined && object.oracleScriptId !== null ? BigInt(object.oracleScriptId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryOracleScriptRequestAmino): QueryOracleScriptRequest {
    const message = createBaseQueryOracleScriptRequest();
    if (object.oracle_script_id !== undefined && object.oracle_script_id !== null) {
      message.oracleScriptId = BigInt(object.oracle_script_id);
    }
    return message;
  },
  toAmino(message: QueryOracleScriptRequest): QueryOracleScriptRequestAmino {
    const obj: any = {};
    obj.oracle_script_id = message.oracleScriptId !== BigInt(0) ? message.oracleScriptId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOracleScriptRequestAminoMsg): QueryOracleScriptRequest {
    return QueryOracleScriptRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOracleScriptRequestProtoMsg): QueryOracleScriptRequest {
    return QueryOracleScriptRequest.decode(message.value);
  },
  toProto(message: QueryOracleScriptRequest): Uint8Array {
    return QueryOracleScriptRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOracleScriptRequest): QueryOracleScriptRequestProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryOracleScriptRequest",
      value: QueryOracleScriptRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOracleScriptResponse(): QueryOracleScriptResponse {
  return {
    oracleScript: undefined
  };
}
export const QueryOracleScriptResponse = {
  typeUrl: "/band.oracle.v1.QueryOracleScriptResponse",
  encode(message: QueryOracleScriptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracleScript !== undefined) {
      OracleScript.encode(message.oracleScript, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleScriptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleScriptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleScript = OracleScript.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOracleScriptResponse>): QueryOracleScriptResponse {
    const message = createBaseQueryOracleScriptResponse();
    message.oracleScript = object.oracleScript !== undefined && object.oracleScript !== null ? OracleScript.fromPartial(object.oracleScript) : undefined;
    return message;
  },
  fromAmino(object: QueryOracleScriptResponseAmino): QueryOracleScriptResponse {
    const message = createBaseQueryOracleScriptResponse();
    if (object.oracle_script !== undefined && object.oracle_script !== null) {
      message.oracleScript = OracleScript.fromAmino(object.oracle_script);
    }
    return message;
  },
  toAmino(message: QueryOracleScriptResponse): QueryOracleScriptResponseAmino {
    const obj: any = {};
    obj.oracle_script = message.oracleScript ? OracleScript.toAmino(message.oracleScript) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOracleScriptResponseAminoMsg): QueryOracleScriptResponse {
    return QueryOracleScriptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOracleScriptResponseProtoMsg): QueryOracleScriptResponse {
    return QueryOracleScriptResponse.decode(message.value);
  },
  toProto(message: QueryOracleScriptResponse): Uint8Array {
    return QueryOracleScriptResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOracleScriptResponse): QueryOracleScriptResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryOracleScriptResponse",
      value: QueryOracleScriptResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRequestRequest(): QueryRequestRequest {
  return {
    requestId: BigInt(0)
  };
}
export const QueryRequestRequest = {
  typeUrl: "/band.oracle.v1.QueryRequestRequest",
  encode(message: QueryRequestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestId !== BigInt(0)) {
      writer.uint32(8).uint64(message.requestId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRequestRequest>): QueryRequestRequest {
    const message = createBaseQueryRequestRequest();
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRequestRequestAmino): QueryRequestRequest {
    const message = createBaseQueryRequestRequest();
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    return message;
  },
  toAmino(message: QueryRequestRequest): QueryRequestRequestAmino {
    const obj: any = {};
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRequestRequestAminoMsg): QueryRequestRequest {
    return QueryRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestRequestProtoMsg): QueryRequestRequest {
    return QueryRequestRequest.decode(message.value);
  },
  toProto(message: QueryRequestRequest): Uint8Array {
    return QueryRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestRequest): QueryRequestRequestProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryRequestRequest",
      value: QueryRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRequestResponse(): QueryRequestResponse {
  return {
    request: undefined,
    reports: [],
    result: undefined
  };
}
export const QueryRequestResponse = {
  typeUrl: "/band.oracle.v1.QueryRequestResponse",
  encode(message: QueryRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.reports) {
      Report.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = Request.decode(reader, reader.uint32());
          break;
        case 2:
          message.reports.push(Report.decode(reader, reader.uint32()));
          break;
        case 3:
          message.result = Result.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRequestResponse>): QueryRequestResponse {
    const message = createBaseQueryRequestResponse();
    message.request = object.request !== undefined && object.request !== null ? Request.fromPartial(object.request) : undefined;
    message.reports = object.reports?.map(e => Report.fromPartial(e)) || [];
    message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino(object: QueryRequestResponseAmino): QueryRequestResponse {
    const message = createBaseQueryRequestResponse();
    if (object.request !== undefined && object.request !== null) {
      message.request = Request.fromAmino(object.request);
    }
    message.reports = object.reports?.map(e => Report.fromAmino(e)) || [];
    if (object.result !== undefined && object.result !== null) {
      message.result = Result.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: QueryRequestResponse): QueryRequestResponseAmino {
    const obj: any = {};
    obj.request = message.request ? Request.toAmino(message.request) : undefined;
    if (message.reports) {
      obj.reports = message.reports.map(e => e ? Report.toAmino(e) : undefined);
    } else {
      obj.reports = message.reports;
    }
    obj.result = message.result ? Result.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRequestResponseAminoMsg): QueryRequestResponse {
    return QueryRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestResponseProtoMsg): QueryRequestResponse {
    return QueryRequestResponse.decode(message.value);
  },
  toProto(message: QueryRequestResponse): Uint8Array {
    return QueryRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestResponse): QueryRequestResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryRequestResponse",
      value: QueryRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPendingRequestsRequest(): QueryPendingRequestsRequest {
  return {
    validatorAddress: ""
  };
}
export const QueryPendingRequestsRequest = {
  typeUrl: "/band.oracle.v1.QueryPendingRequestsRequest",
  encode(message: QueryPendingRequestsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingRequestsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingRequestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPendingRequestsRequest>): QueryPendingRequestsRequest {
    const message = createBaseQueryPendingRequestsRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryPendingRequestsRequestAmino): QueryPendingRequestsRequest {
    const message = createBaseQueryPendingRequestsRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QueryPendingRequestsRequest): QueryPendingRequestsRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryPendingRequestsRequestAminoMsg): QueryPendingRequestsRequest {
    return QueryPendingRequestsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingRequestsRequestProtoMsg): QueryPendingRequestsRequest {
    return QueryPendingRequestsRequest.decode(message.value);
  },
  toProto(message: QueryPendingRequestsRequest): Uint8Array {
    return QueryPendingRequestsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingRequestsRequest): QueryPendingRequestsRequestProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryPendingRequestsRequest",
      value: QueryPendingRequestsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPendingRequestsResponse(): QueryPendingRequestsResponse {
  return {
    requestIds: []
  };
}
export const QueryPendingRequestsResponse = {
  typeUrl: "/band.oracle.v1.QueryPendingRequestsResponse",
  encode(message: QueryPendingRequestsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.requestIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingRequestsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.requestIds.push(reader.uint64());
            }
          } else {
            message.requestIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPendingRequestsResponse>): QueryPendingRequestsResponse {
    const message = createBaseQueryPendingRequestsResponse();
    message.requestIds = object.requestIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryPendingRequestsResponseAmino): QueryPendingRequestsResponse {
    const message = createBaseQueryPendingRequestsResponse();
    message.requestIds = object.request_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryPendingRequestsResponse): QueryPendingRequestsResponseAmino {
    const obj: any = {};
    if (message.requestIds) {
      obj.request_ids = message.requestIds.map(e => e.toString());
    } else {
      obj.request_ids = message.requestIds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPendingRequestsResponseAminoMsg): QueryPendingRequestsResponse {
    return QueryPendingRequestsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingRequestsResponseProtoMsg): QueryPendingRequestsResponse {
    return QueryPendingRequestsResponse.decode(message.value);
  },
  toProto(message: QueryPendingRequestsResponse): Uint8Array {
    return QueryPendingRequestsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingRequestsResponse): QueryPendingRequestsResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryPendingRequestsResponse",
      value: QueryPendingRequestsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/band.oracle.v1.QueryParamsRequest",
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
      typeUrl: "/band.oracle.v1.QueryParamsRequest",
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
  typeUrl: "/band.oracle.v1.QueryParamsResponse",
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
      typeUrl: "/band.oracle.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorRequest(): QueryValidatorRequest {
  return {
    validatorAddress: ""
  };
}
export const QueryValidatorRequest = {
  typeUrl: "/band.oracle.v1.QueryValidatorRequest",
  encode(message: QueryValidatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorRequest>): QueryValidatorRequest {
    const message = createBaseQueryValidatorRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryValidatorRequestAmino): QueryValidatorRequest {
    const message = createBaseQueryValidatorRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QueryValidatorRequest): QueryValidatorRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorRequestAminoMsg): QueryValidatorRequest {
    return QueryValidatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorRequestProtoMsg): QueryValidatorRequest {
    return QueryValidatorRequest.decode(message.value);
  },
  toProto(message: QueryValidatorRequest): Uint8Array {
    return QueryValidatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorRequest): QueryValidatorRequestProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryValidatorRequest",
      value: QueryValidatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorResponse(): QueryValidatorResponse {
  return {
    status: undefined
  };
}
export const QueryValidatorResponse = {
  typeUrl: "/band.oracle.v1.QueryValidatorResponse",
  encode(message: QueryValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== undefined) {
      ValidatorStatus.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = ValidatorStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorResponse>): QueryValidatorResponse {
    const message = createBaseQueryValidatorResponse();
    message.status = object.status !== undefined && object.status !== null ? ValidatorStatus.fromPartial(object.status) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorResponseAmino): QueryValidatorResponse {
    const message = createBaseQueryValidatorResponse();
    if (object.status !== undefined && object.status !== null) {
      message.status = ValidatorStatus.fromAmino(object.status);
    }
    return message;
  },
  toAmino(message: QueryValidatorResponse): QueryValidatorResponseAmino {
    const obj: any = {};
    obj.status = message.status ? ValidatorStatus.toAmino(message.status) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorResponseAminoMsg): QueryValidatorResponse {
    return QueryValidatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorResponseProtoMsg): QueryValidatorResponse {
    return QueryValidatorResponse.decode(message.value);
  },
  toProto(message: QueryValidatorResponse): Uint8Array {
    return QueryValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorResponse): QueryValidatorResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryValidatorResponse",
      value: QueryValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIsReporterRequest(): QueryIsReporterRequest {
  return {
    validatorAddress: "",
    reporterAddress: ""
  };
}
export const QueryIsReporterRequest = {
  typeUrl: "/band.oracle.v1.QueryIsReporterRequest",
  encode(message: QueryIsReporterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.reporterAddress !== "") {
      writer.uint32(18).string(message.reporterAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsReporterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsReporterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.reporterAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryIsReporterRequest>): QueryIsReporterRequest {
    const message = createBaseQueryIsReporterRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.reporterAddress = object.reporterAddress ?? "";
    return message;
  },
  fromAmino(object: QueryIsReporterRequestAmino): QueryIsReporterRequest {
    const message = createBaseQueryIsReporterRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.reporter_address !== undefined && object.reporter_address !== null) {
      message.reporterAddress = object.reporter_address;
    }
    return message;
  },
  toAmino(message: QueryIsReporterRequest): QueryIsReporterRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.reporter_address = message.reporterAddress === "" ? undefined : message.reporterAddress;
    return obj;
  },
  fromAminoMsg(object: QueryIsReporterRequestAminoMsg): QueryIsReporterRequest {
    return QueryIsReporterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsReporterRequestProtoMsg): QueryIsReporterRequest {
    return QueryIsReporterRequest.decode(message.value);
  },
  toProto(message: QueryIsReporterRequest): Uint8Array {
    return QueryIsReporterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIsReporterRequest): QueryIsReporterRequestProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryIsReporterRequest",
      value: QueryIsReporterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIsReporterResponse(): QueryIsReporterResponse {
  return {
    isReporter: false
  };
}
export const QueryIsReporterResponse = {
  typeUrl: "/band.oracle.v1.QueryIsReporterResponse",
  encode(message: QueryIsReporterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isReporter === true) {
      writer.uint32(8).bool(message.isReporter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsReporterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsReporterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isReporter = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryIsReporterResponse>): QueryIsReporterResponse {
    const message = createBaseQueryIsReporterResponse();
    message.isReporter = object.isReporter ?? false;
    return message;
  },
  fromAmino(object: QueryIsReporterResponseAmino): QueryIsReporterResponse {
    const message = createBaseQueryIsReporterResponse();
    if (object.is_reporter !== undefined && object.is_reporter !== null) {
      message.isReporter = object.is_reporter;
    }
    return message;
  },
  toAmino(message: QueryIsReporterResponse): QueryIsReporterResponseAmino {
    const obj: any = {};
    obj.is_reporter = message.isReporter === false ? undefined : message.isReporter;
    return obj;
  },
  fromAminoMsg(object: QueryIsReporterResponseAminoMsg): QueryIsReporterResponse {
    return QueryIsReporterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsReporterResponseProtoMsg): QueryIsReporterResponse {
    return QueryIsReporterResponse.decode(message.value);
  },
  toProto(message: QueryIsReporterResponse): Uint8Array {
    return QueryIsReporterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIsReporterResponse): QueryIsReporterResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryIsReporterResponse",
      value: QueryIsReporterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryReportersRequest(): QueryReportersRequest {
  return {
    validatorAddress: ""
  };
}
export const QueryReportersRequest = {
  typeUrl: "/band.oracle.v1.QueryReportersRequest",
  encode(message: QueryReportersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReportersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReportersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryReportersRequest>): QueryReportersRequest {
    const message = createBaseQueryReportersRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryReportersRequestAmino): QueryReportersRequest {
    const message = createBaseQueryReportersRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QueryReportersRequest): QueryReportersRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryReportersRequestAminoMsg): QueryReportersRequest {
    return QueryReportersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReportersRequestProtoMsg): QueryReportersRequest {
    return QueryReportersRequest.decode(message.value);
  },
  toProto(message: QueryReportersRequest): Uint8Array {
    return QueryReportersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReportersRequest): QueryReportersRequestProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryReportersRequest",
      value: QueryReportersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryReportersResponse(): QueryReportersResponse {
  return {
    reporter: []
  };
}
export const QueryReportersResponse = {
  typeUrl: "/band.oracle.v1.QueryReportersResponse",
  encode(message: QueryReportersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.reporter) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReportersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReportersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reporter.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryReportersResponse>): QueryReportersResponse {
    const message = createBaseQueryReportersResponse();
    message.reporter = object.reporter?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryReportersResponseAmino): QueryReportersResponse {
    const message = createBaseQueryReportersResponse();
    message.reporter = object.reporter?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryReportersResponse): QueryReportersResponseAmino {
    const obj: any = {};
    if (message.reporter) {
      obj.reporter = message.reporter.map(e => e);
    } else {
      obj.reporter = message.reporter;
    }
    return obj;
  },
  fromAminoMsg(object: QueryReportersResponseAminoMsg): QueryReportersResponse {
    return QueryReportersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReportersResponseProtoMsg): QueryReportersResponse {
    return QueryReportersResponse.decode(message.value);
  },
  toProto(message: QueryReportersResponse): Uint8Array {
    return QueryReportersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReportersResponse): QueryReportersResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryReportersResponse",
      value: QueryReportersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryActiveValidatorsRequest(): QueryActiveValidatorsRequest {
  return {};
}
export const QueryActiveValidatorsRequest = {
  typeUrl: "/band.oracle.v1.QueryActiveValidatorsRequest",
  encode(_: QueryActiveValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActiveValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveValidatorsRequest();
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
  fromPartial(_: Partial<QueryActiveValidatorsRequest>): QueryActiveValidatorsRequest {
    const message = createBaseQueryActiveValidatorsRequest();
    return message;
  },
  fromAmino(_: QueryActiveValidatorsRequestAmino): QueryActiveValidatorsRequest {
    const message = createBaseQueryActiveValidatorsRequest();
    return message;
  },
  toAmino(_: QueryActiveValidatorsRequest): QueryActiveValidatorsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryActiveValidatorsRequestAminoMsg): QueryActiveValidatorsRequest {
    return QueryActiveValidatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveValidatorsRequestProtoMsg): QueryActiveValidatorsRequest {
    return QueryActiveValidatorsRequest.decode(message.value);
  },
  toProto(message: QueryActiveValidatorsRequest): Uint8Array {
    return QueryActiveValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveValidatorsRequest): QueryActiveValidatorsRequestProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryActiveValidatorsRequest",
      value: QueryActiveValidatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryActiveValidatorsResponse(): QueryActiveValidatorsResponse {
  return {
    validators: []
  };
}
export const QueryActiveValidatorsResponse = {
  typeUrl: "/band.oracle.v1.QueryActiveValidatorsResponse",
  encode(message: QueryActiveValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      ActiveValidator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActiveValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(ActiveValidator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryActiveValidatorsResponse>): QueryActiveValidatorsResponse {
    const message = createBaseQueryActiveValidatorsResponse();
    message.validators = object.validators?.map(e => ActiveValidator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryActiveValidatorsResponseAmino): QueryActiveValidatorsResponse {
    const message = createBaseQueryActiveValidatorsResponse();
    message.validators = object.validators?.map(e => ActiveValidator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryActiveValidatorsResponse): QueryActiveValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? ActiveValidator.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    return obj;
  },
  fromAminoMsg(object: QueryActiveValidatorsResponseAminoMsg): QueryActiveValidatorsResponse {
    return QueryActiveValidatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveValidatorsResponseProtoMsg): QueryActiveValidatorsResponse {
    return QueryActiveValidatorsResponse.decode(message.value);
  },
  toProto(message: QueryActiveValidatorsResponse): Uint8Array {
    return QueryActiveValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveValidatorsResponse): QueryActiveValidatorsResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryActiveValidatorsResponse",
      value: QueryActiveValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRequestSearchRequest(): QueryRequestSearchRequest {
  return {
    oracleScriptId: BigInt(0),
    calldata: "",
    askCount: BigInt(0),
    minCount: BigInt(0)
  };
}
export const QueryRequestSearchRequest = {
  typeUrl: "/band.oracle.v1.QueryRequestSearchRequest",
  encode(message: QueryRequestSearchRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracleScriptId !== BigInt(0)) {
      writer.uint32(8).uint64(message.oracleScriptId);
    }
    if (message.calldata !== "") {
      writer.uint32(18).string(message.calldata);
    }
    if (message.askCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.askCount);
    }
    if (message.minCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.minCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestSearchRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestSearchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleScriptId = reader.uint64();
          break;
        case 2:
          message.calldata = reader.string();
          break;
        case 3:
          message.askCount = reader.uint64();
          break;
        case 4:
          message.minCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRequestSearchRequest>): QueryRequestSearchRequest {
    const message = createBaseQueryRequestSearchRequest();
    message.oracleScriptId = object.oracleScriptId !== undefined && object.oracleScriptId !== null ? BigInt(object.oracleScriptId.toString()) : BigInt(0);
    message.calldata = object.calldata ?? "";
    message.askCount = object.askCount !== undefined && object.askCount !== null ? BigInt(object.askCount.toString()) : BigInt(0);
    message.minCount = object.minCount !== undefined && object.minCount !== null ? BigInt(object.minCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRequestSearchRequestAmino): QueryRequestSearchRequest {
    const message = createBaseQueryRequestSearchRequest();
    if (object.oracle_script_id !== undefined && object.oracle_script_id !== null) {
      message.oracleScriptId = BigInt(object.oracle_script_id);
    }
    if (object.calldata !== undefined && object.calldata !== null) {
      message.calldata = object.calldata;
    }
    if (object.ask_count !== undefined && object.ask_count !== null) {
      message.askCount = BigInt(object.ask_count);
    }
    if (object.min_count !== undefined && object.min_count !== null) {
      message.minCount = BigInt(object.min_count);
    }
    return message;
  },
  toAmino(message: QueryRequestSearchRequest): QueryRequestSearchRequestAmino {
    const obj: any = {};
    obj.oracle_script_id = message.oracleScriptId !== BigInt(0) ? message.oracleScriptId?.toString() : undefined;
    obj.calldata = message.calldata === "" ? undefined : message.calldata;
    obj.ask_count = message.askCount !== BigInt(0) ? message.askCount?.toString() : undefined;
    obj.min_count = message.minCount !== BigInt(0) ? message.minCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRequestSearchRequestAminoMsg): QueryRequestSearchRequest {
    return QueryRequestSearchRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestSearchRequestProtoMsg): QueryRequestSearchRequest {
    return QueryRequestSearchRequest.decode(message.value);
  },
  toProto(message: QueryRequestSearchRequest): Uint8Array {
    return QueryRequestSearchRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestSearchRequest): QueryRequestSearchRequestProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryRequestSearchRequest",
      value: QueryRequestSearchRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRequestSearchResponse(): QueryRequestSearchResponse {
  return {
    request: undefined
  };
}
export const QueryRequestSearchResponse = {
  typeUrl: "/band.oracle.v1.QueryRequestSearchResponse",
  encode(message: QueryRequestSearchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.request !== undefined) {
      QueryRequestResponse.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestSearchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestSearchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = QueryRequestResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRequestSearchResponse>): QueryRequestSearchResponse {
    const message = createBaseQueryRequestSearchResponse();
    message.request = object.request !== undefined && object.request !== null ? QueryRequestResponse.fromPartial(object.request) : undefined;
    return message;
  },
  fromAmino(object: QueryRequestSearchResponseAmino): QueryRequestSearchResponse {
    const message = createBaseQueryRequestSearchResponse();
    if (object.request !== undefined && object.request !== null) {
      message.request = QueryRequestResponse.fromAmino(object.request);
    }
    return message;
  },
  toAmino(message: QueryRequestSearchResponse): QueryRequestSearchResponseAmino {
    const obj: any = {};
    obj.request = message.request ? QueryRequestResponse.toAmino(message.request) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRequestSearchResponseAminoMsg): QueryRequestSearchResponse {
    return QueryRequestSearchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestSearchResponseProtoMsg): QueryRequestSearchResponse {
    return QueryRequestSearchResponse.decode(message.value);
  },
  toProto(message: QueryRequestSearchResponse): Uint8Array {
    return QueryRequestSearchResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestSearchResponse): QueryRequestSearchResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryRequestSearchResponse",
      value: QueryRequestSearchResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRequestPriceRequest(): QueryRequestPriceRequest {
  return {
    symbols: [],
    askCount: BigInt(0),
    minCount: BigInt(0)
  };
}
export const QueryRequestPriceRequest = {
  typeUrl: "/band.oracle.v1.QueryRequestPriceRequest",
  encode(message: QueryRequestPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.symbols) {
      writer.uint32(10).string(v!);
    }
    if (message.askCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.askCount);
    }
    if (message.minCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.minCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbols.push(reader.string());
          break;
        case 2:
          message.askCount = reader.uint64();
          break;
        case 3:
          message.minCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRequestPriceRequest>): QueryRequestPriceRequest {
    const message = createBaseQueryRequestPriceRequest();
    message.symbols = object.symbols?.map(e => e) || [];
    message.askCount = object.askCount !== undefined && object.askCount !== null ? BigInt(object.askCount.toString()) : BigInt(0);
    message.minCount = object.minCount !== undefined && object.minCount !== null ? BigInt(object.minCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRequestPriceRequestAmino): QueryRequestPriceRequest {
    const message = createBaseQueryRequestPriceRequest();
    message.symbols = object.symbols?.map(e => e) || [];
    if (object.ask_count !== undefined && object.ask_count !== null) {
      message.askCount = BigInt(object.ask_count);
    }
    if (object.min_count !== undefined && object.min_count !== null) {
      message.minCount = BigInt(object.min_count);
    }
    return message;
  },
  toAmino(message: QueryRequestPriceRequest): QueryRequestPriceRequestAmino {
    const obj: any = {};
    if (message.symbols) {
      obj.symbols = message.symbols.map(e => e);
    } else {
      obj.symbols = message.symbols;
    }
    obj.ask_count = message.askCount !== BigInt(0) ? message.askCount?.toString() : undefined;
    obj.min_count = message.minCount !== BigInt(0) ? message.minCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRequestPriceRequestAminoMsg): QueryRequestPriceRequest {
    return QueryRequestPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestPriceRequestProtoMsg): QueryRequestPriceRequest {
    return QueryRequestPriceRequest.decode(message.value);
  },
  toProto(message: QueryRequestPriceRequest): Uint8Array {
    return QueryRequestPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestPriceRequest): QueryRequestPriceRequestProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryRequestPriceRequest",
      value: QueryRequestPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRequestPriceResponse(): QueryRequestPriceResponse {
  return {
    priceResults: []
  };
}
export const QueryRequestPriceResponse = {
  typeUrl: "/band.oracle.v1.QueryRequestPriceResponse",
  encode(message: QueryRequestPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.priceResults) {
      PriceResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceResults.push(PriceResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRequestPriceResponse>): QueryRequestPriceResponse {
    const message = createBaseQueryRequestPriceResponse();
    message.priceResults = object.priceResults?.map(e => PriceResult.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRequestPriceResponseAmino): QueryRequestPriceResponse {
    const message = createBaseQueryRequestPriceResponse();
    message.priceResults = object.price_results?.map(e => PriceResult.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRequestPriceResponse): QueryRequestPriceResponseAmino {
    const obj: any = {};
    if (message.priceResults) {
      obj.price_results = message.priceResults.map(e => e ? PriceResult.toAmino(e) : undefined);
    } else {
      obj.price_results = message.priceResults;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRequestPriceResponseAminoMsg): QueryRequestPriceResponse {
    return QueryRequestPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestPriceResponseProtoMsg): QueryRequestPriceResponse {
    return QueryRequestPriceResponse.decode(message.value);
  },
  toProto(message: QueryRequestPriceResponse): Uint8Array {
    return QueryRequestPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestPriceResponse): QueryRequestPriceResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryRequestPriceResponse",
      value: QueryRequestPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRequestVerificationRequest(): QueryRequestVerificationRequest {
  return {
    chainId: "",
    validator: "",
    requestId: BigInt(0),
    externalId: BigInt(0),
    dataSourceId: BigInt(0),
    reporter: "",
    signature: new Uint8Array(),
    maxDelay: BigInt(0)
  };
}
export const QueryRequestVerificationRequest = {
  typeUrl: "/band.oracle.v1.QueryRequestVerificationRequest",
  encode(message: QueryRequestVerificationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(24).uint64(message.requestId);
    }
    if (message.externalId !== BigInt(0)) {
      writer.uint32(32).uint64(message.externalId);
    }
    if (message.dataSourceId !== BigInt(0)) {
      writer.uint32(40).uint64(message.dataSourceId);
    }
    if (message.reporter !== "") {
      writer.uint32(50).string(message.reporter);
    }
    if (message.signature.length !== 0) {
      writer.uint32(58).bytes(message.signature);
    }
    if (message.maxDelay !== BigInt(0)) {
      writer.uint32(64).uint64(message.maxDelay);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestVerificationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestVerificationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.requestId = reader.uint64();
          break;
        case 4:
          message.externalId = reader.uint64();
          break;
        case 5:
          message.dataSourceId = reader.uint64();
          break;
        case 6:
          message.reporter = reader.string();
          break;
        case 7:
          message.signature = reader.bytes();
          break;
        case 8:
          message.maxDelay = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRequestVerificationRequest>): QueryRequestVerificationRequest {
    const message = createBaseQueryRequestVerificationRequest();
    message.chainId = object.chainId ?? "";
    message.validator = object.validator ?? "";
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    message.externalId = object.externalId !== undefined && object.externalId !== null ? BigInt(object.externalId.toString()) : BigInt(0);
    message.dataSourceId = object.dataSourceId !== undefined && object.dataSourceId !== null ? BigInt(object.dataSourceId.toString()) : BigInt(0);
    message.reporter = object.reporter ?? "";
    message.signature = object.signature ?? new Uint8Array();
    message.maxDelay = object.maxDelay !== undefined && object.maxDelay !== null ? BigInt(object.maxDelay.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRequestVerificationRequestAmino): QueryRequestVerificationRequest {
    const message = createBaseQueryRequestVerificationRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    if (object.external_id !== undefined && object.external_id !== null) {
      message.externalId = BigInt(object.external_id);
    }
    if (object.data_source_id !== undefined && object.data_source_id !== null) {
      message.dataSourceId = BigInt(object.data_source_id);
    }
    if (object.reporter !== undefined && object.reporter !== null) {
      message.reporter = object.reporter;
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    if (object.max_delay !== undefined && object.max_delay !== null) {
      message.maxDelay = BigInt(object.max_delay);
    }
    return message;
  },
  toAmino(message: QueryRequestVerificationRequest): QueryRequestVerificationRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    obj.external_id = message.externalId !== BigInt(0) ? message.externalId?.toString() : undefined;
    obj.data_source_id = message.dataSourceId !== BigInt(0) ? message.dataSourceId?.toString() : undefined;
    obj.reporter = message.reporter === "" ? undefined : message.reporter;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    obj.max_delay = message.maxDelay !== BigInt(0) ? message.maxDelay?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRequestVerificationRequestAminoMsg): QueryRequestVerificationRequest {
    return QueryRequestVerificationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestVerificationRequestProtoMsg): QueryRequestVerificationRequest {
    return QueryRequestVerificationRequest.decode(message.value);
  },
  toProto(message: QueryRequestVerificationRequest): Uint8Array {
    return QueryRequestVerificationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestVerificationRequest): QueryRequestVerificationRequestProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryRequestVerificationRequest",
      value: QueryRequestVerificationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRequestVerificationResponse(): QueryRequestVerificationResponse {
  return {
    chainId: "",
    validator: "",
    requestId: BigInt(0),
    externalId: BigInt(0),
    dataSourceId: BigInt(0),
    isDelay: false
  };
}
export const QueryRequestVerificationResponse = {
  typeUrl: "/band.oracle.v1.QueryRequestVerificationResponse",
  encode(message: QueryRequestVerificationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(24).uint64(message.requestId);
    }
    if (message.externalId !== BigInt(0)) {
      writer.uint32(32).uint64(message.externalId);
    }
    if (message.dataSourceId !== BigInt(0)) {
      writer.uint32(40).uint64(message.dataSourceId);
    }
    if (message.isDelay === true) {
      writer.uint32(48).bool(message.isDelay);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequestVerificationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestVerificationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.requestId = reader.uint64();
          break;
        case 4:
          message.externalId = reader.uint64();
          break;
        case 5:
          message.dataSourceId = reader.uint64();
          break;
        case 6:
          message.isDelay = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRequestVerificationResponse>): QueryRequestVerificationResponse {
    const message = createBaseQueryRequestVerificationResponse();
    message.chainId = object.chainId ?? "";
    message.validator = object.validator ?? "";
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    message.externalId = object.externalId !== undefined && object.externalId !== null ? BigInt(object.externalId.toString()) : BigInt(0);
    message.dataSourceId = object.dataSourceId !== undefined && object.dataSourceId !== null ? BigInt(object.dataSourceId.toString()) : BigInt(0);
    message.isDelay = object.isDelay ?? false;
    return message;
  },
  fromAmino(object: QueryRequestVerificationResponseAmino): QueryRequestVerificationResponse {
    const message = createBaseQueryRequestVerificationResponse();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    if (object.external_id !== undefined && object.external_id !== null) {
      message.externalId = BigInt(object.external_id);
    }
    if (object.data_source_id !== undefined && object.data_source_id !== null) {
      message.dataSourceId = BigInt(object.data_source_id);
    }
    if (object.is_delay !== undefined && object.is_delay !== null) {
      message.isDelay = object.is_delay;
    }
    return message;
  },
  toAmino(message: QueryRequestVerificationResponse): QueryRequestVerificationResponseAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    obj.external_id = message.externalId !== BigInt(0) ? message.externalId?.toString() : undefined;
    obj.data_source_id = message.dataSourceId !== BigInt(0) ? message.dataSourceId?.toString() : undefined;
    obj.is_delay = message.isDelay === false ? undefined : message.isDelay;
    return obj;
  },
  fromAminoMsg(object: QueryRequestVerificationResponseAminoMsg): QueryRequestVerificationResponse {
    return QueryRequestVerificationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestVerificationResponseProtoMsg): QueryRequestVerificationResponse {
    return QueryRequestVerificationResponse.decode(message.value);
  },
  toProto(message: QueryRequestVerificationResponse): Uint8Array {
    return QueryRequestVerificationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestVerificationResponse): QueryRequestVerificationResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.QueryRequestVerificationResponse",
      value: QueryRequestVerificationResponse.encode(message).finish()
    };
  }
};