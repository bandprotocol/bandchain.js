// package: cosmos.base.tendermint.v1beta1
// file: cosmos/base/tendermint/v1beta1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cosmos_base_tendermint_v1beta1_query_pb from "../../../../cosmos/base/tendermint/v1beta1/query_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as tendermint_p2p_types_pb from "../../../../tendermint/p2p/types_pb";
import * as tendermint_types_block_pb from "../../../../tendermint/types/block_pb";
import * as tendermint_types_types_pb from "../../../../tendermint/types/types_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../../cosmos/base/query/v1beta1/pagination_pb";

interface IServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getNodeInfo: IServiceService_IGetNodeInfo;
    getSyncing: IServiceService_IGetSyncing;
    getLatestBlock: IServiceService_IGetLatestBlock;
    getBlockByHeight: IServiceService_IGetBlockByHeight;
    getLatestValidatorSet: IServiceService_IGetLatestValidatorSet;
    getValidatorSetByHeight: IServiceService_IGetValidatorSetByHeight;
}

interface IServiceService_IGetNodeInfo extends grpc.MethodDefinition<cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest, cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse> {
    path: "/cosmos.base.tendermint.v1beta1.Service/GetNodeInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest>;
    requestDeserialize: grpc.deserialize<cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest>;
    responseSerialize: grpc.serialize<cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse>;
    responseDeserialize: grpc.deserialize<cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse>;
}
interface IServiceService_IGetSyncing extends grpc.MethodDefinition<cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest, cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse> {
    path: "/cosmos.base.tendermint.v1beta1.Service/GetSyncing";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest>;
    requestDeserialize: grpc.deserialize<cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest>;
    responseSerialize: grpc.serialize<cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse>;
    responseDeserialize: grpc.deserialize<cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse>;
}
interface IServiceService_IGetLatestBlock extends grpc.MethodDefinition<cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest, cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse> {
    path: "/cosmos.base.tendermint.v1beta1.Service/GetLatestBlock";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest>;
    requestDeserialize: grpc.deserialize<cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest>;
    responseSerialize: grpc.serialize<cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse>;
    responseDeserialize: grpc.deserialize<cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse>;
}
interface IServiceService_IGetBlockByHeight extends grpc.MethodDefinition<cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest, cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse> {
    path: "/cosmos.base.tendermint.v1beta1.Service/GetBlockByHeight";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest>;
    requestDeserialize: grpc.deserialize<cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest>;
    responseSerialize: grpc.serialize<cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse>;
    responseDeserialize: grpc.deserialize<cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse>;
}
interface IServiceService_IGetLatestValidatorSet extends grpc.MethodDefinition<cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest, cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse> {
    path: "/cosmos.base.tendermint.v1beta1.Service/GetLatestValidatorSet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest>;
    requestDeserialize: grpc.deserialize<cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest>;
    responseSerialize: grpc.serialize<cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse>;
    responseDeserialize: grpc.deserialize<cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse>;
}
interface IServiceService_IGetValidatorSetByHeight extends grpc.MethodDefinition<cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest, cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse> {
    path: "/cosmos.base.tendermint.v1beta1.Service/GetValidatorSetByHeight";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest>;
    requestDeserialize: grpc.deserialize<cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest>;
    responseSerialize: grpc.serialize<cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse>;
    responseDeserialize: grpc.deserialize<cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse>;
}

export const ServiceService: IServiceService;

export interface IServiceServer {
    getNodeInfo: grpc.handleUnaryCall<cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest, cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse>;
    getSyncing: grpc.handleUnaryCall<cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest, cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse>;
    getLatestBlock: grpc.handleUnaryCall<cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest, cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse>;
    getBlockByHeight: grpc.handleUnaryCall<cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest, cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse>;
    getLatestValidatorSet: grpc.handleUnaryCall<cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest, cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse>;
    getValidatorSetByHeight: grpc.handleUnaryCall<cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest, cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse>;
}

export interface IServiceClient {
    getNodeInfo(request: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse) => void): grpc.ClientUnaryCall;
    getNodeInfo(request: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse) => void): grpc.ClientUnaryCall;
    getNodeInfo(request: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse) => void): grpc.ClientUnaryCall;
    getSyncing(request: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse) => void): grpc.ClientUnaryCall;
    getSyncing(request: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse) => void): grpc.ClientUnaryCall;
    getSyncing(request: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse) => void): grpc.ClientUnaryCall;
    getLatestBlock(request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse) => void): grpc.ClientUnaryCall;
    getLatestBlock(request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse) => void): grpc.ClientUnaryCall;
    getLatestBlock(request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse) => void): grpc.ClientUnaryCall;
    getBlockByHeight(request: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse) => void): grpc.ClientUnaryCall;
    getBlockByHeight(request: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse) => void): grpc.ClientUnaryCall;
    getBlockByHeight(request: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse) => void): grpc.ClientUnaryCall;
    getLatestValidatorSet(request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse) => void): grpc.ClientUnaryCall;
    getLatestValidatorSet(request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse) => void): grpc.ClientUnaryCall;
    getLatestValidatorSet(request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse) => void): grpc.ClientUnaryCall;
    getValidatorSetByHeight(request: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse) => void): grpc.ClientUnaryCall;
    getValidatorSetByHeight(request: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse) => void): grpc.ClientUnaryCall;
    getValidatorSetByHeight(request: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse) => void): grpc.ClientUnaryCall;
}

export class ServiceClient extends grpc.Client implements IServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getNodeInfo(request: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse) => void): grpc.ClientUnaryCall;
    public getNodeInfo(request: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse) => void): grpc.ClientUnaryCall;
    public getNodeInfo(request: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse) => void): grpc.ClientUnaryCall;
    public getSyncing(request: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse) => void): grpc.ClientUnaryCall;
    public getSyncing(request: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse) => void): grpc.ClientUnaryCall;
    public getSyncing(request: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse) => void): grpc.ClientUnaryCall;
    public getLatestBlock(request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse) => void): grpc.ClientUnaryCall;
    public getLatestBlock(request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse) => void): grpc.ClientUnaryCall;
    public getLatestBlock(request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse) => void): grpc.ClientUnaryCall;
    public getBlockByHeight(request: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse) => void): grpc.ClientUnaryCall;
    public getBlockByHeight(request: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse) => void): grpc.ClientUnaryCall;
    public getBlockByHeight(request: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse) => void): grpc.ClientUnaryCall;
    public getLatestValidatorSet(request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse) => void): grpc.ClientUnaryCall;
    public getLatestValidatorSet(request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse) => void): grpc.ClientUnaryCall;
    public getLatestValidatorSet(request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse) => void): grpc.ClientUnaryCall;
    public getValidatorSetByHeight(request: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse) => void): grpc.ClientUnaryCall;
    public getValidatorSetByHeight(request: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse) => void): grpc.ClientUnaryCall;
    public getValidatorSetByHeight(request: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse) => void): grpc.ClientUnaryCall;
}
