import { useEffect } from "react";
import useExcercisesContext from "../hooks/use-exercises-context";

import Exercise from "./Exercise";
import ExerciseSets from "./ExerciseSets";

function ExerciseList() {
  const { exercises, fetchExercises, selectedExercise } =
    useExcercisesContext();

  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  return (
    <div className="columns">
      <div className="column">
        <div className="box">
          <div className="title is-3">Workout</div>
          <div className="menu-list">
            <ul>
              {exercises.map((exercise) => {
                return <Exercise key={exercise.id} exercise={exercise} />;
              })}
            </ul>
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