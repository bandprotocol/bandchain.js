// package: cosmos.feegrant.v1beta1
// file: cosmos/feegrant/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_feegrant_v1beta1_feegrant_pb from "../../../cosmos/feegrant/v1beta1/feegrant_pb";

export class GenesisState extends jspb.Message {
  clearAllowancesList(): void;
  getAllowancesList(): Array<cosmos_feegrant_v1beta1_feegrant_pb.Grant>;
  setAllowancesList(value: Array<cosmos_feegrant_v1beta1_feegrant_pb.Grant>): void;
  addAllowances(value?: cosmos_feegrant_v1beta1_feegrant_pb.Grant, index?: number): cosmos_feegrant_v1beta1_feegrant_pb.Grant;

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
    allowancesList: Array<cosmos_feegrant_v1beta1_feegrant_pb.Grant.AsObject>,
  }
}

