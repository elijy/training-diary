import { useDispatch } from "react-redux";
import { deleteExercise } from "../store";
import { setSelectedExercise } from "../store/slices/exercisesSlice";

function Exercise({ exercise }) {
  const dispatch = useDispatch();

  return (
    <li>
      <a>
        <div
          className="is-flex is-align-items-center is-justify-content-space-between"
          onClick={() => dispatch(setSelectedExercise(exercise))}
        >
          {exercise.name}
          <button
            onClick={() => dispatch(deleteExercise(exercise.id))}
            className="delete is-small"
          ></button>
        </div>
      </a>
    </li>
  );
}

export default Exercise;
