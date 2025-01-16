"use client";

import { useState } from "react";
import RequestDataExample from "src/components/RequestDataExample";
import SendTokenExample from "src/components/SendTokenExample";
import Wallet from "src/components/WalletConnectButton";

export default function Home() {
  const [chainName, setChainName] = useState("localbandchain");

  return (
    <main className="container mx-auto max-w-md py-4">
      <div className="grid gap-4">
        <Wallet />
        <div className="grid gap-4">
          <SendTokenExample />
          <RequestDataExample />
        </div>
      </div>
    </main>
  );
}
