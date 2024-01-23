import { useState } from "react";

function ExerciseSets({ exercise, onAddSet, onDeleteSet }) {
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);

  const handleAddSet = () => {
    const weightNum = parseInt(weight) || 0;
    const repsNum = parseInt(reps) || 0;

    onAddSet(exercise.id, weightNum, repsNum);
  };

  const handleDeleteSet = (index) => {
    onDeleteSet(exercise.id, index);
  };

  return (
    <div className="box">
      <div className="title is-4">{exercise?.name}</div>
      <div className="menu">
        <ul className="menu-list">
          {exercise?.sets.map((set, index) => {
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
