/* eslint-disable indent */
"use client";

import { MainWalletBase } from "@cosmos-kit/core";
import { wallets as ledger } from "@cosmos-kit/ledger";
import { useChain } from "@cosmos-kit/react";
import { ChainProvider } from "@cosmos-kit/react";
import { SignerOptions, WalletStatus } from "cosmos-kit";
import { devnetRpc } from "src/constants/endpoints";
import {
  localbandchain,
  localbandchainAssets,
  signerOptions,
} from "src/constants/registry";

import { RequestDataButton } from "./RequestDataExample";

const WalletConnectButton = () => {
  const chainContext = useChain("localbandchain");

  const { status, connect, message, disconnect, address } = chainContext;

  switch (status) {
    case WalletStatus.Disconnected:
      return (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={connect}
        >
          Connect Wallet Here
        </button>
      );
    case WalletStatus.Connected:
      return (
        <>
          <p>{address}</p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => disconnect()}
          >
            Disconnect Wallet
          </button>
        </>
      );
    case WalletStatus.Connecting:
      return <button disabled>Connecting...</button>;
    case WalletStatus.Error:
      return (
        <div className="p-2 bg-red-500 text-center text-white rounded">
          Error: {message}
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      );
  }
};

const Wallet = () => {
  return (
    <ChainProvider
      chains={[localbandchain]} // supported chains
      assetLists={[localbandchainAssets]} // supported asset lists
      wallets={ledger as unknown as MainWalletBase[]} // supported wallets
      endpointOptions={{
        endpoints: {
          localbandchain: {
            rpc: [devnetRpc],
          },
        },
      }}
      signerOptions={signerOptions as unknown as SignerOptions}
    >
      <WalletConnectButton />

      <RequestDataButton />
    </ChainProvider>
  );
};

export default Wallet;
