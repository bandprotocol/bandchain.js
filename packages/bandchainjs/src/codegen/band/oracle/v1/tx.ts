//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Encoder, RawReport, RawReportAmino, RawReportSDKType, Params, ParamsAmino, ParamsSDKType } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/** MsgRequestData is a message for sending a data oracle request. */
export interface MsgRequestData {
  /** OracleScriptID is the identifier of the oracle script to be called. */
  oracleScriptId: bigint;
  /** Calldata is the OBI-encoded call parameters for the oracle script. */
  calldata: Uint8Array;
  /** AskCount is the number of validators to perform the oracle task. */
  askCount: bigint;
  /**
   * MinCount is the minimum number of validators sufficient to resolve the
   * oracle tasks.
   */
  minCount: bigint;
  /** ClientID is the client-provided unique identifier to track the request. */
  clientId: string;
  /**
   * FeeLimit is the maximum tokens that will be paid to all data source
   * providers.
   */
  feeLimit: Coin[];
  /** PrepareGas is amount of gas to pay to prepare raw requests */
  prepareGas: bigint;
  /** ExecuteGas is amount of gas to reserve for executing */
  executeGas: bigint;
  /** Sender is an account address of message sender. */
  sender: string;
  /** TSSEncoder is the mode of encoding oracle result signature order. */
  tssEncoder: Encoder;
}
export interface MsgRequestDataProtoMsg {
  typeUrl: "/band.oracle.v1.MsgRequestData";
  value: Uint8Array;
}
/** MsgRequestData is a message for sending a data oracle request. */
export interface MsgRequestDataAmino {
  /** OracleScriptID is the identifier of the oracle script to be called. */
  oracle_script_id?: string;
  /** Calldata is the OBI-encoded call parameters for the oracle script. */
  calldata?: string;
  /** AskCount is the number of validators to perform the oracle task. */
  ask_count?: string;
  /**
   * MinCount is the minimum number of validators sufficient to resolve the
   * oracle tasks.
   */
  min_count?: string;
  /** ClientID is the client-provided unique identifier to track the request. */
  client_id?: string;
  /**
   * FeeLimit is the maximum tokens that will be paid to all data source
   * providers.
   */
  fee_limit?: CoinAmino[];
  /** PrepareGas is amount of gas to pay to prepare raw requests */
  prepare_gas?: string;
  /** ExecuteGas is amount of gas to reserve for executing */
  execute_gas?: string;
  /** Sender is an account address of message sender. */
  sender?: string;
  /** TSSEncoder is the mode of encoding oracle result signature order. */
  tss_encoder?: Encoder;
}
export interface MsgRequestDataAminoMsg {
  type: "oracle/Request";
  value: MsgRequestDataAmino;
}
/** MsgRequestData is a message for sending a data oracle request. */
export interface MsgRequestDataSDKType {
  oracle_script_id: bigint;
  calldata: Uint8Array;
  ask_count: bigint;
  min_count: bigint;
  client_id: string;
  fee_limit: CoinSDKType[];
  prepare_gas: bigint;
  execute_gas: bigint;
  sender: string;
  tss_encoder: Encoder;
}
/** MsgRequestDataResponse is response data for MsgRequestData message */
export interface MsgRequestDataResponse {}
export interface MsgRequestDataResponseProtoMsg {
  typeUrl: "/band.oracle.v1.MsgRequestDataResponse";
  value: Uint8Array;
}
/** MsgRequestDataResponse is response data for MsgRequestData message */
export interface MsgRequestDataResponseAmino {}
export interface MsgRequestDataResponseAminoMsg {
  type: "/band.oracle.v1.MsgRequestDataResponse";
  value: MsgRequestDataResponseAmino;
}
/** MsgRequestDataResponse is response data for MsgRequestData message */
export interface MsgRequestDataResponseSDKType {}
/** MsgReportData is a message for reporting to a data request by a validator. */
export interface MsgReportData {
  /** RequestID is the identifier of the request to be reported to. */
  requestId: bigint;
  /**
   * RawReports is the list of report information provided by data sources
   * identified by external ID
   */
  rawReports: RawReport[];
  /** Validator is the address of the validator that owns this report. */
  validator: string;
}
export interface MsgReportDataProtoMsg {
  typeUrl: "/band.oracle.v1.MsgReportData";
  value: Uint8Array;
}
/** MsgReportData is a message for reporting to a data request by a validator. */
export interface MsgReportDataAmino {
  /** RequestID is the identifier of the request to be reported to. */
  request_id?: string;
  /**
   * RawReports is the list of report information provided by data sources
   * identified by external ID
   */
  raw_reports?: RawReportAmino[];
  /** Validator is the address of the validator that owns this report. */
  validator?: string;
}
export interface MsgReportDataAminoMsg {
  type: "oracle/Report";
  value: MsgReportDataAmino;
}
/** MsgReportData is a message for reporting to a data request by a validator. */
export interface MsgReportDataSDKType {
  request_id: bigint;
  raw_reports: RawReportSDKType[];
  validator: string;
}
/** MsgReportDataResponse is response data for MsgReportData message */
export interface MsgReportDataResponse {}
export interface MsgReportDataResponseProtoMsg {
  typeUrl: "/band.oracle.v1.MsgReportDataResponse";
  value: Uint8Array;
}
/** MsgReportDataResponse is response data for MsgReportData message */
export interface MsgReportDataResponseAmino {}
export interface MsgReportDataResponseAminoMsg {
  type: "/band.oracle.v1.MsgReportDataResponse";
  value: MsgReportDataResponseAmino;
}
/** MsgReportDataResponse is response data for MsgReportData message */
export interface MsgReportDataResponseSDKType {}
/** MsgCreateDataSource is a message for creating a new data source. */
export interface MsgCreateDataSource {
  /** Name is the name of this data source used for display (optional). */
  name: string;
  /**
   * Description is the description of this data source used for display
   * (optional).
   */
  description: string;
  /**
   * Executable is the content of executable script or binary file to be run by
   * validators upon execution.
   */
  executable: Uint8Array;
  /**
   * Fee is the data source fee per ask_count that data provider will receive
   * from requester.
   */
  fee: Coin[];
  /** Treasury is the account address who receive data source fee from requester. */
  treasury: string;
  /**
   * Owner is the account address who is allowed to make further changes to the
   * data source.
   */
  owner: string;
  /** Sender is the signer of this message. */
  sender: string;
}
export interface MsgCreateDataSourceProtoMsg {
  typeUrl: "/band.oracle.v1.MsgCreateDataSource";
  value: Uint8Array;
}
/** MsgCreateDataSource is a message for creating a new data source. */
export interface MsgCreateDataSourceAmino {
  /** Name is the name of this data source used for display (optional). */
  name?: string;
  /**
   * Description is the description of this data source used for display
   * (optional).
   */
  description?: string;
  /**
   * Executable is the content of executable script or binary file to be run by
   * validators upon execution.
   */
  executable?: string;
  /**
   * Fee is the data source fee per ask_count that data provider will receive
   * from requester.
   */
  fee?: CoinAmino[];
  /** Treasury is the account address who receive data source fee from requester. */
  treasury?: string;
  /**
   * Owner is the account address who is allowed to make further changes to the
   * data source.
   */
  owner?: string;
  /** Sender is the signer of this message. */
  sender?: string;
}
export interface MsgCreateDataSourceAminoMsg {
  type: "oracle/CreateDataSource";
  value: MsgCreateDataSourceAmino;
}
/** MsgCreateDataSource is a message for creating a new data source. */
export interface MsgCreateDataSourceSDKType {
  name: string;
  description: string;
  executable: Uint8Array;
  fee: CoinSDKType[];
  treasury: string;
  owner: string;
  sender: string;
}
/** MsgCreateDataSourceResponse is response data for MsgCreateDataSource message */
export interface MsgCreateDataSourceResponse {}
export interface MsgCreateDataSourceResponseProtoMsg {
  typeUrl: "/band.oracle.v1.MsgCreateDataSourceResponse";
  value: Uint8Array;
}
/** MsgCreateDataSourceResponse is response data for MsgCreateDataSource message */
export interface MsgCreateDataSourceResponseAmino {}
export interface MsgCreateDataSourceResponseAminoMsg {
  type: "/band.oracle.v1.MsgCreateDataSourceResponse";
  value: MsgCreateDataSourceResponseAmino;
}
/** MsgCreateDataSourceResponse is response data for MsgCreateDataSource message */
export interface MsgCreateDataSourceResponseSDKType {}
/** MsgEditDataSource is a message for editing an existing data source. */
export interface MsgEditDataSource {
  /** DataSourceID is the unique identifier of the data source to be edited. */
  dataSourceId: bigint;
  /** Name is the name of this data source used for display (optional). */
  name: string;
  /**
   * Description is the description of this data source used for display
   * (optional).
   */
  description: string;
  /**
   * Executable is the executable script or binary to be run by validators upon
   * execution.
   */
  executable: Uint8Array;
  /**
   * Fee is the data source fee per ask_count that data provider will receive
   * from requester.
   */
  fee: Coin[];
  /** Treasury is the address who receive data source fee from requester. */
  treasury: string;
  /**
   * Owner is the address who is allowed to make further changes to the data
   * source.
   */
  owner: string;
  /**
   * Sender is the signer of this message. Must be the current data source's
   * owner.
   */
  sender: string;
}
export interface MsgEditDataSourceProtoMsg {
  typeUrl: "/band.oracle.v1.MsgEditDataSource";
  value: Uint8Array;
}
/** MsgEditDataSource is a message for editing an existing data source. */
export interface MsgEditDataSourceAmino {
  /** DataSourceID is the unique identifier of the data source to be edited. */
  data_source_id?: string;
  /** Name is the name of this data source used for display (optional). */
  name?: string;
  /**
   * Description is the description of this data source used for display
   * (optional).
   */
  description?: string;
  /**
   * Executable is the executable script or binary to be run by validators upon
   * execution.
   */
  executable?: string;
  /**
   * Fee is the data source fee per ask_count that data provider will receive
   * from requester.
   */
  fee?: CoinAmino[];
  /** Treasury is the address who receive data source fee from requester. */
  treasury?: string;
  /**
   * Owner is the address who is allowed to make further changes to the data
   * source.
   */
  owner?: string;
  /**
   * Sender is the signer of this message. Must be the current data source's
   * owner.
   */
  sender?: string;
}
export interface MsgEditDataSourceAminoMsg {
  type: "oracle/EditDataSource";
  value: MsgEditDataSourceAmino;
}
/** MsgEditDataSource is a message for editing an existing data source. */
export interface MsgEditDataSourceSDKType {
  data_source_id: bigint;
  name: string;
  description: string;
  executable: Uint8Array;
  fee: CoinSDKType[];
  treasury: string;
  owner: string;
  sender: string;
}
/** MsgEditDataSourceResponse is response data for MsgEditDataSource message */
export interface MsgEditDataSourceResponse {}
export interface MsgEditDataSourceResponseProtoMsg {
  typeUrl: "/band.oracle.v1.MsgEditDataSourceResponse";
  value: Uint8Array;
}
/** MsgEditDataSourceResponse is response data for MsgEditDataSource message */
export interface MsgEditDataSourceResponseAmino {}
export interface MsgEditDataSourceResponseAminoMsg {
  type: "/band.oracle.v1.MsgEditDataSourceResponse";
  value: MsgEditDataSourceResponseAmino;
}
/** MsgEditDataSourceResponse is response data for MsgEditDataSource message */
export interface MsgEditDataSourceResponseSDKType {}
/** MsgCreateOracleScript is a message for creating an oracle script. */
export interface MsgCreateOracleScript {
  /** Name is the name of this oracle script used for display (optional). */
  name: string;
  /**
   * Description is the description of this oracle script used for display
   * (optional).
   */
  description: string;
  /** Schema is the OBI schema of this oracle script (optional). */
  schema: string;
  /** SourceCodeURL is the absolute URI to the script's source code (optional). */
  sourceCodeUrl: string;
  /** Code is the oracle WebAssembly binary code. Can be raw of gzip compressed. */
  code: Uint8Array;
  /**
   * Owner is the address who is allowed to make further changes to the oracle
   * script.
   */
  owner: string;
  /** Sender is the signer of this message. */
  sender: string;
}
export interface MsgCreateOracleScriptProtoMsg {
  typeUrl: "/band.oracle.v1.MsgCreateOracleScript";
  value: Uint8Array;
}
/** MsgCreateOracleScript is a message for creating an oracle script. */
export interface MsgCreateOracleScriptAmino {
  /** Name is the name of this oracle script used for display (optional). */
  name?: string;
  /**
   * Description is the description of this oracle script used for display
   * (optional).
   */
  description?: string;
  /** Schema is the OBI schema of this oracle script (optional). */
  schema?: string;
  /** SourceCodeURL is the absolute URI to the script's source code (optional). */
  source_code_url?: string;
  /** Code is the oracle WebAssembly binary code. Can be raw of gzip compressed. */
  code?: string;
  /**
   * Owner is the address who is allowed to make further changes to the oracle
   * script.
   */
  owner?: string;
  /** Sender is the signer of this message. */
  sender?: string;
}
export interface MsgCreateOracleScriptAminoMsg {
  type: "oracle/CreateOracleScript";
  value: MsgCreateOracleScriptAmino;
}
/** MsgCreateOracleScript is a message for creating an oracle script. */
export interface MsgCreateOracleScriptSDKType {
  name: string;
  description: string;
  schema: string;
  source_code_url: string;
  code: Uint8Array;
  owner: string;
  sender: string;
}
/**
 * MsgCreateOracleScriptResponse is response data for MsgCreateOracleScript
 * message
 */
