//@ts-nocheck
import * as _93 from "./abci/types";
import * as _94 from "./crypto/keys";
import * as _95 from "./crypto/proof";
import * as _96 from "./libs/bits/types";
import * as _97 from "./p2p/types";
import * as _98 from "./types/block";
import * as _99 from "./types/evidence";
import * as _100 from "./types/params";
import * as _101 from "./types/types";
import * as _102 from "./types/validator";
import * as _103 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._93
  };
  export const crypto = {
    ..._94,
    ..._95
  };
  export namespace libs {
    export const bits = {
      ..._96
    };
  }
  export const p2p = {
    ..._97
  };
  export const types = {
    ..._98,
    ..._99,
    ..._100,
    ..._101,
    ..._102
  };
  export const version = {
    ..._103
  };
}