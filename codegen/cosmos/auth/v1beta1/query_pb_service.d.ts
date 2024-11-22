// package: cosmos.auth.v1beta1
// file: cosmos/auth/v1beta1/query.proto

import * as cosmos_auth_v1beta1_query_pb from "../../../cosmos/auth/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryAccounts = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_auth_v1beta1_query_pb.QueryAccountsRequest;
  readonly responseType: typeof cosmos_auth_v1beta1_query_pb.QueryAccountsResponse;
};

type QueryAccount = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_auth_v1beta1_query_pb.QueryAccountRequest;
  readonly responseType: typeof cosmos_auth_v1beta1_query_pb.QueryAccountResponse;
};

type QueryAccountAddressByID = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_auth_v1beta1_query_pb.QueryAccountAddressByIDRequest;
  readonly responseType: typeof cosmos_auth_v1beta1_query_pb.QueryAccountAddressByIDResponse;
};

type QueryParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_auth_v1beta1_query_pb.QueryParamsRequest;
  readonly responseType: typeof cosmos_auth_v1beta1_query_pb.QueryParamsResponse;
};

type QueryModuleAccounts = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_auth_v1beta1_query_pb.QueryModuleAccountsRequest;
  readonly responseType: typeof cosmos_auth_v1beta1_query_pb.QueryModuleAccountsResponse;
};

type QueryModuleAccountByName = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_auth_v1beta1_query_pb.QueryModuleAccountByNameRequest;
  readonly responseType: typeof cosmos_auth_v1beta1_query_pb.QueryModuleAccountByNameResponse;
};

type QueryBech32Prefix = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_auth_v1beta1_query_pb.Bech32PrefixRequest;
  readonly responseType: typeof cosmos_auth_v1beta1_query_pb.Bech32PrefixResponse;
};

type QueryAddressBytesToString = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_auth_v1beta1_query_pb.AddressBytesToStringRequest;
  readonly responseType: typeof cosmos_auth_v1beta1_query_pb.AddressBytesToStringResponse;
};

type QueryAddressStringToBytes = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_auth_v1beta1_query_pb.AddressStringToBytesRequest;
  readonly responseType: typeof cosmos_auth_v1beta1_query_pb.AddressStringToBytesResponse;
};

type QueryAccountInfo = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_auth_v1beta1_query_pb.QueryAccountInfoRequest;
  readonly responseType: typeof cosmos_auth_v1beta1_query_pb.QueryAccountInfoResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Accounts: QueryAccounts;
  static readonly Account: QueryAccount;
  static readonly AccountAddressByID: QueryAccountAddressByID;
  static readonly Params: QueryParams;
  static readonly ModuleAccounts: QueryModuleAccounts;
  static readonly ModuleAccountByName: QueryModuleAccountByName;
  static readonly Bech32Prefix: QueryBech32Prefix;
  static readonly AddressBytesToString: QueryAddressBytesToString;
  static readonly AddressStringToBytes: QueryAddressStringToBytes;
  static readonly AccountInfo: QueryAccountInfo;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class QueryClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  accounts(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryAccountsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryAccountsResponse|null) => void
  ): UnaryResponse;
  accounts(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryAccountsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryAccountsResponse|null) => void
  ): UnaryResponse;
  account(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryAccountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryAccountResponse|null) => void
  ): UnaryResponse;
  account(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryAccountRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryAccountResponse|null) => void
  ): UnaryResponse;
  accountAddressByID(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryAccountAddressByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryAccountAddressByIDResponse|null) => void
  ): UnaryResponse;
  accountAddressByID(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryAccountAddressByIDRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryAccountAddressByIDResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryParamsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  moduleAccounts(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryModuleAccountsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryModuleAccountsResponse|null) => void
  ): UnaryResponse;
  moduleAccounts(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryModuleAccountsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryModuleAccountsResponse|null) => void
  ): UnaryResponse;
  moduleAccountByName(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryModuleAccountByNameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryModuleAccountByNameResponse|null) => void
  ): UnaryResponse;
  moduleAccountByName(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryModuleAccountByNameRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryModuleAccountByNameResponse|null) => void
  ): UnaryResponse;
  bech32Prefix(
    requestMessage: cosmos_auth_v1beta1_query_pb.Bech32PrefixRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.Bech32PrefixResponse|null) => void
  ): UnaryResponse;
  bech32Prefix(
    requestMessage: cosmos_auth_v1beta1_query_pb.Bech32PrefixRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.Bech32PrefixResponse|null) => void
  ): UnaryResponse;
  addressBytesToString(
    requestMessage: cosmos_auth_v1beta1_query_pb.AddressBytesToStringRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.AddressBytesToStringResponse|null) => void
  ): UnaryResponse;
  addressBytesToString(
    requestMessage: cosmos_auth_v1beta1_query_pb.AddressBytesToStringRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.AddressBytesToStringResponse|null) => void
  ): UnaryResponse;
  addressStringToBytes(
    requestMessage: cosmos_auth_v1beta1_query_pb.AddressStringToBytesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.AddressStringToBytesResponse|null) => void
  ): UnaryResponse;
  addressStringToBytes(
    requestMessage: cosmos_auth_v1beta1_query_pb.AddressStringToBytesRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.AddressStringToBytesResponse|null) => void
  ): UnaryResponse;
  accountInfo(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryAccountInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryAccountInfoResponse|null) => void
  ): UnaryResponse;
  accountInfo(
    requestMessage: cosmos_auth_v1beta1_query_pb.QueryAccountInfoRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_auth_v1beta1_query_pb.QueryAccountInfoResponse|null) => void
  ): UnaryResponse;
}