export interface MsgCreateOracleScriptResponse {}
export interface MsgCreateOracleScriptResponseProtoMsg {
  typeUrl: "/band.oracle.v1.MsgCreateOracleScriptResponse";
  value: Uint8Array;
}
/**
 * MsgCreateOracleScriptResponse is response data for MsgCreateOracleScript
 * message
 */
export interface MsgCreateOracleScriptResponseAmino {}
export interface MsgCreateOracleScriptResponseAminoMsg {
  type: "/band.oracle.v1.MsgCreateOracleScriptResponse";
  value: MsgCreateOracleScriptResponseAmino;
}
/**
 * MsgCreateOracleScriptResponse is response data for MsgCreateOracleScript
 * message
 */
export interface MsgCreateOracleScriptResponseSDKType {}
/** MsgEditOracleScript is a message for editing an existing oracle script. */
export interface MsgEditOracleScript {
  /** OracleScriptID is the unique identifier of the oracle script to be edited. */
  oracleScriptId: bigint;
  /** Name is the name of this oracle script used for display (optional). */
  name: string;
  /**
   * Description is the description of this oracle script used for display
   * (optional).
   */
  description: string;
  /** Schema is the OBI schema of this oracle script (optional). */
  schema: string;
  /** SourceCodeURL is the absolute URI to the script's source code (optional). */
  sourceCodeUrl: string;
  /** Code is the oracle WebAssembly binary code. Can be raw of gzip compressed. */
  code: Uint8Array;
  /**
   * Owner is an account address who is allowed to make further changes to the
   * oracle script.
   */
  owner: string;
  /**
   * Sender is an account address who sign this message. Must be the current
   * oracle script's owner.
   */
  sender: string;
}
export interface MsgEditOracleScriptProtoMsg {
  typeUrl: "/band.oracle.v1.MsgEditOracleScript";
  value: Uint8Array;
}
/** MsgEditOracleScript is a message for editing an existing oracle script. */
export interface MsgEditOracleScriptAmino {
  /** OracleScriptID is the unique identifier of the oracle script to be edited. */
  oracle_script_id?: string;
  /** Name is the name of this oracle script used for display (optional). */
  name?: string;
  /**
   * Description is the description of this oracle script used for display
   * (optional).
   */
  description?: string;
  /** Schema is the OBI schema of this oracle script (optional). */
  schema?: string;
  /** SourceCodeURL is the absolute URI to the script's source code (optional). */
  source_code_url?: string;
  /** Code is the oracle WebAssembly binary code. Can be raw of gzip compressed. */
  code?: string;
  /**
   * Owner is an account address who is allowed to make further changes to the
   * oracle script.
   */
  owner?: string;
  /**
   * Sender is an account address who sign this message. Must be the current
   * oracle script's owner.
   */
  sender?: string;
}
export interface MsgEditOracleScriptAminoMsg {
  type: "oracle/EditOracleScript";
  value: MsgEditOracleScriptAmino;
}
/** MsgEditOracleScript is a message for editing an existing oracle script. */
export interface MsgEditOracleScriptSDKType {
  oracle_script_id: bigint;
  name: string;
  description: string;
  schema: string;
  source_code_url: string;
  code: Uint8Array;
  owner: string;
  sender: string;
}
/** MsgEditOracleScriptResponse is response data for MsgEditOracleScript message */
export interface MsgEditOracleScriptResponse {}
export interface MsgEditOracleScriptResponseProtoMsg {
  typeUrl: "/band.oracle.v1.MsgEditOracleScriptResponse";
  value: Uint8Array;
}
/** MsgEditOracleScriptResponse is response data for MsgEditOracleScript message */
export interface MsgEditOracleScriptResponseAmino {}
export interface MsgEditOracleScriptResponseAminoMsg {
  type: "/band.oracle.v1.MsgEditOracleScriptResponse";
  value: MsgEditOracleScriptResponseAmino;
}
/** MsgEditOracleScriptResponse is response data for MsgEditOracleScript message */
export interface MsgEditOracleScriptResponseSDKType {}
/**
 * MsgEditOracleScript is a message for activating a validator to become an
 * oracle provider. However, the activation can be revoked once the validator
 * is unable to provide data to fulfill requests
 */
