// package: cosmos.distribution.v1beta1
// file: cosmos/distribution/v1beta1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cosmos_distribution_v1beta1_query_pb from "../../../cosmos/distribution/v1beta1/query_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_distribution_v1beta1_distribution_pb from "../../../cosmos/distribution/v1beta1/distribution_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    params: IQueryService_IParams;
    validatorOutstandingRewards: IQueryService_IValidatorOutstandingRewards;
    validatorCommission: IQueryService_IValidatorCommission;
    validatorSlashes: IQueryService_IValidatorSlashes;
    delegationRewards: IQueryService_IDelegationRewards;
    delegationTotalRewards: IQueryService_IDelegationTotalRewards;
    delegatorValidators: IQueryService_IDelegatorValidators;
    delegatorWithdrawAddress: IQueryService_IDelegatorWithdrawAddress;
    communityPool: IQueryService_ICommunityPool;
}

interface IQueryService_IParams extends grpc.MethodDefinition<cosmos_distribution_v1beta1_query_pb.QueryParamsRequest, cosmos_distribution_v1beta1_query_pb.QueryParamsResponse> {
    path: "/cosmos.distribution.v1beta1.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryParamsResponse>;
}
interface IQueryService_IValidatorOutstandingRewards extends grpc.MethodDefinition<cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest, cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse> {
    path: "/cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest>;
    requestDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest>;
    responseSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse>;
    responseDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse>;
}
interface IQueryService_IValidatorCommission extends grpc.MethodDefinition<cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest, cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse> {
    path: "/cosmos.distribution.v1beta1.Query/ValidatorCommission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest>;
    requestDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest>;
    responseSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse>;
    responseDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse>;
}
interface IQueryService_IValidatorSlashes extends grpc.MethodDefinition<cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest, cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse> {
    path: "/cosmos.distribution.v1beta1.Query/ValidatorSlashes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest>;
    requestDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest>;
    responseSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse>;
    responseDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse>;
}
interface IQueryService_IDelegationRewards extends grpc.MethodDefinition<cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest, cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse> {
    path: "/cosmos.distribution.v1beta1.Query/DelegationRewards";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest>;
    requestDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest>;
    responseSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse>;
    responseDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse>;
}
interface IQueryService_IDelegationTotalRewards extends grpc.MethodDefinition<cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest, cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse> {
    path: "/cosmos.distribution.v1beta1.Query/DelegationTotalRewards";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest>;
    requestDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest>;
    responseSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse>;
    responseDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse>;
}
interface IQueryService_IDelegatorValidators extends grpc.MethodDefinition<cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest, cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse> {
    path: "/cosmos.distribution.v1beta1.Query/DelegatorValidators";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest>;
    requestDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest>;
    responseSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse>;
    responseDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse>;
}
interface IQueryService_IDelegatorWithdrawAddress extends grpc.MethodDefinition<cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest, cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse> {
    path: "/cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest>;
    requestDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest>;
    responseSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse>;
    responseDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse>;
}
interface IQueryService_ICommunityPool extends grpc.MethodDefinition<cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest, cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse> {
    path: "/cosmos.distribution.v1beta1.Query/CommunityPool";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest>;
    requestDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest>;
    responseSerialize: grpc.serialize<cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse>;
    responseDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer {
    params: grpc.handleUnaryCall<cosmos_distribution_v1beta1_query_pb.QueryParamsRequest, cosmos_distribution_v1beta1_query_pb.QueryParamsResponse>;
    validatorOutstandingRewards: grpc.handleUnaryCall<cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest, cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse>;
    validatorCommission: grpc.handleUnaryCall<cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest, cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse>;
    validatorSlashes: grpc.handleUnaryCall<cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest, cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse>;
    delegationRewards: grpc.handleUnaryCall<cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest, cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse>;
    delegationTotalRewards: grpc.handleUnaryCall<cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest, cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse>;
    delegatorValidators: grpc.handleUnaryCall<cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest, cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse>;
    delegatorWithdrawAddress: grpc.handleUnaryCall<cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest, cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse>;
    communityPool: grpc.handleUnaryCall<cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest, cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse>;
}

export interface IQueryClient {
    params(request: cosmos_distribution_v1beta1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: cosmos_distribution_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: cosmos_distribution_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    validatorOutstandingRewards(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse) => void): grpc.ClientUnaryCall;
    validatorOutstandingRewards(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse) => void): grpc.ClientUnaryCall;
    validatorOutstandingRewards(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse) => void): grpc.ClientUnaryCall;
    validatorCommission(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse) => void): grpc.ClientUnaryCall;
    validatorCommission(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse) => void): grpc.ClientUnaryCall;
    validatorCommission(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse) => void): grpc.ClientUnaryCall;
    validatorSlashes(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse) => void): grpc.ClientUnaryCall;
    validatorSlashes(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse) => void): grpc.ClientUnaryCall;
    validatorSlashes(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse) => void): grpc.ClientUnaryCall;
    delegationRewards(request: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse) => void): grpc.ClientUnaryCall;
    delegationRewards(request: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse) => void): grpc.ClientUnaryCall;
    delegationRewards(request: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse) => void): grpc.ClientUnaryCall;
    delegationTotalRewards(request: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse) => void): grpc.ClientUnaryCall;
    delegationTotalRewards(request: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse) => void): grpc.ClientUnaryCall;
    delegationTotalRewards(request: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse) => void): grpc.ClientUnaryCall;
    delegatorValidators(request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse) => void): grpc.ClientUnaryCall;
    delegatorValidators(request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse) => void): grpc.ClientUnaryCall;
    delegatorValidators(request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse) => void): grpc.ClientUnaryCall;
    delegatorWithdrawAddress(request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse) => void): grpc.ClientUnaryCall;
    delegatorWithdrawAddress(request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse) => void): grpc.ClientUnaryCall;
    delegatorWithdrawAddress(request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse) => void): grpc.ClientUnaryCall;
    communityPool(request: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse) => void): grpc.ClientUnaryCall;
    communityPool(request: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse) => void): grpc.ClientUnaryCall;
    communityPool(request: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public params(request: cosmos_distribution_v1beta1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: cosmos_distribution_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: cosmos_distribution_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public validatorOutstandingRewards(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse) => void): grpc.ClientUnaryCall;
    public validatorOutstandingRewards(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse) => void): grpc.ClientUnaryCall;
    public validatorOutstandingRewards(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse) => void): grpc.ClientUnaryCall;
    public validatorCommission(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse) => void): grpc.ClientUnaryCall;
    public validatorCommission(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse) => void): grpc.ClientUnaryCall;
    public validatorCommission(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse) => void): grpc.ClientUnaryCall;
    public validatorSlashes(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse) => void): grpc.ClientUnaryCall;
    public validatorSlashes(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse) => void): grpc.ClientUnaryCall;
    public validatorSlashes(request: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse) => void): grpc.ClientUnaryCall;
    public delegationRewards(request: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse) => void): grpc.ClientUnaryCall;
    public delegationRewards(request: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse) => void): grpc.ClientUnaryCall;
    public delegationRewards(request: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse) => void): grpc.ClientUnaryCall;
    public delegationTotalRewards(request: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse) => void): grpc.ClientUnaryCall;
    public delegationTotalRewards(request: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse) => void): grpc.ClientUnaryCall;
    public delegationTotalRewards(request: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse) => void): grpc.ClientUnaryCall;
    public delegatorValidators(request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse) => void): grpc.ClientUnaryCall;
    public delegatorValidators(request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse) => void): grpc.ClientUnaryCall;
    public delegatorValidators(request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse) => void): grpc.ClientUnaryCall;
    public delegatorWithdrawAddress(request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse) => void): grpc.ClientUnaryCall;
    public delegatorWithdrawAddress(request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse) => void): grpc.ClientUnaryCall;
    public delegatorWithdrawAddress(request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse) => void): grpc.ClientUnaryCall;
    public communityPool(request: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse) => void): grpc.ClientUnaryCall;
    public communityPool(request: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse) => void): grpc.ClientUnaryCall;
    public communityPool(request: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse) => void): grpc.ClientUnaryCall;
}
