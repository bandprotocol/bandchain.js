//@ts-nocheck
import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  band: {
    bandtss: {
      v1beta1: new (await import("./bandtss/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    feeds: {
      v1beta1: new (await import("./feeds/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    globalfee: {
      v1beta1: new (await import("./globalfee/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    oracle: {
      v1: new (await import("./oracle/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    restake: {
      v1beta1: new (await import("./restake/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    tss: {
      v1beta1: new (await import("./tss/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    tunnel: {
      v1beta1: new (await import("./tunnel/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(rpc),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    group: {
      v1: new (await import("../cosmos/group/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});