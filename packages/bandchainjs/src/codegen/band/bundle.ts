//@ts-nocheck
import * as _1 from "./bandtss/v1beta1/bandtss";
import * as _2 from "./bandtss/v1beta1/genesis";
import * as _3 from "./bandtss/v1beta1/query";
import * as _4 from "./bandtss/v1beta1/tx";
import * as _5 from "./base/node/v1/query";
import * as _6 from "./base/oracle/v1/proof";
import * as _7 from "./feeds/v1beta1/encoder";
import * as _8 from "./feeds/v1beta1/feeds";
import * as _9 from "./feeds/v1beta1/genesis";
import * as _10 from "./feeds/v1beta1/params";
import * as _11 from "./feeds/v1beta1/query";
import * as _12 from "./feeds/v1beta1/tx";
import * as _13 from "./globalfee/v1beta1/genesis";
import * as _14 from "./globalfee/v1beta1/query";
import * as _15 from "./globalfee/v1beta1/tx";
import * as _16 from "./oracle/v1/genesis";
import * as _17 from "./oracle/v1/oracle";
import * as _18 from "./oracle/v1/query";
import * as _19 from "./oracle/v1/tx";
import * as _20 from "./restake/v1beta1/genesis";
import * as _21 from "./restake/v1beta1/query";
import * as _22 from "./restake/v1beta1/tx";
import * as _23 from "./restake/v1beta1/types";
import * as _24 from "./rollingseed/v1beta1/genesis";
import * as _25 from "./tss/v1beta1/genesis";
import * as _26 from "./tss/v1beta1/originator";
import * as _27 from "./tss/v1beta1/query";
import * as _28 from "./tss/v1beta1/tss";
import * as _29 from "./tss/v1beta1/tx";
import * as _30 from "./tunnel/v1beta1/genesis";
import * as _31 from "./tunnel/v1beta1/params";
import * as _32 from "./tunnel/v1beta1/query";
import * as _33 from "./tunnel/v1beta1/route";
import * as _34 from "./tunnel/v1beta1/tunnel";
import * as _35 from "./tunnel/v1beta1/tx";
import * as _179 from "./bandtss/v1beta1/tx.amino";
import * as _180 from "./feeds/v1beta1/tx.amino";
import * as _181 from "./globalfee/v1beta1/tx.amino";
import * as _182 from "./oracle/v1/tx.amino";
import * as _183 from "./restake/v1beta1/tx.amino";
import * as _184 from "./tss/v1beta1/tx.amino";
import * as _185 from "./tunnel/v1beta1/tx.amino";
import * as _186 from "./bandtss/v1beta1/tx.registry";
import * as _187 from "./feeds/v1beta1/tx.registry";
import * as _188 from "./globalfee/v1beta1/tx.registry";
import * as _189 from "./oracle/v1/tx.registry";
import * as _190 from "./restake/v1beta1/tx.registry";
import * as _191 from "./tss/v1beta1/tx.registry";
import * as _192 from "./tunnel/v1beta1/tx.registry";
import * as _193 from "./bandtss/v1beta1/query.lcd";
import * as _194 from "./base/node/v1/query.lcd";
import * as _195 from "./base/oracle/v1/proof.lcd";
import * as _196 from "./feeds/v1beta1/query.lcd";
import * as _197 from "./globalfee/v1beta1/query.lcd";
import * as _198 from "./oracle/v1/query.lcd";
import * as _199 from "./restake/v1beta1/query.lcd";
import * as _200 from "./tss/v1beta1/query.lcd";
import * as _201 from "./tunnel/v1beta1/query.lcd";
import * as _202 from "./bandtss/v1beta1/query.rpc.Query";
import * as _203 from "./base/node/v1/query.rpc.Service";
import * as _204 from "./base/oracle/v1/proof.rpc.Service";
import * as _205 from "./feeds/v1beta1/query.rpc.Query";
import * as _206 from "./globalfee/v1beta1/query.rpc.Query";
import * as _207 from "./oracle/v1/query.rpc.Query";
import * as _208 from "./restake/v1beta1/query.rpc.Query";
import * as _209 from "./tss/v1beta1/query.rpc.Query";
import * as _210 from "./tunnel/v1beta1/query.rpc.Query";
import * as _211 from "./bandtss/v1beta1/tx.rpc.msg";
import * as _212 from "./feeds/v1beta1/tx.rpc.msg";
import * as _213 from "./globalfee/v1beta1/tx.rpc.msg";
import * as _214 from "./oracle/v1/tx.rpc.msg";
import * as _215 from "./restake/v1beta1/tx.rpc.msg";
import * as _216 from "./tss/v1beta1/tx.rpc.msg";
import * as _217 from "./tunnel/v1beta1/tx.rpc.msg";
import * as _313 from "./lcd";
import * as _314 from "./rpc.query";
import * as _315 from "./rpc.tx";
export namespace band {
  export namespace bandtss {
    export const v1beta1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._179,
      ..._186,
      ..._193,
      ..._202,
      ..._211
    };
  }
  export namespace base {
    export namespace node {
      export const v1 = {
        ..._5,
        ..._194,
        ..._203
      };
    }
    export namespace oracle {
      export const v1 = {
        ..._6,
        ..._195,
        ..._204
      };
    }
  }
  export namespace feeds {
    export const v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._180,
      ..._187,
      ..._196,
      ..._205,
      ..._212
    };
  }
  export namespace globalfee {
    export const v1beta1 = {
      ..._13,
      ..._14,
      ..._15,
      ..._181,
      ..._188,
      ..._197,
      ..._206,
      ..._213
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._182,
      ..._189,
      ..._198,
      ..._207,
      ..._214
    };
  }
  export namespace restake {
    export const v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._183,
      ..._190,
      ..._199,
      ..._208,
      ..._215
    };
  }
  export namespace rollingseed {
    export const v1beta1 = {
      ..._24
    };
  }
  export namespace tss {
    export const v1beta1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._184,
      ..._191,
      ..._200,
      ..._209,
      ..._216
    };
  }
  export namespace tunnel {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._185,
      ..._192,
      ..._201,
      ..._210,
      ..._217
    };
  }
  export const ClientFactory = {
    ..._313,
    ..._314,
    ..._315
  };
}