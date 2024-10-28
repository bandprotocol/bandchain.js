//@ts-nocheck
import { Result, ResultAmino, ResultSDKType } from "../../../oracle/v1/oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/** ProofRequest is request type for the Service/Proof RPC method. */
export interface ProofRequest {
  /** RequestID is ID of an oracle request */
  requestId: bigint;
  /** height is block height */
  height: bigint;
}
export interface ProofRequestProtoMsg {
  typeUrl: "/bandchain.v1.oracle.ProofRequest";
  value: Uint8Array;
}
/** ProofRequest is request type for the Service/Proof RPC method. */
export interface ProofRequestAmino {
  /** RequestID is ID of an oracle request */
  request_id?: string;
  /** height is block height */
  height?: string;
}
export interface ProofRequestAminoMsg {
  type: "/bandchain.v1.oracle.ProofRequest";
  value: ProofRequestAmino;
}
/** ProofRequest is request type for the Service/Proof RPC method. */
export interface ProofRequestSDKType {
  request_id: bigint;
  height: bigint;
}
/** ProofResponse is response type for the Service/Proof RPC method. */
export interface ProofResponse {
  /** height is block height */
  height: bigint;
  /** result is the proof */
  result: SingleProofResult;
}
export interface ProofResponseProtoMsg {
  typeUrl: "/bandchain.v1.oracle.ProofResponse";
  value: Uint8Array;
}
/** ProofResponse is response type for the Service/Proof RPC method. */
export interface ProofResponseAmino {
  /** height is block height */
  height?: string;
  /** result is the proof */
  result?: SingleProofResultAmino;
}
export interface ProofResponseAminoMsg {
  type: "/bandchain.v1.oracle.ProofResponse";
  value: ProofResponseAmino;
}
/** ProofResponse is response type for the Service/Proof RPC method. */
export interface ProofResponseSDKType {
  height: bigint;
  result: SingleProofResultSDKType;
}
/** MultiProofRequest is request type for the Service/MultiProof RPC method. */
export interface MultiProofRequest {
  /** request_ids is the list of request IDs */
  requestIds: bigint[];
}
export interface MultiProofRequestProtoMsg {
  typeUrl: "/bandchain.v1.oracle.MultiProofRequest";
  value: Uint8Array;
}
/** MultiProofRequest is request type for the Service/MultiProof RPC method. */
export interface MultiProofRequestAmino {
  /** request_ids is the list of request IDs */
  request_ids?: string[];
}
export interface MultiProofRequestAminoMsg {
  type: "/bandchain.v1.oracle.MultiProofRequest";
  value: MultiProofRequestAmino;
}
/** MultiProofRequest is request type for the Service/MultiProof RPC method. */
export interface MultiProofRequestSDKType {
  request_ids: bigint[];
}
/** MultiProofResponse is response type for the Service/MultiProof RPC method. */
export interface MultiProofResponse {
  height: bigint;
  result: MultiProofResult;
}
export interface MultiProofResponseProtoMsg {
  typeUrl: "/bandchain.v1.oracle.MultiProofResponse";
  value: Uint8Array;
}
/** MultiProofResponse is response type for the Service/MultiProof RPC method. */
export interface MultiProofResponseAmino {
  height?: string;
  result?: MultiProofResultAmino;
}
export interface MultiProofResponseAminoMsg {
  type: "/bandchain.v1.oracle.MultiProofResponse";
  value: MultiProofResponseAmino;
}
/** MultiProofResponse is response type for the Service/MultiProof RPC method. */
export interface MultiProofResponseSDKType {
  height: bigint;
  result: MultiProofResultSDKType;
}
/** RequestCountProofRequest is request type for the Service/RequestCountProof RPC method. */
export interface RequestCountProofRequest {}
export interface RequestCountProofRequestProtoMsg {
  typeUrl: "/bandchain.v1.oracle.RequestCountProofRequest";
  value: Uint8Array;
}
/** RequestCountProofRequest is request type for the Service/RequestCountProof RPC method. */
export interface RequestCountProofRequestAmino {}
export interface RequestCountProofRequestAminoMsg {
  type: "/bandchain.v1.oracle.RequestCountProofRequest";
  value: RequestCountProofRequestAmino;
}
/** RequestCountProofRequest is request type for the Service/RequestCountProof RPC method. */
export interface RequestCountProofRequestSDKType {}
/** RequestCountProofResponse is response type for the Service/RequestCountProof RPC method. */
export interface RequestCountProofResponse {
  height: bigint;
  result: CountProofResult;
}
export interface RequestCountProofResponseProtoMsg {
  typeUrl: "/bandchain.v1.oracle.RequestCountProofResponse";
  value: Uint8Array;
}
/** RequestCountProofResponse is response type for the Service/RequestCountProof RPC method. */
export interface RequestCountProofResponseAmino {
  height?: string;
  result?: CountProofResultAmino;
}
export interface RequestCountProofResponseAminoMsg {
  type: "/bandchain.v1.oracle.RequestCountProofResponse";
  value: RequestCountProofResponseAmino;
}
/** RequestCountProofResponse is response type for the Service/RequestCountProof RPC method. */
export interface RequestCountProofResponseSDKType {
  height: bigint;
  result: CountProofResultSDKType;
}
/** SingleProofResponse is the data structure for response of single proof */
export interface SingleProofResult {
  proof: SingleProof;
  evmProofBytes: Uint8Array;
}
export interface SingleProofResultProtoMsg {
  typeUrl: "/bandchain.v1.oracle.SingleProofResult";
  value: Uint8Array;
}
/** SingleProofResponse is the data structure for response of single proof */
export interface SingleProofResultAmino {
  proof?: SingleProofAmino;
  evm_proof_bytes?: string;
}
export interface SingleProofResultAminoMsg {
  type: "/bandchain.v1.oracle.SingleProofResult";
  value: SingleProofResultAmino;
}
/** SingleProofResponse is the data structure for response of single proof */
export interface SingleProofResultSDKType {
  proof: SingleProofSDKType;
  evm_proof_bytes: Uint8Array;
}
/** MultiProofResult is the data structure for response of multi proof */
export interface MultiProofResult {
  proof: MultiProof;
  evmProofBytes: Uint8Array;
}
export interface MultiProofResultProtoMsg {
  typeUrl: "/bandchain.v1.oracle.MultiProofResult";
  value: Uint8Array;
}
/** MultiProofResult is the data structure for response of multi proof */
export interface MultiProofResultAmino {
  proof?: MultiProofAmino;
  evm_proof_bytes?: string;
}
export interface MultiProofResultAminoMsg {
  type: "/bandchain.v1.oracle.MultiProofResult";
  value: MultiProofResultAmino;
}
/** MultiProofResult is the data structure for response of multi proof */
export interface MultiProofResultSDKType {
  proof: MultiProofSDKType;
  evm_proof_bytes: Uint8Array;
}
/** CountProofResult is the data structure for response of count proof */
export interface CountProofResult {
  proof: CountProof;
  evmProofBytes: Uint8Array;
}
export interface CountProofResultProtoMsg {
  typeUrl: "/bandchain.v1.oracle.CountProofResult";
  value: Uint8Array;
}
/** CountProofResult is the data structure for response of count proof */
export interface CountProofResultAmino {
  proof?: CountProofAmino;
  evm_proof_bytes?: string;
}
export interface CountProofResultAminoMsg {
  type: "/bandchain.v1.oracle.CountProofResult";
  value: CountProofResultAmino;
}
/** CountProofResult is the data structure for response of count proof */
export interface CountProofResultSDKType {
  proof: CountProofSDKType;
  evm_proof_bytes: Uint8Array;
}
/** SingleProof contains block height, oracle data proof and block relay proof */
export interface SingleProof {
  blockHeight: bigint;
  oracleDataProof: OracleDataProof;
  blockRelayProof: BlockRelayProof;
}
export interface SingleProofProtoMsg {
  typeUrl: "/bandchain.v1.oracle.SingleProof";
  value: Uint8Array;
}
/** SingleProof contains block height, oracle data proof and block relay proof */
export interface SingleProofAmino {
  block_height?: string;
  oracle_data_proof?: OracleDataProofAmino;
  block_relay_proof?: BlockRelayProofAmino;
}
export interface SingleProofAminoMsg {
  type: "/bandchain.v1.oracle.SingleProof";
  value: SingleProofAmino;
}
/** SingleProof contains block height, oracle data proof and block relay proof */
export interface SingleProofSDKType {
  block_height: bigint;
  oracle_data_proof: OracleDataProofSDKType;
  block_relay_proof: BlockRelayProofSDKType;
}
/** MultiProof contains block height, list of oracle data proof and block relay proof */
export interface MultiProof {
  blockHeight: bigint;
  oracleDataMultiProof: OracleDataProof[];
  blockRelayProof: BlockRelayProof;
}
export interface MultiProofProtoMsg {
  typeUrl: "/bandchain.v1.oracle.MultiProof";
  value: Uint8Array;
}
/** MultiProof contains block height, list of oracle data proof and block relay proof */
export interface MultiProofAmino {
  block_height?: string;
  oracle_data_multi_proof?: OracleDataProofAmino[];
  block_relay_proof?: BlockRelayProofAmino;
}
export interface MultiProofAminoMsg {
  type: "/bandchain.v1.oracle.MultiProof";
  value: MultiProofAmino;
}
/** MultiProof contains block height, list of oracle data proof and block relay proof */
export interface MultiProofSDKType {
  block_height: bigint;
  oracle_data_multi_proof: OracleDataProofSDKType[];
  block_relay_proof: BlockRelayProofSDKType;
}
/** CountProof contains block height, count proof and block relay proof */
export interface CountProof {
  blockHeight: bigint;
  countProof: RequestsCountProof;
  blockRelayProof: BlockRelayProof;
}
export interface CountProofProtoMsg {
  typeUrl: "/bandchain.v1.oracle.CountProof";
  value: Uint8Array;
}
/** CountProof contains block height, count proof and block relay proof */
export interface CountProofAmino {
  block_height?: string;
  count_proof?: RequestsCountProofAmino;
  block_relay_proof?: BlockRelayProofAmino;
}
export interface CountProofAminoMsg {
  type: "/bandchain.v1.oracle.CountProof";
  value: CountProofAmino;
}
/** CountProof contains block height, count proof and block relay proof */
export interface CountProofSDKType {
  block_height: bigint;
  count_proof: RequestsCountProofSDKType;
  block_relay_proof: BlockRelayProofSDKType;
}
/** OracleDataProof contains result, version and merkle paths */
export interface OracleDataProof {
  result: Result;
  version: bigint;
  merklePaths: IAVLMerklePath[];
}
export interface OracleDataProofProtoMsg {
  typeUrl: "/bandchain.v1.oracle.OracleDataProof";
  value: Uint8Array;
}
/** OracleDataProof contains result, version and merkle paths */
export interface OracleDataProofAmino {
  result?: ResultAmino;
  version?: string;
  merkle_paths?: IAVLMerklePathAmino[];
}
export interface OracleDataProofAminoMsg {
  type: "/bandchain.v1.oracle.OracleDataProof";
  value: OracleDataProofAmino;
}
/** OracleDataProof contains result, version and merkle paths */
export interface OracleDataProofSDKType {
  result: ResultSDKType;
  version: bigint;
  merkle_paths: IAVLMerklePathSDKType[];
}
/** IAVLMerklePath represents a Merkle step to a leaf data node in an iAVL tree. */
export interface IAVLMerklePath {
  isDataOnRight: boolean;
  subtreeHeight: number;
  subtreeSize: bigint;
  subtreeVersion: bigint;
  siblingHash: Uint8Array;
}
export interface IAVLMerklePathProtoMsg {
  typeUrl: "/bandchain.v1.oracle.IAVLMerklePath";
  value: Uint8Array;
}
/** IAVLMerklePath represents a Merkle step to a leaf data node in an iAVL tree. */
export interface IAVLMerklePathAmino {
  is_data_on_right?: boolean;
  subtree_height?: number;
  subtree_size?: string;
  subtree_version?: string;
  sibling_hash?: string;
}
export interface IAVLMerklePathAminoMsg {
  type: "/bandchain.v1.oracle.IAVLMerklePath";
  value: IAVLMerklePathAmino;
}
/** IAVLMerklePath represents a Merkle step to a leaf data node in an iAVL tree. */
export interface IAVLMerklePathSDKType {
  is_data_on_right: boolean;
  subtree_height: number;
  subtree_size: bigint;
  subtree_version: bigint;
  sibling_hash: Uint8Array;
}
/** BlockRelayProof contains multi store proof, block header merkle parts, common encoded part and signatures */
export interface BlockRelayProof {
  multiStoreProof: MultiStoreProof;
  blockHeaderMerkleParts: BlockHeaderMerkleParts;
  commonEncodedVotePart: CommonEncodedVotePart;
  signatures: TMSignature[];
}
export interface BlockRelayProofProtoMsg {
  typeUrl: "/bandchain.v1.oracle.BlockRelayProof";
  value: Uint8Array;
}
/** BlockRelayProof contains multi store proof, block header merkle parts, common encoded part and signatures */
export interface BlockRelayProofAmino {
  multi_store_proof?: MultiStoreProofAmino;
  block_header_merkle_parts?: BlockHeaderMerklePartsAmino;
  common_encoded_vote_part?: CommonEncodedVotePartAmino;
  signatures?: TMSignatureAmino[];
}
export interface BlockRelayProofAminoMsg {
  type: "/bandchain.v1.oracle.BlockRelayProof";
  value: BlockRelayProofAmino;
}
/** BlockRelayProof contains multi store proof, block header merkle parts, common encoded part and signatures */
export interface BlockRelayProofSDKType {
  multi_store_proof: MultiStoreProofSDKType;
  block_header_merkle_parts: BlockHeaderMerklePartsSDKType;
  common_encoded_vote_part: CommonEncodedVotePartSDKType;
  signatures: TMSignatureSDKType[];
}
/**
 * MultiStoreProof stores a compact of other Cosmos-SDK modules' storage hash in multistore to
 * compute (in combination with oracle store hash) Tendermint's application state hash at a given block.
 * 
 *                                   ____________________[AppHash]____________________
 *                                  /                                                 \
 *                    ___________[N19]____________                               ______[N20]_______
 *                   /                            \                             /                  \
 *            _____[N15]_____                 ____[N16]______               __[N17]__           __[N18]__
 *           /               \               /               \             /         \         /         \
 *       __[N8]_          __[N9]_          _[N10]_         _[N11]_       [N12]      [N13]     [K]        [L]
 *      /       \        /       \        /       \        /      \      /   \      /   \
 *    [N0]     [N1]    [N2]     [N3]    [N4]     [N5]    [N6]    [N7]   [G] [H]   [I]  [J]
 *   /   \    /   \    /  \    /   \   /   \    /   \   /   \   /   \
 *  [0] [1]  [2] [3] [4] [5]  [6] [7] [8] [9]  [A] [B] [C] [D] [E] [F]
 * 
 * [0] - acc (auth)  [1] - authz      [2] - bank       [3] - capability  [4] - consensus   [5] - crisis
 * [6] - dist        [7] - evidence   [8] - feegrant   [9] - feeibc      [A] - globalfee   [B] - gov
 * [C] - group       [D] - ibccore    [E] - icahost    [F] - mint        [G] - oracle      [H] - params
 * [I] - slashing    [J] - staking    [K] - transfer   [L] - upgrade
 * 
 * Notice that NOT all leaves of the Merkle tree are needed in order to compute the Merkle
 * root hash, since we only want to validate the correctness of [F] In fact, only
 * [E], [N6], [N10], [N15], and [N20] are needed in order to compute [AppHash].
 */
