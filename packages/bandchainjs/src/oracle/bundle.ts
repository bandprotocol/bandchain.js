//@ts-nocheck
import * as _98 from "./v1/genesis";
import * as _99 from "./v1/oracle";
import * as _100 from "./v1/query";
import * as _101 from "./v1/tx";
import * as _182 from "./v1/tx.amino";
import * as _183 from "./v1/tx.registry";
import * as _184 from "./v1/query.rpc.Query";
import * as _185 from "./v1/tx.rpc.msg";
import * as _197 from "./rpc.query";
import * as _198 from "./rpc.tx";
export namespace oracle {
  export const v1 = {
    ..._98,
    ..._99,
    ..._100,
    ..._101,
    ..._182,
    ..._183,
    ..._184,
    ..._185
  };
  export const ClientFactory = {
    ..._197,
    ..._198
  };
}