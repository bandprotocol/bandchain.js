const BandChain = require('../lib/BandChain')
const { Obi } = require('@bandprotocol/obi.js')

const endpoint = 'http://poa-api.bandchain.org'
const bandchain = new BandChain(endpoint)

const oracleScriptID = 8
const mnemonic =
  'fox board balance genuine oblige neglect gadget awesome debris laundry gallery oppose never pupil cabbage advance cause fiction hamster knee debate obey analyst grunt'

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

async function exampleGetRequestResult() {
  const requestID = await exampleSubmitRequestTx()
  const requestResult = await bandchain.getRequestResult(requestID)
  return requestResult
}

async function exampleDecodeRequestResult() {
  const oracleScript = await bandchain.getOracleScript(oracleScriptID)
  const schema = oracleScript.schema
  const obi = new Obi(schema)

  const requestResult = await exampleGetRequestResult()
  const result = requestResult.response_packet_data.result

  const decodedResult = obi.decodeOutput(Buffer.from(result, 'base64'))
  return decodedResult
}

async function exampleGetRequestEVMProof() {
  const requestID = await exampleSubmitRequestTx()
  const evmProof = await bandchain.getRequestEVMProof(requestID)
  return evmProof
}

async function exampleGetRequestNonEVMProof() {
  const requestID = await exampleSubmitRequestTx()
  const nonEVMProof = await bandchain.getRequestNonEVMProof(requestID)
  return nonEVMProof
}

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
