//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** PriceStatus is a structure that defines the price status of a price. */
export enum PriceStatus {
  /** PRICE_STATUS_UNSPECIFIED - PRICE_STATUS_UNSPECIFIED is an unspecified price status. */
  PRICE_STATUS_UNSPECIFIED = 0,
  /** PRICE_STATUS_UNKNOWN_SIGNAL_ID - PRICE_STATUS_UNKNOWN_SIGNAL_ID is an unknown signal id price status. */
  PRICE_STATUS_UNKNOWN_SIGNAL_ID = 1,
  /** PRICE_STATUS_NOT_READY - PRICE_STATUS_NOT_READY is a not ready price status. */
  PRICE_STATUS_NOT_READY = 2,
  /** PRICE_STATUS_AVAILABLE - PRICE_STATUS_AVAILABLE is an available price status. */
  PRICE_STATUS_AVAILABLE = 3,
  /** PRICE_STATUS_NOT_IN_CURRENT_FEEDS - PRICE_STATUS_NOT_IN_CURRENT_FEEDS is a not in current feed price status. */
  PRICE_STATUS_NOT_IN_CURRENT_FEEDS = 4,
  UNRECOGNIZED = -1,
}
export const PriceStatusSDKType = PriceStatus;
export const PriceStatusAmino = PriceStatus;
export function priceStatusFromJSON(object: any): PriceStatus {
  switch (object) {
    case 0:
    case "PRICE_STATUS_UNSPECIFIED":
      return PriceStatus.PRICE_STATUS_UNSPECIFIED;
    case 1:
    case "PRICE_STATUS_UNKNOWN_SIGNAL_ID":
      return PriceStatus.PRICE_STATUS_UNKNOWN_SIGNAL_ID;
    case 2:
    case "PRICE_STATUS_NOT_READY":
      return PriceStatus.PRICE_STATUS_NOT_READY;
    case 3:
    case "PRICE_STATUS_AVAILABLE":
      return PriceStatus.PRICE_STATUS_AVAILABLE;
    case 4:
    case "PRICE_STATUS_NOT_IN_CURRENT_FEEDS":
      return PriceStatus.PRICE_STATUS_NOT_IN_CURRENT_FEEDS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PriceStatus.UNRECOGNIZED;
  }
}
export function priceStatusToJSON(object: PriceStatus): string {
  switch (object) {
    case PriceStatus.PRICE_STATUS_UNSPECIFIED:
      return "PRICE_STATUS_UNSPECIFIED";
    case PriceStatus.PRICE_STATUS_UNKNOWN_SIGNAL_ID:
      return "PRICE_STATUS_UNKNOWN_SIGNAL_ID";
    case PriceStatus.PRICE_STATUS_NOT_READY:
      return "PRICE_STATUS_NOT_READY";
    case PriceStatus.PRICE_STATUS_AVAILABLE:
      return "PRICE_STATUS_AVAILABLE";
    case PriceStatus.PRICE_STATUS_NOT_IN_CURRENT_FEEDS:
      return "PRICE_STATUS_NOT_IN_CURRENT_FEEDS";
    case PriceStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SignalPriceStatus is a structure that defines the price status of a signal id. */
export enum SignalPriceStatus {
  /** SIGNAL_PRICE_STATUS_UNSPECIFIED - SIGNAL_PRICE_STATUS_UNSPECIFIED is an unspecified signal price status. */
  SIGNAL_PRICE_STATUS_UNSPECIFIED = 0,
  /** SIGNAL_PRICE_STATUS_UNSUPPORTED - SIGNAL_PRICE_STATUS_UNSUPPORTED is an unsupported signal price status. */
  SIGNAL_PRICE_STATUS_UNSUPPORTED = 1,
  /** SIGNAL_PRICE_STATUS_UNAVAILABLE - SIGNAL_PRICE_STATUS_UNAVAILABLE is an unavailable signal price status. */
  SIGNAL_PRICE_STATUS_UNAVAILABLE = 2,
  /** SIGNAL_PRICE_STATUS_AVAILABLE - SIGNAL_PRICE_STATUS_AVAILABLE is an available signal price status. */
  SIGNAL_PRICE_STATUS_AVAILABLE = 3,
  UNRECOGNIZED = -1,
}
export const SignalPriceStatusSDKType = SignalPriceStatus;
export const SignalPriceStatusAmino = SignalPriceStatus;
export function signalPriceStatusFromJSON(object: any): SignalPriceStatus {
  switch (object) {
    case 0:
    case "SIGNAL_PRICE_STATUS_UNSPECIFIED":
      return SignalPriceStatus.SIGNAL_PRICE_STATUS_UNSPECIFIED;
    case 1:
    case "SIGNAL_PRICE_STATUS_UNSUPPORTED":
      return SignalPriceStatus.SIGNAL_PRICE_STATUS_UNSUPPORTED;
    case 2:
    case "SIGNAL_PRICE_STATUS_UNAVAILABLE":
      return SignalPriceStatus.SIGNAL_PRICE_STATUS_UNAVAILABLE;
    case 3:
    case "SIGNAL_PRICE_STATUS_AVAILABLE":
      return SignalPriceStatus.SIGNAL_PRICE_STATUS_AVAILABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SignalPriceStatus.UNRECOGNIZED;
  }
}
export function signalPriceStatusToJSON(object: SignalPriceStatus): string {
  switch (object) {
    case SignalPriceStatus.SIGNAL_PRICE_STATUS_UNSPECIFIED:
      return "SIGNAL_PRICE_STATUS_UNSPECIFIED";
    case SignalPriceStatus.SIGNAL_PRICE_STATUS_UNSUPPORTED:
      return "SIGNAL_PRICE_STATUS_UNSUPPORTED";
    case SignalPriceStatus.SIGNAL_PRICE_STATUS_UNAVAILABLE:
      return "SIGNAL_PRICE_STATUS_UNAVAILABLE";
    case SignalPriceStatus.SIGNAL_PRICE_STATUS_AVAILABLE:
      return "SIGNAL_PRICE_STATUS_AVAILABLE";
    case SignalPriceStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Signal is the data structure that contains signal id and power of that signal. */
export interface Signal {
  /** id is the id of the signal. */
  id: string;
  /** power is the power of the corresponding signal id. */
  power: bigint;
}
export interface SignalProtoMsg {
  typeUrl: "/band.feeds.v1beta1.Signal";
  value: Uint8Array;
}
/** Signal is the data structure that contains signal id and power of that signal. */
export interface SignalAmino {
  /** id is the id of the signal. */
  id?: string;
  /** power is the power of the corresponding signal id. */
  power?: string;
}
export interface SignalAminoMsg {
  type: "/band.feeds.v1beta1.Signal";
  value: SignalAmino;
}
/** Signal is the data structure that contains signal id and power of that signal. */
export interface SignalSDKType {
  id: string;
  power: bigint;
}
/** Vote is the data structure that contains array of signals of a voter. */
export interface Vote {
  /** voter is the address of the voter of this signals. */
  voter: string;
  /** signals is a list of signals submit by the voter. */
  signals: Signal[];
}
export interface VoteProtoMsg {
  typeUrl: "/band.feeds.v1beta1.Vote";
  value: Uint8Array;
}
/** Vote is the data structure that contains array of signals of a voter. */
export interface VoteAmino {
  /** voter is the address of the voter of this signals. */
  voter?: string;
  /** signals is a list of signals submit by the voter. */
  signals?: SignalAmino[];
}
export interface VoteAminoMsg {
  type: "/band.feeds.v1beta1.Vote";
  value: VoteAmino;
}
/** Vote is the data structure that contains array of signals of a voter. */
export interface VoteSDKType {
  voter: string;
  signals: SignalSDKType[];
}
/** Feed is a structure that holds a signal id, its total power, and its calculated interval. */
export interface Feed {
  /** signal_id is the unique string that identifies the unit of feed. */
  signalId: string;
  /** power is the power of the corresponding signal id. */
  power: bigint;
  /** interval is the interval of the price feed. */
  interval: bigint;
}
export interface FeedProtoMsg {
  typeUrl: "/band.feeds.v1beta1.Feed";
  value: Uint8Array;
}
/** Feed is a structure that holds a signal id, its total power, and its calculated interval. */
export interface FeedAmino {
  /** signal_id is the unique string that identifies the unit of feed. */
  signal_id?: string;
  /** power is the power of the corresponding signal id. */
  power?: string;
  /** interval is the interval of the price feed. */
  interval?: string;
}
export interface FeedAminoMsg {
  type: "/band.feeds.v1beta1.Feed";
  value: FeedAmino;
}
/** Feed is a structure that holds a signal id, its total power, and its calculated interval. */
export interface FeedSDKType {
  signal_id: string;
  power: bigint;
  interval: bigint;
}
/** FeedWithDeviation is a structure that holds a signal id, its total power, and its calculated interval and deviation. */
export interface FeedWithDeviation {
  /** signal_id is the unique string that identifies the unit of feed. */
  signalId: string;
  /** power is the power of the corresponding signal id. */
  power: bigint;
  /** interval is the interval of the price feed. */
  interval: bigint;
  /** deviation_basis_point is the maximum deviation value the feed can tolerate, expressed in basis points. */
  deviationBasisPoint: bigint;
}
export interface FeedWithDeviationProtoMsg {
  typeUrl: "/band.feeds.v1beta1.FeedWithDeviation";
  value: Uint8Array;
}
/** FeedWithDeviation is a structure that holds a signal id, its total power, and its calculated interval and deviation. */
export interface FeedWithDeviationAmino {
  /** signal_id is the unique string that identifies the unit of feed. */
  signal_id?: string;
  /** power is the power of the corresponding signal id. */
  power?: string;
  /** interval is the interval of the price feed. */
  interval?: string;
  /** deviation_basis_point is the maximum deviation value the feed can tolerate, expressed in basis points. */
  deviation_basis_point?: string;
}
export interface FeedWithDeviationAminoMsg {
  type: "/band.feeds.v1beta1.FeedWithDeviation";
  value: FeedWithDeviationAmino;
}
/** FeedWithDeviation is a structure that holds a signal id, its total power, and its calculated interval and deviation. */
export interface FeedWithDeviationSDKType {
  signal_id: string;
  power: bigint;
  interval: bigint;
  deviation_basis_point: bigint;
}
/** CurrentFeeds is a structure that holds a list of currently supported feeds, and its last update time and block. */
export interface CurrentFeeds {
  /** feeds is a list of currently supported feeds. */
  feeds: Feed[];
  /** last_update_timestamp is the timestamp of the last time supported feeds list is updated. */
  lastUpdateTimestamp: bigint;
  /** last_update_block is the number of blocks of the last time supported feeds list is updated. */
  lastUpdateBlock: bigint;
}
export interface CurrentFeedsProtoMsg {
  typeUrl: "/band.feeds.v1beta1.CurrentFeeds";
  value: Uint8Array;
}
/** CurrentFeeds is a structure that holds a list of currently supported feeds, and its last update time and block. */
export interface CurrentFeedsAmino {
  /** feeds is a list of currently supported feeds. */
  feeds?: FeedAmino[];
  /** last_update_timestamp is the timestamp of the last time supported feeds list is updated. */
  last_update_timestamp?: string;
  /** last_update_block is the number of blocks of the last time supported feeds list is updated. */
  last_update_block?: string;
}
export interface CurrentFeedsAminoMsg {
  type: "/band.feeds.v1beta1.CurrentFeeds";
  value: CurrentFeedsAmino;
}
/** CurrentFeeds is a structure that holds a list of currently supported feeds, and its last update time and block. */
export interface CurrentFeedsSDKType {
  feeds: FeedSDKType[];
  last_update_timestamp: bigint;
  last_update_block: bigint;
}
/**
 * CurrentFeedWithDeviations is a structure that holds a list of currently supported feed-with-deviations, and its
 * last update time and block.
 */
export interface CurrentFeedWithDeviations {
  /** feeds is a list of currently supported feed-with-deviations. */
  feeds: FeedWithDeviation[];
  /** last_update_timestamp is the timestamp of the last time supported feeds list is updated. */
  lastUpdateTimestamp: bigint;
  /** last_update_block is the number of blocks of the last time supported feeds list is updated. */
  lastUpdateBlock: bigint;
}
export interface CurrentFeedWithDeviationsProtoMsg {
  typeUrl: "/band.feeds.v1beta1.CurrentFeedWithDeviations";
  value: Uint8Array;
}
/**
 * CurrentFeedWithDeviations is a structure that holds a list of currently supported feed-with-deviations, and its
 * last update time and block.
 */
export interface CurrentFeedWithDeviationsAmino {
  /** feeds is a list of currently supported feed-with-deviations. */
  feeds?: FeedWithDeviationAmino[];
  /** last_update_timestamp is the timestamp of the last time supported feeds list is updated. */
  last_update_timestamp?: string;
  /** last_update_block is the number of blocks of the last time supported feeds list is updated. */
  last_update_block?: string;
}
export interface CurrentFeedWithDeviationsAminoMsg {
  type: "/band.feeds.v1beta1.CurrentFeedWithDeviations";
  value: CurrentFeedWithDeviationsAmino;
}
/**
 * CurrentFeedWithDeviations is a structure that holds a list of currently supported feed-with-deviations, and its
 * last update time and block.
 */
export interface CurrentFeedWithDeviationsSDKType {
  feeds: FeedWithDeviationSDKType[];
  last_update_timestamp: bigint;
  last_update_block: bigint;
}
/** Price is a structure that defines the price of a signal id. */
export interface Price {
  /** status is the status of a the price. */
  status: PriceStatus;
  /** signal_id is the signal id of the price. */
  signalId: string;
  /** price is the price of the signal id. */
  price: bigint;
  /** timestamp is the timestamp at which the price was aggregated. */
  timestamp: bigint;
}
export interface PriceProtoMsg {
  typeUrl: "/band.feeds.v1beta1.Price";
  value: Uint8Array;
}
/** Price is a structure that defines the price of a signal id. */
export interface PriceAmino {
  /** status is the status of a the price. */
  status?: PriceStatus;
  /** signal_id is the signal id of the price. */
  signal_id?: string;
  /** price is the price of the signal id. */
  price?: string;
  /** timestamp is the timestamp at which the price was aggregated. */
  timestamp?: string;
}
export interface PriceAminoMsg {
  type: "/band.feeds.v1beta1.Price";
  value: PriceAmino;
}
/** Price is a structure that defines the price of a signal id. */
export interface PriceSDKType {
  status: PriceStatus;
  signal_id: string;
  price: bigint;
  timestamp: bigint;
}
/** SignalPrice is a structure that defines the signaled price of a signal id. */
export interface SignalPrice {
  /** status is the status of the signal price. */
  status: SignalPriceStatus;
  /** signal_id is the signal id of the price. */
  signalId: string;
  /** price is the price submitted by the validator. */
  price: bigint;
}
export interface SignalPriceProtoMsg {
  typeUrl: "/band.feeds.v1beta1.SignalPrice";
  value: Uint8Array;
}
/** SignalPrice is a structure that defines the signaled price of a signal id. */
export interface SignalPriceAmino {
  /** status is the status of the signal price. */
  status?: SignalPriceStatus;
  /** signal_id is the signal id of the price. */
  signal_id?: string;
  /** price is the price submitted by the validator. */
  price?: string;
}
export interface SignalPriceAminoMsg {
  type: "/band.feeds.v1beta1.SignalPrice";
  value: SignalPriceAmino;
}
/** SignalPrice is a structure that defines the signaled price of a signal id. */
export interface SignalPriceSDKType {
  status: SignalPriceStatus;
  signal_id: string;
  price: bigint;
}
/** ValidatorPrice is a structure that defines the price submitted by a validator for a signal id. */
export interface ValidatorPrice {
  /** signal_price_status is the status of a signal price submitted. */
  signalPriceStatus: SignalPriceStatus;
  /** signal_id is the signal id of the price. */
  signalId: string;
  /** price is the price submitted by the validator. */
  price: bigint;
  /** timestamp is the timestamp at which the price was submitted. */
  timestamp: bigint;
  /** block_height is the block height at which the price was submitted. */
  blockHeight: bigint;
}
export interface ValidatorPriceProtoMsg {
  typeUrl: "/band.feeds.v1beta1.ValidatorPrice";
  value: Uint8Array;
}
/** ValidatorPrice is a structure that defines the price submitted by a validator for a signal id. */
export interface ValidatorPriceAmino {
  /** signal_price_status is the status of a signal price submitted. */
  signal_price_status?: SignalPriceStatus;
  /** signal_id is the signal id of the price. */
  signal_id?: string;
  /** price is the price submitted by the validator. */
  price?: string;
  /** timestamp is the timestamp at which the price was submitted. */
  timestamp?: string;
  /** block_height is the block height at which the price was submitted. */
  block_height?: string;
}
export interface ValidatorPriceAminoMsg {
  type: "/band.feeds.v1beta1.ValidatorPrice";
  value: ValidatorPriceAmino;
}
/** ValidatorPrice is a structure that defines the price submitted by a validator for a signal id. */
export interface ValidatorPriceSDKType {
  signal_price_status: SignalPriceStatus;
  signal_id: string;
  price: bigint;
  timestamp: bigint;
  block_height: bigint;
}
/**
 * ValidatorPriceList is a structure that holds a list of validator prices of
 * a validator and its address.
 */
export interface ValidatorPriceList {
  /** validator is the validator address. */
  validator: string;
  /** validators_prices is a list of validator prices. */
  validatorPrices: ValidatorPrice[];
}
export interface ValidatorPriceListProtoMsg {
  typeUrl: "/band.feeds.v1beta1.ValidatorPriceList";
  value: Uint8Array;
}
/**
 * ValidatorPriceList is a structure that holds a list of validator prices of
 * a validator and its address.
 */
export interface ValidatorPriceListAmino {
  /** validator is the validator address. */
  validator?: string;
  /** validators_prices is a list of validator prices. */
  validator_prices?: ValidatorPriceAmino[];
}
export interface ValidatorPriceListAminoMsg {
  type: "/band.feeds.v1beta1.ValidatorPriceList";
  value: ValidatorPriceListAmino;
}
/**
 * ValidatorPriceList is a structure that holds a list of validator prices of
 * a validator and its address.
 */
export interface ValidatorPriceListSDKType {
  validator: string;
  validator_prices: ValidatorPriceSDKType[];
}
/** ReferenceSourceConfig is a structure that defines the information of reference price source. */
export interface ReferenceSourceConfig {
  /** registry_ipfs_hash is the hash of the reference registry. */
  registryIpfsHash: string;
  /** registry_version is the version of the reference registry. */
  registryVersion: string;
}
export interface ReferenceSourceConfigProtoMsg {
  typeUrl: "/band.feeds.v1beta1.ReferenceSourceConfig";
  value: Uint8Array;
}
/** ReferenceSourceConfig is a structure that defines the information of reference price source. */
export interface ReferenceSourceConfigAmino {
  /** registry_ipfs_hash is the hash of the reference registry. */
  registry_ipfs_hash?: string;
  /** registry_version is the version of the reference registry. */
  registry_version?: string;
}
export interface ReferenceSourceConfigAminoMsg {
  type: "/band.feeds.v1beta1.ReferenceSourceConfig";
  value: ReferenceSourceConfigAmino;
}
/** ReferenceSourceConfig is a structure that defines the information of reference price source. */
export interface ReferenceSourceConfigSDKType {
  registry_ipfs_hash: string;
  registry_version: string;
}
function createBaseSignal(): Signal {
  return {
    id: "",
    power: BigInt(0)
  };
}
export const Signal = {
  typeUrl: "/band.feeds.v1beta1.Signal",
  encode(message: Signal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Signal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Signal>): Signal {
    const message = createBaseSignal();
    message.id = object.id ?? "";
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SignalAmino): Signal {
    const message = createBaseSignal();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message: Signal): SignalAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.power = message.power !== BigInt(0) ? message.power?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SignalAminoMsg): Signal {
    return Signal.fromAmino(object.value);
  },
  fromProtoMsg(message: SignalProtoMsg): Signal {
    return Signal.decode(message.value);
  },
  toProto(message: Signal): Uint8Array {
    return Signal.encode(message).finish();
  },
  toProtoMsg(message: Signal): SignalProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.Signal",
      value: Signal.encode(message).finish()
    };
  }
};
function createBaseVote(): Vote {
  return {
    voter: "",
    signals: []
  };
}
export const Vote = {
  typeUrl: "/band.feeds.v1beta1.Vote",
  encode(message: Vote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    for (const v of message.signals) {
      Signal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Vote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.signals.push(Signal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    message.voter = object.voter ?? "";
    message.signals = object.signals?.map(e => Signal.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: VoteAmino): Vote {
    const message = createBaseVote();
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    message.signals = object.signals?.map(e => Signal.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Vote): VoteAmino {
    const obj: any = {};
    obj.voter = message.voter === "" ? undefined : message.voter;
    if (message.signals) {
      obj.signals = message.signals.map(e => e ? Signal.toAmino(e) : undefined);
    } else {
      obj.signals = message.signals;
    }
    return obj;
  },
  fromAminoMsg(object: VoteAminoMsg): Vote {
    return Vote.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteProtoMsg): Vote {
    return Vote.decode(message.value);
  },
  toProto(message: Vote): Uint8Array {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message: Vote): VoteProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
function createBaseFeed(): Feed {
  return {
    signalId: "",
    power: BigInt(0),
    interval: BigInt(0)
  };
}
export const Feed = {
  typeUrl: "/band.feeds.v1beta1.Feed",
  encode(message: Feed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signalId !== "") {
      writer.uint32(10).string(message.signalId);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    if (message.interval !== BigInt(0)) {
      writer.uint32(24).int64(message.interval);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Feed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signalId = reader.string();
          break;
        case 2:
          message.power = reader.int64();
          break;
        case 3:
          message.interval = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Feed>): Feed {
    const message = createBaseFeed();
    message.signalId = object.signalId ?? "";
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    message.interval = object.interval !== undefined && object.interval !== null ? BigInt(object.interval.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FeedAmino): Feed {
    const message = createBaseFeed();
    if (object.signal_id !== undefined && object.signal_id !== null) {
      message.signalId = object.signal_id;
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    if (object.interval !== undefined && object.interval !== null) {
      message.interval = BigInt(object.interval);
    }
    return message;
  },
  toAmino(message: Feed): FeedAmino {
    const obj: any = {};
    obj.signal_id = message.signalId === "" ? undefined : message.signalId;
    obj.power = message.power !== BigInt(0) ? message.power?.toString() : undefined;
    obj.interval = message.interval !== BigInt(0) ? message.interval?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FeedAminoMsg): Feed {
    return Feed.fromAmino(object.value);
  },
  fromProtoMsg(message: FeedProtoMsg): Feed {
    return Feed.decode(message.value);
  },
  toProto(message: Feed): Uint8Array {
    return Feed.encode(message).finish();
  },
  toProtoMsg(message: Feed): FeedProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.Feed",
      value: Feed.encode(message).finish()
    };
  }
};
function createBaseFeedWithDeviation(): FeedWithDeviation {
  return {
    signalId: "",
    power: BigInt(0),
    interval: BigInt(0),
    deviationBasisPoint: BigInt(0)
  };
}
export const FeedWithDeviation = {
  typeUrl: "/band.feeds.v1beta1.FeedWithDeviation",
  encode(message: FeedWithDeviation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signalId !== "") {
      writer.uint32(10).string(message.signalId);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    if (message.interval !== BigInt(0)) {
      writer.uint32(24).int64(message.interval);
    }
    if (message.deviationBasisPoint !== BigInt(0)) {
      writer.uint32(32).int64(message.deviationBasisPoint);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeedWithDeviation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedWithDeviation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signalId = reader.string();
          break;
        case 2:
          message.power = reader.int64();
          break;
        case 3:
          message.interval = reader.int64();
          break;
        case 4:
          message.deviationBasisPoint = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FeedWithDeviation>): FeedWithDeviation {
    const message = createBaseFeedWithDeviation();
    message.signalId = object.signalId ?? "";
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    message.interval = object.interval !== undefined && object.interval !== null ? BigInt(object.interval.toString()) : BigInt(0);
    message.deviationBasisPoint = object.deviationBasisPoint !== undefined && object.deviationBasisPoint !== null ? BigInt(object.deviationBasisPoint.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FeedWithDeviationAmino): FeedWithDeviation {
    const message = createBaseFeedWithDeviation();
    if (object.signal_id !== undefined && object.signal_id !== null) {
      message.signalId = object.signal_id;
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    if (object.interval !== undefined && object.interval !== null) {
      message.interval = BigInt(object.interval);
    }
    if (object.deviation_basis_point !== undefined && object.deviation_basis_point !== null) {
      message.deviationBasisPoint = BigInt(object.deviation_basis_point);
    }
    return message;
  },
  toAmino(message: FeedWithDeviation): FeedWithDeviationAmino {
    const obj: any = {};
    obj.signal_id = message.signalId === "" ? undefined : message.signalId;
    obj.power = message.power !== BigInt(0) ? message.power?.toString() : undefined;
    obj.interval = message.interval !== BigInt(0) ? message.interval?.toString() : undefined;
    obj.deviation_basis_point = message.deviationBasisPoint !== BigInt(0) ? message.deviationBasisPoint?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FeedWithDeviationAminoMsg): FeedWithDeviation {
    return FeedWithDeviation.fromAmino(object.value);
  },
  fromProtoMsg(message: FeedWithDeviationProtoMsg): FeedWithDeviation {
    return FeedWithDeviation.decode(message.value);
  },
  toProto(message: FeedWithDeviation): Uint8Array {
    return FeedWithDeviation.encode(message).finish();
  },
  toProtoMsg(message: FeedWithDeviation): FeedWithDeviationProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.FeedWithDeviation",
      value: FeedWithDeviation.encode(message).finish()
    };
  }
};
function createBaseCurrentFeeds(): CurrentFeeds {
  return {
    feeds: [],
    lastUpdateTimestamp: BigInt(0),
    lastUpdateBlock: BigInt(0)
  };
}
export const CurrentFeeds = {
  typeUrl: "/band.feeds.v1beta1.CurrentFeeds",
  encode(message: CurrentFeeds, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.feeds) {
      Feed.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastUpdateTimestamp !== BigInt(0)) {
      writer.uint32(16).int64(message.lastUpdateTimestamp);
    }
    if (message.lastUpdateBlock !== BigInt(0)) {
      writer.uint32(24).int64(message.lastUpdateBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CurrentFeeds {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentFeeds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeds.push(Feed.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lastUpdateTimestamp = reader.int64();
          break;
        case 3:
          message.lastUpdateBlock = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CurrentFeeds>): CurrentFeeds {
    const message = createBaseCurrentFeeds();
    message.feeds = object.feeds?.map(e => Feed.fromPartial(e)) || [];
    message.lastUpdateTimestamp = object.lastUpdateTimestamp !== undefined && object.lastUpdateTimestamp !== null ? BigInt(object.lastUpdateTimestamp.toString()) : BigInt(0);
    message.lastUpdateBlock = object.lastUpdateBlock !== undefined && object.lastUpdateBlock !== null ? BigInt(object.lastUpdateBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CurrentFeedsAmino): CurrentFeeds {
    const message = createBaseCurrentFeeds();
    message.feeds = object.feeds?.map(e => Feed.fromAmino(e)) || [];
    if (object.last_update_timestamp !== undefined && object.last_update_timestamp !== null) {
      message.lastUpdateTimestamp = BigInt(object.last_update_timestamp);
    }
    if (object.last_update_block !== undefined && object.last_update_block !== null) {
      message.lastUpdateBlock = BigInt(object.last_update_block);
    }
    return message;
  },
  toAmino(message: CurrentFeeds): CurrentFeedsAmino {
    const obj: any = {};
    if (message.feeds) {
      obj.feeds = message.feeds.map(e => e ? Feed.toAmino(e) : undefined);
    } else {
      obj.feeds = message.feeds;
    }
    obj.last_update_timestamp = message.lastUpdateTimestamp !== BigInt(0) ? message.lastUpdateTimestamp?.toString() : undefined;
    obj.last_update_block = message.lastUpdateBlock !== BigInt(0) ? message.lastUpdateBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CurrentFeedsAminoMsg): CurrentFeeds {
    return CurrentFeeds.fromAmino(object.value);
  },
  fromProtoMsg(message: CurrentFeedsProtoMsg): CurrentFeeds {
    return CurrentFeeds.decode(message.value);
  },
  toProto(message: CurrentFeeds): Uint8Array {
    return CurrentFeeds.encode(message).finish();
  },
  toProtoMsg(message: CurrentFeeds): CurrentFeedsProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.CurrentFeeds",
      value: CurrentFeeds.encode(message).finish()
    };
  }
};
function createBaseCurrentFeedWithDeviations(): CurrentFeedWithDeviations {
  return {
    feeds: [],
    lastUpdateTimestamp: BigInt(0),
    lastUpdateBlock: BigInt(0)
  };
}
export const CurrentFeedWithDeviations = {
  typeUrl: "/band.feeds.v1beta1.CurrentFeedWithDeviations",
  encode(message: CurrentFeedWithDeviations, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.feeds) {
      FeedWithDeviation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastUpdateTimestamp !== BigInt(0)) {
      writer.uint32(16).int64(message.lastUpdateTimestamp);
    }
    if (message.lastUpdateBlock !== BigInt(0)) {
      writer.uint32(24).int64(message.lastUpdateBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CurrentFeedWithDeviations {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentFeedWithDeviations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeds.push(FeedWithDeviation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lastUpdateTimestamp = reader.int64();
          break;
        case 3:
          message.lastUpdateBlock = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CurrentFeedWithDeviations>): CurrentFeedWithDeviations {
    const message = createBaseCurrentFeedWithDeviations();
    message.feeds = object.feeds?.map(e => FeedWithDeviation.fromPartial(e)) || [];
    message.lastUpdateTimestamp = object.lastUpdateTimestamp !== undefined && object.lastUpdateTimestamp !== null ? BigInt(object.lastUpdateTimestamp.toString()) : BigInt(0);
    message.lastUpdateBlock = object.lastUpdateBlock !== undefined && object.lastUpdateBlock !== null ? BigInt(object.lastUpdateBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CurrentFeedWithDeviationsAmino): CurrentFeedWithDeviations {
    const message = createBaseCurrentFeedWithDeviations();
    message.feeds = object.feeds?.map(e => FeedWithDeviation.fromAmino(e)) || [];
    if (object.last_update_timestamp !== undefined && object.last_update_timestamp !== null) {
      message.lastUpdateTimestamp = BigInt(object.last_update_timestamp);
    }
    if (object.last_update_block !== undefined && object.last_update_block !== null) {
      message.lastUpdateBlock = BigInt(object.last_update_block);
    }
    return message;
  },
  toAmino(message: CurrentFeedWithDeviations): CurrentFeedWithDeviationsAmino {
    const obj: any = {};
    if (message.feeds) {
      obj.feeds = message.feeds.map(e => e ? FeedWithDeviation.toAmino(e) : undefined);
    } else {
      obj.feeds = message.feeds;
    }
    obj.last_update_timestamp = message.lastUpdateTimestamp !== BigInt(0) ? message.lastUpdateTimestamp?.toString() : undefined;
    obj.last_update_block = message.lastUpdateBlock !== BigInt(0) ? message.lastUpdateBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CurrentFeedWithDeviationsAminoMsg): CurrentFeedWithDeviations {
    return CurrentFeedWithDeviations.fromAmino(object.value);
  },
  fromProtoMsg(message: CurrentFeedWithDeviationsProtoMsg): CurrentFeedWithDeviations {
    return CurrentFeedWithDeviations.decode(message.value);
  },
  toProto(message: CurrentFeedWithDeviations): Uint8Array {
    return CurrentFeedWithDeviations.encode(message).finish();
  },
  toProtoMsg(message: CurrentFeedWithDeviations): CurrentFeedWithDeviationsProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.CurrentFeedWithDeviations",
      value: CurrentFeedWithDeviations.encode(message).finish()
    };
  }
};
function createBasePrice(): Price {
  return {
    status: 0,
    signalId: "",
    price: BigInt(0),
    timestamp: BigInt(0)
  };
}
export const Price = {
  typeUrl: "/band.feeds.v1beta1.Price",
  encode(message: Price, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.signalId !== "") {
      writer.uint32(18).string(message.signalId);
    }
    if (message.price !== BigInt(0)) {
      writer.uint32(24).uint64(message.price);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(32).int64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Price {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.signalId = reader.string();
          break;
        case 3:
          message.price = reader.uint64();
          break;
        case 4:
          message.timestamp = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Price>): Price {
    const message = createBasePrice();
    message.status = object.status ?? 0;
    message.signalId = object.signalId ?? "";
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PriceAmino): Price {
    const message = createBasePrice();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.signal_id !== undefined && object.signal_id !== null) {
      message.signalId = object.signal_id;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = BigInt(object.price);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message: Price): PriceAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.signal_id = message.signalId === "" ? undefined : message.signalId;
    obj.price = message.price !== BigInt(0) ? message.price?.toString() : undefined;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PriceAminoMsg): Price {
    return Price.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceProtoMsg): Price {
    return Price.decode(message.value);
  },
  toProto(message: Price): Uint8Array {
    return Price.encode(message).finish();
  },
  toProtoMsg(message: Price): PriceProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.Price",
      value: Price.encode(message).finish()
    };
  }
};
function createBaseSignalPrice(): SignalPrice {
  return {
    status: 0,
    signalId: "",
    price: BigInt(0)
  };
}
export const SignalPrice = {
  typeUrl: "/band.feeds.v1beta1.SignalPrice",
  encode(message: SignalPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.signalId !== "") {
      writer.uint32(18).string(message.signalId);
    }
    if (message.price !== BigInt(0)) {
      writer.uint32(24).uint64(message.price);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignalPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignalPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.signalId = reader.string();
          break;
        case 3:
          message.price = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SignalPrice>): SignalPrice {
    const message = createBaseSignalPrice();
    message.status = object.status ?? 0;
    message.signalId = object.signalId ?? "";
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SignalPriceAmino): SignalPrice {
    const message = createBaseSignalPrice();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.signal_id !== undefined && object.signal_id !== null) {
      message.signalId = object.signal_id;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = BigInt(object.price);
    }
    return message;
  },
  toAmino(message: SignalPrice): SignalPriceAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.signal_id = message.signalId === "" ? undefined : message.signalId;
    obj.price = message.price !== BigInt(0) ? message.price?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SignalPriceAminoMsg): SignalPrice {
    return SignalPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: SignalPriceProtoMsg): SignalPrice {
    return SignalPrice.decode(message.value);
  },
  toProto(message: SignalPrice): Uint8Array {
    return SignalPrice.encode(message).finish();
  },
  toProtoMsg(message: SignalPrice): SignalPriceProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.SignalPrice",
      value: SignalPrice.encode(message).finish()
    };
  }
};
function createBaseValidatorPrice(): ValidatorPrice {
  return {
    signalPriceStatus: 0,
    signalId: "",
    price: BigInt(0),
    timestamp: BigInt(0),
    blockHeight: BigInt(0)
  };
}
export const ValidatorPrice = {
  typeUrl: "/band.feeds.v1beta1.ValidatorPrice",
  encode(message: ValidatorPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signalPriceStatus !== 0) {
      writer.uint32(8).int32(message.signalPriceStatus);
    }
    if (message.signalId !== "") {
      writer.uint32(18).string(message.signalId);
    }
    if (message.price !== BigInt(0)) {
      writer.uint32(24).uint64(message.price);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(32).int64(message.timestamp);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(40).int64(message.blockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signalPriceStatus = reader.int32() as any;
          break;
        case 2:
          message.signalId = reader.string();
          break;
        case 3:
          message.price = reader.uint64();
          break;
        case 4:
          message.timestamp = reader.int64();
          break;
        case 5:
          message.blockHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ValidatorPrice>): ValidatorPrice {
    const message = createBaseValidatorPrice();
    message.signalPriceStatus = object.signalPriceStatus ?? 0;
    message.signalId = object.signalId ?? "";
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ValidatorPriceAmino): ValidatorPrice {
    const message = createBaseValidatorPrice();
    if (object.signal_price_status !== undefined && object.signal_price_status !== null) {
      message.signalPriceStatus = object.signal_price_status;
    }
    if (object.signal_id !== undefined && object.signal_id !== null) {
      message.signalId = object.signal_id;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = BigInt(object.price);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    return message;
  },
  toAmino(message: ValidatorPrice): ValidatorPriceAmino {
    const obj: any = {};
    obj.signal_price_status = message.signalPriceStatus === 0 ? undefined : message.signalPriceStatus;
    obj.signal_id = message.signalId === "" ? undefined : message.signalId;
    obj.price = message.price !== BigInt(0) ? message.price?.toString() : undefined;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp?.toString() : undefined;
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorPriceAminoMsg): ValidatorPrice {
    return ValidatorPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorPriceProtoMsg): ValidatorPrice {
    return ValidatorPrice.decode(message.value);
  },
  toProto(message: ValidatorPrice): Uint8Array {
    return ValidatorPrice.encode(message).finish();
  },
  toProtoMsg(message: ValidatorPrice): ValidatorPriceProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.ValidatorPrice",
      value: ValidatorPrice.encode(message).finish()
    };
  }
};
function createBaseValidatorPriceList(): ValidatorPriceList {
  return {
    validator: "",
    validatorPrices: []
  };
}
export const ValidatorPriceList = {
  typeUrl: "/band.feeds.v1beta1.ValidatorPriceList",
  encode(message: ValidatorPriceList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    for (const v of message.validatorPrices) {
      ValidatorPrice.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorPriceList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorPriceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.validatorPrices.push(ValidatorPrice.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ValidatorPriceList>): ValidatorPriceList {
    const message = createBaseValidatorPriceList();
    message.validator = object.validator ?? "";
    message.validatorPrices = object.validatorPrices?.map(e => ValidatorPrice.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorPriceListAmino): ValidatorPriceList {
    const message = createBaseValidatorPriceList();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    message.validatorPrices = object.validator_prices?.map(e => ValidatorPrice.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ValidatorPriceList): ValidatorPriceListAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    if (message.validatorPrices) {
      obj.validator_prices = message.validatorPrices.map(e => e ? ValidatorPrice.toAmino(e) : undefined);
    } else {
      obj.validator_prices = message.validatorPrices;
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorPriceListAminoMsg): ValidatorPriceList {
    return ValidatorPriceList.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorPriceListProtoMsg): ValidatorPriceList {
    return ValidatorPriceList.decode(message.value);
  },
  toProto(message: ValidatorPriceList): Uint8Array {
    return ValidatorPriceList.encode(message).finish();
  },
  toProtoMsg(message: ValidatorPriceList): ValidatorPriceListProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.ValidatorPriceList",
      value: ValidatorPriceList.encode(message).finish()
    };
  }
};
function createBaseReferenceSourceConfig(): ReferenceSourceConfig {
  return {
    registryIpfsHash: "",
    registryVersion: ""
  };
}
export const ReferenceSourceConfig = {
  typeUrl: "/band.feeds.v1beta1.ReferenceSourceConfig",
  encode(message: ReferenceSourceConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.registryIpfsHash !== "") {
      writer.uint32(10).string(message.registryIpfsHash);
    }
    if (message.registryVersion !== "") {
      writer.uint32(18).string(message.registryVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReferenceSourceConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReferenceSourceConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registryIpfsHash = reader.string();
          break;
        case 2:
          message.registryVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ReferenceSourceConfig>): ReferenceSourceConfig {
    const message = createBaseReferenceSourceConfig();
    message.registryIpfsHash = object.registryIpfsHash ?? "";
    message.registryVersion = object.registryVersion ?? "";
    return message;
  },
  fromAmino(object: ReferenceSourceConfigAmino): ReferenceSourceConfig {
    const message = createBaseReferenceSourceConfig();
    if (object.registry_ipfs_hash !== undefined && object.registry_ipfs_hash !== null) {
      message.registryIpfsHash = object.registry_ipfs_hash;
    }
    if (object.registry_version !== undefined && object.registry_version !== null) {
      message.registryVersion = object.registry_version;
    }
    return message;
  },
  toAmino(message: ReferenceSourceConfig): ReferenceSourceConfigAmino {
    const obj: any = {};
    obj.registry_ipfs_hash = message.registryIpfsHash === "" ? undefined : message.registryIpfsHash;
    obj.registry_version = message.registryVersion === "" ? undefined : message.registryVersion;
    return obj;
  },
  fromAminoMsg(object: ReferenceSourceConfigAminoMsg): ReferenceSourceConfig {
    return ReferenceSourceConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: ReferenceSourceConfigProtoMsg): ReferenceSourceConfig {
    return ReferenceSourceConfig.decode(message.value);
  },
  toProto(message: ReferenceSourceConfig): Uint8Array {
    return ReferenceSourceConfig.encode(message).finish();
  },
  toProtoMsg(message: ReferenceSourceConfig): ReferenceSourceConfigProtoMsg {
    return {
      typeUrl: "/band.feeds.v1beta1.ReferenceSourceConfig",
      value: ReferenceSourceConfig.encode(message).finish()
    };
  }
};