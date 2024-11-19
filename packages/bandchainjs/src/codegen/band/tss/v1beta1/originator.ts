//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * DirectOriginator is a message originator defines an information of the requester
 * on direct TSS request.
 */
export interface DirectOriginator {
  $typeUrl?: "/band.tss.v1beta1.DirectOriginator";
  /** source_chain_id is the source chain ID that the data is originated from. */
  sourceChainId: string;
  /** requester is the address of the requester, it can be the user address or module address. */
  requester: string;
  /** memo is the note of the message. */
  memo: string;
}
export interface DirectOriginatorProtoMsg {
  typeUrl: "/band.tss.v1beta1.DirectOriginator";
  value: Uint8Array;
}
/**
 * DirectOriginator is a message originator defines an information of the requester
 * on direct TSS request.
 */
export interface DirectOriginatorAmino {
  /** source_chain_id is the source chain ID that the data is originated from. */
  source_chain_id?: string;
  /** requester is the address of the requester, it can be the user address or module address. */
  requester?: string;
  /** memo is the note of the message. */
  memo?: string;
}
export interface DirectOriginatorAminoMsg {
  type: "/band.tss.v1beta1.DirectOriginator";
  value: DirectOriginatorAmino;
}
/**
 * DirectOriginator is a message originator defines an information of the requester
 * on direct TSS request.
 */
export interface DirectOriginatorSDKType {
  $typeUrl?: "/band.tss.v1beta1.DirectOriginator";
  source_chain_id: string;
  requester: string;
  memo: string;
}
/**
 * TunnelOriginator is a message originator defines an information of the requester
 * on TSS request via tunnel module.
 */
export interface TunnelOriginator {
  $typeUrl?: "/band.tss.v1beta1.TunnelOriginator";
  /** source_chain_id is the source chain ID that the data is originated from. */
  sourceChainId: string;
  /** tunnel_id is the tunnel ID that the request is originated from. */
  tunnelId: bigint;
  /** contract_address is the target address that the data should be relayed to. */
  contractAddress: string;
  /** target_chain_id is the target chain ID that the data should be relayed to. */
  targetChainId: string;
}
export interface TunnelOriginatorProtoMsg {
  typeUrl: "/band.tss.v1beta1.TunnelOriginator";
  value: Uint8Array;
}
/**
 * TunnelOriginator is a message originator defines an information of the requester
 * on TSS request via tunnel module.
 */
export interface TunnelOriginatorAmino {
  /** source_chain_id is the source chain ID that the data is originated from. */
  source_chain_id?: string;
  /** tunnel_id is the tunnel ID that the request is originated from. */
  tunnel_id?: string;
  /** contract_address is the target address that the data should be relayed to. */
  contract_address?: string;
  /** target_chain_id is the target chain ID that the data should be relayed to. */
  target_chain_id?: string;
}
export interface TunnelOriginatorAminoMsg {
  type: "/band.tss.v1beta1.TunnelOriginator";
  value: TunnelOriginatorAmino;
}
/**
 * TunnelOriginator is a message originator defines an information of the requester
 * on TSS request via tunnel module.
 */
