import { coin } from "@cosmjs/amino";

import { band } from "../src";
import { AminoConverter } from "../src/codegen/band/oracle/v1/tx.amino";

it("AminoConverter", async () => {
  const msg = AminoConverter["/band.oracle.v1.MsgRequestData"].toAmino({
    oracleScriptId: BigInt(1),
    calldata: new Uint8Array([1, 2, 3]),
    askCount: BigInt(1),
    minCount: BigInt(1),
    clientId: "client",
    feeLimit: [coin("1", "uband")],
    prepareGas: BigInt(1),
    executeGas: BigInt(1),
    sender: "sender",
    tssEncoder: 0,
  });
  expect(msg).toMatchSnapshot();

  const back = AminoConverter["/band.oracle.v1.MsgRequestData"].fromAmino(msg);

  expect(back).toMatchSnapshot();

  const final = AminoConverter["/band.oracle.v1.MsgRequestData"].toAmino(back);

  expect(final).toMatchSnapshot();

  expect(final).toEqual(msg);
});

it("AminoConverter.scoped", async () => {
  const msg = band.oracle.v1.AminoConverter[
    "/band.oracle.v1.MsgRequestData"
  ].toAmino({
    oracleScriptId: BigInt(1),
    calldata: new Uint8Array([1, 2, 3]),
    askCount: BigInt(1),
    minCount: BigInt(1),
    clientId: "client",
    feeLimit: [coin("1", "uband")],
    prepareGas: BigInt(1),
    executeGas: BigInt(1),
    sender: "sender",
    tssEncoder: 0,
  });
  expect(msg).toMatchSnapshot();

  const back =
    band.oracle.v1.AminoConverter["/band.oracle.v1.MsgRequestData"].fromAmino(
      msg
    );

  expect(back).toMatchSnapshot();

  const final =
    band.oracle.v1.AminoConverter["/band.oracle.v1.MsgRequestData"].toAmino(
      back
    );

  expect(final).toMatchSnapshot();

  expect(final).toEqual(msg);
});
