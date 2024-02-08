import { useState } from "react";
import { useGetExercisesQuery } from "../store/apis/exercisesApi";
import { useDeleteExerciseMutation } from "../store/apis/exercisesApi";

import ExerciseListItem from "./ExerciseListItem";
import ExerciseSets from "./ExerciseSets";

interface Props {
  workoutId: string;
}

function ExerciseList({ workoutId }: Props): JSX.Element {
  const [selectedExercise, setSelectedExercise] = useState(null);

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
                  onClick={(exercise) => setSelectedExercise(exercise)}
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
