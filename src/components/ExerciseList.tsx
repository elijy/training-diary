import { useSelector, useDispatch } from "react-redux";
import { setSelectedExercise } from "../store/slices/selectedExerciseSlice";

import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

import { GET_EXERCISES } from "../queries/getExercises";
import { DELETE_EXERCISE } from "../queries/deleteExercise";

import ExerciseListItem from "./ExerciseListItem";
import ExerciseSets from "./ExerciseSets";

import { Exercise } from "../types/Exercise";

function ExerciseList({ workoutId }: { workoutId: string }): JSX.Element {
  const dispatch = useDispatch();
  const selectedExercise = useSelector(
    (state: { selectedExercise: { selectedExercise: Exercise } }) =>
      state.selectedExercise.selectedExercise
  );
  const { data }: { data: { exercises: Exercise[] } } = useQuery(
    GET_EXERCISES,
    { variables: { workoutId } }
  );
  const [deleteExercise] = useMutation(DELETE_EXERCISE);

  return (
    <div className="columns">
      <div className="column">
        <div className="box">
          <div className="title is-3">Workout</div>
          <div>
            {data?.exercises?.map((exercise) => {
              return (
                <ExerciseListItem
                  key={exercise.id}
                  exercise={exercise}
                  onClick={(exercise) =>
                    dispatch(setSelectedExercise(exercise))
                  }
                  onDelete={(exercise) => {
                    deleteExercise({ variables: { id: exercise.id } });
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
