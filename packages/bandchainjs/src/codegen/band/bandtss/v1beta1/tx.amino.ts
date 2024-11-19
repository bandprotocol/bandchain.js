//@ts-nocheck
import { MsgRequestSignature, MsgActivate, MsgUpdateParams, MsgTransitionGroup, MsgForceTransitionGroup } from "./tx";
export const AminoConverter = {
  "/band.bandtss.v1beta1.MsgRequestSignature": {
    aminoType: "bandtss/MsgRequestSignature",
    toAmino: MsgRequestSignature.toAmino,
    fromAmino: MsgRequestSignature.fromAmino
  },
  "/band.bandtss.v1beta1.MsgActivate": {
    aminoType: "bandtss/MsgActivate",
    toAmino: MsgActivate.toAmino,
    fromAmino: MsgActivate.fromAmino
  },
  "/band.bandtss.v1beta1.MsgUpdateParams": {
    aminoType: "bandtss/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/band.bandtss.v1beta1.MsgTransitionGroup": {
    aminoType: "bandtss/MsgTransitionGroup",
    toAmino: MsgTransitionGroup.toAmino,
    fromAmino: MsgTransitionGroup.fromAmino
  },
  "/band.bandtss.v1beta1.MsgForceTransitionGroup": {
    aminoType: "bandtss/ForceTransitionGroup",
    toAmino: MsgForceTransitionGroup.toAmino,
    fromAmino: MsgForceTransitionGroup.fromAmino
  }
};