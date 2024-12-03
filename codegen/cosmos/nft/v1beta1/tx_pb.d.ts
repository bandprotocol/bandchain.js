// package: cosmos.nft.v1beta1
// file: cosmos/nft/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";

export class MsgSend extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): void;

  getId(): string;
  setId(value: string): void;

  getSender(): string;
  setSender(value: string): void;

  getReceiver(): string;
  setReceiver(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSend.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSend): MsgSend.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSend;
  static deserializeBinaryFromReader(message: MsgSend, reader: jspb.BinaryReader): MsgSend;
}

export namespace MsgSend {
  export type AsObject = {
    classId: string,
    id: string,
    sender: string,
    receiver: string,
  }
}

export class MsgSendResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSendResponse): MsgSendResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSendResponse;
  static deserializeBinaryFromReader(message: MsgSendResponse, reader: jspb.BinaryReader): MsgSendResponse;
}

export namespace MsgSendResponse {
  export type AsObject = {
  }
}

