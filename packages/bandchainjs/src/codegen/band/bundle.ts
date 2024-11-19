//@ts-nocheck
import * as _1 from "./bandtss/v1beta1/bandtss";
import * as _2 from "./bandtss/v1beta1/genesis";
import * as _3 from "./bandtss/v1beta1/query";
import * as _4 from "./bandtss/v1beta1/tx";
import * as _5 from "./base/node/v1/query";
import * as _6 from "./base/oracle/v1/proof";
import * as _7 from "./feeds/v1beta1/feeds";
import * as _8 from "./feeds/v1beta1/genesis";
import * as _9 from "./feeds/v1beta1/params";
import * as _10 from "./feeds/v1beta1/query";
import * as _11 from "./feeds/v1beta1/tx";
import * as _12 from "./globalfee/v1beta1/genesis";
import * as _13 from "./globalfee/v1beta1/query";
import * as _14 from "./globalfee/v1beta1/tx";
import * as _15 from "./oracle/v1/genesis";
import * as _16 from "./oracle/v1/oracle";
import * as _17 from "./oracle/v1/query";
import * as _18 from "./oracle/v1/tx";
import * as _19 from "./restake/v1beta1/genesis";
import * as _20 from "./restake/v1beta1/query";
import * as _21 from "./restake/v1beta1/tx";
import * as _22 from "./restake/v1beta1/types";
import * as _23 from "./rollingseed/v1beta1/genesis";
import * as _24 from "./tss/v1beta1/genesis";
import * as _25 from "./tss/v1beta1/originator";
import * as _26 from "./tss/v1beta1/query";
import * as _27 from "./tss/v1beta1/tss";
import * as _28 from "./tss/v1beta1/tx";
import * as _29 from "./tunnel/v1beta1/genesis";
import * as _30 from "./tunnel/v1beta1/params";
import * as _31 from "./tunnel/v1beta1/query";
import * as _32 from "./tunnel/v1beta1/tunnel";
import * as _33 from "./tunnel/v1beta1/tx";
import * as _177 from "./bandtss/v1beta1/tx.amino";
import * as _178 from "./feeds/v1beta1/tx.amino";
import * as _179 from "./globalfee/v1beta1/tx.amino";
import * as _180 from "./oracle/v1/tx.amino";
import * as _181 from "./restake/v1beta1/tx.amino";
import * as _182 from "./tss/v1beta1/tx.amino";
import * as _183 from "./tunnel/v1beta1/tx.amino";
import * as _184 from "./bandtss/v1beta1/tx.registry";
import * as _185 from "./feeds/v1beta1/tx.registry";
import * as _186 from "./globalfee/v1beta1/tx.registry";
import * as _187 from "./oracle/v1/tx.registry";
import * as _188 from "./restake/v1beta1/tx.registry";
import * as _189 from "./tss/v1beta1/tx.registry";
import * as _190 from "./tunnel/v1beta1/tx.registry";
import * as _191 from "./bandtss/v1beta1/query.lcd";
import * as _192 from "./base/node/v1/query.lcd";
import * as _193 from "./base/oracle/v1/proof.lcd";
import * as _194 from "./feeds/v1beta1/query.lcd";
import * as _195 from "./globalfee/v1beta1/query.lcd";
import * as _196 from "./oracle/v1/query.lcd";
import * as _197 from "./restake/v1beta1/query.lcd";
import * as _198 from "./tss/v1beta1/query.lcd";
import * as _199 from "./tunnel/v1beta1/query.lcd";
import * as _200 from "./bandtss/v1beta1/query.rpc.Query";
import * as _201 from "./base/node/v1/query.rpc.Service";
import * as _202 from "./base/oracle/v1/proof.rpc.Service";
import * as _203 from "./feeds/v1beta1/query.rpc.Query";
import * as _204 from "./globalfee/v1beta1/query.rpc.Query";
import * as _205 from "./oracle/v1/query.rpc.Query";
import * as _206 from "./restake/v1beta1/query.rpc.Query";
import * as _207 from "./tss/v1beta1/query.rpc.Query";
import * as _208 from "./tunnel/v1beta1/query.rpc.Query";
import * as _209 from "./bandtss/v1beta1/tx.rpc.msg";
import * as _210 from "./feeds/v1beta1/tx.rpc.msg";
import * as _211 from "./globalfee/v1beta1/tx.rpc.msg";
import * as _212 from "./oracle/v1/tx.rpc.msg";
import * as _213 from "./restake/v1beta1/tx.rpc.msg";
import * as _214 from "./tss/v1beta1/tx.rpc.msg";
import * as _215 from "./tunnel/v1beta1/tx.rpc.msg";
import * as _311 from "./lcd";
import * as _312 from "./rpc.query";
import * as _313 from "./rpc.tx";
export namespace band {
  export namespace bandtss {
    export const v1beta1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._177,
      ..._184,
      ..._191,
      ..._200,
      ..._209
    };
  }
  export namespace base {
    export namespace node {
      export const v1 = {
        ..._5,
        ..._192,
        ..._201
      };
    }
    export namespace oracle {
      export const v1 = {
        ..._6,
        ..._193,
        ..._202
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
      ..._178,
      ..._185,
      ..._194,
      ..._203,
      ..._210
    };
  }
  export namespace globalfee {
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._179,
      ..._186,
      ..._195,
      ..._204,
      ..._211
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._180,
      ..._187,
      ..._196,
      ..._205,
      ..._212
    };
  }
  export namespace restake {
    export const v1beta1 = {
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._181,
      ..._188,
      ..._197,
      ..._206,
      ..._213
    };
  }
  export namespace rollingseed {
    export const v1beta1 = {
      ..._23
    };
  }
  export namespace tss {
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._182,
      ..._189,
      ..._198,
      ..._207,
      ..._214
    };
  }
  export namespace tunnel {
    export const v1beta1 = {
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._183,
      ..._190,
      ..._199,
      ..._208,
      ..._215
    };
  }
  export const ClientFactory = {
    ..._311,
    ..._312,
    ..._313
  };
}