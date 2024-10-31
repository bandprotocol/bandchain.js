import {
  getSigningBandClient,
  getSigningCosmosClient,
} from "@bandprotocol/bandchainjs";
import { getOfflineSignerAmino as getOfflineSigner } from "cosmjs-utils";

const rpcEndpoint = "https://rpc.laozi-testnet6.bandchain.org";

const mnemonic =
  "other clutch garage magic remind gentle hamster viable crash youth rebuild peasant";

const getDefaultSigner = async () => {
  const signer = await getOfflineSigner({
    mnemonic,
    chain: {
      bech32_prefix: "band",
      slip44: 494,
    },
  });

  const cosmosClient = await getSigningCosmosClient({
    rpcEndpoint,
    signer,
  });

  return cosmosClient;
};

const getBandSignerClient = async () => {
  const signer = await getOfflineSigner({
    mnemonic,
    chain: {
      bech32_prefix: "band",
      slip44: 494,
    },
  });

  const stargateClient = await getSigningBandClient({
    rpcEndpoint,
    signer,
  });

  return stargateClient;
};

export { getBandSignerClient, getDefaultSigner };
