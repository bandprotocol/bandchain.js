//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as globalfeeV1beta1TxRegistry from "./v1beta1/tx.registry";
import * as globalfeeV1beta1TxAmino from "./v1beta1/tx.amino";
export const globalfeeAminoConverters = {
  ...globalfeeV1beta1TxAmino.AminoConverter
};
export const globalfeeProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...globalfeeV1beta1TxRegistry.registry];
export const getSigningGlobalfeeClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...globalfeeProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...globalfeeAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningGlobalfeeClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningGlobalfeeClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};