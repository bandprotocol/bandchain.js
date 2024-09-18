// package: feeds.v1beta1
// file: feeds/v1beta1/feeds.proto

import * as jspb from "google-protobuf";
import * as cosmos_proto_cosmos_pb from "../../cosmos_proto/cosmos_pb";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";

export class Signal extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPower(): number;
  setPower(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signal.AsObject;
  static toObject(includeInstance: boolean, msg: Signal): Signal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Signal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signal;
  static deserializeBinaryFromReader(message: Signal, reader: jspb.BinaryReader): Signal;
}

export namespace Signal {
  export type AsObject = {
    id: string,
    power: number,
  }
}

export class DelegatorSignals extends jspb.Message {
  getDelegator(): string;
  setDelegator(value: string): void;

  clearSignalsList(): void;
  getSignalsList(): Array<Signal>;
  setSignalsList(value: Array<Signal>): void;
  addSignals(value?: Signal, index?: number): Signal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelegatorSignals.AsObject;
  static toObject(includeInstance: boolean, msg: DelegatorSignals): DelegatorSignals.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DelegatorSignals, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelegatorSignals;
  static deserializeBinaryFromReader(message: DelegatorSignals, reader: jspb.BinaryReader): DelegatorSignals;
}

export namespace DelegatorSignals {
  export type AsObject = {
    delegator: string,
    signalsList: Array<Signal.AsObject>,
  }
}

export class Feed extends jspb.Message {
  getSignalId(): string;
  setSignalId(value: string): void;

  getPower(): number;
  setPower(value: number): void;

  getInterval(): number;
  setInterval(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Feed.AsObject;
  static toObject(includeInstance: boolean, msg: Feed): Feed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Feed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Feed;
  static deserializeBinaryFromReader(message: Feed, reader: jspb.BinaryReader): Feed;
}

export namespace Feed {
  export type AsObject = {
    signalId: string,
    power: number,
    interval: number,
  }
}

export class FeedWithDeviation extends jspb.Message {
  getSignalId(): string;
  setSignalId(value: string): void;

  getPower(): number;
  setPower(value: number): void;

  getInterval(): number;
  setInterval(value: number): void;

  getDeviationBasisPoint(): number;
  setDeviationBasisPoint(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedWithDeviation.AsObject;
  static toObject(includeInstance: boolean, msg: FeedWithDeviation): FeedWithDeviation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedWithDeviation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedWithDeviation;
  static deserializeBinaryFromReader(message: FeedWithDeviation, reader: jspb.BinaryReader): FeedWithDeviation;
}

export namespace FeedWithDeviation {
  export type AsObject = {
    signalId: string,
    power: number,
    interval: number,
    deviationBasisPoint: number,
  }
}

export class CurrentFeeds extends jspb.Message {
  clearFeedsList(): void;
  getFeedsList(): Array<Feed>;
  setFeedsList(value: Array<Feed>): void;
  addFeeds(value?: Feed, index?: number): Feed;

  getLastUpdateTimestamp(): number;
  setLastUpdateTimestamp(value: number): void;

  getLastUpdateBlock(): number;
  setLastUpdateBlock(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentFeeds.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentFeeds): CurrentFeeds.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrentFeeds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentFeeds;
  static deserializeBinaryFromReader(message: CurrentFeeds, reader: jspb.BinaryReader): CurrentFeeds;
}

export namespace CurrentFeeds {
  export type AsObject = {
    feedsList: Array<Feed.AsObject>,
    lastUpdateTimestamp: number,
    lastUpdateBlock: number,
  }
}

export class CurrentFeedWithDeviations extends jspb.Message {
  clearFeedsList(): void;
  getFeedsList(): Array<FeedWithDeviation>;
  setFeedsList(value: Array<FeedWithDeviation>): void;
  addFeeds(value?: FeedWithDeviation, index?: number): FeedWithDeviation;

  getLastUpdateTimestamp(): number;
  setLastUpdateTimestamp(value: number): void;

