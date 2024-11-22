// package: ibc.applications.interchain_accounts.host.v1
// file: ibc/applications/interchain_accounts/host/v1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../../gogoproto/gogo_pb";
import * as cosmos_msg_v1_msg_pb from "../../../../../cosmos/msg/v1/msg_pb";
import * as ibc_applications_interchain_accounts_host_v1_host_pb from "../../../../../ibc/applications/interchain_accounts/host/v1/host_pb";

export class MsgUpdateParams extends jspb.Message {
  getSigner(): string;
  setSigner(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): ibc_applications_interchain_accounts_host_v1_host_pb.Params | undefined;
  setParams(value?: ibc_applications_interchain_accounts_host_v1_host_pb.Params): void;

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
    params?: ibc_applications_interchain_accounts_host_v1_host_pb.Params.AsObject,
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

export class MsgModuleQuerySafe extends jspb.Message {
  getSigner(): string;
  setSigner(value: string): void;

  clearRequestsList(): void;
  getRequestsList(): Array<ibc_applications_interchain_accounts_host_v1_host_pb.QueryRequest>;
  setRequestsList(value: Array<ibc_applications_interchain_accounts_host_v1_host_pb.QueryRequest>): void;
  addRequests(value?: ibc_applications_interchain_accounts_host_v1_host_pb.QueryRequest, index?: number): ibc_applications_interchain_accounts_host_v1_host_pb.QueryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgModuleQuerySafe.AsObject;
  static toObject(includeInstance: boolean, msg: MsgModuleQuerySafe): MsgModuleQuerySafe.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgModuleQuerySafe, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgModuleQuerySafe;
  static deserializeBinaryFromReader(message: MsgModuleQuerySafe, reader: jspb.BinaryReader): MsgModuleQuerySafe;
}

export namespace MsgModuleQuerySafe {
  export type AsObject = {
    signer: string,
    requestsList: Array<ibc_applications_interchain_accounts_host_v1_host_pb.QueryRequest.AsObject>,
  }
}

export class MsgModuleQuerySafeResponse extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  clearResponsesList(): void;
  getResponsesList(): Array<Uint8Array | string>;
  getResponsesList_asU8(): Array<Uint8Array>;
  getResponsesList_asB64(): Array<string>;
  setResponsesList(value: Array<Uint8Array | string>): void;
  addResponses(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgModuleQuerySafeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgModuleQuerySafeResponse): MsgModuleQuerySafeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgModuleQuerySafeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgModuleQuerySafeResponse;
  static deserializeBinaryFromReader(message: MsgModuleQuerySafeResponse, reader: jspb.BinaryReader): MsgModuleQuerySafeResponse;
}

export namespace MsgModuleQuerySafeResponse {
  export type AsObject = {
    height: number,
    responsesList: Array<Uint8Array | string>,
  }
}

