//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgSubmitDKGRound1, MsgSubmitDKGRound1Response, MsgSubmitDKGRound2, MsgSubmitDKGRound2Response, MsgComplain, MsgComplainResponse, MsgConfirm, MsgConfirmResponse, MsgSubmitDEs, MsgSubmitDEsResponse, MsgResetDE, MsgResetDEResponse, MsgSubmitSignature, MsgSubmitSignatureResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the tss Msg service. */
export interface Msg {
  /** SubmitDKGRound1 submits dkg for computing round 1. */
  submitDKGRound1(request: MsgSubmitDKGRound1): Promise<MsgSubmitDKGRound1Response>;
  /** SubmitDKGRound2 submits dkg for computing round 2. */
  submitDKGRound2(request: MsgSubmitDKGRound2): Promise<MsgSubmitDKGRound2Response>;
  /** Complain submits proof for complaining malicious. */
  complain(request: MsgComplain): Promise<MsgComplainResponse>;
  /** Confirm submits own signature for proof that it can derive the secret. */
  confirm(request: MsgConfirm): Promise<MsgConfirmResponse>;
  /** SubmitDEs submits list of pre-commits DE for signing process. */
  submitDEs(request: MsgSubmitDEs): Promise<MsgSubmitDEsResponse>;
  /** ResetDE resets the submitted DEs that being stored on chain. */
  resetDE(request: MsgResetDE): Promise<MsgResetDEResponse>;
  /** SubmitSignature submits signature on task participant need to do. */
  submitSignature(request: MsgSubmitSignature): Promise<MsgSubmitSignatureResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/tss module
   * parameters.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.submitDKGRound1 = this.submitDKGRound1.bind(this);
    this.submitDKGRound2 = this.submitDKGRound2.bind(this);
    this.complain = this.complain.bind(this);
    this.confirm = this.confirm.bind(this);
    this.submitDEs = this.submitDEs.bind(this);
    this.resetDE = this.resetDE.bind(this);
    this.submitSignature = this.submitSignature.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  submitDKGRound1(request: MsgSubmitDKGRound1): Promise<MsgSubmitDKGRound1Response> {
    const data = MsgSubmitDKGRound1.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Msg", "SubmitDKGRound1", data);
    return promise.then(data => MsgSubmitDKGRound1Response.decode(new BinaryReader(data)));
  }
  submitDKGRound2(request: MsgSubmitDKGRound2): Promise<MsgSubmitDKGRound2Response> {
    const data = MsgSubmitDKGRound2.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Msg", "SubmitDKGRound2", data);
    return promise.then(data => MsgSubmitDKGRound2Response.decode(new BinaryReader(data)));
  }
  complain(request: MsgComplain): Promise<MsgComplainResponse> {
    const data = MsgComplain.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Msg", "Complain", data);
    return promise.then(data => MsgComplainResponse.decode(new BinaryReader(data)));
  }
  confirm(request: MsgConfirm): Promise<MsgConfirmResponse> {
    const data = MsgConfirm.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Msg", "Confirm", data);
    return promise.then(data => MsgConfirmResponse.decode(new BinaryReader(data)));
  }
  submitDEs(request: MsgSubmitDEs): Promise<MsgSubmitDEsResponse> {
    const data = MsgSubmitDEs.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Msg", "SubmitDEs", data);
    return promise.then(data => MsgSubmitDEsResponse.decode(new BinaryReader(data)));
  }
  resetDE(request: MsgResetDE): Promise<MsgResetDEResponse> {
    const data = MsgResetDE.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Msg", "ResetDE", data);
    return promise.then(data => MsgResetDEResponse.decode(new BinaryReader(data)));
  }
  submitSignature(request: MsgSubmitSignature): Promise<MsgSubmitSignatureResponse> {
    const data = MsgSubmitSignature.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Msg", "SubmitSignature", data);
    return promise.then(data => MsgSubmitSignatureResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}