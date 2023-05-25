import {
  Client,
  Wallet,
  Message,
  Coin,
  Transaction,
  Fee,
} from '@bandprotocol/bandchain.js'
import fs from 'fs'
import path from 'path'

const grpcEndpoint = 'https://laozi-testnet6.bandchain.org/grpc-web'
const client = new Client(grpcEndpoint)
const { PrivateKey } = Wallet
const mnemonic = 'test'
const privateKey = PrivateKey.fromMnemonic(mnemonic)
const pubkey = privateKey.toPubkey()
const sender = pubkey.toAddress().toAccBech32()
const owner = 'band18e55d9xyrgyg3tk72zmg7s92uu8sd95jzgj73a'

async function exampleCreateOracleScript() {
  // don't forget to copy this file when you copy the code
  const execPath = path.resolve(
    __dirname,
    './mock/standard_dataset_crypto_mainnet.wasm',
  )
  const code = fs.readFileSync(execPath)

  let feeCoin = new Coin()
  feeCoin.setDenom('uband')
  feeCoin.setAmount('5000')

  // Step 2.2: Create an oracle request message

  // name: string
  // code: Buffer
  // owner: string
  // sender: string
  // description?: string
  // schema?: string
  // sourceCodeUrl?: string
  const requestMessage = new Message.MsgCreateOracleScript(
    'Oracle Script Name',
    code,
    sender,
    sender,
    'Oracle Script Description',
    '{symbols:[string],multiplier:u64}/{rates:[u64]}',
    'https://mockurl.com',
  )

  const fee = new Fee()
  fee.setAmountList([feeCoin])
  fee.setGasLimit(1500000)
  const chainId = await client.getChainId()
  const txn = new Transaction()
  txn.withMessages(requestMessage)
  await txn.withSender(client, sender)
  txn.withChainId(chainId)
  txn.withFee(fee)
  txn.withMemo('')

  const signDoc = txn.getSignDoc(pubkey)
  const signature = privateKey.sign(signDoc)

  const txRawBytes = txn.getTxData(signature, pubkey)
  const sendTx = await client.sendTxBlockMode(txRawBytes)
  return sendTx
}

async function exampleEditOracleScript(id: number) {
  // don't forget to copy this file when you copy the code
  const execPath = path.resolve(__dirname, './mock/example_oracle_script.wasm')
  const code = fs.readFileSync(execPath)

  let coin = new Coin()
  coin.setDenom('uband')
  coin.setAmount('1000000')

  let feeCoin = new Coin()
  feeCoin.setDenom('uband')
  feeCoin.setAmount('5000')

  // Step 2.2: Create an oracle request message

  // oracleScriptId: number
  // owner: string
  // sender: string
  // name: string
  // description: string
  // schema: string
  // sourceCodeUrl: string
  // code: Buffer | string
  const requestMessage = new Message.MsgEditOracleScript(
    id,
    owner,
    sender,
    'Edit Oracle Script Name',
    'Edit Oracle Script Description',
    '{symbols:[string],multiplier:u64}/{rates:[u64]}',
    'https://mockurl.com',
    code,
  )

  const fee = new Fee()
  fee.setAmountList([feeCoin])
  fee.setGasLimit(1500000)
  const chainId = await client.getChainId()
  const txn = new Transaction()
  txn.withMessages(requestMessage)
  await txn.withSender(client, sender)
  txn.withChainId(chainId)
  txn.withFee(fee)
  txn.withMemo('')

  const signDoc = txn.getSignDoc(pubkey)
  const signature = privateKey.sign(signDoc)

  const txRawBytes = txn.getTxData(signature, pubkey)
  const sendTx = await client.sendTxBlockMode(txRawBytes)

  return sendTx
}

;(async () => {
  console.log('Creating an oracle script...')
  const response = await exampleCreateOracleScript()
  const rawLog = JSON.parse(response.rawLog)
  const datasourceID = rawLog[0].events[0].attributes[0].value
  console.log(response)
  console.log('Editing an oracle script...')
  console.log(await exampleEditOracleScript(datasourceID))
})()
