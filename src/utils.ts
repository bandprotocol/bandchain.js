import { Coin } from '../proto/cosmos/base/v1beta1/coin_pb'

export function parseCoin(coin: Coin) {
  return {
    denom: coin.getDenom(),
    amount: coin.getAmount(),
  }
}

export function sortAndStringify(obj) {
  function sortObject(obj) {
    if (obj === null) return null
    if (typeof obj !== 'object') return obj
    if (Array.isArray(obj)) return obj.map(sortObject)
    const sortedKeys = Object.keys(obj).sort()
    const result = {}
    sortedKeys.forEach((key) => {
      result[key] = sortObject(obj[key])
    })
    return result
  }

  return JSON.stringify(sortObject(obj))
}