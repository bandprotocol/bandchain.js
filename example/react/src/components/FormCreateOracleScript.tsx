import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { createOracleScript } from '../band'

function FormEditOracleScript() {
  const [txOs, setTxOs] = React.useState('')
  const [loadingOs, setLoadingOs] = React.useState<boolean>(false)
  const [owasmFile, setOwasmFile] = React.useState<
    string | ArrayBuffer | null
  >()
  const [owasmFileName, setOwasmFileName] = React.useState('')

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
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'application/wasm',
  })

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

  return (
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
        <div className="uploadfile" {...getRootProps()}>
          <input {...getInputProps()} />
          {owasmFileName ? (
            owasmFileName
          ) : (
            <div className="btn btn-light btn-small">Select an .wasm file</div>
          )}
        </div>

        <button
          className="btn btn-primary"
          onClick={sendMsgCreateOracleScript}
          disabled={owasmFileName ? false : true}
        >
          {loadingOs ? 'Creating...' : 'Create Oracle Script'}
        </button>
        {txOs ? (
          <div style={{ marginBottom: '10px', marginTop: '40px' }}>
            <h3>Result</h3>txhash: {txOs}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default FormEditOracleScript
