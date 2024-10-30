//@ts-nocheck
import * as _82 from "./applications/transfer/v1/genesis";
import * as _83 from "./applications/transfer/v1/query";
import * as _84 from "./applications/transfer/v1/transfer";
import * as _85 from "./applications/transfer/v1/tx";
import * as _86 from "./applications/transfer/v2/packet";
import * as _87 from "./core/channel/v1/channel";
import * as _88 from "./core/channel/v1/genesis";
import * as _89 from "./core/channel/v1/query";
import * as _90 from "./core/channel/v1/tx";
import * as _91 from "./core/client/v1/client";
import * as _92 from "./core/client/v1/genesis";
import * as _93 from "./core/client/v1/query";
import * as _94 from "./core/client/v1/tx";
import * as _95 from "./core/commitment/v1/commitment";
import * as _96 from "./core/connection/v1/connection";
import * as _97 from "./core/connection/v1/genesis";
import * as _98 from "./core/connection/v1/query";
import * as _99 from "./core/connection/v1/tx";
import * as _100 from "./lightclients/localhost/v1/localhost";
import * as _101 from "./lightclients/solomachine/v1/solomachine";
import * as _102 from "./lightclients/solomachine/v2/solomachine";
import * as _103 from "./lightclients/tendermint/v1/tendermint";
import * as _186 from "./applications/transfer/v1/tx.amino";
import * as _187 from "./core/channel/v1/tx.amino";
import * as _188 from "./core/client/v1/tx.amino";
import * as _189 from "./core/connection/v1/tx.amino";
import * as _190 from "./applications/transfer/v1/tx.registry";
import * as _191 from "./core/channel/v1/tx.registry";
import * as _192 from "./core/client/v1/tx.registry";
import * as _193 from "./core/connection/v1/tx.registry";
import * as _194 from "./applications/transfer/v1/query.lcd";
import * as _195 from "./core/channel/v1/query.lcd";
import * as _196 from "./core/client/v1/query.lcd";
import * as _197 from "./core/connection/v1/query.lcd";
import * as _198 from "./applications/transfer/v1/query.rpc.Query";
import * as _199 from "./core/channel/v1/query.rpc.Query";
import * as _200 from "./core/client/v1/query.rpc.Query";
import * as _201 from "./core/connection/v1/query.rpc.Query";
import * as _202 from "./applications/transfer/v1/tx.rpc.msg";
import * as _203 from "./core/channel/v1/tx.rpc.msg";
import * as _204 from "./core/client/v1/tx.rpc.msg";
import * as _205 from "./core/connection/v1/tx.rpc.msg";
import * as _212 from "./lcd";
import * as _213 from "./rpc.query";
import * as _214 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._82,
        ..._83,
        ..._84,
        ..._85,
        ..._186,
        ..._190,
        ..._194,
        ..._198,
        ..._202
      };
      export const v2 = {
        ..._86
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._87,
        ..._88,
        ..._89,
        ..._90,
        ..._187,
        ..._191,
        ..._195,
        ..._199,
        ..._203
      };
    }
    export namespace client {
      export const v1 = {
        ..._91,
        ..._92,
        ..._93,
        ..._94,
        ..._188,
        ..._192,
        ..._196,
        ..._200,
        ..._204
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._95
      };
    }
    export namespace connection {
      export const v1 = {
        ..._96,
        ..._97,
        ..._98,
        ..._99,
        ..._189,
        ..._193,
        ..._197,
        ..._201,
        ..._205
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._100
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._101
      };
      export const v2 = {
        ..._102
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._103
      };
    }
  }
  export const ClientFactory = {
    ..._212,
    ..._213,
    ..._214
  };
}