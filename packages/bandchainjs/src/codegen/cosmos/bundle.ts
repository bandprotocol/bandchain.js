//@ts-nocheck
import * as _21 from "./app/runtime/v1alpha1/module";
import * as _22 from "./auth/module/v1/module";
import * as _23 from "./auth/v1beta1/auth";
import * as _24 from "./auth/v1beta1/genesis";
import * as _25 from "./auth/v1beta1/query";
import * as _26 from "./auth/v1beta1/tx";
import * as _27 from "./authz/module/v1/module";
import * as _28 from "./authz/v1beta1/authz";
import * as _29 from "./authz/v1beta1/event";
import * as _30 from "./authz/v1beta1/genesis";
import * as _31 from "./authz/v1beta1/query";
import * as _32 from "./authz/v1beta1/tx";
import * as _33 from "./bank/module/v1/module";
import * as _34 from "./bank/v1beta1/authz";
import * as _35 from "./bank/v1beta1/bank";
import * as _36 from "./bank/v1beta1/genesis";
import * as _37 from "./bank/v1beta1/query";
import * as _38 from "./bank/v1beta1/tx";
import * as _39 from "./base/abci/v1beta1/abci";
import * as _40 from "./base/node/v1beta1/query";
import * as _41 from "./base/query/v1beta1/pagination";
import * as _42 from "./base/reflection/v2alpha1/reflection";
import * as _43 from "./base/v1beta1/coin";
import * as _44 from "./circuit/module/v1/module";
import * as _45 from "./circuit/v1/query";
import * as _46 from "./circuit/v1/tx";
import * as _47 from "./circuit/v1/types";
import * as _48 from "./consensus/module/v1/module";
import * as _49 from "./consensus/v1/query";
import * as _50 from "./consensus/v1/tx";
import * as _51 from "./crisis/module/v1/module";
import * as _52 from "./crypto/ed25519/keys";
import * as _53 from "./crypto/hd/v1/hd";
import * as _54 from "./crypto/keyring/v1/record";
import * as _55 from "./crypto/multisig/keys";
import * as _56 from "./crypto/secp256k1/keys";
import * as _57 from "./crypto/secp256r1/keys";
import * as _58 from "./distribution/module/v1/module";
import * as _59 from "./distribution/v1beta1/distribution";
import * as _60 from "./distribution/v1beta1/genesis";
import * as _61 from "./distribution/v1beta1/query";
import * as _62 from "./distribution/v1beta1/tx";
import * as _63 from "./evidence/module/v1/module";
import * as _64 from "./feegrant/module/v1/module";
import * as _65 from "./feegrant/v1beta1/feegrant";
import * as _66 from "./feegrant/v1beta1/genesis";
import * as _67 from "./feegrant/v1beta1/query";
import * as _68 from "./feegrant/v1beta1/tx";
import * as _69 from "./genutil/module/v1/module";
import * as _70 from "./gov/module/v1/module";
import * as _71 from "./gov/v1/genesis";
import * as _72 from "./gov/v1/gov";
import * as _73 from "./gov/v1/query";
import * as _74 from "./gov/v1/tx";
import * as _75 from "./gov/v1beta1/genesis";
import * as _76 from "./gov/v1beta1/gov";
import * as _77 from "./gov/v1beta1/query";
import * as _78 from "./gov/v1beta1/tx";
import * as _79 from "./group/module/v1/module";
import * as _80 from "./group/v1/events";
import * as _81 from "./group/v1/genesis";
import * as _82 from "./group/v1/query";
import * as _83 from "./group/v1/tx";
import * as _84 from "./group/v1/types";
import * as _85 from "./ics23/v1/proofs";
import * as _86 from "./mint/module/v1/module";
import * as _87 from "./mint/v1beta1/genesis";
import * as _88 from "./mint/v1beta1/mint";
import * as _89 from "./mint/v1beta1/query";
import * as _90 from "./mint/v1beta1/tx";
import * as _91 from "./msg/textual/v1/textual";
import * as _92 from "./nft/module/v1/module";
import * as _93 from "./orm/module/v1alpha1/module";
import * as _94 from "./orm/query/v1alpha1/query";
import * as _95 from "./params/module/v1/module";
import * as _96 from "./params/v1beta1/params";
import * as _97 from "./params/v1beta1/query";
import * as _98 from "./query/v1/query";
import * as _99 from "./reflection/v1/reflection";
import * as _100 from "./slashing/module/v1/module";
import * as _101 from "./staking/module/v1/module";
import * as _102 from "./staking/v1beta1/authz";
import * as _103 from "./staking/v1beta1/genesis";
import * as _104 from "./staking/v1beta1/query";
import * as _105 from "./staking/v1beta1/staking";
import * as _106 from "./staking/v1beta1/tx";
import * as _107 from "./store/internal/kv/v1beta1/kv";
import * as _108 from "./store/snapshots/v1/snapshot";
import * as _109 from "./store/streaming/abci/grpc";
import * as _110 from "./store/v1beta1/commit_info";
import * as _111 from "./store/v1beta1/listening";
import * as _112 from "./tx/config/v1/config";
import * as _113 from "./tx/signing/v1beta1/signing";
import * as _114 from "./tx/v1beta1/service";
import * as _115 from "./tx/v1beta1/tx";
import * as _116 from "./upgrade/module/v1/module";
import * as _117 from "./upgrade/v1beta1/query";
import * as _118 from "./upgrade/v1beta1/tx";
import * as _119 from "./upgrade/v1beta1/upgrade";
import * as _120 from "./vesting/module/v1/module";
import * as _121 from "./vesting/v1beta1/tx";
import * as _122 from "./vesting/v1beta1/vesting";
import * as _186 from "./auth/v1beta1/tx.amino";
import * as _187 from "./authz/v1beta1/tx.amino";
import * as _188 from "./bank/v1beta1/tx.amino";
import * as _189 from "./circuit/v1/tx.amino";
import * as _190 from "./consensus/v1/tx.amino";
import * as _191 from "./distribution/v1beta1/tx.amino";
import * as _192 from "./feegrant/v1beta1/tx.amino";
import * as _193 from "./gov/v1/tx.amino";
import * as _194 from "./gov/v1beta1/tx.amino";
import * as _195 from "./group/v1/tx.amino";
import * as _196 from "./mint/v1beta1/tx.amino";
import * as _197 from "./staking/v1beta1/tx.amino";
import * as _198 from "./upgrade/v1beta1/tx.amino";
import * as _199 from "./vesting/v1beta1/tx.amino";
import * as _200 from "./auth/v1beta1/tx.registry";
import * as _201 from "./authz/v1beta1/tx.registry";
import * as _202 from "./bank/v1beta1/tx.registry";
import * as _203 from "./circuit/v1/tx.registry";
import * as _204 from "./consensus/v1/tx.registry";
import * as _205 from "./distribution/v1beta1/tx.registry";
import * as _206 from "./feegrant/v1beta1/tx.registry";
import * as _207 from "./gov/v1/tx.registry";
import * as _208 from "./gov/v1beta1/tx.registry";
import * as _209 from "./group/v1/tx.registry";
import * as _210 from "./mint/v1beta1/tx.registry";
import * as _211 from "./staking/v1beta1/tx.registry";
import * as _212 from "./upgrade/v1beta1/tx.registry";
import * as _213 from "./vesting/v1beta1/tx.registry";
import * as _214 from "./auth/v1beta1/query.lcd";
import * as _215 from "./authz/v1beta1/query.lcd";
import * as _216 from "./bank/v1beta1/query.lcd";
import * as _217 from "./base/node/v1beta1/query.lcd";
import * as _218 from "./circuit/v1/query.lcd";
import * as _219 from "./consensus/v1/query.lcd";
import * as _220 from "./distribution/v1beta1/query.lcd";
import * as _221 from "./feegrant/v1beta1/query.lcd";
import * as _222 from "./gov/v1/query.lcd";
import * as _223 from "./gov/v1beta1/query.lcd";
import * as _224 from "./group/v1/query.lcd";
import * as _225 from "./mint/v1beta1/query.lcd";
import * as _226 from "./params/v1beta1/query.lcd";
import * as _227 from "./staking/v1beta1/query.lcd";
import * as _228 from "./tx/v1beta1/service.lcd";
import * as _229 from "./upgrade/v1beta1/query.lcd";
import * as _230 from "./auth/v1beta1/query.rpc.Query";
import * as _231 from "./authz/v1beta1/query.rpc.Query";
import * as _232 from "./bank/v1beta1/query.rpc.Query";
import * as _233 from "./base/node/v1beta1/query.rpc.Service";
import * as _234 from "./circuit/v1/query.rpc.Query";
import * as _235 from "./consensus/v1/query.rpc.Query";
import * as _236 from "./distribution/v1beta1/query.rpc.Query";
import * as _237 from "./feegrant/v1beta1/query.rpc.Query";
import * as _238 from "./gov/v1/query.rpc.Query";
import * as _239 from "./gov/v1beta1/query.rpc.Query";
import * as _240 from "./group/v1/query.rpc.Query";
import * as _241 from "./mint/v1beta1/query.rpc.Query";
import * as _242 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _243 from "./params/v1beta1/query.rpc.Query";
import * as _244 from "./staking/v1beta1/query.rpc.Query";
import * as _245 from "./tx/v1beta1/service.rpc.Service";
import * as _246 from "./upgrade/v1beta1/query.rpc.Query";
import * as _247 from "./auth/v1beta1/tx.rpc.msg";
import * as _248 from "./authz/v1beta1/tx.rpc.msg";
import * as _249 from "./bank/v1beta1/tx.rpc.msg";
import * as _250 from "./circuit/v1/tx.rpc.msg";
import * as _251 from "./consensus/v1/tx.rpc.msg";
import * as _252 from "./distribution/v1beta1/tx.rpc.msg";
import * as _253 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _254 from "./gov/v1/tx.rpc.msg";
import * as _255 from "./gov/v1beta1/tx.rpc.msg";
import * as _256 from "./group/v1/tx.rpc.msg";
import * as _257 from "./mint/v1beta1/tx.rpc.msg";
import * as _258 from "./staking/v1beta1/tx.rpc.msg";
import * as _259 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _260 from "./vesting/v1beta1/tx.rpc.msg";
import * as _284 from "./lcd";
import * as _285 from "./rpc.query";
import * as _286 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._21
      };
    }
  }
  export namespace auth {
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
      ..._186,
      ..._200,
      ..._214,
      ..._230,
      ..._247
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._27
      };
    }
    export const v1beta1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._187,
      ..._201,
      ..._215,
      ..._231,
      ..._248
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._33
      };
    }
    export const v1beta1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._188,
      ..._202,
      ..._216,
      ..._232,
      ..._249
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._39
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._40,
        ..._217,
        ..._233
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._41
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._42
      };
    }
    export const v1beta1 = {
      ..._43
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._44
      };
    }
    export const v1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._189,
      ..._203,
      ..._218,
      ..._234,
      ..._250
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._48
      };
    }
    export const v1 = {
      ..._49,
      ..._50,
      ..._190,
      ..._204,
      ..._219,
      ..._235,
      ..._251
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._51
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._52
    };
    export namespace hd {
      export const v1 = {
        ..._53
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._54
      };
    }
    export const multisig = {
      ..._55
    };
    export const secp256k1 = {
      ..._56
    };
    export const secp256r1 = {
      ..._57
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._58
      };
    }
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._191,
      ..._205,
      ..._220,
      ..._236,
      ..._252
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._63
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._64
      };
    }
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._192,
      ..._206,
      ..._221,
      ..._237,
      ..._253
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._69
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._70
      };
    }
    export const v1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._193,
      ..._207,
      ..._222,
      ..._238,
      ..._254
    };
    export const v1beta1 = {
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._194,
      ..._208,
      ..._223,
      ..._239,
      ..._255
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._79
      };
    }
    export const v1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._195,
      ..._209,
      ..._224,
      ..._240,
      ..._256
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._85
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._86
      };
    }
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._196,
      ..._210,
      ..._225,
      ..._241,
      ..._257
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._91
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._92
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._93
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._94,
        ..._242
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._95
      };
    }
    export const v1beta1 = {
      ..._96,
      ..._97,
      ..._226,
      ..._243
    };
  }
  export namespace query {
    export const v1 = {
      ..._98
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._99
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._100
      };
    }
  }
  export namespace staking {
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
      ..._106,
      ..._197,
      ..._211,
      ..._227,
      ..._244,
      ..._258
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._107
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._108
      };
    }
    export namespace streaming {
      export const abci = {
        ..._109
      };
    }
    export const v1beta1 = {
      ..._110,
      ..._111
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._112
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._113
      };
    }
    export const v1beta1 = {
      ..._114,
      ..._115,
      ..._228,
      ..._245
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._116
      };
    }
    export const v1beta1 = {
      ..._117,
      ..._118,
      ..._119,
      ..._198,
      ..._212,
      ..._229,
      ..._246,
      ..._259
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._120
      };
    }
    export const v1beta1 = {
      ..._121,
      ..._122,
      ..._199,
      ..._213,
      ..._260
    };
  }
  export const ClientFactory = {
    ..._284,
    ..._285,
    ..._286
  };
}