import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExercises } from "../store";

import ExerciseListItem from "./ExerciseListItem";
import ExerciseSets from "./ExerciseSets";

function ExerciseList() {
  const dispatch = useDispatch();

  const exercises = useSelector((state) => state.exercises.exercises);
  const selectedExercise = useSelector(
    (state) => state.exercises.selectedExercise
  );

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  return (
    <div className="columns">
      <div className="column">
        <div className="box">
          <div className="title is-3">Workout</div>
          <div>
            {exercises.map((exercise) => {
              return <ExerciseListItem key={exercise.id} exercise={exercise} />;
            })}
          </div>
        </div>
      </div>
      <div className="column">
        {selectedExercise && <ExerciseSets exercise={selectedExercise} />}
      </div>
    </div>
  );
}

export default ExerciseList;
