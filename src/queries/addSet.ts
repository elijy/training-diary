import { gql } from "@apollo/client";

export const ADD_SET = gql`
  mutation addSet($exerciseId: Int!, $weight: Int, $reps: Int) {
    addSet(exerciseId: $exerciseId, weight: $weight, reps: $reps) {
      id
      weight
      reps
    }
  }
`;
