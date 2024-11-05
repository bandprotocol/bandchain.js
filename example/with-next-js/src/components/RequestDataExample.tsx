"use client";

import { band, cosmos } from "@bandprotocol/bandchainjs";
import { Obi } from "@bandprotocol/obi-ts";

import CodeBlock from "@/components/common/CodeBlock";
import { getSignerClient } from "@/utils";

import { ExampleTemplateLayout } from "./layouts/ExampleTemplateLayout";

const CodeExmaple = () => {
  return (
    <CodeBlock
      code={`import { band, cosmos } from "@bandprotocol/bandchainjs";
async function requestDataOracle() {
  const fromAddress = "";
  const oracleScriptSchema =band1qjte252y5wk3vj0tk2cmgw64pwkxsg0n22pa4k
    "{symbols:[string],minimum_source_count:u8}/{responses:[{symbol:string,response_code:u8,rate:u64}]}";

  const obi = new Obi(oracleScriptSchema);
  const encodedInput = obi.encodeInput({
        symbols: ["ATOM", "BNB", "BTC", "ETH", "INJ", "USDT", "OSMO", "STX", "SOL"],
        minimum_source_count: 5,
  });

  const oracleScriptId = BigInt(401);
  const minCount = BigInt(10);
  const askCount = BigInt(16);

  const coin = cosmos.base.v1beta1.Coin.fromPartial({
    denom: "uband",
    amount: "5000",
  });

  const fee = {
    amount: [
      {
        denom: "uband",
        amount: "5000",
      },
    ],
    gas: "200000",
  };

  const { requestData } = band.oracle.v1.MessageComposer.withTypeUrl;

  const msg = requestData({
    oracleScriptId,
    minCount,
    askCount,
    clientId: "bandchain.js example",
    calldata: encodedInput,
    feeLimit: [coin],
    sender: fromAddress,
    prepareGas: BigInt(200000),
    executeGas: BigInt(200000),
  });

  const signer = await getSignerClient();
  const response = await signer.signAndBroadcast(fromAddress, [msg], fee);
  
  return response
}
`}
    />
  );
};

const RequestDataButton = () => {
  const fromAddress = "band1qjte252y5wk3vj0tk2cmgw64pwkxsg0n22pa4k";
  const oracleScriptSchema =
    "{symbols:[string],minimum_source_count:u8}/{responses:[{symbol:string,response_code:u8,rate:u64}]}";

  const obi = new Obi(oracleScriptSchema);
  const encodedInput = obi.encodeInput({
    symbols: ["ATOM", "BNB", "BTC", "ETH", "INJ", "USDT", "OSMO", "STX", "SOL"],
    minimum_source_count: 5,
  });

  const oracleScriptId = BigInt(401);
  const minCount = BigInt(10);
  const askCount = BigInt(16);

  const coin = cosmos.base.v1beta1.Coin.fromPartial({
    denom: "uband",
    amount: "5000",
  });

  const fee = {
    amount: [
      {
        denom: "uband",
        amount: "5000",
      },
    ],
    gas: "200000",
  };

  const { requestData } = band.oracle.v1.MessageComposer.withTypeUrl;

  const msg = requestData({
    oracleScriptId,
    minCount,
    askCount,
    clientId: "bandchain.js example",
    calldata: encodedInput,
    feeLimit: [coin],
    sender: fromAddress,
    prepareGas: BigInt(200000),
    executeGas: BigInt(200000),
  });

  const handleRequestDataButton = async () => {
    console.log(msg);
    const signer = await getSignerClient();
    const response = await signer.signAndBroadcast(fromAddress, [msg], fee);
    console.log(
      JSON.parse(
        JSON.stringify(response, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
        )
      )
    );
    return response;
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleRequestDataButton}
    >
      Request Data
    </button>
  );
};

export const RequestDataExample = () => {
  return (
    <ExampleTemplateLayout
      id="MsgRequestData"
      title="MsgRequestData"
      exampleChildren={<CodeExmaple />}
      resultChildren={<RequestDataButton />}
    />
  );
};
