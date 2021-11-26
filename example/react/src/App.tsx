import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import './App.css'
import { Client, Data } from '@bandprotocol/bandchain.js'
import { createMsgCreateDataSource, createMsgEditDataSource, createOracleScript, editOracleScript } from './band'

function App() {
  const grpcEndpoint = 'https://laozi-testnet4.bandchain.org/grpc-web'
  const client = new Client(grpcEndpoint)

  const [pairs, setPairs] = React.useState<Data.ReferenceData[]>()

  const [loadingDs, setLoadingDs] = React.useState<boolean>(false)
  const [loadingDsEdit, setLoadingDsEdit] = React.useState<boolean>(false)
  const [loadingOs, setLoadingOs] = React.useState<boolean>(false)
  const [loadingOsEdit, setLoadingOsEdit] = React.useState<boolean>(false)

  const [txDs, setTxDs] = React.useState('')
  const [txDsEdit, setTxDsEdit] = React.useState('')
  const [txOs, setTxOs] = React.useState('')

  const [txOsEdit, setTxOsEdit] = React.useState('')

  const [owasmFile, setOwasmFile] = React.useState<string | ArrayBuffer | null>()
  const [owasmFileName, setOwasmFileName] = React.useState('')

  // const handleFileUpload = (rawFile: any) => {
  //   console.log(rawFile)
  //   let reader = new FileReader();
  //   reader.onload = (event) => {
  //     console.log(event)
  //   };

  //   reader.onerror = (err) => {
  //     console.log(err)
  //   };

  //   reader.readAsBinaryString(rawFile);
  // }

  const onDrop = useCallback((acceptedFiles) => {
    setOwasmFileName(acceptedFiles[0].name)
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result
        setOwasmFile(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })

  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'application/wasm' })

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

  // MsgCreateOracleScript
  const sendMsgCreateOracleScript = async () => {
    setTxOs('')
    setLoadingOs(true)
    const requestDs = await createOracleScript(owasmFile)
    if (requestDs.txhash) {
      setTxOs(requestDs.txhash)
    }
    setLoadingOs(false)
  }

  // sendMsgEditOracleScript
  const sendMsgEditOracleScript = async () => {
    setTxOsEdit('')
    setLoadingOsEdit(true)
    const requestDs = await editOracleScript(owasmFile)
    if (requestDs.txhash) {
      setTxOsEdit(requestDs.txhash)
    }
    setLoadingOsEdit(false)
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
                  <a href="#section-MsgCreateOracleScript">MsgCreateOracleScript</a>
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

            <div className="card">
              <h2>
                <a
                  className="ref-sec"
                  id="section-MsgCreateOracleScript"
                  href="#section-MsgCreateOracleScript"
                >
                  #
                </a>{' '}
                MsgCreateOracleScript
              </h2>
              <div className="preview" style={{ textAlign: 'center' }}>

                {txOs ? (
                  <div style={{ marginBottom: '20px' }}>txhash: {txOs}</div>
                ) : (
                  ''
                )}

                <div className="uploadfile" {...getRootProps()}>
                  <input {...getInputProps()} />
                  {
                    owasmFileName ? owasmFileName : <div className="btn btn-light btn-small">Select an .wasm file</div>
                  }
                </div>

                <button
                  className="btn btn-primary"
                  onClick={sendMsgCreateOracleScript}
                  disabled={owasmFileName ? false : true}
                >
                  {loadingOs ? 'Creating...' : 'Create Oracle Script'}
                </button>
              </div>
            </div>

            <div className="card">
              <h2>
                <a
                  className="ref-sec"
                  id="section-MsgEditOracleScript"
                  href="#section-MsgEditOracleScript"
                >
                  #
                </a>{' '}
                MsgEditOracleScript
              </h2>
              <div className="preview" style={{ textAlign: 'center' }}>
                {txOsEdit ? (
                  <div style={{ marginBottom: '20px' }}>txhash: {txOsEdit}</div>
                ) : (
                  ''
                )}
                <button
                  className="btn btn-primary"
                  onClick={sendMsgEditOracleScript}
                  disabled={owasmFileName ? false : true}
                >
                  {loadingOsEdit ? 'Editing...' : 'Edit Oracle Script'}
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
