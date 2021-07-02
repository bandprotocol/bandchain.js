import React from 'react'
import './App.css'
import {
  Client,
  Data,
  Wallet,
  Obi,
  Transaction,
  Coin,
  Fee,
  Message
} from '@bandprotocol/bandchain.js'

// BandChain's Proof-of-Authority REST endpoint
const endpoint = 'https://api-gm-lb.bandchain.org'
const grpcEndpoint = 'http://localhost:8080'
const client = new Client(grpcEndpoint, endpoint)

function App() {
  const [pairs, setPairs] = React.useState<Data.ReferenceData[]>()

  const { PrivateKey } = Wallet
  const mnemonic = 'test'
  const privateKey = PrivateKey.fromMnemonic(mnemonic)
  const pubkey = privateKey.toPubkey()
  const sender = pubkey.toAddress().toAccBech32()
  const obi = new Obi('{symbols:[string],multiplier:u64}/{rates:[u64]}')
  const calldata = obi.encodeInput({ symbols: ['ETH'], multiplier: 100 })

  React.useEffect(() => {
    async function getData() {
      const acc = await client.getAccount(
        'band18e55d9xyrgyg3tk72zmg7s92uu8sd95jzgj73a',
      )
      console.log('account ', acc)
    }
    getData()

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
