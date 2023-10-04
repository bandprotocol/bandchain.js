// package: bandchain.v1.node
// file: bandchain/v1/node/query.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class QueryChainIDRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChainIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryChainIDRequest): QueryChainIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryChainIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryChainIDRequest;
  static deserializeBinaryFromReader(message: QueryChainIDRequest, reader: jspb.BinaryReader): QueryChainIDRequest;
}

export namespace QueryChainIDRequest {
  export type AsObject = {
  }
}

export class QueryChainIDResponse extends jspb.Message {
  getChainId(): string;
  setChainId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChainIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryChainIDResponse): QueryChainIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryChainIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryChainIDResponse;
  static deserializeBinaryFromReader(message: QueryChainIDResponse, reader: jspb.BinaryReader): QueryChainIDResponse;
}

export namespace QueryChainIDResponse {
  export type AsObject = {
    chainId: string,
  }
}

export class QueryEVMValidatorsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryEVMValidatorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryEVMValidatorsRequest): QueryEVMValidatorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryEVMValidatorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryEVMValidatorsRequest;
  static deserializeBinaryFromReader(message: QueryEVMValidatorsRequest, reader: jspb.BinaryReader): QueryEVMValidatorsRequest;
}

export namespace QueryEVMValidatorsRequest {
  export type AsObject = {
  }
}

export class QueryEVMValidatorsResponse extends jspb.Message {
  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  clearValidatorsList(): void;
  getValidatorsList(): Array<ValidatorMinimal>;
  setValidatorsList(value: Array<ValidatorMinimal>): void;
  addValidators(value?: ValidatorMinimal, index?: number): ValidatorMinimal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryEVMValidatorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryEVMValidatorsResponse): QueryEVMValidatorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryEVMValidatorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryEVMValidatorsResponse;
  static deserializeBinaryFromReader(message: QueryEVMValidatorsResponse, reader: jspb.BinaryReader): QueryEVMValidatorsResponse;
}

export namespace QueryEVMValidatorsResponse {
  export type AsObject = {
    blockHeight: number,
    validatorsList: Array<ValidatorMinimal.AsObject>,
  }
}

export class ValidatorMinimal extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getVotingPower(): number;
  setVotingPower(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorMinimal.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorMinimal): ValidatorMinimal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidatorMinimal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorMinimal;
  static deserializeBinaryFromReader(message: ValidatorMinimal, reader: jspb.BinaryReader): ValidatorMinimal;
}

export namespace ValidatorMinimal {
  export type AsObject = {
    address: string,
    votingPower: number,
  }
}

