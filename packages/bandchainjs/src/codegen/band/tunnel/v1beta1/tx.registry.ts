//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateTunnel, MsgUpdateRoute, MsgUpdateSignalsAndInterval, MsgWithdrawFeePayerFunds, MsgActivate, MsgDeactivate, MsgTriggerTunnel, MsgDepositToTunnel, MsgWithdrawFromTunnel, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/band.tunnel.v1beta1.MsgCreateTunnel", MsgCreateTunnel], ["/band.tunnel.v1beta1.MsgUpdateRoute", MsgUpdateRoute], ["/band.tunnel.v1beta1.MsgUpdateSignalsAndInterval", MsgUpdateSignalsAndInterval], ["/band.tunnel.v1beta1.MsgWithdrawFeePayerFunds", MsgWithdrawFeePayerFunds], ["/band.tunnel.v1beta1.MsgActivate", MsgActivate], ["/band.tunnel.v1beta1.MsgDeactivate", MsgDeactivate], ["/band.tunnel.v1beta1.MsgTriggerTunnel", MsgTriggerTunnel], ["/band.tunnel.v1beta1.MsgDepositToTunnel", MsgDepositToTunnel], ["/band.tunnel.v1beta1.MsgWithdrawFromTunnel", MsgWithdrawFromTunnel], ["/band.tunnel.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createTunnel(value: MsgCreateTunnel) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgCreateTunnel",
        value: MsgCreateTunnel.encode(value).finish()
      };
    },
    updateRoute(value: MsgUpdateRoute) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgUpdateRoute",
        value: MsgUpdateRoute.encode(value).finish()
      };
    },
    updateSignalsAndInterval(value: MsgUpdateSignalsAndInterval) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgUpdateSignalsAndInterval",
        value: MsgUpdateSignalsAndInterval.encode(value).finish()
      };
    },
    withdrawFeePayerFunds(value: MsgWithdrawFeePayerFunds) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFeePayerFunds",
        value: MsgWithdrawFeePayerFunds.encode(value).finish()
      };
    },
    activate(value: MsgActivate) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgActivate",
        value: MsgActivate.encode(value).finish()
      };
    },
    deactivate(value: MsgDeactivate) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgDeactivate",
        value: MsgDeactivate.encode(value).finish()
      };
    },
    triggerTunnel(value: MsgTriggerTunnel) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgTriggerTunnel",
        value: MsgTriggerTunnel.encode(value).finish()
      };
    },
    depositToTunnel(value: MsgDepositToTunnel) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgDepositToTunnel",
        value: MsgDepositToTunnel.encode(value).finish()
      };
    },
    withdrawFromTunnel(value: MsgWithdrawFromTunnel) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFromTunnel",
        value: MsgWithdrawFromTunnel.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createTunnel(value: MsgCreateTunnel) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgCreateTunnel",
        value
      };
    },
    updateRoute(value: MsgUpdateRoute) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgUpdateRoute",
        value
      };
    },
    updateSignalsAndInterval(value: MsgUpdateSignalsAndInterval) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgUpdateSignalsAndInterval",
        value
      };
    },
    withdrawFeePayerFunds(value: MsgWithdrawFeePayerFunds) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFeePayerFunds",
        value
      };
    },
    activate(value: MsgActivate) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgActivate",
        value
      };
    },
    deactivate(value: MsgDeactivate) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgDeactivate",
        value
      };
    },
    triggerTunnel(value: MsgTriggerTunnel) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgTriggerTunnel",
        value
      };
    },
    depositToTunnel(value: MsgDepositToTunnel) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgDepositToTunnel",
        value
      };
    },
    withdrawFromTunnel(value: MsgWithdrawFromTunnel) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFromTunnel",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    createTunnel(value: MsgCreateTunnel) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgCreateTunnel",
        value: MsgCreateTunnel.fromPartial(value)
      };
    },
    updateRoute(value: MsgUpdateRoute) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgUpdateRoute",
        value: MsgUpdateRoute.fromPartial(value)
      };
    },
    updateSignalsAndInterval(value: MsgUpdateSignalsAndInterval) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgUpdateSignalsAndInterval",
        value: MsgUpdateSignalsAndInterval.fromPartial(value)
      };
    },
    withdrawFeePayerFunds(value: MsgWithdrawFeePayerFunds) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFeePayerFunds",
        value: MsgWithdrawFeePayerFunds.fromPartial(value)
      };
    },
    activate(value: MsgActivate) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgActivate",
        value: MsgActivate.fromPartial(value)
      };
    },
    deactivate(value: MsgDeactivate) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgDeactivate",
        value: MsgDeactivate.fromPartial(value)
      };
    },
    triggerTunnel(value: MsgTriggerTunnel) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgTriggerTunnel",
        value: MsgTriggerTunnel.fromPartial(value)
      };
    },
    depositToTunnel(value: MsgDepositToTunnel) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgDepositToTunnel",
        value: MsgDepositToTunnel.fromPartial(value)
      };
    },
    withdrawFromTunnel(value: MsgWithdrawFromTunnel) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgWithdrawFromTunnel",
        value: MsgWithdrawFromTunnel.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};