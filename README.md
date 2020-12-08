# BandChain.js

Library for interacting with BandChain in browser and Node.js environments

## ⭐️ Features

- Making data requests to BandChain
- Getting the results of the latest request on BandChain that matches specific parameters
- Making send, delegate messages to BandChain
- Controling the wallet for signing, getting public key or address by using mnemonic phrase

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

#### Querying previous request results

```js
const { Client } = require('@bandprotocol/bandchain.js')

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
```

For more examples, please see [`example/index.js`](example/index.js)
