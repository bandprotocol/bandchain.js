//@ts-nocheck
import { MsgVote, MsgSubmitSignalPrices, MsgUpdateReferenceSourceConfig, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/band.feeds.v1beta1.MsgVote": {
    aminoType: "feeds/MsgVote",
    toAmino: MsgVote.toAmino,
    fromAmino: MsgVote.fromAmino
  },
  "/band.feeds.v1beta1.MsgSubmitSignalPrices": {
    aminoType: "feeds/MsgSubmitSignalPrices",
    toAmino: MsgSubmitSignalPrices.toAmino,
    fromAmino: MsgSubmitSignalPrices.fromAmino
  },
  "/band.feeds.v1beta1.MsgUpdateReferenceSourceConfig": {
    aminoType: "feeds/MsgUpdateReferenceSourceConfig",
    toAmino: MsgUpdateReferenceSourceConfig.toAmino,
    fromAmino: MsgUpdateReferenceSourceConfig.fromAmino
  },
  "/band.feeds.v1beta1.MsgUpdateParams": {
    aminoType: "feeds/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};