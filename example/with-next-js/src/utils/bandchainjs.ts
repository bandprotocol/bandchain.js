import { devnetRpc } from "@/constants/constants";
import {
  getSigningBandClient,
  getSigningClient,
} from "@bandprotocol/bandchainjs";
import { getOfflineSignerAmino as getOfflineSigner } from "cosmjs-utils";

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
    rpcEndpoint: devnetRpc,
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

  const bandClient = await getSigningBandClient({
    rpcEndpoint: devnetRpc,
    signer,
  });

  return bandClient;
};

export { getSignerClient, getBandSignerClient };
