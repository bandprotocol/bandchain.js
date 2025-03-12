//@ts-nocheck
import * as _106 from "./applications/transfer/v1/genesis";
import * as _107 from "./applications/transfer/v1/query";
import * as _108 from "./applications/transfer/v1/transfer";
import * as _109 from "./applications/transfer/v1/tx";
import * as _110 from "./applications/transfer/v2/packet";
import * as _111 from "./core/channel/v1/channel";
import * as _112 from "./core/channel/v1/genesis";
import * as _113 from "./core/channel/v1/query";
import * as _114 from "./core/channel/v1/tx";
import * as _115 from "./core/client/v1/client";
import * as _116 from "./core/client/v1/genesis";
import * as _117 from "./core/client/v1/query";
import * as _118 from "./core/client/v1/tx";
import * as _119 from "./core/commitment/v1/commitment";
import * as _120 from "./core/connection/v1/connection";
import * as _121 from "./core/connection/v1/genesis";
import * as _122 from "./core/connection/v1/query";
import * as _123 from "./core/connection/v1/tx";
import * as _124 from "./lightclients/localhost/v1/localhost";
import * as _125 from "./lightclients/solomachine/v1/solomachine";
import * as _126 from "./lightclients/solomachine/v2/solomachine";
import * as _127 from "./lightclients/tendermint/v1/tendermint";
import * as _234 from "./applications/transfer/v1/tx.amino";
import * as _235 from "./core/channel/v1/tx.amino";
import * as _236 from "./core/client/v1/tx.amino";
import * as _237 from "./core/connection/v1/tx.amino";
import * as _238 from "./applications/transfer/v1/tx.registry";
import * as _239 from "./core/channel/v1/tx.registry";
import * as _240 from "./core/client/v1/tx.registry";
import * as _241 from "./core/connection/v1/tx.registry";
import * as _242 from "./applications/transfer/v1/query.lcd";
import * as _243 from "./core/channel/v1/query.lcd";
import * as _244 from "./core/client/v1/query.lcd";
import * as _245 from "./core/connection/v1/query.lcd";
import * as _246 from "./applications/transfer/v1/query.rpc.Query";
import * as _247 from "./core/channel/v1/query.rpc.Query";
import * as _248 from "./core/client/v1/query.rpc.Query";
import * as _249 from "./core/connection/v1/query.rpc.Query";
import * as _250 from "./applications/transfer/v1/tx.rpc.msg";
import * as _251 from "./core/channel/v1/tx.rpc.msg";
import * as _252 from "./core/client/v1/tx.rpc.msg";
import * as _253 from "./core/connection/v1/tx.rpc.msg";
import * as _260 from "./lcd";
import * as _261 from "./rpc.query";
import * as _262 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._106,
        ..._107,
        ..._108,
        ..._109,
        ..._234,
        ..._238,
        ..._242,
        ..._246,
        ..._250
      };
      export const v2 = {
        ..._110
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._235,
        ..._239,
        ..._243,
        ..._247,
        ..._251
      };
    }
    export namespace client {
      export const v1 = {
        ..._115,
        ..._116,
        ..._117,
        ..._118,
        ..._236,
        ..._240,
        ..._244,
        ..._248,
        ..._252
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._119
      };
    }
    export namespace connection {
      export const v1 = {
        ..._120,
        ..._121,
        ..._122,
        ..._123,
        ..._237,
        ..._241,
        ..._245,
        ..._249,
        ..._253
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._124
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._125
      };
      export const v2 = {
        ..._126
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._127
      };
    }
  }
  export const ClientFactory = {
    ..._260,
    ..._261,
    ..._262
  };
}