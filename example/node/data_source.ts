import { Client, Wallet, Message, Coin, Transaction, Fee } from '../../src'
import fs from 'fs'
import path from 'path'

const grpcEndpoint = 'https://laozi-testnet4.bandchain.org/grpc-web'
const client = new Client(grpcEndpoint)

async function exampleCreateDataSource() {
  const { PrivateKey } = Wallet
  const mnemonic = 'test'
  const privateKey = PrivateKey.fromMnemonic(mnemonic)
  const pubkey = privateKey.toPubkey()
  const sender = pubkey.toAddress().toAccBech32()

  const execPath = path.resolve(__dirname, '../mock/sample_ds.py')
  const file = fs.readFileSync(execPath, 'utf8')
  const executable = Buffer.from(file).toString('base64')
  console.log(executable.length)

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
    'Test DS NodeJs',
    executable,
    [feeCoin],
    treasury,
    owner,
    sender,
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

;(async () => {
  console.log('Creating a new data source...')
  console.log(await exampleCreateDataSource())
})()
