//@ts-nocheck
import * as _36 from "./app/runtime/v1alpha1/module";
import * as _37 from "./auth/module/v1/module";
import * as _38 from "./auth/v1beta1/auth";
import * as _39 from "./auth/v1beta1/genesis";
import * as _40 from "./auth/v1beta1/query";
import * as _41 from "./auth/v1beta1/tx";
import * as _42 from "./authz/module/v1/module";
import * as _43 from "./authz/v1beta1/authz";
import * as _44 from "./authz/v1beta1/event";
import * as _45 from "./authz/v1beta1/genesis";
import * as _46 from "./authz/v1beta1/query";
import * as _47 from "./authz/v1beta1/tx";
import * as _48 from "./bank/module/v1/module";
import * as _49 from "./bank/v1beta1/authz";
import * as _50 from "./bank/v1beta1/bank";
import * as _51 from "./bank/v1beta1/genesis";
import * as _52 from "./bank/v1beta1/query";
import * as _53 from "./bank/v1beta1/tx";
import * as _54 from "./base/abci/v1beta1/abci";
import * as _55 from "./base/node/v1beta1/query";
import * as _56 from "./base/query/v1beta1/pagination";
import * as _57 from "./base/reflection/v2alpha1/reflection";
import * as _58 from "./base/v1beta1/coin";
import * as _59 from "./circuit/module/v1/module";
import * as _60 from "./circuit/v1/query";
import * as _61 from "./circuit/v1/tx";
import * as _62 from "./circuit/v1/types";
import * as _63 from "./consensus/module/v1/module";
import * as _64 from "./consensus/v1/query";
import * as _65 from "./consensus/v1/tx";
import * as _66 from "./crisis/module/v1/module";
import * as _67 from "./crypto/ed25519/keys";
import * as _68 from "./crypto/hd/v1/hd";
import * as _69 from "./crypto/keyring/v1/record";
import * as _70 from "./crypto/multisig/keys";
import * as _71 from "./crypto/secp256k1/keys";
import * as _72 from "./crypto/secp256r1/keys";
import * as _73 from "./distribution/module/v1/module";
import * as _74 from "./distribution/v1beta1/distribution";
import * as _75 from "./distribution/v1beta1/genesis";
import * as _76 from "./distribution/v1beta1/query";
import * as _77 from "./distribution/v1beta1/tx";
import * as _78 from "./evidence/module/v1/module";
import * as _79 from "./feegrant/module/v1/module";
import * as _80 from "./feegrant/v1beta1/feegrant";
import * as _81 from "./feegrant/v1beta1/genesis";
import * as _82 from "./feegrant/v1beta1/query";
import * as _83 from "./feegrant/v1beta1/tx";
import * as _84 from "./genutil/module/v1/module";
import * as _85 from "./gov/module/v1/module";
import * as _86 from "./gov/v1/genesis";
import * as _87 from "./gov/v1/gov";
import * as _88 from "./gov/v1/query";
import * as _89 from "./gov/v1/tx";
import * as _90 from "./gov/v1beta1/genesis";
import * as _91 from "./gov/v1beta1/gov";
import * as _92 from "./gov/v1beta1/query";
import * as _93 from "./gov/v1beta1/tx";
import * as _94 from "./group/module/v1/module";
import * as _95 from "./group/v1/events";
import * as _96 from "./group/v1/genesis";
import * as _97 from "./group/v1/query";
import * as _98 from "./group/v1/tx";
import * as _99 from "./group/v1/types";
import * as _100 from "./ics23/v1/proofs";
import * as _101 from "./mint/module/v1/module";
import * as _102 from "./mint/v1beta1/genesis";
import * as _103 from "./mint/v1beta1/mint";
import * as _104 from "./mint/v1beta1/query";
import * as _105 from "./mint/v1beta1/tx";
import * as _106 from "./msg/textual/v1/textual";
import * as _107 from "./nft/module/v1/module";
import * as _108 from "./orm/module/v1alpha1/module";
import * as _109 from "./orm/query/v1alpha1/query";
import * as _110 from "./params/module/v1/module";
import * as _111 from "./params/v1beta1/params";
import * as _112 from "./params/v1beta1/query";
import * as _113 from "./query/v1/query";
import * as _114 from "./reflection/v1/reflection";
import * as _115 from "./slashing/module/v1/module";
import * as _116 from "./staking/module/v1/module";
import * as _117 from "./staking/v1beta1/authz";
import * as _118 from "./staking/v1beta1/genesis";
import * as _119 from "./staking/v1beta1/query";
import * as _120 from "./staking/v1beta1/staking";
import * as _121 from "./staking/v1beta1/tx";
import * as _122 from "./store/internal/kv/v1beta1/kv";
import * as _123 from "./store/snapshots/v1/snapshot";
import * as _124 from "./store/streaming/abci/grpc";
import * as _125 from "./store/v1beta1/commit_info";
import * as _126 from "./store/v1beta1/listening";
import * as _127 from "./tx/config/v1/config";
import * as _128 from "./tx/signing/v1beta1/signing";
import * as _129 from "./tx/v1beta1/service";
import * as _130 from "./tx/v1beta1/tx";
import * as _131 from "./upgrade/module/v1/module";
import * as _132 from "./upgrade/v1beta1/query";
import * as _133 from "./upgrade/v1beta1/tx";
import * as _134 from "./upgrade/v1beta1/upgrade";
import * as _135 from "./vesting/module/v1/module";
import * as _136 from "./vesting/v1beta1/tx";
import * as _137 from "./vesting/v1beta1/vesting";
import * as _216 from "./auth/v1beta1/tx.amino";
import * as _217 from "./authz/v1beta1/tx.amino";
import * as _218 from "./bank/v1beta1/tx.amino";
import * as _219 from "./circuit/v1/tx.amino";
import * as _220 from "./consensus/v1/tx.amino";
import * as _221 from "./distribution/v1beta1/tx.amino";
import * as _222 from "./feegrant/v1beta1/tx.amino";
import * as _223 from "./gov/v1/tx.amino";
import * as _224 from "./gov/v1beta1/tx.amino";
import * as _225 from "./group/v1/tx.amino";
import * as _226 from "./mint/v1beta1/tx.amino";
import * as _227 from "./staking/v1beta1/tx.amino";
import * as _228 from "./upgrade/v1beta1/tx.amino";
import * as _229 from "./vesting/v1beta1/tx.amino";
import * as _230 from "./auth/v1beta1/tx.registry";
import * as _231 from "./authz/v1beta1/tx.registry";
import * as _232 from "./bank/v1beta1/tx.registry";
import * as _233 from "./circuit/v1/tx.registry";
import * as _234 from "./consensus/v1/tx.registry";
import * as _235 from "./distribution/v1beta1/tx.registry";
import * as _236 from "./feegrant/v1beta1/tx.registry";
import * as _237 from "./gov/v1/tx.registry";
import * as _238 from "./gov/v1beta1/tx.registry";
import * as _239 from "./group/v1/tx.registry";
import * as _240 from "./mint/v1beta1/tx.registry";
import * as _241 from "./staking/v1beta1/tx.registry";
import * as _242 from "./upgrade/v1beta1/tx.registry";
import * as _243 from "./vesting/v1beta1/tx.registry";
import * as _244 from "./auth/v1beta1/query.lcd";
import * as _245 from "./authz/v1beta1/query.lcd";
import * as _246 from "./bank/v1beta1/query.lcd";
import * as _247 from "./base/node/v1beta1/query.lcd";
import * as _248 from "./circuit/v1/query.lcd";
import * as _249 from "./consensus/v1/query.lcd";
import * as _250 from "./distribution/v1beta1/query.lcd";
import * as _251 from "./feegrant/v1beta1/query.lcd";
import * as _252 from "./gov/v1/query.lcd";
import * as _253 from "./gov/v1beta1/query.lcd";
import * as _254 from "./group/v1/query.lcd";
import * as _255 from "./mint/v1beta1/query.lcd";
import * as _256 from "./params/v1beta1/query.lcd";
import * as _257 from "./staking/v1beta1/query.lcd";
import * as _258 from "./tx/v1beta1/service.lcd";
import * as _259 from "./upgrade/v1beta1/query.lcd";
import * as _260 from "./auth/v1beta1/query.rpc.Query";
import * as _261 from "./authz/v1beta1/query.rpc.Query";
import * as _262 from "./bank/v1beta1/query.rpc.Query";
import * as _263 from "./base/node/v1beta1/query.rpc.Service";
import * as _264 from "./circuit/v1/query.rpc.Query";
import * as _265 from "./consensus/v1/query.rpc.Query";
import * as _266 from "./distribution/v1beta1/query.rpc.Query";
import * as _267 from "./feegrant/v1beta1/query.rpc.Query";
import * as _268 from "./gov/v1/query.rpc.Query";
import * as _269 from "./gov/v1beta1/query.rpc.Query";
import * as _270 from "./group/v1/query.rpc.Query";
import * as _271 from "./mint/v1beta1/query.rpc.Query";
import * as _272 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _273 from "./params/v1beta1/query.rpc.Query";
import * as _274 from "./staking/v1beta1/query.rpc.Query";
import * as _275 from "./tx/v1beta1/service.rpc.Service";
import * as _276 from "./upgrade/v1beta1/query.rpc.Query";
import * as _277 from "./auth/v1beta1/tx.rpc.msg";
import * as _278 from "./authz/v1beta1/tx.rpc.msg";
import * as _279 from "./bank/v1beta1/tx.rpc.msg";
import * as _280 from "./circuit/v1/tx.rpc.msg";
import * as _281 from "./consensus/v1/tx.rpc.msg";
import * as _282 from "./distribution/v1beta1/tx.rpc.msg";
import * as _283 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _284 from "./gov/v1/tx.rpc.msg";
import * as _285 from "./gov/v1beta1/tx.rpc.msg";
import * as _286 from "./group/v1/tx.rpc.msg";
import * as _287 from "./mint/v1beta1/tx.rpc.msg";
import * as _288 from "./staking/v1beta1/tx.rpc.msg";
import * as _289 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _290 from "./vesting/v1beta1/tx.rpc.msg";
import * as _314 from "./lcd";
import * as _315 from "./rpc.query";
import * as _316 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._36
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._37
      };
    }
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._216,
      ..._230,
      ..._244,
      ..._260,
      ..._277
    };
  }
  export namespace authz {
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
      ..._47,
      ..._217,
      ..._231,
      ..._245,
      ..._261,
      ..._278
    };
  }
  export namespace bank {
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
      ..._53,
      ..._218,
      ..._232,
      ..._246,
      ..._262,
      ..._279
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._54
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._55,
        ..._247,
        ..._263
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._56
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._57
      };
    }
    export const v1beta1 = {
      ..._58
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._59
      };
    }
    export const v1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._219,
      ..._233,
      ..._248,
      ..._264,
      ..._280
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._63
      };
    }
    export const v1 = {
      ..._64,
      ..._65,
      ..._220,
      ..._234,
      ..._249,
      ..._265,
      ..._281
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._66
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._67
    };
    export namespace hd {
      export const v1 = {
        ..._68
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._69
      };
    }
    export const multisig = {
      ..._70
    };
    export const secp256k1 = {
      ..._71
    };
    export const secp256r1 = {
      ..._72
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._73
      };
    }
    export const v1beta1 = {
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._221,
      ..._235,
      ..._250,
      ..._266,
      ..._282
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._78
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._79
      };
    }
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._222,
      ..._236,
      ..._251,
      ..._267,
      ..._283
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._84
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._85
      };
    }
    export const v1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._223,
      ..._237,
      ..._252,
      ..._268,
      ..._284
    };
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._224,
      ..._238,
      ..._253,
      ..._269,
      ..._285
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._94
      };
    }
    export const v1 = {
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._225,
      ..._239,
      ..._254,
      ..._270,
      ..._286
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._100
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._101
      };
    }
    export const v1beta1 = {
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._226,
      ..._240,
      ..._255,
      ..._271,
      ..._287
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._106
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._107
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._108
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._109,
        ..._272
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._110
      };
    }
    export const v1beta1 = {
      ..._111,
      ..._112,
      ..._256,
      ..._273
    };
  }
  export namespace query {
    export const v1 = {
      ..._113
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._114
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._115
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._116
      };
    }
    export const v1beta1 = {
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._227,
      ..._241,
      ..._257,
      ..._274,
      ..._288
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._122
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._123
      };
    }
    export namespace streaming {
      export const abci = {
        ..._124
      };
    }
    export const v1beta1 = {
      ..._125,
      ..._126
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._127
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._128
      };
    }
    export const v1beta1 = {
      ..._129,
      ..._130,
      ..._258,
      ..._275
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._131
      };
    }
    export const v1beta1 = {
      ..._132,
      ..._133,
      ..._134,
      ..._228,
      ..._242,
      ..._259,
      ..._276,
      ..._289
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._135
      };
    }
    export const v1beta1 = {
      ..._136,
      ..._137,
      ..._229,
      ..._243,
      ..._290
    };
  }
  export const ClientFactory = {
    ..._314,
    ..._315,
    ..._316
  };
}