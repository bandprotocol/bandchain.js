// package: ibc.lightclients.wasm.v1
// file: ibc/lightclients/wasm/v1/tx.proto

import * as jspb from "google-protobuf";
import * as cosmos_msg_v1_msg_pb from "../../../../cosmos/msg/v1/msg_pb";

export class MsgStoreCode extends jspb.Message {
  getSigner(): string;
  setSigner(value: string): void;

  getWasmByteCode(): Uint8Array | string;
  getWasmByteCode_asU8(): Uint8Array;
  getWasmByteCode_asB64(): string;
  setWasmByteCode(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgStoreCode.AsObject;
  static toObject(includeInstance: boolean, msg: MsgStoreCode): MsgStoreCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgStoreCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgStoreCode;
  static deserializeBinaryFromReader(message: MsgStoreCode, reader: jspb.BinaryReader): MsgStoreCode;
}

export namespace MsgStoreCode {
  export type AsObject = {
    signer: string,
    wasmByteCode: Uint8Array | string,
  }
}

export class MsgStoreCodeResponse extends jspb.Message {
  getChecksum(): Uint8Array | string;
  getChecksum_asU8(): Uint8Array;
  getChecksum_asB64(): string;
  setChecksum(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgStoreCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgStoreCodeResponse): MsgStoreCodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgStoreCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgStoreCodeResponse;
  static deserializeBinaryFromReader(message: MsgStoreCodeResponse, reader: jspb.BinaryReader): MsgStoreCodeResponse;
}

export namespace MsgStoreCodeResponse {
  export type AsObject = {
    checksum: Uint8Array | string,
  }
}

export class MsgRemoveChecksum extends jspb.Message {
  getSigner(): string;
  setSigner(value: string): void;

  getChecksum(): Uint8Array | string;
  getChecksum_asU8(): Uint8Array;
  getChecksum_asB64(): string;
  setChecksum(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRemoveChecksum.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRemoveChecksum): MsgRemoveChecksum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRemoveChecksum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRemoveChecksum;
  static deserializeBinaryFromReader(message: MsgRemoveChecksum, reader: jspb.BinaryReader): MsgRemoveChecksum;
}

export namespace MsgRemoveChecksum {
  export type AsObject = {
    signer: string,
    checksum: Uint8Array | string,
  }
}

export class MsgRemoveChecksumResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRemoveChecksumResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRemoveChecksumResponse): MsgRemoveChecksumResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRemoveChecksumResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRemoveChecksumResponse;
  static deserializeBinaryFromReader(message: MsgRemoveChecksumResponse, reader: jspb.BinaryReader): MsgRemoveChecksumResponse;
}

export namespace MsgRemoveChecksumResponse {
  export type AsObject = {
  }
}

export class MsgMigrateContract extends jspb.Message {
  getSigner(): string;
  setSigner(value: string): void;

  getClientId(): string;
  setClientId(value: string): void;

  getChecksum(): Uint8Array | string;
  getChecksum_asU8(): Uint8Array;
  getChecksum_asB64(): string;
  setChecksum(value: Uint8Array | string): void;

  getMsg(): Uint8Array | string;
  getMsg_asU8(): Uint8Array;
  getMsg_asB64(): string;
  setMsg(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgMigrateContract.AsObject;
  static toObject(includeInstance: boolean, msg: MsgMigrateContract): MsgMigrateContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgMigrateContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgMigrateContract;
  static deserializeBinaryFromReader(message: MsgMigrateContract, reader: jspb.BinaryReader): MsgMigrateContract;
}

export namespace MsgMigrateContract {
  export type AsObject = {
    signer: string,
    clientId: string,
    checksum: Uint8Array | string,
    msg: Uint8Array | string,
  }
}

export class MsgMigrateContractResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgMigrateContractResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgMigrateContractResponse): MsgMigrateContractResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgMigrateContractResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgMigrateContractResponse;
  static deserializeBinaryFromReader(message: MsgMigrateContractResponse, reader: jspb.BinaryReader): MsgMigrateContractResponse;
}

export namespace MsgMigrateContractResponse {
  export type AsObject = {
  }
}

