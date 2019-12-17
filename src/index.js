const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const typeDefs = `
type Query {
  dogName: String!
}
`;

const resolvers = {
  Query: {
    dogName: () => `Tommy the chihuahua`
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/schema.graphql',
      endpoint: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJkZW1vQGRldiIsInJvbGVzIjpbImFkbWluIl19LCJpYXQiOjE1NzY1MDAwODAsImV4cCI6MTU3NzEwNDg4MH0.KXostArpacJenK5gFSI-7Aiy6ut5MsAz1V3EUPnqDfM',
      secret: 'testsecret',
      debug: true
    })
  })
});
server.start(() => console.log(`Server address: http://localhost:4000`));