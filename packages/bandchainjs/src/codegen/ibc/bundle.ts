//@ts-nocheck
import * as _144 from "./applications/transfer/v1/genesis";
import * as _145 from "./applications/transfer/v1/query";
import * as _146 from "./applications/transfer/v1/transfer";
import * as _147 from "./applications/transfer/v1/tx";
import * as _148 from "./applications/transfer/v2/packet";
import * as _149 from "./core/channel/v1/channel";
import * as _150 from "./core/channel/v1/genesis";
import * as _151 from "./core/channel/v1/query";
import * as _152 from "./core/channel/v1/tx";
import * as _153 from "./core/client/v1/client";
import * as _154 from "./core/client/v1/genesis";
import * as _155 from "./core/client/v1/query";
import * as _156 from "./core/client/v1/tx";
import * as _157 from "./core/commitment/v1/commitment";
import * as _158 from "./core/connection/v1/connection";
import * as _159 from "./core/connection/v1/genesis";
import * as _160 from "./core/connection/v1/query";
import * as _161 from "./core/connection/v1/tx";
import * as _162 from "./lightclients/localhost/v1/localhost";
import * as _163 from "./lightclients/solomachine/v1/solomachine";
import * as _164 from "./lightclients/solomachine/v2/solomachine";
import * as _165 from "./lightclients/tendermint/v1/tendermint";
import * as _291 from "./applications/transfer/v1/tx.amino";
import * as _292 from "./core/channel/v1/tx.amino";
import * as _293 from "./core/client/v1/tx.amino";
import * as _294 from "./core/connection/v1/tx.amino";
import * as _295 from "./applications/transfer/v1/tx.registry";
import * as _296 from "./core/channel/v1/tx.registry";
import * as _297 from "./core/client/v1/tx.registry";
import * as _298 from "./core/connection/v1/tx.registry";
import * as _299 from "./applications/transfer/v1/query.lcd";
import * as _300 from "./core/channel/v1/query.lcd";
import * as _301 from "./core/client/v1/query.lcd";
import * as _302 from "./core/connection/v1/query.lcd";
import * as _303 from "./applications/transfer/v1/query.rpc.Query";
import * as _304 from "./core/channel/v1/query.rpc.Query";
import * as _305 from "./core/client/v1/query.rpc.Query";
import * as _306 from "./core/connection/v1/query.rpc.Query";
import * as _307 from "./applications/transfer/v1/tx.rpc.msg";
import * as _308 from "./core/channel/v1/tx.rpc.msg";
import * as _309 from "./core/client/v1/tx.rpc.msg";
import * as _310 from "./core/connection/v1/tx.rpc.msg";
import * as _317 from "./lcd";
import * as _318 from "./rpc.query";
import * as _319 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._144,
        ..._145,
        ..._146,
        ..._147,
        ..._291,
        ..._295,
        ..._299,
        ..._303,
        ..._307
      };
      export const v2 = {
        ..._148
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._149,
        ..._150,
        ..._151,
        ..._152,
        ..._292,
        ..._296,
        ..._300,
        ..._304,
        ..._308
      };
    }
    export namespace client {
      export const v1 = {
        ..._153,
        ..._154,
        ..._155,
        ..._156,
        ..._293,
        ..._297,
        ..._301,
        ..._305,
        ..._309
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._157
      };
    }
    export namespace connection {
      export const v1 = {
        ..._158,
        ..._159,
        ..._160,
        ..._161,
        ..._294,
        ..._298,
        ..._302,
        ..._306,
        ..._310
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._162
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._163
      };
      export const v2 = {
        ..._164
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._165
      };
    }
  }
  export const ClientFactory = {
    ..._317,
    ..._318,
    ..._319
  };
}