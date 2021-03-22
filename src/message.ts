import { Coin } from './data'
import { Address } from './wallet'
import { MAX_DATA_SIZE } from './constant'
import {
  NegativeIntegerError,
  NotIntegerError,
  ValueTooLargeError,
  InsufficientCoinError,
  ValueError,
  InvalidDataSourceNameError,
  InvalidDataSourcePathError,
  InvalidDataSourceFileError,
  InvalidOracleScriptNameError,
  InvalidOracleScriptPathError,
  InvalidOracleScriptFileError,
} from './error'
import fs from 'fs'

export abstract class Msg {
  abstract asJson(): { type: string; value: any }
  abstract getSender(): Address
  abstract validate(): boolean
}
export class MsgRequest extends Msg {
  oracleScriptID: number
  calldata: Buffer
  askCount: number
  minCount: number
  clientID: string
  sender: Address

  constructor(
    oracleScriptID: number,
    calldata: Buffer,
    askCount: number,
    minCount: number,
    clientID: string,
    sender: Address,
  ) {
    super()

    this.oracleScriptID = oracleScriptID
    this.calldata = calldata
    this.askCount = askCount
    this.minCount = minCount
    this.clientID = clientID
    this.sender = sender
  }

  asJson() {
    return {
      type: 'oracle/Request',
      value: {
        ask_count: this.askCount.toString(),
        calldata: this.calldata.toString('base64'),
        client_id: this.clientID,
        min_count: this.minCount.toString(),
        oracle_script_id: String(this.oracleScriptID),
        sender: this.sender.toAccBech32(),
      },
    }
  }

  getSender() {
    return this.sender
  }

  validate() {
    if (this.oracleScriptID <= 0)
      throw new NegativeIntegerError('oracleScriptID cannot less than zero')
    if (!Number.isInteger(this.oracleScriptID))
      throw new NotIntegerError('oracleScriptID is not an integer')
    if (this.calldata.length > MAX_DATA_SIZE)
      throw new ValueTooLargeError('too large calldata')
    if (!Number.isInteger(this.askCount))
      throw new NotIntegerError('askCount is not an integer')
    if (!Number.isInteger(this.minCount))
      throw new NotIntegerError('minCount is not an integer')
    if (this.minCount <= 0)
      throw new ValueError(`invalid minCount, got: minCount: ${this.minCount}`)
    if (this.askCount < this.minCount)
      throw new ValueError(
        `invalid askCount got: minCount: ${this.minCount}, askCount: ${this.askCount}`,
      )

    return true
  }
}

export class MsgSend extends Msg {
  fromAddress: Address
  toAddress: Address
  amount: Coin[]

  constructor(from: Address, to: Address, amount: Coin[]) {
    super()
    this.fromAddress = from
    this.toAddress = to
    this.amount = amount
  }

  asJson() {
    return {
      type: 'cosmos-sdk/MsgSend',
      value: {
        amount: this.amount.map((each) => each.asJson()),
        from_address: this.fromAddress.toAccBech32(),
        to_address: this.toAddress.toAccBech32(),
      },
    }
  }

  getSender() {
    return this.fromAddress
  }

  validate() {
    if (this.amount.length == 0) {
      throw new InsufficientCoinError('Expect at least 1 coin')
    }
    this.amount.forEach((coin) => coin.validate())
    return true
  }
}

export class MsgDelegate extends Msg {
  delegatorAddress: Address
  validatorAddress: Address
  amount: Coin

  constructor(delegator: Address, validator: Address, amount: Coin) {
    super()

    this.delegatorAddress = delegator
    this.validatorAddress = validator
    this.amount = amount
  }

  asJson() {
    return {
      type: 'cosmos-sdk/MsgDelegate',
      value: {
        amount: this.amount.asJson(),
        delegator_address: this.delegatorAddress.toAccBech32(),
        validator_address: this.validatorAddress.toValBech32(),
      },
    }
  }

  getSender() {
    return this.delegatorAddress
  }

  validate() {
    this.amount.validate()

    return true
  }
}

export class MsgCreateDataSource extends Msg {
  owner: Address
  name: string
  description: string
  script: string
  sender: Address

  constructor(
    owner: Address,
    name: string,
    description: string,
    script: string,
    sender: Address,
  ) {
    super()
    this.owner = owner
    this.name = name
    this.description = description
    this.script = script
    this.sender = sender
  }

  _replaceEmpty(placeholder: string, s?: string) {
    if (s === undefined) return placeholder
    return s
  }

  _readScript() {
    return Buffer.from(fs.readFileSync(this.script, 'utf8')).toString('base64')
  }

  asJson() {
    return {
      type: 'oracle/CreateDataSource',
      value: {
        owner: this.owner.toAccBech32(),
        name: this.name,
        description: this._replaceEmpty('TBA', this.description),
        executable: this._readScript(),
        sender: this.sender.toAccBech32(),
      },
    }
  }

  getSender() {
    return this.sender
  }

  validate() {
    if (this.name.length <= 0)
      throw new InvalidDataSourceNameError('got an empty string for the name')
    if (this.script.length <= 0)
      throw new InvalidDataSourcePathError('got an empty string for the path')
    if (this._readScript().length <= 0)
      throw new InvalidDataSourceFileError('got an empty source file')

    return true
  }
}

