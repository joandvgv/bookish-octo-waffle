import { Hpta } from "./styles";

export interface IBook {
  title: string;
  author: string;
}

const Book = ({title, author}: IBook) => {
  return (
    <div>
      <Hpta>El título del libro es: {title}</Hpta>
      <div>Y su autor es: {author}</div>
    </div>
  );
};

export default Book;
