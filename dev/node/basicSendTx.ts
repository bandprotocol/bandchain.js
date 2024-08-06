import { Client } from '../../lib'

const grpcEndpoint = 'https://laozi-testnet6.bandchain.org/grpc-web'
const client = new Client(grpcEndpoint)

async function exampleSendBlockTransaction() {
  const chainId = await client.getChainId()
  console.log(chainId)
}

;(async () => {
  console.log('Test sending an oracle request...')
  console.log(await exampleSendBlockTransaction())
})()
