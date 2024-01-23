import { useState, useEffect } from "react";
import useExcercisesContext from "../hooks/use-exercises-context";

import Exercise from "./Exercise";
import ExerciseSets from "./ExerciseSets";

function ExerciseList() {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const { exercises, fetchExercises, deleteExercise } = useExcercisesContext();

  // use callback here
  useEffect(() => {
    fetchExercises();
  }, []);

  const getSelectedExercise = () => {
    return exercises.find((ex) => ex.id === selectedExercise?.id);
  };

  return (
    <div className="columns">
      <div className="column">
        <div className="box">
          <div className="title is-3">Workout</div>
          <div className="menu-list">
            <ul>
              {exercises.map((exercise) => {
                return (
                  <Exercise
                    key={exercise.id}
                    exercise={exercise}
                    onClick={(exercise) => setSelectedExercise(exercise)}
                    onDeleteExercise={deleteExercise}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="column">
        {selectedExercise && <ExerciseSets exercise={getSelectedExercise()} />}
      </div>
    </div>
  );
}

export default ExerciseList;
