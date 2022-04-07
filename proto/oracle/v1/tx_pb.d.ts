// package: oracle.v1
// file: oracle/v1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as oracle_v1_oracle_pb from "../../oracle/v1/oracle_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../cosmos/base/v1beta1/coin_pb";

export class MsgRequestData extends jspb.Message {
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

  getClientId(): string;
  setClientId(value: string): void;

  clearFeeLimitList(): void;
  getFeeLimitList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setFeeLimitList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addFeeLimit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getPrepareGas(): number;
  setPrepareGas(value: number): void;

  getExecuteGas(): number;
  setExecuteGas(value: number): void;

  getSender(): string;
  setSender(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRequestData.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRequestData): MsgRequestData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRequestData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRequestData;
  static deserializeBinaryFromReader(message: MsgRequestData, reader: jspb.BinaryReader): MsgRequestData;
}

export namespace MsgRequestData {
  export type AsObject = {
    oracleScriptId: number,
    calldata: Uint8Array | string,
    askCount: number,
    minCount: number,
    clientId: string,
    feeLimitList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    prepareGas: number,
    executeGas: number,
    sender: string,
  }
}

export class MsgRequestDataResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRequestDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRequestDataResponse): MsgRequestDataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRequestDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRequestDataResponse;
  static deserializeBinaryFromReader(message: MsgRequestDataResponse, reader: jspb.BinaryReader): MsgRequestDataResponse;
}

export namespace MsgRequestDataResponse {
  export type AsObject = {
  }
}

export class MsgReportData extends jspb.Message {
  getRequestId(): number;
  setRequestId(value: number): void;

  clearRawReportsList(): void;
  getRawReportsList(): Array<oracle_v1_oracle_pb.RawReport>;
  setRawReportsList(value: Array<oracle_v1_oracle_pb.RawReport>): void;
  addRawReports(value?: oracle_v1_oracle_pb.RawReport, index?: number): oracle_v1_oracle_pb.RawReport;

  getValidator(): string;
  setValidator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgReportData.AsObject;
  static toObject(includeInstance: boolean, msg: MsgReportData): MsgReportData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgReportData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgReportData;
  static deserializeBinaryFromReader(message: MsgReportData, reader: jspb.BinaryReader): MsgReportData;
}

export namespace MsgReportData {
  export type AsObject = {
    requestId: number,
    rawReportsList: Array<oracle_v1_oracle_pb.RawReport.AsObject>,
    validator: string,
  }
}

export class MsgReportDataResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgReportDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgReportDataResponse): MsgReportDataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgReportDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgReportDataResponse;
  static deserializeBinaryFromReader(message: MsgReportDataResponse, reader: jspb.BinaryReader): MsgReportDataResponse;
}

export namespace MsgReportDataResponse {
  export type AsObject = {
  }
}

export class MsgCreateDataSource extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getExecutable(): Uint8Array | string;
  getExecutable_asU8(): Uint8Array;
  getExecutable_asB64(): string;
  setExecutable(value: Uint8Array | string): void;

  clearFeeList(): void;
  getFeeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setFeeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addFee(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getTreasury(): string;
  setTreasury(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  getSender(): string;
  setSender(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateDataSource.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateDataSource): MsgCreateDataSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateDataSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateDataSource;
  static deserializeBinaryFromReader(message: MsgCreateDataSource, reader: jspb.BinaryReader): MsgCreateDataSource;
}

export namespace MsgCreateDataSource {
  export type AsObject = {
    name: string,
    description: string,
    executable: Uint8Array | string,
    feeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    treasury: string,
    owner: string,
    sender: string,
  }
}

export class MsgCreateDataSourceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateDataSourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateDataSourceResponse): MsgCreateDataSourceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateDataSourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateDataSourceResponse;
  static deserializeBinaryFromReader(message: MsgCreateDataSourceResponse, reader: jspb.BinaryReader): MsgCreateDataSourceResponse;
}

export namespace MsgCreateDataSourceResponse {
  export type AsObject = {
  }
}

export class MsgEditDataSource extends jspb.Message {
  getDataSourceId(): number;
  setDataSourceId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getExecutable(): Uint8Array | string;
  getExecutable_asU8(): Uint8Array;
  getExecutable_asB64(): string;
  setExecutable(value: Uint8Array | string): void;

