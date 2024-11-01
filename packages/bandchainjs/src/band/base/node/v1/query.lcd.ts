//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { ChainIDRequest, ChainIDResponseSDKType, EVMValidatorsRequest, EVMValidatorsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.chainID = this.chainID.bind(this);
    this.eVMValidators = this.eVMValidators.bind(this);
  }
  /* ChainID queries the chain ID of this node */
  async chainID(_params: ChainIDRequest = {}): Promise<ChainIDResponseSDKType> {
    const endpoint = `bandchain/v1/chain_id`;
    return await this.req.get<ChainIDResponseSDKType>(endpoint);
  }
  /* EVMValidators queries current list of validator's address and power */
  async eVMValidators(_params: EVMValidatorsRequest = {}): Promise<EVMValidatorsResponseSDKType> {
    const endpoint = `bandchain/v1/evm-validators`;
    return await this.req.get<EVMValidatorsResponseSDKType>(endpoint);
  }
}