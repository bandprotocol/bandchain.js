export const Sidebar = () => {
  return (
    <div className="p-3 min-h-screen bg-slate-100 w-[400px]">
      <div>
        <h2 className="font-bold mb-2">Cosmos SDK</h2>
        <ul className="font-mono text-sm">
          <li className="mb-2">
            <a href="#allBalances">{`client.cosmos.bank.v1beta1.allBalances`}</a>
          </li>
          <li className="mb-2">
            <a href="#sendTokens">{`MsgSend`}</a>
          </li>
        </ul>
      </div>
      <h2 className="font-bold mb-2">BandChain</h2>
      <ul className="font-mono text-sm">
        <li className="mb-2">
          <a href="#msgRequestData">{`msgRequestData`}</a>
        </li>
      </ul>
    </div>
  );
};
