//@ts-nocheck
import * as _102 from "./v1beta1/genesis";
import * as _103 from "./v1beta1/query";
import * as _104 from "./v1beta1/tx";
import * as _105 from "./v1beta1/types";
import * as _186 from "./v1beta1/tx.amino";
import * as _187 from "./v1beta1/tx.registry";
import * as _188 from "./v1beta1/query.rpc.Query";
import * as _189 from "./v1beta1/tx.rpc.msg";
import * as _199 from "./rpc.query";
import * as _200 from "./rpc.tx";
export namespace restake {
  export const v1beta1 = {
    ..._102,
    ..._103,
    ..._104,
    ..._105,
    ..._186,
    ..._187,
    ..._188,
    ..._189
  };
  export const ClientFactory = {
    ..._199,
    ..._200
  };
}