import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSet, deleteSet, fetchSetsByExercise } from "../store";

import ExerciseName from "./ExerciseName";
import ListItem from "./core/ListItem";

function ExerciseSets({ exercise }) {
  const dispatch = useDispatch();
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);

  const sets = useSelector((state) => state.exercises.selectedSets);

  useEffect(() => {
    dispatch(fetchSetsByExercise(exercise.id));
  }, [dispatch, exercise]);

  const handleAddSet = () => {
    const weightNum = parseInt(weight) || 0;
    const repsNum = parseInt(reps) || 0;
    dispatch(
      createSet({ exerciseId: exercise.id, weight: weightNum, reps: repsNum })
    );
  };

  const handleDeleteSet = (id) => {
    dispatch(deleteSet(id));
  };

  return (
    <div className="box">
      <ExerciseName key={exercise.id} exercise={exercise} />
      {sets.map((set, index) => {
        return (
          <ListItem key={set.id} onDelete={() => handleDeleteSet(set.id)}>
            <div>
              <span className="has-text-weight-bold">Set {index + 1}:</span>{" "}
              {set.weight} x {set.reps}
            </div>
          </ListItem>
        );
      })}
      <div className="field is-grouped mt-2">
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
