import {
  Client,
  Wallet,
  Message,
  Coin,
  Transaction,
  Fee,
  Obi,
} from '@bandprotocol/bandchain.js'

const grpcUrl = 'https://laozi-testnet5.bandchain.org/grpc-web'
const client = new Client(grpcUrl)

const { PrivateKey, Ledger } = Wallet
const mnemonic = 'test'
const privateKey = PrivateKey.fromMnemonic(mnemonic)
const pubketWallet = privateKey.toPubkey()
const sender = pubketWallet.toAddress().toAccBech32()

export const getAccBalance = async () => {
  const response = await client.getAllBalances(
    'band1mrdmxkhtr3rgfzfgrkxy5pvjtvnm5qq0my5m0x',
  )
  return response
}

export const createMsgCreateDataSource = async (code: any) => {
  let feeCoin = new Coin()
  feeCoin.setDenom('uband')
  feeCoin.setAmount('1000')

  const msg = new Message.MsgCreateDataSource(
    'Test DS',
    Buffer.from(code).toString('base64'),
    sender,
    sender,
    sender,
    [],
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
    .withChainId('band-laozi-testnet5')
    .withFee(fee)

  // Step 4 sign the transaction
  const txSignData = tx.getSignDoc(pubketWallet)
  const signature = privateKey.sign(txSignData)
  const signedTx = tx.getTxData(signature, pubketWallet)

  // Step 5 send the transaction
  const response = await client.sendTxBlockMode(signedTx)

  return response
}

export const createMsgEditDataSource = async (
  code: string | ArrayBuffer | null | undefined,
  id: string,
) => {
  const feeCoin = new Coin()
  feeCoin.setDenom('uband')
  feeCoin.setAmount('100')

  const msg = new Message.MsgEditDataSource(
    parseInt(id),
    sender,
    sender,
    sender,
    [feeCoin],
    undefined,
    undefined,
    Buffer.from(code ? code : '[do-not-modify]'),
  )

  const fee = new Fee()
  fee.setAmountList([feeCoin])
  fee.setGasLimit(80000)

  const account = await client.getAccount(sender)

  const tx = new Transaction()
    .withMessages(msg)
    .withChainId('band-laozi-testnet5')
    .withFee(fee)

  const txn = await tx
    .withSequence(account.sequence)
    .withAccountNum(account.accountNumber)
    .withSender(client, sender)

  // Step 4 sign the transaction
  const txSignData = txn.getSignDoc(pubketWallet)
  const signature = privateKey.sign(txSignData)
  const signedTx = txn.getTxData(signature, pubketWallet)

  // Step 5 send the transaction
  const response = await client.sendTxBlockMode(signedTx)
  console.log(response)
  return response
}

export async function createOracleScript(code: any) {
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

  const signDoc = txn.getSignDoc(pubketWallet)
  const signature = privateKey.sign(signDoc)

  const txRawBytes = txn.getTxData(signature, pubketWallet)
  const sendTx = await client.sendTxBlockMode(txRawBytes)

  return sendTx
}

export async function editOracleScript(
  code: string | ArrayBuffer | null | undefined,
  osId: string,
) {
  let feeCoin = new Coin()
  feeCoin.setDenom('uband')
  feeCoin.setAmount('1000')

  // Step 2.2: Create an oracle request message
  // Change Owner
  const requestMessage = new Message.MsgEditOracleScript(
    parseInt(osId),
    'band1jrhuqrymzt4mnvgw8cvy3s9zhx3jj0dq30qpte', // owner
    sender,
    'Change From Example',
    'Add Description',
    '[do-not-modify]',
    '[do-not-modify]',
    Buffer.from(code ? code : '[do-not-modify]'),
  )

  const fee = new Fee()
  fee.setAmountList([feeCoin])
  fee.setGasLimit(700000)
  const chainId = await client.getChainId()
  const account = await client.getAccount(sender)

  const txn = new Transaction()
  txn.withMessages(requestMessage)
  txn.withChainId(chainId)
  txn.withFee(fee)
  txn.withMemo('')
  txn.withSequence(account.sequence)
  txn.withAccountNum(account.accountNumber)
  txn.withSender(client, sender)

  const signDoc = txn.getSignDoc(pubketWallet)
  const signature = privateKey.sign(signDoc)

  const txRawBytes = txn.getTxData(signature, pubketWallet)
  const sendTx = await client.sendTxBlockMode(txRawBytes)

  return sendTx
}

export async function makeRequest() {
  const { Ledger } = Wallet

  try {
    const ledger = await Ledger.connectLedgerWeb()
    const { bech32_address, pubKey } = await ledger.getPubKeyAndBech32Address()

    // Step 2.1: Prepare oracle request's properties
    const obi = new Obi('{symbols:[string],multiplier:u64}/{rates:[u64]}')
    const calldata = obi.encodeInput({ symbols: ['BTC'], multiplier: 1000 })

    const oracleScriptId = 37
    const askCount = 2
    const minCount = 1
    const clientId = 'from_bandchain.js'

    const feeLimit = new Coin()
    feeLimit.setDenom('uband')
    feeLimit.setAmount('1000')

    // Step 2.2: Create an oracle request message
    const requestMessage = new Message.MsgRequestData(
      oracleScriptId,
      calldata,
      askCount,
      minCount,
      clientId,
      bech32_address,
      [feeLimit],
      30000,
      50000,
    )

    let feeCoin = new Coin()
    feeCoin.setDenom('uband')
    feeCoin.setAmount('0')

    // Step 3.1: Construct a transaction
    const fee = new Fee()
    fee.setAmountList([feeCoin])
    fee.setGasLimit(300000)

    const chainId = await client.getChainId()
    const txn = new Transaction()
      .withMessages(requestMessage)
      .withChainId(chainId)
      .withFee(fee)
      .withMemo('Test Send Oracle Request from Babybun')
    await txn.withSender(client, bech32_address)

    console.log(Buffer.from(txn.getSignMessage().buffer).toString())

    const signature = await ledger.sign(txn)

    console.log(signature)

    const signedTx = await txn.getTxData(signature, pubKey, 127)

    const response = await client.sendTxBlockMode(signedTx)

    console.log(response)

    return response
  } catch (error) {
    console.log(error)
    return
  }
}

interface SendCoinProps {
  amount: string
  receiver: string
}
interface Address {
  bech32_address: string
  pubKey: Wallet.PublicKey
}
export const sendCoinWithLedger = async (
  { amount, receiver }: SendCoinProps,
  ledger: Wallet.Ledger,
  address: Address,
) => {
  const { bech32_address, pubKey } = address
  const sendAmount = new Coin()
  sendAmount.setDenom('uband')
  sendAmount.setAmount(amount)

  const msg = new Message.MsgSend(bech32_address, receiver, [sendAmount])
  const chainId = await client.getChainId()

  let feeCoin = new Coin()
  feeCoin.setDenom('uband')
  feeCoin.setAmount('1000')

  const fee = new Fee()
  fee.setAmountList([feeCoin])
  fee.setGasLimit(1000000)

  const tx = new Transaction()
    .withMessages(msg)
    .withChainId(chainId)
    .withFee(fee)
    .withMemo('')

  await tx.withSender(client, bech32_address)

  const signature = await ledger.sign(tx)

  const signedTx = tx.getTxData(signature, pubKey, 127)

  const response = await client.sendTxBlockMode(signedTx)

  return response
}

export async function getFaucet() {
  const BAND_FAUCET_ENDPOINT = 'https://laozi-testnet5.bandchain.org/faucet'
  const body = {
    address: 'band1p46uhvdk8vr829v747v85hst3mur2dzlmlac7f',
    amount: '10',
  }

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  }

  // See https://docs.bandchain.org/technical-specifications/band-endpoints.html#laozi-testnet-5
  let response = await fetch(`${BAND_FAUCET_ENDPOINT}`, options)

  console.log(response)
}
