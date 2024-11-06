import { band, cosmos } from "../src";

describe("Cosmos messages", () => {
  it("send", () => {
    const message = cosmos.bank.v1beta1.MessageComposer.fromPartial.send({
      amount: [
        {
          amount: "1",
          denom: "uatom",
        },
      ],
      fromAddress: "myaddress",
      toAddress: "youraddress",
    });
    expect(message).toMatchSnapshot();
  });
});

describe("Band messages", () => {
  it("MsgRequestData", () => {
    const { requestData } = band.oracle.v1.MessageComposer.fromPartial;
    const message = requestData({
      oracleScriptId: BigInt(1),
      calldata: new Uint8Array([1, 2, 3]),
      askCount: BigInt(1),
      minCount: BigInt(1),
      clientId: "client",
      feeLimit: [
        {
          denom: "uband",
          amount: "1",
        },
      ],
      prepareGas: BigInt(1),
      executeGas: BigInt(1),
      sender: "sender",
    });
    expect(message).toMatchSnapshot();
  });
});
