//@ts-nocheck
import { MsgCreateTunnel, MsgUpdateAndResetTunnel, MsgActivate, MsgDeactivate, MsgTriggerTunnel, MsgDepositToTunnel, MsgWithdrawFromTunnel, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/band.tunnel.v1beta1.MsgCreateTunnel": {
    aminoType: "tunnel/MsgCreateTunnel",
    toAmino: MsgCreateTunnel.toAmino,
    fromAmino: MsgCreateTunnel.fromAmino
  },
  "/band.tunnel.v1beta1.MsgUpdateAndResetTunnel": {
    aminoType: "tunnel/MsgUpdateAndResetTunnel",
    toAmino: MsgUpdateAndResetTunnel.toAmino,
    fromAmino: MsgUpdateAndResetTunnel.fromAmino
  },
  "/band.tunnel.v1beta1.MsgActivate": {
    aminoType: "tunnel/MsgActivate",
    toAmino: MsgActivate.toAmino,
    fromAmino: MsgActivate.fromAmino
  },
  "/band.tunnel.v1beta1.MsgDeactivate": {
    aminoType: "tunnel/MsgDeactivate",
    toAmino: MsgDeactivate.toAmino,
    fromAmino: MsgDeactivate.fromAmino
  },
  "/band.tunnel.v1beta1.MsgTriggerTunnel": {
    aminoType: "tunnel/MsgTriggerTunnel",
    toAmino: MsgTriggerTunnel.toAmino,
    fromAmino: MsgTriggerTunnel.fromAmino
  },
  "/band.tunnel.v1beta1.MsgDepositToTunnel": {
    aminoType: "tunnel/MsgDepositToTunnel",
    toAmino: MsgDepositToTunnel.toAmino,
    fromAmino: MsgDepositToTunnel.fromAmino
  },
  "/band.tunnel.v1beta1.MsgWithdrawFromTunnel": {
    aminoType: "tunnel/MsgWithdrawFromTunnel",
    toAmino: MsgWithdrawFromTunnel.toAmino,
    fromAmino: MsgWithdrawFromTunnel.fromAmino
  },
  "/band.tunnel.v1beta1.MsgUpdateParams": {
    aminoType: "tunnel/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};