export interface MultiStoreProof {
  oracleIavlStateHash: Uint8Array;
  paramsStoreMerkleHash: Uint8Array;
  slashingToStakingStoresMerkleHash: Uint8Array;
  transferToUpgradeStoresMerkleHash: Uint8Array;
  authToMintStoresMerkleHash: Uint8Array;
}
export interface MultiStoreProofProtoMsg {
  typeUrl: "/bandchain.v1.oracle.MultiStoreProof";
  value: Uint8Array;
}
/**
 * MultiStoreProof stores a compact of other Cosmos-SDK modules' storage hash in multistore to
 * compute (in combination with oracle store hash) Tendermint's application state hash at a given block.
 * 
 *                                   ____________________[AppHash]____________________
 *                                  /                                                 \
 *                    ___________[N19]____________                               ______[N20]_______
 *                   /                            \                             /                  \
 *            _____[N15]_____                 ____[N16]______               __[N17]__           __[N18]__
 *           /               \               /               \             /         \         /         \
 *       __[N8]_          __[N9]_          _[N10]_         _[N11]_       [N12]      [N13]     [K]        [L]
 *      /       \        /       \        /       \        /      \      /   \      /   \
 *    [N0]     [N1]    [N2]     [N3]    [N4]     [N5]    [N6]    [N7]   [G] [H]   [I]  [J]
 *   /   \    /   \    /  \    /   \   /   \    /   \   /   \   /   \
 *  [0] [1]  [2] [3] [4] [5]  [6] [7] [8] [9]  [A] [B] [C] [D] [E] [F]
 * 
 * [0] - acc (auth)  [1] - authz      [2] - bank       [3] - capability  [4] - consensus   [5] - crisis
 * [6] - dist        [7] - evidence   [8] - feegrant   [9] - feeibc      [A] - globalfee   [B] - gov
 * [C] - group       [D] - ibccore    [E] - icahost    [F] - mint        [G] - oracle      [H] - params
 * [I] - slashing    [J] - staking    [K] - transfer   [L] - upgrade
 * 
 * Notice that NOT all leaves of the Merkle tree are needed in order to compute the Merkle
 * root hash, since we only want to validate the correctness of [F] In fact, only
 * [E], [N6], [N10], [N15], and [N20] are needed in order to compute [AppHash].
 */
export interface MultiStoreProofAmino {
  oracle_iavl_state_hash?: string;
  params_store_merkle_hash?: string;
  slashing_to_staking_stores_merkle_hash?: string;
  transfer_to_upgrade_stores_merkle_hash?: string;
  auth_to_mint_stores_merkle_hash?: string;
}
export interface MultiStoreProofAminoMsg {
  type: "/bandchain.v1.oracle.MultiStoreProof";
  value: MultiStoreProofAmino;
}
/**
 * MultiStoreProof stores a compact of other Cosmos-SDK modules' storage hash in multistore to
 * compute (in combination with oracle store hash) Tendermint's application state hash at a given block.
 * 
 *                                   ____________________[AppHash]____________________
 *                                  /                                                 \
 *                    ___________[N19]____________                               ______[N20]_______
 *                   /                            \                             /                  \
 *            _____[N15]_____                 ____[N16]______               __[N17]__           __[N18]__
 *           /               \               /               \             /         \         /         \
 *       __[N8]_          __[N9]_          _[N10]_         _[N11]_       [N12]      [N13]     [K]        [L]
 *      /       \        /       \        /       \        /      \      /   \      /   \
 *    [N0]     [N1]    [N2]     [N3]    [N4]     [N5]    [N6]    [N7]   [G] [H]   [I]  [J]
 *   /   \    /   \    /  \    /   \   /   \    /   \   /   \   /   \
 *  [0] [1]  [2] [3] [4] [5]  [6] [7] [8] [9]  [A] [B] [C] [D] [E] [F]
 * 
 * [0] - acc (auth)  [1] - authz      [2] - bank       [3] - capability  [4] - consensus   [5] - crisis
 * [6] - dist        [7] - evidence   [8] - feegrant   [9] - feeibc      [A] - globalfee   [B] - gov
 * [C] - group       [D] - ibccore    [E] - icahost    [F] - mint        [G] - oracle      [H] - params
 * [I] - slashing    [J] - staking    [K] - transfer   [L] - upgrade
 * 
 * Notice that NOT all leaves of the Merkle tree are needed in order to compute the Merkle
 * root hash, since we only want to validate the correctness of [F] In fact, only
 * [E], [N6], [N10], [N15], and [N20] are needed in order to compute [AppHash].
 */
