import { band } from "@bandprotocol/bandchain.js";
import { devnetRpc } from "src/constants/endpoints";

const { createRPCQueryClient } = band.ClientFactory;

const GetReferenceDataExample: React.FC = async () => {
  const client = await createRPCQueryClient({ rpcEndpoint: devnetRpc });

  const price = await client.band.oracle.v1.requestPrice({
    symbols: ["ETH"],
    minCount: BigInt(3),
    askCount: BigInt(4),
  });

  return (
    <div className="container max-w-md py-4">
      <code style={{ whiteSpace: "pre" }}>
        <pre>
          {JSON.stringify(price.priceResults, (_, value) =>
            typeof value === "bigint" ? JSON.parse(value.toString()) : value
          )}
        </pre>
      </code>
    </div>
  );
};

export default GetReferenceDataExample;
