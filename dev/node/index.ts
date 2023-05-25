import { exampleCreateDataSource, exampleEditDataSource } from './dataSource'
import { exampleSendBlockTransaction } from './basicSendTx'
import { exampleGetReferenceData } from './getReferenceData'
import {
  exampleCreateOracleScript,
  exampleEditOracleScript,
} from './oracleScript'
;(async () => {
  console.log('Creating a new data source...')
  const responseDS = await exampleCreateDataSource()
  const rawLogDS = JSON.parse(responseDS.rawLog)
  const datasourceID = rawLogDS[0].events[0].attributes[0].value
  console.log(responseDS)
  console.log('Editing a new data source...')
  console.log(await exampleEditDataSource(datasourceID))
  console.log('Test sending an oracle request...')
  console.log(await exampleSendBlockTransaction())
  console.log('Test getting reference data...')
  console.log(await exampleGetReferenceData())
  console.log('Creating an oracle script...')
  console.log(await exampleCreateOracleScript())
  const responseOS = await exampleCreateOracleScript()
  const rawLogOS = JSON.parse(responseOS.rawLog)
  const oraclescriptID = rawLogOS[0].events[0].attributes[0].value
  console.log(responseOS)
  console.log('Editing an oracle script...')
  console.log(await exampleEditOracleScript(oraclescriptID))
})()
