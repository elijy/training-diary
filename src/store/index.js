import { configureStore } from "@reduxjs/toolkit";
import exercisesReducer from "./slices/exercisesSlice";

export default configureStore({
  reducer: {
    exercises: exercisesReducer,
  },
});

export * from "./thunks/fetchExercises";
export * from "./thunks/createExercise";
export * from "./thunks/updateExercise";
export * from "./thunks/deleteExercise";
export * from "./thunks/fetchSets";
export * from "./thunks/createSet";
export * from "./thunks/deleteSet";
