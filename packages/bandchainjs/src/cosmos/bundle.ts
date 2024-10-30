//@ts-nocheck
import * as _14 from "./auth/v1beta1/auth";
import * as _15 from "./auth/v1beta1/genesis";
import * as _16 from "./auth/v1beta1/query";
import * as _17 from "./authz/v1beta1/authz";
import * as _18 from "./authz/v1beta1/event";
import * as _19 from "./authz/v1beta1/genesis";
import * as _20 from "./authz/v1beta1/query";
import * as _21 from "./authz/v1beta1/tx";
import * as _22 from "./bank/v1beta1/authz";
import * as _23 from "./bank/v1beta1/bank";
import * as _24 from "./bank/v1beta1/genesis";
import * as _25 from "./bank/v1beta1/query";
import * as _26 from "./bank/v1beta1/tx";
import * as _27 from "./base/abci/v1beta1/abci";
import * as _28 from "./base/query/v1beta1/pagination";
import * as _29 from "./base/reflection/v2alpha1/reflection";
import * as _30 from "./base/v1beta1/coin";
import * as _31 from "./crypto/ed25519/keys";
import * as _32 from "./crypto/hd/v1/hd";
import * as _33 from "./crypto/keyring/v1/record";
import * as _34 from "./crypto/multisig/keys";
import * as _35 from "./crypto/secp256k1/keys";
import * as _36 from "./crypto/secp256r1/keys";
import * as _37 from "./distribution/v1beta1/distribution";
import * as _38 from "./distribution/v1beta1/genesis";
import * as _39 from "./distribution/v1beta1/query";
import * as _40 from "./distribution/v1beta1/tx";
import * as _41 from "./feegrant/v1beta1/feegrant";
import * as _42 from "./feegrant/v1beta1/genesis";
import * as _43 from "./feegrant/v1beta1/query";
import * as _44 from "./feegrant/v1beta1/tx";
import * as _45 from "./gov/v1/genesis";
import * as _46 from "./gov/v1/gov";
import * as _47 from "./gov/v1/query";
import * as _48 from "./gov/v1/tx";
import * as _49 from "./gov/v1beta1/genesis";
import * as _50 from "./gov/v1beta1/gov";
import * as _51 from "./gov/v1beta1/query";
import * as _52 from "./gov/v1beta1/tx";
import * as _53 from "./group/v1/events";
import * as _54 from "./group/v1/genesis";
import * as _55 from "./group/v1/query";
import * as _56 from "./group/v1/tx";
import * as _57 from "./group/v1/types";
import * as _58 from "./mint/v1beta1/genesis";
import * as _59 from "./mint/v1beta1/mint";
import * as _60 from "./mint/v1beta1/query";
import * as _61 from "./params/v1beta1/params";
import * as _62 from "./params/v1beta1/query";
import * as _63 from "./staking/v1beta1/authz";
import * as _64 from "./staking/v1beta1/genesis";
import * as _65 from "./staking/v1beta1/query";
import * as _66 from "./staking/v1beta1/staking";
import * as _67 from "./staking/v1beta1/tx";
import * as _68 from "./tx/signing/v1beta1/signing";
import * as _69 from "./tx/v1beta1/service";
import * as _70 from "./tx/v1beta1/tx";
import * as _71 from "./upgrade/v1beta1/query";
import * as _72 from "./upgrade/v1beta1/tx";
import * as _73 from "./upgrade/v1beta1/upgrade";
import * as _74 from "./vesting/v1beta1/tx";
import * as _75 from "./vesting/v1beta1/vesting";
import * as _130 from "./authz/v1beta1/tx.amino";
import * as _131 from "./bank/v1beta1/tx.amino";
import * as _132 from "./distribution/v1beta1/tx.amino";
import * as _133 from "./feegrant/v1beta1/tx.amino";
import * as _134 from "./gov/v1/tx.amino";
import * as _135 from "./gov/v1beta1/tx.amino";
import * as _136 from "./group/v1/tx.amino";
import * as _137 from "./staking/v1beta1/tx.amino";
import * as _138 from "./upgrade/v1beta1/tx.amino";
import * as _139 from "./vesting/v1beta1/tx.amino";
import * as _140 from "./authz/v1beta1/tx.registry";
import * as _141 from "./bank/v1beta1/tx.registry";
import * as _142 from "./distribution/v1beta1/tx.registry";
import * as _143 from "./feegrant/v1beta1/tx.registry";
import * as _144 from "./gov/v1/tx.registry";
import * as _145 from "./gov/v1beta1/tx.registry";
import * as _146 from "./group/v1/tx.registry";
import * as _147 from "./staking/v1beta1/tx.registry";
import * as _148 from "./upgrade/v1beta1/tx.registry";
import * as _149 from "./vesting/v1beta1/tx.registry";
import * as _150 from "./auth/v1beta1/query.lcd";
import * as _151 from "./authz/v1beta1/query.lcd";
import * as _152 from "./bank/v1beta1/query.lcd";
import * as _153 from "./distribution/v1beta1/query.lcd";
import * as _154 from "./feegrant/v1beta1/query.lcd";
import * as _155 from "./gov/v1/query.lcd";
import * as _156 from "./gov/v1beta1/query.lcd";
import * as _157 from "./group/v1/query.lcd";
import * as _158 from "./mint/v1beta1/query.lcd";
import * as _159 from "./params/v1beta1/query.lcd";
import * as _160 from "./staking/v1beta1/query.lcd";
import * as _161 from "./tx/v1beta1/service.lcd";
import * as _162 from "./upgrade/v1beta1/query.lcd";
import * as _163 from "./auth/v1beta1/query.rpc.Query";
import * as _164 from "./authz/v1beta1/query.rpc.Query";
import * as _165 from "./bank/v1beta1/query.rpc.Query";
import * as _166 from "./distribution/v1beta1/query.rpc.Query";
import * as _167 from "./feegrant/v1beta1/query.rpc.Query";
import * as _168 from "./gov/v1/query.rpc.Query";
import * as _169 from "./gov/v1beta1/query.rpc.Query";
import * as _170 from "./group/v1/query.rpc.Query";
import * as _171 from "./mint/v1beta1/query.rpc.Query";
import * as _172 from "./params/v1beta1/query.rpc.Query";
import * as _173 from "./staking/v1beta1/query.rpc.Query";
import * as _174 from "./tx/v1beta1/service.rpc.Service";
import * as _175 from "./upgrade/v1beta1/query.rpc.Query";
import * as _176 from "./authz/v1beta1/tx.rpc.msg";
import * as _177 from "./bank/v1beta1/tx.rpc.msg";
import * as _178 from "./distribution/v1beta1/tx.rpc.msg";
import * as _179 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _180 from "./gov/v1/tx.rpc.msg";
import * as _181 from "./gov/v1beta1/tx.rpc.msg";
import * as _182 from "./group/v1/tx.rpc.msg";
import * as _183 from "./staking/v1beta1/tx.rpc.msg";
import * as _184 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _185 from "./vesting/v1beta1/tx.rpc.msg";
import * as _209 from "./lcd";
import * as _210 from "./rpc.query";
import * as _211 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._150,
      ..._163
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._130,
      ..._140,
      ..._151,
      ..._164,
      ..._176
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._131,
      ..._141,
      ..._152,
      ..._165,
      ..._177
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._27
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._28
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._29
      };
    }
    export const v1beta1 = {
      ..._30
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._31
    };
    export namespace hd {
      export const v1 = {
        ..._32
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._33
      };
    }
    export const multisig = {
      ..._34
    };
    export const secp256k1 = {
      ..._35
    };
    export const secp256r1 = {
      ..._36
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._132,
      ..._142,
      ..._153,
      ..._166,
      ..._178
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._133,
      ..._143,
      ..._154,
      ..._167,
      ..._179
    };
  }
  export namespace gov {
    export const v1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._134,
      ..._144,
      ..._155,
      ..._168,
      ..._180
    };
    export const v1beta1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._135,
      ..._145,
      ..._156,
      ..._169,
      ..._181
    };
  }
  export namespace group {
    export const v1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._136,
      ..._146,
      ..._157,
      ..._170,
      ..._182
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._158,
      ..._171
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._159,
      ..._172
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._137,
      ..._147,
      ..._160,
      ..._173,
      ..._183
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._68
      };
    }
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._161,
      ..._174
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._138,
      ..._148,
      ..._162,
      ..._175,
      ..._184
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._74,
      ..._75,
      ..._139,
      ..._149,
      ..._185
    };
  }
  export const ClientFactory = {
    ..._209,
    ..._210,
    ..._211
  };
}