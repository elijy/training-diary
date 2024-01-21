import { useState } from "react";

function ExerciseSets({ exercise, onAddSet }) {
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);

  const handleAddSet = () => {
    onAddSet(exercise.id, weight, reps);
  };

  return (
    <div className="box">
      <div className="title is-4">{exercise?.name}</div>
      {exercise?.sets.map((set, index) => {
        return (
          <div key={index}>
            {set.weight} x {set.reps}
          </div>
        );
      })}

      <div className="field is-grouped">
        <div className="control">
          <label className="label">Weight:</label>

          <input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            type="number"
            className="input"
          />
        </div>

        <div className="control">
          <label className="label">Reps:</label>

          <input
            value={reps}
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
