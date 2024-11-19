//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as bandBandtssV1beta1TxRegistry from "./bandtss/v1beta1/tx.registry";
import * as bandFeedsV1beta1TxRegistry from "./feeds/v1beta1/tx.registry";
import * as bandGlobalfeeV1beta1TxRegistry from "./globalfee/v1beta1/tx.registry";
import * as bandOracleV1TxRegistry from "./oracle/v1/tx.registry";
import * as bandRestakeV1beta1TxRegistry from "./restake/v1beta1/tx.registry";
import * as bandTssV1beta1TxRegistry from "./tss/v1beta1/tx.registry";
import * as bandTunnelV1beta1TxRegistry from "./tunnel/v1beta1/tx.registry";
import * as bandBandtssV1beta1TxAmino from "./bandtss/v1beta1/tx.amino";
import * as bandFeedsV1beta1TxAmino from "./feeds/v1beta1/tx.amino";
import * as bandGlobalfeeV1beta1TxAmino from "./globalfee/v1beta1/tx.amino";
import * as bandOracleV1TxAmino from "./oracle/v1/tx.amino";
import * as bandRestakeV1beta1TxAmino from "./restake/v1beta1/tx.amino";
import * as bandTssV1beta1TxAmino from "./tss/v1beta1/tx.amino";
import * as bandTunnelV1beta1TxAmino from "./tunnel/v1beta1/tx.amino";
export const bandAminoConverters = {
  ...bandBandtssV1beta1TxAmino.AminoConverter,
  ...bandFeedsV1beta1TxAmino.AminoConverter,
  ...bandGlobalfeeV1beta1TxAmino.AminoConverter,
  ...bandOracleV1TxAmino.AminoConverter,
  ...bandRestakeV1beta1TxAmino.AminoConverter,
  ...bandTssV1beta1TxAmino.AminoConverter,
  ...bandTunnelV1beta1TxAmino.AminoConverter
};
export const bandProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...bandBandtssV1beta1TxRegistry.registry, ...bandFeedsV1beta1TxRegistry.registry, ...bandGlobalfeeV1beta1TxRegistry.registry, ...bandOracleV1TxRegistry.registry, ...bandRestakeV1beta1TxRegistry.registry, ...bandTssV1beta1TxRegistry.registry, ...bandTunnelV1beta1TxRegistry.registry];
export const getSigningBandClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...bandProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...bandAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningBandClient = async ({
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
  } = getSigningBandClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};