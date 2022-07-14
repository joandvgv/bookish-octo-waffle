import { Query } from "type-graphql";
import { Book } from "../models/Book.model";
import { getCharacters } from "../services/characters";

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
  {
    title: "El resplandor",
    author: "Stephen King",
  },
  {
    title: "Padre Rico Padre Pobre",
    author: "Robert Kiyosaki",
  },
];

export class BookResolver {
  @Query(() => [Book])
  async books(): Promise<Book[]> {
    const characters = await getCharacters();

    return characters.map((character: any) => ({
      // no hagan esto
      title: character.status,
      author: character.name,
    }));
  }
}
