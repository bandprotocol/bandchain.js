import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { createMsgCreateDataSource } from '../band'

export default function FormCreateDataSource() {
  const [loadingDs, setLoadingDs] = React.useState<boolean>(false)
  const [txDs, setTxDs] = React.useState('')
  const [dsFile, setDsFile] = React.useState<string | ArrayBuffer | null>()
  const [dsFileName, setDsFileName] = React.useState('')

  const onDrop = useCallback((acceptedFiles) => {
    setDsFileName(acceptedFiles[0].name)
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result
        setDsFile(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'text/x-python-script',
  })

  // MsgCreateDataSource
  const sendMsgCreateDataSource = async () => {
    setTxDs('')
    setLoadingDs(true)
    const requestDs = await createMsgCreateDataSource(dsFile)
    if (requestDs.txhash) {
      setTxDs(requestDs.txhash)
    }
    setLoadingDs(false)
  }

  return (
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
        <div className="uploadfile" {...getRootProps()}>
          <input {...getInputProps()} />
          {dsFileName ? (
            dsFileName
          ) : (
            <div className="btn btn-light btn-small">
              Upload a data source file (.py format)
            </div>
          )}
        </div>
        {txDs ? <div style={{ marginBottom: '20px' }}>txhash: {txDs}</div> : ''}
        <button
          className="btn btn-primary"
          onClick={sendMsgCreateDataSource}
          disabled={dsFile ? false : true}
        >
          {loadingDs ? 'Creating...' : 'Create Data Source'}
        </button>
      </div>
    </div>
  )
}
