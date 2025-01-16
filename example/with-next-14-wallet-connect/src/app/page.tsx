"use client";

import RequestDataExample from "src/components/RequestDataExample";
import Wallet from "src/components/WalletConnectButton";

export default function Home() {
  return (
    <main className="container mx-auto max-w-md py-4">
      <div className="grid gap-4">
        <Wallet />
        <div className="grid gap-4">
          <RequestDataExample />
        </div>
      </div>
    </main>
  );
}
