import { useQuery } from "@apollo/client";
import Book, { IBook } from "./Book";
import { GET_BOOKS } from "./utils";
const Books = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error troste</p>;

  return (
    <div>
      {data.books.map(({ title, author }: IBook) => (
        <Book key={title} title={title} author={author} />
      ))}
    </div>
  );
};

export default Books;
