import React from 'react'
import './App.css'
import { Client, Data } from '@bandprotocol/bandchain.js'
import { createMsgCreateDataSource, createMsgEditDataSource } from './band'

function App() {
  const grpcEndpoint = 'https://laozi-testnet4.bandchain.org/grpc-web'
  const client = new Client(grpcEndpoint)

  const [pairs, setPairs] = React.useState<Data.ReferenceData[]>()
  const [loadingDs, setLoadingDs] = React.useState<boolean>(false)
  const [loadingDsEdit, setLoadingDsEdit] = React.useState<boolean>(false)
  const [txDs, setTxDs] = React.useState('')
  const [txDsEdit, setTxDsEdit] = React.useState('')

  // MsgCreateDataSource
  const sendMsgCreateDataSource = async () => {
    setTxDs('')
    setLoadingDs(true)
    const requestDs = await createMsgCreateDataSource()
    if (requestDs.txhash) {
      setTxDs(requestDs.txhash)
    }
    setLoadingDs(false)
  }

  // MsgEditDataSource
  const sendMsgEditDataSource = async () => {
    setTxDsEdit('')
    setLoadingDsEdit(true)
    const requestDs = await createMsgEditDataSource()
    if (requestDs.txhash) {
      setTxDsEdit(requestDs.txhash)
    }
    setLoadingDsEdit(false)
  }

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
      <div className="container">
        <div className="row">
          <div className="col" style={{ maxWidth: '25%', flex: '0 0 25%' }}>
            <div className="sidebar">
              <h3>Examples</h3>
              <ul className="sidebar-list">
                <li>
                  <a href="#section-getReferenceData">getReferenceData</a>
                </li>
                <li>
                  <a href="#section-MsgCreateDataSource">MsgCreateDataSource</a>
                </li>
                <li>
                  <a href="#section-MsgEditDataSource">MsgEditDataSource</a>
                </li>
                <li>
                  <a
                    href="https://github.com/bandprotocol/bandchain.js/tree/master/example/react"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Full Source Code
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col" style={{ maxWidth: '75%', flex: '0 0 75%' }}>
            <div className="card">
              <h2>
                <a
                  className="ref-sec"
                  id="section-getReferenceData"
                  href="#section-getReferenceData"
                >
                  #
                </a>{' '}
                getReferenceData
              </h2>
              <div className="preview" style={{ textAlign: 'center' }}>
                <h3 style={{ marginBottom: '20px', marginTop: '0' }}>Prices</h3>
                {pairs &&
                  pairs.map(({ pair, rate }) => (
                    <div key={pair}>
                      <span style={{ marginBottom: '5px' }}>
                        {pair}: {rate.toString()}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="card">
              <h2>
                <a
                  className="ref-sec"
                  id="section-MsgCreateDataSource"
                  href="#section-MsgCreateDataSource"
                >
                  #
                </a>{' '}
                MsgCreateDataSource
              </h2>
              <div className="preview" style={{ textAlign: 'center' }}>
                {txDs ? (
                  <div style={{ marginBottom: '20px' }}>txhash: {txDs}</div>
                ) : (
                  ''
                )}
                <button
                  className="btn btn-primary"
                  onClick={sendMsgCreateDataSource}
                >
                  {loadingDs ? 'Creating...' : 'Create Data Source'}
                </button>
              </div>
            </div>
            <div className="card">
              <h2>
                <a
                  className="ref-sec"
                  id="section-MsgEditDataSource"
                  href="#section-MsgEditDataSource"
                >
                  #
                </a>{' '}
                MsgEditDataSource
              </h2>
              <div className="preview" style={{ textAlign: 'center' }}>
                {txDsEdit ? (
                  <div style={{ marginBottom: '20px' }}>txhash: {txDsEdit}</div>
                ) : (
                  ''
                )}
                <button
                  className="btn btn-primary"
                  onClick={sendMsgEditDataSource}
                >
                  {loadingDsEdit ? 'Editing...' : 'Edit Data Source'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
