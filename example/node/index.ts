const { Client } = require('../../lib/cjs/index')


// BandChain's Proof-of-Authority REST endpoint
const endpoint = 'http://poa-api.bandchain.org'
const client = new Client(endpoint)

// This example demonstrates how to query price data from
// Band's standard dataset
async function exampleGetReferenceData() {
  const rate = await client.getReferenceData([
    'BTC/USD',
    'BTC/ETH',
    'EUR/USD',
    'EUR/ETH',
  ])
  return rate
}

;(async () => {
  console.log(await exampleGetReferenceData())
})()
