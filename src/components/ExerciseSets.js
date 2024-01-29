import { useState } from "react";
import useExcercisesContext from "../hooks/use-exercises-context";

import ExerciseName from "./ExerciseName";

function ExerciseSets() {
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);

  const { addSet, deleteSet, selectedExercise } = useExcercisesContext();

  const handleAddSet = () => {
    const weightNum = parseInt(weight) || 0;
    const repsNum = parseInt(reps) || 0;
    addSet(selectedExercise.id, weightNum, repsNum);
  };

  const handleDeleteSet = (index) => {
    deleteSet(selectedExercise.id, index);
  };

  return (
    <div className="box">
      <ExerciseName key={selectedExercise} exercise={selectedExercise} />
      <div className="menu">
        <ul className="menu-list">
          {selectedExercise?.sets.map((set, index) => {
            return (
              <li key={index}>
                <a>
                  <div className="is-flex is-align-items-center is-justify-content-space-between">
                    <div>
                      <span className="has-text-weight-bold">
                        Set {index + 1}:
                      </span>{" "}
                      {set.weight} x {set.reps}
                    </div>
                    <button
                      onClick={() => handleDeleteSet(index)}
                      className="delete is-small"
                    ></button>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <label className="label">Weight:</label>

          <input
            value={weight || ""}
            onChange={(e) => setWeight(e.target.value)}
            type="number"
            className="input"
          />
        </div>

        <div className="control">
          <label className="label">Reps:</label>

          <input
            value={reps || ""}
            onChange={(e) => setReps(e.target.value)}
            type="number"
            className="input"
          />
        </div>

        <div className="control is-align-self-flex-end">
          <button className="button is-primary" onClick={handleAddSet}>
            Add Set
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExerciseSets;