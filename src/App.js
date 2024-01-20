import { useState } from "react";
import Excercise from "./components/Excercise";

function App() {
  const [excercises, setExcercises] = useState([]);
  const [excercise, setExcercise] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setExcercises([...excercises,{id: Math.floor(Math.random() * 999), name: excercise, sets: []}])
    setExcercise('');
  }

  const addSetsReps = (id, weight, reps) => {
    setExcercises([
      ...excercises.map(ex => ex.id === id ? {...ex, sets: [...ex.sets, {weight, reps}]} : ex)
    ])
  }

  return (
    <div>
      Training App
      <form onSubmit={submitHandler}>
        <label>Excercise: </label>
        <input value={excercise} onChange={(e) => setExcercise(e.target.value)}/>
        <button>Add</button>
      </form>
      {excercises.map(excercise => {
        return (
          <Excercise key={excercise.id} item={excercise} onAdd={addSetsReps}/>
        )
      })}
    </div>
  );
}

export default App;
