// package: cosmos.upgrade.v1beta1
// file: cosmos/upgrade/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_upgrade_v1beta1_upgrade_pb from "../../../cosmos/upgrade/v1beta1/upgrade_pb";

export class QueryCurrentPlanRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCurrentPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCurrentPlanRequest): QueryCurrentPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCurrentPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCurrentPlanRequest;
  static deserializeBinaryFromReader(message: QueryCurrentPlanRequest, reader: jspb.BinaryReader): QueryCurrentPlanRequest;
}

export namespace QueryCurrentPlanRequest {
  export type AsObject = {
  }
}

export class QueryCurrentPlanResponse extends jspb.Message {
  hasPlan(): boolean;
  clearPlan(): void;
  getPlan(): cosmos_upgrade_v1beta1_upgrade_pb.Plan | undefined;
  setPlan(value?: cosmos_upgrade_v1beta1_upgrade_pb.Plan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCurrentPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCurrentPlanResponse): QueryCurrentPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCurrentPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCurrentPlanResponse;
  static deserializeBinaryFromReader(message: QueryCurrentPlanResponse, reader: jspb.BinaryReader): QueryCurrentPlanResponse;
}

export namespace QueryCurrentPlanResponse {
  export type AsObject = {
    plan?: cosmos_upgrade_v1beta1_upgrade_pb.Plan.AsObject,
  }
}

export class QueryAppliedPlanRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAppliedPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAppliedPlanRequest): QueryAppliedPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAppliedPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAppliedPlanRequest;
  static deserializeBinaryFromReader(message: QueryAppliedPlanRequest, reader: jspb.BinaryReader): QueryAppliedPlanRequest;
}

export namespace QueryAppliedPlanRequest {
  export type AsObject = {
    name: string,
  }
}

export class QueryAppliedPlanResponse extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAppliedPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAppliedPlanResponse): QueryAppliedPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAppliedPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAppliedPlanResponse;
  static deserializeBinaryFromReader(message: QueryAppliedPlanResponse, reader: jspb.BinaryReader): QueryAppliedPlanResponse;
}

export namespace QueryAppliedPlanResponse {
  export type AsObject = {
    height: number,
  }
}

export class QueryUpgradedConsensusStateRequest extends jspb.Message {
  getLastHeight(): number;
  setLastHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUpgradedConsensusStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryUpgradedConsensusStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUpgradedConsensusStateRequest;
  static deserializeBinaryFromReader(message: QueryUpgradedConsensusStateRequest, reader: jspb.BinaryReader): QueryUpgradedConsensusStateRequest;
}

export namespace QueryUpgradedConsensusStateRequest {
  export type AsObject = {
    lastHeight: number,
  }
}

export class QueryUpgradedConsensusStateResponse extends jspb.Message {
  getUpgradedConsensusState(): Uint8Array | string;
  getUpgradedConsensusState_asU8(): Uint8Array;
  getUpgradedConsensusState_asB64(): string;
  setUpgradedConsensusState(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUpgradedConsensusStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryUpgradedConsensusStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUpgradedConsensusStateResponse;
  static deserializeBinaryFromReader(message: QueryUpgradedConsensusStateResponse, reader: jspb.BinaryReader): QueryUpgradedConsensusStateResponse;
}

export namespace QueryUpgradedConsensusStateResponse {
  export type AsObject = {
    upgradedConsensusState: Uint8Array | string,
  }
}

export class QueryModuleVersionsRequest extends jspb.Message {
  getModuleName(): string;
  setModuleName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryModuleVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryModuleVersionsRequest): QueryModuleVersionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryModuleVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryModuleVersionsRequest;
  static deserializeBinaryFromReader(message: QueryModuleVersionsRequest, reader: jspb.BinaryReader): QueryModuleVersionsRequest;
}

export namespace QueryModuleVersionsRequest {
  export type AsObject = {
    moduleName: string,
  }
}

export class QueryModuleVersionsResponse extends jspb.Message {
  clearModuleVersionsList(): void;
  getModuleVersionsList(): Array<cosmos_upgrade_v1beta1_upgrade_pb.ModuleVersion>;
  setModuleVersionsList(value: Array<cosmos_upgrade_v1beta1_upgrade_pb.ModuleVersion>): void;
  addModuleVersions(value?: cosmos_upgrade_v1beta1_upgrade_pb.ModuleVersion, index?: number): cosmos_upgrade_v1beta1_upgrade_pb.ModuleVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryModuleVersionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryModuleVersionsResponse): QueryModuleVersionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryModuleVersionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryModuleVersionsResponse;
  static deserializeBinaryFromReader(message: QueryModuleVersionsResponse, reader: jspb.BinaryReader): QueryModuleVersionsResponse;
}

export namespace QueryModuleVersionsResponse {
  export type AsObject = {
    moduleVersionsList: Array<cosmos_upgrade_v1beta1_upgrade_pb.ModuleVersion.AsObject>,
  }
}

export class QueryAuthorityRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAuthorityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAuthorityRequest): QueryAuthorityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAuthorityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAuthorityRequest;
  static deserializeBinaryFromReader(message: QueryAuthorityRequest, reader: jspb.BinaryReader): QueryAuthorityRequest;
}

export namespace QueryAuthorityRequest {
  export type AsObject = {
  }
}

export class QueryAuthorityResponse extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAuthorityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAuthorityResponse): QueryAuthorityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAuthorityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAuthorityResponse;
  static deserializeBinaryFromReader(message: QueryAuthorityResponse, reader: jspb.BinaryReader): QueryAuthorityResponse;
}

export namespace QueryAuthorityResponse {
  export type AsObject = {
    address: string,
  }
}

