// package: oracle.v1
// file: oracle/v1/tx.proto

import * as oracle_v1_tx_pb from "../../oracle/v1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgRequestData = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_tx_pb.MsgRequestData;
  readonly responseType: typeof oracle_v1_tx_pb.MsgRequestDataResponse;
};

type MsgReportData = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_tx_pb.MsgReportData;
  readonly responseType: typeof oracle_v1_tx_pb.MsgReportDataResponse;
};

type MsgCreateDataSource = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_tx_pb.MsgCreateDataSource;
  readonly responseType: typeof oracle_v1_tx_pb.MsgCreateDataSourceResponse;
};

type MsgEditDataSource = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_tx_pb.MsgEditDataSource;
  readonly responseType: typeof oracle_v1_tx_pb.MsgEditDataSourceResponse;
};

type MsgCreateOracleScript = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_tx_pb.MsgCreateOracleScript;
  readonly responseType: typeof oracle_v1_tx_pb.MsgCreateOracleScriptResponse;
};

type MsgEditOracleScript = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_tx_pb.MsgEditOracleScript;
  readonly responseType: typeof oracle_v1_tx_pb.MsgEditOracleScriptResponse;
};

type MsgActivate = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof oracle_v1_tx_pb.MsgActivate;
  readonly responseType: typeof oracle_v1_tx_pb.MsgActivateResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly RequestData: MsgRequestData;
  static readonly ReportData: MsgReportData;
  static readonly CreateDataSource: MsgCreateDataSource;
  static readonly EditDataSource: MsgEditDataSource;
  static readonly CreateOracleScript: MsgCreateOracleScript;
  static readonly EditOracleScript: MsgEditOracleScript;
  static readonly Activate: MsgActivate;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class MsgClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  requestData(
    requestMessage: oracle_v1_tx_pb.MsgRequestData,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_tx_pb.MsgRequestDataResponse|null) => void
  ): UnaryResponse;
  requestData(
    requestMessage: oracle_v1_tx_pb.MsgRequestData,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_tx_pb.MsgRequestDataResponse|null) => void
  ): UnaryResponse;
  reportData(
    requestMessage: oracle_v1_tx_pb.MsgReportData,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_tx_pb.MsgReportDataResponse|null) => void
  ): UnaryResponse;
  reportData(
    requestMessage: oracle_v1_tx_pb.MsgReportData,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_tx_pb.MsgReportDataResponse|null) => void
  ): UnaryResponse;
  createDataSource(
    requestMessage: oracle_v1_tx_pb.MsgCreateDataSource,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_tx_pb.MsgCreateDataSourceResponse|null) => void
  ): UnaryResponse;
  createDataSource(
    requestMessage: oracle_v1_tx_pb.MsgCreateDataSource,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_tx_pb.MsgCreateDataSourceResponse|null) => void
  ): UnaryResponse;
  editDataSource(
    requestMessage: oracle_v1_tx_pb.MsgEditDataSource,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_tx_pb.MsgEditDataSourceResponse|null) => void
  ): UnaryResponse;
  editDataSource(
    requestMessage: oracle_v1_tx_pb.MsgEditDataSource,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_tx_pb.MsgEditDataSourceResponse|null) => void
  ): UnaryResponse;
  createOracleScript(
    requestMessage: oracle_v1_tx_pb.MsgCreateOracleScript,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_tx_pb.MsgCreateOracleScriptResponse|null) => void
  ): UnaryResponse;
  createOracleScript(
    requestMessage: oracle_v1_tx_pb.MsgCreateOracleScript,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_tx_pb.MsgCreateOracleScriptResponse|null) => void
  ): UnaryResponse;
  editOracleScript(
    requestMessage: oracle_v1_tx_pb.MsgEditOracleScript,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_tx_pb.MsgEditOracleScriptResponse|null) => void
  ): UnaryResponse;
  editOracleScript(
    requestMessage: oracle_v1_tx_pb.MsgEditOracleScript,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_tx_pb.MsgEditOracleScriptResponse|null) => void
  ): UnaryResponse;
  activate(
    requestMessage: oracle_v1_tx_pb.MsgActivate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_tx_pb.MsgActivateResponse|null) => void
  ): UnaryResponse;
  activate(
    requestMessage: oracle_v1_tx_pb.MsgActivate,
    callback: (error: ServiceError|null, responseMessage: oracle_v1_tx_pb.MsgActivateResponse|null) => void
  ): UnaryResponse;
}

