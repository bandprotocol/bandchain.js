// package: oracle.v1
// file: oracle/v1/oracle.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../cosmos/base/v1beta1/coin_pb";

export class DataSource extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  getTreasury(): string;
  setTreasury(value: string): void;

  clearFeeList(): void;
  getFeeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setFeeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addFee(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSource.AsObject;
  static toObject(includeInstance: boolean, msg: DataSource): DataSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSource;
  static deserializeBinaryFromReader(message: DataSource, reader: jspb.BinaryReader): DataSource;
}

export namespace DataSource {
  export type AsObject = {
    owner: string,
    name: string,
    description: string,
    filename: string,
    treasury: string,
    feeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class OracleScript extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  getSchema(): string;
  setSchema(value: string): void;

  getSourceCodeUrl(): string;
  setSourceCodeUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleScript.AsObject;
  static toObject(includeInstance: boolean, msg: OracleScript): OracleScript.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OracleScript, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleScript;
  static deserializeBinaryFromReader(message: OracleScript, reader: jspb.BinaryReader): OracleScript;
}

export namespace OracleScript {
  export type AsObject = {
    owner: string,
    name: string,
    description: string,
    filename: string,
    schema: string,
    sourceCodeUrl: string,
  }
}

export class RawRequest extends jspb.Message {
  getExternalId(): number;
  setExternalId(value: number): void;

  getDataSourceId(): number;
  setDataSourceId(value: number): void;

  getCalldata(): Uint8Array | string;
  getCalldata_asU8(): Uint8Array;
  getCalldata_asB64(): string;
  setCalldata(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RawRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RawRequest): RawRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RawRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RawRequest;
  static deserializeBinaryFromReader(message: RawRequest, reader: jspb.BinaryReader): RawRequest;
}

export namespace RawRequest {
  export type AsObject = {
    externalId: number,
    dataSourceId: number,
    calldata: Uint8Array | string,
  }
}

export class RawReport extends jspb.Message {
  getExternalId(): number;
  setExternalId(value: number): void;

  getExitCode(): number;
  setExitCode(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RawReport.AsObject;
  static toObject(includeInstance: boolean, msg: RawReport): RawReport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RawReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RawReport;
  static deserializeBinaryFromReader(message: RawReport, reader: jspb.BinaryReader): RawReport;
}

export namespace RawReport {
  export type AsObject = {
    externalId: number,
    exitCode: number,
    data: Uint8Array | string,
  }
}

export class Request extends jspb.Message {
  getOracleScriptId(): number;
  setOracleScriptId(value: number): void;

  getCalldata(): Uint8Array | string;
  getCalldata_asU8(): Uint8Array;
  getCalldata_asB64(): string;
  setCalldata(value: Uint8Array | string): void;

  clearRequestedValidatorsList(): void;
  getRequestedValidatorsList(): Array<string>;
  setRequestedValidatorsList(value: Array<string>): void;
  addRequestedValidators(value: string, index?: number): string;

  getMinCount(): number;
  setMinCount(value: number): void;

  getRequestHeight(): number;
  setRequestHeight(value: number): void;

  getRequestTime(): number;
  setRequestTime(value: number): void;

  getClientId(): string;
  setClientId(value: string): void;

  clearRawRequestsList(): void;
  getRawRequestsList(): Array<RawRequest>;
  setRawRequestsList(value: Array<RawRequest>): void;
  addRawRequests(value?: RawRequest, index?: number): RawRequest;

  hasIbcChannel(): boolean;
  clearIbcChannel(): void;
  getIbcChannel(): IBCChannel | undefined;
  setIbcChannel(value?: IBCChannel): void;

  getExecuteGas(): number;
  setExecuteGas(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    oracleScriptId: number,
    calldata: Uint8Array | string,
    requestedValidatorsList: Array<string>,
    minCount: number,
    requestHeight: number,
    requestTime: number,
    clientId: string,
    rawRequestsList: Array<RawRequest.AsObject>,
    ibcChannel?: IBCChannel.AsObject,
    executeGas: number,
  }
}

export class Report extends jspb.Message {
  getValidator(): string;
  setValidator(value: string): void;

  getInBeforeResolve(): boolean;
  setInBeforeResolve(value: boolean): void;

  clearRawReportsList(): void;
  getRawReportsList(): Array<RawReport>;
  setRawReportsList(value: Array<RawReport>): void;
  addRawReports(value?: RawReport, index?: number): RawReport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Report.AsObject;
  static toObject(includeInstance: boolean, msg: Report): Report.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Report, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Report;
  static deserializeBinaryFromReader(message: Report, reader: jspb.BinaryReader): Report;
}

export namespace Report {
  export type AsObject = {
    validator: string,
    inBeforeResolve: boolean,
    rawReportsList: Array<RawReport.AsObject>,
  }
}

export class OracleRequestPacketData extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  getOracleScriptId(): number;
  setOracleScriptId(value: number): void;

