"use client";

import { band } from "@bandprotocol/bandchain.js";
import { useState } from "react";

import { getSignerClient } from "@/utils";

import CodeBlock from "./common/CodeBlock";
import CodeDefault from "./common/CodeDefault";
import { ExampleTemplateLayout } from "./layouts/ExampleTemplateLayout";

const UpdateRouteButton = ({
  handleOnClick,
}: {
  handleOnClick?: () => void;
}) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleOnClick}
    >
      Update Route
    </button>
  );
};

export const EditRouteExample = () => {
  const fromAddress = "band1qjte252y5wk3vj0tk2cmgw64pwkxsg0n22pa4k";
  const tunnelId = "593"; // Example tunnel ID
  const [isUpdating, setIsUpdating] = useState(false);
  const [result, setResult] = useState("");

  const updateRoute = async () => {
    setIsUpdating(true);
    const signer = await getSignerClient();
    const { updateRoute } = band.tunnel.v1beta1.MessageComposer.withTypeUrl;

    const msg = updateRoute({
      creator: fromAddress,
      tunnelId: BigInt(tunnelId),
      route: {
        typeUrl: "/band.tunnel.v1beta1.IBCHookRoute",
        value: band.tunnel.v1beta1.IBCHookRoute.encode({
          channelId: "channel-2",
          destinationContractAddress:
            "0x3C8dfD80EF1292cdCF7A04aaC5C2677a83180a3D",
        }).finish(),
      },
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
      fromAddress,
      [msg],
      fee,
      "update route from bandchain.js example"
    );

    setResult(
      JSON.parse(
        JSON.stringify(response, (_key, value) =>
          typeof value === "bigint" ? value.toString() : value
        )
      )
    );
    setIsUpdating(false);
  };

  return (
    <ExampleTemplateLayout
      id="MsgUpdateRoute"
      title="band.tunnel.v1beta1.MsgUpdateRoute"
      exampleChildren={
        <CodeBlock
          code={`import { band } from "@bandprotocol/bandchain.js";
import { getSignerClient } from "@/utils";

const updateRoute = async () => {
  const fromAddress = "band1qjte252y5wk3vj0tk2cmgw64pwkxsg0n22pa4k";
  const tunnelId = "1";
  const signer = await getSignerClient();
  const { updateRoute } = band.tunnel.v1beta1.MessageComposer.withTypeUrl;

  const msg = updateRoute({
    creator: fromAddress,
    tunnelId: BigInt(tunnelId),
    route: {
      typeUrl: "/band.tunnel.v1beta1.IBCHookRoute",
      value: band.tunnel.v1beta1.IBCHookRoute.encode({
        destinationChainId: "arbitrum-sepolia-testnet",
        destinationContractAddress: "0x3C8dfD80EF1292cdCF7A04aaC5C2677a83180a3D",
        encoder: 1,
      }).finish(),
    },
  });

  const fee = {
    amount: [{ denom: "uband", amount: "5000" }],
    gas: "200000",
  };

  const response = await signer.signAndBroadcast(
    fromAddress,
    [msg],
    fee,
    "update route from bandchain.js example"
  );
  
  return response;
};`}
        />
      }
      resultChildren={
        <>
          <UpdateRouteButton handleOnClick={updateRoute} />
          {isUpdating && <p>Updating route...</p>}
          <CodeDefault>{JSON.stringify(result, null, 2)}</CodeDefault>
        </>
      }
    />
  );
};
