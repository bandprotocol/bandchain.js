//@ts-nocheck
import * as _146 from "./applications/transfer/v1/genesis";
import * as _147 from "./applications/transfer/v1/query";
import * as _148 from "./applications/transfer/v1/transfer";
import * as _149 from "./applications/transfer/v1/tx";
import * as _150 from "./applications/transfer/v2/packet";
import * as _151 from "./core/channel/v1/channel";
import * as _152 from "./core/channel/v1/genesis";
import * as _153 from "./core/channel/v1/query";
import * as _154 from "./core/channel/v1/tx";
import * as _155 from "./core/client/v1/client";
import * as _156 from "./core/client/v1/genesis";
import * as _157 from "./core/client/v1/query";
import * as _158 from "./core/client/v1/tx";
import * as _159 from "./core/commitment/v1/commitment";
import * as _160 from "./core/connection/v1/connection";
import * as _161 from "./core/connection/v1/genesis";
import * as _162 from "./core/connection/v1/query";
import * as _163 from "./core/connection/v1/tx";
import * as _164 from "./lightclients/localhost/v1/localhost";
import * as _165 from "./lightclients/solomachine/v1/solomachine";
import * as _166 from "./lightclients/solomachine/v2/solomachine";
import * as _167 from "./lightclients/tendermint/v1/tendermint";
import * as _293 from "./applications/transfer/v1/tx.amino";
import * as _294 from "./core/channel/v1/tx.amino";
import * as _295 from "./core/client/v1/tx.amino";
import * as _296 from "./core/connection/v1/tx.amino";
import * as _297 from "./applications/transfer/v1/tx.registry";
import * as _298 from "./core/channel/v1/tx.registry";
import * as _299 from "./core/client/v1/tx.registry";
import * as _300 from "./core/connection/v1/tx.registry";
import * as _301 from "./applications/transfer/v1/query.lcd";
import * as _302 from "./core/channel/v1/query.lcd";
import * as _303 from "./core/client/v1/query.lcd";
import * as _304 from "./core/connection/v1/query.lcd";
import * as _305 from "./applications/transfer/v1/query.rpc.Query";
import * as _306 from "./core/channel/v1/query.rpc.Query";
import * as _307 from "./core/client/v1/query.rpc.Query";
import * as _308 from "./core/connection/v1/query.rpc.Query";
import * as _309 from "./applications/transfer/v1/tx.rpc.msg";
import * as _310 from "./core/channel/v1/tx.rpc.msg";
import * as _311 from "./core/client/v1/tx.rpc.msg";
import * as _312 from "./core/connection/v1/tx.rpc.msg";
import * as _319 from "./lcd";
import * as _320 from "./rpc.query";
import * as _321 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._146,
        ..._147,
        ..._148,
        ..._149,
        ..._293,
        ..._297,
        ..._301,
        ..._305,
        ..._309
      };
      export const v2 = {
        ..._150
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._151,
        ..._152,
        ..._153,
        ..._154,
        ..._294,
        ..._298,
        ..._302,
        ..._306,
        ..._310
      };
    }
    export namespace client {
      export const v1 = {
        ..._155,
        ..._156,
        ..._157,
        ..._158,
        ..._295,
        ..._299,
        ..._303,
        ..._307,
        ..._311
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._159
      };
    }
    export namespace connection {
      export const v1 = {
        ..._160,
        ..._161,
        ..._162,
        ..._163,
        ..._296,
        ..._300,
        ..._304,
        ..._308,
        ..._312
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._164
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._165
      };
      export const v2 = {
        ..._166
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._167
      };
    }
  }
  export const ClientFactory = {
    ..._319,
    ..._320,
    ..._321
  };
}