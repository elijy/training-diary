import { useSelector } from "react-redux";
import { useGetExercisesQuery } from "../store/apis/exercisesApi";

import ExerciseListItem from "./ExerciseListItem";
import ExerciseSets from "./ExerciseSets";

function ExerciseList() {
  const { data: exercises } = useGetExercisesQuery();

  const selectedExercise = useSelector(
    (state) => state.exercises.selectedExercise
  );

  return (
    <div className="columns">
      <div className="column">
        <div className="box">
          <div className="title is-3">Workout</div>
          <div>
            {exercises?.map((exercise) => {
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
