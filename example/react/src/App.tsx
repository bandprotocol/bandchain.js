import React from 'react'
import FormEditOracleScript from 'components/FormEditOracleScript'
import FormCreateOracleScript from 'components/FormCreateOracleScript'
import FormCreateDataSource from 'components/FormCreateDataSource'
import FormEditDataSource from 'components/FormEditDataSource'
import LedgerExample from 'components/LedgerExample'

import './App.css'
import { Client, Data } from '@bandprotocol/bandchain.js'
import { makeRequest, getAccBalance } from './band'
import { EditOracleScriptWithLedger } from 'components/EditOracleScriptWithLedger'

// BandChain's Proof-of-Authority REST endpoint
// const endpoint = 'https://api-gm-lb.bandchain.org'
// const client = new Client(endpoint)

function App() {
  const grpcEndpoint = 'https://laozi-testnet4.bandchain.org/grpc-web'
  const client = new Client(grpcEndpoint)

  const [pairs, setPairs] = React.useState<Data.ReferenceData[]>()

  React.useEffect(() => {
    // Get standard price reference
    async function getReferenceData() {
      const data = await client.getReferenceData(['BTC/USD', 'ETH/BTC'], 3, 4)
      setPairs(data)
    }
    // getReferenceData()
    getAccBalance()
    // makeRequest()
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
                  <a href="#section-MsgCreateOracleScript">
                    MsgCreateOracleScript
                  </a>
                </li>
                <li>
                  <a href="#section-MsgEditOracleScript">MsgEditOracleScript</a>
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

            <FormCreateDataSource />
            <FormEditDataSource />
            <FormCreateOracleScript />
            <FormEditOracleScript />
            <LedgerExample />

            <EditOracleScriptWithLedger />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
