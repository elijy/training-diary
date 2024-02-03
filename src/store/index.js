import { configureStore } from "@reduxjs/toolkit";
import { exercisesApi } from "./apis/exercisesApi";
import { setsApi } from "./apis/setsApi";

export default configureStore({
  reducer: {
    [exercisesApi.reducerPath]: exercisesApi.reducer,
    [setsApi.reducerPath]: setsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(exercisesApi.middleware)
      .concat(setsApi.middleware),
});

export * from "./thunks/fetchExercises";
export * from "./thunks/createExercise";
export * from "./thunks/updateExercise";
export * from "./thunks/deleteExercise";
export * from "./thunks/fetchSets";
export * from "./thunks/createSet";
export * from "./thunks/deleteSet";
