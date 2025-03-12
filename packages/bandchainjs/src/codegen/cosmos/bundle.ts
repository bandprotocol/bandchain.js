//@ts-nocheck
import * as _38 from "./auth/v1beta1/auth";
import * as _39 from "./auth/v1beta1/genesis";
import * as _40 from "./auth/v1beta1/query";
import * as _41 from "./authz/v1beta1/authz";
import * as _42 from "./authz/v1beta1/event";
import * as _43 from "./authz/v1beta1/genesis";
import * as _44 from "./authz/v1beta1/query";
import * as _45 from "./authz/v1beta1/tx";
import * as _46 from "./bank/v1beta1/authz";
import * as _47 from "./bank/v1beta1/bank";
import * as _48 from "./bank/v1beta1/genesis";
import * as _49 from "./bank/v1beta1/query";
import * as _50 from "./bank/v1beta1/tx";
import * as _51 from "./base/abci/v1beta1/abci";
import * as _52 from "./base/query/v1beta1/pagination";
import * as _53 from "./base/reflection/v2alpha1/reflection";
import * as _54 from "./base/v1beta1/coin";
import * as _55 from "./crypto/ed25519/keys";
import * as _56 from "./crypto/hd/v1/hd";
import * as _57 from "./crypto/keyring/v1/record";
import * as _58 from "./crypto/multisig/keys";
import * as _59 from "./crypto/secp256k1/keys";
import * as _60 from "./crypto/secp256r1/keys";
import * as _61 from "./distribution/v1beta1/distribution";
import * as _62 from "./distribution/v1beta1/genesis";
import * as _63 from "./distribution/v1beta1/query";
import * as _64 from "./distribution/v1beta1/tx";
import * as _65 from "./feegrant/v1beta1/feegrant";
import * as _66 from "./feegrant/v1beta1/genesis";
import * as _67 from "./feegrant/v1beta1/query";
import * as _68 from "./feegrant/v1beta1/tx";
import * as _69 from "./gov/v1/genesis";
import * as _70 from "./gov/v1/gov";
import * as _71 from "./gov/v1/query";
import * as _72 from "./gov/v1/tx";
import * as _73 from "./gov/v1beta1/genesis";
import * as _74 from "./gov/v1beta1/gov";
import * as _75 from "./gov/v1beta1/query";
import * as _76 from "./gov/v1beta1/tx";
import * as _77 from "./group/v1/events";
import * as _78 from "./group/v1/genesis";
import * as _79 from "./group/v1/query";
import * as _80 from "./group/v1/tx";
import * as _81 from "./group/v1/types";
import * as _82 from "./mint/v1beta1/genesis";
import * as _83 from "./mint/v1beta1/mint";
import * as _84 from "./mint/v1beta1/query";
import * as _85 from "./params/v1beta1/params";
import * as _86 from "./params/v1beta1/query";
import * as _87 from "./staking/v1beta1/authz";
import * as _88 from "./staking/v1beta1/genesis";
import * as _89 from "./staking/v1beta1/query";
import * as _90 from "./staking/v1beta1/staking";
import * as _91 from "./staking/v1beta1/tx";
import * as _92 from "./tx/signing/v1beta1/signing";
import * as _93 from "./tx/v1beta1/service";
import * as _94 from "./tx/v1beta1/tx";
import * as _95 from "./upgrade/v1beta1/query";
import * as _96 from "./upgrade/v1beta1/tx";
import * as _97 from "./upgrade/v1beta1/upgrade";
import * as _98 from "./vesting/v1beta1/tx";
import * as _99 from "./vesting/v1beta1/vesting";
import * as _178 from "./authz/v1beta1/tx.amino";
import * as _179 from "./bank/v1beta1/tx.amino";
import * as _180 from "./distribution/v1beta1/tx.amino";
import * as _181 from "./feegrant/v1beta1/tx.amino";
import * as _182 from "./gov/v1/tx.amino";
import * as _183 from "./gov/v1beta1/tx.amino";
import * as _184 from "./group/v1/tx.amino";
import * as _185 from "./staking/v1beta1/tx.amino";
import * as _186 from "./upgrade/v1beta1/tx.amino";
import * as _187 from "./vesting/v1beta1/tx.amino";
import * as _188 from "./authz/v1beta1/tx.registry";
import * as _189 from "./bank/v1beta1/tx.registry";
import * as _190 from "./distribution/v1beta1/tx.registry";
import * as _191 from "./feegrant/v1beta1/tx.registry";
import * as _192 from "./gov/v1/tx.registry";
import * as _193 from "./gov/v1beta1/tx.registry";
import * as _194 from "./group/v1/tx.registry";
import * as _195 from "./staking/v1beta1/tx.registry";
import * as _196 from "./upgrade/v1beta1/tx.registry";
import * as _197 from "./vesting/v1beta1/tx.registry";
import * as _198 from "./auth/v1beta1/query.lcd";
import * as _199 from "./authz/v1beta1/query.lcd";
import * as _200 from "./bank/v1beta1/query.lcd";
import * as _201 from "./distribution/v1beta1/query.lcd";
import * as _202 from "./feegrant/v1beta1/query.lcd";
import * as _203 from "./gov/v1/query.lcd";
import * as _204 from "./gov/v1beta1/query.lcd";
import * as _205 from "./group/v1/query.lcd";
import * as _206 from "./mint/v1beta1/query.lcd";
import * as _207 from "./params/v1beta1/query.lcd";
import * as _208 from "./staking/v1beta1/query.lcd";
import * as _209 from "./tx/v1beta1/service.lcd";
import * as _210 from "./upgrade/v1beta1/query.lcd";
import * as _211 from "./auth/v1beta1/query.rpc.Query";
import * as _212 from "./authz/v1beta1/query.rpc.Query";
import * as _213 from "./bank/v1beta1/query.rpc.Query";
import * as _214 from "./distribution/v1beta1/query.rpc.Query";
import * as _215 from "./feegrant/v1beta1/query.rpc.Query";
import * as _216 from "./gov/v1/query.rpc.Query";
import * as _217 from "./gov/v1beta1/query.rpc.Query";
import * as _218 from "./group/v1/query.rpc.Query";
import * as _219 from "./mint/v1beta1/query.rpc.Query";
import * as _220 from "./params/v1beta1/query.rpc.Query";
import * as _221 from "./staking/v1beta1/query.rpc.Query";
import * as _222 from "./tx/v1beta1/service.rpc.Service";
import * as _223 from "./upgrade/v1beta1/query.rpc.Query";
import * as _224 from "./authz/v1beta1/tx.rpc.msg";
import * as _225 from "./bank/v1beta1/tx.rpc.msg";
import * as _226 from "./distribution/v1beta1/tx.rpc.msg";
import * as _227 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _228 from "./gov/v1/tx.rpc.msg";
import * as _229 from "./gov/v1beta1/tx.rpc.msg";
import * as _230 from "./group/v1/tx.rpc.msg";
import * as _231 from "./staking/v1beta1/tx.rpc.msg";
import * as _232 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _233 from "./vesting/v1beta1/tx.rpc.msg";
import * as _257 from "./lcd";
import * as _258 from "./rpc.query";
import * as _259 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._40,
      ..._198,
      ..._211
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._178,
      ..._188,
      ..._199,
      ..._212,
      ..._224
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._179,
      ..._189,
      ..._200,
      ..._213,
      ..._225
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._51
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._52
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._53
      };
    }
    export const v1beta1 = {
      ..._54
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._55
    };
    export namespace hd {
      export const v1 = {
        ..._56
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._57
      };
    }
    export const multisig = {
      ..._58
    };
    export const secp256k1 = {
      ..._59
    };
    export const secp256r1 = {
      ..._60
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._180,
      ..._190,
      ..._201,
      ..._214,
      ..._226
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._181,
      ..._191,
      ..._202,
      ..._215,
      ..._227
    };
  }
  export namespace gov {
    export const v1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._182,
      ..._192,
      ..._203,
      ..._216,
      ..._228
    };
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._183,
      ..._193,
      ..._204,
      ..._217,
      ..._229
    };
  }
  export namespace group {
    export const v1 = {
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._184,
      ..._194,
      ..._205,
      ..._218,
      ..._230
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._206,
      ..._219
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._85,
      ..._86,
      ..._207,
      ..._220
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._185,
      ..._195,
      ..._208,
      ..._221,
      ..._231
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._92
      };
    }
    export const v1beta1 = {
      ..._93,
      ..._94,
      ..._209,
      ..._222
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._95,
      ..._96,
      ..._97,
      ..._186,
      ..._196,
      ..._210,
      ..._223,
      ..._232
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._187,
      ..._197,
      ..._233
    };
  }
  export const ClientFactory = {
    ..._257,
    ..._258,
    ..._259
  };
}