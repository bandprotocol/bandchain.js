/* eslint-disable indent */
"use client";

import { useChain } from "@cosmos-kit/react";
import { WalletStatus } from "cosmos-kit";

const WalletConnectButton = () => {
  const { status, connect, message, disconnect, username, address } =
    useChain("localbandchain");

  switch (status) {
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
        <div>
          <p className="mb-3">{username}</p>
          <p className="mb-3">{address}</p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => disconnect()}
          >
            Disconnect Wallet
          </button>
        </div>
      );
    case WalletStatus.Connecting:
      return <button disabled>Connecting...</button>;
    case WalletStatus.Error:
      return (
        <div className="p-2 bg-red-500 text-center text-white rounded">
          Error: {message}
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      );
  }
};

export default WalletConnectButton;
