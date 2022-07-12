import { BookTitle, StyledBook } from "./styles";

export interface IBook {
  title: string;
  author: string;
}

const Book = ({title, author}: IBook) => {
  return (
    <StyledBook>
      <BookTitle>El título del libro es: {title}</BookTitle>
      <div>Y su autor es: {author}</div>
    </StyledBook>
  );
};

export default Book;
