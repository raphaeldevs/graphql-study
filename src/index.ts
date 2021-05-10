import { ApolloServer, Config } from 'apollo-server'

type StartServerParams = Pick<Config, 'typeDefs' | 'resolvers'>

export function start({ typeDefs, resolvers }: StartServerParams) {
  const server = new ApolloServer({ typeDefs, resolvers })

  server
    .listen()
    .then(({ url }) => console.log(`🎈 Hi, I'm server running on ${url}`))
}