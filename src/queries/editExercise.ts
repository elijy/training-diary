import { gql } from "@apollo/client";

export const EDIT_EXERCISE = gql`
  mutation editExercise($id: Int!, $name: String!) {
    editExercise(id: $id, name: $name) {
      id
      name
    }
  }
`;
