import React from 'react'
import './App.css'
import { Client, Data } from '@bandprotocol/bandchain.js'

const grpcEndpoint = 'http://rpc-laozi-testnet2.bandchain.org:8080'
const client = new Client(grpcEndpoint)

function App() {
  const [pairs, setPairs] = React.useState<Data.ReferenceData[]>()

  React.useEffect(() => {
    // Get standard price reference
    async function getReferenceData() {
      const data = await client.getReferenceData(['BTC/USD', 'ETH/BTC'], 3, 6)
      console.log('account ', data)

      setPairs(data)
    }

    getReferenceData()
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
