import { gql } from "@apollo/client";

export const DELETE_SET = gql`
  mutation deleteSet($id: Int!) {
    deleteSet(id: $id) {
      id
      weight
      reps
    }
  }
`;
