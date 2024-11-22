// package: cosmos.group.module.v1
// file: cosmos/group/module/v1/module.proto

import * as jspb from "google-protobuf";
import * as cosmos_app_v1alpha1_module_pb from "../../../../cosmos/app/v1alpha1/module_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as amino_amino_pb from "../../../../amino/amino_pb";

export class Module extends jspb.Message {
  hasMaxExecutionPeriod(): boolean;
  clearMaxExecutionPeriod(): void;
  getMaxExecutionPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setMaxExecutionPeriod(value?: google_protobuf_duration_pb.Duration): void;

  getMaxMetadataLen(): number;
  setMaxMetadataLen(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Module.AsObject;
  static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Module;
  static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
}

export namespace Module {
  export type AsObject = {
    maxExecutionPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    maxMetadataLen: number,
  }
}

