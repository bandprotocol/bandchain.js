//@ts-nocheck
import * as _107 from "./v1beta1/genesis";
import * as _108 from "./v1beta1/query";
import * as _109 from "./v1beta1/tx";
import * as _218 from "./v1beta1/tx.amino";
import * as _219 from "./v1beta1/tx.registry";
import * as _220 from "./v1beta1/query.rpc.Query";
import * as _221 from "./v1beta1/tx.rpc.msg";
import * as _249 from "./rpc.query";
import * as _250 from "./rpc.tx";
export namespace globalfee {
  export const v1beta1 = {
    ..._107,
    ..._108,
    ..._109,
    ..._218,
    ..._219,
    ..._220,
    ..._221
  };
  export const ClientFactory = {
    ..._249,
    ..._250
  };
}