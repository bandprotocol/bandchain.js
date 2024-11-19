//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Member, MemberAmino, MemberSDKType, GroupStatus, SigningResult, SigningResultAmino, SigningResultSDKType } from "../../tss/v1beta1/tss";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GroupTransition, GroupTransitionAmino, GroupTransitionSDKType } from "./bandtss";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** MemberStatusFilter defines the query options for filtering members by their active status. */
export enum MemberStatusFilter {
  /** MEMBER_STATUS_FILTER_UNSPECIFIED - MEMBER_STATUS_FILTER_UNSPECIFIED defines a filter for unspecified active status. */
  MEMBER_STATUS_FILTER_UNSPECIFIED = 0,
  /** MEMBER_STATUS_FILTER_ACTIVE - MEMBER_STATUS_FILTER_ACTIVE defines a filter for active status. */
  MEMBER_STATUS_FILTER_ACTIVE = 1,
  /** MEMBER_STATUS_FILTER_INACTIVE - MEMBER_STATUS_FILTER_INACTIVE defines a filter for inactive status. */
  MEMBER_STATUS_FILTER_INACTIVE = 2,
  UNRECOGNIZED = -1,
}
export const MemberStatusFilterSDKType = MemberStatusFilter;
export const MemberStatusFilterAmino = MemberStatusFilter;
export function memberStatusFilterFromJSON(object: any): MemberStatusFilter {
  switch (object) {
    case 0:
    case "MEMBER_STATUS_FILTER_UNSPECIFIED":
      return MemberStatusFilter.MEMBER_STATUS_FILTER_UNSPECIFIED;
    case 1:
    case "MEMBER_STATUS_FILTER_ACTIVE":
      return MemberStatusFilter.MEMBER_STATUS_FILTER_ACTIVE;
    case 2:
    case "MEMBER_STATUS_FILTER_INACTIVE":
      return MemberStatusFilter.MEMBER_STATUS_FILTER_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MemberStatusFilter.UNRECOGNIZED;
  }
}
export function memberStatusFilterToJSON(object: MemberStatusFilter): string {
  switch (object) {
    case MemberStatusFilter.MEMBER_STATUS_FILTER_UNSPECIFIED:
      return "MEMBER_STATUS_FILTER_UNSPECIFIED";
    case MemberStatusFilter.MEMBER_STATUS_FILTER_ACTIVE:
      return "MEMBER_STATUS_FILTER_ACTIVE";
    case MemberStatusFilter.MEMBER_STATUS_FILTER_INACTIVE:
      return "MEMBER_STATUS_FILTER_INACTIVE";
    case MemberStatusFilter.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** QueryCountsRequest is request type for the Query/Count RPC method. */
export interface QueryCountsRequest {}
export interface QueryCountsRequestProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.QueryCountsRequest";
  value: Uint8Array;
}
/** QueryCountsRequest is request type for the Query/Count RPC method. */
export interface QueryCountsRequestAmino {}
export interface QueryCountsRequestAminoMsg {
  type: "/band.bandtss.v1beta1.QueryCountsRequest";
  value: QueryCountsRequestAmino;
}
/** QueryCountsRequest is request type for the Query/Count RPC method. */
export interface QueryCountsRequestSDKType {}
/** QueryCountsResponse is response type for the Query/Count RPC method. */
export interface QueryCountsResponse {
  /** signing_count is total number of signing request submitted to bandtss module */
  signingCount: bigint;
}
export interface QueryCountsResponseProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.QueryCountsResponse";
  value: Uint8Array;
}
/** QueryCountsResponse is response type for the Query/Count RPC method. */
export interface QueryCountsResponseAmino {
  /** signing_count is total number of signing request submitted to bandtss module */
  signing_count?: string;
}
export interface QueryCountsResponseAminoMsg {
  type: "/band.bandtss.v1beta1.QueryCountsResponse";
  value: QueryCountsResponseAmino;
}
/** QueryCountsResponse is response type for the Query/Count RPC method. */
export interface QueryCountsResponseSDKType {
  signing_count: bigint;
}
/** QueryMembersRequest is the request type for the Query/Members RPC method. */
export interface QueryMembersRequest {
  /** status define type of filter on member's status. */
  status: MemberStatusFilter;
  /**
   * is_incoming_group is a flag to indicate whether user query members in the incoming group
   * or the current group.
   */
  isIncomingGroup: boolean;
  /** pagination defines pagination settings for the request. */
  pagination?: PageRequest;
}
export interface QueryMembersRequestProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.QueryMembersRequest";
  value: Uint8Array;
}
/** QueryMembersRequest is the request type for the Query/Members RPC method. */
export interface QueryMembersRequestAmino {
  /** status define type of filter on member's status. */
  status?: MemberStatusFilter;
  /**
   * is_incoming_group is a flag to indicate whether user query members in the incoming group
   * or the current group.
   */
  is_incoming_group?: boolean;
  /** pagination defines pagination settings for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryMembersRequestAminoMsg {
  type: "/band.bandtss.v1beta1.QueryMembersRequest";
  value: QueryMembersRequestAmino;
}
/** QueryMembersRequest is the request type for the Query/Members RPC method. */
export interface QueryMembersRequestSDKType {
  status: MemberStatusFilter;
  is_incoming_group: boolean;
  pagination?: PageRequestSDKType;
}
/** QueryMembersResponse is the response type for the Query/Members RPC method. */
export interface QueryMembersResponse {
  /** members are those individuals who correspond to the provided is_active status. */
  members: Member[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryMembersResponseProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.QueryMembersResponse";
  value: Uint8Array;
}
/** QueryMembersResponse is the response type for the Query/Members RPC method. */
export interface QueryMembersResponseAmino {
  /** members are those individuals who correspond to the provided is_active status. */
  members?: MemberAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryMembersResponseAminoMsg {
  type: "/band.bandtss.v1beta1.QueryMembersResponse";
  value: QueryMembersResponseAmino;
}
/** QueryMembersResponse is the response type for the Query/Members RPC method. */
export interface QueryMembersResponseSDKType {
  members: MemberSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryMemberRequest is the request type for the Query/Member RPC method. */
export interface QueryMemberRequest {
  /** address is the member address. */
  address: string;
}
export interface QueryMemberRequestProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.QueryMemberRequest";
  value: Uint8Array;
}
/** QueryMemberRequest is the request type for the Query/Member RPC method. */
export interface QueryMemberRequestAmino {
  /** address is the member address. */
  address?: string;
}
export interface QueryMemberRequestAminoMsg {
  type: "/band.bandtss.v1beta1.QueryMemberRequest";
  value: QueryMemberRequestAmino;
}
/** QueryMemberRequest is the request type for the Query/Member RPC method. */
export interface QueryMemberRequestSDKType {
  address: string;
}
/** QueryMemberResponse is the response type for the Query/Member RPC method. */
export interface QueryMemberResponse {
  /** current_group_member is the member detail. */
  currentGroupMember: Member;
  /** incoming_group_member is the member detail. */
  incomingGroupMember: Member;
}
export interface QueryMemberResponseProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.QueryMemberResponse";
  value: Uint8Array;
}
/** QueryMemberResponse is the response type for the Query/Member RPC method. */
export interface QueryMemberResponseAmino {
  /** current_group_member is the member detail. */
  current_group_member?: MemberAmino;
  /** incoming_group_member is the member detail. */
  incoming_group_member?: MemberAmino;
}
export interface QueryMemberResponseAminoMsg {
  type: "/band.bandtss.v1beta1.QueryMemberResponse";
  value: QueryMemberResponseAmino;
}
/** QueryMemberResponse is the response type for the Query/Member RPC method. */
export interface QueryMemberResponseSDKType {
  current_group_member: MemberSDKType;
  incoming_group_member: MemberSDKType;
}
/** QueryCurrentGroupRequest is the request type for the Query/CurrentGroup RPC method. */
export interface QueryCurrentGroupRequest {}
export interface QueryCurrentGroupRequestProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.QueryCurrentGroupRequest";
  value: Uint8Array;
}
/** QueryCurrentGroupRequest is the request type for the Query/CurrentGroup RPC method. */
export interface QueryCurrentGroupRequestAmino {}
export interface QueryCurrentGroupRequestAminoMsg {
  type: "/band.bandtss.v1beta1.QueryCurrentGroupRequest";
  value: QueryCurrentGroupRequestAmino;
}
/** QueryCurrentGroupRequest is the request type for the Query/CurrentGroup RPC method. */
export interface QueryCurrentGroupRequestSDKType {}
/** QueryCurrentGroupResponse is the response type for the Query/CurrentGroup RPC method. */
export interface QueryCurrentGroupResponse {
  /** group_id is the ID of the current group. */
  groupId: bigint;
  /** size is the number of members in the group. */
  size: bigint;
  /** threshold is the minimum number of members needed to generate a valid signature. */
  threshold: bigint;
  /** pub_key is the public key generated by the group. */
  pubKey: Uint8Array;
  /** status is the status of the current group. */
  status: GroupStatus;
  /** active_time is the timestamp at which the group becomes the current group of the module. */
  activeTime: Date;
}
export interface QueryCurrentGroupResponseProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.QueryCurrentGroupResponse";
  value: Uint8Array;
}
/** QueryCurrentGroupResponse is the response type for the Query/CurrentGroup RPC method. */
export interface QueryCurrentGroupResponseAmino {
  /** group_id is the ID of the current group. */
  group_id?: string;
  /** size is the number of members in the group. */
  size?: string;
  /** threshold is the minimum number of members needed to generate a valid signature. */
  threshold?: string;
  /** pub_key is the public key generated by the group. */
  pub_key?: string;
  /** status is the status of the current group. */
  status?: GroupStatus;
  /** active_time is the timestamp at which the group becomes the current group of the module. */
  active_time?: string;
}
export interface QueryCurrentGroupResponseAminoMsg {
  type: "/band.bandtss.v1beta1.QueryCurrentGroupResponse";
  value: QueryCurrentGroupResponseAmino;
}
/** QueryCurrentGroupResponse is the response type for the Query/CurrentGroup RPC method. */
export interface QueryCurrentGroupResponseSDKType {
  group_id: bigint;
  size: bigint;
  threshold: bigint;
  pub_key: Uint8Array;
  status: GroupStatus;
  active_time: Date;
}
/** QueryIncomingGroupRequest is the request type for the Query/IncomingGroup RPC method. */
export interface QueryIncomingGroupRequest {}
export interface QueryIncomingGroupRequestProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.QueryIncomingGroupRequest";
  value: Uint8Array;
}
/** QueryIncomingGroupRequest is the request type for the Query/IncomingGroup RPC method. */
export interface QueryIncomingGroupRequestAmino {}
export interface QueryIncomingGroupRequestAminoMsg {
  type: "/band.bandtss.v1beta1.QueryIncomingGroupRequest";
  value: QueryIncomingGroupRequestAmino;
}
/** QueryIncomingGroupRequest is the request type for the Query/IncomingGroup RPC method. */
export interface QueryIncomingGroupRequestSDKType {}
/** QueryIncomingGroupResponse is the response type for the Query/IncomingGroup RPC method. */
export interface QueryIncomingGroupResponse {
  /** group_id is the ID of the incoming group. */
  groupId: bigint;
  /** size is the number of members in the group. */
  size: bigint;
  /** threshold is the minimum number of members needed to generate a valid signature. */
  threshold: bigint;
  /** pub_key is the public key generated by the group. */
  pubKey: Uint8Array;
  /** status is the status of the incoming group. */
  status: GroupStatus;
}
export interface QueryIncomingGroupResponseProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.QueryIncomingGroupResponse";
  value: Uint8Array;
}
/** QueryIncomingGroupResponse is the response type for the Query/IncomingGroup RPC method. */
export interface QueryIncomingGroupResponseAmino {
  /** group_id is the ID of the incoming group. */
  group_id?: string;
  /** size is the number of members in the group. */
  size?: string;
  /** threshold is the minimum number of members needed to generate a valid signature. */
  threshold?: string;
  /** pub_key is the public key generated by the group. */
  pub_key?: string;
  /** status is the status of the incoming group. */
  status?: GroupStatus;
}
export interface QueryIncomingGroupResponseAminoMsg {
  type: "/band.bandtss.v1beta1.QueryIncomingGroupResponse";
  value: QueryIncomingGroupResponseAmino;
}
/** QueryIncomingGroupResponse is the response type for the Query/IncomingGroup RPC method. */
export interface QueryIncomingGroupResponseSDKType {
  group_id: bigint;
  size: bigint;
  threshold: bigint;
  pub_key: Uint8Array;
  status: GroupStatus;
}
/** QuerySingingRequest is the request type for the Query/Signing RPC method. */
export interface QuerySigningRequest {
  /** signing_id is the ID of the signing request. */
  signingId: bigint;
}
export interface QuerySigningRequestProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.QuerySigningRequest";
  value: Uint8Array;
}
/** QuerySingingRequest is the request type for the Query/Signing RPC method. */
export interface QuerySigningRequestAmino {
  /** signing_id is the ID of the signing request. */
  signing_id?: string;
}
export interface QuerySigningRequestAminoMsg {
  type: "/band.bandtss.v1beta1.QuerySigningRequest";
  value: QuerySigningRequestAmino;
}
/** QuerySingingRequest is the request type for the Query/Signing RPC method. */
export interface QuerySigningRequestSDKType {
  signing_id: bigint;
}
/** QuerySigningResponse is the response type for the Query/Signing RPC method. */
export interface QuerySigningResponse {
  /** fee_per_signer is the tokens that will be paid per signer for this bandtss signing. */
  feePerSigner: Coin[];
  /** requester is the address of requester who paid for bandtss signing. */
  requester: string;
  /** current_group_signing_result is the signing result from the current group. */
  currentGroupSigningResult?: SigningResult;
  /** incoming_group_signing_result is the signing result from the incoming group. */
  incomingGroupSigningResult?: SigningResult;
}
export interface QuerySigningResponseProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.QuerySigningResponse";
  value: Uint8Array;
}
/** QuerySigningResponse is the response type for the Query/Signing RPC method. */
export interface QuerySigningResponseAmino {
  /** fee_per_signer is the tokens that will be paid per signer for this bandtss signing. */
  fee_per_signer?: CoinAmino[];
  /** requester is the address of requester who paid for bandtss signing. */
  requester?: string;
  /** current_group_signing_result is the signing result from the current group. */
  current_group_signing_result?: SigningResultAmino;
  /** incoming_group_signing_result is the signing result from the incoming group. */
  incoming_group_signing_result?: SigningResultAmino;
}
export interface QuerySigningResponseAminoMsg {
  type: "/band.bandtss.v1beta1.QuerySigningResponse";
  value: QuerySigningResponseAmino;
}
/** QuerySigningResponse is the response type for the Query/Signing RPC method. */
export interface QuerySigningResponseSDKType {
  fee_per_signer: CoinSDKType[];
  requester: string;
  current_group_signing_result?: SigningResultSDKType;
  incoming_group_signing_result?: SigningResultSDKType;
}
/** QueryGroupTransitionRequest is the request type for the Query/GroupTransition RPC method. */
export interface QueryGroupTransitionRequest {}
export interface QueryGroupTransitionRequestProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.QueryGroupTransitionRequest";
  value: Uint8Array;
}
/** QueryGroupTransitionRequest is the request type for the Query/GroupTransition RPC method. */
export interface QueryGroupTransitionRequestAmino {}
export interface QueryGroupTransitionRequestAminoMsg {
  type: "/band.bandtss.v1beta1.QueryGroupTransitionRequest";
  value: QueryGroupTransitionRequestAmino;
}
/** QueryGroupTransitionRequest is the request type for the Query/GroupTransition RPC method. */
export interface QueryGroupTransitionRequestSDKType {}
/** QueryGroupTransitionResponse is the response type for the Query/GroupTransition RPC method. */
export interface QueryGroupTransitionResponse {
  /** group_transition is the group transition information. */
  groupTransition?: GroupTransition;
}
export interface QueryGroupTransitionResponseProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.QueryGroupTransitionResponse";
  value: Uint8Array;
}
/** QueryGroupTransitionResponse is the response type for the Query/GroupTransition RPC method. */
export interface QueryGroupTransitionResponseAmino {
  /** group_transition is the group transition information. */
  group_transition?: GroupTransitionAmino;
}
export interface QueryGroupTransitionResponseAminoMsg {
  type: "/band.bandtss.v1beta1.QueryGroupTransitionResponse";
  value: QueryGroupTransitionResponseAmino;
}
/** QueryGroupTransitionResponse is the response type for the Query/GroupTransition RPC method. */
export interface QueryGroupTransitionResponseSDKType {
  group_transition?: GroupTransitionSDKType;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/band.bandtss.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** Params is the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/band.bandtss.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** Params is the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/band.bandtss.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryCountsRequest(): QueryCountsRequest {
  return {};
}
export const QueryCountsRequest = {
  typeUrl: "/band.bandtss.v1beta1.QueryCountsRequest",
  encode(_: QueryCountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCountsRequest();
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
  fromPartial(_: Partial<QueryCountsRequest>): QueryCountsRequest {
    const message = createBaseQueryCountsRequest();
    return message;
  },
  fromAmino(_: QueryCountsRequestAmino): QueryCountsRequest {
    const message = createBaseQueryCountsRequest();
    return message;
  },
  toAmino(_: QueryCountsRequest): QueryCountsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCountsRequestAminoMsg): QueryCountsRequest {
    return QueryCountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCountsRequestProtoMsg): QueryCountsRequest {
    return QueryCountsRequest.decode(message.value);
  },
  toProto(message: QueryCountsRequest): Uint8Array {
    return QueryCountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCountsRequest): QueryCountsRequestProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.QueryCountsRequest",
      value: QueryCountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCountsResponse(): QueryCountsResponse {
  return {
    signingCount: BigInt(0)
  };
}
export const QueryCountsResponse = {
  typeUrl: "/band.bandtss.v1beta1.QueryCountsResponse",
  encode(message: QueryCountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signingCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.signingCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signingCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCountsResponse>): QueryCountsResponse {
    const message = createBaseQueryCountsResponse();
    message.signingCount = object.signingCount !== undefined && object.signingCount !== null ? BigInt(object.signingCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCountsResponseAmino): QueryCountsResponse {
    const message = createBaseQueryCountsResponse();
    if (object.signing_count !== undefined && object.signing_count !== null) {
      message.signingCount = BigInt(object.signing_count);
    }
    return message;
  },
  toAmino(message: QueryCountsResponse): QueryCountsResponseAmino {
    const obj: any = {};
    obj.signing_count = message.signingCount !== BigInt(0) ? message.signingCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCountsResponseAminoMsg): QueryCountsResponse {
    return QueryCountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCountsResponseProtoMsg): QueryCountsResponse {
    return QueryCountsResponse.decode(message.value);
  },
  toProto(message: QueryCountsResponse): Uint8Array {
    return QueryCountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCountsResponse): QueryCountsResponseProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.QueryCountsResponse",
      value: QueryCountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMembersRequest(): QueryMembersRequest {
  return {
    status: 0,
    isIncomingGroup: false,
    pagination: undefined
  };
}
export const QueryMembersRequest = {
  typeUrl: "/band.bandtss.v1beta1.QueryMembersRequest",
  encode(message: QueryMembersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.isIncomingGroup === true) {
      writer.uint32(16).bool(message.isIncomingGroup);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMembersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.isIncomingGroup = reader.bool();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMembersRequest>): QueryMembersRequest {
    const message = createBaseQueryMembersRequest();
    message.status = object.status ?? 0;
    message.isIncomingGroup = object.isIncomingGroup ?? false;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMembersRequestAmino): QueryMembersRequest {
    const message = createBaseQueryMembersRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.is_incoming_group !== undefined && object.is_incoming_group !== null) {
      message.isIncomingGroup = object.is_incoming_group;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMembersRequest): QueryMembersRequestAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.is_incoming_group = message.isIncomingGroup === false ? undefined : message.isIncomingGroup;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMembersRequestAminoMsg): QueryMembersRequest {
    return QueryMembersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMembersRequestProtoMsg): QueryMembersRequest {
    return QueryMembersRequest.decode(message.value);
  },
  toProto(message: QueryMembersRequest): Uint8Array {
    return QueryMembersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMembersRequest): QueryMembersRequestProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.QueryMembersRequest",
      value: QueryMembersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMembersResponse(): QueryMembersResponse {
  return {
    members: [],
    pagination: undefined
  };
}
export const QueryMembersResponse = {
  typeUrl: "/band.bandtss.v1beta1.QueryMembersResponse",
  encode(message: QueryMembersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMembersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(Member.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryMembersResponse>): QueryMembersResponse {
    const message = createBaseQueryMembersResponse();
    message.members = object.members?.map(e => Member.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMembersResponseAmino): QueryMembersResponse {
    const message = createBaseQueryMembersResponse();
    message.members = object.members?.map(e => Member.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMembersResponse): QueryMembersResponseAmino {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = message.members;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMembersResponseAminoMsg): QueryMembersResponse {
    return QueryMembersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMembersResponseProtoMsg): QueryMembersResponse {
    return QueryMembersResponse.decode(message.value);
  },
  toProto(message: QueryMembersResponse): Uint8Array {
    return QueryMembersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMembersResponse): QueryMembersResponseProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.QueryMembersResponse",
      value: QueryMembersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMemberRequest(): QueryMemberRequest {
  return {
    address: ""
  };
}
export const QueryMemberRequest = {
  typeUrl: "/band.bandtss.v1beta1.QueryMemberRequest",
  encode(message: QueryMemberRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMemberRequest>): QueryMemberRequest {
    const message = createBaseQueryMemberRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryMemberRequestAmino): QueryMemberRequest {
    const message = createBaseQueryMemberRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryMemberRequest): QueryMemberRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryMemberRequestAminoMsg): QueryMemberRequest {
    return QueryMemberRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberRequestProtoMsg): QueryMemberRequest {
    return QueryMemberRequest.decode(message.value);
  },
  toProto(message: QueryMemberRequest): Uint8Array {
    return QueryMemberRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberRequest): QueryMemberRequestProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.QueryMemberRequest",
      value: QueryMemberRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMemberResponse(): QueryMemberResponse {
  return {
    currentGroupMember: Member.fromPartial({}),
    incomingGroupMember: Member.fromPartial({})
  };
}
export const QueryMemberResponse = {
  typeUrl: "/band.bandtss.v1beta1.QueryMemberResponse",
  encode(message: QueryMemberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currentGroupMember !== undefined) {
      Member.encode(message.currentGroupMember, writer.uint32(10).fork()).ldelim();
    }
    if (message.incomingGroupMember !== undefined) {
      Member.encode(message.incomingGroupMember, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentGroupMember = Member.decode(reader, reader.uint32());
          break;
        case 2:
          message.incomingGroupMember = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMemberResponse>): QueryMemberResponse {
    const message = createBaseQueryMemberResponse();
    message.currentGroupMember = object.currentGroupMember !== undefined && object.currentGroupMember !== null ? Member.fromPartial(object.currentGroupMember) : undefined;
    message.incomingGroupMember = object.incomingGroupMember !== undefined && object.incomingGroupMember !== null ? Member.fromPartial(object.incomingGroupMember) : undefined;
    return message;
  },
  fromAmino(object: QueryMemberResponseAmino): QueryMemberResponse {
    const message = createBaseQueryMemberResponse();
    if (object.current_group_member !== undefined && object.current_group_member !== null) {
      message.currentGroupMember = Member.fromAmino(object.current_group_member);
    }
    if (object.incoming_group_member !== undefined && object.incoming_group_member !== null) {
      message.incomingGroupMember = Member.fromAmino(object.incoming_group_member);
    }
    return message;
  },
  toAmino(message: QueryMemberResponse): QueryMemberResponseAmino {
    const obj: any = {};
    obj.current_group_member = message.currentGroupMember ? Member.toAmino(message.currentGroupMember) : undefined;
    obj.incoming_group_member = message.incomingGroupMember ? Member.toAmino(message.incomingGroupMember) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberResponseAminoMsg): QueryMemberResponse {
    return QueryMemberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberResponseProtoMsg): QueryMemberResponse {
    return QueryMemberResponse.decode(message.value);
  },
  toProto(message: QueryMemberResponse): Uint8Array {
    return QueryMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberResponse): QueryMemberResponseProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.QueryMemberResponse",
      value: QueryMemberResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentGroupRequest(): QueryCurrentGroupRequest {
  return {};
}
export const QueryCurrentGroupRequest = {
  typeUrl: "/band.bandtss.v1beta1.QueryCurrentGroupRequest",
  encode(_: QueryCurrentGroupRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentGroupRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentGroupRequest();
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
  fromPartial(_: Partial<QueryCurrentGroupRequest>): QueryCurrentGroupRequest {
    const message = createBaseQueryCurrentGroupRequest();
    return message;
  },
  fromAmino(_: QueryCurrentGroupRequestAmino): QueryCurrentGroupRequest {
    const message = createBaseQueryCurrentGroupRequest();
    return message;
  },
  toAmino(_: QueryCurrentGroupRequest): QueryCurrentGroupRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCurrentGroupRequestAminoMsg): QueryCurrentGroupRequest {
    return QueryCurrentGroupRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentGroupRequestProtoMsg): QueryCurrentGroupRequest {
    return QueryCurrentGroupRequest.decode(message.value);
  },
  toProto(message: QueryCurrentGroupRequest): Uint8Array {
    return QueryCurrentGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentGroupRequest): QueryCurrentGroupRequestProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.QueryCurrentGroupRequest",
      value: QueryCurrentGroupRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentGroupResponse(): QueryCurrentGroupResponse {
  return {
    groupId: BigInt(0),
    size: BigInt(0),
    threshold: BigInt(0),
    pubKey: new Uint8Array(),
    status: 0,
    activeTime: new Date()
  };
}
export const QueryCurrentGroupResponse = {
  typeUrl: "/band.bandtss.v1beta1.QueryCurrentGroupResponse",
  encode(message: QueryCurrentGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.size !== BigInt(0)) {
      writer.uint32(16).uint64(message.size);
    }
    if (message.threshold !== BigInt(0)) {
      writer.uint32(24).uint64(message.threshold);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(34).bytes(message.pubKey);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.activeTime !== undefined) {
      Timestamp.encode(toTimestamp(message.activeTime), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.size = reader.uint64();
          break;
        case 3:
          message.threshold = reader.uint64();
          break;
        case 4:
          message.pubKey = reader.bytes();
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        case 6:
          message.activeTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCurrentGroupResponse>): QueryCurrentGroupResponse {
    const message = createBaseQueryCurrentGroupResponse();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.size = object.size !== undefined && object.size !== null ? BigInt(object.size.toString()) : BigInt(0);
    message.threshold = object.threshold !== undefined && object.threshold !== null ? BigInt(object.threshold.toString()) : BigInt(0);
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.status = object.status ?? 0;
    message.activeTime = object.activeTime ?? undefined;
    return message;
  },
  fromAmino(object: QueryCurrentGroupResponseAmino): QueryCurrentGroupResponse {
    const message = createBaseQueryCurrentGroupResponse();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.size !== undefined && object.size !== null) {
      message.size = BigInt(object.size);
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = BigInt(object.threshold);
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = bytesFromBase64(object.pub_key);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.active_time !== undefined && object.active_time !== null) {
      message.activeTime = fromTimestamp(Timestamp.fromAmino(object.active_time));
    }
    return message;
  },
  toAmino(message: QueryCurrentGroupResponse): QueryCurrentGroupResponseAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    obj.size = message.size !== BigInt(0) ? message.size?.toString() : undefined;
    obj.threshold = message.threshold !== BigInt(0) ? message.threshold?.toString() : undefined;
    obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.active_time = message.activeTime ? Timestamp.toAmino(toTimestamp(message.activeTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentGroupResponseAminoMsg): QueryCurrentGroupResponse {
    return QueryCurrentGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentGroupResponseProtoMsg): QueryCurrentGroupResponse {
    return QueryCurrentGroupResponse.decode(message.value);
  },
  toProto(message: QueryCurrentGroupResponse): Uint8Array {
    return QueryCurrentGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentGroupResponse): QueryCurrentGroupResponseProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.QueryCurrentGroupResponse",
      value: QueryCurrentGroupResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIncomingGroupRequest(): QueryIncomingGroupRequest {
  return {};
}
export const QueryIncomingGroupRequest = {
  typeUrl: "/band.bandtss.v1beta1.QueryIncomingGroupRequest",
  encode(_: QueryIncomingGroupRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncomingGroupRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncomingGroupRequest();
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
  fromPartial(_: Partial<QueryIncomingGroupRequest>): QueryIncomingGroupRequest {
    const message = createBaseQueryIncomingGroupRequest();
    return message;
  },
  fromAmino(_: QueryIncomingGroupRequestAmino): QueryIncomingGroupRequest {
    const message = createBaseQueryIncomingGroupRequest();
    return message;
  },
  toAmino(_: QueryIncomingGroupRequest): QueryIncomingGroupRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryIncomingGroupRequestAminoMsg): QueryIncomingGroupRequest {
    return QueryIncomingGroupRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIncomingGroupRequestProtoMsg): QueryIncomingGroupRequest {
    return QueryIncomingGroupRequest.decode(message.value);
  },
  toProto(message: QueryIncomingGroupRequest): Uint8Array {
    return QueryIncomingGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIncomingGroupRequest): QueryIncomingGroupRequestProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.QueryIncomingGroupRequest",
      value: QueryIncomingGroupRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIncomingGroupResponse(): QueryIncomingGroupResponse {
  return {
    groupId: BigInt(0),
    size: BigInt(0),
    threshold: BigInt(0),
    pubKey: new Uint8Array(),
    status: 0
  };
}
export const QueryIncomingGroupResponse = {
  typeUrl: "/band.bandtss.v1beta1.QueryIncomingGroupResponse",
  encode(message: QueryIncomingGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.size !== BigInt(0)) {
      writer.uint32(16).uint64(message.size);
    }
    if (message.threshold !== BigInt(0)) {
      writer.uint32(24).uint64(message.threshold);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(34).bytes(message.pubKey);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncomingGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncomingGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.size = reader.uint64();
          break;
        case 3:
          message.threshold = reader.uint64();
          break;
        case 4:
          message.pubKey = reader.bytes();
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryIncomingGroupResponse>): QueryIncomingGroupResponse {
    const message = createBaseQueryIncomingGroupResponse();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.size = object.size !== undefined && object.size !== null ? BigInt(object.size.toString()) : BigInt(0);
    message.threshold = object.threshold !== undefined && object.threshold !== null ? BigInt(object.threshold.toString()) : BigInt(0);
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: QueryIncomingGroupResponseAmino): QueryIncomingGroupResponse {
    const message = createBaseQueryIncomingGroupResponse();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.size !== undefined && object.size !== null) {
      message.size = BigInt(object.size);
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = BigInt(object.threshold);
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = bytesFromBase64(object.pub_key);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: QueryIncomingGroupResponse): QueryIncomingGroupResponseAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    obj.size = message.size !== BigInt(0) ? message.size?.toString() : undefined;
    obj.threshold = message.threshold !== BigInt(0) ? message.threshold?.toString() : undefined;
    obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: QueryIncomingGroupResponseAminoMsg): QueryIncomingGroupResponse {
    return QueryIncomingGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIncomingGroupResponseProtoMsg): QueryIncomingGroupResponse {
    return QueryIncomingGroupResponse.decode(message.value);
  },
  toProto(message: QueryIncomingGroupResponse): Uint8Array {
    return QueryIncomingGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIncomingGroupResponse): QueryIncomingGroupResponseProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.QueryIncomingGroupResponse",
      value: QueryIncomingGroupResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySigningRequest(): QuerySigningRequest {
  return {
    signingId: BigInt(0)
  };
}
export const QuerySigningRequest = {
  typeUrl: "/band.bandtss.v1beta1.QuerySigningRequest",
  encode(message: QuerySigningRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signingId !== BigInt(0)) {
      writer.uint32(8).uint64(message.signingId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySigningRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signingId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySigningRequest>): QuerySigningRequest {
    const message = createBaseQuerySigningRequest();
    message.signingId = object.signingId !== undefined && object.signingId !== null ? BigInt(object.signingId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySigningRequestAmino): QuerySigningRequest {
    const message = createBaseQuerySigningRequest();
    if (object.signing_id !== undefined && object.signing_id !== null) {
      message.signingId = BigInt(object.signing_id);
    }
    return message;
  },
  toAmino(message: QuerySigningRequest): QuerySigningRequestAmino {
    const obj: any = {};
    obj.signing_id = message.signingId !== BigInt(0) ? message.signingId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySigningRequestAminoMsg): QuerySigningRequest {
    return QuerySigningRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySigningRequestProtoMsg): QuerySigningRequest {
    return QuerySigningRequest.decode(message.value);
  },
  toProto(message: QuerySigningRequest): Uint8Array {
    return QuerySigningRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySigningRequest): QuerySigningRequestProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.QuerySigningRequest",
      value: QuerySigningRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySigningResponse(): QuerySigningResponse {
  return {
    feePerSigner: [],
    requester: "",
    currentGroupSigningResult: undefined,
    incomingGroupSigningResult: undefined
  };
}
export const QuerySigningResponse = {
  typeUrl: "/band.bandtss.v1beta1.QuerySigningResponse",
  encode(message: QuerySigningResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.feePerSigner) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.requester !== "") {
      writer.uint32(18).string(message.requester);
    }
    if (message.currentGroupSigningResult !== undefined) {
      SigningResult.encode(message.currentGroupSigningResult, writer.uint32(26).fork()).ldelim();
    }
    if (message.incomingGroupSigningResult !== undefined) {
      SigningResult.encode(message.incomingGroupSigningResult, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySigningResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feePerSigner.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.requester = reader.string();
          break;
        case 3:
          message.currentGroupSigningResult = SigningResult.decode(reader, reader.uint32());
          break;
        case 4:
          message.incomingGroupSigningResult = SigningResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySigningResponse>): QuerySigningResponse {
    const message = createBaseQuerySigningResponse();
    message.feePerSigner = object.feePerSigner?.map(e => Coin.fromPartial(e)) || [];
    message.requester = object.requester ?? "";
    message.currentGroupSigningResult = object.currentGroupSigningResult !== undefined && object.currentGroupSigningResult !== null ? SigningResult.fromPartial(object.currentGroupSigningResult) : undefined;
    message.incomingGroupSigningResult = object.incomingGroupSigningResult !== undefined && object.incomingGroupSigningResult !== null ? SigningResult.fromPartial(object.incomingGroupSigningResult) : undefined;
    return message;
  },
  fromAmino(object: QuerySigningResponseAmino): QuerySigningResponse {
    const message = createBaseQuerySigningResponse();
    message.feePerSigner = object.fee_per_signer?.map(e => Coin.fromAmino(e)) || [];
    if (object.requester !== undefined && object.requester !== null) {
      message.requester = object.requester;
    }
    if (object.current_group_signing_result !== undefined && object.current_group_signing_result !== null) {
      message.currentGroupSigningResult = SigningResult.fromAmino(object.current_group_signing_result);
    }
    if (object.incoming_group_signing_result !== undefined && object.incoming_group_signing_result !== null) {
      message.incomingGroupSigningResult = SigningResult.fromAmino(object.incoming_group_signing_result);
    }
    return message;
  },
  toAmino(message: QuerySigningResponse): QuerySigningResponseAmino {
    const obj: any = {};
    if (message.feePerSigner) {
      obj.fee_per_signer = message.feePerSigner.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_per_signer = message.feePerSigner;
    }
    obj.requester = message.requester === "" ? undefined : message.requester;
    obj.current_group_signing_result = message.currentGroupSigningResult ? SigningResult.toAmino(message.currentGroupSigningResult) : undefined;
    obj.incoming_group_signing_result = message.incomingGroupSigningResult ? SigningResult.toAmino(message.incomingGroupSigningResult) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySigningResponseAminoMsg): QuerySigningResponse {
    return QuerySigningResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySigningResponseProtoMsg): QuerySigningResponse {
    return QuerySigningResponse.decode(message.value);
  },
  toProto(message: QuerySigningResponse): Uint8Array {
    return QuerySigningResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySigningResponse): QuerySigningResponseProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.QuerySigningResponse",
      value: QuerySigningResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupTransitionRequest(): QueryGroupTransitionRequest {
  return {};
}
export const QueryGroupTransitionRequest = {
  typeUrl: "/band.bandtss.v1beta1.QueryGroupTransitionRequest",
  encode(_: QueryGroupTransitionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupTransitionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupTransitionRequest();
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
  fromPartial(_: Partial<QueryGroupTransitionRequest>): QueryGroupTransitionRequest {
    const message = createBaseQueryGroupTransitionRequest();
    return message;
  },
  fromAmino(_: QueryGroupTransitionRequestAmino): QueryGroupTransitionRequest {
    const message = createBaseQueryGroupTransitionRequest();
    return message;
  },
  toAmino(_: QueryGroupTransitionRequest): QueryGroupTransitionRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGroupTransitionRequestAminoMsg): QueryGroupTransitionRequest {
    return QueryGroupTransitionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupTransitionRequestProtoMsg): QueryGroupTransitionRequest {
    return QueryGroupTransitionRequest.decode(message.value);
  },
  toProto(message: QueryGroupTransitionRequest): Uint8Array {
    return QueryGroupTransitionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupTransitionRequest): QueryGroupTransitionRequestProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.QueryGroupTransitionRequest",
      value: QueryGroupTransitionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupTransitionResponse(): QueryGroupTransitionResponse {
  return {
    groupTransition: undefined
  };
}
export const QueryGroupTransitionResponse = {
  typeUrl: "/band.bandtss.v1beta1.QueryGroupTransitionResponse",
  encode(message: QueryGroupTransitionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupTransition !== undefined) {
      GroupTransition.encode(message.groupTransition, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupTransitionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupTransitionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupTransition = GroupTransition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGroupTransitionResponse>): QueryGroupTransitionResponse {
    const message = createBaseQueryGroupTransitionResponse();
    message.groupTransition = object.groupTransition !== undefined && object.groupTransition !== null ? GroupTransition.fromPartial(object.groupTransition) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupTransitionResponseAmino): QueryGroupTransitionResponse {
    const message = createBaseQueryGroupTransitionResponse();
    if (object.group_transition !== undefined && object.group_transition !== null) {
      message.groupTransition = GroupTransition.fromAmino(object.group_transition);
    }
    return message;
  },
  toAmino(message: QueryGroupTransitionResponse): QueryGroupTransitionResponseAmino {
    const obj: any = {};
    obj.group_transition = message.groupTransition ? GroupTransition.toAmino(message.groupTransition) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupTransitionResponseAminoMsg): QueryGroupTransitionResponse {
    return QueryGroupTransitionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupTransitionResponseProtoMsg): QueryGroupTransitionResponse {
    return QueryGroupTransitionResponse.decode(message.value);
  },
  toProto(message: QueryGroupTransitionResponse): Uint8Array {
    return QueryGroupTransitionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupTransitionResponse): QueryGroupTransitionResponseProtoMsg {
    return {
      typeUrl: "/band.bandtss.v1beta1.QueryGroupTransitionResponse",
      value: QueryGroupTransitionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/band.bandtss.v1beta1.QueryParamsRequest",
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
      typeUrl: "/band.bandtss.v1beta1.QueryParamsRequest",
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
  typeUrl: "/band.bandtss.v1beta1.QueryParamsResponse",
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
      typeUrl: "/band.bandtss.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};