  getCalldata(): Uint8Array | string;
  getCalldata_asU8(): Uint8Array;
  getCalldata_asB64(): string;
  setCalldata(value: Uint8Array | string): void;

  getAskCount(): number;
  setAskCount(value: number): void;

  getMinCount(): number;
  setMinCount(value: number): void;

  clearFeeLimitList(): void;
  getFeeLimitList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setFeeLimitList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addFeeLimit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getPrepareGas(): number;
  setPrepareGas(value: number): void;

  getExecuteGas(): number;
  setExecuteGas(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleRequestPacketData.AsObject;
  static toObject(includeInstance: boolean, msg: OracleRequestPacketData): OracleRequestPacketData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OracleRequestPacketData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleRequestPacketData;
  static deserializeBinaryFromReader(message: OracleRequestPacketData, reader: jspb.BinaryReader): OracleRequestPacketData;
}

export namespace OracleRequestPacketData {
  export type AsObject = {
    clientId: string,
    oracleScriptId: number,
    calldata: Uint8Array | string,
    askCount: number,
    minCount: number,
    feeLimitList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    prepareGas: number,
    executeGas: number,
  }
}

export class OracleRequestPacketAcknowledgement extends jspb.Message {
  getRequestId(): number;
  setRequestId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleRequestPacketAcknowledgement.AsObject;
  static toObject(includeInstance: boolean, msg: OracleRequestPacketAcknowledgement): OracleRequestPacketAcknowledgement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OracleRequestPacketAcknowledgement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleRequestPacketAcknowledgement;
  static deserializeBinaryFromReader(message: OracleRequestPacketAcknowledgement, reader: jspb.BinaryReader): OracleRequestPacketAcknowledgement;
}

export namespace OracleRequestPacketAcknowledgement {
  export type AsObject = {
    requestId: number,
  }
}

export class OracleResponsePacketData extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  getRequestId(): number;
  setRequestId(value: number): void;

  getAnsCount(): number;
  setAnsCount(value: number): void;

  getRequestTime(): number;
  setRequestTime(value: number): void;

  getResolveTime(): number;
  setResolveTime(value: number): void;

  getResolveStatus(): ResolveStatusMap[keyof ResolveStatusMap];
  setResolveStatus(value: ResolveStatusMap[keyof ResolveStatusMap]): void;

  getResult(): Uint8Array | string;
  getResult_asU8(): Uint8Array;
  getResult_asB64(): string;
  setResult(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleResponsePacketData.AsObject;
  static toObject(includeInstance: boolean, msg: OracleResponsePacketData): OracleResponsePacketData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OracleResponsePacketData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleResponsePacketData;
  static deserializeBinaryFromReader(message: OracleResponsePacketData, reader: jspb.BinaryReader): OracleResponsePacketData;
}

export namespace OracleResponsePacketData {
  export type AsObject = {
    clientId: string,
    requestId: number,
    ansCount: number,
    requestTime: number,
    resolveTime: number,
    resolveStatus: ResolveStatusMap[keyof ResolveStatusMap],
    result: Uint8Array | string,
  }
}

export class Result extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  getOracleScriptId(): number;
  setOracleScriptId(value: number): void;

  getCalldata(): Uint8Array | string;
  getCalldata_asU8(): Uint8Array;
  getCalldata_asB64(): string;
  setCalldata(value: Uint8Array | string): void;

  getAskCount(): number;
  setAskCount(value: number): void;

  getMinCount(): number;
  setMinCount(value: number): void;

  getRequestId(): number;
  setRequestId(value: number): void;

  getAnsCount(): number;
  setAnsCount(value: number): void;

  getRequestTime(): number;
  setRequestTime(value: number): void;

  getResolveTime(): number;
  setResolveTime(value: number): void;

  getResolveStatus(): ResolveStatusMap[keyof ResolveStatusMap];
  setResolveStatus(value: ResolveStatusMap[keyof ResolveStatusMap]): void;

  getResult(): Uint8Array | string;
  getResult_asU8(): Uint8Array;
  getResult_asB64(): string;
  setResult(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    clientId: string,
    oracleScriptId: number,
    calldata: Uint8Array | string,
    askCount: number,
    minCount: number,
    requestId: number,
    ansCount: number,
    requestTime: number,
    resolveTime: number,
    resolveStatus: ResolveStatusMap[keyof ResolveStatusMap],
    result: Uint8Array | string,
  }
}

export class ValidatorStatus extends jspb.Message {
  getIsActive(): boolean;
  setIsActive(value: boolean): void;

