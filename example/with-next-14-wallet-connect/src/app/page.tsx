"use client";

import { useState } from "react";
import ChainProvider from "src/components/ChainProvider";
import ChainSelector from "src/components/ChainSelector";
import RequestDataExample from "src/components/RequestDataExample";
import SendTokenExample from "src/components/SendTokenExample";
import Wallet from "src/components/WalletConnectButton";

export default function Home() {
  const [chainName, setChainName] = useState("localbandchain");

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <ChainProvider>
        <div>
          <ChainSelector chainName={chainName} setChainName={setChainName} />
          <Wallet chainName={chainName} />
          <SendTokenExample chainName={chainName} />
          {/* <RequestDataExample /> */}
        </div>
      </ChainProvider>
    </div>
  );
}
