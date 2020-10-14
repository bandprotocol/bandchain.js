const BandChain = require('./lib/BandChain')

;(async () => {
  const bandchain = new BandChain('https://poa-api-backup1.bandchain.org')
  const rates = await bandchain.getReferenceData(['XHV/USD', 'UNI/USD'])
  console.log(rates)
})()
