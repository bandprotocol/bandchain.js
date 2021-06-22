import { Message, Data } from '../../src/index'
import { Address } from '../../src/wallet'

const { MsgSend } = Message
const { Coin } = Data

const coin = new Coin(100000, 'uband')

describe('MsgSend', () => {
  it('create successfully', () => {
    const msgSend = new MsgSend(
      Address.fromAccBech32('band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c'),
      Address.fromAccBech32('band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c'),
      [coin],
    )
    expect(msgSend.asJson()).toEqual({
      type: 'cosmos-sdk/MsgSend',
      value: {
        to_address: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        from_address: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        amount: [{ amount: '100000', denom: 'uband' }],
      },
    })
    expect(msgSend.getSender().toAccBech32()).toEqual(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
    )
    expect(msgSend.validate()).toBeTruthy()
  })

  it('error no coin', () => {
    const msgSend = new MsgSend(
      Address.fromAccBech32('band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c'),
      Address.fromAccBech32('band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c'),
      [],
    )

    expect(() => {
      msgSend.validate()
    }).toThrowError('Expect at least 1 coin')
  })
})
