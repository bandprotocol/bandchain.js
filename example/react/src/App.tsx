import React from 'react'
import './App.css'
import {
  Client,
  Data,
  Wallet,
  Obi,
  Transaction,
  Coin,
  Fee,
  Message,
} from '@bandprotocol/bandchain.js'

// BandChain's Proof-of-Authority REST endpoint
const endpoint = 'https://api-gm-lb.bandchain.org'
const grpcEndpoint = 'http://localhost:8080'
const client = new Client(grpcEndpoint, endpoint)

function App() {
  const [pairs, setPairs] = React.useState<Data.ReferenceData[]>()

  const { PrivateKey } = Wallet
  const mnemonic = 'bubu'
  const privateKey = PrivateKey.fromMnemonic(mnemonic)
  const pubkey = privateKey.toPubkey()
  const sender = pubkey.toAddress().toAccBech32()
  const obi = new Obi('{symbols:[string],multiplier:u64}/{rates:[u64]}')
  const calldata = obi.encodeInput({ symbols: ['ETH'], multiplier: 100 })

  React.useEffect(() => {
    // Test all get method
    async function getData() {
      const dataSource = await client.getDataSource(1)
      console.log('dataSource ', dataSource)
      const oracleScript = await client.getOracleScript(1)
      console.log('oracle Script ', oracleScript)
      const request = await client.getRequestByID(1)
      console.log('request ', request)
      const reporters = await client.getReporters(
        'bandvaloper18tjynh8v0kvf9lmjenx02fgltxk0c6jmm2wcjc',
      )
      console.log('reporters ', reporters)
      const acc = await client.getAccount(
        'band18e55d9xyrgyg3tk72zmg7s92uu8sd95jzgj73a',
      )
      console.log('account ', acc)
      const reqId = await client.getRequestIDByTxHash(
        'FF88A361014A8CC2283961D632F2A00BB9CC8C168D8AE7F307F50E5D8A3945D2',
      )
      console.log('reqId ', reqId)
      const lastBlock = await client.getLatestBlock()
      console.log(lastBlock)
      const chainId = await client.getChainID()
      console.log('chain id ', chainId)
    }

    async function sendTransaction() {
      let coin = new Coin()
      coin.setDenom('uband')
      coin.setAmount('100')
      const msg = new Message.CreateMsgRequest(
        37,
        calldata,
        16,
        10,
        'Blue',
        [coin],
        30000,
        60000,
        sender,
      )
      const msgAny = msg.toAny()
      const acc = await client.getAccount(sender)
      let accountNum = acc.accountNumber
      let sequence = acc.sequence
      let fee = new Fee()
      fee.addAmount(coin)
      fee.setGasLimit(200000)

      const txn = new Transaction()
      txn.withMessages(msgAny)
      txn.withAccountNum(accountNum)
      txn.withSequence(sequence)
      txn.withChainID(await client.getChainID())
      txn.withFee(fee)
      txn.withGas(2000000)
      txn.withMemo('')

      let tx_raw_bytes = txn.getTxData(privateKey)

      const syncTx = await client.sendTxSyncMode(tx_raw_bytes)
      console.log('sync tx ', syncTx)
    }

    getData()
    // sendTransaction()
  }, [])
  return (
    <div className="App">
      <span style={{ fontSize: '24px', marginBottom: '10px' }}>Prices</span>
      {pairs &&
        pairs.map(({ pair, rate }) => (
          <>
            <span style={{ marginBottom: '5px' }}>
              {pair}: {rate.toString()}
            </span>
          </>
        ))}
    </div>
  )
}

export default App
