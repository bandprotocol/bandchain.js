// package: ibc.core.client.v1
// file: ibc/core/client/v1/tx.proto

import * as jspb from "google-protobuf";
import * as cosmos_msg_v1_msg_pb from "../../../../cosmos/msg/v1/msg_pb";
import * as cosmos_upgrade_v1beta1_upgrade_pb from "../../../../cosmos/upgrade/v1beta1/upgrade_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";

export class MsgCreateClient extends jspb.Message {
  hasClientState(): boolean;
  clearClientState(): void;
  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): void;

  hasConsensusState(): boolean;
  clearConsensusState(): void;
  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateClient.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateClient): MsgCreateClient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateClient;
  static deserializeBinaryFromReader(message: MsgCreateClient, reader: jspb.BinaryReader): MsgCreateClient;
}

export namespace MsgCreateClient {
  export type AsObject = {
    clientState?: google_protobuf_any_pb.Any.AsObject,
    consensusState?: google_protobuf_any_pb.Any.AsObject,
    signer: string,
  }
}

export class MsgCreateClientResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateClientResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateClientResponse): MsgCreateClientResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateClientResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateClientResponse;
  static deserializeBinaryFromReader(message: MsgCreateClientResponse, reader: jspb.BinaryReader): MsgCreateClientResponse;
}

export namespace MsgCreateClientResponse {
  export type AsObject = {
  }
}

export class MsgUpdateClient extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  hasClientMessage(): boolean;
  clearClientMessage(): void;
  getClientMessage(): google_protobuf_any_pb.Any | undefined;
  setClientMessage(value?: google_protobuf_any_pb.Any): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateClient.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateClient): MsgUpdateClient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateClient;
  static deserializeBinaryFromReader(message: MsgUpdateClient, reader: jspb.BinaryReader): MsgUpdateClient;
}

export namespace MsgUpdateClient {
  export type AsObject = {
    clientId: string,
    clientMessage?: google_protobuf_any_pb.Any.AsObject,
    signer: string,
  }
}

export class MsgUpdateClientResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateClientResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateClientResponse): MsgUpdateClientResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateClientResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateClientResponse;
  static deserializeBinaryFromReader(message: MsgUpdateClientResponse, reader: jspb.BinaryReader): MsgUpdateClientResponse;
}

export namespace MsgUpdateClientResponse {
  export type AsObject = {
  }
}

export class MsgUpgradeClient extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  hasClientState(): boolean;
  clearClientState(): void;
  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): void;

  hasConsensusState(): boolean;
  clearConsensusState(): void;
  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): void;

  getProofUpgradeClient(): Uint8Array | string;
  getProofUpgradeClient_asU8(): Uint8Array;
  getProofUpgradeClient_asB64(): string;
  setProofUpgradeClient(value: Uint8Array | string): void;

  getProofUpgradeConsensusState(): Uint8Array | string;
  getProofUpgradeConsensusState_asU8(): Uint8Array;
  getProofUpgradeConsensusState_asB64(): string;
  setProofUpgradeConsensusState(value: Uint8Array | string): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpgradeClient.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpgradeClient): MsgUpgradeClient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpgradeClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpgradeClient;
  static deserializeBinaryFromReader(message: MsgUpgradeClient, reader: jspb.BinaryReader): MsgUpgradeClient;
}

export namespace MsgUpgradeClient {
  export type AsObject = {
    clientId: string,
    clientState?: google_protobuf_any_pb.Any.AsObject,
    consensusState?: google_protobuf_any_pb.Any.AsObject,
    proofUpgradeClient: Uint8Array | string,
    proofUpgradeConsensusState: Uint8Array | string,
    signer: string,
  }
}

export class MsgUpgradeClientResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpgradeClientResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpgradeClientResponse): MsgUpgradeClientResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpgradeClientResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpgradeClientResponse;
  static deserializeBinaryFromReader(message: MsgUpgradeClientResponse, reader: jspb.BinaryReader): MsgUpgradeClientResponse;
}

export namespace MsgUpgradeClientResponse {
  export type AsObject = {
  }
}

