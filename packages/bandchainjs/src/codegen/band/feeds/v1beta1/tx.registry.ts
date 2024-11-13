//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgVote, MsgSubmitSignalPrices, MsgUpdateReferenceSourceConfig, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/band.feeds.v1beta1.MsgVote", MsgVote], ["/band.feeds.v1beta1.MsgSubmitSignalPrices", MsgSubmitSignalPrices], ["/band.feeds.v1beta1.MsgUpdateReferenceSourceConfig", MsgUpdateReferenceSourceConfig], ["/band.feeds.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    vote(value: MsgVote) {
      return {
        typeUrl: "/band.feeds.v1beta1.MsgVote",
        value: MsgVote.encode(value).finish()
      };
    },
    submitSignalPrices(value: MsgSubmitSignalPrices) {
      return {
        typeUrl: "/band.feeds.v1beta1.MsgSubmitSignalPrices",
        value: MsgSubmitSignalPrices.encode(value).finish()
      };
    },
    updateReferenceSourceConfig(value: MsgUpdateReferenceSourceConfig) {
      return {
        typeUrl: "/band.feeds.v1beta1.MsgUpdateReferenceSourceConfig",
        value: MsgUpdateReferenceSourceConfig.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/band.feeds.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    vote(value: MsgVote) {
      return {
        typeUrl: "/band.feeds.v1beta1.MsgVote",
        value
      };
    },
    submitSignalPrices(value: MsgSubmitSignalPrices) {
      return {
        typeUrl: "/band.feeds.v1beta1.MsgSubmitSignalPrices",
        value
      };
    },
    updateReferenceSourceConfig(value: MsgUpdateReferenceSourceConfig) {
      return {
        typeUrl: "/band.feeds.v1beta1.MsgUpdateReferenceSourceConfig",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/band.feeds.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    vote(value: MsgVote) {
      return {
        typeUrl: "/band.feeds.v1beta1.MsgVote",
        value: MsgVote.fromPartial(value)
      };
    },
    submitSignalPrices(value: MsgSubmitSignalPrices) {
      return {
        typeUrl: "/band.feeds.v1beta1.MsgSubmitSignalPrices",
        value: MsgSubmitSignalPrices.fromPartial(value)
      };
    },
    updateReferenceSourceConfig(value: MsgUpdateReferenceSourceConfig) {
      return {
        typeUrl: "/band.feeds.v1beta1.MsgUpdateReferenceSourceConfig",
        value: MsgUpdateReferenceSourceConfig.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/band.feeds.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};