"use client";

import { useState } from "react";
import ChainProvider from "src/components/ChainProvider";
import ChainSelector from "src/components/ChainSelector";
import Wallet from "src/components/WalletConnectButton";
import TestUseChain from "./TestUseChain";

export default function Home() {
  const [chainName, setChainName] = useState("bandchain");

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <ChainProvider>
        <div>
          <ChainSelector chainName={chainName} setChainName={setChainName} />
          <Wallet chainName={chainName} />
          <TestUseChain chainName={chainName} />
        </div>
      </ChainProvider>
    </div>
  );
}
