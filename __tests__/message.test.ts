import { Coin } from '../proto/cosmos/base/v1beta1/coin_pb'
import { Any } from 'google-protobuf/google/protobuf/any_pb'

import {
  MsgRequestData,
  MsgSend,
  MsgDelegate,
  MsgUndelegate,
  MsgBeginRedelegate,
  MsgWithdrawDelegatorReward,
  MsgVote,
  MsgTransfer,
  MsgCreateDataSource,
  MsgEditDataSource,
  MsgCreateOracleScript,
  MsgEditOracleScript,
} from '../src/message'
import { VoteOption } from '../proto/cosmos/gov/v1beta1/gov_pb'

import fs from 'fs'
import path from 'path'

let coin = new Coin()
coin.setDenom('uband')
coin.setAmount('10')

describe('MsgRequest', () => {
  const senderAddr = 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c'
  const calldata = Buffer.from('000000034254430000000000000001', 'hex')
  const clientId = 'test'

  it('create successfully', () => {
    const msgRequest = new MsgRequestData(
      1,
      calldata,
      2,
      2,
      clientId,
      senderAddr,
      [coin],
      20000,
      20000,
    )

    const anyMsg = new Any()
    const name = 'oracle.v1.MsgRequestData'
    anyMsg.pack(msgRequest.serializeBinary(), name, '/')

    expect(msgRequest.toAny()).toEqual(anyMsg)

    expect(() => msgRequest.validate()).not.toThrow()
  })

  it('create with error from validate()', () => {
    let msgs = []
    let errorText: string[] = []
    let coin1 = new Coin()
    coin1.setDenom('uband')
    coin1.setAmount('-10')

    let coin2 = new Coin()
    coin2.setDenom('uband')
    coin2.setAmount('string')

    msgs.push(
      // Negative oracle script ID
      new MsgRequestData(
        -1,
        calldata,
        2,
        2,
        clientId,
        senderAddr,
        [coin],
        20000,
        20000,
      ),
    )
    // oracleScriptId is not an integer
    msgs.push(
      new MsgRequestData(
        1.1,
        calldata,
        2,
        2,
        clientId,
        senderAddr,
        [coin],
        20000,
        20000,
      ),
    )
    // askCount is not an integer
    msgs.push(
      new MsgRequestData(
        1,
        calldata,
        2.1,
        2,
        clientId,
        senderAddr,
        [coin],
        20000,
        20000,
      ),
    )
    // minCount is not an integer
    msgs.push(
      new MsgRequestData(
        1,
        calldata,
        2,
        2.1,
        clientId,
        senderAddr,
        [coin],
        20000,
        20000,
      ),
    )
    // Invalid minCount, got: minCount: 0
    msgs.push(
      new MsgRequestData(
        1,
        calldata,
        2,
        0,
        clientId,
        senderAddr,
        [coin],
        20000,
        20000,
      ),
    )
    // Fee limit cannot be less than zero
    msgs.push(
      new MsgRequestData(
        1,
        calldata,
        3,
        2,
        clientId,
        senderAddr,
        [coin1],
        20000,
        20000,
      ),
    )
    // Invalid fee limit, fee limit should be a number
    msgs.push(
      new MsgRequestData(
        1,
        calldata,
        3,
        2,
        clientId,
        senderAddr,
        [coin2],
        20000,
        20000,
      ),
    )
    errorText.push('oracleScriptId cannot be less than zero')
    errorText.push('oracleScriptId is not an integer')
    errorText.push('askCount is not an integer')
    errorText.push('minCount is not an integer')
    errorText.push('Invalid minCount, got: minCount: 0')
    errorText.push('Fee limit cannot be less than zero')
    errorText.push('Invalid fee limit, fee limit should be a number')

    msgs.forEach((msg, index) => {
      expect(() => {
        msg.validate()
      }).toThrowError(errorText[index])
    })
  })
})

