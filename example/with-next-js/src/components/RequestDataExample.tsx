"use client";

import CodeBlock from "@/components/common/CodeBlock";
import { ExampleTemplateLayout } from "./layouts/ExampleTemplateLayout";

const CodeExmaple = () => {
  return (
    <CodeBlock
      code={`import { band } from "@bandprotocol/bandchainjs";
async function getAllBalances() {

`}
    />
  );
};

const RequestDataButton = () => {
  const oracleScriptId = 401;
  const oracleScriptSchema = `{symbols:[string],minimum_source_count:u8}/{responses:[{symbol:string,response_code:u8,rate:u64}]}`;
  const inputData = '{"symbols":["BTC","ETH"],"minimum_source_count":5}';

  const callData = "0x";
  const minCount = 10;
  const askCount = 16;

  const handleRequestDataButton = () => {
    console.log("Request Data");
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
