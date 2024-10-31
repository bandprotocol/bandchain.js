import CodeBlock from "./common/CodeBlock";
import { band } from "@bandprotocol/bandchainjs";

const getAllBalances = async (address: string) => {
  const rpcEndpoint = "https://rpc.laozi-testnet6.bandchain.org";

  const { createRPCQueryClient } = band.ClientFactory;
  const client = await createRPCQueryClient({
    rpcEndpoint,
  });

  const res = await client.cosmos.bank.v1beta1.allBalances({
    address,
  });

  return JSON.parse(
    JSON.stringify(res, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
};

export const AllBalance = async () => {
  const address = "band1jrhuqrymzt4mnvgw8cvy3s9zhx3jj0dq30qpte";
  const res = await getAllBalances(address);

  return (
    <div
      id="allBalances"
      className="border-b border-inherit border-solid pb-4 mb-8"
    >
      <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <span className="text-indigo-600">#</span>
        client.cosmos.bank.v1beta1.allBalances
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="font-medium text-gray-700 mb-2">Example Code:</h4>
          <CodeBlock
            code={`import { band } from "@bandprotocol/bandchainjs";
async function getAllBalances() {
  const rpcEndpoint = "https://rpc.laozi-testnet6.bandchain.org";

  const { createRPCQueryClient } = band.ClientFactory;
  const client = await createRPCQueryClient({
    rpcEndpoint,
  });

  const address = "${address}"
  const response = await client.cosmos.bank.v1beta1.allBalances({
    address,
  });
  
  return response;
};`}
          />
        </div>
        <div className="space-y-4">
          <h4 className="font-medium text-gray-700 mb-2">Results:</h4>
          <pre className="bg-gray-100 p-5 rounded-lg overflow-auto text-sm text-gray-800">
            <code>{JSON.stringify(res, null, 2)}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
