import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { editOracleScript } from '../band'

function FormEditOracleScript() {
    // states
    const [owasmFile, setOwasmFile] = React.useState<string | ArrayBuffer | null>()
    const [owasmFileName, setOwasmFileName] = React.useState('')
    const [loadingOsEdit, setLoadingOsEdit] = React.useState<boolean>(false)
    const [txOsEdit, setTxOsEdit] = React.useState('')
    const [osId, setOsId] = React.useState('')

    // upload file
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

    // sendMsgEditOracleScript
    const sendMsgEditOracleScript = async () => {
        setTxOsEdit('')
        setLoadingOsEdit(true)
        const requestDs = await editOracleScript(owasmFile, osId)
        if (requestDs.txhash) {
            setTxOsEdit(requestDs.txhash)
        }
        setLoadingOsEdit(false)
    }

    return (
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
                <div className="form-input" style={{ marginBottom: '10px' }}>
                    <label htmlFor="osid_input" style={{ marginBottom: '8px', display: 'block' }}>Oracle Script ID:</label>
                    <input type="text" id="osid_input" onChange={e => setOsId(e.target.value)} style={{ textAlign: 'center' }} />
                </div>
                <div className="uploadfile" {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                        owasmFileName ? owasmFileName : <div className="btn btn-light btn-small">Select an .wasm file</div>
                    }
                </div>
                <button
                    className="btn btn-primary"
                    onClick={sendMsgEditOracleScript}
                    disabled={owasmFileName && osId ? false : true}
                >
                    {loadingOsEdit ? 'Editing...' : 'Edit Oracle Script'}
                </button>
                {txOsEdit ? (
                    <div style={{ marginBottom: '10px', marginTop: '40px' }}><h3>Result</h3>txhash: {txOsEdit}</div>
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}

export default FormEditOracleScript