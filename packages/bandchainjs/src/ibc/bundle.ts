//@ts-nocheck
import * as _71 from "./applications/transfer/v1/genesis";
import * as _72 from "./applications/transfer/v1/query";
import * as _73 from "./applications/transfer/v1/transfer";
import * as _74 from "./applications/transfer/v1/tx";
import * as _75 from "./applications/transfer/v2/packet";
import * as _76 from "./core/channel/v1/channel";
import * as _77 from "./core/channel/v1/genesis";
import * as _78 from "./core/channel/v1/query";
import * as _79 from "./core/channel/v1/tx";
import * as _80 from "./core/client/v1/client";
import * as _81 from "./core/client/v1/genesis";
import * as _82 from "./core/client/v1/query";
import * as _83 from "./core/client/v1/tx";
import * as _84 from "./core/commitment/v1/commitment";
import * as _85 from "./core/connection/v1/connection";
import * as _86 from "./core/connection/v1/genesis";
import * as _87 from "./core/connection/v1/query";
import * as _88 from "./core/connection/v1/tx";
import * as _89 from "./lightclients/localhost/v1/localhost";
import * as _90 from "./lightclients/solomachine/v1/solomachine";
import * as _91 from "./lightclients/solomachine/v2/solomachine";
import * as _92 from "./lightclients/tendermint/v1/tendermint";
import * as _147 from "./applications/transfer/v1/tx.amino";
import * as _148 from "./core/channel/v1/tx.amino";
import * as _149 from "./core/client/v1/tx.amino";
import * as _150 from "./core/connection/v1/tx.amino";
import * as _151 from "./applications/transfer/v1/tx.registry";
import * as _152 from "./core/channel/v1/tx.registry";
import * as _153 from "./core/client/v1/tx.registry";
import * as _154 from "./core/connection/v1/tx.registry";
import * as _155 from "./applications/transfer/v1/query.rpc.Query";
import * as _156 from "./core/channel/v1/query.rpc.Query";
import * as _157 from "./core/client/v1/query.rpc.Query";
import * as _158 from "./core/connection/v1/query.rpc.Query";
import * as _159 from "./applications/transfer/v1/tx.rpc.msg";
import * as _160 from "./core/channel/v1/tx.rpc.msg";
import * as _161 from "./core/client/v1/tx.rpc.msg";
import * as _162 from "./core/connection/v1/tx.rpc.msg";
import * as _165 from "./rpc.query";
import * as _166 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._71,
        ..._72,
        ..._73,
        ..._74,
        ..._147,
        ..._151,
        ..._155,
        ..._159
      };
      export const v2 = {
        ..._75
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._76,
        ..._77,
        ..._78,
        ..._79,
        ..._148,
        ..._152,
        ..._156,
        ..._160
      };
    }
    export namespace client {
      export const v1 = {
        ..._80,
        ..._81,
        ..._82,
        ..._83,
        ..._149,
        ..._153,
        ..._157,
        ..._161
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._84
      };
    }
    export namespace connection {
      export const v1 = {
        ..._85,
        ..._86,
        ..._87,
        ..._88,
        ..._150,
        ..._154,
        ..._158,
        ..._162
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._89
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._90
      };
      export const v2 = {
        ..._91
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._92
      };
    }
  }
  export const ClientFactory = {
    ..._165,
    ..._166
  };
}