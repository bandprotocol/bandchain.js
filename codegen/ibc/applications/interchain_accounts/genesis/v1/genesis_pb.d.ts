// package: ibc.applications.interchain_accounts.genesis.v1
// file: ibc/applications/interchain_accounts/genesis/v1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../../gogoproto/gogo_pb";
import * as ibc_applications_interchain_accounts_controller_v1_controller_pb from "../../../../../ibc/applications/interchain_accounts/controller/v1/controller_pb";
import * as ibc_applications_interchain_accounts_host_v1_host_pb from "../../../../../ibc/applications/interchain_accounts/host/v1/host_pb";

export class GenesisState extends jspb.Message {
  hasControllerGenesisState(): boolean;
  clearControllerGenesisState(): void;
  getControllerGenesisState(): ControllerGenesisState | undefined;
  setControllerGenesisState(value?: ControllerGenesisState): void;

  hasHostGenesisState(): boolean;
  clearHostGenesisState(): void;
  getHostGenesisState(): HostGenesisState | undefined;
  setHostGenesisState(value?: HostGenesisState): void;

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
    controllerGenesisState?: ControllerGenesisState.AsObject,
    hostGenesisState?: HostGenesisState.AsObject,
  }
}

export class ControllerGenesisState extends jspb.Message {
  clearActiveChannelsList(): void;
  getActiveChannelsList(): Array<ActiveChannel>;
  setActiveChannelsList(value: Array<ActiveChannel>): void;
  addActiveChannels(value?: ActiveChannel, index?: number): ActiveChannel;

  clearInterchainAccountsList(): void;
  getInterchainAccountsList(): Array<RegisteredInterchainAccount>;
  setInterchainAccountsList(value: Array<RegisteredInterchainAccount>): void;
  addInterchainAccounts(value?: RegisteredInterchainAccount, index?: number): RegisteredInterchainAccount;

  clearPortsList(): void;
  getPortsList(): Array<string>;
  setPortsList(value: Array<string>): void;
  addPorts(value: string, index?: number): string;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): ibc_applications_interchain_accounts_controller_v1_controller_pb.Params | undefined;
  setParams(value?: ibc_applications_interchain_accounts_controller_v1_controller_pb.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ControllerGenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: ControllerGenesisState): ControllerGenesisState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ControllerGenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ControllerGenesisState;
  static deserializeBinaryFromReader(message: ControllerGenesisState, reader: jspb.BinaryReader): ControllerGenesisState;
}

export namespace ControllerGenesisState {
  export type AsObject = {
    activeChannelsList: Array<ActiveChannel.AsObject>,
    interchainAccountsList: Array<RegisteredInterchainAccount.AsObject>,
    portsList: Array<string>,
    params?: ibc_applications_interchain_accounts_controller_v1_controller_pb.Params.AsObject,
  }
}

export class HostGenesisState extends jspb.Message {
  clearActiveChannelsList(): void;
  getActiveChannelsList(): Array<ActiveChannel>;
  setActiveChannelsList(value: Array<ActiveChannel>): void;
  addActiveChannels(value?: ActiveChannel, index?: number): ActiveChannel;

  clearInterchainAccountsList(): void;
  getInterchainAccountsList(): Array<RegisteredInterchainAccount>;
  setInterchainAccountsList(value: Array<RegisteredInterchainAccount>): void;
  addInterchainAccounts(value?: RegisteredInterchainAccount, index?: number): RegisteredInterchainAccount;

  getPort(): string;
  setPort(value: string): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): ibc_applications_interchain_accounts_host_v1_host_pb.Params | undefined;
  setParams(value?: ibc_applications_interchain_accounts_host_v1_host_pb.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostGenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: HostGenesisState): HostGenesisState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HostGenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostGenesisState;
  static deserializeBinaryFromReader(message: HostGenesisState, reader: jspb.BinaryReader): HostGenesisState;
}

export namespace HostGenesisState {
  export type AsObject = {
    activeChannelsList: Array<ActiveChannel.AsObject>,
    interchainAccountsList: Array<RegisteredInterchainAccount.AsObject>,
    port: string,
    params?: ibc_applications_interchain_accounts_host_v1_host_pb.Params.AsObject,
  }
}

export class ActiveChannel extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): void;

  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getIsMiddlewareEnabled(): boolean;
  setIsMiddlewareEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActiveChannel.AsObject;
  static toObject(includeInstance: boolean, msg: ActiveChannel): ActiveChannel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActiveChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActiveChannel;
  static deserializeBinaryFromReader(message: ActiveChannel, reader: jspb.BinaryReader): ActiveChannel;
}

export namespace ActiveChannel {
  export type AsObject = {
    connectionId: string,
    portId: string,
    channelId: string,
    isMiddlewareEnabled: boolean,
  }
}

export class RegisteredInterchainAccount extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): void;

  getPortId(): string;
  setPortId(value: string): void;

  getAccountAddress(): string;
  setAccountAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisteredInterchainAccount.AsObject;
  static toObject(includeInstance: boolean, msg: RegisteredInterchainAccount): RegisteredInterchainAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisteredInterchainAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisteredInterchainAccount;
  static deserializeBinaryFromReader(message: RegisteredInterchainAccount, reader: jspb.BinaryReader): RegisteredInterchainAccount;
}

export namespace RegisteredInterchainAccount {
  export type AsObject = {
    connectionId: string,
    portId: string,
    accountAddress: string,
  }
}

