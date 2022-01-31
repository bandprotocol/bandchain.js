import { Client, Wallet, Message, Coin, Transaction, Fee } from '../../src'

const grpcEndpoint = 'https://laozi-testnet4.bandchain.org/grpc-web'
const client = new Client(grpcEndpoint)
const { PrivateKey } = Wallet
const mnemonic = 'test'
const privateKey = PrivateKey.fromMnemonic(mnemonic)
const pubkey = privateKey.toPubkey()
const sender = pubkey.toAddress().toAccBech32()

async function getSignedTx(msg) {
  let feeCoin = new Coin()
  feeCoin.setDenom('uband')
  feeCoin.setAmount('1000')

  const fee = new Fee()
  fee.setAmountList([feeCoin])
  fee.setGasLimit(1000000)

  const chainId = await client.getChainId()
  const txn = new Transaction()
  txn.withMessages(msg)
  await txn.withSender(client, sender)
  txn.withChainId(chainId)
  txn.withFee(fee)
  txn.withMemo('')

  const signDoc = txn.getSignDoc(pubkey)
  const signature = privateKey.sign(signDoc)

  const txRawBytes = txn.getTxData(signature, pubkey)

  return txRawBytes
}

async function exampleMsgDelegate() {
  let coin = new Coin()
  coin.setDenom('uband')
  coin.setAmount('1000000')
  const requestMsg = new Message.MsgDelegate(
    sender,
    'bandvaloper1nlepx7xg53fsy6vslrss6adtmtl8a33kusv7fa',
    coin,
  )

  const signedTxBytes = await getSignedTx(requestMsg)

  const sendTx = await client.sendTxBlockMode(signedTxBytes)

  return sendTx
}

async function exampleMsgReDelegate() {
  let coin = new Coin()
  coin.setDenom('uband')
  coin.setAmount('1000')
  const requestMsg = new Message.MsgBeginRedelegate(
    sender,
    'bandvaloper1nlepx7xg53fsy6vslrss6adtmtl8a33kusv7fa', // src address
    'bandvaloper1zkf9qzs7ayf3uqksxqwve8q693dsdhxk800wvw', // dest address
    coin,
  )

  const signedTxBytes = await getSignedTx(requestMsg)

  const sendTx = await client.sendTxBlockMode(signedTxBytes)

  return sendTx
}


async function exampleMsgUnDelegate() {
  let coin = new Coin()
  coin.setDenom('uband')
  coin.setAmount('0')
  const requestMsg = new Message.MsgUndelegate(
    sender,
    'bandvaloper1nlepx7xg53fsy6vslrss6adtmtl8a33kusv7fa', // src address
    coin,
  )

  const signedTxBytes = await getSignedTx(requestMsg)

  const sendTx = await client.sendTxBlockMode(signedTxBytes)

  return sendTx
}


async function exampleMsgWithDrawReward() {
  const requestMsg = new Message.MsgWithdrawDelegatorReward(
    '',
    'bandvaloper1nlepx7xg53fsy6vslrss6adtmtl8a33kusv7fa'
  )

  const signedTxBytes = await getSignedTx(requestMsg)

  const sendTx = await client.sendTxBlockMode(signedTxBytes)

  return sendTx
}



;(async () => {
  // console.log('Begin testing MsgDelegate...')
  // console.log(await exampleMsgDelegate())
  // console.log('Begin testing MsgReDelegate...')
  // console.log(await exampleMsgReDelegate())
  // console.log('Begin testing MsgUnDelegate...')
  // console.log(await exampleMsgUnDelegate())
  console.log('Begin testing exampleMsgWithDrawReward...')
  console.log(await exampleMsgWithDrawReward())
})()