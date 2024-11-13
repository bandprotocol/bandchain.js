//@ts-nocheck
import * as _1 from "./base/node/v1/query";
import * as _2 from "./base/oracle/v1/proof";
import * as _3 from "./feeds/v1beta1/feeds";
import * as _4 from "./feeds/v1beta1/genesis";
import * as _5 from "./feeds/v1beta1/params";
import * as _6 from "./feeds/v1beta1/query";
import * as _7 from "./feeds/v1beta1/tx";
import * as _8 from "./globalfee/v1beta1/genesis";
import * as _9 from "./globalfee/v1beta1/query";
import * as _10 from "./globalfee/v1beta1/tx";
import * as _11 from "./oracle/v1/genesis";
import * as _12 from "./oracle/v1/oracle";
import * as _13 from "./oracle/v1/query";
import * as _14 from "./oracle/v1/tx";
import * as _15 from "./restake/v1beta1/genesis";
import * as _16 from "./restake/v1beta1/query";
import * as _17 from "./restake/v1beta1/tx";
import * as _18 from "./restake/v1beta1/types";
import * as _162 from "./feeds/v1beta1/tx.amino";
import * as _163 from "./globalfee/v1beta1/tx.amino";
import * as _164 from "./oracle/v1/tx.amino";
import * as _165 from "./restake/v1beta1/tx.amino";
import * as _166 from "./feeds/v1beta1/tx.registry";
import * as _167 from "./globalfee/v1beta1/tx.registry";
import * as _168 from "./oracle/v1/tx.registry";
import * as _169 from "./restake/v1beta1/tx.registry";
import * as _170 from "./base/node/v1/query.lcd";
import * as _171 from "./base/oracle/v1/proof.lcd";
import * as _172 from "./feeds/v1beta1/query.lcd";
import * as _173 from "./globalfee/v1beta1/query.lcd";
import * as _174 from "./oracle/v1/query.lcd";
import * as _175 from "./restake/v1beta1/query.lcd";
import * as _176 from "./base/node/v1/query.rpc.Service";
import * as _177 from "./base/oracle/v1/proof.rpc.Service";
import * as _178 from "./feeds/v1beta1/query.rpc.Query";
import * as _179 from "./globalfee/v1beta1/query.rpc.Query";
import * as _180 from "./oracle/v1/query.rpc.Query";
import * as _181 from "./restake/v1beta1/query.rpc.Query";
import * as _182 from "./feeds/v1beta1/tx.rpc.msg";
import * as _183 from "./globalfee/v1beta1/tx.rpc.msg";
import * as _184 from "./oracle/v1/tx.rpc.msg";
import * as _185 from "./restake/v1beta1/tx.rpc.msg";
import * as _281 from "./lcd";
import * as _282 from "./rpc.query";
import * as _283 from "./rpc.tx";
export namespace band {
  export namespace base {
    export namespace node {
      export const v1 = {
        ..._1,
        ..._170,
        ..._176
      };
    }
    export namespace oracle {
      export const v1 = {
        ..._2,
        ..._171,
        ..._177
      };
    }
  }
  export namespace feeds {
    export const v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._162,
      ..._166,
      ..._172,
      ..._178,
      ..._182
    };
  }
  export namespace globalfee {
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._163,
      ..._167,
      ..._173,
      ..._179,
      ..._183
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._164,
      ..._168,
      ..._174,
      ..._180,
      ..._184
    };
  }
  export namespace restake {
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._165,
      ..._169,
      ..._175,
      ..._181,
      ..._185
    };
  }
  export const ClientFactory = {
    ..._281,
    ..._282,
    ..._283
  };
}