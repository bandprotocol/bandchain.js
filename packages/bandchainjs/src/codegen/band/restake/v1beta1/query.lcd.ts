//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryVaultsRequest, QueryVaultsResponseSDKType, QueryVaultRequest, QueryVaultResponseSDKType, QueryLocksRequest, QueryLocksResponseSDKType, QueryLockRequest, QueryLockResponseSDKType, QueryStakeRequest, QueryStakeResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.vaults = this.vaults.bind(this);
    this.vault = this.vault.bind(this);
    this.locks = this.locks.bind(this);
    this.lock = this.lock.bind(this);
    this.stake = this.stake.bind(this);
    this.params = this.params.bind(this);
  }
  /* Vaults returns a list of vault. */
  async vaults(params: QueryVaultsRequest = {
    pagination: undefined
  }): Promise<QueryVaultsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `restake/v1beta1/vaults`;
    return await this.req.get<QueryVaultsResponseSDKType>(endpoint, options);
  }
  /* Vault returns a vault information. */
  async vault(params: QueryVaultRequest): Promise<QueryVaultResponseSDKType> {
    const endpoint = `restake/v1beta1/vaults/${params.key}`;
    return await this.req.get<QueryVaultResponseSDKType>(endpoint);
  }
  /* Locks returns all lock information for a specified address. */
  async locks(params: QueryLocksRequest): Promise<QueryLocksResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `restake/v1beta1/stakers/${params.stakerAddress}/locks`;
    return await this.req.get<QueryLocksResponseSDKType>(endpoint, options);
  }
  /* Lock returns a lock information for a specified address and a vault. */
  async lock(params: QueryLockRequest): Promise<QueryLockResponseSDKType> {
    const endpoint = `restake/v1beta1/stakers/${params.stakerAddress}/locks/${params.key}`;
    return await this.req.get<QueryLockResponseSDKType>(endpoint);
  }
  /* Stake returns stake information for a specific address. */
  async stake(params: QueryStakeRequest): Promise<QueryStakeResponseSDKType> {
    const endpoint = `restake/v1beta1/stakers/${params.stakerAddress}/stake`;
    return await this.req.get<QueryStakeResponseSDKType>(endpoint);
  }
  /* Params returns all parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `restake/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}