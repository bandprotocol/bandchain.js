# BandChain.js

BandChain.js is a ibrary for interacting with BandChain in browser and Node.js environments.

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
const endpoint = 'https://api-gm-lb.bandchain.org'
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
