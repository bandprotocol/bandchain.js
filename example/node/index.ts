const { Client, Wallet, Obi, Message, Coin, Transaction, Fee } = require('../../src')

const grpcEndpoint = 'http://rpc-laozi-testnet2.bandchain.org:8080'
const client = new Client(grpcEndpoint)

// This example demonstrates how to query price data from
// Band's standard dataset
async function exampleGetReferenceData() {
  const rate = await client.getReferenceData(['BTC/USD', 'ETH/BTC'], 3, 6)
  return rate
}

async function exampleSendBlockTransaction() {
  const { PrivateKey } = Wallet
  const mnemonic = 'test'
  const privateKey = PrivateKey.fromMnemonic(mnemonic)
  const pubkey = privateKey.toPubkey()
  const sender = pubkey.toAddress().toAccBech32()
  const obi = new Obi('{symbols:[string],multiplier:u64}/{rates:[u64]}')
  const calldata = obi.encodeInput({ symbols: ['ETH'], multiplier: 100 })
  let coin = new Coin()
  coin.setDenom('uband')
  coin.setAmount('10')

  const requestMessage = new Message.MsgRequestData(
    37,
    calldata,
    4,
    3,
    'BandProtocol',
    [coin],
    sender,
    50000,
    200000, 
  )
  const fee = new Fee()
  fee.setAmountList([coin])

  const chainId = await client.getChainId()
  const txn = new Transaction()
  txn.withMessages(requestMessage.toAny())
  await txn.withSender(client, sender)
  txn.withChainId(chainId)
  txn.withGas(2000000)
  txn.withFee(fee)
  txn.withMemo('')

  const signDoc = await txn.getSignDoc(pubkey)
  const signature = privateKey.sign(signDoc)
  const txRawBytes = txn.getTxData(signature, pubkey)

  const sendTx = await client.sendTxBlockMode(txRawBytes)

  return sendTx
}

;(async () => {
  console.log(await exampleGetReferenceData())
  console.log(await exampleSendBlockTransaction())
})()
