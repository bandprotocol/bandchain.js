//@ts-nocheck
import * as _116 from "./applications/transfer/v1/genesis";
import * as _117 from "./applications/transfer/v1/query";
import * as _118 from "./applications/transfer/v1/transfer";
import * as _119 from "./applications/transfer/v1/tx";
import * as _120 from "./applications/transfer/v2/packet";
import * as _121 from "./core/channel/v1/channel";
import * as _122 from "./core/channel/v1/genesis";
import * as _123 from "./core/channel/v1/query";
import * as _124 from "./core/channel/v1/tx";
import * as _125 from "./core/client/v1/client";
import * as _126 from "./core/client/v1/genesis";
import * as _127 from "./core/client/v1/query";
import * as _128 from "./core/client/v1/tx";
import * as _129 from "./core/commitment/v1/commitment";
import * as _130 from "./core/connection/v1/connection";
import * as _131 from "./core/connection/v1/genesis";
import * as _132 from "./core/connection/v1/query";
import * as _133 from "./core/connection/v1/tx";
import * as _134 from "./lightclients/localhost/v1/localhost";
import * as _135 from "./lightclients/solomachine/v1/solomachine";
import * as _136 from "./lightclients/solomachine/v2/solomachine";
import * as _137 from "./lightclients/tendermint/v1/tendermint";
import * as _222 from "./applications/transfer/v1/tx.amino";
import * as _223 from "./core/channel/v1/tx.amino";
import * as _224 from "./core/client/v1/tx.amino";
import * as _225 from "./core/connection/v1/tx.amino";
import * as _226 from "./applications/transfer/v1/tx.registry";
import * as _227 from "./core/channel/v1/tx.registry";
import * as _228 from "./core/client/v1/tx.registry";
import * as _229 from "./core/connection/v1/tx.registry";
import * as _230 from "./applications/transfer/v1/query.rpc.Query";
import * as _231 from "./core/channel/v1/query.rpc.Query";
import * as _232 from "./core/client/v1/query.rpc.Query";
import * as _233 from "./core/connection/v1/query.rpc.Query";
import * as _234 from "./applications/transfer/v1/tx.rpc.msg";
import * as _235 from "./core/channel/v1/tx.rpc.msg";
import * as _236 from "./core/client/v1/tx.rpc.msg";
import * as _237 from "./core/connection/v1/tx.rpc.msg";
import * as _251 from "./rpc.query";
import * as _252 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._222,
        ..._226,
        ..._230,
        ..._234
      };
      export const v2 = {
        ..._120
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._121,
        ..._122,
        ..._123,
        ..._124,
        ..._223,
        ..._227,
        ..._231,
        ..._235
      };
    }
    export namespace client {
      export const v1 = {
        ..._125,
        ..._126,
        ..._127,
        ..._128,
        ..._224,
        ..._228,
        ..._232,
        ..._236
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._129
      };
    }
    export namespace connection {
      export const v1 = {
        ..._130,
        ..._131,
        ..._132,
        ..._133,
        ..._225,
        ..._229,
        ..._233,
        ..._237
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._134
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._135
      };
      export const v2 = {
        ..._136
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._137
      };
    }
  }
  export const ClientFactory = {
    ..._251,
    ..._252
  };
}