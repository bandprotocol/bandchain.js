import React from 'react'
import './App.css'
import { Client, Data } from '@bandprotocol/bandchain.js'

// BandChain's Proof-of-Authority REST endpoint
const endpoint = 'https://api-gm-lb.bandchain.org'
const client = new Client(endpoint)

function App() {
  const [pairs, setPairs] = React.useState<Data.ReferenceData[]>()

  React.useEffect(() => {
    // This example demonstrates how to query price data from
    // Band's standard dataset
    async function exampleGetReferenceData() {
      const data = await client.getReferenceData([
        'BTC/USD',
        'BTC/ETH',
        'EUR/USD',
      ])
      setPairs(data)
    }
    exampleGetReferenceData()
  }, [])
  return (
    <div className="App">
      <span style={{ fontSize: '24px', marginBottom: '10px' }}>Prices</span>
      {pairs &&
        pairs.map(({ pair, rate }) => (
          <>
            <span style={{ marginBottom: '5px' }}>
              {pair}: {rate.toString()}
            </span>
          </>
        ))}
    </div>
  )
}

export default App
