// package: cosmos.tx.v1beta1
// file: cosmos/tx/v1beta1/service.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as cosmos_base_abci_v1beta1_abci_pb from "../../../cosmos/base/abci/v1beta1/abci_pb";
import * as cosmos_tx_v1beta1_tx_pb from "../../../cosmos/tx/v1beta1/tx_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as tendermint_types_block_pb from "../../../tendermint/types/block_pb";
import * as tendermint_types_types_pb from "../../../tendermint/types/types_pb";

export class GetTxsEventRequest extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<string>;
  setEventsList(value: Array<string>): void;
  addEvents(value: string, index?: number): string;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  getOrderBy(): OrderByMap[keyof OrderByMap];
  setOrderBy(value: OrderByMap[keyof OrderByMap]): void;

  getPage(): number;
  setPage(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxsEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxsEventRequest): GetTxsEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTxsEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxsEventRequest;
  static deserializeBinaryFromReader(message: GetTxsEventRequest, reader: jspb.BinaryReader): GetTxsEventRequest;
}

export namespace GetTxsEventRequest {
  export type AsObject = {
    eventsList: Array<string>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    orderBy: OrderByMap[keyof OrderByMap],
    page: number,
    limit: number,
  }
}

export class GetTxsEventResponse extends jspb.Message {
  clearTxsList(): void;
  getTxsList(): Array<cosmos_tx_v1beta1_tx_pb.Tx>;
  setTxsList(value: Array<cosmos_tx_v1beta1_tx_pb.Tx>): void;
  addTxs(value?: cosmos_tx_v1beta1_tx_pb.Tx, index?: number): cosmos_tx_v1beta1_tx_pb.Tx;

  clearTxResponsesList(): void;
  getTxResponsesList(): Array<cosmos_base_abci_v1beta1_abci_pb.TxResponse>;
  setTxResponsesList(value: Array<cosmos_base_abci_v1beta1_abci_pb.TxResponse>): void;
  addTxResponses(value?: cosmos_base_abci_v1beta1_abci_pb.TxResponse, index?: number): cosmos_base_abci_v1beta1_abci_pb.TxResponse;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxsEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxsEventResponse): GetTxsEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTxsEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxsEventResponse;
  static deserializeBinaryFromReader(message: GetTxsEventResponse, reader: jspb.BinaryReader): GetTxsEventResponse;
}

export namespace GetTxsEventResponse {
  export type AsObject = {
    txsList: Array<cosmos_tx_v1beta1_tx_pb.Tx.AsObject>,
    txResponsesList: Array<cosmos_base_abci_v1beta1_abci_pb.TxResponse.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    total: number,
  }
}

export class BroadcastTxRequest extends jspb.Message {
  getTxBytes(): Uint8Array | string;
  getTxBytes_asU8(): Uint8Array;
  getTxBytes_asB64(): string;
  setTxBytes(value: Uint8Array | string): void;

  getMode(): BroadcastModeMap[keyof BroadcastModeMap];
  setMode(value: BroadcastModeMap[keyof BroadcastModeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastTxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastTxRequest): BroadcastTxRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BroadcastTxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastTxRequest;
  static deserializeBinaryFromReader(message: BroadcastTxRequest, reader: jspb.BinaryReader): BroadcastTxRequest;
}

export namespace BroadcastTxRequest {
  export type AsObject = {
    txBytes: Uint8Array | string,
    mode: BroadcastModeMap[keyof BroadcastModeMap],
  }
}

export class BroadcastTxResponse extends jspb.Message {
  hasTxResponse(): boolean;
  clearTxResponse(): void;
  getTxResponse(): cosmos_base_abci_v1beta1_abci_pb.TxResponse | undefined;
  setTxResponse(value?: cosmos_base_abci_v1beta1_abci_pb.TxResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastTxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastTxResponse): BroadcastTxResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BroadcastTxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastTxResponse;
  static deserializeBinaryFromReader(message: BroadcastTxResponse, reader: jspb.BinaryReader): BroadcastTxResponse;
}

export namespace BroadcastTxResponse {
  export type AsObject = {
    txResponse?: cosmos_base_abci_v1beta1_abci_pb.TxResponse.AsObject,
  }
}

export class SimulateRequest extends jspb.Message {
  hasTx(): boolean;
  clearTx(): void;
  getTx(): cosmos_tx_v1beta1_tx_pb.Tx | undefined;
  setTx(value?: cosmos_tx_v1beta1_tx_pb.Tx): void;

  getTxBytes(): Uint8Array | string;
  getTxBytes_asU8(): Uint8Array;
  getTxBytes_asB64(): string;
  setTxBytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimulateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SimulateRequest): SimulateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimulateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimulateRequest;
  static deserializeBinaryFromReader(message: SimulateRequest, reader: jspb.BinaryReader): SimulateRequest;
}

