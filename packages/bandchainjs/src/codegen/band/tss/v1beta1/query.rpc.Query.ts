//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryCountsRequest, QueryCountsResponse, QueryGroupsRequest, QueryGroupsResponse, QueryGroupRequest, QueryGroupResponse, QueryMembersRequest, QueryMembersResponse, QueryIsGranteeRequest, QueryIsGranteeResponse, QueryDERequest, QueryDEResponse, QueryPendingGroupsRequest, QueryPendingGroupsResponse, QueryPendingSigningsRequest, QueryPendingSigningsResponse, QuerySigningRequest, QuerySigningResponse, QuerySigningsRequest, QuerySigningsResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Counts queries the number of existing groups and signing. */
  counts(request?: QueryCountsRequest): Promise<QueryCountsResponse>;
  /** Groups queries groups details. */
  groups(request?: QueryGroupsRequest): Promise<QueryGroupsResponse>;
  /** Group queries group details from the given id. */
  group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
  /** Members queries all members in this group. */
  members(request: QueryMembersRequest): Promise<QueryMembersResponse>;
  /** IsGrantee queries whether granter grants the grantee. */
  isGrantee(request: QueryIsGranteeRequest): Promise<QueryIsGranteeResponse>;
  /** DE queries all de for this address. */
  dE(request: QueryDERequest): Promise<QueryDEResponse>;
  /** PendingGroups queries all pending groups that waits the given address to submit a message. */
  pendingGroups(request: QueryPendingGroupsRequest): Promise<QueryPendingGroupsResponse>;
  /** PendingSignings queries all pending requests that waits the given address to sign a message. */
  pendingSignings(request: QueryPendingSigningsRequest): Promise<QueryPendingSigningsResponse>;
  /** Signing queries signing details from the given id. */
  signing(request: QuerySigningRequest): Promise<QuerySigningResponse>;
  /** Signings queries signings details. */
  signings(request?: QuerySigningsRequest): Promise<QuerySigningsResponse>;
  /** Params returns all parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.counts = this.counts.bind(this);
    this.groups = this.groups.bind(this);
    this.group = this.group.bind(this);
    this.members = this.members.bind(this);
    this.isGrantee = this.isGrantee.bind(this);
    this.dE = this.dE.bind(this);
    this.pendingGroups = this.pendingGroups.bind(this);
    this.pendingSignings = this.pendingSignings.bind(this);
    this.signing = this.signing.bind(this);
    this.signings = this.signings.bind(this);
    this.params = this.params.bind(this);
  }
  counts(request: QueryCountsRequest = {}): Promise<QueryCountsResponse> {
    const data = QueryCountsRequest.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Query", "Counts", data);
    return promise.then(data => QueryCountsResponse.decode(new BinaryReader(data)));
  }
  groups(request: QueryGroupsRequest = {
    pagination: undefined
  }): Promise<QueryGroupsResponse> {
    const data = QueryGroupsRequest.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Query", "Groups", data);
    return promise.then(data => QueryGroupsResponse.decode(new BinaryReader(data)));
  }
  group(request: QueryGroupRequest): Promise<QueryGroupResponse> {
    const data = QueryGroupRequest.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Query", "Group", data);
    return promise.then(data => QueryGroupResponse.decode(new BinaryReader(data)));
  }
  members(request: QueryMembersRequest): Promise<QueryMembersResponse> {
    const data = QueryMembersRequest.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Query", "Members", data);
    return promise.then(data => QueryMembersResponse.decode(new BinaryReader(data)));
  }
  isGrantee(request: QueryIsGranteeRequest): Promise<QueryIsGranteeResponse> {
    const data = QueryIsGranteeRequest.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Query", "IsGrantee", data);
    return promise.then(data => QueryIsGranteeResponse.decode(new BinaryReader(data)));
  }
  dE(request: QueryDERequest): Promise<QueryDEResponse> {
    const data = QueryDERequest.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Query", "DE", data);
    return promise.then(data => QueryDEResponse.decode(new BinaryReader(data)));
  }
  pendingGroups(request: QueryPendingGroupsRequest): Promise<QueryPendingGroupsResponse> {
    const data = QueryPendingGroupsRequest.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Query", "PendingGroups", data);
    return promise.then(data => QueryPendingGroupsResponse.decode(new BinaryReader(data)));
  }
  pendingSignings(request: QueryPendingSigningsRequest): Promise<QueryPendingSigningsResponse> {
    const data = QueryPendingSigningsRequest.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Query", "PendingSignings", data);
    return promise.then(data => QueryPendingSigningsResponse.decode(new BinaryReader(data)));
  }
  signing(request: QuerySigningRequest): Promise<QuerySigningResponse> {
    const data = QuerySigningRequest.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Query", "Signing", data);
    return promise.then(data => QuerySigningResponse.decode(new BinaryReader(data)));
  }
  signings(request: QuerySigningsRequest = {
    pagination: undefined
  }): Promise<QuerySigningsResponse> {
    const data = QuerySigningsRequest.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Query", "Signings", data);
    return promise.then(data => QuerySigningsResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("band.tss.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    counts(request?: QueryCountsRequest): Promise<QueryCountsResponse> {
      return queryService.counts(request);
    },
    groups(request?: QueryGroupsRequest): Promise<QueryGroupsResponse> {
      return queryService.groups(request);
    },
    group(request: QueryGroupRequest): Promise<QueryGroupResponse> {
      return queryService.group(request);
    },
    members(request: QueryMembersRequest): Promise<QueryMembersResponse> {
      return queryService.members(request);
    },
    isGrantee(request: QueryIsGranteeRequest): Promise<QueryIsGranteeResponse> {
      return queryService.isGrantee(request);
    },
    dE(request: QueryDERequest): Promise<QueryDEResponse> {
      return queryService.dE(request);
    },
    pendingGroups(request: QueryPendingGroupsRequest): Promise<QueryPendingGroupsResponse> {
      return queryService.pendingGroups(request);
    },
    pendingSignings(request: QueryPendingSigningsRequest): Promise<QueryPendingSigningsResponse> {
      return queryService.pendingSignings(request);
    },
    signing(request: QuerySigningRequest): Promise<QuerySigningResponse> {
      return queryService.signing(request);
    },
    signings(request?: QuerySigningsRequest): Promise<QuerySigningsResponse> {
      return queryService.signings(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};