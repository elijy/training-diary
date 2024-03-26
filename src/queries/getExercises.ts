import { gql } from "@apollo/client";

export const GET_EXERCISES = gql`
  query getExercises($workoutId: Int!) {
    exercises(workoutId: $workoutId) {
      id
      name
    }
  }
`;