export namespace SimulateRequest {
  export type AsObject = {
    tx?: cosmos_tx_v1beta1_tx_pb.Tx.AsObject,
    txBytes: Uint8Array | string,
  }
}

export class SimulateResponse extends jspb.Message {
  hasGasInfo(): boolean;
  clearGasInfo(): void;
  getGasInfo(): cosmos_base_abci_v1beta1_abci_pb.GasInfo | undefined;
  setGasInfo(value?: cosmos_base_abci_v1beta1_abci_pb.GasInfo): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): cosmos_base_abci_v1beta1_abci_pb.Result | undefined;
  setResult(value?: cosmos_base_abci_v1beta1_abci_pb.Result): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimulateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SimulateResponse): SimulateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimulateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimulateResponse;
  static deserializeBinaryFromReader(message: SimulateResponse, reader: jspb.BinaryReader): SimulateResponse;
}

export namespace SimulateResponse {
  export type AsObject = {
    gasInfo?: cosmos_base_abci_v1beta1_abci_pb.GasInfo.AsObject,
    result?: cosmos_base_abci_v1beta1_abci_pb.Result.AsObject,
  }
}

export class GetTxRequest extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxRequest): GetTxRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxRequest;
  static deserializeBinaryFromReader(message: GetTxRequest, reader: jspb.BinaryReader): GetTxRequest;
}

export namespace GetTxRequest {
  export type AsObject = {
    hash: string,
  }
}

export class GetTxResponse extends jspb.Message {
  hasTx(): boolean;
  clearTx(): void;
  getTx(): cosmos_tx_v1beta1_tx_pb.Tx | undefined;
  setTx(value?: cosmos_tx_v1beta1_tx_pb.Tx): void;

  hasTxResponse(): boolean;
  clearTxResponse(): void;
  getTxResponse(): cosmos_base_abci_v1beta1_abci_pb.TxResponse | undefined;
  setTxResponse(value?: cosmos_base_abci_v1beta1_abci_pb.TxResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxResponse): GetTxResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxResponse;
  static deserializeBinaryFromReader(message: GetTxResponse, reader: jspb.BinaryReader): GetTxResponse;
}

export namespace GetTxResponse {
  export type AsObject = {
    tx?: cosmos_tx_v1beta1_tx_pb.Tx.AsObject,
    txResponse?: cosmos_base_abci_v1beta1_abci_pb.TxResponse.AsObject,
  }
}

export class GetBlockWithTxsRequest extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockWithTxsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockWithTxsRequest): GetBlockWithTxsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockWithTxsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockWithTxsRequest;
  static deserializeBinaryFromReader(message: GetBlockWithTxsRequest, reader: jspb.BinaryReader): GetBlockWithTxsRequest;
}

export namespace GetBlockWithTxsRequest {
  export type AsObject = {
    height: number,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class GetBlockWithTxsResponse extends jspb.Message {
  clearTxsList(): void;
  getTxsList(): Array<cosmos_tx_v1beta1_tx_pb.Tx>;
  setTxsList(value: Array<cosmos_tx_v1beta1_tx_pb.Tx>): void;
  addTxs(value?: cosmos_tx_v1beta1_tx_pb.Tx, index?: number): cosmos_tx_v1beta1_tx_pb.Tx;

  hasBlockId(): boolean;
  clearBlockId(): void;
  getBlockId(): tendermint_types_types_pb.BlockID | undefined;
  setBlockId(value?: tendermint_types_types_pb.BlockID): void;

  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): tendermint_types_block_pb.Block | undefined;
  setBlock(value?: tendermint_types_block_pb.Block): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockWithTxsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockWithTxsResponse): GetBlockWithTxsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockWithTxsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockWithTxsResponse;
  static deserializeBinaryFromReader(message: GetBlockWithTxsResponse, reader: jspb.BinaryReader): GetBlockWithTxsResponse;
}

export namespace GetBlockWithTxsResponse {
  export type AsObject = {
    txsList: Array<cosmos_tx_v1beta1_tx_pb.Tx.AsObject>,
    blockId?: tendermint_types_types_pb.BlockID.AsObject,
    block?: tendermint_types_block_pb.Block.AsObject,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class TxDecodeRequest extends jspb.Message {
  getTxBytes(): Uint8Array | string;
  getTxBytes_asU8(): Uint8Array;
  getTxBytes_asB64(): string;
  setTxBytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxDecodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TxDecodeRequest): TxDecodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxDecodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxDecodeRequest;
  static deserializeBinaryFromReader(message: TxDecodeRequest, reader: jspb.BinaryReader): TxDecodeRequest;
}

export namespace TxDecodeRequest {
  export type AsObject = {
    txBytes: Uint8Array | string,
  }
}

export class TxDecodeResponse extends jspb.Message {
  hasTx(): boolean;
  clearTx(): void;
  getTx(): cosmos_tx_v1beta1_tx_pb.Tx | undefined;
  setTx(value?: cosmos_tx_v1beta1_tx_pb.Tx): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxDecodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TxDecodeResponse): TxDecodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxDecodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxDecodeResponse;
  static deserializeBinaryFromReader(message: TxDecodeResponse, reader: jspb.BinaryReader): TxDecodeResponse;
}