export interface MultiStoreProofSDKType {
  oracle_iavl_state_hash: Uint8Array;
  params_store_merkle_hash: Uint8Array;
  slashing_to_staking_stores_merkle_hash: Uint8Array;
  transfer_to_upgrade_stores_merkle_hash: Uint8Array;
  auth_to_mint_stores_merkle_hash: Uint8Array;
}
/**
 * BlockHeaderMerkleParts stores a group of hashes using for computing Tendermint's block
 * header hash from app hash, and height.
 * 
 * In Tendermint, a block header hash is the Merkle hash of a binary tree with 14 leaf nodes.
 * Each node encodes a data piece of the blockchain. The notable data leaves are: [A] app_hash,
 * [2] height. All data pieces are combined into one 32-byte hash to be signed
 * by block validators. The structure of the Merkle tree is shown below.
 * 
 *                                   [BlockHeader]
 *                                /                \
 *                   [3A]                                    [3B]
 *                 /      \                                /      \
 *         [2A]                [2B]                [2C]                [2D]
 *        /    \              /    \              /    \              /    \
 *    [1A]      [1B]      [1C]      [1D]      [1E]      [1F]        [C]    [D]
 *    /  \      /  \      /  \      /  \      /  \      /  \
 *  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]  [9]  [A]  [B]
 * 
 *  [0] - version               [1] - chain_id            [2] - height        [3] - time
 *  [4] - last_block_id         [5] - last_commit_hash    [6] - data_hash     [7] - validators_hash
 *  [8] - next_validators_hash  [9] - consensus_hash      [A] - app_hash      [B] - last_results_hash
 *  [C] - evidence_hash         [D] - proposer_address
 * 
 * Notice that NOT all leaves of the Merkle tree are needed in order to compute the Merkle
 * root hash, since we only want to validate the correctness of [2], [3], and [A]. In fact, only
 * [1A], [2B], [1E], [B], and [2D] are needed in order to compute [BlockHeader].
 */
export interface BlockHeaderMerkleParts {
  versionAndChainIdHash: Uint8Array;
  height: bigint;
  timeSecond: bigint;
  timeNanoSecond: number;
  lastBlockIdAndOther: Uint8Array;
  nextValidatorHashAndConsensusHash: Uint8Array;
  lastResultsHash: Uint8Array;
  evidenceAndProposerHash: Uint8Array;
}
export interface BlockHeaderMerklePartsProtoMsg {
  typeUrl: "/bandchain.v1.oracle.BlockHeaderMerkleParts";
  value: Uint8Array;
}
/**
 * BlockHeaderMerkleParts stores a group of hashes using for computing Tendermint's block
 * header hash from app hash, and height.
 * 
 * In Tendermint, a block header hash is the Merkle hash of a binary tree with 14 leaf nodes.
 * Each node encodes a data piece of the blockchain. The notable data leaves are: [A] app_hash,
 * [2] height. All data pieces are combined into one 32-byte hash to be signed
 * by block validators. The structure of the Merkle tree is shown below.
 * 
 *                                   [BlockHeader]
 *                                /                \
 *                   [3A]                                    [3B]
 *                 /      \                                /      \
 *         [2A]                [2B]                [2C]                [2D]
 *        /    \              /    \              /    \              /    \
 *    [1A]      [1B]      [1C]      [1D]      [1E]      [1F]        [C]    [D]
 *    /  \      /  \      /  \      /  \      /  \      /  \
 *  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]  [9]  [A]  [B]
 * 
 *  [0] - version               [1] - chain_id            [2] - height        [3] - time
 *  [4] - last_block_id         [5] - last_commit_hash    [6] - data_hash     [7] - validators_hash
 *  [8] - next_validators_hash  [9] - consensus_hash      [A] - app_hash      [B] - last_results_hash
 *  [C] - evidence_hash         [D] - proposer_address
 * 
 * Notice that NOT all leaves of the Merkle tree are needed in order to compute the Merkle
 * root hash, since we only want to validate the correctness of [2], [3], and [A]. In fact, only
 * [1A], [2B], [1E], [B], and [2D] are needed in order to compute [BlockHeader].
 */
export interface BlockHeaderMerklePartsAmino {
  version_and_chain_id_hash?: string;
  height?: string;
  time_second?: string;
  time_nano_second?: number;
  last_block_id_and_other?: string;
  next_validator_hash_and_consensus_hash?: string;
  last_results_hash?: string;
  evidence_and_proposer_hash?: string;
}
export interface BlockHeaderMerklePartsAminoMsg {
  type: "/bandchain.v1.oracle.BlockHeaderMerkleParts";
  value: BlockHeaderMerklePartsAmino;
}
/**
 * BlockHeaderMerkleParts stores a group of hashes using for computing Tendermint's block
 * header hash from app hash, and height.
 * 
 * In Tendermint, a block header hash is the Merkle hash of a binary tree with 14 leaf nodes.
 * Each node encodes a data piece of the blockchain. The notable data leaves are: [A] app_hash,
 * [2] height. All data pieces are combined into one 32-byte hash to be signed
 * by block validators. The structure of the Merkle tree is shown below.
 * 
 *                                   [BlockHeader]
 *                                /                \
 *                   [3A]                                    [3B]
 *                 /      \                                /      \
 *         [2A]                [2B]                [2C]                [2D]
 *        /    \              /    \              /    \              /    \
 *    [1A]      [1B]      [1C]      [1D]      [1E]      [1F]        [C]    [D]
 *    /  \      /  \      /  \      /  \      /  \      /  \
 *  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]  [9]  [A]  [B]
 * 
 *  [0] - version               [1] - chain_id            [2] - height        [3] - time
 *  [4] - last_block_id         [5] - last_commit_hash    [6] - data_hash     [7] - validators_hash
 *  [8] - next_validators_hash  [9] - consensus_hash      [A] - app_hash      [B] - last_results_hash
 *  [C] - evidence_hash         [D] - proposer_address
 * 
 * Notice that NOT all leaves of the Merkle tree are needed in order to compute the Merkle
 * root hash, since we only want to validate the correctness of [2], [3], and [A]. In fact, only
 * [1A], [2B], [1E], [B], and [2D] are needed in order to compute [BlockHeader].
 */
export interface BlockHeaderMerklePartsSDKType {
  version_and_chain_id_hash: Uint8Array;
  height: bigint;
  time_second: bigint;
  time_nano_second: number;
  last_block_id_and_other: Uint8Array;
  next_validator_hash_and_consensus_hash: Uint8Array;
  last_results_hash: Uint8Array;
  evidence_and_proposer_hash: Uint8Array;
}
/** CommonEncodedVotePart represents the common part of encoded vote */
export interface CommonEncodedVotePart {
  signedDataPrefix: Uint8Array;
  signedDataSuffix: Uint8Array;
}
export interface CommonEncodedVotePartProtoMsg {
  typeUrl: "/bandchain.v1.oracle.CommonEncodedVotePart";
  value: Uint8Array;
}
/** CommonEncodedVotePart represents the common part of encoded vote */
export interface CommonEncodedVotePartAmino {
  signed_data_prefix?: string;
  signed_data_suffix?: string;
}
export interface CommonEncodedVotePartAminoMsg {
  type: "/bandchain.v1.oracle.CommonEncodedVotePart";
  value: CommonEncodedVotePartAmino;
}
/** CommonEncodedVotePart represents the common part of encoded vote */
export interface CommonEncodedVotePartSDKType {
  signed_data_prefix: Uint8Array;
  signed_data_suffix: Uint8Array;
}
/**
 * TMSignature contains all details of validator signature for performing signer recovery for ECDSA
 * secp256k1 signature. Note that this struct is written specifically for signature signed on
 * Tendermint's precommit data, which includes the block hash and some additional information prepended
 * and appended to the block hash. The prepended part (prefix) and the appended part (suffix) are
 * different for each signer (including signature size, machine clock, validator index, etc).
 */
export interface TMSignature {
  r: Uint8Array;
  s: Uint8Array;
  v: number;
  encodedTimestamp: Uint8Array;
}
export interface TMSignatureProtoMsg {
  typeUrl: "/bandchain.v1.oracle.TMSignature";
  value: Uint8Array;
}
/**
 * TMSignature contains all details of validator signature for performing signer recovery for ECDSA
 * secp256k1 signature. Note that this struct is written specifically for signature signed on
 * Tendermint's precommit data, which includes the block hash and some additional information prepended
 * and appended to the block hash. The prepended part (prefix) and the appended part (suffix) are
 * different for each signer (including signature size, machine clock, validator index, etc).
 */
export interface TMSignatureAmino {
  r?: string;
  s?: string;
  v?: number;
  encoded_timestamp?: string;
}
export interface TMSignatureAminoMsg {
  type: "/bandchain.v1.oracle.TMSignature";
  value: TMSignatureAmino;
}
/**
 * TMSignature contains all details of validator signature for performing signer recovery for ECDSA
 * secp256k1 signature. Note that this struct is written specifically for signature signed on
 * Tendermint's precommit data, which includes the block hash and some additional information prepended
 * and appended to the block hash. The prepended part (prefix) and the appended part (suffix) are
 * different for each signer (including signature size, machine clock, validator index, etc).
 */
