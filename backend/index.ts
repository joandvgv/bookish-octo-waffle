import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const server = new ApolloServer({
  typeDefs, // schema
  resolvers, // resolvers
  csrfPrevention: true,
  cache: "bounded",
});

server.listen().then(({ url }) => {
  console.log("Server is ready at", url);
});
