// package: cosmos.group.v1
// file: cosmos/group/v1/events.proto

import * as jspb from "google-protobuf";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_group_v1_types_pb from "../../../cosmos/group/v1/types_pb";

export class EventCreateGroup extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventCreateGroup.AsObject;
  static toObject(includeInstance: boolean, msg: EventCreateGroup): EventCreateGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventCreateGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventCreateGroup;
  static deserializeBinaryFromReader(message: EventCreateGroup, reader: jspb.BinaryReader): EventCreateGroup;
}

export namespace EventCreateGroup {
  export type AsObject = {
    groupId: number,
  }
}

export class EventUpdateGroup extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventUpdateGroup.AsObject;
  static toObject(includeInstance: boolean, msg: EventUpdateGroup): EventUpdateGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventUpdateGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventUpdateGroup;
  static deserializeBinaryFromReader(message: EventUpdateGroup, reader: jspb.BinaryReader): EventUpdateGroup;
}

export namespace EventUpdateGroup {
  export type AsObject = {
    groupId: number,
  }
}

export class EventCreateGroupPolicy extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventCreateGroupPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: EventCreateGroupPolicy): EventCreateGroupPolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventCreateGroupPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventCreateGroupPolicy;
  static deserializeBinaryFromReader(message: EventCreateGroupPolicy, reader: jspb.BinaryReader): EventCreateGroupPolicy;
}

export namespace EventCreateGroupPolicy {
  export type AsObject = {
    address: string,
  }
}

export class EventUpdateGroupPolicy extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventUpdateGroupPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: EventUpdateGroupPolicy): EventUpdateGroupPolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventUpdateGroupPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventUpdateGroupPolicy;
  static deserializeBinaryFromReader(message: EventUpdateGroupPolicy, reader: jspb.BinaryReader): EventUpdateGroupPolicy;
}

export namespace EventUpdateGroupPolicy {
  export type AsObject = {
    address: string,
  }
}

export class EventSubmitProposal extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSubmitProposal.AsObject;
  static toObject(includeInstance: boolean, msg: EventSubmitProposal): EventSubmitProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventSubmitProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSubmitProposal;
  static deserializeBinaryFromReader(message: EventSubmitProposal, reader: jspb.BinaryReader): EventSubmitProposal;
}

export namespace EventSubmitProposal {
  export type AsObject = {
    proposalId: number,
  }
}

export class EventWithdrawProposal extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventWithdrawProposal.AsObject;
  static toObject(includeInstance: boolean, msg: EventWithdrawProposal): EventWithdrawProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventWithdrawProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventWithdrawProposal;
  static deserializeBinaryFromReader(message: EventWithdrawProposal, reader: jspb.BinaryReader): EventWithdrawProposal;
}

export namespace EventWithdrawProposal {
  export type AsObject = {
    proposalId: number,
  }
}

export class EventVote extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventVote.AsObject;
  static toObject(includeInstance: boolean, msg: EventVote): EventVote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventVote;
  static deserializeBinaryFromReader(message: EventVote, reader: jspb.BinaryReader): EventVote;
}

export namespace EventVote {
  export type AsObject = {
    proposalId: number,
  }
}

export class EventExec extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  getResult(): cosmos_group_v1_types_pb.ProposalExecutorResultMap[keyof cosmos_group_v1_types_pb.ProposalExecutorResultMap];
  setResult(value: cosmos_group_v1_types_pb.ProposalExecutorResultMap[keyof cosmos_group_v1_types_pb.ProposalExecutorResultMap]): void;

  getLogs(): string;
  setLogs(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventExec.AsObject;
  static toObject(includeInstance: boolean, msg: EventExec): EventExec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventExec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventExec;
  static deserializeBinaryFromReader(message: EventExec, reader: jspb.BinaryReader): EventExec;
}

export namespace EventExec {
  export type AsObject = {
    proposalId: number,
    result: cosmos_group_v1_types_pb.ProposalExecutorResultMap[keyof cosmos_group_v1_types_pb.ProposalExecutorResultMap],
    logs: string,
  }
}

export class EventLeaveGroup extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventLeaveGroup.AsObject;
  static toObject(includeInstance: boolean, msg: EventLeaveGroup): EventLeaveGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventLeaveGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventLeaveGroup;
  static deserializeBinaryFromReader(message: EventLeaveGroup, reader: jspb.BinaryReader): EventLeaveGroup;
}

export namespace EventLeaveGroup {
  export type AsObject = {
    groupId: number,
    address: string,
  }
}

