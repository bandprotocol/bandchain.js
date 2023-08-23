// package: council.v1beta1
// file: council/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_proto_cosmos_pb from "../../cosmos_proto/cosmos_pb";
import * as cosmos_params_v1beta1_params_pb from "../../cosmos/params/v1beta1/params_pb";
import * as council_v1beta1_types_pb from "../../council/v1beta1/types_pb";

export class MsgSubmitProposal extends jspb.Message {
  getCouncil(): council_v1beta1_types_pb.CouncilTypeMap[keyof council_v1beta1_types_pb.CouncilTypeMap];
  setCouncil(value: council_v1beta1_types_pb.CouncilTypeMap[keyof council_v1beta1_types_pb.CouncilTypeMap]): void;

  getProposer(): string;
  setProposer(value: string): void;

  clearMessagesList(): void;
  getMessagesList(): Array<google_protobuf_any_pb.Any>;
  setMessagesList(value: Array<google_protobuf_any_pb.Any>): void;
  addMessages(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  getTitle(): string;
  setTitle(value: string): void;

  getMetadata(): string;
  setMetadata(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitProposal.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitProposal): MsgSubmitProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubmitProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitProposal;
  static deserializeBinaryFromReader(message: MsgSubmitProposal, reader: jspb.BinaryReader): MsgSubmitProposal;
}

export namespace MsgSubmitProposal {
  export type AsObject = {
    council: council_v1beta1_types_pb.CouncilTypeMap[keyof council_v1beta1_types_pb.CouncilTypeMap],
    proposer: string,
    messagesList: Array<google_protobuf_any_pb.Any.AsObject>,
    title: string,
    metadata: string,
  }
}

export class MsgSubmitProposalResponse extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitProposalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitProposalResponse): MsgSubmitProposalResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubmitProposalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitProposalResponse;
  static deserializeBinaryFromReader(message: MsgSubmitProposalResponse, reader: jspb.BinaryReader): MsgSubmitProposalResponse;
}

export namespace MsgSubmitProposalResponse {
  export type AsObject = {
    proposalId: number,
  }
}

export class MsgExecLegacyContent extends jspb.Message {
  getCouncil(): council_v1beta1_types_pb.CouncilTypeMap[keyof council_v1beta1_types_pb.CouncilTypeMap];
  setCouncil(value: council_v1beta1_types_pb.CouncilTypeMap[keyof council_v1beta1_types_pb.CouncilTypeMap]): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_any_pb.Any | undefined;
  setContent(value?: google_protobuf_any_pb.Any): void;

  getAuthority(): string;
  setAuthority(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgExecLegacyContent.AsObject;
  static toObject(includeInstance: boolean, msg: MsgExecLegacyContent): MsgExecLegacyContent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgExecLegacyContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgExecLegacyContent;
  static deserializeBinaryFromReader(message: MsgExecLegacyContent, reader: jspb.BinaryReader): MsgExecLegacyContent;
}

export namespace MsgExecLegacyContent {
  export type AsObject = {
    council: council_v1beta1_types_pb.CouncilTypeMap[keyof council_v1beta1_types_pb.CouncilTypeMap],
    content?: google_protobuf_any_pb.Any.AsObject,
    authority: string,
  }
}

export class MsgExecLegacyContentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgExecLegacyContentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgExecLegacyContentResponse): MsgExecLegacyContentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgExecLegacyContentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgExecLegacyContentResponse;
  static deserializeBinaryFromReader(message: MsgExecLegacyContentResponse, reader: jspb.BinaryReader): MsgExecLegacyContentResponse;
}

export namespace MsgExecLegacyContentResponse {
  export type AsObject = {
  }
}

export class MsgVote extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  getVoter(): string;
  setVoter(value: string): void;

  getOption(): council_v1beta1_types_pb.VoteOptionMap[keyof council_v1beta1_types_pb.VoteOptionMap];
  setOption(value: council_v1beta1_types_pb.VoteOptionMap[keyof council_v1beta1_types_pb.VoteOptionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgVote.AsObject;
  static toObject(includeInstance: boolean, msg: MsgVote): MsgVote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgVote;
  static deserializeBinaryFromReader(message: MsgVote, reader: jspb.BinaryReader): MsgVote;
}

export namespace MsgVote {
  export type AsObject = {
    proposalId: number,
    voter: string,
    option: council_v1beta1_types_pb.VoteOptionMap[keyof council_v1beta1_types_pb.VoteOptionMap],
  }
}

export class MsgVoteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgVoteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgVoteResponse): MsgVoteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgVoteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgVoteResponse;
  static deserializeBinaryFromReader(message: MsgVoteResponse, reader: jspb.BinaryReader): MsgVoteResponse;
}

export namespace MsgVoteResponse {
  export type AsObject = {
  }
}

