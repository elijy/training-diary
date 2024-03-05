import { gql } from "@apollo/client";

export const GET_SETS = gql`
  query getSets($exerciseId: String!) {
    sets(exerciseId: $exerciseId) {
      id
      weight
      reps
    }
  }
`;
