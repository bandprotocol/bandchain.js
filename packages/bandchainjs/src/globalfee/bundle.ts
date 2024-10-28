//@ts-nocheck
import * as _67 from "./v1beta1/genesis";
import * as _68 from "./v1beta1/query";
import * as _69 from "./v1beta1/tx";
import * as _162 from "./v1beta1/tx.amino";
import * as _163 from "./v1beta1/tx.registry";
import * as _164 from "./v1beta1/query.rpc.Query";
import * as _165 from "./v1beta1/tx.rpc.msg";
import * as _193 from "./rpc.query";
import * as _194 from "./rpc.tx";
export namespace globalfee {
  export const v1beta1 = {
    ..._67,
    ..._68,
    ..._69,
    ..._162,
    ..._163,
    ..._164,
    ..._165
  };
  export const ClientFactory = {
    ..._193,
    ..._194
  };
}