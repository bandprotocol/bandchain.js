//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Vault, VaultAmino, VaultSDKType, LockResponse, LockResponseAmino, LockResponseSDKType, Stake, StakeAmino, StakeSDKType } from "./types";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryVaultsRequest represents the request type for the Query/Vaults RPC method. */
export interface QueryVaultsRequest {
  /** pagination defines optional pagination parameters. */
  pagination?: PageRequest;
}
export interface QueryVaultsRequestProtoMsg {
  typeUrl: "/band.restake.v1beta1.QueryVaultsRequest";
  value: Uint8Array;
}
/** QueryVaultsRequest represents the request type for the Query/Vaults RPC method. */
export interface QueryVaultsRequestAmino {
  /** pagination defines optional pagination parameters. */
  pagination?: PageRequestAmino;
}
export interface QueryVaultsRequestAminoMsg {
  type: "/band.restake.v1beta1.QueryVaultsRequest";
  value: QueryVaultsRequestAmino;
}
/** QueryVaultsRequest represents the request type for the Query/Vaults RPC method. */
export interface QueryVaultsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryVaultsResponse represents the response type for the Query/Vaults RPC method. */
export interface QueryVaultsResponse {
  /** vaults is a list of vaults. */
  vaults: Vault[];
  /** pagination defines pagination parameters in the response. */
  pagination?: PageResponse;
}
export interface QueryVaultsResponseProtoMsg {
  typeUrl: "/band.restake.v1beta1.QueryVaultsResponse";
  value: Uint8Array;
}
/** QueryVaultsResponse represents the response type for the Query/Vaults RPC method. */
export interface QueryVaultsResponseAmino {
  /** vaults is a list of vaults. */
  vaults?: VaultAmino[];
  /** pagination defines pagination parameters in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryVaultsResponseAminoMsg {
  type: "/band.restake.v1beta1.QueryVaultsResponse";
  value: QueryVaultsResponseAmino;
}
/** QueryVaultsResponse represents the response type for the Query/Vaults RPC method. */
export interface QueryVaultsResponseSDKType {
  vaults: VaultSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryVaultRequest represents the request type for the Query/Vault RPC method. */
export interface QueryVaultRequest {
  /** key is the key of the vault that want to query. */
  key: string;
}
export interface QueryVaultRequestProtoMsg {
  typeUrl: "/band.restake.v1beta1.QueryVaultRequest";
  value: Uint8Array;
}
/** QueryVaultRequest represents the request type for the Query/Vault RPC method. */
export interface QueryVaultRequestAmino {
  /** key is the key of the vault that want to query. */
  key?: string;
}
export interface QueryVaultRequestAminoMsg {
  type: "/band.restake.v1beta1.QueryVaultRequest";
  value: QueryVaultRequestAmino;
}
/** QueryVaultRequest represents the request type for the Query/Vault RPC method. */
export interface QueryVaultRequestSDKType {
  key: string;
}
/** QueryVaultResponse represents the response type for the Query/Vault RPC method. */
export interface QueryVaultResponse {
  /** vault is a vault information. */
  vault: Vault;
}
export interface QueryVaultResponseProtoMsg {
  typeUrl: "/band.restake.v1beta1.QueryVaultResponse";
  value: Uint8Array;
}
/** QueryVaultResponse represents the response type for the Query/Vault RPC method. */
export interface QueryVaultResponseAmino {
  /** vault is a vault information. */
  vault?: VaultAmino;
}
export interface QueryVaultResponseAminoMsg {
  type: "/band.restake.v1beta1.QueryVaultResponse";
  value: QueryVaultResponseAmino;
}
/** QueryVaultResponse represents the response type for the Query/Vault RPC method. */
export interface QueryVaultResponseSDKType {
  vault: VaultSDKType;
}
/** QueryLocksRequest represents the request type for the Query/Locks RPC method. */
export interface QueryLocksRequest {
  /** staker_address is the target address to query locks. */
  stakerAddress: string;
  /** pagination defines optional pagination parameters. */
  pagination?: PageRequest;
}
export interface QueryLocksRequestProtoMsg {
  typeUrl: "/band.restake.v1beta1.QueryLocksRequest";
  value: Uint8Array;
}
/** QueryLocksRequest represents the request type for the Query/Locks RPC method. */
export interface QueryLocksRequestAmino {
  /** staker_address is the target address to query locks. */
  staker_address?: string;
  /** pagination defines optional pagination parameters. */
  pagination?: PageRequestAmino;
}
export interface QueryLocksRequestAminoMsg {
  type: "/band.restake.v1beta1.QueryLocksRequest";
  value: QueryLocksRequestAmino;
}
/** QueryLocksRequest represents the request type for the Query/Locks RPC method. */
export interface QueryLocksRequestSDKType {
  staker_address: string;
  pagination?: PageRequestSDKType;
}
/** QueryLocksResponse represents the response type for the Query/Locks RPC method. */
export interface QueryLocksResponse {
  /** locks is a list of locks of the staker. */
  locks: LockResponse[];
  /** pagination defines pagination parameters in the response. */
  pagination?: PageResponse;
}
export interface QueryLocksResponseProtoMsg {
  typeUrl: "/band.restake.v1beta1.QueryLocksResponse";
  value: Uint8Array;
}
/** QueryLocksResponse represents the response type for the Query/Locks RPC method. */
export interface QueryLocksResponseAmino {
  /** locks is a list of locks of the staker. */
  locks?: LockResponseAmino[];
  /** pagination defines pagination parameters in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryLocksResponseAminoMsg {
  type: "/band.restake.v1beta1.QueryLocksResponse";
  value: QueryLocksResponseAmino;
}
/** QueryLocksResponse represents the response type for the Query/Locks RPC method. */
export interface QueryLocksResponseSDKType {
  locks: LockResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryLockRequest represents the request type for the Query/Lock RPC method. */
export interface QueryLockRequest {
  /** staker_address is the target address to query lock. */
  stakerAddress: string;
  /** key is the key of target vault to query lock. */
  key: string;
}
export interface QueryLockRequestProtoMsg {
  typeUrl: "/band.restake.v1beta1.QueryLockRequest";
  value: Uint8Array;
}
/** QueryLockRequest represents the request type for the Query/Lock RPC method. */
export interface QueryLockRequestAmino {
  /** staker_address is the target address to query lock. */
  staker_address?: string;
  /** key is the key of target vault to query lock. */
  key?: string;
}
export interface QueryLockRequestAminoMsg {
  type: "/band.restake.v1beta1.QueryLockRequest";
  value: QueryLockRequestAmino;
}
/** QueryLockRequest represents the request type for the Query/Lock RPC method. */
export interface QueryLockRequestSDKType {
  staker_address: string;
  key: string;
}
/** QueryLockResponse represents the response type for the Query/Lock RPC method. */
export interface QueryLockResponse {
  /** lock is the lock of the staker and the vault. */
  lock: LockResponse;
}
export interface QueryLockResponseProtoMsg {
  typeUrl: "/band.restake.v1beta1.QueryLockResponse";
  value: Uint8Array;
}
/** QueryLockResponse represents the response type for the Query/Lock RPC method. */
export interface QueryLockResponseAmino {
  /** lock is the lock of the staker and the vault. */
  lock?: LockResponseAmino;
}
export interface QueryLockResponseAminoMsg {
  type: "/band.restake.v1beta1.QueryLockResponse";
  value: QueryLockResponseAmino;
}
/** QueryLockResponse represents the response type for the Query/Lock RPC method. */
export interface QueryLockResponseSDKType {
  lock: LockResponseSDKType;
}
/** QueryStakeRequest represents the request type for the Query/Stake RPC method. */
export interface QueryStakeRequest {
  /** staker_address is the target address used to query the stake. */
  stakerAddress: string;
}
export interface QueryStakeRequestProtoMsg {
  typeUrl: "/band.restake.v1beta1.QueryStakeRequest";
  value: Uint8Array;
}
/** QueryStakeRequest represents the request type for the Query/Stake RPC method. */
export interface QueryStakeRequestAmino {
  /** staker_address is the target address used to query the stake. */
  staker_address?: string;
}
export interface QueryStakeRequestAminoMsg {
  type: "/band.restake.v1beta1.QueryStakeRequest";
  value: QueryStakeRequestAmino;
}
/** QueryStakeRequest represents the request type for the Query/Stake RPC method. */
export interface QueryStakeRequestSDKType {
  staker_address: string;
}
/** QueryStakeResponse represents the response type for the Query/Stake RPC method. */
export interface QueryStakeResponse {
  /** stake is a stake information of the staker. */
  stake: Stake;
}
export interface QueryStakeResponseProtoMsg {
  typeUrl: "/band.restake.v1beta1.QueryStakeResponse";
  value: Uint8Array;
}
/** QueryStakeResponse represents the response type for the Query/Stake RPC method. */
export interface QueryStakeResponseAmino {
  /** stake is a stake information of the staker. */
  stake?: StakeAmino;
}
export interface QueryStakeResponseAminoMsg {
  type: "/band.restake.v1beta1.QueryStakeResponse";
  value: QueryStakeResponseAmino;
}
/** QueryStakeResponse represents the response type for the Query/Stake RPC method. */
export interface QueryStakeResponseSDKType {
  stake: StakeSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/band.restake.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/band.restake.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params are the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/band.restake.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params are the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/band.restake.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryVaultsRequest(): QueryVaultsRequest {
  return {
    pagination: undefined
  };
}
export const QueryVaultsRequest = {
  typeUrl: "/band.restake.v1beta1.QueryVaultsRequest",
  encode(message: QueryVaultsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVaultsRequest>): QueryVaultsRequest {
    const message = createBaseQueryVaultsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVaultsRequestAmino): QueryVaultsRequest {
    const message = createBaseQueryVaultsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVaultsRequest): QueryVaultsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVaultsRequestAminoMsg): QueryVaultsRequest {
    return QueryVaultsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultsRequestProtoMsg): QueryVaultsRequest {
    return QueryVaultsRequest.decode(message.value);
  },
  toProto(message: QueryVaultsRequest): Uint8Array {
    return QueryVaultsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultsRequest): QueryVaultsRequestProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.QueryVaultsRequest",
      value: QueryVaultsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVaultsResponse(): QueryVaultsResponse {
  return {
    vaults: [],
    pagination: undefined
  };
}
export const QueryVaultsResponse = {
  typeUrl: "/band.restake.v1beta1.QueryVaultsResponse",
  encode(message: QueryVaultsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.vaults) {
      Vault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaults.push(Vault.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVaultsResponse>): QueryVaultsResponse {
    const message = createBaseQueryVaultsResponse();
    message.vaults = object.vaults?.map(e => Vault.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVaultsResponseAmino): QueryVaultsResponse {
    const message = createBaseQueryVaultsResponse();
    message.vaults = object.vaults?.map(e => Vault.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVaultsResponse): QueryVaultsResponseAmino {
    const obj: any = {};
    if (message.vaults) {
      obj.vaults = message.vaults.map(e => e ? Vault.toAmino(e) : undefined);
    } else {
      obj.vaults = message.vaults;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVaultsResponseAminoMsg): QueryVaultsResponse {
    return QueryVaultsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultsResponseProtoMsg): QueryVaultsResponse {
    return QueryVaultsResponse.decode(message.value);
  },
  toProto(message: QueryVaultsResponse): Uint8Array {
    return QueryVaultsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultsResponse): QueryVaultsResponseProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.QueryVaultsResponse",
      value: QueryVaultsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVaultRequest(): QueryVaultRequest {
  return {
    key: ""
  };
}
export const QueryVaultRequest = {
  typeUrl: "/band.restake.v1beta1.QueryVaultRequest",
  encode(message: QueryVaultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVaultRequest>): QueryVaultRequest {
    const message = createBaseQueryVaultRequest();
    message.key = object.key ?? "";
    return message;
  },
  fromAmino(object: QueryVaultRequestAmino): QueryVaultRequest {
    const message = createBaseQueryVaultRequest();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    return message;
  },
  toAmino(message: QueryVaultRequest): QueryVaultRequestAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    return obj;
  },
  fromAminoMsg(object: QueryVaultRequestAminoMsg): QueryVaultRequest {
    return QueryVaultRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultRequestProtoMsg): QueryVaultRequest {
    return QueryVaultRequest.decode(message.value);
  },
  toProto(message: QueryVaultRequest): Uint8Array {
    return QueryVaultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultRequest): QueryVaultRequestProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.QueryVaultRequest",
      value: QueryVaultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVaultResponse(): QueryVaultResponse {
  return {
    vault: Vault.fromPartial({})
  };
}
export const QueryVaultResponse = {
  typeUrl: "/band.restake.v1beta1.QueryVaultResponse",
  encode(message: QueryVaultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vault !== undefined) {
      Vault.encode(message.vault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vault = Vault.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVaultResponse>): QueryVaultResponse {
    const message = createBaseQueryVaultResponse();
    message.vault = object.vault !== undefined && object.vault !== null ? Vault.fromPartial(object.vault) : undefined;
    return message;
  },
  fromAmino(object: QueryVaultResponseAmino): QueryVaultResponse {
    const message = createBaseQueryVaultResponse();
    if (object.vault !== undefined && object.vault !== null) {
      message.vault = Vault.fromAmino(object.vault);
    }
    return message;
  },
  toAmino(message: QueryVaultResponse): QueryVaultResponseAmino {
    const obj: any = {};
    obj.vault = message.vault ? Vault.toAmino(message.vault) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVaultResponseAminoMsg): QueryVaultResponse {
    return QueryVaultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultResponseProtoMsg): QueryVaultResponse {
    return QueryVaultResponse.decode(message.value);
  },
  toProto(message: QueryVaultResponse): Uint8Array {
    return QueryVaultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultResponse): QueryVaultResponseProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.QueryVaultResponse",
      value: QueryVaultResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLocksRequest(): QueryLocksRequest {
  return {
    stakerAddress: "",
    pagination: undefined
  };
}
export const QueryLocksRequest = {
  typeUrl: "/band.restake.v1beta1.QueryLocksRequest",
  encode(message: QueryLocksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakerAddress !== "") {
      writer.uint32(10).string(message.stakerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLocksRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLocksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakerAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLocksRequest>): QueryLocksRequest {
    const message = createBaseQueryLocksRequest();
    message.stakerAddress = object.stakerAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryLocksRequestAmino): QueryLocksRequest {
    const message = createBaseQueryLocksRequest();
    if (object.staker_address !== undefined && object.staker_address !== null) {
      message.stakerAddress = object.staker_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLocksRequest): QueryLocksRequestAmino {
    const obj: any = {};
    obj.staker_address = message.stakerAddress === "" ? undefined : message.stakerAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLocksRequestAminoMsg): QueryLocksRequest {
    return QueryLocksRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLocksRequestProtoMsg): QueryLocksRequest {
    return QueryLocksRequest.decode(message.value);
  },
  toProto(message: QueryLocksRequest): Uint8Array {
    return QueryLocksRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLocksRequest): QueryLocksRequestProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.QueryLocksRequest",
      value: QueryLocksRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLocksResponse(): QueryLocksResponse {
  return {
    locks: [],
    pagination: undefined
  };
}
export const QueryLocksResponse = {
  typeUrl: "/band.restake.v1beta1.QueryLocksResponse",
  encode(message: QueryLocksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.locks) {
      LockResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLocksResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLocksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locks.push(LockResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLocksResponse>): QueryLocksResponse {
    const message = createBaseQueryLocksResponse();
    message.locks = object.locks?.map(e => LockResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryLocksResponseAmino): QueryLocksResponse {
    const message = createBaseQueryLocksResponse();
    message.locks = object.locks?.map(e => LockResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLocksResponse): QueryLocksResponseAmino {
    const obj: any = {};
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? LockResponse.toAmino(e) : undefined);
    } else {
      obj.locks = message.locks;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLocksResponseAminoMsg): QueryLocksResponse {
    return QueryLocksResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLocksResponseProtoMsg): QueryLocksResponse {
    return QueryLocksResponse.decode(message.value);
  },
  toProto(message: QueryLocksResponse): Uint8Array {
    return QueryLocksResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLocksResponse): QueryLocksResponseProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.QueryLocksResponse",
      value: QueryLocksResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLockRequest(): QueryLockRequest {
  return {
    stakerAddress: "",
    key: ""
  };
}
export const QueryLockRequest = {
  typeUrl: "/band.restake.v1beta1.QueryLockRequest",
  encode(message: QueryLockRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakerAddress !== "") {
      writer.uint32(10).string(message.stakerAddress);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakerAddress = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLockRequest>): QueryLockRequest {
    const message = createBaseQueryLockRequest();
    message.stakerAddress = object.stakerAddress ?? "";
    message.key = object.key ?? "";
    return message;
  },
  fromAmino(object: QueryLockRequestAmino): QueryLockRequest {
    const message = createBaseQueryLockRequest();
    if (object.staker_address !== undefined && object.staker_address !== null) {
      message.stakerAddress = object.staker_address;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    return message;
  },
  toAmino(message: QueryLockRequest): QueryLockRequestAmino {
    const obj: any = {};
    obj.staker_address = message.stakerAddress === "" ? undefined : message.stakerAddress;
    obj.key = message.key === "" ? undefined : message.key;
    return obj;
  },
  fromAminoMsg(object: QueryLockRequestAminoMsg): QueryLockRequest {
    return QueryLockRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLockRequestProtoMsg): QueryLockRequest {
    return QueryLockRequest.decode(message.value);
  },
  toProto(message: QueryLockRequest): Uint8Array {
    return QueryLockRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLockRequest): QueryLockRequestProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.QueryLockRequest",
      value: QueryLockRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLockResponse(): QueryLockResponse {
  return {
    lock: LockResponse.fromPartial({})
  };
}
export const QueryLockResponse = {
  typeUrl: "/band.restake.v1beta1.QueryLockResponse",
  encode(message: QueryLockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lock !== undefined) {
      LockResponse.encode(message.lock, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lock = LockResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLockResponse>): QueryLockResponse {
    const message = createBaseQueryLockResponse();
    message.lock = object.lock !== undefined && object.lock !== null ? LockResponse.fromPartial(object.lock) : undefined;
    return message;
  },
  fromAmino(object: QueryLockResponseAmino): QueryLockResponse {
    const message = createBaseQueryLockResponse();
    if (object.lock !== undefined && object.lock !== null) {
      message.lock = LockResponse.fromAmino(object.lock);
    }
    return message;
  },
  toAmino(message: QueryLockResponse): QueryLockResponseAmino {
    const obj: any = {};
    obj.lock = message.lock ? LockResponse.toAmino(message.lock) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLockResponseAminoMsg): QueryLockResponse {
    return QueryLockResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLockResponseProtoMsg): QueryLockResponse {
    return QueryLockResponse.decode(message.value);
  },
  toProto(message: QueryLockResponse): Uint8Array {
    return QueryLockResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLockResponse): QueryLockResponseProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.QueryLockResponse",
      value: QueryLockResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStakeRequest(): QueryStakeRequest {
  return {
    stakerAddress: ""
  };
}
export const QueryStakeRequest = {
  typeUrl: "/band.restake.v1beta1.QueryStakeRequest",
  encode(message: QueryStakeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakerAddress !== "") {
      writer.uint32(10).string(message.stakerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStakeRequest>): QueryStakeRequest {
    const message = createBaseQueryStakeRequest();
    message.stakerAddress = object.stakerAddress ?? "";
    return message;
  },
  fromAmino(object: QueryStakeRequestAmino): QueryStakeRequest {
    const message = createBaseQueryStakeRequest();
    if (object.staker_address !== undefined && object.staker_address !== null) {
      message.stakerAddress = object.staker_address;
    }
    return message;
  },
  toAmino(message: QueryStakeRequest): QueryStakeRequestAmino {
    const obj: any = {};
    obj.staker_address = message.stakerAddress === "" ? undefined : message.stakerAddress;
    return obj;
  },
  fromAminoMsg(object: QueryStakeRequestAminoMsg): QueryStakeRequest {
    return QueryStakeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakeRequestProtoMsg): QueryStakeRequest {
    return QueryStakeRequest.decode(message.value);
  },
  toProto(message: QueryStakeRequest): Uint8Array {
    return QueryStakeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStakeRequest): QueryStakeRequestProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.QueryStakeRequest",
      value: QueryStakeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStakeResponse(): QueryStakeResponse {
  return {
    stake: Stake.fromPartial({})
  };
}
export const QueryStakeResponse = {
  typeUrl: "/band.restake.v1beta1.QueryStakeResponse",
  encode(message: QueryStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stake !== undefined) {
      Stake.encode(message.stake, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stake = Stake.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStakeResponse>): QueryStakeResponse {
    const message = createBaseQueryStakeResponse();
    message.stake = object.stake !== undefined && object.stake !== null ? Stake.fromPartial(object.stake) : undefined;
    return message;
  },
  fromAmino(object: QueryStakeResponseAmino): QueryStakeResponse {
    const message = createBaseQueryStakeResponse();
    if (object.stake !== undefined && object.stake !== null) {
      message.stake = Stake.fromAmino(object.stake);
    }
    return message;
  },
  toAmino(message: QueryStakeResponse): QueryStakeResponseAmino {
    const obj: any = {};
    obj.stake = message.stake ? Stake.toAmino(message.stake) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakeResponseAminoMsg): QueryStakeResponse {
    return QueryStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakeResponseProtoMsg): QueryStakeResponse {
    return QueryStakeResponse.decode(message.value);
  },
  toProto(message: QueryStakeResponse): Uint8Array {
    return QueryStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStakeResponse): QueryStakeResponseProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.QueryStakeResponse",
      value: QueryStakeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/band.restake.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/band.restake.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/band.restake.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};