  getLastUpdateBlock(): number;
  setLastUpdateBlock(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentFeedWithDeviations.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentFeedWithDeviations): CurrentFeedWithDeviations.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrentFeedWithDeviations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentFeedWithDeviations;
  static deserializeBinaryFromReader(message: CurrentFeedWithDeviations, reader: jspb.BinaryReader): CurrentFeedWithDeviations;
}

export namespace CurrentFeedWithDeviations {
  export type AsObject = {
    feedsList: Array<FeedWithDeviation.AsObject>,
    lastUpdateTimestamp: number,
    lastUpdateBlock: number,
  }
}

export class Price extends jspb.Message {
  getPriceStatus(): PriceStatusMap[keyof PriceStatusMap];
  setPriceStatus(value: PriceStatusMap[keyof PriceStatusMap]): void;

  getSignalId(): string;
  setSignalId(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Price.AsObject;
  static toObject(includeInstance: boolean, msg: Price): Price.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Price, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Price;
  static deserializeBinaryFromReader(message: Price, reader: jspb.BinaryReader): Price;
}

export namespace Price {
  export type AsObject = {
    priceStatus: PriceStatusMap[keyof PriceStatusMap],
    signalId: string,
    price: number,
    timestamp: number,
  }
}

export class SignalPrice extends jspb.Message {
  getPriceStatus(): PriceStatusMap[keyof PriceStatusMap];
  setPriceStatus(value: PriceStatusMap[keyof PriceStatusMap]): void;

  getSignalId(): string;
  setSignalId(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignalPrice.AsObject;
  static toObject(includeInstance: boolean, msg: SignalPrice): SignalPrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignalPrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignalPrice;
  static deserializeBinaryFromReader(message: SignalPrice, reader: jspb.BinaryReader): SignalPrice;
}

export namespace SignalPrice {
  export type AsObject = {
    priceStatus: PriceStatusMap[keyof PriceStatusMap],
    signalId: string,
    price: number,
  }
}

export class ValidatorPrice extends jspb.Message {
  getPriceStatus(): PriceStatusMap[keyof PriceStatusMap];
  setPriceStatus(value: PriceStatusMap[keyof PriceStatusMap]): void;

  getValidator(): string;
  setValidator(value: string): void;

  getSignalId(): string;
  setSignalId(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorPrice.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorPrice): ValidatorPrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidatorPrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorPrice;
  static deserializeBinaryFromReader(message: ValidatorPrice, reader: jspb.BinaryReader): ValidatorPrice;
}

export namespace ValidatorPrice {
  export type AsObject = {
    priceStatus: PriceStatusMap[keyof PriceStatusMap],
    validator: string,
    signalId: string,
    price: number,
    timestamp: number,
    blockHeight: number,
  }
}

export class ValidatorPriceList extends jspb.Message {
  getValidator(): string;
  setValidator(value: string): void;

  clearValidatorPricesList(): void;
  getValidatorPricesList(): Array<ValidatorPrice>;
  setValidatorPricesList(value: Array<ValidatorPrice>): void;
  addValidatorPrices(value?: ValidatorPrice, index?: number): ValidatorPrice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorPriceList.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorPriceList): ValidatorPriceList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidatorPriceList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorPriceList;
  static deserializeBinaryFromReader(message: ValidatorPriceList, reader: jspb.BinaryReader): ValidatorPriceList;
}

export namespace ValidatorPriceList {
  export type AsObject = {
    validator: string,
    validatorPricesList: Array<ValidatorPrice.AsObject>,
  }
}

export class ReferenceSourceConfig extends jspb.Message {
  getIpfsHash(): string;
  setIpfsHash(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReferenceSourceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ReferenceSourceConfig): ReferenceSourceConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReferenceSourceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReferenceSourceConfig;
  static deserializeBinaryFromReader(message: ReferenceSourceConfig, reader: jspb.BinaryReader): ReferenceSourceConfig;
}

export namespace ReferenceSourceConfig {
  export type AsObject = {
    ipfsHash: string,
    version: string,
  }
}

export interface PriceStatusMap {
  PRICE_STATUS_UNSPECIFIED: 0;
  PRICE_STATUS_UNSUPPORTED: 1;
  PRICE_STATUS_UNAVAILABLE: 2;
  PRICE_STATUS_AVAILABLE: 3;
}

export const PriceStatus: PriceStatusMap;

