// package: ibc.core.channel.v1
// file: ibc/core/channel/v1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as cosmos_msg_v1_msg_pb from "../../../../cosmos/msg/v1/msg_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";
import * as ibc_core_channel_v1_channel_pb from "../../../../ibc/core/channel/v1/channel_pb";
import * as ibc_core_channel_v1_upgrade_pb from "../../../../ibc/core/channel/v1/upgrade_pb";

export class MsgChannelOpenInit extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): ibc_core_channel_v1_channel_pb.Channel | undefined;
  setChannel(value?: ibc_core_channel_v1_channel_pb.Channel): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenInit.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelOpenInit): MsgChannelOpenInit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelOpenInit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenInit;
  static deserializeBinaryFromReader(message: MsgChannelOpenInit, reader: jspb.BinaryReader): MsgChannelOpenInit;
}

export namespace MsgChannelOpenInit {
  export type AsObject = {
    portId: string,
    channel?: ibc_core_channel_v1_channel_pb.Channel.AsObject,
    signer: string,
  }
}

export class MsgChannelOpenInitResponse extends jspb.Message {
  getChannelId(): string;
  setChannelId(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenInitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelOpenInitResponse): MsgChannelOpenInitResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelOpenInitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenInitResponse;
  static deserializeBinaryFromReader(message: MsgChannelOpenInitResponse, reader: jspb.BinaryReader): MsgChannelOpenInitResponse;
}

export namespace MsgChannelOpenInitResponse {
  export type AsObject = {
    channelId: string,
    version: string,
  }
}

export class MsgChannelOpenTry extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getPreviousChannelId(): string;
  setPreviousChannelId(value: string): void;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): ibc_core_channel_v1_channel_pb.Channel | undefined;
  setChannel(value?: ibc_core_channel_v1_channel_pb.Channel): void;

  getCounterpartyVersion(): string;
  setCounterpartyVersion(value: string): void;

  getProofInit(): Uint8Array | string;
  getProofInit_asU8(): Uint8Array;
  getProofInit_asB64(): string;
  setProofInit(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenTry.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelOpenTry): MsgChannelOpenTry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelOpenTry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenTry;
  static deserializeBinaryFromReader(message: MsgChannelOpenTry, reader: jspb.BinaryReader): MsgChannelOpenTry;
}

export namespace MsgChannelOpenTry {
  export type AsObject = {
    portId: string,
    previousChannelId: string,
    channel?: ibc_core_channel_v1_channel_pb.Channel.AsObject,
    counterpartyVersion: string,
    proofInit: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgChannelOpenTryResponse extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenTryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelOpenTryResponse): MsgChannelOpenTryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelOpenTryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenTryResponse;
  static deserializeBinaryFromReader(message: MsgChannelOpenTryResponse, reader: jspb.BinaryReader): MsgChannelOpenTryResponse;
}

export namespace MsgChannelOpenTryResponse {
  export type AsObject = {
    version: string,
    channelId: string,
  }
}

export class MsgChannelOpenAck extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getCounterpartyChannelId(): string;
  setCounterpartyChannelId(value: string): void;

  getCounterpartyVersion(): string;
  setCounterpartyVersion(value: string): void;

  getProofTry(): Uint8Array | string;
  getProofTry_asU8(): Uint8Array;
  getProofTry_asB64(): string;
  setProofTry(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenAck.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelOpenAck): MsgChannelOpenAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelOpenAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenAck;
  static deserializeBinaryFromReader(message: MsgChannelOpenAck, reader: jspb.BinaryReader): MsgChannelOpenAck;
}

export namespace MsgChannelOpenAck {
  export type AsObject = {
    portId: string,
    channelId: string,
    counterpartyChannelId: string,
    counterpartyVersion: string,
    proofTry: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgChannelOpenAckResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenAckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelOpenAckResponse): MsgChannelOpenAckResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelOpenAckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenAckResponse;
  static deserializeBinaryFromReader(message: MsgChannelOpenAckResponse, reader: jspb.BinaryReader): MsgChannelOpenAckResponse;
}

export namespace MsgChannelOpenAckResponse {
  export type AsObject = {
  }
}

export class MsgChannelOpenConfirm extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getProofAck(): Uint8Array | string;
  getProofAck_asU8(): Uint8Array;
  getProofAck_asB64(): string;
  setProofAck(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenConfirm.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelOpenConfirm): MsgChannelOpenConfirm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelOpenConfirm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenConfirm;
  static deserializeBinaryFromReader(message: MsgChannelOpenConfirm, reader: jspb.BinaryReader): MsgChannelOpenConfirm;
}