export interface TunnelOriginatorSDKType {
  $typeUrl?: "/band.tss.v1beta1.TunnelOriginator";
  source_chain_id: string;
  tunnel_id: bigint;
  contract_address: string;
  target_chain_id: string;
}
function createBaseDirectOriginator(): DirectOriginator {
  return {
    $typeUrl: "/band.tss.v1beta1.DirectOriginator",
    sourceChainId: "",
    requester: "",
    memo: ""
  };
}
export const DirectOriginator = {
  typeUrl: "/band.tss.v1beta1.DirectOriginator",
  encode(message: DirectOriginator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourceChainId !== "") {
      writer.uint32(10).string(message.sourceChainId);
    }
    if (message.requester !== "") {
      writer.uint32(18).string(message.requester);
    }
    if (message.memo !== "") {
      writer.uint32(26).string(message.memo);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DirectOriginator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDirectOriginator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceChainId = reader.string();
          break;
        case 2:
          message.requester = reader.string();
          break;
        case 3:
          message.memo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DirectOriginator>): DirectOriginator {
    const message = createBaseDirectOriginator();
    message.sourceChainId = object.sourceChainId ?? "";
    message.requester = object.requester ?? "";
    message.memo = object.memo ?? "";
    return message;
  },
  fromAmino(object: DirectOriginatorAmino): DirectOriginator {
    const message = createBaseDirectOriginator();
    if (object.source_chain_id !== undefined && object.source_chain_id !== null) {
      message.sourceChainId = object.source_chain_id;
    }
    if (object.requester !== undefined && object.requester !== null) {
      message.requester = object.requester;
    }
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = object.memo;
    }
    return message;
  },
  toAmino(message: DirectOriginator): DirectOriginatorAmino {
    const obj: any = {};
    obj.source_chain_id = message.sourceChainId === "" ? undefined : message.sourceChainId;
    obj.requester = message.requester === "" ? undefined : message.requester;
    obj.memo = message.memo === "" ? undefined : message.memo;
    return obj;
  },
  fromAminoMsg(object: DirectOriginatorAminoMsg): DirectOriginator {
    return DirectOriginator.fromAmino(object.value);
  },
  fromProtoMsg(message: DirectOriginatorProtoMsg): DirectOriginator {
    return DirectOriginator.decode(message.value);
  },
  toProto(message: DirectOriginator): Uint8Array {
    return DirectOriginator.encode(message).finish();
  },
  toProtoMsg(message: DirectOriginator): DirectOriginatorProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.DirectOriginator",
      value: DirectOriginator.encode(message).finish()
    };
  }
};
function createBaseTunnelOriginator(): TunnelOriginator {
  return {
    $typeUrl: "/band.tss.v1beta1.TunnelOriginator",
    sourceChainId: "",
    tunnelId: BigInt(0),
    contractAddress: "",
    targetChainId: ""
  };
}
export const TunnelOriginator = {
  typeUrl: "/band.tss.v1beta1.TunnelOriginator",
  encode(message: TunnelOriginator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourceChainId !== "") {
      writer.uint32(10).string(message.sourceChainId);
    }
    if (message.tunnelId !== BigInt(0)) {
      writer.uint32(16).uint64(message.tunnelId);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.targetChainId !== "") {
      writer.uint32(34).string(message.targetChainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TunnelOriginator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTunnelOriginator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceChainId = reader.string();
          break;
        case 2:
          message.tunnelId = reader.uint64();
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        case 4:
          message.targetChainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TunnelOriginator>): TunnelOriginator {
    const message = createBaseTunnelOriginator();
    message.sourceChainId = object.sourceChainId ?? "";
    message.tunnelId = object.tunnelId !== undefined && object.tunnelId !== null ? BigInt(object.tunnelId.toString()) : BigInt(0);
    message.contractAddress = object.contractAddress ?? "";
    message.targetChainId = object.targetChainId ?? "";
    return message;
  },
  fromAmino(object: TunnelOriginatorAmino): TunnelOriginator {
    const message = createBaseTunnelOriginator();
    if (object.source_chain_id !== undefined && object.source_chain_id !== null) {
      message.sourceChainId = object.source_chain_id;
    }
    if (object.tunnel_id !== undefined && object.tunnel_id !== null) {
      message.tunnelId = BigInt(object.tunnel_id);
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.target_chain_id !== undefined && object.target_chain_id !== null) {
      message.targetChainId = object.target_chain_id;
    }
    return message;
  },
  toAmino(message: TunnelOriginator): TunnelOriginatorAmino {
    const obj: any = {};
    obj.source_chain_id = message.sourceChainId === "" ? undefined : message.sourceChainId;
    obj.tunnel_id = message.tunnelId !== BigInt(0) ? message.tunnelId?.toString() : undefined;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.target_chain_id = message.targetChainId === "" ? undefined : message.targetChainId;
    return obj;
  },
  fromAminoMsg(object: TunnelOriginatorAminoMsg): TunnelOriginator {
    return TunnelOriginator.fromAmino(object.value);
  },
  fromProtoMsg(message: TunnelOriginatorProtoMsg): TunnelOriginator {
    return TunnelOriginator.decode(message.value);
  },
  toProto(message: TunnelOriginator): Uint8Array {
    return TunnelOriginator.encode(message).finish();
  },
  toProtoMsg(message: TunnelOriginator): TunnelOriginatorProtoMsg {
    return {
      typeUrl: "/band.tss.v1beta1.TunnelOriginator",
      value: TunnelOriginator.encode(message).finish()
    };
  }
};