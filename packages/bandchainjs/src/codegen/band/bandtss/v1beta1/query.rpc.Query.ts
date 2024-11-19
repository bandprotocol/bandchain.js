//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryCountsRequest, QueryCountsResponse, QueryMembersRequest, QueryMembersResponse, QueryMemberRequest, QueryMemberResponse, QueryCurrentGroupRequest, QueryCurrentGroupResponse, QueryIncomingGroupRequest, QueryIncomingGroupResponse, QuerySigningRequest, QuerySigningResponse, QueryGroupTransitionRequest, QueryGroupTransitionResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Counts queries the number of existing signing. */
  counts(request?: QueryCountsRequest): Promise<QueryCountsResponse>;
  /** Members queries all members. */
  members(request: QueryMembersRequest): Promise<QueryMembersResponse>;
  /** Member queries the member information of the given address. */
  member(request: QueryMemberRequest): Promise<QueryMemberResponse>;
  /** CurrentGroup queries the current group information. */
  currentGroup(request?: QueryCurrentGroupRequest): Promise<QueryCurrentGroupResponse>;
  /** IncomingGroup queries the incoming group information. */
  incomingGroup(request?: QueryIncomingGroupRequest): Promise<QueryIncomingGroupResponse>;
  /** Signing queries the signing result of the given signing request ID. */
  signing(request: QuerySigningRequest): Promise<QuerySigningResponse>;
  /** GroupTransition queries the group transition information. */
  groupTransition(request?: QueryGroupTransitionRequest): Promise<QueryGroupTransitionResponse>;
  /** Params queries parameters of bandtss module */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.counts = this.counts.bind(this);
    this.members = this.members.bind(this);
    this.member = this.member.bind(this);
    this.currentGroup = this.currentGroup.bind(this);
    this.incomingGroup = this.incomingGroup.bind(this);
    this.signing = this.signing.bind(this);
    this.groupTransition = this.groupTransition.bind(this);
    this.params = this.params.bind(this);
  }
  counts(request: QueryCountsRequest = {}): Promise<QueryCountsResponse> {
    const data = QueryCountsRequest.encode(request).finish();
    const promise = this.rpc.request("band.bandtss.v1beta1.Query", "Counts", data);
    return promise.then(data => QueryCountsResponse.decode(new BinaryReader(data)));
  }
  members(request: QueryMembersRequest): Promise<QueryMembersResponse> {
    const data = QueryMembersRequest.encode(request).finish();
    const promise = this.rpc.request("band.bandtss.v1beta1.Query", "Members", data);
    return promise.then(data => QueryMembersResponse.decode(new BinaryReader(data)));
  }
  member(request: QueryMemberRequest): Promise<QueryMemberResponse> {
    const data = QueryMemberRequest.encode(request).finish();
    const promise = this.rpc.request("band.bandtss.v1beta1.Query", "Member", data);
    return promise.then(data => QueryMemberResponse.decode(new BinaryReader(data)));
  }
  currentGroup(request: QueryCurrentGroupRequest = {}): Promise<QueryCurrentGroupResponse> {
    const data = QueryCurrentGroupRequest.encode(request).finish();
    const promise = this.rpc.request("band.bandtss.v1beta1.Query", "CurrentGroup", data);
    return promise.then(data => QueryCurrentGroupResponse.decode(new BinaryReader(data)));
  }
  incomingGroup(request: QueryIncomingGroupRequest = {}): Promise<QueryIncomingGroupResponse> {
    const data = QueryIncomingGroupRequest.encode(request).finish();
    const promise = this.rpc.request("band.bandtss.v1beta1.Query", "IncomingGroup", data);
    return promise.then(data => QueryIncomingGroupResponse.decode(new BinaryReader(data)));
  }
  signing(request: QuerySigningRequest): Promise<QuerySigningResponse> {
    const data = QuerySigningRequest.encode(request).finish();
    const promise = this.rpc.request("band.bandtss.v1beta1.Query", "Signing", data);
    return promise.then(data => QuerySigningResponse.decode(new BinaryReader(data)));
  }
  groupTransition(request: QueryGroupTransitionRequest = {}): Promise<QueryGroupTransitionResponse> {
    const data = QueryGroupTransitionRequest.encode(request).finish();
    const promise = this.rpc.request("band.bandtss.v1beta1.Query", "GroupTransition", data);
    return promise.then(data => QueryGroupTransitionResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("band.bandtss.v1beta1.Query", "Params", data);
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
    members(request: QueryMembersRequest): Promise<QueryMembersResponse> {
      return queryService.members(request);
    },
    member(request: QueryMemberRequest): Promise<QueryMemberResponse> {
      return queryService.member(request);
    },
    currentGroup(request?: QueryCurrentGroupRequest): Promise<QueryCurrentGroupResponse> {
      return queryService.currentGroup(request);
    },
    incomingGroup(request?: QueryIncomingGroupRequest): Promise<QueryIncomingGroupResponse> {
      return queryService.incomingGroup(request);
    },
    signing(request: QuerySigningRequest): Promise<QuerySigningResponse> {
      return queryService.signing(request);
    },
    groupTransition(request?: QueryGroupTransitionRequest): Promise<QueryGroupTransitionResponse> {
      return queryService.groupTransition(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};