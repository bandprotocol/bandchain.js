//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryVaultsRequest, QueryVaultsResponse, QueryVaultRequest, QueryVaultResponse, QueryLocksRequest, QueryLocksResponse, QueryLockRequest, QueryLockResponse, QueryStakeRequest, QueryStakeResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Vaults returns a list of vault. */
  vaults(request?: QueryVaultsRequest): Promise<QueryVaultsResponse>;
  /** Vault returns a vault information. */
  vault(request: QueryVaultRequest): Promise<QueryVaultResponse>;
  /** Locks returns all lock information for a specified address. */
  locks(request: QueryLocksRequest): Promise<QueryLocksResponse>;
  /** Lock returns a lock information for a specified address and a vault. */
  lock(request: QueryLockRequest): Promise<QueryLockResponse>;
  /** Stake returns stake information for a specific address. */
  stake(request: QueryStakeRequest): Promise<QueryStakeResponse>;
  /** Params returns all parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.vaults = this.vaults.bind(this);
    this.vault = this.vault.bind(this);
    this.locks = this.locks.bind(this);
    this.lock = this.lock.bind(this);
    this.stake = this.stake.bind(this);
    this.params = this.params.bind(this);
  }
  vaults(request: QueryVaultsRequest = {
    pagination: undefined
  }): Promise<QueryVaultsResponse> {
    const data = QueryVaultsRequest.encode(request).finish();
    const promise = this.rpc.request("restake.v1beta1.Query", "Vaults", data);
    return promise.then(data => QueryVaultsResponse.decode(new BinaryReader(data)));
  }
  vault(request: QueryVaultRequest): Promise<QueryVaultResponse> {
    const data = QueryVaultRequest.encode(request).finish();
    const promise = this.rpc.request("restake.v1beta1.Query", "Vault", data);
    return promise.then(data => QueryVaultResponse.decode(new BinaryReader(data)));
  }
  locks(request: QueryLocksRequest): Promise<QueryLocksResponse> {
    const data = QueryLocksRequest.encode(request).finish();
    const promise = this.rpc.request("restake.v1beta1.Query", "Locks", data);
    return promise.then(data => QueryLocksResponse.decode(new BinaryReader(data)));
  }
  lock(request: QueryLockRequest): Promise<QueryLockResponse> {
    const data = QueryLockRequest.encode(request).finish();
    const promise = this.rpc.request("restake.v1beta1.Query", "Lock", data);
    return promise.then(data => QueryLockResponse.decode(new BinaryReader(data)));
  }
  stake(request: QueryStakeRequest): Promise<QueryStakeResponse> {
    const data = QueryStakeRequest.encode(request).finish();
    const promise = this.rpc.request("restake.v1beta1.Query", "Stake", data);
    return promise.then(data => QueryStakeResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("restake.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    vaults(request?: QueryVaultsRequest): Promise<QueryVaultsResponse> {
      return queryService.vaults(request);
    },
    vault(request: QueryVaultRequest): Promise<QueryVaultResponse> {
      return queryService.vault(request);
    },
    locks(request: QueryLocksRequest): Promise<QueryLocksResponse> {
      return queryService.locks(request);
    },
    lock(request: QueryLockRequest): Promise<QueryLockResponse> {
      return queryService.lock(request);
    },
    stake(request: QueryStakeRequest): Promise<QueryStakeResponse> {
      return queryService.stake(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};