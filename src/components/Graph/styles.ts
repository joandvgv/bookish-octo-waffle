import styled from "styled-components";

export const BookTitle = styled.div`
  font-size: 20px;
`;

export const StyledBooks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
`;

export const StyledBook = styled.div`

    text-align: center;
    background: #17B4F1;
    padding: 5px;
    border: solid 3px black;

    &:hover {
        cursor: pointer;
        background: #1497CB;
    } 
`