export interface TMSignatureSDKType {
  r: Uint8Array;
  s: Uint8Array;
  v: number;
  encoded_timestamp: Uint8Array;
}
/** RequestsCountProof contains count, version and merkle paths */
export interface RequestsCountProof {
  count: bigint;
  version: bigint;
  merklePaths: IAVLMerklePath[];
}
export interface RequestsCountProofProtoMsg {
  typeUrl: "/bandchain.v1.oracle.RequestsCountProof";
  value: Uint8Array;
}
/** RequestsCountProof contains count, version and merkle paths */
export interface RequestsCountProofAmino {
  count?: string;
  version?: string;
  merkle_paths?: IAVLMerklePathAmino[];
}
export interface RequestsCountProofAminoMsg {
  type: "/bandchain.v1.oracle.RequestsCountProof";
  value: RequestsCountProofAmino;
}
/** RequestsCountProof contains count, version and merkle paths */
export interface RequestsCountProofSDKType {
  count: bigint;
  version: bigint;
  merkle_paths: IAVLMerklePathSDKType[];
}
function createBaseProofRequest(): ProofRequest {
  return {
    requestId: BigInt(0),
    height: BigInt(0)
  };
}
export const ProofRequest = {
  typeUrl: "/bandchain.v1.oracle.ProofRequest",
  encode(message: ProofRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestId !== BigInt(0)) {
      writer.uint32(8).uint64(message.requestId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProofRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.uint64();
          break;
        case 2:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProofRequest>): ProofRequest {
    const message = createBaseProofRequest();
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProofRequestAmino): ProofRequest {
    const message = createBaseProofRequest();
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: ProofRequest): ProofRequestAmino {
    const obj: any = {};
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProofRequestAminoMsg): ProofRequest {
    return ProofRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ProofRequestProtoMsg): ProofRequest {
    return ProofRequest.decode(message.value);
  },
  toProto(message: ProofRequest): Uint8Array {
    return ProofRequest.encode(message).finish();
  },
  toProtoMsg(message: ProofRequest): ProofRequestProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.ProofRequest",
      value: ProofRequest.encode(message).finish()
    };
  }
};
function createBaseProofResponse(): ProofResponse {
  return {
    height: BigInt(0),
    result: SingleProofResult.fromPartial({})
  };
}
export const ProofResponse = {
  typeUrl: "/bandchain.v1.oracle.ProofResponse",
  encode(message: ProofResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.result !== undefined) {
      SingleProofResult.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProofResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.result = SingleProofResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProofResponse>): ProofResponse {
    const message = createBaseProofResponse();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.result = object.result !== undefined && object.result !== null ? SingleProofResult.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino(object: ProofResponseAmino): ProofResponse {
    const message = createBaseProofResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = SingleProofResult.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: ProofResponse): ProofResponseAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.result = message.result ? SingleProofResult.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProofResponseAminoMsg): ProofResponse {
    return ProofResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ProofResponseProtoMsg): ProofResponse {
    return ProofResponse.decode(message.value);
  },
  toProto(message: ProofResponse): Uint8Array {
    return ProofResponse.encode(message).finish();
  },
  toProtoMsg(message: ProofResponse): ProofResponseProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.ProofResponse",
      value: ProofResponse.encode(message).finish()
    };
  }
};
function createBaseMultiProofRequest(): MultiProofRequest {
  return {
    requestIds: []
  };
}
export const MultiProofRequest = {
  typeUrl: "/bandchain.v1.oracle.MultiProofRequest",
  encode(message: MultiProofRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.requestIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MultiProofRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiProofRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.requestIds.push(reader.uint64());
            }
          } else {
            message.requestIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MultiProofRequest>): MultiProofRequest {
    const message = createBaseMultiProofRequest();
    message.requestIds = object.requestIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MultiProofRequestAmino): MultiProofRequest {
    const message = createBaseMultiProofRequest();
    message.requestIds = object.request_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MultiProofRequest): MultiProofRequestAmino {
    const obj: any = {};
    if (message.requestIds) {
      obj.request_ids = message.requestIds.map(e => e.toString());
    } else {
      obj.request_ids = message.requestIds;
    }
    return obj;
  },
  fromAminoMsg(object: MultiProofRequestAminoMsg): MultiProofRequest {
    return MultiProofRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MultiProofRequestProtoMsg): MultiProofRequest {
    return MultiProofRequest.decode(message.value);
  },
  toProto(message: MultiProofRequest): Uint8Array {
    return MultiProofRequest.encode(message).finish();
  },
  toProtoMsg(message: MultiProofRequest): MultiProofRequestProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.MultiProofRequest",
      value: MultiProofRequest.encode(message).finish()
    };
  }
};
function createBaseMultiProofResponse(): MultiProofResponse {
  return {
    height: BigInt(0),
    result: MultiProofResult.fromPartial({})
  };
}
export const MultiProofResponse = {
  typeUrl: "/bandchain.v1.oracle.MultiProofResponse",
  encode(message: MultiProofResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.result !== undefined) {
      MultiProofResult.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MultiProofResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiProofResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.result = MultiProofResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MultiProofResponse>): MultiProofResponse {
    const message = createBaseMultiProofResponse();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.result = object.result !== undefined && object.result !== null ? MultiProofResult.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino(object: MultiProofResponseAmino): MultiProofResponse {
    const message = createBaseMultiProofResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = MultiProofResult.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: MultiProofResponse): MultiProofResponseAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.result = message.result ? MultiProofResult.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: MultiProofResponseAminoMsg): MultiProofResponse {
    return MultiProofResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MultiProofResponseProtoMsg): MultiProofResponse {
    return MultiProofResponse.decode(message.value);
  },
  toProto(message: MultiProofResponse): Uint8Array {
    return MultiProofResponse.encode(message).finish();
  },
  toProtoMsg(message: MultiProofResponse): MultiProofResponseProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.MultiProofResponse",
      value: MultiProofResponse.encode(message).finish()
    };
  }
};
function createBaseRequestCountProofRequest(): RequestCountProofRequest {
  return {};
}
export const RequestCountProofRequest = {
  typeUrl: "/bandchain.v1.oracle.RequestCountProofRequest",
  encode(_: RequestCountProofRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestCountProofRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCountProofRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<RequestCountProofRequest>): RequestCountProofRequest {
    const message = createBaseRequestCountProofRequest();
    return message;
  },
  fromAmino(_: RequestCountProofRequestAmino): RequestCountProofRequest {
    const message = createBaseRequestCountProofRequest();
    return message;
  },
  toAmino(_: RequestCountProofRequest): RequestCountProofRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RequestCountProofRequestAminoMsg): RequestCountProofRequest {
    return RequestCountProofRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestCountProofRequestProtoMsg): RequestCountProofRequest {
    return RequestCountProofRequest.decode(message.value);
  },
  toProto(message: RequestCountProofRequest): Uint8Array {
    return RequestCountProofRequest.encode(message).finish();
  },
  toProtoMsg(message: RequestCountProofRequest): RequestCountProofRequestProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.RequestCountProofRequest",
      value: RequestCountProofRequest.encode(message).finish()
    };
  }
};
function createBaseRequestCountProofResponse(): RequestCountProofResponse {
  return {
    height: BigInt(0),
    result: CountProofResult.fromPartial({})
  };
}
export const RequestCountProofResponse = {
  typeUrl: "/bandchain.v1.oracle.RequestCountProofResponse",
  encode(message: RequestCountProofResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.result !== undefined) {
      CountProofResult.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestCountProofResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCountProofResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.result = CountProofResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestCountProofResponse>): RequestCountProofResponse {
    const message = createBaseRequestCountProofResponse();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.result = object.result !== undefined && object.result !== null ? CountProofResult.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino(object: RequestCountProofResponseAmino): RequestCountProofResponse {
    const message = createBaseRequestCountProofResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = CountProofResult.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: RequestCountProofResponse): RequestCountProofResponseAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.result = message.result ? CountProofResult.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestCountProofResponseAminoMsg): RequestCountProofResponse {
    return RequestCountProofResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestCountProofResponseProtoMsg): RequestCountProofResponse {
    return RequestCountProofResponse.decode(message.value);
  },
  toProto(message: RequestCountProofResponse): Uint8Array {
    return RequestCountProofResponse.encode(message).finish();
  },
  toProtoMsg(message: RequestCountProofResponse): RequestCountProofResponseProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.RequestCountProofResponse",
      value: RequestCountProofResponse.encode(message).finish()
    };
  }
};
function createBaseSingleProofResult(): SingleProofResult {
  return {
    proof: SingleProof.fromPartial({}),
    evmProofBytes: new Uint8Array()
  };
}
export const SingleProofResult = {
  typeUrl: "/bandchain.v1.oracle.SingleProofResult",
  encode(message: SingleProofResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proof !== undefined) {
      SingleProof.encode(message.proof, writer.uint32(10).fork()).ldelim();
    }
    if (message.evmProofBytes.length !== 0) {
      writer.uint32(18).bytes(message.evmProofBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SingleProofResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingleProofResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proof = SingleProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.evmProofBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SingleProofResult>): SingleProofResult {
    const message = createBaseSingleProofResult();
    message.proof = object.proof !== undefined && object.proof !== null ? SingleProof.fromPartial(object.proof) : undefined;
    message.evmProofBytes = object.evmProofBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SingleProofResultAmino): SingleProofResult {
    const message = createBaseSingleProofResult();
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = SingleProof.fromAmino(object.proof);
    }
    if (object.evm_proof_bytes !== undefined && object.evm_proof_bytes !== null) {
      message.evmProofBytes = bytesFromBase64(object.evm_proof_bytes);
    }
    return message;
  },
  toAmino(message: SingleProofResult): SingleProofResultAmino {
    const obj: any = {};
    obj.proof = message.proof ? SingleProof.toAmino(message.proof) : undefined;
    obj.evm_proof_bytes = message.evmProofBytes ? base64FromBytes(message.evmProofBytes) : undefined;
    return obj;
  },
  fromAminoMsg(object: SingleProofResultAminoMsg): SingleProofResult {
    return SingleProofResult.fromAmino(object.value);
  },
  fromProtoMsg(message: SingleProofResultProtoMsg): SingleProofResult {
    return SingleProofResult.decode(message.value);
  },
  toProto(message: SingleProofResult): Uint8Array {
    return SingleProofResult.encode(message).finish();
  },
  toProtoMsg(message: SingleProofResult): SingleProofResultProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.SingleProofResult",
      value: SingleProofResult.encode(message).finish()
    };
  }
};
function createBaseMultiProofResult(): MultiProofResult {
  return {
    proof: MultiProof.fromPartial({}),
    evmProofBytes: new Uint8Array()
  };
}
export const MultiProofResult = {
  typeUrl: "/bandchain.v1.oracle.MultiProofResult",
  encode(message: MultiProofResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proof !== undefined) {
      MultiProof.encode(message.proof, writer.uint32(10).fork()).ldelim();
    }
    if (message.evmProofBytes.length !== 0) {
      writer.uint32(18).bytes(message.evmProofBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MultiProofResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiProofResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proof = MultiProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.evmProofBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MultiProofResult>): MultiProofResult {
    const message = createBaseMultiProofResult();
    message.proof = object.proof !== undefined && object.proof !== null ? MultiProof.fromPartial(object.proof) : undefined;
    message.evmProofBytes = object.evmProofBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MultiProofResultAmino): MultiProofResult {
    const message = createBaseMultiProofResult();
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = MultiProof.fromAmino(object.proof);
    }
    if (object.evm_proof_bytes !== undefined && object.evm_proof_bytes !== null) {
      message.evmProofBytes = bytesFromBase64(object.evm_proof_bytes);
    }
    return message;
  },
  toAmino(message: MultiProofResult): MultiProofResultAmino {
    const obj: any = {};
    obj.proof = message.proof ? MultiProof.toAmino(message.proof) : undefined;
    obj.evm_proof_bytes = message.evmProofBytes ? base64FromBytes(message.evmProofBytes) : undefined;
    return obj;
  },
  fromAminoMsg(object: MultiProofResultAminoMsg): MultiProofResult {
    return MultiProofResult.fromAmino(object.value);
  },
  fromProtoMsg(message: MultiProofResultProtoMsg): MultiProofResult {
    return MultiProofResult.decode(message.value);
  },
  toProto(message: MultiProofResult): Uint8Array {
    return MultiProofResult.encode(message).finish();
  },
  toProtoMsg(message: MultiProofResult): MultiProofResultProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.MultiProofResult",
      value: MultiProofResult.encode(message).finish()
    };
  }
};
function createBaseCountProofResult(): CountProofResult {
  return {
    proof: CountProof.fromPartial({}),
    evmProofBytes: new Uint8Array()
  };
}
export const CountProofResult = {
  typeUrl: "/bandchain.v1.oracle.CountProofResult",
  encode(message: CountProofResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proof !== undefined) {
      CountProof.encode(message.proof, writer.uint32(10).fork()).ldelim();
    }
    if (message.evmProofBytes.length !== 0) {
      writer.uint32(18).bytes(message.evmProofBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CountProofResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCountProofResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proof = CountProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.evmProofBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CountProofResult>): CountProofResult {
    const message = createBaseCountProofResult();
    message.proof = object.proof !== undefined && object.proof !== null ? CountProof.fromPartial(object.proof) : undefined;
    message.evmProofBytes = object.evmProofBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: CountProofResultAmino): CountProofResult {
    const message = createBaseCountProofResult();
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = CountProof.fromAmino(object.proof);
    }
    if (object.evm_proof_bytes !== undefined && object.evm_proof_bytes !== null) {
      message.evmProofBytes = bytesFromBase64(object.evm_proof_bytes);
    }
    return message;
  },
  toAmino(message: CountProofResult): CountProofResultAmino {
    const obj: any = {};
    obj.proof = message.proof ? CountProof.toAmino(message.proof) : undefined;
    obj.evm_proof_bytes = message.evmProofBytes ? base64FromBytes(message.evmProofBytes) : undefined;
    return obj;
  },
  fromAminoMsg(object: CountProofResultAminoMsg): CountProofResult {
    return CountProofResult.fromAmino(object.value);
  },
  fromProtoMsg(message: CountProofResultProtoMsg): CountProofResult {
    return CountProofResult.decode(message.value);
  },
  toProto(message: CountProofResult): Uint8Array {
    return CountProofResult.encode(message).finish();
  },
  toProtoMsg(message: CountProofResult): CountProofResultProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.CountProofResult",
      value: CountProofResult.encode(message).finish()
    };
  }
};
function createBaseSingleProof(): SingleProof {
  return {
    blockHeight: BigInt(0),
    oracleDataProof: OracleDataProof.fromPartial({}),
    blockRelayProof: BlockRelayProof.fromPartial({})
  };
}
export const SingleProof = {
  typeUrl: "/bandchain.v1.oracle.SingleProof",
  encode(message: SingleProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    if (message.oracleDataProof !== undefined) {
      OracleDataProof.encode(message.oracleDataProof, writer.uint32(18).fork()).ldelim();
    }
    if (message.blockRelayProof !== undefined) {
      BlockRelayProof.encode(message.blockRelayProof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SingleProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingleProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.uint64();
          break;
        case 2:
          message.oracleDataProof = OracleDataProof.decode(reader, reader.uint32());
          break;
        case 3:
          message.blockRelayProof = BlockRelayProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SingleProof>): SingleProof {
    const message = createBaseSingleProof();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.oracleDataProof = object.oracleDataProof !== undefined && object.oracleDataProof !== null ? OracleDataProof.fromPartial(object.oracleDataProof) : undefined;
    message.blockRelayProof = object.blockRelayProof !== undefined && object.blockRelayProof !== null ? BlockRelayProof.fromPartial(object.blockRelayProof) : undefined;
    return message;
  },
  fromAmino(object: SingleProofAmino): SingleProof {
    const message = createBaseSingleProof();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.oracle_data_proof !== undefined && object.oracle_data_proof !== null) {
      message.oracleDataProof = OracleDataProof.fromAmino(object.oracle_data_proof);
    }
    if (object.block_relay_proof !== undefined && object.block_relay_proof !== null) {
      message.blockRelayProof = BlockRelayProof.fromAmino(object.block_relay_proof);
    }
    return message;
  },
  toAmino(message: SingleProof): SingleProofAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    obj.oracle_data_proof = message.oracleDataProof ? OracleDataProof.toAmino(message.oracleDataProof) : undefined;
    obj.block_relay_proof = message.blockRelayProof ? BlockRelayProof.toAmino(message.blockRelayProof) : undefined;
    return obj;
  },
  fromAminoMsg(object: SingleProofAminoMsg): SingleProof {
    return SingleProof.fromAmino(object.value);
  },
  fromProtoMsg(message: SingleProofProtoMsg): SingleProof {
    return SingleProof.decode(message.value);
  },
  toProto(message: SingleProof): Uint8Array {
    return SingleProof.encode(message).finish();
  },
  toProtoMsg(message: SingleProof): SingleProofProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.SingleProof",
      value: SingleProof.encode(message).finish()
    };
  }
};
function createBaseMultiProof(): MultiProof {
  return {
    blockHeight: BigInt(0),
    oracleDataMultiProof: [],
    blockRelayProof: BlockRelayProof.fromPartial({})
  };
}
export const MultiProof = {
  typeUrl: "/bandchain.v1.oracle.MultiProof",
  encode(message: MultiProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    for (const v of message.oracleDataMultiProof) {
      OracleDataProof.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.blockRelayProof !== undefined) {
      BlockRelayProof.encode(message.blockRelayProof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MultiProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.uint64();
          break;
        case 2:
          message.oracleDataMultiProof.push(OracleDataProof.decode(reader, reader.uint32()));
          break;
        case 3:
          message.blockRelayProof = BlockRelayProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MultiProof>): MultiProof {
    const message = createBaseMultiProof();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.oracleDataMultiProof = object.oracleDataMultiProof?.map(e => OracleDataProof.fromPartial(e)) || [];
    message.blockRelayProof = object.blockRelayProof !== undefined && object.blockRelayProof !== null ? BlockRelayProof.fromPartial(object.blockRelayProof) : undefined;
    return message;
  },
  fromAmino(object: MultiProofAmino): MultiProof {
    const message = createBaseMultiProof();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    message.oracleDataMultiProof = object.oracle_data_multi_proof?.map(e => OracleDataProof.fromAmino(e)) || [];
    if (object.block_relay_proof !== undefined && object.block_relay_proof !== null) {
      message.blockRelayProof = BlockRelayProof.fromAmino(object.block_relay_proof);
    }
    return message;
  },
  toAmino(message: MultiProof): MultiProofAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    if (message.oracleDataMultiProof) {
      obj.oracle_data_multi_proof = message.oracleDataMultiProof.map(e => e ? OracleDataProof.toAmino(e) : undefined);
    } else {
      obj.oracle_data_multi_proof = message.oracleDataMultiProof;
    }
    obj.block_relay_proof = message.blockRelayProof ? BlockRelayProof.toAmino(message.blockRelayProof) : undefined;
    return obj;
  },
  fromAminoMsg(object: MultiProofAminoMsg): MultiProof {
    return MultiProof.fromAmino(object.value);
  },
  fromProtoMsg(message: MultiProofProtoMsg): MultiProof {
    return MultiProof.decode(message.value);
  },
  toProto(message: MultiProof): Uint8Array {
    return MultiProof.encode(message).finish();
  },
  toProtoMsg(message: MultiProof): MultiProofProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.MultiProof",
      value: MultiProof.encode(message).finish()
    };
  }
};
function createBaseCountProof(): CountProof {
  return {
    blockHeight: BigInt(0),
    countProof: RequestsCountProof.fromPartial({}),
    blockRelayProof: BlockRelayProof.fromPartial({})
  };
}
export const CountProof = {
  typeUrl: "/bandchain.v1.oracle.CountProof",
  encode(message: CountProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    if (message.countProof !== undefined) {
      RequestsCountProof.encode(message.countProof, writer.uint32(18).fork()).ldelim();
    }
    if (message.blockRelayProof !== undefined) {
      BlockRelayProof.encode(message.blockRelayProof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CountProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCountProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.uint64();
          break;
        case 2:
          message.countProof = RequestsCountProof.decode(reader, reader.uint32());
          break;
        case 3:
          message.blockRelayProof = BlockRelayProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CountProof>): CountProof {
    const message = createBaseCountProof();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.countProof = object.countProof !== undefined && object.countProof !== null ? RequestsCountProof.fromPartial(object.countProof) : undefined;
    message.blockRelayProof = object.blockRelayProof !== undefined && object.blockRelayProof !== null ? BlockRelayProof.fromPartial(object.blockRelayProof) : undefined;
    return message;
  },
  fromAmino(object: CountProofAmino): CountProof {
    const message = createBaseCountProof();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.count_proof !== undefined && object.count_proof !== null) {
      message.countProof = RequestsCountProof.fromAmino(object.count_proof);
    }
    if (object.block_relay_proof !== undefined && object.block_relay_proof !== null) {
      message.blockRelayProof = BlockRelayProof.fromAmino(object.block_relay_proof);
    }
    return message;
  },
  toAmino(message: CountProof): CountProofAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    obj.count_proof = message.countProof ? RequestsCountProof.toAmino(message.countProof) : undefined;
    obj.block_relay_proof = message.blockRelayProof ? BlockRelayProof.toAmino(message.blockRelayProof) : undefined;
    return obj;
  },
  fromAminoMsg(object: CountProofAminoMsg): CountProof {
    return CountProof.fromAmino(object.value);
  },
  fromProtoMsg(message: CountProofProtoMsg): CountProof {
    return CountProof.decode(message.value);
  },
  toProto(message: CountProof): Uint8Array {
    return CountProof.encode(message).finish();
  },
  toProtoMsg(message: CountProof): CountProofProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.CountProof",
      value: CountProof.encode(message).finish()
    };
  }
};
function createBaseOracleDataProof(): OracleDataProof {
  return {
    result: Result.fromPartial({}),
    version: BigInt(0),
    merklePaths: []
  };
}
export const OracleDataProof = {
  typeUrl: "/bandchain.v1.oracle.OracleDataProof",
  encode(message: OracleDataProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(16).uint64(message.version);
    }
    for (const v of message.merklePaths) {
      IAVLMerklePath.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OracleDataProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleDataProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = Result.decode(reader, reader.uint32());
          break;
        case 2:
          message.version = reader.uint64();
          break;
        case 3:
          message.merklePaths.push(IAVLMerklePath.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OracleDataProof>): OracleDataProof {
    const message = createBaseOracleDataProof();
    message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.merklePaths = object.merklePaths?.map(e => IAVLMerklePath.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OracleDataProofAmino): OracleDataProof {
    const message = createBaseOracleDataProof();
    if (object.result !== undefined && object.result !== null) {
      message.result = Result.fromAmino(object.result);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    message.merklePaths = object.merkle_paths?.map(e => IAVLMerklePath.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: OracleDataProof): OracleDataProofAmino {
    const obj: any = {};
    obj.result = message.result ? Result.toAmino(message.result) : undefined;
    obj.version = message.version !== BigInt(0) ? message.version?.toString() : undefined;
    if (message.merklePaths) {
      obj.merkle_paths = message.merklePaths.map(e => e ? IAVLMerklePath.toAmino(e) : undefined);
    } else {
      obj.merkle_paths = message.merklePaths;
    }
    return obj;
  },
  fromAminoMsg(object: OracleDataProofAminoMsg): OracleDataProof {
    return OracleDataProof.fromAmino(object.value);
  },
  fromProtoMsg(message: OracleDataProofProtoMsg): OracleDataProof {
    return OracleDataProof.decode(message.value);
  },
  toProto(message: OracleDataProof): Uint8Array {
    return OracleDataProof.encode(message).finish();
  },
  toProtoMsg(message: OracleDataProof): OracleDataProofProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.OracleDataProof",
      value: OracleDataProof.encode(message).finish()
    };
  }
};
function createBaseIAVLMerklePath(): IAVLMerklePath {
  return {
    isDataOnRight: false,
    subtreeHeight: 0,
    subtreeSize: BigInt(0),
    subtreeVersion: BigInt(0),
    siblingHash: new Uint8Array()
  };
}
export const IAVLMerklePath = {
  typeUrl: "/bandchain.v1.oracle.IAVLMerklePath",
  encode(message: IAVLMerklePath, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isDataOnRight === true) {
      writer.uint32(8).bool(message.isDataOnRight);
    }
    if (message.subtreeHeight !== 0) {
      writer.uint32(16).uint32(message.subtreeHeight);
    }
    if (message.subtreeSize !== BigInt(0)) {
      writer.uint32(24).uint64(message.subtreeSize);
    }
    if (message.subtreeVersion !== BigInt(0)) {
      writer.uint32(32).uint64(message.subtreeVersion);
    }
    if (message.siblingHash.length !== 0) {
      writer.uint32(42).bytes(message.siblingHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IAVLMerklePath {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIAVLMerklePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isDataOnRight = reader.bool();
          break;
        case 2:
          message.subtreeHeight = reader.uint32();
          break;
        case 3:
          message.subtreeSize = reader.uint64();
          break;
        case 4:
          message.subtreeVersion = reader.uint64();
          break;
        case 5:
          message.siblingHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IAVLMerklePath>): IAVLMerklePath {
    const message = createBaseIAVLMerklePath();
    message.isDataOnRight = object.isDataOnRight ?? false;
    message.subtreeHeight = object.subtreeHeight ?? 0;
    message.subtreeSize = object.subtreeSize !== undefined && object.subtreeSize !== null ? BigInt(object.subtreeSize.toString()) : BigInt(0);
    message.subtreeVersion = object.subtreeVersion !== undefined && object.subtreeVersion !== null ? BigInt(object.subtreeVersion.toString()) : BigInt(0);
    message.siblingHash = object.siblingHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: IAVLMerklePathAmino): IAVLMerklePath {
    const message = createBaseIAVLMerklePath();
    if (object.is_data_on_right !== undefined && object.is_data_on_right !== null) {
      message.isDataOnRight = object.is_data_on_right;
    }
    if (object.subtree_height !== undefined && object.subtree_height !== null) {
      message.subtreeHeight = object.subtree_height;
    }
    if (object.subtree_size !== undefined && object.subtree_size !== null) {
      message.subtreeSize = BigInt(object.subtree_size);
    }
    if (object.subtree_version !== undefined && object.subtree_version !== null) {
      message.subtreeVersion = BigInt(object.subtree_version);
    }
    if (object.sibling_hash !== undefined && object.sibling_hash !== null) {
      message.siblingHash = bytesFromBase64(object.sibling_hash);
    }
    return message;
  },
  toAmino(message: IAVLMerklePath): IAVLMerklePathAmino {
    const obj: any = {};
    obj.is_data_on_right = message.isDataOnRight === false ? undefined : message.isDataOnRight;
    obj.subtree_height = message.subtreeHeight === 0 ? undefined : message.subtreeHeight;
    obj.subtree_size = message.subtreeSize !== BigInt(0) ? message.subtreeSize?.toString() : undefined;
    obj.subtree_version = message.subtreeVersion !== BigInt(0) ? message.subtreeVersion?.toString() : undefined;
    obj.sibling_hash = message.siblingHash ? base64FromBytes(message.siblingHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: IAVLMerklePathAminoMsg): IAVLMerklePath {
    return IAVLMerklePath.fromAmino(object.value);
  },
  fromProtoMsg(message: IAVLMerklePathProtoMsg): IAVLMerklePath {
    return IAVLMerklePath.decode(message.value);
  },
  toProto(message: IAVLMerklePath): Uint8Array {
    return IAVLMerklePath.encode(message).finish();
  },
  toProtoMsg(message: IAVLMerklePath): IAVLMerklePathProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.IAVLMerklePath",
      value: IAVLMerklePath.encode(message).finish()
    };
  }
};
function createBaseBlockRelayProof(): BlockRelayProof {
  return {
    multiStoreProof: MultiStoreProof.fromPartial({}),
    blockHeaderMerkleParts: BlockHeaderMerkleParts.fromPartial({}),
    commonEncodedVotePart: CommonEncodedVotePart.fromPartial({}),
    signatures: []
  };
}
export const BlockRelayProof = {
  typeUrl: "/bandchain.v1.oracle.BlockRelayProof",
  encode(message: BlockRelayProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.multiStoreProof !== undefined) {
      MultiStoreProof.encode(message.multiStoreProof, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockHeaderMerkleParts !== undefined) {
      BlockHeaderMerkleParts.encode(message.blockHeaderMerkleParts, writer.uint32(18).fork()).ldelim();
    }
    if (message.commonEncodedVotePart !== undefined) {
      CommonEncodedVotePart.encode(message.commonEncodedVotePart, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.signatures) {
      TMSignature.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockRelayProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockRelayProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.multiStoreProof = MultiStoreProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.blockHeaderMerkleParts = BlockHeaderMerkleParts.decode(reader, reader.uint32());
          break;
        case 3:
          message.commonEncodedVotePart = CommonEncodedVotePart.decode(reader, reader.uint32());
          break;
        case 4:
          message.signatures.push(TMSignature.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BlockRelayProof>): BlockRelayProof {
    const message = createBaseBlockRelayProof();
    message.multiStoreProof = object.multiStoreProof !== undefined && object.multiStoreProof !== null ? MultiStoreProof.fromPartial(object.multiStoreProof) : undefined;
    message.blockHeaderMerkleParts = object.blockHeaderMerkleParts !== undefined && object.blockHeaderMerkleParts !== null ? BlockHeaderMerkleParts.fromPartial(object.blockHeaderMerkleParts) : undefined;
    message.commonEncodedVotePart = object.commonEncodedVotePart !== undefined && object.commonEncodedVotePart !== null ? CommonEncodedVotePart.fromPartial(object.commonEncodedVotePart) : undefined;
    message.signatures = object.signatures?.map(e => TMSignature.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BlockRelayProofAmino): BlockRelayProof {
    const message = createBaseBlockRelayProof();
    if (object.multi_store_proof !== undefined && object.multi_store_proof !== null) {
      message.multiStoreProof = MultiStoreProof.fromAmino(object.multi_store_proof);
    }
    if (object.block_header_merkle_parts !== undefined && object.block_header_merkle_parts !== null) {
      message.blockHeaderMerkleParts = BlockHeaderMerkleParts.fromAmino(object.block_header_merkle_parts);
    }
    if (object.common_encoded_vote_part !== undefined && object.common_encoded_vote_part !== null) {
      message.commonEncodedVotePart = CommonEncodedVotePart.fromAmino(object.common_encoded_vote_part);
    }
    message.signatures = object.signatures?.map(e => TMSignature.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BlockRelayProof): BlockRelayProofAmino {
    const obj: any = {};
    obj.multi_store_proof = message.multiStoreProof ? MultiStoreProof.toAmino(message.multiStoreProof) : undefined;
    obj.block_header_merkle_parts = message.blockHeaderMerkleParts ? BlockHeaderMerkleParts.toAmino(message.blockHeaderMerkleParts) : undefined;
    obj.common_encoded_vote_part = message.commonEncodedVotePart ? CommonEncodedVotePart.toAmino(message.commonEncodedVotePart) : undefined;
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e ? TMSignature.toAmino(e) : undefined);
    } else {
      obj.signatures = message.signatures;
    }
    return obj;
  },
  fromAminoMsg(object: BlockRelayProofAminoMsg): BlockRelayProof {
    return BlockRelayProof.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockRelayProofProtoMsg): BlockRelayProof {
    return BlockRelayProof.decode(message.value);
  },
  toProto(message: BlockRelayProof): Uint8Array {
    return BlockRelayProof.encode(message).finish();
  },
  toProtoMsg(message: BlockRelayProof): BlockRelayProofProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.BlockRelayProof",
      value: BlockRelayProof.encode(message).finish()
    };
  }
};
function createBaseMultiStoreProof(): MultiStoreProof {
  return {
    oracleIavlStateHash: new Uint8Array(),
    paramsStoreMerkleHash: new Uint8Array(),
    slashingToStakingStoresMerkleHash: new Uint8Array(),
    transferToUpgradeStoresMerkleHash: new Uint8Array(),
    authToMintStoresMerkleHash: new Uint8Array()
  };
}
export const MultiStoreProof = {
  typeUrl: "/bandchain.v1.oracle.MultiStoreProof",
  encode(message: MultiStoreProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracleIavlStateHash.length !== 0) {
      writer.uint32(10).bytes(message.oracleIavlStateHash);
    }
    if (message.paramsStoreMerkleHash.length !== 0) {
      writer.uint32(18).bytes(message.paramsStoreMerkleHash);
    }
    if (message.slashingToStakingStoresMerkleHash.length !== 0) {
      writer.uint32(26).bytes(message.slashingToStakingStoresMerkleHash);
    }
    if (message.transferToUpgradeStoresMerkleHash.length !== 0) {
      writer.uint32(34).bytes(message.transferToUpgradeStoresMerkleHash);
    }
    if (message.authToMintStoresMerkleHash.length !== 0) {
      writer.uint32(42).bytes(message.authToMintStoresMerkleHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MultiStoreProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiStoreProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleIavlStateHash = reader.bytes();
          break;
        case 2:
          message.paramsStoreMerkleHash = reader.bytes();
          break;
        case 3:
          message.slashingToStakingStoresMerkleHash = reader.bytes();
          break;
        case 4:
          message.transferToUpgradeStoresMerkleHash = reader.bytes();
          break;
        case 5:
          message.authToMintStoresMerkleHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MultiStoreProof>): MultiStoreProof {
    const message = createBaseMultiStoreProof();
    message.oracleIavlStateHash = object.oracleIavlStateHash ?? new Uint8Array();
    message.paramsStoreMerkleHash = object.paramsStoreMerkleHash ?? new Uint8Array();
    message.slashingToStakingStoresMerkleHash = object.slashingToStakingStoresMerkleHash ?? new Uint8Array();
    message.transferToUpgradeStoresMerkleHash = object.transferToUpgradeStoresMerkleHash ?? new Uint8Array();
    message.authToMintStoresMerkleHash = object.authToMintStoresMerkleHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MultiStoreProofAmino): MultiStoreProof {
    const message = createBaseMultiStoreProof();
    if (object.oracle_iavl_state_hash !== undefined && object.oracle_iavl_state_hash !== null) {
      message.oracleIavlStateHash = bytesFromBase64(object.oracle_iavl_state_hash);
    }
    if (object.params_store_merkle_hash !== undefined && object.params_store_merkle_hash !== null) {
      message.paramsStoreMerkleHash = bytesFromBase64(object.params_store_merkle_hash);
    }
    if (object.slashing_to_staking_stores_merkle_hash !== undefined && object.slashing_to_staking_stores_merkle_hash !== null) {
      message.slashingToStakingStoresMerkleHash = bytesFromBase64(object.slashing_to_staking_stores_merkle_hash);
    }
    if (object.transfer_to_upgrade_stores_merkle_hash !== undefined && object.transfer_to_upgrade_stores_merkle_hash !== null) {
      message.transferToUpgradeStoresMerkleHash = bytesFromBase64(object.transfer_to_upgrade_stores_merkle_hash);
    }
    if (object.auth_to_mint_stores_merkle_hash !== undefined && object.auth_to_mint_stores_merkle_hash !== null) {
      message.authToMintStoresMerkleHash = bytesFromBase64(object.auth_to_mint_stores_merkle_hash);
    }
    return message;
  },
  toAmino(message: MultiStoreProof): MultiStoreProofAmino {
    const obj: any = {};
    obj.oracle_iavl_state_hash = message.oracleIavlStateHash ? base64FromBytes(message.oracleIavlStateHash) : undefined;
    obj.params_store_merkle_hash = message.paramsStoreMerkleHash ? base64FromBytes(message.paramsStoreMerkleHash) : undefined;
    obj.slashing_to_staking_stores_merkle_hash = message.slashingToStakingStoresMerkleHash ? base64FromBytes(message.slashingToStakingStoresMerkleHash) : undefined;
    obj.transfer_to_upgrade_stores_merkle_hash = message.transferToUpgradeStoresMerkleHash ? base64FromBytes(message.transferToUpgradeStoresMerkleHash) : undefined;
    obj.auth_to_mint_stores_merkle_hash = message.authToMintStoresMerkleHash ? base64FromBytes(message.authToMintStoresMerkleHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: MultiStoreProofAminoMsg): MultiStoreProof {
    return MultiStoreProof.fromAmino(object.value);
  },
  fromProtoMsg(message: MultiStoreProofProtoMsg): MultiStoreProof {
    return MultiStoreProof.decode(message.value);
  },
  toProto(message: MultiStoreProof): Uint8Array {
    return MultiStoreProof.encode(message).finish();
  },
  toProtoMsg(message: MultiStoreProof): MultiStoreProofProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.MultiStoreProof",
      value: MultiStoreProof.encode(message).finish()
    };
  }
};
function createBaseBlockHeaderMerkleParts(): BlockHeaderMerkleParts {
  return {
    versionAndChainIdHash: new Uint8Array(),
    height: BigInt(0),
    timeSecond: BigInt(0),
    timeNanoSecond: 0,
    lastBlockIdAndOther: new Uint8Array(),
    nextValidatorHashAndConsensusHash: new Uint8Array(),
    lastResultsHash: new Uint8Array(),
    evidenceAndProposerHash: new Uint8Array()
  };
}
export const BlockHeaderMerkleParts = {
  typeUrl: "/bandchain.v1.oracle.BlockHeaderMerkleParts",
  encode(message: BlockHeaderMerkleParts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.versionAndChainIdHash.length !== 0) {
      writer.uint32(10).bytes(message.versionAndChainIdHash);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.timeSecond !== BigInt(0)) {
      writer.uint32(24).uint64(message.timeSecond);
    }
    if (message.timeNanoSecond !== 0) {
      writer.uint32(32).uint32(message.timeNanoSecond);
    }
    if (message.lastBlockIdAndOther.length !== 0) {
      writer.uint32(42).bytes(message.lastBlockIdAndOther);
    }
    if (message.nextValidatorHashAndConsensusHash.length !== 0) {
      writer.uint32(50).bytes(message.nextValidatorHashAndConsensusHash);
    }
    if (message.lastResultsHash.length !== 0) {
      writer.uint32(58).bytes(message.lastResultsHash);
    }
    if (message.evidenceAndProposerHash.length !== 0) {
      writer.uint32(66).bytes(message.evidenceAndProposerHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockHeaderMerkleParts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockHeaderMerkleParts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.versionAndChainIdHash = reader.bytes();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        case 3:
          message.timeSecond = reader.uint64();
          break;
        case 4:
          message.timeNanoSecond = reader.uint32();
          break;
        case 5:
          message.lastBlockIdAndOther = reader.bytes();
          break;
        case 6:
          message.nextValidatorHashAndConsensusHash = reader.bytes();
          break;
        case 7:
          message.lastResultsHash = reader.bytes();
          break;
        case 8:
          message.evidenceAndProposerHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BlockHeaderMerkleParts>): BlockHeaderMerkleParts {
    const message = createBaseBlockHeaderMerkleParts();
    message.versionAndChainIdHash = object.versionAndChainIdHash ?? new Uint8Array();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.timeSecond = object.timeSecond !== undefined && object.timeSecond !== null ? BigInt(object.timeSecond.toString()) : BigInt(0);
    message.timeNanoSecond = object.timeNanoSecond ?? 0;
    message.lastBlockIdAndOther = object.lastBlockIdAndOther ?? new Uint8Array();
    message.nextValidatorHashAndConsensusHash = object.nextValidatorHashAndConsensusHash ?? new Uint8Array();
    message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
    message.evidenceAndProposerHash = object.evidenceAndProposerHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: BlockHeaderMerklePartsAmino): BlockHeaderMerkleParts {
    const message = createBaseBlockHeaderMerkleParts();
    if (object.version_and_chain_id_hash !== undefined && object.version_and_chain_id_hash !== null) {
      message.versionAndChainIdHash = bytesFromBase64(object.version_and_chain_id_hash);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time_second !== undefined && object.time_second !== null) {
      message.timeSecond = BigInt(object.time_second);
    }
    if (object.time_nano_second !== undefined && object.time_nano_second !== null) {
      message.timeNanoSecond = object.time_nano_second;
    }
    if (object.last_block_id_and_other !== undefined && object.last_block_id_and_other !== null) {
      message.lastBlockIdAndOther = bytesFromBase64(object.last_block_id_and_other);
    }
    if (object.next_validator_hash_and_consensus_hash !== undefined && object.next_validator_hash_and_consensus_hash !== null) {
      message.nextValidatorHashAndConsensusHash = bytesFromBase64(object.next_validator_hash_and_consensus_hash);
    }
    if (object.last_results_hash !== undefined && object.last_results_hash !== null) {
      message.lastResultsHash = bytesFromBase64(object.last_results_hash);
    }
    if (object.evidence_and_proposer_hash !== undefined && object.evidence_and_proposer_hash !== null) {
      message.evidenceAndProposerHash = bytesFromBase64(object.evidence_and_proposer_hash);
    }
    return message;
  },
  toAmino(message: BlockHeaderMerkleParts): BlockHeaderMerklePartsAmino {
    const obj: any = {};
    obj.version_and_chain_id_hash = message.versionAndChainIdHash ? base64FromBytes(message.versionAndChainIdHash) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.time_second = message.timeSecond !== BigInt(0) ? message.timeSecond?.toString() : undefined;
    obj.time_nano_second = message.timeNanoSecond === 0 ? undefined : message.timeNanoSecond;
    obj.last_block_id_and_other = message.lastBlockIdAndOther ? base64FromBytes(message.lastBlockIdAndOther) : undefined;
    obj.next_validator_hash_and_consensus_hash = message.nextValidatorHashAndConsensusHash ? base64FromBytes(message.nextValidatorHashAndConsensusHash) : undefined;
    obj.last_results_hash = message.lastResultsHash ? base64FromBytes(message.lastResultsHash) : undefined;
    obj.evidence_and_proposer_hash = message.evidenceAndProposerHash ? base64FromBytes(message.evidenceAndProposerHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockHeaderMerklePartsAminoMsg): BlockHeaderMerkleParts {
    return BlockHeaderMerkleParts.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockHeaderMerklePartsProtoMsg): BlockHeaderMerkleParts {
    return BlockHeaderMerkleParts.decode(message.value);
  },
  toProto(message: BlockHeaderMerkleParts): Uint8Array {
    return BlockHeaderMerkleParts.encode(message).finish();
  },
  toProtoMsg(message: BlockHeaderMerkleParts): BlockHeaderMerklePartsProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.BlockHeaderMerkleParts",
      value: BlockHeaderMerkleParts.encode(message).finish()
    };
  }
};
function createBaseCommonEncodedVotePart(): CommonEncodedVotePart {
  return {
    signedDataPrefix: new Uint8Array(),
    signedDataSuffix: new Uint8Array()
  };
}
export const CommonEncodedVotePart = {
  typeUrl: "/bandchain.v1.oracle.CommonEncodedVotePart",
  encode(message: CommonEncodedVotePart, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signedDataPrefix.length !== 0) {
      writer.uint32(10).bytes(message.signedDataPrefix);
    }
    if (message.signedDataSuffix.length !== 0) {
      writer.uint32(18).bytes(message.signedDataSuffix);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommonEncodedVotePart {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommonEncodedVotePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedDataPrefix = reader.bytes();
          break;
        case 2:
          message.signedDataSuffix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CommonEncodedVotePart>): CommonEncodedVotePart {
    const message = createBaseCommonEncodedVotePart();
    message.signedDataPrefix = object.signedDataPrefix ?? new Uint8Array();
    message.signedDataSuffix = object.signedDataSuffix ?? new Uint8Array();
    return message;
  },
  fromAmino(object: CommonEncodedVotePartAmino): CommonEncodedVotePart {
    const message = createBaseCommonEncodedVotePart();
    if (object.signed_data_prefix !== undefined && object.signed_data_prefix !== null) {
      message.signedDataPrefix = bytesFromBase64(object.signed_data_prefix);
    }
    if (object.signed_data_suffix !== undefined && object.signed_data_suffix !== null) {
      message.signedDataSuffix = bytesFromBase64(object.signed_data_suffix);
    }
    return message;
  },
  toAmino(message: CommonEncodedVotePart): CommonEncodedVotePartAmino {
    const obj: any = {};
    obj.signed_data_prefix = message.signedDataPrefix ? base64FromBytes(message.signedDataPrefix) : undefined;
    obj.signed_data_suffix = message.signedDataSuffix ? base64FromBytes(message.signedDataSuffix) : undefined;
    return obj;
  },
  fromAminoMsg(object: CommonEncodedVotePartAminoMsg): CommonEncodedVotePart {
    return CommonEncodedVotePart.fromAmino(object.value);
  },
  fromProtoMsg(message: CommonEncodedVotePartProtoMsg): CommonEncodedVotePart {
    return CommonEncodedVotePart.decode(message.value);
  },
  toProto(message: CommonEncodedVotePart): Uint8Array {
    return CommonEncodedVotePart.encode(message).finish();
  },
  toProtoMsg(message: CommonEncodedVotePart): CommonEncodedVotePartProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.CommonEncodedVotePart",
      value: CommonEncodedVotePart.encode(message).finish()
    };
  }
};
function createBaseTMSignature(): TMSignature {
  return {
    r: new Uint8Array(),
    s: new Uint8Array(),
    v: 0,
    encodedTimestamp: new Uint8Array()
  };
}
export const TMSignature = {
  typeUrl: "/bandchain.v1.oracle.TMSignature",
  encode(message: TMSignature, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.r.length !== 0) {
      writer.uint32(10).bytes(message.r);
    }
    if (message.s.length !== 0) {
      writer.uint32(18).bytes(message.s);
    }
    if (message.v !== 0) {
      writer.uint32(24).uint32(message.v);
    }
    if (message.encodedTimestamp.length !== 0) {
      writer.uint32(34).bytes(message.encodedTimestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TMSignature {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTMSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.r = reader.bytes();
          break;
        case 2:
          message.s = reader.bytes();
          break;
        case 3:
          message.v = reader.uint32();
          break;
        case 4:
          message.encodedTimestamp = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TMSignature>): TMSignature {
    const message = createBaseTMSignature();
    message.r = object.r ?? new Uint8Array();
    message.s = object.s ?? new Uint8Array();
    message.v = object.v ?? 0;
    message.encodedTimestamp = object.encodedTimestamp ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TMSignatureAmino): TMSignature {
    const message = createBaseTMSignature();
    if (object.r !== undefined && object.r !== null) {
      message.r = bytesFromBase64(object.r);
    }
    if (object.s !== undefined && object.s !== null) {
      message.s = bytesFromBase64(object.s);
    }
    if (object.v !== undefined && object.v !== null) {
      message.v = object.v;
    }
    if (object.encoded_timestamp !== undefined && object.encoded_timestamp !== null) {
      message.encodedTimestamp = bytesFromBase64(object.encoded_timestamp);
    }
    return message;
  },
  toAmino(message: TMSignature): TMSignatureAmino {
    const obj: any = {};
    obj.r = message.r ? base64FromBytes(message.r) : undefined;
    obj.s = message.s ? base64FromBytes(message.s) : undefined;
    obj.v = message.v === 0 ? undefined : message.v;
    obj.encoded_timestamp = message.encodedTimestamp ? base64FromBytes(message.encodedTimestamp) : undefined;
    return obj;
  },
  fromAminoMsg(object: TMSignatureAminoMsg): TMSignature {
    return TMSignature.fromAmino(object.value);
  },
  fromProtoMsg(message: TMSignatureProtoMsg): TMSignature {
    return TMSignature.decode(message.value);
  },
  toProto(message: TMSignature): Uint8Array {
    return TMSignature.encode(message).finish();
  },
  toProtoMsg(message: TMSignature): TMSignatureProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.TMSignature",
      value: TMSignature.encode(message).finish()
    };
  }
};
function createBaseRequestsCountProof(): RequestsCountProof {
  return {
    count: BigInt(0),
    version: BigInt(0),
    merklePaths: []
  };
}
export const RequestsCountProof = {
  typeUrl: "/bandchain.v1.oracle.RequestsCountProof",
  encode(message: RequestsCountProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.count !== BigInt(0)) {
      writer.uint32(8).uint64(message.count);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(16).uint64(message.version);
    }
    for (const v of message.merklePaths) {
      IAVLMerklePath.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestsCountProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestsCountProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.uint64();
          break;
        case 2:
          message.version = reader.uint64();
          break;
        case 3:
          message.merklePaths.push(IAVLMerklePath.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RequestsCountProof>): RequestsCountProof {
    const message = createBaseRequestsCountProof();
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.merklePaths = object.merklePaths?.map(e => IAVLMerklePath.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RequestsCountProofAmino): RequestsCountProof {
    const message = createBaseRequestsCountProof();
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    message.merklePaths = object.merkle_paths?.map(e => IAVLMerklePath.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RequestsCountProof): RequestsCountProofAmino {
    const obj: any = {};
    obj.count = message.count !== BigInt(0) ? message.count?.toString() : undefined;
    obj.version = message.version !== BigInt(0) ? message.version?.toString() : undefined;
    if (message.merklePaths) {
      obj.merkle_paths = message.merklePaths.map(e => e ? IAVLMerklePath.toAmino(e) : undefined);
    } else {
      obj.merkle_paths = message.merklePaths;
    }
    return obj;
  },
  fromAminoMsg(object: RequestsCountProofAminoMsg): RequestsCountProof {
    return RequestsCountProof.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestsCountProofProtoMsg): RequestsCountProof {
    return RequestsCountProof.decode(message.value);
  },
  toProto(message: RequestsCountProof): Uint8Array {
    return RequestsCountProof.encode(message).finish();
  },
  toProtoMsg(message: RequestsCountProof): RequestsCountProofProtoMsg {
    return {
      typeUrl: "/bandchain.v1.oracle.RequestsCountProof",
      value: RequestsCountProof.encode(message).finish()
    };
  }
};