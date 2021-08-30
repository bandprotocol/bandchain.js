// package: cosmos.distribution.v1beta1
// file: cosmos/distribution/v1beta1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cosmos_distribution_v1beta1_tx_pb from "../../../cosmos/distribution/v1beta1/tx_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setWithdrawAddress: IMsgService_ISetWithdrawAddress;
    withdrawDelegatorReward: IMsgService_IWithdrawDelegatorReward;
    withdrawValidatorCommission: IMsgService_IWithdrawValidatorCommission;
    fundCommunityPool: IMsgService_IFundCommunityPool;
}

interface IMsgService_ISetWithdrawAddress extends grpc.MethodDefinition<cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress, cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse> {
    path: "/cosmos.distribution.v1beta1.Msg/SetWithdrawAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress>;
    requestDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress>;
    responseSerialize: grpc.serialize<cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse>;
    responseDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse>;
}
interface IMsgService_IWithdrawDelegatorReward extends grpc.MethodDefinition<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward, cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse> {
    path: "/cosmos.distribution.v1beta1.Msg/WithdrawDelegatorReward";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward>;
    requestDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward>;
    responseSerialize: grpc.serialize<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse>;
    responseDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse>;
}
interface IMsgService_IWithdrawValidatorCommission extends grpc.MethodDefinition<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission, cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse> {
    path: "/cosmos.distribution.v1beta1.Msg/WithdrawValidatorCommission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission>;
    requestDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission>;
    responseSerialize: grpc.serialize<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse>;
    responseDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse>;
}
interface IMsgService_IFundCommunityPool extends grpc.MethodDefinition<cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool, cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse> {
    path: "/cosmos.distribution.v1beta1.Msg/FundCommunityPool";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool>;
    requestDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool>;
    responseSerialize: grpc.serialize<cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse>;
    responseDeserialize: grpc.deserialize<cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer {
    setWithdrawAddress: grpc.handleUnaryCall<cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress, cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse>;
    withdrawDelegatorReward: grpc.handleUnaryCall<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward, cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse>;
    withdrawValidatorCommission: grpc.handleUnaryCall<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission, cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse>;
    fundCommunityPool: grpc.handleUnaryCall<cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool, cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse>;
}

export interface IMsgClient {
    setWithdrawAddress(request: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse) => void): grpc.ClientUnaryCall;
    setWithdrawAddress(request: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse) => void): grpc.ClientUnaryCall;
    setWithdrawAddress(request: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse) => void): grpc.ClientUnaryCall;
    withdrawDelegatorReward(request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse) => void): grpc.ClientUnaryCall;
    withdrawDelegatorReward(request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse) => void): grpc.ClientUnaryCall;
    withdrawDelegatorReward(request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse) => void): grpc.ClientUnaryCall;
    withdrawValidatorCommission(request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse) => void): grpc.ClientUnaryCall;
    withdrawValidatorCommission(request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse) => void): grpc.ClientUnaryCall;
    withdrawValidatorCommission(request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse) => void): grpc.ClientUnaryCall;
    fundCommunityPool(request: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse) => void): grpc.ClientUnaryCall;
    fundCommunityPool(request: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse) => void): grpc.ClientUnaryCall;
    fundCommunityPool(request: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setWithdrawAddress(request: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse) => void): grpc.ClientUnaryCall;
    public setWithdrawAddress(request: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse) => void): grpc.ClientUnaryCall;
    public setWithdrawAddress(request: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse) => void): grpc.ClientUnaryCall;
    public withdrawDelegatorReward(request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse) => void): grpc.ClientUnaryCall;
    public withdrawDelegatorReward(request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse) => void): grpc.ClientUnaryCall;
    public withdrawDelegatorReward(request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse) => void): grpc.ClientUnaryCall;
    public withdrawValidatorCommission(request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse) => void): grpc.ClientUnaryCall;
    public withdrawValidatorCommission(request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse) => void): grpc.ClientUnaryCall;
    public withdrawValidatorCommission(request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse) => void): grpc.ClientUnaryCall;
    public fundCommunityPool(request: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse) => void): grpc.ClientUnaryCall;
    public fundCommunityPool(request: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse) => void): grpc.ClientUnaryCall;
    public fundCommunityPool(request: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse) => void): grpc.ClientUnaryCall;
}
