//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as restakeV1beta1TxRegistry from "./v1beta1/tx.registry";
import * as restakeV1beta1TxAmino from "./v1beta1/tx.amino";
export const restakeAminoConverters = {
  ...restakeV1beta1TxAmino.AminoConverter
};
export const restakeProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...restakeV1beta1TxRegistry.registry];
export const getSigningRestakeClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...restakeProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...restakeAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningRestakeClient = async ({
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
  } = getSigningRestakeClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};