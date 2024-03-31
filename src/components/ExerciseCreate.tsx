import { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_EXERCISE, GET_EXERCISES } from "../queries";

function ExerciseCreate({ workoutId }: { workoutId: string }): JSX.Element {
  const [createExercise] = useMutation(ADD_EXERCISE, {
    refetchQueries: [{ query: GET_EXERCISES }],
  });

  const [exercise, setExercise] = useState("");

  const handleCreateExercise = (e: React.FormEvent) => {
    e.preventDefault();
    createExercise({
      variables: { name: exercise, workoutId: Number(workoutId) },
    });
    setExercise("");
  };

  return (
    <div className="box">
      <form data-testid="form" onSubmit={handleCreateExercise}>
        <div className="field">
          <label className="label">Add Exercise</label>
          <div className="control">
            <input
              className="input"
              placeholder="Bench Press"
              type="text"
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ExerciseCreate;
