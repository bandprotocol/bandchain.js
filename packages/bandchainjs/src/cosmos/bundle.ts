//@ts-nocheck
import * as _5 from "./auth/v1beta1/auth";
import * as _6 from "./auth/v1beta1/genesis";
import * as _7 from "./auth/v1beta1/query";
import * as _8 from "./authz/v1beta1/authz";
import * as _9 from "./authz/v1beta1/event";
import * as _10 from "./authz/v1beta1/genesis";
import * as _11 from "./authz/v1beta1/query";
import * as _12 from "./authz/v1beta1/tx";
import * as _13 from "./bank/v1beta1/authz";
import * as _14 from "./bank/v1beta1/bank";
import * as _15 from "./bank/v1beta1/genesis";
import * as _16 from "./bank/v1beta1/query";
import * as _17 from "./bank/v1beta1/tx";
import * as _18 from "./base/abci/v1beta1/abci";
import * as _19 from "./base/query/v1beta1/pagination";
import * as _20 from "./base/reflection/v2alpha1/reflection";
import * as _21 from "./base/v1beta1/coin";
import * as _22 from "./crypto/ed25519/keys";
import * as _23 from "./crypto/hd/v1/hd";
import * as _24 from "./crypto/keyring/v1/record";
import * as _25 from "./crypto/multisig/keys";
import * as _26 from "./crypto/secp256k1/keys";
import * as _27 from "./crypto/secp256r1/keys";
import * as _28 from "./distribution/v1beta1/distribution";
import * as _29 from "./distribution/v1beta1/genesis";
import * as _30 from "./distribution/v1beta1/query";
import * as _31 from "./distribution/v1beta1/tx";
import * as _32 from "./feegrant/v1beta1/feegrant";
import * as _33 from "./feegrant/v1beta1/genesis";
import * as _34 from "./feegrant/v1beta1/query";
import * as _35 from "./feegrant/v1beta1/tx";
import * as _36 from "./gov/v1/genesis";
import * as _37 from "./gov/v1/gov";
import * as _38 from "./gov/v1/query";
import * as _39 from "./gov/v1/tx";
import * as _40 from "./gov/v1beta1/genesis";
import * as _41 from "./gov/v1beta1/gov";
import * as _42 from "./gov/v1beta1/query";
import * as _43 from "./gov/v1beta1/tx";
import * as _44 from "./group/v1/events";
import * as _45 from "./group/v1/genesis";
import * as _46 from "./group/v1/query";
import * as _47 from "./group/v1/tx";
import * as _48 from "./group/v1/types";
import * as _49 from "./mint/v1beta1/genesis";
import * as _50 from "./mint/v1beta1/mint";
import * as _51 from "./mint/v1beta1/query";
import * as _52 from "./params/v1beta1/params";
import * as _53 from "./params/v1beta1/query";
import * as _54 from "./staking/v1beta1/authz";
import * as _55 from "./staking/v1beta1/genesis";
import * as _56 from "./staking/v1beta1/query";
import * as _57 from "./staking/v1beta1/staking";
import * as _58 from "./staking/v1beta1/tx";
import * as _59 from "./tx/signing/v1beta1/signing";
import * as _60 from "./tx/v1beta1/service";
import * as _61 from "./tx/v1beta1/tx";
import * as _62 from "./upgrade/v1beta1/query";
import * as _63 from "./upgrade/v1beta1/tx";
import * as _64 from "./upgrade/v1beta1/upgrade";
import * as _65 from "./vesting/v1beta1/tx";
import * as _66 from "./vesting/v1beta1/vesting";
import * as _119 from "./authz/v1beta1/tx.amino";
import * as _120 from "./bank/v1beta1/tx.amino";
import * as _121 from "./distribution/v1beta1/tx.amino";
import * as _122 from "./feegrant/v1beta1/tx.amino";
import * as _123 from "./gov/v1/tx.amino";
import * as _124 from "./gov/v1beta1/tx.amino";
import * as _125 from "./group/v1/tx.amino";
import * as _126 from "./staking/v1beta1/tx.amino";
import * as _127 from "./upgrade/v1beta1/tx.amino";
import * as _128 from "./vesting/v1beta1/tx.amino";
import * as _129 from "./authz/v1beta1/tx.registry";
import * as _130 from "./bank/v1beta1/tx.registry";
import * as _131 from "./distribution/v1beta1/tx.registry";
import * as _132 from "./feegrant/v1beta1/tx.registry";
import * as _133 from "./gov/v1/tx.registry";
import * as _134 from "./gov/v1beta1/tx.registry";
import * as _135 from "./group/v1/tx.registry";
import * as _136 from "./staking/v1beta1/tx.registry";
import * as _137 from "./upgrade/v1beta1/tx.registry";
import * as _138 from "./vesting/v1beta1/tx.registry";
import * as _139 from "./auth/v1beta1/query.rpc.Query";
import * as _140 from "./authz/v1beta1/query.rpc.Query";
import * as _141 from "./bank/v1beta1/query.rpc.Query";
import * as _142 from "./distribution/v1beta1/query.rpc.Query";
import * as _143 from "./feegrant/v1beta1/query.rpc.Query";
import * as _144 from "./gov/v1/query.rpc.Query";
import * as _145 from "./gov/v1beta1/query.rpc.Query";
import * as _146 from "./group/v1/query.rpc.Query";
import * as _147 from "./mint/v1beta1/query.rpc.Query";
import * as _148 from "./params/v1beta1/query.rpc.Query";
import * as _149 from "./staking/v1beta1/query.rpc.Query";
import * as _150 from "./tx/v1beta1/service.rpc.Service";
import * as _151 from "./upgrade/v1beta1/query.rpc.Query";
import * as _152 from "./authz/v1beta1/tx.rpc.msg";
import * as _153 from "./bank/v1beta1/tx.rpc.msg";
import * as _154 from "./distribution/v1beta1/tx.rpc.msg";
import * as _155 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _156 from "./gov/v1/tx.rpc.msg";
import * as _157 from "./gov/v1beta1/tx.rpc.msg";
import * as _158 from "./group/v1/tx.rpc.msg";
import * as _159 from "./staking/v1beta1/tx.rpc.msg";
import * as _160 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _161 from "./vesting/v1beta1/tx.rpc.msg";
import * as _191 from "./rpc.query";
import * as _192 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._139
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._119,
      ..._129,
      ..._140,
      ..._152
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._120,
      ..._130,
      ..._141,
      ..._153
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._18
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._19
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._20
      };
    }
    export const v1beta1 = {
      ..._21
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._22
    };
    export namespace hd {
      export const v1 = {
        ..._23
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._24
      };
    }
    export const multisig = {
      ..._25
    };
    export const secp256k1 = {
      ..._26
    };
    export const secp256r1 = {
      ..._27
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._121,
      ..._131,
      ..._142,
      ..._154
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._122,
      ..._132,
      ..._143,
      ..._155
    };
  }
  export namespace gov {
    export const v1 = {
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._123,
      ..._133,
      ..._144,
      ..._156
    };
    export const v1beta1 = {
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._124,
      ..._134,
      ..._145,
      ..._157
    };
  }
  export namespace group {
    export const v1 = {
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._125,
      ..._135,
      ..._146,
      ..._158
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._147
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._148
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._126,
      ..._136,
      ..._149,
      ..._159
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._59
      };
    }
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._150
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._127,
      ..._137,
      ..._151,
      ..._160
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._128,
      ..._138,
      ..._161
    };
  }
  export const ClientFactory = {
    ..._191,
    ..._192
  };
}