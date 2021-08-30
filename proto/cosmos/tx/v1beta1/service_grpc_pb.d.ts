// package: cosmos.tx.v1beta1
// file: cosmos/tx/v1beta1/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cosmos_tx_v1beta1_service_pb from "../../../cosmos/tx/v1beta1/service_pb";
import * as cosmos_base_abci_v1beta1_abci_pb from "../../../cosmos/base/abci/v1beta1/abci_pb";
import * as cosmos_tx_v1beta1_tx_pb from "../../../cosmos/tx/v1beta1/tx_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";

interface IServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    simulate: IServiceService_ISimulate;
    getTx: IServiceService_IGetTx;
    broadcastTx: IServiceService_IBroadcastTx;
    getTxsEvent: IServiceService_IGetTxsEvent;
}

interface IServiceService_ISimulate extends grpc.MethodDefinition<cosmos_tx_v1beta1_service_pb.SimulateRequest, cosmos_tx_v1beta1_service_pb.SimulateResponse> {
    path: "/cosmos.tx.v1beta1.Service/Simulate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_tx_v1beta1_service_pb.SimulateRequest>;
    requestDeserialize: grpc.deserialize<cosmos_tx_v1beta1_service_pb.SimulateRequest>;
    responseSerialize: grpc.serialize<cosmos_tx_v1beta1_service_pb.SimulateResponse>;
    responseDeserialize: grpc.deserialize<cosmos_tx_v1beta1_service_pb.SimulateResponse>;
}
interface IServiceService_IGetTx extends grpc.MethodDefinition<cosmos_tx_v1beta1_service_pb.GetTxRequest, cosmos_tx_v1beta1_service_pb.GetTxResponse> {
    path: "/cosmos.tx.v1beta1.Service/GetTx";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_tx_v1beta1_service_pb.GetTxRequest>;
    requestDeserialize: grpc.deserialize<cosmos_tx_v1beta1_service_pb.GetTxRequest>;
    responseSerialize: grpc.serialize<cosmos_tx_v1beta1_service_pb.GetTxResponse>;
    responseDeserialize: grpc.deserialize<cosmos_tx_v1beta1_service_pb.GetTxResponse>;
}
interface IServiceService_IBroadcastTx extends grpc.MethodDefinition<cosmos_tx_v1beta1_service_pb.BroadcastTxRequest, cosmos_tx_v1beta1_service_pb.BroadcastTxResponse> {
    path: "/cosmos.tx.v1beta1.Service/BroadcastTx";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_tx_v1beta1_service_pb.BroadcastTxRequest>;
    requestDeserialize: grpc.deserialize<cosmos_tx_v1beta1_service_pb.BroadcastTxRequest>;
    responseSerialize: grpc.serialize<cosmos_tx_v1beta1_service_pb.BroadcastTxResponse>;
    responseDeserialize: grpc.deserialize<cosmos_tx_v1beta1_service_pb.BroadcastTxResponse>;
}
interface IServiceService_IGetTxsEvent extends grpc.MethodDefinition<cosmos_tx_v1beta1_service_pb.GetTxsEventRequest, cosmos_tx_v1beta1_service_pb.GetTxsEventResponse> {
    path: "/cosmos.tx.v1beta1.Service/GetTxsEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_tx_v1beta1_service_pb.GetTxsEventRequest>;
    requestDeserialize: grpc.deserialize<cosmos_tx_v1beta1_service_pb.GetTxsEventRequest>;
    responseSerialize: grpc.serialize<cosmos_tx_v1beta1_service_pb.GetTxsEventResponse>;
    responseDeserialize: grpc.deserialize<cosmos_tx_v1beta1_service_pb.GetTxsEventResponse>;
}

export const ServiceService: IServiceService;

export interface IServiceServer {
    simulate: grpc.handleUnaryCall<cosmos_tx_v1beta1_service_pb.SimulateRequest, cosmos_tx_v1beta1_service_pb.SimulateResponse>;
    getTx: grpc.handleUnaryCall<cosmos_tx_v1beta1_service_pb.GetTxRequest, cosmos_tx_v1beta1_service_pb.GetTxResponse>;
    broadcastTx: grpc.handleUnaryCall<cosmos_tx_v1beta1_service_pb.BroadcastTxRequest, cosmos_tx_v1beta1_service_pb.BroadcastTxResponse>;
    getTxsEvent: grpc.handleUnaryCall<cosmos_tx_v1beta1_service_pb.GetTxsEventRequest, cosmos_tx_v1beta1_service_pb.GetTxsEventResponse>;
}

export interface IServiceClient {
    simulate(request: cosmos_tx_v1beta1_service_pb.SimulateRequest, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.SimulateResponse) => void): grpc.ClientUnaryCall;
    simulate(request: cosmos_tx_v1beta1_service_pb.SimulateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.SimulateResponse) => void): grpc.ClientUnaryCall;
    simulate(request: cosmos_tx_v1beta1_service_pb.SimulateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.SimulateResponse) => void): grpc.ClientUnaryCall;
    getTx(request: cosmos_tx_v1beta1_service_pb.GetTxRequest, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    getTx(request: cosmos_tx_v1beta1_service_pb.GetTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    getTx(request: cosmos_tx_v1beta1_service_pb.GetTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    broadcastTx(request: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.BroadcastTxResponse) => void): grpc.ClientUnaryCall;
    broadcastTx(request: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.BroadcastTxResponse) => void): grpc.ClientUnaryCall;
    broadcastTx(request: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.BroadcastTxResponse) => void): grpc.ClientUnaryCall;
    getTxsEvent(request: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.GetTxsEventResponse) => void): grpc.ClientUnaryCall;
    getTxsEvent(request: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.GetTxsEventResponse) => void): grpc.ClientUnaryCall;
    getTxsEvent(request: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.GetTxsEventResponse) => void): grpc.ClientUnaryCall;
}

export class ServiceClient extends grpc.Client implements IServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public simulate(request: cosmos_tx_v1beta1_service_pb.SimulateRequest, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.SimulateResponse) => void): grpc.ClientUnaryCall;
    public simulate(request: cosmos_tx_v1beta1_service_pb.SimulateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.SimulateResponse) => void): grpc.ClientUnaryCall;
    public simulate(request: cosmos_tx_v1beta1_service_pb.SimulateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.SimulateResponse) => void): grpc.ClientUnaryCall;
    public getTx(request: cosmos_tx_v1beta1_service_pb.GetTxRequest, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    public getTx(request: cosmos_tx_v1beta1_service_pb.GetTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    public getTx(request: cosmos_tx_v1beta1_service_pb.GetTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.GetTxResponse) => void): grpc.ClientUnaryCall;
    public broadcastTx(request: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.BroadcastTxResponse) => void): grpc.ClientUnaryCall;
    public broadcastTx(request: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.BroadcastTxResponse) => void): grpc.ClientUnaryCall;
    public broadcastTx(request: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.BroadcastTxResponse) => void): grpc.ClientUnaryCall;
    public getTxsEvent(request: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.GetTxsEventResponse) => void): grpc.ClientUnaryCall;
    public getTxsEvent(request: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.GetTxsEventResponse) => void): grpc.ClientUnaryCall;
    public getTxsEvent(request: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_tx_v1beta1_service_pb.GetTxsEventResponse) => void): grpc.ClientUnaryCall;
}
