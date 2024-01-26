import { useCallback, useReducer, createContext } from "react";
import axios from "axios";
import {
  exercisesReducer,
  SET_SELECTED_EXERCISE,
  FETCH_EXERCISES,
  ADD_EXERCISE,
  DELETE_EXERCISE,
  UPDATE_SETS,
} from "../reducers/exercises";

const ExerciseContext = createContext();

function Provider({ children }) {
  const [state, dispatch] = useReducer(exercisesReducer, {
    selectedExercise: null,
    exercises: [],
  });

  const fetchExercises = useCallback(async () => {
    const { data } = await axios.get("http://localhost:3001/exercises");

    dispatch({
      type: FETCH_EXERCISES,
      payload: data,
    });
  }, []);

  const setSelectedExercise = (exercise) => {
    dispatch({
      type: SET_SELECTED_EXERCISE,
      payload: exercise,
    });
  };

  const createExercise = async (exercise) => {
    const { data } = await axios.post("http://localhost:3001/exercises", {
      name: exercise,
      sets: [],
    });

    dispatch({
      type: ADD_EXERCISE,
      payload: data,
    });
  };

  const deleteExercise = async (id) => {
    const { data } = await axios.delete(
      `http://localhost:3001/exercises/${id}`
    );

    dispatch({
      type: DELETE_EXERCISE,
      payload: data,
    });
  };

  const addSet = async (id, weight, reps) => {
    const exerciseToBeUpdated = state.exercises.find((ex) => ex.id === id);
    const { data } = await axios.put(`http://localhost:3001/exercises/${id}`, {
      ...exerciseToBeUpdated,
      sets: [...exerciseToBeUpdated.sets, { weight, reps }],
    });

    dispatch({
      type: UPDATE_SETS,
      payload: data,
    });
  };

  const deleteSet = async (id, index) => {
    const exerciseToBeUpdated = state.exercises.find((ex) => ex.id === id);
    const { data } = await axios.put(`http://localhost:3001/exercises/${id}`, {
      ...exerciseToBeUpdated,
      sets: [...exerciseToBeUpdated.sets.toSpliced(index, 1)],
    });

    dispatch({
      type: UPDATE_SETS,
      payload: data,
    });
  };

  const value = {
    exercises: state.exercises,
    selectedExercise: state.selectedExercise,
    fetchExercises,
    setSelectedExercise,
    createExercise,
    deleteExercise,
    addSet,
    deleteSet,
  };

  return (
    <ExerciseContext.Provider value={value}>
      {children}
    </ExerciseContext.Provider>
  );
}

export { Provider };
export default ExerciseContext;
