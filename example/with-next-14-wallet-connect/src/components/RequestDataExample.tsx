"use client";

import { oracle } from "@bandprotocol/bandchain.js";
import { coin } from "@cosmjs/amino";
import { useChain } from "@cosmos-kit/react";

export const RequestDataButton = () => {
  const { address, getSigningStargateClient } = useChain("bandchain");

  const handleOnClick = async () => {
    const client = await getSigningStargateClient();
    console.log("client", client);

    // const { requestData } = band.oracle.v1.MessageComposer.withTypeUrl;
    const { requestData } = oracle.v1.MessageComposer.withTypeUrl;
    console.log("request data from v2");

    const msgRequest = requestData({
      oracleScriptId: BigInt(401),
      calldata: Buffer.from(
        "000000040000000342544300000004434f544900000003455448000000045553444303",
        "hex"
      ),
      askCount: BigInt(3),
      minCount: BigInt(2),
      clientId: "client",
      feeLimit: [coin("1000", "uband")],
      prepareGas: BigInt(6600),
      executeGas: BigInt(118000),
      sender: address as string,
      // tssEncoder: 0,
    });

    const fee = {
      amount: [
        {
          denom: "uband",
          amount: "5000",
        },
      ],
      gas: "500000",
    };

    const tx = await client.signAndBroadcast(
      address as string,
      [msgRequest],
      fee,
      "From Ledger Nano S"
    );

    return tx;
  };

  return <button onClick={handleOnClick}>Request Data</button>;
};

const RequestDataExample = () => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Message</th>
            <th className="px-6 py-3">Test</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4">
              <p className="font-mono p-1 bg-gray-200 rounded inline-block">
                MsgRequestData
              </p>
            </td>
            <td className="px-6 py-4">
              <RequestDataButton />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RequestDataExample;
