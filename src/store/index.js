import { configureStore } from "@reduxjs/toolkit";
import exercisesReducer from "./slices/exercisesSlice";

export default configureStore({
  reducer: {
    exercises: exercisesReducer,
  },
});

export * from "./thunks/fetchExercises";
export * from "./thunks/createExercise";
