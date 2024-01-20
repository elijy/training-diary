import { useState } from "react";
import Exercise from "./components/Exercise";

function App() {
  const [exercises, setExercises] = useState([]);
  const [exercise, setExercise] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setExercises([
      ...exercises,
      { id: Math.floor(Math.random() * 999), name: exercise, sets: [] },
    ]);
    setExercise("");
  };

  const addSetsReps = (id, weight, reps) => {
    setExercises([
      ...exercises.map((ex) =>
        ex.id === id ? { ...ex, sets: [...ex.sets, { weight, reps }] } : ex
      ),
    ]);
  };

  return (
    <div>
      Training App
      <form onSubmit={submitHandler}>
        <label>Excercise: </label>
        <input value={exercise} onChange={(e) => setExercise(e.target.value)} />
        <button>Add</button>
      </form>
      {exercises.map((excercise) => {
        return (
          <Exercise key={excercise.id} item={excercise} onAdd={addSetsReps} />
        );
      })}
    </div>
  );
}

export default App;
