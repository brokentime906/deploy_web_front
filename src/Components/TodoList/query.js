import { gql } from "apollo-boost";

export const SEE_TODOES = gql`
  {
    seeTodoes {
      id
      content
      done
      createdAt
      updatedAt
    }
  }
`;
