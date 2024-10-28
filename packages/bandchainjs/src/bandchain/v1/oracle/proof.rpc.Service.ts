//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ProofRequest, ProofResponse, MultiProofRequest, MultiProofResponse, RequestCountProofRequest, RequestCountProofResponse } from "./proof";
/** Service defines the gRPC querier service. */
export interface Service {
  /** Proof queries the proof for given request ID */
  proof(request: ProofRequest): Promise<ProofResponse>;
  /** MultiProof queries multiple proofs for given list of request IDs */
  multiProof(request: MultiProofRequest): Promise<MultiProofResponse>;
  /** RequestCountProof queries the count proof */
  requestCountProof(request?: RequestCountProofRequest): Promise<RequestCountProofResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.proof = this.proof.bind(this);
    this.multiProof = this.multiProof.bind(this);
    this.requestCountProof = this.requestCountProof.bind(this);
  }
  proof(request: ProofRequest): Promise<ProofResponse> {
    const data = ProofRequest.encode(request).finish();
    const promise = this.rpc.request("bandchain.v1.oracle.Service", "Proof", data);
    return promise.then(data => ProofResponse.decode(new BinaryReader(data)));
  }
  multiProof(request: MultiProofRequest): Promise<MultiProofResponse> {
    const data = MultiProofRequest.encode(request).finish();
    const promise = this.rpc.request("bandchain.v1.oracle.Service", "MultiProof", data);
    return promise.then(data => MultiProofResponse.decode(new BinaryReader(data)));
  }
  requestCountProof(request: RequestCountProofRequest = {}): Promise<RequestCountProofResponse> {
    const data = RequestCountProofRequest.encode(request).finish();
    const promise = this.rpc.request("bandchain.v1.oracle.Service", "RequestCountProof", data);
    return promise.then(data => RequestCountProofResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    proof(request: ProofRequest): Promise<ProofResponse> {
      return queryService.proof(request);
    },
    multiProof(request: MultiProofRequest): Promise<MultiProofResponse> {
      return queryService.multiProof(request);
    },
    requestCountProof(request?: RequestCountProofRequest): Promise<RequestCountProofResponse> {
      return queryService.requestCountProof(request);
    }
  };
};