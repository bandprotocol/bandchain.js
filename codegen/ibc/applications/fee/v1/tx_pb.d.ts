// package: ibc.applications.fee.v1
// file: ibc/applications/fee/v1/tx.proto

import * as jspb from "google-protobuf";
import * as amino_amino_pb from "../../../../amino/amino_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as ibc_applications_fee_v1_fee_pb from "../../../../ibc/applications/fee/v1/fee_pb";
import * as ibc_core_channel_v1_channel_pb from "../../../../ibc/core/channel/v1/channel_pb";
import * as cosmos_msg_v1_msg_pb from "../../../../cosmos/msg/v1/msg_pb";

export class MsgRegisterPayee extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getRelayer(): string;
  setRelayer(value: string): void;

  getPayee(): string;
  setPayee(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRegisterPayee.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRegisterPayee): MsgRegisterPayee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRegisterPayee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRegisterPayee;
  static deserializeBinaryFromReader(message: MsgRegisterPayee, reader: jspb.BinaryReader): MsgRegisterPayee;
}

export namespace MsgRegisterPayee {
  export type AsObject = {
    portId: string,
    channelId: string,
    relayer: string,
    payee: string,
  }
}

export class MsgRegisterPayeeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRegisterPayeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRegisterPayeeResponse): MsgRegisterPayeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRegisterPayeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRegisterPayeeResponse;
  static deserializeBinaryFromReader(message: MsgRegisterPayeeResponse, reader: jspb.BinaryReader): MsgRegisterPayeeResponse;
}

export namespace MsgRegisterPayeeResponse {
  export type AsObject = {
  }
}

export class MsgRegisterCounterpartyPayee extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getRelayer(): string;
  setRelayer(value: string): void;

  getCounterpartyPayee(): string;
  setCounterpartyPayee(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRegisterCounterpartyPayee.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRegisterCounterpartyPayee): MsgRegisterCounterpartyPayee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRegisterCounterpartyPayee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRegisterCounterpartyPayee;
  static deserializeBinaryFromReader(message: MsgRegisterCounterpartyPayee, reader: jspb.BinaryReader): MsgRegisterCounterpartyPayee;
}

export namespace MsgRegisterCounterpartyPayee {
  export type AsObject = {
    portId: string,
    channelId: string,
    relayer: string,
    counterpartyPayee: string,
  }
}

export class MsgRegisterCounterpartyPayeeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRegisterCounterpartyPayeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRegisterCounterpartyPayeeResponse): MsgRegisterCounterpartyPayeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRegisterCounterpartyPayeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRegisterCounterpartyPayeeResponse;
  static deserializeBinaryFromReader(message: MsgRegisterCounterpartyPayeeResponse, reader: jspb.BinaryReader): MsgRegisterCounterpartyPayeeResponse;
}

export namespace MsgRegisterCounterpartyPayeeResponse {
  export type AsObject = {
  }
}

export class MsgPayPacketFee extends jspb.Message {
  hasFee(): boolean;
  clearFee(): void;
  getFee(): ibc_applications_fee_v1_fee_pb.Fee | undefined;
  setFee(value?: ibc_applications_fee_v1_fee_pb.Fee): void;

  getSourcePortId(): string;
  setSourcePortId(value: string): void;

  getSourceChannelId(): string;
  setSourceChannelId(value: string): void;

  getSigner(): string;
  setSigner(value: string): void;

  clearRelayersList(): void;
  getRelayersList(): Array<string>;
  setRelayersList(value: Array<string>): void;
  addRelayers(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgPayPacketFee.AsObject;
  static toObject(includeInstance: boolean, msg: MsgPayPacketFee): MsgPayPacketFee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgPayPacketFee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgPayPacketFee;
  static deserializeBinaryFromReader(message: MsgPayPacketFee, reader: jspb.BinaryReader): MsgPayPacketFee;
}

export namespace MsgPayPacketFee {
  export type AsObject = {
    fee?: ibc_applications_fee_v1_fee_pb.Fee.AsObject,
    sourcePortId: string,
    sourceChannelId: string,
    signer: string,
    relayersList: Array<string>,
  }
}

export class MsgPayPacketFeeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgPayPacketFeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgPayPacketFeeResponse): MsgPayPacketFeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgPayPacketFeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgPayPacketFeeResponse;
  static deserializeBinaryFromReader(message: MsgPayPacketFeeResponse, reader: jspb.BinaryReader): MsgPayPacketFeeResponse;
}

export namespace MsgPayPacketFeeResponse {
  export type AsObject = {
  }
}

export class MsgPayPacketFeeAsync extends jspb.Message {
  hasPacketId(): boolean;
  clearPacketId(): void;
  getPacketId(): ibc_core_channel_v1_channel_pb.PacketId | undefined;
  setPacketId(value?: ibc_core_channel_v1_channel_pb.PacketId): void;

  hasPacketFee(): boolean;
  clearPacketFee(): void;
  getPacketFee(): ibc_applications_fee_v1_fee_pb.PacketFee | undefined;
  setPacketFee(value?: ibc_applications_fee_v1_fee_pb.PacketFee): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgPayPacketFeeAsync.AsObject;
  static toObject(includeInstance: boolean, msg: MsgPayPacketFeeAsync): MsgPayPacketFeeAsync.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgPayPacketFeeAsync, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgPayPacketFeeAsync;
  static deserializeBinaryFromReader(message: MsgPayPacketFeeAsync, reader: jspb.BinaryReader): MsgPayPacketFeeAsync;
}

export namespace MsgPayPacketFeeAsync {
  export type AsObject = {
    packetId?: ibc_core_channel_v1_channel_pb.PacketId.AsObject,
    packetFee?: ibc_applications_fee_v1_fee_pb.PacketFee.AsObject,
  }
}

export class MsgPayPacketFeeAsyncResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgPayPacketFeeAsyncResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgPayPacketFeeAsyncResponse): MsgPayPacketFeeAsyncResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgPayPacketFeeAsyncResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgPayPacketFeeAsyncResponse;
  static deserializeBinaryFromReader(message: MsgPayPacketFeeAsyncResponse, reader: jspb.BinaryReader): MsgPayPacketFeeAsyncResponse;
}

export namespace MsgPayPacketFeeAsyncResponse {
  export type AsObject = {
  }
}

