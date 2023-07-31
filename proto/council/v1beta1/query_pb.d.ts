// package: council.v1beta1
// file: council/v1beta1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../cosmos/base/query/v1beta1/pagination_pb";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as council_v1beta1_types_pb from "../../council/v1beta1/types_pb";

export class QueryParamsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryParamsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryParamsRequest): QueryParamsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryParamsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
    static deserializeBinaryFromReader(message: QueryParamsRequest, reader: jspb.BinaryReader): QueryParamsRequest;
}

export namespace QueryParamsRequest {
    export type AsObject = {
    }
}

export class QueryParamsResponse extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): council_v1beta1_types_pb.Params | undefined;
    setParams(value?: council_v1beta1_types_pb.Params): QueryParamsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryParamsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryParamsResponse): QueryParamsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryParamsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    static deserializeBinaryFromReader(message: QueryParamsResponse, reader: jspb.BinaryReader): QueryParamsResponse;
}

export namespace QueryParamsResponse {
    export type AsObject = {
        params?: council_v1beta1_types_pb.Params.AsObject,
    }
}

export class QueryCouncilInfoRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): QueryCouncilInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryCouncilInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryCouncilInfoRequest): QueryCouncilInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryCouncilInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryCouncilInfoRequest;
    static deserializeBinaryFromReader(message: QueryCouncilInfoRequest, reader: jspb.BinaryReader): QueryCouncilInfoRequest;
}

export namespace QueryCouncilInfoRequest {
    export type AsObject = {
        name: string,
    }
}

export class QueryCouncilInfoResponse extends jspb.Message { 

    hasCouncilinfo(): boolean;
    clearCouncilinfo(): void;
    getCouncilinfo(): council_v1beta1_types_pb.CouncilInfo | undefined;
    setCouncilinfo(value?: council_v1beta1_types_pb.CouncilInfo): QueryCouncilInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryCouncilInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryCouncilInfoResponse): QueryCouncilInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryCouncilInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryCouncilInfoResponse;
    static deserializeBinaryFromReader(message: QueryCouncilInfoResponse, reader: jspb.BinaryReader): QueryCouncilInfoResponse;
}

export namespace QueryCouncilInfoResponse {
    export type AsObject = {
        councilinfo?: council_v1beta1_types_pb.CouncilInfo.AsObject,
    }
}

export class QueryCouncilInfosRequest extends jspb.Message { 

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryCouncilInfosRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryCouncilInfosRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryCouncilInfosRequest): QueryCouncilInfosRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryCouncilInfosRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryCouncilInfosRequest;
    static deserializeBinaryFromReader(message: QueryCouncilInfosRequest, reader: jspb.BinaryReader): QueryCouncilInfosRequest;
}

export namespace QueryCouncilInfosRequest {
    export type AsObject = {
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class QueryCouncilInfosResponse extends jspb.Message { 
    clearCouncilinfosList(): void;
    getCouncilinfosList(): Array<council_v1beta1_types_pb.CouncilInfo>;
    setCouncilinfosList(value: Array<council_v1beta1_types_pb.CouncilInfo>): QueryCouncilInfosResponse;
    addCouncilinfos(value?: council_v1beta1_types_pb.CouncilInfo, index?: number): council_v1beta1_types_pb.CouncilInfo;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryCouncilInfosResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryCouncilInfosResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryCouncilInfosResponse): QueryCouncilInfosResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryCouncilInfosResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryCouncilInfosResponse;
    static deserializeBinaryFromReader(message: QueryCouncilInfosResponse, reader: jspb.BinaryReader): QueryCouncilInfosResponse;
}

export namespace QueryCouncilInfosResponse {
    export type AsObject = {
        councilinfosList: Array<council_v1beta1_types_pb.CouncilInfo.AsObject>,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class QueryProposalRequest extends jspb.Message { 
    getProposalId(): number;
    setProposalId(value: number): QueryProposalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryProposalRequest): QueryProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryProposalRequest;
    static deserializeBinaryFromReader(message: QueryProposalRequest, reader: jspb.BinaryReader): QueryProposalRequest;
}

export namespace QueryProposalRequest {
    export type AsObject = {
        proposalId: number,
    }
}

export class QueryProposalResponse extends jspb.Message { 

    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): council_v1beta1_types_pb.Proposal | undefined;
    setProposal(value?: council_v1beta1_types_pb.Proposal): QueryProposalResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryProposalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryProposalResponse): QueryProposalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryProposalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryProposalResponse;
    static deserializeBinaryFromReader(message: QueryProposalResponse, reader: jspb.BinaryReader): QueryProposalResponse;
}

