// package: band.oracle.v1
// file: band/oracle/v1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as band_oracle_v1_oracle_pb from "../../../band/oracle/v1/oracle_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): band_oracle_v1_oracle_pb.Params | undefined;
  setParams(value?: band_oracle_v1_oracle_pb.Params): void;

  clearDataSourcesList(): void;
  getDataSourcesList(): Array<band_oracle_v1_oracle_pb.DataSource>;
  setDataSourcesList(value: Array<band_oracle_v1_oracle_pb.DataSource>): void;
  addDataSources(value?: band_oracle_v1_oracle_pb.DataSource, index?: number): band_oracle_v1_oracle_pb.DataSource;

  clearOracleScriptsList(): void;
  getOracleScriptsList(): Array<band_oracle_v1_oracle_pb.OracleScript>;
  setOracleScriptsList(value: Array<band_oracle_v1_oracle_pb.OracleScript>): void;
  addOracleScripts(value?: band_oracle_v1_oracle_pb.OracleScript, index?: number): band_oracle_v1_oracle_pb.OracleScript;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    params?: band_oracle_v1_oracle_pb.Params.AsObject,
    dataSourcesList: Array<band_oracle_v1_oracle_pb.DataSource.AsObject>,
    oracleScriptsList: Array<band_oracle_v1_oracle_pb.OracleScript.AsObject>,
  }
}

