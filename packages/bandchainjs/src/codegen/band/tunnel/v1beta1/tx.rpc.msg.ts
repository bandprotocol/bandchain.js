//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateTunnel, MsgCreateTunnelResponse, MsgUpdateAndResetTunnel, MsgUpdateAndResetTunnelResponse, MsgActivate, MsgActivateResponse, MsgDeactivate, MsgDeactivateResponse, MsgTriggerTunnel, MsgTriggerTunnelResponse, MsgDepositToTunnel, MsgDepositToTunnelResponse, MsgWithdrawFromTunnel, MsgWithdrawFromTunnelResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Service definition for Msg. */
export interface Msg {
  /** CreateTunnel is a RPC method to create a new tunnel. */
  createTunnel(request: MsgCreateTunnel): Promise<MsgCreateTunnelResponse>;
  /** UpdateAndResetTunnel is a RPC method to update a tunnel information and reset the interval. */
  updateAndResetTunnel(request: MsgUpdateAndResetTunnel): Promise<MsgUpdateAndResetTunnelResponse>;
  /** Activate is a RPC method to activate a tunnel. */
  activate(request: MsgActivate): Promise<MsgActivateResponse>;
  /** Deactivate is a RPC method to deactivate a tunnel. */
  deactivate(request: MsgDeactivate): Promise<MsgDeactivateResponse>;
  /** TriggerTunnel is a RPC method to manually trigger a tunnel. */
  triggerTunnel(request: MsgTriggerTunnel): Promise<MsgTriggerTunnelResponse>;
  /** DepositToTunnel is a RPC method to deposit to an existing tunnel. */
  depositToTunnel(request: MsgDepositToTunnel): Promise<MsgDepositToTunnelResponse>;
  /** WithdrawFromTunnel is a RPC method to withdraw a deposit from an existing tunnel. */
  withdrawFromTunnel(request: MsgWithdrawFromTunnel): Promise<MsgWithdrawFromTunnelResponse>;
  /** UpdateParams is a RPC method to update parameters */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createTunnel = this.createTunnel.bind(this);
    this.updateAndResetTunnel = this.updateAndResetTunnel.bind(this);
    this.activate = this.activate.bind(this);
    this.deactivate = this.deactivate.bind(this);
    this.triggerTunnel = this.triggerTunnel.bind(this);
    this.depositToTunnel = this.depositToTunnel.bind(this);
    this.withdrawFromTunnel = this.withdrawFromTunnel.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  createTunnel(request: MsgCreateTunnel): Promise<MsgCreateTunnelResponse> {
    const data = MsgCreateTunnel.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Msg", "CreateTunnel", data);
    return promise.then(data => MsgCreateTunnelResponse.decode(new BinaryReader(data)));
  }
  updateAndResetTunnel(request: MsgUpdateAndResetTunnel): Promise<MsgUpdateAndResetTunnelResponse> {
    const data = MsgUpdateAndResetTunnel.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Msg", "UpdateAndResetTunnel", data);
    return promise.then(data => MsgUpdateAndResetTunnelResponse.decode(new BinaryReader(data)));
  }
  activate(request: MsgActivate): Promise<MsgActivateResponse> {
    const data = MsgActivate.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Msg", "Activate", data);
    return promise.then(data => MsgActivateResponse.decode(new BinaryReader(data)));
  }
  deactivate(request: MsgDeactivate): Promise<MsgDeactivateResponse> {
    const data = MsgDeactivate.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Msg", "Deactivate", data);
    return promise.then(data => MsgDeactivateResponse.decode(new BinaryReader(data)));
  }
  triggerTunnel(request: MsgTriggerTunnel): Promise<MsgTriggerTunnelResponse> {
    const data = MsgTriggerTunnel.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Msg", "TriggerTunnel", data);
    return promise.then(data => MsgTriggerTunnelResponse.decode(new BinaryReader(data)));
  }
  depositToTunnel(request: MsgDepositToTunnel): Promise<MsgDepositToTunnelResponse> {
    const data = MsgDepositToTunnel.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Msg", "DepositToTunnel", data);
    return promise.then(data => MsgDepositToTunnelResponse.decode(new BinaryReader(data)));
  }
  withdrawFromTunnel(request: MsgWithdrawFromTunnel): Promise<MsgWithdrawFromTunnelResponse> {
    const data = MsgWithdrawFromTunnel.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Msg", "WithdrawFromTunnel", data);
    return promise.then(data => MsgWithdrawFromTunnelResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}