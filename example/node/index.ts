import { Client, Wallet, Obi, Message, Coin, Transaction, Fee } from '../../src'

const grpcEndpoint = 'https://laozi-testnet4.bandchain.org/grpc-web'
const client = new Client(grpcEndpoint)

// This example demonstrates how to query price data from
// Band's standard dataset
async function exampleGetReferenceData() {
  const rate = await client.getReferenceData(['BTC/USD', 'ETH/BTC'], 3, 4)
  return rate
}

async function exampleSendBlockTransaction() {
  // Step 1: Import a private key for signing transaction
  const { PrivateKey } = Wallet
  const mnemonic = 'test'
  const privateKey = PrivateKey.fromMnemonic(mnemonic)
  const pubkey = privateKey.toPubkey()
  const sender = pubkey.toAddress().toAccBech32()

  // Step 2.1: Prepare oracle request's properties
  const obi = new Obi('{symbols:[string],multiplier:u64}/{rates:[u64]}')
  const calldata = obi.encodeInput({ symbols: ['ETH'], multiplier: 100 })
  let coin = new Coin()
  coin.setDenom('uband')
  coin.setAmount('1000000')

  let feeCoin = new Coin()
  feeCoin.setDenom('uband')
  feeCoin.setAmount('1000')

  // Step 2.2: Create an oracle request message
  const requestMessage = new Message.MsgRequestData(
    37,
    calldata,
    4,
    3,
    'BandProtocol',
    sender,
    [coin],
    50000,
    200000,
  )

  // Step 3.1: Construct a transaction
  const fee = new Fee()
  fee.setAmountList([feeCoin])
  fee.setGasLimit(1000000)
  const chainId = await client.getChainId()
  const txn = new Transaction()
  txn.withMessages(requestMessage)
  await txn.withSender(client, sender)
  txn.withChainId(chainId)
  txn.withFee(fee)
  txn.withMemo('')

  // Step 3.2: Sign the transaction using the private key
  const signDoc = txn.getSignDoc(pubkey)
  const signature = privateKey.sign(signDoc)

  const txRawBytes = txn.getTxData(signature, pubkey)

  // Step 4: Broadcast the transaction
  const sendTx = await client.sendTxBlockMode(txRawBytes)

  return sendTx
}


async function exampleCreateDataSource() {
  const { PrivateKey } = Wallet
  const mnemonic = 'test'
  const privateKey = PrivateKey.fromMnemonic(mnemonic)
  const pubkey = privateKey.toPubkey()
  const sender = pubkey.toAddress().toAccBech32()

  const executableCode = Buffer.from(`#!/usr/bin/env python3
  import requests
  import sys
    `).toString('base64')

  const owner = 'band18e55d9xyrgyg3tk72zmg7s92uu8sd95jzgj73a'
  const treasury = 'band18e55d9xyrgyg3tk72zmg7s92uu8sd95jzgj73a'

  let coin = new Coin()
  coin.setDenom('uband')
  coin.setAmount('1000000')

  let feeCoin = new Coin()
  feeCoin.setDenom('uband')
  feeCoin.setAmount('1000')

  // Step 2.2: Create an oracle request message
  const requestMessage = new Message.MsgCreateDataSource(
    "Test DS NodeJs",
    "Test DS NodeJs Description",
    executableCode,
    [feeCoin],
    treasury,
    owner,
    sender,
  )

  // Step 3.1: Construct a transaction
  const fee = new Fee()
  fee.setAmountList([feeCoin])
  fee.setGasLimit(1000000)
  const chainId = await client.getChainId()
  const txn = new Transaction()
  txn.withMessages(requestMessage)
  await txn.withSender(client, sender)
  txn.withChainId(chainId)
  txn.withFee(fee)
  txn.withMemo('')

  // Step 3.2: Sign the transaction using the private key
  const signDoc = txn.getSignDoc(pubkey)
  const signature = privateKey.sign(signDoc)

  const txRawBytes = txn.getTxData(signature, pubkey)

  // Step 4: Broadcast the transaction
  const sendTx = await client.sendTxBlockMode(txRawBytes)

  return sendTx
}

;(async () => {
  console.log('Test getting reference data...')
  console.log(await exampleGetReferenceData())
  console.log('Test sending an oracle request...')
  console.log(await exampleSendBlockTransaction())
  console.log(await exampleCreateDataSource())
})()
