import { useSelector, useDispatch } from "react-redux";
import { useGetExercisesQuery } from "../store/apis/exercisesApi";
import { useDeleteExerciseMutation } from "../store/apis/exercisesApi";
import { setSelectedExercise } from "../store/slices/selectedExerciseSlice";

import ExerciseListItem from "./ExerciseListItem";
import ExerciseSets from "./ExerciseSets";
import { Exercise } from "../types/Exercise";

function ExerciseList({ workoutId }: { workoutId: string }): JSX.Element {
  const dispatch = useDispatch();
  const selectedExercise = useSelector(
    (state: { selectedExercise: { selectedExercise: Exercise } }) =>
      state.selectedExercise.selectedExercise
  );
  const { data: exercises } = useGetExercisesQuery(workoutId);
  const [deleteExercise] = useDeleteExerciseMutation();

  return (
    <div className="columns">
      <div className="column">
        <div className="box">
          <div className="title is-3">Workout</div>
          <div>
            {exercises?.map((exercise) => {
              return (
                <ExerciseListItem
                  key={exercise.id}
                  exercise={exercise}
                  onClick={(exercise) =>
                    dispatch(setSelectedExercise(exercise))
                  }
                  onDelete={(exercise) => {
                    deleteExercise(exercise.id);
                    setSelectedExercise(null);
                  }}
                />
              );
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
