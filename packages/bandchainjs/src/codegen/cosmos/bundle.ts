//@ts-nocheck
import * as _16 from "./app/runtime/v1alpha1/module";
import * as _17 from "./auth/module/v1/module";
import * as _18 from "./auth/v1beta1/auth";
import * as _19 from "./auth/v1beta1/genesis";
import * as _20 from "./auth/v1beta1/query";
import * as _21 from "./auth/v1beta1/tx";
import * as _22 from "./authz/module/v1/module";
import * as _23 from "./authz/v1beta1/authz";
import * as _24 from "./authz/v1beta1/event";
import * as _25 from "./authz/v1beta1/genesis";
import * as _26 from "./authz/v1beta1/query";
import * as _27 from "./authz/v1beta1/tx";
import * as _28 from "./bank/module/v1/module";
import * as _29 from "./bank/v1beta1/authz";
import * as _30 from "./bank/v1beta1/bank";
import * as _31 from "./bank/v1beta1/genesis";
import * as _32 from "./bank/v1beta1/query";
import * as _33 from "./bank/v1beta1/tx";
import * as _34 from "./base/abci/v1beta1/abci";
import * as _35 from "./base/node/v1beta1/query";
import * as _36 from "./base/query/v1beta1/pagination";
import * as _37 from "./base/reflection/v2alpha1/reflection";
import * as _38 from "./base/v1beta1/coin";
import * as _39 from "./circuit/module/v1/module";
import * as _40 from "./circuit/v1/query";
import * as _41 from "./circuit/v1/tx";
import * as _42 from "./circuit/v1/types";
import * as _43 from "./consensus/module/v1/module";
import * as _44 from "./consensus/v1/query";
import * as _45 from "./consensus/v1/tx";
import * as _46 from "./crisis/module/v1/module";
import * as _47 from "./crypto/ed25519/keys";
import * as _48 from "./crypto/hd/v1/hd";
import * as _49 from "./crypto/keyring/v1/record";
import * as _50 from "./crypto/multisig/keys";
import * as _51 from "./crypto/secp256k1/keys";
import * as _52 from "./crypto/secp256r1/keys";
import * as _53 from "./distribution/module/v1/module";
import * as _54 from "./distribution/v1beta1/distribution";
import * as _55 from "./distribution/v1beta1/genesis";
import * as _56 from "./distribution/v1beta1/query";
import * as _57 from "./distribution/v1beta1/tx";
import * as _58 from "./evidence/module/v1/module";
import * as _59 from "./feegrant/module/v1/module";
import * as _60 from "./feegrant/v1beta1/feegrant";
import * as _61 from "./feegrant/v1beta1/genesis";
import * as _62 from "./feegrant/v1beta1/query";
import * as _63 from "./feegrant/v1beta1/tx";
import * as _64 from "./genutil/module/v1/module";
import * as _65 from "./gov/module/v1/module";
import * as _66 from "./gov/v1/genesis";
import * as _67 from "./gov/v1/gov";
import * as _68 from "./gov/v1/query";
import * as _69 from "./gov/v1/tx";
import * as _70 from "./gov/v1beta1/genesis";
import * as _71 from "./gov/v1beta1/gov";
import * as _72 from "./gov/v1beta1/query";
import * as _73 from "./gov/v1beta1/tx";
import * as _74 from "./group/module/v1/module";
import * as _75 from "./group/v1/events";
import * as _76 from "./group/v1/genesis";
import * as _77 from "./group/v1/query";
import * as _78 from "./group/v1/tx";
import * as _79 from "./group/v1/types";
import * as _80 from "./ics23/v1/proofs";
import * as _81 from "./mint/module/v1/module";
import * as _82 from "./mint/v1beta1/genesis";
import * as _83 from "./mint/v1beta1/mint";
import * as _84 from "./mint/v1beta1/query";
import * as _85 from "./mint/v1beta1/tx";
import * as _86 from "./msg/textual/v1/textual";
import * as _87 from "./nft/module/v1/module";
import * as _88 from "./orm/module/v1alpha1/module";
import * as _89 from "./orm/query/v1alpha1/query";
import * as _90 from "./params/module/v1/module";
import * as _91 from "./params/v1beta1/params";
import * as _92 from "./params/v1beta1/query";
import * as _93 from "./query/v1/query";
import * as _94 from "./reflection/v1/reflection";
import * as _95 from "./slashing/module/v1/module";
import * as _96 from "./staking/module/v1/module";
import * as _97 from "./staking/v1beta1/authz";
import * as _98 from "./staking/v1beta1/genesis";
import * as _99 from "./staking/v1beta1/query";
import * as _100 from "./staking/v1beta1/staking";
import * as _101 from "./staking/v1beta1/tx";
import * as _102 from "./store/internal/kv/v1beta1/kv";
import * as _103 from "./store/snapshots/v1/snapshot";
import * as _104 from "./store/streaming/abci/grpc";
import * as _105 from "./store/v1beta1/commit_info";
import * as _106 from "./store/v1beta1/listening";
import * as _107 from "./tx/config/v1/config";
import * as _108 from "./tx/signing/v1beta1/signing";
import * as _109 from "./tx/v1beta1/service";
import * as _110 from "./tx/v1beta1/tx";
import * as _111 from "./upgrade/module/v1/module";
import * as _112 from "./upgrade/v1beta1/query";
import * as _113 from "./upgrade/v1beta1/tx";
import * as _114 from "./upgrade/v1beta1/upgrade";
import * as _115 from "./vesting/module/v1/module";
import * as _116 from "./vesting/v1beta1/tx";
import * as _117 from "./vesting/v1beta1/vesting";
import * as _176 from "./auth/v1beta1/tx.amino";
import * as _177 from "./authz/v1beta1/tx.amino";
import * as _178 from "./bank/v1beta1/tx.amino";
import * as _179 from "./circuit/v1/tx.amino";
import * as _180 from "./consensus/v1/tx.amino";
import * as _181 from "./distribution/v1beta1/tx.amino";
import * as _182 from "./feegrant/v1beta1/tx.amino";
import * as _183 from "./gov/v1/tx.amino";
import * as _184 from "./gov/v1beta1/tx.amino";
import * as _185 from "./group/v1/tx.amino";
import * as _186 from "./mint/v1beta1/tx.amino";
import * as _187 from "./staking/v1beta1/tx.amino";
import * as _188 from "./upgrade/v1beta1/tx.amino";
import * as _189 from "./vesting/v1beta1/tx.amino";
import * as _190 from "./auth/v1beta1/tx.registry";
import * as _191 from "./authz/v1beta1/tx.registry";
import * as _192 from "./bank/v1beta1/tx.registry";
import * as _193 from "./circuit/v1/tx.registry";
import * as _194 from "./consensus/v1/tx.registry";
import * as _195 from "./distribution/v1beta1/tx.registry";
import * as _196 from "./feegrant/v1beta1/tx.registry";
import * as _197 from "./gov/v1/tx.registry";
import * as _198 from "./gov/v1beta1/tx.registry";
import * as _199 from "./group/v1/tx.registry";
import * as _200 from "./mint/v1beta1/tx.registry";
import * as _201 from "./staking/v1beta1/tx.registry";
import * as _202 from "./upgrade/v1beta1/tx.registry";
import * as _203 from "./vesting/v1beta1/tx.registry";
import * as _204 from "./auth/v1beta1/query.lcd";
import * as _205 from "./authz/v1beta1/query.lcd";
import * as _206 from "./bank/v1beta1/query.lcd";
import * as _207 from "./base/node/v1beta1/query.lcd";
import * as _208 from "./circuit/v1/query.lcd";
import * as _209 from "./consensus/v1/query.lcd";
import * as _210 from "./distribution/v1beta1/query.lcd";
import * as _211 from "./feegrant/v1beta1/query.lcd";
import * as _212 from "./gov/v1/query.lcd";
import * as _213 from "./gov/v1beta1/query.lcd";
import * as _214 from "./group/v1/query.lcd";
import * as _215 from "./mint/v1beta1/query.lcd";
import * as _216 from "./params/v1beta1/query.lcd";
import * as _217 from "./staking/v1beta1/query.lcd";
import * as _218 from "./tx/v1beta1/service.lcd";
import * as _219 from "./upgrade/v1beta1/query.lcd";
import * as _220 from "./auth/v1beta1/query.rpc.Query";
import * as _221 from "./authz/v1beta1/query.rpc.Query";
import * as _222 from "./bank/v1beta1/query.rpc.Query";
import * as _223 from "./base/node/v1beta1/query.rpc.Service";
import * as _224 from "./circuit/v1/query.rpc.Query";
import * as _225 from "./consensus/v1/query.rpc.Query";
import * as _226 from "./distribution/v1beta1/query.rpc.Query";
import * as _227 from "./feegrant/v1beta1/query.rpc.Query";
import * as _228 from "./gov/v1/query.rpc.Query";
import * as _229 from "./gov/v1beta1/query.rpc.Query";
import * as _230 from "./group/v1/query.rpc.Query";
import * as _231 from "./mint/v1beta1/query.rpc.Query";
import * as _232 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _233 from "./params/v1beta1/query.rpc.Query";
import * as _234 from "./staking/v1beta1/query.rpc.Query";
import * as _235 from "./tx/v1beta1/service.rpc.Service";
import * as _236 from "./upgrade/v1beta1/query.rpc.Query";
import * as _237 from "./auth/v1beta1/tx.rpc.msg";
import * as _238 from "./authz/v1beta1/tx.rpc.msg";
import * as _239 from "./bank/v1beta1/tx.rpc.msg";
import * as _240 from "./circuit/v1/tx.rpc.msg";
import * as _241 from "./consensus/v1/tx.rpc.msg";
import * as _242 from "./distribution/v1beta1/tx.rpc.msg";
import * as _243 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _244 from "./gov/v1/tx.rpc.msg";
import * as _245 from "./gov/v1beta1/tx.rpc.msg";
import * as _246 from "./group/v1/tx.rpc.msg";
import * as _247 from "./mint/v1beta1/tx.rpc.msg";
import * as _248 from "./staking/v1beta1/tx.rpc.msg";
import * as _249 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _250 from "./vesting/v1beta1/tx.rpc.msg";
import * as _274 from "./lcd";
import * as _275 from "./rpc.query";
import * as _276 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._16
      };
    }
  }
  export namespace auth {
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
      ..._176,
      ..._190,
      ..._204,
      ..._220,
      ..._237
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._22
      };
    }
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._177,
      ..._191,
      ..._205,
      ..._221,
      ..._238
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._28
      };
    }
    export const v1beta1 = {
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._178,
      ..._192,
      ..._206,
      ..._222,
      ..._239
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._34
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._35,
        ..._207,
        ..._223
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._36
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._37
      };
    }
    export const v1beta1 = {
      ..._38
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._39
      };
    }
    export const v1 = {
      ..._40,
      ..._41,
      ..._42,
      ..._179,
      ..._193,
      ..._208,
      ..._224,
      ..._240
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._43
      };
    }
    export const v1 = {
      ..._44,
      ..._45,
      ..._180,
      ..._194,
      ..._209,
      ..._225,
      ..._241
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._46
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._47
    };
    export namespace hd {
      export const v1 = {
        ..._48
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._49
      };
    }
    export const multisig = {
      ..._50
    };
    export const secp256k1 = {
      ..._51
    };
    export const secp256r1 = {
      ..._52
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._53
      };
    }
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._181,
      ..._195,
      ..._210,
      ..._226,
      ..._242
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._58
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._59
      };
    }
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._182,
      ..._196,
      ..._211,
      ..._227,
      ..._243
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._64
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._65
      };
    }
    export const v1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._183,
      ..._197,
      ..._212,
      ..._228,
      ..._244
    };
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._184,
      ..._198,
      ..._213,
      ..._229,
      ..._245
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._74
      };
    }
    export const v1 = {
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._185,
      ..._199,
      ..._214,
      ..._230,
      ..._246
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._80
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._81
      };
    }
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._186,
      ..._200,
      ..._215,
      ..._231,
      ..._247
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._86
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._87
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._88
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._89,
        ..._232
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._90
      };
    }
    export const v1beta1 = {
      ..._91,
      ..._92,
      ..._216,
      ..._233
    };
  }
  export namespace query {
    export const v1 = {
      ..._93
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._94
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._95
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._96
      };
    }
    export const v1beta1 = {
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._187,
      ..._201,
      ..._217,
      ..._234,
      ..._248
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._102
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._103
      };
    }
    export namespace streaming {
      export const abci = {
        ..._104
      };
    }
    export const v1beta1 = {
      ..._105,
      ..._106
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._107
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._108
      };
    }
    export const v1beta1 = {
      ..._109,
      ..._110,
      ..._218,
      ..._235
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._111
      };
    }
    export const v1beta1 = {
      ..._112,
      ..._113,
      ..._114,
      ..._188,
      ..._202,
      ..._219,
      ..._236,
      ..._249
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._115
      };
    }
    export const v1beta1 = {
      ..._116,
      ..._117,
      ..._189,
      ..._203,
      ..._250
    };
  }
  export const ClientFactory = {
    ..._274,
    ..._275,
    ..._276
  };
}