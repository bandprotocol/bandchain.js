//@ts-nocheck
import * as _128 from "./v1/genesis";
import * as _129 from "./v1/oracle";
import * as _130 from "./v1/query";
import * as _131 from "./v1/tx";
import * as _258 from "./v1/tx.amino";
import * as _259 from "./v1/tx.registry";
import * as _260 from "./v1/query.lcd";
import * as _261 from "./v1/query.rpc.Query";
import * as _262 from "./v1/tx.rpc.msg";
import * as _272 from "./lcd";
import * as _273 from "./rpc.query";
import * as _274 from "./rpc.tx";
export namespace oracle {
  export const v1 = {
    ..._128,
    ..._129,
    ..._130,
    ..._131,
    ..._258,
    ..._259,
    ..._260,
    ..._261,
    ..._262
  };
  export const ClientFactory = {
    ..._272,
    ..._273,
    ..._274
  };
}