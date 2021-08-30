// package: oracle.v1
// file: oracle/v1/query.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as oracle_v1_oracle_pb from "../../oracle/v1/oracle_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_proto_cosmos_pb from "../../cosmos_proto/cosmos_pb";

export class QueryCountsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCountsRequest): QueryCountsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCountsRequest;
  static deserializeBinaryFromReader(message: QueryCountsRequest, reader: jspb.BinaryReader): QueryCountsRequest;
}

export namespace QueryCountsRequest {
  export type AsObject = {
  }
}

export class QueryCountsResponse extends jspb.Message {
  getDataSourceCount(): number;
  setDataSourceCount(value: number): void;

  getOracleScriptCount(): number;
  setOracleScriptCount(value: number): void;

  getRequestCount(): number;
  setRequestCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCountsResponse): QueryCountsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCountsResponse;
  static deserializeBinaryFromReader(message: QueryCountsResponse, reader: jspb.BinaryReader): QueryCountsResponse;
}

export namespace QueryCountsResponse {
  export type AsObject = {
    dataSourceCount: number,
    oracleScriptCount: number,
    requestCount: number,
  }
}

export class QueryDataRequest extends jspb.Message {
  getDataHash(): string;
  setDataHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDataRequest): QueryDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDataRequest;
  static deserializeBinaryFromReader(message: QueryDataRequest, reader: jspb.BinaryReader): QueryDataRequest;
}

export namespace QueryDataRequest {
  export type AsObject = {
    dataHash: string,
  }
}

export class QueryDataResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDataResponse): QueryDataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDataResponse;
  static deserializeBinaryFromReader(message: QueryDataResponse, reader: jspb.BinaryReader): QueryDataResponse;
}

export namespace QueryDataResponse {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class QueryDataSourceRequest extends jspb.Message {
  getDataSourceId(): number;
  setDataSourceId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDataSourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDataSourceRequest): QueryDataSourceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDataSourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDataSourceRequest;
  static deserializeBinaryFromReader(message: QueryDataSourceRequest, reader: jspb.BinaryReader): QueryDataSourceRequest;
}

export namespace QueryDataSourceRequest {
  export type AsObject = {
    dataSourceId: number,
  }
}

export class QueryDataSourceResponse extends jspb.Message {
  hasDataSource(): boolean;
  clearDataSource(): void;
  getDataSource(): oracle_v1_oracle_pb.DataSource | undefined;
  setDataSource(value?: oracle_v1_oracle_pb.DataSource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDataSourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDataSourceResponse): QueryDataSourceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDataSourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDataSourceResponse;
  static deserializeBinaryFromReader(message: QueryDataSourceResponse, reader: jspb.BinaryReader): QueryDataSourceResponse;
}

export namespace QueryDataSourceResponse {
  export type AsObject = {
    dataSource?: oracle_v1_oracle_pb.DataSource.AsObject,
  }
}

export class QueryOracleScriptRequest extends jspb.Message {
  getOracleScriptId(): number;
  setOracleScriptId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOracleScriptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOracleScriptRequest): QueryOracleScriptRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryOracleScriptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOracleScriptRequest;
  static deserializeBinaryFromReader(message: QueryOracleScriptRequest, reader: jspb.BinaryReader): QueryOracleScriptRequest;
}

export namespace QueryOracleScriptRequest {
  export type AsObject = {
    oracleScriptId: number,
  }
}

export class QueryOracleScriptResponse extends jspb.Message {
  hasOracleScript(): boolean;
  clearOracleScript(): void;
  getOracleScript(): oracle_v1_oracle_pb.OracleScript | undefined;
  setOracleScript(value?: oracle_v1_oracle_pb.OracleScript): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOracleScriptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOracleScriptResponse): QueryOracleScriptResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryOracleScriptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOracleScriptResponse;
  static deserializeBinaryFromReader(message: QueryOracleScriptResponse, reader: jspb.BinaryReader): QueryOracleScriptResponse;
}

