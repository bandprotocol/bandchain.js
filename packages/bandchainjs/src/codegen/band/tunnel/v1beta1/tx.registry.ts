//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateTunnel, MsgUpdateAndResetTunnel, MsgActivate, MsgDeactivate, MsgTriggerTunnel, MsgDepositToTunnel, MsgWithdrawFromTunnel, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/band.tunnel.v1beta1.MsgCreateTunnel", MsgCreateTunnel], ["/band.tunnel.v1beta1.MsgUpdateAndResetTunnel", MsgUpdateAndResetTunnel], ["/band.tunnel.v1beta1.MsgActivate", MsgActivate], ["/band.tunnel.v1beta1.MsgDeactivate", MsgDeactivate], ["/band.tunnel.v1beta1.MsgTriggerTunnel", MsgTriggerTunnel], ["/band.tunnel.v1beta1.MsgDepositToTunnel", MsgDepositToTunnel], ["/band.tunnel.v1beta1.MsgWithdrawFromTunnel", MsgWithdrawFromTunnel], ["/band.tunnel.v1beta1.MsgUpdateParams", MsgUpdateParams]];
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
    updateAndResetTunnel(value: MsgUpdateAndResetTunnel) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgUpdateAndResetTunnel",
        value: MsgUpdateAndResetTunnel.encode(value).finish()
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
    updateAndResetTunnel(value: MsgUpdateAndResetTunnel) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgUpdateAndResetTunnel",
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
    updateAndResetTunnel(value: MsgUpdateAndResetTunnel) {
      return {
        typeUrl: "/band.tunnel.v1beta1.MsgUpdateAndResetTunnel",
        value: MsgUpdateAndResetTunnel.fromPartial(value)
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