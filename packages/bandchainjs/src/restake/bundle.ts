//@ts-nocheck
import * as _142 from "./v1beta1/genesis";
import * as _143 from "./v1beta1/query";
import * as _144 from "./v1beta1/tx";
import * as _145 from "./v1beta1/types";
import * as _242 from "./v1beta1/tx.amino";
import * as _243 from "./v1beta1/tx.registry";
import * as _244 from "./v1beta1/query.rpc.Query";
import * as _245 from "./v1beta1/tx.rpc.msg";
import * as _255 from "./rpc.query";
import * as _256 from "./rpc.tx";
export namespace restake {
  export const v1beta1 = {
    ..._142,
    ..._143,
    ..._144,
    ..._145,
    ..._242,
    ..._243,
    ..._244,
    ..._245
  };
  export const ClientFactory = {
    ..._255,
    ..._256
  };
}