import { MAX_MEMO_CHARACTERS } from './constant'
import {
  EmptyMsgError,
  NotIntegerError,
  UndefinedError,
  ValueTooLargeError,
} from './error'

import {
  TxBody,
  ModeInfo,
  SignerInfo,
  AuthInfo,
  SignDoc,
  TxRaw,
} from '../proto/cosmos/tx/v1beta1/tx_pb'
import { SignMode } from '../proto/cosmos/tx/signing/v1beta1/signing_pb'
import { Any } from 'google-protobuf/google/protobuf/any_pb'
import { Fee } from '../proto/cosmos/tx/v1beta1/tx_pb'
import { PublicKey } from 'wallet'
// import { PrivateKey } from 'wallet'
export default class Transaction {
  msgs: Array<Any> = []
  accountNum?: number
  sequence?: number
  chainID?: string
  fee: Fee = new Fee()
  gas: number = 200000
  memo: string = ''

  withMessages(...msg: Array<Any>): Transaction {
    this.msgs.push(...msg)
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

  withChainID(chainID: string): Transaction {
    this.chainID = chainID
    return this
  }

  withFee(fee: Fee): Transaction {
    this.fee = fee
    return this
  }

  withGas(gas: number): Transaction {
    if (!Number.isInteger(gas)) {
      throw new NotIntegerError('gas is not an integer')
    }
    this.gas = gas
    return this
  }

  withMemo(memo: string): Transaction {
    if (memo.length > MAX_MEMO_CHARACTERS) {
      throw new ValueTooLargeError('memo is too large.')
    }
    this.memo = memo
    return this
  }

  private getInfo(publicKey: PublicKey) {
    let txBody = new TxBody()
    txBody.setMessagesList(this.msgs)
    txBody.setMemo(this.memo)
    let txBodyBytes = txBody.serializeBinary()

    let modeInfo = new ModeInfo()
    let modeSingle = new ModeInfo.Single()
    modeSingle.setMode(SignMode.SIGN_MODE_DIRECT)
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
    if (this.msgs.length == 0) {
      throw new EmptyMsgError('message is empty')
    }

    if (this.accountNum == null) {
      throw new UndefinedError('accountNum should be defined')
    }

    if (this.sequence == null) {
      throw new UndefinedError('sequence should be defined')
    }

    if (this.chainID == null) {
      throw new UndefinedError('chainID should be defined')
    }

    const infoBytes = this.getInfo(publicKey)

    let signDoc = new SignDoc()
    signDoc.setBodyBytes(infoBytes[0])
    signDoc.setAuthInfoBytes(infoBytes[1])
    signDoc.setChainId(this.chainID)
    signDoc.setAccountNumber(this.accountNum)
    return signDoc.serializeBinary()
  }

  getTxData(signature: Uint8Array, publicKey: PublicKey) {
    const infoBytes = this.getInfo(publicKey)

    let txRaw = new TxRaw()
    txRaw.setBodyBytes(infoBytes[0])
    txRaw.setAuthInfoBytes(infoBytes[1])
    txRaw.addSignatures(signature)
    return txRaw.serializeBinary()
  }
}
