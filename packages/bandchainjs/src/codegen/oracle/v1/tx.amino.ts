//@ts-nocheck
import { MsgRequestData, MsgReportData, MsgCreateDataSource, MsgEditDataSource, MsgCreateOracleScript, MsgEditOracleScript, MsgActivate } from "./tx";
export const AminoConverter = {
  "/oracle.v1.MsgRequestData": {
    aminoType: "/oracle.v1.MsgRequestData",
    toAmino: MsgRequestData.toAmino,
    fromAmino: MsgRequestData.fromAmino
  },
  "/oracle.v1.MsgReportData": {
    aminoType: "/oracle.v1.MsgReportData",
    toAmino: MsgReportData.toAmino,
    fromAmino: MsgReportData.fromAmino
  },
  "/oracle.v1.MsgCreateDataSource": {
    aminoType: "/oracle.v1.MsgCreateDataSource",
    toAmino: MsgCreateDataSource.toAmino,
    fromAmino: MsgCreateDataSource.fromAmino
  },
  "/oracle.v1.MsgEditDataSource": {
    aminoType: "/oracle.v1.MsgEditDataSource",
    toAmino: MsgEditDataSource.toAmino,
    fromAmino: MsgEditDataSource.fromAmino
  },
  "/oracle.v1.MsgCreateOracleScript": {
    aminoType: "/oracle.v1.MsgCreateOracleScript",
    toAmino: MsgCreateOracleScript.toAmino,
    fromAmino: MsgCreateOracleScript.fromAmino
  },
  "/oracle.v1.MsgEditOracleScript": {
    aminoType: "/oracle.v1.MsgEditOracleScript",
    toAmino: MsgEditOracleScript.toAmino,
    fromAmino: MsgEditOracleScript.fromAmino
  },
  "/oracle.v1.MsgActivate": {
    aminoType: "/oracle.v1.MsgActivate",
    toAmino: MsgActivate.toAmino,
    fromAmino: MsgActivate.fromAmino
  }
};