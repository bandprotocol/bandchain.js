"use client";

import { band } from "@bandprotocol/bandchain.js";
import { useState } from "react";

import { getSignerClient } from "@/utils";

import CodeBlock from "./common/CodeBlock";
import CodeDefault from "./common/CodeDefault";
import { ExampleTemplateLayout } from "./layouts/ExampleTemplateLayout";

const CreateTunnelButton = ({
  handleOnClick,
}: {
  handleOnClick?: () => void;
}) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleOnClick}
    >
      Create Tunnel
    </button>
  );
};

export const CreateTunnelExample = () => {
  const creatorAddress = "band1qjte252y5wk3vj0tk2cmgw64pwkxsg0n22pa4k";
  const [isCreating, setIsCreating] = useState(false);
  const [result, setResult] = useState("");

  const createTunnel = async () => {
    setIsCreating(true);
    const signer = await getSignerClient();
    const { createTunnel } = band.tunnel.v1beta1.MessageComposer.withTypeUrl;

    const msg = createTunnel({
      creator: creatorAddress,
      route: {
        typeUrl: "/band.tunnel.v1beta1.IBCHookRoute",
        value: band.tunnel.v1beta1.IBCHookRoute.encode({
          channelId: "channel-0",
          destinationContractAddress:
            "0x3C8dfD80EF1292cdCF7A04aaC5C2677a83180a3D",
        }).finish(),
      },
      signalDeviations: [
        {
          signalId: "CS:BTC-USD",
          softDeviationBps: BigInt(10000),
          hardDeviationBps: BigInt(10000),
        },
      ],
      interval: BigInt(3600),
      initialDeposit: [
        {
          denom: "uband",
          amount: "1000000",
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

    console.log(msg);

    const response = await signer.signAndBroadcast(
      creatorAddress,
      [msg],
      fee,
      "create tunnel from bandchain.js example"
    );

    setResult(
      JSON.parse(
        JSON.stringify(response, (_key, value) =>
          typeof value === "bigint" ? value.toString() : value
        )
      )
    );
    setIsCreating(false);
  };

  return (
    <ExampleTemplateLayout
      id="MsgCreateTunnel"
      title="band.tunnel.v1beta1.MsgCreateTunnel"
      exampleChildren={
        <CodeBlock
          code={`import { band } from "@bandprotocol/bandchain.js";
import { getSignerClient } from "@/utils";

const createTunnel = async () => {
  const signer = await getSignerClient();
  const { createTunnel } = band.tunnel.v1beta1.MessageComposer.withTypeUrl;

  const msg = createTunnel({
    creator: "band1qjte252y5wk3vj0tk2cmgw64pwkxsg0n22pa4k",
    route: {
      typeUrl: "/band.tunnel.v1beta1.TSSRoute",
      value: band.tunnel.v1beta1.TSSRoute.encode({
        destinationChainId: "arbitrum-sepolia-testnet",
        destinationContractAddress: "0x3C8dfD80EF1292cdCF7A04aaC5C2677a83180a3D",
        encoder: 1,
      }).finish(),
    },
    signalDeviations: [
      {
        signalId: "CS:BTC-USD",
        softDeviationBps: BigInt(10000),
        hardDeviationBps: BigInt(10000),
      },
    ],
    interval: BigInt(3600),
    initialDeposit: [
      {
        denom: "uband",
        amount: "1000000",
      },
    ],
  });

  const fee = {
    amount: [{ denom: "uband", amount: "5000" }],
    gas: "200000",
  };

  const response = await signer.signAndBroadcast(
    "band1qjte252y5wk3vj0tk2cmgw64pwkxsg0n22pa4k",
    [msg],
    fee,
    "create tunnel from bandchain.js example"
  );
  
  return response;
};`}
        />
      }
      resultChildren={
        <>
          <CreateTunnelButton handleOnClick={createTunnel} />
          {isCreating && <p>Creating tunnel...</p>}
          <CodeDefault>{JSON.stringify(result, null, 2)}</CodeDefault>
        </>
      }
    />
  );
};
