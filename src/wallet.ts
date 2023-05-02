import * as bip39 from 'bip39'
import { BIP32Factory } from 'bip32'
import { bech32 } from 'bech32'
import secp256k1, { signatureImport } from 'secp256k1'
import crypto from 'crypto'
import ECPairFactory from 'ecpair'
import * as ecc from 'tiny-secp256k1'
import CosmosApp, { LedgerResponse, AppInfo } from 'ledger-cosmos-js'
import Transaction from './transaction'
import { isBip44, bip44ToArray, promiseTimeout } from './helpers'
import TransportWebUSB from '@ledgerhq/hw-transport-webusb'
import TransportNodeHid from '@ledgerhq/hw-transport-node-hid'
import TransportWebHid from '@ledgerhq/hw-transport-webhid'
import {
  UnsuccessfulCallError,
  CreateError,
  DecodeError,
  ValueError,
} from './error'
import { PubKey as PublicKeyProto } from '../proto/cosmos/crypto/secp256k1/keys_pb'

const ECPair = ECPairFactory(ecc)
const bip32 = BIP32Factory(ecc)

const BECH32_PUBKEY_ACC_PREFIX = 'bandpub'
const BECH32_PUBKEY_VAL_PREFIX = 'bandvaloperpub'
const BECH32_PUBKEY_CONS_PREFIX = 'bandvalconspub'

const BECH32_ADDR_ACC_PREFIX = 'band'
const BECH32_ADDR_VAL_PREFIX = 'bandvaloper'
const BECH32_ADDR_CONS_PREFIX = 'bandvalcons'

const DEFAULT_DERIVATION_PATH = "m/44'/494'/0'/0/0"
const DEFAULT_DERIVATION_PATH_LEDGER = "m/44'/118'/0'/0/0"

enum ConnectType {
  Node,
  Web,
}

export class Ledger {
  private cosmosApp?: CosmosApp
  public hidPath: string = DEFAULT_DERIVATION_PATH_LEDGER
  public disconnect: () => Promise<void> = () =>
    new Promise((resolve) => resolve())

  private constructor() {}

  static async connectLedgerWeb(
    hidPath: string = DEFAULT_DERIVATION_PATH_LEDGER,
  ): Promise<Ledger> {
    return Ledger.connect(hidPath, ConnectType.Web)
  }

  static async connectLedgerNode(
    hidPath: string = DEFAULT_DERIVATION_PATH_LEDGER,
  ): Promise<Ledger> {
    return Ledger.connect(hidPath, ConnectType.Node)
  }

  private static async connect(
    hidPath: string,
    connectType: ConnectType,
  ): Promise<Ledger> {
    if (!isBip44(hidPath)) throw Error('Not BIP 44')

    let ledger = new Ledger()
    ledger.hidPath = hidPath
    await ledger._connect(connectType)

    return ledger
  }

  private async _connect(connectType: ConnectType): Promise<void> {
    if (this.cosmosApp) return

    let transport: TransportNodeHid | TransportWebUSB | TransportWebHid
    switch (connectType) {
      case ConnectType.Node:
        const {
          default: TransportNodeHid,
        } = require('@ledgerhq/hw-transport-node-hid')
        transport = await TransportNodeHid.create(3)

        break
      case ConnectType.Web:
        if (navigator.usb) {
          const {
            default: TransportWebUSB,
          } = require('@ledgerhq/hw-transport-webusb')
          transport = await TransportWebUSB.create(3)
        } else {
          const {
            default: TransportWebHid,
          } = require('@ledgerhq/hw-transport-webhid')
          transport = await TransportWebHid.create(3)
        }

        break
    }

    const ledgerCosmosApp = new CosmosApp(transport)
    this.cosmosApp = ledgerCosmosApp
    this.disconnect = () => transport.close()

    await this.isCosmosAppOpen()
  }

  checkLedgerError(response?: LedgerResponse, errorOnUndefined?: string): void {
    if (!response) {
      if (errorOnUndefined) throw new Error(errorOnUndefined)
      return
    }

    switch (response.error_message) {
      case `No errors`:
        return
      default:
        throw new Error(response.error_message)
    }
  }

  async isCosmosAppOpen(): Promise<boolean> {
    const response = await promiseTimeout(this.cosmosApp!.appInfo(), 5000)
    this.checkLedgerError(response, `Can't connect with CosmosApp`)

    const { appName } = response!
    if (appName.toLowerCase() !== 'cosmos')
      throw new Error(`Please close ${appName} and open the Cosmos app.`)

    return true
  }

  async appInfo(): Promise<AppInfo> {
    const response = await promiseTimeout(this.cosmosApp!.appInfo(), 5000)
    this.checkLedgerError(response, `Can't connect with CosmosApp`)

    return response!
  }

  async sign(transaction: Transaction): Promise<Buffer> {
    const response = await this.cosmosApp!.sign(
      bip44ToArray(this.hidPath),
      transaction.getSignMessage().toString(),
    )
    this.checkLedgerError(response)
    return Buffer.from(signatureImport(response.signature))
  }

  async getPubKeyAndBech32Address(): Promise<{
    bech32_address: string
    pubKey: PublicKey
  }> {
    const response = await promiseTimeout(
      this.cosmosApp!.getAddressAndPubKey(bip44ToArray(this.hidPath), 'band'),
      5000,
    )
    this.checkLedgerError(response, `Can't connect with CosmosApp`)
    return {
      bech32_address: response!.bech32_address,
      pubKey: PublicKey.fromHex(response!.compressed_pk.toString('hex')),
    }
  }
}

export class PrivateKey {
  private signingKey: Buffer

  private constructor(signingKey: Buffer) {
    this.signingKey = signingKey
  }

