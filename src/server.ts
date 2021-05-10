import { start } from './index'

import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

start({ typeDefs, resolvers })
