import { useState } from "react";
import {
  useGetSetsQuery,
  useCreateSetMutation,
  useDeleteSetMutation,
} from "../store/apis/setsApi";

import ExerciseName from "./ExerciseName";
import ListItem from "./core/ListItem";
import { Exercise } from "../types/Exercise";

function ExerciseSets({ exercise }: { exercise: Exercise }): JSX.Element {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");

  const { data: sets } = useGetSetsQuery(exercise.id);
  const [createSet] = useCreateSetMutation();
  const [deleteSet] = useDeleteSetMutation();

  const handleAddSet = () => {
    const weightNum = parseInt(weight) || 0;
    const repsNum = parseInt(reps) || 0;
    createSet({ exerciseId: exercise.id, weight: weightNum, reps: repsNum });
  };

  const handleDeleteSet = (id) => {
    deleteSet(id);
  };

  return (
    <div className="box">
      <ExerciseName key={exercise.id} exercise={exercise} />
      {sets?.map((set, index) => {
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
