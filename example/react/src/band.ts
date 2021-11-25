import {
  Client,
  Wallet,
  Obi,
  Message,
  Coin,
  Transaction,
  Fee,
} from '@bandprotocol/bandchain.js'
import moment from 'moment'

const grpcUrl = 'https://laozi-testnet4.bandchain.org/grpc-web'
const client = new Client(grpcUrl)

const { PrivateKey } = Wallet
const mnemonic = 'test'
const privateKey = PrivateKey.fromMnemonic(mnemonic)
const pubkey = privateKey.toPubkey()
const sender = pubkey.toAddress().toAccBech32()

export const createMsgCreateDataSource = async () => {
  const executableCode = 'test add ds'

  // Here we use different message type, which is MsgSend
  const owner = 'band18e55d9xyrgyg3tk72zmg7s92uu8sd95jzgj73a'
  const treasury = 'band18e55d9xyrgyg3tk72zmg7s92uu8sd95jzgj73a'

  let feeCoin = new Coin()
  feeCoin.setDenom('uband')
  feeCoin.setAmount('1000')

  const msg = new Message.MsgCreateDataSource(
    'Test DS',
    executableCode,
    [],
    treasury,
    owner,
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
