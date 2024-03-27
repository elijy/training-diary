import { gql } from "@apollo/client";

export const ADD_EXERCISE = gql`
  mutation addExercise($name: String!, $workoutId: Int!) {
    addExercise(name: $name, workoutId: $workoutId) {
      id
      name
    }
  }
`;
