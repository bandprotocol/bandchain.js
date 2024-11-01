//@ts-nocheck
import * as _1 from "./base/node/v1/query";
import * as _2 from "./base/oracle/v1/proof";
import * as _3 from "./globalfee/v1beta1/genesis";
import * as _4 from "./globalfee/v1beta1/query";
import * as _5 from "./globalfee/v1beta1/tx";
import * as _6 from "./oracle/v1/genesis";
import * as _7 from "./oracle/v1/oracle";
import * as _8 from "./oracle/v1/query";
import * as _9 from "./oracle/v1/tx";
import * as _10 from "./restake/v1beta1/genesis";
import * as _11 from "./restake/v1beta1/query";
import * as _12 from "./restake/v1beta1/tx";
import * as _13 from "./restake/v1beta1/types";
import * as _157 from "./globalfee/v1beta1/tx.amino";
import * as _158 from "./oracle/v1/tx.amino";
import * as _159 from "./restake/v1beta1/tx.amino";
import * as _160 from "./globalfee/v1beta1/tx.registry";
import * as _161 from "./oracle/v1/tx.registry";
import * as _162 from "./restake/v1beta1/tx.registry";
import * as _163 from "./base/node/v1/query.lcd";
import * as _164 from "./base/oracle/v1/proof.lcd";
import * as _165 from "./globalfee/v1beta1/query.lcd";
import * as _166 from "./oracle/v1/query.lcd";
import * as _167 from "./restake/v1beta1/query.lcd";
import * as _168 from "./base/node/v1/query.rpc.Service";
import * as _169 from "./base/oracle/v1/proof.rpc.Service";
import * as _170 from "./globalfee/v1beta1/query.rpc.Query";
import * as _171 from "./oracle/v1/query.rpc.Query";
import * as _172 from "./restake/v1beta1/query.rpc.Query";
import * as _173 from "./globalfee/v1beta1/tx.rpc.msg";
import * as _174 from "./oracle/v1/tx.rpc.msg";
import * as _175 from "./restake/v1beta1/tx.rpc.msg";
import * as _271 from "./lcd";
import * as _272 from "./rpc.query";
import * as _273 from "./rpc.tx";
export namespace band {
  export namespace base {
    export namespace node {
      export const v1 = {
        ..._1,
        ..._163,
        ..._168
      };
    }
    export namespace oracle {
      export const v1 = {
        ..._2,
        ..._164,
        ..._169
      };
    }
  }
  export namespace globalfee {
    export const v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._157,
      ..._160,
      ..._165,
      ..._170,
      ..._173
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._158,
      ..._161,
      ..._166,
      ..._171,
      ..._174
    };
  }
  export namespace restake {
    export const v1beta1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._159,
      ..._162,
      ..._167,
      ..._172,
      ..._175
    };
  }
  export const ClientFactory = {
    ..._271,
    ..._272,
    ..._273
  };
}