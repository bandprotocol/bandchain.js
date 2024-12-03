//@ts-nocheck
import * as _168 from "./abci/types";
import * as _169 from "./crypto/keys";
import * as _170 from "./crypto/proof";
import * as _171 from "./libs/bits/types";
import * as _172 from "./p2p/types";
import * as _173 from "./types/block";
import * as _174 from "./types/evidence";
import * as _175 from "./types/params";
import * as _176 from "./types/types";
import * as _177 from "./types/validator";
import * as _178 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._168
  };
  export const crypto = {
    ..._169,
    ..._170
  };
  export namespace libs {
    export const bits = {
      ..._171
    };
  }
  export const p2p = {
    ..._172
  };
  export const types = {
    ..._173,
    ..._174,
    ..._175,
    ..._176,
    ..._177
  };
  export const version = {
    ..._178
  };
}