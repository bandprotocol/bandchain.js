import { GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import {
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
  ...oracleProtoRegistry,
];

const aminoConverters = {
  ...cosmosAminoConverters,
  ...ibcAminoConverters,
  ...oracleAminoConverters,
};

export const getLegacySigningClientOptions = ({
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

export const getLegacySigningClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = [],
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const { registry, aminoTypes } = getLegacySigningClientOptions({
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
