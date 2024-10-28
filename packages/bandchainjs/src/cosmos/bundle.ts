//@ts-nocheck
import * as _5 from "./app/runtime/v1alpha1/module";
import * as _6 from "./auth/module/v1/module";
import * as _7 from "./auth/v1beta1/auth";
import * as _8 from "./auth/v1beta1/genesis";
import * as _9 from "./auth/v1beta1/query";
import * as _10 from "./auth/v1beta1/tx";
import * as _11 from "./authz/module/v1/module";
import * as _12 from "./authz/v1beta1/authz";
import * as _13 from "./authz/v1beta1/event";
import * as _14 from "./authz/v1beta1/genesis";
import * as _15 from "./authz/v1beta1/query";
import * as _16 from "./authz/v1beta1/tx";
import * as _17 from "./bank/module/v1/module";
import * as _18 from "./bank/v1beta1/authz";
import * as _19 from "./bank/v1beta1/bank";
import * as _20 from "./bank/v1beta1/genesis";
import * as _21 from "./bank/v1beta1/query";
import * as _22 from "./bank/v1beta1/tx";
import * as _23 from "./base/abci/v1beta1/abci";
import * as _24 from "./base/node/v1beta1/query";
import * as _25 from "./base/query/v1beta1/pagination";
import * as _26 from "./base/reflection/v2alpha1/reflection";
import * as _27 from "./base/v1beta1/coin";
import * as _28 from "./circuit/module/v1/module";
import * as _29 from "./circuit/v1/query";
import * as _30 from "./circuit/v1/tx";
import * as _31 from "./circuit/v1/types";
import * as _32 from "./consensus/module/v1/module";
import * as _33 from "./consensus/v1/query";
import * as _34 from "./consensus/v1/tx";
import * as _35 from "./crisis/module/v1/module";
import * as _36 from "./crypto/ed25519/keys";
import * as _37 from "./crypto/hd/v1/hd";
import * as _38 from "./crypto/keyring/v1/record";
import * as _39 from "./crypto/multisig/keys";
import * as _40 from "./crypto/secp256k1/keys";
import * as _41 from "./crypto/secp256r1/keys";
import * as _42 from "./distribution/module/v1/module";
import * as _43 from "./distribution/v1beta1/distribution";
import * as _44 from "./distribution/v1beta1/genesis";
import * as _45 from "./distribution/v1beta1/query";
import * as _46 from "./distribution/v1beta1/tx";
import * as _47 from "./evidence/module/v1/module";
import * as _48 from "./feegrant/module/v1/module";
import * as _49 from "./feegrant/v1beta1/feegrant";
import * as _50 from "./feegrant/v1beta1/genesis";
import * as _51 from "./feegrant/v1beta1/query";
import * as _52 from "./feegrant/v1beta1/tx";
import * as _53 from "./genutil/module/v1/module";
import * as _54 from "./gov/module/v1/module";
import * as _55 from "./gov/v1/genesis";
import * as _56 from "./gov/v1/gov";
import * as _57 from "./gov/v1/query";
import * as _58 from "./gov/v1/tx";
import * as _59 from "./gov/v1beta1/genesis";
import * as _60 from "./gov/v1beta1/gov";
import * as _61 from "./gov/v1beta1/query";
import * as _62 from "./gov/v1beta1/tx";
import * as _63 from "./group/module/v1/module";
import * as _64 from "./group/v1/events";
import * as _65 from "./group/v1/genesis";
import * as _66 from "./group/v1/query";
import * as _67 from "./group/v1/tx";
import * as _68 from "./group/v1/types";
import * as _69 from "./ics23/v1/proofs";
import * as _70 from "./mint/module/v1/module";
import * as _71 from "./mint/v1beta1/genesis";
import * as _72 from "./mint/v1beta1/mint";
import * as _73 from "./mint/v1beta1/query";
import * as _74 from "./mint/v1beta1/tx";
import * as _75 from "./msg/textual/v1/textual";
import * as _76 from "./nft/module/v1/module";
import * as _77 from "./orm/module/v1alpha1/module";
import * as _78 from "./orm/query/v1alpha1/query";
import * as _79 from "./params/module/v1/module";
import * as _80 from "./params/v1beta1/params";
import * as _81 from "./params/v1beta1/query";
import * as _82 from "./query/v1/query";
import * as _83 from "./reflection/v1/reflection";
import * as _84 from "./slashing/module/v1/module";
import * as _85 from "./staking/module/v1/module";
import * as _86 from "./staking/v1beta1/authz";
import * as _87 from "./staking/v1beta1/genesis";
import * as _88 from "./staking/v1beta1/query";
import * as _89 from "./staking/v1beta1/staking";
import * as _90 from "./staking/v1beta1/tx";
import * as _91 from "./store/internal/kv/v1beta1/kv";
import * as _92 from "./store/snapshots/v1/snapshot";
import * as _93 from "./store/streaming/abci/grpc";
import * as _94 from "./store/v1beta1/commit_info";
import * as _95 from "./store/v1beta1/listening";
import * as _96 from "./tx/config/v1/config";
import * as _97 from "./tx/signing/v1beta1/signing";
import * as _98 from "./tx/v1beta1/service";
import * as _99 from "./tx/v1beta1/tx";
import * as _100 from "./upgrade/module/v1/module";
import * as _101 from "./upgrade/v1beta1/query";
import * as _102 from "./upgrade/v1beta1/tx";
import * as _103 from "./upgrade/v1beta1/upgrade";
import * as _104 from "./vesting/module/v1/module";
import * as _105 from "./vesting/v1beta1/tx";
import * as _106 from "./vesting/v1beta1/vesting";
import * as _159 from "./auth/v1beta1/tx.amino";
import * as _160 from "./authz/v1beta1/tx.amino";
import * as _161 from "./bank/v1beta1/tx.amino";
import * as _162 from "./circuit/v1/tx.amino";
import * as _163 from "./consensus/v1/tx.amino";
import * as _164 from "./distribution/v1beta1/tx.amino";
import * as _165 from "./feegrant/v1beta1/tx.amino";
import * as _166 from "./gov/v1/tx.amino";
import * as _167 from "./gov/v1beta1/tx.amino";
import * as _168 from "./group/v1/tx.amino";
import * as _169 from "./mint/v1beta1/tx.amino";
import * as _170 from "./staking/v1beta1/tx.amino";
import * as _171 from "./upgrade/v1beta1/tx.amino";
import * as _172 from "./vesting/v1beta1/tx.amino";
import * as _173 from "./auth/v1beta1/tx.registry";
import * as _174 from "./authz/v1beta1/tx.registry";
import * as _175 from "./bank/v1beta1/tx.registry";
import * as _176 from "./circuit/v1/tx.registry";
import * as _177 from "./consensus/v1/tx.registry";
import * as _178 from "./distribution/v1beta1/tx.registry";
import * as _179 from "./feegrant/v1beta1/tx.registry";
import * as _180 from "./gov/v1/tx.registry";
import * as _181 from "./gov/v1beta1/tx.registry";
import * as _182 from "./group/v1/tx.registry";
import * as _183 from "./mint/v1beta1/tx.registry";
import * as _184 from "./staking/v1beta1/tx.registry";
import * as _185 from "./upgrade/v1beta1/tx.registry";
import * as _186 from "./vesting/v1beta1/tx.registry";
import * as _187 from "./auth/v1beta1/query.rpc.Query";
import * as _188 from "./authz/v1beta1/query.rpc.Query";
import * as _189 from "./bank/v1beta1/query.rpc.Query";
import * as _190 from "./base/node/v1beta1/query.rpc.Service";
import * as _191 from "./circuit/v1/query.rpc.Query";
import * as _192 from "./consensus/v1/query.rpc.Query";
import * as _193 from "./distribution/v1beta1/query.rpc.Query";
import * as _194 from "./feegrant/v1beta1/query.rpc.Query";
import * as _195 from "./gov/v1/query.rpc.Query";
import * as _196 from "./gov/v1beta1/query.rpc.Query";
import * as _197 from "./group/v1/query.rpc.Query";
import * as _198 from "./mint/v1beta1/query.rpc.Query";
import * as _199 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _200 from "./params/v1beta1/query.rpc.Query";
import * as _201 from "./staking/v1beta1/query.rpc.Query";
import * as _202 from "./tx/v1beta1/service.rpc.Service";
import * as _203 from "./upgrade/v1beta1/query.rpc.Query";
import * as _204 from "./auth/v1beta1/tx.rpc.msg";
import * as _205 from "./authz/v1beta1/tx.rpc.msg";
import * as _206 from "./bank/v1beta1/tx.rpc.msg";
import * as _207 from "./circuit/v1/tx.rpc.msg";
import * as _208 from "./consensus/v1/tx.rpc.msg";
import * as _209 from "./distribution/v1beta1/tx.rpc.msg";
import * as _210 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _211 from "./gov/v1/tx.rpc.msg";
import * as _212 from "./gov/v1beta1/tx.rpc.msg";
import * as _213 from "./group/v1/tx.rpc.msg";
import * as _214 from "./mint/v1beta1/tx.rpc.msg";
import * as _215 from "./staking/v1beta1/tx.rpc.msg";
import * as _216 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _217 from "./vesting/v1beta1/tx.rpc.msg";
import * as _247 from "./rpc.query";
import * as _248 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._5
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._6
      };
    }
    export const v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._159,
      ..._173,
      ..._187,
      ..._204
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._11
      };
    }
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._160,
      ..._174,
      ..._188,
      ..._205
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._17
      };
    }
    export const v1beta1 = {
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._161,
      ..._175,
      ..._189,
      ..._206
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._23
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._24,
        ..._190
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._25
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._26
      };
    }
    export const v1beta1 = {
      ..._27
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._28
      };
    }
    export const v1 = {
      ..._29,
      ..._30,
      ..._31,
      ..._162,
      ..._176,
      ..._191,
      ..._207
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._32
      };
    }
    export const v1 = {
      ..._33,
      ..._34,
      ..._163,
      ..._177,
      ..._192,
      ..._208
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._35
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._36
    };
    export namespace hd {
      export const v1 = {
        ..._37
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._38
      };
    }
    export const multisig = {
      ..._39
    };
    export const secp256k1 = {
      ..._40
    };
    export const secp256r1 = {
      ..._41
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._42
      };
    }
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._164,
      ..._178,
      ..._193,
      ..._209
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._47
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._48
      };
    }
    export const v1beta1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._165,
      ..._179,
      ..._194,
      ..._210
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._53
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._54
      };
    }
    export const v1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._166,
      ..._180,
      ..._195,
      ..._211
    };
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._167,
      ..._181,
      ..._196,
      ..._212
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._63
      };
    }
    export const v1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._168,
      ..._182,
      ..._197,
      ..._213
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._69
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._70
      };
    }
    export const v1beta1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._169,
      ..._183,
      ..._198,
      ..._214
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._75
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._76
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._77
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._78,
        ..._199
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._79
      };
    }
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._200
    };
  }
  export namespace query {
    export const v1 = {
      ..._82
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._83
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._84
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._85
      };
    }
    export const v1beta1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._170,
      ..._184,
      ..._201,
      ..._215
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._91
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._92
      };
    }
    export namespace streaming {
      export const abci = {
        ..._93
      };
    }
    export const v1beta1 = {
      ..._94,
      ..._95
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._96
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._97
      };
    }
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._202
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._100
      };
    }
    export const v1beta1 = {
      ..._101,
      ..._102,
      ..._103,
      ..._171,
      ..._185,
      ..._203,
      ..._216
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._104
      };
    }
    export const v1beta1 = {
      ..._105,
      ..._106,
      ..._172,
      ..._186,
      ..._217
    };
  }
  export const ClientFactory = {
    ..._247,
    ..._248
  };
}