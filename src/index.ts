import 'reflect-metadata'

import { start } from './server'

import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

try {
  start({ typeDefs, resolvers })
} catch(error) {
  console.log('Deu pau no servidor :(')
  console.error(error)
}