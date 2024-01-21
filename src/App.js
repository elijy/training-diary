import { useState, useEffect } from "react";
import axios from "axios";
import Exercise from "./components/Exercise";

function App() {
  const [exercises, setExercises] = useState([]);
  const [exercise, setExercise] = useState("");

  const fetchExercises = async () => {
    const { data } = await axios.get("http://localhost:3001/exercises");
    setExercises([...data]);
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:3001/exercises", {
      name: exercise,
      sets: [],
    });
    setExercises([...exercises, { ...data }]);
    setExercise("");
  };

  const addSetsReps = async (id, weight, reps) => {
    const exToBeUpdated = exercises.find((ex) => ex.id === id);
    const { data } = await axios.put(`http://localhost:3001/exercises/${id}`, {
      ...exToBeUpdated,
      sets: [...exToBeUpdated.sets, { weight, reps }],
    });

    setExercises([...exercises.map((ex) => (ex.id === id ? { ...data } : ex))]);
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
