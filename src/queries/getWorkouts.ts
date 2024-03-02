import { gql } from "@apollo/client";

export const GET_WORKOUTS = gql`
  query getWorkouts {
    workouts {
      id
      date
    }
  }
`;
