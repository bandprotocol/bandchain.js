//@ts-nocheck
import { MsgRequestData, MsgReportData, MsgCreateDataSource, MsgEditDataSource, MsgCreateOracleScript, MsgEditOracleScript, MsgActivate, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/oracle.v1.MsgRequestData": {
    aminoType: "oracle/Request",
    toAmino: MsgRequestData.toAmino,
    fromAmino: MsgRequestData.fromAmino
  },
  "/oracle.v1.MsgReportData": {
    aminoType: "oracle/Report",
    toAmino: MsgReportData.toAmino,
    fromAmino: MsgReportData.fromAmino
  },
  "/oracle.v1.MsgCreateDataSource": {
    aminoType: "oracle/CreateDataSource",
    toAmino: MsgCreateDataSource.toAmino,
    fromAmino: MsgCreateDataSource.fromAmino
  },
  "/oracle.v1.MsgEditDataSource": {
    aminoType: "oracle/EditDataSource",
    toAmino: MsgEditDataSource.toAmino,
    fromAmino: MsgEditDataSource.fromAmino
  },
  "/oracle.v1.MsgCreateOracleScript": {
    aminoType: "oracle/CreateOracleScript",
    toAmino: MsgCreateOracleScript.toAmino,
    fromAmino: MsgCreateOracleScript.fromAmino
  },
  "/oracle.v1.MsgEditOracleScript": {
    aminoType: "oracle/EditOracleScript",
    toAmino: MsgEditOracleScript.toAmino,
    fromAmino: MsgEditOracleScript.fromAmino
  },
  "/oracle.v1.MsgActivate": {
    aminoType: "oracle/Activate",
    toAmino: MsgActivate.toAmino,
    fromAmino: MsgActivate.fromAmino
  },
  "/oracle.v1.MsgUpdateParams": {
    aminoType: "oracle/UpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};