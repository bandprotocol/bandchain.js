//@ts-nocheck
import * as _1 from "./v1/node/query";
import * as _2 from "./v1/oracle/proof";
import * as _157 from "./v1/node/query.rpc.Service";
import * as _158 from "./v1/oracle/proof.rpc.Service";
import * as _246 from "./rpc.query";
export namespace bandchain {
  export namespace v1 {
    export const node = {
      ..._1,
      ..._157
    };
    export const oracle = {
      ..._2,
      ..._158
    };
  }
  export const ClientFactory = {
    ..._246
  };
}