//@ts-nocheck
import { MsgCreateTunnel, MsgUpdateRoute, MsgUpdateSignalsAndInterval, MsgWithdrawFeePayerFunds, MsgActivateTunnel, MsgDeactivateTunnel, MsgTriggerTunnel, MsgDepositToTunnel, MsgWithdrawFromTunnel, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/band.tunnel.v1beta1.MsgCreateTunnel": {
    aminoType: "tunnel/MsgCreateTunnel",
    toAmino: MsgCreateTunnel.toAmino,
    fromAmino: MsgCreateTunnel.fromAmino
  },
  "/band.tunnel.v1beta1.MsgUpdateRoute": {
    aminoType: "tunnel/MsgUpdateRoute",
    toAmino: MsgUpdateRoute.toAmino,
    fromAmino: MsgUpdateRoute.fromAmino
  },
  "/band.tunnel.v1beta1.MsgUpdateSignalsAndInterval": {
    aminoType: "tunnel/MsgUpdateSignalsAndInterval",
    toAmino: MsgUpdateSignalsAndInterval.toAmino,
    fromAmino: MsgUpdateSignalsAndInterval.fromAmino
  },
  "/band.tunnel.v1beta1.MsgWithdrawFeePayerFunds": {
    aminoType: "tunnel/MsgWithdrawFeePayerFunds",
    toAmino: MsgWithdrawFeePayerFunds.toAmino,
    fromAmino: MsgWithdrawFeePayerFunds.fromAmino
  },
  "/band.tunnel.v1beta1.MsgActivateTunnel": {
    aminoType: "tunnel/MsgActivateTunnel",
    toAmino: MsgActivateTunnel.toAmino,
    fromAmino: MsgActivateTunnel.fromAmino
  },
  "/band.tunnel.v1beta1.MsgDeactivateTunnel": {
    aminoType: "tunnel/MsgDeactivateTunnel",
    toAmino: MsgDeactivateTunnel.toAmino,
    fromAmino: MsgDeactivateTunnel.fromAmino
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