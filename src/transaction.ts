import { MAX_MEMO_CHARACTERS } from './constant'
import {
  EmptyMsgError,
  NotIntegerError,
  UndefinedError,
  ValueTooLargeError,
  NotFoundError,
} from './error'
import { PublicKey } from './wallet'
import Client from './client'
import { BaseMsg } from './message'
import { parseCoin, sortAndStringify } from './utils'

import {
  TxBody,
  ModeInfo,
  SignerInfo,
  AuthInfo,
  SignDoc,
  TxRaw,
} from '../proto/cosmos/tx/v1beta1/tx_pb'
import {
  SignMode,
  SignModeMap,
} from '../proto/cosmos/tx/signing/v1beta1/signing_pb'
import { Any } from 'google-protobuf/google/protobuf/any_pb'
import { Fee } from '../proto/cosmos/tx/v1beta1/tx_pb'

export default class Transaction {
  msgs: Array<BaseMsg> = []
  accountNum?: number
  sequence?: number
  chainId?: string
  fee: Fee = new Fee()
  memo: string = ''

  withMessages(...msg: Array<BaseMsg>): Transaction {
    this.msgs.push(...msg)

    return this
  }

  async withSender(client: Client, sender: string): Promise<Transaction> {
    if (this.msgs.length === 0) {
      throw new EmptyMsgError(
        'Message is empty, please use withMessages at least 1 message.',
      )
    }

    let account = await client.getAccount(sender)
    if (!account) {
      throw new NotFoundError(`Account doesn't exist.`)
    }

    this.accountNum = account.accountNumber
    this.sequence = account.sequence

    return this
  }

  withAccountNum(accountNum: number): Transaction {
    if (!Number.isInteger(accountNum)) {
      throw new NotIntegerError('accountNum is not an integer')
    }
    this.accountNum = accountNum

    return this
  }

  withSequence(sequence: number): Transaction {
    if (!Number.isInteger(sequence)) {
      throw new NotIntegerError('sequence is not an integer')
    }
    this.sequence = sequence

    return this
  }

  withChainId(chainId: string): Transaction {
    this.chainId = chainId

    return this
  }

  withFee(fee: Fee): Transaction {
    this.fee = fee
    return this
  }

  withMemo(memo: string): Transaction {
    if (memo.length > MAX_MEMO_CHARACTERS) {
      throw new ValueTooLargeError('memo is too large.')
    }
    this.memo = memo

    return this
  }

  private getInfo(
    publicKey: PublicKey,
    signMode: SignModeMap[keyof SignModeMap],
  ): [Uint8Array, Uint8Array] {
    let txBody = new TxBody()
    txBody.setMessagesList(this.msgs.map((msg) => msg.toAny()))
    txBody.setMemo(this.memo)
    let txBodyBytes = txBody.serializeBinary()

    let modeInfo = new ModeInfo()
    let modeSingle = new ModeInfo.Single()
    modeSingle.setMode(signMode)
    modeInfo.setSingle(modeSingle)

    let publicKeyAny = new Any()
    publicKeyAny.pack(
      publicKey.toPubkeyProto().serializeBinary(),
      'cosmos.crypto.secp256k1.PubKey',
      '/',
    )

    let signerInfo = new SignerInfo()
    signerInfo.setModeInfo(modeInfo)
    signerInfo.setSequence(this.sequence)
    signerInfo.setPublicKey(publicKeyAny)

    let authInfo = new AuthInfo()
    authInfo.addSignerInfos(signerInfo)
    authInfo.setFee(this.fee)
    let authInfoBytes = authInfo.serializeBinary()

    return [txBodyBytes, authInfoBytes]
  }

  getSignDoc(publicKey: PublicKey): Uint8Array {
    if (this.msgs.length === 0) {
      throw new EmptyMsgError('message is empty')
    }
    if (this.accountNum === undefined) {
      throw new UndefinedError('accountNum should be defined')
    }
    if (this.sequence === undefined) {
      throw new UndefinedError('sequence should be defined')
    }
    if (this.chainId === undefined) {
      throw new UndefinedError('chainId should be defined')
    }

    const [txBodyBytes, authInfoBytes] = this.getInfo(
      publicKey,
      SignMode.SIGN_MODE_DIRECT,
    )

    let signDoc = new SignDoc()
    signDoc.setBodyBytes(txBodyBytes)
    signDoc.setAuthInfoBytes(authInfoBytes)
    signDoc.setChainId(this.chainId)
    signDoc.setAccountNumber(this.accountNum)

    return signDoc.serializeBinary()
  }

  getTxData(
    signature: Uint8Array,
    publicKey: PublicKey,
    signMode: SignModeMap[keyof SignModeMap] = SignMode.SIGN_MODE_DIRECT,
  ): Uint8Array {
    const [txBodyBytes, authInfoBytes] = this.getInfo(publicKey, signMode)

    let txRaw = new TxRaw()
    txRaw.setBodyBytes(txBodyBytes)
    txRaw.setAuthInfoBytes(authInfoBytes)
    txRaw.addSignatures(signature)

    return txRaw.serializeBinary()
  }

  getSignMessage(): Uint8Array {
    return Buffer.from(
      sortAndStringify({
        account_number: this.accountNum.toString(),
        chain_id: this.chainId,
        fee: {
          amount: this.fee.getAmountList().map(parseCoin),
          gas: this.fee.getGasLimit().toString(),
        },
        memo: this.memo,
        msgs: this.msgs.map((msg) => msg.toJSON()),
        sequence: this.sequence.toString(),
      }),
    )
  }
}
