//@ts-nocheck
import * as _1 from "./v1/node/query";
import * as _2 from "./v1/oracle/proof";
import * as _117 from "./v1/node/query.rpc.Service";
import * as _118 from "./v1/oracle/proof.rpc.Service";
import * as _190 from "./rpc.query";
export namespace bandchain {
  export namespace v1 {
    export const node = {
      ..._1,
      ..._117
    };
    export const oracle = {
      ..._2,
      ..._118
    };
  }
  export const ClientFactory = {
    ..._190
  };
}