export class MsgSubmitMisbehaviour extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  hasMisbehaviour(): boolean;
  clearMisbehaviour(): void;
  getMisbehaviour(): google_protobuf_any_pb.Any | undefined;
  setMisbehaviour(value?: google_protobuf_any_pb.Any): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitMisbehaviour.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitMisbehaviour): MsgSubmitMisbehaviour.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubmitMisbehaviour, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitMisbehaviour;
  static deserializeBinaryFromReader(message: MsgSubmitMisbehaviour, reader: jspb.BinaryReader): MsgSubmitMisbehaviour;
}

export namespace MsgSubmitMisbehaviour {
  export type AsObject = {
    clientId: string,
    misbehaviour?: google_protobuf_any_pb.Any.AsObject,
    signer: string,
  }
}

export class MsgSubmitMisbehaviourResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitMisbehaviourResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubmitMisbehaviourResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitMisbehaviourResponse;
  static deserializeBinaryFromReader(message: MsgSubmitMisbehaviourResponse, reader: jspb.BinaryReader): MsgSubmitMisbehaviourResponse;
}

export namespace MsgSubmitMisbehaviourResponse {
  export type AsObject = {
  }
}

export class MsgRecoverClient extends jspb.Message {
  getSubjectClientId(): string;
  setSubjectClientId(value: string): void;

  getSubstituteClientId(): string;
  setSubstituteClientId(value: string): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRecoverClient.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRecoverClient): MsgRecoverClient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRecoverClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRecoverClient;
  static deserializeBinaryFromReader(message: MsgRecoverClient, reader: jspb.BinaryReader): MsgRecoverClient;
}

export namespace MsgRecoverClient {
  export type AsObject = {
    subjectClientId: string,
    substituteClientId: string,
    signer: string,
  }
}

export class MsgRecoverClientResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRecoverClientResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRecoverClientResponse): MsgRecoverClientResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRecoverClientResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRecoverClientResponse;
  static deserializeBinaryFromReader(message: MsgRecoverClientResponse, reader: jspb.BinaryReader): MsgRecoverClientResponse;
}

export namespace MsgRecoverClientResponse {
  export type AsObject = {
  }
}

export class MsgIBCSoftwareUpgrade extends jspb.Message {
  hasPlan(): boolean;
  clearPlan(): void;
  getPlan(): cosmos_upgrade_v1beta1_upgrade_pb.Plan | undefined;
  setPlan(value?: cosmos_upgrade_v1beta1_upgrade_pb.Plan): void;

  hasUpgradedClientState(): boolean;
  clearUpgradedClientState(): void;
  getUpgradedClientState(): google_protobuf_any_pb.Any | undefined;
  setUpgradedClientState(value?: google_protobuf_any_pb.Any): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgIBCSoftwareUpgrade.AsObject;
  static toObject(includeInstance: boolean, msg: MsgIBCSoftwareUpgrade): MsgIBCSoftwareUpgrade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgIBCSoftwareUpgrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgIBCSoftwareUpgrade;
  static deserializeBinaryFromReader(message: MsgIBCSoftwareUpgrade, reader: jspb.BinaryReader): MsgIBCSoftwareUpgrade;
}

export namespace MsgIBCSoftwareUpgrade {
  export type AsObject = {
    plan?: cosmos_upgrade_v1beta1_upgrade_pb.Plan.AsObject,
    upgradedClientState?: google_protobuf_any_pb.Any.AsObject,
    signer: string,
  }
}

export class MsgIBCSoftwareUpgradeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgIBCSoftwareUpgradeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgIBCSoftwareUpgradeResponse): MsgIBCSoftwareUpgradeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgIBCSoftwareUpgradeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgIBCSoftwareUpgradeResponse;
  static deserializeBinaryFromReader(message: MsgIBCSoftwareUpgradeResponse, reader: jspb.BinaryReader): MsgIBCSoftwareUpgradeResponse;
}

export namespace MsgIBCSoftwareUpgradeResponse {
  export type AsObject = {
  }
}

export class MsgUpdateParams extends jspb.Message {
  getSigner(): string;
  setSigner(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): ibc_core_client_v1_client_pb.Params | undefined;
  setParams(value?: ibc_core_client_v1_client_pb.Params): void;

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
    signer: string,
    params?: ibc_core_client_v1_client_pb.Params.AsObject,
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

