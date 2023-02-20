import { gql } from "@apollo/client";

export const GET_DETAILS = gql`
    query GET_DETAILS {
        company {
            ceo
            cto
            name
        }
    }
`;
