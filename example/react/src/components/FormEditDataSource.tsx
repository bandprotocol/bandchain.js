import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { createMsgEditDataSource } from '../band'

export default function FormEditDataSource() {
  const [loadingDsEdit, setLoadingDsEdit] = React.useState<boolean>(false)
  const [txDsEdit, setTxDsEdit] = React.useState('')
  const [dsId, setDsId] = React.useState('')
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

  // MsgEditDataSource
  const sendMsgEditDataSource = async () => {
    setTxDsEdit('')
    setLoadingDsEdit(true)
    const requestDs = await createMsgEditDataSource(dsFile, dsId)
    if (requestDs.txhash) {
      setTxDsEdit(requestDs.txhash)
    }
    setLoadingDsEdit(false)
  }

  return (
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
        <div className="form-input" style={{ marginBottom: '10px' }}>
          <label
            htmlFor="osid_input"
            style={{ marginBottom: '8px', display: 'block' }}
          >
            Data Source ID:
          </label>
          <input
            type="text"
            id="osid_input"
            onChange={(e) => setDsId(e.target.value)}
            style={{ textAlign: 'center' }}
          />
        </div>
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

        {txDsEdit ? (
          <div style={{ marginBottom: '10px' }}>txhash: {txDsEdit}</div>
        ) : (
          ''
        )}
        <button
          className="btn btn-primary"
          onClick={sendMsgEditDataSource}
          disabled={dsId ? false : true}
        >
          {loadingDsEdit ? 'Editing...' : 'Edit Data Source'}
        </button>
      </div>
    </div>
  )
}
