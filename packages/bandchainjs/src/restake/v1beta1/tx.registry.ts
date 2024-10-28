//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgStake, MsgUnstake, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/restake.v1beta1.MsgStake", MsgStake], ["/restake.v1beta1.MsgUnstake", MsgUnstake], ["/restake.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    stake(value: MsgStake) {
      return {
        typeUrl: "/restake.v1beta1.MsgStake",
        value: MsgStake.encode(value).finish()
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/restake.v1beta1.MsgUnstake",
        value: MsgUnstake.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/restake.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    stake(value: MsgStake) {
      return {
        typeUrl: "/restake.v1beta1.MsgStake",
        value
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/restake.v1beta1.MsgUnstake",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/restake.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    stake(value: MsgStake) {
      return {
        typeUrl: "/restake.v1beta1.MsgStake",
        value: MsgStake.fromPartial(value)
      };
    },
    unstake(value: MsgUnstake) {
      return {
        typeUrl: "/restake.v1beta1.MsgUnstake",
        value: MsgUnstake.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/restake.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};