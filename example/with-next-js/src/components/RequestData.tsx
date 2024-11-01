"use client";
import { band } from "@bandprotocol/bandchainjs";
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

export const RequestData = () => {
  const handleRequestDataButton = () => {
    // const { MsgRequestData } = band.oracle.v1;
    // const osSchema =
    //   "{symbols:[string],minimum_source_count:u8}/{responses:[{symbol:string,response_code:u8,rate:u64}]}";
    // const msg = MsgRequestData.toAmino({
    //   oracleScriptId: BigInt(401),
    //   sender: "band1qjte252y5wk3vj0tk2cmgw64pwkxsg0n22pa4k",
    //   calldata: "0x",
    //   askCount: BigInt(16),
    //   minCount: BigInt(10),
    //   clientId: 1,
    // });
  };

  return (
    <ExampleTemplateLayout
      id="MsgRequestData"
      title="MsgRequestData"
      exampleChildren={<CodeExmaple />}
      resultChildren={
        <>
          <button onClick={handleRequestDataButton}>Request Data</button>
        </>
      }
    />
  );
};
