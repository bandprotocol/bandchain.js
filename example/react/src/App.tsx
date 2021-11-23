import React from 'react'
import './App.css'
import { Client, Data, Wallet, Message, Coin, Transaction, Fee } from '@bandprotocol/bandchain.js'

const grpcEndpoint = 'https://laozi-testnet4.bandchain.org/grpc-web'
const client = new Client(grpcEndpoint)

const createDsMsg = async () => {

  const { PrivateKey } = Wallet
  const mnemonic = "subject economy equal whisper turn boil guard giraffe stick retreat wealth card only buddy joy leave genuine resemble submit ghost top polar adjust avoid"
  const privateKey = PrivateKey.fromMnemonic(mnemonic)
  const pubkey = privateKey.toPubkey()
  const sender = pubkey.toAddress().toAccBech32()

const executableCode = btoa(`#!/usr/bin/env python3
  import sys
  import requests
  
  HEADERS = {"Content-Type": "application/json"}
  URL = "https://australia-southeast1-band-playground.cloudfunctions.net/pang-test"
  
  
  def main(request_path, keys):
      result = requests.request(
          "POST", URL, headers=HEADERS, json={"query_string": request_path}
      ).json()
  
      if "fantasy_content" in result:
          final_value = result["fantasy_content"]
          for key in keys.split(","):
              # list
              if isinstance(final_value, list):
                  if not key.isdigit():
                      raise ValueError('index must be positive integer but got "' + key + '"')
  
                  final_value = final_value[int(key)]
                  continue
  
              # dict
              if key in final_value:
                  final_value = final_value[key]
                  continue
  
              raise ValueError('key "' + key + '" not found')
  
          return final_value
  
      raise ValueError('key "fantasy_content" not found')
  
  if __name__ == "__main__":
      try:
          print(main(*sys.argv[1:]))
      except Exception as e:
          print(str(e), file=sys.stderr)
          sys.exit(1)
  `)

// Here we use different message type, which is MsgSend
const owner = 'band18e55d9xyrgyg3tk72zmg7s92uu8sd95jzgj73a'
const treasury = 'band18e55d9xyrgyg3tk72zmg7s92uu8sd95jzgj73a'

  let feeCoin = new Coin()
  feeCoin.setDenom("uband")
  feeCoin.setAmount("1000")

  const msg = new Message.MsgCreateDataSource(
    "Test DS",
    "Test DS Description",
    executableCode,
    feeCoin,
    sender,
    owner,
    treasury,
  )

  const fee = new Fee()
  fee.setAmountList([feeCoin])
  fee.setGasLimit(1000000)

  const account = await client.getAccount(sender)

  const tx = new Transaction()
    .withMessages(msg)
    .withAccountNum(account.accountNumber)
    .withSequence(account.sequence)
    .withFee(fee)

  // Step 4 sign the transaction
  const txSignData = tx.getSignDoc(pubkey)
  const signature = privateKey.sign(txSignData)
  const signedTx = tx.getTxData(signature, pubkey)

  // Step 5 send the transaction
  const response = await client.sendTxBlockMode(signedTx)

  return response
}

function App() {
  const [pairs, setPairs] = React.useState<Data.ReferenceData[]>()

  React.useEffect(() => {
    // Get standard price reference
    async function getReferenceData() {
      const data = await client.getReferenceData(['BTC/USD', 'ETH/BTC'], 3, 4)
      setPairs(data)
    }

    getReferenceData()
  }, [])

  return (
    <div className="App">
      <span style={{ fontSize: '24px', marginBottom: '10px' }}>Prices</span>
      {pairs &&
        pairs.map(({ pair, rate }) => (
          <div key={pair}>
            <span style={{ marginBottom: '5px' }}>
              {pair}: {rate.toString()}
            </span>
          </div>
        ))}
    </div>
  )
}

export default App
