import { coin } from "@cosmjs/amino";

import { band } from "../src";
import { MsgRequestData } from "../src/codegen/band/oracle/v1/tx";

it("fromPartial", async () => {
  expect(
    MsgRequestData.fromPartial({
      oracleScriptId: BigInt(1),
      calldata: new Uint8Array([1, 2, 3]),
      askCount: BigInt(1),
      minCount: BigInt(1),
      clientId: "client",
      feeLimit: [coin("1", "uband")],
      prepareGas: BigInt(1),
      executeGas: BigInt(1),
      sender: "sender",
    })
  ).toMatchSnapshot();
});

it("fromPartial.scoped", async () => {
  expect(
    band.oracle.v1.MsgRequestData.fromPartial({
      oracleScriptId: BigInt(1),
      calldata: new Uint8Array([1, 2, 3]),
      askCount: BigInt(1),
      minCount: BigInt(1),
      clientId: "client",
      feeLimit: [coin("1", "uband")],
      prepareGas: BigInt(1),
      executeGas: BigInt(1),
      sender: "sender",
    })
  ).toMatchSnapshot();
});

it("encode", async () => {
  const obj = MsgRequestData.fromPartial({
    oracleScriptId: BigInt(1),
    calldata: new Uint8Array([1, 2, 3]),
    askCount: BigInt(1),
    minCount: BigInt(1),
    clientId: "client",
  });
  const encoded = MsgRequestData.encode(obj).finish();
  const decoded = MsgRequestData.decode(encoded);
  expect(encoded instanceof Uint8Array).toBe(true);
  expect(decoded).toMatchSnapshot();
});
