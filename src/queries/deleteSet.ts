import { gql } from "@apollo/client";

export const DELETE_SET = gql`
  mutation deleteSet($id: String!) {
    deleteSet(id: $id) {
      id
      weight
      reps
    }
  }
`;
