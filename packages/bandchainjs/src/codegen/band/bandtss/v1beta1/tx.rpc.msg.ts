//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgRequestSignature, MsgRequestSignatureResponse, MsgActivate, MsgActivateResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgTransitionGroup, MsgTransitionGroupResponse, MsgForceTransitionGroup, MsgForceTransitionGroupResponse } from "./tx";
/** Msg defines the bandtss Msg service. */
export interface Msg {
  /** RequestSignature submits a general message to be signed by a specific group. */
  requestSignature(request: MsgRequestSignature): Promise<MsgRequestSignatureResponse>;
  /** Activate activates the status of the sender. */
  activate(request: MsgActivate): Promise<MsgActivateResponse>;
  /** UpdateParams updates the x/bandtss parameters. */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** TransitionGroup creates a request for creating a new group and replacing current group. */
  transitionGroup(request: MsgTransitionGroup): Promise<MsgTransitionGroupResponse>;
  /**
   * ForceTransitionGroup sets the given group to the incoming group without the signature of a transition
   * message from a current group.
   */
  forceTransitionGroup(request: MsgForceTransitionGroup): Promise<MsgForceTransitionGroupResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.requestSignature = this.requestSignature.bind(this);
    this.activate = this.activate.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.transitionGroup = this.transitionGroup.bind(this);
    this.forceTransitionGroup = this.forceTransitionGroup.bind(this);
  }
  requestSignature(request: MsgRequestSignature): Promise<MsgRequestSignatureResponse> {
    const data = MsgRequestSignature.encode(request).finish();
    const promise = this.rpc.request("band.bandtss.v1beta1.Msg", "RequestSignature", data);
    return promise.then(data => MsgRequestSignatureResponse.decode(new BinaryReader(data)));
  }
  activate(request: MsgActivate): Promise<MsgActivateResponse> {
    const data = MsgActivate.encode(request).finish();
    const promise = this.rpc.request("band.bandtss.v1beta1.Msg", "Activate", data);
    return promise.then(data => MsgActivateResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("band.bandtss.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  transitionGroup(request: MsgTransitionGroup): Promise<MsgTransitionGroupResponse> {
    const data = MsgTransitionGroup.encode(request).finish();
    const promise = this.rpc.request("band.bandtss.v1beta1.Msg", "TransitionGroup", data);
    return promise.then(data => MsgTransitionGroupResponse.decode(new BinaryReader(data)));
  }
  forceTransitionGroup(request: MsgForceTransitionGroup): Promise<MsgForceTransitionGroupResponse> {
    const data = MsgForceTransitionGroup.encode(request).finish();
    const promise = this.rpc.request("band.bandtss.v1beta1.Msg", "ForceTransitionGroup", data);
    return promise.then(data => MsgForceTransitionGroupResponse.decode(new BinaryReader(data)));
  }
}