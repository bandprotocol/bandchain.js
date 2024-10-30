"use client";

import { cosmos } from "@bandprotocol/bandchainjs";
import { useState } from "react";

import { getSignerClient } from "@/utils";

export const SendTokensButton = () => {
  const fromAddress = "band1qjte252y5wk3vj0tk2cmgw64pwkxsg0n22pa4k";
  const toAddress = "band1aq9xcxwhf2xl5gc7x3x8nzsxercwxgwmpq3s55";
  const amount = "10";
  const [isSending, setIsSending] = useState(false);
  const [result, setResult] = useState("");

  const handleSendButton = async () => {
    const signer = await getSignerClient();
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

    setIsSending(true);

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
      "send tokens"
    );

    setIsSending(false);
    setResult(response.transactionHash);
  };

  return (
    <div id="sendTokens">
      <h3 className="font-bold mb-3">MsgSend</h3>
      <p className="mb-2">
        From: <span className="font-mono">{fromAddress}</span>
      </p>
      <p className="mb-2">
        To: <span className="font-mono">{toAddress}</span>
      </p>
      <p className="mb-2">Amount: {amount} uband</p>
      <button
        onClick={handleSendButton}
        className={
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        }
      >
        {isSending ? "Sending..." : "Send Tokens"}
      </button>
      <p className="mt-3">
        <a
          href={`https://laozi-testnet6.cosmoscan.io/tx/${result}`}
          target="_blank"
          className="text-blue-500"
        >
          {result}
        </a>
      </p>
    </div>
  );
};
