import { useDispatch } from "react-redux";
import { deleteExercise } from "../store";
import { setSelectedExercise } from "../store/slices/exercisesSlice";

import ListItem from "./core/ListItem";

function ExerciseListItem({ exercise }) {
  const dispatch = useDispatch();

  return (
    <ListItem
      onClick={() => dispatch(setSelectedExercise(exercise))}
      onDelete={() => dispatch(deleteExercise(exercise.id))}
    >
      {exercise.name}
    </ListItem>
  );
}

export default ExerciseListItem;
