//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupResult, GroupResultAmino, GroupResultSDKType, Member, MemberAmino, MemberSDKType, DE, DEAmino, DESDKType, SigningResult, SigningResultAmino, SigningResultSDKType } from "./tss";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryCountsRequest is request type for the Query/Count RPC method. */
export interface QueryCountsRequest {}
export interface QueryCountsRequestProtoMsg {
  typeUrl: "/band.tss.v1beta1.QueryCountsRequest";
  value: Uint8Array;
}
/** QueryCountsRequest is request type for the Query/Count RPC method. */
export interface QueryCountsRequestAmino {}
export interface QueryCountsRequestAminoMsg {
  type: "/band.tss.v1beta1.QueryCountsRequest";
  value: QueryCountsRequestAmino;
}
/** QueryCountsRequest is request type for the Query/Count RPC method. */
export interface QueryCountsRequestSDKType {}
/** QueryCountsResponse is response type for the Query/Count RPC method. */
export interface QueryCountsResponse {
  /** group_count is total number of group available on the chain */
  groupCount: bigint;
  /** signing_count is total number of signing request submitted to the chain */
  signingCount: bigint;
}
export interface QueryCountsResponseProtoMsg {
  typeUrl: "/band.tss.v1beta1.QueryCountsResponse";
  value: Uint8Array;
}
/** QueryCountsResponse is response type for the Query/Count RPC method. */
export interface QueryCountsResponseAmino {
  /** group_count is total number of group available on the chain */
  group_count?: string;
  /** signing_count is total number of signing request submitted to the chain */
  signing_count?: string;
}
export interface QueryCountsResponseAminoMsg {
  type: "/band.tss.v1beta1.QueryCountsResponse";
  value: QueryCountsResponseAmino;
}
/** QueryCountsResponse is response type for the Query/Count RPC method. */
export interface QueryCountsResponseSDKType {
  group_count: bigint;
  signing_count: bigint;
}
/** QueryGroupRequest is the request type for the Query/Group RPC method */
export interface QueryGroupRequest {
  /** group_id defines the unique id of the group. */
  groupId: bigint;
}
export interface QueryGroupRequestProtoMsg {
  typeUrl: "/band.tss.v1beta1.QueryGroupRequest";
  value: Uint8Array;
}
/** QueryGroupRequest is the request type for the Query/Group RPC method */
export interface QueryGroupRequestAmino {
  /** group_id defines the unique id of the group. */
  group_id?: string;
}
export interface QueryGroupRequestAminoMsg {
  type: "/band.tss.v1beta1.QueryGroupRequest";
  value: QueryGroupRequestAmino;
}
/** QueryGroupRequest is the request type for the Query/Group RPC method */
export interface QueryGroupRequestSDKType {
  group_id: bigint;
}
/** QueryGroupResponse is the response type for the Query/Group RPC method */
export interface QueryGroupResponse {
  /** group_result is the result of the group. */
  groupResult: GroupResult;
}
export interface QueryGroupResponseProtoMsg {
  typeUrl: "/band.tss.v1beta1.QueryGroupResponse";
  value: Uint8Array;
}
/** QueryGroupResponse is the response type for the Query/Group RPC method */
export interface QueryGroupResponseAmino {
  /** group_result is the result of the group. */
  group_result?: GroupResultAmino;
}
export interface QueryGroupResponseAminoMsg {
  type: "/band.tss.v1beta1.QueryGroupResponse";
  value: QueryGroupResponseAmino;
}
/** QueryGroupResponse is the response type for the Query/Group RPC method */
export interface QueryGroupResponseSDKType {
  group_result: GroupResultSDKType;
}
/** QueryGroupsRequest is the request type for the Query/Groups RPC method */
export interface QueryGroupsRequest {
  /** pagination defines pagination settings for the request. */
  pagination?: PageRequest;
}
export interface QueryGroupsRequestProtoMsg {
  typeUrl: "/band.tss.v1beta1.QueryGroupsRequest";
  value: Uint8Array;
}
/** QueryGroupsRequest is the request type for the Query/Groups RPC method */
export interface QueryGroupsRequestAmino {
  /** pagination defines pagination settings for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGroupsRequestAminoMsg {
  type: "/band.tss.v1beta1.QueryGroupsRequest";
  value: QueryGroupsRequestAmino;
}
/** QueryGroupsRequest is the request type for the Query/Groups RPC method */
export interface QueryGroupsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryGroupsResponse is the response type for the Query/Group RPC method */
export interface QueryGroupsResponse {
  /** groups is the list of groups. */
  groups: GroupResult[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
export interface QueryGroupsResponseProtoMsg {
  typeUrl: "/band.tss.v1beta1.QueryGroupsResponse";
  value: Uint8Array;
}
/** QueryGroupsResponse is the response type for the Query/Group RPC method */
export interface QueryGroupsResponseAmino {
  /** groups is the list of groups. */
  groups?: GroupResultAmino[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGroupsResponseAminoMsg {
  type: "/band.tss.v1beta1.QueryGroupsResponse";
  value: QueryGroupsResponseAmino;
}
/** QueryGroupsResponse is the response type for the Query/Group RPC method */
export interface QueryGroupsResponseSDKType {
  groups: GroupResultSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryMembersRequest is the request type for the Query/Members RPC method */
export interface QueryMembersRequest {
  /** group_id defines the unique id of the group. */
  groupId: bigint;
}
export interface QueryMembersRequestProtoMsg {
  typeUrl: "/band.tss.v1beta1.QueryMembersRequest";
  value: Uint8Array;
}
/** QueryMembersRequest is the request type for the Query/Members RPC method */
export interface QueryMembersRequestAmino {
  /** group_id defines the unique id of the group. */
  group_id?: string;
}
export interface QueryMembersRequestAminoMsg {
  type: "/band.tss.v1beta1.QueryMembersRequest";
  value: QueryMembersRequestAmino;
}
/** QueryMembersRequest is the request type for the Query/Members RPC method */
export interface QueryMembersRequestSDKType {
  group_id: bigint;
}
/** QueryMembersResponse is the response type for the Query/Members RPC method */
export interface QueryMembersResponse {
  /** members are member list of the group */
  members: Member[];
}
export interface QueryMembersResponseProtoMsg {
  typeUrl: "/band.tss.v1beta1.QueryMembersResponse";
  value: Uint8Array;
}
/** QueryMembersResponse is the response type for the Query/Members RPC method */
export interface QueryMembersResponseAmino {
  /** members are member list of the group */
  members?: MemberAmino[];
}
export interface QueryMembersResponseAminoMsg {
  type: "/band.tss.v1beta1.QueryMembersResponse";
  value: QueryMembersResponseAmino;
}
/** QueryMembersResponse is the response type for the Query/Members RPC method */
export interface QueryMembersResponseSDKType {
  members: MemberSDKType[];
}
/** QueryIsSignerRequest is request type for the Query/IsGrantee RPC method. */
export interface QueryIsGranteeRequest {
  /** granter is a granter address */
  granter: string;
  /** grantee is a grantee address */
  grantee: string;
}
export interface QueryIsGranteeRequestProtoMsg {
  typeUrl: "/band.tss.v1beta1.QueryIsGranteeRequest";
  value: Uint8Array;
}
/** QueryIsSignerRequest is request type for the Query/IsGrantee RPC method. */
export interface QueryIsGranteeRequestAmino {
  /** granter is a granter address */
  granter?: string;
  /** grantee is a grantee address */
  grantee?: string;
}
export interface QueryIsGranteeRequestAminoMsg {
  type: "/band.tss.v1beta1.QueryIsGranteeRequest";
  value: QueryIsGranteeRequestAmino;
}
/** QueryIsSignerRequest is request type for the Query/IsGrantee RPC method. */
export interface QueryIsGranteeRequestSDKType {
  granter: string;
  grantee: string;
}
/** QueryIsGranteeResponse is response type for the Query/IsGrantee RPC method. */
export interface QueryIsGranteeResponse {
  /** is_grantee is true if this account has been granted by granter */
  isGrantee: boolean;
}
export interface QueryIsGranteeResponseProtoMsg {
  typeUrl: "/band.tss.v1beta1.QueryIsGranteeResponse";
  value: Uint8Array;
}
/** QueryIsGranteeResponse is response type for the Query/IsGrantee RPC method. */
export interface QueryIsGranteeResponseAmino {
  /** is_grantee is true if this account has been granted by granter */
  is_grantee?: boolean;
}
export interface QueryIsGranteeResponseAminoMsg {
  type: "/band.tss.v1beta1.QueryIsGranteeResponse";
  value: QueryIsGranteeResponseAmino;
}
/** QueryIsGranteeResponse is response type for the Query/IsGrantee RPC method. */
export interface QueryIsGranteeResponseSDKType {
  is_grantee: boolean;
}
/** QueryDERequest is the request type for the Query/DE RPC method. */
export interface QueryDERequest {
  /** address is the address for the request. */
  address: string;
  /** pagination defines pagination settings for the request. */
  pagination?: PageRequest;
}
export interface QueryDERequestProtoMsg {
  typeUrl: "/band.tss.v1beta1.QueryDERequest";
  value: Uint8Array;
}
/** QueryDERequest is the request type for the Query/DE RPC method. */
export interface QueryDERequestAmino {
  /** address is the address for the request. */
  address?: string;
  /** pagination defines pagination settings for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDERequestAminoMsg {
  type: "/band.tss.v1beta1.QueryDERequest";
  value: QueryDERequestAmino;
}
/** QueryDERequest is the request type for the Query/DE RPC method. */
export interface QueryDERequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
/** QueryDEResponse is the response type for the Query/DE RPC method. */
export interface QueryDEResponse {
  /** des is a list of DEs. */
  des: DE[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
export interface QueryDEResponseProtoMsg {
  typeUrl: "/band.tss.v1beta1.QueryDEResponse";
  value: Uint8Array;
}
/** QueryDEResponse is the response type for the Query/DE RPC method. */
export interface QueryDEResponseAmino {
  /** des is a list of DEs. */
  des?: DEAmino[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDEResponseAminoMsg {
  type: "/band.tss.v1beta1.QueryDEResponse";
  value: QueryDEResponseAmino;
}
/** QueryDEResponse is the response type for the Query/DE RPC method. */
export interface QueryDEResponseSDKType {
  des: DESDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryPendingGroupsRequest is the request type for the Query/PendingGroups RPC method. */
export interface QueryPendingGroupsRequest {
  /** address is the address of the member. */
  address: string;
}
export interface QueryPendingGroupsRequestProtoMsg {
  typeUrl: "/band.tss.v1beta1.QueryPendingGroupsRequest";
  value: Uint8Array;
}
/** QueryPendingGroupsRequest is the request type for the Query/PendingGroups RPC method. */
export interface QueryPendingGroupsRequestAmino {
  /** address is the address of the member. */
  address?: string;
}
export interface QueryPendingGroupsRequestAminoMsg {
  type: "/band.tss.v1beta1.QueryPendingGroupsRequest";
  value: QueryPendingGroupsRequestAmino;
}
/** QueryPendingGroupsRequest is the request type for the Query/PendingGroups RPC method. */
export interface QueryPendingGroupsRequestSDKType {
  address: string;
}
/** QueryPendingGroupsResponse is the response type for the Query/PendingGroups RPC method. */
export interface QueryPendingGroupsResponse {
  /** pending_groups is a list of pending groups. */
  pendingGroups: bigint[];
}
export interface QueryPendingGroupsResponseProtoMsg {
  typeUrl: "/band.tss.v1beta1.QueryPendingGroupsResponse";
  value: Uint8Array;
}
/** QueryPendingGroupsResponse is the response type for the Query/PendingGroups RPC method. */
export interface QueryPendingGroupsResponseAmino {
  /** pending_groups is a list of pending groups. */
  pending_groups?: string[];
}
export interface QueryPendingGroupsResponseAminoMsg {
  type: "/band.tss.v1beta1.QueryPendingGroupsResponse";
  value: QueryPendingGroupsResponseAmino;
}
/** QueryPendingGroupsResponse is the response type for the Query/PendingGroups RPC method. */
export interface QueryPendingGroupsResponseSDKType {
  pending_groups: bigint[];
}
/** QueryPendingSigningsRequest is the request type for the Query/PendingSignings RPC method. */
export interface QueryPendingSigningsRequest {
  /** address is the address of the member. */
  address: string;
}
export interface QueryPendingSigningsRequestProtoMsg {
  typeUrl: "/band.tss.v1beta1.QueryPendingSigningsRequest";
  value: Uint8Array;
}
/** QueryPendingSigningsRequest is the request type for the Query/PendingSignings RPC method. */
export interface QueryPendingSigningsRequestAmino {
  /** address is the address of the member. */
  address?: string;
}
export interface QueryPendingSigningsRequestAminoMsg {
  type: "/band.tss.v1beta1.QueryPendingSigningsRequest";
  value: QueryPendingSigningsRequestAmino;
}
/** QueryPendingSigningsRequest is the request type for the Query/PendingSignings RPC method. */
export interface QueryPendingSigningsRequestSDKType {
  address: string;
}
/** QueryPendingSigningsResponse is the response type for the Query/PendingSignings RPC method. */
export interface QueryPendingSigningsResponse {
  /** pending_signings is a list of pending signings. */
  pendingSignings: bigint[];
}
export interface QueryPendingSigningsResponseProtoMsg {
  typeUrl: "/band.tss.v1beta1.QueryPendingSigningsResponse";
  value: Uint8Array;
}
/** QueryPendingSigningsResponse is the response type for the Query/PendingSignings RPC method. */
export interface QueryPendingSigningsResponseAmino {
  /** pending_signings is a list of pending signings. */
  pending_signings?: string[];
}
export interface QueryPendingSigningsResponseAminoMsg {
  type: "/band.tss.v1beta1.QueryPendingSigningsResponse";
  value: QueryPendingSigningsResponseAmino;
}
/** QueryPendingSigningsResponse is the response type for the Query/PendingSignings RPC method. */
export interface QueryPendingSigningsResponseSDKType {
  pending_signings: bigint[];
}
/** QuerySigningRequest is the request type for the Query/Signing RPC method. */
export interface QuerySigningRequest {
  /** signing_id is the ID of the signing request. */
  signingId: bigint;
}
export interface QuerySigningRequestProtoMsg {
  typeUrl: "/band.tss.v1beta1.QuerySigningRequest";
  value: Uint8Array;
}
/** QuerySigningRequest is the request type for the Query/Signing RPC method. */
export interface QuerySigningRequestAmino {
  /** signing_id is the ID of the signing request. */
  signing_id?: string;
}
export interface QuerySigningRequestAminoMsg {
  type: "/band.tss.v1beta1.QuerySigningRequest";
  value: QuerySigningRequestAmino;
}
/** QuerySigningRequest is the request type for the Query/Signing RPC method. */
export interface QuerySigningRequestSDKType {
  signing_id: bigint;
}
/** QuerySigningResponse is the response type for the Query/Signing RPC method. */
export interface QuerySigningResponse {
  /** signing_result is the result of the signing. */
  signingResult: SigningResult;
}
export interface QuerySigningResponseProtoMsg {
  typeUrl: "/band.tss.v1beta1.QuerySigningResponse";
  value: Uint8Array;
}
/** QuerySigningResponse is the response type for the Query/Signing RPC method. */
export interface QuerySigningResponseAmino {
  /** signing_result is the result of the signing. */
  signing_result?: SigningResultAmino;
}
export interface QuerySigningResponseAminoMsg {
  type: "/band.tss.v1beta1.QuerySigningResponse";
  value: QuerySigningResponseAmino;
}
/** QuerySigningResponse is the response type for the Query/Signing RPC method. */
export interface QuerySigningResponseSDKType {
  signing_result: SigningResultSDKType;
}
/** QuerySigningsRequest is the request type for the Query/Signings RPC method. */
export interface QuerySigningsRequest {
  /** pagination defines pagination settings for the request. */
  pagination?: PageRequest;
}
export interface QuerySigningsRequestProtoMsg {
  typeUrl: "/band.tss.v1beta1.QuerySigningsRequest";
  value: Uint8Array;
}
/** QuerySigningsRequest is the request type for the Query/Signings RPC method. */
export interface QuerySigningsRequestAmino {
  /** pagination defines pagination settings for the request. */
  pagination?: PageRequestAmino;
}
export interface QuerySigningsRequestAminoMsg {
  type: "/band.tss.v1beta1.QuerySigningsRequest";
  value: QuerySigningsRequestAmino;
}
/** QuerySigningsRequest is the request type for the Query/Signings RPC method. */
export interface QuerySigningsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QuerySigningsResponse is the response type for the Query/Signings RPC method. */
export interface QuerySigningsResponse {
  /** signing_results is a list of signing results. */
  signingResults: SigningResult[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
export interface QuerySigningsResponseProtoMsg {
  typeUrl: "/band.tss.v1beta1.QuerySigningsResponse";
  value: Uint8Array;
}
/** QuerySigningsResponse is the response type for the Query/Signings RPC method. */
export interface QuerySigningsResponseAmino {
  /** signing_results is a list of signing results. */
  signing_results?: SigningResultAmino[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponseAmino;
}
export interface QuerySigningsResponseAminoMsg {
  type: "/band.tss.v1beta1.QuerySigningsResponse";
  value: QuerySigningsResponseAmino;
}
/** QuerySigningsResponse is the response type for the Query/Signings RPC method. */
export interface QuerySigningsResponseSDKType {
  signing_results: SigningResultSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/band.tss.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/band.tss.v1beta1.QueryParamsRequest";
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
  typeUrl: "/band.tss.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params are the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/band.tss.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryCountsRequest(): QueryCountsRequest {
  return {};
}
export const QueryCountsRequest = {
  typeUrl: "/band.tss.v1beta1.QueryCountsRequest",
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
      typeUrl: "/band.tss.v1beta1.QueryCountsRequest",
      value: QueryCountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCountsResponse(): QueryCountsResponse {
  return {
    groupCount: BigInt(0),
    signingCount: BigInt(0)
  };
}
export const QueryCountsResponse = {
  typeUrl: "/band.tss.v1beta1.QueryCountsResponse",
  encode(message: QueryCountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupCount);
    }
    if (message.signingCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.signingCount);
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
          message.groupCount = reader.uint64();
          break;
        case 2:
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
    message.groupCount = object.groupCount !== undefined && object.groupCount !== null ? BigInt(object.groupCount.toString()) : BigInt(0);
    message.signingCount = object.signingCount !== undefined && object.signingCount !== null ? BigInt(object.signingCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCountsResponseAmino): QueryCountsResponse {
    const message = createBaseQueryCountsResponse();
    if (object.group_count !== undefined && object.group_count !== null) {
      message.groupCount = BigInt(object.group_count);
    }
    if (object.signing_count !== undefined && object.signing_count !== null) {
      message.signingCount = BigInt(object.signing_count);
    }
    return message;
  },
  toAmino(message: QueryCountsResponse): QueryCountsResponseAmino {
    const obj: any = {};
    obj.group_count = message.groupCount !== BigInt(0) ? message.groupCount?.toString() : undefined;
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
      typeUrl: "/band.tss.v1beta1.QueryCountsResponse",
      value: QueryCountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupRequest(): QueryGroupRequest {
  return {
    groupId: BigInt(0)
  };
}
export const QueryGroupRequest = {
  typeUrl: "/band.tss.v1beta1.QueryGroupRequest",
  encode(message: QueryGroupRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGroupRequest>): QueryGroupRequest {
    const message = createBaseQueryGroupRequest();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGroupRequestAmino): QueryGroupRequest {
    const message = createBaseQueryGroupRequest();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message: QueryGroupRequest): QueryGroupRequestAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupRequestAminoMsg): QueryGroupRequest {
    return QueryGroupRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupRequestProtoMsg): QueryGroupRequest {
    return QueryGroupRequest.decode(message.value);
  },
  toProto(message: QueryGroupRequest): Uint8Array {
    return QueryGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupRequest): QueryGroupRequestProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.QueryGroupRequest",
      value: QueryGroupRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupResponse(): QueryGroupResponse {
  return {
    groupResult: GroupResult.fromPartial({})
  };
}
export const QueryGroupResponse = {
  typeUrl: "/band.tss.v1beta1.QueryGroupResponse",
  encode(message: QueryGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupResult !== undefined) {
      GroupResult.encode(message.groupResult, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupResult = GroupResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGroupResponse>): QueryGroupResponse {
    const message = createBaseQueryGroupResponse();
    message.groupResult = object.groupResult !== undefined && object.groupResult !== null ? GroupResult.fromPartial(object.groupResult) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupResponseAmino): QueryGroupResponse {
    const message = createBaseQueryGroupResponse();
    if (object.group_result !== undefined && object.group_result !== null) {
      message.groupResult = GroupResult.fromAmino(object.group_result);
    }
    return message;
  },
  toAmino(message: QueryGroupResponse): QueryGroupResponseAmino {
    const obj: any = {};
    obj.group_result = message.groupResult ? GroupResult.toAmino(message.groupResult) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupResponseAminoMsg): QueryGroupResponse {
    return QueryGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupResponseProtoMsg): QueryGroupResponse {
    return QueryGroupResponse.decode(message.value);
  },
  toProto(message: QueryGroupResponse): Uint8Array {
    return QueryGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupResponse): QueryGroupResponseProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.QueryGroupResponse",
      value: QueryGroupResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsRequest(): QueryGroupsRequest {
  return {
    pagination: undefined
  };
}
export const QueryGroupsRequest = {
  typeUrl: "/band.tss.v1beta1.QueryGroupsRequest",
  encode(message: QueryGroupsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsRequest();
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
  fromPartial(object: Partial<QueryGroupsRequest>): QueryGroupsRequest {
    const message = createBaseQueryGroupsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupsRequestAmino): QueryGroupsRequest {
    const message = createBaseQueryGroupsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupsRequest): QueryGroupsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsRequestAminoMsg): QueryGroupsRequest {
    return QueryGroupsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupsRequestProtoMsg): QueryGroupsRequest {
    return QueryGroupsRequest.decode(message.value);
  },
  toProto(message: QueryGroupsRequest): Uint8Array {
    return QueryGroupsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsRequest): QueryGroupsRequestProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.QueryGroupsRequest",
      value: QueryGroupsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsResponse(): QueryGroupsResponse {
  return {
    groups: [],
    pagination: undefined
  };
}
export const QueryGroupsResponse = {
  typeUrl: "/band.tss.v1beta1.QueryGroupsResponse",
  encode(message: QueryGroupsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.groups) {
      GroupResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(GroupResult.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryGroupsResponse>): QueryGroupsResponse {
    const message = createBaseQueryGroupsResponse();
    message.groups = object.groups?.map(e => GroupResult.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupsResponseAmino): QueryGroupsResponse {
    const message = createBaseQueryGroupsResponse();
    message.groups = object.groups?.map(e => GroupResult.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGroupsResponse): QueryGroupsResponseAmino {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupResult.toAmino(e) : undefined);
    } else {
      obj.groups = message.groups;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupsResponseAminoMsg): QueryGroupsResponse {
    return QueryGroupsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupsResponseProtoMsg): QueryGroupsResponse {
    return QueryGroupsResponse.decode(message.value);
  },
  toProto(message: QueryGroupsResponse): Uint8Array {
    return QueryGroupsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupsResponse): QueryGroupsResponseProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.QueryGroupsResponse",
      value: QueryGroupsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMembersRequest(): QueryMembersRequest {
  return {
    groupId: BigInt(0)
  };
}
export const QueryMembersRequest = {
  typeUrl: "/band.tss.v1beta1.QueryMembersRequest",
  encode(message: QueryMembersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
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
          message.groupId = reader.uint64();
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
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryMembersRequestAmino): QueryMembersRequest {
    const message = createBaseQueryMembersRequest();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message: QueryMembersRequest): QueryMembersRequestAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
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
      typeUrl: "/band.tss.v1beta1.QueryMembersRequest",
      value: QueryMembersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMembersResponse(): QueryMembersResponse {
  return {
    members: []
  };
}
export const QueryMembersResponse = {
  typeUrl: "/band.tss.v1beta1.QueryMembersResponse",
  encode(message: QueryMembersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
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
    return message;
  },
  fromAmino(object: QueryMembersResponseAmino): QueryMembersResponse {
    const message = createBaseQueryMembersResponse();
    message.members = object.members?.map(e => Member.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryMembersResponse): QueryMembersResponseAmino {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = message.members;
    }
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
      typeUrl: "/band.tss.v1beta1.QueryMembersResponse",
      value: QueryMembersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIsGranteeRequest(): QueryIsGranteeRequest {
  return {
    granter: "",
    grantee: ""
  };
}
export const QueryIsGranteeRequest = {
  typeUrl: "/band.tss.v1beta1.QueryIsGranteeRequest",
  encode(message: QueryIsGranteeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsGranteeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsGranteeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryIsGranteeRequest>): QueryIsGranteeRequest {
    const message = createBaseQueryIsGranteeRequest();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: QueryIsGranteeRequestAmino): QueryIsGranteeRequest {
    const message = createBaseQueryIsGranteeRequest();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: QueryIsGranteeRequest): QueryIsGranteeRequestAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    return obj;
  },
  fromAminoMsg(object: QueryIsGranteeRequestAminoMsg): QueryIsGranteeRequest {
    return QueryIsGranteeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsGranteeRequestProtoMsg): QueryIsGranteeRequest {
    return QueryIsGranteeRequest.decode(message.value);
  },
  toProto(message: QueryIsGranteeRequest): Uint8Array {
    return QueryIsGranteeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIsGranteeRequest): QueryIsGranteeRequestProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.QueryIsGranteeRequest",
      value: QueryIsGranteeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIsGranteeResponse(): QueryIsGranteeResponse {
  return {
    isGrantee: false
  };
}
export const QueryIsGranteeResponse = {
  typeUrl: "/band.tss.v1beta1.QueryIsGranteeResponse",
  encode(message: QueryIsGranteeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isGrantee === true) {
      writer.uint32(8).bool(message.isGrantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsGranteeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsGranteeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isGrantee = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryIsGranteeResponse>): QueryIsGranteeResponse {
    const message = createBaseQueryIsGranteeResponse();
    message.isGrantee = object.isGrantee ?? false;
    return message;
  },
  fromAmino(object: QueryIsGranteeResponseAmino): QueryIsGranteeResponse {
    const message = createBaseQueryIsGranteeResponse();
    if (object.is_grantee !== undefined && object.is_grantee !== null) {
      message.isGrantee = object.is_grantee;
    }
    return message;
  },
  toAmino(message: QueryIsGranteeResponse): QueryIsGranteeResponseAmino {
    const obj: any = {};
    obj.is_grantee = message.isGrantee === false ? undefined : message.isGrantee;
    return obj;
  },
  fromAminoMsg(object: QueryIsGranteeResponseAminoMsg): QueryIsGranteeResponse {
    return QueryIsGranteeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsGranteeResponseProtoMsg): QueryIsGranteeResponse {
    return QueryIsGranteeResponse.decode(message.value);
  },
  toProto(message: QueryIsGranteeResponse): Uint8Array {
    return QueryIsGranteeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIsGranteeResponse): QueryIsGranteeResponseProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.QueryIsGranteeResponse",
      value: QueryIsGranteeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDERequest(): QueryDERequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryDERequest = {
  typeUrl: "/band.tss.v1beta1.QueryDERequest",
  encode(message: QueryDERequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDERequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDERequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromPartial(object: Partial<QueryDERequest>): QueryDERequest {
    const message = createBaseQueryDERequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDERequestAmino): QueryDERequest {
    const message = createBaseQueryDERequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDERequest): QueryDERequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDERequestAminoMsg): QueryDERequest {
    return QueryDERequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDERequestProtoMsg): QueryDERequest {
    return QueryDERequest.decode(message.value);
  },
  toProto(message: QueryDERequest): Uint8Array {
    return QueryDERequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDERequest): QueryDERequestProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.QueryDERequest",
      value: QueryDERequest.encode(message).finish()
    };
  }
};
function createBaseQueryDEResponse(): QueryDEResponse {
  return {
    des: [],
    pagination: undefined
  };
}
export const QueryDEResponse = {
  typeUrl: "/band.tss.v1beta1.QueryDEResponse",
  encode(message: QueryDEResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.des) {
      DE.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDEResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDEResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.des.push(DE.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryDEResponse>): QueryDEResponse {
    const message = createBaseQueryDEResponse();
    message.des = object.des?.map(e => DE.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDEResponseAmino): QueryDEResponse {
    const message = createBaseQueryDEResponse();
    message.des = object.des?.map(e => DE.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDEResponse): QueryDEResponseAmino {
    const obj: any = {};
    if (message.des) {
      obj.des = message.des.map(e => e ? DE.toAmino(e) : undefined);
    } else {
      obj.des = message.des;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDEResponseAminoMsg): QueryDEResponse {
    return QueryDEResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDEResponseProtoMsg): QueryDEResponse {
    return QueryDEResponse.decode(message.value);
  },
  toProto(message: QueryDEResponse): Uint8Array {
    return QueryDEResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDEResponse): QueryDEResponseProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.QueryDEResponse",
      value: QueryDEResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPendingGroupsRequest(): QueryPendingGroupsRequest {
  return {
    address: ""
  };
}
export const QueryPendingGroupsRequest = {
  typeUrl: "/band.tss.v1beta1.QueryPendingGroupsRequest",
  encode(message: QueryPendingGroupsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingGroupsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingGroupsRequest();
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
  fromPartial(object: Partial<QueryPendingGroupsRequest>): QueryPendingGroupsRequest {
    const message = createBaseQueryPendingGroupsRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryPendingGroupsRequestAmino): QueryPendingGroupsRequest {
    const message = createBaseQueryPendingGroupsRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryPendingGroupsRequest): QueryPendingGroupsRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryPendingGroupsRequestAminoMsg): QueryPendingGroupsRequest {
    return QueryPendingGroupsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingGroupsRequestProtoMsg): QueryPendingGroupsRequest {
    return QueryPendingGroupsRequest.decode(message.value);
  },
  toProto(message: QueryPendingGroupsRequest): Uint8Array {
    return QueryPendingGroupsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingGroupsRequest): QueryPendingGroupsRequestProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.QueryPendingGroupsRequest",
      value: QueryPendingGroupsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPendingGroupsResponse(): QueryPendingGroupsResponse {
  return {
    pendingGroups: []
  };
}
export const QueryPendingGroupsResponse = {
  typeUrl: "/band.tss.v1beta1.QueryPendingGroupsResponse",
  encode(message: QueryPendingGroupsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.pendingGroups) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingGroupsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pendingGroups.push(reader.uint64());
            }
          } else {
            message.pendingGroups.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPendingGroupsResponse>): QueryPendingGroupsResponse {
    const message = createBaseQueryPendingGroupsResponse();
    message.pendingGroups = object.pendingGroups?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryPendingGroupsResponseAmino): QueryPendingGroupsResponse {
    const message = createBaseQueryPendingGroupsResponse();
    message.pendingGroups = object.pending_groups?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryPendingGroupsResponse): QueryPendingGroupsResponseAmino {
    const obj: any = {};
    if (message.pendingGroups) {
      obj.pending_groups = message.pendingGroups.map(e => e.toString());
    } else {
      obj.pending_groups = message.pendingGroups;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPendingGroupsResponseAminoMsg): QueryPendingGroupsResponse {
    return QueryPendingGroupsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingGroupsResponseProtoMsg): QueryPendingGroupsResponse {
    return QueryPendingGroupsResponse.decode(message.value);
  },
  toProto(message: QueryPendingGroupsResponse): Uint8Array {
    return QueryPendingGroupsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingGroupsResponse): QueryPendingGroupsResponseProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.QueryPendingGroupsResponse",
      value: QueryPendingGroupsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPendingSigningsRequest(): QueryPendingSigningsRequest {
  return {
    address: ""
  };
}
export const QueryPendingSigningsRequest = {
  typeUrl: "/band.tss.v1beta1.QueryPendingSigningsRequest",
  encode(message: QueryPendingSigningsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingSigningsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingSigningsRequest();
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
  fromPartial(object: Partial<QueryPendingSigningsRequest>): QueryPendingSigningsRequest {
    const message = createBaseQueryPendingSigningsRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryPendingSigningsRequestAmino): QueryPendingSigningsRequest {
    const message = createBaseQueryPendingSigningsRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryPendingSigningsRequest): QueryPendingSigningsRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryPendingSigningsRequestAminoMsg): QueryPendingSigningsRequest {
    return QueryPendingSigningsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingSigningsRequestProtoMsg): QueryPendingSigningsRequest {
    return QueryPendingSigningsRequest.decode(message.value);
  },
  toProto(message: QueryPendingSigningsRequest): Uint8Array {
    return QueryPendingSigningsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingSigningsRequest): QueryPendingSigningsRequestProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.QueryPendingSigningsRequest",
      value: QueryPendingSigningsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPendingSigningsResponse(): QueryPendingSigningsResponse {
  return {
    pendingSignings: []
  };
}
export const QueryPendingSigningsResponse = {
  typeUrl: "/band.tss.v1beta1.QueryPendingSigningsResponse",
  encode(message: QueryPendingSigningsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.pendingSignings) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingSigningsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingSigningsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pendingSignings.push(reader.uint64());
            }
          } else {
            message.pendingSignings.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPendingSigningsResponse>): QueryPendingSigningsResponse {
    const message = createBaseQueryPendingSigningsResponse();
    message.pendingSignings = object.pendingSignings?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryPendingSigningsResponseAmino): QueryPendingSigningsResponse {
    const message = createBaseQueryPendingSigningsResponse();
    message.pendingSignings = object.pending_signings?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryPendingSigningsResponse): QueryPendingSigningsResponseAmino {
    const obj: any = {};
    if (message.pendingSignings) {
      obj.pending_signings = message.pendingSignings.map(e => e.toString());
    } else {
      obj.pending_signings = message.pendingSignings;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPendingSigningsResponseAminoMsg): QueryPendingSigningsResponse {
    return QueryPendingSigningsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingSigningsResponseProtoMsg): QueryPendingSigningsResponse {
    return QueryPendingSigningsResponse.decode(message.value);
  },
  toProto(message: QueryPendingSigningsResponse): Uint8Array {
    return QueryPendingSigningsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingSigningsResponse): QueryPendingSigningsResponseProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.QueryPendingSigningsResponse",
      value: QueryPendingSigningsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySigningRequest(): QuerySigningRequest {
  return {
    signingId: BigInt(0)
  };
}
export const QuerySigningRequest = {
  typeUrl: "/band.tss.v1beta1.QuerySigningRequest",
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
      typeUrl: "/band.tss.v1beta1.QuerySigningRequest",
      value: QuerySigningRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySigningResponse(): QuerySigningResponse {
  return {
    signingResult: SigningResult.fromPartial({})
  };
}
export const QuerySigningResponse = {
  typeUrl: "/band.tss.v1beta1.QuerySigningResponse",
  encode(message: QuerySigningResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signingResult !== undefined) {
      SigningResult.encode(message.signingResult, writer.uint32(10).fork()).ldelim();
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
          message.signingResult = SigningResult.decode(reader, reader.uint32());
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
    message.signingResult = object.signingResult !== undefined && object.signingResult !== null ? SigningResult.fromPartial(object.signingResult) : undefined;
    return message;
  },
  fromAmino(object: QuerySigningResponseAmino): QuerySigningResponse {
    const message = createBaseQuerySigningResponse();
    if (object.signing_result !== undefined && object.signing_result !== null) {
      message.signingResult = SigningResult.fromAmino(object.signing_result);
    }
    return message;
  },
  toAmino(message: QuerySigningResponse): QuerySigningResponseAmino {
    const obj: any = {};
    obj.signing_result = message.signingResult ? SigningResult.toAmino(message.signingResult) : undefined;
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
      typeUrl: "/band.tss.v1beta1.QuerySigningResponse",
      value: QuerySigningResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySigningsRequest(): QuerySigningsRequest {
  return {
    pagination: undefined
  };
}
export const QuerySigningsRequest = {
  typeUrl: "/band.tss.v1beta1.QuerySigningsRequest",
  encode(message: QuerySigningsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySigningsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningsRequest();
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
  fromPartial(object: Partial<QuerySigningsRequest>): QuerySigningsRequest {
    const message = createBaseQuerySigningsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySigningsRequestAmino): QuerySigningsRequest {
    const message = createBaseQuerySigningsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySigningsRequest): QuerySigningsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySigningsRequestAminoMsg): QuerySigningsRequest {
    return QuerySigningsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySigningsRequestProtoMsg): QuerySigningsRequest {
    return QuerySigningsRequest.decode(message.value);
  },
  toProto(message: QuerySigningsRequest): Uint8Array {
    return QuerySigningsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySigningsRequest): QuerySigningsRequestProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.QuerySigningsRequest",
      value: QuerySigningsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySigningsResponse(): QuerySigningsResponse {
  return {
    signingResults: [],
    pagination: undefined
  };
}
export const QuerySigningsResponse = {
  typeUrl: "/band.tss.v1beta1.QuerySigningsResponse",
  encode(message: QuerySigningsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.signingResults) {
      SigningResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySigningsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signingResults.push(SigningResult.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QuerySigningsResponse>): QuerySigningsResponse {
    const message = createBaseQuerySigningsResponse();
    message.signingResults = object.signingResults?.map(e => SigningResult.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySigningsResponseAmino): QuerySigningsResponse {
    const message = createBaseQuerySigningsResponse();
    message.signingResults = object.signing_results?.map(e => SigningResult.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySigningsResponse): QuerySigningsResponseAmino {
    const obj: any = {};
    if (message.signingResults) {
      obj.signing_results = message.signingResults.map(e => e ? SigningResult.toAmino(e) : undefined);
    } else {
      obj.signing_results = message.signingResults;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySigningsResponseAminoMsg): QuerySigningsResponse {
    return QuerySigningsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySigningsResponseProtoMsg): QuerySigningsResponse {
    return QuerySigningsResponse.decode(message.value);
  },
  toProto(message: QuerySigningsResponse): Uint8Array {
    return QuerySigningsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySigningsResponse): QuerySigningsResponseProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.QuerySigningsResponse",
      value: QuerySigningsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/band.tss.v1beta1.QueryParamsRequest",
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
      typeUrl: "/band.tss.v1beta1.QueryParamsRequest",
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
  typeUrl: "/band.tss.v1beta1.QueryParamsResponse",
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
      typeUrl: "/band.tss.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};