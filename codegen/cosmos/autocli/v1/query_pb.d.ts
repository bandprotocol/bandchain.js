// package: cosmos.autocli.v1
// file: cosmos/autocli/v1/query.proto

import * as jspb from "google-protobuf";
import * as cosmos_autocli_v1_options_pb from "../../../cosmos/autocli/v1/options_pb";
import * as cosmos_query_v1_query_pb from "../../../cosmos/query/v1/query_pb";

export class AppOptionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppOptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AppOptionsRequest): AppOptionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppOptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppOptionsRequest;
  static deserializeBinaryFromReader(message: AppOptionsRequest, reader: jspb.BinaryReader): AppOptionsRequest;
}

export namespace AppOptionsRequest {
  export type AsObject = {
  }
}

export class AppOptionsResponse extends jspb.Message {
  getModuleOptionsMap(): jspb.Map<string, cosmos_autocli_v1_options_pb.ModuleOptions>;
  clearModuleOptionsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppOptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AppOptionsResponse): AppOptionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppOptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppOptionsResponse;
  static deserializeBinaryFromReader(message: AppOptionsResponse, reader: jspb.BinaryReader): AppOptionsResponse;
}

export namespace AppOptionsResponse {
  export type AsObject = {
    moduleOptionsMap: Array<[string, cosmos_autocli_v1_options_pb.ModuleOptions.AsObject]>,
  }
}

