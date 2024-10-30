import { bandchain, getSigningCosmosClient } from "@bandprotocol/bandchainjs";
import { getOfflineSignerAmino as getOfflineSigner } from "cosmjs-utils";

const rpcEndpoint = "https://rpc.laozi-testnet6.bandchain.org";

const mnemonic =
  "other clutch garage magic remind gentle hamster viable crash youth rebuild peasant";

const { createRPCQueryClient } = bandchain.ClientFactory;
const client = await createRPCQueryClient({
  rpcEndpoint,
});

const getBalance = async (address: string) => {
  const res = await client.cosmos.bank.v1beta1.allBalances({
    address,
    resolveDenom: true,
  });

  return res;
};

const getSignerClient = async () => {
  const signer = await getOfflineSigner({
    mnemonic,
    chain: {
      bech32_prefix: "band",
      slip44: 494,
    },
  });

  const stargateClient = await getSigningCosmosClient({
    rpcEndpoint,
    signer,
  });

  return stargateClient;
};

export { getBalance, getSignerClient };
