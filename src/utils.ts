import { Coin } from '../proto/cosmos/base/v1beta1/coin_pb'

export function parseCoin(coin: Coin) {
  return {
    denom: coin.getDenom(),
    amount: coin.getAmount(),
  }
}
