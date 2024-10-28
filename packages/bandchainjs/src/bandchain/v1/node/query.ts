//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** ChainIDRequest is request type for the Service/ChainID RPC method. */
export interface ChainIDRequest {}
export interface ChainIDRequestProtoMsg {
  typeUrl: "/bandchain.v1.node.ChainIDRequest";
  value: Uint8Array;
}
/** ChainIDRequest is request type for the Service/ChainID RPC method. */
export interface ChainIDRequestAmino {}
export interface ChainIDRequestAminoMsg {
  type: "/bandchain.v1.node.ChainIDRequest";
  value: ChainIDRequestAmino;
}
/** ChainIDRequest is request type for the Service/ChainID RPC method. */
export interface ChainIDRequestSDKType {}
/** ChainIDResponse is response type for the Service/ChainID RPC method. */
export interface ChainIDResponse {
  chainId: string;
}
export interface ChainIDResponseProtoMsg {
  typeUrl: "/bandchain.v1.node.ChainIDResponse";
  value: Uint8Array;
}
/** ChainIDResponse is response type for the Service/ChainID RPC method. */
export interface ChainIDResponseAmino {
  chain_id?: string;
}
export interface ChainIDResponseAminoMsg {
  type: "/bandchain.v1.node.ChainIDResponse";
  value: ChainIDResponseAmino;
}
/** ChainIDResponse is response type for the Service/ChainID RPC method. */
export interface ChainIDResponseSDKType {
  chain_id: string;
}
/** EVMValidatorsRequest is request type for the Service/EVMValidators RPC method. */
export interface EVMValidatorsRequest {}
export interface EVMValidatorsRequestProtoMsg {
  typeUrl: "/bandchain.v1.node.EVMValidatorsRequest";
  value: Uint8Array;
}
/** EVMValidatorsRequest is request type for the Service/EVMValidators RPC method. */
export interface EVMValidatorsRequestAmino {}
export interface EVMValidatorsRequestAminoMsg {
  type: "/bandchain.v1.node.EVMValidatorsRequest";
  value: EVMValidatorsRequestAmino;
}
/** EVMValidatorsRequest is request type for the Service/EVMValidators RPC method. */
export interface EVMValidatorsRequestSDKType {}
/** EVMValidatorsResponse is response type for the Service/EVMValidators RPC method. */
export interface EVMValidatorsResponse {
  /** BlockHeight is the latest block height */
  blockHeight: bigint;
  /** Validators is list of validator's addresss and voting power */
  validators: ValidatorMinimal[];
}
export interface EVMValidatorsResponseProtoMsg {
  typeUrl: "/bandchain.v1.node.EVMValidatorsResponse";
  value: Uint8Array;
}
/** EVMValidatorsResponse is response type for the Service/EVMValidators RPC method. */
export interface EVMValidatorsResponseAmino {
  /** BlockHeight is the latest block height */
  block_height?: string;
  /** Validators is list of validator's addresss and voting power */
  validators?: ValidatorMinimalAmino[];
}
export interface EVMValidatorsResponseAminoMsg {
  type: "/bandchain.v1.node.EVMValidatorsResponse";
  value: EVMValidatorsResponseAmino;
}
/** EVMValidatorsResponse is response type for the Service/EVMValidators RPC method. */
export interface EVMValidatorsResponseSDKType {
  block_height: bigint;
  validators: ValidatorMinimalSDKType[];
}
/** ValidatorMinimal is the data structure for storing validator's address and voting power */
export interface ValidatorMinimal {
  address: string;
  votingPower: bigint;
}
export interface ValidatorMinimalProtoMsg {
  typeUrl: "/bandchain.v1.node.ValidatorMinimal";
  value: Uint8Array;
}
/** ValidatorMinimal is the data structure for storing validator's address and voting power */
export interface ValidatorMinimalAmino {
  address?: string;
  voting_power?: string;
}
export interface ValidatorMinimalAminoMsg {
  type: "/bandchain.v1.node.ValidatorMinimal";
  value: ValidatorMinimalAmino;
}
/** ValidatorMinimal is the data structure for storing validator's address and voting power */
export interface ValidatorMinimalSDKType {
  address: string;
  voting_power: bigint;
}
function createBaseChainIDRequest(): ChainIDRequest {
  return {};
}
export const ChainIDRequest = {
  typeUrl: "/bandchain.v1.node.ChainIDRequest",
  encode(_: ChainIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChainIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<ChainIDRequest>): ChainIDRequest {
    const message = createBaseChainIDRequest();
    return message;
  },
  fromAmino(_: ChainIDRequestAmino): ChainIDRequest {
    const message = createBaseChainIDRequest();
    return message;
  },
  toAmino(_: ChainIDRequest): ChainIDRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ChainIDRequestAminoMsg): ChainIDRequest {
    return ChainIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainIDRequestProtoMsg): ChainIDRequest {
    return ChainIDRequest.decode(message.value);
  },
  toProto(message: ChainIDRequest): Uint8Array {
    return ChainIDRequest.encode(message).finish();
  },
  toProtoMsg(message: ChainIDRequest): ChainIDRequestProtoMsg {
    return {
      typeUrl: "/bandchain.v1.node.ChainIDRequest",
      value: ChainIDRequest.encode(message).finish()
    };
  }
};
function createBaseChainIDResponse(): ChainIDResponse {
  return {
    chainId: ""
  };
}
export const ChainIDResponse = {
  typeUrl: "/bandchain.v1.node.ChainIDResponse",
  encode(message: ChainIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChainIDResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ChainIDResponse>): ChainIDResponse {
    const message = createBaseChainIDResponse();
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: ChainIDResponseAmino): ChainIDResponse {
    const message = createBaseChainIDResponse();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message: ChainIDResponse): ChainIDResponseAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    return obj;
  },
  fromAminoMsg(object: ChainIDResponseAminoMsg): ChainIDResponse {
    return ChainIDResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainIDResponseProtoMsg): ChainIDResponse {
    return ChainIDResponse.decode(message.value);
  },
  toProto(message: ChainIDResponse): Uint8Array {
    return ChainIDResponse.encode(message).finish();
  },
  toProtoMsg(message: ChainIDResponse): ChainIDResponseProtoMsg {
    return {
      typeUrl: "/bandchain.v1.node.ChainIDResponse",
      value: ChainIDResponse.encode(message).finish()
    };
  }
};
function createBaseEVMValidatorsRequest(): EVMValidatorsRequest {
  return {};
}
export const EVMValidatorsRequest = {
  typeUrl: "/bandchain.v1.node.EVMValidatorsRequest",
  encode(_: EVMValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EVMValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEVMValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<EVMValidatorsRequest>): EVMValidatorsRequest {
    const message = createBaseEVMValidatorsRequest();
    return message;
  },
  fromAmino(_: EVMValidatorsRequestAmino): EVMValidatorsRequest {
    const message = createBaseEVMValidatorsRequest();
    return message;
  },
  toAmino(_: EVMValidatorsRequest): EVMValidatorsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: EVMValidatorsRequestAminoMsg): EVMValidatorsRequest {
    return EVMValidatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EVMValidatorsRequestProtoMsg): EVMValidatorsRequest {
    return EVMValidatorsRequest.decode(message.value);
  },
  toProto(message: EVMValidatorsRequest): Uint8Array {
    return EVMValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: EVMValidatorsRequest): EVMValidatorsRequestProtoMsg {
    return {
      typeUrl: "/bandchain.v1.node.EVMValidatorsRequest",
      value: EVMValidatorsRequest.encode(message).finish()
    };
  }
};
function createBaseEVMValidatorsResponse(): EVMValidatorsResponse {
  return {
    blockHeight: BigInt(0),
    validators: []
  };
}
export const EVMValidatorsResponse = {
  typeUrl: "/bandchain.v1.node.EVMValidatorsResponse",
  encode(message: EVMValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.validators) {
      ValidatorMinimal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EVMValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEVMValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.validators.push(ValidatorMinimal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EVMValidatorsResponse>): EVMValidatorsResponse {
    const message = createBaseEVMValidatorsResponse();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.validators = object.validators?.map(e => ValidatorMinimal.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EVMValidatorsResponseAmino): EVMValidatorsResponse {
    const message = createBaseEVMValidatorsResponse();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    message.validators = object.validators?.map(e => ValidatorMinimal.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EVMValidatorsResponse): EVMValidatorsResponseAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? ValidatorMinimal.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    return obj;
  },
  fromAminoMsg(object: EVMValidatorsResponseAminoMsg): EVMValidatorsResponse {
    return EVMValidatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: EVMValidatorsResponseProtoMsg): EVMValidatorsResponse {
    return EVMValidatorsResponse.decode(message.value);
  },
  toProto(message: EVMValidatorsResponse): Uint8Array {
    return EVMValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: EVMValidatorsResponse): EVMValidatorsResponseProtoMsg {
    return {
      typeUrl: "/bandchain.v1.node.EVMValidatorsResponse",
      value: EVMValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseValidatorMinimal(): ValidatorMinimal {
  return {
    address: "",
    votingPower: BigInt(0)
  };
}
export const ValidatorMinimal = {
  typeUrl: "/bandchain.v1.node.ValidatorMinimal",
  encode(message: ValidatorMinimal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.votingPower !== BigInt(0)) {
      writer.uint32(16).int64(message.votingPower);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorMinimal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorMinimal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.votingPower = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ValidatorMinimal>): ValidatorMinimal {
    const message = createBaseValidatorMinimal();
    message.address = object.address ?? "";
    message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ValidatorMinimalAmino): ValidatorMinimal {
    const message = createBaseValidatorMinimal();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.voting_power !== undefined && object.voting_power !== null) {
      message.votingPower = BigInt(object.voting_power);
    }
    return message;
  },
  toAmino(message: ValidatorMinimal): ValidatorMinimalAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.voting_power = message.votingPower !== BigInt(0) ? message.votingPower?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorMinimalAminoMsg): ValidatorMinimal {
    return ValidatorMinimal.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorMinimalProtoMsg): ValidatorMinimal {
    return ValidatorMinimal.decode(message.value);
  },
  toProto(message: ValidatorMinimal): Uint8Array {
    return ValidatorMinimal.encode(message).finish();
  },
  toProtoMsg(message: ValidatorMinimal): ValidatorMinimalProtoMsg {
    return {
      typeUrl: "/bandchain.v1.node.ValidatorMinimal",
      value: ValidatorMinimal.encode(message).finish()
    };
  }
};