describe('MsgSend', () => {
  it('create successfully', () => {
    const msgSend = new MsgSend(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      [coin],
    )
    const anyMsg = new Any()
    const name = 'cosmos.bank.v1beta1.MsgSend'
    anyMsg.pack(msgSend.serializeBinary(), name, '/')

    expect(msgSend.toAny()).toEqual(anyMsg)

    expect(() => msgSend.validate()).not.toThrow()
  })

  it('error MsgSend', () => {
    let msgs = []
    let errorText: string[] = []

    msgs.push(
      new MsgSend(
        'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        [],
      ),
    )
    msgs.push(
      new MsgSend('', 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c', [coin]),
    )
    msgs.push(
      new MsgSend('band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c', '', [coin]),
    )

    errorText.push('Expect at least 1 coin')
    errorText.push('Address should not be an empty string')
    errorText.push('Address should not be an empty string')

    msgs.forEach((msg, index) => {
      expect(() => {
        msg.validate()
      }).toThrowError(errorText[index])
    })
  })
})

describe('MsgDelegate', () => {
  it('create successfully', () => {
    const msgDelegate = new MsgDelegate(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      'bandvaloper1j9vk75jjty02elhwqqjehaspfslaem8pr20qst',
      coin,
    )

    const anyMsg = new Any()
    const name = 'cosmos.staking.v1beta1.MsgDelegate'
    anyMsg.pack(msgDelegate.serializeBinary(), name, '/')

    expect(msgDelegate.toAny()).toEqual(anyMsg)

    expect(() => msgDelegate.validate()).not.toThrow()
  })

  it('error MsgDelegate', () => {
    let msgs = []
    let errorText: string[] = []

    msgs.push(
      new MsgDelegate(
        'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        'bandvaloper1j9vk75jjty02elhwqqjehaspfslaem8pr20qst',
        undefined,
      ),
    )
    msgs.push(
      new MsgDelegate(
        '',
        'bandvaloper1j9vk75jjty02elhwqqjehaspfslaem8pr20qst',
        coin,
      ),
    )
    msgs.push(
      new MsgDelegate('band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c', '', coin),
    )

    errorText.push('Expect at least 1 coin')
    errorText.push('Address should not be an empty string')
    errorText.push('Address should not be an empty string')

    msgs.forEach((msg, index) => {
      expect(() => {
        msg.validate()
      }).toThrowError(errorText[index])
    })
  })
})

describe('MsgUndelegate', () => {
  it('create successfully', () => {
    const msgUndelegate = new MsgUndelegate(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      'bandvaloper1j9vk75jjty02elhwqqjehaspfslaem8pr20qst',
      coin,
    )

    const anyMsg = new Any()
    const name = 'cosmos.staking.v1beta1.MsgUndelegate'
    anyMsg.pack(msgUndelegate.serializeBinary(), name, '/')

    expect(msgUndelegate.toAny()).toEqual(anyMsg)

    expect(() => msgUndelegate.validate()).not.toThrow()
  })

  it('error MsgUndelegate', () => {
    let msgs = []
    let errorText: string[] = []

    msgs.push(
      new MsgUndelegate(
        'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        'bandvaloper1j9vk75jjty02elhwqqjehaspfslaem8pr20qst',
        undefined,
      ),
    )
    msgs.push(
      new MsgUndelegate(
        '',
        'bandvaloper1j9vk75jjty02elhwqqjehaspfslaem8pr20qst',
        coin,
      ),
    )
    msgs.push(
      new MsgUndelegate(
        'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        '',
        coin,
      ),
    )

    errorText.push('Expect at least 1 coin')
    errorText.push('Address should not be an empty string')
    errorText.push('Address should not be an empty string')

    msgs.forEach((msg, index) => {
      expect(() => {
        msg.validate()
      }).toThrowError(errorText[index])
    })
  })
})

describe('MsgBeginRedelegate', () => {
  it('create successfully', () => {
    const msgBeginRedelegate = new MsgBeginRedelegate(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      'bandvaloper1j9vk75jjty02elhwqqjehaspfslaem8pr20qst',
      'bandvaloper1kfj48adjsnrgu83lau6wc646q2uf65rf84tzus',
      coin,
    )

    const anyMsg = new Any()
    const name = 'cosmos.staking.v1beta1.MsgBeginRedelegate'
    anyMsg.pack(msgBeginRedelegate.serializeBinary(), name, '/')

    expect(msgBeginRedelegate.toAny()).toEqual(anyMsg)

    expect(() => msgBeginRedelegate.validate()).not.toThrow()
  })

  it('error MsgBeginRedelegate', () => {
    let msgs = []
    let errorText: string[] = []

    msgs.push(
      new MsgBeginRedelegate(
        'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        'bandvaloper1j9vk75jjty02elhwqqjehaspfslaem8pr20qst',
        'bandvaloper1kfj48adjsnrgu83lau6wc646q2uf65rf84tzus',
        undefined,
      ),
    )
    msgs.push(
      new MsgBeginRedelegate(
        '',
        'bandvaloper1j9vk75jjty02elhwqqjehaspfslaem8pr20qst',
        'bandvaloper1kfj48adjsnrgu83lau6wc646q2uf65rf84tzus',
        coin,
      ),
    )
    msgs.push(
      new MsgBeginRedelegate(
        'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        '',
        'bandvaloper1kfj48adjsnrgu83lau6wc646q2uf65rf84tzus',
        coin,
      ),
    )
    msgs.push(
      new MsgBeginRedelegate(
        'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        'bandvaloper1kfj48adjsnrgu83lau6wc646q2uf65rf84tzus',
        '',
        coin,
      ),
    )

    errorText.push('Expect at least 1 coin')
    errorText.push('Address should not be an empty string')
    errorText.push('Address should not be an empty string')
    errorText.push('Address should not be an empty string')

    msgs.forEach((msg, index) => {
      expect(() => {
        msg.validate()
      }).toThrowError(errorText[index])
    })
  })
})

describe('MsgWithdrawDelegatorReward', () => {
  it('create successfully', () => {
    const msgWithdrawDelegatorReward = new MsgWithdrawDelegatorReward(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      'bandvaloper1j9vk75jjty02elhwqqjehaspfslaem8pr20qst',
    )

    const anyMsg = new Any()
    const name = 'cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward'
    anyMsg.pack(msgWithdrawDelegatorReward.serializeBinary(), name, '/')

    expect(msgWithdrawDelegatorReward.toAny()).toEqual(anyMsg)

    expect(() => msgWithdrawDelegatorReward.validate()).not.toThrow()
  })

  it('error MsgWithdrawDelegatorReward', () => {
    let msgs = []
    let errorText: string[] = []

    msgs.push(
      new MsgWithdrawDelegatorReward(
        '',
        'bandvaloper1j9vk75jjty02elhwqqjehaspfslaem8pr20qst',
      ),
    )
    msgs.push(
      new MsgWithdrawDelegatorReward(
        'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        '',
      ),
    )

    errorText.push('Address should not be an empty string')
    errorText.push('Address should not be an empty string')

    msgs.forEach((msg, index) => {
      expect(() => {
        msg.validate()
      }).toThrowError(errorText[index])
    })
  })
})

describe('MsgVote', () => {
  it('create successfully', () => {
    const msgVote = new MsgVote(
      1,
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      VoteOption.VOTE_OPTION_YES,
    )

    const anyMsg = new Any()
    const name = 'cosmos.gov.v1beta1.MsgVote'
    anyMsg.pack(msgVote.serializeBinary(), name, '/')

    expect(msgVote.toAny()).toEqual(anyMsg)

    expect(() => msgVote.validate()).not.toThrow()
  })

  it('error MsgVote', () => {
    let msgs = []
    let errorText: string[] = []

    msgs.push(
      new MsgVote(
        0,
        'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        VoteOption.VOTE_OPTION_YES,
      ),
    )
    msgs.push(new MsgVote(1, '', VoteOption.VOTE_OPTION_YES))
    msgs.push(
      new MsgVote(
        1,
        'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        VoteOption.VOTE_OPTION_UNSPECIFIED,
      ),
    )

    errorText.push('proposalId cannot be less than zero')
    errorText.push('Address should not be an empty string')
    errorText.push('VoteOption should not be VOTE_OPTION_UNSPECIFIED')

    msgs.forEach((msg, index) => {
      expect(() => {
        msg.validate()
      }).toThrowError(errorText[index])
    })
  })
})

describe('MsgTransfer', () => {
  it('create successfully', () => {
    const msgTransfer = new MsgTransfer(
      'transfer',
      'channel-25',
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
      'cosmos15d4apf20449ajvwycq8ruaypt7v6d34522frnd',
      coin,
      (Date.now() + 86400000) * 1e6,
    )

    const anyMsg = new Any()
    const name = 'ibc.applications.transfer.v1.MsgTransfer'
    anyMsg.pack(msgTransfer.serializeBinary(), name, '/')

    expect(msgTransfer.toAny()).toEqual(anyMsg)

    expect(() => msgTransfer.validate()).not.toThrow()
  })

  it('error MsgTransfer', () => {
    let msgs = []
    let errorText: string[] = []

    msgs.push(
      new MsgTransfer(
        '',
        'channel-25',
        'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        'cosmos15d4apf20449ajvwycq8ruaypt7v6d34522frnd',
        coin,
        (Date.now() + 86400000) * 1e6,
      ),
      new MsgTransfer(
        'transfer',
        '',
        'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        'cosmos15d4apf20449ajvwycq8ruaypt7v6d34522frnd',
        coin,
        (Date.now() + 86400000) * 1e6,
      ),
      new MsgTransfer(
        'transfer',
        'channel-25',
        '',
        'cosmos15d4apf20449ajvwycq8ruaypt7v6d34522frnd',
        coin,
        (Date.now() + 86400000) * 1e6,
      ),
      new MsgTransfer(
        'transfer',
        'channel-25',
        'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        '',
        coin,
        (Date.now() + 86400000) * 1e6,
      ),
    )

    errorText.push('sourcePort should not be an empty string')
    errorText.push('sourceChannel should not be an empty string')
    errorText.push('sender should not be an empty string')
    errorText.push('receiver should not be an empty string')

    msgs.forEach((msg, index) => {
      expect(() => {
        msg.validate()
      }).toThrowError(errorText[index])
    })
  })
})

describe('MsgCreateDataSource', () => {
  const dsName = 'CoinGecko'
  const description = ''
  const ownerAddr = 'band1nm9ux8rmdpm20v90znav3hjrvxrvfachu7ym3d'
  const senderAddr = 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c'
  const executable = Buffer.from(
    '000000034254430000000000000001',
    'hex',
  ).toString('base64')
  const treasury = 'band1nm9ux8rmdpm20v90znav3hjrvxrvfachu7ym3d'

  it('create successfully', () => {
    const msgCreateDs = new MsgCreateDataSource(
      dsName,
      executable,
      treasury,
      ownerAddr,
      senderAddr,
      [coin],
      description,
    )

    const anyMsg = new Any()
    const name = 'oracle.v1.MsgCreateDataSource'
    anyMsg.pack(msgCreateDs.serializeBinary(), name, '/')

    expect(msgCreateDs.toAny()).toEqual(anyMsg)

    expect(() => msgCreateDs.validate()).not.toThrow()
  })

  it('create with error from validate()', () => {
    let msgs = []
    let errorText: string[] = []
    let coin1 = new Coin()
    coin1.setDenom('uband')
    coin1.setAmount('-10')

    let coin2 = new Coin()
    coin2.setDenom('uband')
    coin2.setAmount('string')

    // Fee cannot be less than zero
    msgs.push(
      new MsgCreateDataSource(
        dsName,
        executable,
        treasury,
        ownerAddr,
        senderAddr,
        [coin1],
        description,
      ),
    )
    // Invalid fee, fee list should be a number
    msgs.push(
      new MsgCreateDataSource(
        dsName,
        executable,
        treasury,
        ownerAddr,
        senderAddr,
        [coin2],
        description,
      ),
    )

    // Owner should not be an empty string
    msgs.push(
      new MsgCreateDataSource(
        dsName,
        executable,
        treasury,
        '',
        senderAddr,
        [coin],
        description,
      ),
    )

    // Sender should not be an empty string
    msgs.push(
      new MsgCreateDataSource(
        dsName,
        executable,
        treasury,
        ownerAddr,
        '',
        [coin],
        description,
      ),
    )

    // Treasury should not be an empty string
    msgs.push(
      new MsgCreateDataSource(
        dsName,
        executable,
        '',
        ownerAddr,
        senderAddr,
        [coin],
        description,
      ),
    )
    errorText.push('Fee cannot be less than zero')
    errorText.push('Invalid fee, fee list should be a number')
    errorText.push('owner should not be an empty string')
    errorText.push('sender should not be an empty string')
    errorText.push('treasury should not be an empty string')

    msgs.forEach((msg, index) => {
      expect(() => {
        msg.validate()
      }).toThrowError(errorText[index])
    })
  })
})

describe('MsgEditDataSource', () => {
  const dataSourceId = 1
  const dataSourceId2 = null
  const description = ''
  const ownerAddr = 'band1nm9ux8rmdpm20v90znav3hjrvxrvfachu7ym3d'
  const senderAddr = 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c'
  const treasury = 'band1nm9ux8rmdpm20v90znav3hjrvxrvfachu7ym3d'
  const execPath = path.resolve(
    __dirname,
    '../mock_files/example_data_source.py',
  )
  const file = fs.readFileSync(execPath, 'utf8')
  const executable = Buffer.from(file).toString('base64')

  it('create successfully', () => {
    const msgCreateDs = new MsgEditDataSource(
      dataSourceId,
      treasury,
      ownerAddr,
      senderAddr,
      [coin],
      description,
      executable,
    )

    const anyMsg = new Any()
    const name = 'oracle.v1.MsgEditDataSource'
    anyMsg.pack(msgCreateDs.serializeBinary(), name, '/')

    expect(msgCreateDs.toAny()).toEqual(anyMsg)

    expect(() => msgCreateDs.validate()).not.toThrow()
  })

  it('create with error from validate()', () => {
    let msgs = []
    let errorText: string[] = []
    let coin1 = new Coin()
    coin1.setDenom('uband')
    coin1.setAmount('-10')

    let coin2 = new Coin()
    coin2.setDenom('uband')
    coin2.setAmount('string')

    // Data Source ID cannot be null
    msgs.push(
      new MsgEditDataSource(
        dataSourceId2,
        treasury,
        ownerAddr,
        senderAddr,
        [coin2],
        description,
        executable,
      ),
    )

    // Fee list cannot be less than zero
    msgs.push(
      new MsgEditDataSource(
        dataSourceId,
        treasury,
        ownerAddr,
        senderAddr,
        [coin1],
        description,
        executable,
      ),
    )
    // Invalid fee limit, fee limit should be a number
    msgs.push(
      new MsgEditDataSource(
        dataSourceId,
        treasury,
        ownerAddr,
        senderAddr,
        [coin2],
        description,
        executable,
      ),
    )
    errorText.push('dataSourceId cannot be null')
    errorText.push('Fee cannot be less than zero')
    errorText.push('Invalid fee, fee list should be a number')
    errorText.push('owner should not be an empty string')
    errorText.push('sender should not be an empty string')
    errorText.push('treasury should not be an empty string')

    msgs.forEach((msg, index) => {
      expect(() => {
        msg.validate()
      }).toThrowError(errorText[index])
    })
  })
})

describe('MsgCreateOracleScript', () => {
  const sender = 'band1nm9ux8rmdpm20v90znav3hjrvxrvfachu7ym3d'
  const execPath = path.resolve(
    __dirname,
    '../mock_files/example_oracle_script.wasm',
  )
  const code = fs.readFileSync(execPath)

  it('create successfully', () => {
    const msgCreateOs = new MsgCreateOracleScript(
      'Oracle Script Name',
      code,
      sender,
      sender,
      'Oracle Script Description',
      '{symbols:[string],multiplier:u64}/{rates:[u64]}',
      'https://mockurl.com',
    )

    const anyMsg = new Any()
    const name = 'oracle.v1.MsgCreateOracleScript'
    anyMsg.pack(msgCreateOs.serializeBinary(), name, '/')
    expect(msgCreateOs.toAny()).toEqual(anyMsg)
    expect(() => msgCreateOs.validate()).not.toThrow()
  })

  it('create with error from validate()', () => {
    let msgs = []
    let errorText: string[] = []

    const execPathEmpty = path.resolve(
      __dirname,
      '../mock_files/empty_oracle_script.wasm',
    )
    const codeEmpty = fs.readFileSync(execPathEmpty)

    // name should not be an empty string
    msgs.push(
      new MsgCreateOracleScript(
        '',
        code,
        sender,
        sender,
        'Oracle Script Description',
        '{symbols:[string],multiplier:u64}/{rates:[u64]}',
        'https://mockurl.com',
      ),
    )

    // code should not be an empty string
    msgs.push(
      new MsgCreateOracleScript(
        'Oracle Script Name',
        codeEmpty,
        sender,
        sender,
        'Oracle Script Description',
        '{symbols:[string],multiplier:u64}/{rates:[u64]}',
        'https://mockurl.com',
      ),
    )

    // owner should not be an empty string
    msgs.push(
      new MsgCreateOracleScript(
        'Oracle Script Name',
        codeEmpty,
        '',
        sender,
        'Oracle Script Description',
        '{symbols:[string],multiplier:u64}/{rates:[u64]}',
        'https://mockurl.com',
      ),
    )

    // sender should not be an empty string
    msgs.push(
      new MsgCreateOracleScript(
        'Oracle Script Name',
        codeEmpty,
        sender,
        '',
        'Oracle Script Description',
        '{symbols:[string],multiplier:u64}/{rates:[u64]}',
        'https://mockurl.com',
      ),
    )

    errorText.push('name should not be an empty string')
    errorText.push('code should not be an empty string')
    errorText.push('owner should not be an empty string')
    errorText.push('sender should not be an empty string')

    msgs.forEach((msg, index) => {
      expect(() => {
        msg.validate()
      }).toThrowError(errorText[index])
    })
  })
})

describe('MsgEditOracleScript', () => {
  const sender = 'band1nm9ux8rmdpm20v90znav3hjrvxrvfachu7ym3d'
  const execPath = path.resolve(
    __dirname,
    '../mock_files/example_oracle_script.wasm',
  )
  const code = fs.readFileSync(execPath)

  it('create successfully', () => {
    const msgEditOs = new MsgEditOracleScript(
      1,
      sender,
      sender,
      'Oracle Script Name',
      'Edit Oracle Script Description',
      '{symbols:[string],multiplier:u64}/{rates:[u64]}',
      'https://mockurl.com',
      code,
    )

    const anyMsg = new Any()
    const name = 'oracle.v1.MsgEditOracleScript'
    anyMsg.pack(msgEditOs.serializeBinary(), name, '/')
    expect(msgEditOs.toAny()).toEqual(anyMsg)
    expect(() => msgEditOs.validate()).not.toThrow()
  })

  it('create with error from validate()', () => {
    let msgs = []
    let errorText: string[] = []

    // owner should not be an empty string
    msgs.push(
      new MsgEditOracleScript(
        1,
        '',
        sender,
        'Oracle Script Name',
        'Edit Oracle Script Description',
        '{symbols:[string],multiplier:u64}/{rates:[u64]}',
        'https://mockurl.com',
      ),
    )

    // sender should not be an empty string
    msgs.push(
      new MsgEditOracleScript(
        1,
        sender,
        '',
        'Oracle Script Name',
        'Edit Oracle Script Description',
        '{symbols:[string],multiplier:u64}/{rates:[u64]}',
        'https://mockurl.com',
      ),
    )

    errorText.push('owner should not be an empty string')
    errorText.push('sender should not be an empty string')

    msgs.forEach((msg, index) => {
      expect(() => {
        msg.validate()
      }).toThrowError(errorText[index])
    })
  })
})
