import { Client } from '@bandprotocol/bandchain.js'

const grpcEndpoint = 'https://laozi-testnet6.bandchain.org/grpc-web'
const client = new Client(grpcEndpoint)

// This example demonstrates how to query price data from
// Band's standard dataset
async function exampleGetReferenceData() {
  const rate = await client.getReferenceData(['BTC/USD', 'ETH/BTC'], 3, 4)
  return rate
}

;(async () => {
  console.log('Test getting reference data...')
  console.log(await exampleGetReferenceData())
})()
