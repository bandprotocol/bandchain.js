import { getSigningClient } from "@bandprotocol/bandchain.js";
import { getOfflineSignerAmino as getOfflineSigner } from "cosmjs-utils";

const rpcEndpoint = "https://rpc.laozi-testnet6.bandchain.org";

const mnemonic =
  "other clutch garage magic remind gentle hamster viable crash youth rebuild peasant"; // // SECURITY: Add mnemonic to your .env file - DO NOT use this default mnemonic in production!

const getSignerClient = async () => {
  const signer = await getOfflineSigner({
    mnemonic,
    chain: {
      bech32_prefix: "band",
      slip44: 494,
    },
  });

  const cosmosClient = await getSigningClient({
    rpcEndpoint,
    signer,
  });

  return cosmosClient;
};

export { getSignerClient };
