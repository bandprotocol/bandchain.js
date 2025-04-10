//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp } from "../../helpers";
/** ResolveStatus encodes the status of an oracle request. */
export enum ResolveStatus {
  /** RESOLVE_STATUS_OPEN_UNSPECIFIED - Open - the request is not yet resolved. */
  RESOLVE_STATUS_OPEN_UNSPECIFIED = 0,
  /** RESOLVE_STATUS_SUCCESS - Success - the request has been resolved successfully with no errors. */
  RESOLVE_STATUS_SUCCESS = 1,
  /** RESOLVE_STATUS_FAILURE - Failure - an error occured during the request's resolve call. */
  RESOLVE_STATUS_FAILURE = 2,
  /**
   * RESOLVE_STATUS_EXPIRED - Expired - the request does not get enough reports from validator within the
   * timeframe.
   */
  RESOLVE_STATUS_EXPIRED = 3,
  UNRECOGNIZED = -1,
}
export const ResolveStatusSDKType = ResolveStatus;
export const ResolveStatusAmino = ResolveStatus;
export function resolveStatusFromJSON(object: any): ResolveStatus {
  switch (object) {
    case 0:
    case "RESOLVE_STATUS_OPEN_UNSPECIFIED":
      return ResolveStatus.RESOLVE_STATUS_OPEN_UNSPECIFIED;
    case 1:
    case "RESOLVE_STATUS_SUCCESS":
      return ResolveStatus.RESOLVE_STATUS_SUCCESS;
    case 2:
    case "RESOLVE_STATUS_FAILURE":
      return ResolveStatus.RESOLVE_STATUS_FAILURE;
    case 3:
    case "RESOLVE_STATUS_EXPIRED":
      return ResolveStatus.RESOLVE_STATUS_EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResolveStatus.UNRECOGNIZED;
  }
}
export function resolveStatusToJSON(object: ResolveStatus): string {
  switch (object) {
    case ResolveStatus.RESOLVE_STATUS_OPEN_UNSPECIFIED:
      return "RESOLVE_STATUS_OPEN_UNSPECIFIED";
    case ResolveStatus.RESOLVE_STATUS_SUCCESS:
      return "RESOLVE_STATUS_SUCCESS";
    case ResolveStatus.RESOLVE_STATUS_FAILURE:
      return "RESOLVE_STATUS_FAILURE";
    case ResolveStatus.RESOLVE_STATUS_EXPIRED:
      return "RESOLVE_STATUS_EXPIRED";
    case ResolveStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** DataSource is the data structure for storing data sources in the storage. */
export interface DataSource {
  /** Owner is an address of the account who own the data source */
  owner: string;
  /** Name is data source name used for display */
  name: string;
  /** Description is data source description used for display */
  description: string;
  /**
   * Filename is string of file name used as reference for locating
   * data source file stored in bandchain nodes
   */
  filename: string;
  /** Treasury is the account address who receive data source fee from requester. */
  treasury: string;
  /**
   * Fee is the data source fee per ask_count that data provider will receive
   * from requester.
   */
  fee: Coin[];
}
export interface DataSourceProtoMsg {
  typeUrl: "/oracle.v1.DataSource";
  value: Uint8Array;
}
/** DataSource is the data structure for storing data sources in the storage. */
export interface DataSourceAmino {
  /** Owner is an address of the account who own the data source */
  owner?: string;
  /** Name is data source name used for display */
  name?: string;
  /** Description is data source description used for display */
  description?: string;
  /**
   * Filename is string of file name used as reference for locating
   * data source file stored in bandchain nodes
   */
  filename?: string;
  /** Treasury is the account address who receive data source fee from requester. */
  treasury?: string;
  /**
   * Fee is the data source fee per ask_count that data provider will receive
   * from requester.
   */
  fee?: CoinAmino[];
}
export interface DataSourceAminoMsg {
  type: "/oracle.v1.DataSource";
  value: DataSourceAmino;
}
/** DataSource is the data structure for storing data sources in the storage. */
export interface DataSourceSDKType {
  owner: string;
  name: string;
  description: string;
  filename: string;
  treasury: string;
  fee: CoinSDKType[];
}
/** OracleScript is the data structure for storing oracle scripts in the storage. */
export interface OracleScript {
  /** Owner is an address of the account who own the oracle script */
  owner: string;
  /** Name is oracle script name used for display */
  name: string;
  /** Description is oracle script description used for display */
  description: string;
  /**
   * Filename is string of file name used as reference for locating
   * compiled oracle script WASM file stored in bandchain nodes
   */
  filename: string;
  /**
   * Schema is the schema of the oracle script input/output
   * which is formatted in OBI format e.g.
   * "{symbol:string,multiplier:u64}/{px:u64}"
   */
  schema: string;
  /**
   * SourceCodeURL is the URL of oracle script's source code.
   * It is recommendded to store source code on IPFS and get its URL to preserve
   * decentralization.
   */
  sourceCodeUrl: string;
}
export interface OracleScriptProtoMsg {
  typeUrl: "/oracle.v1.OracleScript";
  value: Uint8Array;
}
/** OracleScript is the data structure for storing oracle scripts in the storage. */
export interface OracleScriptAmino {
  /** Owner is an address of the account who own the oracle script */
  owner?: string;
  /** Name is oracle script name used for display */
  name?: string;
  /** Description is oracle script description used for display */
  description?: string;
  /**
   * Filename is string of file name used as reference for locating
   * compiled oracle script WASM file stored in bandchain nodes
   */
  filename?: string;
  /**
   * Schema is the schema of the oracle script input/output
   * which is formatted in OBI format e.g.
   * "{symbol:string,multiplier:u64}/{px:u64}"
   */
  schema?: string;
  /**
   * SourceCodeURL is the URL of oracle script's source code.
   * It is recommendded to store source code on IPFS and get its URL to preserve
   * decentralization.
   */
  source_code_url?: string;
}
export interface OracleScriptAminoMsg {
  type: "/oracle.v1.OracleScript";
  value: OracleScriptAmino;
}
/** OracleScript is the data structure for storing oracle scripts in the storage. */
export interface OracleScriptSDKType {
  owner: string;
  name: string;
  description: string;
  filename: string;
  schema: string;
  source_code_url: string;
}
/** RawRequest is the data structure for storing raw requests in the storage. */
export interface RawRequest {
  /** ExternalID is an ID of the raw request */
  externalId: bigint;
  /** DataSourceID is an ID of data source script that relates to the raw request */
  dataSourceId: bigint;
  /**
   * Calldata is the data used as argument params for executing data source
   * script
   */
  calldata: Uint8Array;
}
export interface RawRequestProtoMsg {
  typeUrl: "/oracle.v1.RawRequest";
  value: Uint8Array;
}
/** RawRequest is the data structure for storing raw requests in the storage. */
export interface RawRequestAmino {
  /** ExternalID is an ID of the raw request */
  external_id?: string;
  /** DataSourceID is an ID of data source script that relates to the raw request */
  data_source_id?: string;
  /**
   * Calldata is the data used as argument params for executing data source
   * script
   */
  calldata?: string;
}
export interface RawRequestAminoMsg {
  type: "/oracle.v1.RawRequest";
  value: RawRequestAmino;
}
/** RawRequest is the data structure for storing raw requests in the storage. */
export interface RawRequestSDKType {
  external_id: bigint;
  data_source_id: bigint;
  calldata: Uint8Array;
}
/** RawRequest is the data structure for storing raw reporter in the storage. */
export interface RawReport {
  /** ExternalID is an ID of the raw request */
  externalId: bigint;
  /**
   * ExitCode is status code provided by validators to specify error, if any.
   * Exit code is usually filled by the exit code returned from execution of
   * specified data source script. With code 0 means there is no error.
   */
  exitCode: number;
  /**
   * Data is raw result provided by validators.
   * It is usually filled by the result from execution of specified data source
   * script.
   */
  data: Uint8Array;
}
export interface RawReportProtoMsg {
  typeUrl: "/oracle.v1.RawReport";
  value: Uint8Array;
}
/** RawRequest is the data structure for storing raw reporter in the storage. */
export interface RawReportAmino {
  /** ExternalID is an ID of the raw request */
  external_id?: string;
  /**
   * ExitCode is status code provided by validators to specify error, if any.
   * Exit code is usually filled by the exit code returned from execution of
   * specified data source script. With code 0 means there is no error.
   */
  exit_code?: number;
  /**
   * Data is raw result provided by validators.
   * It is usually filled by the result from execution of specified data source
   * script.
   */
  data?: string;
}
export interface RawReportAminoMsg {
  type: "/oracle.v1.RawReport";
  value: RawReportAmino;
}
/** RawRequest is the data structure for storing raw reporter in the storage. */
export interface RawReportSDKType {
  external_id: bigint;
  exit_code: number;
  data: Uint8Array;
}
/** Request is the data structure for storing requests in the storage. */
export interface Request {
  /** OracleScriptID is ID of an oracle script */
  oracleScriptId: bigint;
  /** Calldata is the data used as argument params for the oracle script */
  calldata: Uint8Array;
  /**
   * RequestedValidators is a list of validator addresses that are assigned for
   * fulfilling the request
   */
  requestedValidators: string[];
  /**
   * MinCount is minimum number of validators required for fulfilling the
   * request
   */
  minCount: bigint;
  /** RequestHeight is block height that the request has been created */
  requestHeight: bigint;
  /** RequestTime is timestamp of the chain's block which contains the request */
  requestTime: bigint;
  /**
   * ClientID is arbitrary id provided by requester.
   * It is used by client-side for referencing the request
   */
  clientId: string;
  /**
   * RawRequests is a list of raw requests specified by execution of oracle
   * script
   */
  rawRequests: RawRequest[];
  /**
   * IBCChannel is an IBC channel info of the other chain, which contains a
   * channel and a port to allow bandchain connect to that chain. This field
   * allows other chain be able to request data from bandchain via IBC.
   */
  ibcChannel?: IBCChannel;
  /** ExecuteGas is amount of gas to reserve for executing */
  executeGas: bigint;
}
export interface RequestProtoMsg {
  typeUrl: "/oracle.v1.Request";
  value: Uint8Array;
}
/** Request is the data structure for storing requests in the storage. */
export interface RequestAmino {
  /** OracleScriptID is ID of an oracle script */
  oracle_script_id?: string;
  /** Calldata is the data used as argument params for the oracle script */
  calldata?: string;
  /**
   * RequestedValidators is a list of validator addresses that are assigned for
   * fulfilling the request
   */
  requested_validators?: string[];
  /**
   * MinCount is minimum number of validators required for fulfilling the
   * request
   */
  min_count?: string;
  /** RequestHeight is block height that the request has been created */
  request_height?: string;
  /** RequestTime is timestamp of the chain's block which contains the request */
  request_time?: string;
  /**
   * ClientID is arbitrary id provided by requester.
   * It is used by client-side for referencing the request
   */
  client_id?: string;
  /**
   * RawRequests is a list of raw requests specified by execution of oracle
   * script
   */
  raw_requests?: RawRequestAmino[];
  /**
   * IBCChannel is an IBC channel info of the other chain, which contains a
   * channel and a port to allow bandchain connect to that chain. This field
   * allows other chain be able to request data from bandchain via IBC.
   */
  ibc_channel?: IBCChannelAmino;
  /** ExecuteGas is amount of gas to reserve for executing */
  execute_gas?: string;
}
export interface RequestAminoMsg {
  type: "/oracle.v1.Request";
  value: RequestAmino;
}
/** Request is the data structure for storing requests in the storage. */
export interface RequestSDKType {
  oracle_script_id: bigint;
  calldata: Uint8Array;
  requested_validators: string[];
  min_count: bigint;
  request_height: bigint;
  request_time: bigint;
  client_id: string;
  raw_requests: RawRequestSDKType[];
  ibc_channel?: IBCChannelSDKType;
  execute_gas: bigint;
}
/** Report is the data structure for storing reports in the storage. */
export interface Report {
  /** Validator is a validator address who submit the report */
  validator: string;
  /**
   * InBeforeResolve indicates whether the report is submitted before the
   * request resolved
   */
  inBeforeResolve: boolean;
  /**
   * RawReports is list of raw reports provided by the validator.
   * Each raw report has different external ID
   */
  rawReports: RawReport[];
}
export interface ReportProtoMsg {
  typeUrl: "/oracle.v1.Report";
  value: Uint8Array;
}
/** Report is the data structure for storing reports in the storage. */
export interface ReportAmino {
  /** Validator is a validator address who submit the report */
  validator?: string;
  /**
   * InBeforeResolve indicates whether the report is submitted before the
   * request resolved
   */
  in_before_resolve?: boolean;
  /**
   * RawReports is list of raw reports provided by the validator.
   * Each raw report has different external ID
   */
  raw_reports?: RawReportAmino[];
}
export interface ReportAminoMsg {
  type: "/oracle.v1.Report";
  value: ReportAmino;
}
/** Report is the data structure for storing reports in the storage. */
export interface ReportSDKType {
  validator: string;
  in_before_resolve: boolean;
  raw_reports: RawReportSDKType[];
}
/**
 * OracleRequestPacketData encodes an oracle request sent from other blockchains
 * to BandChain.
 */
export interface OracleRequestPacketData {
  /**
   * ClientID is the unique identifier of this oracle request, as specified by
   * the client. This same unique ID will be sent back to the requester with the
   * oracle response.
   */
  clientId: string;
  /**
   * OracleScriptID is the unique identifier of the oracle script to be
   * executed.
   */
  oracleScriptId: bigint;
  /**
   * Calldata is the OBI-encoded calldata bytes available for oracle executor to
   * read.
   */
  calldata: Uint8Array;
  /**
   * AskCount is the number of validators that are requested to respond to this
   * oracle request. Higher value means more security, at a higher gas cost.
   */
  askCount: bigint;
  /**
   * MinCount is the minimum number of validators necessary for the request to
   * proceed to the execution phase. Higher value means more security, at the
   * cost of liveness.
   */
  minCount: bigint;
  /**
   * FeeLimit is the maximum tokens that will be paid to all data source
   * providers.
   */
  feeLimit: Coin[];
  /** PrepareGas is amount of gas to pay to prepare raw requests */
  prepareGas: bigint;
  /** ExecuteGas is amount of gas to reserve for executing */
  executeGas: bigint;
}
export interface OracleRequestPacketDataProtoMsg {
  typeUrl: "/oracle.v1.OracleRequestPacketData";
  value: Uint8Array;
}
/**
 * OracleRequestPacketData encodes an oracle request sent from other blockchains
 * to BandChain.
 */
export interface OracleRequestPacketDataAmino {
  /**
   * ClientID is the unique identifier of this oracle request, as specified by
   * the client. This same unique ID will be sent back to the requester with the
   * oracle response.
   */
  client_id?: string;
  /**
   * OracleScriptID is the unique identifier of the oracle script to be
   * executed.
   */
  oracle_script_id?: string;
  /**
   * Calldata is the OBI-encoded calldata bytes available for oracle executor to
   * read.
   */
  calldata?: string;
  /**
   * AskCount is the number of validators that are requested to respond to this
   * oracle request. Higher value means more security, at a higher gas cost.
   */
  ask_count?: string;
  /**
   * MinCount is the minimum number of validators necessary for the request to
   * proceed to the execution phase. Higher value means more security, at the
   * cost of liveness.
   */
  min_count?: string;
  /**
   * FeeLimit is the maximum tokens that will be paid to all data source
   * providers.
   */
  fee_limit?: CoinAmino[];
  /** PrepareGas is amount of gas to pay to prepare raw requests */
  prepare_gas?: string;
  /** ExecuteGas is amount of gas to reserve for executing */
  execute_gas?: string;
}
export interface OracleRequestPacketDataAminoMsg {
  type: "/oracle.v1.OracleRequestPacketData";
  value: OracleRequestPacketDataAmino;
}
/**
 * OracleRequestPacketData encodes an oracle request sent from other blockchains
 * to BandChain.
 */
export interface OracleRequestPacketDataSDKType {
  client_id: string;
  oracle_script_id: bigint;
  calldata: Uint8Array;
  ask_count: bigint;
  min_count: bigint;
  fee_limit: CoinSDKType[];
  prepare_gas: bigint;
  execute_gas: bigint;
}
/**
 * OracleRequestPacketAcknowledgement encodes an oracle request acknowledgement
 * send back to requester chain.
 */
export interface OracleRequestPacketAcknowledgement {
  /** RequestID is BandChain's unique identifier for this oracle request. */
  requestId: bigint;
}
export interface OracleRequestPacketAcknowledgementProtoMsg {
  typeUrl: "/oracle.v1.OracleRequestPacketAcknowledgement";
  value: Uint8Array;
}
/**
 * OracleRequestPacketAcknowledgement encodes an oracle request acknowledgement
 * send back to requester chain.
 */
export interface OracleRequestPacketAcknowledgementAmino {
  /** RequestID is BandChain's unique identifier for this oracle request. */
  request_id?: string;
}
export interface OracleRequestPacketAcknowledgementAminoMsg {
  type: "/oracle.v1.OracleRequestPacketAcknowledgement";
  value: OracleRequestPacketAcknowledgementAmino;
}
/**
 * OracleRequestPacketAcknowledgement encodes an oracle request acknowledgement
 * send back to requester chain.
 */
export interface OracleRequestPacketAcknowledgementSDKType {
  request_id: bigint;
}
/**
 * OracleResponsePacketData encodes an oracle response from BandChain to the
 * requester.
 */
export interface OracleResponsePacketData {
  /**
   * ClientID is the unique identifier matched with that of the oracle request
   * packet.
   */
  clientId: string;
  /** RequestID is BandChain's unique identifier for this oracle request. */
  requestId: bigint;
  /**
   * AnsCount is the number of validators among to the asked validators that
   * actually responded to this oracle request prior to this oracle request
   * being resolved.
   */
  ansCount: bigint;
  /**
   * RequestTime is the UNIX epoch time at which the request was sent to
   * BandChain.
   */
  requestTime: bigint;
  /**
   * ResolveTime is the UNIX epoch time at which the request was resolved to the
   * final result.
   */
  resolveTime: bigint;
  /**
   * ResolveStatus is the status of this oracle request, which can be OK,
   * FAILURE, or EXPIRED.
   */
  resolveStatus: ResolveStatus;
  /**
   * Result is the final aggregated value encoded in OBI format. Only available
   * if status if OK.
   */
  result: Uint8Array;
}
export interface OracleResponsePacketDataProtoMsg {
  typeUrl: "/oracle.v1.OracleResponsePacketData";
  value: Uint8Array;
}
/**
 * OracleResponsePacketData encodes an oracle response from BandChain to the
 * requester.
 */
export interface OracleResponsePacketDataAmino {
  /**
   * ClientID is the unique identifier matched with that of the oracle request
   * packet.
   */
  client_id?: string;
  /** RequestID is BandChain's unique identifier for this oracle request. */
  request_id?: string;
  /**
   * AnsCount is the number of validators among to the asked validators that
   * actually responded to this oracle request prior to this oracle request
   * being resolved.
   */
  ans_count?: string;
  /**
   * RequestTime is the UNIX epoch time at which the request was sent to
   * BandChain.
   */
  request_time?: string;
  /**
   * ResolveTime is the UNIX epoch time at which the request was resolved to the
   * final result.
   */
  resolve_time?: string;
  /**
   * ResolveStatus is the status of this oracle request, which can be OK,
   * FAILURE, or EXPIRED.
   */
  resolve_status?: ResolveStatus;
  /**
   * Result is the final aggregated value encoded in OBI format. Only available
   * if status if OK.
   */
  result?: string;
}
export interface OracleResponsePacketDataAminoMsg {
  type: "/oracle.v1.OracleResponsePacketData";
  value: OracleResponsePacketDataAmino;
}
/**
 * OracleResponsePacketData encodes an oracle response from BandChain to the
 * requester.
 */
export interface OracleResponsePacketDataSDKType {
  client_id: string;
  request_id: bigint;
  ans_count: bigint;
  request_time: bigint;
  resolve_time: bigint;
  resolve_status: ResolveStatus;
  result: Uint8Array;
}
/** Result encodes a result of request and store in chain */
export interface Result {
  /**
   * ClientID is the unique identifier of this oracle request, as specified by
   * the client. This same unique ID will be sent back to the requester with the
   * oracle response.
   */
  clientId: string;
  /**
   * OracleScriptID is the unique identifier of the oracle script to be
   * executed.
   */
  oracleScriptId: bigint;
  /** Calldata is the calldata bytes available for oracle executor to read. */
  calldata: Uint8Array;
  /**
   * AskCount is the number of validators that are requested to respond to this
   * oracle request. Higher value means more security, at a higher gas cost.
   */
  askCount: bigint;
  /**
   * MinCount is the minimum number of validators necessary for the request to
   * proceed to the execution phase. Higher value means more security, at the
   * cost of liveness.
   */
  minCount: bigint;
  /** RequestID is BandChain's unique identifier for this oracle request. */
  requestId: bigint;
  /**
   * AnsCount is the number of validators among to the asked validators that
   * actually responded to this oracle request prior to this oracle request
   * being resolved.
   */
  ansCount: bigint;
  /**
   * RequestTime is the UNIX epoch time at which the request was sent to
   * BandChain.
   */
  requestTime: bigint;
  /**
   * ResolveTime is the UNIX epoch time at which the request was resolved to the
   * final result.
   */
  resolveTime: bigint;
  /**
   * ResolveStatus is the status of this oracle request, which can be OK,
   * FAILURE, or EXPIRED.
   */
  resolveStatus: ResolveStatus;
  /** Result is the final aggregated value only available if status if OK. */
  result: Uint8Array;
}
export interface ResultProtoMsg {
  typeUrl: "/oracle.v1.Result";
  value: Uint8Array;
}
/** Result encodes a result of request and store in chain */
export interface ResultAmino {
  /**
   * ClientID is the unique identifier of this oracle request, as specified by
   * the client. This same unique ID will be sent back to the requester with the
   * oracle response.
   */
  client_id?: string;
  /**
   * OracleScriptID is the unique identifier of the oracle script to be
   * executed.
   */
  oracle_script_id?: string;
  /** Calldata is the calldata bytes available for oracle executor to read. */
  calldata?: string;
  /**
   * AskCount is the number of validators that are requested to respond to this
   * oracle request. Higher value means more security, at a higher gas cost.
   */
  ask_count?: string;
  /**
   * MinCount is the minimum number of validators necessary for the request to
   * proceed to the execution phase. Higher value means more security, at the
   * cost of liveness.
   */
  min_count?: string;
  /** RequestID is BandChain's unique identifier for this oracle request. */
  request_id?: string;
  /**
   * AnsCount is the number of validators among to the asked validators that
   * actually responded to this oracle request prior to this oracle request
   * being resolved.
   */
  ans_count?: string;
  /**
   * RequestTime is the UNIX epoch time at which the request was sent to
   * BandChain.
   */
  request_time?: string;
  /**
   * ResolveTime is the UNIX epoch time at which the request was resolved to the
   * final result.
   */
  resolve_time?: string;
  /**
   * ResolveStatus is the status of this oracle request, which can be OK,
   * FAILURE, or EXPIRED.
   */
  resolve_status?: ResolveStatus;
  /** Result is the final aggregated value only available if status if OK. */
  result?: string;
}
export interface ResultAminoMsg {
  type: "/oracle.v1.Result";
  value: ResultAmino;
}
/** Result encodes a result of request and store in chain */
export interface ResultSDKType {
  client_id: string;
  oracle_script_id: bigint;
  calldata: Uint8Array;
  ask_count: bigint;
  min_count: bigint;
  request_id: bigint;
  ans_count: bigint;
  request_time: bigint;
  resolve_time: bigint;
  resolve_status: ResolveStatus;
  result: Uint8Array;
}
/** ValidatorStatus maintains whether a validator is an active oracle provider. */
export interface ValidatorStatus {
  /**
   * IsActive is a boolean indicating active status of validator.
   * The validator will be deactivated when they are unable to send reports
   * to fulfill oracle request before the request expired.
   */
  isActive: boolean;
  /** Since is a block timestamp when validator has been activated/deactivated */
  since: Date;
}
export interface ValidatorStatusProtoMsg {
  typeUrl: "/oracle.v1.ValidatorStatus";
  value: Uint8Array;
}
/** ValidatorStatus maintains whether a validator is an active oracle provider. */
export interface ValidatorStatusAmino {
  /**
   * IsActive is a boolean indicating active status of validator.
   * The validator will be deactivated when they are unable to send reports
   * to fulfill oracle request before the request expired.
   */
  is_active?: boolean;
  /** Since is a block timestamp when validator has been activated/deactivated */
  since?: string;
}
export interface ValidatorStatusAminoMsg {
  type: "/oracle.v1.ValidatorStatus";
  value: ValidatorStatusAmino;
}
/** ValidatorStatus maintains whether a validator is an active oracle provider. */
export interface ValidatorStatusSDKType {
  is_active: boolean;
  since: Date;
}
/** ActiveValidator is information of currently active validator */
export interface ActiveValidator {
  /** Address is a validator address */
  address: string;
  /** Power is an amount of token that the validator is holding */
  power: bigint;
}
export interface ActiveValidatorProtoMsg {
  typeUrl: "/oracle.v1.ActiveValidator";
  value: Uint8Array;
}
/** ActiveValidator is information of currently active validator */
export interface ActiveValidatorAmino {
  /** Address is a validator address */
  address?: string;
  /** Power is an amount of token that the validator is holding */
  power?: string;
}
export interface ActiveValidatorAminoMsg {
  type: "/oracle.v1.ActiveValidator";
  value: ActiveValidatorAmino;
}
/** ActiveValidator is information of currently active validator */
export interface ActiveValidatorSDKType {
  address: string;
  power: bigint;
}
/** Params is the data structure that keeps the parameters of the oracle module. */
export interface Params {
  /**
   * MaxRawRequestCount is the maximum number of data source raw requests a
   * request can make.
   */
  maxRawRequestCount: bigint;
  /** MaxAskCount is the maximum number of validators a request can target. */
  maxAskCount: bigint;
  /** MaxCalldataSize is the maximum size limit of calldata (bytes) in a request. */
  maxCalldataSize: bigint;
  /**
   * MaxReportDataSize is the maximum size limit of report data (bytes) in a
   * report.
   */
  maxReportDataSize: bigint;
  /**
   * ExpirationBlockCount is the number of blocks a request stays valid before
   * it gets expired due to insufficient reports.
   */
  expirationBlockCount: bigint;
  /**
   * BaseOwasmGas is the base amount of Cosmos-SDK gas charged for owasm
   * execution.
   */
  baseOwasmGas: bigint;
  /**
   * PerValidatorRequestGas is the amount of Cosmos-SDK gas charged per
   * requested validator.
   */
  perValidatorRequestGas: bigint;
  /**
   * SamplingTryCount the number of validator sampling tries to pick the highest
   * voting power subset of validators to perform an oracle task.
   */
  samplingTryCount: bigint;
  /**
   * OracleRewardPercentage is the percentage of block rewards allocated to
   * active oracle validators.
   */
  oracleRewardPercentage: bigint;
  /**
   * InactivePenaltyDuration is the duration period where a validator cannot
   * activate back after missing an oracle report.
   */
  inactivePenaltyDuration: bigint;
  /**
   * IBCRequestEnabled is a flag indicating whether sending oracle request via
   * IBC is allowed
   */
  ibcRequestEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/oracle.v1.Params";
  value: Uint8Array;
}
/** Params is the data structure that keeps the parameters of the oracle module. */
export interface ParamsAmino {
  /**
   * MaxRawRequestCount is the maximum number of data source raw requests a
   * request can make.
   */
  max_raw_request_count?: string;
  /** MaxAskCount is the maximum number of validators a request can target. */
  max_ask_count?: string;
  /** MaxCalldataSize is the maximum size limit of calldata (bytes) in a request. */
  max_calldata_size?: string;
  /**
   * MaxReportDataSize is the maximum size limit of report data (bytes) in a
   * report.
   */
  max_report_data_size?: string;
  /**
   * ExpirationBlockCount is the number of blocks a request stays valid before
   * it gets expired due to insufficient reports.
   */
  expiration_block_count?: string;
  /**
   * BaseOwasmGas is the base amount of Cosmos-SDK gas charged for owasm
   * execution.
   */
  base_owasm_gas?: string;
  /**
   * PerValidatorRequestGas is the amount of Cosmos-SDK gas charged per
   * requested validator.
   */
  per_validator_request_gas?: string;
  /**
   * SamplingTryCount the number of validator sampling tries to pick the highest
   * voting power subset of validators to perform an oracle task.
   */
  sampling_try_count?: string;
  /**
   * OracleRewardPercentage is the percentage of block rewards allocated to
   * active oracle validators.
   */
  oracle_reward_percentage?: string;
  /**
   * InactivePenaltyDuration is the duration period where a validator cannot
   * activate back after missing an oracle report.
   */
  inactive_penalty_duration?: string;
  /**
   * IBCRequestEnabled is a flag indicating whether sending oracle request via
   * IBC is allowed
   */
  ibc_request_enabled?: boolean;
}
export interface ParamsAminoMsg {
  type: "/oracle.v1.Params";
  value: ParamsAmino;
}
/** Params is the data structure that keeps the parameters of the oracle module. */
export interface ParamsSDKType {
  max_raw_request_count: bigint;
  max_ask_count: bigint;
  max_calldata_size: bigint;
  max_report_data_size: bigint;
  expiration_block_count: bigint;
  base_owasm_gas: bigint;
  per_validator_request_gas: bigint;
  sampling_try_count: bigint;
  oracle_reward_percentage: bigint;
  inactive_penalty_duration: bigint;
  ibc_request_enabled: boolean;
}
/** PendingResolveList is a list of requests that are waiting to be resolved */
export interface PendingResolveList {
  /** RequestIDs is a list of request IDs that are waiting to be resolved */
  requestIds: bigint[];
}
export interface PendingResolveListProtoMsg {
  typeUrl: "/oracle.v1.PendingResolveList";
  value: Uint8Array;
}
/** PendingResolveList is a list of requests that are waiting to be resolved */
export interface PendingResolveListAmino {
  /** RequestIDs is a list of request IDs that are waiting to be resolved */
  request_ids?: string[];
}
export interface PendingResolveListAminoMsg {
  type: "/oracle.v1.PendingResolveList";
  value: PendingResolveListAmino;
}
/** PendingResolveList is a list of requests that are waiting to be resolved */
export interface PendingResolveListSDKType {
  request_ids: bigint[];
}
/**
 * IBCChannel is information of IBC protocol to allow communicating with other
 * chain
 */
export interface IBCChannel {
  /**
   * PortID is port ID used for sending response packet when request is
   * resolved.
   */
  portId: string;
  /**
   * ChannelID is channel ID used for sending response packet when request is
   * resolved.
   */
  channelId: string;
}
export interface IBCChannelProtoMsg {
  typeUrl: "/oracle.v1.IBCChannel";
  value: Uint8Array;
}
/**
 * IBCChannel is information of IBC protocol to allow communicating with other
 * chain
 */
export interface IBCChannelAmino {
  /**
   * PortID is port ID used for sending response packet when request is
   * resolved.
   */
  port_id?: string;
  /**
   * ChannelID is channel ID used for sending response packet when request is
   * resolved.
   */
  channel_id?: string;
}
export interface IBCChannelAminoMsg {
  type: "/oracle.v1.IBCChannel";
  value: IBCChannelAmino;
}
/**
 * IBCChannel is information of IBC protocol to allow communicating with other
 * chain
 */
export interface IBCChannelSDKType {
  port_id: string;
  channel_id: string;
}
/**
 * RequestVerification is a message that is constructed and signed by a reporter
 * to be used as a part of verification of oracle request.
 */
export interface RequestVerification {
  /** ChainID is the ID of targeted chain */
  chainId: string;
  /** Validator is an validator address */
  validator: string;
  /** RequestID is the targeted request ID */
  requestId: bigint;
  /** ExternalID is the oracle's external ID of data source */
  externalId: bigint;
  /** DataSourceID is the ID of data source */
  dataSourceId: bigint;
}
export interface RequestVerificationProtoMsg {
  typeUrl: "/oracle.v1.RequestVerification";
  value: Uint8Array;
}
/**
 * RequestVerification is a message that is constructed and signed by a reporter
 * to be used as a part of verification of oracle request.
 */
export interface RequestVerificationAmino {
  /** ChainID is the ID of targeted chain */
  chain_id?: string;
  /** Validator is an validator address */
  validator?: string;
  /** RequestID is the targeted request ID */
  request_id?: string;
  /** ExternalID is the oracle's external ID of data source */
  external_id?: string;
  /** DataSourceID is the ID of data source */
  data_source_id?: string;
}
export interface RequestVerificationAminoMsg {
  type: "/oracle.v1.RequestVerification";
  value: RequestVerificationAmino;
}
/**
 * RequestVerification is a message that is constructed and signed by a reporter
 * to be used as a part of verification of oracle request.
 */
export interface RequestVerificationSDKType {
  chain_id: string;
  validator: string;
  request_id: bigint;
  external_id: bigint;
  data_source_id: bigint;
}
/** PriceResult is a result from standard price reference */
export interface PriceResult {
  /**
   * Symbol is unit of data indicating what the data is. It is price currencies
   * for this case.
   */
  symbol: string;
  /**
   * Multiplier is a number used for left-shifting value to eliminate decimal
   * digits
   */
  multiplier: bigint;
  /** Px is the actual data, which is rate number multiplied by the multiplier. */
  px: bigint;
  /** RequestID is oracle request ID that contains this price */
  requestId: bigint;
  /**
   * ResolveTime is epoch timestamp indicating the time when the request had
   * been resolved
   */
  resolveTime: bigint;
}
export interface PriceResultProtoMsg {
  typeUrl: "/oracle.v1.PriceResult";
  value: Uint8Array;
}
/** PriceResult is a result from standard price reference */
export interface PriceResultAmino {
  /**
   * Symbol is unit of data indicating what the data is. It is price currencies
   * for this case.
   */
  symbol?: string;
  /**
   * Multiplier is a number used for left-shifting value to eliminate decimal
   * digits
   */
  multiplier?: string;
  /** Px is the actual data, which is rate number multiplied by the multiplier. */
  px?: string;
  /** RequestID is oracle request ID that contains this price */
  request_id?: string;
  /**
   * ResolveTime is epoch timestamp indicating the time when the request had
   * been resolved
   */
  resolve_time?: string;
}
export interface PriceResultAminoMsg {
  type: "/oracle.v1.PriceResult";
  value: PriceResultAmino;
}
/** PriceResult is a result from standard price reference */
export interface PriceResultSDKType {
  symbol: string;
  multiplier: bigint;
  px: bigint;
  request_id: bigint;
  resolve_time: bigint;
}
function createBaseDataSource(): DataSource {
  return {
    owner: "",
    name: "",
    description: "",
    filename: "",
    treasury: "",
    fee: []
  };
}
export const DataSource = {
  typeUrl: "/oracle.v1.DataSource",
  encode(message: DataSource, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.filename !== "") {
      writer.uint32(34).string(message.filename);
    }
    if (message.treasury !== "") {
      writer.uint32(42).string(message.treasury);
    }
    for (const v of message.fee) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DataSource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.filename = reader.string();
          break;
        case 5:
          message.treasury = reader.string();
          break;
        case 6:
          message.fee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DataSource>): DataSource {
    const message = createBaseDataSource();
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.filename = object.filename ?? "";
    message.treasury = object.treasury ?? "";
    message.fee = object.fee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DataSourceAmino): DataSource {
    const message = createBaseDataSource();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.filename !== undefined && object.filename !== null) {
      message.filename = object.filename;
    }
    if (object.treasury !== undefined && object.treasury !== null) {
      message.treasury = object.treasury;
    }
    message.fee = object.fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DataSource): DataSourceAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.filename = message.filename === "" ? undefined : message.filename;
    obj.treasury = message.treasury === "" ? undefined : message.treasury;
    if (message.fee) {
      obj.fee = message.fee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee = message.fee;
    }
    return obj;
  },
  fromAminoMsg(object: DataSourceAminoMsg): DataSource {
    return DataSource.fromAmino(object.value);
  },
  fromProtoMsg(message: DataSourceProtoMsg): DataSource {
    return DataSource.decode(message.value);
  },
  toProto(message: DataSource): Uint8Array {
    return DataSource.encode(message).finish();
  },
  toProtoMsg(message: DataSource): DataSourceProtoMsg {
    return {
      typeUrl: "/oracle.v1.DataSource",
      value: DataSource.encode(message).finish()
    };
  }
};
function createBaseOracleScript(): OracleScript {
  return {
    owner: "",
    name: "",
    description: "",
    filename: "",
    schema: "",
    sourceCodeUrl: ""
  };
}
export const OracleScript = {
  typeUrl: "/oracle.v1.OracleScript",
  encode(message: OracleScript, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.filename !== "") {
      writer.uint32(34).string(message.filename);
    }
    if (message.schema !== "") {
      writer.uint32(42).string(message.schema);
    }
    if (message.sourceCodeUrl !== "") {
      writer.uint32(50).string(message.sourceCodeUrl);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OracleScript {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleScript();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.filename = reader.string();
          break;
        case 5:
          message.schema = reader.string();
          break;
        case 6:
          message.sourceCodeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OracleScript>): OracleScript {
    const message = createBaseOracleScript();
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.filename = object.filename ?? "";
    message.schema = object.schema ?? "";
    message.sourceCodeUrl = object.sourceCodeUrl ?? "";
    return message;
  },
  fromAmino(object: OracleScriptAmino): OracleScript {
    const message = createBaseOracleScript();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.filename !== undefined && object.filename !== null) {
      message.filename = object.filename;
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = object.schema;
    }
    if (object.source_code_url !== undefined && object.source_code_url !== null) {
      message.sourceCodeUrl = object.source_code_url;
    }
    return message;
  },
  toAmino(message: OracleScript): OracleScriptAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.filename = message.filename === "" ? undefined : message.filename;
    obj.schema = message.schema === "" ? undefined : message.schema;
    obj.source_code_url = message.sourceCodeUrl === "" ? undefined : message.sourceCodeUrl;
    return obj;
  },
  fromAminoMsg(object: OracleScriptAminoMsg): OracleScript {
    return OracleScript.fromAmino(object.value);
  },
  fromProtoMsg(message: OracleScriptProtoMsg): OracleScript {
    return OracleScript.decode(message.value);
  },
  toProto(message: OracleScript): Uint8Array {
    return OracleScript.encode(message).finish();
  },
  toProtoMsg(message: OracleScript): OracleScriptProtoMsg {
    return {
      typeUrl: "/oracle.v1.OracleScript",
      value: OracleScript.encode(message).finish()
    };
  }
};
function createBaseRawRequest(): RawRequest {
  return {
    externalId: BigInt(0),
    dataSourceId: BigInt(0),
    calldata: new Uint8Array()
  };
}
export const RawRequest = {
  typeUrl: "/oracle.v1.RawRequest",
  encode(message: RawRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.externalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.externalId);
    }
    if (message.dataSourceId !== BigInt(0)) {
      writer.uint32(16).uint64(message.dataSourceId);
    }
    if (message.calldata.length !== 0) {
      writer.uint32(26).bytes(message.calldata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RawRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRawRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalId = reader.uint64();
          break;
        case 2:
          message.dataSourceId = reader.uint64();
          break;
        case 3:
          message.calldata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RawRequest>): RawRequest {
    const message = createBaseRawRequest();
    message.externalId = object.externalId !== undefined && object.externalId !== null ? BigInt(object.externalId.toString()) : BigInt(0);
    message.dataSourceId = object.dataSourceId !== undefined && object.dataSourceId !== null ? BigInt(object.dataSourceId.toString()) : BigInt(0);
    message.calldata = object.calldata ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RawRequestAmino): RawRequest {
    const message = createBaseRawRequest();
    if (object.external_id !== undefined && object.external_id !== null) {
      message.externalId = BigInt(object.external_id);
    }
    if (object.data_source_id !== undefined && object.data_source_id !== null) {
      message.dataSourceId = BigInt(object.data_source_id);
    }
    if (object.calldata !== undefined && object.calldata !== null) {
      message.calldata = bytesFromBase64(object.calldata);
    }
    return message;
  },
  toAmino(message: RawRequest): RawRequestAmino {
    const obj: any = {};
    obj.external_id = message.externalId !== BigInt(0) ? message.externalId?.toString() : undefined;
    obj.data_source_id = message.dataSourceId !== BigInt(0) ? message.dataSourceId?.toString() : undefined;
    obj.calldata = message.calldata ? base64FromBytes(message.calldata) : undefined;
    return obj;
  },
  fromAminoMsg(object: RawRequestAminoMsg): RawRequest {
    return RawRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RawRequestProtoMsg): RawRequest {
    return RawRequest.decode(message.value);
  },
  toProto(message: RawRequest): Uint8Array {
    return RawRequest.encode(message).finish();
  },
  toProtoMsg(message: RawRequest): RawRequestProtoMsg {
    return {
      typeUrl: "/oracle.v1.RawRequest",
      value: RawRequest.encode(message).finish()
    };
  }
};
function createBaseRawReport(): RawReport {
  return {
    externalId: BigInt(0),
    exitCode: 0,
    data: new Uint8Array()
  };
}
export const RawReport = {
  typeUrl: "/oracle.v1.RawReport",
  encode(message: RawReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.externalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.externalId);
    }
    if (message.exitCode !== 0) {
      writer.uint32(16).uint32(message.exitCode);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RawReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRawReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalId = reader.uint64();
          break;
        case 2:
          message.exitCode = reader.uint32();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RawReport>): RawReport {
    const message = createBaseRawReport();
    message.externalId = object.externalId !== undefined && object.externalId !== null ? BigInt(object.externalId.toString()) : BigInt(0);
    message.exitCode = object.exitCode ?? 0;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RawReportAmino): RawReport {
    const message = createBaseRawReport();
    if (object.external_id !== undefined && object.external_id !== null) {
      message.externalId = BigInt(object.external_id);
    }
    if (object.exit_code !== undefined && object.exit_code !== null) {
      message.exitCode = object.exit_code;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: RawReport): RawReportAmino {
    const obj: any = {};
    obj.external_id = message.externalId !== BigInt(0) ? message.externalId?.toString() : undefined;
    obj.exit_code = message.exitCode === 0 ? undefined : message.exitCode;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: RawReportAminoMsg): RawReport {
    return RawReport.fromAmino(object.value);
  },
  fromProtoMsg(message: RawReportProtoMsg): RawReport {
    return RawReport.decode(message.value);
  },
  toProto(message: RawReport): Uint8Array {
    return RawReport.encode(message).finish();
  },
  toProtoMsg(message: RawReport): RawReportProtoMsg {
    return {
      typeUrl: "/oracle.v1.RawReport",
      value: RawReport.encode(message).finish()
    };
  }
};
function createBaseRequest(): Request {
  return {
    oracleScriptId: BigInt(0),
    calldata: new Uint8Array(),
    requestedValidators: [],
    minCount: BigInt(0),
    requestHeight: BigInt(0),
    requestTime: BigInt(0),
    clientId: "",
    rawRequests: [],
    ibcChannel: undefined,
    executeGas: BigInt(0)
  };
}
export const Request = {
  typeUrl: "/oracle.v1.Request",
  encode(message: Request, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracleScriptId !== BigInt(0)) {
      writer.uint32(8).uint64(message.oracleScriptId);
    }
    if (message.calldata.length !== 0) {
      writer.uint32(18).bytes(message.calldata);
    }
    for (const v of message.requestedValidators) {
      writer.uint32(26).string(v!);
    }
    if (message.minCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.minCount);
    }
    if (message.requestHeight !== BigInt(0)) {
      writer.uint32(40).int64(message.requestHeight);
    }
    if (message.requestTime !== BigInt(0)) {
      writer.uint32(48).int64(message.requestTime);
    }
    if (message.clientId !== "") {
      writer.uint32(58).string(message.clientId);
    }
    for (const v of message.rawRequests) {
      RawRequest.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.ibcChannel !== undefined) {
      IBCChannel.encode(message.ibcChannel, writer.uint32(74).fork()).ldelim();
    }
    if (message.executeGas !== BigInt(0)) {
      writer.uint32(80).uint64(message.executeGas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Request {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleScriptId = reader.uint64();
          break;
        case 2:
          message.calldata = reader.bytes();
          break;
        case 3:
          message.requestedValidators.push(reader.string());
          break;
        case 4:
          message.minCount = reader.uint64();
          break;
        case 5:
          message.requestHeight = reader.int64();
          break;
        case 6:
          message.requestTime = reader.int64();
          break;
        case 7:
          message.clientId = reader.string();
          break;
        case 8:
          message.rawRequests.push(RawRequest.decode(reader, reader.uint32()));
          break;
        case 9:
          message.ibcChannel = IBCChannel.decode(reader, reader.uint32());
          break;
        case 10:
          message.executeGas = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Request>): Request {
    const message = createBaseRequest();
    message.oracleScriptId = object.oracleScriptId !== undefined && object.oracleScriptId !== null ? BigInt(object.oracleScriptId.toString()) : BigInt(0);
    message.calldata = object.calldata ?? new Uint8Array();
    message.requestedValidators = object.requestedValidators?.map(e => e) || [];
    message.minCount = object.minCount !== undefined && object.minCount !== null ? BigInt(object.minCount.toString()) : BigInt(0);
    message.requestHeight = object.requestHeight !== undefined && object.requestHeight !== null ? BigInt(object.requestHeight.toString()) : BigInt(0);
    message.requestTime = object.requestTime !== undefined && object.requestTime !== null ? BigInt(object.requestTime.toString()) : BigInt(0);
    message.clientId = object.clientId ?? "";
    message.rawRequests = object.rawRequests?.map(e => RawRequest.fromPartial(e)) || [];
    message.ibcChannel = object.ibcChannel !== undefined && object.ibcChannel !== null ? IBCChannel.fromPartial(object.ibcChannel) : undefined;
    message.executeGas = object.executeGas !== undefined && object.executeGas !== null ? BigInt(object.executeGas.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RequestAmino): Request {
    const message = createBaseRequest();
    if (object.oracle_script_id !== undefined && object.oracle_script_id !== null) {
      message.oracleScriptId = BigInt(object.oracle_script_id);
    }
    if (object.calldata !== undefined && object.calldata !== null) {
      message.calldata = bytesFromBase64(object.calldata);
    }
    message.requestedValidators = object.requested_validators?.map(e => e) || [];
    if (object.min_count !== undefined && object.min_count !== null) {
      message.minCount = BigInt(object.min_count);
    }
    if (object.request_height !== undefined && object.request_height !== null) {
      message.requestHeight = BigInt(object.request_height);
    }
    if (object.request_time !== undefined && object.request_time !== null) {
      message.requestTime = BigInt(object.request_time);
    }
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    message.rawRequests = object.raw_requests?.map(e => RawRequest.fromAmino(e)) || [];
    if (object.ibc_channel !== undefined && object.ibc_channel !== null) {
      message.ibcChannel = IBCChannel.fromAmino(object.ibc_channel);
    }
    if (object.execute_gas !== undefined && object.execute_gas !== null) {
      message.executeGas = BigInt(object.execute_gas);
    }
    return message;
  },
  toAmino(message: Request): RequestAmino {
    const obj: any = {};
    obj.oracle_script_id = message.oracleScriptId !== BigInt(0) ? message.oracleScriptId?.toString() : undefined;
    obj.calldata = message.calldata ? base64FromBytes(message.calldata) : undefined;
    if (message.requestedValidators) {
      obj.requested_validators = message.requestedValidators.map(e => e);
    } else {
      obj.requested_validators = message.requestedValidators;
    }
    obj.min_count = message.minCount !== BigInt(0) ? message.minCount?.toString() : undefined;
    obj.request_height = message.requestHeight !== BigInt(0) ? message.requestHeight?.toString() : undefined;
    obj.request_time = message.requestTime !== BigInt(0) ? message.requestTime?.toString() : undefined;
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    if (message.rawRequests) {
      obj.raw_requests = message.rawRequests.map(e => e ? RawRequest.toAmino(e) : undefined);
    } else {
      obj.raw_requests = message.rawRequests;
    }
    obj.ibc_channel = message.ibcChannel ? IBCChannel.toAmino(message.ibcChannel) : undefined;
    obj.execute_gas = message.executeGas !== BigInt(0) ? message.executeGas?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestAminoMsg): Request {
    return Request.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestProtoMsg): Request {
    return Request.decode(message.value);
  },
  toProto(message: Request): Uint8Array {
    return Request.encode(message).finish();
  },
  toProtoMsg(message: Request): RequestProtoMsg {
    return {
      typeUrl: "/oracle.v1.Request",
      value: Request.encode(message).finish()
    };
  }
};
function createBaseReport(): Report {
  return {
    validator: "",
    inBeforeResolve: false,
    rawReports: []
  };
}
export const Report = {
  typeUrl: "/oracle.v1.Report",
  encode(message: Report, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.inBeforeResolve === true) {
      writer.uint32(16).bool(message.inBeforeResolve);
    }
    for (const v of message.rawReports) {
      RawReport.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Report {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.inBeforeResolve = reader.bool();
          break;
        case 3:
          message.rawReports.push(RawReport.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Report>): Report {
    const message = createBaseReport();
    message.validator = object.validator ?? "";
    message.inBeforeResolve = object.inBeforeResolve ?? false;
    message.rawReports = object.rawReports?.map(e => RawReport.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ReportAmino): Report {
    const message = createBaseReport();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.in_before_resolve !== undefined && object.in_before_resolve !== null) {
      message.inBeforeResolve = object.in_before_resolve;
    }
    message.rawReports = object.raw_reports?.map(e => RawReport.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Report): ReportAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.in_before_resolve = message.inBeforeResolve === false ? undefined : message.inBeforeResolve;
    if (message.rawReports) {
      obj.raw_reports = message.rawReports.map(e => e ? RawReport.toAmino(e) : undefined);
    } else {
      obj.raw_reports = message.rawReports;
    }
    return obj;
  },
  fromAminoMsg(object: ReportAminoMsg): Report {
    return Report.fromAmino(object.value);
  },
  fromProtoMsg(message: ReportProtoMsg): Report {
    return Report.decode(message.value);
  },
  toProto(message: Report): Uint8Array {
    return Report.encode(message).finish();
  },
  toProtoMsg(message: Report): ReportProtoMsg {
    return {
      typeUrl: "/oracle.v1.Report",
      value: Report.encode(message).finish()
    };
  }
};
function createBaseOracleRequestPacketData(): OracleRequestPacketData {
  return {
    clientId: "",
    oracleScriptId: BigInt(0),
    calldata: new Uint8Array(),
    askCount: BigInt(0),
    minCount: BigInt(0),
    feeLimit: [],
    prepareGas: BigInt(0),
    executeGas: BigInt(0)
  };
}
export const OracleRequestPacketData = {
  typeUrl: "/oracle.v1.OracleRequestPacketData",
  encode(message: OracleRequestPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.oracleScriptId !== BigInt(0)) {
      writer.uint32(16).uint64(message.oracleScriptId);
    }
    if (message.calldata.length !== 0) {
      writer.uint32(26).bytes(message.calldata);
    }
    if (message.askCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.askCount);
    }
    if (message.minCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.minCount);
    }
    for (const v of message.feeLimit) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.prepareGas !== BigInt(0)) {
      writer.uint32(56).uint64(message.prepareGas);
    }
    if (message.executeGas !== BigInt(0)) {
      writer.uint32(64).uint64(message.executeGas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OracleRequestPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleRequestPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.oracleScriptId = reader.uint64();
          break;
        case 3:
          message.calldata = reader.bytes();
          break;
        case 4:
          message.askCount = reader.uint64();
          break;
        case 5:
          message.minCount = reader.uint64();
          break;
        case 6:
          message.feeLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.prepareGas = reader.uint64();
          break;
        case 8:
          message.executeGas = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OracleRequestPacketData>): OracleRequestPacketData {
    const message = createBaseOracleRequestPacketData();
    message.clientId = object.clientId ?? "";
    message.oracleScriptId = object.oracleScriptId !== undefined && object.oracleScriptId !== null ? BigInt(object.oracleScriptId.toString()) : BigInt(0);
    message.calldata = object.calldata ?? new Uint8Array();
    message.askCount = object.askCount !== undefined && object.askCount !== null ? BigInt(object.askCount.toString()) : BigInt(0);
    message.minCount = object.minCount !== undefined && object.minCount !== null ? BigInt(object.minCount.toString()) : BigInt(0);
    message.feeLimit = object.feeLimit?.map(e => Coin.fromPartial(e)) || [];
    message.prepareGas = object.prepareGas !== undefined && object.prepareGas !== null ? BigInt(object.prepareGas.toString()) : BigInt(0);
    message.executeGas = object.executeGas !== undefined && object.executeGas !== null ? BigInt(object.executeGas.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: OracleRequestPacketDataAmino): OracleRequestPacketData {
    const message = createBaseOracleRequestPacketData();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.oracle_script_id !== undefined && object.oracle_script_id !== null) {
      message.oracleScriptId = BigInt(object.oracle_script_id);
    }
    if (object.calldata !== undefined && object.calldata !== null) {
      message.calldata = bytesFromBase64(object.calldata);
    }
    if (object.ask_count !== undefined && object.ask_count !== null) {
      message.askCount = BigInt(object.ask_count);
    }
    if (object.min_count !== undefined && object.min_count !== null) {
      message.minCount = BigInt(object.min_count);
    }
    message.feeLimit = object.fee_limit?.map(e => Coin.fromAmino(e)) || [];
    if (object.prepare_gas !== undefined && object.prepare_gas !== null) {
      message.prepareGas = BigInt(object.prepare_gas);
    }
    if (object.execute_gas !== undefined && object.execute_gas !== null) {
      message.executeGas = BigInt(object.execute_gas);
    }
    return message;
  },
  toAmino(message: OracleRequestPacketData): OracleRequestPacketDataAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.oracle_script_id = message.oracleScriptId !== BigInt(0) ? message.oracleScriptId?.toString() : undefined;
    obj.calldata = message.calldata ? base64FromBytes(message.calldata) : undefined;
    obj.ask_count = message.askCount !== BigInt(0) ? message.askCount?.toString() : undefined;
    obj.min_count = message.minCount !== BigInt(0) ? message.minCount?.toString() : undefined;
    if (message.feeLimit) {
      obj.fee_limit = message.feeLimit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_limit = message.feeLimit;
    }
    obj.prepare_gas = message.prepareGas !== BigInt(0) ? message.prepareGas?.toString() : undefined;
    obj.execute_gas = message.executeGas !== BigInt(0) ? message.executeGas?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OracleRequestPacketDataAminoMsg): OracleRequestPacketData {
    return OracleRequestPacketData.fromAmino(object.value);
  },
  fromProtoMsg(message: OracleRequestPacketDataProtoMsg): OracleRequestPacketData {
    return OracleRequestPacketData.decode(message.value);
  },
  toProto(message: OracleRequestPacketData): Uint8Array {
    return OracleRequestPacketData.encode(message).finish();
  },
  toProtoMsg(message: OracleRequestPacketData): OracleRequestPacketDataProtoMsg {
    return {
      typeUrl: "/oracle.v1.OracleRequestPacketData",
      value: OracleRequestPacketData.encode(message).finish()
    };
  }
};
function createBaseOracleRequestPacketAcknowledgement(): OracleRequestPacketAcknowledgement {
  return {
    requestId: BigInt(0)
  };
}
export const OracleRequestPacketAcknowledgement = {
  typeUrl: "/oracle.v1.OracleRequestPacketAcknowledgement",
  encode(message: OracleRequestPacketAcknowledgement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestId !== BigInt(0)) {
      writer.uint32(8).uint64(message.requestId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OracleRequestPacketAcknowledgement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleRequestPacketAcknowledgement();
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
  fromPartial(object: Partial<OracleRequestPacketAcknowledgement>): OracleRequestPacketAcknowledgement {
    const message = createBaseOracleRequestPacketAcknowledgement();
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: OracleRequestPacketAcknowledgementAmino): OracleRequestPacketAcknowledgement {
    const message = createBaseOracleRequestPacketAcknowledgement();
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    return message;
  },
  toAmino(message: OracleRequestPacketAcknowledgement): OracleRequestPacketAcknowledgementAmino {
    const obj: any = {};
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OracleRequestPacketAcknowledgementAminoMsg): OracleRequestPacketAcknowledgement {
    return OracleRequestPacketAcknowledgement.fromAmino(object.value);
  },
  fromProtoMsg(message: OracleRequestPacketAcknowledgementProtoMsg): OracleRequestPacketAcknowledgement {
    return OracleRequestPacketAcknowledgement.decode(message.value);
  },
  toProto(message: OracleRequestPacketAcknowledgement): Uint8Array {
    return OracleRequestPacketAcknowledgement.encode(message).finish();
  },
  toProtoMsg(message: OracleRequestPacketAcknowledgement): OracleRequestPacketAcknowledgementProtoMsg {
    return {
      typeUrl: "/oracle.v1.OracleRequestPacketAcknowledgement",
      value: OracleRequestPacketAcknowledgement.encode(message).finish()
    };
  }
};
function createBaseOracleResponsePacketData(): OracleResponsePacketData {
  return {
    clientId: "",
    requestId: BigInt(0),
    ansCount: BigInt(0),
    requestTime: BigInt(0),
    resolveTime: BigInt(0),
    resolveStatus: 0,
    result: new Uint8Array()
  };
}
export const OracleResponsePacketData = {
  typeUrl: "/oracle.v1.OracleResponsePacketData",
  encode(message: OracleResponsePacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(16).uint64(message.requestId);
    }
    if (message.ansCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.ansCount);
    }
    if (message.requestTime !== BigInt(0)) {
      writer.uint32(32).int64(message.requestTime);
    }
    if (message.resolveTime !== BigInt(0)) {
      writer.uint32(40).int64(message.resolveTime);
    }
    if (message.resolveStatus !== 0) {
      writer.uint32(48).int32(message.resolveStatus);
    }
    if (message.result.length !== 0) {
      writer.uint32(58).bytes(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OracleResponsePacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleResponsePacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.requestId = reader.uint64();
          break;
        case 3:
          message.ansCount = reader.uint64();
          break;
        case 4:
          message.requestTime = reader.int64();
          break;
        case 5:
          message.resolveTime = reader.int64();
          break;
        case 6:
          message.resolveStatus = reader.int32() as any;
          break;
        case 7:
          message.result = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OracleResponsePacketData>): OracleResponsePacketData {
    const message = createBaseOracleResponsePacketData();
    message.clientId = object.clientId ?? "";
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    message.ansCount = object.ansCount !== undefined && object.ansCount !== null ? BigInt(object.ansCount.toString()) : BigInt(0);
    message.requestTime = object.requestTime !== undefined && object.requestTime !== null ? BigInt(object.requestTime.toString()) : BigInt(0);
    message.resolveTime = object.resolveTime !== undefined && object.resolveTime !== null ? BigInt(object.resolveTime.toString()) : BigInt(0);
    message.resolveStatus = object.resolveStatus ?? 0;
    message.result = object.result ?? new Uint8Array();
    return message;
  },
  fromAmino(object: OracleResponsePacketDataAmino): OracleResponsePacketData {
    const message = createBaseOracleResponsePacketData();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    if (object.ans_count !== undefined && object.ans_count !== null) {
      message.ansCount = BigInt(object.ans_count);
    }
    if (object.request_time !== undefined && object.request_time !== null) {
      message.requestTime = BigInt(object.request_time);
    }
    if (object.resolve_time !== undefined && object.resolve_time !== null) {
      message.resolveTime = BigInt(object.resolve_time);
    }
    if (object.resolve_status !== undefined && object.resolve_status !== null) {
      message.resolveStatus = object.resolve_status;
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = bytesFromBase64(object.result);
    }
    return message;
  },
  toAmino(message: OracleResponsePacketData): OracleResponsePacketDataAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    obj.ans_count = message.ansCount !== BigInt(0) ? message.ansCount?.toString() : undefined;
    obj.request_time = message.requestTime !== BigInt(0) ? message.requestTime?.toString() : undefined;
    obj.resolve_time = message.resolveTime !== BigInt(0) ? message.resolveTime?.toString() : undefined;
    obj.resolve_status = message.resolveStatus === 0 ? undefined : message.resolveStatus;
    obj.result = message.result ? base64FromBytes(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: OracleResponsePacketDataAminoMsg): OracleResponsePacketData {
    return OracleResponsePacketData.fromAmino(object.value);
  },
  fromProtoMsg(message: OracleResponsePacketDataProtoMsg): OracleResponsePacketData {
    return OracleResponsePacketData.decode(message.value);
  },
  toProto(message: OracleResponsePacketData): Uint8Array {
    return OracleResponsePacketData.encode(message).finish();
  },
  toProtoMsg(message: OracleResponsePacketData): OracleResponsePacketDataProtoMsg {
    return {
      typeUrl: "/oracle.v1.OracleResponsePacketData",
      value: OracleResponsePacketData.encode(message).finish()
    };
  }
};
function createBaseResult(): Result {
  return {
    clientId: "",
    oracleScriptId: BigInt(0),
    calldata: new Uint8Array(),
    askCount: BigInt(0),
    minCount: BigInt(0),
    requestId: BigInt(0),
    ansCount: BigInt(0),
    requestTime: BigInt(0),
    resolveTime: BigInt(0),
    resolveStatus: 0,
    result: new Uint8Array()
  };
}
export const Result = {
  typeUrl: "/oracle.v1.Result",
  encode(message: Result, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.oracleScriptId !== BigInt(0)) {
      writer.uint32(16).uint64(message.oracleScriptId);
    }
    if (message.calldata.length !== 0) {
      writer.uint32(26).bytes(message.calldata);
    }
    if (message.askCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.askCount);
    }
    if (message.minCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.minCount);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(48).uint64(message.requestId);
    }
    if (message.ansCount !== BigInt(0)) {
      writer.uint32(56).uint64(message.ansCount);
    }
    if (message.requestTime !== BigInt(0)) {
      writer.uint32(64).int64(message.requestTime);
    }
    if (message.resolveTime !== BigInt(0)) {
      writer.uint32(72).int64(message.resolveTime);
    }
    if (message.resolveStatus !== 0) {
      writer.uint32(80).int32(message.resolveStatus);
    }
    if (message.result.length !== 0) {
      writer.uint32(90).bytes(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Result {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.oracleScriptId = reader.uint64();
          break;
        case 3:
          message.calldata = reader.bytes();
          break;
        case 4:
          message.askCount = reader.uint64();
          break;
        case 5:
          message.minCount = reader.uint64();
          break;
        case 6:
          message.requestId = reader.uint64();
          break;
        case 7:
          message.ansCount = reader.uint64();
          break;
        case 8:
          message.requestTime = reader.int64();
          break;
        case 9:
          message.resolveTime = reader.int64();
          break;
        case 10:
          message.resolveStatus = reader.int32() as any;
          break;
        case 11:
          message.result = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Result>): Result {
    const message = createBaseResult();
    message.clientId = object.clientId ?? "";
    message.oracleScriptId = object.oracleScriptId !== undefined && object.oracleScriptId !== null ? BigInt(object.oracleScriptId.toString()) : BigInt(0);
    message.calldata = object.calldata ?? new Uint8Array();
    message.askCount = object.askCount !== undefined && object.askCount !== null ? BigInt(object.askCount.toString()) : BigInt(0);
    message.minCount = object.minCount !== undefined && object.minCount !== null ? BigInt(object.minCount.toString()) : BigInt(0);
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    message.ansCount = object.ansCount !== undefined && object.ansCount !== null ? BigInt(object.ansCount.toString()) : BigInt(0);
    message.requestTime = object.requestTime !== undefined && object.requestTime !== null ? BigInt(object.requestTime.toString()) : BigInt(0);
    message.resolveTime = object.resolveTime !== undefined && object.resolveTime !== null ? BigInt(object.resolveTime.toString()) : BigInt(0);
    message.resolveStatus = object.resolveStatus ?? 0;
    message.result = object.result ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResultAmino): Result {
    const message = createBaseResult();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.oracle_script_id !== undefined && object.oracle_script_id !== null) {
      message.oracleScriptId = BigInt(object.oracle_script_id);
    }
    if (object.calldata !== undefined && object.calldata !== null) {
      message.calldata = bytesFromBase64(object.calldata);
    }
    if (object.ask_count !== undefined && object.ask_count !== null) {
      message.askCount = BigInt(object.ask_count);
    }
    if (object.min_count !== undefined && object.min_count !== null) {
      message.minCount = BigInt(object.min_count);
    }
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    if (object.ans_count !== undefined && object.ans_count !== null) {
      message.ansCount = BigInt(object.ans_count);
    }
    if (object.request_time !== undefined && object.request_time !== null) {
      message.requestTime = BigInt(object.request_time);
    }
    if (object.resolve_time !== undefined && object.resolve_time !== null) {
      message.resolveTime = BigInt(object.resolve_time);
    }
    if (object.resolve_status !== undefined && object.resolve_status !== null) {
      message.resolveStatus = object.resolve_status;
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = bytesFromBase64(object.result);
    }
    return message;
  },
  toAmino(message: Result): ResultAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.oracle_script_id = message.oracleScriptId !== BigInt(0) ? message.oracleScriptId?.toString() : undefined;
    obj.calldata = message.calldata ? base64FromBytes(message.calldata) : undefined;
    obj.ask_count = message.askCount !== BigInt(0) ? message.askCount?.toString() : undefined;
    obj.min_count = message.minCount !== BigInt(0) ? message.minCount?.toString() : undefined;
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    obj.ans_count = message.ansCount !== BigInt(0) ? message.ansCount?.toString() : undefined;
    obj.request_time = message.requestTime !== BigInt(0) ? message.requestTime?.toString() : undefined;
    obj.resolve_time = message.resolveTime !== BigInt(0) ? message.resolveTime?.toString() : undefined;
    obj.resolve_status = message.resolveStatus === 0 ? undefined : message.resolveStatus;
    obj.result = message.result ? base64FromBytes(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResultAminoMsg): Result {
    return Result.fromAmino(object.value);
  },
  fromProtoMsg(message: ResultProtoMsg): Result {
    return Result.decode(message.value);
  },
  toProto(message: Result): Uint8Array {
    return Result.encode(message).finish();
  },
  toProtoMsg(message: Result): ResultProtoMsg {
    return {
      typeUrl: "/oracle.v1.Result",
      value: Result.encode(message).finish()
    };
  }
};
function createBaseValidatorStatus(): ValidatorStatus {
  return {
    isActive: false,
    since: new Date()
  };
}
export const ValidatorStatus = {
  typeUrl: "/oracle.v1.ValidatorStatus",
  encode(message: ValidatorStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isActive === true) {
      writer.uint32(8).bool(message.isActive);
    }
    if (message.since !== undefined) {
      Timestamp.encode(toTimestamp(message.since), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isActive = reader.bool();
          break;
        case 2:
          message.since = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ValidatorStatus>): ValidatorStatus {
    const message = createBaseValidatorStatus();
    message.isActive = object.isActive ?? false;
    message.since = object.since ?? undefined;
    return message;
  },
  fromAmino(object: ValidatorStatusAmino): ValidatorStatus {
    const message = createBaseValidatorStatus();
    if (object.is_active !== undefined && object.is_active !== null) {
      message.isActive = object.is_active;
    }
    if (object.since !== undefined && object.since !== null) {
      message.since = fromTimestamp(Timestamp.fromAmino(object.since));
    }
    return message;
  },
  toAmino(message: ValidatorStatus): ValidatorStatusAmino {
    const obj: any = {};
    obj.is_active = message.isActive === false ? undefined : message.isActive;
    obj.since = message.since ? Timestamp.toAmino(toTimestamp(message.since)) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorStatusAminoMsg): ValidatorStatus {
    return ValidatorStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorStatusProtoMsg): ValidatorStatus {
    return ValidatorStatus.decode(message.value);
  },
  toProto(message: ValidatorStatus): Uint8Array {
    return ValidatorStatus.encode(message).finish();
  },
  toProtoMsg(message: ValidatorStatus): ValidatorStatusProtoMsg {
    return {
      typeUrl: "/oracle.v1.ValidatorStatus",
      value: ValidatorStatus.encode(message).finish()
    };
  }
};
function createBaseActiveValidator(): ActiveValidator {
  return {
    address: "",
    power: BigInt(0)
  };
}
export const ActiveValidator = {
  typeUrl: "/oracle.v1.ActiveValidator",
  encode(message: ActiveValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).uint64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActiveValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.power = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActiveValidator>): ActiveValidator {
    const message = createBaseActiveValidator();
    message.address = object.address ?? "";
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ActiveValidatorAmino): ActiveValidator {
    const message = createBaseActiveValidator();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message: ActiveValidator): ActiveValidatorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.power = message.power !== BigInt(0) ? message.power?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ActiveValidatorAminoMsg): ActiveValidator {
    return ActiveValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: ActiveValidatorProtoMsg): ActiveValidator {
    return ActiveValidator.decode(message.value);
  },
  toProto(message: ActiveValidator): Uint8Array {
    return ActiveValidator.encode(message).finish();
  },
  toProtoMsg(message: ActiveValidator): ActiveValidatorProtoMsg {
    return {
      typeUrl: "/oracle.v1.ActiveValidator",
      value: ActiveValidator.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    maxRawRequestCount: BigInt(0),
    maxAskCount: BigInt(0),
    maxCalldataSize: BigInt(0),
    maxReportDataSize: BigInt(0),
    expirationBlockCount: BigInt(0),
    baseOwasmGas: BigInt(0),
    perValidatorRequestGas: BigInt(0),
    samplingTryCount: BigInt(0),
    oracleRewardPercentage: BigInt(0),
    inactivePenaltyDuration: BigInt(0),
    ibcRequestEnabled: false
  };
}
export const Params = {
  typeUrl: "/oracle.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxRawRequestCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxRawRequestCount);
    }
    if (message.maxAskCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxAskCount);
    }
    if (message.maxCalldataSize !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxCalldataSize);
    }
    if (message.maxReportDataSize !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxReportDataSize);
    }
    if (message.expirationBlockCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.expirationBlockCount);
    }
    if (message.baseOwasmGas !== BigInt(0)) {
      writer.uint32(48).uint64(message.baseOwasmGas);
    }
    if (message.perValidatorRequestGas !== BigInt(0)) {
      writer.uint32(56).uint64(message.perValidatorRequestGas);
    }
    if (message.samplingTryCount !== BigInt(0)) {
      writer.uint32(64).uint64(message.samplingTryCount);
    }
    if (message.oracleRewardPercentage !== BigInt(0)) {
      writer.uint32(72).uint64(message.oracleRewardPercentage);
    }
    if (message.inactivePenaltyDuration !== BigInt(0)) {
      writer.uint32(80).uint64(message.inactivePenaltyDuration);
    }
    if (message.ibcRequestEnabled === true) {
      writer.uint32(88).bool(message.ibcRequestEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxRawRequestCount = reader.uint64();
          break;
        case 2:
          message.maxAskCount = reader.uint64();
          break;
        case 3:
          message.maxCalldataSize = reader.uint64();
          break;
        case 4:
          message.maxReportDataSize = reader.uint64();
          break;
        case 5:
          message.expirationBlockCount = reader.uint64();
          break;
        case 6:
          message.baseOwasmGas = reader.uint64();
          break;
        case 7:
          message.perValidatorRequestGas = reader.uint64();
          break;
        case 8:
          message.samplingTryCount = reader.uint64();
          break;
        case 9:
          message.oracleRewardPercentage = reader.uint64();
          break;
        case 10:
          message.inactivePenaltyDuration = reader.uint64();
          break;
        case 11:
          message.ibcRequestEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.maxRawRequestCount = object.maxRawRequestCount !== undefined && object.maxRawRequestCount !== null ? BigInt(object.maxRawRequestCount.toString()) : BigInt(0);
    message.maxAskCount = object.maxAskCount !== undefined && object.maxAskCount !== null ? BigInt(object.maxAskCount.toString()) : BigInt(0);
    message.maxCalldataSize = object.maxCalldataSize !== undefined && object.maxCalldataSize !== null ? BigInt(object.maxCalldataSize.toString()) : BigInt(0);
    message.maxReportDataSize = object.maxReportDataSize !== undefined && object.maxReportDataSize !== null ? BigInt(object.maxReportDataSize.toString()) : BigInt(0);
    message.expirationBlockCount = object.expirationBlockCount !== undefined && object.expirationBlockCount !== null ? BigInt(object.expirationBlockCount.toString()) : BigInt(0);
    message.baseOwasmGas = object.baseOwasmGas !== undefined && object.baseOwasmGas !== null ? BigInt(object.baseOwasmGas.toString()) : BigInt(0);
    message.perValidatorRequestGas = object.perValidatorRequestGas !== undefined && object.perValidatorRequestGas !== null ? BigInt(object.perValidatorRequestGas.toString()) : BigInt(0);
    message.samplingTryCount = object.samplingTryCount !== undefined && object.samplingTryCount !== null ? BigInt(object.samplingTryCount.toString()) : BigInt(0);
    message.oracleRewardPercentage = object.oracleRewardPercentage !== undefined && object.oracleRewardPercentage !== null ? BigInt(object.oracleRewardPercentage.toString()) : BigInt(0);
    message.inactivePenaltyDuration = object.inactivePenaltyDuration !== undefined && object.inactivePenaltyDuration !== null ? BigInt(object.inactivePenaltyDuration.toString()) : BigInt(0);
    message.ibcRequestEnabled = object.ibcRequestEnabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_raw_request_count !== undefined && object.max_raw_request_count !== null) {
      message.maxRawRequestCount = BigInt(object.max_raw_request_count);
    }
    if (object.max_ask_count !== undefined && object.max_ask_count !== null) {
      message.maxAskCount = BigInt(object.max_ask_count);
    }
    if (object.max_calldata_size !== undefined && object.max_calldata_size !== null) {
      message.maxCalldataSize = BigInt(object.max_calldata_size);
    }
    if (object.max_report_data_size !== undefined && object.max_report_data_size !== null) {
      message.maxReportDataSize = BigInt(object.max_report_data_size);
    }
    if (object.expiration_block_count !== undefined && object.expiration_block_count !== null) {
      message.expirationBlockCount = BigInt(object.expiration_block_count);
    }
    if (object.base_owasm_gas !== undefined && object.base_owasm_gas !== null) {
      message.baseOwasmGas = BigInt(object.base_owasm_gas);
    }
    if (object.per_validator_request_gas !== undefined && object.per_validator_request_gas !== null) {
      message.perValidatorRequestGas = BigInt(object.per_validator_request_gas);
    }
    if (object.sampling_try_count !== undefined && object.sampling_try_count !== null) {
      message.samplingTryCount = BigInt(object.sampling_try_count);
    }
    if (object.oracle_reward_percentage !== undefined && object.oracle_reward_percentage !== null) {
      message.oracleRewardPercentage = BigInt(object.oracle_reward_percentage);
    }
    if (object.inactive_penalty_duration !== undefined && object.inactive_penalty_duration !== null) {
      message.inactivePenaltyDuration = BigInt(object.inactive_penalty_duration);
    }
    if (object.ibc_request_enabled !== undefined && object.ibc_request_enabled !== null) {
      message.ibcRequestEnabled = object.ibc_request_enabled;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_raw_request_count = message.maxRawRequestCount !== BigInt(0) ? message.maxRawRequestCount?.toString() : undefined;
    obj.max_ask_count = message.maxAskCount !== BigInt(0) ? message.maxAskCount?.toString() : undefined;
    obj.max_calldata_size = message.maxCalldataSize !== BigInt(0) ? message.maxCalldataSize?.toString() : undefined;
    obj.max_report_data_size = message.maxReportDataSize !== BigInt(0) ? message.maxReportDataSize?.toString() : undefined;
    obj.expiration_block_count = message.expirationBlockCount !== BigInt(0) ? message.expirationBlockCount?.toString() : undefined;
    obj.base_owasm_gas = message.baseOwasmGas !== BigInt(0) ? message.baseOwasmGas?.toString() : undefined;
    obj.per_validator_request_gas = message.perValidatorRequestGas !== BigInt(0) ? message.perValidatorRequestGas?.toString() : undefined;
    obj.sampling_try_count = message.samplingTryCount !== BigInt(0) ? message.samplingTryCount?.toString() : undefined;
    obj.oracle_reward_percentage = message.oracleRewardPercentage !== BigInt(0) ? message.oracleRewardPercentage?.toString() : undefined;
    obj.inactive_penalty_duration = message.inactivePenaltyDuration !== BigInt(0) ? message.inactivePenaltyDuration?.toString() : undefined;
    obj.ibc_request_enabled = message.ibcRequestEnabled === false ? undefined : message.ibcRequestEnabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/oracle.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBasePendingResolveList(): PendingResolveList {
  return {
    requestIds: []
  };
}
export const PendingResolveList = {
  typeUrl: "/oracle.v1.PendingResolveList",
  encode(message: PendingResolveList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.requestIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingResolveList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingResolveList();
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
  fromPartial(object: Partial<PendingResolveList>): PendingResolveList {
    const message = createBasePendingResolveList();
    message.requestIds = object.requestIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: PendingResolveListAmino): PendingResolveList {
    const message = createBasePendingResolveList();
    message.requestIds = object.request_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: PendingResolveList): PendingResolveListAmino {
    const obj: any = {};
    if (message.requestIds) {
      obj.request_ids = message.requestIds.map(e => e.toString());
    } else {
      obj.request_ids = message.requestIds;
    }
    return obj;
  },
  fromAminoMsg(object: PendingResolveListAminoMsg): PendingResolveList {
    return PendingResolveList.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingResolveListProtoMsg): PendingResolveList {
    return PendingResolveList.decode(message.value);
  },
  toProto(message: PendingResolveList): Uint8Array {
    return PendingResolveList.encode(message).finish();
  },
  toProtoMsg(message: PendingResolveList): PendingResolveListProtoMsg {
    return {
      typeUrl: "/oracle.v1.PendingResolveList",
      value: PendingResolveList.encode(message).finish()
    };
  }
};
function createBaseIBCChannel(): IBCChannel {
  return {
    portId: "",
    channelId: ""
  };
}
export const IBCChannel = {
  typeUrl: "/oracle.v1.IBCChannel",
  encode(message: IBCChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IBCChannel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IBCChannel>): IBCChannel {
    const message = createBaseIBCChannel();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: IBCChannelAmino): IBCChannel {
    const message = createBaseIBCChannel();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: IBCChannel): IBCChannelAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: IBCChannelAminoMsg): IBCChannel {
    return IBCChannel.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCChannelProtoMsg): IBCChannel {
    return IBCChannel.decode(message.value);
  },
  toProto(message: IBCChannel): Uint8Array {
    return IBCChannel.encode(message).finish();
  },
  toProtoMsg(message: IBCChannel): IBCChannelProtoMsg {
    return {
      typeUrl: "/oracle.v1.IBCChannel",
      value: IBCChannel.encode(message).finish()
    };
  }
};
function createBaseRequestVerification(): RequestVerification {
  return {
    chainId: "",
    validator: "",
    requestId: BigInt(0),
    externalId: BigInt(0),
    dataSourceId: BigInt(0)
  };
}
export const RequestVerification = {
  typeUrl: "/oracle.v1.RequestVerification",
  encode(message: RequestVerification, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestVerification {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestVerification();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestVerification>): RequestVerification {
    const message = createBaseRequestVerification();
    message.chainId = object.chainId ?? "";
    message.validator = object.validator ?? "";
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    message.externalId = object.externalId !== undefined && object.externalId !== null ? BigInt(object.externalId.toString()) : BigInt(0);
    message.dataSourceId = object.dataSourceId !== undefined && object.dataSourceId !== null ? BigInt(object.dataSourceId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RequestVerificationAmino): RequestVerification {
    const message = createBaseRequestVerification();
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
    return message;
  },
  toAmino(message: RequestVerification): RequestVerificationAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    obj.external_id = message.externalId !== BigInt(0) ? message.externalId?.toString() : undefined;
    obj.data_source_id = message.dataSourceId !== BigInt(0) ? message.dataSourceId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestVerificationAminoMsg): RequestVerification {
    return RequestVerification.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestVerificationProtoMsg): RequestVerification {
    return RequestVerification.decode(message.value);
  },
  toProto(message: RequestVerification): Uint8Array {
    return RequestVerification.encode(message).finish();
  },
  toProtoMsg(message: RequestVerification): RequestVerificationProtoMsg {
    return {
      typeUrl: "/oracle.v1.RequestVerification",
      value: RequestVerification.encode(message).finish()
    };
  }
};
function createBasePriceResult(): PriceResult {
  return {
    symbol: "",
    multiplier: BigInt(0),
    px: BigInt(0),
    requestId: BigInt(0),
    resolveTime: BigInt(0)
  };
}
export const PriceResult = {
  typeUrl: "/oracle.v1.PriceResult",
  encode(message: PriceResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.multiplier !== BigInt(0)) {
      writer.uint32(16).uint64(message.multiplier);
    }
    if (message.px !== BigInt(0)) {
      writer.uint32(24).uint64(message.px);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(32).uint64(message.requestId);
    }
    if (message.resolveTime !== BigInt(0)) {
      writer.uint32(40).int64(message.resolveTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PriceResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        case 2:
          message.multiplier = reader.uint64();
          break;
        case 3:
          message.px = reader.uint64();
          break;
        case 4:
          message.requestId = reader.uint64();
          break;
        case 5:
          message.resolveTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PriceResult>): PriceResult {
    const message = createBasePriceResult();
    message.symbol = object.symbol ?? "";
    message.multiplier = object.multiplier !== undefined && object.multiplier !== null ? BigInt(object.multiplier.toString()) : BigInt(0);
    message.px = object.px !== undefined && object.px !== null ? BigInt(object.px.toString()) : BigInt(0);
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    message.resolveTime = object.resolveTime !== undefined && object.resolveTime !== null ? BigInt(object.resolveTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PriceResultAmino): PriceResult {
    const message = createBasePriceResult();
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.multiplier !== undefined && object.multiplier !== null) {
      message.multiplier = BigInt(object.multiplier);
    }
    if (object.px !== undefined && object.px !== null) {
      message.px = BigInt(object.px);
    }
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    if (object.resolve_time !== undefined && object.resolve_time !== null) {
      message.resolveTime = BigInt(object.resolve_time);
    }
    return message;
  },
  toAmino(message: PriceResult): PriceResultAmino {
    const obj: any = {};
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.multiplier = message.multiplier !== BigInt(0) ? message.multiplier?.toString() : undefined;
    obj.px = message.px !== BigInt(0) ? message.px?.toString() : undefined;
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    obj.resolve_time = message.resolveTime !== BigInt(0) ? message.resolveTime?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PriceResultAminoMsg): PriceResult {
    return PriceResult.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceResultProtoMsg): PriceResult {
    return PriceResult.decode(message.value);
  },
  toProto(message: PriceResult): Uint8Array {
    return PriceResult.encode(message).finish();
  },
  toProtoMsg(message: PriceResult): PriceResultProtoMsg {
    return {
      typeUrl: "/oracle.v1.PriceResult",
      value: PriceResult.encode(message).finish()
    };
  }
};