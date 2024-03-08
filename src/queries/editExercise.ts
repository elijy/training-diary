import { gql } from "@apollo/client";

export const EDIT_EXERCISE = gql`
  mutation editExercise($id: String!, $workoutId: String!, $name: String!) {
    editExercise(id: $id, workoutId: $workoutId, name: $name) {
      id
      name
    }
  }
`;
