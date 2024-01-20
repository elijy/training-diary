import { useState } from "react";

function Exercise({ item, onAdd }) {
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);

  const handleAddSet = (e) => {
    e.preventDefault();
    onAdd(item.id, weight, reps);
  };

  return (
    <div>
      <div>{item.name}</div>
      <div>
        {item.sets.map((set, index) => {
          return (
            <div key={index}>
              {set.weight} x {set.reps}
            </div>
          );
        })}
      </div>
      <form>
        Weight:{" "}
        <input
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type="number"
        />
        Reps:{" "}
        <input
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          type="number"
        />
        <button onClick={handleAddSet}>add set</button>
      </form>
    </div>
  );
}

export default Exercise;
