//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRequestSignature, MsgActivate, MsgUpdateParams, MsgTransitionGroup, MsgForceTransitionGroup } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/band.bandtss.v1beta1.MsgRequestSignature", MsgRequestSignature], ["/band.bandtss.v1beta1.MsgActivate", MsgActivate], ["/band.bandtss.v1beta1.MsgUpdateParams", MsgUpdateParams], ["/band.bandtss.v1beta1.MsgTransitionGroup", MsgTransitionGroup], ["/band.bandtss.v1beta1.MsgForceTransitionGroup", MsgForceTransitionGroup]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    requestSignature(value: MsgRequestSignature) {
      return {
        typeUrl: "/band.bandtss.v1beta1.MsgRequestSignature",
        value: MsgRequestSignature.encode(value).finish()
      };
    },
    activate(value: MsgActivate) {
      return {
        typeUrl: "/band.bandtss.v1beta1.MsgActivate",
        value: MsgActivate.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/band.bandtss.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    transitionGroup(value: MsgTransitionGroup) {
      return {
        typeUrl: "/band.bandtss.v1beta1.MsgTransitionGroup",
        value: MsgTransitionGroup.encode(value).finish()
      };
    },
    forceTransitionGroup(value: MsgForceTransitionGroup) {
      return {
        typeUrl: "/band.bandtss.v1beta1.MsgForceTransitionGroup",
        value: MsgForceTransitionGroup.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    requestSignature(value: MsgRequestSignature) {
      return {
        typeUrl: "/band.bandtss.v1beta1.MsgRequestSignature",
        value
      };
    },
    activate(value: MsgActivate) {
      return {
        typeUrl: "/band.bandtss.v1beta1.MsgActivate",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/band.bandtss.v1beta1.MsgUpdateParams",
        value
      };
    },
    transitionGroup(value: MsgTransitionGroup) {
      return {
        typeUrl: "/band.bandtss.v1beta1.MsgTransitionGroup",
        value
      };
    },
    forceTransitionGroup(value: MsgForceTransitionGroup) {
      return {
        typeUrl: "/band.bandtss.v1beta1.MsgForceTransitionGroup",
        value
      };
    }
  },
  fromPartial: {
    requestSignature(value: MsgRequestSignature) {
      return {
        typeUrl: "/band.bandtss.v1beta1.MsgRequestSignature",
        value: MsgRequestSignature.fromPartial(value)
      };
    },
    activate(value: MsgActivate) {
      return {
        typeUrl: "/band.bandtss.v1beta1.MsgActivate",
        value: MsgActivate.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/band.bandtss.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    transitionGroup(value: MsgTransitionGroup) {
      return {
        typeUrl: "/band.bandtss.v1beta1.MsgTransitionGroup",
        value: MsgTransitionGroup.fromPartial(value)
      };
    },
    forceTransitionGroup(value: MsgForceTransitionGroup) {
      return {
        typeUrl: "/band.bandtss.v1beta1.MsgForceTransitionGroup",
        value: MsgForceTransitionGroup.fromPartial(value)
      };
    }
  }
};