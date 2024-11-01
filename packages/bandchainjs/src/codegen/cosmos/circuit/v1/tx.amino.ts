//@ts-nocheck
import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx";
export const AminoConverter = {
  "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker": {
    aminoType: "cosmos-sdk/MsgAuthorizeCircuitBreaker",
    toAmino: MsgAuthorizeCircuitBreaker.toAmino,
    fromAmino: MsgAuthorizeCircuitBreaker.fromAmino
  },
  "/cosmos.circuit.v1.MsgTripCircuitBreaker": {
    aminoType: "cosmos-sdk/MsgTripCircuitBreaker",
    toAmino: MsgTripCircuitBreaker.toAmino,
    fromAmino: MsgTripCircuitBreaker.fromAmino
  },
  "/cosmos.circuit.v1.MsgResetCircuitBreaker": {
    aminoType: "cosmos-sdk/MsgResetCircuitBreaker",
    toAmino: MsgResetCircuitBreaker.toAmino,
    fromAmino: MsgResetCircuitBreaker.fromAmino
  }
};