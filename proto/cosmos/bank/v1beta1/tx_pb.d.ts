// package: cosmos.bank.v1beta1
// file: cosmos/bank/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_bank_v1beta1_bank_pb from "../../../cosmos/bank/v1beta1/bank_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";

export class MsgSend extends jspb.Message {
  getFromAddress(): string;
  setFromAddress(value: string): void;

  getToAddress(): string;
  setToAddress(value: string): void;

  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

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
    fromAddress: string,
    toAddress: string,
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
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

export class MsgMultiSend extends jspb.Message {
  clearInputsList(): void;
  getInputsList(): Array<cosmos_bank_v1beta1_bank_pb.Input>;
  setInputsList(value: Array<cosmos_bank_v1beta1_bank_pb.Input>): void;
  addInputs(value?: cosmos_bank_v1beta1_bank_pb.Input, index?: number): cosmos_bank_v1beta1_bank_pb.Input;

  clearOutputsList(): void;
  getOutputsList(): Array<cosmos_bank_v1beta1_bank_pb.Output>;
  setOutputsList(value: Array<cosmos_bank_v1beta1_bank_pb.Output>): void;
  addOutputs(value?: cosmos_bank_v1beta1_bank_pb.Output, index?: number): cosmos_bank_v1beta1_bank_pb.Output;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgMultiSend.AsObject;
  static toObject(includeInstance: boolean, msg: MsgMultiSend): MsgMultiSend.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgMultiSend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgMultiSend;
  static deserializeBinaryFromReader(message: MsgMultiSend, reader: jspb.BinaryReader): MsgMultiSend;
}

export namespace MsgMultiSend {
  export type AsObject = {
    inputsList: Array<cosmos_bank_v1beta1_bank_pb.Input.AsObject>,
    outputsList: Array<cosmos_bank_v1beta1_bank_pb.Output.AsObject>,
  }
}

export class MsgMultiSendResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgMultiSendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgMultiSendResponse): MsgMultiSendResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgMultiSendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgMultiSendResponse;
  static deserializeBinaryFromReader(message: MsgMultiSendResponse, reader: jspb.BinaryReader): MsgMultiSendResponse;
}

export namespace MsgMultiSendResponse {
  export type AsObject = {
  }
}

export class MsgUpdateParams extends jspb.Message {
  getAuthority(): string;
  setAuthority(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): cosmos_bank_v1beta1_bank_pb.Params | undefined;
  setParams(value?: cosmos_bank_v1beta1_bank_pb.Params): void;

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
    params?: cosmos_bank_v1beta1_bank_pb.Params.AsObject,
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

export class MsgSetSendEnabled extends jspb.Message {
  getAuthority(): string;
  setAuthority(value: string): void;

  clearSendEnabledList(): void;
  getSendEnabledList(): Array<cosmos_bank_v1beta1_bank_pb.SendEnabled>;
  setSendEnabledList(value: Array<cosmos_bank_v1beta1_bank_pb.SendEnabled>): void;
  addSendEnabled(value?: cosmos_bank_v1beta1_bank_pb.SendEnabled, index?: number): cosmos_bank_v1beta1_bank_pb.SendEnabled;

  clearUseDefaultForList(): void;
  getUseDefaultForList(): Array<string>;
  setUseDefaultForList(value: Array<string>): void;
  addUseDefaultFor(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSetSendEnabled.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSetSendEnabled): MsgSetSendEnabled.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSetSendEnabled, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSetSendEnabled;
  static deserializeBinaryFromReader(message: MsgSetSendEnabled, reader: jspb.BinaryReader): MsgSetSendEnabled;
}

export namespace MsgSetSendEnabled {
  export type AsObject = {
    authority: string,
    sendEnabledList: Array<cosmos_bank_v1beta1_bank_pb.SendEnabled.AsObject>,
    useDefaultForList: Array<string>,
  }
}

export class MsgSetSendEnabledResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSetSendEnabledResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSetSendEnabledResponse): MsgSetSendEnabledResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSetSendEnabledResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSetSendEnabledResponse;
  static deserializeBinaryFromReader(message: MsgSetSendEnabledResponse, reader: jspb.BinaryReader): MsgSetSendEnabledResponse;
}

export namespace MsgSetSendEnabledResponse {
  export type AsObject = {
  }
}

