import React, { useState } from 'react'
import { exampleEditOracleScriptWithLedger } from 'band'

export const EditOracleScriptWithLedger = () => {
  const [loading, setLoading] = useState(false)

  return (
    <button
      className="btn btn-primary"
      onClick={exampleEditOracleScriptWithLedger}
    >
      Change Oracle Script Ownership
    </button>
  )
}
