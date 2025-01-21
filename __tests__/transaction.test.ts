import Transaction from '../src/transaction'
import { MsgRequestData } from '../src/message'
import { Coin } from '../codegen/cosmos/base/v1beta1/coin_pb'
import { Fee } from '../codegen/cosmos/tx/v1beta1/tx_pb'
import { PrivateKey } from '../src/wallet'

describe('Transaction', () => {
  const mnemonic = 'test'
  const privateKey = PrivateKey.fromMnemonic(mnemonic)
  const pubkey = privateKey.toPubkey()
  const sender = pubkey.toAddress().toAccBech32()
  const calldata = Buffer.from('000000034254430000000000000001', 'hex')
  const clientId = 'test'
  const coin = new Coin()
  coin.setDenom('uband')
  coin.setAmount('100')
  const fee = new Fee()
  fee.addAmount(coin)
  fee.setGasLimit(2000000)
  const message = new MsgRequestData(
    1,
    calldata,
    3,
    2,
    clientId,
    sender,
    [coin],
    20000,
    20000,
  )
  const acountNum = 20
  const sequence = 100
  const chainId = 'bandchain'
  const gas = 2000000

  it('create transaction object successfully', () => {
    const tx = new Transaction()
    tx.withMessages(message)
    tx.withAccountNum(acountNum)
    tx.withSequence(sequence)
    tx.withChainId(chainId)
    tx.withFee(fee)
    tx.withMemo('')

    expect(tx.msgs.length).toEqual(1)
    expect(tx.accountNum).toEqual(acountNum)
    expect(tx.sequence).toEqual(sequence)
    expect(tx.chainId).toEqual(chainId)
    expect(tx.fee).toEqual(fee)
    expect(tx.fee.getGasLimit()).toEqual(gas)
    expect(tx.memo).toEqual('')
  })

  it('creating transaction object error checking', () => {
    const tx = new Transaction()
    expect(() => {
      tx.withAccountNum(100.5)
    }).toThrowError('accountNum is not an integer')

    expect(() => {
      tx.withSequence(100.5)
    }).toThrowError('sequence is not an integer')

    expect(() => {
      tx.withMemo(
        'This is the longest memo in the world This is the longest memo in the world This is the longest memo in the world This is the longest memo in the world This is the longest memo in the world This is the longest memo in the world This is the longest memo in the world This is the longest memo in the world This is the longest memo in the world This is the longest memo in the world This is the longest memo in the world This is the longest memo in the world This is the longest memo in the world',
      )
    }).toThrowError('memo is too large')
  })

  it('getSignDoc successfully', () => {
    const tx = new Transaction()
    tx.withMessages(message)
    tx.withAccountNum(acountNum)
    tx.withSequence(sequence)
    tx.withChainId(chainId)
    tx.withFee(fee)
    tx.withMemo('')

    const signDoc = tx.getSignDoc(pubkey)
    expect(Buffer.from(signDoc).toString('hex')).toEqual(
      Buffer.from(signDoc).toString('hex'),
    )
  })

  it('getSignDoc error checking', () => {
    let tx = new Transaction()
    expect(() => tx.getSignDoc(pubkey)).toThrowError('message is empty')

    tx = tx.withMessages(message)
    expect(() => tx.getSignDoc(pubkey)).toThrowError(
      'accountNum should be defined',
    )

    tx = tx.withAccountNum(100)
    expect(() => tx.getSignDoc(pubkey)).toThrowError(
      'sequence should be defined',
    )

    tx = tx.withSequence(30)
    expect(() => tx.getSignDoc(pubkey)).toThrowError(
      'chainId should be defined',
    )
  })

  it('getSignMessage successfully', () => {
    const tx = new Transaction()
    tx.withMessages(message)
    tx.withAccountNum(acountNum)
    tx.withSequence(sequence)
    tx.withChainId(chainId)
    tx.withFee(fee)
    tx.withMemo('')

    const signMessage = tx.getSignMessage()
    expect(Buffer.from(signMessage).toString('utf-8')).toEqual(
      `{\"account_number\":\"20\",\"chain_id\":\"bandchain\",\"fee\":{\"amount\":[{\"amount\":\"100\",\"denom\":\"uband\"}],\"gas\":\"2000000\"},\"memo\":\"\",\"msgs\":[{\"type\":\"oracle/Request\",\"value\":{\"ask_count\":\"3\",\"calldata\":\"AAAAA0JUQwAAAAAAAAAB\",\"client_id\":\"test\",\"execute_gas\":\"20000\",\"fee_limit\":[{\"amount\":\"100\",\"denom\":\"uband\"}],\"min_count\":\"2\",\"oracle_script_id\":\"1\",\"prepare_gas\":\"20000\",\"sender\":\"band18p27yl962l8283ct7srr5l3g7ydazj07dqrwph\"}}],\"sequence\":\"100\"}`,
    )
  })

  it('getTxData successfully', () => {
    const tx = new Transaction()
    tx.withMessages(message)
    tx.withAccountNum(acountNum)
    tx.withSequence(sequence)
    tx.withChainId(chainId)
    tx.withFee(fee)
    tx.withMemo('')

    const signDoc = tx.getSignDoc(pubkey)
    const signature = privateKey.sign(signDoc)
    const txRawBytes = tx.getTxData(signature, pubkey)

    expect(Buffer.from(txRawBytes).toString('hex')).toEqual(
      Buffer.from(txRawBytes).toString('hex'),
    )
  })
})
