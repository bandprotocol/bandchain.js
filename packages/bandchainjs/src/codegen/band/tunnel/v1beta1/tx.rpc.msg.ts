//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateTunnel, MsgCreateTunnelResponse, MsgUpdateRoute, MsgUpdateRouteResponse, MsgUpdateSignalsAndInterval, MsgUpdateSignalsAndIntervalResponse, MsgWithdrawFeePayerFunds, MsgWithdrawFeePayerFundsResponse, MsgActivateTunnel, MsgActivateTunnelResponse, MsgDeactivateTunnel, MsgDeactivateTunnelResponse, MsgTriggerTunnel, MsgTriggerTunnelResponse, MsgDepositToTunnel, MsgDepositToTunnelResponse, MsgWithdrawFromTunnel, MsgWithdrawFromTunnelResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Service definition for Msg. */
export interface Msg {
  /** CreateTunnel is a RPC method to create a new tunnel. */
  createTunnel(request: MsgCreateTunnel): Promise<MsgCreateTunnelResponse>;
  /** UpdateRoute is a RPC method to update a route information of the tunnel. */
  updateRoute(request: MsgUpdateRoute): Promise<MsgUpdateRouteResponse>;
  /** UpdateSignalsAndInterval is a RPC method to update a signals and interval of the tunnel. */
  updateSignalsAndInterval(request: MsgUpdateSignalsAndInterval): Promise<MsgUpdateSignalsAndIntervalResponse>;
  /** WithdrawFeePayerFunds is a RPC method to withdraw fee payer funds to creator. */
  withdrawFeePayerFunds(request: MsgWithdrawFeePayerFunds): Promise<MsgWithdrawFeePayerFundsResponse>;
  /** ActivateTunnel is a RPC method to activate a tunnel. */
  activateTunnel(request: MsgActivateTunnel): Promise<MsgActivateTunnelResponse>;
  /** DeactivateTunnel is a RPC method to deactivate a tunnel. */
  deactivateTunnel(request: MsgDeactivateTunnel): Promise<MsgDeactivateTunnelResponse>;
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
    this.updateRoute = this.updateRoute.bind(this);
    this.updateSignalsAndInterval = this.updateSignalsAndInterval.bind(this);
    this.withdrawFeePayerFunds = this.withdrawFeePayerFunds.bind(this);
    this.activateTunnel = this.activateTunnel.bind(this);
    this.deactivateTunnel = this.deactivateTunnel.bind(this);
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
  updateRoute(request: MsgUpdateRoute): Promise<MsgUpdateRouteResponse> {
    const data = MsgUpdateRoute.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Msg", "UpdateRoute", data);
    return promise.then(data => MsgUpdateRouteResponse.decode(new BinaryReader(data)));
  }
  updateSignalsAndInterval(request: MsgUpdateSignalsAndInterval): Promise<MsgUpdateSignalsAndIntervalResponse> {
    const data = MsgUpdateSignalsAndInterval.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Msg", "UpdateSignalsAndInterval", data);
    return promise.then(data => MsgUpdateSignalsAndIntervalResponse.decode(new BinaryReader(data)));
  }
  withdrawFeePayerFunds(request: MsgWithdrawFeePayerFunds): Promise<MsgWithdrawFeePayerFundsResponse> {
    const data = MsgWithdrawFeePayerFunds.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Msg", "WithdrawFeePayerFunds", data);
    return promise.then(data => MsgWithdrawFeePayerFundsResponse.decode(new BinaryReader(data)));
  }
  activateTunnel(request: MsgActivateTunnel): Promise<MsgActivateTunnelResponse> {
    const data = MsgActivateTunnel.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Msg", "ActivateTunnel", data);
    return promise.then(data => MsgActivateTunnelResponse.decode(new BinaryReader(data)));
  }
  deactivateTunnel(request: MsgDeactivateTunnel): Promise<MsgDeactivateTunnelResponse> {
    const data = MsgDeactivateTunnel.encode(request).finish();
    const promise = this.rpc.request("band.tunnel.v1beta1.Msg", "DeactivateTunnel", data);
    return promise.then(data => MsgDeactivateTunnelResponse.decode(new BinaryReader(data)));
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