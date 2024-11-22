// package: ibc.applications.fee.v1
// file: ibc/applications/fee/v1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as ibc_applications_fee_v1_fee_pb from "../../../../ibc/applications/fee/v1/fee_pb";
import * as ibc_core_channel_v1_channel_pb from "../../../../ibc/core/channel/v1/channel_pb";

export class GenesisState extends jspb.Message {
  clearIdentifiedFeesList(): void;
  getIdentifiedFeesList(): Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees>;
  setIdentifiedFeesList(value: Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees>): void;
  addIdentifiedFees(value?: ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees, index?: number): ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees;

  clearFeeEnabledChannelsList(): void;
  getFeeEnabledChannelsList(): Array<FeeEnabledChannel>;
  setFeeEnabledChannelsList(value: Array<FeeEnabledChannel>): void;
  addFeeEnabledChannels(value?: FeeEnabledChannel, index?: number): FeeEnabledChannel;

  clearRegisteredPayeesList(): void;
  getRegisteredPayeesList(): Array<RegisteredPayee>;
  setRegisteredPayeesList(value: Array<RegisteredPayee>): void;
  addRegisteredPayees(value?: RegisteredPayee, index?: number): RegisteredPayee;

  clearRegisteredCounterpartyPayeesList(): void;
  getRegisteredCounterpartyPayeesList(): Array<RegisteredCounterpartyPayee>;
  setRegisteredCounterpartyPayeesList(value: Array<RegisteredCounterpartyPayee>): void;
  addRegisteredCounterpartyPayees(value?: RegisteredCounterpartyPayee, index?: number): RegisteredCounterpartyPayee;

  clearForwardRelayersList(): void;
  getForwardRelayersList(): Array<ForwardRelayerAddress>;
  setForwardRelayersList(value: Array<ForwardRelayerAddress>): void;
  addForwardRelayers(value?: ForwardRelayerAddress, index?: number): ForwardRelayerAddress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    identifiedFeesList: Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees.AsObject>,
    feeEnabledChannelsList: Array<FeeEnabledChannel.AsObject>,
    registeredPayeesList: Array<RegisteredPayee.AsObject>,
    registeredCounterpartyPayeesList: Array<RegisteredCounterpartyPayee.AsObject>,
    forwardRelayersList: Array<ForwardRelayerAddress.AsObject>,
  }
}

export class FeeEnabledChannel extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeEnabledChannel.AsObject;
  static toObject(includeInstance: boolean, msg: FeeEnabledChannel): FeeEnabledChannel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeeEnabledChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeEnabledChannel;
  static deserializeBinaryFromReader(message: FeeEnabledChannel, reader: jspb.BinaryReader): FeeEnabledChannel;
}

export namespace FeeEnabledChannel {
  export type AsObject = {
    portId: string,
    channelId: string,
  }
}

export class RegisteredPayee extends jspb.Message {
  getChannelId(): string;
  setChannelId(value: string): void;

  getRelayer(): string;
  setRelayer(value: string): void;

  getPayee(): string;
  setPayee(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisteredPayee.AsObject;
  static toObject(includeInstance: boolean, msg: RegisteredPayee): RegisteredPayee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisteredPayee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisteredPayee;
  static deserializeBinaryFromReader(message: RegisteredPayee, reader: jspb.BinaryReader): RegisteredPayee;
}

export namespace RegisteredPayee {
  export type AsObject = {
    channelId: string,
    relayer: string,
    payee: string,
  }
}

export class RegisteredCounterpartyPayee extends jspb.Message {
  getChannelId(): string;
  setChannelId(value: string): void;

  getRelayer(): string;
  setRelayer(value: string): void;

  getCounterpartyPayee(): string;
  setCounterpartyPayee(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisteredCounterpartyPayee.AsObject;
  static toObject(includeInstance: boolean, msg: RegisteredCounterpartyPayee): RegisteredCounterpartyPayee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisteredCounterpartyPayee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisteredCounterpartyPayee;
  static deserializeBinaryFromReader(message: RegisteredCounterpartyPayee, reader: jspb.BinaryReader): RegisteredCounterpartyPayee;
}

export namespace RegisteredCounterpartyPayee {
  export type AsObject = {
    channelId: string,
    relayer: string,
    counterpartyPayee: string,
  }
}

export class ForwardRelayerAddress extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  hasPacketId(): boolean;
  clearPacketId(): void;
  getPacketId(): ibc_core_channel_v1_channel_pb.PacketId | undefined;
  setPacketId(value?: ibc_core_channel_v1_channel_pb.PacketId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForwardRelayerAddress.AsObject;
  static toObject(includeInstance: boolean, msg: ForwardRelayerAddress): ForwardRelayerAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForwardRelayerAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForwardRelayerAddress;
  static deserializeBinaryFromReader(message: ForwardRelayerAddress, reader: jspb.BinaryReader): ForwardRelayerAddress;
}

export namespace ForwardRelayerAddress {
  export type AsObject = {
    address: string,
    packetId?: ibc_core_channel_v1_channel_pb.PacketId.AsObject,
  }
}

