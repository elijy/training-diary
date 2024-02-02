import { useState } from "react";
import { useCreateExercisesMutation } from "../store/apis/exercisesApi";

function ExerciseCreate() {
  const [createExercise] = useCreateExercisesMutation();
  const [exercise, setExercise] = useState("");

  const handleCreateExercise = (e) => {
    e.preventDefault();
    createExercise(exercise);
    setExercise("");
  };

  return (
    <div className="box">
      <form onSubmit={handleCreateExercise}>
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
