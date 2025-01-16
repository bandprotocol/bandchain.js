"use client";

import { MainWalletBase } from "@cosmos-kit/core";
import { wallets as ledger } from "@cosmos-kit/ledger";
import { ChainProvider } from "@cosmos-kit/react";
import { SignerOptions } from "cosmos-kit";
import { devnetRpc } from "src/constants/endpoints";
import {
  localbandchain,
  localbandchainAssets,
  signerOptions,
} from "src/constants/registry";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      <div className="relative overflow-x-auto">{children}</div>;
    </ChainProvider>
  );
}
