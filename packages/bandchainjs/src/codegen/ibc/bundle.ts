//@ts-nocheck
import * as _124 from "./applications/transfer/v1/genesis";
import * as _125 from "./applications/transfer/v1/query";
import * as _126 from "./applications/transfer/v1/transfer";
import * as _127 from "./applications/transfer/v1/tx";
import * as _128 from "./applications/transfer/v2/packet";
import * as _129 from "./core/channel/v1/channel";
import * as _130 from "./core/channel/v1/genesis";
import * as _131 from "./core/channel/v1/query";
import * as _132 from "./core/channel/v1/tx";
import * as _133 from "./core/client/v1/client";
import * as _134 from "./core/client/v1/genesis";
import * as _135 from "./core/client/v1/query";
import * as _136 from "./core/client/v1/tx";
import * as _137 from "./core/commitment/v1/commitment";
import * as _138 from "./core/connection/v1/connection";
import * as _139 from "./core/connection/v1/genesis";
import * as _140 from "./core/connection/v1/query";
import * as _141 from "./core/connection/v1/tx";
import * as _142 from "./lightclients/localhost/v1/localhost";
import * as _143 from "./lightclients/solomachine/v1/solomachine";
import * as _144 from "./lightclients/solomachine/v2/solomachine";
import * as _145 from "./lightclients/tendermint/v1/tendermint";
import * as _251 from "./applications/transfer/v1/tx.amino";
import * as _252 from "./core/channel/v1/tx.amino";
import * as _253 from "./core/client/v1/tx.amino";
import * as _254 from "./core/connection/v1/tx.amino";
import * as _255 from "./applications/transfer/v1/tx.registry";
import * as _256 from "./core/channel/v1/tx.registry";
import * as _257 from "./core/client/v1/tx.registry";
import * as _258 from "./core/connection/v1/tx.registry";
import * as _259 from "./applications/transfer/v1/query.lcd";
import * as _260 from "./core/channel/v1/query.lcd";
import * as _261 from "./core/client/v1/query.lcd";
import * as _262 from "./core/connection/v1/query.lcd";
import * as _263 from "./applications/transfer/v1/query.rpc.Query";
import * as _264 from "./core/channel/v1/query.rpc.Query";
import * as _265 from "./core/client/v1/query.rpc.Query";
import * as _266 from "./core/connection/v1/query.rpc.Query";
import * as _267 from "./applications/transfer/v1/tx.rpc.msg";
import * as _268 from "./core/channel/v1/tx.rpc.msg";
import * as _269 from "./core/client/v1/tx.rpc.msg";
import * as _270 from "./core/connection/v1/tx.rpc.msg";
import * as _277 from "./lcd";
import * as _278 from "./rpc.query";
import * as _279 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._124,
        ..._125,
        ..._126,
        ..._127,
        ..._251,
        ..._255,
        ..._259,
        ..._263,
        ..._267
      };
      export const v2 = {
        ..._128
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._129,
        ..._130,
        ..._131,
        ..._132,
        ..._252,
        ..._256,
        ..._260,
        ..._264,
        ..._268
      };
    }
    export namespace client {
      export const v1 = {
        ..._133,
        ..._134,
        ..._135,
        ..._136,
        ..._253,
        ..._257,
        ..._261,
        ..._265,
        ..._269
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._137
      };
    }
    export namespace connection {
      export const v1 = {
        ..._138,
        ..._139,
        ..._140,
        ..._141,
        ..._254,
        ..._258,
        ..._262,
        ..._266,
        ..._270
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._142
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._143
      };
      export const v2 = {
        ..._144
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._145
      };
    }
  }
  export const ClientFactory = {
    ..._277,
    ..._278,
    ..._279
  };
}