// package: globalfee.v1beta1
// file: globalfee/v1beta1/query.proto

import * as jspb from 'google-protobuf'
import * as gogoproto_gogo_pb from '../../gogoproto/gogo_pb'
import * as google_api_annotations_pb from '../../google/api/annotations_pb'
import * as globalfee_v1beta1_genesis_pb from '../../globalfee/v1beta1/genesis_pb'

export class QueryParamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): QueryParamsRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: QueryParamsRequest,
  ): QueryParamsRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: QueryParamsRequest,
    writer: jspb.BinaryWriter,
  ): void
  static deserializeBinary(bytes: Uint8Array): QueryParamsRequest
  static deserializeBinaryFromReader(
    message: QueryParamsRequest,
    reader: jspb.BinaryReader,
  ): QueryParamsRequest
}

export namespace QueryParamsRequest {
  export type AsObject = {}
}

export class QueryParamsResponse extends jspb.Message {
  hasParams(): boolean
  clearParams(): void
  getParams(): globalfee_v1beta1_genesis_pb.Params | undefined
  setParams(value?: globalfee_v1beta1_genesis_pb.Params): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): QueryParamsResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: QueryParamsResponse,
  ): QueryParamsResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: QueryParamsResponse,
    writer: jspb.BinaryWriter,
  ): void
  static deserializeBinary(bytes: Uint8Array): QueryParamsResponse
  static deserializeBinaryFromReader(
    message: QueryParamsResponse,
    reader: jspb.BinaryReader,
  ): QueryParamsResponse
}

export namespace QueryParamsResponse {
  export type AsObject = {
    params?: globalfee_v1beta1_genesis_pb.Params.AsObject
  }
}
