import { coin } from "@cosmjs/amino";

import { band } from "../src";
import { MessageComposer } from "../src/codegen/band/oracle/v1/tx.registry";

describe("Band messages", () => {
  it("messages", async () => {
    expect(
      MessageComposer.withTypeUrl.requestData({
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

  it("messages.scoped", async () => {
    expect(
      band.oracle.v1.MessageComposer.withTypeUrl.requestData({
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
});
