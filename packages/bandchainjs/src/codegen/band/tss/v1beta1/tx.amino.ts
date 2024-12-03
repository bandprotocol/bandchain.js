//@ts-nocheck
import { MsgSubmitDKGRound1, MsgSubmitDKGRound2, MsgComplain, MsgConfirm, MsgSubmitDEs, MsgResetDE, MsgSubmitSignature, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/band.tss.v1beta1.MsgSubmitDKGRound1": {
    aminoType: "tss/MsgSubmitDKGRound1",
    toAmino: MsgSubmitDKGRound1.toAmino,
    fromAmino: MsgSubmitDKGRound1.fromAmino
  },
  "/band.tss.v1beta1.MsgSubmitDKGRound2": {
    aminoType: "tss/MsgSubmitDKGRound2",
    toAmino: MsgSubmitDKGRound2.toAmino,
    fromAmino: MsgSubmitDKGRound2.fromAmino
  },
  "/band.tss.v1beta1.MsgComplain": {
    aminoType: "tss/MsgComplaint",
    toAmino: MsgComplain.toAmino,
    fromAmino: MsgComplain.fromAmino
  },
  "/band.tss.v1beta1.MsgConfirm": {
    aminoType: "tss/MsgConfirm",
    toAmino: MsgConfirm.toAmino,
    fromAmino: MsgConfirm.fromAmino
  },
  "/band.tss.v1beta1.MsgSubmitDEs": {
    aminoType: "tss/MsgSubmitDEs",
    toAmino: MsgSubmitDEs.toAmino,
    fromAmino: MsgSubmitDEs.fromAmino
  },
  "/band.tss.v1beta1.MsgResetDE": {
    aminoType: "tss/MsgResetDE",
    toAmino: MsgResetDE.toAmino,
    fromAmino: MsgResetDE.fromAmino
  },
  "/band.tss.v1beta1.MsgSubmitSignature": {
    aminoType: "tss/MsgSubmitSignature",
    toAmino: MsgSubmitSignature.toAmino,
    fromAmino: MsgSubmitSignature.fromAmino
  },
  "/band.tss.v1beta1.MsgUpdateParams": {
    aminoType: "tss/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};