// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ibc_applications_transfer_v1_tx_pb from "../../../../ibc/applications/transfer/v1/tx_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../../cosmos/base/v1beta1/coin_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    transfer: IMsgService_ITransfer;
}

interface IMsgService_ITransfer extends grpc.MethodDefinition<ibc_applications_transfer_v1_tx_pb.MsgTransfer, ibc_applications_transfer_v1_tx_pb.MsgTransferResponse> {
    path: "/ibc.applications.transfer.v1.Msg/Transfer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_applications_transfer_v1_tx_pb.MsgTransfer>;
    requestDeserialize: grpc.deserialize<ibc_applications_transfer_v1_tx_pb.MsgTransfer>;
    responseSerialize: grpc.serialize<ibc_applications_transfer_v1_tx_pb.MsgTransferResponse>;
    responseDeserialize: grpc.deserialize<ibc_applications_transfer_v1_tx_pb.MsgTransferResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer {
    transfer: grpc.handleUnaryCall<ibc_applications_transfer_v1_tx_pb.MsgTransfer, ibc_applications_transfer_v1_tx_pb.MsgTransferResponse>;
}

export interface IMsgClient {
    transfer(request: ibc_applications_transfer_v1_tx_pb.MsgTransfer, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
    transfer(request: ibc_applications_transfer_v1_tx_pb.MsgTransfer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
    transfer(request: ibc_applications_transfer_v1_tx_pb.MsgTransfer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public transfer(request: ibc_applications_transfer_v1_tx_pb.MsgTransfer, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
    public transfer(request: ibc_applications_transfer_v1_tx_pb.MsgTransfer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
    public transfer(request: ibc_applications_transfer_v1_tx_pb.MsgTransfer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
}