export namespace QueryProposalResponse {
    export type AsObject = {
        proposal?: council_v1beta1_types_pb.Proposal.AsObject,
    }
}

export class QueryProposalsRequest extends jspb.Message { 
    getProposalStatus(): string;
    setProposalStatus(value: string): QueryProposalsRequest;
    getProposer(): string;
    setProposer(value: string): QueryProposalsRequest;
    getCouncil(): string;
    setCouncil(value: string): QueryProposalsRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryProposalsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryProposalsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryProposalsRequest): QueryProposalsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryProposalsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryProposalsRequest;
    static deserializeBinaryFromReader(message: QueryProposalsRequest, reader: jspb.BinaryReader): QueryProposalsRequest;
}

export namespace QueryProposalsRequest {
    export type AsObject = {
        proposalStatus: string,
        proposer: string,
        council: string,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class QueryProposalsResponse extends jspb.Message { 
    clearProposalsList(): void;
    getProposalsList(): Array<council_v1beta1_types_pb.Proposal>;
    setProposalsList(value: Array<council_v1beta1_types_pb.Proposal>): QueryProposalsResponse;
    addProposals(value?: council_v1beta1_types_pb.Proposal, index?: number): council_v1beta1_types_pb.Proposal;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryProposalsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryProposalsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryProposalsResponse): QueryProposalsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryProposalsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryProposalsResponse;
    static deserializeBinaryFromReader(message: QueryProposalsResponse, reader: jspb.BinaryReader): QueryProposalsResponse;
}

export namespace QueryProposalsResponse {
    export type AsObject = {
        proposalsList: Array<council_v1beta1_types_pb.Proposal.AsObject>,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class QueryVotesRequest extends jspb.Message { 
    getProposalId(): number;
    setProposalId(value: number): QueryVotesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryVotesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryVotesRequest): QueryVotesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryVotesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryVotesRequest;
    static deserializeBinaryFromReader(message: QueryVotesRequest, reader: jspb.BinaryReader): QueryVotesRequest;
}

export namespace QueryVotesRequest {
    export type AsObject = {
        proposalId: number,
    }
}

export class QueryVotesResponse extends jspb.Message { 
    clearVotesList(): void;
    getVotesList(): Array<council_v1beta1_types_pb.Vote>;
    setVotesList(value: Array<council_v1beta1_types_pb.Vote>): QueryVotesResponse;
    addVotes(value?: council_v1beta1_types_pb.Vote, index?: number): council_v1beta1_types_pb.Vote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryVotesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryVotesResponse): QueryVotesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryVotesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryVotesResponse;
    static deserializeBinaryFromReader(message: QueryVotesResponse, reader: jspb.BinaryReader): QueryVotesResponse;
}

export namespace QueryVotesResponse {
    export type AsObject = {
        votesList: Array<council_v1beta1_types_pb.Vote.AsObject>,
    }
}

export class QueryTallyResultRequest extends jspb.Message { 
    getProposalId(): number;
    setProposalId(value: number): QueryTallyResultRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryTallyResultRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryTallyResultRequest): QueryTallyResultRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryTallyResultRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryTallyResultRequest;
    static deserializeBinaryFromReader(message: QueryTallyResultRequest, reader: jspb.BinaryReader): QueryTallyResultRequest;
}

export namespace QueryTallyResultRequest {
    export type AsObject = {
        proposalId: number,
    }
}

export class QueryTallyResultResponse extends jspb.Message { 

    hasTally(): boolean;
    clearTally(): void;
    getTally(): council_v1beta1_types_pb.TallyResult | undefined;
    setTally(value?: council_v1beta1_types_pb.TallyResult): QueryTallyResultResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryTallyResultResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryTallyResultResponse): QueryTallyResultResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryTallyResultResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryTallyResultResponse;
    static deserializeBinaryFromReader(message: QueryTallyResultResponse, reader: jspb.BinaryReader): QueryTallyResultResponse;
}

export namespace QueryTallyResultResponse {
    export type AsObject = {
        tally?: council_v1beta1_types_pb.TallyResult.AsObject,
    }
}