export interface MsgActivate {
  /**
   * Validator is the validator address who sign this message and request to be
   * activated.
   */
  validator: string;
}
export interface MsgActivateProtoMsg {
  typeUrl: "/band.oracle.v1.MsgActivate";
  value: Uint8Array;
}
/**
 * MsgEditOracleScript is a message for activating a validator to become an
 * oracle provider. However, the activation can be revoked once the validator
 * is unable to provide data to fulfill requests
 */
export interface MsgActivateAmino {
  /**
   * Validator is the validator address who sign this message and request to be
   * activated.
   */
  validator?: string;
}
export interface MsgActivateAminoMsg {
  type: "oracle/Activate";
  value: MsgActivateAmino;
}
/**
 * MsgEditOracleScript is a message for activating a validator to become an
 * oracle provider. However, the activation can be revoked once the validator
 * is unable to provide data to fulfill requests
 */
export interface MsgActivateSDKType {
  validator: string;
}
/** MsgActivateResponse is response data for MsgActivate message */
export interface MsgActivateResponse {}
export interface MsgActivateResponseProtoMsg {
  typeUrl: "/band.oracle.v1.MsgActivateResponse";
  value: Uint8Array;
}
/** MsgActivateResponse is response data for MsgActivate message */
export interface MsgActivateResponseAmino {}
export interface MsgActivateResponseAminoMsg {
  type: "/band.oracle.v1.MsgActivateResponse";
  value: MsgActivateResponseAmino;
}
/** MsgActivateResponse is response data for MsgActivate message */
export interface MsgActivateResponseSDKType {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/oracle parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/band.oracle.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /**
   * params defines the x/oracle parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "oracle/UpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/band.oracle.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/band.oracle.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgRequestData(): MsgRequestData {
  return {
    oracleScriptId: BigInt(0),
    calldata: new Uint8Array(),
    askCount: BigInt(0),
    minCount: BigInt(0),
    clientId: "",
    feeLimit: [],
    prepareGas: BigInt(0),
    executeGas: BigInt(0),
    sender: "",
    tssEncoder: 0
  };
}
export const MsgRequestData = {
  typeUrl: "/band.oracle.v1.MsgRequestData",
  encode(message: MsgRequestData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracleScriptId !== BigInt(0)) {
      writer.uint32(8).uint64(message.oracleScriptId);
    }
    if (message.calldata.length !== 0) {
      writer.uint32(18).bytes(message.calldata);
    }
    if (message.askCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.askCount);
    }
    if (message.minCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.minCount);
    }
    if (message.clientId !== "") {
      writer.uint32(42).string(message.clientId);
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
    if (message.sender !== "") {
      writer.uint32(74).string(message.sender);
    }
    if (message.tssEncoder !== 0) {
      writer.uint32(80).int32(message.tssEncoder);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestData();
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
          message.askCount = reader.uint64();
          break;
        case 4:
          message.minCount = reader.uint64();
          break;
        case 5:
          message.clientId = reader.string();
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
        case 9:
          message.sender = reader.string();
          break;
        case 10:
          message.tssEncoder = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRequestData>): MsgRequestData {
    const message = createBaseMsgRequestData();
    message.oracleScriptId = object.oracleScriptId !== undefined && object.oracleScriptId !== null ? BigInt(object.oracleScriptId.toString()) : BigInt(0);
    message.calldata = object.calldata ?? new Uint8Array();
    message.askCount = object.askCount !== undefined && object.askCount !== null ? BigInt(object.askCount.toString()) : BigInt(0);
    message.minCount = object.minCount !== undefined && object.minCount !== null ? BigInt(object.minCount.toString()) : BigInt(0);
    message.clientId = object.clientId ?? "";
    message.feeLimit = object.feeLimit?.map(e => Coin.fromPartial(e)) || [];
    message.prepareGas = object.prepareGas !== undefined && object.prepareGas !== null ? BigInt(object.prepareGas.toString()) : BigInt(0);
    message.executeGas = object.executeGas !== undefined && object.executeGas !== null ? BigInt(object.executeGas.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.tssEncoder = object.tssEncoder ?? 0;
    return message;
  },
  fromAmino(object: MsgRequestDataAmino): MsgRequestData {
    const message = createBaseMsgRequestData();
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
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    message.feeLimit = object.fee_limit?.map(e => Coin.fromAmino(e)) || [];
    if (object.prepare_gas !== undefined && object.prepare_gas !== null) {
      message.prepareGas = BigInt(object.prepare_gas);
    }
    if (object.execute_gas !== undefined && object.execute_gas !== null) {
      message.executeGas = BigInt(object.execute_gas);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.tss_encoder !== undefined && object.tss_encoder !== null) {
      message.tssEncoder = object.tss_encoder;
    }
    return message;
  },
  toAmino(message: MsgRequestData): MsgRequestDataAmino {
    const obj: any = {};
    obj.oracle_script_id = message.oracleScriptId !== BigInt(0) ? message.oracleScriptId?.toString() : undefined;
    obj.calldata = message.calldata ? base64FromBytes(message.calldata) : undefined;
    obj.ask_count = message.askCount !== BigInt(0) ? message.askCount?.toString() : undefined;
    obj.min_count = message.minCount !== BigInt(0) ? message.minCount?.toString() : undefined;
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    if (message.feeLimit) {
      obj.fee_limit = message.feeLimit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_limit = message.feeLimit;
    }
    obj.prepare_gas = message.prepareGas !== BigInt(0) ? message.prepareGas?.toString() : undefined;
    obj.execute_gas = message.executeGas !== BigInt(0) ? message.executeGas?.toString() : undefined;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.tss_encoder = message.tssEncoder === 0 ? undefined : message.tssEncoder;
    return obj;
  },
  fromAminoMsg(object: MsgRequestDataAminoMsg): MsgRequestData {
    return MsgRequestData.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRequestData): MsgRequestDataAminoMsg {
    return {
      type: "oracle/Request",
      value: MsgRequestData.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRequestDataProtoMsg): MsgRequestData {
    return MsgRequestData.decode(message.value);
  },
  toProto(message: MsgRequestData): Uint8Array {
    return MsgRequestData.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestData): MsgRequestDataProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.MsgRequestData",
      value: MsgRequestData.encode(message).finish()
    };
  }
};
function createBaseMsgRequestDataResponse(): MsgRequestDataResponse {
  return {};
}
export const MsgRequestDataResponse = {
  typeUrl: "/band.oracle.v1.MsgRequestDataResponse",
  encode(_: MsgRequestDataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestDataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestDataResponse();
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
  fromPartial(_: Partial<MsgRequestDataResponse>): MsgRequestDataResponse {
    const message = createBaseMsgRequestDataResponse();
    return message;
  },
  fromAmino(_: MsgRequestDataResponseAmino): MsgRequestDataResponse {
    const message = createBaseMsgRequestDataResponse();
    return message;
  },
  toAmino(_: MsgRequestDataResponse): MsgRequestDataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRequestDataResponseAminoMsg): MsgRequestDataResponse {
    return MsgRequestDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestDataResponseProtoMsg): MsgRequestDataResponse {
    return MsgRequestDataResponse.decode(message.value);
  },
  toProto(message: MsgRequestDataResponse): Uint8Array {
    return MsgRequestDataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestDataResponse): MsgRequestDataResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.MsgRequestDataResponse",
      value: MsgRequestDataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReportData(): MsgReportData {
  return {
    requestId: BigInt(0),
    rawReports: [],
    validator: ""
  };
}
export const MsgReportData = {
  typeUrl: "/band.oracle.v1.MsgReportData",
  encode(message: MsgReportData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestId !== BigInt(0)) {
      writer.uint32(8).uint64(message.requestId);
    }
    for (const v of message.rawReports) {
      RawReport.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReportData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.uint64();
          break;
        case 2:
          message.rawReports.push(RawReport.decode(reader, reader.uint32()));
          break;
        case 3:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgReportData>): MsgReportData {
    const message = createBaseMsgReportData();
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    message.rawReports = object.rawReports?.map(e => RawReport.fromPartial(e)) || [];
    message.validator = object.validator ?? "";
    return message;
  },
  fromAmino(object: MsgReportDataAmino): MsgReportData {
    const message = createBaseMsgReportData();
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    message.rawReports = object.raw_reports?.map(e => RawReport.fromAmino(e)) || [];
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    return message;
  },
  toAmino(message: MsgReportData): MsgReportDataAmino {
    const obj: any = {};
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    if (message.rawReports) {
      obj.raw_reports = message.rawReports.map(e => e ? RawReport.toAmino(e) : undefined);
    } else {
      obj.raw_reports = message.rawReports;
    }
    obj.validator = message.validator === "" ? undefined : message.validator;
    return obj;
  },
  fromAminoMsg(object: MsgReportDataAminoMsg): MsgReportData {
    return MsgReportData.fromAmino(object.value);
  },
  toAminoMsg(message: MsgReportData): MsgReportDataAminoMsg {
    return {
      type: "oracle/Report",
      value: MsgReportData.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgReportDataProtoMsg): MsgReportData {
    return MsgReportData.decode(message.value);
  },
  toProto(message: MsgReportData): Uint8Array {
    return MsgReportData.encode(message).finish();
  },
  toProtoMsg(message: MsgReportData): MsgReportDataProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.MsgReportData",
      value: MsgReportData.encode(message).finish()
    };
  }
};
function createBaseMsgReportDataResponse(): MsgReportDataResponse {
  return {};
}
export const MsgReportDataResponse = {
  typeUrl: "/band.oracle.v1.MsgReportDataResponse",
  encode(_: MsgReportDataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReportDataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportDataResponse();
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
  fromPartial(_: Partial<MsgReportDataResponse>): MsgReportDataResponse {
    const message = createBaseMsgReportDataResponse();
    return message;
  },
  fromAmino(_: MsgReportDataResponseAmino): MsgReportDataResponse {
    const message = createBaseMsgReportDataResponse();
    return message;
  },
  toAmino(_: MsgReportDataResponse): MsgReportDataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgReportDataResponseAminoMsg): MsgReportDataResponse {
    return MsgReportDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReportDataResponseProtoMsg): MsgReportDataResponse {
    return MsgReportDataResponse.decode(message.value);
  },
  toProto(message: MsgReportDataResponse): Uint8Array {
    return MsgReportDataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReportDataResponse): MsgReportDataResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.MsgReportDataResponse",
      value: MsgReportDataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateDataSource(): MsgCreateDataSource {
  return {
    name: "",
    description: "",
    executable: new Uint8Array(),
    fee: [],
    treasury: "",
    owner: "",
    sender: ""
  };
}
export const MsgCreateDataSource = {
  typeUrl: "/band.oracle.v1.MsgCreateDataSource",
  encode(message: MsgCreateDataSource, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.executable.length !== 0) {
      writer.uint32(26).bytes(message.executable);
    }
    for (const v of message.fee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.treasury !== "") {
      writer.uint32(42).string(message.treasury);
    }
    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }
    if (message.sender !== "") {
      writer.uint32(58).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDataSource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDataSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.executable = reader.bytes();
          break;
        case 4:
          message.fee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.treasury = reader.string();
          break;
        case 6:
          message.owner = reader.string();
          break;
        case 7:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateDataSource>): MsgCreateDataSource {
    const message = createBaseMsgCreateDataSource();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.executable = object.executable ?? new Uint8Array();
    message.fee = object.fee?.map(e => Coin.fromPartial(e)) || [];
    message.treasury = object.treasury ?? "";
    message.owner = object.owner ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgCreateDataSourceAmino): MsgCreateDataSource {
    const message = createBaseMsgCreateDataSource();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.executable !== undefined && object.executable !== null) {
      message.executable = bytesFromBase64(object.executable);
    }
    message.fee = object.fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.treasury !== undefined && object.treasury !== null) {
      message.treasury = object.treasury;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgCreateDataSource): MsgCreateDataSourceAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.executable = message.executable ? base64FromBytes(message.executable) : undefined;
    if (message.fee) {
      obj.fee = message.fee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee = message.fee;
    }
    obj.treasury = message.treasury === "" ? undefined : message.treasury;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDataSourceAminoMsg): MsgCreateDataSource {
    return MsgCreateDataSource.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateDataSource): MsgCreateDataSourceAminoMsg {
    return {
      type: "oracle/CreateDataSource",
      value: MsgCreateDataSource.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateDataSourceProtoMsg): MsgCreateDataSource {
    return MsgCreateDataSource.decode(message.value);
  },
  toProto(message: MsgCreateDataSource): Uint8Array {
    return MsgCreateDataSource.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDataSource): MsgCreateDataSourceProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.MsgCreateDataSource",
      value: MsgCreateDataSource.encode(message).finish()
    };
  }
};
function createBaseMsgCreateDataSourceResponse(): MsgCreateDataSourceResponse {
  return {};
}
export const MsgCreateDataSourceResponse = {
  typeUrl: "/band.oracle.v1.MsgCreateDataSourceResponse",
  encode(_: MsgCreateDataSourceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDataSourceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDataSourceResponse();
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
  fromPartial(_: Partial<MsgCreateDataSourceResponse>): MsgCreateDataSourceResponse {
    const message = createBaseMsgCreateDataSourceResponse();
    return message;
  },
  fromAmino(_: MsgCreateDataSourceResponseAmino): MsgCreateDataSourceResponse {
    const message = createBaseMsgCreateDataSourceResponse();
    return message;
  },
  toAmino(_: MsgCreateDataSourceResponse): MsgCreateDataSourceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateDataSourceResponseAminoMsg): MsgCreateDataSourceResponse {
    return MsgCreateDataSourceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDataSourceResponseProtoMsg): MsgCreateDataSourceResponse {
    return MsgCreateDataSourceResponse.decode(message.value);
  },
  toProto(message: MsgCreateDataSourceResponse): Uint8Array {
    return MsgCreateDataSourceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDataSourceResponse): MsgCreateDataSourceResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.MsgCreateDataSourceResponse",
      value: MsgCreateDataSourceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEditDataSource(): MsgEditDataSource {
  return {
    dataSourceId: BigInt(0),
    name: "",
    description: "",
    executable: new Uint8Array(),
    fee: [],
    treasury: "",
    owner: "",
    sender: ""
  };
}
export const MsgEditDataSource = {
  typeUrl: "/band.oracle.v1.MsgEditDataSource",
  encode(message: MsgEditDataSource, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dataSourceId !== BigInt(0)) {
      writer.uint32(8).uint64(message.dataSourceId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.executable.length !== 0) {
      writer.uint32(34).bytes(message.executable);
    }
    for (const v of message.fee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.treasury !== "") {
      writer.uint32(50).string(message.treasury);
    }
    if (message.owner !== "") {
      writer.uint32(58).string(message.owner);
    }
    if (message.sender !== "") {
      writer.uint32(66).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditDataSource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditDataSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataSourceId = reader.uint64();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.executable = reader.bytes();
          break;
        case 5:
          message.fee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.treasury = reader.string();
          break;
        case 7:
          message.owner = reader.string();
          break;
        case 8:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgEditDataSource>): MsgEditDataSource {
    const message = createBaseMsgEditDataSource();
    message.dataSourceId = object.dataSourceId !== undefined && object.dataSourceId !== null ? BigInt(object.dataSourceId.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.executable = object.executable ?? new Uint8Array();
    message.fee = object.fee?.map(e => Coin.fromPartial(e)) || [];
    message.treasury = object.treasury ?? "";
    message.owner = object.owner ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgEditDataSourceAmino): MsgEditDataSource {
    const message = createBaseMsgEditDataSource();
    if (object.data_source_id !== undefined && object.data_source_id !== null) {
      message.dataSourceId = BigInt(object.data_source_id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.executable !== undefined && object.executable !== null) {
      message.executable = bytesFromBase64(object.executable);
    }
    message.fee = object.fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.treasury !== undefined && object.treasury !== null) {
      message.treasury = object.treasury;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgEditDataSource): MsgEditDataSourceAmino {
    const obj: any = {};
    obj.data_source_id = message.dataSourceId !== BigInt(0) ? message.dataSourceId?.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.executable = message.executable ? base64FromBytes(message.executable) : undefined;
    if (message.fee) {
      obj.fee = message.fee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee = message.fee;
    }
    obj.treasury = message.treasury === "" ? undefined : message.treasury;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgEditDataSourceAminoMsg): MsgEditDataSource {
    return MsgEditDataSource.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEditDataSource): MsgEditDataSourceAminoMsg {
    return {
      type: "oracle/EditDataSource",
      value: MsgEditDataSource.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEditDataSourceProtoMsg): MsgEditDataSource {
    return MsgEditDataSource.decode(message.value);
  },
  toProto(message: MsgEditDataSource): Uint8Array {
    return MsgEditDataSource.encode(message).finish();
  },
  toProtoMsg(message: MsgEditDataSource): MsgEditDataSourceProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.MsgEditDataSource",
      value: MsgEditDataSource.encode(message).finish()
    };
  }
};
function createBaseMsgEditDataSourceResponse(): MsgEditDataSourceResponse {
  return {};
}
export const MsgEditDataSourceResponse = {
  typeUrl: "/band.oracle.v1.MsgEditDataSourceResponse",
  encode(_: MsgEditDataSourceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditDataSourceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditDataSourceResponse();
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
  fromPartial(_: Partial<MsgEditDataSourceResponse>): MsgEditDataSourceResponse {
    const message = createBaseMsgEditDataSourceResponse();
    return message;
  },
  fromAmino(_: MsgEditDataSourceResponseAmino): MsgEditDataSourceResponse {
    const message = createBaseMsgEditDataSourceResponse();
    return message;
  },
  toAmino(_: MsgEditDataSourceResponse): MsgEditDataSourceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditDataSourceResponseAminoMsg): MsgEditDataSourceResponse {
    return MsgEditDataSourceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditDataSourceResponseProtoMsg): MsgEditDataSourceResponse {
    return MsgEditDataSourceResponse.decode(message.value);
  },
  toProto(message: MsgEditDataSourceResponse): Uint8Array {
    return MsgEditDataSourceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditDataSourceResponse): MsgEditDataSourceResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.MsgEditDataSourceResponse",
      value: MsgEditDataSourceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateOracleScript(): MsgCreateOracleScript {
  return {
    name: "",
    description: "",
    schema: "",
    sourceCodeUrl: "",
    code: new Uint8Array(),
    owner: "",
    sender: ""
  };
}
export const MsgCreateOracleScript = {
  typeUrl: "/band.oracle.v1.MsgCreateOracleScript",
  encode(message: MsgCreateOracleScript, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.schema !== "") {
      writer.uint32(26).string(message.schema);
    }
    if (message.sourceCodeUrl !== "") {
      writer.uint32(34).string(message.sourceCodeUrl);
    }
    if (message.code.length !== 0) {
      writer.uint32(42).bytes(message.code);
    }
    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }
    if (message.sender !== "") {
      writer.uint32(58).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateOracleScript {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOracleScript();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.schema = reader.string();
          break;
        case 4:
          message.sourceCodeUrl = reader.string();
          break;
        case 5:
          message.code = reader.bytes();
          break;
        case 6:
          message.owner = reader.string();
          break;
        case 7:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateOracleScript>): MsgCreateOracleScript {
    const message = createBaseMsgCreateOracleScript();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.schema = object.schema ?? "";
    message.sourceCodeUrl = object.sourceCodeUrl ?? "";
    message.code = object.code ?? new Uint8Array();
    message.owner = object.owner ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgCreateOracleScriptAmino): MsgCreateOracleScript {
    const message = createBaseMsgCreateOracleScript();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = object.schema;
    }
    if (object.source_code_url !== undefined && object.source_code_url !== null) {
      message.sourceCodeUrl = object.source_code_url;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = bytesFromBase64(object.code);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgCreateOracleScript): MsgCreateOracleScriptAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.schema = message.schema === "" ? undefined : message.schema;
    obj.source_code_url = message.sourceCodeUrl === "" ? undefined : message.sourceCodeUrl;
    obj.code = message.code ? base64FromBytes(message.code) : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgCreateOracleScriptAminoMsg): MsgCreateOracleScript {
    return MsgCreateOracleScript.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateOracleScript): MsgCreateOracleScriptAminoMsg {
    return {
      type: "oracle/CreateOracleScript",
      value: MsgCreateOracleScript.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateOracleScriptProtoMsg): MsgCreateOracleScript {
    return MsgCreateOracleScript.decode(message.value);
  },
  toProto(message: MsgCreateOracleScript): Uint8Array {
    return MsgCreateOracleScript.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateOracleScript): MsgCreateOracleScriptProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.MsgCreateOracleScript",
      value: MsgCreateOracleScript.encode(message).finish()
    };
  }
};
function createBaseMsgCreateOracleScriptResponse(): MsgCreateOracleScriptResponse {
  return {};
}
export const MsgCreateOracleScriptResponse = {
  typeUrl: "/band.oracle.v1.MsgCreateOracleScriptResponse",
  encode(_: MsgCreateOracleScriptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateOracleScriptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOracleScriptResponse();
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
  fromPartial(_: Partial<MsgCreateOracleScriptResponse>): MsgCreateOracleScriptResponse {
    const message = createBaseMsgCreateOracleScriptResponse();
    return message;
  },
  fromAmino(_: MsgCreateOracleScriptResponseAmino): MsgCreateOracleScriptResponse {
    const message = createBaseMsgCreateOracleScriptResponse();
    return message;
  },
  toAmino(_: MsgCreateOracleScriptResponse): MsgCreateOracleScriptResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateOracleScriptResponseAminoMsg): MsgCreateOracleScriptResponse {
    return MsgCreateOracleScriptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateOracleScriptResponseProtoMsg): MsgCreateOracleScriptResponse {
    return MsgCreateOracleScriptResponse.decode(message.value);
  },
  toProto(message: MsgCreateOracleScriptResponse): Uint8Array {
    return MsgCreateOracleScriptResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateOracleScriptResponse): MsgCreateOracleScriptResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.MsgCreateOracleScriptResponse",
      value: MsgCreateOracleScriptResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEditOracleScript(): MsgEditOracleScript {
  return {
    oracleScriptId: BigInt(0),
    name: "",
    description: "",
    schema: "",
    sourceCodeUrl: "",
    code: new Uint8Array(),
    owner: "",
    sender: ""
  };
}
export const MsgEditOracleScript = {
  typeUrl: "/band.oracle.v1.MsgEditOracleScript",
  encode(message: MsgEditOracleScript, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracleScriptId !== BigInt(0)) {
      writer.uint32(8).uint64(message.oracleScriptId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.schema !== "") {
      writer.uint32(34).string(message.schema);
    }
    if (message.sourceCodeUrl !== "") {
      writer.uint32(42).string(message.sourceCodeUrl);
    }
    if (message.code.length !== 0) {
      writer.uint32(50).bytes(message.code);
    }
    if (message.owner !== "") {
      writer.uint32(58).string(message.owner);
    }
    if (message.sender !== "") {
      writer.uint32(66).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditOracleScript {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditOracleScript();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleScriptId = reader.uint64();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.schema = reader.string();
          break;
        case 5:
          message.sourceCodeUrl = reader.string();
          break;
        case 6:
          message.code = reader.bytes();
          break;
        case 7:
          message.owner = reader.string();
          break;
        case 8:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgEditOracleScript>): MsgEditOracleScript {
    const message = createBaseMsgEditOracleScript();
    message.oracleScriptId = object.oracleScriptId !== undefined && object.oracleScriptId !== null ? BigInt(object.oracleScriptId.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.schema = object.schema ?? "";
    message.sourceCodeUrl = object.sourceCodeUrl ?? "";
    message.code = object.code ?? new Uint8Array();
    message.owner = object.owner ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgEditOracleScriptAmino): MsgEditOracleScript {
    const message = createBaseMsgEditOracleScript();
    if (object.oracle_script_id !== undefined && object.oracle_script_id !== null) {
      message.oracleScriptId = BigInt(object.oracle_script_id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = object.schema;
    }
    if (object.source_code_url !== undefined && object.source_code_url !== null) {
      message.sourceCodeUrl = object.source_code_url;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = bytesFromBase64(object.code);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgEditOracleScript): MsgEditOracleScriptAmino {
    const obj: any = {};
    obj.oracle_script_id = message.oracleScriptId !== BigInt(0) ? message.oracleScriptId?.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.schema = message.schema === "" ? undefined : message.schema;
    obj.source_code_url = message.sourceCodeUrl === "" ? undefined : message.sourceCodeUrl;
    obj.code = message.code ? base64FromBytes(message.code) : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgEditOracleScriptAminoMsg): MsgEditOracleScript {
    return MsgEditOracleScript.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEditOracleScript): MsgEditOracleScriptAminoMsg {
    return {
      type: "oracle/EditOracleScript",
      value: MsgEditOracleScript.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEditOracleScriptProtoMsg): MsgEditOracleScript {
    return MsgEditOracleScript.decode(message.value);
  },
  toProto(message: MsgEditOracleScript): Uint8Array {
    return MsgEditOracleScript.encode(message).finish();
  },
  toProtoMsg(message: MsgEditOracleScript): MsgEditOracleScriptProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.MsgEditOracleScript",
      value: MsgEditOracleScript.encode(message).finish()
    };
  }
};
function createBaseMsgEditOracleScriptResponse(): MsgEditOracleScriptResponse {
  return {};
}
export const MsgEditOracleScriptResponse = {
  typeUrl: "/band.oracle.v1.MsgEditOracleScriptResponse",
  encode(_: MsgEditOracleScriptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditOracleScriptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditOracleScriptResponse();
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
  fromPartial(_: Partial<MsgEditOracleScriptResponse>): MsgEditOracleScriptResponse {
    const message = createBaseMsgEditOracleScriptResponse();
    return message;
  },
  fromAmino(_: MsgEditOracleScriptResponseAmino): MsgEditOracleScriptResponse {
    const message = createBaseMsgEditOracleScriptResponse();
    return message;
  },
  toAmino(_: MsgEditOracleScriptResponse): MsgEditOracleScriptResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditOracleScriptResponseAminoMsg): MsgEditOracleScriptResponse {
    return MsgEditOracleScriptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditOracleScriptResponseProtoMsg): MsgEditOracleScriptResponse {
    return MsgEditOracleScriptResponse.decode(message.value);
  },
  toProto(message: MsgEditOracleScriptResponse): Uint8Array {
    return MsgEditOracleScriptResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditOracleScriptResponse): MsgEditOracleScriptResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.MsgEditOracleScriptResponse",
      value: MsgEditOracleScriptResponse.encode(message).finish()
    };
  }
};
function createBaseMsgActivate(): MsgActivate {
  return {
    validator: ""
  };
}
export const MsgActivate = {
  typeUrl: "/band.oracle.v1.MsgActivate",
  encode(message: MsgActivate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgActivate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgActivate>): MsgActivate {
    const message = createBaseMsgActivate();
    message.validator = object.validator ?? "";
    return message;
  },
  fromAmino(object: MsgActivateAmino): MsgActivate {
    const message = createBaseMsgActivate();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    return message;
  },
  toAmino(message: MsgActivate): MsgActivateAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    return obj;
  },
  fromAminoMsg(object: MsgActivateAminoMsg): MsgActivate {
    return MsgActivate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgActivate): MsgActivateAminoMsg {
    return {
      type: "oracle/Activate",
      value: MsgActivate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgActivateProtoMsg): MsgActivate {
    return MsgActivate.decode(message.value);
  },
  toProto(message: MsgActivate): Uint8Array {
    return MsgActivate.encode(message).finish();
  },
  toProtoMsg(message: MsgActivate): MsgActivateProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.MsgActivate",
      value: MsgActivate.encode(message).finish()
    };
  }
};
function createBaseMsgActivateResponse(): MsgActivateResponse {
  return {};
}
export const MsgActivateResponse = {
  typeUrl: "/band.oracle.v1.MsgActivateResponse",
  encode(_: MsgActivateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgActivateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateResponse();
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
  fromPartial(_: Partial<MsgActivateResponse>): MsgActivateResponse {
    const message = createBaseMsgActivateResponse();
    return message;
  },
  fromAmino(_: MsgActivateResponseAmino): MsgActivateResponse {
    const message = createBaseMsgActivateResponse();
    return message;
  },
  toAmino(_: MsgActivateResponse): MsgActivateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgActivateResponseAminoMsg): MsgActivateResponse {
    return MsgActivateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgActivateResponseProtoMsg): MsgActivateResponse {
    return MsgActivateResponse.decode(message.value);
  },
  toProto(message: MsgActivateResponse): Uint8Array {
    return MsgActivateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateResponse): MsgActivateResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.MsgActivateResponse",
      value: MsgActivateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/band.oracle.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "oracle/UpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/band.oracle.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};