export namespace MsgChannelOpenConfirm {
  export type AsObject = {
    portId: string,
    channelId: string,
    proofAck: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgChannelOpenConfirmResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenConfirmResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelOpenConfirmResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenConfirmResponse;
  static deserializeBinaryFromReader(message: MsgChannelOpenConfirmResponse, reader: jspb.BinaryReader): MsgChannelOpenConfirmResponse;
}

export namespace MsgChannelOpenConfirmResponse {
  export type AsObject = {
  }
}

export class MsgChannelCloseInit extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelCloseInit.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelCloseInit): MsgChannelCloseInit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelCloseInit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelCloseInit;
  static deserializeBinaryFromReader(message: MsgChannelCloseInit, reader: jspb.BinaryReader): MsgChannelCloseInit;
}

export namespace MsgChannelCloseInit {
  export type AsObject = {
    portId: string,
    channelId: string,
    signer: string,
  }
}

export class MsgChannelCloseInitResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelCloseInitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelCloseInitResponse): MsgChannelCloseInitResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelCloseInitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelCloseInitResponse;
  static deserializeBinaryFromReader(message: MsgChannelCloseInitResponse, reader: jspb.BinaryReader): MsgChannelCloseInitResponse;
}

export namespace MsgChannelCloseInitResponse {
  export type AsObject = {
  }
}

export class MsgChannelCloseConfirm extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getProofInit(): Uint8Array | string;
  getProofInit_asU8(): Uint8Array;
  getProofInit_asB64(): string;
  setProofInit(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  getCounterpartyUpgradeSequence(): number;
  setCounterpartyUpgradeSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelCloseConfirm.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelCloseConfirm): MsgChannelCloseConfirm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelCloseConfirm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelCloseConfirm;
  static deserializeBinaryFromReader(message: MsgChannelCloseConfirm, reader: jspb.BinaryReader): MsgChannelCloseConfirm;
}

export namespace MsgChannelCloseConfirm {
  export type AsObject = {
    portId: string,
    channelId: string,
    proofInit: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
    counterpartyUpgradeSequence: number,
  }
}

export class MsgChannelCloseConfirmResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelCloseConfirmResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelCloseConfirmResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelCloseConfirmResponse;
  static deserializeBinaryFromReader(message: MsgChannelCloseConfirmResponse, reader: jspb.BinaryReader): MsgChannelCloseConfirmResponse;
}

export namespace MsgChannelCloseConfirmResponse {
  export type AsObject = {
  }
}

export class MsgRecvPacket extends jspb.Message {
  hasPacket(): boolean;
  clearPacket(): void;
  getPacket(): ibc_core_channel_v1_channel_pb.Packet | undefined;
  setPacket(value?: ibc_core_channel_v1_channel_pb.Packet): void;

  getProofCommitment(): Uint8Array | string;
  getProofCommitment_asU8(): Uint8Array;
  getProofCommitment_asB64(): string;
  setProofCommitment(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRecvPacket.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRecvPacket): MsgRecvPacket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRecvPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRecvPacket;
  static deserializeBinaryFromReader(message: MsgRecvPacket, reader: jspb.BinaryReader): MsgRecvPacket;
}

