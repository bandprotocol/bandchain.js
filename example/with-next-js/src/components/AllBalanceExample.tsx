import { band } from "@bandprotocol/bandchainjs";

import { devnetRpc } from "@/constants/constants";

import CodeBlock from "./common/CodeBlock";
import CodeDefault from "./common/CodeDefault";
import { ExampleTemplateLayout } from "./layouts/ExampleTemplateLayout";

const getAllBalances = async (address: string) => {
  const { createRPCQueryClient } = band.ClientFactory;

  const client = await createRPCQueryClient({
    rpcEndpoint: devnetRpc,
  });

  const res = await client.cosmos.bank.v1beta1.allBalances({
    address,
    resolveDenom: false,
  });

  return JSON.parse(
    JSON.stringify(res, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
};

export const AllBalanceExample = async () => {
  const address = "band1qjte252y5wk3vj0tk2cmgw64pwkxsg0n22pa4k";
  const res = await getAllBalances(address);

  return (
    <ExampleTemplateLayout
      id="allBalances"
      title="client.cosmos.bank.v1beta1.allBalances"
      exampleChildren={
        <CodeBlock
          code={`import { band } from "@bandprotocol/bandchainjs";
async function getAllBalances() {
  const rpcEndpoint = "${devnetRpc}";

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
