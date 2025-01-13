/* eslint-disable indent */
"use client";

import { ChainProvider } from "@cosmos-kit/react";
import { assets, chains } from "chain-registry";
import { SignerOptions, WalletStatus } from "cosmos-kit";
import { wallets as leapWallets } from "@cosmos-kit/leap";
import { devnetRpc } from "src/constants/endpoints";
import {
  localbandchain,
  localbandchainAssets,
  signerOptions,
} from "src/constants/registry";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ChainProvider
      chains={[...chains, localbandchain]}
      assetLists={[...assets, localbandchainAssets]}
      wallets={[leapWallets[0]]}
      endpointOptions={{
        endpoints: {
          localbandchain: {
            rpc: [devnetRpc],
          },
        },
      }}
      signerOptions={signerOptions as unknown as SignerOptions}
    >
      {children}
    </ChainProvider>
  );
};

export default Provider;