export namespace TxDecodeResponse {
  export type AsObject = {
    tx?: cosmos_tx_v1beta1_tx_pb.Tx.AsObject,
  }
}

export class TxEncodeRequest extends jspb.Message {
  hasTx(): boolean;
  clearTx(): void;
  getTx(): cosmos_tx_v1beta1_tx_pb.Tx | undefined;
  setTx(value?: cosmos_tx_v1beta1_tx_pb.Tx): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxEncodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TxEncodeRequest): TxEncodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxEncodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxEncodeRequest;
  static deserializeBinaryFromReader(message: TxEncodeRequest, reader: jspb.BinaryReader): TxEncodeRequest;
}

export namespace TxEncodeRequest {
  export type AsObject = {
    tx?: cosmos_tx_v1beta1_tx_pb.Tx.AsObject,
  }
}

export class TxEncodeResponse extends jspb.Message {
  getTxBytes(): Uint8Array | string;
  getTxBytes_asU8(): Uint8Array;
  getTxBytes_asB64(): string;
  setTxBytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxEncodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TxEncodeResponse): TxEncodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxEncodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxEncodeResponse;
  static deserializeBinaryFromReader(message: TxEncodeResponse, reader: jspb.BinaryReader): TxEncodeResponse;
}

export namespace TxEncodeResponse {
  export type AsObject = {
    txBytes: Uint8Array | string,
  }
}

export class TxEncodeAminoRequest extends jspb.Message {
  getAminoJson(): string;
  setAminoJson(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxEncodeAminoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TxEncodeAminoRequest): TxEncodeAminoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxEncodeAminoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxEncodeAminoRequest;
  static deserializeBinaryFromReader(message: TxEncodeAminoRequest, reader: jspb.BinaryReader): TxEncodeAminoRequest;
}

export namespace TxEncodeAminoRequest {
  export type AsObject = {
    aminoJson: string,
  }
}

export class TxEncodeAminoResponse extends jspb.Message {
  getAminoBinary(): Uint8Array | string;
  getAminoBinary_asU8(): Uint8Array;
  getAminoBinary_asB64(): string;
  setAminoBinary(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxEncodeAminoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TxEncodeAminoResponse): TxEncodeAminoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxEncodeAminoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxEncodeAminoResponse;
  static deserializeBinaryFromReader(message: TxEncodeAminoResponse, reader: jspb.BinaryReader): TxEncodeAminoResponse;
}

export namespace TxEncodeAminoResponse {
  export type AsObject = {
    aminoBinary: Uint8Array | string,
  }
}

export class TxDecodeAminoRequest extends jspb.Message {
  getAminoBinary(): Uint8Array | string;
  getAminoBinary_asU8(): Uint8Array;
  getAminoBinary_asB64(): string;
  setAminoBinary(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxDecodeAminoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TxDecodeAminoRequest): TxDecodeAminoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxDecodeAminoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxDecodeAminoRequest;
  static deserializeBinaryFromReader(message: TxDecodeAminoRequest, reader: jspb.BinaryReader): TxDecodeAminoRequest;
}

export namespace TxDecodeAminoRequest {
  export type AsObject = {
    aminoBinary: Uint8Array | string,
  }
}

export class TxDecodeAminoResponse extends jspb.Message {
  getAminoJson(): string;
  setAminoJson(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxDecodeAminoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TxDecodeAminoResponse): TxDecodeAminoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxDecodeAminoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxDecodeAminoResponse;
  static deserializeBinaryFromReader(message: TxDecodeAminoResponse, reader: jspb.BinaryReader): TxDecodeAminoResponse;
}

export namespace TxDecodeAminoResponse {
  export type AsObject = {
    aminoJson: string,
  }
}

export interface OrderByMap {
  ORDER_BY_UNSPECIFIED: 0;
  ORDER_BY_ASC: 1;
  ORDER_BY_DESC: 2;
}

export const OrderBy: OrderByMap;

export interface BroadcastModeMap {
  BROADCAST_MODE_UNSPECIFIED: 0;
  BROADCAST_MODE_BLOCK: 1;
  BROADCAST_MODE_SYNC: 2;
  BROADCAST_MODE_ASYNC: 3;
}

export const BroadcastMode: BroadcastModeMap;

