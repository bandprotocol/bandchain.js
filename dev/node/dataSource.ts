import { Client, Wallet, Message, Coin, Transaction, Fee } from '../../lib'
import fs from 'fs'
import path from 'path'

const grpcEndpoint = 'https://laozi-testnet6.bandchain.org/grpc-web'
const client = new Client(grpcEndpoint)
const { PrivateKey } = Wallet
const mnemonic = 'test'
const privateKey = PrivateKey.fromMnemonic(mnemonic)
const pubkey = privateKey.toPubkey()
const sender = pubkey.toAddress().toAccBech32()

export async function exampleCreateDataSource() {
  // don't forget to copy this file when you copy the code
  const execPath = path.resolve(__dirname, './mock/example_data_source.py')
  const file = fs.readFileSync(execPath, 'utf8')
  const executable = Buffer.from(file).toString('base64')

  let coin = new Coin()
  coin.setDenom('uband')
  coin.setAmount('1000000')

  let feeCoin = new Coin()
  feeCoin.setDenom('uband')
  feeCoin.setAmount('5000')

  // Step 2.2: Create an oracle request message

  // name: string
  // executable: Buffer | string
  // treasury: string
  // owner: string
  // sender: string
  // feeList: Coin[]
  // description?: string
  const requestMessage = new Message.MsgCreateDataSource(
    'Test DS NodeJs',
    executable,
    sender,
    sender,
    sender,
    [feeCoin],
    'Test DS NodeJs Description',
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

export async function exampleEditDataSource(id: number) {
  // don't forget to copy this file when you copy the code
  const execPath = path.resolve(__dirname, './mock/example_data_source.py')
  const file = fs.readFileSync(execPath, 'utf8')
  const executable = Buffer.from(file).toString('base64')

  let coin = new Coin()
  coin.setDenom('uband')
  coin.setAmount('1000000')

  let feeCoin = new Coin()
  feeCoin.setDenom('uband')
  feeCoin.setAmount('5000')

  // Step 2.2: Create an oracle request message

  // dataSourceId: number
  // treasury: string
  // owner: string
  // sender: string
  // feeList: Coin[]
  // name: string
  // description: string
  // executable: Buffer | string
  const requestMessage = new Message.MsgEditDataSource(
    id,
    sender,
    sender,
    sender,
    [feeCoin],
    'Test Edit DS NodeJs',
    'Test Edit DS NodeJs Description',
    executable,
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
