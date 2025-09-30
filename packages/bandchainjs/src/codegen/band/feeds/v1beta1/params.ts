//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params is the data structure that keeps the parameters of the feeds module. */
export interface Params {
  /** admin is the address of the admin that is allowed to update reference source config on modules. */
  admin: string;
  /**
   * allowable_block_time_discrepancy is the allowed discrepancy (in seconds) between validator price timestamp and
   * block_time.
   */
  allowableBlockTimeDiscrepancy: bigint;
  /** grace_period is the time (in seconds) given for validators to adapt to changing in feed's interval. */
  gracePeriod: bigint;
  /**
   * min_interval is the minimum limit of every feeds' interval (in seconds).
   * If the calculated interval is lower than this, it will be capped at this value.
   */
  minInterval: bigint;
  /**
   * max_interval is the maximum limit of every feeds' interval (in seconds).
   * If the calculated interval of a feed is higher than this, it will not be capped at this value.
   */
  maxInterval: bigint;
  /** power_step_threshold is the amount of minimum power required to put feed in the current feeds list. */
  powerStepThreshold: bigint;
  /** max_current_feeds is the maximum number of feeds supported at a time. */
  maxCurrentFeeds: bigint;
  /** cooldown_time represents the duration (in seconds) during which validators are prohibited from sending new prices. */
  cooldownTime: bigint;
  /** min_deviation_basis_point is the minimum limit of every feeds' deviation (in basis point). */
  minDeviationBasisPoint: bigint;
  /** max_deviation_basis_point is the maximum limit of every feeds' deviation (in basis point). */
  maxDeviationBasisPoint: bigint;
  /** current_feeds_update_interval is the number of blocks after which the current feeds will be re-calculated. */
  currentFeedsUpdateInterval: bigint;
  /** price_quorum is the minimum percentage of power that needs to be reached for a price to be processed. */
  priceQuorum: string;
  /** max_signal_ids_per_signing is the maximum number of signals allowed in a single tss signing request. */
  maxSignalIdsPerSigning: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/band.feeds.v1beta1.Params";
  value: Uint8Array;
}
/** Params is the data structure that keeps the parameters of the feeds module. */
export interface ParamsAmino {
  /** admin is the address of the admin that is allowed to update reference source config on modules. */
  admin?: string;
  /**
   * allowable_block_time_discrepancy is the allowed discrepancy (in seconds) between validator price timestamp and
   * block_time.
   */
  allowable_block_time_discrepancy?: string;
  /** grace_period is the time (in seconds) given for validators to adapt to changing in feed's interval. */
  grace_period?: string;
  /**
   * min_interval is the minimum limit of every feeds' interval (in seconds).
   * If the calculated interval is lower than this, it will be capped at this value.
   */
  min_interval?: string;
  /**
   * max_interval is the maximum limit of every feeds' interval (in seconds).
   * If the calculated interval of a feed is higher than this, it will not be capped at this value.
   */
  max_interval?: string;
  /** power_step_threshold is the amount of minimum power required to put feed in the current feeds list. */
  power_step_threshold?: string;
  /** max_current_feeds is the maximum number of feeds supported at a time. */
  max_current_feeds?: string;
  /** cooldown_time represents the duration (in seconds) during which validators are prohibited from sending new prices. */
  cooldown_time?: string;
  /** min_deviation_basis_point is the minimum limit of every feeds' deviation (in basis point). */
  min_deviation_basis_point?: string;
  /** max_deviation_basis_point is the maximum limit of every feeds' deviation (in basis point). */
  max_deviation_basis_point?: string;
  /** current_feeds_update_interval is the number of blocks after which the current feeds will be re-calculated. */
  current_feeds_update_interval?: string;
  /** price_quorum is the minimum percentage of power that needs to be reached for a price to be processed. */
  price_quorum?: string;
  /** max_signal_ids_per_signing is the maximum number of signals allowed in a single tss signing request. */
  max_signal_ids_per_signing?: string;
}
export interface ParamsAminoMsg {
  type: "/band.feeds.v1beta1.Params";
  value: ParamsAmino;
}
/** Params is the data structure that keeps the parameters of the feeds module. */
export interface ParamsSDKType {
  admin: string;
  allowable_block_time_discrepancy: bigint;
  grace_period: bigint;
  min_interval: bigint;
  max_interval: bigint;
  power_step_threshold: bigint;
  max_current_feeds: bigint;
  cooldown_time: bigint;
  min_deviation_basis_point: bigint;
  max_deviation_basis_point: bigint;
  current_feeds_update_interval: bigint;
  price_quorum: string;
  max_signal_ids_per_signing: bigint;
}
function createBaseParams(): Params {
  return {
    admin: "",
    allowableBlockTimeDiscrepancy: BigInt(0),
    gracePeriod: BigInt(0),
    minInterval: BigInt(0),
    maxInterval: BigInt(0),
    powerStepThreshold: BigInt(0),
    maxCurrentFeeds: BigInt(0),
    cooldownTime: BigInt(0),
    minDeviationBasisPoint: BigInt(0),
    maxDeviationBasisPoint: BigInt(0),
    currentFeedsUpdateInterval: BigInt(0),
    priceQuorum: "",
    maxSignalIdsPerSigning: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/band.feeds.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.allowableBlockTimeDiscrepancy !== BigInt(0)) {
      writer.uint32(16).int64(message.allowableBlockTimeDiscrepancy);
    }
    if (message.gracePeriod !== BigInt(0)) {
      writer.uint32(24).int64(message.gracePeriod);
    }
    if (message.minInterval !== BigInt(0)) {
      writer.uint32(32).int64(message.minInterval);
    }
    if (message.maxInterval !== BigInt(0)) {
      writer.uint32(40).int64(message.maxInterval);
    }
    if (message.powerStepThreshold !== BigInt(0)) {
      writer.uint32(48).int64(message.powerStepThreshold);
    }
    if (message.maxCurrentFeeds !== BigInt(0)) {
      writer.uint32(56).uint64(message.maxCurrentFeeds);
    }
    if (message.cooldownTime !== BigInt(0)) {
      writer.uint32(64).int64(message.cooldownTime);
    }
    if (message.minDeviationBasisPoint !== BigInt(0)) {
      writer.uint32(72).int64(message.minDeviationBasisPoint);
    }
    if (message.maxDeviationBasisPoint !== BigInt(0)) {
      writer.uint32(80).int64(message.maxDeviationBasisPoint);
    }
    if (message.currentFeedsUpdateInterval !== BigInt(0)) {
      writer.uint32(88).int64(message.currentFeedsUpdateInterval);
    }
    if (message.priceQuorum !== "") {
      writer.uint32(98).string(message.priceQuorum);
    }
    if (message.maxSignalIdsPerSigning !== BigInt(0)) {
      writer.uint32(104).uint64(message.maxSignalIdsPerSigning);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.allowableBlockTimeDiscrepancy = reader.int64();
          break;
        case 3:
          message.gracePeriod = reader.int64();
          break;
        case 4:
          message.minInterval = reader.int64();
          break;
        case 5:
          message.maxInterval = reader.int64();
          break;
        case 6:
          message.powerStepThreshold = reader.int64();
          break;
        case 7:
          message.maxCurrentFeeds = reader.uint64();
          break;
        case 8:
          message.cooldownTime = reader.int64();
          break;
        case 9:
          message.minDeviationBasisPoint = reader.int64();
          break;
        case 10:
          message.maxDeviationBasisPoint = reader.int64();
          break;
        case 11:
          message.currentFeedsUpdateInterval = reader.int64();
          break;
        case 12:
          message.priceQuorum = reader.string();
          break;
        case 13:
          message.maxSignalIdsPerSigning = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.admin = object.admin ?? "";
    message.allowableBlockTimeDiscrepancy = object.allowableBlockTimeDiscrepancy !== undefined && object.allowableBlockTimeDiscrepancy !== null ? BigInt(object.allowableBlockTimeDiscrepancy.toString()) : BigInt(0);
    message.gracePeriod = object.gracePeriod !== undefined && object.gracePeriod !== null ? BigInt(object.gracePeriod.toString()) : BigInt(0);
    message.minInterval = object.minInterval !== undefined && object.minInterval !== null ? BigInt(object.minInterval.toString()) : BigInt(0);
    message.maxInterval = object.maxInterval !== undefined && object.maxInterval !== null ? BigInt(object.maxInterval.toString()) : BigInt(0);
    message.powerStepThreshold = object.powerStepThreshold !== undefined && object.powerStepThreshold !== null ? BigInt(object.powerStepThreshold.toString()) : BigInt(0);
    message.maxCurrentFeeds = object.maxCurrentFeeds !== undefined && object.maxCurrentFeeds !== null ? BigInt(object.maxCurrentFeeds.toString()) : BigInt(0);
    message.cooldownTime = object.cooldownTime !== undefined && object.cooldownTime !== null ? BigInt(object.cooldownTime.toString()) : BigInt(0);
    message.minDeviationBasisPoint = object.minDeviationBasisPoint !== undefined && object.minDeviationBasisPoint !== null ? BigInt(object.minDeviationBasisPoint.toString()) : BigInt(0);
    message.maxDeviationBasisPoint = object.maxDeviationBasisPoint !== undefined && object.maxDeviationBasisPoint !== null ? BigInt(object.maxDeviationBasisPoint.toString()) : BigInt(0);
    message.currentFeedsUpdateInterval = object.currentFeedsUpdateInterval !== undefined && object.currentFeedsUpdateInterval !== null ? BigInt(object.currentFeedsUpdateInterval.toString()) : BigInt(0);
    message.priceQuorum = object.priceQuorum ?? "";
    message.maxSignalIdsPerSigning = object.maxSignalIdsPerSigning !== undefined && object.maxSignalIdsPerSigning !== null ? BigInt(object.maxSignalIdsPerSigning.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.allowable_block_time_discrepancy !== undefined && object.allowable_block_time_discrepancy !== null) {
      message.allowableBlockTimeDiscrepancy = BigInt(object.allowable_block_time_discrepancy);
    }
    if (object.grace_period !== undefined && object.grace_period !== null) {
      message.gracePeriod = BigInt(object.grace_period);
    }
    if (object.min_interval !== undefined && object.min_interval !== null) {
      message.minInterval = BigInt(object.min_interval);
    }
    if (object.max_interval !== undefined && object.max_interval !== null) {
      message.maxInterval = BigInt(object.max_interval);
    }
    if (object.power_step_threshold !== undefined && object.power_step_threshold !== null) {
      message.powerStepThreshold = BigInt(object.power_step_threshold);
    }
    if (object.max_current_feeds !== undefined && object.max_current_feeds !== null) {
      message.maxCurrentFeeds = BigInt(object.max_current_feeds);
    }
    if (object.cooldown_time !== undefined && object.cooldown_time !== null) {
      message.cooldownTime = BigInt(object.cooldown_time);
    }
    if (object.min_deviation_basis_point !== undefined && object.min_deviation_basis_point !== null) {
      message.minDeviationBasisPoint = BigInt(object.min_deviation_basis_point);
    }
    if (object.max_deviation_basis_point !== undefined && object.max_deviation_basis_point !== null) {
      message.maxDeviationBasisPoint = BigInt(object.max_deviation_basis_point);
    }
    if (object.current_feeds_update_interval !== undefined && object.current_feeds_update_interval !== null) {
      message.currentFeedsUpdateInterval = BigInt(object.current_feeds_update_interval);
    }
    if (object.price_quorum !== undefined && object.price_quorum !== null) {
      message.priceQuorum = object.price_quorum;
    }
    if (object.max_signal_ids_per_signing !== undefined && object.max_signal_ids_per_signing !== null) {
      message.maxSignalIdsPerSigning = BigInt(object.max_signal_ids_per_signing);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.allowable_block_time_discrepancy = message.allowableBlockTimeDiscrepancy !== BigInt(0) ? message.allowableBlockTimeDiscrepancy?.toString() : undefined;
    obj.grace_period = message.gracePeriod !== BigInt(0) ? message.gracePeriod?.toString() : undefined;
    obj.min_interval = message.minInterval !== BigInt(0) ? message.minInterval?.toString() : undefined;
    obj.max_interval = message.maxInterval !== BigInt(0) ? message.maxInterval?.toString() : undefined;
    obj.power_step_threshold = message.powerStepThreshold !== BigInt(0) ? message.powerStepThreshold?.toString() : undefined;
    obj.max_current_feeds = message.maxCurrentFeeds !== BigInt(0) ? message.maxCurrentFeeds?.toString() : undefined;
    obj.cooldown_time = message.cooldownTime !== BigInt(0) ? message.cooldownTime?.toString() : undefined;
    obj.min_deviation_basis_point = message.minDeviationBasisPoint !== BigInt(0) ? message.minDeviationBasisPoint?.toString() : undefined;
    obj.max_deviation_basis_point = message.maxDeviationBasisPoint !== BigInt(0) ? message.maxDeviationBasisPoint?.toString() : undefined;
    obj.current_feeds_update_interval = message.currentFeedsUpdateInterval !== BigInt(0) ? message.currentFeedsUpdateInterval?.toString() : undefined;
    obj.price_quorum = message.priceQuorum === "" ? undefined : message.priceQuorum;
    obj.max_signal_ids_per_signing = message.maxSignalIdsPerSigning !== BigInt(0) ? message.maxSignalIdsPerSigning?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};