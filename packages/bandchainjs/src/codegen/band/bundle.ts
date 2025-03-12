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
import * as _139 from "./bandtss/v1beta1/tx.amino";
import * as _140 from "./feeds/v1beta1/tx.amino";
import * as _141 from "./globalfee/v1beta1/tx.amino";
import * as _142 from "./oracle/v1/tx.amino";
import * as _143 from "./restake/v1beta1/tx.amino";
import * as _144 from "./tss/v1beta1/tx.amino";
import * as _145 from "./tunnel/v1beta1/tx.amino";
import * as _146 from "./bandtss/v1beta1/tx.registry";
import * as _147 from "./feeds/v1beta1/tx.registry";
import * as _148 from "./globalfee/v1beta1/tx.registry";
import * as _149 from "./oracle/v1/tx.registry";
import * as _150 from "./restake/v1beta1/tx.registry";
import * as _151 from "./tss/v1beta1/tx.registry";
import * as _152 from "./tunnel/v1beta1/tx.registry";
import * as _153 from "./bandtss/v1beta1/query.lcd";
import * as _154 from "./base/node/v1/query.lcd";
import * as _155 from "./base/oracle/v1/proof.lcd";
import * as _156 from "./feeds/v1beta1/query.lcd";
import * as _157 from "./globalfee/v1beta1/query.lcd";
import * as _158 from "./oracle/v1/query.lcd";
import * as _159 from "./restake/v1beta1/query.lcd";
import * as _160 from "./tss/v1beta1/query.lcd";
import * as _161 from "./tunnel/v1beta1/query.lcd";
import * as _162 from "./bandtss/v1beta1/query.rpc.Query";
import * as _163 from "./base/node/v1/query.rpc.Service";
import * as _164 from "./base/oracle/v1/proof.rpc.Service";
import * as _165 from "./feeds/v1beta1/query.rpc.Query";
import * as _166 from "./globalfee/v1beta1/query.rpc.Query";
import * as _167 from "./oracle/v1/query.rpc.Query";
import * as _168 from "./restake/v1beta1/query.rpc.Query";
import * as _169 from "./tss/v1beta1/query.rpc.Query";
import * as _170 from "./tunnel/v1beta1/query.rpc.Query";
import * as _171 from "./bandtss/v1beta1/tx.rpc.msg";
import * as _172 from "./feeds/v1beta1/tx.rpc.msg";
import * as _173 from "./globalfee/v1beta1/tx.rpc.msg";
import * as _174 from "./oracle/v1/tx.rpc.msg";
import * as _175 from "./restake/v1beta1/tx.rpc.msg";
import * as _176 from "./tss/v1beta1/tx.rpc.msg";
import * as _177 from "./tunnel/v1beta1/tx.rpc.msg";
import * as _254 from "./lcd";
import * as _255 from "./rpc.query";
import * as _256 from "./rpc.tx";
export namespace band {
  export namespace bandtss {
    export const v1beta1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._139,
      ..._146,
      ..._153,
      ..._162,
      ..._171
    };
  }
  export namespace base {
    export namespace node {
      export const v1 = {
        ..._5,
        ..._154,
        ..._163
      };
    }
    export namespace oracle {
      export const v1 = {
        ..._6,
        ..._155,
        ..._164
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
      ..._140,
      ..._147,
      ..._156,
      ..._165,
      ..._172
    };
  }
  export namespace globalfee {
    export const v1beta1 = {
      ..._13,
      ..._14,
      ..._15,
      ..._141,
      ..._148,
      ..._157,
      ..._166,
      ..._173
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._142,
      ..._149,
      ..._158,
      ..._167,
      ..._174
    };
  }
  export namespace restake {
    export const v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._143,
      ..._150,
      ..._159,
      ..._168,
      ..._175
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
      ..._144,
      ..._151,
      ..._160,
      ..._169,
      ..._176
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
      ..._145,
      ..._152,
      ..._161,
      ..._170,
      ..._177
    };
  }
  export const ClientFactory = {
    ..._254,
    ..._255,
    ..._256
  };
}