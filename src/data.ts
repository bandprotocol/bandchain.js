export type HexBytes = Buffer
export type EpochTime = number

export interface ReferenceDataUpdated {
  base: number
  quote: number
}

export interface ReferenceDataRequestID {
  base: number
  quote: number
}

export interface ReferenceData {
  pair: string
  rate: number
  updatedAt: ReferenceDataUpdated
  requestID: ReferenceDataRequestID
}

export interface EVMProof {
  jsonProof: object
  evmProofBytes: Buffer
}