export namespace MsgRecvPacket {
  export type AsObject = {
    packet?: ibc_core_channel_v1_channel_pb.Packet.AsObject,
    proofCommitment: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgRecvPacketResponse extends jspb.Message {
  getResult(): ResponseResultTypeMap[keyof ResponseResultTypeMap];
  setResult(value: ResponseResultTypeMap[keyof ResponseResultTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRecvPacketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRecvPacketResponse): MsgRecvPacketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRecvPacketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRecvPacketResponse;
  static deserializeBinaryFromReader(message: MsgRecvPacketResponse, reader: jspb.BinaryReader): MsgRecvPacketResponse;
}

export namespace MsgRecvPacketResponse {
  export type AsObject = {
    result: ResponseResultTypeMap[keyof ResponseResultTypeMap],
  }
}

export class MsgTimeout extends jspb.Message {
  hasPacket(): boolean;
  clearPacket(): void;
  getPacket(): ibc_core_channel_v1_channel_pb.Packet | undefined;
  setPacket(value?: ibc_core_channel_v1_channel_pb.Packet): void;

  getProofUnreceived(): Uint8Array | string;
  getProofUnreceived_asU8(): Uint8Array;
  getProofUnreceived_asB64(): string;
  setProofUnreceived(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getNextSequenceRecv(): number;
  setNextSequenceRecv(value: number): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTimeout.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTimeout): MsgTimeout.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgTimeout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTimeout;
  static deserializeBinaryFromReader(message: MsgTimeout, reader: jspb.BinaryReader): MsgTimeout;
}

export namespace MsgTimeout {
  export type AsObject = {
    packet?: ibc_core_channel_v1_channel_pb.Packet.AsObject,
    proofUnreceived: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    nextSequenceRecv: number,
    signer: string,
  }
}

export class MsgTimeoutResponse extends jspb.Message {
  getResult(): ResponseResultTypeMap[keyof ResponseResultTypeMap];
  setResult(value: ResponseResultTypeMap[keyof ResponseResultTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTimeoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTimeoutResponse): MsgTimeoutResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgTimeoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTimeoutResponse;
  static deserializeBinaryFromReader(message: MsgTimeoutResponse, reader: jspb.BinaryReader): MsgTimeoutResponse;
}

export namespace MsgTimeoutResponse {
  export type AsObject = {
    result: ResponseResultTypeMap[keyof ResponseResultTypeMap],
  }
}

export class MsgTimeoutOnClose extends jspb.Message {
  hasPacket(): boolean;
  clearPacket(): void;
  getPacket(): ibc_core_channel_v1_channel_pb.Packet | undefined;
  setPacket(value?: ibc_core_channel_v1_channel_pb.Packet): void;

  getProofUnreceived(): Uint8Array | string;
  getProofUnreceived_asU8(): Uint8Array;
  getProofUnreceived_asB64(): string;
  setProofUnreceived(value: Uint8Array | string): void;

  getProofClose(): Uint8Array | string;
  getProofClose_asU8(): Uint8Array;
  getProofClose_asB64(): string;
  setProofClose(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getNextSequenceRecv(): number;
  setNextSequenceRecv(value: number): void;

  getSigner(): string;
  setSigner(value: string): void;

  getCounterpartyUpgradeSequence(): number;
  setCounterpartyUpgradeSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTimeoutOnClose.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTimeoutOnClose): MsgTimeoutOnClose.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgTimeoutOnClose, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTimeoutOnClose;
  static deserializeBinaryFromReader(message: MsgTimeoutOnClose, reader: jspb.BinaryReader): MsgTimeoutOnClose;
}

export namespace MsgTimeoutOnClose {
  export type AsObject = {
    packet?: ibc_core_channel_v1_channel_pb.Packet.AsObject,
    proofUnreceived: Uint8Array | string,
    proofClose: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    nextSequenceRecv: number,
    signer: string,
    counterpartyUpgradeSequence: number,
  }
}

export class MsgTimeoutOnCloseResponse extends jspb.Message {
  getResult(): ResponseResultTypeMap[keyof ResponseResultTypeMap];
  setResult(value: ResponseResultTypeMap[keyof ResponseResultTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTimeoutOnCloseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgTimeoutOnCloseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTimeoutOnCloseResponse;
  static deserializeBinaryFromReader(message: MsgTimeoutOnCloseResponse, reader: jspb.BinaryReader): MsgTimeoutOnCloseResponse;
}

export namespace MsgTimeoutOnCloseResponse {
  export type AsObject = {
    result: ResponseResultTypeMap[keyof ResponseResultTypeMap],
  }
}

export class MsgAcknowledgement extends jspb.Message {
  hasPacket(): boolean;
  clearPacket(): void;
  getPacket(): ibc_core_channel_v1_channel_pb.Packet | undefined;
  setPacket(value?: ibc_core_channel_v1_channel_pb.Packet): void;

  getAcknowledgement(): Uint8Array | string;
  getAcknowledgement_asU8(): Uint8Array;
  getAcknowledgement_asB64(): string;
  setAcknowledgement(value: Uint8Array | string): void;

  getProofAcked(): Uint8Array | string;
  getProofAcked_asU8(): Uint8Array;
  getProofAcked_asB64(): string;
  setProofAcked(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgAcknowledgement.AsObject;
  static toObject(includeInstance: boolean, msg: MsgAcknowledgement): MsgAcknowledgement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgAcknowledgement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgAcknowledgement;
  static deserializeBinaryFromReader(message: MsgAcknowledgement, reader: jspb.BinaryReader): MsgAcknowledgement;
}

export namespace MsgAcknowledgement {
  export type AsObject = {
    packet?: ibc_core_channel_v1_channel_pb.Packet.AsObject,
    acknowledgement: Uint8Array | string,
    proofAcked: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgAcknowledgementResponse extends jspb.Message {
  getResult(): ResponseResultTypeMap[keyof ResponseResultTypeMap];
  setResult(value: ResponseResultTypeMap[keyof ResponseResultTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgAcknowledgementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgAcknowledgementResponse): MsgAcknowledgementResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgAcknowledgementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgAcknowledgementResponse;
  static deserializeBinaryFromReader(message: MsgAcknowledgementResponse, reader: jspb.BinaryReader): MsgAcknowledgementResponse;
}

export namespace MsgAcknowledgementResponse {
  export type AsObject = {
    result: ResponseResultTypeMap[keyof ResponseResultTypeMap],
  }
}

export class MsgChannelUpgradeInit extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  hasFields(): boolean;
  clearFields(): void;
  getFields(): ibc_core_channel_v1_upgrade_pb.UpgradeFields | undefined;
  setFields(value?: ibc_core_channel_v1_upgrade_pb.UpgradeFields): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelUpgradeInit.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelUpgradeInit): MsgChannelUpgradeInit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelUpgradeInit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelUpgradeInit;
  static deserializeBinaryFromReader(message: MsgChannelUpgradeInit, reader: jspb.BinaryReader): MsgChannelUpgradeInit;
}

export namespace MsgChannelUpgradeInit {
  export type AsObject = {
    portId: string,
    channelId: string,
    fields?: ibc_core_channel_v1_upgrade_pb.UpgradeFields.AsObject,
    signer: string,
  }
}

export class MsgChannelUpgradeInitResponse extends jspb.Message {
  hasUpgrade(): boolean;
  clearUpgrade(): void;
  getUpgrade(): ibc_core_channel_v1_upgrade_pb.Upgrade | undefined;
  setUpgrade(value?: ibc_core_channel_v1_upgrade_pb.Upgrade): void;

  getUpgradeSequence(): number;
  setUpgradeSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelUpgradeInitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelUpgradeInitResponse): MsgChannelUpgradeInitResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelUpgradeInitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelUpgradeInitResponse;
  static deserializeBinaryFromReader(message: MsgChannelUpgradeInitResponse, reader: jspb.BinaryReader): MsgChannelUpgradeInitResponse;
}

export namespace MsgChannelUpgradeInitResponse {
  export type AsObject = {
    upgrade?: ibc_core_channel_v1_upgrade_pb.Upgrade.AsObject,
    upgradeSequence: number,
  }
}

export class MsgChannelUpgradeTry extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  clearProposedUpgradeConnectionHopsList(): void;
  getProposedUpgradeConnectionHopsList(): Array<string>;
  setProposedUpgradeConnectionHopsList(value: Array<string>): void;
  addProposedUpgradeConnectionHops(value: string, index?: number): string;

  hasCounterpartyUpgradeFields(): boolean;
  clearCounterpartyUpgradeFields(): void;
  getCounterpartyUpgradeFields(): ibc_core_channel_v1_upgrade_pb.UpgradeFields | undefined;
  setCounterpartyUpgradeFields(value?: ibc_core_channel_v1_upgrade_pb.UpgradeFields): void;

  getCounterpartyUpgradeSequence(): number;
  setCounterpartyUpgradeSequence(value: number): void;

  getProofChannel(): Uint8Array | string;
  getProofChannel_asU8(): Uint8Array;
  getProofChannel_asB64(): string;
  setProofChannel(value: Uint8Array | string): void;

  getProofUpgrade(): Uint8Array | string;
  getProofUpgrade_asU8(): Uint8Array;
  getProofUpgrade_asB64(): string;
  setProofUpgrade(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelUpgradeTry.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelUpgradeTry): MsgChannelUpgradeTry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelUpgradeTry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelUpgradeTry;
  static deserializeBinaryFromReader(message: MsgChannelUpgradeTry, reader: jspb.BinaryReader): MsgChannelUpgradeTry;
}

export namespace MsgChannelUpgradeTry {
  export type AsObject = {
    portId: string,
    channelId: string,
    proposedUpgradeConnectionHopsList: Array<string>,
    counterpartyUpgradeFields?: ibc_core_channel_v1_upgrade_pb.UpgradeFields.AsObject,
    counterpartyUpgradeSequence: number,
    proofChannel: Uint8Array | string,
    proofUpgrade: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgChannelUpgradeTryResponse extends jspb.Message {
  hasUpgrade(): boolean;
  clearUpgrade(): void;
  getUpgrade(): ibc_core_channel_v1_upgrade_pb.Upgrade | undefined;
  setUpgrade(value?: ibc_core_channel_v1_upgrade_pb.Upgrade): void;

  getUpgradeSequence(): number;
  setUpgradeSequence(value: number): void;

  getResult(): ResponseResultTypeMap[keyof ResponseResultTypeMap];
  setResult(value: ResponseResultTypeMap[keyof ResponseResultTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelUpgradeTryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelUpgradeTryResponse): MsgChannelUpgradeTryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelUpgradeTryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelUpgradeTryResponse;
  static deserializeBinaryFromReader(message: MsgChannelUpgradeTryResponse, reader: jspb.BinaryReader): MsgChannelUpgradeTryResponse;
}

export namespace MsgChannelUpgradeTryResponse {
  export type AsObject = {
    upgrade?: ibc_core_channel_v1_upgrade_pb.Upgrade.AsObject,
    upgradeSequence: number,
    result: ResponseResultTypeMap[keyof ResponseResultTypeMap],
  }
}

export class MsgChannelUpgradeAck extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  hasCounterpartyUpgrade(): boolean;
  clearCounterpartyUpgrade(): void;
  getCounterpartyUpgrade(): ibc_core_channel_v1_upgrade_pb.Upgrade | undefined;
  setCounterpartyUpgrade(value?: ibc_core_channel_v1_upgrade_pb.Upgrade): void;

  getProofChannel(): Uint8Array | string;
  getProofChannel_asU8(): Uint8Array;
  getProofChannel_asB64(): string;
  setProofChannel(value: Uint8Array | string): void;

  getProofUpgrade(): Uint8Array | string;
  getProofUpgrade_asU8(): Uint8Array;
  getProofUpgrade_asB64(): string;
  setProofUpgrade(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelUpgradeAck.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelUpgradeAck): MsgChannelUpgradeAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelUpgradeAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelUpgradeAck;
  static deserializeBinaryFromReader(message: MsgChannelUpgradeAck, reader: jspb.BinaryReader): MsgChannelUpgradeAck;
}

export namespace MsgChannelUpgradeAck {
  export type AsObject = {
    portId: string,
    channelId: string,
    counterpartyUpgrade?: ibc_core_channel_v1_upgrade_pb.Upgrade.AsObject,
    proofChannel: Uint8Array | string,
    proofUpgrade: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgChannelUpgradeAckResponse extends jspb.Message {
  getResult(): ResponseResultTypeMap[keyof ResponseResultTypeMap];
  setResult(value: ResponseResultTypeMap[keyof ResponseResultTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelUpgradeAckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelUpgradeAckResponse): MsgChannelUpgradeAckResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelUpgradeAckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelUpgradeAckResponse;
  static deserializeBinaryFromReader(message: MsgChannelUpgradeAckResponse, reader: jspb.BinaryReader): MsgChannelUpgradeAckResponse;
}

export namespace MsgChannelUpgradeAckResponse {
  export type AsObject = {
    result: ResponseResultTypeMap[keyof ResponseResultTypeMap],
  }
}

export class MsgChannelUpgradeConfirm extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getCounterpartyChannelState(): ibc_core_channel_v1_channel_pb.StateMap[keyof ibc_core_channel_v1_channel_pb.StateMap];
  setCounterpartyChannelState(value: ibc_core_channel_v1_channel_pb.StateMap[keyof ibc_core_channel_v1_channel_pb.StateMap]): void;

  hasCounterpartyUpgrade(): boolean;
  clearCounterpartyUpgrade(): void;
  getCounterpartyUpgrade(): ibc_core_channel_v1_upgrade_pb.Upgrade | undefined;
  setCounterpartyUpgrade(value?: ibc_core_channel_v1_upgrade_pb.Upgrade): void;

  getProofChannel(): Uint8Array | string;
  getProofChannel_asU8(): Uint8Array;
  getProofChannel_asB64(): string;
  setProofChannel(value: Uint8Array | string): void;

  getProofUpgrade(): Uint8Array | string;
  getProofUpgrade_asU8(): Uint8Array;
  getProofUpgrade_asB64(): string;
  setProofUpgrade(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelUpgradeConfirm.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelUpgradeConfirm): MsgChannelUpgradeConfirm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelUpgradeConfirm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelUpgradeConfirm;
  static deserializeBinaryFromReader(message: MsgChannelUpgradeConfirm, reader: jspb.BinaryReader): MsgChannelUpgradeConfirm;
}

export namespace MsgChannelUpgradeConfirm {
  export type AsObject = {
    portId: string,
    channelId: string,
    counterpartyChannelState: ibc_core_channel_v1_channel_pb.StateMap[keyof ibc_core_channel_v1_channel_pb.StateMap],
    counterpartyUpgrade?: ibc_core_channel_v1_upgrade_pb.Upgrade.AsObject,
    proofChannel: Uint8Array | string,
    proofUpgrade: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgChannelUpgradeConfirmResponse extends jspb.Message {
  getResult(): ResponseResultTypeMap[keyof ResponseResultTypeMap];
  setResult(value: ResponseResultTypeMap[keyof ResponseResultTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelUpgradeConfirmResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelUpgradeConfirmResponse): MsgChannelUpgradeConfirmResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelUpgradeConfirmResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelUpgradeConfirmResponse;
  static deserializeBinaryFromReader(message: MsgChannelUpgradeConfirmResponse, reader: jspb.BinaryReader): MsgChannelUpgradeConfirmResponse;
}

export namespace MsgChannelUpgradeConfirmResponse {
  export type AsObject = {
    result: ResponseResultTypeMap[keyof ResponseResultTypeMap],
  }
}

export class MsgChannelUpgradeOpen extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getCounterpartyChannelState(): ibc_core_channel_v1_channel_pb.StateMap[keyof ibc_core_channel_v1_channel_pb.StateMap];
  setCounterpartyChannelState(value: ibc_core_channel_v1_channel_pb.StateMap[keyof ibc_core_channel_v1_channel_pb.StateMap]): void;

  getCounterpartyUpgradeSequence(): number;
  setCounterpartyUpgradeSequence(value: number): void;

  getProofChannel(): Uint8Array | string;
  getProofChannel_asU8(): Uint8Array;
  getProofChannel_asB64(): string;
  setProofChannel(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelUpgradeOpen.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelUpgradeOpen): MsgChannelUpgradeOpen.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelUpgradeOpen, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelUpgradeOpen;
  static deserializeBinaryFromReader(message: MsgChannelUpgradeOpen, reader: jspb.BinaryReader): MsgChannelUpgradeOpen;
}

export namespace MsgChannelUpgradeOpen {
  export type AsObject = {
    portId: string,
    channelId: string,
    counterpartyChannelState: ibc_core_channel_v1_channel_pb.StateMap[keyof ibc_core_channel_v1_channel_pb.StateMap],
    counterpartyUpgradeSequence: number,
    proofChannel: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgChannelUpgradeOpenResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelUpgradeOpenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelUpgradeOpenResponse): MsgChannelUpgradeOpenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelUpgradeOpenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelUpgradeOpenResponse;
  static deserializeBinaryFromReader(message: MsgChannelUpgradeOpenResponse, reader: jspb.BinaryReader): MsgChannelUpgradeOpenResponse;
}

export namespace MsgChannelUpgradeOpenResponse {
  export type AsObject = {
  }
}

export class MsgChannelUpgradeTimeout extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  hasCounterpartyChannel(): boolean;
  clearCounterpartyChannel(): void;
  getCounterpartyChannel(): ibc_core_channel_v1_channel_pb.Channel | undefined;
  setCounterpartyChannel(value?: ibc_core_channel_v1_channel_pb.Channel): void;

  getProofChannel(): Uint8Array | string;
  getProofChannel_asU8(): Uint8Array;
  getProofChannel_asB64(): string;
  setProofChannel(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelUpgradeTimeout.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelUpgradeTimeout): MsgChannelUpgradeTimeout.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelUpgradeTimeout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelUpgradeTimeout;
  static deserializeBinaryFromReader(message: MsgChannelUpgradeTimeout, reader: jspb.BinaryReader): MsgChannelUpgradeTimeout;
}

export namespace MsgChannelUpgradeTimeout {
  export type AsObject = {
    portId: string,
    channelId: string,
    counterpartyChannel?: ibc_core_channel_v1_channel_pb.Channel.AsObject,
    proofChannel: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgChannelUpgradeTimeoutResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelUpgradeTimeoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelUpgradeTimeoutResponse): MsgChannelUpgradeTimeoutResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelUpgradeTimeoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelUpgradeTimeoutResponse;
  static deserializeBinaryFromReader(message: MsgChannelUpgradeTimeoutResponse, reader: jspb.BinaryReader): MsgChannelUpgradeTimeoutResponse;
}

export namespace MsgChannelUpgradeTimeoutResponse {
  export type AsObject = {
  }
}

export class MsgChannelUpgradeCancel extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  hasErrorReceipt(): boolean;
  clearErrorReceipt(): void;
  getErrorReceipt(): ibc_core_channel_v1_upgrade_pb.ErrorReceipt | undefined;
  setErrorReceipt(value?: ibc_core_channel_v1_upgrade_pb.ErrorReceipt): void;

  getProofErrorReceipt(): Uint8Array | string;
  getProofErrorReceipt_asU8(): Uint8Array;
  getProofErrorReceipt_asB64(): string;
  setProofErrorReceipt(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelUpgradeCancel.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelUpgradeCancel): MsgChannelUpgradeCancel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelUpgradeCancel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelUpgradeCancel;
  static deserializeBinaryFromReader(message: MsgChannelUpgradeCancel, reader: jspb.BinaryReader): MsgChannelUpgradeCancel;
}

export namespace MsgChannelUpgradeCancel {
  export type AsObject = {
    portId: string,
    channelId: string,
    errorReceipt?: ibc_core_channel_v1_upgrade_pb.ErrorReceipt.AsObject,
    proofErrorReceipt: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgChannelUpgradeCancelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelUpgradeCancelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelUpgradeCancelResponse): MsgChannelUpgradeCancelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelUpgradeCancelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelUpgradeCancelResponse;
  static deserializeBinaryFromReader(message: MsgChannelUpgradeCancelResponse, reader: jspb.BinaryReader): MsgChannelUpgradeCancelResponse;
}

export namespace MsgChannelUpgradeCancelResponse {
  export type AsObject = {
  }
}

export class MsgUpdateParams extends jspb.Message {
  getAuthority(): string;
  setAuthority(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): ibc_core_channel_v1_channel_pb.Params | undefined;
  setParams(value?: ibc_core_channel_v1_channel_pb.Params): void;

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
    authority: string,
    params?: ibc_core_channel_v1_channel_pb.Params.AsObject,
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

export class MsgPruneAcknowledgements extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgPruneAcknowledgements.AsObject;
  static toObject(includeInstance: boolean, msg: MsgPruneAcknowledgements): MsgPruneAcknowledgements.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgPruneAcknowledgements, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgPruneAcknowledgements;
  static deserializeBinaryFromReader(message: MsgPruneAcknowledgements, reader: jspb.BinaryReader): MsgPruneAcknowledgements;
}

export namespace MsgPruneAcknowledgements {
  export type AsObject = {
    portId: string,
    channelId: string,
    limit: number,
    signer: string,
  }
}

export class MsgPruneAcknowledgementsResponse extends jspb.Message {
  getTotalPrunedSequences(): number;
  setTotalPrunedSequences(value: number): void;

  getTotalRemainingSequences(): number;
  setTotalRemainingSequences(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgPruneAcknowledgementsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgPruneAcknowledgementsResponse): MsgPruneAcknowledgementsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgPruneAcknowledgementsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgPruneAcknowledgementsResponse;
  static deserializeBinaryFromReader(message: MsgPruneAcknowledgementsResponse, reader: jspb.BinaryReader): MsgPruneAcknowledgementsResponse;
}

export namespace MsgPruneAcknowledgementsResponse {
  export type AsObject = {
    totalPrunedSequences: number,
    totalRemainingSequences: number,
  }
}

export interface ResponseResultTypeMap {
  RESPONSE_RESULT_TYPE_UNSPECIFIED: 0;
  RESPONSE_RESULT_TYPE_NOOP: 1;
  RESPONSE_RESULT_TYPE_SUCCESS: 2;
  RESPONSE_RESULT_TYPE_FAILURE: 3;
}

export const ResponseResultType: ResponseResultTypeMap;

