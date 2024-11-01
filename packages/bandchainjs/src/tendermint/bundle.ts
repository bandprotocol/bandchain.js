//@ts-nocheck
import * as _146 from "./abci/types";
import * as _147 from "./crypto/keys";
import * as _148 from "./crypto/proof";
import * as _149 from "./libs/bits/types";
import * as _150 from "./p2p/types";
import * as _151 from "./types/block";
import * as _152 from "./types/evidence";
import * as _153 from "./types/params";
import * as _154 from "./types/types";
import * as _155 from "./types/validator";
import * as _156 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._146
  };
  export const crypto = {
    ..._147,
    ..._148
  };
  export namespace libs {
    export const bits = {
      ..._149
    };
  }
  export const p2p = {
    ..._150
  };
  export const types = {
    ..._151,
    ..._152,
    ..._153,
    ..._154,
    ..._155
  };
  export const version = {
    ..._156
  };
}