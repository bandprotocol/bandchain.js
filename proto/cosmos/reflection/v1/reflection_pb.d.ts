// package: cosmos.reflection.v1
// file: cosmos/reflection/v1/reflection.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as cosmos_query_v1_query_pb from "../../../cosmos/query/v1/query_pb";

export class FileDescriptorsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileDescriptorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FileDescriptorsRequest): FileDescriptorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileDescriptorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileDescriptorsRequest;
  static deserializeBinaryFromReader(message: FileDescriptorsRequest, reader: jspb.BinaryReader): FileDescriptorsRequest;
}

export namespace FileDescriptorsRequest {
  export type AsObject = {
  }
}

export class FileDescriptorsResponse extends jspb.Message {
  clearFilesList(): void;
  getFilesList(): Array<google_protobuf_descriptor_pb.FileDescriptorProto>;
  setFilesList(value: Array<google_protobuf_descriptor_pb.FileDescriptorProto>): void;
  addFiles(value?: google_protobuf_descriptor_pb.FileDescriptorProto, index?: number): google_protobuf_descriptor_pb.FileDescriptorProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileDescriptorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileDescriptorsResponse): FileDescriptorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileDescriptorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileDescriptorsResponse;
  static deserializeBinaryFromReader(message: FileDescriptorsResponse, reader: jspb.BinaryReader): FileDescriptorsResponse;
}

export namespace FileDescriptorsResponse {
  export type AsObject = {
    filesList: Array<google_protobuf_descriptor_pb.FileDescriptorProto.AsObject>,
  }
}

