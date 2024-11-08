"use client";

import { ChainProvider } from "@cosmos-kit/react";
import { assets, chains } from "chain-registry";
import { wallets } from "cosmos-kit";
import RequestDataExample from "src/components/RequestDataExample";
import WalletConnectButton from "src/components/WalletConnectButton";
import { devnetRpc } from "src/constants/endpoints";
import { bandchaindevnet, bandchaindevnetAssets } from "src/constants/registry";

export default function Home() {
  return (
    <ChainProvider
      chains={[...chains, bandchaindevnet]}
      assetLists={[...assets, bandchaindevnetAssets]}
      wallets={wallets.ledger}
      endpointOptions={{
        endpoints: {
          bandchaindevnet: {
            rpc: [devnetRpc],
          },
        },
      }}
    >
      <div className="p-3">
        <main className="grid gap-4">
          <WalletConnectButton />
          <div className="grid gap-4">
            <RequestDataExample />
          </div>
        </main>
      </div>
    </ChainProvider>
  );
}
