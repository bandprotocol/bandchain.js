//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryCountsRequest, QueryCountsResponseSDKType, QueryMembersRequest, QueryMembersResponseSDKType, QueryMemberRequest, QueryMemberResponseSDKType, QueryCurrentGroupRequest, QueryCurrentGroupResponseSDKType, QueryIncomingGroupRequest, QueryIncomingGroupResponseSDKType, QuerySigningRequest, QuerySigningResponseSDKType, QueryGroupTransitionRequest, QueryGroupTransitionResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.counts = this.counts.bind(this);
    this.members = this.members.bind(this);
    this.member = this.member.bind(this);
    this.currentGroup = this.currentGroup.bind(this);
    this.incomingGroup = this.incomingGroup.bind(this);
    this.signing = this.signing.bind(this);
    this.groupTransition = this.groupTransition.bind(this);
    this.params = this.params.bind(this);
  }
  /* Counts queries the number of existing signing. */
  async counts(_params: QueryCountsRequest = {}): Promise<QueryCountsResponseSDKType> {
    const endpoint = `bandtss/v1beta1/counts`;
    return await this.req.get<QueryCountsResponseSDKType>(endpoint);
  }
  /* Members queries all members. */
  async members(params: QueryMembersRequest): Promise<QueryMembersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.isIncomingGroup !== "undefined") {
      options.params.is_incoming_group = params.isIncomingGroup;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bandtss/v1beta1/members`;
    return await this.req.get<QueryMembersResponseSDKType>(endpoint, options);
  }
  /* Member queries the member information of the given address. */
  async member(params: QueryMemberRequest): Promise<QueryMemberResponseSDKType> {
    const endpoint = `bandtss/v1beta1/members/${params.address}`;
    return await this.req.get<QueryMemberResponseSDKType>(endpoint);
  }
  /* CurrentGroup queries the current group information. */
  async currentGroup(_params: QueryCurrentGroupRequest = {}): Promise<QueryCurrentGroupResponseSDKType> {
    const endpoint = `bandtss/v1beta1/current_group`;
    return await this.req.get<QueryCurrentGroupResponseSDKType>(endpoint);
  }
  /* IncomingGroup queries the incoming group information. */
  async incomingGroup(_params: QueryIncomingGroupRequest = {}): Promise<QueryIncomingGroupResponseSDKType> {
    const endpoint = `bandtss/v1beta1/incoming_group`;
    return await this.req.get<QueryIncomingGroupResponseSDKType>(endpoint);
  }
  /* Signing queries the signing result of the given signing request ID. */
  async signing(params: QuerySigningRequest): Promise<QuerySigningResponseSDKType> {
    const endpoint = `bandtss/v1beta1/signings/${params.signingId}`;
    return await this.req.get<QuerySigningResponseSDKType>(endpoint);
  }
  /* GroupTransition queries the group transition information. */
  async groupTransition(_params: QueryGroupTransitionRequest = {}): Promise<QueryGroupTransitionResponseSDKType> {
    const endpoint = `bandtss/v1beta1/group_transition`;
    return await this.req.get<QueryGroupTransitionResponseSDKType>(endpoint);
  }
  /* Params queries parameters of bandtss module */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `bandtss/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}