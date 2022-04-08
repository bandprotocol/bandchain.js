import React from 'react'
import { Wallet } from '@bandprotocol/bandchain.js'
import { sendCoinWithLedger } from 'band'

interface Address {
  bech32_address: string
  pubKey: Wallet.PublicKey
}

const defaultAddress = {
  bech32_address: '',
  pubKey: Wallet.PublicKey.fromHex(''),
}

export const LedgerExample = () => {
  const { Ledger } = Wallet
  const [ledger, setLedger] = React.useState<Wallet.Ledger | undefined>()
  const [address, setAddress] = React.useState<Address>(defaultAddress)
  const [txRes, setTxRes] = React.useState<any>(null)

  React.useEffect(() => {
    ;(async () => {
      if (ledger) {
        const { bech32_address, pubKey } =
          await ledger.getPubKeyAndBech32Address()
        setAddress({ bech32_address, pubKey })
      }
    })()
  }, [ledger])

  return (
    <div className="card">
      <h2>
        <a
          className="ref-sec"
          id="section-LedgerExample"
          href="#section-LedgerExample"
        >
          #
        </a>
        Ledger Example
      </h2>
      <div className="preview">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <button
            className="btn btn-primary"
            style={{
              backgroundColor: ledger ? '#4e4e4e' : '#4520E7',
              cursor: ledger ? 'unset' : 'pointer',
              marginRight: 16,
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
              className="btn btn-light"
              onClick={async () => {
                await ledger.disconnect()
                setLedger(undefined)
                setAddress(defaultAddress)
                setTxRes(null)
              }}
            >
              Disconnect
            </button>
          )}
        </div>
        <div
          style={{
            fontWeight: 600,
            marginTop: 24,
            fontSize: 14,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          Public Key: {address.pubKey.toHex()}
          <br />
          <br />
          Bech32 Address: {address.bech32_address}
        </div>
        {ledger && (
          <>
            <h3 style={{ marginTop: 32, marginBottom: 8 }}>Transaction Test</h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <button
                className="btn btn-primary"
                onClick={async () => {
                  const res = await sendCoinWithLedger(
                    {
                      amount: '1',
                      receiver: 'band19zpx49n8gyaqrscaklrzynm8sgavfkcmjlap9r',
                    },
                    ledger,
                    address,
                  )
                  setTxRes(res)
                }}
              >
                Send Coin
              </button>
              <h5 style={{ marginLeft: 12 }}>
                Try sending 1 testnet uband to
                band19zpx49n8gyaqrscaklrzynm8sgavfkcmjlap9r
              </h5>
            </div>
            <pre>{txRes && JSON.stringify(txRes, null, 2)}</pre>
          </>
        )}
      </div>
    </div>
  )
}

export default LedgerExample
