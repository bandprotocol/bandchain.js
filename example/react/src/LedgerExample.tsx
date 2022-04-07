import React from 'react'
import { Wallet } from '@bandprotocol/bandchain.js'

const LedgerExample = () => {
  const { Ledger } = Wallet
  const [ledger, setLedger] = React.useState<Wallet.Ledger | undefined>()

  return (
    <>
      <span
        style={{
          fontSize: '22px',
          marginBottom: '16px',
          fontWeight: 600,
          marginTop: '24px',
        }}
      >
        Ledger Example
      </span>
      <div
        style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}
      >
        <button
          style={{
            backgroundColor: ledger ? '#4e4e4e' : '#4520E7',
            color: 'white',
            fontSize: '12px',
            width: '136px',
            height: '36px',
            borderRadius: '6px',
            cursor: ledger ? 'unset' : 'pointer',
            border: 'none',
            fontWeight: 600,
          }}
          onClick={async () => {
            const ledgerRes = await Ledger.connectLedgerWeb()
            setLedger(ledgerRes)
          }}
          disabled={ledger ? true : false}
        >
          Connect
        </button>
        {ledger && (
          <button
            style={{
              backgroundColor: 'white',
              color: '#4520E7',
              fontSize: '12px',
              width: '136px',
              height: '36px',
              borderRadius: '6px',
              cursor: 'pointer',
              border: 'none',
              fontWeight: 600,
              marginLeft: '16px',
            }}
            onClick={async () => {
              await ledger.disconnect()
              setLedger(undefined)
            }}
          >
            Disconnect
          </button>
        )}
      </div>
    </>
  )
}

export default LedgerExample
