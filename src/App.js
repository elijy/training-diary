import { useState, useEffect } from "react";
import ExerciseList from "./components/ExerciseList";
import useExcercisesContext from "./hooks/use-exercises-context";

function App() {
  const {
    exercises,
    fetchExercises,
    createExercise,
    deleteExercise,
    addSet,
    deleteSet,
  } = useExcercisesContext();
  const [exercise, setExercise] = useState("");

  // use callback here
  useEffect(() => {
    fetchExercises();
  }, []);

  const handleCreateExercise = async (e) => {
    e.preventDefault();
    createExercise(exercise);
    setExercise("");
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

          <div className="container">
            <ExerciseList
              exercises={exercises}
              onDeleteExercise={deleteExercise}
              onAddSet={addSet}
              onDeleteSet={deleteSet}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
