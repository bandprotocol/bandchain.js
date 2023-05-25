# BandChain.js

BandChain.js is a library for interacting with BandChain in browser and Node.js environments. It uses `gRPC-web` as protocol.

## ⭐️ Features

- Interacting with your BandChain wallet
- Making transactions on BandChain
- Making data requests to BandChain's oracle

## 📦 Installation

BandChain.js is currently supported on NodeJS 16.x, and 18.x.

### NPM

```bash
npm install --save @bandprotocol/bandchain.js
```

### Yarn

```bash
yarn add @bandprotocol/bandchain.js
```

## Compatibility

Band 2.2.0, Cosmos SDK 0.44.0, IBC-go 1.1.0

## Usage

#### Retrieving Price Data

```js
const { Client } = require('@bandprotocol/bandchain.js')

// BandChain's Proof-of-Authority REST endpoint
const endpoint = 'https://laozi-testnet6.bandchain.org/grpc-web'
const client = new Client(endpoint)

// This example demonstrates how to query price data from
// Band's standard dataset
async function exampleGetReferenceData() {
  const rate = await client.getReferenceData(
    ['BTC/USD', 'BTC/ETH', 'EUR/USD', 'EUR/ETH'],
    3,
    4,
  )
  return rate
}

;(async () => {
  console.log(await exampleGetReferenceData())
})()
```

For more examples, please see [`example`](example/) folder.
