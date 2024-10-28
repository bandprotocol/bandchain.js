//@ts-nocheck
import * as _106 from "./abci/types";
import * as _107 from "./crypto/keys";
import * as _108 from "./crypto/proof";
import * as _109 from "./libs/bits/types";
import * as _110 from "./p2p/types";
import * as _111 from "./types/block";
import * as _112 from "./types/evidence";
import * as _113 from "./types/params";
import * as _114 from "./types/types";
import * as _115 from "./types/validator";
import * as _116 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._106
  };
  export const crypto = {
    ..._107,
    ..._108
  };
  export namespace libs {
    export const bits = {
      ..._109
    };
  }
  export const p2p = {
    ..._110
  };
  export const types = {
    ..._111,
    ..._112,
    ..._113,
    ..._114,
    ..._115
  };
  export const version = {
    ..._116
  };
}