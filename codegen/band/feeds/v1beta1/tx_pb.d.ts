// package: band.feeds.v1beta1
// file: band/feeds/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as band_feeds_v1beta1_feeds_pb from "../../../band/feeds/v1beta1/feeds_pb";
import * as band_feeds_v1beta1_params_pb from "../../../band/feeds/v1beta1/params_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";

export class MsgVote extends jspb.Message {
  getVoter(): string;
  setVoter(value: string): void;

  clearSignalsList(): void;
  getSignalsList(): Array<band_feeds_v1beta1_feeds_pb.Signal>;
  setSignalsList(value: Array<band_feeds_v1beta1_feeds_pb.Signal>): void;
  addSignals(value?: band_feeds_v1beta1_feeds_pb.Signal, index?: number): band_feeds_v1beta1_feeds_pb.Signal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgVote.AsObject;
  static toObject(includeInstance: boolean, msg: MsgVote): MsgVote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgVote;
  static deserializeBinaryFromReader(message: MsgVote, reader: jspb.BinaryReader): MsgVote;
}

export namespace MsgVote {
  export type AsObject = {
    voter: string,
    signalsList: Array<band_feeds_v1beta1_feeds_pb.Signal.AsObject>,
  }
}

export class MsgVoteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgVoteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgVoteResponse): MsgVoteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgVoteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgVoteResponse;
  static deserializeBinaryFromReader(message: MsgVoteResponse, reader: jspb.BinaryReader): MsgVoteResponse;
}

export namespace MsgVoteResponse {
  export type AsObject = {
  }
}

export class MsgSubmitSignalPrices extends jspb.Message {
  getValidator(): string;
  setValidator(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  clearSignalPricesList(): void;
  getSignalPricesList(): Array<band_feeds_v1beta1_feeds_pb.SignalPrice>;
  setSignalPricesList(value: Array<band_feeds_v1beta1_feeds_pb.SignalPrice>): void;
  addSignalPrices(value?: band_feeds_v1beta1_feeds_pb.SignalPrice, index?: number): band_feeds_v1beta1_feeds_pb.SignalPrice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitSignalPrices.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitSignalPrices): MsgSubmitSignalPrices.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubmitSignalPrices, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitSignalPrices;
  static deserializeBinaryFromReader(message: MsgSubmitSignalPrices, reader: jspb.BinaryReader): MsgSubmitSignalPrices;
}

export namespace MsgSubmitSignalPrices {
  export type AsObject = {
    validator: string,
    timestamp: number,
    signalPricesList: Array<band_feeds_v1beta1_feeds_pb.SignalPrice.AsObject>,
  }
}

export class MsgSubmitSignalPricesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitSignalPricesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitSignalPricesResponse): MsgSubmitSignalPricesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubmitSignalPricesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitSignalPricesResponse;
  static deserializeBinaryFromReader(message: MsgSubmitSignalPricesResponse, reader: jspb.BinaryReader): MsgSubmitSignalPricesResponse;
}

export namespace MsgSubmitSignalPricesResponse {
  export type AsObject = {
  }
}

export class MsgUpdateReferenceSourceConfig extends jspb.Message {
  getAdmin(): string;
  setAdmin(value: string): void;

  hasReferenceSourceConfig(): boolean;
  clearReferenceSourceConfig(): void;
  getReferenceSourceConfig(): band_feeds_v1beta1_feeds_pb.ReferenceSourceConfig | undefined;
  setReferenceSourceConfig(value?: band_feeds_v1beta1_feeds_pb.ReferenceSourceConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateReferenceSourceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateReferenceSourceConfig): MsgUpdateReferenceSourceConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateReferenceSourceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateReferenceSourceConfig;
  static deserializeBinaryFromReader(message: MsgUpdateReferenceSourceConfig, reader: jspb.BinaryReader): MsgUpdateReferenceSourceConfig;
}

export namespace MsgUpdateReferenceSourceConfig {
  export type AsObject = {
    admin: string,
    referenceSourceConfig?: band_feeds_v1beta1_feeds_pb.ReferenceSourceConfig.AsObject,
  }
}

export class MsgUpdateReferenceSourceConfigResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateReferenceSourceConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateReferenceSourceConfigResponse): MsgUpdateReferenceSourceConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateReferenceSourceConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateReferenceSourceConfigResponse;
  static deserializeBinaryFromReader(message: MsgUpdateReferenceSourceConfigResponse, reader: jspb.BinaryReader): MsgUpdateReferenceSourceConfigResponse;
}

export namespace MsgUpdateReferenceSourceConfigResponse {
  export type AsObject = {
  }
}

export class MsgUpdateParams extends jspb.Message {
  getAuthority(): string;
  setAuthority(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): band_feeds_v1beta1_params_pb.Params | undefined;
  setParams(value?: band_feeds_v1beta1_params_pb.Params): void;

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
    params?: band_feeds_v1beta1_params_pb.Params.AsObject,
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

