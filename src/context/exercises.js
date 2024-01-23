import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const ExerciseContext = createContext();

function Provider({ children }) {
  const [exercises, setExercises] = useState([]);

  const fetchExercises = async () => {
    const { data } = await axios.get("http://localhost:3001/exercises");
    setExercises([...data]);
  };

  const createExercise = async (exercise) => {
    const { data } = await axios.post("http://localhost:3001/exercises", {
      name: exercise,
      sets: [],
    });
    setExercises([...exercises, { ...data }]);
  };

  const deleteExercise = async (id) => {
    const { data } = await axios.delete(
      `http://localhost:3001/exercises/${id}`
    );
    setExercises([...exercises.filter((exercise) => exercise.id !== data.id)]);
  };

  const addSet = async (id, weight, reps) => {
    const exerciseToBeUpdated = exercises.find((ex) => ex.id === id);
    const { data } = await axios.put(`http://localhost:3001/exercises/${id}`, {
      ...exerciseToBeUpdated,
      sets: [...exerciseToBeUpdated.sets, { weight, reps }],
    });

    setExercises([...exercises.map((ex) => (ex.id === id ? { ...data } : ex))]);
  };

  const deleteSet = async (id, index) => {
    const exerciseToBeUpdated = exercises.find((ex) => ex.id === id);
    const { data } = await axios.put(`http://localhost:3001/exercises/${id}`, {
      ...exerciseToBeUpdated,
      sets: [...exerciseToBeUpdated.sets.toSpliced(index, 1)],
    });

    setExercises([...exercises.map((ex) => (ex.id === id ? { ...data } : ex))]);
  };

  const value = {
    exercises,
    createExercise,
    fetchExercises,
    deleteExercise,
    deleteSet,
    addSet,
  };

  return (
    <ExerciseContext.Provider value={value}>
      {children}
    </ExerciseContext.Provider>
  );
}

export { Provider };
export default ExerciseContext;
