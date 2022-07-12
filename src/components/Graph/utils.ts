import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
{
    books{
        author
        title
    }
}
`;

