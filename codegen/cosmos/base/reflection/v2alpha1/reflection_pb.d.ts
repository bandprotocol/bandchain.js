// package: cosmos.base.reflection.v2alpha1
// file: cosmos/base/reflection/v2alpha1/reflection.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";

export class AppDescriptor extends jspb.Message {
  hasAuthn(): boolean;
  clearAuthn(): void;
  getAuthn(): AuthnDescriptor | undefined;
  setAuthn(value?: AuthnDescriptor): void;

  hasChain(): boolean;
  clearChain(): void;
  getChain(): ChainDescriptor | undefined;
  setChain(value?: ChainDescriptor): void;

  hasCodec(): boolean;
  clearCodec(): void;
  getCodec(): CodecDescriptor | undefined;
  setCodec(value?: CodecDescriptor): void;

  hasConfiguration(): boolean;
  clearConfiguration(): void;
  getConfiguration(): ConfigurationDescriptor | undefined;
  setConfiguration(value?: ConfigurationDescriptor): void;

  hasQueryServices(): boolean;
  clearQueryServices(): void;
  getQueryServices(): QueryServicesDescriptor | undefined;
  setQueryServices(value?: QueryServicesDescriptor): void;

  hasTx(): boolean;
  clearTx(): void;
  getTx(): TxDescriptor | undefined;
  setTx(value?: TxDescriptor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: AppDescriptor): AppDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppDescriptor;
  static deserializeBinaryFromReader(message: AppDescriptor, reader: jspb.BinaryReader): AppDescriptor;
}

export namespace AppDescriptor {
  export type AsObject = {
    authn?: AuthnDescriptor.AsObject,
    chain?: ChainDescriptor.AsObject,
    codec?: CodecDescriptor.AsObject,
    configuration?: ConfigurationDescriptor.AsObject,
    queryServices?: QueryServicesDescriptor.AsObject,
    tx?: TxDescriptor.AsObject,
  }
}

export class TxDescriptor extends jspb.Message {
  getFullname(): string;
  setFullname(value: string): void;

  clearMsgsList(): void;
  getMsgsList(): Array<MsgDescriptor>;
  setMsgsList(value: Array<MsgDescriptor>): void;
  addMsgs(value?: MsgDescriptor, index?: number): MsgDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: TxDescriptor): TxDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxDescriptor;
  static deserializeBinaryFromReader(message: TxDescriptor, reader: jspb.BinaryReader): TxDescriptor;
}

export namespace TxDescriptor {
  export type AsObject = {
    fullname: string,
    msgsList: Array<MsgDescriptor.AsObject>,
  }
}

export class AuthnDescriptor extends jspb.Message {
  clearSignModesList(): void;
  getSignModesList(): Array<SigningModeDescriptor>;
  setSignModesList(value: Array<SigningModeDescriptor>): void;
  addSignModes(value?: SigningModeDescriptor, index?: number): SigningModeDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthnDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: AuthnDescriptor): AuthnDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthnDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthnDescriptor;
  static deserializeBinaryFromReader(message: AuthnDescriptor, reader: jspb.BinaryReader): AuthnDescriptor;
}

export namespace AuthnDescriptor {
  export type AsObject = {
    signModesList: Array<SigningModeDescriptor.AsObject>,
  }
}

export class SigningModeDescriptor extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNumber(): number;
  setNumber(value: number): void;

  getAuthnInfoProviderMethodFullname(): string;
  setAuthnInfoProviderMethodFullname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SigningModeDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: SigningModeDescriptor): SigningModeDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SigningModeDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SigningModeDescriptor;
  static deserializeBinaryFromReader(message: SigningModeDescriptor, reader: jspb.BinaryReader): SigningModeDescriptor;
}

export namespace SigningModeDescriptor {
  export type AsObject = {
    name: string,
    number: number,
    authnInfoProviderMethodFullname: string,
  }
}

export class ChainDescriptor extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChainDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: ChainDescriptor): ChainDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChainDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChainDescriptor;
  static deserializeBinaryFromReader(message: ChainDescriptor, reader: jspb.BinaryReader): ChainDescriptor;
}

export namespace ChainDescriptor {
  export type AsObject = {
    id: string,
  }
}

