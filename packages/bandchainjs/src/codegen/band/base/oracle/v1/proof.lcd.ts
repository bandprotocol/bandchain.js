//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { ProofRequest, ProofResponseSDKType, MultiProofRequest, MultiProofResponseSDKType, RequestCountProofRequest, RequestCountProofResponseSDKType } from "./proof";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.proof = this.proof.bind(this);
    this.multiProof = this.multiProof.bind(this);
    this.requestCountProof = this.requestCountProof.bind(this);
  }
  /* Proof queries the proof for given request ID */
  async proof(params: ProofRequest): Promise<ProofResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.height !== "undefined") {
      options.params.height = params.height;
    }
    const endpoint = `bandchain/v1/oracle/proof/${params.requestId}`;
    return await this.req.get<ProofResponseSDKType>(endpoint, options);
  }
  /* MultiProof queries multiple proofs for given list of request IDs */
  async multiProof(params: MultiProofRequest): Promise<MultiProofResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.requestIds !== "undefined") {
      options.params.request_ids = params.requestIds;
    }
    const endpoint = `bandchain/v1/oracle/multi_proof`;
    return await this.req.get<MultiProofResponseSDKType>(endpoint, options);
  }
  /* RequestCountProof queries the count proof */
  async requestCountProof(_params: RequestCountProofRequest = {}): Promise<RequestCountProofResponseSDKType> {
    const endpoint = `bandchain/v1/oracle/requests_count_proof`;
    return await this.req.get<RequestCountProofResponseSDKType>(endpoint);
  }
}