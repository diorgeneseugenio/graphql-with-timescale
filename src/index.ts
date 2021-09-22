const { ApolloServer } = require("apollo-server");

const { resolvers } = require("./resolvers");
const { typeDefs } = require("./schema");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then((param: any) => {
  console.log(`🚀  Server ready at ${param.url}`);
});
