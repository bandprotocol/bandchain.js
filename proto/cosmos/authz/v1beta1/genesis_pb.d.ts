// package: cosmos.authz.v1beta1
// file: cosmos/authz/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";

export class GenesisState extends jspb.Message {
  clearAuthorizationList(): void;
  getAuthorizationList(): Array<GrantAuthorization>;
  setAuthorizationList(value: Array<GrantAuthorization>): void;
  addAuthorization(value?: GrantAuthorization, index?: number): GrantAuthorization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    authorizationList: Array<GrantAuthorization.AsObject>,
  }
}

export class GrantAuthorization extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): void;

  getGrantee(): string;
  setGrantee(value: string): void;

  hasAuthorization(): boolean;
  clearAuthorization(): void;
  getAuthorization(): google_protobuf_any_pb.Any | undefined;
  setAuthorization(value?: google_protobuf_any_pb.Any): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiration(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrantAuthorization.AsObject;
  static toObject(includeInstance: boolean, msg: GrantAuthorization): GrantAuthorization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrantAuthorization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrantAuthorization;
  static deserializeBinaryFromReader(message: GrantAuthorization, reader: jspb.BinaryReader): GrantAuthorization;
}

export namespace GrantAuthorization {
  export type AsObject = {
    granter: string,
    grantee: string,
    authorization?: google_protobuf_any_pb.Any.AsObject,
    expiration?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

