import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { BookResolver } from "./resolvers/book.resolver";

async function runServer() {
  const schema = await buildSchema({
    resolvers: [BookResolver],
    emitSchemaFile: true,
  });

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
  });

  const { url } = await server.listen(4000);
  console.log("Server is ready at", url);
}

runServer();
