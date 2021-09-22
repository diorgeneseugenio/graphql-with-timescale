const db = require('../db')

const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

module.exports = {
  resolvers: {
    Query: {
        allPageLoads: async () => {
            try {
                const messages = await db.PageLoads.findAll();
                return messages;
            } catch (e) {
                console.log('Error inserting data', e)
            }
        },  
    },
    Mutation: {
        createPageLoads: async () => {
            const userAgent = 'Chrome';
            const time = new Date().getTime();
        
            try {
                const response = await db.PageLoads.create({
                    userAgent, time
                });
        
                return response
            } catch (e) {
                console.log('Error inserting data', e)
            }
        }
    },
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value: any) {
          return new Date(value); // value from the client
        },
        serialize(value: any) {
          return value.getTime(); // value sent to the client
        },
        parseLiteral(ast: any) {
          if (ast.kind === Kind.INT) {
            return parseInt(ast.value, 10); // ast value is always in string format
          }
          return null;
        },
      })
  },
};
