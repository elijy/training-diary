import { useState, useEffect } from "react";
import axios from "axios";
import ExerciseList from "./components/ExerciseList";

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

  const createExercise = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:3001/exercises", {
      name: exercise,
      sets: [],
    });
    setExercises([...exercises, { ...data }]);
    setExercise("");
  };

  const deleteExercise = async (id) => {
    const { data } = await axios.delete(
      `http://localhost:3001/exercises/${id}`
    );
    setExercises([...exercises.filter((exercise) => exercise.id !== data.id)]);
  };

  const addSet = async (id, weight, reps) => {
    const exToBeUpdated = exercises.find((ex) => ex.id === id);
    const { data } = await axios.put(`http://localhost:3001/exercises/${id}`, {
      ...exToBeUpdated,
      sets: [...exToBeUpdated.sets, { weight, reps }],
    });

    setExercises([...exercises.map((ex) => (ex.id === id ? { ...data } : ex))]);
  };

  return (
    <div>
      <div className="hero is-primary">
        <div className="hero-body">
          <h1 className="title">Training App</h1>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="box">
            <form onSubmit={createExercise}>
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

          <div className="container">
            <ExerciseList
              exercises={exercises}
              onDeleteExercise={deleteExercise}
              onAddSet={addSet}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
