"use client";

import { band, cosmos } from "@bandprotocol/bandchain.js";
import { coin, StdFee } from "@cosmjs/amino";
import { SigningStargateClient } from "@cosmjs/stargate";
import { useChain } from "@cosmos-kit/react";
import { useState } from "react";
import { explorer } from "src/constants/endpoints";

const requestData = (
  getSigningStargateClient: () => Promise<SigningStargateClient>,
  setResp: (resp: any) => any,
  address: string
) => {
  return async () => {
    console.log("requestData");
    const stargateClient = await getSigningStargateClient();
    const { requestData } = band.oracle.v1.MessageComposer.fromPartial;

    const msg = requestData({
      oracleScriptId: BigInt(401),
      calldata: Buffer.from(
        "000000040000000342544300000004434f544900000003455448000000045553444303",
        "hex"
      ),
      askCount: BigInt(4),
      minCount: BigInt(2),
      clientId: "client",
      feeLimit: [coin("200", "uband")],
      prepareGas: BigInt(6600),
      executeGas: BigInt(118000),
      sender: address,
      tssEncoder: 0,
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

    const response = await stargateClient.signAndBroadcast(
      address as string,
      [msg],
      fee
    );

    setResp(response);

    console.log(response);
  };
};

const sendTokens = (
  getSigningStargateClient: () => Promise<SigningStargateClient>,
  setResp: (resp: any) => any,
  address: string
) => {
  return async () => {
    console.log("sendTokens");

    try {
      const stargateClient = await getSigningStargateClient();

      if (!stargateClient || !address) {
        console.error("stargateClient undefined or address undefined.");
        return;
      }

      const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

      const msg = send({
        amount: [
          {
            denom: "uband",
            amount: "100000000",
          },
        ],
        fromAddress: address,
        toAddress: address,
      });

      const fee: StdFee = {
        amount: [
          {
            denom: "uband",
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
        console.log(response);

        setResp(response);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const RequestDataExample = () => {
  const { getSigningStargateClient, address } = useChain("bandchain");
  const [resp, setResp] = useState<any>({});

  return (
    <div className="relative overflow-x-auto mt-5">
      <div>
        <p>Height: {resp.height}</p>
        <div className="flex gap-2">
          <p>TX Hash: </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${explorer}/tx/${resp.transactionHash}`}
            className="text-blue-500 underline"
          >
            {resp.transactionHash}
          </a>
        </div>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
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
                  address as string
                )}
              >
                Test
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4">
              <p className="font-mono p-1 font-bold text-white inline-block">
                Request Data
              </p>
            </td>
            <td className="px-6 py-4">
              <button
                onClick={requestData(
                  getSigningStargateClient as () => Promise<SigningStargateClient>,
                  setResp as () => any,
                  address as string
                )}
              >
                Test
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RequestDataExample;