  hasSince(): boolean;
  clearSince(): void;
  getSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSince(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorStatus): ValidatorStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidatorStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorStatus;
  static deserializeBinaryFromReader(message: ValidatorStatus, reader: jspb.BinaryReader): ValidatorStatus;
}

export namespace ValidatorStatus {
  export type AsObject = {
    isActive: boolean,
    since?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ActiveValidator extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getPower(): number;
  setPower(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActiveValidator.AsObject;
  static toObject(includeInstance: boolean, msg: ActiveValidator): ActiveValidator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActiveValidator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActiveValidator;
  static deserializeBinaryFromReader(message: ActiveValidator, reader: jspb.BinaryReader): ActiveValidator;
}

export namespace ActiveValidator {
  export type AsObject = {
    address: string,
    power: number,
  }
}

export class Params extends jspb.Message {
  getMaxRawRequestCount(): number;
  setMaxRawRequestCount(value: number): void;

  getMaxAskCount(): number;
  setMaxAskCount(value: number): void;

  getMaxCalldataSize(): number;
  setMaxCalldataSize(value: number): void;

  getMaxReportDataSize(): number;
  setMaxReportDataSize(value: number): void;

  getExpirationBlockCount(): number;
  setExpirationBlockCount(value: number): void;

  getBaseOwasmGas(): number;
  setBaseOwasmGas(value: number): void;

  getPerValidatorRequestGas(): number;
  setPerValidatorRequestGas(value: number): void;

  getSamplingTryCount(): number;
  setSamplingTryCount(value: number): void;

  getOracleRewardPercentage(): number;
  setOracleRewardPercentage(value: number): void;

  getInactivePenaltyDuration(): number;
  setInactivePenaltyDuration(value: number): void;

  getIbcRequestEnabled(): boolean;
  setIbcRequestEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    maxRawRequestCount: number,
    maxAskCount: number,
    maxCalldataSize: number,
    maxReportDataSize: number,
    expirationBlockCount: number,
    baseOwasmGas: number,
    perValidatorRequestGas: number,
    samplingTryCount: number,
    oracleRewardPercentage: number,
    inactivePenaltyDuration: number,
    ibcRequestEnabled: boolean,
  }
}

export class PendingResolveList extends jspb.Message {
  clearRequestIdsList(): void;
  getRequestIdsList(): Array<number>;
  setRequestIdsList(value: Array<number>): void;
  addRequestIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PendingResolveList.AsObject;
  static toObject(includeInstance: boolean, msg: PendingResolveList): PendingResolveList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PendingResolveList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PendingResolveList;
  static deserializeBinaryFromReader(message: PendingResolveList, reader: jspb.BinaryReader): PendingResolveList;
}

export namespace PendingResolveList {
  export type AsObject = {
    requestIdsList: Array<number>,
  }
}

export class IBCChannel extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IBCChannel.AsObject;
  static toObject(includeInstance: boolean, msg: IBCChannel): IBCChannel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IBCChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IBCChannel;
  static deserializeBinaryFromReader(message: IBCChannel, reader: jspb.BinaryReader): IBCChannel;
}

export namespace IBCChannel {
  export type AsObject = {
    portId: string,
    channelId: string,
  }
}

export class RequestVerification extends jspb.Message {
  getChainId(): string;
  setChainId(value: string): void;

  getValidator(): string;
  setValidator(value: string): void;

  getRequestId(): number;
  setRequestId(value: number): void;

  getExternalId(): number;
  setExternalId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestVerification.AsObject;
  static toObject(includeInstance: boolean, msg: RequestVerification): RequestVerification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestVerification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestVerification;
  static deserializeBinaryFromReader(message: RequestVerification, reader: jspb.BinaryReader): RequestVerification;
}

export namespace RequestVerification {
  export type AsObject = {
    chainId: string,
    validator: string,
    requestId: number,
    externalId: number,
  }
}

export class PriceResult extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getMultiplier(): number;
  setMultiplier(value: number): void;

  getPx(): number;
  setPx(value: number): void;

  getRequestId(): number;
  setRequestId(value: number): void;

  getResolveTime(): number;
  setResolveTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceResult.AsObject;
  static toObject(includeInstance: boolean, msg: PriceResult): PriceResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceResult;
  static deserializeBinaryFromReader(message: PriceResult, reader: jspb.BinaryReader): PriceResult;
}

export namespace PriceResult {
  export type AsObject = {
    symbol: string,
    multiplier: number,
    px: number,
    requestId: number,
    resolveTime: number,
  }
}

export interface ResolveStatusMap {
  RESOLVE_STATUS_OPEN_UNSPECIFIED: 0;
  RESOLVE_STATUS_SUCCESS: 1;
  RESOLVE_STATUS_FAILURE: 2;
  RESOLVE_STATUS_EXPIRED: 3;
}

export const ResolveStatus: ResolveStatusMap;

