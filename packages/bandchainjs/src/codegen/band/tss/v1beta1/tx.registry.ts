//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitDKGRound1, MsgSubmitDKGRound2, MsgComplain, MsgConfirm, MsgSubmitDEs, MsgSubmitSignature, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/band.tss.v1beta1.MsgSubmitDKGRound1", MsgSubmitDKGRound1], ["/band.tss.v1beta1.MsgSubmitDKGRound2", MsgSubmitDKGRound2], ["/band.tss.v1beta1.MsgComplain", MsgComplain], ["/band.tss.v1beta1.MsgConfirm", MsgConfirm], ["/band.tss.v1beta1.MsgSubmitDEs", MsgSubmitDEs], ["/band.tss.v1beta1.MsgSubmitSignature", MsgSubmitSignature], ["/band.tss.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submitDKGRound1(value: MsgSubmitDKGRound1) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound1",
        value: MsgSubmitDKGRound1.encode(value).finish()
      };
    },
    submitDKGRound2(value: MsgSubmitDKGRound2) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound2",
        value: MsgSubmitDKGRound2.encode(value).finish()
      };
    },
    complain(value: MsgComplain) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgComplain",
        value: MsgComplain.encode(value).finish()
      };
    },
    confirm(value: MsgConfirm) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgConfirm",
        value: MsgConfirm.encode(value).finish()
      };
    },
    submitDEs(value: MsgSubmitDEs) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgSubmitDEs",
        value: MsgSubmitDEs.encode(value).finish()
      };
    },
    submitSignature(value: MsgSubmitSignature) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgSubmitSignature",
        value: MsgSubmitSignature.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitDKGRound1(value: MsgSubmitDKGRound1) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound1",
        value
      };
    },
    submitDKGRound2(value: MsgSubmitDKGRound2) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound2",
        value
      };
    },
    complain(value: MsgComplain) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgComplain",
        value
      };
    },
    confirm(value: MsgConfirm) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgConfirm",
        value
      };
    },
    submitDEs(value: MsgSubmitDEs) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgSubmitDEs",
        value
      };
    },
    submitSignature(value: MsgSubmitSignature) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgSubmitSignature",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    submitDKGRound1(value: MsgSubmitDKGRound1) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound1",
        value: MsgSubmitDKGRound1.fromPartial(value)
      };
    },
    submitDKGRound2(value: MsgSubmitDKGRound2) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgSubmitDKGRound2",
        value: MsgSubmitDKGRound2.fromPartial(value)
      };
    },
    complain(value: MsgComplain) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgComplain",
        value: MsgComplain.fromPartial(value)
      };
    },
    confirm(value: MsgConfirm) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgConfirm",
        value: MsgConfirm.fromPartial(value)
      };
    },
    submitDEs(value: MsgSubmitDEs) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgSubmitDEs",
        value: MsgSubmitDEs.fromPartial(value)
      };
    },
    submitSignature(value: MsgSubmitSignature) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgSubmitSignature",
        value: MsgSubmitSignature.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/band.tss.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};