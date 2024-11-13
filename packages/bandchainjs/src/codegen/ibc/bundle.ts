//@ts-nocheck
import * as _129 from "./applications/transfer/v1/genesis";
import * as _130 from "./applications/transfer/v1/query";
import * as _131 from "./applications/transfer/v1/transfer";
import * as _132 from "./applications/transfer/v1/tx";
import * as _133 from "./applications/transfer/v2/packet";
import * as _134 from "./core/channel/v1/channel";
import * as _135 from "./core/channel/v1/genesis";
import * as _136 from "./core/channel/v1/query";
import * as _137 from "./core/channel/v1/tx";
import * as _138 from "./core/client/v1/client";
import * as _139 from "./core/client/v1/genesis";
import * as _140 from "./core/client/v1/query";
import * as _141 from "./core/client/v1/tx";
import * as _142 from "./core/commitment/v1/commitment";
import * as _143 from "./core/connection/v1/connection";
import * as _144 from "./core/connection/v1/genesis";
import * as _145 from "./core/connection/v1/query";
import * as _146 from "./core/connection/v1/tx";
import * as _147 from "./lightclients/localhost/v1/localhost";
import * as _148 from "./lightclients/solomachine/v1/solomachine";
import * as _149 from "./lightclients/solomachine/v2/solomachine";
import * as _150 from "./lightclients/tendermint/v1/tendermint";
import * as _261 from "./applications/transfer/v1/tx.amino";
import * as _262 from "./core/channel/v1/tx.amino";
import * as _263 from "./core/client/v1/tx.amino";
import * as _264 from "./core/connection/v1/tx.amino";
import * as _265 from "./applications/transfer/v1/tx.registry";
import * as _266 from "./core/channel/v1/tx.registry";
import * as _267 from "./core/client/v1/tx.registry";
import * as _268 from "./core/connection/v1/tx.registry";
import * as _269 from "./applications/transfer/v1/query.lcd";
import * as _270 from "./core/channel/v1/query.lcd";
import * as _271 from "./core/client/v1/query.lcd";
import * as _272 from "./core/connection/v1/query.lcd";
import * as _273 from "./applications/transfer/v1/query.rpc.Query";
import * as _274 from "./core/channel/v1/query.rpc.Query";
import * as _275 from "./core/client/v1/query.rpc.Query";
import * as _276 from "./core/connection/v1/query.rpc.Query";
import * as _277 from "./applications/transfer/v1/tx.rpc.msg";
import * as _278 from "./core/channel/v1/tx.rpc.msg";
import * as _279 from "./core/client/v1/tx.rpc.msg";
import * as _280 from "./core/connection/v1/tx.rpc.msg";
import * as _287 from "./lcd";
import * as _288 from "./rpc.query";
import * as _289 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._129,
        ..._130,
        ..._131,
        ..._132,
        ..._261,
        ..._265,
        ..._269,
        ..._273,
        ..._277
      };
      export const v2 = {
        ..._133
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._134,
        ..._135,
        ..._136,
        ..._137,
        ..._262,
        ..._266,
        ..._270,
        ..._274,
        ..._278
      };
    }
    export namespace client {
      export const v1 = {
        ..._138,
        ..._139,
        ..._140,
        ..._141,
        ..._263,
        ..._267,
        ..._271,
        ..._275,
        ..._279
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._142
      };
    }
    export namespace connection {
      export const v1 = {
        ..._143,
        ..._144,
        ..._145,
        ..._146,
        ..._264,
        ..._268,
        ..._272,
        ..._276,
        ..._280
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._147
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._148
      };
      export const v2 = {
        ..._149
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._150
      };
    }
  }
  export const ClientFactory = {
    ..._287,
    ..._288,
    ..._289
  };
}