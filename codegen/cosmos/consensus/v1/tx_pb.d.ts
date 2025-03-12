// package: cosmos.consensus.v1
// file: cosmos/consensus/v1/tx.proto

import * as jspb from "google-protobuf";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as tendermint_types_params_pb from "../../../tendermint/types/params_pb";

export class MsgUpdateParams extends jspb.Message {
  getAuthority(): string;
  setAuthority(value: string): void;

  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): tendermint_types_params_pb.BlockParams | undefined;
  setBlock(value?: tendermint_types_params_pb.BlockParams): void;

  hasEvidence(): boolean;
  clearEvidence(): void;
  getEvidence(): tendermint_types_params_pb.EvidenceParams | undefined;
  setEvidence(value?: tendermint_types_params_pb.EvidenceParams): void;

  hasValidator(): boolean;
  clearValidator(): void;
  getValidator(): tendermint_types_params_pb.ValidatorParams | undefined;
  setValidator(value?: tendermint_types_params_pb.ValidatorParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateParams.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateParams): MsgUpdateParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateParams;
  static deserializeBinaryFromReader(message: MsgUpdateParams, reader: jspb.BinaryReader): MsgUpdateParams;
}

export namespace MsgUpdateParams {
  export type AsObject = {
    authority: string,
    block?: tendermint_types_params_pb.BlockParams.AsObject,
    evidence?: tendermint_types_params_pb.EvidenceParams.AsObject,
    validator?: tendermint_types_params_pb.ValidatorParams.AsObject,
  }
}

export class MsgUpdateParamsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateParamsResponse): MsgUpdateParamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateParamsResponse;
  static deserializeBinaryFromReader(message: MsgUpdateParamsResponse, reader: jspb.BinaryReader): MsgUpdateParamsResponse;
}

export namespace MsgUpdateParamsResponse {
  export type AsObject = {
  }
}

