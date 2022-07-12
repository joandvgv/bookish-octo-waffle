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

export const resolvers = {
  Query: {
    books: () => books,
  },
};
