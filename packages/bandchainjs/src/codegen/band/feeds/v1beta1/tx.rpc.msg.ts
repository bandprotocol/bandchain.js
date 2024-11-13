//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgVote, MsgVoteResponse, MsgSubmitSignalPrices, MsgSubmitSignalPricesResponse, MsgUpdateReferenceSourceConfig, MsgUpdateReferenceSourceConfigResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the feeds Msg service. */
export interface Msg {
  /** Vote is an RPC method to vote signal ids and their powers. */
  vote(request: MsgVote): Promise<MsgVoteResponse>;
  /** SubmitSignalPrices is an RPC method to submit signal prices. */
  submitSignalPrices(request: MsgSubmitSignalPrices): Promise<MsgSubmitSignalPricesResponse>;
  /** UpdateReferenceSourceConfig is an RPC method to update reference price source configuration. */
  updateReferenceSourceConfig(request: MsgUpdateReferenceSourceConfig): Promise<MsgUpdateReferenceSourceConfigResponse>;
  /** UpdateParams is an RPC method to update parameters. */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.vote = this.vote.bind(this);
    this.submitSignalPrices = this.submitSignalPrices.bind(this);
    this.updateReferenceSourceConfig = this.updateReferenceSourceConfig.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  vote(request: MsgVote): Promise<MsgVoteResponse> {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("band.feeds.v1beta1.Msg", "Vote", data);
    return promise.then(data => MsgVoteResponse.decode(new BinaryReader(data)));
  }
  submitSignalPrices(request: MsgSubmitSignalPrices): Promise<MsgSubmitSignalPricesResponse> {
    const data = MsgSubmitSignalPrices.encode(request).finish();
    const promise = this.rpc.request("band.feeds.v1beta1.Msg", "SubmitSignalPrices", data);
    return promise.then(data => MsgSubmitSignalPricesResponse.decode(new BinaryReader(data)));
  }
  updateReferenceSourceConfig(request: MsgUpdateReferenceSourceConfig): Promise<MsgUpdateReferenceSourceConfigResponse> {
    const data = MsgUpdateReferenceSourceConfig.encode(request).finish();
    const promise = this.rpc.request("band.feeds.v1beta1.Msg", "UpdateReferenceSourceConfig", data);
    return promise.then(data => MsgUpdateReferenceSourceConfigResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("band.feeds.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}