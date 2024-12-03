//@ts-nocheck
import * as _38 from "./app/runtime/v1alpha1/module";
import * as _39 from "./auth/module/v1/module";
import * as _40 from "./auth/v1beta1/auth";
import * as _41 from "./auth/v1beta1/genesis";
import * as _42 from "./auth/v1beta1/query";
import * as _43 from "./auth/v1beta1/tx";
import * as _44 from "./authz/module/v1/module";
import * as _45 from "./authz/v1beta1/authz";
import * as _46 from "./authz/v1beta1/event";
import * as _47 from "./authz/v1beta1/genesis";
import * as _48 from "./authz/v1beta1/query";
import * as _49 from "./authz/v1beta1/tx";
import * as _50 from "./bank/module/v1/module";
import * as _51 from "./bank/v1beta1/authz";
import * as _52 from "./bank/v1beta1/bank";
import * as _53 from "./bank/v1beta1/genesis";
import * as _54 from "./bank/v1beta1/query";
import * as _55 from "./bank/v1beta1/tx";
import * as _56 from "./base/abci/v1beta1/abci";
import * as _57 from "./base/node/v1beta1/query";
import * as _58 from "./base/query/v1beta1/pagination";
import * as _59 from "./base/reflection/v2alpha1/reflection";
import * as _60 from "./base/v1beta1/coin";
import * as _61 from "./circuit/module/v1/module";
import * as _62 from "./circuit/v1/query";
import * as _63 from "./circuit/v1/tx";
import * as _64 from "./circuit/v1/types";
import * as _65 from "./consensus/module/v1/module";
import * as _66 from "./consensus/v1/query";
import * as _67 from "./consensus/v1/tx";
import * as _68 from "./crisis/module/v1/module";
import * as _69 from "./crypto/ed25519/keys";
import * as _70 from "./crypto/hd/v1/hd";
import * as _71 from "./crypto/keyring/v1/record";
import * as _72 from "./crypto/multisig/keys";
import * as _73 from "./crypto/secp256k1/keys";
import * as _74 from "./crypto/secp256r1/keys";
import * as _75 from "./distribution/module/v1/module";
import * as _76 from "./distribution/v1beta1/distribution";
import * as _77 from "./distribution/v1beta1/genesis";
import * as _78 from "./distribution/v1beta1/query";
import * as _79 from "./distribution/v1beta1/tx";
import * as _80 from "./evidence/module/v1/module";
import * as _81 from "./feegrant/module/v1/module";
import * as _82 from "./feegrant/v1beta1/feegrant";
import * as _83 from "./feegrant/v1beta1/genesis";
import * as _84 from "./feegrant/v1beta1/query";
import * as _85 from "./feegrant/v1beta1/tx";
import * as _86 from "./genutil/module/v1/module";
import * as _87 from "./gov/module/v1/module";
import * as _88 from "./gov/v1/genesis";
import * as _89 from "./gov/v1/gov";
import * as _90 from "./gov/v1/query";
import * as _91 from "./gov/v1/tx";
import * as _92 from "./gov/v1beta1/genesis";
import * as _93 from "./gov/v1beta1/gov";
import * as _94 from "./gov/v1beta1/query";
import * as _95 from "./gov/v1beta1/tx";
import * as _96 from "./group/module/v1/module";
import * as _97 from "./group/v1/events";
import * as _98 from "./group/v1/genesis";
import * as _99 from "./group/v1/query";
import * as _100 from "./group/v1/tx";
import * as _101 from "./group/v1/types";
import * as _102 from "./ics23/v1/proofs";
import * as _103 from "./mint/module/v1/module";
import * as _104 from "./mint/v1beta1/genesis";
import * as _105 from "./mint/v1beta1/mint";
import * as _106 from "./mint/v1beta1/query";
import * as _107 from "./mint/v1beta1/tx";
import * as _108 from "./msg/textual/v1/textual";
import * as _109 from "./nft/module/v1/module";
import * as _110 from "./orm/module/v1alpha1/module";
import * as _111 from "./orm/query/v1alpha1/query";
import * as _112 from "./params/module/v1/module";
import * as _113 from "./params/v1beta1/params";
import * as _114 from "./params/v1beta1/query";
import * as _115 from "./query/v1/query";
import * as _116 from "./reflection/v1/reflection";
import * as _117 from "./slashing/module/v1/module";
import * as _118 from "./staking/module/v1/module";
import * as _119 from "./staking/v1beta1/authz";
import * as _120 from "./staking/v1beta1/genesis";
import * as _121 from "./staking/v1beta1/query";
import * as _122 from "./staking/v1beta1/staking";
import * as _123 from "./staking/v1beta1/tx";
import * as _124 from "./store/internal/kv/v1beta1/kv";
import * as _125 from "./store/snapshots/v1/snapshot";
import * as _126 from "./store/streaming/abci/grpc";
import * as _127 from "./store/v1beta1/commit_info";
import * as _128 from "./store/v1beta1/listening";
import * as _129 from "./tx/config/v1/config";
import * as _130 from "./tx/signing/v1beta1/signing";
import * as _131 from "./tx/v1beta1/service";
import * as _132 from "./tx/v1beta1/tx";
import * as _133 from "./upgrade/module/v1/module";
import * as _134 from "./upgrade/v1beta1/query";
import * as _135 from "./upgrade/v1beta1/tx";
import * as _136 from "./upgrade/v1beta1/upgrade";
import * as _137 from "./vesting/module/v1/module";
import * as _138 from "./vesting/v1beta1/tx";
import * as _139 from "./vesting/v1beta1/vesting";
import * as _218 from "./auth/v1beta1/tx.amino";
import * as _219 from "./authz/v1beta1/tx.amino";
import * as _220 from "./bank/v1beta1/tx.amino";
import * as _221 from "./circuit/v1/tx.amino";
import * as _222 from "./consensus/v1/tx.amino";
import * as _223 from "./distribution/v1beta1/tx.amino";
import * as _224 from "./feegrant/v1beta1/tx.amino";
import * as _225 from "./gov/v1/tx.amino";
import * as _226 from "./gov/v1beta1/tx.amino";
import * as _227 from "./group/v1/tx.amino";
import * as _228 from "./mint/v1beta1/tx.amino";
import * as _229 from "./staking/v1beta1/tx.amino";
import * as _230 from "./upgrade/v1beta1/tx.amino";
import * as _231 from "./vesting/v1beta1/tx.amino";
import * as _232 from "./auth/v1beta1/tx.registry";
import * as _233 from "./authz/v1beta1/tx.registry";
import * as _234 from "./bank/v1beta1/tx.registry";
import * as _235 from "./circuit/v1/tx.registry";
import * as _236 from "./consensus/v1/tx.registry";
import * as _237 from "./distribution/v1beta1/tx.registry";
import * as _238 from "./feegrant/v1beta1/tx.registry";
import * as _239 from "./gov/v1/tx.registry";
import * as _240 from "./gov/v1beta1/tx.registry";
import * as _241 from "./group/v1/tx.registry";
import * as _242 from "./mint/v1beta1/tx.registry";
import * as _243 from "./staking/v1beta1/tx.registry";
import * as _244 from "./upgrade/v1beta1/tx.registry";
import * as _245 from "./vesting/v1beta1/tx.registry";
import * as _246 from "./auth/v1beta1/query.lcd";
import * as _247 from "./authz/v1beta1/query.lcd";
import * as _248 from "./bank/v1beta1/query.lcd";
import * as _249 from "./base/node/v1beta1/query.lcd";
import * as _250 from "./circuit/v1/query.lcd";
import * as _251 from "./consensus/v1/query.lcd";
import * as _252 from "./distribution/v1beta1/query.lcd";
import * as _253 from "./feegrant/v1beta1/query.lcd";
import * as _254 from "./gov/v1/query.lcd";
import * as _255 from "./gov/v1beta1/query.lcd";
import * as _256 from "./group/v1/query.lcd";
import * as _257 from "./mint/v1beta1/query.lcd";
import * as _258 from "./params/v1beta1/query.lcd";
import * as _259 from "./staking/v1beta1/query.lcd";
import * as _260 from "./tx/v1beta1/service.lcd";
import * as _261 from "./upgrade/v1beta1/query.lcd";
import * as _262 from "./auth/v1beta1/query.rpc.Query";
import * as _263 from "./authz/v1beta1/query.rpc.Query";
import * as _264 from "./bank/v1beta1/query.rpc.Query";
import * as _265 from "./base/node/v1beta1/query.rpc.Service";
import * as _266 from "./circuit/v1/query.rpc.Query";
import * as _267 from "./consensus/v1/query.rpc.Query";
import * as _268 from "./distribution/v1beta1/query.rpc.Query";
import * as _269 from "./feegrant/v1beta1/query.rpc.Query";
import * as _270 from "./gov/v1/query.rpc.Query";
import * as _271 from "./gov/v1beta1/query.rpc.Query";
import * as _272 from "./group/v1/query.rpc.Query";
import * as _273 from "./mint/v1beta1/query.rpc.Query";
import * as _274 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _275 from "./params/v1beta1/query.rpc.Query";
import * as _276 from "./staking/v1beta1/query.rpc.Query";
import * as _277 from "./tx/v1beta1/service.rpc.Service";
import * as _278 from "./upgrade/v1beta1/query.rpc.Query";
import * as _279 from "./auth/v1beta1/tx.rpc.msg";
import * as _280 from "./authz/v1beta1/tx.rpc.msg";
import * as _281 from "./bank/v1beta1/tx.rpc.msg";
import * as _282 from "./circuit/v1/tx.rpc.msg";
import * as _283 from "./consensus/v1/tx.rpc.msg";
import * as _284 from "./distribution/v1beta1/tx.rpc.msg";
import * as _285 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _286 from "./gov/v1/tx.rpc.msg";
import * as _287 from "./gov/v1beta1/tx.rpc.msg";
import * as _288 from "./group/v1/tx.rpc.msg";
import * as _289 from "./mint/v1beta1/tx.rpc.msg";
import * as _290 from "./staking/v1beta1/tx.rpc.msg";
import * as _291 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _292 from "./vesting/v1beta1/tx.rpc.msg";
import * as _316 from "./lcd";
import * as _317 from "./rpc.query";
import * as _318 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._38
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._39
      };
    }
    export const v1beta1 = {
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._218,
      ..._232,
      ..._246,
      ..._262,
      ..._279
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._44
      };
    }
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._219,
      ..._233,
      ..._247,
      ..._263,
      ..._280
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._50
      };
    }
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._220,
      ..._234,
      ..._248,
      ..._264,
      ..._281
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._56
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._57,
        ..._249,
        ..._265
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._58
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._59
      };
    }
    export const v1beta1 = {
      ..._60
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._61
      };
    }
    export const v1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._221,
      ..._235,
      ..._250,
      ..._266,
      ..._282
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._65
      };
    }
    export const v1 = {
      ..._66,
      ..._67,
      ..._222,
      ..._236,
      ..._251,
      ..._267,
      ..._283
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._68
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._69
    };
    export namespace hd {
      export const v1 = {
        ..._70
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._71
      };
    }
    export const multisig = {
      ..._72
    };
    export const secp256k1 = {
      ..._73
    };
    export const secp256r1 = {
      ..._74
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._75
      };
    }
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._223,
      ..._237,
      ..._252,
      ..._268,
      ..._284
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._80
      };
    }
  }
  export namespace feegrant {
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
      ..._224,
      ..._238,
      ..._253,
      ..._269,
      ..._285
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._86
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._87
      };
    }
    export const v1 = {
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._225,
      ..._239,
      ..._254,
      ..._270,
      ..._286
    };
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._226,
      ..._240,
      ..._255,
      ..._271,
      ..._287
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._96
      };
    }
    export const v1 = {
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._227,
      ..._241,
      ..._256,
      ..._272,
      ..._288
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._102
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._103
      };
    }
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._228,
      ..._242,
      ..._257,
      ..._273,
      ..._289
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._108
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._109
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._110
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._111,
        ..._274
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._112
      };
    }
    export const v1beta1 = {
      ..._113,
      ..._114,
      ..._258,
      ..._275
    };
  }
  export namespace query {
    export const v1 = {
      ..._115
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._116
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._117
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._118
      };
    }
    export const v1beta1 = {
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._229,
      ..._243,
      ..._259,
      ..._276,
      ..._290
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._124
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._125
      };
    }
    export namespace streaming {
      export const abci = {
        ..._126
      };
    }
    export const v1beta1 = {
      ..._127,
      ..._128
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._129
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._130
      };
    }
    export const v1beta1 = {
      ..._131,
      ..._132,
      ..._260,
      ..._277
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._133
      };
    }
    export const v1beta1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._230,
      ..._244,
      ..._261,
      ..._278,
      ..._291
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._137
      };
    }
    export const v1beta1 = {
      ..._138,
      ..._139,
      ..._231,
      ..._245,
      ..._292
    };
  }
  export const ClientFactory = {
    ..._316,
    ..._317,
    ..._318
  };
}