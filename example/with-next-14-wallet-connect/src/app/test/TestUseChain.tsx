import { useChain } from "@cosmos-kit/react";
import React from "react";

const TestUseChain = ({ chainName }: { chainName: string }) => {
  const { status, message, username, address, openView, getRpcEndpoint } =
    useChain(chainName);

  const handleGetRPC = async () => {
    try {
      let rpc = await getRpcEndpoint();
      console.log(rpc);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-5">
      <p className="mt-2">status: {status}</p>
      <p className="mt-2">username: {username}</p>
      <p className="mt-2">address: {address}</p>
      <div className="flex gap-3">
        <button className="mt-2" onClick={openView}>
          test
        </button>
        <button className="mt-2" onClick={handleGetRPC}>
          Get RPC
        </button>
      </div>
    </div>
  );
};

export default TestUseChain;
