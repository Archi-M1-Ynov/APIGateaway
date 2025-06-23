import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import { typeDefs, resolvers } from "./schema.js";

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Gateway GraphQL running at ${url}`);
});
