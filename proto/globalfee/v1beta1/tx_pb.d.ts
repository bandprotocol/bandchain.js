// package: globalfee.v1beta1
// file: globalfee/v1beta1/tx.proto

import * as jspb from 'google-protobuf'
import * as gogoproto_gogo_pb from '../../gogoproto/gogo_pb'
import * as cosmos_proto_cosmos_pb from '../../cosmos_proto/cosmos_pb'
import * as cosmos_msg_v1_msg_pb from '../../cosmos/msg/v1/msg_pb'
import * as globalfee_v1beta1_genesis_pb from '../../globalfee/v1beta1/genesis_pb'

export class MsgUpdateParams extends jspb.Message {
  getAuthority(): string
  setAuthority(value: string): void

  hasParams(): boolean
  clearParams(): void
  getParams(): globalfee_v1beta1_genesis_pb.Params | undefined
  setParams(value?: globalfee_v1beta1_genesis_pb.Params): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): MsgUpdateParams.AsObject
  static toObject(
    includeInstance: boolean,
    msg: MsgUpdateParams,
  ): MsgUpdateParams.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: MsgUpdateParams,
    writer: jspb.BinaryWriter,
  ): void
  static deserializeBinary(bytes: Uint8Array): MsgUpdateParams
  static deserializeBinaryFromReader(
    message: MsgUpdateParams,
    reader: jspb.BinaryReader,
  ): MsgUpdateParams
}

export namespace MsgUpdateParams {
  export type AsObject = {
    authority: string
    params?: globalfee_v1beta1_genesis_pb.Params.AsObject
  }
}

export class MsgUpdateParamsResponse extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): MsgUpdateParamsResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: MsgUpdateParamsResponse,
  ): MsgUpdateParamsResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: MsgUpdateParamsResponse,
    writer: jspb.BinaryWriter,
  ): void
  static deserializeBinary(bytes: Uint8Array): MsgUpdateParamsResponse
  static deserializeBinaryFromReader(
    message: MsgUpdateParamsResponse,
    reader: jspb.BinaryReader,
  ): MsgUpdateParamsResponse
}

export namespace MsgUpdateParamsResponse {
  export type AsObject = {}
}
