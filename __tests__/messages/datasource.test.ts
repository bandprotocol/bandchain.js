import { Message } from '../../src/index'
import { Address } from '../../src/wallet'
import fs from 'fs'
import path from 'path'

const { MsgCreateDataSource, MsgEditDataSource } = Message

const alice = Address.fromAccBech32(
  'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
)

describe('MsgCreateDataSourceSuccess', () => {
  it('msg create data source success', () => {
    const execPath = path.resolve(
      __dirname,
      '../mock_ds_os/example_data_source.py',
    )
    const file = fs.readFileSync(execPath, 'utf8')
    const executable = Buffer.from(file).toString('base64')
    const msgCreateDataSource = new MsgCreateDataSource(
      alice,
      'Data Source Name',
      'Data Source Description',
      execPath,
      alice,
    )

    expect(msgCreateDataSource.validate()).toEqual(true)
    expect(msgCreateDataSource.getSender().toAccBech32()).toEqual(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
    )
    expect(msgCreateDataSource.asJson()).toEqual({
      type: 'oracle/CreateDataSource',
      value: {
        owner: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        name: 'Data Source Name',
        description: 'Data Source Description',
        executable: executable,
        sender: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      },
    })
  })

  it('msg create data source empty path', () => {
    const msgCreateDataSource = new MsgCreateDataSource(
      alice,
      'Empty Data Source Name',
      'Empty Data Source Name',
      '',
      alice,
    )

    expect(() => {
      msgCreateDataSource.validate()
    }).toThrowError('Missing or invalid data source path')
  })

  it('msg create data source empty script', () => {
    const execPath = path.resolve(
      __dirname,
      '../mock_ds_os/empty_data_source.py',
    )
    const msgCreateDataSource = new MsgCreateDataSource(
      alice,
      'Empty Data Source Name',
      'Empty Data Source Description',
      execPath,
      alice,
    )

    expect(() => {
      msgCreateDataSource.validate()
    }).toThrowError('Empty data source file')
  })

  it('msg edit data source full success', () => {
    const execPath = path.resolve(
      __dirname,
      '../mock_ds_os/example_data_source.py',
    )
    const file = fs.readFileSync(execPath, 'utf8')
    const executable = Buffer.from(file).toString('base64')

    const msgEditDataSource = new MsgEditDataSource(
      alice,
      alice,
      1,
      'Data Source Name',
      'Data Source Description',
      execPath,
    )

    expect(msgEditDataSource.validate()).toEqual(true)
    expect(msgEditDataSource.getSender().toAccBech32()).toEqual(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
    )
    expect(msgEditDataSource.asJson()).toEqual({
      type: 'oracle/EditDataSource',
      value: {
        owner: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        name: 'Data Source Name',
        data_source_id: 1,
        description: 'Data Source Description',
        executable: executable,
        sender: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      },
    })
  })

  it('msg edit data source no name success', () => {
    const execPath = path.resolve(
      __dirname,
      '../mock_ds_os/example_data_source.py',
    )
    const file = fs.readFileSync(execPath, 'utf8')
    const executable = Buffer.from(file).toString('base64')

    const msgEditDataSource = new MsgEditDataSource(
      alice,
      alice,
      1,
      undefined,
      'Data Source Description',
      execPath,
    )

    expect(msgEditDataSource.validate()).toEqual(true)
    expect(msgEditDataSource.getSender().toAccBech32()).toEqual(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
    )
    expect(msgEditDataSource.asJson()).toEqual({
      type: 'oracle/EditDataSource',
      value: {
        owner: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        name: '[do-not-modify]',
        data_source_id: 1,
        description: 'Data Source Description',
        executable: executable,
        sender: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      },
    })
  })

  it('msg edit data source no description success', () => {
    const execPath = path.resolve(
      __dirname,
      '../mock_ds_os/example_data_source.py',
    )
    const file = fs.readFileSync(execPath, 'utf8')
    const executable = Buffer.from(file).toString('base64')

    const msgEditDataSource = new MsgEditDataSource(
      alice,
      alice,
      1,
      'Data Source Name',
      undefined,
      execPath,
    )

    expect(msgEditDataSource.validate()).toEqual(true)
    expect(msgEditDataSource.getSender().toAccBech32()).toEqual(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
    )
    expect(msgEditDataSource.asJson()).toEqual({
      type: 'oracle/EditDataSource',
      value: {
        owner: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        name: 'Data Source Name',
        data_source_id: 1,
        description: '[do-not-modify]',
        executable: executable,
        sender: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      },
    })
  })

  it('msg edit data source empty name', () => {
    const execPath = path.resolve(
      __dirname,
      '../mock_ds_os/example_data_source.py',
    )
    const msgEditDataSource = new MsgEditDataSource(
      alice,
      alice,
      1,
      '',
      'Data Source Description',
      execPath,
    )

    expect(() => {
      msgEditDataSource.validate()
    }).toThrowError('Invalid data source name')
  })

  it('msg edit data source no script success', () => {
    const msgEditDataSource = new MsgEditDataSource(
      alice,
      alice,
      1,
      'Data Source Name',
      'Data Source Description',
    )

    expect(msgEditDataSource.validate()).toEqual(true)
    expect(msgEditDataSource.getSender().toAccBech32()).toEqual(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
    )
    expect(msgEditDataSource.asJson()).toEqual({
      type: 'oracle/EditDataSource',
      value: {
        owner: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        name: 'Data Source Name',
        data_source_id: 1,
        description: 'Data Source Description',
        executable: 'W2RvLW5vdC1tb2RpZnld',
        sender: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      },
    })
  })
})
