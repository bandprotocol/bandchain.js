// package: ibc.applications.interchain_accounts.controller.v1
// file: ibc/applications/interchain_accounts/controller/v1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../../gogoproto/gogo_pb";
import * as ibc_applications_interchain_accounts_v1_packet_pb from "../../../../../ibc/applications/interchain_accounts/v1/packet_pb";
import * as ibc_applications_interchain_accounts_controller_v1_controller_pb from "../../../../../ibc/applications/interchain_accounts/controller/v1/controller_pb";
import * as cosmos_msg_v1_msg_pb from "../../../../../cosmos/msg/v1/msg_pb";
import * as ibc_core_channel_v1_channel_pb from "../../../../../ibc/core/channel/v1/channel_pb";

export class MsgRegisterInterchainAccount extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): void;

  getConnectionId(): string;
  setConnectionId(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getOrdering(): ibc_core_channel_v1_channel_pb.OrderMap[keyof ibc_core_channel_v1_channel_pb.OrderMap];
  setOrdering(value: ibc_core_channel_v1_channel_pb.OrderMap[keyof ibc_core_channel_v1_channel_pb.OrderMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRegisterInterchainAccount.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRegisterInterchainAccount): MsgRegisterInterchainAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRegisterInterchainAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRegisterInterchainAccount;
  static deserializeBinaryFromReader(message: MsgRegisterInterchainAccount, reader: jspb.BinaryReader): MsgRegisterInterchainAccount;
}

export namespace MsgRegisterInterchainAccount {
  export type AsObject = {
    owner: string,
    connectionId: string,
    version: string,
    ordering: ibc_core_channel_v1_channel_pb.OrderMap[keyof ibc_core_channel_v1_channel_pb.OrderMap],
  }
}

export class MsgRegisterInterchainAccountResponse extends jspb.Message {
  getChannelId(): string;
  setChannelId(value: string): void;

  getPortId(): string;
  setPortId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRegisterInterchainAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRegisterInterchainAccountResponse): MsgRegisterInterchainAccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRegisterInterchainAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRegisterInterchainAccountResponse;
  static deserializeBinaryFromReader(message: MsgRegisterInterchainAccountResponse, reader: jspb.BinaryReader): MsgRegisterInterchainAccountResponse;
}

export namespace MsgRegisterInterchainAccountResponse {
  export type AsObject = {
    channelId: string,
    portId: string,
  }
}

export class MsgSendTx extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): void;

  getConnectionId(): string;
  setConnectionId(value: string): void;

  hasPacketData(): boolean;
  clearPacketData(): void;
  getPacketData(): ibc_applications_interchain_accounts_v1_packet_pb.InterchainAccountPacketData | undefined;
  setPacketData(value?: ibc_applications_interchain_accounts_v1_packet_pb.InterchainAccountPacketData): void;

  getRelativeTimeout(): number;
  setRelativeTimeout(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSendTx.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSendTx): MsgSendTx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSendTx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSendTx;
  static deserializeBinaryFromReader(message: MsgSendTx, reader: jspb.BinaryReader): MsgSendTx;
}

export namespace MsgSendTx {
  export type AsObject = {
    owner: string,
    connectionId: string,
    packetData?: ibc_applications_interchain_accounts_v1_packet_pb.InterchainAccountPacketData.AsObject,
    relativeTimeout: number,
  }
}

export class MsgSendTxResponse extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSendTxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSendTxResponse): MsgSendTxResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSendTxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSendTxResponse;
  static deserializeBinaryFromReader(message: MsgSendTxResponse, reader: jspb.BinaryReader): MsgSendTxResponse;
}

export namespace MsgSendTxResponse {
  export type AsObject = {
    sequence: number,
  }
}

export class MsgUpdateParams extends jspb.Message {
  getSigner(): string;
  setSigner(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): ibc_applications_interchain_accounts_controller_v1_controller_pb.Params | undefined;
  setParams(value?: ibc_applications_interchain_accounts_controller_v1_controller_pb.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateParams.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateParams): MsgUpdateParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateParams;
  static deserializeBinaryFromReader(message: MsgUpdateParams, reader: jspb.BinaryReader): MsgUpdateParams;
}

export namespace MsgUpdateParams {
  export type AsObject = {
    signer: string,
    params?: ibc_applications_interchain_accounts_controller_v1_controller_pb.Params.AsObject,
  }
}

export class MsgUpdateParamsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateParamsResponse): MsgUpdateParamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateParamsResponse;
  static deserializeBinaryFromReader(message: MsgUpdateParamsResponse, reader: jspb.BinaryReader): MsgUpdateParamsResponse;
}

export namespace MsgUpdateParamsResponse {
  export type AsObject = {
  }
}

