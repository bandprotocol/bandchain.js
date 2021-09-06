// package: cosmos.authz.v1beta1
// file: cosmos/authz/v1beta1/authz.proto

import * as jspb from "google-protobuf";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class GenericAuthorization extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenericAuthorization.AsObject;
  static toObject(includeInstance: boolean, msg: GenericAuthorization): GenericAuthorization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenericAuthorization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenericAuthorization;
  static deserializeBinaryFromReader(message: GenericAuthorization, reader: jspb.BinaryReader): GenericAuthorization;
}

export namespace GenericAuthorization {
  export type AsObject = {
    msg: string,
  }
}

export class Grant extends jspb.Message {
  hasAuthorization(): boolean;
  clearAuthorization(): void;
  getAuthorization(): google_protobuf_any_pb.Any | undefined;
  setAuthorization(value?: google_protobuf_any_pb.Any): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiration(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Grant.AsObject;
  static toObject(includeInstance: boolean, msg: Grant): Grant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Grant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Grant;
  static deserializeBinaryFromReader(message: Grant, reader: jspb.BinaryReader): Grant;
}

export namespace Grant {
  export type AsObject = {
    authorization?: google_protobuf_any_pb.Any.AsObject,
    expiration?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

