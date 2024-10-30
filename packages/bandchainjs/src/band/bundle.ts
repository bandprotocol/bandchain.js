//@ts-nocheck
import * as _1 from "./globalfee/v1beta1/genesis";
import * as _2 from "./globalfee/v1beta1/query";
import * as _3 from "./globalfee/v1beta1/tx";
import * as _4 from "./oracle/v1/genesis";
import * as _5 from "./oracle/v1/oracle";
import * as _6 from "./oracle/v1/query";
import * as _7 from "./oracle/v1/tx";
import * as _8 from "./restake/v1beta1/genesis";
import * as _9 from "./restake/v1beta1/query";
import * as _10 from "./restake/v1beta1/tx";
import * as _11 from "./restake/v1beta1/types";
import * as _115 from "./globalfee/v1beta1/tx.amino";
import * as _116 from "./oracle/v1/tx.amino";
import * as _117 from "./restake/v1beta1/tx.amino";
import * as _118 from "./globalfee/v1beta1/tx.registry";
import * as _119 from "./oracle/v1/tx.registry";
import * as _120 from "./restake/v1beta1/tx.registry";
import * as _121 from "./globalfee/v1beta1/query.lcd";
import * as _122 from "./oracle/v1/query.lcd";
import * as _123 from "./restake/v1beta1/query.lcd";
import * as _124 from "./globalfee/v1beta1/query.rpc.Query";
import * as _125 from "./oracle/v1/query.rpc.Query";
import * as _126 from "./restake/v1beta1/query.rpc.Query";
import * as _127 from "./globalfee/v1beta1/tx.rpc.msg";
import * as _128 from "./oracle/v1/tx.rpc.msg";
import * as _129 from "./restake/v1beta1/tx.rpc.msg";
import * as _206 from "./lcd";
import * as _207 from "./rpc.query";
import * as _208 from "./rpc.tx";
export namespace band {
  export namespace globalfee {
    export const v1beta1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._115,
      ..._118,
      ..._121,
      ..._124,
      ..._127
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._116,
      ..._119,
      ..._122,
      ..._125,
      ..._128
    };
  }
  export namespace restake {
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._117,
      ..._120,
      ..._123,
      ..._126,
      ..._129
    };
  }
  export const ClientFactory = {
    ..._206,
    ..._207,
    ..._208
  };
}