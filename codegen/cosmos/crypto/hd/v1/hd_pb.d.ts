// package: cosmos.crypto.hd.v1
// file: cosmos/crypto/hd/v1/hd.proto

import * as jspb from "google-protobuf";
import * as amino_amino_pb from "../../../../amino/amino_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";

export class BIP44Params extends jspb.Message {
  getPurpose(): number;
  setPurpose(value: number): void;

  getCoinType(): number;
  setCoinType(value: number): void;

  getAccount(): number;
  setAccount(value: number): void;

  getChange(): boolean;
  setChange(value: boolean): void;

  getAddressIndex(): number;
  setAddressIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BIP44Params.AsObject;
  static toObject(includeInstance: boolean, msg: BIP44Params): BIP44Params.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BIP44Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BIP44Params;
  static deserializeBinaryFromReader(message: BIP44Params, reader: jspb.BinaryReader): BIP44Params;
}

export namespace BIP44Params {
  export type AsObject = {
    purpose: number,
    coinType: number,
    account: number,
    change: boolean,
    addressIndex: number,
  }
}

