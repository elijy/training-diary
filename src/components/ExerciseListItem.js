import { useDispatch } from "react-redux";
import { setSelectedExercise } from "../store/slices/exercisesSlice";
import { useDeleteExerciseMutation } from "../store/apis/exercisesApi";
import ListItem from "./core/ListItem";

function ExerciseListItem({ exercise }) {
  const [deleteExercise] = useDeleteExerciseMutation();
  const dispatch = useDispatch();

  return (
    <ListItem
      onClick={() => dispatch(setSelectedExercise(exercise))}
      onDelete={() => deleteExercise(exercise.id)}
    >
      {exercise.name}
    </ListItem>
  );
}

export default ExerciseListItem;
