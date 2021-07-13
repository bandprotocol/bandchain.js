// package: cosmos.distribution.v1beta1
// file: cosmos/distribution/v1beta1/tx.proto

import * as cosmos_distribution_v1beta1_tx_pb from "../../../cosmos/distribution/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgSetWithdrawAddress = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress;
  readonly responseType: typeof cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse;
};

type MsgWithdrawDelegatorReward = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward;
  readonly responseType: typeof cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse;
};

type MsgWithdrawValidatorCommission = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission;
  readonly responseType: typeof cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse;
};

type MsgFundCommunityPool = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool;
  readonly responseType: typeof cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly SetWithdrawAddress: MsgSetWithdrawAddress;
  static readonly WithdrawDelegatorReward: MsgWithdrawDelegatorReward;
  static readonly WithdrawValidatorCommission: MsgWithdrawValidatorCommission;
  static readonly FundCommunityPool: MsgFundCommunityPool;
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

export class MsgClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  setWithdrawAddress(
    requestMessage: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse|null) => void
  ): UnaryResponse;
  setWithdrawAddress(
    requestMessage: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse|null) => void
  ): UnaryResponse;
  withdrawDelegatorReward(
    requestMessage: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse|null) => void
  ): UnaryResponse;
  withdrawDelegatorReward(
    requestMessage: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse|null) => void
  ): UnaryResponse;
  withdrawValidatorCommission(
    requestMessage: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse|null) => void
  ): UnaryResponse;
  withdrawValidatorCommission(
    requestMessage: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse|null) => void
  ): UnaryResponse;
  fundCommunityPool(
    requestMessage: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse|null) => void
  ): UnaryResponse;
  fundCommunityPool(
    requestMessage: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool,
    callback: (error: ServiceError|null, responseMessage: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse|null) => void
  ): UnaryResponse;
}

