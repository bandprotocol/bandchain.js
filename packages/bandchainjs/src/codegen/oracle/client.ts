//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as oracleV1TxRegistry from "./v1/tx.registry";
import * as oracleV1TxAmino from "./v1/tx.amino";
export const oracleAminoConverters = {
  ...oracleV1TxAmino.AminoConverter
};
export const oracleProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...oracleV1TxRegistry.registry];
export const getSigningOracleClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...oracleProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...oracleAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningOracleClient = async ({
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
  } = getSigningOracleClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};