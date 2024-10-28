//@ts-nocheck
import { MsgStake, MsgUnstake, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/restake.v1beta1.MsgStake": {
    aminoType: "restake/MsgStake",
    toAmino: MsgStake.toAmino,
    fromAmino: MsgStake.fromAmino
  },
  "/restake.v1beta1.MsgUnstake": {
    aminoType: "restake/MsgUnstake",
    toAmino: MsgUnstake.toAmino,
    fromAmino: MsgUnstake.fromAmino
  },
  "/restake.v1beta1.MsgUpdateParams": {
    aminoType: "restake/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};