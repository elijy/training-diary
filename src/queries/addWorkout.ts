import { gql } from "@apollo/client";

export const ADD_WORKOUT = gql`
  mutation addWorkout($date: String!) {
    addWorkout(date: $date) {
      id
      date
    }
  }
`;
