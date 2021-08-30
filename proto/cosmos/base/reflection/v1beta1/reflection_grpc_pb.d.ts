// package: cosmos.base.reflection.v1beta1
// file: cosmos/base/reflection/v1beta1/reflection.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as cosmos_base_reflection_v1beta1_reflection_pb from "../../../../cosmos/base/reflection/v1beta1/reflection_pb";

interface IReflectionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listAllInterfaces: IReflectionServiceService_IListAllInterfaces;
    listImplementations: IReflectionServiceService_IListImplementations;
}

interface IReflectionServiceService_IListAllInterfaces extends grpc.MethodDefinition<cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest, cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse> {
    path: "/cosmos.base.reflection.v1beta1.ReflectionService/ListAllInterfaces";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest>;
    requestDeserialize: grpc.deserialize<cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest>;
    responseSerialize: grpc.serialize<cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse>;
    responseDeserialize: grpc.deserialize<cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse>;
}
interface IReflectionServiceService_IListImplementations extends grpc.MethodDefinition<cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest, cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse> {
    path: "/cosmos.base.reflection.v1beta1.ReflectionService/ListImplementations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest>;
    requestDeserialize: grpc.deserialize<cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest>;
    responseSerialize: grpc.serialize<cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse>;
    responseDeserialize: grpc.deserialize<cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse>;
}

export const ReflectionServiceService: IReflectionServiceService;

export interface IReflectionServiceServer {
    listAllInterfaces: grpc.handleUnaryCall<cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest, cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse>;
    listImplementations: grpc.handleUnaryCall<cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest, cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse>;
}

export interface IReflectionServiceClient {
    listAllInterfaces(request: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest, callback: (error: grpc.ServiceError | null, response: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse) => void): grpc.ClientUnaryCall;
    listAllInterfaces(request: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse) => void): grpc.ClientUnaryCall;
    listAllInterfaces(request: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse) => void): grpc.ClientUnaryCall;
    listImplementations(request: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse) => void): grpc.ClientUnaryCall;
    listImplementations(request: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse) => void): grpc.ClientUnaryCall;
    listImplementations(request: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse) => void): grpc.ClientUnaryCall;
}

export class ReflectionServiceClient extends grpc.Client implements IReflectionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listAllInterfaces(request: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest, callback: (error: grpc.ServiceError | null, response: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse) => void): grpc.ClientUnaryCall;
    public listAllInterfaces(request: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse) => void): grpc.ClientUnaryCall;
    public listAllInterfaces(request: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse) => void): grpc.ClientUnaryCall;
    public listImplementations(request: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest, callback: (error: grpc.ServiceError | null, response: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse) => void): grpc.ClientUnaryCall;
    public listImplementations(request: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse) => void): grpc.ClientUnaryCall;
    public listImplementations(request: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse) => void): grpc.ClientUnaryCall;
}
