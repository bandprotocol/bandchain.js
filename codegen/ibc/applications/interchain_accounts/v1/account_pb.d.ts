// package: ibc.applications.interchain_accounts.v1
// file: ibc/applications/interchain_accounts/v1/account.proto

import * as jspb from "google-protobuf";
import * as cosmos_proto_cosmos_pb from "../../../../cosmos_proto/cosmos_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as cosmos_auth_v1beta1_auth_pb from "../../../../cosmos/auth/v1beta1/auth_pb";

export class InterchainAccount extends jspb.Message {
  hasBaseAccount(): boolean;
  clearBaseAccount(): void;
  getBaseAccount(): cosmos_auth_v1beta1_auth_pb.BaseAccount | undefined;
  setBaseAccount(value?: cosmos_auth_v1beta1_auth_pb.BaseAccount): void;

  getAccountOwner(): string;
  setAccountOwner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterchainAccount.AsObject;
  static toObject(includeInstance: boolean, msg: InterchainAccount): InterchainAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InterchainAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterchainAccount;
  static deserializeBinaryFromReader(message: InterchainAccount, reader: jspb.BinaryReader): InterchainAccount;
}

export namespace InterchainAccount {
  export type AsObject = {
    baseAccount?: cosmos_auth_v1beta1_auth_pb.BaseAccount.AsObject,
    accountOwner: string,
  }
}