export namespace QueryOracleScriptResponse {
  export type AsObject = {
    oracleScript?: oracle_v1_oracle_pb.OracleScript.AsObject,
  }
}

export class QueryRequestRequest extends jspb.Message {
  getRequestId(): number;
  setRequestId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequestRequest): QueryRequestRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequestRequest;
  static deserializeBinaryFromReader(message: QueryRequestRequest, reader: jspb.BinaryReader): QueryRequestRequest;
}

export namespace QueryRequestRequest {
  export type AsObject = {
    requestId: number,
  }
}

export class QueryRequestResponse extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): oracle_v1_oracle_pb.Request | undefined;
  setRequest(value?: oracle_v1_oracle_pb.Request): void;

  clearReportsList(): void;
  getReportsList(): Array<oracle_v1_oracle_pb.Report>;
  setReportsList(value: Array<oracle_v1_oracle_pb.Report>): void;
  addReports(value?: oracle_v1_oracle_pb.Report, index?: number): oracle_v1_oracle_pb.Report;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): oracle_v1_oracle_pb.Result | undefined;
  setResult(value?: oracle_v1_oracle_pb.Result): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequestResponse): QueryRequestResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequestResponse;
  static deserializeBinaryFromReader(message: QueryRequestResponse, reader: jspb.BinaryReader): QueryRequestResponse;
}

export namespace QueryRequestResponse {
  export type AsObject = {
    request?: oracle_v1_oracle_pb.Request.AsObject,
    reportsList: Array<oracle_v1_oracle_pb.Report.AsObject>,
    result?: oracle_v1_oracle_pb.Result.AsObject,
  }
}

export class QueryPendingRequestsRequest extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPendingRequestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPendingRequestsRequest): QueryPendingRequestsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPendingRequestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPendingRequestsRequest;
  static deserializeBinaryFromReader(message: QueryPendingRequestsRequest, reader: jspb.BinaryReader): QueryPendingRequestsRequest;
}

export namespace QueryPendingRequestsRequest {
  export type AsObject = {
    validatorAddress: string,
  }
}

export class QueryPendingRequestsResponse extends jspb.Message {
  clearRequestIdsList(): void;
  getRequestIdsList(): Array<number>;
  setRequestIdsList(value: Array<number>): void;
  addRequestIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPendingRequestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPendingRequestsResponse): QueryPendingRequestsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPendingRequestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPendingRequestsResponse;
  static deserializeBinaryFromReader(message: QueryPendingRequestsResponse, reader: jspb.BinaryReader): QueryPendingRequestsResponse;
}

export namespace QueryPendingRequestsResponse {
  export type AsObject = {
    requestIdsList: Array<number>,
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
  getParams(): oracle_v1_oracle_pb.Params | undefined;
  setParams(value?: oracle_v1_oracle_pb.Params): void;

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
    params?: oracle_v1_oracle_pb.Params.AsObject,
  }
}

export class QueryValidatorRequest extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValidatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValidatorRequest): QueryValidatorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryValidatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValidatorRequest;
  static deserializeBinaryFromReader(message: QueryValidatorRequest, reader: jspb.BinaryReader): QueryValidatorRequest;
}

export namespace QueryValidatorRequest {
  export type AsObject = {
    validatorAddress: string,
  }
}

export class QueryValidatorResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): oracle_v1_oracle_pb.ValidatorStatus | undefined;
  setStatus(value?: oracle_v1_oracle_pb.ValidatorStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValidatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValidatorResponse): QueryValidatorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryValidatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValidatorResponse;
  static deserializeBinaryFromReader(message: QueryValidatorResponse, reader: jspb.BinaryReader): QueryValidatorResponse;
}

export namespace QueryValidatorResponse {
  export type AsObject = {
    status?: oracle_v1_oracle_pb.ValidatorStatus.AsObject,
  }
}

