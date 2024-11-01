//@ts-nocheck
import { MsgRequestData, MsgReportData, MsgCreateDataSource, MsgEditDataSource, MsgCreateOracleScript, MsgEditOracleScript, MsgActivate, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/band.oracle.v1.MsgRequestData": {
    aminoType: "oracle/Request",
    toAmino: MsgRequestData.toAmino,
    fromAmino: MsgRequestData.fromAmino
  },
  "/band.oracle.v1.MsgReportData": {
    aminoType: "oracle/Report",
    toAmino: MsgReportData.toAmino,
    fromAmino: MsgReportData.fromAmino
  },
  "/band.oracle.v1.MsgCreateDataSource": {
    aminoType: "oracle/CreateDataSource",
    toAmino: MsgCreateDataSource.toAmino,
    fromAmino: MsgCreateDataSource.fromAmino
  },
  "/band.oracle.v1.MsgEditDataSource": {
    aminoType: "oracle/EditDataSource",
    toAmino: MsgEditDataSource.toAmino,
    fromAmino: MsgEditDataSource.fromAmino
  },
  "/band.oracle.v1.MsgCreateOracleScript": {
    aminoType: "oracle/CreateOracleScript",
    toAmino: MsgCreateOracleScript.toAmino,
    fromAmino: MsgCreateOracleScript.fromAmino
  },
  "/band.oracle.v1.MsgEditOracleScript": {
    aminoType: "oracle/EditOracleScript",
    toAmino: MsgEditOracleScript.toAmino,
    fromAmino: MsgEditOracleScript.fromAmino
  },
  "/band.oracle.v1.MsgActivate": {
    aminoType: "oracle/Activate",
    toAmino: MsgActivate.toAmino,
    fromAmino: MsgActivate.fromAmino
  },
  "/band.oracle.v1.MsgUpdateParams": {
    aminoType: "oracle/UpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};