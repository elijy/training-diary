import { useState } from "react";
import { useCreateExerciseMutation } from "../store/apis/exercisesApi";

function ExerciseCreate({ workoutId }) {
  const [createExercise] = useCreateExerciseMutation();
  const [exercise, setExercise] = useState("");

  const handleCreateExercise = (e) => {
    e.preventDefault();
    createExercise({ name: exercise, workoutId });
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
