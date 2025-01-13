"use client";
import { cosmos } from "@bandprotocol/bandchainjs";
import { StdFee } from "@cosmjs/amino";
import { SigningStargateClient } from "@cosmjs/stargate";
import { useChain } from "@cosmos-kit/react";
import { useState } from "react";

const sendTokens = (
  getSigningStargateClient: () => Promise<SigningStargateClient>,
  setResp: (resp: string) => any,
  address: string,
  chainName: string
) => {
  return async () => {
    const stargateClient = await getSigningStargateClient();
    if (!stargateClient || !address) {
      console.error("stargateClient undefined or address undefined.");
      return;
    }

    const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

    const msg = send({
      amount: [
        {
          denom: chainName == "localbandchain" ? "uband" : "uosmo",
          amount: "1000",
        },
      ],
      toAddress: address,
      fromAddress: address,
    });

    const fee: StdFee = {
      amount: [
        {
          denom: chainName == "localbandchain" ? "uband" : "uosmo",
          amount: "100",
        },
      ],
      gas: "100000",
    };

    try {
      const response = await stargateClient.signAndBroadcast(
        address,
        [msg],
        fee
      );
      setResp(JSON.stringify(response, null, 2));
    } catch (error) {
      console.error(error);
    }
  };
};

const RequestDataExample = ({ chainName }: { chainName: string }) => {
  const { getSigningStargateClient, address } = useChain(chainName);
  const [resp, setResp] = useState("");

  return (
    <div className="relative overflow-x-auto mt-5">
      <p>{resp}</p>
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
              <p className="font-mono p-1 font-bold text-white inline-block">
                Send Token
              </p>
            </td>
            <td className="px-6 py-4">
              <button
                onClick={sendTokens(
                  getSigningStargateClient as () => Promise<SigningStargateClient>,
                  setResp as () => any,
                  address as string,
                  chainName
                )}
              >
                Send
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RequestDataExample;
