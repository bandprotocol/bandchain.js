import React from 'react'
import './App.css'
import { Client, Data, Wallet, Message, Coin, Transaction, Fee } from '@bandprotocol/bandchain.js'

const grpcEndpoint = 'https://laozi-testnet4.bandchain.org/grpc-web'
const client = new Client(grpcEndpoint)

const createDsMsg = async () => {

  const { PrivateKey } = Wallet
  const mnemonic = "subject economy equal whisper turn boil guard giraffe stick retreat wealth card only buddy joy leave genuine resemble submit ghost top polar adjust avoid"
  const privateKey = PrivateKey.fromMnemonic(mnemonic)
  const pubkey = privateKey.toPubkey()
  const sender = pubkey.toAddress().toAccBech32()

const executableCode = btoa(`#!/usr/bin/env python3
import requests
import sys
  `)

// Here we use different message type, which is MsgSend
const owner = 'band18e55d9xyrgyg3tk72zmg7s92uu8sd95jzgj73a'
const treasury = 'band18e55d9xyrgyg3tk72zmg7s92uu8sd95jzgj73a'

  let feeCoin = new Coin()
  feeCoin.setDenom("uband")
  feeCoin.setAmount("1000")

  const msg = new Message.MsgCreateDataSource(
    "Test DS",
    "Test DS Description",
    executableCode,
    [feeCoin],
    treasury,
    owner,
    sender,
  )

  const fee = new Fee()
  fee.setAmountList([feeCoin])
  fee.setGasLimit(1000000)

  const account = await client.getAccount(sender)

  const tx = new Transaction()
    .withMessages(msg)
    .withAccountNum(account.accountNumber)
    .withSequence(account.sequence)
    .withChainId('band-laozi-testnet4')
    .withFee(fee)

  // Step 4 sign the transaction
  const txSignData = tx.getSignDoc(pubkey)
  const signature = privateKey.sign(txSignData)
  const signedTx = tx.getTxData(signature, pubkey)

  // Step 5 send the transaction
  const response = await client.sendTxBlockMode(signedTx)
  console.log(response)

  // return response
}

function App() {
  const [pairs, setPairs] = React.useState<Data.ReferenceData[]>()

  React.useEffect(() => {
    // Get standard price reference
    async function getReferenceData() {
      const data = await client.getReferenceData(['BTC/USD', 'ETH/BTC'], 3, 4)
      setPairs(data)
    }
    createDsMsg()
    getReferenceData()
  }, [])

  return (
    <div className="App">
      <span style={{ fontSize: '24px', marginBottom: '10px' }}>Prices</span>
      {pairs &&
        pairs.map(({ pair, rate }) => (
          <div key={pair}>
            <span style={{ marginBottom: '5px' }}>
              {pair}: {rate.toString()}
            </span>
          </div>
        ))}
    </div>
  )
}

export default App
