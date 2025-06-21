// graphql-api/server.js
const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql` type Query { hello(name: String): String! } `;
const resolvers = { Query: { hello: (_, { name }) => `Hola ${name || 'Mundo'} GraphQL` } };
const server = new ApolloServer({ typeDefs, resolvers });
server.listen(3006).then(({ url }) => console.log(`GraphQL listo en ${url}`));