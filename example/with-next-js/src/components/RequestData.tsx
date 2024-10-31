"use client";

import CodeBlock from "@/components/common/CodeBlock";

export const RequestData = () => {
  const oracleRequestRawData = {
    oracleScriptID: 401,
    calldata: "0x",
    askCount: 16,
    minCount: 10,
    clientID: 1,
    schema:
      "{symbols:[string],minimum_source_count:u8}/{responses:[{symbol:string,response_code:u8,rate:u64}]}",
  };

  const handleRequestDataButton = () => {
    console.log("Request Data");
  };

  return (
    <div
      id="MsgRequestData"
      className="border-b border-inherit border-solid pb-4"
    >
      <h3 className="font-bold mb-3">MsgRequestData</h3>
      <CodeBlock code={JSON.stringify(oracleRequestRawData, null, 2)} />
      <p className="mb-2">Request Data from BandChain Oracle</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleRequestDataButton}
      >
        Request Data
      </button>
    </div>
  );
};
