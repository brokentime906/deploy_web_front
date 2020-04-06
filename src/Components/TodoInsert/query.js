import { gql } from "apollo-boost";

export const ADD_TODO = gql`
  mutation addTodo($content: String) {
    addTodo(content: $content) {
      id
      content
      done
      createdAt
      updatedAt
    }
  }
`;
