// package: council.v1beta1
// file: council/v1beta1/genesis.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as council_v1beta1_types_pb from "../../council/v1beta1/types_pb";

export class GenesisState extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): council_v1beta1_types_pb.Params | undefined;
    setParams(value?: council_v1beta1_types_pb.Params): GenesisState;
    clearCouncilsList(): void;
    getCouncilsList(): Array<council_v1beta1_types_pb.CouncilInfo>;
    setCouncilsList(value: Array<council_v1beta1_types_pb.CouncilInfo>): GenesisState;
    addCouncils(value?: council_v1beta1_types_pb.CouncilInfo, index?: number): council_v1beta1_types_pb.CouncilInfo;
    getProposalcount(): number;
    setProposalcount(value: number): GenesisState;
    clearProposalsList(): void;
    getProposalsList(): Array<council_v1beta1_types_pb.Proposal>;
    setProposalsList(value: Array<council_v1beta1_types_pb.Proposal>): GenesisState;
    addProposals(value?: council_v1beta1_types_pb.Proposal, index?: number): council_v1beta1_types_pb.Proposal;
    clearVotesList(): void;
    getVotesList(): Array<council_v1beta1_types_pb.Vote>;
    setVotesList(value: Array<council_v1beta1_types_pb.Vote>): GenesisState;
    addVotes(value?: council_v1beta1_types_pb.Vote, index?: number): council_v1beta1_types_pb.Vote;

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
        params?: council_v1beta1_types_pb.Params.AsObject,
        councilsList: Array<council_v1beta1_types_pb.CouncilInfo.AsObject>,
        proposalcount: number,
        proposalsList: Array<council_v1beta1_types_pb.Proposal.AsObject>,
        votesList: Array<council_v1beta1_types_pb.Vote.AsObject>,
    }
}
