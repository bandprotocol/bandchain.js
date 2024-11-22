// package: cosmos.nft.v1beta1
// file: cosmos/nft/v1beta1/query.proto

import * as cosmos_nft_v1beta1_query_pb from "../../../cosmos/nft/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryBalance = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_nft_v1beta1_query_pb.QueryBalanceRequest;
  readonly responseType: typeof cosmos_nft_v1beta1_query_pb.QueryBalanceResponse;
};

type QueryOwner = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_nft_v1beta1_query_pb.QueryOwnerRequest;
  readonly responseType: typeof cosmos_nft_v1beta1_query_pb.QueryOwnerResponse;
};

type QuerySupply = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_nft_v1beta1_query_pb.QuerySupplyRequest;
  readonly responseType: typeof cosmos_nft_v1beta1_query_pb.QuerySupplyResponse;
};

type QueryNFTs = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_nft_v1beta1_query_pb.QueryNFTsRequest;
  readonly responseType: typeof cosmos_nft_v1beta1_query_pb.QueryNFTsResponse;
};

type QueryNFT = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_nft_v1beta1_query_pb.QueryNFTRequest;
  readonly responseType: typeof cosmos_nft_v1beta1_query_pb.QueryNFTResponse;
};

type QueryClass = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_nft_v1beta1_query_pb.QueryClassRequest;
  readonly responseType: typeof cosmos_nft_v1beta1_query_pb.QueryClassResponse;
};

type QueryClasses = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_nft_v1beta1_query_pb.QueryClassesRequest;
  readonly responseType: typeof cosmos_nft_v1beta1_query_pb.QueryClassesResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Balance: QueryBalance;
  static readonly Owner: QueryOwner;
  static readonly Supply: QuerySupply;
  static readonly NFTs: QueryNFTs;
  static readonly NFT: QueryNFT;
  static readonly Class: QueryClass;
  static readonly Classes: QueryClasses;
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
  balance(
    requestMessage: cosmos_nft_v1beta1_query_pb.QueryBalanceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_nft_v1beta1_query_pb.QueryBalanceResponse|null) => void
  ): UnaryResponse;
  balance(
    requestMessage: cosmos_nft_v1beta1_query_pb.QueryBalanceRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_nft_v1beta1_query_pb.QueryBalanceResponse|null) => void
  ): UnaryResponse;
  owner(
    requestMessage: cosmos_nft_v1beta1_query_pb.QueryOwnerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_nft_v1beta1_query_pb.QueryOwnerResponse|null) => void
  ): UnaryResponse;
  owner(
    requestMessage: cosmos_nft_v1beta1_query_pb.QueryOwnerRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_nft_v1beta1_query_pb.QueryOwnerResponse|null) => void
  ): UnaryResponse;
  supply(
    requestMessage: cosmos_nft_v1beta1_query_pb.QuerySupplyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_nft_v1beta1_query_pb.QuerySupplyResponse|null) => void
  ): UnaryResponse;
  supply(
    requestMessage: cosmos_nft_v1beta1_query_pb.QuerySupplyRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_nft_v1beta1_query_pb.QuerySupplyResponse|null) => void
  ): UnaryResponse;
  nFTs(
    requestMessage: cosmos_nft_v1beta1_query_pb.QueryNFTsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_nft_v1beta1_query_pb.QueryNFTsResponse|null) => void
  ): UnaryResponse;
  nFTs(
    requestMessage: cosmos_nft_v1beta1_query_pb.QueryNFTsRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_nft_v1beta1_query_pb.QueryNFTsResponse|null) => void
  ): UnaryResponse;
  nFT(
    requestMessage: cosmos_nft_v1beta1_query_pb.QueryNFTRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_nft_v1beta1_query_pb.QueryNFTResponse|null) => void
  ): UnaryResponse;
  nFT(
    requestMessage: cosmos_nft_v1beta1_query_pb.QueryNFTRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_nft_v1beta1_query_pb.QueryNFTResponse|null) => void
  ): UnaryResponse;
  class(
    requestMessage: cosmos_nft_v1beta1_query_pb.QueryClassRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_nft_v1beta1_query_pb.QueryClassResponse|null) => void
  ): UnaryResponse;
  class(
    requestMessage: cosmos_nft_v1beta1_query_pb.QueryClassRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_nft_v1beta1_query_pb.QueryClassResponse|null) => void
  ): UnaryResponse;
  classes(
    requestMessage: cosmos_nft_v1beta1_query_pb.QueryClassesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_nft_v1beta1_query_pb.QueryClassesResponse|null) => void
  ): UnaryResponse;
  classes(
    requestMessage: cosmos_nft_v1beta1_query_pb.QueryClassesRequest,
    callback: (error: ServiceError|null, responseMessage: cosmos_nft_v1beta1_query_pb.QueryClassesResponse|null) => void
  ): UnaryResponse;
}

