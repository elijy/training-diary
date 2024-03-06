import { gql } from "@apollo/client";

export const ADD_EXERCISE = gql`
  mutation addExercise($name: String!, $workoutId: String!) {
    addExercise(name: $name, workoutId: $workoutId) {
      id
      name
    }
  }
`;
