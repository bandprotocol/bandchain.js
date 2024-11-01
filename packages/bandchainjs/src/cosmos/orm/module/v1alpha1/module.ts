//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
/**
 * Module defines the ORM module which adds providers to the app container for
 * ORM ModuleDB's and in the future will automatically register query
 * services for modules that use the ORM.
 */
export interface Module {}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.orm.module.v1alpha1.Module";
  value: Uint8Array;
}
/**
 * Module defines the ORM module which adds providers to the app container for
 * ORM ModuleDB's and in the future will automatically register query
 * services for modules that use the ORM.
 */
export interface ModuleAmino {}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/**
 * Module defines the ORM module which adds providers to the app container for
 * ORM ModuleDB's and in the future will automatically register query
 * services for modules that use the ORM.
 */
export interface ModuleSDKType {}
function createBaseModule(): Module {
  return {};
}
export const Module = {
  typeUrl: "/cosmos.orm.module.v1alpha1.Module",
  encode(_: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
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
  fromPartial(_: Partial<Module>): Module {
    const message = createBaseModule();
    return message;
  },
  fromAmino(_: ModuleAmino): Module {
    const message = createBaseModule();
    return message;
  },
  toAmino(_: Module): ModuleAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.orm.module.v1alpha1.Module",
      value: Module.encode(message).finish()
    };
  }
};