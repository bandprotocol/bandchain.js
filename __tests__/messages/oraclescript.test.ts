import { Message } from '../../src/index'
import { Address } from '../../src/wallet'
import fs from 'fs'
import path from 'path'

const { MsgCreateOracleScript, MsgEditOracleScript } = Message

const alice = Address.fromAccBech32(
  'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
)

describe('MsgCreateOracleScriptSuccess', () => {
  it('msg create oracle script success', () => {
    const execPath = path.resolve(
      __dirname,
      '../mock_ds_os/example_oracle_script.wasm',
    )
    const file = fs.readFileSync(execPath, 'utf8')
    const code = Buffer.from(file).toString('base64')
    const msgCreateOracleScript = new MsgCreateOracleScript(
      alice,
      alice,
      'Oracle Script Name',
      execPath,
      'Oracle Script Description',
      '{symbols:[string],multiplier:u64}/{rates:[u64]}',
      'https://google.com',
    )

    expect(msgCreateOracleScript.validate()).toEqual(true)
    expect(msgCreateOracleScript.getSender().toAccBech32()).toEqual(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
    )
    expect(msgCreateOracleScript.asJson()).toEqual({
      type: 'oracle/CreateOracleScript',
      value: {
        owner: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        name: 'Oracle Script Name',
        description: 'Oracle Script Description',
        code: code,
        schema: '{symbols:[string],multiplier:u64}/{rates:[u64]}',
        source_code_url: 'https://google.com',
        sender: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      },
    })
  })

  it('msg create oracle script fail invalid name', () => {
    const execPath = path.resolve(
      __dirname,
      '../mock_ds_os/example_oracle_script.wasm',
    )
    const file = fs.readFileSync(execPath, 'utf8')
    const code = Buffer.from(file).toString('base64')
    const msgCreateOracleScript = new MsgCreateOracleScript(
      alice,
      alice,
      '',
      execPath,
      'Oracle Script Description',
      '{symbols:[string],multiplier:u64}/{rates:[u64]}',
      'https://google.com',
    )

    expect(() => {
      msgCreateOracleScript.validate()
    }).toThrowError('Missing or invalid oracle script name')
    expect(msgCreateOracleScript.getSender().toAccBech32()).toEqual(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
    )
    expect(msgCreateOracleScript.asJson()).toEqual({
      type: 'oracle/CreateOracleScript',
      value: {
        owner: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        name: '',
        description: 'Oracle Script Description',
        code: code,
        schema: '{symbols:[string],multiplier:u64}/{rates:[u64]}',
        source_code_url: 'https://google.com',
        sender: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      },
    })
  })

  it('msg create oracle script fail invalid path', () => {
    const msgCreateOracleScript = new MsgCreateOracleScript(
      alice,
      alice,
      'Oracle Script Name',
      '',
      'Oracle Script Description',
      '{symbols:[string],multiplier:u64}/{rates:[u64]}',
      'https://google.com',
    )

    expect(() => {
      msgCreateOracleScript.validate()
    }).toThrowError('Missing or invalid oracle script path')
  })

  it('msg create oracle script fail invalid wasm', () => {
    const execPath = path.resolve(
      __dirname,
      '../mock_ds_os/empty_oracle_script.wasm',
    )
    const file = fs.readFileSync(execPath, 'utf8')
    const code = Buffer.from(file).toString('base64')
    const msgCreateOracleScript = new MsgCreateOracleScript(
      alice,
      alice,
      'Oracle Script Name',
      execPath,
      'Oracle Script Description',
      '{symbols:[string],multiplier:u64}/{rates:[u64]}',
      'https://google.com',
    )

    expect(() => {
      msgCreateOracleScript.validate()
    }).toThrowError('Empty wasm file')
    expect(msgCreateOracleScript.getSender().toAccBech32()).toEqual(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
    )
    expect(msgCreateOracleScript.asJson()).toEqual({
      type: 'oracle/CreateOracleScript',
      value: {
        owner: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        name: 'Oracle Script Name',
        description: 'Oracle Script Description',
        code: code,
        schema: '{symbols:[string],multiplier:u64}/{rates:[u64]}',
        source_code_url: 'https://google.com',
        sender: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      },
    })
  })

  it('msg edit oracle script full success', () => {
    const execPath = path.resolve(
      __dirname,
      '../mock_ds_os/example_oracle_script.wasm',
    )
    const file = fs.readFileSync(execPath, 'utf8')
    const code = Buffer.from(file).toString('base64')
    const msgEditOracleScript = new MsgEditOracleScript(
      alice,
      alice,
      1,
      '{symbols:[string],multiplier:u64}/{rates:[u64]}',
      'https://google.com',
      'Oracle Script Name',
      'Oracle Script Description',
      execPath,
    )

    expect(msgEditOracleScript.validate()).toEqual(true)
    expect(msgEditOracleScript.getSender().toAccBech32()).toEqual(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
    )
    expect(msgEditOracleScript.asJson()).toEqual({
      type: 'oracle/EditOracleScript',
      value: {
        owner: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        oracle_script_id: 1,
        name: 'Oracle Script Name',
        description: 'Oracle Script Description',
        code: code,
        schema: '{symbols:[string],multiplier:u64}/{rates:[u64]}',
        source_code_url: 'https://google.com',
        sender: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      },
    })
  })

  it('msg edit oracle script empty name', () => {
    const execPath = path.resolve(
      __dirname,
      '../mock_ds_os/example_oracle_script.wasm',
    )
    const file = fs.readFileSync(execPath, 'utf8')
    const code = Buffer.from(file).toString('base64')
    const msgEditOracleScript = new MsgEditOracleScript(
      alice,
      alice,
      1,
      '{symbols:[string],multiplier:u64}/{rates:[u64]}',
      'https://google.com',
      '',
      'Oracle Script Description',
      execPath,
    )

    expect(() => {
      msgEditOracleScript.validate()
    }).toThrowError('Missing or invalid oracle script name')

    expect(msgEditOracleScript.getSender().toAccBech32()).toEqual(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
    )
    expect(msgEditOracleScript.asJson()).toEqual({
      type: 'oracle/EditOracleScript',
      value: {
        owner: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        oracle_script_id: 1,
        name: '',
        description: 'Oracle Script Description',
        code: code,
        schema: '{symbols:[string],multiplier:u64}/{rates:[u64]}',
        source_code_url: 'https://google.com',
        sender: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      },
    })
  })

  it('msg edit oracle script empty script path', () => {
    const msgEditOracleScript = new MsgEditOracleScript(
      alice,
      alice,
      1,
      '{symbols:[string],multiplier:u64}/{rates:[u64]}',
      'https://google.com',
      'Oracle Script Name',
      'Oracle Script Description',
      '',
    )

    expect(() => {
      msgEditOracleScript.validate()
    }).toThrowError('Missing or invalid oracle script path')

    expect(msgEditOracleScript.getSender().toAccBech32()).toEqual(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
    )
  })

  it('msg edit oracle script empty script path', () => {
    const execPath = path.resolve(
      __dirname,
      '../mock_ds_os/empty_oracle_script.wasm',
    )
    const file = fs.readFileSync(execPath, 'utf8')
    const code = Buffer.from(file).toString('base64')
    const msgEditOracleScript = new MsgEditOracleScript(
      alice,
      alice,
      1,
      '{symbols:[string],multiplier:u64}/{rates:[u64]}',
      'https://google.com',
      'Oracle Script Name',
      'Oracle Script Description',
      execPath,
    )

    expect(() => {
      msgEditOracleScript.validate()
    }).toThrowError('Empty wasm file')

    expect(msgEditOracleScript.getSender().toAccBech32()).toEqual(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
    )
    expect(msgEditOracleScript.asJson()).toEqual({
      type: 'oracle/EditOracleScript',
      value: {
        owner: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        oracle_script_id: 1,
        name: 'Oracle Script Name',
        description: 'Oracle Script Description',
        code: code,
        schema: '{symbols:[string],multiplier:u64}/{rates:[u64]}',
        source_code_url: 'https://google.com',
        sender: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      },
    })
  })
})
