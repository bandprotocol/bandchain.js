import { band } from "@bandprotocol/bandchainjs";

import CodeBlock from "./common/CodeBlock";
import CodeDefault from "./common/CodeDefault";
import { ExampleTemplateLayout } from "./layouts/ExampleTemplateLayout";

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
    <ExampleTemplateLayout
      id="allBalances"
      title="client.cosmos.bank.v1beta1.allBalances"
      exampleChildren={
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
      }
      resultChildren={<CodeDefault>{JSON.stringify(res, null, 2)}</CodeDefault>}
    />
  );
};
