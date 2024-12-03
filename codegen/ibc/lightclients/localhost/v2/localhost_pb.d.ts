// package: ibc.lightclients.localhost.v2
// file: ibc/lightclients/localhost/v2/localhost.proto

import * as jspb from "google-protobuf";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";

export class ClientState extends jspb.Message {
  hasLatestHeight(): boolean;
  clearLatestHeight(): void;
  getLatestHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setLatestHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientState.AsObject;
  static toObject(includeInstance: boolean, msg: ClientState): ClientState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientState;
  static deserializeBinaryFromReader(message: ClientState, reader: jspb.BinaryReader): ClientState;
}

export namespace ClientState {
  export type AsObject = {
    latestHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

