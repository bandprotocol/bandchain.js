// package: ibc.core.channel.v1
// file: ibc/core/channel/v1/channel.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";

export class Channel extends jspb.Message {
  getState(): StateMap[keyof StateMap];
  setState(value: StateMap[keyof StateMap]): void;

  getOrdering(): OrderMap[keyof OrderMap];
  setOrdering(value: OrderMap[keyof OrderMap]): void;

  hasCounterparty(): boolean;
  clearCounterparty(): void;
  getCounterparty(): Counterparty | undefined;
  setCounterparty(value?: Counterparty): void;

  clearConnectionHopsList(): void;
  getConnectionHopsList(): Array<string>;
  setConnectionHopsList(value: Array<string>): void;
  addConnectionHops(value: string, index?: number): string;

  getVersion(): string;
  setVersion(value: string): void;

  getUpgradeSequence(): number;
  setUpgradeSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Channel.AsObject;
  static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Channel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Channel;
  static deserializeBinaryFromReader(message: Channel, reader: jspb.BinaryReader): Channel;
}

export namespace Channel {
  export type AsObject = {
    state: StateMap[keyof StateMap],
    ordering: OrderMap[keyof OrderMap],
    counterparty?: Counterparty.AsObject,
    connectionHopsList: Array<string>,
    version: string,
    upgradeSequence: number,
  }
}

export class IdentifiedChannel extends jspb.Message {
  getState(): StateMap[keyof StateMap];
  setState(value: StateMap[keyof StateMap]): void;

  getOrdering(): OrderMap[keyof OrderMap];
  setOrdering(value: OrderMap[keyof OrderMap]): void;

  hasCounterparty(): boolean;
  clearCounterparty(): void;
  getCounterparty(): Counterparty | undefined;
  setCounterparty(value?: Counterparty): void;

  clearConnectionHopsList(): void;
  getConnectionHopsList(): Array<string>;
  setConnectionHopsList(value: Array<string>): void;
  addConnectionHops(value: string, index?: number): string;

  getVersion(): string;
  setVersion(value: string): void;

  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getUpgradeSequence(): number;
  setUpgradeSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifiedChannel.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifiedChannel): IdentifiedChannel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentifiedChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifiedChannel;
  static deserializeBinaryFromReader(message: IdentifiedChannel, reader: jspb.BinaryReader): IdentifiedChannel;
}

export namespace IdentifiedChannel {
  export type AsObject = {
    state: StateMap[keyof StateMap],
    ordering: OrderMap[keyof OrderMap],
    counterparty?: Counterparty.AsObject,
    connectionHopsList: Array<string>,
    version: string,
    portId: string,
    channelId: string,
    upgradeSequence: number,
  }
}

export class Counterparty extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Counterparty.AsObject;
  static toObject(includeInstance: boolean, msg: Counterparty): Counterparty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Counterparty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Counterparty;
  static deserializeBinaryFromReader(message: Counterparty, reader: jspb.BinaryReader): Counterparty;
}

export namespace Counterparty {
  export type AsObject = {
    portId: string,
    channelId: string,
  }
}

export class Packet extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): void;

  getSourcePort(): string;
  setSourcePort(value: string): void;

  getSourceChannel(): string;
  setSourceChannel(value: string): void;

  getDestinationPort(): string;
  setDestinationPort(value: string): void;

  getDestinationChannel(): string;
  setDestinationChannel(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  hasTimeoutHeight(): boolean;
  clearTimeoutHeight(): void;
  getTimeoutHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setTimeoutHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getTimeoutTimestamp(): number;
  setTimeoutTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Packet.AsObject;
  static toObject(includeInstance: boolean, msg: Packet): Packet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Packet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Packet;
  static deserializeBinaryFromReader(message: Packet, reader: jspb.BinaryReader): Packet;
}

export namespace Packet {
  export type AsObject = {
    sequence: number,
    sourcePort: string,
    sourceChannel: string,
    destinationPort: string,
    destinationChannel: string,
    data: Uint8Array | string,
    timeoutHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    timeoutTimestamp: number,
  }
}

export class PacketState extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getSequence(): number;
  setSequence(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacketState.AsObject;
  static toObject(includeInstance: boolean, msg: PacketState): PacketState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PacketState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacketState;
  static deserializeBinaryFromReader(message: PacketState, reader: jspb.BinaryReader): PacketState;
}

export namespace PacketState {
  export type AsObject = {
    portId: string,
    channelId: string,
    sequence: number,
    data: Uint8Array | string,
  }
}

export class PacketId extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getSequence(): number;
  setSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacketId.AsObject;
  static toObject(includeInstance: boolean, msg: PacketId): PacketId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PacketId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacketId;
  static deserializeBinaryFromReader(message: PacketId, reader: jspb.BinaryReader): PacketId;
}

export namespace PacketId {
  export type AsObject = {
    portId: string,
    channelId: string,
    sequence: number,
  }
}

export class Acknowledgement extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): Uint8Array | string;
  getResult_asU8(): Uint8Array;
  getResult_asB64(): string;
  setResult(value: Uint8Array | string): void;

  hasError(): boolean;
  clearError(): void;
  getError(): string;
  setError(value: string): void;

  getResponseCase(): Acknowledgement.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Acknowledgement.AsObject;
  static toObject(includeInstance: boolean, msg: Acknowledgement): Acknowledgement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Acknowledgement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Acknowledgement;
  static deserializeBinaryFromReader(message: Acknowledgement, reader: jspb.BinaryReader): Acknowledgement;
}

export namespace Acknowledgement {
  export type AsObject = {
    result: Uint8Array | string,
    error: string,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    RESULT = 21,
    ERROR = 22,
  }
}

export class Timeout extends jspb.Message {
  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timeout.AsObject;
  static toObject(includeInstance: boolean, msg: Timeout): Timeout.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Timeout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timeout;
  static deserializeBinaryFromReader(message: Timeout, reader: jspb.BinaryReader): Timeout;
}

export namespace Timeout {
  export type AsObject = {
    height?: ibc_core_client_v1_client_pb.Height.AsObject,
    timestamp: number,
  }
}

export class Params extends jspb.Message {
  hasUpgradeTimeout(): boolean;
  clearUpgradeTimeout(): void;
  getUpgradeTimeout(): Timeout | undefined;
  setUpgradeTimeout(value?: Timeout): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    upgradeTimeout?: Timeout.AsObject,
  }
}

export interface StateMap {
  STATE_UNINITIALIZED_UNSPECIFIED: 0;
  STATE_INIT: 1;
  STATE_TRYOPEN: 2;
  STATE_OPEN: 3;
  STATE_CLOSED: 4;
  STATE_FLUSHING: 5;
  STATE_FLUSHCOMPLETE: 6;
}

export const State: StateMap;

export interface OrderMap {
  ORDER_NONE_UNSPECIFIED: 0;
  ORDER_UNORDERED: 1;
  ORDER_ORDERED: 2;
}

export const Order: OrderMap;

