"use client";

import { wallets as leap } from "@cosmos-kit/leap";
import { ChainProvider } from "@cosmos-kit/react";
import { assets, chains } from "chain-registry";
import { SignerOptions } from "cosmos-kit";
import { mainnetRpc } from "src/constants/endpoints";
import { signerOptions } from "src/constants/registry";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ChainProvider
      chains={chains} // supported chains
      assetLists={assets} // supported asset lists
      wallets={leap} // supported wallets
      endpointOptions={{
        endpoints: {
          bandchain: {
            rpc: [mainnetRpc],
          },
        },
      }}
      signerOptions={signerOptions as unknown as SignerOptions}
      walletConnectOptions={{
        signClient: {
          projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
        },
      }}
    >
      <div className="relative overflow-x-auto">{children}</div>;
    </ChainProvider>
  );
}
