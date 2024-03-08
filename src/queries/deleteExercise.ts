import { gql } from "@apollo/client";

export const DELETE_EXERCISE = gql`
  mutation deleteExercise($id: String!) {
    deleteExercise(id: $id) {
      id
    }
  }
`;
