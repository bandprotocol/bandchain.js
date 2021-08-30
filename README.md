# BandChain.js

BandChain.js is a library for interacting with BandChain in browser and Node.js environments. It uses `gRPC-web` as protocol.

## ⭐️ Features

- Interacting with your BandChain wallet
- Making transactions on BandChain
- Making data requests to BandChain's oracle

## 📦 Installation

### NPM

```bash
npm install --save @bandprotocol/bandchain.js
```

### Yarn

```bash
yarn add @bandprotocol/bandchain.js
```

## Usage

#### Retrieving Price Data

```js
const { Client } = require('@bandprotocol/bandchain.js')

// BandChain's Proof-of-Authority REST endpoint
const endpoint = 'http://rpc-laozi-testnet2.bandchain.org:8080'
const client = new Client(endpoint)

// This example demonstrates how to query price data from
// Band's standard dataset
async function exampleGetReferenceData() {
  const rate = await client.getReferenceData([
    'BTC/USD',
    'BTC/ETH',
    'EUR/USD',
    'EUR/ETH',
  ], 3, 6)
  return rate
}

;(async () => {
  console.log(await exampleGetReferenceData())
})()
```

For more examples, please see [`example`](example/) folder.