  clearFeeList(): void;
  getFeeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setFeeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addFee(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getTreasury(): string;
  setTreasury(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  getSender(): string;
  setSender(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgEditDataSource.AsObject;
  static toObject(includeInstance: boolean, msg: MsgEditDataSource): MsgEditDataSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgEditDataSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgEditDataSource;
  static deserializeBinaryFromReader(message: MsgEditDataSource, reader: jspb.BinaryReader): MsgEditDataSource;
}

export namespace MsgEditDataSource {
  export type AsObject = {
    dataSourceId: number,
    name: string,
    description: string,
    executable: Uint8Array | string,
    feeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    treasury: string,
    owner: string,
    sender: string,
  }
}

export class MsgEditDataSourceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgEditDataSourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgEditDataSourceResponse): MsgEditDataSourceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgEditDataSourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgEditDataSourceResponse;
  static deserializeBinaryFromReader(message: MsgEditDataSourceResponse, reader: jspb.BinaryReader): MsgEditDataSourceResponse;
}

export namespace MsgEditDataSourceResponse {
  export type AsObject = {
  }
}

export class MsgCreateOracleScript extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSchema(): string;
  setSchema(value: string): void;

  getSourceCodeUrl(): string;
  setSourceCodeUrl(value: string): void;

  getCode(): Uint8Array | string;
  getCode_asU8(): Uint8Array;
  getCode_asB64(): string;
  setCode(value: Uint8Array | string): void;

  getOwner(): string;
  setOwner(value: string): void;

  getSender(): string;
  setSender(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateOracleScript.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateOracleScript): MsgCreateOracleScript.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateOracleScript, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateOracleScript;
  static deserializeBinaryFromReader(message: MsgCreateOracleScript, reader: jspb.BinaryReader): MsgCreateOracleScript;
}

export namespace MsgCreateOracleScript {
  export type AsObject = {
    name: string,
    description: string,
    schema: string,
    sourceCodeUrl: string,
    code: Uint8Array | string,
    owner: string,
    sender: string,
  }
}

export class MsgCreateOracleScriptResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateOracleScriptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateOracleScriptResponse): MsgCreateOracleScriptResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateOracleScriptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateOracleScriptResponse;
  static deserializeBinaryFromReader(message: MsgCreateOracleScriptResponse, reader: jspb.BinaryReader): MsgCreateOracleScriptResponse;
}

export namespace MsgCreateOracleScriptResponse {
  export type AsObject = {
  }
}

export class MsgEditOracleScript extends jspb.Message {
  getOracleScriptId(): number;
  setOracleScriptId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSchema(): string;
  setSchema(value: string): void;

  getSourceCodeUrl(): string;
  setSourceCodeUrl(value: string): void;

  getCode(): Uint8Array | string;
  getCode_asU8(): Uint8Array;
  getCode_asB64(): string;
  setCode(value: Uint8Array | string): void;

  getOwner(): string;
  setOwner(value: string): void;

  getSender(): string;
  setSender(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgEditOracleScript.AsObject;
  static toObject(includeInstance: boolean, msg: MsgEditOracleScript): MsgEditOracleScript.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgEditOracleScript, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgEditOracleScript;
  static deserializeBinaryFromReader(message: MsgEditOracleScript, reader: jspb.BinaryReader): MsgEditOracleScript;
}

export namespace MsgEditOracleScript {
  export type AsObject = {
    oracleScriptId: number,
    name: string,
    description: string,
    schema: string,
    sourceCodeUrl: string,
    code: Uint8Array | string,
    owner: string,
    sender: string,
  }
}

export class MsgEditOracleScriptResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgEditOracleScriptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgEditOracleScriptResponse): MsgEditOracleScriptResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgEditOracleScriptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgEditOracleScriptResponse;
  static deserializeBinaryFromReader(message: MsgEditOracleScriptResponse, reader: jspb.BinaryReader): MsgEditOracleScriptResponse;
}

export namespace MsgEditOracleScriptResponse {
  export type AsObject = {
  }
}

export class MsgActivate extends jspb.Message {
  getValidator(): string;
  setValidator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgActivate.AsObject;
  static toObject(includeInstance: boolean, msg: MsgActivate): MsgActivate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgActivate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgActivate;
  static deserializeBinaryFromReader(message: MsgActivate, reader: jspb.BinaryReader): MsgActivate;
}

export namespace MsgActivate {
  export type AsObject = {
    validator: string,
  }
}

export class MsgActivateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgActivateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgActivateResponse): MsgActivateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgActivateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgActivateResponse;
  static deserializeBinaryFromReader(message: MsgActivateResponse, reader: jspb.BinaryReader): MsgActivateResponse;
}

export namespace MsgActivateResponse {
  export type AsObject = {
  }
}

