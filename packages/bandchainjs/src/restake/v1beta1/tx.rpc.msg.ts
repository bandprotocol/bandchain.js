//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgStake, MsgStakeResponse, MsgUnstake, MsgUnstakeResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the restake Msg service. */
export interface Msg {
  /** Stake defines a method for staking coins into the module. */
  stake(request: MsgStake): Promise<MsgStakeResponse>;
  /** Unstake defines a method for unstaking coins out of the module. */
  unstake(request: MsgUnstake): Promise<MsgUnstakeResponse>;
  /** UpdateParams defines a method for updating parameters. */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.stake = this.stake.bind(this);
    this.unstake = this.unstake.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  stake(request: MsgStake): Promise<MsgStakeResponse> {
    const data = MsgStake.encode(request).finish();
    const promise = this.rpc.request("restake.v1beta1.Msg", "Stake", data);
    return promise.then(data => MsgStakeResponse.decode(new BinaryReader(data)));
  }
  unstake(request: MsgUnstake): Promise<MsgUnstakeResponse> {
    const data = MsgUnstake.encode(request).finish();
    const promise = this.rpc.request("restake.v1beta1.Msg", "Unstake", data);
    return promise.then(data => MsgUnstakeResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("restake.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}