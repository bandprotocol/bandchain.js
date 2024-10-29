// package: bandchain.v1.node
// file: bandchain/v1/node/query.proto

import * as jspb from 'google-protobuf'
import * as google_api_annotations_pb from '../../../google/api/annotations_pb'
import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb'

export class ChainIDRequest extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ChainIDRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: ChainIDRequest,
  ): ChainIDRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: ChainIDRequest,
    writer: jspb.BinaryWriter,
  ): void
  static deserializeBinary(bytes: Uint8Array): ChainIDRequest
  static deserializeBinaryFromReader(
    message: ChainIDRequest,
    reader: jspb.BinaryReader,
  ): ChainIDRequest
}

export namespace ChainIDRequest {
  export type AsObject = {}
}

export class ChainIDResponse extends jspb.Message {
  getChainId(): string
  setChainId(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ChainIDResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: ChainIDResponse,
  ): ChainIDResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: ChainIDResponse,
    writer: jspb.BinaryWriter,
  ): void
  static deserializeBinary(bytes: Uint8Array): ChainIDResponse
  static deserializeBinaryFromReader(
    message: ChainIDResponse,
    reader: jspb.BinaryReader,
  ): ChainIDResponse
}

export namespace ChainIDResponse {
  export type AsObject = {
    chainId: string
  }
}

export class EVMValidatorsRequest extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): EVMValidatorsRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: EVMValidatorsRequest,
  ): EVMValidatorsRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: EVMValidatorsRequest,
    writer: jspb.BinaryWriter,
  ): void
  static deserializeBinary(bytes: Uint8Array): EVMValidatorsRequest
  static deserializeBinaryFromReader(
    message: EVMValidatorsRequest,
    reader: jspb.BinaryReader,
  ): EVMValidatorsRequest
}

export namespace EVMValidatorsRequest {
  export type AsObject = {}
}

export class EVMValidatorsResponse extends jspb.Message {
  getBlockHeight(): number
  setBlockHeight(value: number): void

  clearValidatorsList(): void
  getValidatorsList(): Array<ValidatorMinimal>
  setValidatorsList(value: Array<ValidatorMinimal>): void
  addValidators(value?: ValidatorMinimal, index?: number): ValidatorMinimal

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): EVMValidatorsResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: EVMValidatorsResponse,
  ): EVMValidatorsResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: EVMValidatorsResponse,
    writer: jspb.BinaryWriter,
  ): void
  static deserializeBinary(bytes: Uint8Array): EVMValidatorsResponse
  static deserializeBinaryFromReader(
    message: EVMValidatorsResponse,
    reader: jspb.BinaryReader,
  ): EVMValidatorsResponse
}

export namespace EVMValidatorsResponse {
  export type AsObject = {
    blockHeight: number
    validatorsList: Array<ValidatorMinimal.AsObject>
  }
}

export class ValidatorMinimal extends jspb.Message {
  getAddress(): string
  setAddress(value: string): void

  getVotingPower(): number
  setVotingPower(value: number): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ValidatorMinimal.AsObject
  static toObject(
    includeInstance: boolean,
    msg: ValidatorMinimal,
  ): ValidatorMinimal.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: ValidatorMinimal,
    writer: jspb.BinaryWriter,
  ): void
  static deserializeBinary(bytes: Uint8Array): ValidatorMinimal
  static deserializeBinaryFromReader(
    message: ValidatorMinimal,
    reader: jspb.BinaryReader,
  ): ValidatorMinimal
}

export namespace ValidatorMinimal {
  export type AsObject = {
    address: string
    votingPower: number
  }
}
