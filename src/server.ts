import { ApolloServer, Config } from 'apollo-server'

import createConnection from './database'

type StartServerParams = Pick<Config, 'typeDefs' | 'resolvers'>

export async function start({ typeDefs, resolvers }: StartServerParams) {
  await createConnection()

  const server = new ApolloServer({ typeDefs, resolvers })

  server
    .listen()
    .then(({ url }) => console.log(`🎈 Hi, I'm server running on ${url}`))
}