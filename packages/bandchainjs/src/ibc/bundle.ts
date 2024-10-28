//@ts-nocheck
import * as _76 from "./applications/transfer/v1/genesis";
import * as _77 from "./applications/transfer/v1/query";
import * as _78 from "./applications/transfer/v1/transfer";
import * as _79 from "./applications/transfer/v1/tx";
import * as _80 from "./applications/transfer/v2/packet";
import * as _81 from "./core/channel/v1/channel";
import * as _82 from "./core/channel/v1/genesis";
import * as _83 from "./core/channel/v1/query";
import * as _84 from "./core/channel/v1/tx";
import * as _85 from "./core/client/v1/client";
import * as _86 from "./core/client/v1/genesis";
import * as _87 from "./core/client/v1/query";
import * as _88 from "./core/client/v1/tx";
import * as _89 from "./core/commitment/v1/commitment";
import * as _90 from "./core/connection/v1/connection";
import * as _91 from "./core/connection/v1/genesis";
import * as _92 from "./core/connection/v1/query";
import * as _93 from "./core/connection/v1/tx";
import * as _94 from "./lightclients/localhost/v1/localhost";
import * as _95 from "./lightclients/solomachine/v1/solomachine";
import * as _96 from "./lightclients/solomachine/v2/solomachine";
import * as _97 from "./lightclients/tendermint/v1/tendermint";
import * as _166 from "./applications/transfer/v1/tx.amino";
import * as _167 from "./core/channel/v1/tx.amino";
import * as _168 from "./core/client/v1/tx.amino";
import * as _169 from "./core/connection/v1/tx.amino";
import * as _170 from "./applications/transfer/v1/tx.registry";
import * as _171 from "./core/channel/v1/tx.registry";
import * as _172 from "./core/client/v1/tx.registry";
import * as _173 from "./core/connection/v1/tx.registry";
import * as _174 from "./applications/transfer/v1/query.rpc.Query";
import * as _175 from "./core/channel/v1/query.rpc.Query";
import * as _176 from "./core/client/v1/query.rpc.Query";
import * as _177 from "./core/connection/v1/query.rpc.Query";
import * as _178 from "./applications/transfer/v1/tx.rpc.msg";
import * as _179 from "./core/channel/v1/tx.rpc.msg";
import * as _180 from "./core/client/v1/tx.rpc.msg";
import * as _181 from "./core/connection/v1/tx.rpc.msg";
import * as _195 from "./rpc.query";
import * as _196 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._76,
        ..._77,
        ..._78,
        ..._79,
        ..._166,
        ..._170,
        ..._174,
        ..._178
      };
      export const v2 = {
        ..._80
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._81,
        ..._82,
        ..._83,
        ..._84,
        ..._167,
        ..._171,
        ..._175,
        ..._179
      };
    }
    export namespace client {
      export const v1 = {
        ..._85,
        ..._86,
        ..._87,
        ..._88,
        ..._168,
        ..._172,
        ..._176,
        ..._180
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._89
      };
    }
    export namespace connection {
      export const v1 = {
        ..._90,
        ..._91,
        ..._92,
        ..._93,
        ..._169,
        ..._173,
        ..._177,
        ..._181
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._94
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._95
      };
      export const v2 = {
        ..._96
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._97
      };
    }
  }
  export const ClientFactory = {
    ..._195,
    ..._196
  };
}