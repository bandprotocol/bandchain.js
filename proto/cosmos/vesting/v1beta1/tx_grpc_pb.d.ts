// package: cosmos.vesting.v1beta1
// file: cosmos/vesting/v1beta1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cosmos_vesting_v1beta1_tx_pb from "../../../cosmos/vesting/v1beta1/tx_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createVestingAccount: IMsgService_ICreateVestingAccount;
}

interface IMsgService_ICreateVestingAccount extends grpc.MethodDefinition<cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount, cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse> {
    path: "/cosmos.vesting.v1beta1.Msg/CreateVestingAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount>;
    requestDeserialize: grpc.deserialize<cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount>;
    responseSerialize: grpc.serialize<cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse>;
    responseDeserialize: grpc.deserialize<cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer {
    createVestingAccount: grpc.handleUnaryCall<cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount, cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse>;
}

export interface IMsgClient {
    createVestingAccount(request: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount, callback: (error: grpc.ServiceError | null, response: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse) => void): grpc.ClientUnaryCall;
    createVestingAccount(request: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse) => void): grpc.ClientUnaryCall;
    createVestingAccount(request: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createVestingAccount(request: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount, callback: (error: grpc.ServiceError | null, response: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse) => void): grpc.ClientUnaryCall;
    public createVestingAccount(request: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse) => void): grpc.ClientUnaryCall;
    public createVestingAccount(request: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse) => void): grpc.ClientUnaryCall;
}
