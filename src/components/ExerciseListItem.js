import { useDispatch } from "react-redux";
import { deleteExercise } from "../store";
import { setSelectedExercise } from "../store/slices/exercisesSlice";

import "./ExerciseListItem.css";

function ExerciseListItem({ exercise }) {
  const dispatch = useDispatch();

  return (
    <div className="exercise-list-item is-flex is-align-items-center is-justify-content-space-between">
      <div
        className="p-2 is-flex-grow-1"
        onClick={() => dispatch(setSelectedExercise(exercise))}
      >
        {exercise.name}
      </div>
      <button
        onClick={() => dispatch(deleteExercise(exercise.id))}
        className="delete is-small mr-2"
      ></button>
    </div>
  );
}

export default ExerciseListItem;