export class QueryIsReporterRequest extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  getReporterAddress(): string;
  setReporterAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIsReporterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIsReporterRequest): QueryIsReporterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryIsReporterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIsReporterRequest;
  static deserializeBinaryFromReader(message: QueryIsReporterRequest, reader: jspb.BinaryReader): QueryIsReporterRequest;
}

export namespace QueryIsReporterRequest {
  export type AsObject = {
    validatorAddress: string,
    reporterAddress: string,
  }
}

export class QueryIsReporterResponse extends jspb.Message {
  getIsReporter(): boolean;
  setIsReporter(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIsReporterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIsReporterResponse): QueryIsReporterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryIsReporterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIsReporterResponse;
  static deserializeBinaryFromReader(message: QueryIsReporterResponse, reader: jspb.BinaryReader): QueryIsReporterResponse;
}

export namespace QueryIsReporterResponse {
  export type AsObject = {
    isReporter: boolean,
  }
}

export class QueryReportersRequest extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryReportersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryReportersRequest): QueryReportersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryReportersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryReportersRequest;
  static deserializeBinaryFromReader(message: QueryReportersRequest, reader: jspb.BinaryReader): QueryReportersRequest;
}

export namespace QueryReportersRequest {
  export type AsObject = {
    validatorAddress: string,
  }
}

export class QueryReportersResponse extends jspb.Message {
  clearReporterList(): void;
  getReporterList(): Array<string>;
  setReporterList(value: Array<string>): void;
  addReporter(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryReportersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryReportersResponse): QueryReportersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryReportersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryReportersResponse;
  static deserializeBinaryFromReader(message: QueryReportersResponse, reader: jspb.BinaryReader): QueryReportersResponse;
}

export namespace QueryReportersResponse {
  export type AsObject = {
    reporterList: Array<string>,
  }
}

export class QueryActiveValidatorsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryActiveValidatorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryActiveValidatorsRequest): QueryActiveValidatorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryActiveValidatorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryActiveValidatorsRequest;
  static deserializeBinaryFromReader(message: QueryActiveValidatorsRequest, reader: jspb.BinaryReader): QueryActiveValidatorsRequest;
}

export namespace QueryActiveValidatorsRequest {
  export type AsObject = {
  }
}

export class QueryActiveValidatorsResponse extends jspb.Message {
  clearValidatorsList(): void;
  getValidatorsList(): Array<oracle_v1_oracle_pb.ActiveValidator>;
  setValidatorsList(value: Array<oracle_v1_oracle_pb.ActiveValidator>): void;
  addValidators(value?: oracle_v1_oracle_pb.ActiveValidator, index?: number): oracle_v1_oracle_pb.ActiveValidator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryActiveValidatorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryActiveValidatorsResponse): QueryActiveValidatorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryActiveValidatorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryActiveValidatorsResponse;
  static deserializeBinaryFromReader(message: QueryActiveValidatorsResponse, reader: jspb.BinaryReader): QueryActiveValidatorsResponse;
}

export namespace QueryActiveValidatorsResponse {
  export type AsObject = {
    validatorsList: Array<oracle_v1_oracle_pb.ActiveValidator.AsObject>,
  }
}

export class QueryRequestSearchRequest extends jspb.Message {
  getOracleScriptId(): number;
  setOracleScriptId(value: number): void;

  getCalldata(): string;
  setCalldata(value: string): void;

  getAskCount(): number;
  setAskCount(value: number): void;

  getMinCount(): number;
  setMinCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequestSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequestSearchRequest): QueryRequestSearchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRequestSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequestSearchRequest;
  static deserializeBinaryFromReader(message: QueryRequestSearchRequest, reader: jspb.BinaryReader): QueryRequestSearchRequest;
}

