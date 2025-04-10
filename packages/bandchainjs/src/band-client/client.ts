import { GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import {
  bandAminoConverters,
  bandProtoRegistry,
  cosmosAminoConverters,
  cosmosProtoRegistry,
  ibcAminoConverters,
  ibcProtoRegistry,
  oracleAminoConverters,
  oracleProtoRegistry,
} from "../codegen";

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...cosmosProtoRegistry,
  ...ibcProtoRegistry,
  ...bandProtoRegistry,
  ...oracleProtoRegistry,
];

const aminoConverters = {
  ...cosmosAminoConverters,
  ...ibcAminoConverters,
  ...bandAminoConverters,
  ...oracleAminoConverters,
};

export const getSigningClientOptions = ({
  defaultTypes = [],
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}) => {
  const registry = new Registry([...defaultTypes, ...protoRegistry]);
  const aminoTypes = new AminoTypes({
    ...aminoConverters,
  });
  return {
    registry,
    aminoTypes,
  };
};

export const getSigningClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = [],
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const { registry, aminoTypes } = getSigningClientOptions({
    defaultTypes,
  });
  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    signer,
    {
      registry: registry as any,
      aminoTypes,
    }
  );
  return client;
};
