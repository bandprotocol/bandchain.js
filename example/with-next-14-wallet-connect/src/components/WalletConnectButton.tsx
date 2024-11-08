/* eslint-disable indent */
"use client";

import { useChain } from "@cosmos-kit/react";
import { WalletStatus } from "cosmos-kit";

const WalletConnectButton = ({
  walletStatus,
  connect,
  disconnect,
  message,
}: {
  walletStatus: WalletStatus;
  connect: () => void;
  disconnect: () => void;
  message?: string;
}) => {
  switch (walletStatus) {
    case WalletStatus.Disconnected:
      return (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={connect}
        >
          Connect Wallet
        </button>
      );
    case WalletStatus.Connected:
      return (
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={disconnect}
        >
          Disconnect Wallet
        </button>
      );
    case WalletStatus.Connecting:
      return <button disabled>Connecting...</button>;
    case WalletStatus.Error:
      return (
        <div className="p-2 bg-red-500 text-center text-white rounded">
          Error: {message}
        </div>
      );
  }
};

const Wallet = () => {
  const chainContext = useChain("band-laozi-testnet6");

  const { status, connect, message, disconnect } = chainContext;

  return (
    <WalletConnectButton
      walletStatus={status}
      connect={connect}
      message={message}
      disconnect={disconnect}
    />
  );
};

export default Wallet;