export class MsgEditDataSource extends Msg {
  owner: Address
  sender: Address
  dataSourceID: number
  name?: string
  description?: string
  script?: string

  constructor(
    owner: Address,
    sender: Address,
    dataSourceID: number,
    name?: string,
    description?: string,
    script?: string,
  ) {
    super()
    this.owner = owner
    this.sender = sender
    this.dataSourceID = dataSourceID
    this.name = name
    this.description = description
    this.script = script
  }

  _replaceEmpty(placeholder: string, s?: string) {
    if (s === undefined) return placeholder
    return s
  }

  _readOptionalScript() {
    if (!this.script) return Buffer.from('[do-not-modify]').toString('base64')
    return Buffer.from(fs.readFileSync(this.script, 'utf8')).toString('base64')
  }

  asJson() {
    return {
      type: 'oracle/EditDataSource',
      value: {
        data_source_id: this.dataSourceID,
        owner: this.owner.toAccBech32(),
        name: this._replaceEmpty('[do-not-modify]', this.name),
        description: this._replaceEmpty('[do-not-modify]', this.description),
        executable: this._readOptionalScript(),
        sender: this.sender.toAccBech32(),
      },
    }
  }

  getSender() {
    return this.sender
  }

  validate() {
    if (this.name !== undefined && !this.name)
      throw new InvalidDataSourceNameError('got an empty string for the name')
    if (this.script !== undefined && !this.script)
      throw new InvalidDataSourcePathError('got an empty string for the path')
    if (this.script !== undefined && this.script && !this._readOptionalScript())
      throw new InvalidDataSourceFileError('got an empty source file')

    return true
  }
}

export class MsgCreateOracleScript extends Msg {
  owner: Address
  name: string
  description?: string
  script: string
  schema?: string
  sourceCodeURL?: string
  sender: Address

  constructor(
    owner: Address,
    sender: Address,
    name: string,
    script: string,
    description?: string,
    schema?: string,
    sourceCodeURL?: string,
  ) {
    super()
    this.owner = owner
    this.sender = sender
    this.name = name
    this.script = script
    this.description = description
    this.schema = schema
    this.sourceCodeURL = sourceCodeURL
  }

  _replaceEmpty(placeholder: string, s?: string) {
    if (s === undefined) return placeholder
    return s
  }

  _readWasm() {
    return Buffer.from(fs.readFileSync(this.script, 'utf8')).toString('base64')
  }

  asJson() {
    return {
      type: 'oracle/CreateOracleScript',
      value: {
        owner: this.owner.toAccBech32(),
        name: this.name,
        description: this._replaceEmpty('TBA', this.description),
        code: this._readWasm(),
        schema: this._replaceEmpty('TBA', this.schema),
        source_code_url: this._replaceEmpty('', this.sourceCodeURL),
        sender: this.sender.toAccBech32(),
      },
    }
  }

  getSender() {
    return this.sender
  }

  validate() {
    if (this.name.length <= 0)
      throw new InvalidOracleScriptNameError('got an empty string for the name')
    if (this.script.length <= 0)
      throw new InvalidOracleScriptPathError('got an empty string for the path')
    if (this._readWasm().length <= 0)
      throw new InvalidOracleScriptFileError('got an empty wasm file')

    return true
  }
}

export class MsgEditOracleScript extends Msg {
  owner: Address
  oracleScriptID: number
  schema?: string
  sourceCodeURL?: string
  sender: Address
  name?: string
  description?: string
  script?: string

  constructor(
    owner: Address,
    sender: Address,
    oracleScriptID: number,
    schema?: string,
    sourceCodeURL?: string,
    name?: string,
    description?: string,
    script?: string,
  ) {
    super()
    this.owner = owner
    this.sender = sender
    this.oracleScriptID = oracleScriptID
    this.schema = schema
    this.sourceCodeURL = sourceCodeURL
    this.name = name
    this.description = description
    this.script = script
  }

  _replaceEmpty(placeholder: string, s?: string) {
    if (s === undefined) return placeholder
    return s
  }

  _readOptionalScript() {
    if (!this.script) return Buffer.from('[do-not-modify]').toString('base64')
    return Buffer.from(fs.readFileSync(this.script, 'utf8')).toString('base64')
  }

  asJson() {
    return {
      type: 'oracle/EditOracleScript',
      value: {
        oracle_script_id: this.oracleScriptID,
        owner: this.owner.toAccBech32(),
        name: this._replaceEmpty('[do-not-modify]', this.name),
        description: this._replaceEmpty('[do-not-modify]', this.description),
        code: this._readOptionalScript(),
        schema: this._replaceEmpty('[do-not-modify]', this.schema),
        source_code_url: this._replaceEmpty(
          '[do-not-modify]',
          this.sourceCodeURL,
        ),
        sender: this.sender.toAccBech32(),
      },
    }
  }

  getSender() {
    return this.sender
  }

  validate() {
    if (this.name !== undefined && !this.name)
      throw new InvalidOracleScriptNameError('got an empty string for the name')
    if (this.script !== undefined && !this.script)
      throw new InvalidOracleScriptPathError('got an empty string for the path')
    if (this.script !== undefined && this.script && !this._readOptionalScript())
      throw new InvalidOracleScriptFileError('got an empty wasm file')

    return true
  }
}
