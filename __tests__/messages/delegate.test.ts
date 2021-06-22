import { Message, Data } from '../../src/index'
import { Address } from '../../src/wallet'

const { MsgDelegate } = Message
const { Coin } = Data

const coin = new Coin(100000, 'uband')

describe('MsgDelegate', () => {
  it('create successfully', () => {
    const msgDelegate = new MsgDelegate(
      Address.fromAccBech32('band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c'),
      Address.fromValBech32(
        'bandvaloper1j9vk75jjty02elhwqqjehaspfslaem8pr20qst',
      ),
      coin,
    )

    expect(msgDelegate.asJson()).toEqual({
      type: 'cosmos-sdk/MsgDelegate',
      value: {
        amount: {
          amount: '100000',
          denom: 'uband',
        },
        delegator_address: 'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
        validator_address: 'bandvaloper1j9vk75jjty02elhwqqjehaspfslaem8pr20qst',
      },
    })

    expect(msgDelegate.getSender().toAccBech32()).toEqual(
      'band13eznuehmqzd3r84fkxu8wklxl22r2qfmtlth8c',
    )

    expect(msgDelegate.validate()).toBeTruthy()
  })
})
