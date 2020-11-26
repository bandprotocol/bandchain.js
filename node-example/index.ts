const BandChain = require('../lib/BandChain')

// Library for working with Band's Oracle Binary Encoding
// https://docs.bandchain.org/developer/technical-specifications/obi.html
const { Obi } = require('@bandprotocol/obi.js')

// BandChain's Proof-of-Authority REST endpoint
const endpoint = 'http://poa-api.bandchain.org'
const bandchain = new BandChain(endpoint)

// Aggregator oracle script
const oracleScriptID = 8
const mnemonic =
  'fox board balance genuine oblige neglect gadget awesome debris laundry gallery oppose never pupil cabbage advance cause fiction hamster knee debate obey analyst grunt'

// This example submits a new data request transaction to BandChain
// and returns the associated request's ID
// This ID can then be used to retrieve the corresponding request result
// as shown in getRequestResult, exampleGetRequestEVMProof, and exampleGetRequestNonEVMProof
async function exampleSubmitRequestTx() {
  const oracleScript = await bandchain.getOracleScript(oracleScriptID)
  const validatorCounts = { minCount: 3, askCount: 4 }
  const requestID = await bandchain.submitRequestTx(
    oracleScript,
    { symbols: ['BTC', 'ETH'], multiplier: 1e9 },
    validatorCounts,
    mnemonic,
  )
  return requestID
}

// This example submits a new data request to BandChain and
// and returns the result
async function exampleGetRequestResult() {
  const requestID = await exampleSubmitRequestTx()
  const requestResult = await bandchain.getRequestResult(requestID)
  return requestResult
}

// This example demonstrates how to decode the OBI-encoded data returned
// by BandChain using the helper OBI.js library
async function exampleDecodeRequestResult() {
  const oracleScript = await bandchain.getOracleScript(oracleScriptID)
  const schema = oracleScript.schema
  const obi = new Obi(schema)

  const requestResult = await exampleGetRequestResult()
  const result = requestResult.response_packet_data.result

  const decodedResult = obi.decodeOutput(Buffer.from(result, 'base64'))
  return decodedResult
}

// This example demonstrateshow to retrieve proof associated with a request
// on BandChain to use in smart contracts through Band's bridge contract
// https://github.com/bandprotocol/bandchain/tree/master/bridges/evm
async function exampleGetRequestEVMProof() {
  const requestID = await exampleSubmitRequestTx()
  const evmProof = await bandchain.getRequestEVMProof(requestID)
  return evmProof
}

// This example demonstrates how to query BandChain for the latest request result
// that matches specific request parameters.
async function exampleGetLastMatchingRequestResult() {
  const oracleScript = await bandchain.getOracleScript(oracleScriptID)
  const validatorCounts = { minCount: 3, askCount: 4 }
  const result = await bandchain.getLastMatchingRequestResult(
    oracleScript,
    { symbols: ['BTC', 'ETH'], multiplier: 1e9 },
    validatorCounts,
  )
  return result
}

// This example demonstrates how to query price data from
// Band's standard dataset
async function exampleGetReferenceData() {
  const rate = await bandchain.getReferenceData([
    'BTC/USD',
    'BTC/ETH',
    'EUR/USD',
    'EUR/ETH',
  ])
  return rate
}

;(async () => {
  // console.log(await exampleGetReferenceData())
})()
