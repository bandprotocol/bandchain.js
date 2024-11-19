//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryCountsRequest, QueryCountsResponseSDKType, QueryGroupsRequest, QueryGroupsResponseSDKType, QueryGroupRequest, QueryGroupResponseSDKType, QueryMembersRequest, QueryMembersResponseSDKType, QueryIsGranteeRequest, QueryIsGranteeResponseSDKType, QueryDERequest, QueryDEResponseSDKType, QueryPendingGroupsRequest, QueryPendingGroupsResponseSDKType, QueryPendingSigningsRequest, QueryPendingSigningsResponseSDKType, QuerySigningRequest, QuerySigningResponseSDKType, QuerySigningsRequest, QuerySigningsResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Counts queries the number of existing groups and signing. */
  async counts(_params: QueryCountsRequest = {}): Promise<QueryCountsResponseSDKType> {
    const endpoint = `tss/v1beta1/counts`;
    return await this.req.get<QueryCountsResponseSDKType>(endpoint);
  }
  /* Groups queries groups details. */
  async groups(params: QueryGroupsRequest = {
    pagination: undefined
  }): Promise<QueryGroupsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `tss/v1beta1/groups`;
    return await this.req.get<QueryGroupsResponseSDKType>(endpoint, options);
  }
  /* Group queries group details from the given id. */
  async group(params: QueryGroupRequest): Promise<QueryGroupResponseSDKType> {
    const endpoint = `tss/v1beta1/groups/${params.groupId}`;
    return await this.req.get<QueryGroupResponseSDKType>(endpoint);
  }
  /* Members queries all members in this group. */
  async members(params: QueryMembersRequest): Promise<QueryMembersResponseSDKType> {
    const endpoint = `tss/v1beta1/groups/${params.groupId}/members`;
    return await this.req.get<QueryMembersResponseSDKType>(endpoint);
  }
  /* IsGrantee queries whether granter grants the grantee. */
  async isGrantee(params: QueryIsGranteeRequest): Promise<QueryIsGranteeResponseSDKType> {
    const endpoint = `tss/v1beta1/is_grantee/${params.granter}/${params.grantee}`;
    return await this.req.get<QueryIsGranteeResponseSDKType>(endpoint);
  }
  /* DE queries all de for this address. */
  async dE(params: QueryDERequest): Promise<QueryDEResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `tss/v1beta1/de_list/${params.address}`;
    return await this.req.get<QueryDEResponseSDKType>(endpoint, options);
  }
  /* PendingGroups queries all pending groups that waits the given address to submit a message. */
  async pendingGroups(params: QueryPendingGroupsRequest): Promise<QueryPendingGroupsResponseSDKType> {
    const endpoint = `tss/v1beta1/pending_groups/${params.address}`;
    return await this.req.get<QueryPendingGroupsResponseSDKType>(endpoint);
  }
  /* PendingSignings queries all pending requests that waits the given address to sign a message. */
  async pendingSignings(params: QueryPendingSigningsRequest): Promise<QueryPendingSigningsResponseSDKType> {
    const endpoint = `tss/v1beta1/pending_signings/${params.address}`;
    return await this.req.get<QueryPendingSigningsResponseSDKType>(endpoint);
  }
  /* Signing queries signing details from the given id. */
  async signing(params: QuerySigningRequest): Promise<QuerySigningResponseSDKType> {
    const endpoint = `tss/v1beta1/signings/${params.signingId}`;
    return await this.req.get<QuerySigningResponseSDKType>(endpoint);
  }
  /* Signings queries signings details. */
  async signings(params: QuerySigningsRequest = {
    pagination: undefined
  }): Promise<QuerySigningsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `tss/v1beta1/signings`;
    return await this.req.get<QuerySigningsResponseSDKType>(endpoint, options);
  }
  /* Params returns all parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `tss/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}