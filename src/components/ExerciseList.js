import { useState } from "react";

import Exercise from "./Exercise";
import ExerciseSets from "./ExerciseSets";

function ExerciseList({ exercises, onAddSet }) {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className="columns">
      <div className="column">
        <div className="box">
          <div className="title is-3">Workout</div>
          {exercises.map((exercise) => {
            return (
              <Exercise
                key={exercise.id}
                exercise={exercise}
                onClick={(exercise) => setSelectedExercise(exercise)}
              />
            );
          })}
        </div>
      </div>
      <div className="column">
        {selectedExercise && (
          <ExerciseSets exercise={selectedExercise} onAddSet={onAddSet} />
        )}
      </div>
    </div>
  );
}

export default ExerciseList;
