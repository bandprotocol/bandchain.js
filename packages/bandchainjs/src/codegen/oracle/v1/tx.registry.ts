//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRequestData, MsgReportData, MsgCreateDataSource, MsgEditDataSource, MsgCreateOracleScript, MsgEditOracleScript, MsgActivate } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/oracle.v1.MsgRequestData", MsgRequestData], ["/oracle.v1.MsgReportData", MsgReportData], ["/oracle.v1.MsgCreateDataSource", MsgCreateDataSource], ["/oracle.v1.MsgEditDataSource", MsgEditDataSource], ["/oracle.v1.MsgCreateOracleScript", MsgCreateOracleScript], ["/oracle.v1.MsgEditOracleScript", MsgEditOracleScript], ["/oracle.v1.MsgActivate", MsgActivate]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    requestData(value: MsgRequestData) {
      return {
        typeUrl: "/oracle.v1.MsgRequestData",
        value: MsgRequestData.encode(value).finish()
      };
    },
    reportData(value: MsgReportData) {
      return {
        typeUrl: "/oracle.v1.MsgReportData",
        value: MsgReportData.encode(value).finish()
      };
    },
    createDataSource(value: MsgCreateDataSource) {
      return {
        typeUrl: "/oracle.v1.MsgCreateDataSource",
        value: MsgCreateDataSource.encode(value).finish()
      };
    },
    editDataSource(value: MsgEditDataSource) {
      return {
        typeUrl: "/oracle.v1.MsgEditDataSource",
        value: MsgEditDataSource.encode(value).finish()
      };
    },
    createOracleScript(value: MsgCreateOracleScript) {
      return {
        typeUrl: "/oracle.v1.MsgCreateOracleScript",
        value: MsgCreateOracleScript.encode(value).finish()
      };
    },
    editOracleScript(value: MsgEditOracleScript) {
      return {
        typeUrl: "/oracle.v1.MsgEditOracleScript",
        value: MsgEditOracleScript.encode(value).finish()
      };
    },
    activate(value: MsgActivate) {
      return {
        typeUrl: "/oracle.v1.MsgActivate",
        value: MsgActivate.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    requestData(value: MsgRequestData) {
      return {
        typeUrl: "/oracle.v1.MsgRequestData",
        value
      };
    },
    reportData(value: MsgReportData) {
      return {
        typeUrl: "/oracle.v1.MsgReportData",
        value
      };
    },
    createDataSource(value: MsgCreateDataSource) {
      return {
        typeUrl: "/oracle.v1.MsgCreateDataSource",
        value
      };
    },
    editDataSource(value: MsgEditDataSource) {
      return {
        typeUrl: "/oracle.v1.MsgEditDataSource",
        value
      };
    },
    createOracleScript(value: MsgCreateOracleScript) {
      return {
        typeUrl: "/oracle.v1.MsgCreateOracleScript",
        value
      };
    },
    editOracleScript(value: MsgEditOracleScript) {
      return {
        typeUrl: "/oracle.v1.MsgEditOracleScript",
        value
      };
    },
    activate(value: MsgActivate) {
      return {
        typeUrl: "/oracle.v1.MsgActivate",
        value
      };
    }
  },
  fromPartial: {
    requestData(value: MsgRequestData) {
      return {
        typeUrl: "/oracle.v1.MsgRequestData",
        value: MsgRequestData.fromPartial(value)
      };
    },
    reportData(value: MsgReportData) {
      return {
        typeUrl: "/oracle.v1.MsgReportData",
        value: MsgReportData.fromPartial(value)
      };
    },
    createDataSource(value: MsgCreateDataSource) {
      return {
        typeUrl: "/oracle.v1.MsgCreateDataSource",
        value: MsgCreateDataSource.fromPartial(value)
      };
    },
    editDataSource(value: MsgEditDataSource) {
      return {
        typeUrl: "/oracle.v1.MsgEditDataSource",
        value: MsgEditDataSource.fromPartial(value)
      };
    },
    createOracleScript(value: MsgCreateOracleScript) {
      return {
        typeUrl: "/oracle.v1.MsgCreateOracleScript",
        value: MsgCreateOracleScript.fromPartial(value)
      };
    },
    editOracleScript(value: MsgEditOracleScript) {
      return {
        typeUrl: "/oracle.v1.MsgEditOracleScript",
        value: MsgEditOracleScript.fromPartial(value)
      };
    },
    activate(value: MsgActivate) {
      return {
        typeUrl: "/oracle.v1.MsgActivate",
        value: MsgActivate.fromPartial(value)
      };
    }
  }
};