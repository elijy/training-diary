import { gql } from "@apollo/client";

export const DELETE_WORKOUT = gql`
  mutation deleteWorkout($id: Int!) {
    deleteWorkout(id: $id) {
      id
      date
    }
  }
`;
