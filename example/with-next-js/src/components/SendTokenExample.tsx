"use client";

import { cosmos } from "@bandprotocol/bandchainjs";
import { useState } from "react";

import { getDefaultSigner } from "@/utils";

import CodeBlock from "./common/CodeBlock";
import { ExampleTemplateLayout } from "./layouts/ExampleTemplateLayout";

const SendTokenButton = ({ handleOnClick }: { handleOnClick?: () => void }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleOnClick}
    >
      Send 10 Testnet BAND Tokens
    </button>
  );
};

export const SendTokenExample = () => {
  const fromAddress = "band1qjte252y5wk3vj0tk2cmgw64pwkxsg0n22pa4k";
  const toAddress = "band1aq9xcxwhf2xl5gc7x3x8nzsxercwxgwmpq3s55";
  const amount = "10";
  const [isSending, setIsSending] = useState(false);
  const [result, setResult] = useState("");

  const sendTokens = async () => {
    setIsSending(true);
    const signer = await getDefaultSigner();
    const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

    const msgSend = send({
      fromAddress,
      toAddress,
      amount: [
        {
          denom: "uband",
          amount,
        },
      ],
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

    const response = await signer.signAndBroadcast(
      fromAddress,
      [msgSend],
      fee,
      "send tokens from bandchain.js example"
    );

    setResult(
      JSON.parse(
        JSON.stringify(response, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
        )
      )
    );
    setIsSending(false);
  };

  return (
    <ExampleTemplateLayout
      id="cosmos.bank.v1beta1.MsgSend"
      title="cosmos.bank.v1beta1.MsgSend"
      exampleChildren={
        <CodeBlock
          code={`import { cosmos } from "@bandprotocol/bandchainjs";

async function sendTokens() {
    const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;
    const fromAddress = ${fromAddress};
    const toAddress = ${toAddress};
    const amount = ${amount};

    const msgSend = send({
      fromAddress,
      toAddress,
      amount: [
        {
          denom: "uband",
          amount,
        },
      ],
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

    const response = await signer.signAndBroadcast(
      fromAddress,
      [msgSend],
      fee,
      "send tokens from bandchain.js example"
    );

    return response
}
`}
        />
      }
      resultChildren={
        <>
          <SendTokenButton handleOnClick={sendTokens} />
          {isSending && <p>Sending...</p>}
          <pre className="bg-gray-100 p-5 rounded-lg overflow-auto text-sm text-gray-800 max-h-[400px]">
            <code>{JSON.stringify(result, null, 2)}</code>
          </pre>
        </>
      }
    />
  );
};
