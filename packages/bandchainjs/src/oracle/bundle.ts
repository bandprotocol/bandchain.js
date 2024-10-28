//@ts-nocheck
import * as _138 from "./v1/genesis";
import * as _139 from "./v1/oracle";
import * as _140 from "./v1/query";
import * as _141 from "./v1/tx";
import * as _238 from "./v1/tx.amino";
import * as _239 from "./v1/tx.registry";
import * as _240 from "./v1/query.rpc.Query";
import * as _241 from "./v1/tx.rpc.msg";
import * as _253 from "./rpc.query";
import * as _254 from "./rpc.tx";
export namespace oracle {
  export const v1 = {
    ..._138,
    ..._139,
    ..._140,
    ..._141,
    ..._238,
    ..._239,
    ..._240,
    ..._241
  };
  export const ClientFactory = {
    ..._253,
    ..._254
  };
}