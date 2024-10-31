import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="p-3 min-h-screen bg-slate-100 w-[400px]">
      <div>
        <h2 className="font-bold mb-2">Cosmos SDK</h2>
        <ul className="font-mono text-sm">
          <li className="mb-2 cursor-pointer text-blue-500 hover:text-blue-700">
            <Link href="#allBalances">{`client.cosmos.bank.v1beta1.allBalances`}</Link>
          </li>
          <li className="mb-2 cursor-pointer text-blue-500 hover:text-blue-700">
            <Link href="#sendTokens">{`cosmos.bank.v1beta1.MsgSend`}</Link>
          </li>
        </ul>
      </div>
      <h2 className="font-bold mb-2">BandChain</h2>
      <ul className="font-mono text-sm">
        <li className="mb-2 cursor-pointer text-blue-500 hover:text-blue-700">
          <Link href="#MsgRequestData">{`MsgRequestData`}</Link>
        </li>
      </ul>
    </div>
  );
};
