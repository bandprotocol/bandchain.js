// package: cosmos.tx.config.v1
// file: cosmos/tx/config/v1/config.proto

import * as jspb from "google-protobuf";
import * as cosmos_app_v1alpha1_module_pb from "../../../../cosmos/app/v1alpha1/module_pb";

export class Config extends jspb.Message {
  getSkipAnteHandler(): boolean;
  setSkipAnteHandler(value: boolean): void;

  getSkipPostHandler(): boolean;
  setSkipPostHandler(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Config.AsObject;
  static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Config;
  static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
}

export namespace Config {
  export type AsObject = {
    skipAnteHandler: boolean,
    skipPostHandler: boolean,
  }
}

