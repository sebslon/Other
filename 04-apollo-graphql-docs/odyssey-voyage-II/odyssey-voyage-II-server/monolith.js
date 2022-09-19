const { ApolloServer, gql } = require('apollo-server');
const { buildSubgraphSchema } = require('@apollo/subgraph');

const { readFileSync } = require('fs');

const typeDefs = gql(readFileSync('./schema.graphql', { encoding: 'utf-8' }));

const resolvers = require('./resolvers');

const {
  BookingsDataSource,
  ReviewsDataSource,
  ListingsAPI,
  AccountsAPI,
  PaymentsAPI,
} = require('./services');

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
  dataSources: () => {
    return {
      bookingsDb: new BookingsDataSource(),
      reviewsDb: new ReviewsDataSource(),
      listingsAPI: new ListingsAPI(),
      accountsAPI: new AccountsAPI(),
      paymentsAPI: new PaymentsAPI(),
    };
  },
});

server
  .listen({ port: 4001 })
  .then(({ url }) => {
    console.log(`🚀 Monolith subgraph running at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
