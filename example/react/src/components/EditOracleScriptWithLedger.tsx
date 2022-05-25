import React, { useState } from 'react'
import { exampleEditOracleScriptWithLedger } from 'band'

export const EditOracleScriptWithLedger = () => {
  return (
    <button
      className="btn btn-primary"
      onClick={exampleEditOracleScriptWithLedger}
    >
      Change Oracle Script Ownership
    </button>
  )
}