  static generate(path = DEFAULT_DERIVATION_PATH): [string, PrivateKey] {
    const phrase = bip39.generateMnemonic(256)

    return [phrase, this.fromMnemonic(phrase, path)]
  }

  static fromMnemonic(
    words: string,
    path = DEFAULT_DERIVATION_PATH,
  ): PrivateKey {
    const seed = bip39.mnemonicToSeedSync(words)
    const node = bip32.fromSeed(seed)
    const child = node.derivePath(path)

    if (!child.privateKey) throw new CreateError('Cannot create private key')
    const ecpair = ECPair.fromPrivateKey(child.privateKey, {
      compressed: false,
    })

    if (!ecpair.privateKey) throw new CreateError('Cannot create private key')

    return new PrivateKey(ecpair.privateKey)
  }

  static fromHex(priv: string): PrivateKey {
    return new PrivateKey(Buffer.from(priv, 'hex'))
  }

  toHex(): string {
    return this.signingKey.toString('hex')
  }

  toPubkey(): PublicKey {
    // Create a public key in compressed format
    const pubKeyByte = secp256k1.publicKeyCreate(this.signingKey)

    return PublicKey.fromHex(Buffer.from(pubKeyByte).toString('hex'))
  }

  sign(msg: Uint8Array): Buffer {
    const hash = crypto.createHash('sha256').update(msg).digest('hex')
    const buf = Buffer.from(hash, 'hex')
    const { signature } = secp256k1.ecdsaSign(buf, this.signingKey)

    return Buffer.from(signature)
  }
}

export class PublicKey {
  private verifyKey: Buffer

  private constructor(verifyKey: Buffer) {
    this.verifyKey = verifyKey
  }

  private static fromBech32(bech: string, _prefix: string): PublicKey {
    const { prefix, words } = bech32.decode(bech)
    if (prefix != _prefix) throw new ValueError('Invalid bech32 prefix')
    if (words.length === 0) throw new DecodeError('Cannot decode bech32')

    return new PublicKey(Buffer.from(bech32.fromWords(words).slice(5)))
  }

  static fromHex(pub: string): PublicKey {
    return new PublicKey(Buffer.from(pub, 'hex'))
  }

  static fromAccBech32(bech: string): PublicKey {
    return this.fromBech32(bech, BECH32_PUBKEY_ACC_PREFIX)
  }

  static fromValBech32(bech: string): PublicKey {
    return this.fromBech32(bech, BECH32_PUBKEY_VAL_PREFIX)
  }

  static fromConsBech32(bech: string): PublicKey {
    return this.fromBech32(bech, BECH32_PUBKEY_CONS_PREFIX)
  }

  private toBech32(prefix: string): string {
    const hex = Buffer.concat([
      Buffer.from('eb5ae98721', 'hex'),
      this.verifyKey,
    ])
    const words = bech32.toWords(Buffer.from(hex))
    if (words.length === 0)
      throw new UnsuccessfulCallError('Unsuccessful bech32.toWords call')

    return bech32.encode(prefix, words)
  }

  toPubkeyProto(): PublicKeyProto {
    const publicKeyProto = new PublicKeyProto()
    publicKeyProto.setKey(this.verifyKey)

    return publicKeyProto
  }

  toAccBech32(): string {
    return this.toBech32(BECH32_PUBKEY_ACC_PREFIX)
  }

  toValBech32(): string {
    return this.toBech32(BECH32_PUBKEY_VAL_PREFIX)
  }

  toConsBech32(): string {
    return this.toBech32(BECH32_PUBKEY_CONS_PREFIX)
  }

  toHex(): string {
    return this.verifyKey.toString('hex')
  }

  toAddress(): Address {
    const hash = crypto.createHash('sha256').update(this.verifyKey).digest()

    return Address.fromHex(
      crypto.createHash('ripemd160').update(hash).digest('hex'),
    )
  }

  verify(msg: Buffer, sig: Buffer): boolean {
    const hash = crypto.createHash('sha256').update(msg).digest('hex')
    const buf = Buffer.from(hash, 'hex')

    return secp256k1.ecdsaVerify(sig, buf, this.verifyKey)
  }
}

export class Address {
  private addr: Buffer

  private constructor(addr: Buffer) {
    this.addr = addr
  }

  private static fromBech32(bech: string, _prefix: string): Address {
    const { prefix, words } = bech32.decode(bech)
    if (prefix != _prefix) throw new ValueError('Invalid bech32 prefix')
    if (words.length === 0) throw new DecodeError('Cannot decode bech32')

    return new Address(Buffer.from(bech32.fromWords(words)))
  }

  static fromHex(hex: string): Address {
    return new Address(Buffer.from(hex, 'hex'))
  }

  static fromAccBech32(bech: string): Address {
    return this.fromBech32(bech, BECH32_ADDR_ACC_PREFIX)
  }

  static fromValBech32(bech: string): Address {
    return this.fromBech32(bech, BECH32_ADDR_VAL_PREFIX)
  }

  static fromConsBech32(bech: string): Address {
    return this.fromBech32(bech, BECH32_ADDR_CONS_PREFIX)
  }

  private toBech32(prefix: string): string {
    const words = bech32.toWords(this.addr)
    if (words.length === 0)
      throw new UnsuccessfulCallError('Unsuccessful bech32.toWords call')

    return bech32.encode(prefix, words)
  }

  toAccBech32(): string {
    return this.toBech32(BECH32_ADDR_ACC_PREFIX)
  }

  toValBech32(): string {
    return this.toBech32(BECH32_ADDR_VAL_PREFIX)
  }

  toConsBech32(): string {
    return this.toBech32(BECH32_ADDR_CONS_PREFIX)
  }

  toHex(): string {
    return this.addr.toString('hex')
  }
}
