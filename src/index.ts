const { ApolloServer } = require("apollo-server");

const { resolvers } = require("./graphql/resolvers");
const { typeDefs } = require("./graphql/schema");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then((param: any) => {
  console.log(`🚀  Server ready at ${param.url}`);
});