export class CodecDescriptor extends jspb.Message {
  clearInterfacesList(): void;
  getInterfacesList(): Array<InterfaceDescriptor>;
  setInterfacesList(value: Array<InterfaceDescriptor>): void;
  addInterfaces(value?: InterfaceDescriptor, index?: number): InterfaceDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodecDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: CodecDescriptor): CodecDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodecDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodecDescriptor;
  static deserializeBinaryFromReader(message: CodecDescriptor, reader: jspb.BinaryReader): CodecDescriptor;
}

export namespace CodecDescriptor {
  export type AsObject = {
    interfacesList: Array<InterfaceDescriptor.AsObject>,
  }
}

export class InterfaceDescriptor extends jspb.Message {
  getFullname(): string;
  setFullname(value: string): void;

  clearInterfaceAcceptingMessagesList(): void;
  getInterfaceAcceptingMessagesList(): Array<InterfaceAcceptingMessageDescriptor>;
  setInterfaceAcceptingMessagesList(value: Array<InterfaceAcceptingMessageDescriptor>): void;
  addInterfaceAcceptingMessages(value?: InterfaceAcceptingMessageDescriptor, index?: number): InterfaceAcceptingMessageDescriptor;

  clearInterfaceImplementersList(): void;
  getInterfaceImplementersList(): Array<InterfaceImplementerDescriptor>;
  setInterfaceImplementersList(value: Array<InterfaceImplementerDescriptor>): void;
  addInterfaceImplementers(value?: InterfaceImplementerDescriptor, index?: number): InterfaceImplementerDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceDescriptor): InterfaceDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InterfaceDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceDescriptor;
  static deserializeBinaryFromReader(message: InterfaceDescriptor, reader: jspb.BinaryReader): InterfaceDescriptor;
}

export namespace InterfaceDescriptor {
  export type AsObject = {
    fullname: string,
    interfaceAcceptingMessagesList: Array<InterfaceAcceptingMessageDescriptor.AsObject>,
    interfaceImplementersList: Array<InterfaceImplementerDescriptor.AsObject>,
  }
}

export class InterfaceImplementerDescriptor extends jspb.Message {
  getFullname(): string;
  setFullname(value: string): void;

  getTypeUrl(): string;
  setTypeUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceImplementerDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceImplementerDescriptor): InterfaceImplementerDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InterfaceImplementerDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceImplementerDescriptor;
  static deserializeBinaryFromReader(message: InterfaceImplementerDescriptor, reader: jspb.BinaryReader): InterfaceImplementerDescriptor;
}

export namespace InterfaceImplementerDescriptor {
  export type AsObject = {
    fullname: string,
    typeUrl: string,
  }
}

export class InterfaceAcceptingMessageDescriptor extends jspb.Message {
  getFullname(): string;
  setFullname(value: string): void;

  clearFieldDescriptorNamesList(): void;
  getFieldDescriptorNamesList(): Array<string>;
  setFieldDescriptorNamesList(value: Array<string>): void;
  addFieldDescriptorNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceAcceptingMessageDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceAcceptingMessageDescriptor): InterfaceAcceptingMessageDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InterfaceAcceptingMessageDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceAcceptingMessageDescriptor;
  static deserializeBinaryFromReader(message: InterfaceAcceptingMessageDescriptor, reader: jspb.BinaryReader): InterfaceAcceptingMessageDescriptor;
}

export namespace InterfaceAcceptingMessageDescriptor {
  export type AsObject = {
    fullname: string,
    fieldDescriptorNamesList: Array<string>,
  }
}

export class ConfigurationDescriptor extends jspb.Message {
  getBech32AccountAddressPrefix(): string;
  setBech32AccountAddressPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigurationDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigurationDescriptor): ConfigurationDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigurationDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigurationDescriptor;
  static deserializeBinaryFromReader(message: ConfigurationDescriptor, reader: jspb.BinaryReader): ConfigurationDescriptor;
}

export namespace ConfigurationDescriptor {
  export type AsObject = {
    bech32AccountAddressPrefix: string,
  }
}

export class MsgDescriptor extends jspb.Message {
  getMsgTypeUrl(): string;
  setMsgTypeUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDescriptor): MsgDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDescriptor;
  static deserializeBinaryFromReader(message: MsgDescriptor, reader: jspb.BinaryReader): MsgDescriptor;
}

export namespace MsgDescriptor {
  export type AsObject = {
    msgTypeUrl: string,
  }
}