export namespace QueryRequestSearchRequest {
  export type AsObject = {
    oracleScriptId: number,
    calldata: string,
    askCount: number,
    minCount: number,
  }
}

export class QueryRequestSearchResponse extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): QueryRequestResponse | undefined;
  setRequest(value?: QueryRequestResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequestSearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequestSearchResponse): QueryRequestSearchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRequestSearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequestSearchResponse;
  static deserializeBinaryFromReader(message: QueryRequestSearchResponse, reader: jspb.BinaryReader): QueryRequestSearchResponse;
}

export namespace QueryRequestSearchResponse {
  export type AsObject = {
    request?: QueryRequestResponse.AsObject,
  }
}

export class QueryRequestPriceRequest extends jspb.Message {
  clearSymbolsList(): void;
  getSymbolsList(): Array<string>;
  setSymbolsList(value: Array<string>): void;
  addSymbols(value: string, index?: number): string;

  getAskCount(): number;
  setAskCount(value: number): void;

  getMinCount(): number;
  setMinCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequestPriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequestPriceRequest): QueryRequestPriceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRequestPriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequestPriceRequest;
  static deserializeBinaryFromReader(message: QueryRequestPriceRequest, reader: jspb.BinaryReader): QueryRequestPriceRequest;
}

export namespace QueryRequestPriceRequest {
  export type AsObject = {
    symbolsList: Array<string>,
    askCount: number,
    minCount: number,
  }
}

export class QueryRequestPriceResponse extends jspb.Message {
  clearPriceResultsList(): void;
  getPriceResultsList(): Array<oracle_v1_oracle_pb.PriceResult>;
  setPriceResultsList(value: Array<oracle_v1_oracle_pb.PriceResult>): void;
  addPriceResults(value?: oracle_v1_oracle_pb.PriceResult, index?: number): oracle_v1_oracle_pb.PriceResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequestPriceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequestPriceResponse): QueryRequestPriceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRequestPriceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequestPriceResponse;
  static deserializeBinaryFromReader(message: QueryRequestPriceResponse, reader: jspb.BinaryReader): QueryRequestPriceResponse;
}

export namespace QueryRequestPriceResponse {
  export type AsObject = {
    priceResultsList: Array<oracle_v1_oracle_pb.PriceResult.AsObject>,
  }
}

export class QueryRequestVerificationRequest extends jspb.Message {
  getChainId(): string;
  setChainId(value: string): void;

  getValidator(): string;
  setValidator(value: string): void;

  getRequestId(): number;
  setRequestId(value: number): void;

  getExternalId(): number;
  setExternalId(value: number): void;

  getReporter(): string;
  setReporter(value: string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequestVerificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequestVerificationRequest): QueryRequestVerificationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRequestVerificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequestVerificationRequest;
  static deserializeBinaryFromReader(message: QueryRequestVerificationRequest, reader: jspb.BinaryReader): QueryRequestVerificationRequest;
}

export namespace QueryRequestVerificationRequest {
  export type AsObject = {
    chainId: string,
    validator: string,
    requestId: number,
    externalId: number,
    reporter: string,
    signature: Uint8Array | string,
  }
}

export class QueryRequestVerificationResponse extends jspb.Message {
  getChainId(): string;
  setChainId(value: string): void;

  getValidator(): string;
  setValidator(value: string): void;

  getRequestId(): number;
  setRequestId(value: number): void;

  getExternalId(): number;
  setExternalId(value: number): void;

  getDataSourceId(): number;
  setDataSourceId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequestVerificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequestVerificationResponse): QueryRequestVerificationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRequestVerificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequestVerificationResponse;
  static deserializeBinaryFromReader(message: QueryRequestVerificationResponse, reader: jspb.BinaryReader): QueryRequestVerificationResponse;
}

export namespace QueryRequestVerificationResponse {
  export type AsObject = {
    chainId: string,
    validator: string,
    requestId: number,
    externalId: number,
    dataSourceId: number,
  }
}

