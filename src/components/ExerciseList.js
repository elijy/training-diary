import { useState } from "react";

import Exercise from "./Exercise";
import ExerciseSets from "./ExerciseSets";

function ExerciseList({ exercises, onAddSet, onDeleteExercise, onDeleteSet }) {
  const [selectedExercise, setSelectedExercise] = useState(null);

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
                    onDeleteExercise={onDeleteExercise}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="column">
        {selectedExercise && (
          <ExerciseSets
            exercise={getSelectedExercise()}
            onAddSet={onAddSet}
            onDeleteSet={onDeleteSet}
          />
        )}
      </div>
    </div>
  );
}

export default ExerciseList;