export class GetAuthnDescriptorRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthnDescriptorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthnDescriptorRequest): GetAuthnDescriptorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthnDescriptorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthnDescriptorRequest;
  static deserializeBinaryFromReader(message: GetAuthnDescriptorRequest, reader: jspb.BinaryReader): GetAuthnDescriptorRequest;
}

export namespace GetAuthnDescriptorRequest {
  export type AsObject = {
  }
}

export class GetAuthnDescriptorResponse extends jspb.Message {
  hasAuthn(): boolean;
  clearAuthn(): void;
  getAuthn(): AuthnDescriptor | undefined;
  setAuthn(value?: AuthnDescriptor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthnDescriptorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthnDescriptorResponse): GetAuthnDescriptorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthnDescriptorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthnDescriptorResponse;
  static deserializeBinaryFromReader(message: GetAuthnDescriptorResponse, reader: jspb.BinaryReader): GetAuthnDescriptorResponse;
}

export namespace GetAuthnDescriptorResponse {
  export type AsObject = {
    authn?: AuthnDescriptor.AsObject,
  }
}

export class GetChainDescriptorRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChainDescriptorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChainDescriptorRequest): GetChainDescriptorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetChainDescriptorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChainDescriptorRequest;
  static deserializeBinaryFromReader(message: GetChainDescriptorRequest, reader: jspb.BinaryReader): GetChainDescriptorRequest;
}

export namespace GetChainDescriptorRequest {
  export type AsObject = {
  }
}

export class GetChainDescriptorResponse extends jspb.Message {
  hasChain(): boolean;
  clearChain(): void;
  getChain(): ChainDescriptor | undefined;
  setChain(value?: ChainDescriptor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChainDescriptorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetChainDescriptorResponse): GetChainDescriptorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetChainDescriptorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChainDescriptorResponse;
  static deserializeBinaryFromReader(message: GetChainDescriptorResponse, reader: jspb.BinaryReader): GetChainDescriptorResponse;
}

export namespace GetChainDescriptorResponse {
  export type AsObject = {
    chain?: ChainDescriptor.AsObject,
  }
}

export class GetCodecDescriptorRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCodecDescriptorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCodecDescriptorRequest): GetCodecDescriptorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCodecDescriptorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCodecDescriptorRequest;
  static deserializeBinaryFromReader(message: GetCodecDescriptorRequest, reader: jspb.BinaryReader): GetCodecDescriptorRequest;
}

export namespace GetCodecDescriptorRequest {
  export type AsObject = {
  }
}

export class GetCodecDescriptorResponse extends jspb.Message {
  hasCodec(): boolean;
  clearCodec(): void;
  getCodec(): CodecDescriptor | undefined;
  setCodec(value?: CodecDescriptor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCodecDescriptorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCodecDescriptorResponse): GetCodecDescriptorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCodecDescriptorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCodecDescriptorResponse;
  static deserializeBinaryFromReader(message: GetCodecDescriptorResponse, reader: jspb.BinaryReader): GetCodecDescriptorResponse;
}

export namespace GetCodecDescriptorResponse {
  export type AsObject = {
    codec?: CodecDescriptor.AsObject,
  }
}

export class GetConfigurationDescriptorRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConfigurationDescriptorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConfigurationDescriptorRequest): GetConfigurationDescriptorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConfigurationDescriptorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConfigurationDescriptorRequest;
  static deserializeBinaryFromReader(message: GetConfigurationDescriptorRequest, reader: jspb.BinaryReader): GetConfigurationDescriptorRequest;
}

export namespace GetConfigurationDescriptorRequest {
  export type AsObject = {
  }
}

export class GetConfigurationDescriptorResponse extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): ConfigurationDescriptor | undefined;
  setConfig(value?: ConfigurationDescriptor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConfigurationDescriptorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConfigurationDescriptorResponse): GetConfigurationDescriptorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConfigurationDescriptorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConfigurationDescriptorResponse;
  static deserializeBinaryFromReader(message: GetConfigurationDescriptorResponse, reader: jspb.BinaryReader): GetConfigurationDescriptorResponse;
}

export namespace GetConfigurationDescriptorResponse {
  export type AsObject = {
    config?: ConfigurationDescriptor.AsObject,
  }
}

export class GetQueryServicesDescriptorRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQueryServicesDescriptorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetQueryServicesDescriptorRequest): GetQueryServicesDescriptorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQueryServicesDescriptorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQueryServicesDescriptorRequest;
  static deserializeBinaryFromReader(message: GetQueryServicesDescriptorRequest, reader: jspb.BinaryReader): GetQueryServicesDescriptorRequest;
}

export namespace GetQueryServicesDescriptorRequest {
  export type AsObject = {
  }
}

export class GetQueryServicesDescriptorResponse extends jspb.Message {
  hasQueries(): boolean;
  clearQueries(): void;
  getQueries(): QueryServicesDescriptor | undefined;
  setQueries(value?: QueryServicesDescriptor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQueryServicesDescriptorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetQueryServicesDescriptorResponse): GetQueryServicesDescriptorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetQueryServicesDescriptorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQueryServicesDescriptorResponse;
  static deserializeBinaryFromReader(message: GetQueryServicesDescriptorResponse, reader: jspb.BinaryReader): GetQueryServicesDescriptorResponse;
}

export namespace GetQueryServicesDescriptorResponse {
  export type AsObject = {
    queries?: QueryServicesDescriptor.AsObject,
  }
}

export class GetTxDescriptorRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxDescriptorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxDescriptorRequest): GetTxDescriptorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTxDescriptorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxDescriptorRequest;
  static deserializeBinaryFromReader(message: GetTxDescriptorRequest, reader: jspb.BinaryReader): GetTxDescriptorRequest;
}

export namespace GetTxDescriptorRequest {
  export type AsObject = {
  }
}

export class GetTxDescriptorResponse extends jspb.Message {
  hasTx(): boolean;
  clearTx(): void;
  getTx(): TxDescriptor | undefined;
  setTx(value?: TxDescriptor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxDescriptorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxDescriptorResponse): GetTxDescriptorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTxDescriptorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxDescriptorResponse;
  static deserializeBinaryFromReader(message: GetTxDescriptorResponse, reader: jspb.BinaryReader): GetTxDescriptorResponse;
}

export namespace GetTxDescriptorResponse {
  export type AsObject = {
    tx?: TxDescriptor.AsObject,
  }
}

export class QueryServicesDescriptor extends jspb.Message {
  clearQueryServicesList(): void;
  getQueryServicesList(): Array<QueryServiceDescriptor>;
  setQueryServicesList(value: Array<QueryServiceDescriptor>): void;
  addQueryServices(value?: QueryServiceDescriptor, index?: number): QueryServiceDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryServicesDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: QueryServicesDescriptor): QueryServicesDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryServicesDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryServicesDescriptor;
  static deserializeBinaryFromReader(message: QueryServicesDescriptor, reader: jspb.BinaryReader): QueryServicesDescriptor;
}

export namespace QueryServicesDescriptor {
  export type AsObject = {
    queryServicesList: Array<QueryServiceDescriptor.AsObject>,
  }
}

export class QueryServiceDescriptor extends jspb.Message {
  getFullname(): string;
  setFullname(value: string): void;

  getIsModule(): boolean;
  setIsModule(value: boolean): void;

  clearMethodsList(): void;
  getMethodsList(): Array<QueryMethodDescriptor>;
  setMethodsList(value: Array<QueryMethodDescriptor>): void;
  addMethods(value?: QueryMethodDescriptor, index?: number): QueryMethodDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryServiceDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: QueryServiceDescriptor): QueryServiceDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryServiceDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryServiceDescriptor;
  static deserializeBinaryFromReader(message: QueryServiceDescriptor, reader: jspb.BinaryReader): QueryServiceDescriptor;
}

export namespace QueryServiceDescriptor {
  export type AsObject = {
    fullname: string,
    isModule: boolean,
    methodsList: Array<QueryMethodDescriptor.AsObject>,
  }
}

export class QueryMethodDescriptor extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFullQueryPath(): string;
  setFullQueryPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryMethodDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: QueryMethodDescriptor): QueryMethodDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryMethodDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryMethodDescriptor;
  static deserializeBinaryFromReader(message: QueryMethodDescriptor, reader: jspb.BinaryReader): QueryMethodDescriptor;
}

export namespace QueryMethodDescriptor {
  export type AsObject = {
    name: string,
    fullQueryPath: string,
  }
}

