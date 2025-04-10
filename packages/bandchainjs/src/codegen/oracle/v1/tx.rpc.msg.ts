//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgRequestData, MsgRequestDataResponse, MsgReportData, MsgReportDataResponse, MsgCreateDataSource, MsgCreateDataSourceResponse, MsgEditDataSource, MsgEditDataSourceResponse, MsgCreateOracleScript, MsgCreateOracleScriptResponse, MsgEditOracleScript, MsgEditOracleScriptResponse, MsgActivate, MsgActivateResponse } from "./tx";
/** Msg defines the oracle Msg service. */
export interface Msg {
  /** RequestData defines a method for submitting a new request. */
  requestData(request: MsgRequestData): Promise<MsgRequestDataResponse>;
  /** ReportData defines a method for reporting a data to resolve the request. */
  reportData(request: MsgReportData): Promise<MsgReportDataResponse>;
  /** CreateDataSource defines a method for creating a new data source. */
  createDataSource(request: MsgCreateDataSource): Promise<MsgCreateDataSourceResponse>;
  /** EditDataSource defines a method for editing an existing data source. */
  editDataSource(request: MsgEditDataSource): Promise<MsgEditDataSourceResponse>;
  /** CreateOracleScript defines a method for creating a new oracle script. */
  createOracleScript(request: MsgCreateOracleScript): Promise<MsgCreateOracleScriptResponse>;
  /** EditOracleScript defines a method for editing an existing oracle script. */
  editOracleScript(request: MsgEditOracleScript): Promise<MsgEditOracleScriptResponse>;
  /** Activate defines a method for applying to be an oracle validator. */
  activate(request: MsgActivate): Promise<MsgActivateResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.requestData = this.requestData.bind(this);
    this.reportData = this.reportData.bind(this);
    this.createDataSource = this.createDataSource.bind(this);
    this.editDataSource = this.editDataSource.bind(this);
    this.createOracleScript = this.createOracleScript.bind(this);
    this.editOracleScript = this.editOracleScript.bind(this);
    this.activate = this.activate.bind(this);
  }
  requestData(request: MsgRequestData): Promise<MsgRequestDataResponse> {
    const data = MsgRequestData.encode(request).finish();
    const promise = this.rpc.request("oracle.v1.Msg", "RequestData", data);
    return promise.then(data => MsgRequestDataResponse.decode(new BinaryReader(data)));
  }
  reportData(request: MsgReportData): Promise<MsgReportDataResponse> {
    const data = MsgReportData.encode(request).finish();
    const promise = this.rpc.request("oracle.v1.Msg", "ReportData", data);
    return promise.then(data => MsgReportDataResponse.decode(new BinaryReader(data)));
  }
  createDataSource(request: MsgCreateDataSource): Promise<MsgCreateDataSourceResponse> {
    const data = MsgCreateDataSource.encode(request).finish();
    const promise = this.rpc.request("oracle.v1.Msg", "CreateDataSource", data);
    return promise.then(data => MsgCreateDataSourceResponse.decode(new BinaryReader(data)));
  }
  editDataSource(request: MsgEditDataSource): Promise<MsgEditDataSourceResponse> {
    const data = MsgEditDataSource.encode(request).finish();
    const promise = this.rpc.request("oracle.v1.Msg", "EditDataSource", data);
    return promise.then(data => MsgEditDataSourceResponse.decode(new BinaryReader(data)));
  }
  createOracleScript(request: MsgCreateOracleScript): Promise<MsgCreateOracleScriptResponse> {
    const data = MsgCreateOracleScript.encode(request).finish();
    const promise = this.rpc.request("oracle.v1.Msg", "CreateOracleScript", data);
    return promise.then(data => MsgCreateOracleScriptResponse.decode(new BinaryReader(data)));
  }
  editOracleScript(request: MsgEditOracleScript): Promise<MsgEditOracleScriptResponse> {
    const data = MsgEditOracleScript.encode(request).finish();
    const promise = this.rpc.request("oracle.v1.Msg", "EditOracleScript", data);
    return promise.then(data => MsgEditOracleScriptResponse.decode(new BinaryReader(data)));
  }
  activate(request: MsgActivate): Promise<MsgActivateResponse> {
    const data = MsgActivate.encode(request).finish();
    const promise = this.rpc.request("oracle.v1.Msg", "Activate", data);
    return promise.then(data => MsgActivateResponse.decode(new BinaryReader(data)));
  }
}