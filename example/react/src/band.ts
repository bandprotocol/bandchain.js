import {
  Client,
  Wallet,
  Message,
  Coin,
  Transaction,
  Fee,
} from '@bandprotocol/bandchain.js'

const grpcUrl = 'https://laozi-testnet4.bandchain.org/grpc-web'
const client = new Client(grpcUrl)

const { PrivateKey } = Wallet
const mnemonic = 'test'
const privateKey = PrivateKey.fromMnemonic(mnemonic)
const pubkey = privateKey.toPubkey()
const sender = pubkey.toAddress().toAccBech32()

export const createMsgCreateDataSource = async (code: any) => {

  let feeCoin = new Coin()
  feeCoin.setDenom('uband')
  feeCoin.setAmount('1000')

  const msg = new Message.MsgCreateDataSource(
    'Test DS',
    Buffer.from(code).toString('base64'),
    [],
    sender,
    sender,
    sender,
    'Test DS Description',
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

  return response
}

export const createMsgEditDataSource = async (code: any, dsId: string) => {

  let feeCoin = new Coin()
  feeCoin.setDenom('uband')
  feeCoin.setAmount('1000')

  const msg = new Message.MsgEditDataSource(
    parseInt(dsId),
    Buffer.from(code).toString('base64'),
    [],
    sender,
    sender,
    sender,
    'Test Edit DS',
    'Test Edit DS Description',
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
  return response
}

export async function createOracleScript(code: any) {

  let coin = new Coin()
  coin.setDenom('uband')
  coin.setAmount('1000000')

  let feeCoin = new Coin()
  feeCoin.setDenom('uband')
  feeCoin.setAmount('1000')

  // Step 2.2: Create an oracle request message
  const requestMessage = new Message.MsgCreateOracleScript(
    'Oracle Script Name',
    Buffer.from(code),
    sender,
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


export async function editOracleScript(code: any, osId: string) {
  let coin = new Coin()
  coin.setDenom('uband')
  coin.setAmount('1000000')

  let feeCoin = new Coin()
  feeCoin.setDenom('uband')
  feeCoin.setAmount('1000')

  // Step 2.2: Create an oracle request message
  const requestMessage = new Message.MsgEditOracleScript(
    parseInt(osId),
    Buffer.from(code),
    sender,
    sender,
    'Edit Oracle Script Name',
    'Edit Oracle Script Description',
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