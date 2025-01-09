"use client";

import RequestDataExample from "src/components/RequestDataExample";
import Wallet from "src/components/WalletConnectButton";

export default function Home() {
  return (
    <div className="p-3">
      <main className="grid gap-4">
        <Wallet />
        <div className="grid gap-4">
          <RequestDataExample />
        </div>
      </main>
    </div>
  );
}
