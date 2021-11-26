import { Client, Wallet, Message, Coin, Transaction, Fee } from '../../src'
import fs from 'fs'
import path from 'path'
import { Address } from '../../src/wallet'

const grpcEndpoint = 'https://laozi-testnet4.bandchain.org/grpc-web'
const client = new Client(grpcEndpoint)
const { PrivateKey } = Wallet
const mnemonic = 'test'
const privateKey = PrivateKey.fromMnemonic(mnemonic)
const pubkey = privateKey.toPubkey()
const sender = pubkey.toAddress().toAccBech32()
const owner = 'band18e55d9xyrgyg3tk72zmg7s92uu8sd95jzgj73a'

async function exampleCreateOracleScript() {
  const execPath = path.resolve(__dirname, '../mock/example_oracle_script.wasm')
  const file = fs.readFileSync(execPath, 'utf8')
  const code = Buffer.from(file).toString('base64')

  let coin = new Coin()
  coin.setDenom('uband')
  coin.setAmount('1000000')

  let feeCoin = new Coin()
  feeCoin.setDenom('uband')
  feeCoin.setAmount('1000')

  // Step 2.2: Create an oracle request message
  const requestMessage = new Message.MsgCreateOracleScript(
    'Oracle Script Name',
    code,
    owner,
    sender,
    'Oracle Script Description',
    '{symbols:[string],multiplier:u64}/{rates:[u64]}',
    'https://mockurl.com',
  )

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

  const signDoc = txn.getSignDoc(pubkey)
  const signature = privateKey.sign(signDoc)

  const txRawBytes = txn.getTxData(signature, pubkey)
  const sendTx = await client.sendTxBlockMode(txRawBytes)

  return sendTx
}

;(async () => {
  console.log('Creating an oracle script...')
  console.log(await exampleCreateOracleScript())
})()
