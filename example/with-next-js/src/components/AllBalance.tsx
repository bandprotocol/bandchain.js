import { getBalance } from "@/utils";

export const AllBalance = async () => {
  const address = "band1jrhuqrymzt4mnvgw8cvy3s9zhx3jj0dq30qpte";
  const res = await getBalance(address);

  return (
    <div id="allBalances">
      <h3 className="font-bold mb-3">client.cosmos.bank.v1beta1.allBalances</h3>
      <p>
        Address: <span className="font-mono">{address}</span>
      </p>
      <p>{`Balances:`}</p>
      <ul>
        {res.balances.map((balance) => (
          <li key={balance.denom}>{`${balance.denom}: ${balance.amount}`}</li>
        ))}
      </ul>
    </div>
  );
};
