// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/tx.proto

import * as jspb from "google-protobuf";
import * as amino_amino_pb from "../../../../amino/amino_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as cosmos_msg_v1_msg_pb from "../../../../cosmos/msg/v1/msg_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../../cosmos/base/v1beta1/coin_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";
import * as ibc_applications_transfer_v1_transfer_pb from "../../../../ibc/applications/transfer/v1/transfer_pb";

export class MsgTransfer extends jspb.Message {
  getSourcePort(): string;
  setSourcePort(value: string): void;

  getSourceChannel(): string;
  setSourceChannel(value: string): void;

  hasToken(): boolean;
  clearToken(): void;
  getToken(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setToken(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  getSender(): string;
  setSender(value: string): void;

  getReceiver(): string;
  setReceiver(value: string): void;

  hasTimeoutHeight(): boolean;
  clearTimeoutHeight(): void;
  getTimeoutHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setTimeoutHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getTimeoutTimestamp(): number;
  setTimeoutTimestamp(value: number): void;

  getMemo(): string;
  setMemo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTransfer.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTransfer): MsgTransfer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgTransfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTransfer;
  static deserializeBinaryFromReader(message: MsgTransfer, reader: jspb.BinaryReader): MsgTransfer;
}

export namespace MsgTransfer {
  export type AsObject = {
    sourcePort: string,
    sourceChannel: string,
    token?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
    sender: string,
    receiver: string,
    timeoutHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    timeoutTimestamp: number,
    memo: string,
  }
}

export class MsgTransferResponse extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTransferResponse): MsgTransferResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTransferResponse;
  static deserializeBinaryFromReader(message: MsgTransferResponse, reader: jspb.BinaryReader): MsgTransferResponse;
}

export namespace MsgTransferResponse {
  export type AsObject = {
    sequence: number,
  }
}

export class MsgUpdateParams extends jspb.Message {
  getSigner(): string;
  setSigner(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): ibc_applications_transfer_v1_transfer_pb.Params | undefined;
  setParams(value?: ibc_applications_transfer_v1_transfer_pb.Params): void;

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
    params?: ibc_applications_transfer_v1_transfer_pb.Params.AsObject,
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

