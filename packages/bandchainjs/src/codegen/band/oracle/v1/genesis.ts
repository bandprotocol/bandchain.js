//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType, DataSource, DataSourceAmino, DataSourceSDKType, OracleScript, OracleScriptAmino, OracleScriptSDKType } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
  /** Params defines all the parameters of the module. */
  params: Params;
  /** DataSources are data sources to be installed during genesis phase. */
  dataSources: DataSource[];
  /** OracleScripts are list of oracle scripts to be installed during genesis phase. */
  oracleScripts: OracleScript[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/band.oracle.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateAmino {
  /** Params defines all the parameters of the module. */
  params?: ParamsAmino;
  /** DataSources are data sources to be installed during genesis phase. */
  data_sources?: DataSourceAmino[];
  /** OracleScripts are list of oracle scripts to be installed during genesis phase. */
  oracle_scripts?: OracleScriptAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/band.oracle.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  data_sources: DataSourceSDKType[];
  oracle_scripts: OracleScriptSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    dataSources: [],
    oracleScripts: []
  };
}
export const GenesisState = {
  typeUrl: "/band.oracle.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.dataSources) {
      DataSource.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.oracleScripts) {
      OracleScript.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.dataSources.push(DataSource.decode(reader, reader.uint32()));
          break;
        case 3:
          message.oracleScripts.push(OracleScript.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.dataSources = object.dataSources?.map(e => DataSource.fromPartial(e)) || [];
    message.oracleScripts = object.oracleScripts?.map(e => OracleScript.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.dataSources = object.data_sources?.map(e => DataSource.fromAmino(e)) || [];
    message.oracleScripts = object.oracle_scripts?.map(e => OracleScript.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.dataSources) {
      obj.data_sources = message.dataSources.map(e => e ? DataSource.toAmino(e) : undefined);
    } else {
      obj.data_sources = message.dataSources;
    }
    if (message.oracleScripts) {
      obj.oracle_scripts = message.oracleScripts.map(e => e ? OracleScript.toAmino(e) : undefined);
    } else {
      obj.oracle_scripts = message.oracleScripts;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/band.oracle.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};