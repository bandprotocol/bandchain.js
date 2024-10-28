//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ChainIDRequest, ChainIDResponse, EVMValidatorsRequest, EVMValidatorsResponse } from "./query";
/** Service defines the gRPC querier service. */
export interface Service {
  /** ChainID queries the chain ID of this node */
  chainID(request?: ChainIDRequest): Promise<ChainIDResponse>;
  /** EVMValidators queries current list of validator's address and power */
  eVMValidators(request?: EVMValidatorsRequest): Promise<EVMValidatorsResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.chainID = this.chainID.bind(this);
    this.eVMValidators = this.eVMValidators.bind(this);
  }
  chainID(request: ChainIDRequest = {}): Promise<ChainIDResponse> {
    const data = ChainIDRequest.encode(request).finish();
    const promise = this.rpc.request("bandchain.v1.node.Service", "ChainID", data);
    return promise.then(data => ChainIDResponse.decode(new BinaryReader(data)));
  }
  eVMValidators(request: EVMValidatorsRequest = {}): Promise<EVMValidatorsResponse> {
    const data = EVMValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("bandchain.v1.node.Service", "EVMValidators", data);
    return promise.then(data => EVMValidatorsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    chainID(request?: ChainIDRequest): Promise<ChainIDResponse> {
      return queryService.chainID(request);
    },
    eVMValidators(request?: EVMValidatorsRequest): Promise<EVMValidatorsResponse> {
      return queryService.eVMValidators(request);
    }
  };
};